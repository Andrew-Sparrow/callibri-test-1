const addMarkup = (data, modal) => {
  const obj = JSON.parse(data);

  const formElement = document.querySelector('#modal-form');

  const list = document.createElement('ul');
  list.className = 'list';
  const template = document.querySelector(".template");

  obj.forEach((item) => {
    const listItem = template.content.cloneNode(true);
    const paragraph = listItem.querySelector(".deal__name");
    paragraph.innerHTML = item.name;

    const radioButtonOpen = listItem.querySelector("#radio-open");
    radioButtonOpen.name += '-' + item.id;
    radioButtonOpen.id += '-' + item.id;

    const labelOpen = listItem.querySelector(".deal__label--open");
    labelOpen.htmlFor += '-' + item.id;

    const radioButtonSuccess = listItem.querySelector("#radio-success");
    radioButtonSuccess.name += '-' + item.id;
    radioButtonSuccess.id += '-' + item.id;

    const labelSuccess = listItem.querySelector(".deal__label--success");
    labelSuccess.htmlFor += '-' + item.id;

    const radioButtonFail = listItem.querySelector("#radio-fail");
    radioButtonFail.name += '-' + item.id;
    radioButtonFail.id += '-' + item.id;

    const labelFail = listItem.querySelector(".deal__label--fail");
    labelFail.htmlFor += '-' + item.id;

    switch (item.kind) {
      case 'open':
        radioButtonOpen.checked = true;
        break;
      case 'success':
        radioButtonSuccess.checked = true;
        break;
      case 'fail':
        radioButtonFail.checked = true;
        break;
    }

    list.appendChild(listItem);
  });

  formElement.appendChild(list);

  const getDataList = (data) => {
    const list = [];

    for (const [name, status] of Object.entries(data)) {
      const id = name.split('-')[1];
      list.push({id: id, kind: status});
    }

    return list;
  };

  formElement.onsubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    alert(JSON.stringify(getDataList(data)));
  };

  const buttonSubmit = document.createElement('button');
  buttonSubmit.textContent = 'Сохранить';
  buttonSubmit.className = 'modal__submit';
  buttonSubmit.type = 'submit';

  buttonSubmit.onclick = () => {
    modal.style.display = "none";
  };

  formElement.appendChild(buttonSubmit);
};

export default addMarkup;
