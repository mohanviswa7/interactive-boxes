const boxData = [
  {
    title: "Top Box",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    title: "Middle Box",
    colors: ["Black", "White", "Yellow"],
    sizes: ["XS", "S", "XL"],
  },
  {
    title: "Bottom Box",
    colors: ["Purple", "Orange", "Gray"],
    sizes: ["28", "30", "32"],
  },
];

const container = document.getElementById("boxContainer");

boxData.forEach((box, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.index = index;

  card.innerHTML = `
    <div class="card-header">${box.title}</div>
    <div class="card-body">
      <label>
        Color:
        <select>
          ${box.colors.map(color => `<option>${color}</option>`).join("")}
        </select>
      </label>
      <label>
        Size:
        <select>
          ${box.sizes.map(size => `<option>${size}</option>`).join("")}
        </select>
      </label>
    </div>
  `;

  container.appendChild(card);
});

// Expand/collapse logic
container.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;

  document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
  card.classList.add("active");
});
