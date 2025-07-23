const reset=document.querySelector("#buttonAC");
const percent =document.querySelector("#percent");
const division =document.querySelector("#division");
const seven =document.querySelector("#seven");
const eight =document.querySelector("#eight");
const nine =document.querySelector("#nine");
const multiply =document.querySelector("#multiply");
const four =document.querySelector("#four");
const five =document.querySelector("#five");
const six =document.querySelector("#six");
const subtraction =document.querySelector("#subtraction");
const one =document.querySelector("#one");
const two =document.querySelector("#two");
const three =document.querySelector("#three");
const addition =document.querySelector("#addition");
const zero =document.querySelector("#zero");
const dot =document.querySelector("#dot");
const back =document.querySelector("#back");
const equal =document.querySelector("#equal");
const display=document.querySelector("#screen");
const dot1=document.querySelector("#dot1");

dot1.addEventListener("click",()=>{
    display.append(".");
})
one.addEventListener("click",(event)=>{
    display.append("1");
})
two.addEventListener("click",()=>{
    display.append("2");
})
three.addEventListener("click",()=>{
    display.append("3");
})
four.addEventListener("click",()=>{
    display.append("4");
})
five.addEventListener("click",()=>{
    display.append("5");
})
six.addEventListener("click",()=>{
    display.append("6");
})
seven.addEventListener("click",()=>{
    display.append("7");
})
eight.addEventListener("click",(input)=>{
    display.append("8");
})
nine.addEventListener("click",()=>{
    display.append("9");
})
zero.addEventListener("click",()=>{
    display.append("0");
})
multiply.addEventListener("click",()=>{
    display.append("*");
})
addition.addEventListener("click",()=>{
    display.append("+");
})
subtraction.addEventListener("click",()=>{
    display.append("-");
})
division.addEventListener("click",()=>{
    display.append("/");
})
percent.addEventListener("click",()=>{
    const fromscreen=display.textContent;
    const result=fromscreen.charAt(0);
    const changing_result_to_string=result.toString();
    display.textContent=changing_result_to_string/100;
})
reset.addEventListener("click",()=>{
    display.textContent="";
})
dot.addEventListener("click",()=>{
    display.append(".");
})
back.addEventListener("click",()=>{
    display.textContent=display.textContent.slice(0,-1);
})
equal.addEventListener("click",()=>{
    try {
        const fromscreen=display.textContent;
        const result=eval(fromscreen);
        const changing_result_to_string=result.toString();
        display.append("=");
        display.append(changing_result_to_string);
    } catch (error) {
        display.textContent="Error"
    }  
})
