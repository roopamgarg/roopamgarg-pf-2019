

console.log(document.querySelectorAll(".navigation__item"))

document.querySelectorAll(".navigation__item").forEach((key)=>{
key.addEventListener('click',()=>{
    document.getElementById('navi-toggle').checked=false;
})

})



console.log("hello");

const sendMessage = () =>{
  
    const name = document.getElementById("msg__name").value;
    document.getElementById("msg__name").value="";
    const email = document.getElementById("msg__email").value;
    document.getElementById("msg__email").value="";
    const message = document.getElementById("msg__text").value;
    document.getElementById("msg__text").value="";
   console.log("hello");
    fetch("https://rootapi.herokuapp.com/",{
        method:"post",
        headers : {'Content-type' : 'application/json'},
        body:JSON.stringify({
            name:name,
            email:email,
           
            message:message
        })
    })
}

