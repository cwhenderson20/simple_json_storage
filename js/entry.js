$(document).ready(function() {
    if (loadData());
    else clearLocal();

    $(window).on("storage", onStorageEvent);
});

function onStorageEvent(storageEvent) {
    alert("Storage event!");
}

function saveData() {
    localStorage.firstName = JSON.stringify(document.getElementById("inputFirstName").value);
    localStorage.lastName = JSON.stringify(document.getElementById("inputLastName").value);
    localStorage.emailAddress = JSON.stringify(document.getElementById("inputEmailAddress").value);
}

function loadData() {
    if (localStorage.length > 0) {
        document.getElementById("resultsFirstName").innerHTML = JSON.parse(localStorage.firstName);
        document.getElementById("resultsLastName").innerHTML = JSON.parse(localStorage.lastName);
        document.getElementById("resultsEmailAddress").innerHTML = JSON.parse(localStorage.emailAddress);
        return true;
    }
    return false;
}

function clearLocal() {
    localStorage.clear();
    var nothingStored = "No values are stored yet!";
    document.getElementById("resultsFirstName").innerHTML = nothingStored;
    document.getElementById("resultsLastName").innerHTML = nothingStored;
    document.getElementById("resultsEmailAddress").innerHTML = nothingStored;
}
