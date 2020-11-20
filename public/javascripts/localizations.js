const Languages = {
    ENGLISH: 'english', // make sure this value is the same you put after the 'drop-down-label-' for the dropdown
    FRENCH: 'french',
    KOREAN: 'korean',
    SPANISH: 'spanish',
    ITALIAN: 'italian'
    // add a new language here
}

// Change this value is the default language translation when the site loads.
let _CURRENT_LANGUAGE_ = Languages.ENGLISH;

// The icon for the language in the dropdown menu.
const LanguageIconData = {
    [Languages.ENGLISH]: {
        icon: "https://cdn.betterttv.net/emote/566ca04265dbbdab32ec054a/1x"
    },
    [Languages.FRENCH]: {
        icon: "https://cdn.betterttv.net/emote/5558b4ecf417ba167710b35a/1x"
    },
    [Languages.KOREAN]: {
        icon: "https://cdn.betterttv.net/emote/5f67aece97645403e813f0fa/1x"
    },
    [Languages.SPANISH]: {
        icon: " "
    },
    [Languages.ITALIAN]: {
        icon: " "
    },
    // add icon for your new language here
}

// Adds the parameters to the translation (if provided), and returns the language mapping object
function getTranslationTable(params) {

    // retreives the parameters for the text, or displays an error
    function getParams(index){
        if(params[index]==undefined){
            return sadKEK(index, 'missing parameter');
        }
        return params[index];
    }

    if(params.length==0){
        return {
            "drop-down-label-english": { // make sure this drop-down-label- uses the same string value you put in Languages object.
                [Languages.ENGLISH]: "English",
                [Languages.FRENCH]: "Anglais",
                [Languages.KOREAN]: "영국인",
                [Languages.SPANISH]: "Ingles",
                [Languages.ITALIAN]: "Inglese"
                // add your new language translation to everything
            },
            "drop-down-label-french":{
                [Languages.ENGLISH]: "French",
                [Languages.FRENCH]: "Français",
                [Languages.KOREAN]: "프랑스어",
                [Languages.SPANISH]: "Frances",
                [Languages.ITALIAN]: "Francese"
            },
            "drop-down-label-korean":{
                [Languages.ENGLISH]: "Korean",
                [Languages.FRENCH]: "Coréen",
                [Languages.KOREAN]: "한국어",
                [Languages.SPANISH]: "Coreano",
                [Languages.ITALIAN]: "Coreano"
            },
            "page-title": {
                [Languages.ENGLISH]: "Welcome to Twiri",
                [Languages.FRENCH]: "Bienvenue à Twiri",
                [Languages.KOREAN]: "Twiri에 오신 것을 환영합니다",
                [Languages.SPANISH]: "Bienvenido a Twiri",
                [Languages.ITALIAN]: "Benvenuto a Twiri"
            },
            "logoText": {
                [Languages.ENGLISH]: "Twiri, Stream seeker",
                [Languages.FRENCH]: "Twiri, investigatrice des streams",
                [Languages.KOREAN]: "트위리, 스트림 탐색자",
                [Languages.SPANISH]: "Twiri, buscador de stream",
                [Languages.ITALIAN]: "Twiri,cercatore di stream"
            },
            "copyright-text": {
                [Languages.ENGLISH]: "Copyright © 2020 JinriTV",
            },
            "animated-words-label": {
                [Languages.ENGLISH]: "Don't know who to",
                [Languages.FRENCH]: "Ne sais pas qui",
                [Languages.KOREAN]: "누구를 어떻게 해야 할지 모르다",
                [Languages.SPANISH]: "No sabes como",
                [Languages.ITALIAN]: "Non sai come"
            },
            "animated-words": {
                [Languages.ENGLISH]: ['watch?', 'host?', 'follow?', 'raid?'],
                [Languages.FRENCH]: ['regarder?', 'hoster?', 'suivre?', 'raider?'],
                [Languages.KOREAN]: ['급습하다?', '지켜보다?', '뒤를 따르다?'],
                [Languages.SPANISH]: ['ver?', 'host?', 'seguir?', 'redada?'],
                [Languages.ITALIAN]: 'vedere?, 
            },
            "find-streamer-button": {
                [Languages.ENGLISH]: "Find a Streamer",
                [Languages.FRENCH]: "Rechercher un streamer",
                [Languages.KOREAN]: "스트리머 찾기",
                [Languages.SPANISH]: "Buscar un streamer",
                [Languages.ITALIAN]: "Cercare un streamer"
            },
    
            // Question 1: Languages
            "question-text-languages": {
                [Languages.ENGLISH]: "Spoken languages?",
                [Languages.FRENCH]: "Langues de stream?",
                [Languages.SPANISH]: "Lenguaje del streamer?",
                [Languages.ITALIAN]: "Lingua parlata?"
            },
            "button-text-languages-english": {
                [Languages.ENGLISH]: "English",
                [Languages.FRENCH]: "Anglais",
                [Languages.SPANISH]: "Ingles",
                [Languages.ITALIAN]: "Inglese"
            },
            "button-text-languages-korean": {
                [Languages.ENGLISH]: "Korean",
                [Languages.FRENCH]: "Coréen",
                [Languages.SPANISH]: "Coreano",
                [Language.ITALIAN]: "Coreano"
            },
            "button-text-languages-japanese": {
                [Languages.ENGLISH]: "Japanese",
                [Languages.FRENCH]: "Japonais",
                [Languages.SPANISH]: "Japones",
                [Languages.ITALIAN]: "Giapponese"
            },
            "button-text-languages-chinese": {
                [Languages.ENGLISH]: "Chinese",
                [Languages.FRENCH]: "Chinois",
                [Languages.SPANISH]: "Chino",
                [Languages.ITALIAN]: "Cinese"
            },
            "button-text-languages-french": {
                [Languages.ENGLISH]: "French",
                [Languages.FRENCH]: "Français",
                [Languages.SPANISH]: "Frances",
                [Languages.ITALIAN]: "Francese"
            },
            "button-text-languages-spanish": {
                [Languages.ENGLISH]: "Spanish",
                [Languages.FRENCH]: "Espagnol",
                [Languages.SPANISH]: "Español",
                [Languages.ITALIAN]: "Spagnolo"
            },
    
            // Question 2: Content
            "question-text-content": {
                [Languages.ENGLISH]: "I prefer streamers who stream...",
                [Languages.FRENCH]: "Je préfère des streamers qui...",
                [Languages.SPANISH]: "Prefiero streamers que...",
                [Langauges.ITALIAN]: "Preferisco streamers che..."
            },
            "button-text-content-justchatting": {
                [Languages.ENGLISH]: "Just Chatting"
            },
            "button-text-content-games": {
                [Languages.ENGLISH]: "Games",
                [Languages.FRENCH]: "Jeux",
                [Languages.SPANISH]: "Videojuegos",
                [Languages.ITALIANO]: "Videogiochi"
            },
            "button-text-content-ASMR": {
                [Languages.ENGLISH]: "ASMR",
                [Languages.FRENCH]: "ASMR",
                [Languages.SPANISH]: "ASMR",
                [Languages.ITALIANO]: "ASMR"
            },
            "button-text-content-sciencetech": {
                [Languages.ENGLISH]: "Science & Tech",
                [Languages.FRENCH]: "Science et Technologie",
                [Languages.SPANISH]: "Ciencia y Tecnologia",
                [Languages.ITALIAN]: "Scienze e Tecnologia"
            },
            "button-text-content-food": {
                [Languages.ENGLISH]: "Food",
                [Languages.SPANISH]: "Comida",
                [Languages.ITALIAN]: "Cibo"
            },
            "button-text-content-cooking": {
                [Languages.ENGLISH]: "Cooking",
                [Languages.SPANISH]: "Cocina",
                [Languages.ITALIAN]: "Cucina"
            },
            "button-text-content-outdoors": {
                [Languages.ENGLISH]: "Outdoors",
                [Languages.SPANISH]: "Exterior",
                [Languages.ITALIAN]: "All'aperto"
            },
            "button-text-content-irl": {
                [Languages.ENGLISH]: "IRL",
                [Languages.SPANISH]: "IRL",
                [Languages.ITALIAN]: "IRL"
            },
            "button-text-content-movies": {
                [Languages.ENGLISH]: "Movies",
                [Languages.SPANISH]: "Peliculas",
                [Languages.ITALIAN]: "Film"
            },
            "button-text-content-music": {
                [Languages.ENGLISH]: "Music",
                [Languages.SPANISH]: "Musica",
                [Languages.ITALIAN]: "Musica"
            },
            "button-text-content-dancing": {
                [Languages.ENGLISH]: "Dancing",
                [Languages.SPANISH]: "Bailes",
                [Languages.ITALIAN]: "Danza"
            },
            "button-text-content-yoga": {
                [Languages.ENGLISH]: "Yoga",
                [Languages.SPANISH]: "Yoga",
                [Languages.ITALIAN]: "Yoga"
            },
    
            // Question 3: subonly
            "question-text-subonly": {
                [Languages.ENGLISH]: "What kind of chat?",
                [Languages.SPANISH]: "Que clase de chat?",
                [langauges.ITALIAN]: "
            },
            "button-text-subonly-all": {
                [Languages.ENGLISH]: "All",
                [Languages.SPANISH]: "Todos"
            },
            "button-text-subonly-sub-only": {
                [Languages.ENGLISH]: "Sub-only",
                [Languages.SPANISH]: "Suscriptor-solo"
            },
            "button-text-subonly-follower-only": {
                [Languages.ENGLISH]: "Follower-only",
                [Languages.SPANISH]: "Seguidores-solo"
            },
    
            //Question 4: Mature
            "question-text-mature": {
                [Languages.ENGLISH]: "Mature content?",
                [Languages.SPANISH]: "Contenido para mayores?"
            },
            "button-text-mature-true": {
                [Languages.ENGLISH]: "Mature",
                [Lnaguages.SPANISH]: "Mayores"
            },
            "button-text-mature-false": {
                [Languages.ENGLISH]: "Family-friendly",
                [Languages.SPANISH]: "Para todas las edades"
            },
    
            // Question 5: chat vibe
            "question-text-chat-vibe": {
                [Languages.ENGLISH]: "Chat Vibe?",
                [Languages.SPANISH]: "Estilo de stream"
            },
            "button-text-chat-vibe-chatty": {
                [Languages.ENGLISH]: "Chatty",
                [Languages.SPANISH]: "Hablador"
            },
            "button-text-chat-vibe-chill": {
                [Languages.ENGLISH]: "Chill",
                [Languages.SPANISH]: "Tranquilo"
            },
            "button-text-chat-vibe-serious": {
                [Languages.ENGLISH]: "Serious"
                [Languages.SPANISH]: "Serio"
            },
            "button-text-chat-vibe-smart": {
                [Languages.ENGLISH]: "Smart",
                [Languages.SPANISH]: "Inteligente"
            },
            "button-text-chat-vibe-funny": {
                [Languages.ENGLISH]: "Funny",
                [Languages.SPANISH]: "Gracioso"
            },
            "button-text-chat-vibe-friendly": {
                [Languages.ENGLISH]: "Friendly",
                [Languages.SPANISH]: "Amistoso"
            },
            "button-text-chat-vibe-moody": {
                [Languages.ENGLISH]: "Moody",
                [Languages.SPANISH]: "Temperamental"
            },
            "button-text-chat-vibe-weird": {
                [Languages.ENGLISH]: "Weird",
                [Languages.SPANISH]: "Raro"
            },
            "button-text-chat-vibe-geeky": {
                [Languages.ENGLISH]: "Geeky",
                [Languages.SPANISH]: "Geek"
            },
            "button-text-chat-vibe-shy": {
                [Languages.ENGLISH]: "Shy",
                [Languages.SPANISH]: "Callado"
            },
            "button-text-chat-vibe-silly": {
                [Languages.ENGLISH]: "Silly",
                [Languages.SPANISH]: "Tonto"
            },
            "button-text-chat-vibe-rude": {
                [Languages.ENGLISH]: "Rude",
                [Languages.SPANISH]: "Grosero"
            },
            "button-text-chat-vibe-dorky": {
                [Languages.ENGLISH]: "Dorky",
                [Languages.SPANISH]: "Bobo"
            },
            "button-text-chat-vibe-angry": {
                [Languages.ENGLISH]: "Angry",
                [Languages.SPANISH]: "Molesto"
            },
            "button-text-chat-vibe-loud": {
                [Languages.ENGLISH]: "Loud",
                [Languages.SPANISH]: "Ruidoso"
            },
            "button-text-chat-vibe-quiet": {
                [Languages.ENGLISH]: "Quiet",
                [Languages.SPANISH]: "Silencioso"
            },
            "button-text-chat-vibe-troll": {
                [Languages.ENGLISH]: "Troll",
                [Languages.SPANISH]: "Troll"
            },
            "button-text-chat-vibe-drunk": {
                [Languages.ENGLISH]: "Drunk",
                [Languages.SPANISH]: "Borracho"
            },
            "button-text-chat-vibe-spam-emotes": {
                [Languages.ENGLISH]: "Spam emotes",
                [Languages.SPANISH]: "Spam de emoticones"
            },
            "button-text-chat-vibe-fast": {
                [Languages.ENGLISH]: "Fast",
                [Languages.SPANISH]: "Rapido"
            },
            "button-text-chat-vibe-slow": {
                [Languages.ENGLISH]: "Slow",
                [Languages.SPANISH]: "Lento"
            },
            "button-text-chat-vibe-wholesome": {
                [Languages.ENGLISH]: "Wholesome",
                [Languages.SPANISH]: "Completo"
            },
            "button-text-chat-vibe-toxic": {
                [Languages.ENGLISH]: "Toxic",
                [Languages.SPANISH]: "Toxico"
            },
    
            // Question 6: average viewers
            "question-text-average_viewers": {
                [Languages.ENGLISH]: "Average viewer count?",
                [Languages.SPANISH]: "Promedio de espectadores?"
            },
    
            // Question 7: watch time
            "question-text-watchtime": {
                [Languages.ENGLISH]: "I can watch streams on",
                [Languages.SPANISH]: "Puedo ver streams los"
            },
            "time-range-watchtime-weekdays": {
                [Languages.ENGLISH]: "Weekdays",
                [Languages.SPANISH]: "Dias de la semana"
            },
            "time-range-watchtime-weekends": {
                [Languages.ENGLISH]: "Weekends",
                [Languages.SPANISH]:"Fines de semana"
            },
            "time-range-watchtime-from": {
                [Languages.ENGLISH]: "from",
                [Languages.SPANISH]: "de"
            },
            "time-range-watchtime-to": {
                [Languages.ENGLISH]: "to",
                [Languages.SPANISH]: "a"
            },
    
            // Misc
            "loading-message": {
                [Languages.ENGLISH]: "Matching you with a streamer...",
                [Languages.FRENCH]: "En train de vous trouver des streamers...",
                [Languages.SPANISH]: "Buscando un streamer..."
            },
            "match": {
                [Languages.ENGLISH]: "match",
                [Languages.FRENCH]: "égal"
                [Languages.SPANISH]: "pareo"
            },
            "results": {
                [Languages.ENGLISH]: "Results",
                [Languages.FRENCH]: "Résultats",
                [Languages.SPANISH]: "Resultados"
            },
            "restart": {
                [Languages.ENGLISH]: "Restart",
                [Languages.FRENCH]: "à nouveau",
                [Languages.SPANISH]: "de nuevo"
            },
            "continue": {
                [Languages.ENGLISH]: "Continue",
                [Languages.FRENCH]: "Continuez",
                [Languages.SPANISH]: "Continuar"
            }
        }
    }

    // if we have params, we attempt to get them:
   return {

        // requires parameters (pass the values in params as an array)
        "generated-quiz-modal-progress-label": {
            [Languages.ENGLISH]: `Question ${getParams(0)} of ${getParams(1)}`,
            [Languages.FRENCH]: `Question ${getParams(0)} sur ${getParams(1)}`,
            [Languages.KOREAN]: `이의 있소 ${getParams(0)} 의 ${getParams(1)}`
        },
        "range-display-average_viewers": {
            [Languages.ENGLISH]: `Between ${getParams(0)} and ${getParams(1)} average viewers`,
            [Languages.FRENCH]: `Entre ${getParams(0)} et ${getParams(1)} spectateurs en moyen`,
        }
    }
}

// getTranslation is the main function that provides the translations.
// We give it the key for the text we want the translation for, and
// and an array of parameters we need to complete the text (such as values from inputs).
// Passing the parameters array is optional. 
function getTranslation(label, params = []) {
    // set the translation table, if we are using parameters or not
    let TranslationTable = getTranslationTable(params);

    // check if there is translation for this label, then use it
    if (TranslationTable[label]) {
        if (TranslationTable[label][_CURRENT_LANGUAGE_]) {
            return TranslationTable[label][_CURRENT_LANGUAGE_]
        }
        return sadKEK(label, 'missing translation');
    }
    return sadKEK(label, 'missing label');
}

// returns an error message and outputs and error to the console.
function sadKEK(label, message){
    console.error(`${getLanguage()} language error for '${label}': ${message}`)
    return `<span style="color:red">${message} <img src="https://cdn.betterttv.net/emote/5d72ae0aa32edb714a9df060/1x"/></span>`;
}

//retreives the language's icon to display on the dropdown menu.
function getLanguageIcon(language) {
    if (LanguageIconData[language]) {
        return LanguageIconData[language].icon
    }
    return ''
}

function setLanguage(language) {
    _CURRENT_LANGUAGE_ = language;
}
function getLanguage() {
    return _CURRENT_LANGUAGE_;
}
