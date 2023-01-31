// MAIN SCRIPT FOR THE QUESTION AND ANSWER SECTION OF THIS WEB APP.
const menu_button = document.querySelector('.menu')
menu_button.style.display = 'none';
const intro_ui = document.querySelector('.pick-section');
const start_button = document.getElementsByClassName('start')[0];
const reset_button = document.querySelector('.reset');
const next_button = document.querySelector('.next');
const question_box = document.querySelector('.card-for-question')
question_box.style.display = 'none';
let ques_count_container = document.querySelector('.count')
const modal_overlay = document.getElementById('modal_overlay')
// FOR THE MODALS

let question = document.querySelector('.question')
let answer_buttons = document.querySelectorAll('.answer');

let question_container = document.querySelector('.answer-grid');
// let all_options_text = document.querySelectorAll('options');

// for shuffling 
let shuffled_questions, current_question_index;
let correct_state = document.querySelector('.correct-state')
let wrong_state = document.querySelector('.wrong-state')

let language_selector = document.querySelector('#quiz-options')

let question_indicator = document.querySelector('.question-count')
let question_count = document.querySelector('.ques-count')

let score_interface = document.querySelector('.for-displaying-scores')
let start_game_btn = document.getElementsByClassName('start')[1]

let other_func_btn = document.querySelector('.group-btn')

// For instructions of the game.
let modal_for_instructions = document.getElementById('modal-instruct')
let instruction_button = other_func_btn.children[1]

// For ending the game.
let modal_for_ending = document.querySelector('.end-game-modal')

// For resetting the game
let modal_for_resetting = document.querySelector('.reset-modal')

// FOR USER'S SCORE
let score = 0;
let sum_of_score = 0;

start_button.addEventListener('click', start_game);

// Counter for the game.
let counter = 1;
// For the question counter (question_number / total_number_of_questions)
ques_count_container.innerText = 1
question_count.innerText = counter

// When user clicks instructions button.
instruction_button.addEventListener('click', show_instructions)

// When user clicks end game.
menu_button.addEventListener('click', end_game)

// To start again, and refresh the game.
reset_button.addEventListener('click', () => {
    console.log("Hello, Working")
    restart_game()
})

function end_game() {
    // The modal should open.
    modal_for_ending.classList.add('active')
    modal_overlay.classList.add('activee')
    let yes_button = document.querySelector('.end-game-modal .yes')
    let no_button = document.querySelector('.end-game-modal .no')

    yes_button.addEventListener('click', () => {
        reset_score_and_question_count()
        reset_functionalities()
        reset_game()
        // answer_buttons.style.pointerEvents = 'all'
        modal_for_ending.classList.remove('active')
        menu_button.style.display = 'none'
        modal_overlay.classList.remove('activee')
        question_container.style.pointerEvents = 'all'
    })
    no_button.addEventListener('click', () => {
        modal_for_ending.classList.remove('active')
        modal_overlay.classList.remove('activee')
    })
}

function show_instructions () {
    modal_for_instructions.open = true
    modal_overlay.classList.add('activee')
    // Close the modal.
    let close_button = document.querySelector('.instructions-container .close')
    close_button.addEventListener('click', () => {
        modal_for_instructions.open = false
        modal_overlay.classList.remove('activee')
    })
}

function restart_game () {
    // The modal should open.
    modal_for_resetting.classList.add('active')
    modal_overlay.classList.add('activee')
    let yes_button = document.querySelector('.reset-modal .yes')
    let no_button = document.querySelector('.reset-modal .no')

    yes_button.addEventListener('click', () => {
        // alert("GAME RESTARTED.")
        question_container.style.pointerEvents = 'all'
        reset_score_and_question_count()
        start_game()
        // answer_buttons.style.pointerEvents = 'all'
        modal_for_resetting.classList.remove('active')
        modal_overlay.classList.remove('activee')
    })
    no_button.addEventListener('click', () => {
    modal_for_resetting.classList.remove('active')
    modal_overlay.classList.remove('activee')
    })
}

function reset_functionalities() {
    question_indicator.style.display = 'none'
    question_box.style.display = 'none'
    intro_ui.style.display = 'flex'
}

function reset_game() {
    // Delete unwanted question answers, and put the ones that are meant to be there validly.
    next_button.classList.add('hide')
    reset_button.classList.add('hide')
    while(question_container.firstChild) {
        question_container.removeChild(question_container.firstChild);
    }
}

function run_game(questions) {
    console.log("GAME STARTED")
    menu_button.style.display = 'block'
    question_indicator.style.display = 'block'
    question_count.innerText = counter++
    intro_ui.style.display = 'none';
    question_box.style.display = 'flex';
    // shuffling our questions.
    shuffled_questions = questions.sort(() =>Math.random() - .5);
    current_question_index = 0;
    reset_game()
    show_next_question();
    // When the user clicks on next.
    if (question_count.innerText > 10) {
        // display user's score, when the user reaches 10 questions, based on how many questions the user gets.
        reset_functionalities()
        score_interface.style.display = 'flex'
        let user_score = document.querySelector('.score')
        user_score.innerHTML = sum_of_score
        console.log("GAME ENDED")
        intro_ui.style.display = 'none'

        // Hide the other functional buttons showing.
        Array.from(other_func_btn.children).forEach((button) => {
            button.style.display = 'none'
        })
    }
}

function reset_score_and_question_count() {
    sum_of_score = 0
    counter = 1
    ques_count_container = 1
}

// WHEN GAME HAS ENDED AND USER CLICKS START NEW GAME.
start_game_btn.addEventListener('click', () => {
    score_interface.style.display = 'none'
    intro_ui.style.display = 'flex'
    reset_score_and_question_count()
})


function start_game() {
    let prog_lang = document.getElementsByClassName('prog-lang')[0]
    correct_state.classList.add('hide')
    wrong_state.classList.add('hide')
    if (language_selector.value == 'pick') {
        alert("Please pick a programming language for your quiz to start")
    }
    else if (language_selector.value == 'JAVASCRIPT') {
        run_game(questions_and_options) 
        prog_lang.innerText = language_selector.value
    }
    else if (language_selector.value == 'PYTHON'){
        run_game(questions_and_options1)
        prog_lang.innerText = language_selector.value
    }
    else if (language_selector.value == 'JAVA') {
        run_game(questions_and_options2)
        prog_lang.innerText = language_selector.value
    }
    // else {
    // }
}

function show_next_question() {
    reset_game()
    display_questions(shuffled_questions[current_question_index])
}   

function display_questions(actual_question) {
        question.innerHTML = actual_question.question;
        actual_question.answers.forEach((answer) => {
        let answer_button = document.createElement('button')
        answer_button.innerText = answer.text
        // options.innerHTML = answer.text;
        answer_button.classList.add('answer');
        // To check if our option is correct
        if (answer.correct) {
            answer_button.dataset.correct = answer.text
        }
        answer_button.addEventListener('click', pick_answer)
        question_container.appendChild(answer_button);

    })
}

function pick_answer(e) {
    let clicked_button = e.target
    let correct_option = clicked_button.dataset.correct
    // Setting the status (wrong or correct) of our buttons, based on what we picked
    Array.from(answer_buttons).forEach((button) => {
        reveal_state(clicked_button, correct_option)
    })
}

function reveal_state(btn, is_correct) {
    if(is_correct) {
        // add score
        sum_of_score = sum_of_score += 2.5
        btn.classList.add('correct')
        answer_buttons.forEach((button) => {
            button.classList.add('wrong')
            question_container.style.pointerEvents = 'none'
        })
        correct_state.classList.remove('hide')
        wrong_state.classList.add('hide')
        
        // Put the remaining options after a click with their original status.
        // for(let other_btn of answer_buttons) {
        //     other_btn.disabled = 'disabled'
        // }
        // let other_wrong_options = btn.is_correct == false
        // for (let wrong_options of other_wrong_options) {
        //     wrong_options.classList.add('wrong')
        // }
    }
    else {
        btn.classList.add('wrong')
        wrong_state.classList.remove('hide')
        correct_state.classList.add('hide')
        question_container.style.pointerEvents = 'none'

        // after displaying the wrong answer, display the correct answer.

    }
    next_button.classList.remove('hide')
    reset_button.classList.remove('hide')
}

function set_time() {
    let timer = document.querySelector('.timer').innerText
    
    let count_down = setInterval(() => {
        timer.innerText = `00: ${timer++}`
    }, 1000)
}

function clear_state(btn) {
    // Clear existing state, and set new one.
    btn.classList.remove('correct')
    btn.classList.remove('wrong')
}

next_button.addEventListener('click', () => {
    // Increment our current question index.
    current_question_index++
    ques_count_container.innerText++
    question_container.style.pointerEvents = 'all'
    start_game()
})

// NOTE: WHEN DEALING WITH FUNCTIONS, ALWAYS DECLARE VARIABLES ASSOCIATED WITH THE FUNCTIONS, INSIDE THE FUNCTION, AND THEN USE CALLBACK FUNCTIONS, TO ACCESS THIS VARIABLES, INSIDE THOSE FUNCTIONS THAT THE VARIABLES ARE STORED.