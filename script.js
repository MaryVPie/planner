// shows header date and time
function headerDate() {
    var currentHeaderDate = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentHeaderDate);
}

headerDate();

//rows array
var rowsPlanner= [
    {
        id: 1,
        wasPassed: false,
        text: "9 AM"
    },
    
    {
        id: 2,
        wasPassed: false,
        text: "10 AM"
    },

    {
        id: 3,
        wasPassed: false,
        text: "11 AM"
    },

    {
        id: 4,
        wasPassed: false,
        text: "12 PM"
    },

    {
        id: 5,
        wasPassed: false,
        text: "1 PM"
    },

    {
        id: 6,
        wasPassed: false,
        text: "2 PM"
    },

    {
        id: 7,
        wasPassed: false,
        text: "3 PM"
    },

    {
        id: 8,
        wasPassed: false,
        text: "4 PM"
    },

    {
        id: 9,
        wasPassed: false,
        text: "5 PM"
    }
]



//clonnig and adding new rows with different id
for (let idx = 0; idx < rowsPlanner.length; idx++) {
    const rowData = rowsPlanner[idx];

    var threeColumnsTable$ = $('#template').clone();

    threeColumnsTable$.attr("id", rowData.id);

//   threeColumnsTable$ how to remove class jquery
    threeColumnsTable$.removeClass("hidden");
    
    // puts time in column 1. 
    $("div:first-child", threeColumnsTable$).html(rowData.text);

    $("div:nth-child(2)", threeColumnsTable$).addClass("future");


    // adds cloned row at the end of container
    $(".container").append(threeColumnsTable$);
}

//saves time and text
function savings() {

    debugger;
    let textRow = document.querySelector("#myText");

    const textEvent = {
        time: moment(),
        planForTime: textRow.value
    };

    let K = time + textEvent.planForTime;
    window.localStorage.setItem(K, JSON.stringify(textEvent));

    const timeT = localStorage.getItem(K);
    console.log(JSON.parse(timeT));
    console.log(textEvent);

     
}















