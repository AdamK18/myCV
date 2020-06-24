import {GET_EXP_LIST, GET_WORK_EXP, GET_PROJECTS } from './experienceTypes'

const schoolState = {
    data: [
        {
            hol: 'Budapesti Corvinus Egyetem',
            mikor: '2018 - (2022)',
            mit: 'Gazdaságinformatika',
            text: 'A 7 féléves képzés 4 félévének sikeres elvégzése során a hasznos informatika tudás megszerzése mellett volt alkalmam elsajátítani gazdasági ismereteket, illetve megismerkedni a projekt és csapatmunkák világával, valamint előadói és prezentációs gyakorlatot szerezni.'
        },
        {
            hol: 'Gárdonyi Géza Ciszterci Gimnázium',
            mikor: '2009 - 2018',
            mit: 'Érettségi',
            text: 'Középiskolai tanulmányaim során a matematikát és informatikát emelt óraszámban, fakultációs keretek között tanultam, majd emelt érettségim is informatikából tettem.'
        }
    ]
}

const workState = {
    data: [
        {
            hol: 'Jacsomedia Smart Web Applications',
            mikor: '2019 - ',
            mit: 'Content manager',
            text: 'Októberben kezdtem munkálataim a Jacsomedia-nál, ahol megalapoztam mostani webfejlesztési tudásomat. Megismerkedtem a cégen belüli feladatmegosztással, a kanban rendszerrel és egy komoly munkahely felelősségtudatával. Feladataim közé tartozott a webes kontentek módosítása, frissítése, készítése és felöltése Teamsite, Drupal vagy Wordpress használatával. Emellett kezeltem adatbázisokat és részt vettem fejlesztési/tesztelési folyamatokban, amiknek köszönhetően megtanultam Git és SQL kódot írni. A HTML-CSS-JS triot szabadidőmben sajátítottam el, amit aktívan használtam is az elmúlt hónapokban különböző oldalak módosításában és HTML levelek készítésében pl.: Veeva approved email.'
        },
        {
            hol: 'Korrepetálás: Programozás C#',
            mikor: '2018 - 2019',
            mit: 'Emelt érettségi felkészítő',
            text: 'Kiemelkedő emelt informatika érettségimre történő felkészülés során szerzett tapasztalataimat felhasználva személyes korrepetáló órákat tartottam 2018 decembere és 2019 áprilisa között.'
        }
    ]
}

const projectState = {
    data: [
        {
            nev: 'myCV',
            nyelv: 'Javascript: React-Redux',
            text: 'Önéletrajzi weboldalam javascriptben írtam react és redux library-k segítségével.',
            link: 'https://github.com/AdamK18/myCV',
            isGutHub: true
        },
        {
            nev: 'LearnIT',
            nyelv: 'C# - SQL - LINQ',
            text: 'Szoftvertechnológia II. órámra beadandóként készítettem ezt az SQL adatbázis alapú C# alkalmazást. Az adatbázis megtervezése után részenként integráltam bele a funkciókat LINQ és C# nyelvek segítségével.',
            link: 'https://github.com/AdamK18/LearnIT',
            isGutHub: true
        },
        {
            nev: 'Calculator',
            nyelv: 'Kotlin',
            text: 'Ezt a számológépre hasonlító alkalmazást önálló fejlődés érdekében készítettem Android Studio-ban.',
            link: 'https://bitbucket.org/adamkloczl/calculator_android/src/master/',
            isGutHub: false
        },
        {
            nev: 'Color match',
            nyelv: 'Java',
            text: 'Egy egyszerű telefonos játék melyben 4 különböző szín véletlen sorrendben villan fel, majd ezt a sorrendet kell a felhasználónak utánoznia. Android Studio-ban készült.',
            link: 'https://bitbucket.org/adamkloczl/colormatch_android/src/master/',
            isGutHub: false
        },
        {
            nev: 'myNotes',
            nyelv: 'Kotlin',
            text: 'Az implementált SQLite adatbázis segítségével kis jegyzeteket tárolhat el a felhasználó. Android Studio-ban készült.',
            link: 'https://bitbucket.org/adamkloczl/mynotes_android/src/master/',
            isGutHub: false
        },
        {
            nev: 'MemoryGame',
            nyelv: 'Java',
            text: 'Memóriajáték mely céges interjú feladat volt. A grafikai kellékeket biztosították. Android Studio-ban készült.',
            link: 'https://bitbucket.org/adamkloczl/memorygame/src/master/',
            isGutHub: false
        },
        {
            nev: 'QueTalker-android',
            nyelv: 'Kotlin - Java',
            text: 'Közös családi projekt. Egy egyszerű (félkész) chat applikáció. Felhasználói kezelőfelület mellyel a regisztráció és belépés egyaránt lehetséges feltéve, hogy az alábbi szerver fut. Android Studio-ban készült.',
            link: 'https://bitbucket.org/andraskloczl/quetalker-android/src/develop/',
            isGutHub: false
        },
        {
            nev: 'QueTalker-backend',
            nyelv: 'Java',
            text: 'Spring backend amely felelős a regisztrációs folyamatok elvégzéséért. A felhasználói adatokat tárolja és token rendszerrel léptet be. IntellIj-ben készült.',
            link: 'https://bitbucket.org/andraskloczl/quetalker-backend/src',
            isGutHub: false
        },
        {
            nev: 'Fluimucil game',
            nyelv: 'C#',
            text: 'Ebben a játékban Fluimucil "De miért?" Ábellel kell kikerülni a veszélyeket és minél tovább túlélni. Életem első projektje melyet közzé is tettem Google Play-en. Unity-ben készült.',
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
