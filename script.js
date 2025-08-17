// CHARGEMENT DE LA PAGE
document.body.classList.add('loading');
let xx = document.querySelector('.centre-loading');
window.addEventListener('load', ()=>{
      xx.style.display = 'none';
      document.body.classList.remove('loading'); // Réactive le scroll
});


// Bloquer la barre de nav
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        document.querySelector('nav').classList.add('static');
    } else {
        document.querySelector("nav").classList.remove('static');
    }
});

// Btn retour
let scroll_btn = document.querySelector('.scroll-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scroll_btn.classList.add('active');
    } else {
        scroll_btn.classList.remove('active');
    }
    });
    scroll_btn.addEventListener('click', () => {
    document.documentElement.scrollIntoView({
        behavior: 'smooth'
    });
});


// Animations des blocks
const ratio = .1
const options = {
    root : null,
    rootMargin : '0px',
    threshold: ratio
}

// De haut en bas
const handleInetersect = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handleInetersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
    observer.observe(r)
});

// Gauche
const handlegauche = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('gauche-visible')
            observer.unobserve(entry.target)
        }
    })
}
const obser = new IntersectionObserver(handlegauche, options)
document.querySelectorAll('[class*="gauche-"]').forEach(function (r){
    obser.observe(r)
});

// Droite
const handledroite = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('droite-visible')
            observer.unobserve(entry.target)
        }
    })
}
const obse = new IntersectionObserver(handledroite, options)
document.querySelectorAll('[class*="droite-"]').forEach(function (r){
    obse.observe(r)
});

// Btn mobile
let btn_mobile = document.querySelector('.btn-mobile');
let mobile_menu = document.querySelector('header nav .lien');

btn_mobile.addEventListener('click', () => {
    mobile_menu.classList.toggle('show');
});


// Formulaire d'adhesion
const bton = document.getElementById("show-form-part");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
    
bton.addEventListener("click", () => {
    const isSection2Visible = section2.classList.contains("visibles");

    if (isSection2Visible) {
        // revenir à l'état initial
        section2.classList.remove("visibles");
        section2.classList.add("hidden");

        section1.classList.remove("hidden");
        section1.classList.add("visibles");

        bton.textContent = "Afficher le formulaire du partenaire";
    } else {
        // afficher section2 et cacher section1
        section1.classList.remove("visibles");
        section1.classList.add("hidden");

        section2.classList.remove("hidden");
        section2.classList.add("visibles");

        bton.textContent = "Afficher le formulaire de membre";
    }
});