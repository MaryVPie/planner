// shows header date and time

function getHeaderDate() {
    var currentHeaderDate = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentHeaderDate);
}

getHeaderDate();

