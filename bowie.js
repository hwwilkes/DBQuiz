// ToDo

//  ENHANCEMENTS
// 1. instant feedback on correct answers or show user at the end. 
// 2. Store who took the quiz and their score in a db OR create cookie showing user their score last time they took it. 
// 3. Add more questions and randomize.

//  BUGZ
//  1. figure out why video is not centered on score = 8



$(document).ready(function() {

    var allQuestions = [];
    allQuestions[0] = {
        question: "David Bowie's \'Berlin Trilogy\'' is comprised of what three albums?",
        choices: [" Station to Station, Low, Heroes", " Aladdin Sane, Ziggy Stardust, Low", " Low, Heroes, Lodger"],
        answer: 2
    };

    allQuestions[1] = {
        question: "What is David Bowie's birthname?",
    	choices: [" David John Burns"," David Edward Smith", " David Robert Jones"],
        answer: 2
    };

     allQuestions[2] = {
        question: "How many of Bowie's song titles contain the word \'star\'?",
        choices: [" 5"," 2", " 9"],
        answer: 0
    };

	 allQuestions[3] = {
	   	question: "What year was Bowie inducted into the Rock n' Roll Hall of Fame?",
	    choices: [" 2000", " 1996", " 1984"],
	    answer: 1
    };

     allQuestions[4] = {
        question: "With which of these musicians does David Bowie share a birthday?",
        choices: [" Elvis Presley"," Michael Jackson", " Kurt Cobain"],
        answer: 0
    };

     allQuestions[5] = {
        question: "What was Bowie's first #1 hit in the US?",
        choices: [" Fame", " Rebel Rebel", " Let's Dance"],
        answer: 0
    };

     allQuestions[6] = {
        question: "Why are Bowie's eyes two different colors?",
        choices: [" Inherited genetic trait", " Glaucoma in childhood affected his melanin levels", " Damage from being punched in the eye", 
        ],
        answer: 2
    };

    allQuestions[7] = {
        question: "Who played piano on \'Life on Mars\'?",
        choices: [" Lou Reed"," Rick Wakeman", " John Landers"],
        answer: 1
    };

    allQuestions[8] = {
        question: "At who's party did Bowie meet John Lennon?",
        choices: [" Andy Warhol"," Mick Jagger", " Elizabeth Taylor"],
        answer: 2
    };

    allQuestions[9] = {
        question: "What did Bowie claim he lived on in the mid-70s?",
        choices: [" Uppers, downers, Gauloises and yogurt"," Cocaine, Gitanes, milk and red peppers", " Heroin, speed, red wine and bananas"],
        answer: 1
    };


    var questionElement = document.getElementById("questionText");
    var questionIndex = 0;
    var score = 0;	


    function loadAnswers() {
        for (var j = 0; j <= allQuestions[questionIndex].choices.length - 1; j++) {
            var choices = document.getElementsByTagName("label");
            choices[j].innerText = allQuestions[questionIndex].choices[j];
        }
    }

    //load the next question
    function loadQuestion() {
    	
		loadElements();
		questionElement.innerText = allQuestions[questionIndex].question;
		loadAnswers();

    }

    //fade in elements on load
    function loadElements () {

		$("#question").hide().fadeIn("slow");
		$("#container").hide().fadeIn("slow");
    }

    //check answer and calculate user's score
    function calcScore () {
    	if ($("input:radio[name=answer]:checked").val() == allQuestions[questionIndex].answer) {
    		
    		score++;

    		console.log(score);

    	} else {

   			return;

    	}
    }

    // Load initial question + answers
    loadElements();
    questionElement.innerText = allQuestions[questionIndex].question;
	loadAnswers();

	$("#results").hide();	
	$("#video").hide();

   
    $("button").click(function() 
	{

    	//if not the last question, calculate score, then load next question and answer set
    	if (questionIndex < allQuestions.length - 1) 
    	{
    		calcScore();
    		questionIndex++;
	    	loadQuestion();

	    	//Clear selected radio button
	    	$("input:radio[name=answer]:checked").attr("checked", false);
	    //if it's the last question, hide the question div and show user results
	    } else 

	    {	
	    	calcScore();


	    	$("#question").fadeOut("slow", function ()
	    	{
		    	$("#results").delay(210).fadeIn("slow");
		    	$("#video").delay(210).fadeIn("slow");
		    });	


			if( score == 10 || score == 9) {
				document.getElementById("resultsText").textContent = "You scored a " + score + " out of 10. You are a Queen Bitch!";
                document.getElementById("video").src = "https://www.youtube.com/embed/S5P63qGTm_g";

            } else if (score == 8) {

				document.getElementById("resultsText").innerText = "You scored an " + score + " out of 10. You are a Queen Bitch!";
                document.getElementById("video").src = "https://www.youtube.com/embed/S5P63qGTm_g";
		
            } else if (score == 6 || score == 7) {

                document.getElementById("resultsText").innerText = "You scored a " + score + " out of 10. You are a Starman!";
                document.getElementById("video").src = "https://www.youtube.com/embed/tRcPA7Fzebw";

            } else if (score == 5 || score == 4) {

                document.getElementById("resultsText").innerText = "You scored a " + score + " out of 10. You are a Young American.";
                document.getElementById("video").src = "https://www.youtube.com/embed/ScVi_L817ec";
            } else if (score <= 3 || score >= 0) {

                document.getElementById("resultsText").innerText = "You scored a " + score + " out of 10. You are an Absolute Beginner.";
                document.getElementById("video").src = "https://www.youtube.com/embed/oq7qcTojZo8";
            }


    	}	

	});


	
});