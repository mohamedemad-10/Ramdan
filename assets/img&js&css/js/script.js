// Hide Loader When Page Loads
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 700); // Match transition duration
    }, 2000); // Delay for effect (adjust as needed)
});
// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle('dark-mode');
  
    // Select the navbar and other elements that need dark mode
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const sidebar = document.querySelector('.sidebar');
    const about = document.querySelector('.about');
    const prayerTimes = document.querySelector('.prayer-times');
    const dailyAdvice = document.querySelector('.daily-advice');
    const messageToFriend = document.querySelector('.message-to-friend');
    const whatShouldYouDo = document.querySelector('.what-should-you-do');
    const todoList = document.querySelector('.to-do-list');
    const contact = document.querySelector('.contact');
    const contactForm = document.querySelector('.contact-form');

    const themeIcon = document.querySelector('#theme-icon');
  
    // Toggle dark mode on navbar and other sections
    navbar.classList.toggle('dark-mode');
    hero.classList.toggle('dark-mode');
    sidebar.classList.toggle('dark-mode');
    about.classList.toggle('dark-mode');
    prayerTimes.classList.toggle('dark-mode');
    dailyAdvice.classList.toggle('dark-mode');
    messageToFriend.classList.toggle('dark-mode');
    whatShouldYouDo.classList.toggle('dark-mode');
    todoList.classList.toggle('dark-mode');
    contact.classList.toggle('dark-mode');
    contactForm.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.add('fa-sun');
        themeIcon.classList.remove('fa-moon');
        themeIcon.style.color="yellow"
        themeIcon.style.background="transparent"
      } else {
        themeIcon.classList.add('fa-moon');
        themeIcon.classList.remove('fa-sun');
        themeIcon.style.color="#000"
        themeIcon.style.background="transparent"
      }

  }
  
  // Event listener for the button to toggle dark mode
  document.querySelector('#darkModeToggle').addEventListener('click', toggleDarkMode);
  

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});



  function showRamadan() {
    const message = document.getElementById("ramadanMessage");
    message.style.display = "block";
    message.style.animation = "fadeIn 1s forwards"; // Fade-in effect

    // Add falling stars
    for (let i = 0; i < 20; i++) {
        createStar();
    }
}

function showRamadan() {
    const container = document.getElementById('balloonContainer');
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // Random horizontal position
    balloon.style.display = 'block'; // Make it visible
    container.appendChild(balloon);

    // Remove the balloon after animation (optional)
    setTimeout(() => {
        balloon.remove();
    }, 3000); // Matches the animation duration
}

// Check if the name is already saved in localStorage
window.onload = function() {
    const storedName = localStorage.getItem('userName');
    
    if (storedName) {
        // If a name exists, skip the prompt and show a personalized greeting
        document.getElementById('user-greeting').textContent = `Ramadan Kareem, ${storedName}! May this blessed month bring you peace, joy, and spiritual growth.🙏`;
        document.getElementById('user-name').textContent = storedName;

        // Hide the modal if the name exists in localStorage
        document.getElementById('name-prompt').style.display = 'none';
    } else {
        // Show the name prompt modal if no name is stored
        document.getElementById('name-prompt').style.display = 'flex';
    }
}

// Function to submit the user's name and close the modal
function submitName() {
    const userName = document.getElementById('user-name-input').value; // Get the user's input
    
    if (userName.trim() !== "") { // Check if the input is not empty
        localStorage.setItem('userName', userName);
        
        document.getElementById('user-name').textContent = userName;

        document.getElementById('user-greeting').textContent = `Ramadan Kareem, ${userName}! May this blessed month bring you peace, joy, and spiritual growth.🙏`;

        document.getElementById('name-prompt').style.display = 'none'; // Hide the modal after submission
    } else {
        alert("Please enter your name!"); 
    }
}






        // Intersection Observer for Section Animations
        const sections = document.querySelectorAll(".section-hidden");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("section-visible");
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of section is visible

        sections.forEach(section => observer.observe(section));
  



// Countdown to Ramadan Start and End
function updateCountdown() {
    const ramadanStart = new Date("March 1, 2025 00:00:00").getTime();
    const ramadanEnd = new Date("March 30, 2025 23:59:59").getTime(); // Assuming 30 days
    const now = new Date().getTime();

    const countdownElement = document.getElementById('countdown');
    const timerLabel = document.getElementById('timer-label');

    // Before Ramadan starts
    if (now < ramadanStart) {
        const distance = ramadanStart - now;
        timerLabel.innerText = "Time until Ramadan starts:";
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    // During Ramadan (countdown to end)
    else if (now >= ramadanStart && now < ramadanEnd) {
        const distance = ramadanEnd - now;
        timerLabel.innerText = "Time until Ramadan ends:";
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    // After Ramadan ends
    else {
        timerLabel.innerText = "Ramadan has ended!";
        countdownElement.innerText = "See you next year 🌙";
        clearInterval(countdownInterval); // Stop the interval
    }
}

// Initialize and update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


    
    
// Static prayer times for Ramadan 2025 (March 1 - March 29) in Cairo, Egypt
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

let currentDay = 1; // Start at Ramadan day 1

function displayPrayerTimes(dayIndex) {
    const dayData = prayerTimesData[dayIndex - 1];
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = `
        <tr>
            <td>${dayData.day} Ramadan</td>
            <td>${convertTo12HourFormat(dayData.fajr)}</td>
            <td>${convertTo12HourFormat(dayData.dhuhr)}</td>
            <td>${convertTo12HourFormat(dayData.asr)}</td>
            <td>${convertTo12HourFormat(dayData.maghrib)}</td>
            <td>${convertTo12HourFormat(dayData.isha)}</td>
        </tr>`;
    fadeInTable();

    // Update button states
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
    const period = hours >= 12 ? 'PM' : 'AM';
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
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}

// Display the first day on load
displayPrayerTimes(currentDay);






// Example list of 30 daily advices
const adviceList = [
    { text: "Ramadan is the month of reflection and self-discipline. Use this time to grow spiritually.", image: "https://picsum.photos/50?random=1" },
    { text: "Fasting during Ramadan helps us appreciate the blessings we have. Remember to be grateful for every meal.", image: "https://picsum.photos/50?random=2" },
    { text: "Charity is a major act of worship during Ramadan. Be kind and give what you can.", image: "https://picsum.photos/50?random=3" },
    { text: "Ramadan is an opportunity for spiritual renewal. Make the most of it by praying and connecting with Allah.", image: "https://picsum.photos/50?random=4" },
    { text: "Make the most of every moment during Ramadan. Seek forgiveness and make du'a for yourself and others.", image: "https://picsum.photos/50?random=5" },
    { text: "Embrace the spirit of patience during Ramadan. It's not only about abstaining from food, but from bad habits.", image: "https://picsum.photos/50?random=6" },
    { text: "Engage in acts of kindness during Ramadan, as they are multiplied in reward.", image: "https://picsum.photos/50?random=7" },
    { text: "Take time to strengthen your relationship with Allah through prayer and reflection.", image: "https://picsum.photos/50?random=8" },
    { text: "Ramadan reminds us of the importance of community. Share moments with family and friends.", image: "https://picsum.photos/50?random=9" },
    { text: "Seek forgiveness for your past mistakes and purify your heart in this blessed month.", image: "https://picsum.photos/50?random=10" },
    { text: "During Ramadan, focus on self-control and developing a closer connection with Allah.", image: "https://picsum.photos/50?random=11" },
    { text: "Remember those less fortunate during Ramadan and strive to help however you can.", image: "https://picsum.photos/50?random=12" },
    { text: "Patience and gratitude are key virtues during Ramadan. Embrace both with an open heart.", image: "https://picsum.photos/50?random=13" },
    { text: "Keep your thoughts and actions pure, and avoid negativity during Ramadan.", image: "https://picsum.photos/50?random=14" },
    { text: "Reading and reflecting on the Quran is one of the best ways to spend your time in Ramadan.", image: "https://picsum.photos/50?random=15" },
    { text: "Ramadan is a time for growth. Use this month to become a better version of yourself.", image: "https://picsum.photos/50?random=16" },
    { text: "Stay connected with the poor and needy, and strive to make a positive impact during Ramadan.", image: "https://picsum.photos/50?random=17" },
    { text: "Refrain from gossip and negative speech during Ramadan; choose kindness in all interactions.", image: "https://picsum.photos/50?random=18" },
    { text: "Consider your actions, words, and thoughts carefully as you strive to purify your soul during Ramadan.", image: "https://picsum.photos/50?random=19" },
    { text: "Reflect on the blessings of Ramadan and be grateful for the opportunity to fast and worship.", image: "https://picsum.photos/50?random=20" },
    { text: "Let your Ramadan be filled with good deeds and a heart full of gratitude.", image: "https://picsum.photos/50?random=21" },
    { text: "Keep the spirit of Ramadan alive throughout the year by continuing to fast and give charity.", image: "https://picsum.photos/50?random=22" },
    { text: "Make du'a for your loved ones and for peace in the world during Ramadan.", image: "https://picsum.photos/50?random=23" },
    { text: "The best way to seek forgiveness is through sincere repentance and humility.", image: "https://picsum.photos/50?random=24" },
    { text: "Rejuvenate your soul with extra prayers and worship during the blessed nights of Ramadan.", image: "https://picsum.photos/50?random=25" },
    { text: "Ramadan is a time to nurture good habits and strive for personal improvement.", image: "https://picsum.photos/50?random=26" },
    { text: "Embrace the opportunity to cleanse your body and soul with fasting during Ramadan.", image: "https://picsum.photos/50?random=27" },
    { text: "Take time to reflect on the meaning of Ramadan and its significance in your spiritual journey.", image: "https://picsum.photos/50?random=28" },
    { text: "Let every fast and prayer during Ramadan bring you closer to Allah.", image: "https://picsum.photos/50?random=29" },
    { text: "As Ramadan concludes, make a commitment to maintain your spiritual growth.", image: "https://picsum.photos/50?random=30" },
];

// Show advice of the day
let currentDay_j = new Date().getDate();
const totalDays = adviceList.length;

// Update the daily advice section with the current day's advice
document.getElementById('advice').innerHTML = `
    <div class="section-header">
        <h3>Advice for Today</h3>
    </div>
    <div class="advice-content">
        <img id="advice-image" src="${adviceList[currentDay_j - 1].image}" alt="Advice Image">
        <p id="advice-text">${adviceList[currentDay_j - 1].text}</p>
    </div>
`;



const messages = [
    "Ramadan Mubarak, {friend_name}! 🌙 May this holy month bring peace, happiness, and blessings to you and your family. 🎈 - {your_name}",
    "Wishing you a blessed Ramadan, {friend_name}. 🌟 May your prayers be answered and your heart be filled with joy. 🎈 - {your_name}",
    "May the spirit of Ramadan fill your heart with love and your life with prosperity. 🌙 Ramadan Mubarak, {friend_name}! 🎈 - {your_name}",
    "Ramadan Kareem, {friend_name}. 🙏 May Allah’s blessings be with you today and always. 🎈 - {your_name}",
    "Sending you my warmest wishes for Ramadan, {friend_name}. 🌼 May your days be filled with joy and your nights with prayers. 🎈 - {your_name}",
    "May this Ramadan bring you closer to Allah and shower you with endless blessings, {friend_name}. 🌙 Ramadan Mubarak! 🎈 - {your_name}",
    "Ramadan Kareem, {friend_name}! 🌟 Wishing you a month full of peace, forgiveness, and spiritual growth. 🎈 - {your_name}",
    "To my dear {friend_name}, may Ramadan illuminate your soul with faith and your home with happiness. ✨🎈 - {your_name}",
    "Ramadan Mubarak, {friend_name}! 🌙 May every fast strengthen your spirit and every prayer bring you peace. 🎈 - {your_name}",
    "Wishing you a serene and blessed Ramadan, {friend_name}. 🙏 May Allah accept all your good deeds. 🎈 - {your_name}",
    "May the holy month of Ramadan bring you tranquility and abundance, {friend_name}. 🌼 Ramadan Kareem! 🎈 - {your_name}",
    "Ramadan Mubarak, {friend_name}. 🌟 May this month be a time of reflection, gratitude, and divine blessings. 🎈 - {your_name}",
    "To {friend_name}, may your Ramadan be filled with mercy, love, and countless rewards from Allah. 🌙🎈 - {your_name}",
    "Ramadan Kareem, {friend_name}! ✨ May your heart find peace and your soul find strength in this sacred month. 🎈 - {your_name}",
    "Wishing you a Ramadan overflowing with joy and blessings, {friend_name}. 🌼 Ramadan Mubarak! 🎈 - {your_name}",
    "May Allah’s light guide you through Ramadan, {friend_name}. 🌙 Have a blessed and peaceful month! 🎈 - {your_name}",
    "Ramadan Mubarak, {friend_name}! 🌟 May your fasts be easy and your prayers be heard. 🎈 - {your_name}",
    "To my beloved {friend_name}, may this Ramadan bring you closer to paradise. 🌙 Ramadan Kareem! 🎈 - {your_name}",
    "Wishing you a month of spiritual renewal and happiness, {friend_name}. ✨ Ramadan Mubarak! 🎈 - {your_name}",
    "Ramadan Kareem, {friend_name}. 🌼 May every moment of this month bring you Allah’s grace and favor. 🎈 - {your_name}",
    "May Ramadan be a time of healing and hope for you, {friend_name}. 🌙 Ramadan Mubarak! 🎈 - {your_name}",
    "To {friend_name}, may your Ramadan be as beautiful as your heart. 🌟 Wishing you blessings! 🎈 - {your_name}",
    "Ramadan Mubarak, {friend_name}! 🙏 May Allah shower you with His mercy and love this month. 🎈 - {your_name}",
    "Wishing you strength and serenity this Ramadan, {friend_name}. 🌙 Ramadan Kareem! 🎈 - {your_name}",
    "May the blessings of Ramadan fill your life with peace and prosperity, {friend_name}. ✨🎈 - {your_name}",
    "Ramadan Mubarak, {friend_name}! 🌙 May your days be bright and your nights be filled with worship. 🎈 - {your_name}",
    "To {friend_name}, may this Ramadan bring you endless joy and divine forgiveness. 🌟 Ramadan Kareem! 🎈 - {your_name}",
    "Wishing you a Ramadan full of faith and fulfillment, {friend_name}. 🌼 Ramadan Mubarak! 🎈 - {your_name}",
    "Ramadan Kareem, {friend_name}! 🌙 May Allah’s peace envelop you and your loved ones this month. 🎈 - {your_name}",
    "May this Ramadan be a journey of love and devotion for you, {friend_name}. ✨ Ramadan Mubarak! 🎈 - {your_name}"
];

async function generateRandomMessage() {
    const yourName = document.getElementById("your-name").value;
    const friendName = document.getElementById("friend-name").value;

    if (yourName && friendName) {
        // Generate random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const personalizedMessage = randomMessage
            .replace("{friend_name}", friendName)
            .replace("{your_name}", yourName);

        // Display the message
        const generatedMessageElement = document.getElementById("generated-message");
        generatedMessageElement.textContent = personalizedMessage;
        generatedMessageElement.style.display = "block";

        // Fetch and display a random Ramadan image from Unsplash
        try {
            const apiKey = "YOUR_UNSPLASH_API_KEY"; // Replace with your Unsplash API key
            const response = await fetch(`https://api.unsplash.com/photos/random?query=ramadan&client_id=${apiKey}`);
            const data = await response.json();
            const imageUrl = data.urls.regular;

            const generatedImageElement = document.getElementById("generated-image");
            generatedImageElement.src = imageUrl;
            generatedImageElement.style.display = "block";
        } catch (error) {
            console.error("Error fetching image:", error);
            alert("Couldn’t load an image at the moment. Enjoy the message though!");
        }
    } else {
        alert("Please enter both your name and your friend's name.");
    }
}
document.getElementById("generate-message").addEventListener("click", generateRandomMessage);

// Array of Quran Image Paths (with 34 images)
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
    
    // Start the fade-out effect
    let opacity = 1; // Initial opacity
    const fadeOutInterval = setInterval(() => {
        opacity -= 0.05; // Decrease opacity
        quranImage.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fadeOutInterval); // Stop the fade-out effect

            // Change the image after fading out
            quranImage.src = quranImages[currentIndex];

            // Start the fade-in effect
            opacity = 0;
            const fadeInInterval = setInterval(() => {
                opacity += 0.05; // Increase opacity
                quranImage.style.opacity = opacity;

                if (opacity >= 1) {
                    clearInterval(fadeInInterval); // Stop the fade-in effect
                }
            }, 50); // Fade-in speed
        }
    }, 50); 
}

document.getElementById('next-btn').addEventListener('click', function () {
    if (currentIndex < quranImages.length - 1) {
        currentIndex++;
        updateQuranImage();
    }
});

document.getElementById('prev-btn').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateQuranImage();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    updateQuranImage(); 
});




// Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('taskInput');
const outputList = document.getElementById('output-list');
const tableList = document.createElement('ul');
tableList.className = 'table-list';
outputList.appendChild(tableList);

// Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const tasks = JSON.parse(localStorage.getItem('ramadanTasks')) || [];
    tasks.forEach(task => addTaskToList(task.text, task.completed));
    updateOutputListVisibility();
});

// Add task to list and local storage
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    addTaskToList(taskText, false);
    saveTaskToLocalStorage(taskText, false);
    taskInput.value = '';
    updateOutputListVisibility();
});

// Function to add task to the DOM
function addTaskToList(taskText, completed) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    if (completed) listItem.classList.add('conformed');

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'Edit-btn';
    editBtn.addEventListener('click', () => {
        Swal.fire({
            title: 'Edit Mode',
            text: 'Editing item...',
            icon: 'info',
            confirmButtonText: 'OK'
        });
        taskInput.value = listItem.textContent;
        tableList.removeChild(listItem);
        removeTaskFromLocalStorage(taskText);
        updateOutputListVisibility();
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'Delete-btn';
    deleteBtn.addEventListener('click', () => {
        Swal.fire({
            title: 'Confirm Deletion',
            text: 'Are you sure you want to remove this item?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                tableList.removeChild(listItem);
                removeTaskFromLocalStorage(taskText);
                updateOutputListVisibility();
            }
        });
    });

    // Confirm button
    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.className = 'Confirm-btn';
    confirmBtn.addEventListener('click', () => {
        listItem.classList.add('conformed');
        Swal.fire({
            title: 'Task Completed',
            text: 'This task has been confirmed.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
        confirmBtn.style.display = 'none';
        updateTaskInLocalStorage(taskText, true);
        updateOutputListVisibility();
    });

    // Hide buttons if task is already completed
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

// Save task to local storage
function saveTaskToLocalStorage(taskText, completed) {
    const tasks = JSON.parse(localStorage.getItem('ramadanTasks')) || [];
    tasks.push({ text: taskText, completed: completed });
    localStorage.setItem('ramadanTasks', JSON.stringify(tasks));
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('ramadanTasks')) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('ramadanTasks', JSON.stringify(tasks));
}

// Update task completion status in local storage
function updateTaskInLocalStorage(taskText, completed) {
    let tasks = JSON.parse(localStorage.getItem('ramadanTasks')) || [];
    tasks = tasks.map(task => task.text === taskText ? { text: taskText, completed: completed } : task);
    localStorage.setItem('ramadanTasks', JSON.stringify(tasks));
}

// Update visibility of output list
function updateOutputListVisibility() {
    outputList.style.display = tableList.children.length > 0 ? 'block' : 'none';
}


    // Add an event listener for form submission

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const whatsappMessage = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        const whatsappNumber = "+201558042651"; 

        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    });
