let firstQuestion = [
    {
        topic: 'Traveling',
        prompt: 'Are you tired of being stuck in the same place?',
        img: '/Img/travel-wishes.png'
    },

    {
        topic: 'Relationships',
        prompt: 'Are you having troubles with your other half?',
        img: '/Img/troubled-marriage.png'
    },

    {
        topic: 'Leisure',
        prompt: 'Is your life boring?',
        img:'/Img/boring-life.png'
    },
]

const travelQuestions = [
    {
        prompt: 'What kind of traveller are you?',
        answers: {
            a: {answer: 'Try anything once', img: '/Img/coke.png'},
            b: {answer: 'Just want to relax', img: '/Img/blowjob-time.png'},
            c: {answer: 'A planner', img: '/Img/pensativo-na-natureza.png'},
            d: {answer: 'Go with the flow', img: '/Img/mirror.png'}
        },
    },

    {
        prompt: 'Who else is coming?',
        answers: {
            a: {answer: 'The whole family', img: '/Img/familie.png'},
            b: {answer: 'Flying solo',img: '/Img/drums.png'},
            c: {answer: 'My friends',img: '/Img/both.png'},
            d: {answer: 'Just the two of us', img: '/Img/married.png'}
        },
    },

    {
        prompt: 'Where are you staying?',
        answers: {
            a: {answer: 'AirBnB', img: '/Img/alot-of-money.png'},
            b: {answer: 'Hostel', img: '/Img/litle-money.png'},
            c: {answer: 'Hotel', img: '/Img/rich.png'}
        },
    },

    {
        prompt: 'What do you want to see out of your window?',
        answers: {
            a: {answer: 'A big city', img: '/Img/citie.png'},
            b: {answer: 'Mountains', img: '/Img/mountain.png'},
            c: {answer: 'Beach', img: '/Img/beach.png'},
            d: {answer: 'Wilderness', img: '/Img/wildness.png'}
        }, 
    }
]


const sexualQuestions = [
    {
        prompt: 'What is your gender?',
        answers: {
            a: {answer: 'Male', img: '/Img/style.png'},
            b: {answer: 'Female', img: '/Img/miss-piggy.png'}
        },
    }, 
    {
        prompt: 'What is your sexual orientation?',
        answers: {
            a: {answer: 'Heterosexual', img: '/Img/kiss.png'},
            b: {answer: 'Homossexual', img: '/Img/lgbt.png'},
            c: {answer: 'Unicorn', img: '/Img/dumb.png'}
        },
    }, 
    {
        prompt: 'What are you looking for?',
        answers: {
            a: {answer: 'A serious relationship', img: '/Img/happy-couple.png'},
            b: {answer: 'One night stand', img: '/Img/bad-bitchs-only.png'},
            c: {answer: 'Friends with benefits', img: '/Img/anal-gap.png'}
        }, 
    },
    {
        prompt: 'Do you know what your fetishes are?',
        answers: {
            a: {answer: 'Yes', img: '/Img/bdsm.png'},
            b: {answer: 'No', img: '/Img/church.png'},
            c: {answer: 'Maybe..', img: '/Img/pensativo.png'},
            d: {answer: "I'm shy", img: '/Img/sad-animation.png'}
        },
    }
]

const partyQuestions = [
    {
        prompt: 'How old are you?',
        answers: {
            a: {answer: '18-25', img: '/Img/18-25.png'},
            b: {answer: '26-35', img: '/Img/26-35.png'},
            c: {answer: '35+', img: '/Img/35+.png'},
            d: {answer: 'Old enough to PARTY!!', img: '/Img/OldParty.png'}
        },
    },

    {
        prompt: 'Do you want to dance?',
        answers: {
            a: {answer: 'Yes', img: '/Img/yes-dance.png'},
            b: {answer: 'Only after a few drinks', img: '/Img/some-drinks.png'},
            c: {answer: 'Nope!', img: '/Img/Nope.png'}
        },
    },

    {
        prompt: 'Do you prefer?',
        answers: {
            a: {answer: 'Disco', img: '/Img/disco.png'},
            b: {answer: 'Bar', img: '/Img/bar.png'}
        },
        
    },

    {
        prompt: 'Do you want to get wasted?',
        answers: {
            a: {answer: 'Yes', img: '/Img/Yes.png'},
            b: {answer: 'HELL YES!', img: '/Img/hell-yes.png'},
            c: {answer: 'Nope!', img: '/Img/Nope.png'}
        }, 
    }
]

let getFirstQuestions = () => {
    return firstQuestion;
}

let getSexualQuestions = () => {
    return sexualQuestions;
}

let getTravelQuestions = () => {
    return travelQuestions;
}

let getPartyQuestions = () => {
    return partyQuestions;
}

export { getFirstQuestions, getSexualQuestions, getTravelQuestions, getPartyQuestions };