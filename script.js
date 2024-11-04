// Load images for each category dynamically
const imagePaths = {
    photography: ["photo1.jpg", "photo2.jpg"],
    keyboards: ["keyboard1.jpg", "keyboard2.jpg"],
    setup: ["setup1.jpg", "setup2.jpg"],
    "other-projects": ["other1.jpg", "other2.jpg"]
};

document.addEventListener("DOMContentLoaded", () => {
    Object.keys(imagePaths).forEach(category => {
        const galleryContainer = document.getElementById(`${category}-gallery`);
        if (galleryContainer) {
            imagePaths[category].forEach(imgSrc => {
                const img = document.createElement("img");
                img.src = `assets/images/${category}/${imgSrc}`;
                img.alt = `${category} image`;
                galleryContainer.appendChild(img);
            });
        }
    });
});

// Toggle gallery visibility
function toggleGallery(category) {
    const galleryContainer = document.getElementById(`${category}-gallery`);
    if (galleryContainer) {
        galleryContainer.classList.toggle("show");
    }
}
