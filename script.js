function startInterview(){

const username=document.getElementById("username").value.trim();

const roll=document.getElementById("roll").value.trim();

const department=document.getElementById("department").value;

if(username===""){

alert("Please enter your name.");

return;

}

if(roll===""){

alert("Please enter your roll number.");

return;

}

if(department===""){

alert("Please select your department.");

return;

}

localStorage.setItem("username",username);

localStorage.setItem("roll",roll);

localStorage.setItem("department",department);

window.location.href="dashboard.html";

}