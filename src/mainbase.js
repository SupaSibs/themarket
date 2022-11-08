'use strict';

import { initializeApp } from 'firebase/app';
import {
getAuth,
/*onAuthStateChanged,
GoogleAuthProvider,
signInWithPopup,
signOut,*/
} from 'firebase/auth';
import {
getFirestore,
/*collection,
addDoc,
query,
orderBy,
limit,
onSnapshot,
setDoc,
updateDoc, 
doc,
serverTimestamp,*/
} from 'firebase/firestore';
import {
getStorage,
/*ref,
uploadBytesResumable,
getDownloadURL,*/
} from 'firebase/storage';
	
import { getPerformance } from 'firebase/performance';

//TODO:Add Auth Systems	

getPerformance();
