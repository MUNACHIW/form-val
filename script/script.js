function validation(){
  const firstname = document.getElementById('fname').value;
    const namecheck = /^[a-zA-z]*$/;
   const email = document.getElementById('email').value;
   const emailcheck = /^[^]+@[^]+\.[a-z]{2,3}$/;
     const  serve = document.getElementById('serve').value;
     const choose = document.getElementById('choose').value;
     const proj = document.getElementById('proj').value;
     const projects = document.getElementById('projects').value
     const elaborate = document.getElementById('elab').value;
  
     if(firstname.trim() == ""){
        alert("Fill in Firstname");
        return false;
    }else if(!firstname.match(namecheck)){
       alert('input a valid name')
       return false;
    }else if(email.trim() == ""){
        alert('fill in your email')
        return false;
    }else if(!email.match(emailcheck)){
        alert('fill a valid email address')
        return false;
    }else if(serve == choose){
        alert('choose your service')
        return false;
    }else if(proj == projects){
        alert('choose your project')
        return false;
    }else if(elaborate.trim() == ""){
        alert('Say more about your project' );
        return false
    }
     else{
        alert('successful');
        localStorage.setItem('FIRSTNAME',firstname);
        localStorage.setItem('EMAIL', email);
        localStorage.setItem('SERVICE',serve);
        localStorage.setItem('PROJECT', proj);
        localStorage.setItem('ELABORATE',elaborate);
        return true;
    }
    
}
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const services = document.getElementById('services');
const projects = document.getElementById('projects');
  const elab = document.getElementById('elab')

window.addEventListener('load',()=>{
const fname = localStorage.getItem('FIRSTNAME');
const email = localStorage.getItem('EMAIL');
const services = localStorage.getItem('SERVICE');
const projects = localStorage.getItem('PROJECT');
const elab = localStorage.getItem('ELABORATE');
document.getElementById('fname').innerHTML=fname;
document.getElementById('email').innerHTML=email;
document.getElementById('services').innerHTML=services;
document.getElementById('projects').innerHTML= projects;
document.getElementById('elab').innerHTML=elab;
})
