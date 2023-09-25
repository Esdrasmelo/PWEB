function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
}

function usuarioGanhou(valorUsuario, valorComputador) {
  if (
    (valorUsuario === 1 && valorComputador === 3) ||
    (valorUsuario === 2 && valorComputador === 1) ||
    (valorUsuario === 3 && valorComputador === 2)
  ) {
    return true;
  }
  return false;
}

const options = document.querySelectorAll(".option");
const resultDisplay = document.getElementById("result");

options.forEach((option) => {
  option.addEventListener("click", () => {
    const userChoice = option.id;
    const valorUsuario =
      userChoice === "rock" ? 1 : userChoice === "paper" ? 2 : 3;
    const valorEscolhidoComputador = generateRandomNumber();
    const result = usuarioGanhou(valorUsuario, valorEscolhidoComputador);
    displayResult(result);
  });
});

function displayResult(usuarioGanhou) {
  if (usuarioGanhou) {
    resultDisplay.textContent = "Você ganhou!!!";
  } else {
    resultDisplay.textContent = "Você perdeu!!";
  }
  resultDisplay.classList.add("shake");
  setTimeout(() => {
    resultDisplay.classList.remove("shake");
  }, 500);
}
