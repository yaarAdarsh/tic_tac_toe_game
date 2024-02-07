let box=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msgContainer=document.querySelector(".msg");
let message=document.querySelector("#message");
let newbtn=document.querySelector(".newGame");
//color mode button
let mode=document.querySelector(".mode");
let body=document.querySelector("body");

let turnO=true; //for O


let dark=()=>{
        body.style.backgroundColor="#0F0606";
        mode.style.backgroundColor="#0F0606";
        mode.style.color="lightgray";
        document.querySelector("h1").style.backgroundColor="#490000";
        document.querySelector("h1").style.color="#7a7a7a";
        for(b of box){
            b.style.backgroundColor="#5D3C18 ";
        }
        // box.style.backgroundColor="black";
        reset.style.backgroundColor="#766B65";
        reset.style.color="#0F0606";
        reset.style.border="2px solid lightgray";

        newbtn.style.backgroundColor="#766B65";
        newbtn.style.color="#0F0606";
        newbtn.style.border="2px solid lightgray";

        message.style.color="white";

        mode.innerText="Dark Mode";
        mode.style.borderColor="lightgray";
        initialMode="light";
    }

let light=()=>{
        body.style.backgroundColor="#e4b363";
        mode.style.backgroundColor="#e4b363";
        mode.style.color="black";
        document.querySelector("h1").style.backgroundColor="aliceblue";
        document.querySelector("h1").style.color="brown";
        for(b of box){
            b.style.backgroundColor="aliceblue";
        }
        // box.style.backgroundColor="#aliceblue"; 
        reset.style.backgroundColor="black";
        reset.style.color="white";
        reset.style.border="none";

        newbtn.style.backgroundColor="black";
        newbtn.style.color="white";
        newbtn.style.border="none";

        message.style.color="black";

        mode.innerText="Light Mode";
        mode.style.borderColor="black";
        initialMode="dark";
    }

const resetGame=()=>{
    turnO=true;
    enableBtn();
    msgContainer.classList.add("hide");
    count=0;
}

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const enableBtn=()=>{
    for(let bx of box){
        bx.disabled=false;
        bx.innerText="";
    }
}
let count=0;
box.forEach((bx) => {
    bx.addEventListener("click",()=>{
        // console.log("Clicked");
        count=count+1;
        // console.log(count);
        if(turnO){
            bx.innerText="O";
            bx.style.color="green";
            turnO=false;
        }
        else
        {
        bx.innerText="X";
        bx.style.color="red";
        turnO=true;
        }
    bx.disabled = true;
    check();
});
});

const showWinner=(winner)=>{
    message.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(bx of box){
        bx.disabled=true;
    }
}

const draw=()=>
{
    message.innerText="It's a Draw!";
    msgContainer.classList.remove("hide");
    for(let bx of box){
        bx.disabled=true;
    }
}
const check=()=>{
    for(let pattern of winPattern){
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3){
                // console.log("Winner",pos1);
                showWinner(pos1);
            }
            else if(count===9){
                draw();
                count=0;
            }
        }
    }
    
}

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

let initialMode="light";
mode.addEventListener("click",()=>{
        if(initialMode==="light"){
            dark();
            initialMode="dark";
        }else{
            light();
            initialMode="light";
        }
    })