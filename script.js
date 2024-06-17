let boxes=document.querySelectorAll(".box");
//let resetBtn=document.getElementById("reset");
let newBtn=document.getElementById("new");
let Xturn=true;
let p=document.getElementById("winner");
const winningSet=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("button clicked");
        
        if(Xturn) {
            box.innerText='X'; 
            Xturn=false;
        }
        else {
            box.innerText='O';
            Xturn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
function enableAll(){
    for (let i of boxes)
        i.disabled=false;
}
function disableAll(){
    for (let i of boxes)
        i.disabled=true;
}

function allFilled(){
    let allFilled=true;
    for(let box of boxes)
        if (box.innerText=='')
            allFilled=false;
    return allFilled;
}

function checkWinner(){
    let flag=false;
    for(let set of winningSet){
        let b1=boxes[set[0]].innerText;
        let b2=boxes[set[1]].innerText;
        let b3=boxes[set[2]].innerText;
        // console.log(b1,b2,b3);
        if(b1!=''&& b2!='' && b3!=''){
            if(b1===b2 && b2=== b3)
            {   p.innerText=`Winner is ${b1}`;
                disableAll();
                flag=true;
            }

        }
    }
    if (flag==false && allFilled()) p.innerText="It's a TIE"
}


newBtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText='';
        });
    enableAll();
});