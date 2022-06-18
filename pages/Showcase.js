var n = 3;
const max = 10;
function dreapta(){
    const showcase = document.getElementsByClassName("showcase");
    if(n < max){
        if(n == 1){
            const btnlf = document.getElementsByClassName("button left");
            btnlf[0].style.display = "";
        }
        n++;
        showcase[0].setAttribute("style", "background-image: url(../images/showcase/" + n.toString() +".JPG)");
        if(n == max){
            const btndr = document.getElementsByClassName("button right");
            btndr[0].style.display = "none";
        }
    }
}
function stanga(){
    const showcase = document.getElementsByClassName("showcase");
    if(n > 1){
        if(n == max){
            const btndr = document.getElementsByClassName("button right");
            btndr[0].style.display = "";
        }
        n--;
        showcase[0].setAttribute("style", "background-image: url(../images/showcase/" + n.toString() +".JPG)");
        if(n == 1){
            const btnlf = document.getElementsByClassName("button left");
            btnlf[0].style.display = "none";
        }
    }   
}
document.addEventListener('keydown', function(event){
    if(event.key == "a" || event.key == "ArrowLeft")
        stanga();
    else if(event.key == "d" || event.key == "ArrowRight")
        dreapta();
})
document.addEventListener('click', function(event){
    if(event.target.classList[0] == "button")
        if(event.target.classList[1] == "left")
            stanga();
        else if(event.target.classList[1] == "right")
            dreapta();
})