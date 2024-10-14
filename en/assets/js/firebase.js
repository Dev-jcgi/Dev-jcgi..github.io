const firebaseConfig = {
    apiKey: "AIzaSyBS5UgOQfNS8GJHaOYEBMqOn_XWksNeNVs",
    authDomain: "jcgi-lat.firebaseapp.com",
    projectId: "jcgi-lat",
    storageBucket: "jcgi-lat.appspot.com",
    messagingSenderId: "1014138642913",
    appId: "1:1014138642913:web:3777726e51c4d06f2f32a0",
    measurementId: "G-R9BMCE3CKC"
  };
  

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Escuchar el evento de envío del formulario
document.getElementById('wf-form-Footer-Subscribe-Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener el valor del correo electrónico
    var email = document.getElementById('Footer-Email').value;

    // Agregar el correo electrónico a Firestore
    db.collection("subscribers").add({
        email: email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function() {
        // Mostrar mensaje de éxito
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    })
    .catch(function(error) {
        // Mostrar mensaje de error
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    });
});


document.getElementById('wf-form-Footer-Subscribe-Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    var email = document.getElementById('Footer-Email').value;

    // Hacer una solicitud AJAX
    fetch('/subscribe.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'email=' + encodeURIComponent(email)
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            document.querySelector('.success-message').style.display = 'block';
            document.querySelector('.error-message').style.display = 'none';
        } else {
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.success-message').style.display = 'none';
        }
    })
    .catch(error => {
        document.querySelector('.error-message').style.display = 'block';
    });
});