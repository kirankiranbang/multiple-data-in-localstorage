
/*
function test()
{

var    un=document.getElementById("username").value
var    pw=document.getElementById("password").value

alert(un+pw)






var un=localStorage.getItem("un",un);
var pw=localStorage.getItem("pw",pw);

var username,password;
username="kiran";
password=12345;

if(username===un && password===pw)
{
    alert("loginsuccess");

}
else
alert("not logged in")

}
*/

function saveData() 
{
  let name,pass,lname;
  name=document.getElementById("name").value;
  pass=document.getElementById("pass").value;
  lname=document.getElementById("lname").value;
  
  localStorage.setItem("uname",name)
  localStorage.setItem("pass",pass)
  localStorage.setItem("lname",lname)  
}