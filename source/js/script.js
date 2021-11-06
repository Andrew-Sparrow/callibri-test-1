// Get the modal
const dealings = [
  {
    id: 260,
    callibri_project_id: 31976,
    external_id: "NEW",
    name: "Новая",
    kind: "open",
    created_at: "2021 - 10 - 20T08: 04: 05.789Z",
    updated_at: "2021 - 10 - 20T08: 04: 05.789Z"
  },
  {
    id: 261,
    callibri_project_id: 31976,
    external_id: "PREPARATION",
    name: "Подготовка документов",
    kind: "open",
    created_at: "2021 - 10 - 20T08: 04: 05.789Z",
    updated_at: "2021 - 10 - 20T08: 04: 05.789Z"
  },
  {
    id: 262,
    callibri_project_id: 31976,
    external_id: "PREPAYMENT_INVOICE",
    name: "Cчёт на предоплату",
    kind: "open",
    created_at: "2021 - 10 - 20T08: 04: 05.790Z",
    updated_at: "2021 - 10 - 20T08: 04: 05.790Z"
  },
  {
    id: 263,
    callibri_project_id: 31976,
    external_id: "EXECUTING",
    name: "В работе",
    kind: "open",
    created_at: "2021 - 10 - 20T08: 04: 05.790Z",
    updated_at: "2021 - 10 - 20T08: 04: 05.790Z"
  },
  {
    id: 264,
    callibri_project_id: 31976,
    external_id: "FINAL_INVOICE",
    name: "Финальный счёт",
    kind: "open",
    created_at: "2021 - 10 - 20T08: 04: 05.790Z",
    updated_at: "2021 - 10 - 20T08: 04: 05.790Z"
  },
  {
    id: 265,
    callibri_project_id: 31976,
    external_id: "WON",
    name: "Сделка успешна",
    kind: "success",
    created_at: "2021 - 10 - 20T08: 04: 05.790Z",
    updated_at: "2021 - 10 - 20T08: 04: 05.790Z"
  },
  {
    id: 266,
    callibri_project_id: 31976,
    external_id: "LOSE",
    name: "Сделка провалена",
    kind: "fail",
    created_at: "2021 - 10 - 20T08: 04: 05.790Z",
    updated_at: "2021 - 10 - 20T08: 04: 05.790Z"
  },
  {
    id: 267,
    callibri_project_id: 31976,
    external_id: "APOLOGY",
    name: "Анализ причины провала",
    kind: "open",
    created_at: "2021 - 10 - 20T08: 04: 05.791Z",
    updated_at: "2021 - 10 - 20T08: 04: 05.791Z"
  }
];

function getStatuses(data) {
  return JSON.stringify(data);
}

const dataJSON = getStatuses(dealings);

var modal = document.getElementById("myModal");

// Get the button that "open"s the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal__close")[0];

// When the user clicks on <span> (x),
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal,
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const addMarkup = (data) => {
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

  const buttonSubmit = document.createElement('button');
  buttonSubmit.textContent = 'Сохранить';
  buttonSubmit.className = 'modal__submit';
  buttonSubmit.type = 'submit';

  const getDataList = (data) => {
    const list = [];

    for (const [name, status] of Object.entries(data)) {
      const id = name.split('-')[1];
      list.push({id: id , kind: status});
    }

    return list;
  };

  formElement.onsubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    alert(JSON.stringify(getDataList(data)));
  };

  buttonSubmit.onclick = () => {
    modal.style.display = "none";
  };

  formElement.appendChild(buttonSubmit);
};

document.addEventListener('keydown',
  (event) => {
    if (event.key === 'Escape') {
      modal.style.display = "none";
    }
})

addMarkup(dataJSON);

btn.onclick = function () {
  modal.style.display = "block";
}
