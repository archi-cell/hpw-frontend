document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach((img) => {
        img.addEventListener("click", function () {
            const imageUrl = img.getAttribute("src");
            const imageTitle = img.nextElementSibling.querySelector("h3").innerText;
            const imageDesc = img.nextElementSibling.querySelector("p").innerText;

            // Redirect to the new page with data in the URL
            window.location.href = `image-viewer.html?src=${encodeURIComponent(imageUrl)}&title=${encodeURIComponent(imageTitle)}&desc=${encodeURIComponent(imageDesc)}`;
        });
    });
});
