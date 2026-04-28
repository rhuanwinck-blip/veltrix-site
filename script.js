console.log("Veltrix AI carregado com sucesso.");

const buttons = document.querySelectorAll("a[href='#planos']");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Usuário clicou para ver os planos.");
  });
});