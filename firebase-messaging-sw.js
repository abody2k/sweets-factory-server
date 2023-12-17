importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: 'AIzaSyDHdHiciIH1qrmyeHZZtBfIbG58n4FdHVY',
    appId: '1:564493215720:web:831de2db472a635392265d',
    messagingSenderId: '564493215720',
    projectId: 'sweets-factory-95a6a',
    authDomain: 'sweets-factory-95a6a.firebaseapp.com',
    storageBucket: 'sweets-factory-95a6a.appspot.com',
    measurementId: 'G-8RE9PFJX5S',
});

// const messaging = firebase.messaging();

// firebase.initializeApp({
//     'messagingSenderId': '40911931240'
//   });
  
  // Retrieve an instance of Firebase Messaging so that it can handle background
  // messages.
  const messaging = firebase.messaging();
  // [END initialize_firebase_in_sw]
  
  // If you would like to customize notifications that are received in the
  // background (Web app is closed or not in browser focus) then you should
  // implement this optional method.
  // [START background_handler]
  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.'
    };
  
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
  });