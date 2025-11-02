   const pontos = localStorage.getItem("pontuacaoQuiz");
    const valor = document.getElementById("pontuacaoValor");
    const msg = document.getElementById("mensagem");

    if (pontos !== null) {
      valor.textContent = `Você acertou ${pontos} de 9 perguntas!`;

      if (pontos >= 6) {
        msg.innerHTML = `Excelente desempenho! 💖<br> 
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSepXooyh_I_E__0WA6IjLS1ELG5hhRSJIgZgIKgxPg7MldY2w/viewform?usp=header" target="_blank">
          Acesse seu link especial 💌
        </a>`;
      } else {
        msg.textContent = "Continue acompanhando as tendências e tente novamente mais tarde 💅";
      }
    } else {
      valor.textContent = "Você ainda não respondeu o quiz.";
    }
