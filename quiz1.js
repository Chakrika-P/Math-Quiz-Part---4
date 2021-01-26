function addUser(){
    username_input1=document.getElementById("username_input1").value;
    password_input1=document.getElementById("password_input1").value;
    username_input2=document.getElementById("username_input2").value;
    password_input2=document.getElementById("password_input2").value;

    localStorage.setItem("username_input1", username_input1);
    localStorage.setItem("password_input1", password_input1);
    localStorage.setItem("username_input2", username_input2);
    localStorage.setItem("password_input2", password_input2);
    window.location = "quiz2.html";
}

function Forgot_Username_and_Password(){
    window.location="forgot_Username_and_Password.html";
}
