/* ============================================
   Arabic Alphabet Lesson - Interactive Script
   Sound playback, practice mode, quiz, confetti
   ============================================ */

// ─── Arabic Letters Data ───
const ARABIC_LETTERS = [
    {
        id: 1, letter: 'ا', name: 'Alif', transliteration: 'a',
        sound: 'الف',
        description: 'The first letter. A long vowel sound.',
        forms: { isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا' },
        examples: [
            { word: 'اللّٰه', translit: 'Allah', meaning: 'God' },
            { word: 'الحمد', translit: 'Al-Hamd', meaning: 'The Praise' },
            { word: 'الرحمن', translit: 'Ar-Rahman', meaning: 'The Most Merciful' }
        ]
    },
    {
        id: 2, letter: 'ب', name: 'Ba', transliteration: 'b',
        sound: 'باء',
        description: 'Makes a "b" sound like in "boy".',
        forms: { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' },
        examples: [
            { word: 'بِسْمِ', translit: 'Bismi', meaning: 'In the name of' },
            { word: 'بَرَكَة', translit: 'Baraka', meaning: 'Blessing' },
            { word: 'بَيْت', translit: 'Bayt', meaning: 'House' }
        ]
    },
    {
        id: 3, letter: 'ت', name: 'Ta', transliteration: 't',
        sound: 'تاء',
        description: 'Makes a "t" sound like in "table".',
        forms: { isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' },
        examples: [
            { word: 'تَبَارَكَ', translit: 'Tabarak', meaning: 'Blessed is' },
            { word: 'تَوْبَة', translit: 'Tawba', meaning: 'Repentance' },
            { word: 'تِين', translit: 'Teen', meaning: 'Fig (Surah)' }
        ]
    },
    {
        id: 4, letter: 'ث', name: 'Tha', transliteration: 'th',
        sound: 'ثاء',
        description: 'Makes a "th" sound like in "think".',
        forms: { isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' },
        examples: [
            { word: 'ثَمَرَات', translit: 'Thamarat', meaning: 'Fruits' },
            { word: 'ثَوَاب', translit: 'Thawab', meaning: 'Reward' },
            { word: 'ثَلَاثَة', translit: 'Thalatha', meaning: 'Three' }
        ]
    },
    {
        id: 5, letter: 'ج', name: 'Jeem', transliteration: 'j',
        sound: 'جيم',
        description: 'Makes a "j" sound like in "jump".',
        forms: { isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' },
        examples: [
            { word: 'جَنَّة', translit: 'Jannah', meaning: 'Paradise' },
            { word: 'جِبْرِيل', translit: 'Jibreel', meaning: 'Angel Gabriel' },
            { word: 'جَمِيل', translit: 'Jameel', meaning: 'Beautiful' }
        ]
    },
    {
        id: 6, letter: 'ح', name: 'Haa', transliteration: 'ḥ',
        sound: 'حاء',
        description: 'A deep "h" from the throat.',
        forms: { isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' },
        examples: [
            { word: 'حَمْد', translit: 'Hamd', meaning: 'Praise' },
            { word: 'حَقّ', translit: 'Haqq', meaning: 'Truth' },
            { word: 'حِكْمَة', translit: 'Hikma', meaning: 'Wisdom' }
        ]
    },
    {
        id: 7, letter: 'خ', name: 'Kha', transliteration: 'kh',
        sound: 'خاء',
        description: 'Makes a "kh" sound from the throat.',
        forms: { isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' },
        examples: [
            { word: 'خَيْر', translit: 'Khair', meaning: 'Good / Best' },
            { word: 'خَلَقَ', translit: 'Khalaq', meaning: 'Created' },
            { word: 'خُشُوع', translit: 'Khushoo', meaning: 'Humility' }
        ]
    },
    {
        id: 8, letter: 'د', name: 'Dal', transliteration: 'd',
        sound: 'دال',
        description: 'Makes a "d" sound like in "door".',
        forms: { isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد' },
        examples: [
            { word: 'دِين', translit: 'Deen', meaning: 'Religion / Faith' },
            { word: 'دُعَاء', translit: "Du'a", meaning: 'Prayer / Supplication' },
            { word: 'دُنْيَا', translit: 'Dunya', meaning: 'World' }
        ]
    },
    {
        id: 9, letter: 'ذ', name: 'Dhal', transliteration: 'dh',
        sound: 'ذال',
        description: 'Makes a "dh" sound like in "the".',
        forms: { isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ' },
        examples: [
            { word: 'ذِكْر', translit: 'Dhikr', meaning: 'Remembrance' },
            { word: 'ذٰلِكَ', translit: 'Dhalika', meaning: 'That' },
            { word: 'ذُرِّيَّة', translit: 'Dhurriya', meaning: 'Offspring' }
        ]
    },
    {
        id: 10, letter: 'ر', name: 'Ra', transliteration: 'r',
        sound: 'راء',
        description: 'A rolled "r" sound.',
        forms: { isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر' },
        examples: [
            { word: 'رَبّ', translit: 'Rabb', meaning: 'Lord' },
            { word: 'رَحْمَة', translit: 'Rahma', meaning: 'Mercy' },
            { word: 'رَسُول', translit: 'Rasool', meaning: 'Messenger' }
        ]
    },
    {
        id: 11, letter: 'ز', name: 'Zay', transliteration: 'z',
        sound: 'زاي',
        description: 'Makes a "z" sound like in "zoo".',
        forms: { isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز' },
        examples: [
            { word: 'زَكَاة', translit: 'Zakat', meaning: 'Charity' },
            { word: 'زَيْتُون', translit: 'Zaytoon', meaning: 'Olive' },
            { word: 'زَمْزَم', translit: 'Zamzam', meaning: 'Zamzam (water)' }
        ]
    },
    {
        id: 12, letter: 'س', name: 'Seen', transliteration: 's',
        sound: 'سين',
        description: 'Makes a "s" sound like in "sun".',
        forms: { isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' },
        examples: [
            { word: 'سَلَام', translit: 'Salaam', meaning: 'Peace' },
            { word: 'سَمَاء', translit: 'Samaa', meaning: 'Sky / Heaven' },
            { word: 'سُورَة', translit: 'Surah', meaning: 'Chapter (of Quran)' }
        ]
    },
    {
        id: 13, letter: 'ش', name: 'Sheen', transliteration: 'sh',
        sound: 'شين',
        description: 'Makes a "sh" sound like in "shine".',
        forms: { isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' },
        examples: [
            { word: 'شَمْس', translit: 'Shams', meaning: 'Sun (Surah)' },
            { word: 'شُكْر', translit: 'Shukr', meaning: 'Gratitude' },
            { word: 'شَهْر', translit: 'Shahr', meaning: 'Month' }
        ]
    },
    {
        id: 14, letter: 'ص', name: 'Saad', transliteration: 'ṣ',
        sound: 'صاد',
        description: 'A heavy "s" sound.',
        forms: { isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص' },
        examples: [
            { word: 'صَلَاة', translit: 'Salah', meaning: 'Prayer' },
            { word: 'صَبْر', translit: 'Sabr', meaning: 'Patience' },
            { word: 'صِرَاط', translit: 'Sirat', meaning: 'Path' }
        ]
    },
    {
        id: 15, letter: 'ض', name: 'Daad', transliteration: 'ḍ',
        sound: 'ضاد',
        description: 'A heavy "d" — unique to Arabic!',
        forms: { isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض' },
        examples: [
            { word: 'ضِيَاء', translit: 'Diyaa', meaning: 'Light / Brightness' },
            { word: 'ضَلَال', translit: 'Dalal', meaning: 'Astray' },
            { word: 'أَرْض', translit: 'Ard', meaning: 'Earth' }
        ]
    },
    {
        id: 16, letter: 'ط', name: 'Taa', transliteration: 'ṭ',
        sound: 'طاء',
        description: 'A heavy "t" sound.',
        forms: { isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط' },
        examples: [
            { word: 'طَيِّب', translit: 'Tayyib', meaning: 'Pure / Good' },
            { word: 'طُور', translit: 'Toor', meaning: 'Mount (Surah)' },
            { word: 'طَهَارَة', translit: 'Tahara', meaning: 'Purity' }
        ]
    },
    {
        id: 17, letter: 'ظ', name: 'Dhaa', transliteration: 'ẓ',
        sound: 'ظاء',
        description: 'A heavy "dh" sound.',
        forms: { isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' },
        examples: [
            { word: 'ظُلْم', translit: 'Dhulm', meaning: 'Injustice' },
            { word: 'ظِلّ', translit: 'Dhill', meaning: 'Shade / Shadow' },
            { word: 'عَظِيم', translit: 'Adheem', meaning: 'Great / Mighty' }
        ]
    },
    {
        id: 18, letter: 'ع', name: 'Ain', transliteration: 'ʿ',
        sound: 'عين',
        description: 'A unique guttural sound from deep in the throat.',
        forms: { isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' },
        examples: [
            { word: 'عِلْم', translit: 'Ilm', meaning: 'Knowledge' },
            { word: 'عَرْش', translit: 'Arsh', meaning: 'Throne (of God)' },
            { word: 'عِبَادَة', translit: 'Ibada', meaning: 'Worship' }
        ]
    },
    {
        id: 19, letter: 'غ', name: 'Ghain', transliteration: 'gh',
        sound: 'غين',
        description: 'A gargling "gh" sound.',
        forms: { isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ' },
        examples: [
            { word: 'غَفُور', translit: 'Ghafoor', meaning: 'Most Forgiving' },
            { word: 'غَيْب', translit: 'Ghayb', meaning: 'Unseen' },
            { word: 'مَغْفِرَة', translit: 'Maghfira', meaning: 'Forgiveness' }
        ]
    },
    {
        id: 20, letter: 'ف', name: 'Fa', transliteration: 'f',
        sound: 'فاء',
        description: 'Makes a "f" sound like in "fan".',
        forms: { isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف' },
        examples: [
            { word: 'فَجْر', translit: 'Fajr', meaning: 'Dawn (Surah)' },
            { word: 'فَلَاح', translit: 'Falah', meaning: 'Success' },
            { word: 'فُرْقَان', translit: 'Furqan', meaning: 'Criterion (Surah)' }
        ]
    },
    {
        id: 21, letter: 'ق', name: 'Qaf', transliteration: 'q',
        sound: 'قاف',
        description: 'A deep "q" sound from the back of the throat.',
        forms: { isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق' },
        examples: [
            { word: 'قُرْآن', translit: 'Quran', meaning: 'The Quran' },
            { word: 'قَلْب', translit: 'Qalb', meaning: 'Heart' },
            { word: 'قَمَر', translit: 'Qamar', meaning: 'Moon (Surah)' }
        ]
    },
    {
        id: 22, letter: 'ك', name: 'Kaf', transliteration: 'k',
        sound: 'كاف',
        description: 'Makes a "k" sound like in "kite".',
        forms: { isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك' },
        examples: [
            { word: 'كِتَاب', translit: 'Kitab', meaning: 'Book' },
            { word: 'كَرِيم', translit: 'Kareem', meaning: 'Generous / Noble' },
            { word: 'كَوْثَر', translit: 'Kawthar', meaning: 'Abundance (Surah)' }
        ]
    },
    {
        id: 23, letter: 'ل', name: 'Lam', transliteration: 'l',
        sound: 'لام',
        description: 'Makes a "l" sound like in "love".',
        forms: { isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل' },
        examples: [
            { word: 'لَيْل', translit: 'Layl', meaning: 'Night (Surah)' },
            { word: 'لُقْمَان', translit: 'Luqman', meaning: 'Luqman (Surah)' },
            { word: 'لَوْح', translit: 'Lawh', meaning: 'Tablet' }
        ]
    },
    {
        id: 24, letter: 'م', name: 'Meem', transliteration: 'm',
        sound: 'ميم',
        description: 'Makes a "m" sound like in "moon".',
        forms: { isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' },
        examples: [
            { word: 'مُحَمَّد', translit: 'Muhammad', meaning: 'Prophet Muhammad ﷺ' },
            { word: 'مَسْجِد', translit: 'Masjid', meaning: 'Mosque' },
            { word: 'مَلَك', translit: 'Malak', meaning: 'Angel' }
        ]
    },
    {
        id: 25, letter: 'ن', name: 'Noon', transliteration: 'n',
        sound: 'نون',
        description: 'Makes a "n" sound like in "noon".',
        forms: { isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' },
        examples: [
            { word: 'نُور', translit: 'Noor', meaning: 'Light (Surah)' },
            { word: 'نِعْمَة', translit: "Ni'ma", meaning: 'Blessing' },
            { word: 'نَبِيّ', translit: 'Nabi', meaning: 'Prophet' }
        ]
    },
    {
        id: 26, letter: 'ه', name: 'Ha', transliteration: 'h',
        sound: 'هاء',
        description: 'A light "h" sound like in "hello".',
        forms: { isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه' },
        examples: [
            { word: 'هُدَى', translit: 'Huda', meaning: 'Guidance' },
            { word: 'هُوَ', translit: 'Huwa', meaning: 'He (Allah)' },
            { word: 'هِجْرَة', translit: 'Hijra', meaning: 'Migration' }
        ]
    },
    {
        id: 27, letter: 'و', name: 'Waw', transliteration: 'w',
        sound: 'واو',
        description: 'Makes a "w" sound like in "water".',
        forms: { isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو' },
        examples: [
            { word: 'وَحْي', translit: 'Wahy', meaning: 'Revelation' },
            { word: 'وُضُوء', translit: 'Wudu', meaning: 'Ablution' },
            { word: 'وَلِيّ', translit: 'Wali', meaning: 'Protector / Friend' }
        ]
    },
    {
        id: 28, letter: 'ي', name: 'Ya', transliteration: 'y',
        sound: 'ياء',
        description: 'Makes a "y" sound like in "yes".',
        forms: { isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي' },
        examples: [
            { word: 'يَوْم', translit: 'Yawm', meaning: 'Day' },
            { word: 'يَقِين', translit: 'Yaqeen', meaning: 'Certainty' },
            { word: 'يَاسِين', translit: 'Yaseen', meaning: 'Yaseen (Surah)' }
        ]
    }
];

const CARD_COLORS = ['purple', 'pink', 'teal', 'gold', 'rose'];
const ENCOURAGEMENTS_CORRECT = [
    'Mashallah! 🌟', 'Excellent! ⭐', 'Great job! 🎉', 'Amazing! 💫',
    'Wonderful! 🌸', 'Superstar! 🌟', 'Perfect! ✨', 'You did it! 🦋'
];
const ENCOURAGEMENTS_WRONG = [
    'Try again! 💪', 'Almost! 🌙', 'Keep going! 🌟', 'You can do it! ⭐'
];

// ─── State ───
let currentMode = 'all';
let practiceIndex = 0;
let currentForm = 'isolated';

// Quiz state
let quizScore = 0;
let quizTotal = 0;
let quizQuestionCount = 0;
const QUIZ_MAX_QUESTIONS = 10;
let quizCurrentAnswer = null;
let quizAnswered = false;

// ─── DOM Elements ───
const lettersGrid = document.getElementById('letters-grid');
const formFilter = document.getElementById('form-filter');
const modeButtons = document.querySelectorAll('.mode-btn');
const sections = {
    all: document.getElementById('all-letters-section'),
    practice: document.getElementById('practice-section'),
    quiz: document.getElementById('quiz-section')
};

// Practice
const practiceLetter = document.getElementById('practice-letter');
const practiceName = document.getElementById('practice-name');
const practiceTranslit = document.getElementById('practice-translit');
const practiceDesc = document.getElementById('practice-desc');
const practiceForms = document.getElementById('practice-forms');
const practiceProgress = document.getElementById('practice-progress');
const progressText = document.getElementById('progress-text');

// Popup
const letterPopup = document.getElementById('letter-popup');
const popupLetter = document.getElementById('popup-letter');
const popupName = document.getElementById('popup-name');
const popupTranslit = document.getElementById('popup-translit');
const popupForms = document.getElementById('popup-forms');

// Quiz
const quizContainer = document.getElementById('quiz-container');
const quizComplete = document.getElementById('quiz-complete');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizNextBtn = document.getElementById('quiz-next-btn');
const scoreStars = document.getElementById('score-stars');
const scoreTotal = document.getElementById('score-total');

// Confetti
const confettiCanvas = document.getElementById('confetti-canvas');
const confettiCtx = confettiCanvas.getContext('2d');

// ─── Sound System using Web Audio API + Speech Synthesis ───
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

// Play a pleasant "tap" sound effect
function playTapSound() {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.2);
    } catch (e) { /* silent fail */ }
}

// Play correct answer sound
function playCorrectSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.25, now + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.3);
            osc.start(now + i * 0.12);
            osc.stop(now + i * 0.12 + 0.3);
        });
    } catch (e) { /* silent fail */ }
}

// Play wrong answer sound
function playWrongSound() {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(150, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
    } catch (e) { /* silent fail */ }
}

// Speak the Arabic letter using Google Translate TTS (works without Arabic voice packs)
let currentAudio = null;

function speakLetter(letterData) {
    // Stop any currently playing audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    const text = encodeURIComponent(letterData.sound);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${text}`;

    const audio = new Audio(url);
    audio.volume = 1.0;
    currentAudio = audio;

    audio.play().catch(() => {
        // Fallback to SpeechSynthesis if Google TTS fails
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(letterData.sound);
            utterance.lang = 'ar-SA';
            utterance.rate = 0.7;
            utterance.volume = 1.0;
            const voices = window.speechSynthesis.getVoices();
            const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
            if (arabicVoice) utterance.voice = arabicVoice;
            window.speechSynthesis.speak(utterance);
        }
    });
}

// Speak an Arabic word (for Quran examples)
function speakWord(word) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    const text = encodeURIComponent(word);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${text}`;

    const audio = new Audio(url);
    audio.volume = 1.0;
    currentAudio = audio;

    audio.play().catch(() => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'ar-SA';
            utterance.rate = 0.7;
            utterance.volume = 1.0;
            window.speechSynthesis.speak(utterance);
        }
    });
}

// ─── Render Letters Grid ───
function renderLettersGrid() {
    lettersGrid.innerHTML = '';

    ARABIC_LETTERS.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        card.id = `letter-card-${item.id}`;
        card.dataset.color = CARD_COLORS[index % CARD_COLORS.length];
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${item.name} - ${item.letter}`);

        const displayLetter = item.forms[currentForm] || item.letter;

        card.innerHTML = `
            <span class="letter-number">${item.id}</span>
            <span class="letter-arabic" dir="rtl">${displayLetter}</span>
            <span class="letter-name">${item.name}</span>
        `;

        card.addEventListener('click', (e) => handleLetterClick(item, card, e));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLetterClick(item, card, e);
            }
        });

        lettersGrid.appendChild(card);
    });
}

function handleLetterClick(letterData, cardElement, event) {
    // Ripple effect
    createRipple(cardElement, event);

    // Play sounds
    playTapSound();
    speakLetter(letterData);

    // Visual feedback
    cardElement.classList.add('playing');
    setTimeout(() => cardElement.classList.remove('playing'), 600);

    // Show popup
    showLetterPopup(letterData);
}

// ─── Ripple Effect ───
function createRipple(element, event) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';

    if (event.clientX) {
        ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
    } else {
        ripple.style.left = (rect.width / 2 - size / 2) + 'px';
        ripple.style.top = (rect.height / 2 - size / 2) + 'px';
    }

    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// ─── Letter Popup ───
function showLetterPopup(letterData) {
    popupLetter.textContent = letterData.letter;
    popupName.textContent = letterData.name;
    popupTranslit.textContent = `Sound: "${letterData.transliteration}"  —  ${letterData.description}`;

    // Render forms
    popupForms.innerHTML = '';
    const formLabels = { isolated: 'Isolated', initial: 'Initial', medial: 'Medial', final: 'Final' };
    for (const [formKey, formLabel] of Object.entries(formLabels)) {
        const badge = document.createElement('div');
        badge.className = 'form-badge';
        badge.innerHTML = `
            <span class="form-badge-letter" dir="rtl">${letterData.forms[formKey]}</span>
            <span class="form-badge-label">${formLabel}</span>
        `;
        badge.addEventListener('click', () => {
            playTapSound();
            speakLetter(letterData);
        });
        popupForms.appendChild(badge);
    }

    // Render Quran word examples
    let examplesContainer = document.getElementById('popup-examples');
    if (!examplesContainer) {
        examplesContainer = document.createElement('div');
        examplesContainer.id = 'popup-examples';
        examplesContainer.className = 'examples-section';
        popupForms.parentNode.insertBefore(examplesContainer, document.getElementById('popup-play-btn'));
    }
    examplesContainer.innerHTML = '<h3 class="examples-title">📖 Quran Words</h3>';
    if (letterData.examples) {
        const list = document.createElement('div');
        list.className = 'examples-list';
        letterData.examples.forEach(ex => {
            const item = document.createElement('div');
            item.className = 'example-item';
            item.innerHTML = `
                <span class="example-word" dir="rtl">${ex.word}</span>
                <span class="example-details">
                    <span class="example-translit">${ex.translit}</span>
                    <span class="example-meaning">${ex.meaning}</span>
                </span>
            `;
            item.addEventListener('click', () => {
                playTapSound();
                speakWord(ex.word);
            });
            list.appendChild(item);
        });
        examplesContainer.appendChild(list);
    }

    letterPopup.classList.remove('hidden');
}

function hideLetterPopup() {
    letterPopup.classList.add('hidden');
}

document.getElementById('popup-close').addEventListener('click', hideLetterPopup);
document.getElementById('popup-play-btn').addEventListener('click', () => {
    const letterName = popupName.textContent;
    const letterData = ARABIC_LETTERS.find(l => l.name === letterName);
    if (letterData) {
        playTapSound();
        speakLetter(letterData);
    }
});

letterPopup.addEventListener('click', (e) => {
    if (e.target === letterPopup) hideLetterPopup();
});

// ─── Form Filter ───
formFilter.addEventListener('change', (e) => {
    currentForm = e.target.value;
    renderLettersGrid();
});

// ─── Mode Switching ───
modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        if (mode === currentMode) return;

        currentMode = mode;

        // Update buttons
        modeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Switch sections
        Object.values(sections).forEach(s => s.classList.remove('active'));
        sections[mode].classList.add('active');

        // Init specific modes
        if (mode === 'practice') updatePractice();
        if (mode === 'quiz') startQuiz();
    });
});

// ─── Practice Mode ───
function updatePractice() {
    const item = ARABIC_LETTERS[practiceIndex];

    practiceLetter.textContent = item.letter;
    practiceName.textContent = item.name;
    practiceTranslit.textContent = `Sound: "${item.transliteration}"`;
    practiceDesc.textContent = item.description;

    // Progress
    const percent = ((practiceIndex + 1) / ARABIC_LETTERS.length) * 100;
    practiceProgress.style.width = percent + '%';
    progressText.textContent = `${practiceIndex + 1} / ${ARABIC_LETTERS.length}`;

    // Forms
    practiceForms.innerHTML = '';
    const formLabels = { isolated: 'Isolated', initial: 'Initial', medial: 'Medial', final: 'Final' };
    for (const [formKey, formLabel] of Object.entries(formLabels)) {
        const badge = document.createElement('div');
        badge.className = 'form-badge';
        badge.innerHTML = `
            <span class="form-badge-letter" dir="rtl">${item.forms[formKey]}</span>
            <span class="form-badge-label">${formLabel}</span>
        `;
        badge.addEventListener('click', () => {
            playTapSound();
            speakLetter(item);
        });
        practiceForms.appendChild(badge);
    }

    // Quran word examples
    let practiceExamples = document.getElementById('practice-examples');
    if (!practiceExamples) {
        practiceExamples = document.createElement('div');
        practiceExamples.id = 'practice-examples';
        practiceExamples.className = 'examples-section';
        practiceForms.parentNode.insertBefore(practiceExamples, document.querySelector('.practice-controls'));
    }
    practiceExamples.innerHTML = '<h3 class="examples-title">📖 Quran Words</h3>';
    if (item.examples) {
        const list = document.createElement('div');
        list.className = 'examples-list';
        item.examples.forEach(ex => {
            const exItem = document.createElement('div');
            exItem.className = 'example-item';
            exItem.innerHTML = `
                <span class="example-word" dir="rtl">${ex.word}</span>
                <span class="example-details">
                    <span class="example-translit">${ex.translit}</span>
                    <span class="example-meaning">${ex.meaning}</span>
                </span>
            `;
            exItem.addEventListener('click', () => {
                playTapSound();
                speakWord(ex.word);
            });
            list.appendChild(exItem);
        });
        practiceExamples.appendChild(list);
    }
}

document.getElementById('btn-prev').addEventListener('click', () => {
    practiceIndex = (practiceIndex - 1 + ARABIC_LETTERS.length) % ARABIC_LETTERS.length;
    updatePractice();
    playTapSound();
});

document.getElementById('btn-next').addEventListener('click', () => {
    practiceIndex = (practiceIndex + 1) % ARABIC_LETTERS.length;
    updatePractice();
    playTapSound();
});

document.getElementById('btn-play-practice').addEventListener('click', () => {
    const item = ARABIC_LETTERS[practiceIndex];
    playTapSound();
    speakLetter(item);
});

// Tap on the large practice letter to hear the sound
document.querySelector('.practice-letter-display').addEventListener('click', () => {
    const item = ARABIC_LETTERS[practiceIndex];
    playTapSound();
    speakLetter(item);
});

// ─── Quiz Mode ───
function startQuiz() {
    quizScore = 0;
    quizTotal = 0;
    quizQuestionCount = 0;
    quizAnswered = false;

    quizContainer.classList.remove('hidden');
    quizComplete.classList.add('hidden');

    updateQuizScore();
    generateQuizQuestion();
}

function updateQuizScore() {
    scoreStars.textContent = `⭐ ${quizScore}`;
    scoreTotal.textContent = `/ ${quizTotal}`;
}

function generateQuizQuestion() {
    if (quizQuestionCount >= QUIZ_MAX_QUESTIONS) {
        showQuizComplete();
        return;
    }

    quizAnswered = false;
    quizFeedback.textContent = '';
    quizFeedback.className = 'quiz-feedback';
    quizNextBtn.classList.add('hidden');

    // Pick random answer
    const answerIndex = Math.floor(Math.random() * ARABIC_LETTERS.length);
    quizCurrentAnswer = ARABIC_LETTERS[answerIndex];

    // Generate 3 wrong options
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
        const idx = Math.floor(Math.random() * ARABIC_LETTERS.length);
        if (idx !== answerIndex && !wrongOptions.includes(idx)) {
            wrongOptions.push(idx);
        }
    }

    // Combine and shuffle
    const options = [quizCurrentAnswer, ...wrongOptions.map(i => ARABIC_LETTERS[i])];
    shuffleArray(options);

    // Render options
    quizOptions.innerHTML = '';
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.id = `quiz-opt-${option.id}`;
        btn.innerHTML = `
            <span class="quiz-option-letter" dir="rtl">${option.letter}</span>
            <span class="quiz-option-name">${option.name}</span>
        `;
        btn.addEventListener('click', () => handleQuizAnswer(option, btn));
        quizOptions.appendChild(btn);
    });

    // Auto-play the sound
    setTimeout(() => speakLetter(quizCurrentAnswer), 300);
}

function handleQuizAnswer(selected, btnElement) {
    if (quizAnswered) return;
    quizAnswered = true;
    quizTotal++;
    quizQuestionCount++;

    // Disable all options
    quizOptions.querySelectorAll('.quiz-option').forEach(o => o.classList.add('disabled'));

    if (selected.id === quizCurrentAnswer.id) {
        // Correct!
        quizScore++;
        btnElement.classList.add('correct');
        playCorrectSound();
        quizFeedback.textContent = ENCOURAGEMENTS_CORRECT[Math.floor(Math.random() * ENCOURAGEMENTS_CORRECT.length)];
        quizFeedback.className = 'quiz-feedback correct-feedback';

        // Mini confetti
        launchConfetti(30);
    } else {
        // Wrong
        btnElement.classList.add('wrong');
        playWrongSound();

        // Highlight correct answer
        const correctBtn = quizOptions.querySelector(`#quiz-opt-${quizCurrentAnswer.id}`);
        if (correctBtn) correctBtn.classList.add('correct');

        quizFeedback.textContent = `${ENCOURAGEMENTS_WRONG[Math.floor(Math.random() * ENCOURAGEMENTS_WRONG.length)]} It was "${quizCurrentAnswer.name}"`;
        quizFeedback.className = 'quiz-feedback wrong-feedback';
    }

    updateQuizScore();
    quizNextBtn.classList.remove('hidden');
}

document.getElementById('quiz-play-btn').addEventListener('click', () => {
    if (quizCurrentAnswer) {
        playTapSound();
        speakLetter(quizCurrentAnswer);
    }
});

quizNextBtn.addEventListener('click', () => {
    generateQuizQuestion();
});

function showQuizComplete() {
    quizContainer.classList.add('hidden');
    quizComplete.classList.remove('hidden');

    const finalScore = document.getElementById('final-score');
    finalScore.textContent = `You got ${quizScore} out of ${quizTotal} correct!`;

    const trophyDisplay = document.getElementById('trophy-display');
    const ratio = quizScore / quizTotal;
    if (ratio >= 0.9) {
        trophyDisplay.textContent = '🏆🌟🏆';
    } else if (ratio >= 0.7) {
        trophyDisplay.textContent = '🥈🌟';
    } else if (ratio >= 0.5) {
        trophyDisplay.textContent = '🥉';
    } else {
        trophyDisplay.textContent = '💪 Keep Practicing!';
    }

    // Big confetti!
    launchConfetti(100);
}

document.getElementById('quiz-restart-btn').addEventListener('click', () => {
    startQuiz();
});

// ─── Confetti System ───
let confettiParticles = [];
let confettiAnimating = false;

function resizeConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}

function launchConfetti(count = 50) {
    resizeConfettiCanvas();
    const colors = ['#F9A8D4', '#A78BFA', '#67E8F9', '#FDE68A', '#FBBF24', '#FB7185', '#5EEAD4', '#C4B5FD'];

    for (let i = 0; i < count; i++) {
        confettiParticles.push({
            x: Math.random() * confettiCanvas.width,
            y: -20 - Math.random() * 100,
            w: 6 + Math.random() * 6,
            h: 4 + Math.random() * 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: 2 + Math.random() * 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1
        });
    }

    if (!confettiAnimating) {
        confettiAnimating = true;
        animateConfetti();
    }
}

function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.003;

        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rotation * Math.PI) / 180);
        confettiCtx.globalAlpha = Math.max(0, p.opacity);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        confettiCtx.restore();
    });

    // Remove dead particles
    confettiParticles = confettiParticles.filter(p =>
        p.y < confettiCanvas.height + 20 && p.opacity > 0
    );

    if (confettiParticles.length > 0) {
        requestAnimationFrame(animateConfetti);
    } else {
        confettiAnimating = false;
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
}

// ─── Utility ───
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ─── Window Resize ───
window.addEventListener('resize', () => {
    if (confettiAnimating) resizeConfettiCanvas();
});

// ─── Keyboard Navigation ───
document.addEventListener('keydown', (e) => {
    if (currentMode === 'practice') {
        if (e.key === 'ArrowLeft') {
            practiceIndex = (practiceIndex + 1) % ARABIC_LETTERS.length;
            updatePractice();
            playTapSound();
        } else if (e.key === 'ArrowRight') {
            practiceIndex = (practiceIndex - 1 + ARABIC_LETTERS.length) % ARABIC_LETTERS.length;
            updatePractice();
            playTapSound();
        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            const item = ARABIC_LETTERS[practiceIndex];
            playTapSound();
            speakLetter(item);
        }
    }

    // Escape to close popup
    if (e.key === 'Escape') {
        hideLetterPopup();
    }
});

// ─── Initialize ───
renderLettersGrid();
