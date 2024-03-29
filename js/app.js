// Seleção de elementos
const dataHeight = document.querySelector("#calculator-height");
const dataWeight = document.querySelector("#calculator-weight");

const btnCalculator = document.querySelector("#btn-calculator");
const btnReset = document.querySelector("#btn-reset");

const calculatorBody = document.querySelector("#calculator-body");

// Funções

// Aciona o calculo do imc atraves da tecla "Enter".
function pressEnter(e) {
    if (e.key === "Enter") {
        calculateImc();
    }
}

// Reseta os inputs e o resultado.
function resetInputs() {
    dataHeight.value = "";
    dataWeight.value = "";
    calculatorResult.innerHTML = ``;
}

// Reseta somente o resultado
function resetResult() {
    if (dataHeight.value === "" || dataWeight.value === "") {
        calculatorResult.innerHTML = ``;
    }
}

function calcImc(dataHeight, dataWeight) {
    const imc = (dataWeight / (dataHeight * dataHeight)).toFixed(1);
    return imc;
}

function calculateImc() {

    const heightData = +dataHeight.value.replace(",", ".");
    const weightData = +dataWeight.value.replace(",", ".");

    if (!heightData || !weightData) return;

    createTemplateResult();

    let imcInfo = calcImc(heightData, weightData);
    spanResultImc.textContent = `${imcInfo}`;

    let classification;

    if (imcInfo < 14.0) {
        classification = `Muito abaixo do peso`;
        spanH3.classList.add("very-high");
        spanResultImc.classList.add("very-high");
    }
    else if (imcInfo > 14.0 && imcInfo <= 18.5) {
        classification = `Abaixo do peso`;
        spanH3.classList.add("average");
        spanResultImc.classList.add("average");
    }
    else if (imcInfo > 18.5 && imcInfo <= 24.99) {
        classification = `Peso normal`;
        spanH3.classList.add("good");
        spanResultImc.classList.add("good");
    }
    else if (imcInfo >= 25.0 && imcInfo <= 29.99) {
        classification = `Levemente acima do peso`;
        spanH3.classList.add("average");
        spanResultImc.classList.add("average");
    }
    else if (imcInfo >= 30.0 && imcInfo <= 34.9) {
        classification = `Obesidade I`;
        spanH3.classList.add("high");
        spanResultImc.classList.add("high");
    }
    else if (imcInfo >= 35.0 && imcInfo <= 39.9) {
        classification = `Obesidade II`;
        spanH3.classList.add("high");
        spanResultImc.classList.add("high");
    }
    else {
        classification = `Obesidade III (Grave)`;
        // spanH3.style.color = "red";
        spanH3.classList.add("very-high");
        spanResultImc.classList.add("very-high");
    }

    spanH3.textContent = `${classification}`;
}

// Cria o template do resultado.
let spanH3;
let spanResultImc;
let pResultImc;
let calculatorResult = document.createElement("div");

function createTemplateResult() {

    calculatorResult.id = "calculator-result";

    const result = document.createElement("div");
    result.id = "result";

    const h3 = document.createElement("h3");
    h3.id = "result-h3";
    h3.textContent = `Classificação: `;
    result.append(h3);

    spanH3 = document.createElement("span");
    spanH3.id = "span-h3";
    h3.appendChild(spanH3);

    pResultImc = document.createElement("p");
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

// Eventos

btnCalculator.addEventListener("click", () => {
    calculateImc();
});

btnReset.addEventListener("click", () => {
    resetInputs()
});

const inputs = [dataHeight, dataWeight];
inputs.forEach((input) => {
    input.addEventListener("keyup", pressEnter);
});


inputs.forEach((input) => {
    input.addEventListener("input", resetResult)
});


