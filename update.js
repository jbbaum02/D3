function updateNodes() {
	var node = nodesSvg.selectAll("g.node")
		.data(processes, function(d,i) {
			return d.PID;
		});
	
	var enter=node.enter().append("g")
		.attr("class", function(d) { return d.children ? "node" : "leaf node"; })
		.attr("transform", function(d) {
			return "translate(" + d.x + "," + d.y + ")";
		});
		
	enter.append("circle")
		.attr("id", function(d) { return "n_" + d.PID;})
		.attr("r", function(d) { return d.r; })
		.style("fill-opacity", function (d) { return ((d.depth + 1)*0.13);})
		.style("stroke", function(d) {
			return ((d.PTYPE=='proc') ? procColor : (d.PTYPE=='kproc') ? kprocColor : otherColor);
		})
		.style("stroke-opacity", function(d) { return (d.depth < 10) ? 0 : 0.2})
		.style("fill", function(d) {
			return ((d.PTYPE=='proc') ? procColor : (d.PTYPE=='kproc') ? kprocColor : otherColor);
		});
	
	if (dataset != "android"){
		enter.append("text")
			.attr("dx", function(d){return -5})
			//.text(function(d){return d.PID})
			.attr("font-size", "8px");
	}
	
	var g=enter.append("g")
        .attr("id", function(d) { return "c_" + d.PID; })
        .style("opacity",0);

        g.append("circle")
        .attr("r", function(d) { return d.r+2; })
        .style("fill-opacity", 0)
        .style("stroke", "#FFF")
        .style("stroke-width",2.5)
        .style("stroke-opacity",.7);

        g.append("circle")
        .attr("r", function(d) { return d.r; })
        .style("fill-opacity", 0)
        .style("stroke", "#000")
        .style("stroke-width",1.5)
        .style("stroke-opacity",1)
		.on("click", function(d) { onMouseClick(d, "PROC");})
        .on("mouseover", function (d) { onMouseOver(d,"PROC"); })
        .on("mouseout", function (d) {onMouseOut(d,"PROC"); });

    node.exit().remove().transition(500).style("opacity",0);

}

function highlightNode(d,on) {

    var opacity=((on==true) ? .6 : .1);

        var circ=d3.select(document.getElementById("c_" + d.PID));
        circ.transition((on==true) ? 150:550)
        .style("opacity",((on==true) ?1 :0));
		
		tempNode = d;
}

function mergeWithFirstEqualZero(first, second){
	var secondSet = d3.set(); second.forEach(function(d) { secondSet.add(d.label); });

	var onlyFirst = first
		.filter(function(d){ return !secondSet.has(d.label) })
		.map(function(d) { return {label: d.label, value: 0}; });
	return d3.merge([ second, onlyFirst ])
		.sort(function(a,b) {
			return d3.ascending(a.label, b.label);
		});
}

function update(data) {
	centroids = [];
	var duration = 750;
	var data0 = svg.select(".slices").selectAll("path.slice")
		.data().map(function(d) { return d.data });
	if (data0.length == 0) data0 = data;
	var was = mergeWithFirstEqualZero(data, data0);
	var is = mergeWithFirstEqualZero(data0, data);
	
	/* ------- SLICE ARCS -------*/

	var slice = svg.select(".slices").selectAll("path.slice")
		.data(pie(was), key);

	slice.enter()
		.insert("path")
		.attr("class", "slice")
		.style("fill", function(d) { return d.data.color; })
		.each(function(d) {
			this._current = d;
		})
		.on("mouseover", function (d) { onMouseOver(d,"RESOURCE"); })
		.on("mouseout", function (d) { onMouseOut(d,"RESOURCE"); })
		.on("click", function(d) { onMouseClick(d, "RESOURCE");})
		.on("mousewheel.zoom", function(d) { onMouseWheelZoom(d, "RESOURCE");});

	slice = svg.select(".slices").selectAll("path.slice")
		.data(pie(is), key);

	slice		
		.transition().duration(duration)
		.style("fill", function(d) { return d.data.color; })
		.attrTween("d", function(d) {
			var interpolate = d3.interpolate(this._current, d);
			var _this = this;
			return function(t) {
				_this._current = interpolate(t);
				return arc(_this._current);
			};
		});

	slice = svg.select(".slices").selectAll("path.slice")
		.data(pie(data), key);

	slice
		.exit().transition().delay(duration).duration(0)
		.remove();

	/* ------- TEXT LABELS -------*/

	var text = svg.select(".labels").selectAll("text")
		.data(pie(was), key);

	text.enter()
		.append("text")
		.attr("dy", ".15em")
		.attr("font-size", "10px")
		.style("opacity", 0)
		.text(function(d) {
			if (d.data.label.length > 33){
				return "..." + String(d.data.label).substr((d.data.label.length - 33),d.data.label.length);
			}
			else {			
			return d.data.label;
			}
		})
		.each(function(d) {
			this._current = d;
		});
	
	function midAngle(d){
		return d.startAngle + (d.endAngle - d.startAngle)/2;
	}

	text = svg.select(".labels").selectAll("text")
		.data(pie(is), key);
	
	text.transition().duration(duration)
		.style("opacity", function(d) {
			return d.data.value == 0 ? 0 : 1;
		})
		.attrTween("transform", function(d) {
			var interpolate = d3.interpolate(this._current, d);
			var _this = this;
			return function(t) {
				var d2 = interpolate(t);
				_this._current = d2;
				var pos = outerArc.centroid(d2);
				pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
				return "translate("+ pos +")";
			};
		})
		.styleTween("text-anchor", function(d){
			var interpolate = d3.interpolate(this._current, d);
			return function(t) {
				var d2 = interpolate(t);
				return midAngle(d2) < Math.PI ? "start":"end";
			};
		});
	
	text = svg.select(".labels").selectAll("text")
		.data(pie(data), key);

	text
		.exit().transition().delay(duration)
		.remove();

	/* ------- SLICE TO TEXT POLYLINES -------*/

	var polyline = svg.select(".lines").selectAll("polyline")
		.data(pie(was), key);
	
	polyline.enter()
		.append("polyline")
		.style("opacity", 0)
		.each(function(d) {
			this._current = d;
		});

	polyline = svg.select(".lines").selectAll("polyline")
		.data(pie(is), key);
	
	polyline.transition().duration(duration)
		.style("opacity", function(d) {
			return d.data.value == 0 ? 0 : .5;
		})
		.attrTween("points", function(d){
			this._current = this._current;
			var interpolate = d3.interpolate(this._current, d);
			var _this = this;
			return function(t) {
				var d2 = interpolate(t);
				_this._current = d2;
				var pos = outerArc.centroid(d2);
				pos[0] = radius * 0.85 * (midAngle(d2) < Math.PI ? 1 : -1);
				return [arc.centroid(d2), outerArc.centroid(d2), pos];
			};			
		});
	
	polyline = svg.select(".lines").selectAll("polyline")
		.data(pie(data), key);
	
	
	centroids = pie(data);

	for (var i=0; i < centroids.length; i++){
		centroids[i] = arc.centroid(centroids[i]);
		centroids[i].x = centroids[i][0];
		centroids[i].y = centroids[i][1];
		centroids[i].color = data[i].color;
	}
	
	polyline
		.exit().transition().delay(duration)
		.remove();

};