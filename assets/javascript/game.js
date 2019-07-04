console.log("The javascript file is linked correctly");
$(document).ready(function () {


    //variables


    var chosenNumber = 0;
    var userScore = 0;
    var pinkNum = 0;
    var garnetNum = 0;
    var pearlNum = 0;
    var amethystNum = 0;
    var min = 25;
    var max = 150;
    var pMin = 1;
    var pMax = 10;
    var gMin = 11;
    var gMax = 25;
    var peMin = 26;
    var peMax = 50;
    var amMin = 51;
    var amMax = 100;
    var win = 0;
    var lose = 0;


    $(".pSalad").on("click", function () {
        event.preventDefault();

        chosenNumber = Math.floor(Math.random() * (+max - +min)) + +min;

        console.log(chosenNumber + "deity");

        pinkNum = Math.floor(Math.random() * (+pMax - +pMin)) + +pMin;

        console.log(pinkNum + "pink");

        garnetNum = Math.floor(Math.random() * (+gMax - +gMin)) + +gMin;

        console.log(garnetNum + "gernet");

        pearlNum = Math.floor(Math.random() * (+peMax - +peMin)) + +peMin;

        console.log(pearlNum + "pearl");

        amethystNum = Math.floor(Math.random() * (+amMax - +amMin)) + +amMin;

        console.log(amethystNum + "ame");

        userScore++;
        
        $(this).prop('disabled', true);
        $(".chosen").text(chosenNumber);
    });

    $(".pinkGem").on("click", function () {
        console.log(userScore);
        console.log(pinkNum);
        userScore = userScore + pinkNum;
        $(".Number").text(userScore);

    });

    $(".garnetGem").on("click", function () {
        userScore = userScore + garnetNum;
        $(".Number").text(userScore);
    });

    $(".pearlGem").on("click", function () {
        userScore = userScore + pearlNum;
        $(".Number").text(userScore);
    });

    $(".amethystGem").on("click", function () {
        userScore = userScore + amethystNum;
        $(".Number").text(userScore);
    });

    if (chosenNumber == userScore){
        win++;
        $(".wins").text(win);
    }

    else if (userScore > chosenNumber){
        lose++;
        $(".lose").text(lose);
        console.log(lose);

    }


    console.log(userScore + "score")



    $(".chosen").text(userScore);
    console.log(win);

});
