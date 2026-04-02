import { translations } from "./translations.js";

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
      "confessionGuideView",
      "confessionGuideTitle",
      "confessionGuideContent",
      "confessionGuideBtn",
      "copyListBtn",
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
      const data = translations[this.langValue];
      if (!this.summaryViewTarget.classList.contains("hidden")) {
        this.confessionGuideBtnTarget.innerText = data.ui.confessionGuideBtn;
        this.copyListBtnTarget.innerText = data.ui.copyListBtn;
        this.renderSummary();
      }
      if (!this.confessionGuideViewTarget.classList.contains("hidden")) {
        this.confessionGuideBtnTarget.innerText = data.ui.confessionGuideBtn;
        this.confessionGuideTitleTarget.innerText = data.ui.confessionGuideTitle;
      }
    }

    renderSummary() {
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
      this.summaryContentTarget.innerHTML = listHtml;
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
      let count = 0;
      const data = translations[this.langValue];
      data.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          if (this.selectionsValue[item.id]) {
            count++;
          }
        });
      });

      if (count === 0) return alert("Select at least one first.");

      this.confessionGuideBtnTarget.innerText = data.ui.confessionGuideBtn;
      this.copyListBtnTarget.innerText = data.ui.copyListBtn;
      this.renderSummary();
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

    renderConfessionGuide() {
      const data = translations[this.langValue];
      const ui = data.ui;

      let sinsList = "";
      data.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          if (this.selectionsValue[item.id]) {
            sinsList += `   - ${item.text}\n`;
          }
        });
      });

      const guide = ui.confessionGuide.replace(
        "{{SINS_LIST}}",
        sinsList || "   (None)",
      );

      this.confessionGuideTitleTarget.innerText = ui.confessionGuideTitle;
      this.confessionGuideContentTarget.innerText = guide;

      this.summaryViewTarget.classList.add("hidden");
      this.confessionGuideViewTarget.classList.remove("hidden");
      window.scrollTo(0, 0);
    }

    copyGuide() {
      const text = this.confessionGuideContentTarget.innerText;
      const msg = translations[this.langValue].ui.confessionGuideCopied;
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert(msg);
        })
        .catch(() => {
          const range = document.createRange();
          range.selectNodeContents(this.confessionGuideContentTarget);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          document.execCommand("copy");
          alert(msg);
        });
    }

    backToSummary() {
      this.confessionGuideViewTarget.classList.add("hidden");
      this.summaryViewTarget.classList.remove("hidden");
      window.scrollTo(0, 0);
    }

    copyList() {
      const data = translations[this.langValue];
      let text = `${data.ui.summaryTitle}\n\n`;
      data.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          if (this.selectionsValue[item.id]) {
            text += `- ${item.text}\n`;
          }
        });
      });
      const msg = data.ui.copyListCopied;
      navigator.clipboard.writeText(text).then(() => {
        alert(msg);
      }).catch(() => {
        alert(msg);
      });
    }

    goHome() {
      this.checklistViewTarget.classList.remove("hidden");
      this.summaryViewTarget.classList.add("hidden");
      this.confessionGuideViewTarget.classList.add("hidden");
      this.footerTarget.classList.remove("hidden");
      window.scrollTo(0, 0);
    }
  },
);
