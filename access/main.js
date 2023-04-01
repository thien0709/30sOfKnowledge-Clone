const icon = document.querySelector("#notion");
const notion = document.querySelector("#notion h6");
const button = document.querySelectorAll("#tool .more i");
for(let i=0;i<button.length;i++){
    button[i].addEventListener("mouseenter", function(){
        icon.style.transform = 'translateY(2rem)';
    })
}