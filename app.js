$(document).ready(function () {
  $("#about").on("click", function () {
    $("#display").html(
      "<img id='aboutimg' src='jeff1.jpg' alt='Me'>" +
        "<p class='about-text'>I am a Full Stack Web Developer with a passion for creative design and UX/UI. I build beautiful and functional applications and have designed applications for a variety of end-users. I have the drive to exceed client expectations by focusing on improving user experience and pushing the status quo of design.</p> " +
        "<p> My background in marketing allows me to connect with audiences and understand what engages them. Check out my projects to see examples of my work.”</p>" +
        "<p class='about-text'>I have done a variety of things throughout my life.  I graduated from the University of Wisconsin - Madison in 1993 with a BBA degree with majors in Finance and Risk Management.  I was in public accounting for 5 years where I earned the CPA designation,  I was a realtor for 13 years, and then I was a truck driver for 5 years.  I decided to get back to school following advice from some of my friends, to learn programming through the UCF Coding Bootcamp which will be completing in May this year.</p>" +
        "<p class='about-text'>I am a huge fan of sports and I am a very good poker player. Feel free to rummage about my page, I have listed a few projects that I am proud of, as well as some general contact info and links to my LinkedIn and Github. Don't hesitate to reach out! </p>"
    );
  });

  $("#portfolio").on("click", function () {
    $("#display").html(
      "<div id=portfolio-display>" +
        "<div class='work'>" +
        "<a href='https://mlipphardt.github.io/Fanfixx/'><img id='portfolio-pic' src='Fanfixx.JPG' alt='FANFIXX'>" +
        "<h5>FanFixx</h5></a>" +
        '<a href="https://github.com/jgunderson819/Fanfixx2">Fanfixx Github</a>' +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://jgunderson819.github.io/The-Psychic-Game/'><img id='portfolio-pic' src='psychic2.jfif' alt='Psychic Game'>" +
        "<h5>Psychic Game</h5></a>" +
        '<a href="https://github.com/jgunderson819/The-Psychic-Game/">Psychic Github</a>' +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://jgunderson819.github.io/Unit-4-Game/'><img id='portfolio-pic' src='crystal.jpeg' alt='Crystal Collector'>" +
        "<h5>Crystal Collector</h5>" +
        '<a href="https://github.com/jgunderson819/Unit-4-Game">Crystal Col Github</a>' +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://github.com/jgunderson819/bamazon'><img id='portfolio-pic' src='Bamazon.JPG' alt='Bamazon'>" +
        "<h5>Bamazon!</h5></a>" +
        "<a href='https://github.com/jgunderson819/bamazon'>Bamazon Github</a>" +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://pure-brook-35480.herokuapp.com/login'><img id='portfolio-pic' src='sdn.JPG' alt='Social Distance Network'>" +
        "<h5>Social Distance Network</h5></a>" +
        "<a href='https://github.com/jgunderson819/sdn'>Social Distance Network Github</a>" +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://github.com/jgunderson819/liri-node-app2'><img id='portfolio-pic' src='liri.JPG' alt='Liri'>" +
        "<h5>Liri node app</h5></a>" +
        "<a href='https://github.com/jgunderson819/liri-node-app2'>Liri Github</a>" +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://state-capital-trivia-game.herokuapp.com/'><img id='portfolio-pic' src='Triviagame.JPG' alt='Trivia Game'>" +
        "<h5>Trivia Game</h5></a>" +
        "<a href='https://github.com/jgunderson819/TriviaGame'>Trivia Game Github</a>" +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://secure-fjord-37556.herokuapp.com//'><img id='portfolio-pic' src='burger2.JPG' alt='Burger'>" +
        "<h5>Burger</h5></a>" +
        "<a href='https://github.com/jgunderson819/burger'>Burger Github</a>" +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://github.com/jgunderson819/Constructor-Word-Guess'><img id='portfolio-pic' src='Constructor Word Guess.jpg' alt='COnstructor Word Guess'>" +
        "<h5>Constructor Word Guess</h5></a>" +
        "<a href='https://github.com/jgunderson819/Constructor-Word-Guess'>CWG Github</a>" +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://thawing-ridge-21750.herokuapp.com/readArticle/5e9cb56b4e15ec001783af18'><img id='portfolio-pic' src='scraped-news.JPG' alt='Scraped News'>" +
        "<h5>Your Scraped News</h5></a>" +
        "<a href='https://github.com/jgunderson819/Scrape-news'>Scraped News Github</a>" +
        "</div>" +
        "<div class='work'>" +
        "<a href='https://jgunderson819.github.io/Clicky-Game/'><img id='portfolio-pic' src='ClickGame.JPG' alt='Clicky Game'>" +
        "<h5>Clicky Game</h5></a>" +
        "<a href='https://github.com/jgunderson819/Clicky-Game'>Clicky Game Github</a>" +
        "</div>" +
        "</div>"
    );
  });

  $("#resume").on("click", function () {
    $("#display").html(
      "<img id='resume' src='resume3.JPG' alt='My Resume'>" +
        "<img id='resume' src='resume4.JPG' alt='My Resume'>"
    );
  });

  $("#contact").on("click", function () {
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
    );
  });
});
