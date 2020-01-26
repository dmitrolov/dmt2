import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const SignUpEmail = (email: string, password: string) => {
  return firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .catch((e: any) => {
    return e
  })
}

export const SignInEmail = (email: string, password: string) => {
  return firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .catch((e: any) => {
    return e
  })
}

export const getAllChars = () => {
  return firebase.firestore()
  .collection('playerCharacters')
  .get()
  .then((characters) => {
    let allChars = [];
    characters.forEach((doc) => {
      allChars.push(doc.data());
    });
    return characters.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  });
};

export default firebase;
