/* Cloud Controller */
var Cloud = require("ti.cloud"); // initializing module

// login into cloud
exports.login = function() {
	Cloud.Users.login({
	    login: 'portilla_1@msn.com',
	    password: 'mhpr1991'
	}, function (e) {
	    if (e.success) {
	        //var user = e.users[0];
	        //alert('Success:\n' +'id: ' + user.id + '\n' +'sessionId: ' + Cloud.sessionId + '\n' +'username: ' + user.username);
	    } else {
	    	console.log("Login error: "+ e);
	        //alert('Error:\n' +((e.error && e.message) || JSON.stringify(e)));
	    }
	});
};

// saving all into cloud
exports.saveIntoCloud = function(json) {
	Cloud.Users.login({
	    login: 'portilla_1@msn.com',
	    password: 'mhpr1991'
	}, function (e) {
	    if (e.success) {
	    	Cloud.KeyValues.set({
			    name: 'coinbase',
			    value: JSON.stringify(json)
			}, function (e) {
			    if (e.success) {
			        console.log('Success');
			        return true;
			    } else {
			        console.log('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			        return false;
			    }
			});
	        //alert('Success:\n' +'id: ' + user.id + '\n' +'sessionId: ' + Cloud.sessionId + '\n' +'username: ' + user.username);
	    } else {
	    	console.log("Login error: "+ e);
	        //alert('Error:\n' +((e.error && e.message) || JSON.stringify(e)));
	    }
	});
	
};
