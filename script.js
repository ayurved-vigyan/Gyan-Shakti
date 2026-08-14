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
```javascript
/* =========================================
   GYAN SHAKTI AUTH SYSTEM
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const authModal = document.getElementById("authModal");

const closeAuthModal =
  document.getElementById("closeAuthModal");

const loginScreen =
  document.getElementById("loginScreen");

const registerScreen =
  document.getElementById("registerScreen");

const registerLink =
  document.getElementById("registerLink");

const backToLogin =
  document.getElementById("backToLogin");

const loginForm =
  document.getElementById("loginForm");

const registerForm =
  document.getElementById("registerForm");

const profilePhoto =
  document.getElementById("profilePhoto");

const profilePhotoImage =
  document.getElementById("profilePhotoImage");

const profilePhotoIcon =
  document.getElementById("profilePhotoIcon");

const passwordMessage =
  document.getElementById("passwordMessage");


/* =========================================
   OPEN AUTH MODAL
========================================= */

function openAuthModal() {

  if (!authModal) return;

  authModal.classList.add("active");

  authModal.setAttribute(
    "aria-hidden",
    "false"
  );

  showLoginScreen();

}


/* =========================================
   CLOSE AUTH MODAL
========================================= */

function closeAuthModalFunc() {

  if (!authModal) return;

  authModal.classList.remove("active");

  authModal.setAttribute(
    "aria-hidden",
    "true"
  );

}


/* =========================================
   LOGIN SCREEN
========================================= */

function showLoginScreen() {

  if (!loginScreen || !registerScreen) return;

  loginScreen.classList.remove("hidden");

  registerScreen.classList.add("hidden");

}


/* =========================================
   REGISTRATION SCREEN
========================================= */

function showRegisterScreen() {

  if (!loginScreen || !registerScreen) return;

  loginScreen.classList.add("hidden");

  registerScreen.classList.remove("hidden");

}


/* =========================================
   LOGIN BUTTON
========================================= */

const loginButtons =
  document.querySelectorAll(".login-btn");


loginButtons.forEach(function(button) {

  button.addEventListener(
    "click",
    openAuthModal
  );

});


/* =========================================
   CLOSE BUTTON
========================================= */

if (closeAuthModal) {

  closeAuthModal.addEventListener(
    "click",
    closeAuthModalFunc
  );

}


/* =========================================
   REGISTER HERE
========================================= */

if (registerLink) {

  registerLink.addEventListener(
    "click",
    function(event) {

      event.preventDefault();

      showRegisterScreen();

    }
  );

}


/* =========================================
   BACK TO LOGIN
========================================= */

if (backToLogin) {

  backToLogin.addEventListener(
    "click",
    function(event) {

      event.preventDefault();

      showLoginScreen();

    }
  );

}


/* =========================================
   CLICK OUTSIDE
========================================= */

if (authModal) {

  authModal.addEventListener(
    "click",
    function(event) {

      if (event.target === authModal) {

        closeAuthModalFunc();

      }

    }
  );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closeAuthModalFunc();

    }

  }
);


/* =========================================
   PROFILE PHOTO PREVIEW
========================================= */

if (profilePhoto) {

  profilePhoto.addEventListener(
    "change",
    function(event) {

      const file =
        event.target.files[0];

      if (!file) return;


      /* File type validation */

      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
      ];


      if (!allowedTypes.includes(file.type)) {

        alert(
          "Please select a JPG, PNG or WEBP image."
        );

        profilePhoto.value = "";

        return;

      }


      /* File size validation */

      const maxSize =
        5 * 1024 * 1024;


      if (file.size > maxSize) {

        alert(
          "Profile photo must be smaller than 5 MB."
        );

        profilePhoto.value = "";

        return;

      }


      /* Preview */

      const reader =
        new FileReader();


      reader.onload =
        function(e) {

          profilePhotoImage.src =
            e.target.result;

          profilePhotoImage.classList.remove(
            "hidden"
          );

          profilePhotoIcon.classList.add(
            "hidden"
          );

        };


      reader.readAsDataURL(file);

    }
  );

}


/* =========================================
   PASSWORD MATCH
========================================= */

function checkPasswordMatch() {

  const password =
    document.getElementById(
      "registerPassword"
    );

  const confirmPassword =
    document.getElementById(
      "confirmPassword"
    );


  if (!password || !confirmPassword) {
    return false;
  }


  if (!confirmPassword.value) {

    passwordMessage.textContent = "";

    return false;

  }


  if (
    password.value !==
    confirmPassword.value
  ) {

    passwordMessage.textContent =
      "Passwords do not match.";

    passwordMessage.style.color =
      "#dc2626";

    return false;

  }


  passwordMessage.textContent =
    "Passwords match.";

  passwordMessage.style.color =
    "#16a34a";

  return true;

}


const passwordInput =
  document.getElementById(
    "registerPassword"
  );


const confirmPasswordInput =
  document.getElementById(
    "confirmPassword"
  );


if (passwordInput) {

  passwordInput.addEventListener(
    "input",
    checkPasswordMatch
  );

}


if (confirmPasswordInput) {

  confirmPasswordInput.addEventListener(
    "input",
    checkPasswordMatch
  );

}


/* =========================================
   LOGIN FORM
========================================= */

if (loginForm) {

  loginForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      /*
        REAL LOGIN WILL BE CONNECTED
        TO AUTHENTICATION SERVICE
        IN THE NEXT STEP.
      */

      alert(
        "Login authentication will be connected next."
      );

    }
  );

}


/* =========================================
   REGISTRATION FORM
========================================= */

if (registerForm) {

  registerForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      /* Password check */

      if (!checkPasswordMatch()) {

        alert(
          "Please make sure both passwords match."
        );

        return;

      }


      /* Terms check */

      const termsCheckbox =
        document.getElementById(
          "termsCheckbox"
        );


      if (
        !termsCheckbox ||
        !termsCheckbox.checked
      ) {

        alert(
          "Please accept the Terms and Privacy Policy."
        );

        return;

      }


      /*
        IMPORTANT:

        अभी account वास्तव में create नहीं होगा।

        अगले चरण में इस form को
        secure authentication + database
        से connect किया जाएगा।
      */

      alert(
        "Registration form is ready for secure account integration."
      );

    }
  );

}


/* =========================================
   GOOGLE AUTH BUTTONS
========================================= */

const googleLoginBtn =
  document.getElementById(
    "googleLoginBtn"
  );

const googleRegisterBtn =
  document.getElementById(
    "googleRegisterBtn"
  );


function startGoogleAuthentication() {

  /*
    Google OAuth / Firebase Authentication
    will be connected here.

    DO NOT collect or handle Google
    passwords manually.
  */

  alert(
    "Google authentication will be connected in the secure authentication step."
  );

}


if (googleLoginBtn) {

  googleLoginBtn.addEventListener(
    "click",
    startGoogleAuthentication
  );

}


if (googleRegisterBtn) {

  googleRegisterBtn.addEventListener(
    "click",
    startGoogleAuthentication
  );

}


/* =========================================
   FACEBOOK AUTH BUTTONS
========================================= */

const facebookLoginBtn =
  document.getElementById(
    "facebookLoginBtn"
  );

const facebookRegisterBtn =
  document.getElementById(
    "facebookRegisterBtn"
  );


function startFacebookAuthentication() {

  /*
    Facebook OAuth will be connected
    through the official authentication
    provider configuration.
  */

  alert(
    "Facebook authentication will be connected in the secure authentication step."
  );

}


if (facebookLoginBtn) {

  facebookLoginBtn.addEventListener(
    "click",
    startFacebookAuthentication
  );

}


if (facebookRegisterBtn) {

  facebookRegisterBtn.addEventListener(
    "click",
    startFacebookAuthentication
  );

}
```
