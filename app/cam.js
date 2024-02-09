const btnCam = document.querySelector('[data-video-botao]');
const fieldCam = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const btnTakePic = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const message = document.querySelector('[data-mensagem]');
const btnSendPic = document.querySelector('[data-enviar]');
let imageURL = ""

btnCam.addEventListener('click', async function () {
    const initVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    btnCam.style.display = "none";
    fieldCam.style.display = "block";

    video.srcObject = initVideo;
});

btnTakePic.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imageURL = canvas.toDataURL("image/jpeg");

    fieldCam.style.display = "none";
    message.style.display = "block";
});

btnSendPic.addEventListener('click', () => {
    const receive = localStorage.getItem("cadastro");
    const convertReturn = JSON.parse(receive);

    convertReturn.imagem = imageURL;

    localStorage.setItem("cadastro", JSON.stringify(convertReturn));

    window.location.href = "../pages/abrir-conta-form-3.html";
})