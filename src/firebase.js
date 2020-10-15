import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyA9gbzr2y8I2bRqvNZq3QpelO1K8-ANiNc",
	authDomain: "facebook-clone-7305d.firebaseapp.com",
	databaseURL: "https://facebook-clone-7305d.firebaseio.com",
	projectId: "facebook-clone-7305d",
	storageBucket: "facebook-clone-7305d.appspot.com",
	messagingSenderId: "897059880579",
	appId: "1:897059880579:web:28217c3c492ea4ed0125b6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
