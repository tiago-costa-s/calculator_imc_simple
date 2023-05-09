const dataHeight = document.querySelector("#calculator-height");
const dataWeight = document.querySelector("#calculator-weight");
const btnCalculator = document.querySelector("#btn-calculator");

const calculatorBody = document.querySelector("#calculator-body");


// Funções
function calcImc(dataHeight, dataWeight) {
    console.log("Altura: " + dataWeight);
    console.log("Peso: " + dataHeight);

    const imc = (dataWeight / (dataHeight * dataHeight)).toFixed(1);

    console.log("IMC:" + imc);

    return imc;
}

let spanH3;

function createResult() {
    const calculatorResult = document.createElement("div");
    calculatorResult.id = "calculator-result";

    const result = document.createElement("div");
    result.id = "result";

    const h3 = document.createElement("h3");
    h3.id = "result-h3";
    h3.textContent = "Seu IMC: ";
    result.append(h3);

    spanH3 = document.createElement("span");
    spanH3.id = "span-h3";
    spanH3.textContent = calcImc();
    h3.appendChild(spanH3);

    const pResultImc = document.createElement("p");
    pResultImc.id = "result-imc";
    result.appendChild(pResultImc);

    const spanResultImc = document.createElement("span");
    spanResultImc.id = "span-result-imc";
    pResultImc.appendChild(spanResultImc);

    const resultWeight = document.createElement("p");
    resultWeight.id = "result-weight";
    result.appendChild(resultWeight);

    const spanResultWeight = document.createElement("span");
    spanResultWeight.id = "span-result-weight";
    resultWeight.appendChild(spanResultWeight);

    calculatorResult.appendChild(result);
    calculatorBody.appendChild(calculatorResult);
}


// Eventos
btnCalculator.addEventListener("click", () => {
    const heightData = +dataHeight.value.replace(",", ".");
    const weightData = +dataWeight.value.replace(",", ".");

    if (!heightData || !weightData) return;

    calcImc(heightData, weightData);

    createResult();
    let imcInfo = calcImc(heightData, weightData);;
    spanH3.textContent = `${imcInfo}`;

});



// // Capturar os dados da Pagina
// btnCalculator.addEventListener('click', () => {
//     let weightData = dataWeight.value;
//     let heightData = dataHeight.value;

//     // Trando numeros que utilizam "," virgula.
//     weightData = +weightData.replace(",", ".");
//     weightData = weightData.toFixed(2);
//     heightData = +heightData.replace(",", ".");
//     heightData = heightData.toFixed(2);

//     console.log(weightData + " " + heightData);


//     // Tabela de IMC

//     if (weightData == 0 || heightData == 0) {
//         mensage = "Preencha os campos corretamente.";
//     } else {
//         if (imc < 18.5) {
//             mensage = "Abaixo do peso normal";
//         } else if (imc > 18.5 && imc <= 24.99) {
//             mensage = "Peso normal";
//         } else if (imc >= 25.0 && imc <= 29.99) {
//             mensage = "Levemente acima do peso";
//         } else if (imc >= 30.0 && imc <= 34.9) {
//             mensage = "Obesidade I";
//         } else if (imc >= 35.0 && imc <= 39.99) {
//             mensage = "Obesidade II";
//         } else {
//             mensage = "Obesidade III";
//         }
//     };



//     // Verificar dado tipo NaN
//     function verifyInfinityNaN() {
//         if (isNaN(imc) == true) {
//             result.innerHTML = `<h2></h2><p>Por favor. Insira somente números válidos.</p>`;
//         } else if (isFinite(imc) !== true) {
//             result.innerHTML = `<h2>${mensage}</h2><p></p>`;
//         } else {
//             result.innerHTML = `<h2>${mensage}</h2><p>IMC ${imc.toFixed(1)} </p>`;
//         }
//     }
//     verifyInfinityNaN();


//     calcImc(weightData, heightData);
// });



// function calcImc(dataWeight, dataHeight) {
//     const imc = dataHeight / (dataWeight * dataWeight);
// }


