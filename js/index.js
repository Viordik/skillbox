window.addEventListener('load', function () {
  const input = document.querySelectorAll('.form__input');
  const btnSubmit = document.querySelector('.btn__submit');
  const checkboxFirst = document.querySelector('.isCheckbox-first');
  const list = document.querySelector('.advantages-list');

  checkboxFirst.addEventListener('click', (evt) => {
    const ckeckbox = evt.target;

    ckeckbox.classList.toggle('isCheck');

    if (ckeckbox.classList.contains('isCheck')) {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  });

  input.forEach((item) => {
    item.addEventListener('input', () => {
      item.classList.remove('form__input--error', 'form__input--good');

      if (item.hasAttribute('data-name')) {
        if (typeof item.value !== String) {
          addFormClassName(item, 'form__input--error');
          removeFormClassName(item, 'form__input--good');
        }

        if (isNaN(item.value)) {
          addFormClassName(item, 'form__input--good');
          removeFormClassName(item, 'form__input--error');
        }

        if (item.value === '') {
          item.classList.remove('form__input--error', 'form__input--good');
        }
      }

      if (item.hasAttribute('data-phone')) {
        if (typeof item.value !== Number) {
          addFormClassName(item, 'form__input--error');
          removeFormClassName(item, 'form__input--good');
        }
      }
    });
  });

  const addFormClassName = (item, a) => {
    item.classList.add(a);
  };

  const removeFormClassName = (item, a) => {
    item.classList.remove(a);
  };
});
