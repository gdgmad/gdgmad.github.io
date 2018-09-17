(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD8IXHP-yYqqmhr9TH78ytc8M_4twB85Vc",
        authDomain: "madmeetup-65920.firebaseapp.com",
        databaseURL: "https://madmeetup-65920.firebaseio.com",
        projectId: "madmeetup-65920"
    };

    firebase.initializeApp(config);
    var database = firebase.database();
    var ids = ['event.registration-link', 'event.date', 'event.time', 'event.venue'];
    database.ref('events').on('value', function (snapshot)
    {
        var data = snapshot.val();
        console.log(data);
        document.getElementById(ids[0])
        for (var i = 0; i < ids.length; i++)
        {
            var element = document.getElementById(ids[i]);
            if(element.tagName === "SPAN")
            {
                element.innerHTML = data[ids[i].split(".")[1]];
            }
            else if(element.tagName === "A")
            {
                element.href = data[ids[i].split(".")[1]];
            }
        }
    });
})(firebase);
