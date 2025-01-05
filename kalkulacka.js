// kalkulacka.js

document.addEventListener("DOMContentLoaded", () => {
    // Funkce pro získání vstupních hodnot
    function getInputs() {
        const vstup1 = parseInt(document.getElementById("vstup1").value);
        const vstup2 = parseInt(document.getElementById("vstup2").value);
        return { vstup1, vstup2 };
    }

    // Funkce pro zobrazení výsledku
    function displayResult(result) {
        const vysledek = document.getElementById("vysledek");
        vysledek.textContent = `Výsledek: ${result}`;
    }

    // Funkce pro provedení operace
    function calculate(operation) {
        const { vstup1, vstup2 } = getInputs();

        if (isNaN(vstup1) || isNaN(vstup2)) {
            displayResult("Zadejte obě čísla.");
            return;
        }

        let result;
        switch (operation) {
            case "+":
                result = vstup1 + vstup2;
                break;
            case "-":
                result = vstup1 - vstup2;
                break;
            case "*":
                result = vstup1 * vstup2;
                break;
            case "/":
                result = vstup2 !== 0 ? vstup1 / vstup2 : "Dělení nulou není možné.";
                break;
            default:
                result = "Neplatná operace.";
        }

        displayResult(result);
    }

    // Přidání posluchačů událostí na tlačítka
    document.getElementById("tlPlus").addEventListener("click", () => calculate("+"));
    document.getElementById("tlMinus").addEventListener("click", () => calculate("-"));
    document.getElementById("tlKrat").addEventListener("click", () => calculate("*"));
    document.getElementById("tlDeleno").addEventListener("click", () => calculate("/"));
});
