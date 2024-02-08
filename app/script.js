import isCPF from "./check-cpf.js";
import isAge from "./check-age.js";

const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
    field.addEventListener('blur', () => verifyField(field));
    field.addEventListener('invalid', event => event.preventDefault());
});

const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

function verifyField(field) {
    let message = "";
    field.setCustomValidity('');

    if (field.name == "cpf" && field.value.length >= 11) {
        isCPF(field);
    };

    if(field.name == "aniversario" && field.value != "") {
        isAge(field);
    };

    errorTypes.forEach(error => {
        if (field.validity[error]) {
            message = messages[field.name][error];
            console.log(message);
        };
    });
    
    const errorMessage = field.parentNode.querySelector('.mensagem-erro');
    const inputValidity = field.checkValidity();
    if(!inputValidity) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = "";
    }
};

const messages = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido",
        tooShort: "Por faovr, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um e-mail válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        typeMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caracteres suficientes."
    },
    cpf: {
        valueMissing: "O campo de CPF não pode estar vazio.",
        typeMismatch: "Por favor, preencha um CPF válido.",
        tooShort: "O campo de CPF não tem caracteres suficientes."
    },
    aniversario: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior de 18 anos para se cadastrar."
    },
    termos: {
        valueMissing: "Você deve aceitar nossos termos antes de continuar."
    }
}
