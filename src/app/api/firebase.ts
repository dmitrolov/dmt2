import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Adventure } from '../types/adventure';
import { Character } from '../types/adventure/character';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
export const auth: firebase.auth.Auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();

// Autorization
export const SignUpEmail = (email: string, password: string) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .catch((e) => {
      console.log(e);
      // alert(e);
      return e
    });
};

export const SignInEmail = (email: string, password: string) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .catch((e) => {
      console.log(e);
      // alert(e);
      return e
    });
};

export const SignInGoogleAccount = () => {
  
  return auth
    .signInWithPopup(provider)
    .catch((e) => {
      console.log(e);
      alert(e);
      return e
    });

}

// Adventures
export const CreateAdventure = (newAdventure: Adventure) => {
  return firestore
    .collection('adventures')
    .doc(newAdventure.name)
    .set({ ...newAdventure })
};

export const getAdventure: (docName: string) => Promise<Adventure | undefined> = async (docName) => {
  const character = await firestore
    .collection('adventures')
    .doc(docName)
    .get();
  return character.data() as Adventure;
}

export const GetAllUserAdventures: () => Promise<Adventure[]> = () => {
  return firestore
    .collection('adventures')
    .get()
    .then(adventures => {
      return adventures.docs.map(doc => {
        return doc.data() as Adventure;
      })
    })
};

export const setAdventureToDB = (docName: string, data: Adventure) => {
  console.log(data)
  firestore
    .collection('adventures')
    .doc(docName)
    .set(data)
}

// Characters
export const getCharacter: (docName: string) => Promise<Character | undefined> = async (docName) => {
  const character = await firestore
    .collection('playerCharacters')
    .doc(docName)
    .get();
  return character.data() as Character;
}

export const setCharacterToDB = (docName: string, data: Character) => {
  firestore
    .collection('playerCharacters')
    .doc(docName)
    .set(data)
}

export const getAllChars = () => {
  return firestore
    .collection('playerCharacters')
    .get()
    .then((characters) => {
      return characters.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    });
};

export default firebase;
