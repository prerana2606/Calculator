let btn=document.querySelectorAll("#btn")
let res=document.getElementById("result")
btn.forEach(element=>{
    element.addEventListener("click",function(){
        let text=element.innerHTML;
        res.value+=`${text}`
        // console.log(text)
    }
)})
document.getElementById("equal").addEventListener("click" , function(){
    let ans=eval(res.value)
    res.value=`${ans}`
})
document.getElementById("clr").addEventListener("click",function(){
    res.value="";
})