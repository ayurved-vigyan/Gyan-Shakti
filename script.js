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
// Toggle between Login and Register Mode
const registerToggleBtn = document.getElementById("registerToggleBtn");
const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");
const submitBtnText = document.getElementById("submitBtnText");
const toggleText = document.getElementById("toggleText");

let isRegisterMode = false;

if (registerToggleBtn) {
  registerToggleBtn.addEventListener("click", function(e) {
    e.preventDefault();
    isRegisterMode = !isRegisterMode;

    if (isRegisterMode) {
      authTitle.textContent = "CREATE ACCOUNT";
      authSubtitle.textContent = "Join Gyan Shakti & start learning today.";
      submitBtnText.textContent = "Sign Up";
      toggleText.innerHTML = `Already have an account? <a href="#" id="registerToggleBtn">Login here</a>`;
    } else {
      authTitle.textContent = "GYAN SHAKTI";
      authSubtitle.textContent = "Welcome back! Please login to your account.";
      submitBtnText.textContent = "Sign In";
      toggleText.innerHTML = `Don't have an account? <a href="#" id="registerToggleBtn">Register here</a>`;
    }
    
    // Re-bind event to newly created toggle link
    document.getElementById("registerToggleBtn").addEventListener("click", arguments.callee);
  });
}

// Social Login Handler Function
function handleSocialLogin(provider) {
  alert(`${provider} Authentication integration will be connected with Firebase/Supabase in the next step!`);
}
