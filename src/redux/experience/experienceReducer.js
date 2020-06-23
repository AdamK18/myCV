import {GET_EXP_LIST, GET_WORK_EXP, GET_PROJECTS } from './experienceTypes'

const schoolState = {
    data: [
        {
            hol: 'Budapesti Corvinus Egyetem',
            mikor: '2018 - (2022)',
            mit: 'Gazdaságinformatika',
            text: 'Sikeresen elvégeztem a 2. évemet, '
        },
        {
            hol: 'Gárdonyi Géza Ciszterci Gimnázium',
            mikor: '2009 - 2018',
            mit: 'Érettségi - Nyelvvizsga',
            text: 'Emelt informatika érettségi - 92%, C1 felsőfokú angol nyelvvizsga'
        }
    ]
}

const workState = {
    data: [
        {
            hol: 'Jacsomedia Smart Web Applications',
            mikor: '2019 - ',
            mit: 'Content manager',
            text: 'Októberben kezdtem munkálataim a Jacsomedia-nál, ahol megalapoztam mostani webfejlesztési tudásomat. '
        },
        {
            hol: 'Tutoring: Programozás C#',
            mikor: '2018 - 2019',
            mit: 'Emelt érettségi felkészítő',
            text: 'Kiemelkedő emelt informatika érettségim által szerzett tapasztalataimat felhasználva személyes felkészítő órákat tartottam 2018 decembere és 2019 áprilisa között.'
        }
    ]
}

const projectState = {
    data: [
        {
            nev: 'myCV',
            nyelv: 'Javascript',
            text: 'Saját fejlesztésű számológép melyet android studioban írtam Kotlin nyelven.',
            link: 'https://github.com/AdamK18/myCV',
            isGutHub: true
        },
        {
            nev: 'LearnIT',
            nyelv: 'C#',
            text: 'Éles iskola project',
            link: 'https://github.com/AdamK18/myCV',
            isGutHub: true
        },
        {
            nev: 'Calculator',
            nyelv: 'Kotlin',
            text: 'Saját fejlesztésű számológép melyet android studioban írtam Kotlin nyelven.',
            link: 'https://bitbucket.org/adamkloczl/calculator_android/src/master/',
            isGutHub: false
        },
        {
            nev: 'Color match',
            nyelv: 'Java',
            text: 'Egy egyszerű telefonos játék melyben 4 különböző szín véletlen sorrendben villan fel, majd ezt a sorrendet kell a felhasználónak utánoznia. Java nyelven íródott Android studioban.',
            link: 'https://bitbucket.org/adamkloczl/colormatch_android/src/master/',
            isGutHub: false
        },
        {
            nev: 'myNotes',
            nyelv: 'Kotlin',
            text: 'Az implementált SQLite adatbázis segítségével kis jegyzeteket tárolhat el a felhasználó. Kotlin nyelven íródott Android studioban.',
            link: 'https://bitbucket.org/adamkloczl/mynotes_android/src/master/',
            isGutHub: false
        },
        {
            nev: 'MemoryGame',
            nyelv: 'Java',
            text: 'Memóriajáték mely egy cég interjú feltétele volt. Emiatt a gra􀁃kai kellékeket ők biztosították. Javaban íródott android studioban.',
            link: 'https://bitbucket.org/adamkloczl/memorygame/src/master/',
            isGutHub: false
        },
        {
            nev: 'QueTalker-android',
            nyelv: 'Kotlin - Java',
            text: 'Közös projekt Klöczl Andrással és Kiss Ágotával. Egy egyszerű (félkész) chat applikáció. Felhasználói kezelőfelület mellyel a regisztráció és belépés egyaránt lehetséges feltéve hogy az alábbi szerver fut. Kotlin és Java nyelven írodott Android studioban.',
            link: 'https://bitbucket.org/andraskloczl/quetalker-android/src/develop/',
            isGutHub: false
        },
        {
            nev: 'QueTalker-backend',
            nyelv: 'Java',
            text: 'Spring backend amely felelős a regisztrációs folyamatok elvégzéséért. A felhasználói adatokat tárolja és token rendszerrel léptet be. Intellij-ben íródott Java nyelven.',
            link: 'https://bitbucket.org/andraskloczl/quetalker-backend/src',
            isGutHub: false
        },
        {
            nev: 'Fluimucil game',
            nyelv: 'C#',
            text: 'Telefonos játék melyet egyedül terveztem, írtam meg és tettem közzé Google Play-en. C# nyelven íródott Unity-ben.',
            link: 'https://bitbucket.org/adamkloczl/fluimucil/src/master/',
            isGutHub: false
        }
    ]
}


export const schoolExperienceReducer = (state = schoolState, action) => {
    switch(action.type){
        case GET_EXP_LIST:
            return{
                ...state
            }
        default: return state
    }
}

export const workExperienceReducer = (state = workState, action) => {
    switch(action.type){
        case GET_WORK_EXP:
            return{
                ...state
            }
        default: return state
    }
}

export const getProjectsReducer = (state = projectState, action) => {
    switch (action.type){
        case GET_PROJECTS:
            return{
                ...state
            }
        default: return state
    }
}
