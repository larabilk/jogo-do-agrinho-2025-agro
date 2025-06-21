<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Desafio do Agro - PJ5S</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0fff0;
      text-align: center;
      padding: 30px;
    }
    .pergunta {
      font-size: 20px;
      margin: 20px;
    }
    button {
      margin: 10px;
      padding: 10px 20px;
      font-size: 16px;
    }
    #resultado {
      font-size: 22px;
      font-weight: bold;
      margin-top: 30px;
    }
  </style>
</head>
<body>

  <h1>🌾 Desafio do Agro - PJ5S 🌾</h1>
  <div class="pergunta" id="pergunta"></div>
  <div id="botoes"></div>
  <div id="resultado"></div>

  <script>
    const perguntas = [
      {
        texto: "O que o agro produz?",
        opcoes: ["Celulares", "Frutas, leite e cereais", "Carros"],
        correta: 1
      },
      {
        texto: "Qual é um exemplo de alimento saudável vindo do campo?",
        opcoes: ["Refrigerante", "Chocolate", "Cenoura"],
        correta: 2
      },
      {
        texto: "Qual dessas atitudes ajuda o meio ambiente?",
        opcoes: ["Jogar lixo no rio", "Plantar árvores", "Desmatar florestas"],
        correta: 1
      },
      {
        texto: "Qual dessas máquinas é usada no agro?",
        opcoes: ["Trator", "Avião de guerra", "Computador gamer"],
        correta: 0
      },
      {
        texto: "O que é importante na produção de alimentos?",
        opcoes: ["Cuidar do solo e da água", "Poluir o ambiente", "Não plantar nada"],
        correta: 0
      }
    ];

    let indiceAtual = 0;
    let pontos = 0;

    function mostrarPergunta() {
      const p = perguntas[indiceAtual];
      document.getElementById("pergunta").innerText = p.texto;
      const botoes = document.getElementById("botoes");
      botoes.innerHTML = "";

      p.opcoes.forEach((opcao, i) => {
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.onclick = () => verificarResposta(i);
        botoes.appendChild(botao);
      });
    }

    function verificarResposta(escolha) {
      if (escolha === perguntas[indiceAtual].correta) {
        pontos++;
        alert("✅ Resposta certa!");
      } else {
        alert("❌ Resposta errada!");
      }

      indiceAtual++;
      if (indiceAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        mostrarResultado();
      }
    }

    function mostrarResultado() {
      document.getElementById("pergunta").style.display = "none";
      document.getElementById("botoes").style.display = "none";
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `Você acertou <strong>${pontos}</strong> de <strong>${perguntas.length}</strong> perguntas!<br><br>` +
        (pontos >= 4 ? "🎉 Parabéns! Você é um Guardião do Agro!" : "👍 Boa tentativa! Continue aprendendo sobre o campo!");
    }

    mostrarPergunta();
  </script>

</body>
</html>
