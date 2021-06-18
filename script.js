//rows array
var rowsPlanner= [
    {
        id: 1,
        wasPassed: false,
        text: "9AM"
    },
    
    {
        id: 2,
        wasPassed: false,
        text: "10AM"
    },

    {
        id: 3,
        wasPassed: false,
        text: "11AM"
    },

    {
        id: 4,
        wasPassed: false,
        text: "12PM"
    },

    {
        id: 5,
        wasPassed: false,
        text: "1PM"
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

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }




// shows header date and time
function headerDate() {
    var currentHeaderDate = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentHeaderDate);
}

headerDate();

var threeColumnsTable$ = $('#template').clone();
threeColumnsTable$.attr("id", uuidv4());
var clonedTable$ = $(".container").append(threeColumnsTable$);





// var threeColumnsTable = document.createElement("table");

// threeColumnsTable.setAttribute("hours", "8");
// threeColumnsTable.setAttribute("id", "8");
// threeColumnsTable.setAttribute("personName", "My Name");
// let tableContainer = document.querySelector(".container");
// let tableContainer$ = $(".container")

// threeColumnsTable.classList.add("table");

// var hoursTabl = document.createElement("tr");
// var contentTabl = document.createElement("tr");
// var saveTabl = document.createElement("tr");

// columnTabl.appendChild(hoursTabl);
// columnTabl.appendChild(contentTabl);
// columnTabl.appendChild(saveTabl);


// function viewScore() {
//     //delete the table if it exists
//     var myTbl = document.getElementById("tableResults");
//     if (myTbl != null) {
//       myTbl.remove();
//     }
    
//     var scoreTabl = document.createElement("table");
  
  
//     scoreTabl.setAttribute("id", "tableResults");
  
//     let scoreContainer = document.querySelector("#score-container");
  
//     scoreTabl.classList.add("table");
//     var headerTabl = document.createElement("tr");
//     var scoreTh = document.createElement("th");
//     scoreTh.innerHTML = "Score: ";
//     var nameTh = document.createElement("th");
//     nameTh.innerHTML = "Name: ";
  
//     headerTabl.appendChild(scoreTh);
//     headerTabl.appendChild(nameTh);
//     scoreTabl.appendChild(headerTabl);
  
//     scoreContainer.appendChild(scoreTabl);
  
  
//     for (let i = 0; i < localStorage.length; i++) {
//       let storedValue = localStorage.key(i);
  
//       if (storedValue.includes("user_")) {
  
//         // get item from local storage and convert it to javascript object
//         // call render row passing table and javascript object
//         let jsonRes = localStorage.getItem(storedValue);
//         let personRes = JSON.parse(jsonRes);
  
//         renderRow(scoreTabl, personRes);
  
//       }
//       console.log(`Item at ${i}: ${storedValue}`);
//     }
  
//   }
  
// function renderRow(tblEl, clicker) {
//     var row = document.createElement("tr");
//     var scoreColumn = document.createElement("td");
//     scoreColumn.innerHTML = clicker.scoring;
  
//     var nameColumn = document.createElement("td");
//     nameColumn.innerHTML = clicker.name;
  
//     row.appendChild(scoreColumn);
//     row.appendChild(nameColumn);
//     tblEl.appendChild(row);
//   }