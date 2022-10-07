var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

/*Post form data*/
router.post('/story', function (req, res) {
    let body = req.body;
    let newStory = getStory(body);
    res.render('story', {
        newStory: newStory
    });
})

module.exports = router;

function getStory(formData) {
    if (formData.storyChoice === "4"){
        formData.storyChoice = getRandomInt(3).toString();

    }
    if (formData.storyChoice === "1") {
        return generateStory1(formData);
    } else if (formData.storyChoice === "2") {
        return generateStory2(formData);
    } else if (formData.storyChoice === "3") {
        return generateStory3(formData);
    } else {
        return "invalid";
    }
}

function generateStory1(formData) {
   return `Today I went to my favorite Taco Stand called the ${formData.adjective1} Grizzly Bear. Unlike most food stands, they cook and prepare the food in a ferris wheel while you ${formData.verb1}. The best thing on the menu is the green ${formData.noun1}. Instead of ground beef they fill the taco with cheeetos, cheese, and top it off with a salsa made from gummy bears. If that doesn't make your mouth water, then it' just like always says: You cant please everyone ! Story found in https://www.glowwordbooks.com/blog/category/kids-online-mad-libs/`
}

function generateStory2(formData) {
    return `Today a police officer named ${formData.noun1} came to our school to talk to us about her job. She said the most important skill you need to know to do her job is to be able to ${formData.verb1} around (a) ${formData.adjective1} ${formData.noun1}. She said it was easy for her to learn her job because she loved to ${formData.verb1} when she was my age--and that helps a lot! If you're considering her profession, I hope you can be near (a) ${formData.adjective1} ${formData.noun1}. That's very important! If you get too distracted in that situation you won't be able to 0 next to (a) ${formData.noun1}! Story found in https://www.glowwordbooks.com/blog/category/kids-online-mad-libs/`
}

function generateStory3(formData) {
    return `I just got back from a pizza party with ${formData.noun1}. Can you believe we got to eat ${formData.adjective1} pizza in ${formData.noun1}?! Everyone got to choose their own toppings. I made '${formData.noun1} and ${formData.noun1}' pizza, which is my favorite! They even stuffed the crust with ${formData.noun1}. How fun! If that wasn't good enough already, Hitler was there singing Happy Birthday. I was so inspired by the music, I had to get up out of my seat and ${formData.verb1}. Story found in https://www.glowwordbooks.com/blog/category/kids-online-mad-libs/`
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max +1);
}