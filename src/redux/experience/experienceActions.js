import GET_EXP_LIST from './experienceTypes'
import GET_WORK_EXP from './experienceTypes'
import GET_PROJECTS from './experienceTypes'

export const getExpList = () => {
    return{
        type: GET_EXP_LIST
    }
} 

export const getWorkExp = () => {
    return{
        type: GET_WORK_EXP
    }
}

export const getProjects = () => {
     return{
         type: GET_PROJECTS
     }
}