var happyEmoji = document.querySelector('.happy');
var sillyEmoji = document.querySelector('.silly');
var cryingEmoji = document.querySelector('.crying');
var happyResponses = ["You go!", "Your smile just cheered me up!", "YAY!"];
var sillyResponses = ["Interesting response", "Sounds ... good?", "Me too."];
var cryingResponses = ["Do you want to talk?", "Keep your head up", "We can cry together!","What can I do?"]

happyEmoji.addEventListener('click', showResponse);
