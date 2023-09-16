function talk() {
    var user = document.getElementById('userBox').value;
    var chat = document.getElementById("chatArea");
    var temp = chat.innerHTML = "Console: Hello " + user + "<br>"
    var educationvalues = ["10th", "12th", "Graduation", "Post-Grad"];
    var red = chat.innerHTML = temp + "Console: May I know your education" + "<br>";
    DynamicSelected("Choose an education ", "education", educationvalues, "Choose your education: ", true)
}

function DynamicSelected(selectTitle, selectID, educationvalues, labelText, count) {
    var select = document.createElement("select");
    select.name = selectTitle;
    select.id = selectID;

    for (const val of educationvalues) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    var label = document.createElement("label");
    label.innerHTML = labelText;
    document.getElementById("chatArea").appendChild(label).appendChild(select);
    if(count){
        select.onchange = function () { displaySelectedValue() };
    }else{
        select.onchange = function () { displayMarksValue() };
    }
}

function displaySelectedValue() {
    var count = false; 
    const p = document.createElement("p");
    var dropdown = document.getElementById("education");
    var selectedValue = dropdown.options[dropdown.selectedIndex].text;
    console.log("jellvf");
    p.innerText = "Console: You have selected " + selectedValue;
    chatArea.appendChild(p);
    document.getElementById("education").style.display = "none";
    const t = document.createElement("p");
    t.innerText = "Please Enter your marks: ";
    var marksvalues = ["Greater than 90", "Greater than 80", "Greater than 70"
        , "Greater than 60"];
    DynamicSelected("Your marks ", "marks", marksvalues, "Choose your marks: ", count)
    chatArea.appendChild(t);
    const input = document.createElement("input");

}

function displayMarksValue() {
    const p = document.createElement("p");
    var dropdown = document.getElementById("marks");
    var selectedMarks = dropdown.options[dropdown.selectedIndex].text;
    var feedback = ""; 
    var result = ""; 
    if(selectedMarks == "Greater than 80"){
        feedback = "Amazing"; 
        result = "Here are a few good options for you: Bhadia college 1, Bhadiya College 2, Bhadiya college 3"
    }else{
        feedback = "Good"; 
        result = "Here are a few good options for you: Ghatiya college 1, Ghatiya College 2, Ghatiya college 3"
    }
    p.innerText = "Console: You got " + selectedMarks + " Marks which is " + feedback + result;
    chatArea.appendChild(p);
    document.getElementById("marks").style.display = "none";
}

