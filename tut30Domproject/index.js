const btn = document.getElementById("btn")



btn.addEventListener("click", () => {

    const input1 = Number(document.getElementById("input1").value)
    const input2 = Number(document.getElementById("input2").value)
    const operator = document.getElementById("operator").value  

    let result


    switch (operator) {
        case '+':
            result = input1 + input2
            break;
        case '-':
            result = input1 - input2
            break;
        case '*':
            result = input1 * input2
            break;
        case '/':
            result = input1 / input2
            break;

        default:
            result = "invalid"
            break;
    }

    document.getElementById("result").innerText = "Result" + result



})