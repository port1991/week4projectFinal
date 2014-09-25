exports.btcewebsiteFunct = function() {
var webWindow = Ti.UI.createWindow ({
	title: "Automatic Trader",
	backgroundImage: 'grid2.png',
	fullscreen: true,
	//layout: 'horizontal'
});
var button = Ti.UI.createButton({
			backgroundImage: 'pictures/launchkey-logos_launchkey-icon-blue.png',
			left: 10,
			title: "" ,
			bottom: 5,
			height: 30,
			font : {fontFamily:"Helvetica",fontsize:8,fontWeight: "bold"},
			color: 'black',
			width: 30,
		});
		
		//event listener
		button.addEventListener('click', function(){
			webWindow.close();
		});
//
var webview = Ti.UI.createWebView({
    url: 'http://coinbase.com/'
    //url: 'http://www.google.com/'
});
webWindow.add(webview);
webWindow.add(button);

webview.addEventListener('load',function(e) {
    var cookies = webview.evalJS("document.cookie").split(";"); 
    Ti.API.info( "# of cookies -> " + cookies.length  );
    for (i = 0; i <= cookies.length - 1; i++) {
            Ti.API.info( "cookie -> " + cookies[i] );
    }
});
 webWindow.open({modal:true,
  modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
  modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN});
};

//exports.webWindow = webWindow;