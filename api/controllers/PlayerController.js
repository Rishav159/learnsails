/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require("bcryptjs");

module.exports = {
	login : function(req, res){
		var uid = req.body.username,
				pwd = req.body.password ;
				//console.log(uid);
		Player.findOne({name:uid}).exec(function(err,data){
			if (err) {
					console.error(err);
			}else{
				if (data) {
					bcrypt.compare(pwd, data.password, function(err, match) {
						if (match) {
							req.session.user = uid;
							res.send({found:true,check:true});
						}else{
							res.send({found:true,check:false});
						}
					});

				}else{
						res.send({found:false, check:false});
				}
			}
		})
	},
	getUser : function(req,res){
		if(req.session.user){
			Player.findOne({name : req.session.user}).exec(function(err,data){
				if(err)
					throw err;
				else{
					res.send(JSON.stringify(data));
				}
			});
		}else{
			res.send({});
		}
	}
};
