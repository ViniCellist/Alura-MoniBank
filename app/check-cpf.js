export default function isCPF(field) {
    const cpf = field.value.replace(/\.|-/g, "");
    repetitiveNumbers(cpf);

    console.log(repetitiveNumbers(cpf))
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