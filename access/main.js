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

// for(let i=0;i<button.length;i++){
//     button[i].addEventListener("mouseenter", function(){
//         icon.style.transform = 'translateY(2rem)';
//     })
// }

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
