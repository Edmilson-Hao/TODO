var firebaseConfig = {
	apiKey: "AIzaSyDiAVDWrZ-VvnJ_xKtuY_X_Bbblmys4m5U",
	authDomain: "todo-91d7a.firebaseapp.com",
	projectId: "todo-91d7a",
	storageBucket: "todo-91d7a.appspot.com",
	messagingSenderId: "926545345989",
	appId: "1:926545345989:web:df24d2fab738fa78f29fac",
	measurementId: "G-T544N6TP4Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();

var provider = new firebase.auth.GoogleAuthProvider()

var db = firebase.firestore();