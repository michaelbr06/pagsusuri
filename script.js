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
      "aiPromptView",
      "aiConfessionList",
      "aiPromptTextarea",
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
      if (!this.summaryViewTarget.classList.contains("hidden")) {
        this.renderSummary();
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

    analyzeWithAI() {
      const data = translations[this.langValue];

      let listHtml = "<ul>";
      data.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          if (this.selectionsValue[item.id]) {
            listHtml += `<li>${item.text}</li>`;
          }
        });
      });
      listHtml += "</ul>";
      this.aiConfessionListTarget.innerHTML = listHtml;

      let sinsList = "";
      data.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          if (this.selectionsValue[item.id]) {
            sinsList += `- ${item.text}\n`;
          }
        });
      });

      const prompt = `You are a wise and compassionate Catholic priest helping a penitent examine their conscience before Confession.

Please review the following sins I have committed and:
1. Group them by theme (e.g., being a faithful Christian, being a dutiful family member, being a good neighbor, professional conduct, etc.)
2. Identify any patterns or recurring faults that I should reflect on
3. Provide a brief, gentle encouragement for my spiritual growth
4. Summarize in a way that will help me make a good confession

My sins:
${sinsList}
Please respond with pastoral care and mercy.`;

      this.aiPromptTextareaTarget.value = prompt;

      this.summaryViewTarget.classList.add("hidden");
      this.aiPromptViewTarget.classList.remove("hidden");
      window.scrollTo(0, 0);
    }

    copyPrompt() {
      const text = this.aiPromptTextareaTarget.value;
      navigator.clipboard.writeText(text).then(() => {
        alert("Prompt copied! Paste it into your AI chat.");
      }).catch(() => {
        this.aiPromptTextareaTarget.select();
        document.execCommand("copy");
        alert("Prompt copied! Paste it into your AI chat.");
      });
    }

    openAIIncognito() {
      const prompt = this.aiPromptTextareaTarget.value;
      navigator.clipboard
        .writeText(prompt)
        .then(() => {
          window.open("https://claude.ai/new", "_blank", "incognito");
          alert(
            "1. Incognito window opened\n2. Paste your prompt (Ctrl+V / Cmd+V)\n3. Press Enter to send"
          );
        })
        .catch(() => {
          alert(
            "Please copy the prompt manually using the 'Copy to Clipboard' button first."
          );
        });
    }

    backToSummary() {
      this.aiPromptViewTarget.classList.add("hidden");
      this.summaryViewTarget.classList.remove("hidden");
      window.scrollTo(0, 0);
    }
  },
);
