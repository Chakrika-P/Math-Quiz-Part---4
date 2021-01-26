player1_name=localStorage.getItem("username_input1");
player2_name=localStorage.getItem("username_input2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number_1=document.getElementById("number1").value;
    number_2=document.getElementById("number2").value;
    remove_charAt3=number_1 + "x" + number_2;
    number=number_1 * number_2;


    question_number="<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box="<br> Answer : <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";

    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number").value="";
}

question_turn="Player1";
answer_turn="Player2";

function check(){
    answer=document.getElementById("input_check_box").value;
    console.log("answer - " + answer);
    if(answer==number){
        if(answer_turn=="Player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn=="Player1"){
        question_turn="Player2";
        document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
    }
    else{
        question_turn="Player1";
        document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
    }

    if(answer_turn=="Player1"){
        answer_turn="Player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;
    }
    else{
        answer_turn="Player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML="";
}