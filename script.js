// Sample Data Structure (Usually loaded from separate JSON files)
const translations = {
    en: { ui: { title: "Examination", submit: "Prepare", reset: "Reset" }, categories: [...] },
    tg: { ui: { title: "Pagsusuri", submit: "Ihanda", reset: "Burahin" }, categories: [...] },
    bs: { ui: { title: "Pagsusi", submit: "Andama", reset: "I-reset" }, categories: [...] }
};

let currentLang = 'en';
let userSelections = {}; // Key: ID, Value: Boolean

const container = document.getElementById('checklist-container');
const langSwitcher = document.getElementById('langSwitcher');

// Render the Checklist
function render() {
    const data = translations[currentLang];
    document.getElementById('ui-title').innerText = data.ui.title;
    container.innerHTML = data.categories.map(cat => `
        <div class="category-section">
            <h3>${cat.header}</h3>
            ${cat.items.map(item => `
                <label class="sin-item">
                    <input type="checkbox" data-id="${item.id}" ${userSelections[item.id] ? 'checked' : ''} class="sin-checkbox">
                    <span>${item.text}</span>
                </label>
            `).join('')}
        </div>
    `).join('');
}

// Track changes
document.addEventListener('change', (e) => {
    if (e.target.classList.contains('sin-checkbox')) {
        userSelections[e.target.dataset.id] = e.target.checked;
    }
    if (e.target === langSwitcher) {
        currentLang = e.target.value;
        render();
    }
});

// Prepare Summary
document.getElementById('submitBtn').onclick = () => {
    const activeData = translations[currentLang];
    const selectedText = [];
    activeData.categories.forEach(cat => {
        cat.items.forEach(item => { if(userSelections[item.id]) selectedText.push(item.text); });
    });

    if(selectedText.length === 0) return alert("Select at least one.");

    document.getElementById('summary-content').innerHTML = `<ul>${selectedText.map(t => `<li>${t}</li>`).join('')}</ul>`;
    document.getElementById('checklist-view').classList.add('hidden');
    document.getElementById('summary-view').classList.remove('hidden');
    document.querySelector('.footer-controls').classList.add('hidden');
};

// Reset
document.getElementById('resetBtn').onclick = () => {
    if(confirm("Reset all?")) {
        userSelections = {};
        render();
    }
};

function backToChecklist() {
    document.getElementById('summary-view').classList.add('hidden');
    document.getElementById('checklist-view').classList.remove('hidden');
    document.querySelector('.footer-controls').classList.remove('hidden');
}

// Download Logic
function downloadTextFile() {
    let text = "My Confession\n\n";
    // (Logic to loop through userSelections and append text as shown in previous step)
    const blob = new Blob([text], {type: 'text/plain'});
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = "confession.txt";
    anchor.click();
}

render(); // Initial Load