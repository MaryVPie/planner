// shows header date and time
let updateInterval = 60000 * 30; //  60000 ms (1 min in ms) x 30 minutes
function headerDate() {
    var currentHeaderDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentHeaderDate);
}
setInterval(headerDate, 2000);
headerDate();

//rows array
var rowsPlanner = [
    {
        id: 1,
        text: "9AM",
        hour: 9,
    },

    {
        id: 2,
        text: "10AM",
        hour: 10,
    },

    {
        id: 3,
        text: "11AM",
        hour: 11,
    },

    {
        id: 4,
        text: "12PM",
        hour: 12,
    },

    {
        id: 5,
        text: "1PM",
        hour: 13,
    },

    {
        id: 6,
        text: "2PM",
        hour: 14,
    },

    {
        id: 7,
        text: "3PM",
        hour: 15,
    },

    {
        id: 8,
        text: "4PM",
        hour: 16,
    },

    {
        id: 9,
        text: "5PM",
        hour: 17,
    }
]

//clones and adds new rows with different id
for (let idx = 0; idx < rowsPlanner.length; idx++) {
    const rowData = rowsPlanner[idx];
    var threeColumnsTable$ = $('#template').clone();
    threeColumnsTable$.attr("id", rowData.id);
    //threeColumnsTable$ how to remove class jquery
    threeColumnsTable$.removeClass("hidden");
    // puts time in column 1. 
    $("div:first-child", threeColumnsTable$).html(rowData.text);

    //$("input", threeColumnsTable$).addClass("future");


    let plannerTextInput$ = $("input", threeColumnsTable$);
    var currentHour = moment().hour();
    if (currentHour > rowData.hour) {
        plannerTextInput$.addClass("past");
        plannerTextInput$.attr('readonly', 'readonly');
        $("button", threeColumnsTable$).attr('disabled', true);
    }
    if (currentHour == rowData.hour) {
        plannerTextInput$.addClass("present");
    }
    if (currentHour < rowData.hour) {
        plannerTextInput$.addClass("future");
    }
     //javascript string interpolation
    const ls_key = `${moment().format('MM/DD/YYYY')}_${rowData.id}`;
    //parsing into javascript object
    const storedObject = JSON.parse(localStorage.getItem(ls_key));

    if (storedObject != null) {
        // sets input value from previous session 
        plannerTextInput$.val(storedObject.planForTime);
    }

    // adds cloned row at the end of container
    $(".container").append(threeColumnsTable$);
}

setInterval(function () {
    for (let idx = 0; idx < rowsPlanner.length; idx++) {
        const element = rowsPlanner[idx];
        //javascript string interpolation
        let selectorID = `#${element.id}`; 
        let element$ = $(selectorID);

        let plannerTextInput$ = $("input", element$);
        var currentHour = moment().hour();

        //cleans classes before setting them again
        plannerTextInput$.removeClass("present past future");

        if (currentHour > element.hour) {

            plannerTextInput$.addClass("past");
            //makes button Save and input disabled/read only
            plannerTextInput$.attr('readonly', 'readonly');
            $("button", element$).attr('disabled', true);
        }
        if (currentHour == element.hour) {
            plannerTextInput$.addClass("present");
        }
        if (currentHour < element.hour) {
            plannerTextInput$.addClass("future");
        }
    }
    cleanLocalStorage();

}, updateInterval);

//saves time and text
function savings(button) {

    // event sender wrapped in Jquery
    let this$ = $(button);
    let container$ = this$.parent().parent();

    let textRow = $("input", container$);

    const textEvent = {
        time: moment().format('MM/DD/YYYY, HH:mm'),
        planForTime: textRow.val(),
        id: container$.attr("id")
    };
    //makes key from todays date + ID
    let K = moment().format('MM/DD/YYYY') + "_" + textEvent.id;
    localStorage.setItem(K, JSON.stringify(textEvent));
}

//cleans data from local storage
function cleanLocalStorage() {
    
    for (var i = 0; i < localStorage.length; i++){
        const localStorageKey = localStorage.key(i);
        let currentT = moment().format('MM/DD/YYYY');


        if (localStorageKey.includes(currentT)) {
            continue;
        }
        //removes record which matches the key from local storage 
        localStorage.removeItem(localStorageKey);
        //splits key to get Element Id 
        var underscoreSplit = localStorageKey.split("_");
        const elT = underscoreSplit[1];
        //composing selector
        let D = `#${elT}`;
        //creating JQuery context from element which matches selector D
        let element$ = $(D);
        //pulls input JQuery element from context element$
        let plannerTextInput$ = $("input", element$);
        //writes empty string into input
        plannerTextInput$.val("");
    }
}













