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
            mikor: '2018',
            mit: 'Érettségi - Nyelvvizsga',
            text: 'Emelt informatika érettségi - 92%, C1 felsőfokú angol nyelvvizsga'
        }
    ]
}

const workState = {
    data: [
        {
            hol: 'Jacsomedia Smart Web applications',
            mikor: '2019 - ',
            mit: 'Content manager',
            text: 'Kiemelkedő emelt informatika érettségim által szerzett tapasztalataimat felhsználva személyes felkészítő órákat tartottam 2018 decembere és 2019 áprilisa között.'
        },
        {
            hol: 'Tutoring: Programozás C#',
            mikor: '2018 - 2019',
            mit: 'Emelt érettségi felkészítő',
            text: 'Kiemelkedő emelt informatika érettségim által szerzett tapasztalataimat felhsználva személyes felkészítő órákat tartottam 2018 decembere és 2019 áprilisa között.'
        }
    ]
}

const projectState = {
    data: [
        {
            hol: 'Jacsomedia Smart Web applications',
            mikor: '2019 - ',
            mit: 'Content manager',
            text: 'Kiemelkedő emelt informatika érettségim által szerzett tapasztalataimat felhsználva személyes felkészítő órákat tartottam 2018 decembere és 2019 áprilisa között.'
        },
        {
            hol: 'Tutoring: Programozás C#',
            mikor: '2018 - 2019',
            mit: 'Emelt érettségi felkészítő',
            text: 'Kiemelkedő emelt informatika érettségim által szerzett tapasztalataimat felhsználva személyes felkészítő órákat tartottam 2018 decembere és 2019 áprilisa között.'
        }
    ]
}



export const schoolExperienceReducer = (state = schoolState, action) => {
    switch(action.type){
        case GET_EXP_LIST:
            return{
                data: [...state]
            }
        default: return state
    }
}

export const workExperienceReducer = (state = workState, action) => {
    switch(action.type){
        case GET_WORK_EXP:
            return{
                data: [...state]
            }
        default: return state
    }
}

export const getProjectsReducer = (state = projectState, action) => {
    switch (action.type){
        case GET_PROJECTS:
            return{
                data: [...state]
            }
        default: return state
    }
}