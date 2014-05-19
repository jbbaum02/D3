// Button Actions on Click
d3.select(".FetchData")
	.on("click", function(){
		initialFetch();
		var pathGraph = linksSvg.selectAll("path").style("stroke-opacity", 0);
		linkList = [];
		showWhitelist = false;
	});
	
d3.select(".Initialize")
	.on("click", function(){
		setupHierarchy();
		initialize();
		updateNodes();
			header_NAME.text("");
			header_PID.text("Available Options:");
			header_PPID.text("1)   Select a resource arc to expand - use mousewheel to reduce");
			header_USER.text("2)   Select a Process Bubble to filter resources for that process");
			header_TYPE.text("3)   Filter entire system for unique resources by clicking button");
			header_STATUS.text("4)   Select different dataset, fetch, and initialize");	
			if (dataset == "android"){
				header_DATASET.text("ANDROID DATASET");
			}
			else if (dataset == "xpIE"){
				header_DATASET.text("WINDOWS XP IE DATASET");
			}
			else if (dataset == "xpChrome"){
				header_DATASET.text("WINDOWS XP CHROME DATASET");
			}
			else if (dataset == "xpFirefox"){
				header_DATASET.text("WINDOWS XP FIREFOX DATASET");
			}
			else if (dataset == "xpFuto"){
				header_DATASET.text("WINDOWS XP MALWARE 1 DATASET");
			}
			else if (dataset == "xpSolitaire"){
				header_DATASET.text("WINDOWS XP SOLITAIRE DATASET");
			}
			else if (dataset == "xpRAT"){
				header_DATASET.text("WINDOWS XP MALWARE 2 DATASET");
			}
			else if (dataset == "xpRAT2"){
				header_DATASET.text("WINDOWS XP MALWARE 3 DATASET");
			}
			else if (dataset == "WIN7"){
				header_DATASET.text("WINDOWS 7 DATASET");
			}
		update(getResources(-1));
	});
	
d3.select(".SystemView")
	.on("click", function(){
		for (var i=0; i < nodes.length; i++){
			highlightNode(nodes[i], false);
		}
		setupHierarchy();
		initialize();
		updateNodes();
			header_SUMMARY.text("SYSTEM VIEW");
			header_NAME.text("");
			header_PID.text("Available Options:");
			header_PPID.text("1)   Select a resource arc to expand - use mousewheel to reduce");
			header_USER.text("2)   Select a Process Bubble to filter resources for that process");
			header_TYPE.text("3)   Filter entire system for unique resources by clicking button");
			header_STATUS.text("4)   Select different dataset, fetch, and initialize");	
			if (dataset == "android"){
				header_DATASET.text("ANDROID DATASET");
			}
			else if (dataset == "xpIE"){
				header_DATASET.text("WINDOWS XP IE DATASET");
			}
			else if (dataset == "xpChrome"){
				header_DATASET.text("WINDOWS XP CHROME DATASET");
			}
			else if (dataset == "xpFirefox"){
				header_DATASET.text("WINDOWS XP FIREFOX DATASET");
			}
			else if (dataset == "xpFuto"){
				header_DATASET.text("WINDOWS XP MALWARE 1 DATASET");
			}
			else if (dataset == "xpSolitaire"){
				header_DATASET.text("WINDOWS XP SOLITAIRE DATASET");
			}
			else if (dataset == "xpRAT"){
				header_DATASET.text("WINDOWS XP MALWARE 2 DATASET");
			}
			else if (dataset == "xpRAT2"){
				header_DATASET.text("WINDOWS XP MALWARE 3 DATASET");
			}
			else if (dataset == "WIN7"){
				header_DATASET.text("WINDOWS 7 DATASET");
			}			
		update(getResources(-1));
	});
	
d3.select(".Unique")
	.on("click", function(){
		update(getUniqueResources());
			header_SUMMARY.text("FILTERED FOR UNIQUE RESOURCES");
			header_NAME.text("");
			header_PID.text("Listed Resources:");
			header_PPID.text("");
			header_USER.text("1) Connections (Open Ports and Sockets)");
			header_TYPE.text("2)   Open User Files");
			header_STATUS.text("3)   Loaded Modules (executables only)");
			
		for (var i=0; i < linkList.length; i++){
			highlightNode(nodes[linkList[i].nodeNum], false);
		}
		var pathGraph = linksSvg.selectAll("path").style("stroke-opacity", 0);
		linkList = [];
	});
	
d3.select(".ToggleLinks")
	.on("click", function(){
		links = !links;
		if (links == true){
			updateLinks();
		}
		else {
			for (var i=0; i < linkList.length; i++){
				highlightNode(nodes[linkList[i].nodeNum], false);
			}
			var pathGraph = linksSvg.selectAll("path").style("stroke-opacity", 0);
		}
		
		//d3.selectAll("path.link").style("opacity", function(d){ return (links == true) ? 0.5 : 0});
	});

d3.select(".ApplyWhitelist")
	.on("click", function(){
		showWhitelist = !showWhitelist;
		applyWhitelist();
	
	
	});

function updateLinks(){
	var pathFunction = d3.svg.line()
							.x(function(d) { return d.x ; })
							.y(function(d) { return d.y ; })
							.interpolate("basis");
							
	if (linkList.length > 0){
		for (var i=0; i < linkList.length; i++){
			var pathGraph = linksSvg.append("path")
								.attr("d", pathFunction(linkList[i]))
								.attr("stroke", function(d){ return linkList[i].color;})
								.attr("stroke-width", 1.5)
								.attr("fill", "none")
								.style("stroke-opacity", 1);
			highlightNode(nodes[linkList[i].nodeNum], true);
		}
	}
}

function applyWhitelist(){

	whiteHandles = [],
	whiteSockets = [].
	whitePorts = [],
	whiteProcesses = [],
	whiteServices = [],
	whiteModules = [],
	newHandles = [],
	newSockets = [],
	newPorts = [],
	newProcesses = [],
	newServices = [],
	newModules = [];

	if (whitelist == "xpIE"){
		d3.csv("IE/Handles_IE.csv", function(data) {
			whiteHandles = data.map(function(d) { return d; });
		});
	
		d3.csv("IE/Sockets_IE.csv", function(data) {
			whiteSockets = data.map(function(d) { return d; });
		});
	
		d3.csv("IE/Connections_IE.csv", function(data) {
			whitePorts = data.map(function(d) { return d; });
		});

		d3.csv("IE/Process_List_IE.csv", function(data) {
			whiteProcesses = data.map(function(d) { return d; });
		});
		
		d3.csv("IE/Services_IE.csv", function(data) {
			whiteServices = data.map(function(d) { return d; });
		});
		
		d3.csv("IE/Modules_IE.csv", function(data) {
			whiteModules = data.map(function(d) { return d; });
		});
	}	
	else if (whitelist == "xpChrome"){
		d3.csv("Chrome/Handles_Chrome.csv", function(data) {
			whiteHandles = data.map(function(d) { return d; });
		});
	
		d3.csv("Chrome/Sockets_Chrome.csv", function(data) {
			whiteSockets = data.map(function(d) { return d; });
		});
	
		d3.csv("Chrome/Connections_Chrome.csv", function(data) {
			whitePorts = data.map(function(d) { return d; });
		});

		d3.csv("Chrome/Process_List_Chrome.csv", function(data) {
			whiteProcesses = data.map(function(d) { return d; });
		});
		
		d3.csv("Chrome/Services_Chrome.csv", function(data) {
			whiteServices = data.map(function(d) { return d; });
		});
		
		d3.csv("Chrome/Modules_Chrome.csv", function(data) {
			whiteModules = data.map(function(d) { return d; });
		});
	}
	else if (whitelist == "xpFirefox"){
		d3.csv("Firefox/Handles_Firefox.csv", function(data) {
			whiteHandles = data.map(function(d) { return d; });
		});
	
		d3.csv("Firefox/Sockets_Firefox.csv", function(data) {
			whiteSockets = data.map(function(d) { return d; });
		});
	
		d3.csv("Firefox/Connections_Firefox.csv", function(data) {
			whitePorts = data.map(function(d) { return d; });
		});

		d3.csv("Firefox/Process_List_Firefox.csv", function(data) {
			whiteProcesses = data.map(function(d) { return d; });
		});
		
		d3.csv("Firefox/Services_Firefox.csv", function(data) {
			whiteServices = data.map(function(d) { return d; });
		});
		
		d3.csv("Firefox/Modules_Firefox.csv", function(data) {
			whiteModules = data.map(function(d) { return d; });
		});
	}
	else if (whitelist == "xpFuto"){
		d3.csv("FUTo/Handles_FUTo.csv", function(data) {
			whiteHandles = data.map(function(d) { return d; });
		});
	
		d3.csv("FUTo/Sockets_FUTo.csv", function(data) {
			whiteSockets = data.map(function(d) { return d; });
		});
	
		d3.csv("FUTo/Connections_FUTo.csv", function(data) {
			whitePorts = data.map(function(d) { return d; });
		});

		d3.csv("FUTo/Process_List_FUTo.csv", function(data) {
			whiteProcesses = data.map(function(d) { return d; });
		});	
		
		d3.csv("FUTo/Services_FUTo.csv", function(data) {
			whiteServices = data.map(function(d) { return d; });
		});
		
		d3.csv("FUTo/Modules_FUTo.csv", function(data) {
			whiteModules = data.map(function(d) { return d; });
		});
	}
	else if (whitelist == "xpSolitaire"){
		d3.csv("Solitaire/Handles_Solitaire.csv", function(data) {
			whiteHandles = data.map(function(d) { return d; });
		});
	
		d3.csv("Solitaire/Sockets_Solitaire.csv", function(data) {
			whiteSockets = data.map(function(d) { return d; });
		});
	
		d3.csv("Solitaire/Connections_Solitaire.csv", function(data) {
			whitePorts = data.map(function(d) { return d; });
		});

		d3.csv("Solitaire/Process_List_Solitaire.csv", function(data) {
			whiteProcesses = data.map(function(d) { return d; });
		});
		
		d3.csv("Solitaire/Services_Solitaire.csv", function(data) {
			whiteServices = data.map(function(d) { return d; });
		});
		
		d3.csv("Solitaire/Modules_Solitaire.csv", function(data) {
			whiteModules = data.map(function(d) { return d; });
		});
	}
	else if (whitelist == "xpRAT"){
		d3.csv("RAT/Handles_RAT.csv", function(data) {
			whiteHandles = data.map(function(d) { return d; });
		});
	
		d3.csv("RAT/Sockets_RAT.csv", function(data) {
			whiteSockets = data.map(function(d) { return d; });
		});
	
		d3.csv("RAT/Connections_RAT.csv", function(data) {
			whitePorts = data.map(function(d) { return d; });
		});

		d3.csv("RAT/Process_List_RAT.csv", function(data) {
			whiteProcesses = data.map(function(d) { return d; });
		});
		
		d3.csv("RAT/Services_RAT.csv", function(data) {
			whiteServices = data.map(function(d) { return d; });
		});
		
		d3.csv("RAT/Modules_RAT.csv", function(data) {
			whiteModules = data.map(function(d) { return d; });
		});
	}
	else if (whitelist == "xpRAT2"){
		d3.csv("RAT2/Handles_RAT2.csv", function(data) {
			whiteHandles = data.map(function(d) { return d; });
		});
	
		d3.csv("RAT2/Sockets_RAT2.csv", function(data) {
			whiteSockets = data.map(function(d) { return d; });
		});
	
		d3.csv("RAT2/Connections_RAT2.csv", function(data) {
			whitePorts = data.map(function(d) { return d; });
		});

		d3.csv("RAT2/Process_List_RAT2.csv", function(data) {
			whiteProcesses = data.map(function(d) { return d; });
		});
		
		d3.csv("RAT2/Services_RAT2.csv", function(data) {
			whiteServices = data.map(function(d) { return d; });
		});
		
		d3.csv("RAT2/Modules_RAT2.csv", function(data) {
			whiteModules = data.map(function(d) { return d; });
		});
	}
	
	whitelistedProcesses[0] = { PID: "180" };
	whitelistedProcesses[1] = { PID: "4" };
	whitelistedProcesses[2] = { PID: "0" };
	
	if (showWhitelist == true){
		for (var i=0; i < processes.length; i++){
			for (var j=0; j < whitelistedProcesses.length; j++){			
				if (processes[i].PID == whitelistedProcesses[j].PID){
					console.log("Match Found");
					var circ=d3.select(document.getElementById("n_" + processes[i].PID));
					circ.style("fill-opacity", function (d) { return ((d.depth + 1)*0.3);})
				}
				else {
					var circ=d3.select(document.getElementById("n_" + processes[i].PID));
					circ.style("fill-opacity", 0.05);
				}
			}
		}
	}
	else {
		for (var i=0; i < processes.length; i++){
			var circ=d3.select(document.getElementById("n_" + processes[i].PID));
			circ.style("fill-opacity", function (d) { return ((d.depth + 1)*0.13);})
		}	
	}	
}