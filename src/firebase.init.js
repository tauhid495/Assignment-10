
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWK7yfWHhRgNqvjEWBEAlWYWwD6hY4dyE",
    authDomain: "assignment-10-30146.firebaseapp.com",
    projectId: "assignment-10-30146",
    storageBucket: "assignment-10-30146.appspot.com",
    messagingSenderId: "318184805515",
    appId: "1:318184805515:web:ab3109a1b892467922708e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;