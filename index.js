/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

REQS:
1) Follow design spec (On Figma)
2) Generate all conversion when the user clicks "Convert"
3) Round the numbers down to 3 places use number.toFixed(3) for this
*/
const feet = 3.281;
const gallons = 0.264;
const lb = 2.204;

const convertBtn = document.getElementById('convert-btn');
const numberEl = document.getElementById('number');
const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');

const convert = () => {
    const num = numberEl.value;
    if (!num) {
        return;
    }

    const metersToFeet = num * feet;
    const feetToMeters = num / feet;
    const lengthText = `${num} meters = ${metersToFeet.toFixed(3)} feet | ${num} feet = ${feetToMeters.toFixed(3)} meters`;

    const litersToGallon = num * gallons;
    const gallonsToLiters = num / gallons;
    const volumeText = `${num} liters = ${litersToGallon.toFixed(3)} gallons | ${num} gallons = ${gallonsToLiters.toFixed(
        3
    )} liters`;

    const kilosToPounds = num * lb;
    const poundstoKilos = num / lb;
    const massText = `${num} kilos = ${kilosToPounds.toFixed(3)} pounds | ${num} pounds = ${poundstoKilos.toFixed(3)} kilos`;

    lengthEl.innerText = lengthText;
    volumeEl.innerText = volumeText;
    massEl.innerText = massText;
};

convertBtn.addEventListener('click', () => convert());
