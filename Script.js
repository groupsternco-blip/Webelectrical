// Mobile Menu
function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("active");
}

// Scroll Animation
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el)=>{
    observer.observe(el);
});