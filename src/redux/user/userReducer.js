import  {GET_USER_INFO} from './userTypes'

const initalState = {
    name : 'Klöczl Ádám',
    isStudent : true,
    university : 'Budapesti Corvinus Egyetem',
    company : 'Jacsomedia Smart Web Applications',
    position : 'Content manager',
    email: 'kloczl.adam@gmail.com',
    phone: '+36 30 199 9605',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint, magni laboriosam nobis error autem dolor laudantium tenetur, id odit odio ducimus animi, voluptas excepturi ad. Cupiditate veniam animi, expedita doloremque quidem eius alias debitis libero odit maiores aliquid hic dolorum, molestias necessitatibus labore delectus atque tempore, reiciendis eveniet ex.'
}

export const userReducer = (state = initalState, action) => {
    switch(action.type){
        case GET_USER_INFO:
            return{
                ...state
            }
        default: return state
    }
}