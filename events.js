function onMouseClick(d,type) {
	if (type=="PROC") {
        procClicked = !procClicked;
		
		for (var i=0; i < nodes.length; i++){
			highlightNode(nodes[i], false);
		}
		
		var pathGraph = linksSvg.selectAll("path").style("stroke-opacity", 0);
		linkList = [];
		links = false;
		
		highlightNode(tempNode, false);
		highlightNode(d, true);
		
		tempResources = getResources(Number(d.PID));		
		update(tempResources);
		
		for (var i=0; i < tempResources.length; i++){
			for (var j=0; j < nodes.length; j++){	
				if (tempResources[i].PID == nodes[j].PID){
					var tempLink = [];
					tempLink[0] = [{ x: centroids[i].x, y: centroids[i].y }, { x: (nodes[j].x - 360), y: (nodes[j].y - 360) }];
					tempLink[0].nodeNum = j;
					if (centroids[i].color == fileColor){
						tempLink[0].color = "#0101DF";
					}
					else if (centroids[i].color == portColor){
						tempLink[0].color = "#886A08";
					}
					else if (centroids[i].color == socketColor){
						tempLink[0].color = "#088A29";
					}
					else {
						tempLink[0].color = centroids[i].color;
					}
					linkList.push(tempLink[0]);
				}
			}		
		}
		
		if (dataset == "android"){
			header_SUMMARY.text("PROCESS SUMMARY:");
			header_NAME.text("Name:     " + d.Name);
			header_PID.text("PID:     " + d.PID);
			header_PPID.text("PPID:     " + d.PPID);
			header_USER.text("UID:     " + d.User);
			
			if (d.PTYPE == "proc") {
				header_TYPE.text("Type:     Process");
			}
			else if (d.PTYPE == "kproc") {
				header_TYPE.text("Type:     Kernel Thread");
			}
			else {
				header_TYPE.text("Type:     undefined");
			}
			
			if (d.S == "S") {
				header_STATUS.text("Status:     Sleeping");
			}
			else if (d.S == "D") {
				header_STATUS.text("Status:     Uninterruptible Sleep");
			}
			else if (d.S == "R") {
				header_STATUS.text("Status:     Running");
			}
			else if (d.S == "Z") {
				header_STATUS.text("Status:     Defunct/Zombie");
			}
			else if (d.S == "T") {
				header_STATUS.text("Status:     Stopped");
			}
			
			header_VSIZE.text("VSIZE:     " + d.VSIZE + " k");
			header_RSS.text("RSS:     " + d.RSS + " k");
			header_WCHAN.text("WCHAN:     0x" + d.WCHAN);
			header_PC.text("PC:     0x" + d.PC);
		}
		else {
			header_SUMMARY.text("PROCESS SUMMARY:");
			header_NAME.text("Name:     " + d.Name);
			header_PID.text("PID:     " + d.PID);
			header_PPID.text("PPID:     " + d.PPID);
			header_USER.text("Threads:     " + d.Thds);
			header_TYPE.text("Handles:     " + d.Hnds);
			header_STATUS.text("Start Time:     " + d.Start);
		}
	}
	else {
		
		var matchingProcs = [];
		
		if (dataset == "android"){
		
			//console.log(d);
		}
		else {
		
			console.log(midAngle(d));
		
			if(d.data.label.substring(0,2) == "No"){
						
			}
			else {
				if (d.data.type == "File"){
					if (d.data.label == "Files"){
						if (d.data.list == true){
							rlist = pFilesList;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);
						}
						else {
							rlist = pFilesTemp;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);
						}						
					}
					else if (d.data.label == "Files List 1"){
						rlist = pFilesTemp1;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Files List 2"){
						rlist = pFilesTemp2;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Files List 3"){
						rlist = pFilesTemp3;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Files List 4"){
						rlist = pFilesTemp4;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Files List 5"){
						rlist = pFilesTemp5;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Files List 6"){
						rlist = pFilesTemp6;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Files List 7"){
						rlist = pFilesTemp7;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Files List 8"){
						rlist = pFilesTemp8;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Files List 9"){
						rlist = pFilesTemp9;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Files List 10"){
						rlist = pFilesTemp10;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "C:\\DOCUME~1"){
						rlist = DOCUME;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "C:\\Documents and Settings"){
						rlist = documents;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "C:\\Program Files"){
						rlist = programFiles;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "C:\\WINDOWS"){
						rlist = windows;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Other Files"){
						rlist = others;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "\\Device"){
						rlist = device;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "\\Device\\NamedPipe"){
						rlist = namedPipe;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else {
						for (var i=0; i < handles.length; i++){
							if (d.data.hasOwnProperty("Details")){
								if (d.data.Details == handles[i].Details){
									matchingProcs.push(handles[i].PID);
								}
							}
							else {
								if (d.data.label == handles[i].Details){
									matchingProcs.push(handles[i].PID);
								}
							}
						}
					}				
				}
				else if (d.data.type == "Key"){
					if (d.data.label == "Keys"){
						if (d.data.list == true){
							rlist = pKeysList;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);						
						}
						else {
							rlist = pKeysTemp;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);
						}
					}
					else if (d.data.label == "Keys List 1"){
						rlist = pKeysTemp1;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Keys List 2"){
						rlist = pKeysTemp2;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Keys List 3"){
						rlist = pKeysTemp3;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Keys List 4"){
						rlist = pKeysTemp4;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Keys List 5"){
						rlist = pKeysTemp5;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Keys List 6"){
						rlist = pKeysTemp6;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Keys List 7"){
						rlist = pKeysTemp7;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if (d.data.label == "Keys List 8"){
						rlist = pKeysTemp8;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else {
						for (var i=0; i < handles.length; i++){
							if (d.data.label == handles[i].Details){
								matchingProcs.push(handles[i].PID);
							}
						}
					}					
				}
				else if (d.data.type == "Port"){
					if (d.data.label == "Ports"){
						if (d.data.list == true){
							rlist = pPortsList;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);
						}
						else {
							rlist = pPortsTemp;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);
						}
					}
					else if ((d.data.label == "Ports List 1") | (d.data.label2 == "Ports List 1")){
						rlist = pPortsTemp1;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Ports List 2") | (d.data.label2 == "Ports List 2")){
						rlist = pPortsTemp2;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else {
						for (var i=0; i < ports.length; i++){
							if (d.data.label == ports[i].portNum){
								matchingProcs.push(ports[i].PID);
							}
						}
					}				
				}
				else if (d.data.type == "Socket"){
					if (d.data.label == "Sockets"){
						if (d.data.list == true){
							rlist = pSocketsList;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);
						}
						else {
							rlist = pSocketsTemp;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);
						}
					}
					else if ((d.data.label == "Sockets List 1") | (d.data.label2 == "Sockets List 1")){
						rlist = pSocketsTemp1;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Sockets List 2") | (d.data.label2 == "Sockets List 2")){
						rlist = pSocketsTemp2;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else {
						for (var i=0; i < sockets.length; i++){
							if (d.data.label == sockets[i].Name){
								matchingProcs.push(sockets[i].PID);
							}
						}
					}					
				}
				else if (d.data.type == "Service"){
					if (d.data.label == "Services"){
						rlist = pServicesTemp;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);
					}
					else {
						for (var i=0; i < services.length; i++){
							if (d.data.label == services[i].Name){
								matchingProcs.push(services[i].PID);
							}
						}
					}					
				}				
				else if (d.data.type == "Module"){
					if ((d.data.label == "Loaded Modules") | (d.data.label == "Loaded (.exe) Modules")){
						if (d.data.list == true){
							rlist = pModulesList;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);
						}
						else {
							rlist = pModulesTemp;
							rlist.forEach(function(d) {
								d.value = (1 / (rlist.length));
							});
							update(rlist);
							matchingProcs.push(d.data.PID);
						}
					}
					else if ((d.data.label == "Modules List 1") | (d.data.label2 == "Modules List 1")){
						rlist = pModulesTemp1;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 2") | (d.data.label2 == "Modules List 2")){
						rlist = pModulesTemp2;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 3") | (d.data.label2 == "Modules List 3")){
						rlist = pModulesTemp3;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 4") | (d.data.label2 == "Modules List 4")){
						rlist = pModulesTemp4;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 5") | (d.data.label2 == "Modules List 5")){
						rlist = pModulesTemp5;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 6") | (d.data.label2 == "Modules List 6")){
						rlist = pModulesTemp6;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 7") | (d.data.label2 == "Modules List 7")){
						rlist = pModulesTemp7;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 8") | (d.data.label2 == "Modules List 8")){
						rlist = pModulesTemp8;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 9") | (d.data.label2 == "Modules List 9")){
						rlist = pModulesTemp9;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 10") | (d.data.label2 == "Modules List 10")){
						rlist = pModulesTemp10;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 11") | (d.data.label2 == "Modules List 11")){
						rlist = pModulesTemp11;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 12") | (d.data.label2 == "Modules List 12")){
						rlist = pModulesTemp12;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 13") | (d.data.label2 == "Modules List 13")){
						rlist = pModulesTemp13;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 14") | (d.data.label2 == "Modules List 14")){
						rlist = pModulesTemp14;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 15") | (d.data.label2 == "Modules List 15")){
						rlist = pModulesTemp15;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 16") | (d.data.label2 == "Modules List 16")){
						rlist = pModulesTemp16;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 17") | (d.data.label2 == "Modules List 17")){
						rlist = pModulesTemp17;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 18") | (d.data.label2 == "Modules List 18")){
						rlist = pModulesTemp18;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 19") | (d.data.label2 == "Modules List 19")){
						rlist = pModulesTemp19;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 20") | (d.data.label2 == "Modules List 20")){
						rlist = pModulesTemp20;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 21") | (d.data.label2 == "Modules List 21")){
						rlist = pModulesTemp21;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 22") | (d.data.label2 == "Modules List 22")){
						rlist = pModulesTemp22;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 23") | (d.data.label2 == "Modules List 23")){
						rlist = pModulesTemp23;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 24") | (d.data.label2 == "Modules List 24")){
						rlist = pModulesTemp24;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 25") | (d.data.label2 == "Modules List 25")){
						rlist = pModulesTemp25;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 26") | (d.data.label2 == "Modules List 26")){
						rlist = pModulesTemp26;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 27") | (d.data.label2 == "Modules List 27")){
						rlist = pModulesTemp27;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 28") | (d.data.label2 == "Modules List 28")){
						rlist = pModulesTemp28;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 29") | (d.data.label2 == "Modules List 29")){
						rlist = pModulesTemp29;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 30") | (d.data.label2 == "Modules List 30")){
						rlist = pModulesTemp30;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 31") | (d.data.label2 == "Modules List 31")){
						rlist = pModulesTemp31;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 32") | (d.data.label2 == "Modules List 32")){
						rlist = pModulesTemp32;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 33") | (d.data.label2 == "Modules List 33")){
						rlist = pModulesTemp33;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 34") | (d.data.label2 == "Modules List 34")){
						rlist = pModulesTemp34;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}
					else if ((d.data.label == "Modules List 35") | (d.data.label2 == "Modules List 35")){
						rlist = pModulesTemp35;
						rlist.forEach(function(d) {
							d.value = (1 / (rlist.length));
						});
						update(rlist);
						matchingProcs.push(d.data.PID);					
					}					
					else {
						for (var i=0; i < modules.length; i++){
							if (d.data.label == modules[i].Name){
								matchingProcs.push(modules[i].PID);
							}
						}
					}	
				}
				
				//Links
				linkList = [];
				for (var i=0; i < rlist.length; i++){
					for (var j=0; j < nodes.length; j++){	
						if (rlist[i].PID == nodes[j].PID){
							var tempLink = [];
							tempLink[0] = [{ x: centroids[i].x, y: centroids[i].y }, { x: (nodes[j].x - 360), y: (nodes[j].y - 360) }];
							tempLink[0].nodeNum = j;
							tempLink[0].color = centroids[i].color;
							
							if (centroids[i].color == fileColor){
								tempLink[0].color = "#0101DF";
							}
							else if (centroids[i].color == portColor){
								tempLink[0].color = "#886A08";
							}
							else {
								tempLink[0].color = centroids[i].color;
							}
							linkList.push(tempLink[0]);
						}
					}		
				}
				
				var uniqueArray = matchingProcs.filter(function(elem, pos) {
					return matchingProcs.indexOf(elem) == pos;
				}); 
				
				matchingProcs = uniqueArray;
				
				listPID.sort(compareNumbers);
							
				console.log(matchingProcs);
				
				for (var i=0; i < nodes.length; i++){
					highlightNode(nodes[i], false);
				}
				for (var i=0; i< matchingProcs.length; i++){
					for (var j=0; j < nodes.length; j++){
						if (nodes[j].PID == matchingProcs[i]){
							highlightNode(nodes[j], true);
						}
					}
				}
			}
		}
	}
}

function onMouseWheelZoom(d,type){

	if (type=="PROC"){
	
	}
	else {		
		if (d.data.overallList == true){
			for (var i=0; i < nodes.length; i++){
				highlightNode(nodes[i], false);
			}
		}
		else {
			for (var i=0; i < nodes.length; i++){
				if (nodes[i].PID == d.data.PID){
					highlightNode(nodes[i], true);
				}
				else {
					highlightNode(nodes[i], false);
				}
			}
		}
		for (var i=0; i < linkList.length; i++){
				highlightNode(nodes[linkList[i].nodeNum], false);
			}
		var pathGraph = linksSvg.selectAll("path").style("stroke-opacity", 0);
		linkList = [];
		links = false;
		
		update(tempResources);
		
	}
}




function onMouseOver(d,type) {
    if (type=="PROC") {

        toolTip.transition()
            .duration(200)
            .style("opacity", ".9");

        if (dataset == "android"){
			header1.text("Process");
				header.text(d.Name);
				toolTip.style("left", (d3.event.pageX+15) + "px")
					.style("top", (d3.event.pageY-75) + "px")
					.style("height","40px")
					.style("width","400px");
		}
		else {
			header1.text("Process");
			header.text(d.Name);
			toolTip.style("left", (d3.event.pageX+15) + "px")
				.style("top", (d3.event.pageY-75) + "px")
				.style("height","40px")
				.style("width","100px");
		}
    }
    else if (type=="RESOURCE") {
	
        toolTip.transition()
            .duration(200)
            .style("opacity", ".9");

        header1.text(d.data.type);
        header.text(d.data.label);
        toolTip.style("left", (d3.event.pageX+15) + "px")
            .style("top", (d3.event.pageY-75) + "px")
            .style("height","60px")
			.style("width","500px");
    }
}

function onMouseOut(d,type) {
    if (type=="PROC") {

    }
    else if (type=="RESOURCE") {

    }


    toolTip.transition()									
        .duration(500)									
        .style("opacity", "0");							
}