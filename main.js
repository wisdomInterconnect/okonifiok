 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 //  var firebaseConfig = {
 //      apiKey: "AIzaSyBAKo6fXgSUR1IuR5HND5VwDjonS4iVZaM",
 //      authDomain: "userinfor-f26dd.firebaseapp.com",
 //      projectId: "userinfor-f26dd",
 //      storageBucket: "userinfor-f26dd.appspot.com",
 //      messagingSenderId: "777844970628",
 //      appId: "1:777844970628:web:26e7b2880785090ae25ed1",
 //      measurementId: "G-YVFJGWEBT5"
 //  };
 // Initialize Firebase
 //  firebase.initializeApp(firebaseConfig);
 //  firebase.analytics();
 //listen for submit
 document.getElementById('contact-form').addEventListener('submit', sendMessage);
 //send message
 function sendMessage($event) {
     $event.preventDefault();
     //get input value
     let name1 = document.getElementById('name').value;
     let email = document.getElementById('email').value;
     let project = document.getElementById('project').value;
     let textArea = document.getElementById('textarea').value;
     let saveContact = { name1, email, project, textArea };
     console.log(saveContact);
     console.log(name1);
     sendEmail(name1, email, project, textArea);
     document.getElementById('name').value = "";
     document.getElementById('email').value = "";
     document.getElementById('project').value = "";
     document.getElementById('textarea').value = "";
     console.log(name1, 'huygtrfhuygtruhytr');

     console.log(sendEmail);
 }
 //submit button
 let name1 = document.getElementById('name').value
 console.log(name1);
 let email = document.getElementById('email').value
 console.log(email);
 let project = document.getElementById('project').value
 console.log(project);
 let textArea = document.getElementById('textarea').value
 console.log(textArea);
 let message = document.getElementById('submit')
 console.log(message);


 //testing
 function sendEmail(name1, email, project, textArea) {
     if (name1.value === "" || email.value === "" || project.value === "" || textArea.value === "") {
         swal({
             title: "Good job!",
             text: "You clicked the button!",
             icon: "error",
             button: "Aww yiss!",
         });
         return false
     }
     Email.send({
             Host: "smtp.gmail.com",
             Username: "okonifi@gmail.com",
             Password: "wfnqdwpnbgvdhajj",
             To: "okonifi@gmail.com",
             From: "okonifi@gmail.com",
             Subject: `${name1} sent you a message`,
             Body: `Name: ${name1} <br/> Email: ${email} <br/> Project: ${project} <br/> TextArea: ${textArea}`,
         })
         .then(function(message) {
             swal({
                 title: "Good job!",
                 text: "Mail sent successfully!",
                 icon: "success",
                 button: "ok",
             });
         });
 }




 //menu show y hidden
 const navMenu = document.getElementById('nav-menu'),
     toggleMenu = document.getElementById('nav-toggle'),
     closeMenu = document.getElementById('nav-close')
     //show
 toggleMenu.addEventListener('click', () => {
     navMenu.classList.toggle('show')
 })
 closeMenu.addEventListener('click', () => {
         navMenu.classList.remove('show')
     })
     //remove menu
 const navLink = document.querySelectorAll('.nav_link')

 function linkAction() {
     navMenu.classList.remove('show')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))
     //scroll sections sctive link
 const sections = document.querySelectorAll('section[id]')
 window.addEventListener('scroll', scrollActive)

 function scrollActive() {
     const scrollY = window.pageYOffset
     sections.forEach(current => {
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop - 50
         sectionId = current.getAttribute('id')
         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')

         } else {
             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
         }
     })

 }