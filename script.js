// ============================
// UPDATE CV PREVIEW
// ============================
function updateCV() {
    // ===== NAME =====
    const nameInput = document.getElementById('inName').value.trim();
    const outName = document.getElementById('outName');
    outName.innerText = nameInput || "Your Name";
    outName.style.fontSize = "28px";

    // ===== CONTACT =====
    const email = document.getElementById('inEmail').value.trim();
    const phone = document.getElementById('inPhone').value.trim();
    const github = document.getElementById('inGithub').value.trim();
    const linkedin = document.getElementById('inLinkedin')?.value.trim() || '';

    const contactArr = [email, phone, github, linkedin].filter(Boolean);
    const outContact = document.getElementById('outContact');
    outContact.innerText = contactArr.join(" | ") || "Email | Phone | GitHub | LinkedIn";
    outContact.style.fontSize = "13px";
    outContact.style.letterSpacing = "0.5px";

    // ===== SUMMARY =====
    const summaryInput = document.getElementById('inSummary').value.trim();
    const summaryOutput = document.getElementById('outSummary');
    const summarySection = document.getElementById('summarySection');

    if (summaryInput) {
        summaryOutput.innerText = summaryInput;
        summarySection.style.display = "block";
    } else {
        summarySection.style.display = "none";
    }

    // ===== TECH STACK =====
    const stackInput = document.getElementById('inStack')?.value.trim();
    const outStack = document.getElementById('outStack');
    outStack.innerText = stackInput || '';

    // ===== EXPERIENCE & EDUCATION =====
    updateList('inXp', 'outXp');
    updateList('inEdu', 'outEdu');
}

// ============================
// HELPER FUNCTION: UPDATE LISTS
// ============================
function updateList(inputId, outputId) {
    const list = document.getElementById(outputId);
    list.innerHTML = "";

    const lines = document.getElementById(inputId)?.value.split('\n')
        .map(line => line.trim())
        .filter(Boolean);

    if (lines?.length) {
        lines.forEach(line => {
            const li = document.createElement('li');
            li.innerText = line;
            list.appendChild(li);
        });
    }
}

// ============================
// PDF DOWNLOAD
// ============================
function downloadPDF() {
    const element = document.getElementById('cv-preview');

    const opt = {
        margin: [10, 10, 10, 10], // margini în mm
        filename: 'GetIt-CV.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
}

// ============================
// INIT
// ============================
updateCV();