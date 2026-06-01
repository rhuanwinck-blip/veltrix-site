const planButtons = document.querySelectorAll(".select-plan");
const selectedPlanText = document.querySelector("#selectedPlanText");
const form = document.querySelector("#onboardingForm");
const formNote = document.querySelector("#formNote");

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;
    const price = button.dataset.price;

    selectedPlanText.textContent = `${plan} — ${price}`;
    document.querySelector("#formulario").scrollIntoView({ behavior: "smooth" });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  formNote.textContent = "Diagnóstico recebido! Próximo passo: nossa equipe valida os dados, prepara os fluxos n8n e define as conexões de IA.";
  formNote.classList.add("success");
  form.reset();
});
