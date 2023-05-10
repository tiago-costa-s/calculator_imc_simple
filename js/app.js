const dataHeight = document.querySelector("#calculator-height");
const dataWeight = document.querySelector("#calculator-weight");

const btnCalculator = document.querySelector("#btn-calculator");
const btnReset = document.querySelector("#btn-reset");

const calculatorBody = document.querySelector("#calculator-body");

// Funções
function calcImc(dataHeight, dataWeight) {
    const imc = (dataWeight / (dataHeight * dataHeight)).toFixed(1);
    return imc;
}

let spanH3;
let spanResultImc;
let calculatorResult = document.createElement("div");

function createResult() {

    calculatorResult.id = "calculator-result";

    const result = document.createElement("div");
    result.id = "result";

    const h3 = document.createElement("h3");
    h3.id = "result-h3";
    result.append(h3);

    spanH3 = document.createElement("span");
    spanH3.id = "span-h3";
    h3.appendChild(spanH3);

    const pResultImc = document.createElement("p");
    pResultImc.id = "result-imc";
    pResultImc.textContent = `Seu IMC: `;
    result.appendChild(pResultImc);

    spanResultImc = document.createElement("span");
    spanResultImc.id = "span-result-imc";
    spanResultImc.textContent = calcImc();
    pResultImc.appendChild(spanResultImc);

    const resultWeight = document.createElement("p");
    resultWeight.id = "result-weight";
    result.appendChild(resultWeight);

    const spanResultWeight = document.createElement("span");
    spanResultWeight.id = "span-result-weight";
    resultWeight.appendChild(spanResultWeight);

    calculatorResult.innerHTML = ``;
    calculatorResult.appendChild(result);
    calculatorBody.appendChild(calculatorResult);
}


function resetInputs() {
    dataHeight.value = "";
    dataWeight.value = "";
    calculatorResult.innerHTML = ``;
    
}

// Eventos
btnCalculator.addEventListener("click", () => {

    const heightData = +dataHeight.value.replace(",", ".");
    const weightData = +dataWeight.value.replace(",", ".");

    if (!heightData || !weightData) return;

    calcImc(heightData, weightData);

    createResult();

    let imcInfo = calcImc(heightData, weightData);
    spanResultImc.textContent = `${imcInfo}`;

    let classification;

    if (imcInfo < 14.0) {
        classification = `Muito abaixo do peso normal`;
    }
    else if (imcInfo > 14.0 && imcInfo <= 18.5) {
        classification = `Abaixo do peso normal`;
    }
    else if (imcInfo > 18.5 && imcInfo <= 24.99) {
        classification = `Peso normal`;
    }
    else if (imcInfo >= 25.0 && imcInfo <= 29.99) {
        classification = `Levemente acima do peso`;
    }
    else if (imcInfo >= 30.0 && imcInfo <= 34.9) {
        classification = `Obesidade I`;
    }
    else if (imcInfo >= 35.0 && imcInfo <= 39.9) {
        classification = `Obesidade II`;
    }
    else {
        classification = `Obesidade III (Grave)`;
    }

    spanH3.textContent = `${classification}`;
});


btnReset.addEventListener("click", () => {
    resetInputs()
});
