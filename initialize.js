function onStart(){
	rlist = [];
	rlist[0] = { label: "Files", color: fileColor, type: "File" };
	rlist[1] = { label: "Keys", color: keyColor, type: "File" };
	rlist[2] = { label: "Modules", color: moduleColor, type: "File" };
	rlist[3] = { label: "Services", color: serviceColor, type: "Service" };
	rlist[4] = { label: "Ports", color: portColor, type: "Port" };
	rlist[5] = { label: "Sockets", color: socketColor, type: "Socket" };
	
	rlist.forEach(function(d) {
		d.value = (1 / (rlist.length));
		});
	
	update(rlist);
	
	header_SUMMARY.text("Instructions:");
	header_NAME.text("");
	header_PID.text("1) Select dataset from drop-down menu.");
	header_PPID.text("2) Click 'FetchData' button to load dataset.");
	header_USER.text("3) Click 'Initialize Data' to start visualization.");
	header_TYPE.text("");	
	header_STATUS.text("");		
	header_VSIZE.text("");
	header_RSS.text("");
	header_WCHAN.text("");
	header_PC.text("");
}

function initialFetch(){
	files = [];
	handles = [];
	ports = [];
	services = [];
	sockets = [];
	processes = [];
	nodes = [];
	updateNodes(nodes);
	
	if (dataset == "android"){
		d3.csv("Android/Files_Android.csv", function(data) {
			files = data.map(function(d) { return d; });
		});
	
		d3.csv("Android/Ports_Android.csv", function(data) {
			ports = data.map(function(d) { return d; });
		});
	
		d3.csv("Android/Services_Android.csv", function(data) {
			services = data.map(function(d) { return d; });
		});

		d3.csv("Android/Process_List_Android.csv", function(data) {
			processes = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpIE"){
		d3.csv("IE/Handles_IE.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	
		d3.csv("IE/Sockets_IE.csv", function(data) {
			sockets = data.map(function(d) { return d; });
		});
	
		d3.csv("IE/Connections_IE.csv", function(data) {
			ports = data.map(function(d) { return d; });
		});

		d3.csv("IE/Process_List_IE.csv", function(data) {
			processes = data.map(function(d) { return d; });
		});
		
		d3.csv("IE/Services_IE.csv", function(data) {
			services = data.map(function(d) { return d; });
		});
		
		d3.csv("IE/Modules_IE.csv", function(data) {
			modules = data.map(function(d) { return d; });
		});
	}	
	else if (dataset == "xpChrome"){
		d3.csv("Chrome/Handles_Chrome.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	
		d3.csv("Chrome/Sockets_Chrome.csv", function(data) {
			sockets = data.map(function(d) { return d; });
		});
	
		d3.csv("Chrome/Connections_Chrome.csv", function(data) {
			ports = data.map(function(d) { return d; });
		});

		d3.csv("Chrome/Process_List_Chrome.csv", function(data) {
			processes = data.map(function(d) { return d; });
		});
		
		d3.csv("Chrome/Services_Chrome.csv", function(data) {
			services = data.map(function(d) { return d; });
		});
		
		d3.csv("Chrome/Modules_Chrome.csv", function(data) {
			modules = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpFirefox"){
		d3.csv("Firefox/Handles_Firefox.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	
		d3.csv("Firefox/Sockets_Firefox.csv", function(data) {
			sockets = data.map(function(d) { return d; });
		});
	
		d3.csv("Firefox/Connections_Firefox.csv", function(data) {
			ports = data.map(function(d) { return d; });
		});

		d3.csv("Firefox/Process_List_Firefox.csv", function(data) {
			processes = data.map(function(d) { return d; });
		});
		
		d3.csv("Firefox/Services_Firefox.csv", function(data) {
			services = data.map(function(d) { return d; });
		});
		
		d3.csv("Firefox/Modules_Firefox.csv", function(data) {
			modules = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpFuto"){
		d3.csv("FUTo/Handles_FUTo.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	
		d3.csv("FUTo/Sockets_FUTo.csv", function(data) {
			sockets = data.map(function(d) { return d; });
		});
	
		d3.csv("FUTo/Connections_FUTo.csv", function(data) {
			ports = data.map(function(d) { return d; });
		});

		d3.csv("FUTo/Process_List_FUTo.csv", function(data) {
			processes = data.map(function(d) { return d; });
		});	
		
		d3.csv("FUTo/Services_FUTo.csv", function(data) {
			services = data.map(function(d) { return d; });
		});
		
		d3.csv("FUTo/Modules_FUTo.csv", function(data) {
			modules = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpSolitaire"){
		d3.csv("Solitaire/Handles_Solitaire.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	
		d3.csv("Solitaire/Sockets_Solitaire.csv", function(data) {
			sockets = data.map(function(d) { return d; });
		});
	
		d3.csv("Solitaire/Connections_Solitaire.csv", function(data) {
			ports = data.map(function(d) { return d; });
		});

		d3.csv("Solitaire/Process_List_Solitaire.csv", function(data) {
			processes = data.map(function(d) { return d; });
		});
		
		d3.csv("Solitaire/Services_Solitaire.csv", function(data) {
			services = data.map(function(d) { return d; });
		});
		
		d3.csv("Solitaire/Modules_Solitaire.csv", function(data) {
			modules = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpRAT"){
		d3.csv("RAT/Handles_RAT.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	
		d3.csv("RAT/Sockets_RAT.csv", function(data) {
			sockets = data.map(function(d) { return d; });
		});
	
		d3.csv("RAT/Connections_RAT.csv", function(data) {
			ports = data.map(function(d) { return d; });
		});

		d3.csv("RAT/Process_List_RAT.csv", function(data) {
			processes = data.map(function(d) { return d; });
		});
		
		d3.csv("RAT/Services_RAT.csv", function(data) {
			services = data.map(function(d) { return d; });
		});
		
		d3.csv("RAT/Modules_RAT.csv", function(data) {
			modules = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpRAT2"){
		d3.csv("RAT2/Handles_RAT2.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	
		d3.csv("RAT2/Sockets_RAT2.csv", function(data) {
			sockets = data.map(function(d) { return d; });
		});
	
		d3.csv("RAT2/Connections_RAT2.csv", function(data) {
			ports = data.map(function(d) { return d; });
		});

		d3.csv("RAT2/Process_List_RAT2.csv", function(data) {
			processes = data.map(function(d) { return d; });
		});
		
		d3.csv("RAT2/Services_RAT2.csv", function(data) {
			services = data.map(function(d) { return d; });
		});
		
		d3.csv("RAT2/Modules_RAT2.csv", function(data) {
			modules = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "WIN7"){
		d3.csv("WIN7/Handles_WIN7.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	
		d3.csv("WIN7/Sockets_WIN7.csv", function(data) {
			sockets = data.map(function(d) { return d; });
		});
	
		d3.csv("WIN7/Connections_WIN7.csv", function(data) {
			ports = data.map(function(d) { return d; });
		});

		d3.csv("WIN7/Process_List_WIN7.csv", function(data) {
			processes = data.map(function(d) { return d; });
		});
		
		d3.csv("WIN7/Services_WIN7.csv", function(data) {
			services = data.map(function(d) { return d; });
		});
		
		d3.csv("WIN7/Modules_WIN7.csv", function(data) {
			modules = data.map(function(d) { return d; });
		});
	}
}

function setupHierarchy(){
	tempChildren=[];
	root = {};	
	var tempProcs = [];
		
		listPID = [],
		listPPID = [];
	
	for (var i=0; i < processes.length; i++){
		listPID.push(Number(processes[i].PID));
		listPPID.push(Number(processes[i].PPID));
	}
	
	var uniqueArray = listPID.filter(function(elem, pos) {
		return listPID.indexOf(elem) == pos;
	}); 
	
	listPID = uniqueArray;
	
	uniqueArray = [];
	
	uniqueArray = listPPID.filter(function(elem, pos) {
		return listPPID.indexOf(elem) == pos;
	}); 
	
	listPPID = uniqueArray;
	
	uniqueArray = [];
	
	listPID.sort(compareNumbers);
	listPPID.sort(compareNumbers);
	
	var count = 0;
	
		for (var i=0; i < listPPID.length; i++){
			if (listPID.indexOf(listPPID[i]) == -1){
				tempProcs[count] = { PID: String(listPPID[i]), PPID: "0", Name: "Node" + count}; 
				count ++;
			}
		}
	
	tempProcs[0] = { PTYPE: "root", PID: "0", value: 0, r: 100, Name: "System Idle Process" };
	
	for (var i=0; i < processes.length; i++){
		processes[i].r = 0;
		tempProcs[i+count] = processes[i];
	}
	processes = tempProcs;
	
	for (var i = 0, k = processes.length; i < k; i += 1){
		for(j=1; j < processes.length; j++){
			if (processes[j].PPID == processes[i].PID){
				tempChildren.push(processes[j]);
			}
		}
		if (tempChildren.length > 0){		
			processes[i].children = tempChildren;
			tempChildren = [];
		}
		else {
			processes[i].children = null;
		}
	}	
}

function initialize() {
	if (dataset=="android") {
		nodes=pack.nodes(processes[0]);
		
		for (var i=0; i < nodes.length; i++){
			if (nodes[i].hasOwnProperty("parent")){
				if (nodes[i].parent.children.length == 1){
					nodes[i].r = nodes[i].r - 5;
				}
			}
		}
	}
	else if (dataset=="WIN7") {
		nodes=pack3.nodes(processes[0]);
		
		for (var i=0; i < nodes.length; i++){
			if (nodes[i].hasOwnProperty("parent")){
				if (nodes[i].parent.children.length == 1){
					nodes[i].r = nodes[i].r - 10;
				}
			}
		}
	}
	else {
		nodes=pack2.nodes(processes[0]);
		
		for (var i=0; i < nodes.length; i++){
			if (nodes[i].hasOwnProperty("parent")){
				if (nodes[i].parent.children.length == 1){
					nodes[i].r = nodes[i].r - 10;
				}
			}
		}
	}
}

function sortFiles(PID) {
	DOCUME = [];
	documents = [];
	programFiles = [];
	windows = [];
	others = [];
	device = [];
	namedPipe = [];
	
	if (dataset == "xpIE"){
		d3.csv("IE/Handles_IE.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpChrome"){
		d3.csv("Chrome/Handles_Chrome.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpFirefox"){
		d3.csv("Firefox/Handles_Firefox.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpFuto"){
		d3.csv("FUTo/Handles_FUTo.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpSolitaire"){
		d3.csv("Solitaire/Handles_Solitaire.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpRAT"){
		d3.csv("RAT/Handles_RAT.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "xpRAT2"){
		d3.csv("RAT2/Handles_RAT2.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	}
	else if (dataset == "WIN7"){
		d3.csv("WIN7/Handles_WIN7.csv", function(data) {
			handles = data.map(function(d) { return d; });
		});
	}
	
	if (PID < 0){
		//sort c:/DOCUME~1/	
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (handles[i].Type == "File"){
				if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
					if (handles[i].Details.substring(24, 32) == "DOCUME~1"){
						for (var j=0; j < DOCUME.length; j++){
							if (handles[i].Details == DOCUME[j].oldDetails){
								alreadyAdded = true;
							}
						}
						if (alreadyAdded == false){				
							var tempFile = handles[i];
							tempFile.oldDetails = handles[i].Details;
							tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
							if(tempFile.Details != "C:\\DOCUME~1"){
								DOCUME.push(tempFile);
							}
						}
					}
				}		
			}	
		}
		
		//sort c:/Documents and Settings/
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (handles[i].Type == "File"){
				if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
					if (handles[i].Details.substring(24, 46) == "Documents and Settings"){
						for (var j=0; j < documents.length; j++){
							if (handles[i].Details == documents[j].oldDetails){
								alreadyAdded = true;
							}
						}
						if (alreadyAdded == false){				
							var tempFile = handles[i];
							tempFile.oldDetails = handles[i].Details;
							tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
							if(tempFile.Details != "C:\\Documents and Settings"){
								documents.push(tempFile);
							}
						}
					}
				}		
			}	
		}
		
		//sort c:/Program Files/
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (handles[i].Type == "File"){
				if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
					if (handles[i].Details.substring(24, 37) == "Program Files"){
						for (var j=0; j < programFiles.length; j++){
							if (handles[i].Details == programFiles[j].oldDetails){
								alreadyAdded = true;
							}
						}
						if (alreadyAdded == false){				
							var tempFile = handles[i];
							tempFile.oldDetails = handles[i].Details;
							tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
							if(tempFile.Details != "C:\\Program Files"){
								programFiles.push(tempFile);
							}
						}
					}
				}		
			}	
		}
		
		//sort c:/WINDOWS/
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (handles[i].Type == "File"){
				if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
					if (handles[i].Details.substring(24, 31) == "WINDOWS"){
						for (var j=0; j < windows.length; j++){
							if (handles[i].Details == windows[j].oldDetails){
								alreadyAdded = true;
							}
						}
						if (alreadyAdded == false){				
							var tempFile = handles[i];
							tempFile.oldDetails = handles[i].Details;
							tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
							if(tempFile.Details != "C:\\WINDOWS"){
								windows.push(tempFile);
							}
						}
					}
				}		
			}	
		}
		
		
		//sort c:/ otherfiles	
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (handles[i].Type == "File"){
				if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
					if ((handles[i].Details.substring(24, 32) != "DOCUME~1") && (handles[i].Details.substring(24, 46) != "Documents and Settings") && (handles[i].Details.substring(24, 37) != "Program Files") && (handles[i].Details.substring(24, 31) != "WINDOWS")){
						for (var j=0; j < others.length; j++){
							if (handles[i].Details == others[j].oldDetails){
								alreadyAdded = true;
							}
						}
						if (alreadyAdded == false){				
							var tempFile = handles[i];
							tempFile.oldDetails = handles[i].Details;
							tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
							if(tempFile.Details != "C:\\"){
								others.push(tempFile);
							}
						}
					}
				}		
			}	
		}
		
		//sort \Device
		
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (handles[i].Type == "File"){
				if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) != "HarddiskVolume1")){
					if ((handles[i].Details.substring(8, 17) == "NamedPipe")){
						for (var j=0; j < namedPipe.length; j++){
							if (handles[i].Details == namedPipe[j].Details){
								alreadyAdded = true;
							}
						}
						if (alreadyAdded == false){				
							if(handles[i].Details != "\\Device\\NamedPipe\\"){
								namedPipe.push(handles[i]);
							}
						}
					}
					else {
						for (var j=0; j < device.length; j++){
							if (handles[i].Details == device[j].Details){
								alreadyAdded = true;
							}
						}
						if (alreadyAdded == false){				
							if(handles[i].Details != "\\Device\\"){
								device.push(handles[i]);
							}
						}
					}
				}		
			}	
		}
		
	}
	else {
		//sort c:/DOCUME~1/	
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (Number(handles[i].PID) == PID){
				if (handles[i].Type == "File"){
					if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
						if (handles[i].Details.substring(24, 32) == "DOCUME~1"){
							for (var j=0; j < DOCUME.length; j++){
								if (handles[i].Details == DOCUME[j].oldDetails){
									alreadyAdded = true;
								}
							}
							if (alreadyAdded == false){				
								var tempFile = handles[i];
								tempFile.oldDetails = handles[i].Details;
								tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
								if(tempFile.Details != "C:\\DOCUME~1"){
									DOCUME.push(tempFile);
								}
							}
						}
					}		
				}
			}
		}
		
		//sort c:/Documents and Settings/
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (Number(handles[i].PID) == PID){
				if (handles[i].Type == "File"){
					if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
						if (handles[i].Details.substring(24, 46) == "Documents and Settings"){
							for (var j=0; j < documents.length; j++){
								if (handles[i].Details == documents[j].oldDetails){
									alreadyAdded = true;
								}
							}
							if (alreadyAdded == false){				
								var tempFile = handles[i];
								tempFile.oldDetails = handles[i].Details;
								tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
								if(tempFile.Details != "C:\\Documents and Settings"){
									documents.push(tempFile);
								}
							}
						}
					}		
				}
			}
		}
		
		//sort c:/Program Files/
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (Number(handles[i].PID) == PID){
				if (handles[i].Type == "File"){
					if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
						if (handles[i].Details.substring(24, 37) == "Program Files"){
							for (var j=0; j < programFiles.length; j++){
								if (handles[i].Details == programFiles[j].oldDetails){
									alreadyAdded = true;
								}
							}
							if (alreadyAdded == false){				
								var tempFile = handles[i];
								tempFile.oldDetails = handles[i].Details;
								tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
								if(tempFile.Details != "C:\\Program Files"){
									programFiles.push(tempFile);
								}
							}
						}
					}		
				}
			}
		}
		
		//sort c:/WINDOWS/
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (Number(handles[i].PID) == PID){
				if (handles[i].Type == "File"){
					if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
						if (handles[i].Details.substring(24, 31) == "WINDOWS"){
							for (var j=0; j < windows.length; j++){
								if (handles[i].Details == windows[j].oldDetails){
									alreadyAdded = true;
								}
							}
							if (alreadyAdded == false){				
								var tempFile = handles[i];
								tempFile.oldDetails = handles[i].Details;
								tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
								if(tempFile.Details != "C:\\WINDOWS"){
									windows.push(tempFile);
								}
							}
						}
					}		
				}
			}
		}
		
		
		//sort c:/ otherfiles	
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (Number(handles[i].PID) == PID){
				if (handles[i].Type == "File"){
					if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) == "HarddiskVolume1")){
						if ((handles[i].Details.substring(24, 32) != "DOCUME~1") && (handles[i].Details.substring(24, 46) != "Documents and Settings") && (handles[i].Details.substring(24, 37) != "Program Files") && (handles[i].Details.substring(24, 31) != "WINDOWS")){
							for (var j=0; j < others.length; j++){
								if (handles[i].Details == others[j].oldDetails){
									alreadyAdded = true;
								}
							}
							if (alreadyAdded == false){				
								var tempFile = handles[i];
								tempFile.oldDetails = handles[i].Details;
								tempFile.Details = "C:\\" + handles[i].Details.substring(24, handles[i].Details.length);
								if(tempFile.Details != "C:\\"){
									others.push(tempFile);
								}
							}
						}
					}		
				}
			}
		}
		
		//sort \Device
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (Number(handles[i].PID) == PID){
				if (handles[i].Type == "File"){
					if ((handles[i].Details.substring(1, 7) == "Device") && (handles[i].Details.substring(8, 23) != "HarddiskVolume1")){
						if ((handles[i].Details.substring(8, 17) == "NamedPipe")){
							for (var j=0; j < namedPipe.length; j++){
								if (handles[i].Details == namedPipe[j].Details){
									alreadyAdded = true;
								}
							}
							if (alreadyAdded == false){				
								if(handles[i].Details != "\\Device\\NamedPipe\\"){
									namedPipe.push(handles[i]);
								}
							}
						}
						else {
							for (var j=0; j < device.length; j++){
								if (handles[i].Details == device[j].Details){
									alreadyAdded = true;
								}
							}
							if (alreadyAdded == false){				
								if(handles[i].Details != "\\Device\\"){
									device.push(handles[i]);
								}
							}
						}
					}		
				}
			}
		}
	}
	
	DOCUME = DOCUME.map(function(d){
			return { label: d.Details, Details: d.oldDetails, color: fileColor, type: d.Type, PID: PID, Access: d.Access, Handle: d.Handle, Offset: d.Offset, overallList: true }
			}).sort(function(a,b) {
				return cmp(a.label, b.label);
				});
				
	documents = documents.map(function(d){
			return { label: d.Details, Details: d.oldDetails, color: fileColor, type: d.Type, PID: PID, Access: d.Access, Handle: d.Handle, Offset: d.Offset, overallList: true }
			}).sort(function(a,b) {
				return cmp(a.label, b.label);
				});
				
	programFiles = programFiles.map(function(d){
			return { label: d.Details, Details: d.oldDetails, color: fileColor, type: d.Type, PID: PID, Access: d.Access, Handle: d.Handle, Offset: d.Offset, overallList: true }
			}).sort(function(a,b) {
				return cmp(a.label, b.label);
				});
				
	windows = windows.map(function(d){
			return { label: d.Details, Details: d.oldDetails, color: fileColor, type: d.Type, PID: PID, Access: d.Access, Handle: d.Handle, Offset: d.Offset, overallList: true }
			}).sort(function(a,b) {
				return cmp(a.label, b.label);
				});
				
	others = others.map(function(d){
			return { label: d.Details, Details: d.oldDetails, color: fileColor, type: d.Type, PID: PID, Access: d.Access, Handle: d.Handle, Offset: d.Offset, overallList: true }
			}).sort(function(a,b) {
				return cmp(a.label, b.label);
				});
	
	device = device.map(function(d){
			return { label: d.Details, color: fileColor, type: d.Type, PID: PID, Access: d.Access, Handle: d.Handle, Offset: d.Offset, overallList: true }
			}).sort(function(a,b) {
				return cmp(a.label, b.label);
				});
				
	namedPipe = namedPipe.map(function(d){
			return { label: d.Details, color: fileColor, type: d.Type, PID: PID, Access: d.Access, Handle: d.Handle, Offset: d.Offset, overallList: true }
			}).sort(function(a,b) {
				return cmp(a.label, b.label);
				});

}