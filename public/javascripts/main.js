import { mainController } from './controllers/mainController.js';
import { resultController } from './controllers/resultController.js';

const PATHS = {
    main: {
        path: '/index',
        controller: mainController
    },
    result: {
        path: '/results',
        controller: resultController
    }
}

if (window.location.pathname === '/') {
    window.location.pathname = '/home';
}

let controllerPath = Object.values(PATHS).find(name => name.path === window.location.pathname);

let loadController = () => {
    try {
        controllerPath.controller();
    } catch (err) {
        console.log(err);
        console.log(err.stack);
        //window.location.pathname = '/home.html';
    }
}

loadController();