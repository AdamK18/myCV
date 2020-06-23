import {GET_BASIC_ABS, GET_MEDIUM_ABS, GET_ADVANCED_ABS } from './abilitiesType'


const basicState = {
    pLanguages: ['Kotlin', 'VBA', 'Node.js'
    ],
    languages: ['Német'],
    IDEs: ['Android studio', 'IntellIj']
}

const mediumState = {
    pLanguages: ['CSS', 'C#', 'Java', 'SQL'
    ],
    languages: ['-'],
    IDEs: ['PhpStorm', 'Visual studio']
}

const advancedState = {
    pLanguages: ['HTML', 'Javascript'
    ],
    languages:['angol (C1)'],
    IDEs: ['VS Code']
}


export const getBasicAbsReducer = (state = basicState, action) => {
    switch(action.type){
        case GET_BASIC_ABS:
            return {
                ...state
            }
        default: return state
    }
}

export const getMediumAbsReducer = (state = mediumState, action) => {
    switch(action.type){
        case GET_MEDIUM_ABS:
            return {
                ...state
            }
        default: return state
    }
}

export const getAdvancedAbsReducer = (state = advancedState, action) => {
    switch(action.type){
        case GET_ADVANCED_ABS:
            return {
                ...state
            }
        default: return state
    }
}