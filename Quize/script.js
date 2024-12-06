const quizData = [
    {
        question: "Q1 ).2023 में भारत के किस राज्य ने 'गोधन न्याय योजना' की शुरुआत की?",
        a: "मध्य प्रदेश",
        b: "छत्तीसगढ़",
        c: "बिहार",
        d: "राजस्थान",
        correct: "b"
    },
    {
        question: "Q2). 2023 में नोबेल शांति पुरस्कार किसे दिया गया?",
        a: "डेनिस मुक्वेगे",
        b: "मलाला यूसुफजई",
        c: "मारिया रेसा",
        d: "यह अभी घोषित नहीं हुआ है",
        correct: "d"
    },
    {
        question: "Q3).2023 में भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) ने किस मिशन के तहत सूर्य के अध्ययन के लिए पहला मिशन लॉन्च किया?",
        a: "मंगलयान",
        b: "चंद्रयान-3",
        c: "आदित्य L1",
        d: "गगनयान",
        correct: "c"
    },
    {
        question: "Q4).2023 में आयोजित 'शंघाई सहयोग संगठन' (SCO) शिखर सम्मेलन में भारत ने किस शहर से वर्चुअल रूप से अध्यक्षता की?",
        a: "मुंबई",
        b: "चेन्नई",
        c: "नई दिल्ली",
        d: "बेंगलुरु",
        correct: "c"
    },
    {
        question: "Q5).2023 में किस भारतीय अर्थशास्त्री को IMF का मुख्य अर्थशास्त्री नियुक्त किया गया?",
        a: "अरविंद सुब्रमण्यम",
        b: "गीता गोपीनाथ",
        c: "कौशिक बसु",
        d: "रघुराम राजन",
        correct: "b"
    },
    {
        question: "Q6).2023 में भारत की पहली हाईड्रोजन ट्रेन किस राज्य में चलाई गई?",
        a: "महाराष्ट्र",
        b: "गुजरात",
        c: "उत्तर प्रदेश",
        d: "हरियाणा",
        correct: "d"
    },
    {
        question: "Q7).2023 में जारी ग्लोबल हंगर इंडेक्स (GHI) में भारत की रैंक क्या रही?",
        a: "101",
        b: "102",
        c: "107",
        d: "111",
        correct: "c"
    },
    {
        question: "Q8).2023 में किस भारतीय शहर ने 'वर्ल्ड वॉटर कांग्रेस' की मेजबानी की?",
        a: "चेन्नई",
        b: "हैदराबाद",
        c: "कोलकाता",
        d: "नई दिल्ली",
        correct: "b"
    },
    {
        question: "Q9).किस भारतीय कंपनी ने 2023 में दुनिया का सबसे बड़ा सोलर पावर प्लांट स्थापित किया?",
        a: "टाटा पावर",
        b: "अदानी ग्रीन एनर्जी",
        c: "रिलायंस पावर",
        d: "NHPC",
        correct: "b"
    },
    {
        question: "Q10).2023 में भारत के राष्ट्रपति द्वारा किसे पद्म विभूषण पुरस्कार से सम्मानित किया गया?",
        a: "रतन टाटा",
        b: "म. एस. धौनी",
        c: "सुनील गावस्कर",
        d: "एस. जयशंकर",
        correct: "a"
    },
    
];
function openhtmlfile(){window.location.href="index1.html"}

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function frm (){
    window.location.href="index1.html"
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <div class="btn5">
                <button id="btn6" onclick="location.reload()">Reload</button>
                <button id="btn7" onclick=frm()>Fill form</button>
                </div>
            `;
        }
    }
});
