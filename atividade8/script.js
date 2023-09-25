function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) return randomNumber;

    return generateRandomNumber();
}

function usuarioGanhou(valorUsuario, valorComputador) {
    if (valorUsuario === 1 && valorComputador === 2) return false;
    if (valorUsuario === 1 && valorComputador === 3) return true;
    if (valorUsuario === 2 && valorComputador === 1) return true;
    if (valorUsuario === 2 && valorComputador === 3) return false;
    if (valorUsuario === 3 && valorComputador === 1) return false;
    if (valorUsuario === 3 && valorComputador === 2) return true;
}

function main() {
    const valorUsuario = Number(window.prompt("Escolha um simbolo: \n1 - Pedra\n2 - Papel\n3 - Tesoura"))
    const valorEhValido = [1, 2, 3].find(valor => valor === valorUsuario);

    if (!valorEhValido) {
       return window.alert("Valor Invalido");
    }

    const valorEscolhidoComputador = generateRandomNumber();

    if (valorEscolhidoComputador === valorUsuario) return window.alert("Empate!");

    if (usuarioGanhou(valorUsuario, valorEscolhidoComputador)) return window.alert("Você ganhou!!!");
    else return window.alert("Você perdeu!!");
}

main()