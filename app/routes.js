module.exports = function(app, config) {
	var auth = 	require('./auth.js')(config);
	var jwt = 	require('jsonwebtoken');
	var req, res
	
	app.post('/auth', function(_req, _res) {
		req = _req, res = _res;
		
		auth.login(req.body.username, req.body.password, function(err, data){			
			if(data) {
				var token = jwt.sign(data, config.jwtSecret, {
					expiresInMinutes: 60*24
				});
				
				res.send({
					success: true,
					token: token
				});
			} else {
				res.send({success: false});		
			}
		});
	});
}