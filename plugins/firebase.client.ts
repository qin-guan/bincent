import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoqB2gVYm9B8nEPvvAGp8FHYZ8-uC-10A",
  authDomain: "bincent1.firebaseapp.com",
  projectId: "bincent1",
  storageBucket: "bincent1.appspot.com",
  messagingSenderId: "707814235776",
  appId: "1:707814235776:web:8f4b5a19100c46c4f81065"
};

export default defineNuxtPlugin(() => {
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  auth.useDeviceLanguage()

  return {
    provide: {
      firebase: {
        auth,
      }
    }
  }
})
