// Sample Data Structure (Usually loaded from separate JSON files)
const translations = {
  en: {
    ui: {
      title: "Examination of Conscience",
      submit: "Prepare Confession",
      reset: "Reset List",
    },
    categories: [
      {
        id: "cmd1",
        header: "First Commandment",
        items: [
          { id: "s1", text: "I have doubted or denied the existence of God." },
          { id: "s2", text: "I have put other things before God." },
        ],
      },
      {
        id: "cmd2",
        header: "Second Commandment",
        items: [{ id: "s3", text: "I have used the name of God in vain." }],
      },
    ],
  },
  tg: {
    ui: {
      title: "Pagsusuri ng Budhi",
      submit: "Ihanda ang Kumpisal",
      reset: "Burahin ang Listahan",
    },
    categories: [
      {
        id: "cmd1",
        header: "Unang Utos",
        items: [
          {
            id: "s1",
            text: "Nag-alinlangan ako o itinanggi ko ang pagkakaroon ng Diyos.",
          },
          { id: "s2", text: "Inuna ko ang ibang bagay kaysa sa Diyos." },
        ],
      },
      {
        id: "cmd2",
        header: "Ikalawang Utos",
        items: [
          {
            id: "s3",
            text: "Ginamit ko ang ngalan ng Diyos sa walang kabuluhan.",
          },
        ],
      },
    ],
  },
  bs: {
    ui: {
      title: "Pagsusi sa Tanlag",
      submit: "Andama ang Kompisal",
      reset: "I-reset ang Listahan",
    },
    categories: [
      {
        id: "cmd1",
        header: "Unang Sugo",
        items: [
          {
            id: "s1",
            text: "Nagduhaduha ko o naggahom-gahom sa paglimod sa presensya sa Dios.",
          },
          { id: "s2", text: "Gipauna nako ang ubang butang kaysa sa Dios." },
        ],
      },
      {
        id: "cmd2",
        header: "Ikaduhang Sugo",
        items: [
          {
            id: "s3",
            text: "Gilitok nako ang ngalan sa Dios sa walay kapuslanan.",
          },
        ],
      },
    ],
  },
};

let currentLang = "en";
let userSelections = {}; // Key: ID, Value: Boolean

const container = document.getElementById("checklist-container");
const langSwitcher = document.getElementById("langSwitcher");

// Render the Checklist
function render() {
  const data = translations[currentLang];
  document.getElementById("ui-title").innerText = data.ui.title;
  container.innerHTML = data.categories
    .map(
      (cat) => `
        <div class="category-section">
            <h3>${cat.header}</h3>
            ${cat.items
              .map(
                (item) => `
                <label class="sin-item">
                    <input type="checkbox" data-id="${item.id}" ${userSelections[item.id] ? "checked" : ""} class="sin-checkbox">
                    <span>${item.text}</span>
                </label>
            `,
              )
              .join("")}
        </div>
    `,
    )
    .join("");
}

// Track changes
document.addEventListener("change", (e) => {
  if (e.target.classList.contains("sin-checkbox")) {
    userSelections[e.target.dataset.id] = e.target.checked;
  }
  if (e.target === langSwitcher) {
    currentLang = e.target.value;
    render();
  }
});

// Prepare Summary
document.getElementById("submitBtn").onclick = () => {
  const activeData = translations[currentLang];
  const selectedText = [];
  activeData.categories.forEach((cat) => {
    cat.items.forEach((item) => {
      if (userSelections[item.id]) selectedText.push(item.text);
    });
  });

  if (selectedText.length === 0) return alert("Select at least one.");

  document.getElementById("summary-content").innerHTML =
    `<ul>${selectedText.map((t) => `<li>${t}</li>`).join("")}</ul>`;
  document.getElementById("checklist-view").classList.add("hidden");
  document.getElementById("summary-view").classList.remove("hidden");
  document.querySelector(".footer-controls").classList.add("hidden");
};

// Reset
document.getElementById("resetBtn").onclick = () => {
  if (confirm("Reset all?")) {
    userSelections = {};
    render();
  }
};

function backToChecklist() {
  document.getElementById("summary-view").classList.add("hidden");
  document.getElementById("checklist-view").classList.remove("hidden");
  document.querySelector(".footer-controls").classList.remove("hidden");
}

// Download Logic
function downloadTextFile() {
  const activeData = translations[currentLang];
  let content = `--- ${activeData.ui.title.toUpperCase()} ---\n`;
  content += `Date: ${new Date().toLocaleDateString()}\n\n`;

  let hasSelection = false;

  activeData.categories.forEach((cat) => {
    // Filter items in this category that the user checked
    const selectedItems = cat.items.filter(
      (item) => userSelections[item.id] === true,
    );

    if (selectedItems.length > 0) {
      hasSelection = true;
      content += `[ ${cat.header} ]\n`; // Add the Commandment/Category header
      selectedItems.forEach((item) => {
        content += `- ${item.text}\n`; // Add the specific sin
      });
      content += `\n`;
    }
  });

  if (!hasSelection) {
    alert("No items selected to download.");
    return;
  }

  content += `\n"Lord, I am sorry for these and all my sins."`;

  // Create the downloadable file
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Confession_${currentLang}_${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();

  // Clean up
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

render(); // Initial Load
