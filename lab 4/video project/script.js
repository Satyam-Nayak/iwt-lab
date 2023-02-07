const videoGallery = document.getElementById('videoGallery');
const videoPopup = document.getElementById('videoPopup');
const popupVideo = document.getElementById('popupVideo');
const closeBtn = document.getElementById('closeBtn');

videoGallery.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        popupVideo.src = e.target.previousElementSibling.src;
        videoPopup.style.visibility = 'visible';
    }
});

closeBtn.addEventListener('click', e => {
    videoPopup.style.visibility = 'hidden';
});