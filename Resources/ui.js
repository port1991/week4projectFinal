exports.uiFunction = function(){	
	// the main scroll view where all the information will be included
	
	var mainWin = Ti.UI.createWindow({
		//showVerticalScrowIndicator : true,
		backgroundColor: "#2E2E2E",
		//backgroundImage: "pictures/grid2.png",
		layout : "vertical",
		fullscreen: true,
		
	});
	
	
	var scrollView = Ti.UI.createScrollView({
		  contentWidth: 'auto',
		  contentHeight: 'auto',
		  showVerticalScrollIndicator: true,
		  showHorizontalScrollIndicator: true,
		   height: '100%',
		  // width: '80%',
		  layout: "vertical",
		//  backgroundColor: "blue"
	//	fullscreen: true
	});
	
	var dbController = require('dbController'); // create instance for database controller
	var data = dbController.findAll();
	
	
	if(typeof data['amount'] !== 'undefined'){  
		
	var currentDate = new Date();
		
		var lblDate = Ti.UI.createLabel({
			color: 'white',
			right: 10,
			fontWeight: 'bold',
			text: currentDate.getFullYear() + " " + "/" + " " + currentDate.getMonth() + " " + "/" + " " + currentDate.getDate()  ,
			top: 10
		});
	
	
	var topic = Ti.UI.createLabel({
			color: 'white',
			//backgroundColor: "yellow",
			font:{fontFamily:'Trebuchet MS',fontSize:18,fontWeight:'bold'},
		//	left: 10,
			text: 'Current Price: ',
			top: 40
		});
		
	var currentPrice = Ti.UI.createLabel({
			color: 'white',
			//left: 30,
			text: "1 BTC = "+ " " + data['amount'] + " " + data['currency'],
			top: 20
	});
	
	
	//============LTC BUTTON WEBSITE=====================
		var buttonBtceWebsite = Ti.UI.createButton({
			backgroundImage: 'pictures/blank-light-blue-button-hi.png',
		//	left: 10,
			title: "coinbase.com" ,
			top: 20,
			//height: 30,
			font : {fontFamily:"Helvetica",fontsize:8,fontWeight: "bold"},
			color: 'black',
			width: 110,
			
		});
		
		//======Add event Listener for button LTC
		buttonBtceWebsite.addEventListener('click', function(){  //this will open outlook.com
			var na = require('website');
			na.btcewebsiteFunct();
		
		});
		
		
		var logoCoin = Ti.UI.createImageView({
			backgroundImage: "pictures/bitcoin_logo_matrix.jpg",
			top: 40,
			width: 120,
			height: 120,
			//left: "28%"
			
		});
	
	
	mainWin.add(scrollView);
	scrollView.add(lblDate);
	scrollView.add(logoCoin);
	scrollView.add(topic);
	scrollView.add(currentPrice);
	scrollView.add(buttonBtceWebsite);
	
	} else {
		// when there is no information to show(for connectivity error or api result null)
		var noInfo = Ti.UI.createLabel({
			color: 'white',
			text: 'No information found'	
		});
			mainWin.add(noInfo);
	}
	
	
// exporting main window to app.js
exports.mainWin = mainWin;
	mainWin.open({modal:true,
  modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
  modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN
  		
 	});
};