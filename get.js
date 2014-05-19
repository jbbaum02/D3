function getUniqueResources(){
	pFiles = [];
	pFilesTemp = [];
	pFilesTemp1 = [];
	pFilesTemp2 = [];
	pFilesTemp3 = [];
	pFilesTemp4 = [];
	pFilesTemp5 = [];
	pFilesTemp6 = [];
	pFilesTemp7 = [];
	pFilesTemp8 = [];
	pFilesTemp9 = [];
	pFilesTemp10 = [];
	pFilesList = [];
	pModules = [];
	pModulesTemp = [];
	pModulesTemp1 = [];
	pModulesTemp2 = [];
	pModulesTemp3 = [];
	pModulesTemp4 = [];
	pModulesTemp5 = [];
	pModulesTemp6 = [];
	pModulesTemp7 = [];
	pModulesTemp8 = [];
	pModulesTemp9 = [];
	pModulesTemp10 = [];
	pModulesTemp11 = [];
	pModulesTemp12 = [];
	pModulesTemp13 = [];
	pModulesTemp14 = [];
	pModulesTemp15 = [];
	pModulesTemp16 = [];
	pModulesTemp17 = [];
	pModulesTemp18 = [];
	pModulesTemp19 = [];
	pModulesTemp20 = [];
	pModulesTemp21 = [];
	pModulesTemp22 = [];
	pModulesTemp23 = [];
	pModulesTemp24 = [];
	pModulesTemp25 = [];
	pModulesTemp26 = [];
	pModulesTemp27 = [];
	pModulesTemp28 = [];
	pModulesTemp29 = [];
	pModulesTemp30 = [];
	pModulesTemp31 = [];
	pModulesTemp32 = [];
	pModulesTemp33 = [];
	pModulesTemp34 = [];
	pModulesTemp35 = [];
	pModulesList = [];
	pServices = [];
	pPorts = [];
	pPortsTemp = [];
	pPortsTemp1 = [];
	pPortsTemp2 = [];
	pPortsList = [];
	pSockets = [];
	pSocketsTemp = [];
	pSocketsTemp1 = [];
	pSocketsTemp2 = [];
	pSocketsList = [];
	rlist = [];
	
	sortFiles(-2);
	
	if(DOCUME.length > 0){
		var tempF = [];
		tempF[0] = { label: "C:\\DOCUME~1", color: fileColor, type: "File", PID: "-2" };
		pFilesList.push(tempF[0]);
	}
	if(documents.length > 0){
		var tempF = [];
		tempF[0] = { label: "C:\\Documents and Settings", color: fileColor, type: "File", PID: "-2" };
		pFilesList.push(tempF[0]);
	}
	if(programFiles.length > 0){
		var tempF = [];
		tempF[0] = { label: "C:\\Program Files", color: fileColor, type: "File", PID: "-2" };
		pFilesList.push(tempF[0]);
	}
	if(windows.length > 0){
		var tempF = [];
		tempF[0] = { label: "C:\\WINDOWS", color: fileColor, type: "File", PID: "-2" };
		pFilesList.push(tempF[0]);
	}
	if(others.length > 0){
		var tempF = [];
		tempF[0] = { label: "Other Files", color: fileColor, type: "File", PID: "-2" };
		pFilesList.push(tempF[0]);
	}
	
	if(device.length > 0){
		var tempF = [];
		tempF[0] = { label: "\\Device", color: fileColor, type: "File", PID: "-2" };
		pFilesList.push(tempF[0]);
	}
	
	if(namedPipe.length > 0){
		var tempF = [];
		tempF[0] = { label: "\\Device\\NamedPipe", color: fileColor, type: "File", PID: "-2" };
		pFilesList.push(tempF[0]);
	}
	
	pFiles[0] = { label: "Files", color: fileColor, type: "File", PID: "-2", list: true };
	
	
	/*
	sortFiles(468);
	
		if(DOCUME.length > 0){
			var tempF = [];
			tempF[0] = { label: "C:\\DOCUME~1", color: fileColor, type: "File", PID: 468 };
			pFilesList.push(tempF[0]);
		}
		if(documents.length > 0){
			var tempF = [];
			tempF[0] = { label: "C:\\Documents and Settings", color: fileColor, type: "File", PID: 468 };
			pFilesList.push(tempF[0]);
		}
		if(programFiles.length > 0){
			var tempF = [];
			tempF[0] = { label: "C:\\Program Files", color: fileColor, type: "File", PID: 468 };
			pFilesList.push(tempF[0]);
		}
		if(windows.length > 0){
			var tempF = [];
			tempF[0] = { label: "C:\\WINDOWS", color: fileColor, type: "File", PID: 468 };
			pFilesList.push(tempF[0]);
		}
		if(others.length > 0){
			var tempF = [];
			tempF[0] = { label: "Other Files", color: fileColor, type: "File", PID: 468 };
			pFilesList.push(tempF[0]);
		}
		
		if(device.length > 0){
			var tempF = [];
			tempF[0] = { label: "\\Device", color: fileColor, type: "File", PID: 468 };
			pFilesList.push(tempF[0]);
		}
		
		if(namedPipe.length > 0){
			var tempF = [];
			tempF[0] = { label: "\\Device\\NamedPipe", color: fileColor, type: "File", PID: 468 };
			pFilesList.push(tempF[0]);
		}
		
		pFiles[0] = { label: "Files", color: fileColor, type: "File", PID: 468, list: true };
	*/
	
	for (var i=0; i < modules.length; i++){
		var alreadyAdded = false;
		if ((modules[i].Name.substring((modules[i].Name.length - 4), modules[i].Name.length) == ".exe") | (modules[i].Name.substring((modules[i].Name.length - 4), modules[i].Name.length) == ".EXE")){					
			for (var j=0; j < pModules.length; j++){
				if (modules[i].Name == pModules[j].Name){
					alreadyAdded = true;
				}
			}
			if (alreadyAdded == true){				
			}
			else {
				pModules.push(modules[i]);
			}	
		}	
	}
	pModules = pModules.map(function(d){
				return { label: d.Name, color: moduleColor, type: "Module", PID: d.PID, path: d.Path, overallList: true}
				}).sort(function(a,b) {
					return cmp(a.label, b.label);
					});
	
	if (pModules.length > 0){
		pModulesTemp = pModules;
		pModules = [];
		pModules[0] = { label: "Loaded (.exe) Modules", color: moduleColor, type: "Module", PID: "-2"};
	}
	
	for (var i=0; i < ports.length; i++){
		for (var j=0; j < ports[i].LocalAddress.length; j++){			
			if (ports[i].LocalAddress[j] == ":"){					
				ports[i].portNum = "Port " + ports[i].LocalAddress.substring((j+1), ports[i].LocalAddress.length)
				pPorts.push(ports[i]);
			}				
		}
	}
	pPorts = pPorts.map(function(d){
				return { label: d.portNum, color: portColor, PID: d.PID , type: "Port", overallList: true }
				}).sort(function(a,b) {
					return d3.ascending(a.label, b.label);
					});
					
	if (pPorts.length > 0){
		if (pPorts.length > 40){	
			for (var i=0; i < pPorts.length; i++){
				if (i < 40){
					pPortsTemp1.push(pPorts[i]);
				}
				else if ((i > 39) && (i < 80)){
					pPortsTemp2.push(pPorts[i]);
				}
			}
			pPortsTemp = pPorts;
			pPorts = [];
			
			if (pPortsTemp1.length > 0){
				pPortsList[0] = { label2: "Ports List 1", color: portColor, type: "Port", PID: "-2" };
				pPortsList[0].label = pPortsTemp1[0].label + " ----> " + pPortsTemp1[pPortsTemp1.length - 1].label;
			}
			if (pPortsTemp2.length > 0){
				pPortsList[1] = { label2: "Ports List 2", color: portColor, type: "Port", PID: "-2" };
				pPortsList[1].label = pPortsTemp2[0].label + " ----> " + pPortsTemp2[pPortsTemp2.length - 1].label;
			}
			
			pPorts[0] = { label: "Ports", color: portColor, type: "Port", PID: "-2", list: true };
		}
		else if (pPorts.length == 1){
			
		}
		else {
			pPortsTemp = pPorts;
			pPorts = [];
			pPorts[0] = { label: "Ports", color: portColor, type: "Port", PID: "-2" };
		}
	}
						
	for (var i=0; i < sockets.length; i++){
		var alreadyAdded = false;
		sockets[i].Name = "socket:[" + sockets[i].Port + "]";
		for (var j=0; j < pSockets.length; j++){
			if (sockets[i].Name == pSockets[j].Name){
				alreadyAdded = true;
			}
		}
		if (alreadyAdded == true){
		}
		else {
			pSockets.push(sockets[i]);
		}
	}
	pSockets = pSockets.map(function(d){
				return { label: d.Name, color: socketColor, type: "Socket", PID: d.PID, Protocol: d.Protocol, Port: d.Port, Address: d.Address, CreateTime: d.CreateTime, Offset: d.Offset, overallList: true}
				}).sort(function(a,b) {
					return compareNumbers(a.Port, b.Port);
					});
					
	if (pSockets.length > 0){
		if (pSockets.length > 40){	
			for (var i=0; i < pSockets.length; i++){
				if (i < 40){
					pSocketsTemp1.push(pSockets[i]);
				}
				else if ((i > 39) && (i < 80)){
					pSocketsTemp2.push(pSockets[i]);
				}
			}
			pSocketsTemp = pSockets;
			pSockets = [];
			
			if (pSocketsTemp1.length > 0){
				pSocketsList[0] = { label2: "Sockets List 1", color: socketColor, type: "Socket", PID: "-2" };
				pSocketsList[0].label = pSocketsTemp1[0].label + " ----> " + pSocketsTemp1[pSocketsTemp1.length - 1].label;
			}
			if (pSocketsTemp2.length > 0){
				pSocketsList[1] = { label: "Sockets List 2", color: socketColor, type: "Socket", PID: "-2" };
				pSocketsList[1].label = pSocketsTemp2[0].label + " ----> " + pSocketsTemp2[pSocketsTemp2.length - 1].label;
			}
			
			pSockets[0] = { label: "Sockets", color: socketColor, type: "Socket", PID: "-2", list: true };
		}
		else {
			pSocketsTemp = pSockets;
			pSockets = [];
			pSockets[0] = { label: "Sockets", color: socketColor, type: "Socket", PID: "-2" };
		}
	}					
	
	if (pFiles.length > 0){
		pFiles.forEach(function(d) {
			rlist.push(d);
		});
	}
	
	if (pModules.length > 0){
		pModules.forEach(function(d) {
			rlist.push(d);
		});
	}
	
	if (pPorts.length > 0){
		pPorts.forEach(function(d) {
			rlist.push(d);
		});
	}
		
	if (pSockets.length > 0){		
		pSockets.forEach(function(d) {
			rlist.push(d);
		});
	}		
		
	if (rlist.length > 0){
		rlist.forEach(function(d) {
			d.value = (1 / (rlist.length));
			});
	}
	tempResources = rlist;
	return rlist;	
}	

function getFiles(PID){
	pFiles = [];
	pFilesTemp = [];
	pFilesTemp1 = [];
	pFilesTemp2 = [];
	pFilesTemp3 = [];
	pFilesTemp4 = [];
	pFilesTemp5 = [];
	pFilesTemp6 = [];
	pFilesTemp7 = [];
	pFilesTemp8 = [];
	pFilesTemp9 = [];
	pFilesTemp10 = [];
	pFilesList = [];
	
	if (dataset == "android"){
		for (var i=0; i < files.length; i++){
			var alreadyAdded = false;
			if (Number(files[i].PID) == PID){
				if (files[i].Name.substring(0, 6) == "socket"){
					pSockets.push(files[i]);
				}
				else{
					for (var j=0; j < pFiles.length; j++){
						if (files[i].Name == pFiles[j].Name){
							alreadyAdded = true;
						}
					}
					if (alreadyAdded == true){				
					}
					else {
						pFiles.push(files[i]);
					}
				}
			}
		}
		if (pFiles.length > 1){	
			return pFiles.map(function(d){
				return { label: d.Name, color: fileColor, type: "File", PID: d.PID, User: d.User, Command: d.Command }
				}).sort(function(a,b) {
					return cmp(a.label, b.label);
					});
		}
		else {
			return pFiles;
		}
	}
	else {
		
		sortFiles(PID);
	
		if(DOCUME.length > 0){
			var tempF = [];
			tempF[0] = { label: "C:\\DOCUME~1", color: fileColor, type: "File", PID: PID };
			pFilesList.push(tempF[0]);
		}
		if(documents.length > 0){
			var tempF = [];
			tempF[0] = { label: "C:\\Documents and Settings", color: fileColor, type: "File", PID: PID };
			pFilesList.push(tempF[0]);
		}
		if(programFiles.length > 0){
			var tempF = [];
			tempF[0] = { label: "C:\\Program Files", color: fileColor, type: "File", PID: PID };
			pFilesList.push(tempF[0]);
		}
		if(windows.length > 0){
			var tempF = [];
			tempF[0] = { label: "C:\\WINDOWS", color: fileColor, type: "File", PID: PID };
			pFilesList.push(tempF[0]);
		}
		if(others.length > 0){
			var tempF = [];
			tempF[0] = { label: "Other Files", color: fileColor, type: "File", PID: PID };
			pFilesList.push(tempF[0]);
		}
		
		if(device.length > 0){
			var tempF = [];
			tempF[0] = { label: "\\Device", color: fileColor, type: "File", PID: PID };
			pFilesList.push(tempF[0]);
		}
		
		if(namedPipe.length > 0){
			var tempF = [];
			tempF[0] = { label: "\\Device\\NamedPipe", color: fileColor, type: "File", PID: PID };
			pFilesList.push(tempF[0]);
		}
		
		pFiles[0] = { label: "Files", color: fileColor, type: "File", PID: PID, list: true };
		return pFiles;
	}	
}

function getKeys(PID){
	pKeys = [];
	pKeysTemp = [];
	pKeysTemp1 = [];
	pKeysTemp2 = [];
	pKeysTemp3 = [];
	pKeysTemp4 = [];
	pKeysTemp5 = [];
	pKeysTemp6 = [];
	pKeysTemp7 = [];
	pKeysTemp8 = [];
	pKeysList = [];
	
	if (PID == -1){
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (handles[i].Type == "Key"){
				for (var j=0; j < pKeys.length; j++){
					if (handles[i].Details == pKeys[j].Details){
						alreadyAdded = true;
					}
				}
				if (alreadyAdded == true){
				}
				else {
					pKeys.push(handles[i]);
				}
			}		
		}
		pKeys = pKeys.map(function(d){
				return { label: d.Details, color: keyColor, type: d.Type, PID: d.PID, Access: d.Access, Handle: d.Handle, Offset: d.Offset, overallList: true }
				}).sort(function(a,b) {
					return d3.ascending(a.label, b.label);
					});
		if (pKeys.length > 0){
			if (pKeys.length > 40){
				for (var i=0; i < pKeys.length; i++){
					if (i < 40){
						pKeysTemp1.push(pKeys[i]);
					}
					else if ((i > 39) && (i < 80)){
						pKeysTemp2.push(pKeys[i]);
					}
					else if ((i > 79) && (i < 120)){
						pKeysTemp3.push(pKeys[i]);
					}
					else if ((i > 119) && (i < 160)){
						pKeysTemp4.push(pKeys[i]);
					}
					else if ((i > 159) && (i < 200)){
						pKeysTemp5.push(pKeys[i]);
					}
					else if ((i > 199) && (i < 240)){
						pKeysTemp6.push(pKeys[i]);
					}
					else if ((i > 239) && (i < 280)){
						pKeysTemp7.push(pKeys[i]);
					}
					else if ((i > 279) && (i < 320)){
						pKeysTemp8.push(pKeys[i]);
					}
				}
				pKeysTemp = pKeys;
				pKeys = [];
				
				if (pKeysTemp1.length > 0){
					pKeysList[0] = { label: "Keys List 1", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp2.length > 0){
					pKeysList[1] = { label: "Keys List 2", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp3.length > 0){
					pKeysList[2] = { label: "Keys List 3", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp4.length > 0){
					pKeysList[3] = { label: "Keys List 4", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp5.length > 0){
					pKeysList[4] = { label: "Keys List 5", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp6.length > 0){
					pKeysList[5] = { label: "Keys List 6", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp7.length > 0){
					pKeysList[6] = { label: "Keys List 7", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp8.length > 0){
					pKeysList[7] = { label: "Keys List 8", color: keyColor, type: "Key", PID: String(PID) };
				}
				
				pKeys[0] = { label: "Keys", color: keyColor, type: "Key", list: true };
			}
			else {
				pKeysTemp = pKeys;
				pKeys = [];
				pKeys[0] = { label: "Keys", color: keyColor, type: "Key" };
			}
			return pKeys;		
		}
		else {
			return pKeys;
		}
	}
	else {	
		for (var i=0; i < handles.length; i++){
			var alreadyAdded = false;
			if (Number(handles[i].PID) == PID){
				if (handles[i].Type == "Key"){
					for (var j=0; j < pKeys.length; j++){
						if (handles[i].Details == pKeys[j].Details){
							alreadyAdded = true;
						}
					}
					if (alreadyAdded == true){
					}
					else {
						pKeys.push(handles[i]);
					}
				}
			}		
		}
		pKeys = pKeys.map(function(d){
				return { label: d.Details, color: keyColor, type: d.Type, PID: d.PID, Access: d.Access, Handle: d.Handle, Offset: d.Offset, overallList: true }
				}).sort(function(a,b) {
					return d3.ascending(a.label, b.label);
					});
		if (pKeys.length > 0){
			if (pKeys.length > 40){
				for (var i=0; i < pKeys.length; i++){
					if (i < 40){
						pKeysTemp1.push(pKeys[i]);
					}
					else if ((i > 39) && (i < 80)){
						pKeysTemp2.push(pKeys[i]);
					}
					else if ((i > 79) && (i < 120)){
						pKeysTemp3.push(pKeys[i]);
					}
					else if ((i > 119) && (i < 160)){
						pKeysTemp4.push(pKeys[i]);
					}
					else if ((i > 159) && (i < 200)){
						pKeysTemp5.push(pKeys[i]);
					}
					else if ((i > 199) && (i < 240)){
						pKeysTemp6.push(pKeys[i]);
					}
					else if ((i > 239) && (i < 280)){
						pKeysTemp7.push(pKeys[i]);
					}
					else if ((i > 279) && (i < 320)){
						pKeysTemp8.push(pKeys[i]);
					}
				}
				pKeysTemp = pKeys;
				pKeys = [];
				
				if (pKeysTemp1.length > 0){
					pKeysList[0] = { label: "Keys List 1", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp2.length > 0){
					pKeysList[1] = { label: "Keys List 2", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp3.length > 0){
					pKeysList[2] = { label: "Keys List 3", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp4.length > 0){
					pKeysList[3] = { label: "Keys List 4", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp5.length > 0){
					pKeysList[4] = { label: "Keys List 5", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp6.length > 0){
					pKeysList[5] = { label: "Keys List 6", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp7.length > 0){
					pKeysList[6] = { label: "Keys List 7", color: keyColor, type: "Key", PID: String(PID) };
				}
				if (pKeysTemp8.length > 0){
					pKeysList[7] = { label: "Keys List 8", color: keyColor, type: "Key", PID: String(PID) };
				}
				
				pKeys[0] = { label: "Keys", color: keyColor, type: "Key", list: true };
			}
			else {
				pKeysTemp = pKeys;
				pKeys = [];
				pKeys[0] = { label: "Keys", color: keyColor, type: "Key" };
			}
			return pKeys;		
		}
		else {
			pKeysTemp = pKeys;
			pKeys = [];
			return pKeys;
		}
	}
}

function getPorts(PID){
	pPorts = [];
	pPortsTemp = [];
	
	if (dataset == "android"){
		for (var i=0; i < ports.length; i++){
			if (Number(ports[i].PID) == PID){
				pPorts.push(ports[i]);
			}
		}
		if (pPorts.length > 0){	
			return pPorts.map(function(d){
					return { label: d.Name, color: portColor, PID: d.PID , type: "Port" }
					}).sort(function(a,b) {
						return d3.ascending(a.label, b.label);
						});
		}
		else {
			pPorts[0] = { label: "No Ports", color: portColor, type: "Port" };
			return pPorts;
		}
	}
	else {
		if (PID == -1){
			for (var i=0; i < ports.length; i++){
				for (var j=0; j < ports[i].LocalAddress.length; j++){			
					if (ports[i].LocalAddress[j] == ":"){					
						ports[i].portNum = "Port " + ports[i].LocalAddress.substring((j+1), ports[i].LocalAddress.length)
						pPorts.push(ports[i]);
					}				
				}
			}
			if (pPorts.length > 0){	
				pPorts = pPorts.map(function(d){
					return { label: d.portNum, color: portColor, type: "Port", Offset: d.Offset, LocalAddress: d.LocalAddress, RemoteAddress: d.RemoteAddress, PID: d.PID }
					}).sort(function(a,b) {
						return d3.ascending(a.label, b.label);
						});
			
				if (pPorts.length > 40){	
					for (var i=0; i < pPorts.length; i++){
						if (i < 40){
							pPortsTemp1.push(pPorts[i]);
						}
						else if ((i > 39) && (i < 80)){
							pPortsTemp2.push(pPorts[i]);
						}
					}
					pPortsTemp = pPorts;
					pPorts = [];
					
					if (pPortsTemp1.length > 0){
						pPortsList[0] = { label2: "Ports List 1", color: portColor, type: "Port", PID: "-1" };
						pPortsList[0].label = pPortsTemp1[0].label + " ----> " + pPortsTemp1[pPortsTemp1.length - 1].label;
					}
					if (pPortsTemp2.length > 0){
						pPortsList[1] = { label2: "Ports List 2", color: portColor, type: "Port", PID: "-1" };
						pPortsList[1].label = pPortsTemp2[0].label + " ----> " + pPortsTemp2[pPortsTemp2.length - 1].label;
					}
					
					pPorts[0] = { label: "Ports", color: portColor, type: "Port", PID: "-1", list: true };

					return pPorts;
				}
			}
			else {
				return pPorts;
			}
		}
		else {
			for (var i=0; i < ports.length; i++){
				for (var j=0; j < ports[i].LocalAddress.length; j++){			
					if (ports[i].LocalAddress[j] == ":"){					
						ports[i].portNum = "Port " + ports[i].LocalAddress.substring((j+1), ports[i].LocalAddress.length)
						if (Number(ports[i].PID) == PID){
							pPorts.push(ports[i]);
						}
					}				
				}
			}
			if (pPorts.length > 0){	
				pPortsTemp = pPorts.map(function(d){
					return { label: d.portNum, color: portColor, type: "Port", Offset: d.Offset, LocalAddress: d.LocalAddress, RemoteAddress: d.RemoteAddress, PID: d.PID }
					}).sort(function(a,b) {
						return d3.ascending(a.label, b.label);
						});
						
				if (pPorts.length > 40){	
					for (var i=0; i < pPorts.length; i++){
						if (i < 40){
							pPortsTemp1.push(pPorts[i]);
						}
						else if ((i > 39) && (i < 80)){
							pPortsTemp2.push(pPorts[i]);
						}
					}
					pPortsTemp = pPorts;
					pPorts = [];
					
					if (pPortsTemp1.length > 0){
						pPortsList[0] = { label2: "Ports List 1", color: portColor, type: "Port", PID: String(PID) };
						pPortsList[0].label = pPortsTemp1[0].label + " ----> " + pPortsTemp1[pPortsTemp1.length - 1].label;
					}
					if (pPortsTemp2.length > 0){
						pPortsList[1] = { label2: "Ports List 2", color: portColor, type: "Port", PID: String(PID) };
						pPortsList[1].label = pPortsTemp2[0].label + " ----> " + pPortsTemp2[pPortsTemp2.length - 1].label;
					}
					
					pPorts[0] = { label: "Ports", color: portColor, type: "Port", PID: String(PID), list: true };

					return pPorts;
				}
			}
			else {
				return pPorts;
			}
		}		
	}
}

function getServices(PID){
	pServices = [];
	pServicesTemp = [];
	
	if (PID == -1){
		for (var i=0; i < services.length; i++){
			pServices.push(services[i]);
		}
		if (pServices.length > 0){
				pServicesTemp = pServices.map(function(d){
					return { label: d.Name, color: serviceColor, type: "Service", PID: d.PID }
					}).sort(function(a,b) {
						return cmp(a.label, b.label);
						});
						
				pServices = [];
				pServices[0] = { label: "Services", color: serviceColor, type: "Service" };
				return pServices;
		}
	}
	else {
		for (var i=0; i < services.length; i++){
			if (Number(services[i].PID) == PID){
				pServices.push(services[i]);
			}
		}
		
		if (pServices.length > 0){
			return pServices.map(function(d){
				return { label: d.Name, color: serviceColor, type: "Service", PID: d.PID }
				}).sort(function(a,b) {
					return cmp(a.label, b.label);
					});
		}
		else {
			return pServices;
		}
	}
}

function getSockets(PID){
	var socks = pSockets;
	pSockets = [];
	pSocketsTemp = [];
	pSocketsTemp1 = [];
	pSocketsTemp2 = [];
	pSocketsList = [];	
	
	if (dataset == "android"){
		if (socks.length > 0){	
			return socks.map(function(d){
				return { label: d.Name, color: socketColor, type: "Socket", PID: d.PID, User: d.User, Command: d.Command }
				}).sort(function(a,b) {
					return d3.ascending(a.label, b.label);
					});
		}
		else {
			return socks;
		}
	}
	else {
		if (PID == -1){
			for (var i=0; i < sockets.length; i++){
				var alreadyAdded = false;
				sockets[i].Name = "socket:[" + sockets[i].Port + "]";
				for (var j=0; j < pSockets.length; j++){
					if (sockets[i].Name == pSockets[j].Name){
						alreadyAdded = true;
					}
				}
				if (alreadyAdded == true){
				}
				else {
					pSockets.push(sockets[i]);
				}
			}
			pSockets = pSockets.map(function(d){
				return { label: d.Name, color: socketColor, type: "Socket", PID: d.PID, Protocol: d.Protocol, Port: d.Port, Address: d.Address, CreateTime: d.CreateTime, Offset: d.Offset, overallList: true}
				}).sort(function(a,b) {
					return compareNumbers(a.Port, b.Port);
					});		
			if (pSockets.length > 0){
				if (pSockets.length > 40){	
					for (var i=0; i < pSockets.length; i++){
						if (i < 40){
							pSocketsTemp1.push(pSockets[i]);
						}
						else if ((i > 39) && (i < 80)){
							pSocketsTemp2.push(pSockets[i]);
						}
					}
					pSocketsTemp = pSockets;
					pSockets = [];
					
					if (pSocketsTemp1.length > 0){
						pSocketsList[0] = { label2: "Sockets List 1", color: socketColor, type: "Socket", PID: "-1" };
						pSocketsList[0].label = pSocketsTemp1[0].label + " ----> " + pSocketsTemp1[pSocketsTemp1.length - 1].label;
					}
					if (pSocketsTemp2.length > 0){
						pSocketsList[1] = { label2: "Sockets List 2", color: socketColor, type: "Socket", PID: "-1" };
						pSocketsList[1].label = pSocketsTemp2[0].label + " ----> " + pSocketsTemp2[pSocketsTemp2.length - 1].label;
					}
					
					pSockets[0] = { label: "Sockets", color: socketColor, type: "Socket", PID: "-1", list: true };
				}
				else {
					pSocketsTemp = pSockets;
					pSockets = [];
					pSockets[0] = { label: "Sockets", color: socketColor, type: "Socket", PID: "-1" };
				}
			}
			return pSockets;			
		}
		else {
			for (var i=0; i < sockets.length; i++){
				var alreadyAdded = false;
				sockets[i].Name = "socket:[" + sockets[i].Port + "]";
				if(Number(sockets[i].PID) == PID){
					for (var j=0; j < pSockets.length; j++){
						if (sockets[i].Name == pSockets[j].Name){
							alreadyAdded = true;
						}
					}
					if (alreadyAdded == true){
					}
					else {
						pSockets.push(sockets[i]);
					}
				}
			}
			pSockets = pSockets.map(function(d){
				return { label: d.Name, color: socketColor, type: "Socket", PID: d.PID, Protocol: d.Protocol, Port: d.Port, Address: d.Address, CreateTime: d.CreateTime, Offset: d.Offset, overallList: true}
				}).sort(function(a,b) {
					return compareNumbers(a.Port, b.Port);
					});
						
			if (pSockets.length > 0){
				if (pSockets.length > 40){	
					for (var i=0; i < pSockets.length; i++){
						if (i < 40){
							pSocketsTemp1.push(pSockets[i]);
						}
						else if ((i > 39) && (i < 80)){
							pSocketsTemp2.push(pSockets[i]);
						}
					}
					pSocketsTemp = pSockets;
					pSockets = [];
					
					if (pSocketsTemp1.length > 0){
						pSocketsList[0] = { label2: "Sockets List 1", color: socketColor, type: "Socket", PID: String(PID) };
						pSocketsList[0].label = pSocketsTemp1[0].label + " ----> " + pSocketsTemp1[pSocketsTemp1.length - 1].label;
					}
					if (pSocketsTemp2.length > 0){
						pSocketsList[1] = { label2: "Sockets List 2", color: socketColor, type: "Socket", PID: String(PID) };
						pSocketsList[1].label = pSocketsTemp2[0].label + " ----> " + pSocketsTemp2[pSocketsTemp2.length - 1].label;
					}
					
					pSockets[0] = { label: "Sockets", color: socketColor, type: "Socket", list: true };
				}
				else if (pSockets.length == 1){
					return pSockets;				
				}				
				else {
					pSocketsTemp = pSockets;
					pSockets = [];
					pSockets[0] = { label: "Sockets", color: socketColor, type: "Socket" };
				}
				return pSockets;
			}
			else {
				return pSockets;
			}
		}		
	}
}

function getModules(PID){
	pModules = [];
	pModulesTemp = [];
	pModulesTemp1 = [];
	pModulesTemp2 = [];
	pModulesTemp3 = [];
	pModulesTemp4 = [];
	pModulesTemp5 = [];
	pModulesTemp6 = [];
	pModulesTemp7 = [];
	pModulesTemp8 = [];
	pModulesTemp9 = [];
	pModulesTemp10 = [];
	pModulesTemp11 = [];
	pModulesTemp12 = [];
	pModulesTemp13 = [];
	pModulesTemp14 = [];
	pModulesTemp15 = [];
	pModulesTemp16 = [];
	pModulesTemp17 = [];
	pModulesTemp18 = [];
	pModulesTemp19 = [];
	pModulesTemp20 = [];
	pModulesTemp21 = [];
	pModulesTemp22 = [];
	pModulesTemp23 = [];
	pModulesTemp24 = [];
	pModulesTemp25 = [];
	pModulesTemp26 = [];
	pModulesTemp27 = [];
	pModulesTemp28 = [];
	pModulesTemp29 = [];
	pModulesTemp30 = [];
	pModulesTemp31 = [];
	pModulesTemp32 = [];
	pModulesTemp33 = [];
	pModulesTemp34 = [];
	pModulesTemp35 = [];
	pModulesList = [];
	
	if (PID == -1){
		for (var i=0; i < modules.length; i++){
			var alreadyAdded = false;
			for (var j=0; j < pModules.length; j++){
				if (modules[i].Name == pModules[j].Name){
					alreadyAdded = true;
				}
			}
			if (alreadyAdded == true){
			}
			else {
				pModules.push(modules[i]);
			}
		}
		pModules = pModules.map(function(d){
				return { label: d.Name, color: moduleColor, type: "Module", PID: d.PID, path: d.Path, overallList: true}
				}).sort(function(a,b) {
					return cmp(a.label, b.label);
					});
		
		
		if (pModules.length > 0){
			if (pModules.length > 40){
				for (var i=0; i < pModules.length; i++){
					if (i < 40){
						pModulesTemp1.push(pModules[i]);
					}
					else if ((i > 39) && (i < 80)){
						pModulesTemp2.push(pModules[i]);
					}
					else if ((i > 79) && (i < 120)){
						pModulesTemp3.push(pModules[i]);
					}
					else if ((i > 119) && (i < 160)){
						pModulesTemp4.push(pModules[i]);
					}
					else if ((i > 159) && (i < 200)){
						pModulesTemp5.push(pModules[i]);
					}
					else if ((i > 199) && (i < 240)){
						pModulesTemp6.push(pModules[i]);
					}
					else if ((i > 239) && (i < 280)){
						pModulesTemp7.push(pModules[i]);
					}
					else if ((i > 279) && (i < 320)){
						pModulesTemp8.push(pModules[i]);
					}
					else if ((i > 319) && (i < 360)){
						pModulesTemp9.push(pModules[i]);
					}
					else if ((i > 359) && (i < 400)){
						pModulesTemp10.push(pModules[i]);
					}
					else if ((i > 399) && (i < 440)){
						pModulesTemp11.push(pModules[i]);
					}
					else if ((i > 439) && (i < 480)){
						pModulesTemp12.push(pModules[i]);
					}
					else if ((i > 479) && (i < 520)){
						pModulesTemp13.push(pModules[i]);
					}
					else if ((i > 519) && (i < 560)){
						pModulesTemp14.push(pModules[i]);
					}
					else if ((i > 559) && (i < 600)){
						pModulesTemp15.push(pModules[i]);
					}
					else if ((i > 599) && (i < 640)){
						pModulesTemp16.push(pModules[i]);
					}
					else if ((i > 639) && (i < 680)){
						pModulesTemp17.push(pModules[i]);
					}
					else if ((i > 679) && (i < 720)){
						pModulesTemp18.push(pModules[i]);
					}
					else if ((i > 719) && (i < 760)){
						pModulesTemp19.push(pModules[i]);
					}
					else if ((i > 759) && (i < 800)){
						pModulesTemp20.push(pModules[i]);
					}
					else if ((i > 799) && (i < 840)){
						pModulesTemp21.push(pModules[i]);
					}
					else if ((i > 839) && (i < 880)){
						pModulesTemp22.push(pModules[i]);
					}
					else if ((i > 879) && (i < 920)){
						pModulesTemp23.push(pModules[i]);
					}
					else if ((i > 919) && (i < 960)){
						pModulesTemp24.push(pModules[i]);
					}
					else if ((i > 959) && (i < 1000)){
						pModulesTemp25.push(pModules[i]);
					}
					else if ((i > 999) && (i < 1040)){
						pModulesTemp26.push(pModules[i]);
					}
					else if ((i > 1039) && (i < 1080)){
						pModulesTemp27.push(pModules[i]);
					}
					else if ((i > 1079) && (i < 1120)){
						pModulesTemp28.push(pModules[i]);
					}
					else if ((i > 1119) && (i < 1160)){
						pModulesTemp29.push(pModules[i]);
					}
					else if ((i > 1159) && (i < 1200)){
						pModulesTemp30.push(pModules[i]);
					}
					else if ((i > 1199) && (i < 1240)){
						pModulesTemp31.push(pModules[i]);
					}
					else if ((i > 1239) && (i < 1280)){
						pModulesTemp32.push(pModules[i]);
					}
					else if ((i > 1279) && (i < 1320)){
						pModulesTemp33.push(pModules[i]);
					}
					else if ((i > 1319) && (i < 1360)){
						pModulesTemp34.push(pModules[i]);
					}
					else if ((i > 1359) && (i < 1400)){
						pModulesTemp35.push(pModules[i]);
					}
				}
				
				pModulesTemp = pModules;
				pModules = [];
				
				if (pModulesTemp1.length > 0){
					pModulesList[0] = { label2: "Modules List 1", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[0].label = pModulesTemp1[0].label + " ---> " + pModulesTemp1[pModulesTemp1.length - 1].label;
				}
				if (pModulesTemp2.length > 0){
					pModulesList[1] = { label2: "Modules List 2", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[1].label = pModulesTemp2[0].label + " ---> " + pModulesTemp2[pModulesTemp2.length - 1].label;
				}
				if (pModulesTemp3.length > 0){
					pModulesList[2] = { label2: "Modules List 3", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[2].label = pModulesTemp3[0].label + " ---> " + pModulesTemp3[pModulesTemp3.length - 1].label;
				}
				if (pModulesTemp4.length > 0){
					pModulesList[3] = { label2: "Modules List 4", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[3].label = pModulesTemp4[0].label + " ---> " + pModulesTemp4[pModulesTemp4.length - 1].label;
				}
				if (pModulesTemp5.length > 0){
					pModulesList[4] = { label2: "Modules List 5", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[4].label = pModulesTemp5[0].label + " ---> " + pModulesTemp5[pModulesTemp5.length - 1].label;
				}	
				if (pModulesTemp6.length > 0){
					pModulesList[5] = { label2: "Modules List 6", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[5].label = pModulesTemp6[0].label + " ---> " + pModulesTemp6[pModulesTemp6.length - 1].label;
				}	
				if (pModulesTemp7.length > 0){
					pModulesList[6] = { label2: "Modules List 7", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[6].label = pModulesTemp7[0].label + " ---> " + pModulesTemp7[pModulesTemp7.length - 1].label;
				}	
				if (pModulesTemp8.length > 0){
					pModulesList[7] = { label2: "Modules List 8", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[7].label = pModulesTemp8[0].label + " ---> " + pModulesTemp8[pModulesTemp8.length - 1].label;
				}	
				if (pModulesTemp9.length > 0){
					pModulesList[8] = { label2: "Modules List 9", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[8].label = pModulesTemp9[0].label + " ---> " + pModulesTemp9[pModulesTemp9.length - 1].label;
				}	
				if (pModulesTemp10.length > 0){
					pModulesList[9] = { label2: "Modules List 10", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[9].label = pModulesTemp10[0].label + " ---> " + pModulesTemp10[pModulesTemp10.length - 1].label;
				}
				if (pModulesTemp11.length > 0){
					pModulesList[10] = { label2: "Modules List 11", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[10].label = pModulesTemp11[0].label + " ---> " + pModulesTemp11[pModulesTemp11.length - 1].label;
				}
				if (pModulesTemp12.length > 0){
					pModulesList[11] = { label2: "Modules List 12", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[11].label = pModulesTemp12[0].label + " ---> " + pModulesTemp12[pModulesTemp12.length - 1].label;
				}
				if (pModulesTemp13.length > 0){
					pModulesList[12] = { label2: "Modules List 13", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[12].label = pModulesTemp13[0].label + " ---> " + pModulesTemp13[pModulesTemp13.length - 1].label;
				}
				if (pModulesTemp14.length > 0){
					pModulesList[13] = { label2: "Modules List 14", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[13].label = pModulesTemp14[0].label + " ---> " + pModulesTemp14[pModulesTemp14.length - 1].label;
				}
				if (pModulesTemp15.length > 0){
					pModulesList[14] = { label2: "Modules List 15", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[14].label = pModulesTemp15[0].label + " ---> " + pModulesTemp15[pModulesTemp15.length - 1].label;
				}
				if (pModulesTemp16.length > 0){
					pModulesList[15] = { label2: "Modules List 16", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[15].label = pModulesTemp16[0].label + " ---> " + pModulesTemp16[pModulesTemp16.length - 1].label;
				}
				if (pModulesTemp17.length > 0){
					pModulesList[16] = { label2: "Modules List 17", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[16].label = pModulesTemp17[0].label + " ---> " + pModulesTemp17[pModulesTemp17.length - 1].label;
				}
				if (pModulesTemp18.length > 0){
					pModulesList[17] = { label2: "Modules List 18", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[17].label = pModulesTemp18[0].label + " ---> " + pModulesTemp18[pModulesTemp18.length - 1].label;
				}
				if (pModulesTemp19.length > 0){
					pModulesList[18] = { label2: "Modules List 19", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[18].label = pModulesTemp19[0].label + " ---> " + pModulesTemp19[pModulesTemp19.length - 1].label;
				}
				if (pModulesTemp20.length > 0){
					pModulesList[19] = { label2: "Modules List 20", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[19].label = pModulesTemp20[0].label + " ---> " + pModulesTemp20[pModulesTemp20.length - 1].label;
				}
				if (pModulesTemp21.length > 0){
					pModulesList[20] = { label2: "Modules List 21", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[20].label = pModulesTemp21[0].label + " ---> " + pModulesTemp21[pModulesTemp21.length - 1].label;
				}
				if (pModulesTemp22.length > 0){
					pModulesList[21] = { label2: "Modules List 22", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[21].label = pModulesTemp22[0].label + " ---> " + pModulesTemp22[pModulesTemp22.length - 1].label;
				}
				if (pModulesTemp23.length > 0){
					pModulesList[22] = { label2: "Modules List 23", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[22].label = pModulesTemp23[0].label + " ---> " + pModulesTemp23[pModulesTemp23.length - 1].label;
				}
				if (pModulesTemp24.length > 0){
					pModulesList[23] = { label2: "Modules List 24", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[23].label = pModulesTemp24[0].label + " ---> " + pModulesTemp24[pModulesTemp24.length - 1].label;
				}
				if (pModulesTemp25.length > 0){
					pModulesList[24] = { label2: "Modules List 25", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[24].label = pModulesTemp25[0].label + " ---> " + pModulesTemp25[pModulesTemp25.length - 1].label;
				}
				if (pModulesTemp26.length > 0){
					pModulesList[25] = { label2: "Modules List 26", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[25].label = pModulesTemp26[0].label + " ---> " + pModulesTemp26[pModulesTemp26.length - 1].label;
				}
				if (pModulesTemp27.length > 0){
					pModulesList[26] = { label2: "Modules List 27", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[26].label = pModulesTemp27[0].label + " ---> " + pModulesTemp27[pModulesTemp27.length - 1].label;
				}
				if (pModulesTemp28.length > 0){
					pModulesList[27] = { label2: "Modules List 28", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[27].label = pModulesTemp28[0].label + " ---> " + pModulesTemp28[pModulesTemp28.length - 1].label;
				}
				if (pModulesTemp29.length > 0){
					pModulesList[28] = { label2: "Modules List 29", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[28].label = pModulesTemp29[0].label + " ---> " + pModulesTemp29[pModulesTemp29.length - 1].label;
				}
				if (pModulesTemp30.length > 0){
					pModulesList[29] = { label2: "Modules List 30", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[29].label = pModulesTemp30[0].label + " ---> " + pModulesTemp30[pModulesTemp30.length - 1].label;
				}
				if (pModulesTemp31.length > 0){
					pModulesList[30] = { label2: "Modules List 31", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[30].label = pModulesTemp31[0].label + " ---> " + pModulesTemp31[pModulesTemp31.length - 1].label;
				}
				if (pModulesTemp32.length > 0){
					pModulesList[31] = { label2: "Modules List 32", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[31].label = pModulesTemp32[0].label + " ---> " + pModulesTemp32[pModulesTemp32.length - 1].label;
				}
				if (pModulesTemp33.length > 0){
					pModulesList[32] = { label2: "Modules List 33", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[32].label = pModulesTemp33[0].label + " ---> " + pModulesTemp33[pModulesTemp33.length - 1].label;
				}
				if (pModulesTemp34.length > 0){
					pModulesList[33] = { label2: "Modules List 34", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[33].label = pModulesTemp34[0].label + " ---> " + pModulesTemp34[pModulesTemp34.length - 1].label;
				}
				if (pModulesTemp35.length > 0){
					pModulesList[34] = { label2: "Modules List 35", color: moduleColor, type: "Module", PID: "-1" };
					pModulesList[34].label = pModulesTemp35[0].label + " ---> " + pModulesTemp35[pModulesTemp35.length - 1].label;
				}

				pModules[0] = { label: "Loaded Modules", color: moduleColor, type: "Module", PID: "-1", list: true };
			}
			else {
				pModulesTemp = pModules;
				pModules = [];
				pModules[0] = { label: "Loaded Modules", color: moduleColor, type: "Module", PID: "-1"};
			}
			return pModules;
		}
	}
	else {
		for (var i=0; i < modules.length; i++){
			var alreadyAdded = false;
			if (Number(modules[i].PID) == PID){
				for (var j=0; j < pModules.length; j++){
					if (modules[i].Name == pModules[j].Name){
						alreadyAdded = true;
					}
				}
				if (alreadyAdded == true){
				}
				else {
					pModules.push(modules[i]);
				}
			}
		}		
		pModules = pModules.map(function(d){
				return { label: d.Name, color: moduleColor, type: "Module", PID: d.PID, path: d.Path, overallList: true}
				}).sort(function(a,b) {
					return cmp(a.label, b.label);
					});
		
		
		if (pModules.length > 0){
			if (pModules.length > 40){
				for (var i=0; i < pModules.length; i++){
					if (i < 40){
						pModulesTemp1.push(pModules[i]);
					}
					else if ((i > 39) && (i < 80)){
						pModulesTemp2.push(pModules[i]);
					}
					else if ((i > 79) && (i < 120)){
						pModulesTemp3.push(pModules[i]);
					}
					else if ((i > 119) && (i < 160)){
						pModulesTemp4.push(pModules[i]);
					}
					else if ((i > 159) && (i < 200)){
						pModulesTemp5.push(pModules[i]);
					}
					else if ((i > 199) && (i < 240)){
						pModulesTemp6.push(pModules[i]);
					}
					else if ((i > 239) && (i < 280)){
						pModulesTemp7.push(pModules[i]);
					}
					else if ((i > 279) && (i < 320)){
						pModulesTemp8.push(pModules[i]);
					}
					else if ((i > 319) && (i < 360)){
						pModulesTemp9.push(pModules[i]);
					}
					else if ((i > 359) && (i < 400)){
						pModulesTemp10.push(pModules[i]);
					}
					else if ((i > 399) && (i < 440)){
						pModulesTemp11.push(pModules[i]);
					}
					else if ((i > 439) && (i < 480)){
						pModulesTemp12.push(pModules[i]);
					}
					else if ((i > 479) && (i < 520)){
						pModulesTemp13.push(pModules[i]);
					}
					else if ((i > 519) && (i < 560)){
						pModulesTemp14.push(pModules[i]);
					}
					else if ((i > 559) && (i < 600)){
						pModulesTemp15.push(pModules[i]);
					}
					else if ((i > 599) && (i < 640)){
						pModulesTemp16.push(pModules[i]);
					}
					else if ((i > 639) && (i < 680)){
						pModulesTemp17.push(pModules[i]);
					}
					else if ((i > 679) && (i < 720)){
						pModulesTemp18.push(pModules[i]);
					}
					else if ((i > 719) && (i < 760)){
						pModulesTemp19.push(pModules[i]);
					}
					else if ((i > 759) && (i < 800)){
						pModulesTemp20.push(pModules[i]);
					}
					else if ((i > 799) && (i < 840)){
						pModulesTemp21.push(pModules[i]);
					}
					else if ((i > 839) && (i < 880)){
						pModulesTemp22.push(pModules[i]);
					}
					else if ((i > 879) && (i < 920)){
						pModulesTemp23.push(pModules[i]);
					}
					else if ((i > 919) && (i < 960)){
						pModulesTemp24.push(pModules[i]);
					}
					else if ((i > 959) && (i < 1000)){
						pModulesTemp25.push(pModules[i]);
					}
					else if ((i > 999) && (i < 1040)){
						pModulesTemp26.push(pModules[i]);
					}
					else if ((i > 1039) && (i < 1080)){
						pModulesTemp27.push(pModules[i]);
					}
					else if ((i > 1079) && (i < 1120)){
						pModulesTemp28.push(pModules[i]);
					}
					else if ((i > 1119) && (i < 1160)){
						pModulesTemp29.push(pModules[i]);
					}
					else if ((i > 1159) && (i < 1200)){
						pModulesTemp30.push(pModules[i]);
					}
					else if ((i > 1199) && (i < 1240)){
						pModulesTemp31.push(pModules[i]);
					}
					else if ((i > 1239) && (i < 1280)){
						pModulesTemp32.push(pModules[i]);
					}
					else if ((i > 1279) && (i < 1320)){
						pModulesTemp33.push(pModules[i]);
					}
					else if ((i > 1319) && (i < 1360)){
						pModulesTemp34.push(pModules[i]);
					}
					else if ((i > 1359) && (i < 1400)){
						pModulesTemp35.push(pModules[i]);
					}
				}
				
				pModulesTemp = pModules;
				pModules = [];
				
				if (pModulesTemp1.length > 0){
					pModulesList[0] = { label2: "Modules List 1", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[0].label = pModulesTemp1[0].label + " ---> " + pModulesTemp1[pModulesTemp1.length - 1].label;
				}
				if (pModulesTemp2.length > 0){
					pModulesList[1] = { label2: "Modules List 2", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[1].label = pModulesTemp2[0].label + " ---> " + pModulesTemp2[pModulesTemp2.length - 1].label;
				}
				if (pModulesTemp3.length > 0){
					pModulesList[2] = { label2: "Modules List 3", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[2].label = pModulesTemp3[0].label + " ---> " + pModulesTemp3[pModulesTemp3.length - 1].label;
				}
				if (pModulesTemp4.length > 0){
					pModulesList[3] = { label2: "Modules List 4", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[3].label = pModulesTemp4[0].label + " ---> " + pModulesTemp4[pModulesTemp4.length - 1].label;
				}
				if (pModulesTemp5.length > 0){
					pModulesList[4] = { label2: "Modules List 5", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[4].label = pModulesTemp5[0].label + " ---> " + pModulesTemp5[pModulesTemp5.length - 1].label;
				}	
				if (pModulesTemp6.length > 0){
					pModulesList[5] = { label2: "Modules List 6", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[5].label = pModulesTemp6[0].label + " ---> " + pModulesTemp6[pModulesTemp6.length - 1].label;
				}	
				if (pModulesTemp7.length > 0){
					pModulesList[6] = { label2: "Modules List 7", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[6].label = pModulesTemp7[0].label + " ---> " + pModulesTemp7[pModulesTemp7.length - 1].label;
				}	
				if (pModulesTemp8.length > 0){
					pModulesList[7] = { label2: "Modules List 8", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[7].label = pModulesTemp8[0].label + " ---> " + pModulesTemp8[pModulesTemp8.length - 1].label;
				}	
				if (pModulesTemp9.length > 0){
					pModulesList[8] = { label2: "Modules List 9", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[8].label = pModulesTemp9[0].label + " ---> " + pModulesTemp9[pModulesTemp9.length - 1].label;
				}	
				if (pModulesTemp10.length > 0){
					pModulesList[9] = { label2: "Modules List 10", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[9].label = pModulesTemp10[0].label + " ---> " + pModulesTemp10[pModulesTemp10.length - 1].label;
				}
				if (pModulesTemp11.length > 0){
					pModulesList[10] = { label2: "Modules List 11", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[10].label = pModulesTemp11[0].label + " ---> " + pModulesTemp11[pModulesTemp11.length - 1].label;
				}
				if (pModulesTemp12.length > 0){
					pModulesList[11] = { label2: "Modules List 12", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[11].label = pModulesTemp12[0].label + " ---> " + pModulesTemp12[pModulesTemp12.length - 1].label;
				}
				if (pModulesTemp13.length > 0){
					pModulesList[12] = { label2: "Modules List 13", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[12].label = pModulesTemp13[0].label + " ---> " + pModulesTemp13[pModulesTemp13.length - 1].label;
				}
				if (pModulesTemp14.length > 0){
					pModulesList[13] = { label2: "Modules List 14", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[13].label = pModulesTemp14[0].label + " ---> " + pModulesTemp14[pModulesTemp14.length - 1].label;
				}
				if (pModulesTemp15.length > 0){
					pModulesList[14] = { label2: "Modules List 15", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[14].label = pModulesTemp15[0].label + " ---> " + pModulesTemp15[pModulesTemp15.length - 1].label;
				}
				if (pModulesTemp16.length > 0){
					pModulesList[15] = { label2: "Modules List 16", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[15].label = pModulesTemp16[0].label + " ---> " + pModulesTemp16[pModulesTemp16.length - 1].label;
				}
				if (pModulesTemp17.length > 0){
					pModulesList[16] = { label2: "Modules List 17", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[16].label = pModulesTemp17[0].label + " ---> " + pModulesTemp17[pModulesTemp17.length - 1].label;
				}
				if (pModulesTemp18.length > 0){
					pModulesList[17] = { label2: "Modules List 18", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[17].label = pModulesTemp18[0].label + " ---> " + pModulesTemp18[pModulesTemp18.length - 1].label;
				}
				if (pModulesTemp19.length > 0){
					pModulesList[18] = { label2: "Modules List 19", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[18].label = pModulesTemp19[0].label + " ---> " + pModulesTemp19[pModulesTemp19.length - 1].label;
				}
				if (pModulesTemp20.length > 0){
					pModulesList[19] = { label2: "Modules List 20", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[19].label = pModulesTemp20[0].label + " ---> " + pModulesTemp20[pModulesTemp20.length - 1].label;
				}
				if (pModulesTemp21.length > 0){
					pModulesList[20] = { label2: "Modules List 21", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[20].label = pModulesTemp21[0].label + " ---> " + pModulesTemp21[pModulesTemp21.length - 1].label;
				}
				if (pModulesTemp22.length > 0){
					pModulesList[21] = { label2: "Modules List 22", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[21].label = pModulesTemp22[0].label + " ---> " + pModulesTemp22[pModulesTemp22.length - 1].label;
				}
				if (pModulesTemp23.length > 0){
					pModulesList[22] = { label2: "Modules List 23", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[22].label = pModulesTemp23[0].label + " ---> " + pModulesTemp23[pModulesTemp23.length - 1].label;
				}
				if (pModulesTemp24.length > 0){
					pModulesList[23] = { label2: "Modules List 24", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[23].label = pModulesTemp24[0].label + " ---> " + pModulesTemp24[pModulesTemp24.length - 1].label;
				}
				if (pModulesTemp25.length > 0){
					pModulesList[24] = { label2: "Modules List 25", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[24].label = pModulesTemp25[0].label + " ---> " + pModulesTemp25[pModulesTemp25.length - 1].label;
				}
				if (pModulesTemp26.length > 0){
					pModulesList[25] = { label2: "Modules List 26", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[25].label = pModulesTemp26[0].label + " ---> " + pModulesTemp26[pModulesTemp26.length - 1].label;
				}
				if (pModulesTemp27.length > 0){
					pModulesList[26] = { label2: "Modules List 27", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[26].label = pModulesTemp27[0].label + " ---> " + pModulesTemp27[pModulesTemp27.length - 1].label;
				}
				if (pModulesTemp28.length > 0){
					pModulesList[27] = { label2: "Modules List 28", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[27].label = pModulesTemp28[0].label + " ---> " + pModulesTemp28[pModulesTemp28.length - 1].label;
				}
				if (pModulesTemp29.length > 0){
					pModulesList[28] = { label2: "Modules List 29", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[28].label = pModulesTemp29[0].label + " ---> " + pModulesTemp29[pModulesTemp29.length - 1].label;
				}
				if (pModulesTemp30.length > 0){
					pModulesList[29] = { label2: "Modules List 30", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[29].label = pModulesTemp30[0].label + " ---> " + pModulesTemp30[pModulesTemp30.length - 1].label;
				}
				if (pModulesTemp31.length > 0){
					pModulesList[30] = { label2: "Modules List 31", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[30].label = pModulesTemp31[0].label + " ---> " + pModulesTemp31[pModulesTemp31.length - 1].label;
				}
				if (pModulesTemp32.length > 0){
					pModulesList[31] = { label2: "Modules List 32", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[31].label = pModulesTemp32[0].label + " ---> " + pModulesTemp32[pModulesTemp32.length - 1].label;
				}
				if (pModulesTemp33.length > 0){
					pModulesList[32] = { label2: "Modules List 33", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[32].label = pModulesTemp33[0].label + " ---> " + pModulesTemp33[pModulesTemp33.length - 1].label;
				}
				if (pModulesTemp34.length > 0){
					pModulesList[33] = { label2: "Modules List 34", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[33].label = pModulesTemp34[0].label + " ---> " + pModulesTemp34[pModulesTemp34.length - 1].label;
				}
				if (pModulesTemp35.length > 0){
					pModulesList[34] = { label2: "Modules List 35", color: moduleColor, type: "Module", PID: String(PID) };
					pModulesList[34].label = pModulesTemp35[0].label + " ---> " + pModulesTemp35[pModulesTemp35.length - 1].label;
				}
				
				pModules[0] = { label: "Loaded Modules", color: moduleColor, type: "Module", list: true };
				return pModules;
			}
			else if (pModules.length == 1){
				return pModules;
			}
			else {
				pModulesTemp = pModules;
				pModules = [];
				pModules[0] = { label: "Loaded Modules", color: moduleColor, type: "Module" };
				return pModules;
			}
		}
		else {
			return pModules;
		}
	}
}

function getResources(PID){
	if (dataset == "android"){
		var f = getFiles(PID);
		var p = getPorts(PID);
		var serv = getServices(PID);
		var sock = getSockets(PID);
		var rlist = [];

		serv.forEach(function(d) {
			rlist.push(d);
		});
		
		p.forEach(function(d) {
			rlist.push(d);
		});
		
		sock.forEach(function(d) {
			rlist.push(d);
		});
		
		f.forEach(function(d) {
			rlist.push(d);
		});

		rlist.forEach(function(d) {
			d.value = (1 / (rlist.length));
			});
	}
	else {
		var f = getFiles(PID);
		var k = getKeys(PID);
		var p = getPorts(PID);
		var serv = getServices(PID);
		var sock = getSockets(PID);
		var mods = getModules(PID);
		var rlist = [];
		
		if (f.length > 0){
			f.forEach(function(d) {
				rlist.push(d);
			});
		}
		else {
			f[0] = { label: "No File Handles", color: fileColor, type: "File" };
			rlist.push(f[0]);
		}
		
		if (k.length > 0){
			k.forEach(function(d) {
				rlist.push(d);
			});
		}
		else {
			k[0] = { label: "No Key Handles", color: keyColor, type: "Key" };
			rlist.push(k[0]);
		}
		
		if (mods.length > 0){
			mods.forEach(function(d) {
				rlist.push(d);
			});
		}
		else {
			mods[0] = { label: "No Loaded Modules", color: moduleColor, type: "Module" };
			rlist.push(mods[0]);
		}
		
		if (serv.length > 0){
			serv.forEach(function(d) {
				rlist.push(d);
			});
		}
		else {
			serv[0] = { label: "No Running Services", color: serviceColor, type: "Service" };
			rlist.push(serv[0]);
		}
		
		if (p.length > 0){
			p.forEach(function(d) {
				rlist.push(d);
			});
		}
		else {
			p[0] = { label: "No Open Ports", color: portColor, type: "Port" };
			rlist.push(p[0]);
		}
		
		if (sock.length > 0){		
			sock.forEach(function(d) {
				rlist.push(d);
			});
		}
		else {
			sock[0] = { label: "No Open Sockets", color: socketColor, type: "Socket" };
			rlist.push(sock[0]);
		}		
		
		if (rlist.length > 0){
			rlist.forEach(function(d) {
				d.value = (1 / (rlist.length));
				});
		}
	}
	
	if (rlist.length == 0){
		rlist[0] = { label: "No Files", color: fileColor, type: "File", PID: String(PID) };
		rlist[1] = { label: "No Keys", color: keyColor, type: "Key", PID: String(PID) };
		rlist[2] = { label: "No Loaded Modules", color: moduleColor, type: "Module", PID: String(PID) };
		rlist[3] = { label: "No Services", color: serviceColor, type: "Service", PID: String(PID) };
		rlist[4] = { label: "No Ports", color: portColor, type: "Port", PID: String(PID) };
		rlist[5] = { label: "No Sockets", color: socketColor, type: "Socket", PID: String(PID) };
		tempResources = rlist;
		return rlist;
	}
	else {
		tempResources = rlist;
		return rlist;
	}
}