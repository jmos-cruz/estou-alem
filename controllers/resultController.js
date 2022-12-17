import { renderPage } from "../views/resultsView.js";
import { filterResult as filterItineraries } from "../service/DaoResult.js"
import { filterResult as filterDates} from "../service/romanceResult.js";
import { filterResult as filterClubs } from "../service/clubsDao.js";

//get all services and see which one fits

function resultController(quizzResult) {
    
    if(!quizzResult) {
        return;
    }
    let topic = quizzResult.shift();
    var result;
    switch (topic){
        case 0:
            result = filterItineraries(quizzResult.slice(2));
            break;
        case 1:
            //result = filterDates(quizzResult.slice(0, -1)); //the solution to the unicorn bug
            result = filterDates(quizzResult.slice(1));
            break;
        case 2:
            //Só a 3ª pergunta é que importa
            result = filterClubs(quizzResult[2]);
            break;
    }

    renderPage(result);
}



export{ resultController };