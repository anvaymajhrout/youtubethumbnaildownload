document.getElementById('fetchButton').addEventListener('click', function() {
    const youtubeLink = document.getElementById('youtubeLink').value;
    let videoId = youtubeLink.split('v=')[1] || youtubeLink.split('youtu.be/')[1];
    if (videoId) {
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
        }
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        document.getElementById('thumbnailContainer').innerHTML = `
            <div class="card">
                <div class="card__content">
                    <img src="${thumbnailUrl}" alt="YouTube Thumbnail">
                    <a href="${thumbnailUrl}" download="thumbnail.jpg" class="download-button">Download Thumbnail</a>
                </div>
            </div>
        `;
    } else {
        alert('Please enter a valid YouTube video link.');
    }
});
