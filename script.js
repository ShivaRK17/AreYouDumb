let count = 0;

let nobuton = document.querySelector('#but2')
nobuton.addEventListener('mouseover',()=>{
    if (count==0) {
        nobuton.style.transform="translate(0px,-100px)"
        count=1;
    }
    else if (count==1) {
        nobuton.style.transform="translate(-200px,-100px)"
        count=2;
    }
    else if (count==2) {
        nobuton.style.transform="translate(-200px,100px)"
        count=3
    }
    else if (count==3) {
        nobuton.style.transform="translate(0px,100px)"
        count=4;
    }
    else if (count==4) {
        nobuton.style.transform="translate(0px,0px)"
        count=0;
    }
})
let kbc = document.querySelector('.below')
let yesbuton = document.querySelector('#but1');
yesbuton.addEventListener('click',()=>{
    nobuton.style.display="none";
    yesbuton.style.display="none";
    kbc.style.background="url('won.jpg') no-repeat";
    kbc.style.backgroundSize="contain";
    kbc.style.backgroundPosition="center";
})