// this file will connect us with the realtime database on 
// firebase.  The database will be within firestore
// in order to use it, we need to add the firestore SDK link in
// our HTML file and create a firestore const like we did for auth


// This function will show/hide the Student data div based on if
// a valid user is logged in

var emailV;    // values of the input boxes in the HTML

function ready() {
    emailV = document.getElementById('email').value;
}


document.getElementById('signUpButton').onclick = () => {
    ready();

    /*
        We are accessing the collection called student, and adding a new
        document with the following information.  You will notice it is
        similar to how we worked with objects in React Native.
        
        nameV, jerseyNumV, sportV, and positionV are the values the user typed into the
        HTML page and those values were retrieved when we called the function
        ready()
    */

    db.collection('newsletterUsers').add({
        email: emailV,
    }).catch(e => console.log(e.message));
    window.alert("You have succesfully signed up!");
    
}



