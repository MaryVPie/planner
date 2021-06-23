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
        text: "9 AM",
        hour: 9,
    },
    
    {
        id: 2,
        text: "10 AM",
        hour: 10,
    },

    {
        id: 3,
        text: "11 AM",
        hour: 11,
    },

    {
        id: 4,
        text: "12 PM",
        hour: 12,
    },

    {
        id: 5,
        text: "1 PM",
        hour: 13,
    },

    {
        id: 6,
        text: "2 PM",
        hour: 14,
    },

    {
        id: 7,
        text: "3 PM",
        hour: 15,
    },

    {
        id: 8,
        text: "4 PM",
        hour: 16,
    },

    {
        id: 9,
        text: "5 PM",
        hour: 17,
    }
]

//clone and adding new rows with different id
for (let idx = 0; idx < rowsPlanner.length; idx++) {
    const rowData = rowsPlanner[idx];

    var threeColumnsTable$ = $('#template').clone();

    threeColumnsTable$.attr("id", rowData.id);

    //threeColumnsTable$ how to remove class jquery
    threeColumnsTable$.removeClass("hidden");
    
    // puts time in column 1. 
    $("div:first-child", threeColumnsTable$).html(rowData.text);

    //$("input", threeColumnsTable$).addClass("future");

    var currentHour = moment().hour();
    //debugger;
    if (currentHour > rowData.hour) {
        $("input", threeColumnsTable$).addClass("past");
        $("input", threeColumnsTable$).attr('readonly', 'readonly');
        $("button", threeColumnsTable$).attr('disabled', true);
    } 
    if (currentHour == rowData.hour) {
        $("input", threeColumnsTable$).addClass("present"); 
    }
    if (currentHour < rowData.hour) {
        $("input", threeColumnsTable$).addClass("future"); 
    }


    // adds cloned row at the end of container
    $(".container").append(threeColumnsTable$);
}

//saves time and text
function savings() {

    
    let textRow = document.querySelector("#myText");

    const textEvent = {
        time: moment(),
        planForTime: textRow.value
    };

    let K = textEvent.time + textEvent.planForTime;
    localStorage.setItem(K, JSON.stringify(textEvent));

    const timeT = localStorage.getItem(K);
    console.log(JSON.parse(timeT));
    console.log(textEvent);
     
}















