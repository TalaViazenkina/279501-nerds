var popup = document.querySelector(".modal-feedback");
var modalLink = document.querySelector(".feedback-open-button");
var modalClose = popup.querySelector(".modal-close");
var form = popup.querySelector(".feedback-form");
var fieldName = popup.querySelector("[name=name]");
var fieldEmail = popup.querySelector("[name=email");
var fieldMessage = popup.querySelector("textarea");

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault;
  popup.classList.add("modal-show");
  fieldName.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault;
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  fieldEmail.classList.remove("feedback-field-invalid");
  fieldMessage.classList.remove("feedback-field-invalid");
});

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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && popup.classList.contains("modal-show")) {
    evt.preventDefault;
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    fieldEmail.classList.remove("feedback-field-invalid");
    fieldMessage.classList.remove("feedback-field-invalid");
  }

});

fieldMessage.addEventListener("input", function () {
  fieldMessage.classList.remove("feedback-field-invalid");
});

fieldEmail.addEventListener("input", function () {
  fieldEmail.classList.remove("feedback-field-invalid");
});
