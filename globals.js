var procInfoDiv = d3.select(document.getElementById("procInfoDiv"));
var header_SUMMARY = d3.select(document.getElementById("header_SUMMARY"));
var header_DATASET = d3.select(document.getElementById("header_DATASET"));
var header_NAME = d3.select(document.getElementById("header_NAME"));
var header_PID = d3.select(document.getElementById("header_PID"));
var header_PPID = d3.select(document.getElementById("header_PPID"));
var header_USER = d3.select(document.getElementById("header_USER"));
var header_TYPE = d3.select(document.getElementById("header_TYPE"));
var header_STATUS = d3.select(document.getElementById("header_STATUS"));
var header_VSIZE = d3.select(document.getElementById("header_VSIZE"));
var header_RSS = d3.select(document.getElementById("header_RSS"));
var header_WCHAN = d3.select(document.getElementById("header_WCHAN"));
var header_PC = d3.select(document.getElementById("header_PC"));

var toolTip = d3.select(document.getElementById("toolTip"));
var header = d3.select(document.getElementById("head"));
var header1 = d3.select(document.getElementById("header1"));
var header2 = d3.select(document.getElementById("header2"));
var total = d3.select(document.getElementById("totalDiv"));
	
var svg = d3.select("body")
	.append("svg")
	.append("g")

svg.append("g")
	.attr("class", "slices");
svg.append("g")
	.attr("class", "labels");
svg.append("g")
	.attr("class", "lines");
svg.append("g")
	.attr("class", "bubbles");
	
var w = 1280,
    h = 800,
    r = 720;
	
var width = 960,
    height = 450,
	radius = Math.min(width, height),
	nodesTranslateX = -360;
	nodesTranslateY = -360;

var pie = d3.layout.pie()
	.sort(null)
	.value(function(d) {
		return d.value;
	});

var arc = d3.svg.arc()
	.outerRadius(radius * 0.75)
	.innerRadius(radius * 0.7);

var outerArc = d3.svg.arc()
	.innerRadius(radius + 100)
	.outerRadius(radius * 0.5);

svg.attr("transform", "translate(" + ((width / 2) + 160) + "," + height + ")");

var nodesSvg=svg.append("g")
    .attr("class","nodes")
    .attr("transform", "translate(" + nodesTranslateX + "," + nodesTranslateY + ")");
	
var linksSvg=svg.append("g")
    .attr("class","links")
    .attr("transform", "translate(" + chordsTranslate + "," + chordsTranslate + ")");
	
var chordsTranslate=((radius * 0.5) + 100);

var bubbleRadius = ((radius * 2));

var bubble = d3.layout.pack()
    .sort(null)
    .size([bubbleRadius*2.5, bubbleRadius*2.5])
	.radius(50)
    .padding(1.5);
	
var pack = d3.layout.pack()
	.size([r, r])
	.radius(12);
	
var pack2 = d3.layout.pack()
	.size([r, r])
	.padding(0.5)
	.value(function(d) { return d.value;})
	.radius(30);
	
var pack3 = d3.layout.pack()
	.size([r, r])
	.padding(0.5)
	.value(function(d) { return d.value;})
	.radius(20);

var key = function(d){ return d.data.label; };

var fileColor = "#5882FA",
	portColor = "#ffff00",
	serviceColor = "#FE9A2E",
	socketColor = "#3cff00",
	keyColor = "#AC58FA",
	moduleColor = "#FF4040",
	kprocColor="#F80018",
	procColor="#0543bc",
	otherColor="steelblue";

var dataset,
	whitelist;
	
var files = [],
	ports = [],
	services = [],
	sockets = [],
	processes = [],
	handles = [],
	nodes = [],
	keys = [],
	modules = [];
	
var whitelistedProcesses = [],
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
	
var showWhitelist = false;
	
var rlist = [],
	pFiles = [],
	pFilesTemp = [],
	pFilesTemp1 = [],
	pFilesTemp2 = [],
	pFilesTemp3 = [],
	pFilesTemp4 = [],
	pFilesTemp5 = [],
	pFilesTemp6 = [],
	pFilesTemp7 = [],
	pFilesTemp8 = [],
	pFilesTemp9 = [],
	pFilesTemp10 = [],
	pFilesList = [],
	pPorts = [],
	pPortsTemp = [],
	pPortsTemp1 = [],
	pPortsTemp2 = [],
	pPortsList = [],
	pServices = [],
	pServicesTemp = [],
	pSockets = [],
	pSocketsTemp = [],
	pSocketsTemp1 = [];
	pSocketsTemp2 = [];
	pSocketsList = [];
	pHandles = [],
	pHandlesTemp = [],
	pKeys = [],
	pKeysTemp = [],
	pKeysTemp1 = [],
	pKeysTemp2 = [],
	pKeysTemp3 = [],
	pKeysTemp4 = [],
	pKeysTemp5 = [],
	pKeysTemp6 = [],
	pKeysTemp7 = [],
	pKeysTemp8 = [],
	pKeysList = [],
	pModules = [],
	pModulesTemp = [],
	pModulesTemp1 = [],
	pModulesTemp2 = [],
	pModulesTemp3 = [],
	pModulesTemp4 = [],
	pModulesTemp5 = [],
	pModulesTemp6 = [],
	pModulesTemp7 = [],
	pModulesTemp8 = [],
	pModulesTemp9 = [],
	pModulesTemp10 = [],
	pModulesTemp11 = [],
	pModulesTemp12 = [],
	pModulesTemp13 = [],
	pModulesTemp14 = [],
	pModulesTemp15 = [],
	pModulesTemp16 = [],
	pModulesTemp17 = [],
	pModulesTemp18 = [],
	pModulesTemp19 = [],
	pModulesTemp20 = [],
	pModulesTemp21 = [],
	pModulesTemp22 = [],
	pModulesTemp23 = [],
	pModulesTemp24 = [],
	pModulesTemp25 = [],
	pModulesTemp26 = [],
	pModulesTemp27 = [],
	pModulesTemp28 = [],
	pModulesTemp29 = [],
	pModulesTemp30 = [],
	pModulesTemp31 = [],
	pModulesTemp32 = [],
	pModulesTemp33 = [],
	pModulesTemp34 = [],
	pModulesTemp35 = [],
	pModulesList = [];
	
var tempChildren=[],
	root = {};
	
var tempNode = [];

var tempResources = [];

var centroids = [],
	linkList = [];

var procClicked = false;

var listPID = [],
	listPPID = [];
	
var links = false;

var DOCUME = [],
	documents = [],
	programFiles = [],
	windows = [],
	others = [],
	device = [],
	namedPipe = [];

function currentDataset()
{
	var datasetList=document.getElementById("datasetList");

	if (datasetList.options[datasetList.selectedIndex].text == "WinXP IE"){
		dataset = "xpIE";
	}
	else if (datasetList.options[datasetList.selectedIndex].text == "WinXP Chrome"){
		dataset = "xpChrome";
	}
	else if (datasetList.options[datasetList.selectedIndex].text == "WinXP Firefox"){
		dataset = "xpFirefox";
	}
	else if (datasetList.options[datasetList.selectedIndex].text == "WinXP Solitaire"){
		dataset = "xpSolitaire";
	}
	else if (datasetList.options[datasetList.selectedIndex].text == "WinXP Malware 1"){
		dataset = "xpFuto";
	}
	else if (datasetList.options[datasetList.selectedIndex].text == "WinXP Malware 2"){
		dataset = "xpRAT";
	}
	else if (datasetList.options[datasetList.selectedIndex].text == "WinXP Malware 3"){
		dataset = "xpRAT2";
	}
	else if (datasetList.options[datasetList.selectedIndex].text == "Windows 7"){
		dataset = "WIN7";
	}
	else if (datasetList.options[datasetList.selectedIndex].text == "Android 4.3"){
		dataset = "android";
	}
}

function currentWhitelist()
{
	var whiteList=document.getElementById("whiteList");

	if (whiteList.options[whiteList.selectedIndex].text == "WinXP IE"){
		whitelist = "xpIE";
	}
	else if (whiteList.options[whiteList.selectedIndex].text == "WinXP Chrome"){
		whitelist = "xpChrome";
	}
	else if (whiteList.options[whiteList.selectedIndex].text == "WinXP Firefox"){
		whitelist = "xpFirefox";
	}
	else if (whiteList.options[whiteList.selectedIndex].text == "WinXP Solitaire"){
		whitelist = "xpSolitaire";
	}
	else if (whiteList.options[whiteList.selectedIndex].text == "WinXP Malware 1"){
		whitelist = "xpFuto";
	}
	else if (whiteList.options[whiteList.selectedIndex].text == "WinXP Malware 2"){
		whitelist = "xpRAT";
	}
	else if (whiteList.options[whiteList.selectedIndex].text == "WinXP Malware 3"){
		whitelist = "xpRAT2";
	}
}

function linksOnOff()
{
	var linkOptionList=document.getElementById("linkOptionList");
	
	if (linkOptionList.options[linkOptionList.selectedIndex].text == "Links ON"){
		links = true;
	}
	else {
		links = false;
	}
}

function compareNumbers(a, b)
{
    return a - b;
}

function cmp(x,y) {
    if(x.toLowerCase() !== y.toLowerCase()) {
        x = x.toLowerCase();
        y = y.toLowerCase();
    }
    return x > y ? 1 : (x < y ? -1 : 0);
    // or return x.localeCompare(y);
}

function midAngle(d){
	return d.startAngle + (d.endAngle - d.startAngle)/2;
}
