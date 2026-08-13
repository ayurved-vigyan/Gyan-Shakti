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
  [...dots.children].forEach((d,i)=>d.classList.toggle("active", i === current));
}

function nextBanner(){ showBanner(current + 1); }
function previousBanner(){ showBanner(current - 1); }
function goToBanner(index){ showBanner(index); }

renderBanners();
setInterval(nextBanner,5000);
/* =========================================
   GYAN SHAKTI — LOGIN / REGISTER TOGGLE
========================================= */

const registerToggleBtn = document.getElementById("registerToggleBtn");
const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const toggleText = document.getElementById("toggleText");

let isRegisterMode = false;


/* -----------------------------------------
   Update Authentication Mode
----------------------------------------- */

function updateAuthMode() {

  if (!authTitle || !authSubtitle || !authSubmitBtn || !toggleText) {
    return;
  }

  if (isRegisterMode) {

    /* REGISTER MODE */

    authTitle.textContent = "CREATE ACCOUNT";

    authSubtitle.textContent =
      "Join Gyan Shakti & start learning today.";

    authSubmitBtn.textContent = "Sign Up";

    authSubmitBtn.setAttribute(
      "aria-label",
      "Create your Gyan Shakti account"
    );

    toggleText.innerHTML =
      'Already have an account? ' +
      '<a href="#" id="registerToggleBtn">Login here</a>';

  } else {

    /* LOGIN MODE */

    authTitle.textContent = "GYAN SHAKTI";

    authSubtitle.textContent =
      "Welcome back! Please login to your account.";

    authSubmitBtn.textContent = "Sign In";

    authSubmitBtn.setAttribute(
      "aria-label",
      "Sign in to your Gyan Shakti account"
    );

    toggleText.innerHTML =
      'Don\'t have an account? ' +
      '<a href="#" id="registerToggleBtn">Register here</a>';
  }
}


/* -----------------------------------------
   Toggle Login / Register
----------------------------------------- */

if (registerToggleBtn) {

  registerToggleBtn.addEventListener("click", function (event) {

    event.preventDefault();

    isRegisterMode = !isRegisterMode;

    updateAuthMode();

  });

}


/* -----------------------------------------
   Handle Toggle Link Dynamically
----------------------------------------- */

if (toggleText) {

  toggleText.addEventListener("click", function (event) {

    const toggleLink = event.target.closest("#registerToggleBtn");

    if (!toggleLink) {
      return;
    }

    event.preventDefault();

    isRegisterMode = !isRegisterMode;

    updateAuthMode();

  });

}


/* =========================================
   SOCIAL LOGIN
========================================= */

const googleLoginBtn = document.getElementById("googleLoginBtn");
const facebookLoginBtn = document.getElementById("facebookLoginBtn");


/* Google */

if (googleLoginBtn) {

  googleLoginBtn.addEventListener("click", function () {

    handleSocialLogin("Google");

  });

}


/* Facebook */

if (facebookLoginBtn) {

  facebookLoginBtn.addEventListener("click", function () {

    handleSocialLogin("Facebook");

  });

}


/* -----------------------------------------
   Social Login Handler
----------------------------------------- */

function handleSocialLogin(provider) {

  const supportedProviders = [
    "Google",
    "Facebook"
  ];

  if (!supportedProviders.includes(provider)) {

    console.error(
      "Unsupported authentication provider:",
      provider
    );

    return;
  }

  alert(
    `${provider} login integration will be connected in the Authentication Engine.`
  );

}
