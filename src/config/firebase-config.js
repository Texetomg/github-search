import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA7L0aDWHAUoAQD86LKFxu6aE5_QUWOcms',
  authDomain: 'interfax-git-search.firebaseapp.com',
  projectId: 'interfax-git-search',
  storageBucket: 'interfax-git-search.appspot.com',
  messagingSenderId: '603971026529',
  appId: '1:603971026529:web:140a81159330f23edbf420',
  measurementId: 'G-SL3MFZ4STW'
};

firebase.initializeApp(firebaseConfig)

export default firebase