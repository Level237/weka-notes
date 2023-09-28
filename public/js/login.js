
const btn=document.getElementById("register-btn")

btn.addEventListener('click',()=>{
    fetch("http://localhost:3000/api/v1/users/",{
        Method: 'POST',
  Headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json'
  },

    }).then((response)=>{
        console.log(response)
        })
        console.log("d")
})
