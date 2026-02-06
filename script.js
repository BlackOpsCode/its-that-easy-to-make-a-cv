function updateCV() {
    // Name
    document.getElementById('outName').innerText = document.getElementById('inName').value || "Your Name";

    // Contact
    const email = document.getElementById('inEmail').value.trim();
    const phone = document.getElementById('inPhone').value.trim();
    const github = document.getElementById('inGithub').value.trim();
    const contactStr = [email, phone, github].filter(s => s).join(" | ");
    document.getElementById('outContact').innerText = contactStr || "Email | Phone | GitHub";

    // Skills
    const skills = document.getElementById('inSkills').value.split(',');
    const skillsList = document.getElementById('outSkills');
    skillsList.innerHTML = "";
    skills.forEach(s => { 
        if(s.trim()){ 
            let li = document.createElement('li'); 
            li.innerText = s.trim(); 
            skillsList.appendChild(li); 
        } 
    });

    // Experience and Education
    updateList('inXp', 'outXp');
    updateList('inEdu', 'outEdu');
}

function updateList(inputId, outputId) {
    const lines = document.getElementById(inputId).value.split('\n');
    const list = document.getElementById(outputId);
    list.innerHTML = "";
    lines.forEach(line => { 
        if(line.trim()){ 
            let li = document.createElement('li'); 
            li.innerText = line.trim(); 
            list.appendChild(li); 
        } 
    });
}

function downloadPDF() {
    const element = document.getElementById('cv-preview');
    html2pdf().set({
        margin: 10,
        filename: 'SimplyCV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, width: 793 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(element).save();
}

// Initialize preview
updateCV();
