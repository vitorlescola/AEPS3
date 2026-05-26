const elementsL=document.querySelectorAll('.slide-left');
const elementsR=document.querySelectorAll('.slide-right');

const observer=new IntersectionObserver((entries) => {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
    });
},{
    threshold:0.9
});

elementsL.forEach(el => observer.observe(el));
elementsR.forEach(el => observer.observe(el));