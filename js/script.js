const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entries.target)
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
}, {})
const animeElements = document.querySelectorAll(".scroll-element")
animeElements.forEach(el => observer.observe(el))