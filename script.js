const banners = [
  {image:"https://placehold.co/1600x900/0757c9/ffffff?text=GYAN+SHAKTI+%7C+Banner+01", alt:"Gyan Shakti Banner 1"},
  {image:"https://placehold.co/1600x900/0b6eea/ffffff?text=EXAMS+%7C+COMPETITIONS+%7C+LEARNING", alt:"Gyan Shakti Banner 2"},
  {image:"https://placehold.co/1600x900/123c73/ffffff?text=SCHOLARSHIPS+%7C+EVENTS+%7C+CAREER", alt:"Gyan Shakti Banner 3"}
];

const track = document.getElementById("bannerTrack");
const dots = document.getElementById("bannerDots");
let current = 0;

function renderBanners(){
  track.innerHTML = banners.map((b,i)=>`
    <article class="banner">
      <img src="${b.image}" alt="${b.alt}">
    </article>
  `).join("");

  dots.innerHTML = banners.map((_,i)=>`
    <button class="dot ${i===0?"active":""}" onclick="goToBanner(${i})" aria-label="Go to banner ${i+1}"></button>
  `).join("");

  showBanner(0);
}

function showBanner(index){
  current = (index + banners.length) % banners.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===current));
}

function nextBanner(){ showBanner(current + 1); }
function previousBanner(){ showBanner(current - 1); }
function goToBanner(index){ showBanner(index); }

renderBanners();
setInterval(nextBanner,5000);

/* =================================
   GYAN SHAKTI AUTH MODAL
================================= */

const authModal = document.getElementById("authModal");
const closeAuthModal = document.getElementById("closeAuthModal");
const loginForm = document.getElementById("loginForm");
const registerLink = document.getElementById("registerLink");

/* Open Modal */
function openAuthModal() {
  if (!authModal) return;

  authModal.classList.add("active");
  authModal.setAttribute("aria-hidden", "false");
}

/* Close Modal */
function closeAuthModalFunc() {
  if (!authModal) return;

  authModal.classList.remove("active");
  authModal.setAttribute("aria-hidden", "true");
}

/* Login Button */
const loginButtons = document.querySelectorAll(".login-btn");

loginButtons.forEach(function(button) {
  button.addEventListener("click", openAuthModal);
});

/* Close Button */
if (closeAuthModal) {
  closeAuthModal.addEventListener("click", closeAuthModalFunc);
}

/* Click Outside Modal */
if (authModal) {
  authModal.addEventListener("click", function(event) {
    if (event.target === authModal) {
      closeAuthModalFunc();
    }
  });
}

/* ESC Key */
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeAuthModalFunc();
  }
});

/* Login Form */
if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    /*
      IMPORTANT:
      अभी यह केवल UI TEST है।
      Real authentication बाद में backend/authentication
      system से connect किया जाएगा।
    */

    alert("Login system is ready for backend integration.");
  });
}

/* Register */
if (registerLink) {
  registerLink.addEventListener("click", function(event) {
    event.preventDefault();

    alert("Registration system will be connected in the next step.");
  });
}
