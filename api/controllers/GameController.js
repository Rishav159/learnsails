/**
 * GameController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	game : function (req,res) {
		var qid = req.query.questid||"1";
		Question.findOne({id:qid}).exec(function(err,data){
			if (err) {
					console.error(err);
			}else{
				if (data) {
					//console.log(data);
					res.render("game",{object:data});
				}	else{
					res.send("no profile found!");
				}
			}
		})
	} ,
	judge : function (req,res){
		//console.log(req.body);
		Question.findOne({id:req.body.id}).exec(function (err,data) {
			if(err){
				console.error(err);
			}else{
				if(data){
					if(data.answer == req.body.choice){
						res.send({decision : true});
					}else{
						res.send({decision : false});
					}
				}else{
					res.send("No Question Found");
				}
			}
		});
	}
};
