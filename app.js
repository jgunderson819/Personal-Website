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
                    "<img id='portfolio-pic' src='beer-pic.jpeg' alt='BrewGo'>" + 
                    "<a href='https://jscottusf.github.io/brewgo/'><h5>BrewGo</h3></a>" + 
                "</div>" + 

                "<div class= 'work'>" + 
                    "<img id='portfolio-pic' src='scrabble.jpeg' alt='Word Guess'>" + 
                    "<a href='https://alanford9.github.io/Psychic-Game/'><h5>Psychic Game</h3></a>" + 
                "</div>" + 

                "<div class='work'>" + 
                    "<img id='portfolio-pic' src='crystal.jpeg' alt='Crystal Collector'>" + 
                    "<a href='https://alanford9.github.io/Unit-4-game/'><h5>Crystal Collector</h3></a>" + 
                "</div>" + 

                "<div class='work'>" + 
                    "<img id='portfolio-pic' src='animals.jpeg' alt='Animal Gifs'>" + 
                    "<a href='https://alanford9.github.io/Giphy-API/'><h5>Animal Gifs!</h3></a>" + 
                "</div>" + 
            "</div>"
        )
    });

    $("#resume").on("click", function() {
        $("#display").html("Hello what")
    });

    $("#contact").on("click", function() {
        $("#display").html(
            "<form id='contact-form'>" + 
                "<ul id='cform'><h4>Get in Touch</h5>" + 
                "<li>" + 
                    "<input type='text' class='contact-input' id='name' name='name' placeholder='     name' required='required'>" + 
                "</li>" + 
                "<li>" + 
                    "<input type='email' class='contact-input' id='email' name='email' placeholder='     email' required='required'>" + 
                "</li>" + 
                "<li>" + 
                    "<textarea rows='6' id='message' class='contact-input' name='message' placeholder='     message' required='required'></textarea>" + 
                "</li>" + 
                "</ul>" + 
                "<input type='submit' id='contact-btn' class='contact-input' value='reset'>" +
                "<input type='submit' id='contact-btn' class='contact-input' value='send'>" + 
            "</form>"
        )
    });

  });