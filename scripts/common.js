var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");
var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the signUpModal
var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById("signInBtn");

// Get the <span> element that closes the signUpModal
var closeSignUp = document.getElementsByClassName("close")[0];
var closeSignIn = document.getElementsByClassName("close")[1];
var closePostModal = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the signUpModal
signUpBtn.onclick = function() {
    signUpModal.style.display = "block";
}

signInBtn.onclick = function() {
    signInModal.style.display = "block";
}

// When the user clicks on <span> (x), close the signUpModal
closeSignUp.onclick = function() {
    signUpModal.style.display = "none";
}

closeSignIn.onclick = function() {
    signInModal.style.display = "none";
}

closePostModal.onclick = function() {
    createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the signUpModal, close it
window.onclick = function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
    if (event.target == createPostModal) {
        createPostModal.style.display = "none";
    }
}

// in sign In modal not a member? sign up click, open sign up modal
var signUpLink = document.getElementById("signUp");
signUpLink.onclick = function() {
    signInModal.style.display = "none";
    signUpModal.style.display = "block";
}

// Create Post modal

var createPostBtn = document.getElementById("createPost");
createPostBtn.onclick = function() {
    createPostModal.style.display = "block";
}