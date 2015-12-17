var tracery = require('tracery-grammar');

var rawGrammar = 
{
    "origin": ["#sentence1#"],
    "sentence1": ["#reaction# #character1# #verb# #character2##punct# #emoji#"],
    "punct": [".","!"],
    "character1": ["Arya","Bran","Cersei","Daenerys","Davos","Gregor Clegane","Hodor","Joffrey","Jaime","Catelyn"],
    "character2": ["Margaery","Ned","Petyr Baelish","Robb","Stannis","Sansa","Tyrion","Tywin","Varys","Jorah"],
    "verb": ["kills","betrays","stabs","poisons","has sex with","marries","captures","befriends"],
    "reaction": ["OMG","I can't believe","I just found out","SPOILER ALERT:\n\n"],
    "emoji": ["😱","😨","","😭","💀"]
}

var processedGrammar = tracery.createGrammar(rawGrammar);


var tweet = processedGrammar.flatten("#origin#");
console.log(tweet);


var Twit = require('twit');


var T = new Twit(
{
    consumer_key:         process.env.CONSUMER_KEY
  , consumer_secret:      process.env.CONSUMER_SECRET
  , access_token:         process.env.ACCESS_TOKEN
  , access_token_secret:  process.env.ACCESS_TOKEN_SECRET
}
);

T.post('statuses/update', { status: tweet }, function(err, data, response) {
  console.log(err)
})



