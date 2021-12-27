const audioBtns = document.querySelectorAll(".audio-btn");
const sounds = document.querySelectorAll(".sound");


audioBtns.forEach((element, index) => {
  element.onclick = () => {
    sounds.forEach((elementInner, indexInner) => {
      if (index == indexInner) {
        elementInner.play();
        return
      }
    })
  }
});