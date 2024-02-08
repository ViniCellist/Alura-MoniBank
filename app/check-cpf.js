export default function isCPF(field) {
    const cpf = field.value.replace(/\.|-/g, "");

    if(repetitiveNumbers(cpf) || checkFirstDigit(cpf) || checkSecondDigit(cpf)) {
        field.setCustomValidity("Esse CPF não é válido!");
    };
    
};

function repetitiveNumbers(cpf) {
    const repeatNumber = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return repeatNumber.includes(cpf);
};

function checkFirstDigit(cpf) {
    let plus = 0;
    let multiply = 10;

    for(let i = 0; i < 9; i++) {
        plus += cpf[i] * multiply;
        multiply--;
    };

    plus = (plus * 10) % 11;

    if(plus == 10 || plus == 11) {
        plus = 0;
    };
    return plus != cpf[9];
};

function checkSecondDigit(cpf) {
    let plus = 0;
    let multiply = 11;

    for(let i = 0; i < 10; i++) {
        plus += cpf[i] * multiply;
        multiply--;
    };

    plus = (plus * 10) % 11;

    if(plus == 10 || plus == 11) {
        plus = 0;
    };
    return plus != cpf[10];
};