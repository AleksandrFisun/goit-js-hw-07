import { galleryItems } from "./gallery-items.js";

const containerGallaryDivRef = document.querySelector(".gallery");
const marcupRef = createGellery(galleryItems);
containerGallaryDivRef.insertAdjacentHTML("beforeend", marcupRef);

function createGellery(event) {
  return event
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            title="${description}"
            loading="lazy"
          />
        </a>
      </div>`;
    })
    .join("");
}
containerGallaryDivRef.addEventListener("click", (event) => {
  event.preventDefault();
  const srcImgEl = event.target.dataset.source;
  const addBasicLightboxImg = basicLightbox.create(`
    <img src="${srcImgEl}" width="800" height="600">
`);

  addBasicLightboxImg.show();
});
containerGallaryDivRef.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    document.querySelector("div.basicLightbox").remove("");
  }
});
