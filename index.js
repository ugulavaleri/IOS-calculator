const td = document.getElementsByTagName("td");
const inputNum = document.getElementById("inputNum");

const equal = document.getElementById("equal");
const convertNeg = document.getElementById("convertNeg");
const ClearButton = document.getElementById("Clear");
const disable = document.getElementsByClassName("disable");
ClearButton.textContent = "AC";

inputNum.value = 0;

for (let i = 0; i < td.length; i++) {
    const element = td[i];

    inputNum.addEventListener("input", (e) => {
        inputNum.value = e.target.value;
        ClearButton.textContent = "C";
    });
    element.addEventListener("click", () => {
        if (
            [...inputNum.value][0] == 0 &&
            element.innerHTML !== "+/-" &&
            element.innerHTML !== "%" &&
            element.innerHTML !== "÷" &&
            element.innerHTML !== "×" &&
            element.innerHTML !== "-" &&
            element.innerHTML !== "+"
        ) {
            let title = [...inputNum.value];
            title.shift();
            const vsx = title.join("");
            inputNum.value = vsx;
        }

        ClearButton.textContent = "C";

        if (element.innerHTML !== "=" && element.innerHTML !== "+/-") {
            inputNum.value = `${inputNum.value}${element.innerText}`;
        } else {
            let text;
            text = inputNum.value
                .replaceAll("×", "*")
                .replaceAll("÷", "/")
                .replaceAll(",", ".");
            inputNum.value = eval(text);
        }
    });
    convertNeg.addEventListener("click", () => {
        if (inputNum.value.trim() !== "") {
            inputNum.value *= -1;
        }
    });
    ClearButton.addEventListener("click", () => {
        inputNum.value = "";
        ClearButton.textContent = "AC";
        inputNum.value = 0;
    });
}
