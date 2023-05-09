const dataWeight = document.querySelector("#calculator-weight");
const dataHeight = document.querySelector("#calculator-height");
const btnCalculator = document.querySelector("#btn-calculator");
const result = document.querySelector("#calculator-result");

// Capturar os dados da Pagina
btnCalculator.addEventListener('click', () => {
    let weightData = dataWeight.value;
    let heightData = dataHeight.value;

    // Trando numeros que utilizam "," virgula.
    weightData = +weightData.replace(",", ".");     
    weightData = weightData.toFixed(2); 
    heightData = +heightData.replace(",", ".");   
    heightData = heightData.toFixed(2);

    console.log(weightData + " " + heightData);
    const imc = heightData / (weightData * weightData);

    // Tabela de IMC
    function verifyImc() {
        if (weightData == 0 || heightData == 0) {
            mensage = "Preencha os campos corretamente.";
        } else {
            if (imc < 18.5) {
                mensage = "Abaixo do peso normal";
            } else if (imc > 18.5 && imc <= 24.99) {
                mensage = "Peso normal";
            } else if (imc >= 25.0 && imc <= 29.99) {
                mensage = "Levemente acima do peso";
            } else if (imc >= 30.0 && imc <= 34.9) {
                mensage = "Obesidade I";
            } else if (imc >= 35.0 && imc <= 39.99) {
                mensage = "Obesidade II";
            } else {
                mensage = "Obesidade III";
            }
        };
    };
    verifyImc();

    // Verificar dado tipo NaN
    function verifyInfinityNaN() {
        if (isNaN(imc) == true) {
            result.innerHTML = `<h2></h2><p>Por favor. Insira somente números válidos.</p>`;
        } else if (isFinite(imc) !== true) {
            result.innerHTML = `<h2>${mensage}</h2><p></p>`;
        } else {
            result.innerHTML = `<h2>${mensage}</h2><p>IMC ${imc.toFixed(1)} </p>`;
        }
    }
    verifyInfinityNaN();
});



