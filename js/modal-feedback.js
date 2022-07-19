const writeUsButton = document.querySelector('.contacts__writeus-button');
const modalFeedback = document.querySelector('.modal-feedback');
const closeButton = modalFeedback.querySelector('.feedback__close-button');
const feedbackForm = modalFeedback.querySelector('.modal-feedback__form');
const feedbackName = modalFeedback.querySelector('.input-name');
const feedbackEmail = modalFeedback.querySelector('.input-email');
const feedbackMessage = modalFeedback.querySelector('.input-message');


//проверка localStorage
let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try{
  storageName = localStorage.getItem('name');
} catch(err) {
  isStorageSupport = false
}

try{
  storageEmail = localStorage.getItem('email');
} catch(err) {
  isStorageSupport = false
}


//открыть окно
writeUsButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal--show');
  feedbackName.focus(); //устанавливаем фокус в поле Имя
  if (storageName){
    feedbackName.value = storageName;
    feedbackEmail.focus();
  }
  if (storageEmail){
    feedbackEmail.value = storageEmail;
    feedbackMessage.focus();
  }
});


//закрыть окно по кнопке
closeButton.addEventListener('click', function(evt){
  evt.preventDefault();
  modalFeedback.classList.remove('modal--show');
  modalFeedback.classList.remove('modal--error');
});


//валидация данных
feedbackForm.addEventListener('submit', function(evt){
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    console.log('нифига');
    evt.preventDefault();
    modalFeedback.classList.remove('modal--error');//сбрасываем тряску
    // modalFeedback.offsetWidth = modalFeedback.offsetWidth; //сбрасываем тряску
    void modalFeedback.offsetWidth; //сбрасываем тряску вариант 2 (лучше)
    modalFeedback.classList.add('modal--error');
  } else {
      if (isStorageSupport) {
        localStorage.setItem('name', feedbackName.value);
        localStorage.setItem('email', feedbackEmail.value);
        console.log('ееее');
      }
  }
});


//закрыть по  esc
window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains('modal--show')){
      modalFeedback.classList.remove('modal--show');
      modalFeedback.classList.remove('modal--error');
    }
  }
});
