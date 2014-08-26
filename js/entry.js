$(document).ready(function() {
    load();

    if (localStorage.length > 0) {
        $("#resultsFirstName").text(JSON.parse(localStorage.firstName));
        $("#resultsLastName").text(JSON.parse(localStorage.lastName));
        $("#resultsEmailAddress").text(JSON.parse(localStorage.emailAddress));
    } else {
        $("#resultsFirstName").html("<em>No first name is stored yet!</em>");
        $("#resultsLastName").html("<em>No last name is stored yet!</em>");
        $("#resultsEmailAddress").html("<em>No email address is stored yet</em>");
    }

    $("#inputFirstName").on('keyup', function() { // Feel as though this can be made into one function instead of three
        $("#resultsFirstName").text($("#inputFirstName").val());
    });
    $("#inputLastName").on('keyup', function() {
        $("#resultsLastName").text($("#inputLastName").val());
    });
    $("#inputEmailAddress").on('keyup', function() {
        $("#resultsEmailAddress").text($("#inputEmailAddress").val());
    });

});

function save() {
    localStorage.firstName = JSON.stringify(document.getElementById("inputFirstName").value);
    localStorage.lastName = JSON.stringify(document.getElementById("inputLastName").value);
    localStorage.emailAddress = JSON.stringify(document.getElementById("inputEmailAddress").value);
}

function load() {
    if (localStorage.length > 0) {
        document.getElementById("inputFirstName").value = JSON.parse(localStorage.firstName);
        document.getElementById("inputLastName").value = JSON.parse(localStorage.lastName);
        document.getElementById("inputEmailAddress").value = JSON.parse(localStorage.emailAddress);
    }
}

function clearLocal() {
    document.getElementById("inputSignUp").reset();
    localStorage.clear();
}
