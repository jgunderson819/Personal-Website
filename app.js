$(document).ready(function() {

    $("#about").on("click", function() {
        $("#display").html(
        "<img id='aboutimg' src='professional.jpg' alt='Me'>" + 
        "<p class='about-text'>Welcome to my page! I'm Alan(as stated in the header) and I have been learning how to write code since December of '19. After spending over 5 years in the world of sales and service, I decided to make a change and follow my passion into the world of technology.</p>" + 
        "<p class='about-text'>A little bit about myself? I have lived in Tampa, Fl for almost my entire life(except for a few years away at school). I attended the University of Central Florida and graduated with a degree in marketing in 2014. I decided to go back to school 5 years later to learn programming through the UCF Coding Bootcamp, which will be closing out in May this year.</p>" + 
        "<p class='about-text'>I am a huge fan of sports, especially football and soccer, and love to spend time out on the beach(or by the water in general). Feel free to rummage about my page, I have listed a few projects that I am proud of, as well as some general contact info and links to my LinkedIn and Github. Don't hesitate to reach out! </p>"
        )
    });

    $("#portfolio").on("click", function() {
        $("#display").html(
            "<div id=portfolio-display>" + 
                "<div class='work'>" + 
                    "<a href='https://jscottusf.github.io/brewgo/'><img id='portfolio-pic' src='beer-pic.jpeg' alt='BrewGo'>" + 
                    "<h5>BrewGo</h5></a>" + 
                "</div>" + 

                "<div class= 'work'>" + 
                    "<a href='https://alanford9.github.io/Psychic-Game/'><img id='portfolio-pic' src='scrabble.jpeg' alt='Word Guess'>" + 
                    "<h5>Psychic Game</h5></a>" + 
                "</div>" + 

                "<div class='work'>" + 
                    "<a href='https://alanford9.github.io/Unit-4-game/'><img id='portfolio-pic' src='crystal.jpeg' alt='Crystal Collector'>" + 
                    "<h5>Crystal Collector</h5></a>" + 
                "</div>" + 

                "<div class='work'>" + 
                    "<a href='https://alanford9.github.io/Giphy-API/'><img id='portfolio-pic' src='animals.jpeg' alt='Animal Gifs'>" + 
                    "<h5>Animal Gifs!</h5></a>" + 
                "</div>" + 

                "<div class='work'>" + 
                    "<a href='https://sheltered-plains-62734.herokuapp.com/'><img id='portfolio-pic' src='ffinder.png' alt='Friend Finder'>" + 
                    "<h5>Friend Finder</h5></a>" + 
            "</div>" + 
        "</div>"
        )
    });

    $("#resume").on("click", function() {
        $("#display").html("<img id='resume-pic' src='Resume.jpg' alt='My Resume'>")
    });

    $("#contact").on("click", function() {
        $("#display").html(
            "<form id='contact-form'>" + 
                "<ul id='cform'><h4>Get in Touch</h5>" + 
                "<li>" + 
                    "<input type='text' size='35' class='contact-input' id='name' name='name' placeholder='     name' required='required'>" + 
                "</li>" + 
                "<li>" + 
                    "<input type='email' size='35' class='contact-input' id='email' name='email' placeholder='     email' required='required'>" + 
                "</li>" + 
                    "<textarea rows='6' cols='35' id='message' class='contact-input' name='message' placeholder='     message' required='required'></textarea>" + 
                "</ul>" + 
                "<input type='submit' id='contact-btn' class='contact-input' value='reset'>" +
                "<input type='submit' id='contact-btn' class='contact-input' value='send'>" + 
            "</form>"
        )
    });

  });