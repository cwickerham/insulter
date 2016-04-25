var adjective = ["crusty", "leaky", "stinky", "dusty", "saucy", "monstrous", "hideous", "disgusting", "creepy", "dirty", "filthy", "flaky", "chewed-up", "salty", "hairy",
 "swollen", "moist", "decrepit", "beastly", "phlegm-smeared", "chunky", "festering", "sopping"];

var noun1 = ["cock", "pussy", "dick", "boner", "meatstick", "bratwurst", "sausage", "burrito", "taco", "chub", "dong", "ferret", "groin", "knob", "pecker", 
"peepee", "shaft", "yogurt", "jizz", "semen", "wang", "wiener", "willy", "twinkie", "slut", "shit", "poop", "titty", "scrotum", "butt", "ass", "teste", "horse", "cunt", "vag", "uncle"];

var verb = ["gobbling", "sucking", "riding", "loving", "mongering", "assaulting", "attracting", "swallowing", "chasing", "choking", "clutching", 
 "commanding", "draining", "examining", "flicking", "flogging", "fondling", "invading", "jerking", "massaging", "pawing", "shaking", "smelling" ,
  "snuggling", "tilting", "tugging", "whacking", "whipping", "wiggling", "yanking", "nibbling", "biting"];

var noun2 = ["blockhead", "idiot", "moron", "sasquatch", "numbnut", "dummy", "buffoon", "fool", "asshat", "asshole", "assface", "assjockey", "dumbass", 
 "dumbfuck", "dipshit", "fuckwad", "turdnugget", "shithead", "fuckface", "pig", "hamloaf", "sausageperson", "dope", "wanker", "tosspot", "bitchtit", "slutmachine",
 "buttplug", "potatohead"];

var introPhrase = ["It's fair to say that you're a ", "Don't pretend you're not a ", "No, fuck you, you ", "I hate you, you ", "Your mother is a ", "Your grandma was telling me about how you're a ", "Everyone is fully aware that you're a ", "Shut up, you ", "Fuck you, you "];


function generateDat(){
 
   var number0 = Math.floor(Math.random() * introPhrase.length);
 var word0 = introPhrase[number0];
  var number1 = Math.floor(Math.random() * adjective.length);
 var word1 = adjective[number1];
  var number2 = Math.floor(Math.random() * noun1.length);
 var word2 = noun1[number2];
  var number3 = Math.floor(Math.random() * verb.length);
 var word3 = verb[number3];
  var number4 = Math.floor(Math.random() * noun2.length);
 var word4 = noun2[number4];

 document.getElementById('insultHeader').innerHTML = "<h2>" + word0 + "</h2>" ;
 document.getElementById('insultSpace').innerHTML = "<h1>" + word1 + " " + word2 + "-" + word3 + " " + word4 + ".</h1>" ;}
