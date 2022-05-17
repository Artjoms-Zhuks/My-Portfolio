const header = document.querySelector("header");



// Sticky Navbar

function stickyNavbar()
{
    header.classList.toggle("scrolled",window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener("scroll",stickyNavbar); 



//ScrollReveal Animation
let sr= ScrollReveal({
    duration :2500,
    distance: "60px",
});
sr.reveal(".container_text",{delay:300});
sr.reveal(".photo",{origin: "top",delay:600});



//Send Email

//! Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCbbcW_SOTwkQraEn7VcGozz_aVhqJWDbY",
    authDomain: "portfolioartemzhuk.firebaseapp.com",
    databaseURL: "https://portfolioartemzhuk-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolioartemzhuk",
    storageBucket: "portfolioartemzhuk.appspot.com",
    messagingSenderId: "543904203069",
    appId: "1:543904203069:web:227fe0afa65021c5b8c554",
    measurementId: "G-XE8L94KS9T"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference ContactInfo collection
let contactInfo = firebase.database().ref("infos");

document.querySelector(".contactSendMessage").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    
    //Get input Values

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    console.log(name,email,subject,message);   

    saveContactInfo(name,email,subject,message);
    document.querySelector(".contactSendMessage").reset();
}
//Save infos to Firebase

function saveContactInfo(name,email,subject,message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}
