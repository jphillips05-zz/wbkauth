module.exports = function(config) {

	return {
		'connection': {
			'host': config.mysql.host,
			'user': config.mysql.user,
			'password': config.mysql.password
		},
		'database': config.mysql.database,
		'users_table': config.mysql.users_table
	};
};