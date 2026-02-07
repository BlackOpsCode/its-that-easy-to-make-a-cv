function updateCV() {
    // ===== NAME =====
    const nameInput = document.getElementById('inName').value.trim();
    const outName = document.getElementById('outName');
    outName.innerText = nameInput || "Your Name";
    outName.style.fontSize = "28px"; // puțin mai mare decât înainte (24px)

    // ===== CONTACT =====
    const email = document.getElementById('inEmail').value.trim();
    const phone = document.getElementById('inPhone').value.trim();
    const github = document.getElementById('inGithub').value.trim();

    const contactStr = [email, phone, github].filter(Boolean).join(" | ");
    const outContact = document.getElementById('outContact');
    outContact.innerText = contactStr || "Email | Phone | GitHub";
    outContact.style.fontSize = "13px"; // puțin mai mare decât înainte (12px)
    outContact.style.letterSpacing = "0.5px"; // mai lizibil

    // ===== SUMMARY / DESCRIPTION =====
    const summaryInput = document.getElementById('inSummary').value.trim();
    const summaryOutput = document.getElementById('outSummary');
    const summarySection = document.getElementById('summarySection');

    if (summaryInput) {
        summaryOutput.innerText = summaryInput;
        summarySection.style.display = "block";
    } else {
        summarySection.style.display = "none";
    }

    // ===== SKILLS =====
    const skillsList = document.getElementById('outSkills');
    skillsList.innerHTML = "";

    document.getElementById('inSkills')
        .value
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;
            skillsList.appendChild(li);
        });

    // ===== EXPERIENCE & EDUCATION =====
    updateList('inXp', 'outXp');
    updateList('inEdu', 'outEdu');
}

function updateList(inputId, outputId) {
    const list = document.getElementById(outputId);
    list.innerHTML = "";

    document.getElementById(inputId)
        .value
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)
        .forEach(line => {
            const li = document.createElement('li');
            li.innerText = line;
            list.appendChild(li);
        });
}

/* =========================
   PDF DOWNLOAD (STABIL)
   ========================= */
function downloadPDF() {
    const element = document.getElementById('cv-preview');

    // calculează dimensiunea exactă pentru A4
    const a4WidthMm = 210;
    const a4HeightMm = 297;
    const pxPerMm = 3.78; // aproximativ 96dpi
    const a4WidthPx = a4WidthMm * pxPerMm; 
    const a4HeightPx = a4HeightMm * pxPerMm;

    const opt = {
        margin: 0,
        filename: 'SimplyCV.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: {
            width: a4WidthPx,
            height: a4HeightPx,
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf().set(opt).from(element).save();
}

// ===== INIT =====
updateCV();
