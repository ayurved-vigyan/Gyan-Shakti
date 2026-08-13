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
   GYAN SHAKTI AUTH SYSTEM
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------------------
     ELEMENTS
  ----------------------------------------- */

  const authModal =
    document.getElementById("authModal");

  const closeAuthModal =
    document.getElementById("closeAuthModal");

  const authForm =
    document.getElementById("authForm");

  const authTitle =
    document.getElementById("authTitle");

  const authSubtitle =
    document.getElementById("authSubtitle");

  const authSubmitBtn =
    document.getElementById("authSubmitBtn");

  const toggleText =
    document.getElementById("toggleText");

  const forgotPasswordBtn =
    document.getElementById("forgotPasswordBtn");

  const googleLoginBtn =
    document.getElementById("googleLoginBtn");

  const facebookLoginBtn =
    document.getElementById("facebookLoginBtn");


  /* -----------------------------------------
     STATE
  ----------------------------------------- */

  let isRegisterMode = false;


  /* -----------------------------------------
     OPEN MODAL
  ----------------------------------------- */

  function openAuthModal() {

    if (!authModal) {
      console.error("Auth Modal not found.");
      return;
    }

    authModal.classList.add("active");

    authModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";

  }


  /* -----------------------------------------
     CLOSE MODAL
  ----------------------------------------- */

  function closeAuthModalFunc() {

    if (!authModal) {
      return;
    }

    authModal.classList.remove("active");

    authModal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow = "";

  }


  /* -----------------------------------------
     LOGIN BUTTON
     
     Works with ANY element having:
     class="login-btn"
  ----------------------------------------- */

  const loginButtons =
    document.querySelectorAll(".login-btn");

  loginButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        openAuthModal();

      }
    );

  });


  /* -----------------------------------------
     CLOSE BUTTON
  ----------------------------------------- */

  if (closeAuthModal) {

    closeAuthModal.addEventListener(
      "click",
      closeAuthModalFunc
    );

  }


  /* -----------------------------------------
     CLICK OUTSIDE MODAL
  ----------------------------------------- */

  if (authModal) {

    authModal.addEventListener(
      "click",
      function (event) {

        if (event.target === authModal) {

          closeAuthModalFunc();

        }

      }
    );

  }


  /* -----------------------------------------
     ESC KEY
  ----------------------------------------- */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        authModal &&
        authModal.classList.contains("active")
      ) {

        closeAuthModalFunc();

      }

    }
  );


  /* -----------------------------------------
     UPDATE LOGIN / REGISTER UI
  ----------------------------------------- */

  function updateAuthMode() {

    if (
      !authTitle ||
      !authSubtitle ||
      !authSubmitBtn ||
      !toggleText
    ) {

      return;

    }


    if (isRegisterMode) {

      /* REGISTER */

      authTitle.textContent =
        "CREATE ACCOUNT";

      authSubtitle.textContent =
        "Join Gyan Shakti & start learning today.";

      authSubmitBtn.textContent =
        "Sign Up";

      toggleText.innerHTML =
        'Already have an account? ' +
        '<a href="#" id="registerToggleBtn">' +
        'Login here' +
        '</a>';

      /* Forgot password is hidden during registration */

      if (forgotPasswordBtn) {

        forgotPasswordBtn.parentElement.style.display =
          "none";

      }

    } else {

      /* LOGIN */

      authTitle.textContent =
        "GYAN SHAKTI";

      authSubtitle.textContent =
        "Welcome back! Please login to your account.";

      authSubmitBtn.textContent =
        "Sign In";

      toggleText.innerHTML =
        'Don\'t have an account? ' +
        '<a href="#" id="registerToggleBtn">' +
        'Register here' +
        '</a>';

      /* Show forgot password */

      if (forgotPasswordBtn) {

        forgotPasswordBtn.parentElement.style.display =
          "flex";

      }

    }

  }


  /* -----------------------------------------
     LOGIN / REGISTER TOGGLE
     
     Event Delegation
     ----------------------------------------- */

  if (toggleText) {

    toggleText.addEventListener(
      "click",
      function (event) {

        const clickedLink =
          event.target.closest(
            "#registerToggleBtn"
          );

        if (!clickedLink) {
          return;
        }

        event.preventDefault();

        isRegisterMode =
          !isRegisterMode;

        updateAuthMode();

      }
    );

  }


  /* -----------------------------------------
     AUTH FORM SUBMIT
  ----------------------------------------- */

  if (authForm) {

    authForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const emailInput =
          document.getElementById("authEmail");

        const passwordInput =
          document.getElementById("authPassword");


        if (!emailInput || !passwordInput) {
          return;
        }


        const email =
          emailInput.value.trim();

        const password =
          passwordInput.value;


        /* Validation */

        if (!email) {

          alert(
            "Please enter your email address."
          );

          emailInput.focus();

          return;

        }


        if (!password) {

          alert(
            "Please enter your password."
          );

          passwordInput.focus();

          return;

        }


        /* REGISTER */

        if (isRegisterMode) {

          alert(
            "Registration UI is working. " +
            "Backend authentication will be connected next."
          );

          return;

        }


        /* LOGIN */

        alert(
          "Login UI is working. " +
          "Authentication backend will be connected next."
        );

      }
    );

  }


  /* -----------------------------------------
     FORGOT PASSWORD
  ----------------------------------------- */

  if (forgotPasswordBtn) {

    forgotPasswordBtn.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        alert(
          "Password recovery will be connected with the Authentication Engine."
        );

      }
    );

  }


  /* -----------------------------------------
     GOOGLE LOGIN
  ----------------------------------------- */

  if (googleLoginBtn) {

    googleLoginBtn.addEventListener(
      "click",
      function () {

        handleSocialLogin("Google");

      }
    );

  }


  /* -----------------------------------------
     FACEBOOK LOGIN
  ----------------------------------------- */

  if (facebookLoginBtn) {

    facebookLoginBtn.addEventListener(
      "click",
      function () {

        handleSocialLogin("Facebook");

      }
    );

  }


  /* -----------------------------------------
     SOCIAL LOGIN HANDLER
  ----------------------------------------- */

  function handleSocialLogin(provider) {

    if (
      provider !== "Google" &&
      provider !== "Facebook"
    ) {

      console.error(
        "Unsupported authentication provider:",
        provider
      );

      return;

    }


    alert(
      provider +
      " authentication will be connected in the next Authentication Engine step."
    );

  }


  /* -----------------------------------------
     INITIAL STATE
  ----------------------------------------- */

  updateAuthMode();

});
