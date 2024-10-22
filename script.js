const parent = document.getElementById('box')
const input = document.getElementById('input')
const button = document.getElementById('button')


let val;
input.addEventListener('input', (e)=>{
    val = e.target.value;
})
console.log(val);

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
        
    }
})