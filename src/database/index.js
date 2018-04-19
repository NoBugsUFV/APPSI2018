import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCmjcAHnClEeU6Fkjx-QCua0VhEgeoxGgM",
    authDomain: "appsi-nb.firebaseapp.com",
    databaseURL: "https://appsi-nb.firebaseio.com",
    projectId: "appsi-nb",
    storageBucket: "appsi-nb.appspot.com",
    messagingSenderId: "277173428621"
};

const app = Firebase.initializeApp(config)

const db = app.database()

// Faltando autentoicação aqui
// app.auth().

const users = db.ref('/users')

export { db, users }