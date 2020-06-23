import { combineReducers } from 'redux'
import { userReducer } from './user/userReducer'
import { schoolExperienceReducer, workExperienceReducer, getProjectsReducer } from './experience/experienceReducer'
import { getBasicAbsReducer, getMediumAbsReducer, getAdvancedAbsReducer } from './abilities/abilitiesReducer'

const rootReducer = combineReducers({
    user: userReducer,
    school: schoolExperienceReducer,
    work: workExperienceReducer,
    project: getProjectsReducer,
    absBasic: getBasicAbsReducer,
    absMedium: getMediumAbsReducer,
    absAdvanced: getAdvancedAbsReducer,
})

export default rootReducer