window.onload = function(){
    if(localStorage.getItem("email") !== null){
        const timer = document.createElement('p');
        document.body.appendChild(timer);
        gata();
        var form = document.getElementById("register-form");
        form.remove();
        const out = document.createElement("button");
        out.setAttribute("id", "logout");
        out.setAttribute("onClick", "logout()");
        out.innerText = "Logout";
        document.body.appendChild(out);
    }
    else{
        const timer = document.createElement('p');
        const form = document.getElementById("register-form");
        form.insertBefore(timer, form.children[0]);
        gata();
    }
    var arr = ["#39ffbe", "#5ba8ff", "#9e62ff", "#cfff7b", "#ff9bd3"]
    var x = Math.floor(Math.random() * 5);
    document.body.setAttribute("style", "background-color: " + arr[x] +";");
}
function gata(){
    var data = new Date();
    const graduate = new Date("8/1/2024");
    const diff = graduate - data;
    const x = (diff)/(1000 * 60 * 60 * 24 * 365);
    const y = (x - Math.floor(x)) * 365;
    const z = (y - Math.floor(y)) * 24;
    const w = (z - Math.floor(z)) * 60;
    const v = (w - Math.floor(w)) * 60;
    const p = document.getElementsByTagName('p');
    p[0].innerText = Math.floor(x).toString() + " ani, " + Math.floor(y).toString() + " zile, " + Math.floor(z).toString() + " ore, " + Math.floor(w).toString() + " minute si " + Math.floor(v).toString() + " secunde pana termin facultatea asta vezi doamne";
}
setInterval(gata, 1000);
// storing input from register-form
function store() {
    const email = document.getElementById("email");
    const pw = document.getElementById("pw");
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (emailRegex.test(email.value) == false) {
        ok = false;
        alert("incorrect email");
        return 0;
    } 
    else if (passRegex.test(pw.value) == false) {
        ok = false;
        alert("password not strong enough :(");
        return 0;
    }
    else{
        localStorage.setItem("email", email.value);
        localStorage.setItem("pw", pw.value);
        const timer = document.createElement('p');
        document.body.appendChild(timer);
        gata();
        var form = document.getElementById("register-form");
        form.remove();
        const out = document.createElement("button");
        out.setAttribute("id", "logout");
        out.setAttribute("onClick", "logout()");
        out.innerText = "Logout";
        document.body.appendChild(out);
    }
}
function logout(){
    localStorage.clear();
    const out = document.getElementById("logout");
    out.remove();
    const form = document.createElement("form");
    form.setAttribute("id", "register-form");
    document.body.appendChild(form);
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const input3 = document.createElement("input");
    const input4 = document.createElement("input");
    input1.setAttribute("id", "email");
    input2.setAttribute("id", "pw");
    input3.setAttribute("id", "regstr_btn");
    input1.setAttribute("type", "text");
    input2.setAttribute("type", "password");
    input3.setAttribute("type", "submit");
    input4.setAttribute("type", "reset");
    input1.setAttribute("placeholder", "username");
    input2.setAttribute("placeholder", "password");
    input1.setAttribute("value", "");
    input2.setAttribute("value", "");
    input3.setAttribute("value", "Register");
    input4.setAttribute("value", "clear fields");
    input3.setAttribute("onClick", "store()");
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);
    form.appendChild(input4);
}
// check if stored data from register-form is equal to entered data in the   login-form