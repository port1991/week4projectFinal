
	//var tabGroup = Titanium.UI.createTabGroup();  //creating Tab Group
Ti.Database.install( "coinbase_current_Price.sqlite","db");//     // installing sqlite db into app  current_price.sqlite
var cc = require('CloudController'); // create instance for cloud controller
var dbController = require('dbController'); // create instance for database controller

updateDB(); // function for updating database and cloud from api

var winMain = require('ui'); //requiring list information to show on main window
// var tab1 = Ti.UI.createTab({
		// icon: 'KS_nav_views.png',
		// title: 'page1',
		// window: winMain.windowInfo
	// });
// =========== helper functions =============
function updateDB(){
	var url = "https://coinbase.com/api/v1/prices/spot_rate"; // api url
	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
	        Ti.API.info("Response: "+this.responseText);
	    	var json=JSON.parse(this.responseText); // parse api response text into json object
	    	dbController.saveBtcInfo(json); // save btc information
	    	cc.saveIntoCloud(json); // save the btc information into cloud
	    	winMain.uiFunction();  //show info
	    },
	    onerror: function(e) {
	        winMain.showInfo({});  //show info
	        alert('Network error');
	    },
	    timeout:10000
	});
	xhr.open("GET", url);
	xhr.send();
	
	return true;
}







	// tabGroup.addTab(tab1);   //add tab1 to tab group
	// //tabGroup.addTab(tab2);
	// tabGroup.open();  // open tab groups