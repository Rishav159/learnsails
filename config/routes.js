
module.exports.routes = {

  "POST /login" : "PlayerController.login" ,
  "GET /profile" : "ProfileController.profile" ,
  "GET /game" : "GameController.game" ,
  "POST /game" : "GameController.judge"
};
