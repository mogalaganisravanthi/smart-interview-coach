
function startInterview(){

    const username=document.getElementById("username").value;
    const roll=document.getElementById("roll").value;
    const department=document.getElementById("department").value;

    localStorage.setItem("username",username);
    localStorage.setItem("roll",roll);
    localStorage.setItem("department",department);

    window.location.href="dashboard.html";
}