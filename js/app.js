'use strict'
let userName=prompt("plz Enter Your Name")
alert("You are welcome "+userName)
let add_greeting=document.getElementById("userName")
add_greeting.innerHTML="Welcome in my websit "+userName
//#region last solve
// alert("I will ask 5 questions As part of a survey \n please answer as follows \n Your answer should be \n Y or N \n Yes Or No")

// let questions=["Are you more than 25 years old?",
// "Do you spend most of your time on social media?",
// "Have you used GitHub before?",
// "Do you hold your phone first when you wake up?",
// "Have you tried isolation from technology before?"]

// let q=new Array()
// for (let i = 0; i < questions.length; i++) 
// {
//  q.push(prompt(questions[i]).toLowerCase())
// }

// for (let i = 0; i < q.length; i++) 
// {
    
// switch (q[i]) {
//     case "y":
//         case "yes":
//         alert(`question ${i+1} is YES`)
//         console.log(`The answer is ${q[i]}`)
//         break;
//     case "n":
//         case "no":
//         alert(`question ${i+1} is NO`)
//         console.log(`The answer is ${q[i]}`)
//         break;
//     default:
//         alert(`Opps ..question ${i+1} You entered something different`)
//         console.log(`The answer is ${q[i]}`)
//         break;
//     }
// }
//#endregion

let btn=document.getElementById("btn")


    alert(`Hello again ${userName} \n please read my bio and answer the questions`)
    alert(`I wil ask you 5 questions and you will answer me Yes || No \n you can write Y || N`)
    alert('When you have finished reading the bio, press the start quiz button below')

    let question =['Did I graduate from Yarmouk University?','Have I been studying web developmen since 2009?','Am I a Sitecore Certified Professional Web Developer ?','Do I study chemistry in my spare time?','Do I have a desire to quit my profession?']
    let q=new Array()
    let num_yes=0
    let num_no=0
   

    function start_quiz()
    {
        for (let i = 0; i < question.length; i++) 
        {
                q.push(prompt(question[i]).toLowerCase())
                
                if(q[i] === 'y' || q[i] === 'yes' || q[i] === 'n' || q[i] === 'no')
                {
                    alert(` your answer is ${q[i]}`)
                    console.log(q[i])
                    switch (q[i]) {
                        case 'y':
                            case 'yes':
                                num_yes++
                            break;
                        case 'n' :
                            case 'no':
                                num_no++
                        default:
                            break;
                    }
                }
                else
                {
                    alert("You Entered Something Wrong \n The website will reload to try again")
                    window.location.reload()
                    break;
                }
        }
     alert(`you answered YES ${num_yes} times`)
     alert(`you answered NO ${num_no} times`)
    
    }
btn.addEventListener("click",start_quiz)   
