let box=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msgContainer=document.querySelector(".msg");
let message=document.querySelector("#message");
let newbtn=document.querySelector(".newGame");

turnO=true; //for O

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