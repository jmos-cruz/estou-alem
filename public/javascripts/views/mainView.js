import { resultController } from "../controllers/resultController.js";

let results = [];

let renderPage = (lists) => {
    let firstQuestions = lists.shift();    
    let questionContainer = document.getElementById('choices');

    questionContainer.innerHTML = `<div id="prompt"></div>`;

    for(let i = 0; i < firstQuestions.length; i++) {

        let answersContainer = document.createElement('div');

        answersContainer.classList.add('card', `card${i+1}`);
        answersContainer.style.backgroundImage = `url(${firstQuestions[i].img})`;

        answersContainer.innerHTML =
         `<h5>${firstQuestions[i].topic}</h5>
         <p>${firstQuestions[i].prompt}</p>`;

        answersContainer.addEventListener("click", () => {
            results.push(i);
            renderTopic(lists[i]);
        })
        questionContainer.appendChild(answersContainer);
    }
}

let renderTopic = (list) => {
    let answers = Object.values(list[0].answers);
    let answerKeys = Object.keys(list[0].answers);
    let questionContainer = document.getElementById('choices');
    questionContainer.innerHTML = `<div id="prompt">${list[0].prompt}</div>`;

    for(let i = 0; i < answers.length; i++) {

        let answersContainer = document.createElement('div');
        answersContainer.classList.add('card', `card${i+1}`);
        answersContainer.style.backgroundImage = `url(${answers[i].img})`;
        
        answersContainer.innerHTML = `<p>${answers[i].answer}</p>`;

        answersContainer.addEventListener("click", () => {
            results.push(answerKeys[i]);
            renderQuestion(list, 1);
        })
        questionContainer.appendChild(answersContainer);

    }
}

let renderQuestion = (list, index) => {

    if (index >= list.length) {
        //window.location.pathname = `/results.html`;
        resultController(results);
        return;
    }

    let question = list[index];
    let answers = Object.values(question.answers);
    let answerKeys = Object.keys(question.answers);
    let questionContainer = document.getElementById('choices');
    
    questionContainer.innerHTML = `<div id="prompt">${question.prompt}</div>`;

    for (let i = 0; i < Object.keys(question.answers).length; i++){

        let answersContainer = document.createElement('div');
        answersContainer.classList.add('card', `card${i+1}`);
        answersContainer.innerHTML = `<p>${answers[i].answer}</p>`;
        answersContainer.style.backgroundImage = `url(${answers[i].img})`;

        answersContainer.addEventListener("click", () => {
            if(results.length > list.length) {
                return;
            }
            results.push(answerKeys[i]);
            renderQuestion(list, index);
        })

        questionContainer.appendChild(answersContainer);
    }
    index++;
}

export { renderPage, results };
