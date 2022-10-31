const btn = document.querySelector("button");
const uploadBox = document.querySelector(".upload-box"),
previewImg = document.querySelector("img"),
widthInput = document.querySelector(".width input"),
heightInput = document.querySelector(".height input"),
fileIput = uploadBox.querySelector("input");

const canv = document.getElementById("myCanvas");
let canW = canv.width - 40;
let canH = canv.height - 40;
let ogImageRatio;

function loadFile(e) {
    const file = e.target.files[0];
    if (!file)
        return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("scream");
        ctx.drawImage(img, 20, 20, canW, canH);
    });
    console.log(file);
}

fileIput.addEventListener("change", loadFile);

function notRandomBG() {
    let colorInput = document.getElementById("bgInput1").value;
    let canvas = document.getElementById("myCanvas");

    canvas.style.background = colorInput;
}

btn.onclick = function() {
    let canvas = document.getElementById("myCanvas");
    let anchor = document.createElement("a");
    let ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "destination-over";
    let colorInput = document.getElementById("bgInput1").value;
    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    ctx.fillStyle = colorInput;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(previewImg, 10, 10, canvas.width - 20, canvas.height - 20);

    
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "IMAGE.PNG";
    anchor.click();
}

