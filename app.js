import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCa_0TutKzWpEnxgHARbkGVzA75ld3H5PM",
  authDomain: "prime-chat-d4699.firebaseapp.com",
  databaseURL: "https://prime-chat-d4699-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prime-chat-d4699",
  storageBucket: "prime-chat-d4699.firebasestorage.app",
  messagingSenderId: "199264071866",
  appId: "1:199264071866:web:2d429680312a1209c09283",
  measurementId: "G-S9213TSR00"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", async () => {
  const userEmail = email.value.trim();
  const userPassword = password.value;

  if (!userEmail || !userPassword) {
    message.textContent = "Email and password enter karo.";
    return;
  }

  try {
    await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );

    message.textContent = "Login successful! 🎉";

  } catch (error) {
    message.textContent = error.message;
  }
});

signupBtn.addEventListener("click", async () => {
  const userEmail = email.value.trim();
  const userPassword = password.value;

  if (!userEmail || !userPassword) {
    message.textContent = "Email and password enter karo.";
    return;
  }

  try {
    await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );

    message.textContent = "Account created successfully! 🎉";

  } catch (error) {
    message.textContent = error.message;
  }
});
