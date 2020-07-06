import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Adventure } from '../../types/adventure/Adventure';
import { Character } from '../../types/character/Character';

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
      return e;
    });
};

export const SignInEmail = (email: string, password: string) => {
  return firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .catch((e: any) => {
      return e;
    });
};

export const CreateAdventure = (newAdventure: Adventure) => {
  return firebase.firestore()
    .collection('adventures')
    .doc(newAdventure.name)
    .set({ ...newAdventure })
};

export const GetAllUserAdventures: () => Promise<Adventure[]> = () => {
  return firebase.firestore()
    .collection('adventures')
    .get()
    .then(adventures => {
      return adventures.docs.map(doc => {
        return doc.data() as Adventure;
      })
    })
};

export const getCharacter: (docName: string) => Promise<Character | undefined> = async (docName) => {
  const character = await firebase.firestore()
    .collection('playerCharacters')
    .doc(docName)
    .get();
  return character.data() as Character;
}

export const setCharacter = (docName: string, data: Character) => {
  firebase.firestore()
    .collection('playerCharacters')
    .doc(docName)
    .set(data)
}

export const getAllChars = () => {
  return firebase.firestore()
    .collection('playerCharacters')
    .get()
    .then((characters) => {
      return characters.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    });
};

export default firebase;
