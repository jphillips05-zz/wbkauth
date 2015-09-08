module.exports = function(config) {
	
	var mysql = require('mysql');
	var conn = mysql.createConnection({
		host: config.mysql.host,
		user: config.mysql.user,
		password: config.mysql.password,
		database: config.mysql.database
	});
	
	return{
		login: function(username, password, callback) {
			conn.query(config.mysql.query.user_select, [username, password, config.mysql.user_salt], function(err, rows){
				if(err) {
					callback(err);
				}
				
				if(rows.length > 0) {
					callback(null, rows);
				} else {
					callback("could not fund user");
				}
			});
		}
	};
};