import addMarkup from "./add-markup.js";

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

document.addEventListener('keydown',
  (event) => {
    if (event.key === 'Escape') {
      modal.style.display = "none";
    }
})

addMarkup(dataJSON, modal);

btn.onclick = function () {
  modal.style.display = "block";
}
