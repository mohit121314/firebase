import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyBILjbAiqMaPTLkC3uKKmAduG8CJCD8qa4",
	authDomain: "assignment-6f67c.firebaseapp.com",
	databaseURL: "https://assignment-6f67c.firebaseio.com",
	projectId: "assignment-6f67c",
	storageBucket: "assignment-6f67c.appspot.com",
	messagingSenderId: "183841835887",
	appId: "1:183841835887:web:6e488e4758ac476c13369a",
	measurementId: "G-Y3TJ9277P0"
}
export const myfirebase = firebase.initializeApp(config);
const baseDb = myfirebase.firestore();
export const db = baseDb;
export default firebase 