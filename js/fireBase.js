var app_fireBase = {};

(function(){
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAEA0cqPv6NTH5GKqi4UOa778d8EeiwwRo",
    authDomain: "form2-a45bb.firebaseapp.com",
    projectId: "form2-a45bb",
    storageBucket: "form2-a45bb.appspot.com",
    messagingSenderId: "362859306921",
    appId: "1:362859306921:web:ef1b26ac9902fe853a6eb8"
  };
  firebase.initializeApp(firebaseConfig);

  app_fireBase =  firebase;
})()