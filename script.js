let skills = ["Python Developer","Fullstack Developer", "Frontend Developer", "Software Developer", "React Developer","Backend Developer"];
let myh1=document.getElementById("typing")

let skillIndex = 0;
let charIndex = 0;
let isDeleting= false;

let typingEffect=()=>{
    let currentSkill=skills[skillIndex]

    if(!isDeleting){
        myh1.innerHTML=currentSkill.slice(0,charIndex+1)
        myh1.style.color="aqua";
        myh1.style.filter="drop-shadow(0 0 5px grey)";
        charIndex++;

        if(charIndex===currentSkill.length){
            setTimeout(()=> isDeleting = true,1000);
        }
    }else{
        myh1.innerHTML=currentSkill.slice(0,charIndex-1);
        charIndex--;

        if(charIndex===0){
            isDeleting=false;
            skillIndex=(skillIndex+1)% skills.length;

        }
    }
    let speed = isDeleting ? 120 : 150;
    setTimeout(typingEffect,speed);
}

typingEffect();