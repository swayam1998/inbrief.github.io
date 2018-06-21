
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    //document.getElementById("user_div").style.display = "block";
    //document.getElementById("login_div").style.display = "none";
    document.getElementById("logout-li").style.display = "block";
    document.getElementById("login-li").style.display = "none";
   // window.location = "./homePage.html";
    

    


    //var user = firebase.auth().currentUser;

    /*if(user != null){
      var UserUid = user.uid;
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    //cod addition

     
    }*/
  }
  if (user !=null){

    var Useremail=user.email;
    Email.innerHTML+="<span class='nav-item' style='color: #FFFF23F'  id='Email_id'>"+ Useremail + "</span>"

  } else {
    // No user is signed in.

    //document.getElementById("user_div").style.display = "none";
   // document.getElementById("login_div").style.display = "block";
   document.getElementById("logout-li").style.display = "none";
    document.getElementById("login-li").style.display = "block";
    
    

  }
});

function logChange(){
  alert("hi")
  if (flag==0){
    document.getElementById("logItem").innerHTML = "Logout";
  }
}

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
   // window.location = window.destURL || window.location.href;
     //window.location = "./homePage.html";

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  sessionStorage.clear();
   window.location = window.destURL || window.location.href;

  window.location = "./homePage.html";
}


function signUp() {
  // body...
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("error :" + errorMessage);
  window.location = "./homePage.html";

  // ...
});
}
  

  var firestore = firebase.firestore();
  var user = firebase.auth().currentUser;
  var list_div = document.querySelector("#list_div");
  var  UserUid;
      // var smrybtn = document.getElementById("smmrize").value;
     

       function textStore() {
        var text = document.getElementById("output1").value;
        firebase.auth().onAuthStateChanged(function(user) {
          if (user && text != "") {
           var UserUid = user.uid;
           var docRef = firestore.collection('Users').doc(UserUid).collection('Text');
               docRef.add({
                TextSummary : text,
                return: true
            }).then(function(){
            console.log("Text saved!");
            }).catch(function(error){
               console.log("Got an error", error);
           });
        //$('textarea').filter('[id*=textInput]').val('');

   }else{console.log("Errors")}

 //var text = document.getElementById("textInput").val('');

});
}

        
    function authentication(){



      var user = firebase.auth().currentUser;
        var UserUid = user.uid;
       var docRef = firestore.collection('Users').doc(UserUid).collection('Text');
        docRef.onSnapshot(function(querySnapshot){
           querySnapshot.docChanges.forEach(function(change){
             if (change.type === "added") {
              console.log(UserUid);
              list_div.innerHTML += "<div class='list-item'><h3>" +change.doc.data().TextSummary + "</h3></div>"

             }else{
              console.log("Erorrs");
             }

           });
         });
    }

 function refresh(){
  window.location="./savedsmmry.html";
 }
// function Savedsmmry(){
// var user = firebase.auth().currentUser;
// var UserUid = user.uid;
// var docRef = firestore.collection('Users').doc(UserUid).collection('Text');
//         docRef.onSnapshot(function(querySnapshot){
//            querySnapshot.docChanges.forEach(function(change){
//              if (change.type === "added") {
//               console.log(UserUid);
//               list_div.innerHTML += "<div class='list-item'><h3>" +change.doc.data().TextSummary + "</h3></div>"

//              }

//            });
//          });

// }



  

     
    



