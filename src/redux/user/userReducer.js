import { GET_USER_INFO } from "./userTypes";

const initalState = {
    name: "Klöczl Ádám",
    isStudent: true,
    university: "Budapesti Corvinus Egyetem",
    company: "Jacsomedia Smart Web Applications",
    position: "Content manager",
    email: "kloczl.adam@gmail.com",
    phone: "+36 30 199 9605",
    linkedIn: "https://www.linkedin.com/in/adam-kloczl-10b189165/",
    github: "https://github.com/AdamK18",
    summary:
        "Az informatika iránt már kisgyerek korom óta érdeklődök, ami valószínűleg a pc játékokhoz köthető igazán. Azonban a programozás világába csak a középiskola megkezdésekor cseppentem bele. Tanulmányaimon kívül, szabadidőmben is szívesen foglalkozok ezen ismereteim bővítésével. Ezen kívül szívesen töltöm időmet sportolással például longboardozással, fotózással és főzéssel. Magamat egy rugalmas, könnyedén alkalmazkodó, csapatjátékos egyénnek tartom, aki kedveli a kihívásokat és nyitott a folyamatos fejlődésre, tanulásra.",
};

export const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
            };
        default:
            return state;
    }
};
