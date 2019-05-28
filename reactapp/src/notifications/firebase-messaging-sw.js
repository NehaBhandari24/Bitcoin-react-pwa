export const inicializarFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "848447013519"
  });
  navigator.serviceWorker.register("../serviceWorker.js").then(registration => {
    firebase.messaging().useServiceWorker(registration);
  });
};
