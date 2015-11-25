
module.exports.routes = {

  "GET /login" : "PlayerController.login" ,
  "GET /profile": "ProfileController.profile" ,
  "GET /game" : "GameController.game" ,
  "POST /game" : "GameController.judge"
};
