document.addEventListener("DOMContentLoaded", () => {
    // Automatically load images into galleries
    const galleries = {
        "photography-gallery": ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
        "keyboards-gallery": ["keyboard1.jpg", "keyboard2.jpg"],
        "setup-gallery": ["setup1.jpg", "setup2.jpg"],
        "other-projects-gallery": ["other1.jpg", "other2.jpg"]
    };

    Object.keys(galleries).forEach(galleryId => {
        const galleryContainer = document.getElementById(galleryId);
        galleries[galleryId].forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = `assets/images/${galleryId.split('-')[0]}/${imgSrc}`;
            img.alt = "Project image";
            galleryContainer.appendChild(img);
        });
    });

    // Scroll animations with Intersection Observer
    const faders = document.querySelectorAll(".gallery-container");

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.5 });

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});