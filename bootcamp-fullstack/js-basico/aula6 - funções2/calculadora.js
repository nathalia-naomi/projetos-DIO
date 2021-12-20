/*
Number() converte valores em números
Prompt() registra entradas de usuários
Alert() mostrar mensafem ao usuário
TemplateStrings
*/

function calculadora() {
  const operacao = Number(
    prompt(
      'Escolha uma operação:\n 1 - Soma \n 2 - Subtração\n 3 - Multiplicação \n 4 - Divisão real \n 5 - Divisão inteira \n 6 - Potenciação',
    ),
  );

  if (!operacao || operacao >= 7) {
    alert('Erro - operação inválida!');
    calculadora();
  } else {
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2) {
      alert('Erro - parâmetro inválidos');
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
      }
      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
      }
      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
      }
      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
      }
      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
      }
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
      }

      function novaOperacao() {
        let opcao = prompt('Deseja azer outra operação?\n 1 - Sim\n 2 - Não');
        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Até mais');
        } else {
          alert('Digite uma opcao valida');
          novaOperacao();
        }
      }

      switch (operacao) {
        case 1:
          soma();
          novaOperacao();
          break;
        case 2:
          subtracao();
          novaOperacao();
          break;
        case 3:
          multiplicacao();
          novaOperacao();
          break;
        case 4:
          divisaoReal();
          novaOperacao();
          break;
        case 5:
          divisaoInteira();
          novaOperacao();
          break;
        case 6:
          potenciacao();
          novaOperacao();
          break;
      }
    }
  }
}

calculadora();
