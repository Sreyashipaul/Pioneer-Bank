//login button event handler

const loginBtn=document.getElementById("login");
loginBtn.addEventListener("click",function(){
     const loginArea = document.getElementById("login-area");
     loginArea.style.display = "none";
     const transctionArea = document.getElementById("transaction-area");
     transctionArea.style.display = "block";
})


