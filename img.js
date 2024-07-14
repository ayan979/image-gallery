let currentImageIndex = 0;
const images = [
    'https://images.unsplash.com/photo-1522281251585-9f7f5e43b52e',
    'https://images.unsplash.com/photo-1461319951965-1e6d4bfc1b52',
    'https://images.unsplash.com/photo-1517991131181-5aef0e7d6576',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1501593468602-8e6e6c15c8bb',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'
];

function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = imageSrc.split('/').pop();
    currentImageIndex = images.indexOf(imageSrc);
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");

    modalImg.src = images[currentImageIndex];
    caption.innerHTML = images[currentImageIndex].split('/').pop();
}
