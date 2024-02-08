export default function isAge(field) {
    const dateBirth = new Date(field.value);
    
    if (!checkAge(dateBirth)) {
        field.setCustomValidity("O usuário não é maior de idade");
    };
};

function checkAge(data) {
    const dateToday = new Date();
    const dateEighteen = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dateToday >= dateEighteen;
};