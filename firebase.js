import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import config from "./config";
import auth from "firebase/compat/auth";
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(config);
} else {
  app = firebase.app();
}

const db = app.firestore();
const authorization = firebase.auth();
export { db, authorization };
