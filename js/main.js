const buttonsWrapper = $(".map");
const slides = $(".inner");

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third")) {
      slides.style.transform = "translatex(-66.6666666667%)";
      e.target.classList.add("active");
    }
  }
});

let popUp = $(".popup__wrapper"),
  closebtn = $(".close"),
  checked = $(".checked"),
  headerBtn = $(".nav__top__btn"),
  popupSection = $("#popup"),
  submitBtn = $(".submitBtn"),
  popupSuccess = $(".checked"),
  successCLose = $("#close"),
  btn = $(".btn"), 
  main = $("main")

closebtn.addEventListener("click", function(e) {
  e.preventDefault();
  popUp.style.display = "none";
  main.style.backgroundColor = "none";

});

headerBtn.addEventListener("click", () => {
  main.style.backgroundColor = "gray"
  popupSection.style.display = "block";
  popupSection.style.position = "absolute";
  popupSection.style.top = "300px";
  popupSection.style.zIndex = "999999";
  popupSection.style.left = "400px";
});

submitBtn.addEventListener("click", () => {
  popupSection.style.display = "none";
  popupSuccess.style.display = "block";
  popupSuccess.style.position = "absolute";
  popupSuccess.style.top = "300px";
  popupSuccess.style.zIndex = "999999";
  popupSuccess.style.left = "500px";
  console.log("success");
});

successCLose.addEventListener("click", function(e){
  e.preventDefault()
  popupSuccess.style.display = "none"
  main.style.backgroundColor = "none";
})

btn.addEventListener("click", function (e) {
  e.preventDefault();
  popupSuccess.style.display = "none";
  main.style.backgroundColor = "none";
});