// Click button 
const bar = document.querySelector("#tool .bar .icon1");
const more = document.querySelector("#tool .more");
const tool =document.querySelector("#tool");
bar.addEventListener("click", function (){
    tool.classList.toggle("active");
    more.classList.toggle("active");
})
// Notification
const icon = document.querySelector("#notion");
const notion = document.querySelector("#notion h6");
const button = document.querySelectorAll("#tool .more i");
const nameBar = document.querySelectorAll("#tool .nameBar h4")
console.log(button, nameBar);
for(let i=0;i<button.length;i++){
    button[i].addEventListener("mouseenter", function(){
        nameBar[i].style.display = flex;
    })
}
// Copy
const copy =document.querySelector(".code .icon");
const copied = document.querySelector("#copied");
const code = document.querySelector("pre");
copy.addEventListener("click", function(){
    navigator.clipboard.writeText(code.textContent);
    copied.classList.add("active");
    setTimeout(() => {
        copied.classList.remove("active");
    }, 1000);
});
