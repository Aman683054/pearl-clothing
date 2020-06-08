import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config= {
    apiKey: "AIzaSyDECxXS4jtP-tgs8ixfXmeG4MU34nqdLLI",
    authDomain: "pearl-clothing-2d0bf.firebaseapp.com",
    databaseURL: "https://pearl-clothing-2d0bf.firebaseio.com",
    projectId: "pearl-clothing-2d0bf",
    storageBucket: "pearl-clothing-2d0bf.appspot.com",
    messagingSenderId: "82741707548",
    appId: "1:82741707548:web:adbe74dce2161da44fb0d9",
    measurementId: "G-BPQZSNHF8X"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exist){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            })
        }catch(error){
            console.log("error creating users");
        }
    }
    return userRef;
}


export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    // console.log(collectionRef)
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
 
    await batch.commit();
}


export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map ((doc) => {
        const {title, items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;