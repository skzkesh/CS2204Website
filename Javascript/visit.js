var myForm = document.getElementById("VisitForm");

function validateForm(event) {
    event.preventDefault();
    var dateCheck = document.getElementById('dateid');
    var timeCheck = document.getElementById('selectTime');
    var visitorCheck = document.getElementById('visitorsid');
    var date = dateCheck.value;
    var time = timeCheck.value;
    var no = visitorCheck.value;

    var errorElements = document.querySelector('.fromerror');
    errorElements.style.color = "red";
    errorElements.style.textAlign = "center";
    if (dateCheck.value == '' || dateCheck.value == null) {
        errorElements.innerHTML = "Data not completed; please re-enter.";
    }
    else if (visitorCheck.value == '' || visitorCheck.value == null) {
        errorElements.innerHTML = "Data not completed; please re-enter.";
    }
    else if (visitorCheck.value < 1) {
        errorElements.innerHTML = "Please enter a valid number of people!";
    }
    else {
        errorElements.innerHTML = "";
        var reservationStatus = reserve(date, time, no);
        if (reservationStatus) {
            alert("Your reservation is successful");
        }
        else {
            alert("Sorry, the reservation is full");
        }

    }
}

myForm.addEventListener('submit', validateForm);
