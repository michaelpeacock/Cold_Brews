'use strict';

module.exports = function(Myemail) {
	Myemail.sendEmail = function(msg, cb) {
		Myemail.app.models.Email.send({
			to: "kevin.wainwright@gmail.com",
			from: "kevin.wainwright@gmail.com",
			subject: "Predicted Collision Notification",
			text: "Potential marine wildlife hazzard",
			html: msg
		}, function(err, mail) {
			console.log("email sent");
			if (err) return err;

			cb(null, 'Alert!!... ' + msg);
		});
	};

	Myemail.remoteMethod(
		'sendEmail',
		{
			http: {path: '/sendEmail', verb: 'get'},
			description: [
				"Emergency collision notification email."
			],
			accepts: {arg: 'msg', type: 'string'},
			returns: {arg: 'greeting', type: 'string'}
		}
	);
};
