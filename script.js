const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
const totalDisplay = document.getElementById("total-price");

const priceMap = {
  1: "$10.00 USD",
  2: "$18.00 USD",
  3: "$24.00 USD",
};

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    const selected = document.querySelector('input[name="unit"]:checked');
    if (selected) {
      totalDisplay.textContent = priceMap[selected.value];

      // Highlight selected offer box
      document.querySelectorAll(".offer-box").forEach(box => {
        box.classList.remove("selected");
      });
      selected.closest(".offer-box").classList.add("selected");
    }
  });
});
