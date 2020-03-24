var firebaseConfig = {
    apiKey: "AIzaSyC80amY5N96FAbzQJruKOn_rm8vNsYz_wo",
    authDomain: "train-scheduler-3a7d4.firebaseapp.com",
    databaseURL: "https://train-scheduler-3a7d4.firebaseio.com",
    projectId: "train-scheduler-3a7d4",
    storageBucket: "train-scheduler-3a7d4.appspot.com",
    messagingSenderId: "637793033256",
    appId: "1:637793033256:web:e4ed8b68fc2ff490aa291d",
    measurementId: "G-82YKTYYWBH"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database();

// var tName = "";
// var destination = "";
// var initTime = 0;
// var frequency = 0;
var nxtArvl = 0;
var minAway = 0;

  db.ref().on("value", function(snapshot) {
      //if data is stored in firebase, set the variables for our train details = our stored values//
      if (snapshot.child("tName").exists()) {
        // Set the variables for highBidder/highPrice equal to the stored values.
        tName = snapshot.val().tName;
      }
  },

  //any firebase errors that may occur
  function(errorObj) {
      console.log("Failed reading" + errorObj.code);
  });

  //will do math here to calculate minutes away and destination arrival time
    //not working. Thinking more math has to be included, not sure of which syntax to use
        $("#minutesAway").val();
        var date = date.val();
        //.val() property is undefined. Tried, 
        date.setMinutes(date.getMinutes() + freq);
        var minAway = snap.child("minutesAway").val();
        
        $("#minutesAway").append("<tr><td>" + minAway + "</td></tr>");


  //submit function
  $("#submit").on("click", function(event){
      event.preventDefault();
        var trainName = $("#name").val();
        var dest = $("#destination").val();
        var fstTime = parseInt($("#time").val());
        var freq = parseInt($("#frequency").val());
        // var nxtArvl = parseInt($("#nextArrival")).val();
        // var minAway = parseInt($("#minutesAway")).val();

        console.log(trainName);
        console.log(dest);
        db.ref().set({
            tName: trainName,
            destination: dest,
            initTime: fstTime,
            frequency: freq,
            minutesAway: minAway
        });

        //data is storing in Firebase correctly!
        //pushing info onto table in html
        var firebaseRef = firebase.database().ref().child("users");

            firebaseRef.on("child_added", snap => {
                
            var tName = snap.child("$deployedName").val();
            var dest = snap.child("#deployedDestination").val();
            var fstTime = snap.child("#deployedArrival").val();
            var freq = snap.child("#deployedFrequency").val();

            $("#trainTable").append("<tr><td>" + tName + "</td><td>" + dest + "</td><td>" + fstTime + "</td><td>" + freq + "</td></tr>");
            });
        //not working :( data is going onto the Firebase correctly, but not pushing the information to the table in the html


//empty the input for the next submit

    })