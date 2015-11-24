/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	profile : function(req, res){
		var uid = req.query.username||"sandy";
		Player.findOne({name:uid}).exec(function(err,data){
			if (err) {
					console.error(err);
			}else{
				if (data) {
					res.render("profile",{profile:data});
				}	else{
					res.send("no profile found!");
				}
			}
		})
}
};
