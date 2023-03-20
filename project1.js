
//* Variables
const btn = document.querySelector('.button');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const body = document.querySelector('body');
const img = document.querySelector('img');
const mainC = document.querySelector('main');
const quotes = [
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
        "img": "OW",
        "profession": "Irish poet",
        "topics": [
            "Inspirational",
            "Advice",
            "Humor"
        ]
    },
    {
        "quote": "Looking back, we were the luckiest people in the world. There was no choice but to be pioneers; no time to be beginners.",
        "author": "Margaret Hamilton",
        "img": "MH",
        "profession": "CS",
        "topics": [
            "Inspirational",
            "Advice",
            "Philosophy"
        ]
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
        "img": "OW",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
        "author": "Alan Turing",
        "img": "AT",
        "profession": "Mathematician",
        "topics": [
            "Philosophy",
            "Inspiration"
        ]
    },
    {
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
        "img": "OW",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "People"
        ]
    },
    {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King",
        "img": "MLK",
        "profession": "American minister",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "The time is always right to do what is right.",
        "author": "Martin Luther King",
        "img": "MLK",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "author": "Martin Luther King",
        "img": "MLK",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        "author": "Albert Einstein",
        "img": "AE",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "The most important product of a creative mind is an invention. Its ultimate aim is the rule of mind over nature and the use of its forces for the needs of mankind.",
        "author": "Nikola Tesla",
        "img": "NT",
        "profession": "American inventor",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "author": "Albert Einstein",
        "img": "AE",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill",
        "img": "WCH",
        "profession": "Former British Prime Minister",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "If you're going through hell, keep going.",
        "author": "Winston Churchill",
        "img": "WCH",
        "profession": "Former British Prime Minister",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "We make a living by what we get, but we make a life by what we give.",
        "author": "Winston Churchill",
        "img": "WCH",
        "profession": "Former British Prime Minister",
        "topics": [
            "People",
            "Life"
        ]
    }
];

//* Event handlers
btn.addEventListener('click', function () {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = `"${randomQuote.quote}"`;
    author.textContent = randomQuote.author;
    img.src = `./img/authors/${randomQuote.img}.png`
    animateCSS('img', 'fadeInLeft');
    body.classList.add('bg-change');
    mainC.classList.add('animate__animated', 'animate__fadeInDown');
})


// Animation function that it triggers everytime a new quote is requested
const animateCSS = (element, animation, prefix = 'animate__') =>
    // Create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, this will clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });