

let  mode= document.querySelector(".mode")
mode.addEventListener("click",() => {
    if  (document.querySelector("body").style.backgroundColor == "black"){
        document.querySelector("body").style.backgroundColor = "white"
        document.querySelector(".mode").innerText = "Switch to Dark Mode"
        document.querySelector(".mode").style.backgroundColor = "#5A0707"
    }else{
        document.querySelector("body").style.backgroundColor = "black"
        document.querySelector(".mode").innerText = "Switch to Light Mode"
        document.querySelector(".mode").style.backgroundColor = "#0EA9F6"

    }

    let body = document.querySelector("body")
    body.style.transition = "0.5s";

});

document.querySelector("form")


let submit= document.querySelector(".submit")

submit.addEventListener("click",()=>{
let name= document.getElementById("name")
let reg= document.getElementById("reg")
let col= document.getElementById("col")
let pass= document.getElementById("pass")

    if(name.value.trim() == ""){
        alert("Please enter your Name")
    }else if(reg.value.trim()==""){
        alert("Please enter your Roll Number")
    }else if(col.value.trim()==""){
        alert("Please enter your College Name")
    }else if(pass.value.trim()==""){
        alert("Please enter your Password")
    }else{

        let obj={
            fullName: name.value,
            rollNum: reg.value,
            college: col.value,
            password: pass.value,

        };

let data = JSON.stringify(obj);
        localStorage.setItem("data",data)

        location.href = "showData.html"
    }
})



