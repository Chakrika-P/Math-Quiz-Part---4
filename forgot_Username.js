function Forgot(){
    username_input1=localStorage.getItem("username_input1");
    console.log("username1 : " + username_input1);
    password_input1=localStorage.getItem("password_input1");
    console.log("password1 : " + password_input1);
    username_input2=localStorage.getItem("username_input2");
    console.log("username2 : " + username_input2);
    password_input2=localStorage.getItem("password_input2");
    console.log("password2 : " + password_input2);
    user1_info="<h1> Username 1 is : " + username_input1 + "<br> Password 1 is : " + password_input1 + "</h1>";
    user2_info=" <br> <h1> Username 2 is : " + username_input2 + "<br> Password 2 is : " + password_input2 + "</h1>";
    update=user1_info + user2_info;
    console.log(update);
    document.getElementById("update").innerHTML=update;
}