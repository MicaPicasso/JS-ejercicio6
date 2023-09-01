const modalContain= document.querySelector(".modal-contain");
const modalOpen= document.querySelector(".modal-open");
const modalClose= document.querySelector(".modal-close");

modalOpen.addEventListener("click", function(){
   modalContain.classList.add("show-modal")
})
modalClose.addEventListener("click", function(){
    modalContain.classList.remove("show-modal")
})