export default function isAge(field) {
    const dateBirth = new Date(field.value);
    checkAge(dateBirth);

    console.log(checkAge(dateBirth));
};

function checkAge(data) {
    const dateToday = new Date();
    const dateEighteen = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dateToday >= dateEighteen;
};