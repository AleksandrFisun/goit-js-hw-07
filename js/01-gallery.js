import { galleryItems } from "./gallery-items.js";
const containerGallaryDivRef = document.querySelector(".gallery");
const marcupRef = createGellery(galleryItems);
containerGallaryDivRef.insertAdjacentHTML("beforeend", marcupRef);
containerGallaryDivRef.addEventListener("click", createImgBasicLightbox);
let srcImgEl;
let createImgModal;
//
function createGellery(e) {
  return e
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
const settingsLigtBox = {
  onShow: () => {
    document.addEventListener("keydown", keyDowEsc);
  },
  onClose: () => {
    document.removeEventListener("keydown", keyDowEsc);
  },
};
//
function createImgBasicLightbox(e) {
  e.preventDefault();
  srcImgEl = e.target.dataset.source;
  createImgModal = basicLightbox.create(
    `<img src="${srcImgEl}" width="800" height="600">`,
    settingsLigtBox
  );
  createImgModal.show();
}
//
function keyDowEsc(e) {
  if (e.code === "Escape" && createImgModal.visible()) {
    createImgModal.close();
  }
}
