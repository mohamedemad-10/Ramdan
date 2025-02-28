// Hide Loader When Page Loads
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 700);
    }, 2000);
});



// Handle modal and local storage on page load
// Hide Loader When Page Loads
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 700);
    }, 2000);
});

// Handle modal and local storage on page load
window.onload = function() {
    const storedName = localStorage.getItem('userName');
    const promptElement = document.getElementById('name-prompt');
    const greetingElement = document.getElementById('user-greeting');
    const nameElement = document.getElementById('user-name');

    if (storedName) {
        // If name exists in local storage, update UI and hide modal
        if (greetingElement) {
            greetingElement.textContent = `Ramadan Kareem, ${storedName}! May this blessed month bring you peace, joy, and spiritual growth.🙏`;
        }
        if (nameElement) {
            nameElement.textContent = storedName;
        }
        if (promptElement) {
            promptElement.style.display = 'none';
        }
    } else {
        // If no name in local storage, show modal
        if (promptElement) {
            promptElement.style.display = 'flex'; // Show modal on load
        } else {
            console.error("Modal with ID 'name-prompt' not found");
        }
    }
};

// Function to submit name and store in local storage
function submitName() {
    const userNameInput = document.getElementById('user-name-input');
    const promptElement = document.getElementById('name-prompt');
    const greetingElement = document.getElementById('user-greeting');
    const nameElement = document.getElementById('user-name');

    // Check if elements exist
    if (!userNameInput) {
        console.error("Input with ID 'user-name-input' not found");
        return;
    }
    if (!promptElement) {
        console.error("Modal with ID 'name-prompt' not found");
        return;
    }

    const userName = userNameInput.value.trim();

    if (userName !== "") {
        // Store name in local storage
        localStorage.setItem('userName', userName);

        // Update UI with the entered name
        if (greetingElement) {
            greetingElement.textContent = `Ramadan Kareem, ${userName}! May this blessed month bring you peace, joy, and spiritual growth.🙏`;
        }
        if (nameElement) {
            nameElement.textContent = userName;
        }

        // Hide the modal
        promptElement.style.display = 'none';
        console.log("Name saved to local storage and modal hidden");
    } else {
        alert("Please enter your name!");
    }
}
// Language Setting (English as Default)
let currentLang = 'en';

// Initialize English on Load with Arabic Button Override
document.addEventListener('DOMContentLoaded', () => {
    currentLang = 'en'; // Set site-wide default to English
    document.documentElement.lang = 'en';
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';

    // Apply English to all elements with data-en
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute('data-en');
    });

    const storedName = localStorage.getItem('userName') || 'Guest';
    const greeting = document.getElementById('user-greeting');
    const ramadanGreeting = document.querySelector('#ramadan-greeting p');
    const footerP = document.querySelector('.footer-madeby p');

    greeting.textContent = `Join us in celebrating this holy month of Ramadan. A time of reflection, spirituality, and community.`;
    ramadanGreeting.textContent = `Ramadan Kareem, ${storedName}! 🌙`;
    if (localStorage.getItem('userName')) {
        greeting.textContent = `Ramadan Kareem, ${storedName}! May this blessed month bring you peace, joy, and spiritual growth. 🙏`;
    }
    footerP.innerHTML = `© 2025 Ramadan Website made by <a href="https://github.com/mohamedemad-10">Mohamed Emad</a>`;

    // Set the "Add Task" button to Arabic initially
    const addTaskButton = document.querySelector('.button__text');
    if (addTaskButton) {
        addTaskButton.textContent = addTaskButton.getAttribute('data-ar'); // Start with Arabic
        addTaskButton.style.direction = 'rtl'; // Ensure RTL for Arabic
        addTaskButton.parentElement.style.flexDirection = 'row-reverse'; // Icon on left for Arabic
    }

    loadTasks();
    updateQuranImage();
    updateAdvice();
    updateCountdown();
    displayPrayerTimes(currentDay);
});

// Language Toggle Function (Updated)
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLang;
    document.body.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.textAlign = currentLang === 'ar' ? 'right' : 'left';

    document.querySelectorAll('[data-en][data-ar]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });

    const storedName = localStorage.getItem('userName') || 'Guest';
    const greeting = document.getElementById('user-greeting');
    const ramadanGreeting = document.querySelector('#ramadan-greeting p');
    const footerP = document.querySelector('.footer-madeby p');
    const addTaskButton = document.querySelector('.button__text');

    if (currentLang === 'ar') {
        greeting.textContent = `انضم إلينا في الاحتفال بهذا الشهر المقدس من رمضان. وقت للتأمل والروحانية والمجتمع.`;
        ramadanGreeting.textContent = `رمضان كريم، ${storedName}! 🌙`;
        if (localStorage.getItem('userName')) {
            greeting.textContent = `رمضان كريم، ${storedName}! نسأل الله أن يجعل هذا الشهر المبارك يجلب لك السلام والفرح والنمو الروحاني. 🙏`;
        }
        footerP.innerHTML = `© 2025 موقع رمضان من إعداد <a href="https://github.com/mohamedemad-10">محمد عماد</a>`;
        if (addTaskButton) {
            addTaskButton.style.direction = 'rtl';
            addTaskButton.parentElement.style.flexDirection = 'row-reverse';
        }
    } else {
        greeting.textContent = `Join us in celebrating this holy month of Ramadan. A time of reflection, spirituality, and community.`;
        ramadanGreeting.textContent = `Ramadan Kareem, ${storedName}! 🌙`;
        if (localStorage.getItem('userName')) {
            greeting.textContent = `Ramadan Kareem, ${storedName}! May this blessed month bring you peace, joy, and spiritual growth. 🙏`;
        }
        footerP.innerHTML = `© 2025 Ramadan Website made by <a href="https://github.com/mohamedemad-10">Mohamed Emad</a>`;
        if (addTaskButton) {
            addTaskButton.style.direction = 'ltr';
            addTaskButton.parentElement.style.flexDirection = 'row';
        }
    }

    updateCountdown();
    displayPrayerTimes(currentDay);
    updateAdvice();
}

document.querySelectorAll('[data-en][data-ar]').forEach(element => {
    element.textContent = element.getAttribute(`data-${currentLang}`);
});

// Initialize English on Load
document.addEventListener('DOMContentLoaded', () => {
    currentLang = 'en'; // Explicitly set to English
    document.documentElement.lang = 'en';
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';

    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute('data-en');
    });

    const storedName = localStorage.getItem('userName') || 'Guest';
    const greeting = document.getElementById('user-greeting');
    const ramadanGreeting = document.querySelector('#ramadan-greeting p');
    const footerP = document.querySelector('.footer-madeby p');

    greeting.textContent = `Join us in celebrating this holy month of Ramadan. A time of reflection, spirituality, and community.`;
    ramadanGreeting.textContent = `Ramadan Kareem, ${storedName}! 🌙`;
    if (localStorage.getItem('userName')) {
        greeting.textContent = `Ramadan Kareem, ${storedName}! May this blessed month bring you peace, joy, and spiritual growth. 🙏`;
    }
    footerP.innerHTML = `© 2025 Ramadan Website made by <a href="https://github.com/mohamedemad-10">Mohamed Emad</a>`;

    loadTasks();
    updateQuranImage();
    updateAdvice();
    updateCountdown();
    displayPrayerTimes(currentDay);
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const elements = document.querySelectorAll('.navbar, .hero, .sidebar, .about, .prayer-times, .daily-advice, .message-to-friend, .what-should-you-do, .to-do-list, .contact, .contact-form');
    elements.forEach(el => el.classList.toggle('dark-mode'));
    const themeIcon = document.querySelector('#theme-icon');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIcon.style.color = 'yellow';
        themeIcon.style.background = 'transparent';
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIcon.style.color = '#000';
        themeIcon.style.background = 'transparent';
    }
}



// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// Balloon Animation
function showRamadan() {
    const container = document.getElementById('balloonContainer');
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    balloon.style.display = 'block';
    container.appendChild(balloon);
    setTimeout(() => balloon.remove(), 3000);
}


// Intersection Observer
const sections = document.querySelectorAll(".section-hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Countdown
function updateCountdown() {
    const ramadanStart = new Date("March 1, 2025 00:00:00").getTime();
    const ramadanEnd = new Date("March 30, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const countdownElement = document.getElementById('countdown');
    const timerLabel = document.getElementById('timer-label');

    if (now < ramadanStart) {
        const distance = ramadanStart - now;
        timerLabel.textContent = currentLang === 'ar' ? "الوقت حتى بداية رمضان:" : "Time until Ramadan starts:";
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.textContent = `${days}${currentLang === 'ar' ? 'ي' : 'd'} ${hours}${currentLang === 'ar' ? 'س' : 'h'} ${minutes}${currentLang === 'ar' ? 'د' : 'm'} ${seconds}${currentLang === 'ar' ? 'ث' : 's'}`;
    } else if (now >= ramadanStart && now < ramadanEnd) {
        const distance = ramadanEnd - now;
        timerLabel.textContent = currentLang === 'ar' ? "الوقت حتى نهاية رمضان:" : "Time until Ramadan ends:";
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.textContent = `${days}${currentLang === 'ar' ? 'ي' : 'd'} ${hours}${currentLang === 'ar' ? 'س' : 'h'} ${minutes}${currentLang === 'ar' ? 'د' : 'm'} ${seconds}${currentLang === 'ar' ? 'ث' : 's'}`;
    } else {
        timerLabel.textContent = currentLang === 'ar' ? "انتهى رمضان!" : "Ramadan has ended!";
        countdownElement.textContent = currentLang === 'ar' ? "نراك العام القادم 🌙" : "See you next year 🌙";
        clearInterval(countdownInterval);
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Prayer Times
const prayerTimesData = [
    { day: 1, date: "Mar 1", fajr: "04:54", dhuhr: "12:03", asr: "15:25", maghrib: "17:53", isha: "19:10" },
    { day: 2, date: "Mar 2", fajr: "04:53", dhuhr: "12:03", asr: "15:25", maghrib: "17:54", isha: "19:11" },
    { day: 3, date: "Mar 3", fajr: "04:52", dhuhr: "12:03", asr: "15:26", maghrib: "17:55", isha: "19:12" },
    { day: 4, date: "Mar 4", fajr: "04:51", dhuhr: "12:03", asr: "15:26", maghrib: "17:55", isha: "19:12" },
    { day: 5, date: "Mar 5", fajr: "04:50", dhuhr: "12:03", asr: "15:27", maghrib: "17:56", isha: "19:13" },
    { day: 6, date: "Mar 6", fajr: "04:49", dhuhr: "12:02", asr: "15:27", maghrib: "17:57", isha: "19:14" },
    { day: 7, date: "Mar 7", fajr: "04:48", dhuhr: "12:02", asr: "15:28", maghrib: "17:58", isha: "19:15" },
    { day: 8, date: "Mar 8", fajr: "04:47", dhuhr: "12:02", asr: "15:28", maghrib: "17:58", isha: "19:15" },
    { day: 9, date: "Mar 9", fajr: "04:46", dhuhr: "12:02", asr: "15:29", maghrib: "17:59", isha: "19:16" },
    { day: 10, date: "Mar 10", fajr: "04:45", dhuhr: "12:02", asr: "15:29", maghrib: "18:00", isha: "19:17" },
    { day: 11, date: "Mar 11", fajr: "04:44", dhuhr: "12:01", asr: "15:30", maghrib: "18:01", isha: "19:18" },
    { day: 12, date: "Mar 12", fajr: "04:43", dhuhr: "12:01", asr: "15:30", maghrib: "18:01", isha: "19:18" },
    { day: 13, date: "Mar 13", fajr: "04:42", dhuhr: "12:01", asr: "15:31", maghrib: "18:02", isha: "19:19" },
    { day: 14, date: "Mar 14", fajr: "04:41", dhuhr: "12:01", asr: "15:31", maghrib: "18:03", isha: "19:20" },
    { day: 15, date: "Mar 15", fajr: "04:40", dhuhr: "12:00", asr: "15:32", maghrib: "18:04", isha: "19:21" },
    { day: 16, date: "Mar 16", fajr: "04:39", dhuhr: "12:00", asr: "15:32", maghrib: "18:04", isha: "19:21" },
    { day: 17, date: "Mar 17", fajr: "04:38", dhuhr: "12:00", asr: "15:32", maghrib: "18:05", isha: "19:22" },
    { day: 18, date: "Mar 18", fajr: "04:37", dhuhr: "12:00", asr: "15:33", maghrib: "18:06", isha: "19:23" },
    { day: 19, date: "Mar 19", fajr: "04:36", dhuhr: "11:59", asr: "15:33", maghrib: "18:06", isha: "19:24" },
    { day: 20, date: "Mar 20", fajr: "04:34", dhuhr: "11:59", asr: "15:34", maghrib: "18:07", isha: "19:24" },
    { day: 21, date: "Mar 21", fajr: "04:33", dhuhr: "11:59", asr: "15:34", maghrib: "18:08", isha: "19:25" },
    { day: 22, date: "Mar 22", fajr: "04:32", dhuhr: "11:58", asr: "15:34", maghrib: "18:09", isha: "19:26" },
    { day: 23, date: "Mar 23", fajr: "04:31", dhuhr: "11:58", asr: "15:35", maghrib: "18:09", isha: "19:27" },
    { day: 24, date: "Mar 24", fajr: "04:30", dhuhr: "11:58", asr: "15:35", maghrib: "18:10", isha: "19:27" },
    { day: 25, date: "Mar 25", fajr: "04:29", dhuhr: "11:58", asr: "15:36", maghrib: "18:11", isha: "19:28" },
    { day: 26, date: "Mar 26", fajr: "04:28", dhuhr: "11:57", asr: "15:36", maghrib: "18:11", isha: "19:29" },
    { day: 27, date: "Mar 27", fajr: "04:27", dhuhr: "11:57", asr: "15:36", maghrib: "18:12", isha: "19:30" },
    { day: 28, date: "Mar 28", fajr: "04:26", dhuhr: "11:57", asr: "15:37", maghrib: "18:13", isha: "19:30" },
    { day: 29, date: "Mar 29", fajr: "04:25", dhuhr: "11:56", asr: "15:37", maghrib: "18:13", isha: "19:31" }
];

let currentDay = 1;

function displayPrayerTimes(dayIndex) {
    const dayData = prayerTimesData[dayIndex - 1];
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = `
        <tr>
            <td>${dayData.day} ${currentLang === 'ar' ? 'رمضان' : 'Ramadan'}</td>
            <td>${convertTo12HourFormat(dayData.fajr)}</td>
            <td>${convertTo12HourFormat(dayData.dhuhr)}</td>
            <td>${convertTo12HourFormat(dayData.asr)}</td>
            <td>${convertTo12HourFormat(dayData.maghrib)}</td>
            <td>${convertTo12HourFormat(dayData.isha)}</td>
        </tr>`;
    fadeInTable();
    document.getElementById('prev').disabled = dayIndex === 1;
    document.getElementById('next').disabled = dayIndex === prayerTimesData.length;
}

function fadeInTable() {
    const tableContainer = document.querySelector('.table-container');
    tableContainer.style.opacity = 0;
    let opacity = 0;
    const fadeEffect = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.02;
            tableContainer.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

function convertTo12HourFormat(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? (currentLang === 'ar' ? 'م' : 'PM') : (currentLang === 'ar' ? 'ص' : 'AM');
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentDay > 1) {
        currentDay--;
        displayPrayerTimes(currentDay);
        animateButtonClick('prev');
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentDay < prayerTimesData.length) {
        currentDay++;
        displayPrayerTimes(currentDay);
        animateButtonClick('next');
    }
});

function animateButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.transition = 'transform 0.2s ease';
    button.style.transform = 'scale(1.1)';
    setTimeout(() => button.style.transform = 'scale(1)', 200);
}

// Daily Advice (Full 30 Items)
const adviceList = [
    { text_en: "Ramadan is the month of reflection and self-discipline. Use this time to grow spiritually.", text_ar: "رمضان هو شهر التأمل والانضباط الذاتي. استخدم هذا الوقت للنمو الروحاني.", image: "https://picsum.photos/200?random=1" },
    { text_en: "Fasting during Ramadan helps us appreciate the blessings we have. Remember to be grateful for every meal.", text_ar: "الصيام في رمضان يساعدنا على تقدير النعم التي لدينا. تذكر أن تكون شاكرًا لكل وجبة.", image: "https://picsum.photos/200?random=2" },
    { text_en: "Charity is a major act of worship during Ramadan. Be kind and give what you can.", text_ar: "الصدقة عمل عبادي كبير في رمضان. كن لطيفًا وأعط ما تستطيع.", image: "https://picsum.photos/200?random=3" },
    { text_en: "Ramadan is an opportunity for spiritual renewal. Make the most of it by praying and connecting with Allah.", text_ar: "رمضان فرصة للتجديد الروحاني. استفد منها بالصلاة والارتباط بالله.", image: "https://picsum.photos/200?random=4" },
    { text_en: "Make the most of every moment during Ramadan. Seek forgiveness and make du'a for yourself and others.", text_ar: "استفد من كل لحظة في رمضان. اطلب المغفرة وادعُ لنفسك وللآخرين.", image: "https://picsum.photos/200?random=5" },
    { text_en: "Embrace the spirit of patience during Ramadan. It's not only about abstaining from food, but from bad habits.", text_ar: "احتضن روح الصبر في رمضان. لا يتعلق الأمر فقط بالامتناع عن الطعام، بل عن العادات السيئة.", image: "https://picsum.photos/200?random=6" },
    { text_en: "Engage in acts of kindness during Ramadan, as they are multiplied in reward.", text_ar: "شارك في أعمال اللطف خلال رمضان، فإنها تتضاعف في الأجر.", image: "https://picsum.photos/200?random=7" },
    { text_en: "Take time to strengthen your relationship with Allah through prayer and reflection.", text_ar: "خذ وقتًا لتقوية علاقتك بالله من خلال الصلاة والتأمل.", image: "https://picsum.photos/200?random=8" },
    { text_en: "Ramadan reminds us of the importance of community. Share moments with family and friends.", text_ar: "رمضان يذكرنا بأهمية المجتمع. شارك اللحظات مع العائلة والأصدقاء.", image: "https://picsum.photos/200?random=9" },
    { text_en: "Seek forgiveness for your past mistakes and purify your heart in this blessed month.", text_ar: "اطلب المغفرة لأخطائك السابقة وطهر قلبك في هذا الشهر المبارك.", image: "https://picsum.photos/200?random=10" },
    { text_en: "During Ramadan, focus on self-control and developing a closer connection with Allah.", text_ar: "خلال رمضان، ركز على ضبط النفس وتطوير علاقة أقرب بالله.", image: "https://picsum.photos/200?random=11" },
    { text_en: "Remember those less fortunate during Ramadan and strive to help however you can.", text_ar: "تذكر الأقل حظًا خلال رمضان وحاول مساعدتهم بأي طريقة تستطيع.", image: "https://picsum.photos/200?random=12" },
    { text_en: "Patience and gratitude are key virtues during Ramadan. Embrace both with an open heart.", text_ar: "الصبر والامتنان هما فضيلتان رئيسيتان في رمضان. احتضنهما بقلب مفتوح.", image: "https://picsum.photos/200?random=13" },
    { text_en: "Keep your thoughts and actions pure, and avoid negativity during Ramadan.", text_ar: "حافظ على أفكارك وأفعالك نقية، وتجنب السلبية خلال رمضان.", image: "https://picsum.photos/200?random=14" },
    { text_en: "Reading and reflecting on the Quran is one of the best ways to spend your time in Ramadan.", text_ar: "قراءة القرآن والتأمل فيه من أفضل الطرق لقضاء وقتك في رمضان.", image: "https://picsum.photos/200?random=15" },
    { text_en: "Ramadan is a time for growth. Use this month to become a better version of yourself.", text_ar: "رمضان وقت للنمو. استخدم هذا الشهر لتصبح نسخة أفضل من نفسك.", image: "https://picsum.photos/200?random=16" },
    { text_en: "Stay connected with the poor and needy, and strive to make a positive impact during Ramadan.", text_ar: "ابقَ على تواصل مع الفقراء والمحتاجين، وحاول إحداث تأثير إيجابي خلال رمضان.", image: "https://picsum.photos/200?random=17" },
    { text_en: "Refrain from gossip and negative speech during Ramadan; choose kindness in all interactions.", text_ar: "امتنع عن النميمة والكلام السلبي خلال رمضان؛ اختر اللطف في جميع التفاعلات.", image: "https://picsum.photos/200?random=18" },
    { text_en: "Consider your actions, words, and thoughts carefully as you strive to purify your soul during Ramadan.", text_ar: "فكر في أفعالك وكلماتك وأفكارك بعناية وأنت تسعى لتطهير روحك خلال رمضان.", image: "https://picsum.photos/200?random=19" },
    { text_en: "Reflect on the blessings of Ramadan and be grateful for the opportunity to fast and worship.", text_ar: "تأمل في نعم رمضان وكن شاكرًا لفرصة الصيام والعبادة.", image: "https://picsum.photos/200?random=20" },
    { text_en: "Let your Ramadan be filled with good deeds and a heart full of gratitude.", text_ar: "اجعل رمضانك مليئًا بالأعمال الصالحة وقلبًا مليئًا بالامتنان.", image: "https://picsum.photos/200?random=21" },
    { text_en: "Keep the spirit of Ramadan alive throughout the year by continuing to fast and give charity.", text_ar: "حافظ على روح رمضان حية طوال العام بمواصلة الصيام وإعطاء الصدقة.", image: "https://picsum.photos/200?random=22" },
    { text_en: "Make du'a for your loved ones and for peace in the world during Ramadan.", text_ar: "ادعُ لأحبائك وللسلام في العالم خلال رمضان.", image: "https://picsum.photos/200?random=23" },
    { text_en: "The best way to seek forgiveness is through sincere repentance and humility.", text_ar: "أفضل طريقة لطلب المغفرة هي من خلال التوبة الصادقة والتواضع.", image: "https://picsum.photos/200?random=24" },
    { text_en: "Rejuvenate your soul with extra prayers and worship during the blessed nights of Ramadan.", text_ar: "جدد روحك بالصلوات الإضافية والعبادة خلال الليالي المباركة في رمضان.", image: "https://picsum.photos/200?random=25" },
    { text_en: "Ramadan is a time to nurture good habits and strive for personal improvement.", text_ar: "رمضان وقت لتنمية العادات الجيدة والسعي لتحسين الذات.", image: "https://picsum.photos/200?random=26" },
    { text_en: "Embrace the opportunity to cleanse your body and soul with fasting during Ramadan.", text_ar: "احتضن فرصة تطهير جسمك وروحك بالصيام خلال رمضان.", image: "https://picsum.photos/200?random=27" },
    { text_en: "Take time to reflect on the meaning of Ramadan and its significance in your spiritual journey.", text_ar: "خذ وقتًا للتأمل في معنى رمضان وأهميته في رحلتك الروحانية.", image: "https://picsum.photos/200?random=28" },
    { text_en: "Let every fast and prayer during Ramadan bring you closer to Allah.", text_ar: "اجعل كل صيام وصلاة في رمضان تقربك من الله.", image: "https://picsum.photos/200?random=29" },
    { text_en: "As Ramadan concludes, make a commitment to maintain your spiritual growth.", text_ar: "مع انتهاء رمضان، التزم بالحفاظ على نموك الروحاني.", image: "https://picsum.photos/200?random=30" }
];

function updateAdvice() {
    let currentDay_j = new Date().getDate();
    const adviceIndex = (currentDay_j - 1) % adviceList.length;
    const adviceText = document.getElementById('advice-text');
    const adviceImage = document.getElementById('advice-image');
    adviceText.textContent = currentLang === 'ar' ? adviceList[adviceIndex].text_ar : adviceList[adviceIndex].text_en;
    adviceImage.src = adviceList[adviceIndex].image;
    adviceImage.style.display = 'block';
}

// Message to Friend (Full 30 Items)
const messages = [
    { en: "Ramadan Mubarak, {friend_name}! 🌙 May this holy month bring peace, happiness, and blessings to you and your family. 🎈 - {your_name}", ar: "رمضان مبارك، {friend_name}! 🌙 أتمنى أن يجلب هذا الشهر المقدس السلام والسعادة والبركات لك ولعائلتك. 🎈 - {your_name}" },
    { en: "Wishing you a blessed Ramadan, {friend_name}. 🌟 May your prayers be answered and your heart be filled with joy. 🎈 - {your_name}", ar: "أتمنى لك رمضانًا مباركًا، {friend_name}. 🌟 أتمنى أن تُستجاب صلواتك ويمتلئ قلبك بالفرح. 🎈 - {your_name}" },
    { en: "May the spirit of Ramadan fill your heart with love and your life with prosperity. 🌙 Ramadan Mubarak, {friend_name}! 🎈 - {your_name}", ar: "أتمنى أن تملأ روح رمضان قلبك بالحب وحياتك بالازدهار. 🌙 رمضان مبارك، {friend_name}! 🎈 - {your_name}" },
    { en: "Ramadan Kareem, {friend_name}. 🙏 May Allah’s blessings be with you today and always. 🎈 - {your_name}", ar: "رمضان كريم، {friend_name}. 🙏 أتمنى أن تكون بركات الله معك اليوم ودائمًا. 🎈 - {your_name}" },
    { en: "Sending you my warmest wishes for Ramadan, {friend_name}. 🌼 May your days be filled with joy and your nights with prayers. 🎈 - {your_name}", ar: "أرسل لك أحر تمنياتي لرمضان، {friend_name}. 🌼 أتمنى أن تمتلئ أيامك بالفرح ولياليك بالصلوات. 🎈 - {your_name}" },
    { en: "May this Ramadan bring you closer to Allah and shower you with endless blessings, {friend_name}. 🌙 Ramadan Mubarak! 🎈 - {your_name}", ar: "أتمنى أن يقربك هذا الرمضان من الله ويغمرك ببركات لا نهائية، {friend_name}. 🌙 رمضان مبارك! 🎈 - {your_name}" },
    { en: "Ramadan Kareem, {friend_name}! 🌟 Wishing you a month full of peace, forgiveness, and spiritual growth. 🎈 - {your_name}", ar: "رمضان كريم، {friend_name}! 🌟 أتمنى لك شهرًا مليئًا بالسلام والمغفرة والنمو الروحاني. 🎈 - {your_name}" },
    { en: "To my dear {friend_name}, may Ramadan illuminate your soul with faith and your home with happiness. ✨🎈 - {your_name}", ar: "إلى عزيزي {friend_name}، أتمنى أن ينير رمضان روحك بالإيمان وبيتك بالسعادة. ✨🎈 - {your_name}" },
    { en: "Ramadan Mubarak, {friend_name}! 🌙 May every fast strengthen your spirit and every prayer bring you peace. 🎈 - {your_name}", ar: "رمضان مبارك، {friend_name}! 🌙 أتمنى أن يقوي كل صيام روحك وكل صلاة تجلب لك السلام. 🎈 - {your_name}" },
    { en: "Wishing you a serene and blessed Ramadan, {friend_name}. 🙏 May Allah accept all your good deeds. 🎈 - {your_name}", ar: "أتمنى لك رمضانًا هادئًا ومباركًا، {friend_name}. 🙏 أتمنى أن يقبل الله جميع أعمالك الصالحة. 🎈 - {your_name}" },
    { en: "May the holy month of Ramadan bring you tranquility and abundance, {friend_name}. 🌼 Ramadan Kareem! 🎈 - {your_name}", ar: "أتمنى أن يجلب لك الشهر المقدس من رمضان الهدوء والوفرة، {friend_name}. 🌼 رمضان كريم! 🎈 - {your_name}" },
    { en: "Ramadan Mubarak, {friend_name}. 🌟 May this month be a time of reflection, gratitude, and divine blessings. 🎈 - {your_name}", ar: "رمضان مبارك، {friend_name}. 🌟 أتمنى أن يكون هذا الشهر وقتًا للتأمل والامتنان والبركات الإلهية. 🎈 - {your_name}" },
    { en: "To {friend_name}, may your Ramadan be filled with mercy, love, and countless rewards from Allah. 🌙🎈 - {your_name}", ar: "إلى {friend_name}، أتمنى أن يمتلئ رمضانك بالرحمة والحب ومكافآت لا حصر لها من الله. 🌙🎈 - {your_name}" },
    { en: "Ramadan Kareem, {friend_name}! ✨ May your heart find peace and your soul find strength in this sacred month. 🎈 - {your_name}", ar: "رمضان كريم، {friend_name}! ✨ أتمنى أن يجد قلبك السلام وروحك القوة في هذا الشهر المقدس. 🎈 - {your_name}" },
    { en: "Wishing you a Ramadan overflowing with joy and blessings, {friend_name}. 🌼 Ramadan Mubarak! 🎈 - {your_name}", ar: "أتمنى لك رمضانًا يفيض بالفرح والبركات، {friend_name}. 🌼 رمضان مبارك! 🎈 - {your_name}" },
    { en: "May Allah’s light guide you through Ramadan, {friend_name}. 🌙 Have a blessed and peaceful month! 🎈 - {your_name}", ar: "أتمنى أن يهديك نور الله خلال رمضان، {friend_name}. 🌙 أتمنى لك شهرًا مباركًا وهادئًا! 🎈 - {your_name}" },
    { en: "Ramadan Mubarak, {friend_name}! 🌟 May your fasts be easy and your prayers be heard. 🎈 - {your_name}", ar: "رمضان مبارك، {friend_name}! 🌟 أتمنى أن تكون صياماتك سهلة وصلواتك مسموعة. 🎈 - {your_name}" },
    { en: "To my beloved {friend_name}, may this Ramadan bring you closer to paradise. 🌙 Ramadan Kareem! 🎈 - {your_name}", ar: "إلى {friend_name} الحبيب، أتمنى أن يقربك هذا الرمضان من الجنة. 🌙 رمضان كريم! 🎈 - {your_name}" },
    { en: "Wishing you a month of spiritual renewal and happiness, {friend_name}. ✨ Ramadan Mubarak! 🎈 - {your_name}", ar: "أتمنى لك شهرًا من التجديد الروحاني والسعادة، {friend_name}. ✨ رمضان مبارك! 🎈 - {your_name}" },
    { en: "Ramadan Kareem, {friend_name}. 🌼 May every moment of this month bring you Allah’s grace and favor. 🎈 - {your_name}", ar: "رمضان كريم، {friend_name}. 🌼 أتمنى أن تجلب لك كل لحظة في هذا الشهر نعمة الله وتفضله. 🎈 - {your_name}" },
    { en: "May Ramadan be a time of healing and hope for you, {friend_name}. 🌙 Ramadan Mubarak! 🎈 - {your_name}", ar: "أتمنى أن يكون رمضان وقتًا للشفاء والأمل بالنسبة لك، {friend_name}. 🌙 رمضان مبارك! 🎈 - {your_name}" },
    { en: "To {friend_name}, may your Ramadan be as beautiful as your heart. 🌟 Wishing you blessings! 🎈 - {your_name}", ar: "إلى {friend_name}، أتمنى أن يكون رمضانك جميلًا مثل قلبك. 🌟 أتمنى لك البركات! 🎈 - {your_name}" },
    { en: "Ramadan Mubarak, {friend_name}! 🙏 May Allah shower you with His mercy and love this month. 🎈 - {your_name}", ar: "رمضان مبارك، {friend_name}! 🙏 أتمنى أن يغمرك الله برحمته وحبه هذا الشهر. 🎈 - {your_name}" },
    { en: "Wishing you strength and serenity this Ramadan, {friend_name}. 🌙 Ramadan Kareem! 🎈 - {your_name}", ar: "أتمنى لك القوة والهدوء في هذا الرمضان، {friend_name}. 🌙 رمضان كريم! 🎈 - {your_name}" },
    { en: "May the blessings of Ramadan fill your life with peace and prosperity, {friend_name}. ✨🎈 - {your_name}", ar: "أتمنى أن تملأ بركات رمضان حياتك بالسلام والازدهار، {friend_name}. ✨🎈 - {your_name}" },
    { en: "Ramadan Mubarak, {friend_name}! 🌙 May your days be bright and your nights be filled with worship. 🎈 - {your_name}", ar: "رمضان مبارك، {friend_name}! 🌙 أتمنى أن تكون أيامك مشرقة ولياليك مليئة بالعبادة. 🎈 - {your_name}" },
    { en: "To {friend_name}, may this Ramadan bring you endless joy and divine forgiveness. 🌟 Ramadan Kareem! 🎈 - {your_name}", ar: "إلى {friend_name}، أتمنى أن يجلب لك هذا الرمضان فرحًا لا نهائيًا والمغفرة الإلهية. 🌟 رمضان كريم! 🎈 - {your_name}" },
    { en: "Wishing you a Ramadan full of faith and fulfillment, {friend_name}. 🌼 Ramadan Mubarak! 🎈 - {your_name}", ar: "أتمنى لك رمضانًا مليئًا بالإيمان والإشباع، {friend_name}. 🌼 رمضان مبارك! 🎈 - {your_name}" },
    { en: "Ramadan Kareem, {friend_name}! 🌙 May Allah’s peace envelop you and your loved ones this month. 🎈 - {your_name}", ar: "رمضان كريم، {friend_name}! 🌙 أتمنى أن يغمر سلام اللهك وأحباءك هذا الشهر. 🎈 - {your_name}" },
    { en: "May this Ramadan be a journey of love and devotion for you, {friend_name}. ✨ Ramadan Mubarak! 🎈 - {your_name}", ar: "أتمنى أن يكون هذا الرمضان رحلة حب وتفانٍ لك، {friend_name}. ✨ رمضان مبارك! 🎈 - {your_name}" }
];

function generateRandomMessage() {
    const yourName = document.getElementById("your-name").value.trim();
    const friendName = document.getElementById("friend-name").value.trim();
    if (yourName && friendName) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const personalizedMessage = (currentLang === 'ar' ? randomMessage.ar : randomMessage.en)
            .replace("{friend_name}", friendName)
            .replace("{your_name}", yourName);
        document.getElementById("generated-message").textContent = personalizedMessage;
        document.getElementById("generated-message").style.display = "block";
    } else {
        alert(currentLang === 'ar' ? "يرجى إدخال اسمك واسم صديقك." : "Please enter both your name and your friend's name.");
    }
}
document.getElementById("generate-message").addEventListener("click", generateRandomMessage);

// Quran Images
const quranImages = [
    "./assets/img&js&css/img/pg_0005.webp", "./assets/img&js&css/img/pg_0006.webp", "./assets/img&js&css/img/pg_0007.webp",
    "./assets/img&js&css/img/pg_0008.webp", "./assets/img&js&css/img/pg_0009.webp", "./assets/img&js&css/img/pg_0010.webp",
    "./assets/img&js&css/img/pg_0011.webp", "./assets/img&js&css/img/pg_0012.webp", "./assets/img&js&css/img/pg_0013.webp",
    "./assets/img&js&css/img/pg_0014.webp", "./assets/img&js&css/img/pg_0015.webp", "./assets/img&js&css/img/pg_0016.webp",
    "./assets/img&js&css/img/pg_0017.webp", "./assets/img&js&css/img/pg_0018.webp", "./assets/img&js&css/img/pg_0019.webp",
    "./assets/img&js&css/img/pg_0020.webp", "./assets/img&js&css/img/pg_0021.webp", "./assets/img&js&css/img/pg_0022.webp",
    "./assets/img&js&css/img/pg_0023.webp", "./assets/img&js&css/img/pg_0024.webp", "./assets/img&js&css/img/pg_0025.webp",
    "./assets/img&js&css/img/pg_0026.webp", "./assets/img&js&css/img/pg_0027.webp", "./assets/img&js&css/img/pg_0028.webp",
    "./assets/img&js&css/img/pg_0029.webp", "./assets/img&js&css/img/pg_0030.webp", "./assets/img&js&css/img/pg_0031.webp",
    "./assets/img&js&css/img/pg_0032.webp", "./assets/img&js&css/img/pg_0033.webp", "./assets/img&js&css/img/pg_0034.webp",
    "./assets/img&js&css/img/pg_0035.webp", "./assets/img&js&css/img/pg_0036.webp", "./assets/img&js&css/img/pg_0037.webp",
    "./assets/img&js&css/img/pg_0038.webp"
];

let currentIndex = 0;

function updateQuranImage() {
    const quranImage = document.getElementById('quran-image');
    let opacity = 1;
    const fadeOutInterval = setInterval(() => {
        opacity -= 0.05;
        quranImage.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeOutInterval);
            quranImage.src = quranImages[currentIndex];
            opacity = 0;
            const fadeInInterval = setInterval(() => {
                opacity += 0.05;
                quranImage.style.opacity = opacity;
                if (opacity >= 1) {
                    clearInterval(fadeInInterval);
                }
            }, 50);
        }
    }, 50);
}

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < quranImages.length - 1) {
        currentIndex++;
        updateQuranImage();
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateQuranImage();
    }
});

// To-Do List
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('taskInput');
const outputList = document.getElementById('output-list');
const tableList = document.createElement('ul');
tableList.className = 'table-list';
outputList.appendChild(tableList);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('ramadanTasks')) || [];
    tasks.forEach(task => addTaskToList(task.text, task.completed));
    updateOutputListVisibility();
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTaskToList(taskText, false);
        saveTaskToLocalStorage(taskText, false);
        taskInput.value = '';
        updateOutputListVisibility();
    }
});

function addTaskToList(taskText, completed) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    if (completed) listItem.classList.add('conformed');

    const editBtn = document.createElement('button');
    editBtn.textContent = currentLang === 'ar' ? 'تعديل' : 'Edit';
    editBtn.className = 'Edit-btn';
    editBtn.addEventListener('click', () => {
        Swal.fire({
            title: currentLang === 'ar' ? 'وضع التعديل' : 'Edit Mode',
            text: currentLang === 'ar' ? 'جاري تعديل العنصر...' : 'Editing item...',
            icon: 'info',
            confirmButtonText: currentLang === 'ar' ? 'موافق' : 'OK'
        });
        taskInput.value = listItem.textContent;
        tableList.removeChild(listItem);
        removeTaskFromLocalStorage(taskText);
        updateOutputListVisibility();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = currentLang === 'ar' ? 'حذف' : 'Delete';
    deleteBtn.className = 'Delete-btn';
    deleteBtn.addEventListener('click', () => {
        Swal.fire({
            title: currentLang === 'ar' ? 'تأكيد الحذف' : 'Confirm Deletion',
            text: currentLang === 'ar' ? 'هل أنت متأكد من إزالة هذا العنصر؟' : 'Are you sure you want to remove this item?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: currentLang === 'ar' ? 'نعم، احذفه!' : 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                tableList.removeChild(listItem);
                removeTaskFromLocalStorage(taskText);
                updateOutputListVisibility();
            }
        });
    });

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = currentLang === 'ar' ? 'تأكيد' : 'Confirm';
    confirmBtn.className = 'Confirm-btn';
    confirmBtn.addEventListener('click', () => {
        listItem.classList.add('conformed');
        Swal.fire({
            title: currentLang === 'ar' ? 'اكتملت المهمة' : 'Task Completed',
            text: currentLang === 'ar' ? 'تم تأكيد هذه المهمة.' : 'This task has been confirmed.',
            icon: 'success',
            confirmButtonText: currentLang === 'ar' ? 'موافق' : 'OK'
        });
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
        confirmBtn.style.display = 'none';
        updateTaskInLocalStorage(taskText, true);
        updateOutputListVisibility();
    });

    if (completed) {
        editBtn.style.display = 'none';
        deleteBtn.style.display = 'none';
        confirmBtn.style.display = 'none';
    }

    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(confirmBtn);
    tableList.appendChild(listItem);
}

function saveTaskToLocalStorage(taskText, completed) {
    const tasks = JSON.parse(localStorage.getItem('ramadanTasks')) || [];
    tasks.push({ text: taskText, completed });
    localStorage.setItem('ramadanTasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('ramadanTasks')) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('ramadanTasks', JSON.stringify(tasks));
}

function updateTaskInLocalStorage(taskText, completed) {
    let tasks = JSON.parse(localStorage.getItem('ramadanTasks')) || [];
    tasks = tasks.map(task => task.text === taskText ? { text: taskText, completed } : task);
    localStorage.setItem('ramadanTasks', JSON.stringify(tasks));
}

function updateOutputListVisibility() {
    outputList.style.display = tableList.children.length > 0 ? 'block' : 'none';
}

// Contact Form
document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const whatsappMessage = encodeURIComponent(`${currentLang === 'ar' ? 'الاسم' : 'Name'}: ${name}\n${currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email'}: ${email}\n${currentLang === 'ar' ? 'الرسالة' : 'Message'}: ${message}`);
    const whatsappNumber = "+201558042651";
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
});
