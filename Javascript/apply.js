var coe = document.querySelector(".coe");
var engineering = document.querySelector(".eng");
var cos = document.querySelector(".cos");
var science = document.querySelector(".science");
var cois = document.querySelector(".cois");
var IS = document.querySelector(".IS");

engineering.style.display = "block";
coe.style.background = "white";

function myEng() {
    science.style.display = "none";
    IS.style.display = "none";
    cos.style.background = "gray";
    cois.style.background = "gray";
    coe.style.background = "white";
    engineering.style.display = "block";
};

function mySci() {
    engineering.style.display = "none";
    IS.style.display = "none";
    coe.style.background = "gray";
    cois.style.background = "gray";
    cos.style.background = "white";
    science.style.display = "block";
};

function myIS() {
    engineering.style.display = "none";
    science.style.display = "none";
    coe.style.background = "gray";
    cos.style.background = "gray";
    cois.style.background = "white";
    IS.style.display = "block";
};

var cell1, cell2;
var text1, text2; 
var table = document.getElementById("table");
function append(index, text1, text2) {
    cell1 = table.rows[index].cells[0];
    cell1.textContent += text1;
    cell2 = table.rows[index].cells[1];
    cell2.textContent += text2;
};

const dict_major = {
    "CS": "BSc in Computer Science and Technology",
    "MSE": "BEng in Materials Science and Engineering",
    "MC": "BEng in Materials and Chemicals",
    "EI": "BEng in Electronic Information",
    "EST": "BSc in Electronic Science and Technology",
    "PHY": "BSc in Physics BSc in Physics",
    "CHEM": "BSc in Chemistry BSc in Chemistry",
    "BIO": "BSc in Biology BSc in Biology",
    "COGS": "BSc in Cognitive Science",
    "BE": "BEng in Biomedical Engineering",
    "BM": "BSc in Biology and Medicine"
};
const dict_college = {
    "CS": "College of Engineering",
    "MSE": "College of Engineering",
    "MC": "College of Engineering",
    "EI": "College of Engineering",
    "EST": "College of Engineering",
    "PHY": "College of Science",
    "CHEM": "College of Science",
    "BIO": "College of Science",
    "COGS": "College of Interdisciplinary Studies",
    "BE": "College of Interdisciplinary Studies",
    "BM": "College of Interdisciplinary Studies"
};

let choosenrank = [];
let choosenmajor = [];
let max_value = 0;
let submission = document.getElementById("submit_form");
let warning = document.querySelector("#warning");
let noMajor = document.querySelector("#noMajor");
let time = document.querySelector("#time");
warning.style.textAlign = "center";
warning.style.color = "red";

class Major {
    constructor(classCode) {
        this.classCode = classCode;
    }
    major(){
        return dict_major[this.classCode];
    }
    college(){
        return dict_college[this.classCode];
    }
}

function max(choosenrank){
    for(let i = 0; i < choosenrank.length; i++) {
        if (choosenrank[i] == 10) {
            max_value = 10
        }
        else if (choosenrank[i] >= max_value) {
            max_value = choosenrank[i];
        }
    }
    console.log(max_value);
    return max_value;
}

function getRank(ele) {
    let id = ele.id;
    let major_abbv = new Major(id);
    let complete_major = major_abbv.major();
    let complete_college = major_abbv.college();
    let rank = document.querySelector('[name="' + id + '"]').value;
    if (choosenrank.includes(rank)) {
        alert("You have already chosen this rank");
    }
    else if (choosenmajor.includes(complete_major)) {
        alert("You have already chosen this major");
    }
    else {
        if (rank >= 1 && rank <= 10) {
            append(rank, complete_major, complete_college);
            choosenrank.push(rank);
            choosenmajor.push(complete_major);
            if (rank == 1) {
               alert(`You have chosen ${complete_major} as your 1st chosen major in ${complete_college}`);
            }
            else if (rank == 2) {
               alert(`You have chosen ${complete_major} as your 2nd chosen major in ${complete_college}`);
            }
            else if (rank == 3) {
               alert(`You have chosen ${complete_major} as your 3rd chosen major in ${complete_college}`);
            }
            else {
             alert(`You have chosen ${complete_major} as your ${rank}th chosen major in ${complete_college}`);
            }
        }
        else if (rank < 1 || rank > 10) {
            alert("Please enter the rank of chosen between 1 and 10");
        }
         else {
            alert("Please enter the rank of chosen major");
         }
    }
};

function checkSubmit(event) {  
    event.preventDefault();
    updateTable();
    let gap = [];
    max_value = max(choosenrank);
    console.log(max_value); //max_value
    console.log(choosenrank); 
    if (choosenrank.length === 0) {
        warning.innerHTML = "You have not chosen any major";
    }
    else {
        for (let k = 1; k <= max_value; k++) {
            if (!choosenrank.includes(k + "")){
                gap.push(k);
            }
        }};
        console.log(gap);
        if (gap.length !== 0) {
            for (let i = 0; i < gap.length; i++) {
                if (gap[i] == 1) {
                    gap[i] += "st";
                }
                else if (gap[i] == 2) {
                    gap[i] += "nd";
                }
                else if (gap[i] == 3) {
                    gap[i] += "rd";
                }
                else {
                    gap[i] += "th";
                }
            }
            const gapString = gap.join(", ");
            warning.innerHTML = `You have not chosen your ${gapString} chosen major, you can not leave any gap between your majors`;
        }
        else {
            warning.innerHTML = "You have succesfully submitted your application at time" + timeNow;
            }
    }

function updateTable() {
    noMajor.innerHTML = `${choosenrank.length}`;
    var timeNow = new Date().toLocaleTimeString();
    var dateNow = new Date().toLocaleDateString();
    time.innerHTML = dateNow + "  " + timeNow;
};

document.querySelector(".clear_button").addEventListener("click", function(event){
    event.preventDefault();
    for (var i = 1; i<=10; i++) {
        cell1 = table.rows[i].cells[0];
        cell1.textContent = "";
        cell2 = table.rows[i].cells[1];
        cell2.textContent = "";
    }
    updateTable();
    gap = [];
    choosenrank = [];
    choosenmajor = [];
    max_value = 0;
    warning.innerHTML = "";
    noMajor.innerHTML = "";

});

window.addEventListener("load", function() {


submission.addEventListener('submit', checkSubmit);


});