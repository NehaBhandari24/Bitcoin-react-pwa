export const inicializarFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "848447013519"
  });
  navigator.serviceWorker.register("/my-sw.js").then(registration => {
    firebase.messaging().useServiceWorker(registration);
  });
};
