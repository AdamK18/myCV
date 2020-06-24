import {GET_BASIC_ABS, GET_MEDIUM_ABS, GET_ADVANCED_ABS } from './abilitiesType'


const basicState = {
    pLanguages: ['Kotlin', 'VBA', 'Node.js', 'SQL'],
    languages: ['Német'],
    IDEs: ['Android studio', 'IntellIj', 'Unity']
}

const mediumState = {
    pLanguages: ['CSS', 'C#', 'Java', '-'],
    languages: ['-'],
    IDEs: ['PhpStorm', 'Visual studio', 'MySql']
}

const advancedState = {
    pLanguages: ['HTML', 'Javascript', 'GIT', '-'],
    languages:['angol (C1 nyelvvizsga)'],
    IDEs: ['VS Code', '-', '-']
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