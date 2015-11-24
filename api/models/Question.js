/**
* Question.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    question : {
      type : "string"
    },
    answer : {
      type : "string"
    },
    choice1 : {
      type : "string"
    },
    choice2 : {
      type : "string"
    },
    choice3 : {
      type : "string"
    },
    choice4 : {
      type : "string"
    },
    complexity : {
      type : "integer"
    }
  }
};
