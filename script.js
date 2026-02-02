function generateCV() {
  // preluăm valorile din inputuri
  const name = document.getElementById("name").value.trim();
  const title = document.getElementById("title").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const linkedin = document.getElementById("linkedin").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const experience = document.getElementById("experience").value.trim();
  const education = document.getElementById("education").value.trim();

  // verificăm dacă toate câmpurile sunt completate
  if (!name || !title || !email || !phone || !linkedin || !skills || !experience || !education) {
    alert("⚠️ Please fill in all fields before generating your CV!");
    return; // oprim funcția
  }

  // completăm CV-ul
  document.getElementById("cv-name").textContent = name;
  document.getElementById("cv-title").textContent = title;
  document.getElementById("cv-email").textContent = email;
  document.getElementById("cv-phone").textContent = phone;
  document.getElementById("cv-linkedin").textContent = linkedin;
  document.getElementById("cv-skills").textContent = skills.split(",").map(s => s.trim()).join(", ");
  document.getElementById("cv-experience").textContent = experience;
  document.getElementById("cv-education").textContent = education;

  // afișăm preview-ul și CV-ul
  const cv = document.getElementById("cv");
  const preview = document.getElementById("cv-preview");

  preview.innerHTML = cv.innerHTML; // copiem conținutul în preview
  document.getElementById("preview-container").style.display = "block";
  cv.style.display = "block"; // păstrăm CV-ul vizibil doar dacă vrei să-l folosești direct
}

// funcție pentru PDF
function downloadPDF() {
  const element = document.getElementById("cv");
  html2pdf()
    .set({ margin: 10, filename: 'CV.pdf', html2canvas: { scale: 2 } })
    .from(element)
    .save();
}
