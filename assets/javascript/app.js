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
var trainId = 0;

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

  //submit function
  $("#submit").on("click", function(event){
      event.preventDefault();
        var trainName = $("#name").val();
        var dest = $("#destination").val();
        var fstTime = $("#time").val();
        var freq = parseInt($("#frequency").val());
        // var nxtArvl = parseInt($("#nextArrival")).val();
        // var minAway = parseInt($("#minutesAway")).val();

                    //will do math here to calculate minutes away and destination arrival time
        //BROKEN. Thinking more math has to be included, not sure of which syntax to use
        //ISSUE: displaying current time + frequency in the "minutes away" instead of the 
            //remaining minutes away from current time
                // $("#minutesAway").val();
                var date = new Date();
                console.log(date)
                //.val() property is undefined. Tried, 
                date.setMinutes(date.getMinutes() + freq);
                console.log(date)
                var minAway = date.getHours() + ":" + date.getMinutes();
                //minAway = snap.child("minutesAway").val();
                console.log(trainName);
                console.log(dest);

        db.ref("trains/" + ("train" + trainId)).set({
            tName: trainName,
            destination: dest,
            initTime: fstTime,
            frequency: freq,
            arrivalTime: minAway
        });
        //this is where I itterate my custom key in the Firebase
         //Data pushed to html table, HOWEVER, when you refresh the page, 
         //it resets the Firebase and overwrites the information...
            //next step is to continue appending data.set() with the correct/next custom key
        trainId++;
        document.getElementById("addTrain").reset();
        //data is storing in Firebase correctly!


    })
        //pushing info onto table in html
        var firebaseRef = firebase.database().ref().child("trains");

            firebaseRef.on("child_added", snap => {
                
            var tName = snap.child("tName").val();
            var dest = snap.child("destination").val();
            var fstTime = snap.child("initTime").val();
            var freq = snap.child("frequency").val();
            var minAway = snap.child("arrivalTime").val();
                

            $("#trainTable").append("<tr><td>" + tName + "</td><td>" + dest + "</td><td>" + fstTime + "</td><td>" + freq + "</td><td>" + minAway + "</td></tr>");
            });
        //IT WORKS!
    

    

//empty the input for the next submit