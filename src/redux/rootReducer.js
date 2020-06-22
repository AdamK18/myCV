import {combineReducers} from 'redux'
import {userReducer} from './user/userReducer'
import {schoolExperienceReducer} from './experience/experienceReducer'
import {workExperienceReducer} from './experience/experienceReducer'
import {getProjectsReducer} from './experience/experienceReducer'

const rootReducer = combineReducers({
    user: userReducer,
    school: schoolExperienceReducer,
    work: workExperienceReducer,
    project: getProjectsReducer
})

export default rootReducer