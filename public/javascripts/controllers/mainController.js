import { getFirstQuestions, getPartyQuestions, getSexualQuestions, getTravelQuestions } from '../service/questionsDao.js'
import { renderPage } from '../views/mainView.js'

const questions = [getFirstQuestions(), getTravelQuestions(), getSexualQuestions(), getPartyQuestions()];

let mainController = () => {
    renderPage(questions);
}

export { mainController };
