'use strict'
let userName=prompt("plz Enter Your Name")
alert("You are welcome "+userName)
let add_greeting=document.getElementById("userName")
add_greeting.innerHTML="Welcome in my websit "+userName

alert("I will ask 5 questions As part of a survey \n please answer as follows \n Your answer should be \n Y or N \n Yes Or No")

let questions=["Are you more than 25 years old?",
"Do you spend most of your time on social media?",
"Have you used GitHub before?",
"Do you hold your phone first when you wake up?",
"Have you tried isolation from technology before?"]
let q=new Array()
for (let i = 0; i < questions.length; i++) 
{
 q.push(prompt(questions[i]).toLowerCase())
}

for (let i = 0; i < q.length; i++) 
{
    
switch (q[i]) {
    case "y":
        case "yes":
        alert(`question ${i+1} is YES`)
        break;
    case "n":
        case "no":
        alert(`question ${i+1} is NO`)
        break;
    default:
        alert(`Opps ..question ${i+1} You entered something different`)
        break;
    }
}