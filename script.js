const translations = {
  en: {
    ui: {
      title: "Examination of Conscience",
      prepareBtn: "Prepare Confession",
      resetBtn: "Reset",
      summaryTitle: "My Confession List",
    },
    categories: [
      {
        id: "c1",
        header: "1st Commandment",
        items: [
          { id: "s1", text: "I have neglected my daily prayers." },
          { id: "s2", text: "I have put money or work before God." },
        ],
      },
    ],
  },
  tg: {
    ui: {
      title: "Pagsusuri ng Konsensya",
      prepareBtn: "Ihanda ang Kumpisal",
      resetBtn: "Burahin",
      summaryTitle: "Aking Kumpisal",
    },
    categories: [
      {
        id: "c1",
        header: "Unang Utos",
        items: [
          {
            id: "s1",
            text: "Nakakalimot ako sa aking pang-araw-araw na dasal.",
          },
          {
            id: "s2",
            text: "Inuna ko ang pera o trabaho kaysa sa Diyos.",
          },
        ],
      },
    ],
  },
  bs: {
    ui: {
      title: "Pagsusi",
      prepareBtn: "Andama ang Kompisal",
      resetBtn: "I-reset",
      summaryTitle: "Akong Kompisal",
    },
    categories: [
      {
        id: "c1",
        header: "Unang Sugo",
        items: [
          {
            id: "s1",
            text: "Nakalimot ko sa akong inadlaw-adlaw nga pag-ampo.",
          },
          {
            id: "s2",
            text: "Gipalabi nako ang kwarta o trabaho kaysa sa Dios.",
          },
        ],
      },
    ],
  },
};

const application = Stimulus.Application.start();

application.register(
  "confession",
  class extends Stimulus.Controller {
    static targets = [
      "container",
      "uiTitle",
      "submitBtn",
      "resetBtn",
      "checklistView",
      "summaryView",
      "summaryContent",
      "summaryTitle",
      "footer",
    ];
    static values = { lang: String, selections: Object };

    connect() {
      this.selectionsValue = {};
      this.langValue = "en";
      this.render();
    }

    switchLanguage(event) {
      this.langValue = event.target.value;
      this.render();
    }

    toggleSin(event) {
      const id = event.target.dataset.id;
      this.selectionsValue = {
        ...this.selectionsValue,
        [id]: event.target.checked,
      };
    }

    render() {
      const data = translations[this.langValue];
      this.uiTitleTarget.innerText = data.ui.title;
      this.submitBtnTarget.innerText = data.ui.prepareBtn;
      this.resetBtnTarget.innerText = data.ui.resetBtn;
      this.summaryTitleTarget.innerText = data.ui.summaryTitle;

      this.containerTarget.innerHTML = data.categories
        .map(
          (cat) => `
                    <div class="category-section">
                        <h3>${cat.header}</h3>
                        ${cat.items
                          .map(
                            (item) => `
                            <label class="sin-item">
                                <input type="checkbox" data-id="${item.id}" 
                                       data-action="change->confession#toggleSin"
                                       ${this.selectionsValue[item.id] ? "checked" : ""}>
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

    submit() {
      const data = translations[this.langValue];
      let listHtml = "<ul>";
      let count = 0;
      data.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          if (this.selectionsValue[item.id]) {
            listHtml += `<li>${item.text}</li>`;
            count++;
          }
        });
      });
      listHtml += "</ul>";

      if (count === 0) return alert("Select at least one first.");

      this.summaryContentTarget.innerHTML = listHtml;
      this.toggleView();
    }

    toggleView() {
      this.checklistViewTarget.classList.toggle("hidden");
      this.summaryViewTarget.classList.toggle("hidden");
      this.footerTarget.classList.toggle("hidden");
      window.scrollTo(0, 0);
    }

    reset() {
      if (confirm("Clear all selections?")) {
        this.selectionsValue = {};
        this.render();
      }
    }

    download() {
      const data = translations[this.langValue];
      let text = `${data.ui.summaryTitle}\n\n`;
      data.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          if (this.selectionsValue[item.id]) text += `- ${item.text}\n`;
        });
      });
      const blob = new Blob([text], { type: "text/plain" });
      const a = Object.assign(document.createElement("a"), {
        href: URL.createObjectURL(blob),
        download: "confession.txt",
      });
      a.click();
    }
  },
);
