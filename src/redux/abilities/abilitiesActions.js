import {GET_BASIC_ABS, GET_MEDIUM_ABS, GET_ADVANCED_ABS } from './abilitiesType'

export const getBasicAbs = () => {
    return {
        type: GET_BASIC_ABS
    }
}

export const getMediumAbs = () => {
    return {
        type: GET_MEDIUM_ABS
    }
}

export const getAdvancedAbs = () => {
    return {
        type: GET_ADVANCED_ABS
    }
}