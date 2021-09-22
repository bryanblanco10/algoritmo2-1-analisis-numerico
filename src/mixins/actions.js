

const customComponentActions = {
  methods: {
    validationForm(validation, field) {
      if (validation.$dirty) {
        document.getElementById(`group_${field}`).classList.remove("correcto");
        document.getElementById(`group_${field}`).classList.add("incorrecto");
        document
          .querySelector(`#group_${field} .form__validation--state`)
          .classList.remove("fa-check-circle");
        document
          .querySelector(`#group_${field} .form__validation--state`)
          .classList.add("fa-times-circle");
      }
      if (!validation.$invalid) {
        document
          .getElementById(`group_${field}`)
          .classList.remove("incorrecto");
        document.getElementById(`group_${field}`).classList.add("correcto");
        document
          .querySelector(`#group_${field} .form__validation--state`)
          .classList.remove("fa-times-circle");
        document
          .querySelector(`#group_${field} .form__validation--state`)
          .classList.add("fa-check-circle");
      }
    }
  }
}


export {
  customComponentActions
};