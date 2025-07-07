document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollEffects();
});

function toggleMenu() {
    console.log("Menu toggle clicked");
    const navLinks = document.getElementById("nav-links");
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active'); 
    menuToggle.classList.toggle('active');
}
// Close menu when clicking on a navigation link (mobile) 
document.addEventListener('DOMContentL oaded', function(){  
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => { 
        link.addEventListener('click', ( ) => { 
            const navLinksContainer = document.getElementByld('nav-links'); 
            const menuToggle = document.querySelector('.menu-toggle');
            navLinksContainer.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});
// Close menu when clicking outside the navigation (mobile) 
document.addEventListener('click', (e) => { 
    const navLinks = document.getElementByld('nav-links'); const menuToggle = document.querySelector('.menu-toggle'); 
    const navbar = document.querySelector('.navbar');

    if (!navbar.contains(e.target) && navLinks.classList.contains('active')) { 
        navLinks.classList.remove('active'); 
        menuToggle.classList.remove('active');
    }
});
// Smooth scrolling for navigation links 
document.addEventListener('DOMContentLoaded', function() {  const anchors = document.querySelector(targetld);
 
    anchors.forEach(anchor => { 
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetld = this.getAttribute('href'); const targetElement = document.querySelector(targetld);

            if (targetElement) { 
                targetElement.scrolllntoView({ 
                    behavior: 'smooth', 
                    block: 'start'
                });
            }
        });
    });
});

// Optional: Handle window resize to close mobile menu if screen becomes larger 
window.addEventListener('resize', () => { 
    const navLinks = document.getElementByld('nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) { 
        navLinks.classList.remove('active'); 
        menuToggle.classList.remove('active');
    }
});

    
    





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));

        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        document.getElementById('navMenu').classList.remove('active');
    });

});

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const comments = formData.get('comments');
    
    if (!firstName || !lastName || !email) {
        alert('Please fill in all required fields.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert(`Thank you ${firstName} ${lastName}! Your message has been received. We'll contact you at ${email} soon.`);
    
    event.target.reset();
}
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 50) {

            navbar.style.background = 'rgba(15, 25, 60, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 25, 60, 0.95)';
        }
    });
}

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
};
