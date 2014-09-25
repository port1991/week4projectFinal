/* Database Controller */   //   http://sqlitebrowser.org/   for databases
var db = Ti.Database.open("db"); // initializing db
db.execute('CREATE TABLE IF NOT EXISTS coinbase_current_Price (id INTEGER PRIMARY KEY, amount TEXT, currency TEXT)');
db.close();
// Retrieve ALL data from the databasee
exports.findAll = function() {
	var data = new Array();
	db = Titanium.Database.open('db');
	var row_databse = db.execute('SELECT * FROM coinbase_current_Price');  // is defined in whatevernameis.sqlite file		
	while (row_databse.validRow) {
		data['amount'] = row_databse.fieldByName('amount');
		data['currency'] = row_databse.fieldByName('currency');


		row_databse.next();
	}
	db.close();
	
	return data;
};

// saving all from api into sqlite db
exports.saveBtcInfo = function(json) {
	db = Titanium.Database.open('db'); // initializing database
	//console.log(json.ticker.high);
	db.execute("INSERT OR REPLACE into coinbase_current_Price(id, amount, currency) VALUES(?,?,?)", 1, json.amount, json.currency);
	db.close(); // closing database
};