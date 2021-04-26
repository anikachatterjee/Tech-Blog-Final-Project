// This listens for changes in auth status and will do actions
// accordingly.  



function signUp() {
    var email = document.getElementById("email").value;
    console.log("Clicked signup with " + email);

    auth.createUserWithEmailAndPassword(email).then(() => {
        console.log("Signed up: " + email);
    }).catch(e => console.log(e.message));

    document.write("You have successfully signed up for the newsletter!")
}


db.collection('newsletterUsers').add({        
    
}).catch(e => console.log(e.message));

