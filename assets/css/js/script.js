// some kind of question array
// object with question and then options array and awnser property
// {
// question: options: [spotify, apple music, physical media, tidal]
// answer: spotify
// };
window.onload = function () {

    var questionArea = document.getElementsByClassName('questions')[0],
    answerArea   = document.getElementsByClassName('answers')[0],
    checker      = document.getElementsByClassName('checker')[0],
    current      = 0,

allQuestions = {

    'What is the language used for styling a html page?':
    ['Javascript', 'CSS', 'English', 'Python', 1],

    'What does i++ do?':
    ['Increase a variable by 1', 'Decrease a variable by 1', 'I dont know', 'Adds together two values', 0],

    'Question 3':
    ['Option1', 'Option2', 'Option3', 'Option4', 2],

    'Question 4':
    ['Option1', 'Option2', 'Option3', 'Option4', 0],

    'Question 5':
    ['Option1', 'Option2', 'Option3', 'Option4', 3]
};

    function loadQuestion(curr) {

        var question = Object.keys(allQuestions)[curr];
        questionArea.textContent = '';
        questionArea.textContent = question;
    }

    function loadAwnser(curr) {

        var answers = allQuestions[Object.keys(allQuestions)[curr]];\

        answerArea.textContent = '';

        for (var i = 0; i < answers.length -1; i += 1) {
            var createDiv = document.createElement('div'),
                text = document.createTextNode(answers[i]);

                createDiv.appendChild(text);
                createDiv.addEventListener('click', checkAnswer(i, answers));

                answerArea.appendChild(createDiv);
        }
    }

    function checkAnswer(i, arr) {

        return function () {
            
        }
    }
}
// currentQuestion = 0

// question[currentQuestion].question, question[currentQuestion].answer

// create question element
// append option elements
// event handler => need to check if clicked option is answer
// does target value === answer

// where are we in question list
// need to track where with the index

// need a function for starting timer
// need a function for starting question
// both need to get called on quiz start

// at the end of the quiz, save time (score) and display highscore