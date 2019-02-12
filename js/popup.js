var popup = document.querySelector(".modal-feedback");
var modalLink = document.querySelector(".feedback-open-button");
var modalClose = popup.querySelector(".modal-close");
var form = popup.querySelector(".feedback-form");
var fieldName = popup.querySelector("[name=name]");
var fieldEmail = popup.querySelector("[name=email");
var fieldMessage = popup.querySelector("textarea");
var toggles = document.querySelectorAll(".slider-toggle");
var sliders = document.querySelectorAll(".slider-item");


//Открытие модального окна
modalLink.addEventListener("click", function (evt) {
  evt.preventDefault;
  popup.classList.add("modal-show");
  fieldName.focus();
});

//Закрытие по клику
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault;
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  fieldEmail.classList.remove("feedback-field-invalid");
  fieldMessage.classList.remove("feedback-field-invalid");
});

//Закрытие по ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && popup.classList.contains("modal-show")) {
    evt.preventDefault;
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    fieldEmail.classList.remove("feedback-field-invalid");
    fieldMessage.classList.remove("feedback-field-invalid");
  }
});

//Проверка формы на заполнение
form.addEventListener("submit", function (evt) {
 if (!fieldEmail.value || !fieldMessage.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    if (!fieldEmail.value) {
      fieldEmail.classList.add("feedback-field-invalid");
    }
    if (!fieldMessage.value) {
      fieldMessage.classList.add("feedback-field-invalid");
    }
  }
});

//Переопределение внешнего вида поля ввода после заполнения
fieldMessage.addEventListener("input", function () {
  fieldMessage.classList.remove("feedback-field-invalid");
});

fieldEmail.addEventListener("input", function () {
  fieldEmail.classList.remove("feedback-field-invalid");
});

//Оживление слайдера
var addTogglesClickHandler = function (toggle, slide) {
  toggle.addEventListener("click", function () {
    for (var j = 0; j < toggles.length; j++) {
      toggles[j].classList.remove("slider-toggle-active");
      sliders[j].classList.remove("slider-item-show");
    }
    toggle.classList.add("slider-toggle-active");
    slide.classList.add("slider-item-show");
  });
}

for (var i = 0; i < toggles.length; i++) {
  addTogglesClickHandler(toggles[i], sliders[i]);
}
