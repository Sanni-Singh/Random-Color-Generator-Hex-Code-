const parent = document.getElementById('box')
const input = document.getElementById('input')
const button = document.getElementById('button')
// const copy = ;


let val;
input.addEventListener('input', (e)=>{
    parent.innerText = "";
    val = e.target.value;
})

button.addEventListener('click',()=>{
    function generateColor(){
        let option = "0123456789abcdef"
        let makeUp = "#";
        for(let i = 0; i < 6; i++) {
            let suggest = Math.floor(Math.random()* option.length);
            makeUp += option.charAt(suggest);
        }
        return makeUp;
    }
    for(let i = 0; i < val; i++) {
        let ele = document.createElement('div');
        ele.className = "box1";
        let colorTag = document.createElement('p');
        colorTag.className = "system"
        colorTag.style.cssText = " color:white;"
        colorTag.innerText = generateColor();
        ele.appendChild(colorTag)
        ele.style.backgroundColor = ele.innerText;
        parent.appendChild(ele);

        const  copy = document.querySelectorAll(".system");
        copy.forEach(ele => {
            ele.addEventListener('click' , displayColorName)
        });
        
        
    }
})

// parent.addEventListener('click', (e)=>{

//     console.log(e);

//     if(e.target.value != "" || e.target.value >=1){
//         navigator.clipboard.writeText(e.target.value);
//         // icon.innerHTML = "Check"
//         // icon.title = "Passward Copied"


//         // setTimeout(()=>{
//         //     icon.innerHTML = "content_copy";
//         //     icon.title = ""
//         // },4000)
//     }
    
// })

function displayColorName() {
    if(this.innerText !== "" && this.innerText.length >=1){
        navigator.clipboard.writeText(this.innerText);
        
        let currentItem = this;
        let val2 = this.innerText

        this.innerText = "Copied";

        setTimeout(function() {
            currentItem.innerText = val2;
            
        },2000)
    }
}

