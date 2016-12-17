'use strict';

module.exports = function(Impactpoints) {
	Impactpoints.predict = function(cb) {
		//do something
		var response;
		response = 'Prediction calculations done!';
		cb(null, response);
	};

	Impactpoints.remoteMethod(
		'predict', {
			http: {
				path: '/predict',
				verb: 'get'
			},
			returns: {
				arg: 'status',
				type: 'string'
			}
		}
	);
};


