'use strict'
//#region lab02
let score=0;
let userName=prompt("plz Enter Your Name")
alert("You are welcome "+userName)
let add_greeting=document.getElementById("userName")
add_greeting.innerHTML="Welcome in my websit "+userName

let btn=document.getElementById("btn")
let btn1=document.getElementById("btn1")


    alert(`Hello again ${userName} \n please read my bio and answer the questions`)
    alert(`I wil ask you 5 questions and you will answer me Yes || No \n you can write Y || N`)
    alert('When you have finished reading the bio, press the start quiz lab02 button below')

    let question =['Did I graduate from Yarmouk University?','Have I been studying web developmen since 2009?','Am I a Sitecore Certified Professional Web Developer ?','Do I study chemistry in my spare time?','Do I have a desire to quit my profession?']
    let q=new Array()
    let num_yes=0
    let num_no=0
    let answers=['no','yes','yes','no','no']

    function lab02()
    {
        for (let i = 0; i < question.length; i++) 
        {
            let prom=prompt(question[i]).toLowerCase()
            if (prom == 'y' || prom =='yes')
            {
                q.push('yes')
            }
            else if(prom =='n' || 'no')
            {
                q.push("no")
            }
            else
            {
                alert("You Entered Something Wrong \n The website will reload to try again")
                window.location.reload()
            }
            if(q[i]==answers[i])score++


                
                // if(q[i] === 'y' || q[i] === 'yes' || q[i] === 'n' || q[i] === 'no')
                // {
                //     alert(` your answer is ${q[i]}`)
                //     console.log(q[i])
                //     switch (q[i]) {
                //         case 'y':
                //             case 'yes':
                //                 num_yes++
                //                 score++
                //             break;
                //         case 'n' :
                //             case 'no':
                //                 num_no++
                //         default:
                //             break;
                //     }
                // }
                // else
                // {
                //     alert("You Entered Something Wrong \n The website will reload to try again")
                //     window.location.reload()
                //     break;
                // }
        }
    //  alert(`you answered YES ${num_yes} times`)
    //  alert(`you answered NO ${num_no} times`)
    
    }
   //#endregion
function lab03()
{
    


//#region lab03 -2
alert("Let's play a nice game")
alert("Can you guess what my lucky number is ?")
alert("I'll give you 4 tries to guess")
alert("I'll give you a hint \n The number is greater than 10 and less than 20")

let luckyNum=11

for (let i = 0; i < 4; i++) 
{
    let userNum=parseInt(prompt(`This is the ${i+1} attempt`))
    let num=userNum - 11
    console.log(num)
    if(num >0 && num <=3)
    {
        alert("too low \n You are close to the correct answer")
    }
    else if(num >3)
    {
        alert("too high")
    }
    else if(num == 0)
    {
        alert("Gosh \n You guessed the right number \n It's already 11")  
        score++ 
        break
    }
    else if(num <0)
    {
        alert("You seem to have forgotten that the number is greater than 10")
        alert("I'll give you another try")
        window.location.reload()
        break;
    }
    else
    {
        alert("You Need to add jus a number")
        window.location.reload()
        break;
    }
}
alert("My luck number is 11")
//#endregion 

//#region lab02 -3
alert("Let's test your knowledge about the most famous Jordanian dishes that I like best")
alert("I'll give you 6 tries to guess")


let food=['mansaf','falafel','maqluba','shawarma','fattet hummus']
let y=0
let flag=false
for ( y = 0; y < 6; y++) 
{
   let meal=prompt(`Food Number ${y+1}`).toLowerCase()
   for (let x = 0; x < food.length; x++) 
   {
        if(meal == food[x])
        {
            alert("Right Food")
            score++
            y=10
            flag=true
            break;
        }  
   }  
   if(flag == false) alert("Wrong Food")  
}
alert("The Food are :mansaf,falafel,maqluba,shawarma,fattet hummus ")
alert(`Your Total score is ${score}`)
//#endregion
}

btn.addEventListener("click",lab02)
btn1.addEventListener("click",lab03)
