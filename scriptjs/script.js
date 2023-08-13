const name1Input = document.getElementById("name1");
const name2Input = document.getElementById("name2");
const calculateButton = document.getElementById("calculateButton");
const clearButton = document.getElementById("clearButton");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("resultText");
const historyTableBody = document.getElementById("historyTableBody");

calculateButton.addEventListener("click", calculateLove);
clearButton.addEventListener("click", clearForm);

function calculateLove() {
  const name1 = name1Input.value.trim();
  const name2 = name2Input.value.trim();

  if (name1 === "" || name2 === "") {
    alert("Por favor, insira os nomes.");
    return;
  }

  const compatibility = Math.floor(Math.random() * 101);
  const resultMessage = `A compatibilidade de amor entre ${name1} e ${name2} é ${compatibility}%.`;

  resultText.textContent = resultMessage;
  resultDiv.classList.remove("hidden");

  const newRow = historyTableBody.insertRow(0);
  const nameCell = newRow.insertCell(0);
  const compatibilityCell = newRow.insertCell(1);

  nameCell.textContent = `${name1} e ${name2}`;
  compatibilityCell.textContent = `${compatibility}%`;

  clearForm();
}

function clearForm() {
  name1Input.value = "";
  name2Input.value = "";
  resultDiv.classList.add("hidden");
}


