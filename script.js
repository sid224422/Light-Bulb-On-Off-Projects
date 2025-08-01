


const bulb = document.getElementById("bulb");
const wire = document.getElementById("wire");
const body = document.body;
let isOn = false;
let isDragging = false;

function dragStart(e) {
    e.preventDefault();
    isDragging = true;
    bulb.classList.add("dragging");
    if (wire) wire.classList.add("dragging");
}

function dragEnd(e) {
    if (!isDragging) return;
    isOn = !isOn;
    body.classList.toggle("on", isOn);
    bulb.classList.remove("dragging");
    if (wire) wire.classList.remove("dragging");
    isDragging = false;
}

bulb.addEventListener("mousedown", dragStart);
bulb.addEventListener("touchstart", dragStart);
document.addEventListener("mouseup", dragEnd);
document.addEventListener("touchend", dragEnd);