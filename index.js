document.getElementById('sBranch').addEventListener('change', updateSubjects);
document.getElementById('sSubject').addEventListener('change', updateButtonState);

function updateSubjects() {
  const branch = document.getElementById('sBranch').value;
  const subjectSelect = document.getElementById('sSubject');

  const subjects = {
    "common": ["Applied Chemistry", "Applied Mathematics I", "Applied Mathematics II", "Applied Physics I", "Applied Physics II", "CNC Machines & Automation", "Engineering Graphics", "English & Communication Skills I", "English & Communication Skills II", "Entrepreneurship Development & Management", "Environmental Studies & Disaster Management", "Fundamentals of IT"],
    "civil": ["Applied Mechanics", "Building Construction", "Civil Engineering Practices", "Concrete Technology", "Construction Management", "Construction Material", "Earthquake Resistant Building Construction", "Estimation & Costing", "Fluid Mechanics", "Highway Engineering", "Irrigation Engineering", "Plumbing Services", "Railways, Bridges & Tunnels", "RCC Design & Drawing", "Soil Mechanics & Foundation Engineering", "Steel Structures Design & Drawing", "Structural Mechanics", "Surveying I", "Surveying II", "Water Supply & Waste Water Engineering"],
    "computer-science": ["Advances in IT", "Analog Electronics", "Cloud Computing", "Computer Networks", "Computer Organisation & Architecture", "Data Base Management Systems", "Data Structures Using C", "Digital Electronics", "Multimedia Applications", "Network Security", "OOPs using Java", "Operating Systems", "Programming in C", "Python Programming", "Software Engineering", "Web Technologies"],
    "electrical": ["Analog & Digital Electronics", "Electric Machines I", "Electric Machines II", "Electric Vehicle & Technology", "Electrical Engineering Materials", "Electrical Measurement & Instrumentation", "Electrical Networks", "Energy Conservation & Audit", "Estimating & Costing in Electrical Engineering", "Industrial Electronics & Control of Drives", "Installation & Maintenance of Electrical Equipment", "Non-conventional Sources of Energy", "PLC & Microcontrollers", "Power System", "Power System Protection", "Principles of Electrical Engineering", "Utilization of Electrical Energy"],
    "electronics": ["Analog & Digital Communication", "Communication System", "Computer Networks", "Digital Electronics", "Electronic Devices & Circuits I", "Electronic Devices & Circuits II", "Electronic Instruments & Measurements", "Fundamentals of Electrical Engineering", "Instrumentation", "Microprocessors & Micro-controllers", "Optical Fibre Communication", "PLC & SCADA", "Power Electronics", "Programming in C", "Wireless & Mobile Communication"],
    "fashion": ["Accessory Designing", "Apparel Management & Quality Control", "Basic Design & Illustration", "Design to Dispatch", "Fashion Merchandising", "Fashion Retailing", "Fundamentals of Pattern Making", "History of Fashion", "Textile Science", "Theory of Fashion", "Traditional Indian Textiles"],
    "mechanical": ["Applied Mechanics", "Automobile Engineering", "Basics of Electrical & Electronics Engineering", "Hydraulics & Pneumatics", "Machine Design", "Materials & Metallurgy", "Mechanical Engineering Drawing I", "Mechanical Engineering Drawing II", "Metrology & Quality Control", "Refrigeration & Air Conditioning", "Strength of Materials", "Theory of Machines", "Thermodynamics I", "Thermodynamics II", "Workshop Technology I", "Workshop Technology II", "Workshop Technology III"]
  };

  // Clear previous options
  subjectSelect.innerHTML = '<option value="none">None</option>';

  // Add new options based on the selected branch
  if (branch in subjects) {
    subjects[branch].forEach(subject => {
      const option = document.createElement('option');
      option.value = subject.toLowerCase().replace(/\s+/g, '-');
      option.textContent = subject;
      subjectSelect.appendChild(option);
    });
  }
  updateButtonState();
}

function redirectToUrl() {
  const branch = document.getElementById('sBranch').value;
  const subject = document.getElementById('sSubject').value;
  const urls = {
    "common": {
      "applied-chemistry": "https://drive.google.com/drive/folders/12nFEE5Y7HjdxSOiHYXq10JAn810xgDiD?usp=drive_link",
      "applied-mathematics-i": "https://drive.google.com/drive/folders/17OdSm5qQ7Ptk50Y2-p744Z8MRaBUR3OT?usp=drive_link",
      "applied-mathematics-ii": "https://drive.google.com/drive/folders/1CT56GtOMijS42eCWl-9oQnuCGgkaA7lw?usp=drive_link",
      "applied-physics-i": "https://drive.google.com/drive/folders/123M1YWT1alfVl45c0-vWNWo7bex5aWMz?usp=drive_link",
      "applied-physics-ii": "https://drive.google.com/drive/folders/1Z5DgZCvXpXJJMqmgyRu-OvC8jrqRlWQO?usp=drive_link",
      "cnc-machines-&-automation": "https://drive.google.com/drive/folders/1irTnEsRXZ50_X4O5-tSzfR6PWIhq7qSr?usp=drive_link",
      "engineering-graphics": "https://drive.google.com/drive/folders/1nhmXye7V0MlubH4Jz-DaCUamQbt5pKkQ?usp=drive_link",
      "english-&-communication-skills-i": "https://drive.google.com/drive/folders/1Vtw8dyc5iqneFv_CbNZ2RHpIMKyKLXC3?usp=drive_link",
      "english-&-communication-skills-ii": "https://drive.google.com/drive/folders/1_zAH_i1cyhvm3haLioQSUfVGlcBNp3oi?usp=drive_link",
      "entrepreneurship-development-&-management": "https://drive.google.com/drive/folders/1Rpbaf31DaUyrddDOVDAkDMwM-tUaMXL9?usp=drive_link",
      "environmental-studies-&-disaster-management": "https://drive.google.com/drive/folders/11NOm1n-SELIh4m7GlSB1-GZLYQSDfqKv?usp=drive_link",
      "fundamentals-of-it": "https://drive.google.com/drive/folders/1qZ9QHVSVes3Vax20kDvEO9zoB1GQarQg?usp=drive_link"
    },
    "civil": {
      "applied-mechanics": "https://drive.google.com/drive/folders/1FpW0c3Rfsw-m7iQSKvc0w53-lTsFM9NQ?usp=drive_link",
      "building-construction": "https://drive.google.com/drive/folders/1dUdUpT6zPjV4eHRBNgUweqqSlxS6mmll?usp=drive_link",
      "civil-engineering-practices": "https://drive.google.com/drive/folders/1i4q-LQEKJG3dS3W3ll_4gKHwVK78gffd?usp=drive_link",
      "concrete-technology": "https://drive.google.com/drive/folders/1W1H-ByhkCQpGX2aYFziA5_H6TyFckLGd?usp=drive_link",
      "construction-management": "https://drive.google.com/drive/folders/1BolLieLRQq-f_X2nGwv3Nxhh1GsWYc0R?usp=drive_link",
      "construction-material": "https://drive.google.com/drive/folders/1zKj7DVbsDripS7P64JM9NvrXb60-2yn0?usp=drive_link",
      "earthquake-resistant-building-construction": "https://drive.google.com/drive/folders/1jcs_XvPk70GMRx2hNLYVXps-FYhqkoNA?usp=drive_link",
      "estimation-&-costing": "https://drive.google.com/drive/folders/1qna2LGagruBcgOwlomWzyAWZ84Zqwgs8?usp=drive_link",
      "fluid-mechanics": "https://drive.google.com/drive/folders/1ZZk-Jl6IZ6oKQvqz7ltIst3Nt9mUns_I?usp=drive_link",
      "highway-engineering": "https://drive.google.com/drive/folders/17HkcOFD8FUym5flUazTx-4bRnxpQNsEH?usp=drive_link",
      "irrigation-engineering": "https://drive.google.com/drive/folders/1aIqZ11NByVHnh-2lVOBz7FZw4s4bdydN?usp=drive_link",
      "plumbing-services": "https://drive.google.com/drive/folders/1tepBJsGuywlxLjQodkDSeDvMnFHnLrB7?usp=drive_link",
      "railways,-bridges-&-tunnels": "https://drive.google.com/drive/folders/1yppPCRUx9sRjQtfJFU9ON7g0lc4TcNGd?usp=drive_link",
      "rcc-design-&-drawing": "https://drive.google.com/drive/folders/1XaxEG-9Er-Bt5qqLPQGn4XyAkyt44Dlk?usp=drive_link",
      "soil-mechanics-&-foundation-engineering": "https://drive.google.com/drive/folders/1XvQzZcGnyI7tHaAzFLj2QMw93ZpdO0EM?usp=drive_link",
      "steel-structures-design-&-drawing": "https://drive.google.com/drive/folders/1OU3llalWgQcIHAzxNp_ShuqFeU1WLklk?usp=drive_link",
      "structural-mechanics": "https://drive.google.com/drive/folders/1n-14QWS0ft_zgkGCgNis8QhG8lW9ccou?usp=drive_link",
      "surveying-i": "https://drive.google.com/drive/folders/1cPTO397ggc0fhnzXXlYK5youh2lg3vTE?usp=drive_link",
      "surveying-ii": "https://drive.google.com/drive/folders/1n4on0Og2XErLmE_tKIeK2tb6kkH3b0U8?usp=drive_link",
      "water-supply-&-waste-water-management": "https://drive.google.com/drive/folders/1xjMkD4IP_hTX8ENwI21mdhZnRY29_DlE?usp=drive_link",
    },
    "computer-science": {
      "advances-in-it": "https://drive.google.com/drive/folders/1JjguyIlaekS8RinMzj0QODwXx5RS74u3?usp=drive_link",
      "analog-electronics": "https://drive.google.com/drive/folders/1smu11DzOwIGn7almF9mW5Q5BzErzCVPN?usp=drive_link",
      "cloud-computing": "https://drive.google.com/drive/folders/1cU9ncsQgTFGAEMEPGGv0JZdxArQge8qe?usp=drive_link",
      "computer-networks": "https://drive.google.com/drive/folders/1cF-TR6lj3aKhKwkQ8_Ww52Kkt0TG8r1M?usp=drive_link",
      "computer-organisation-&-architecture": "https://drive.google.com/drive/folders/1vl6JxzJNsbXukeZGqL5Xcne-9gUx3HOo?usp=drive_link",
      "data-base-management-systems": "https://drive.google.com/drive/folders/1f6VqAsKUWGZ1LqS5JKgDbXP18pYBYWzS?usp=drive_link",
      "data-structures-using-c": "https://drive.google.com/drive/folders/1XN9TLw6LqjGL_-PZh791WxP45Gt8ya3o?usp=drive_link",
      "digital-electronics": "https://drive.google.com/drive/folders/1LS9DWs1yJEmzeveiFvLsjhlu7FvceKbk?usp=drive_link",
      "multimedia-applications": "https://drive.google.com/drive/folders/16yoY5d2o7n9tbtGvHadC3PAudGt40X_J?usp=drive_link",
      "network-security": "https://drive.google.com/drive/folders/1e9B-5Ah9F96KKYV0YWZVeRBUghiWHH9G?usp=drive_link",
      "oops-using-java": "https://drive.google.com/drive/folders/1xxneRxegNfHfKlYTJHIZHBzvIwDhCKJi?usp=drive_link",
      "operating-systems": "https://drive.google.com/drive/folders/1l9D0TwVLmcXBi_J87BRYcbETAhNHN7-q?usp=drive_link",
      "programming-in-c": "https://drive.google.com/drive/folders/1IzjaieN1TzlEwl5fpoZ0XE96c5qcg6SM?usp=drive_link",
      "python-programming": "https://drive.google.com/drive/folders/1uSZtD2Mhjsgas6RbLbtLjRmPzuzDhSqh?usp=drive_link",
      "software-engineering": "https://drive.google.com/drive/folders/1Z2WfDnqT5zdd9lGcJiNGe4UoSodgIUCl?usp=drive_link",
      "web-technologies": "https://drive.google.com/drive/folders/1wMAM1jqH_OgHQvSHiiZ749NQEblcO572?usp=drive_link"
    },
    "electrical": {
      "analog-&-digital-electronics": "https://drive.google.com/drive/folders/1ZiZ7yC4SeOVBS-RaTtpz5r_X6tY3K188?usp=drive_link",
      "electric-machines-i": "https://drive.google.com/drive/folders/1Ej6uf_hW51WmwfliSjwZymsIfcmkREc8?usp=drive_link",
      "electric-machines-ii": "https://drive.google.com/drive/folders/1U57j44LA1Bqi6-UegY3S-QmhrAbQngDc?usp=drive_link",
      "electric-vehicle-&-technology": "https://drive.google.com/drive/folders/1H1wucmX_cugvqZWr3K7l9Mj2TpIeKwg0?usp=drive_link",
      "electrical-engineering-materials": "https://drive.google.com/drive/folders/1HqG3wXPKpkCGdiReIyfrKKQwTuyVdKZH?usp=drive_link",
      "electrical-measurement-&-instrumentation": "https://drive.google.com/drive/folders/1qN_Ie1nyCAPgfPRkALIU-vuAOSBjIqr9?usp=drive_link",
      "electrical-networks": "https://drive.google.com/drive/folders/1I_bj2EDd-Nx3Fvg294XZqMII3w43Ermv?usp=drive_link",
      "energy-conservation-&-audit": "https://drive.google.com/drive/folders/1I_bj2EDd-Nx3Fvg294XZqMII3w43Ermv?usp=drive_link",
      "estimating-&-costing-in-electrical-engineering": "https://drive.google.com/drive/folders/1y5sY2oJ_NJ_HstaM8cA_DrQNeWPUT6U2?usp=drive_link",
      "industrial-electronics-&-control-of-drives": "https://drive.google.com/drive/folders/1t2UnRruLvGsP4TFXoJmg1xYOmgpL3sqa?usp=drive_link",
      "installation-&-maintenance-of-electrical-equipment": "https://drive.google.com/drive/folders/1xw1buqvQUtLoiSqKL0NdwGqrc9sLvVO-?usp=drive_link",
      "non-conventional-sources-of-energy": "https://drive.google.com/drive/folders/1tevcoZxYhiEs973s_euy82QTeYkhD623?usp=drive_link",
      "plc-&-microcontrollers": "https://drive.google.com/drive/folders/1R-zAVm6ug6uffc5OCZS0gXF-MMmBlVZK?usp=drive_link",
      "power-system": "https://drive.google.com/drive/folders/1zL88IWieUfX2oyE5xgWp3n2fKh2TNWLZ?usp=drive_link",
      "power-system-protection": "https://drive.google.com/drive/folders/1yc8Fo-HYCI5wzpSf2AGMnLvGnLPsBkV5?usp=drive_link",
      "principles-of-electrical-engineering": "https://drive.google.com/drive/folders/1Jwmj1UE63IS9TQHPM_rCXUmXygsg0Lip?usp=drive_link",
      "utilization-of-electrical-energy": "https://drive.google.com/drive/folders/16XXBqhJerazbf5aaJxNo671js6nxJprE?usp=drive_link"
    },
    "electronics": {
      "analog-&-digital-communication": "https://drive.google.com/drive/folders/1ukYYFrnMijXbVf-j1sAu8Y0nmPYwEvp1?usp=drive_link",
      "communication-system": "https://drive.google.com/drive/folders/110B9HboF011cnOlX4vt1Jvq99trwu-n8?usp=drive_link",
      "computer-networks": "https://drive.google.com/drive/folders/1D20Q5wdnpkbU1Ph8EkC9nh7yzSybHajE?usp=drive_link",
      "digital-electronics": "https://drive.google.com/drive/folders/17CfRjGbp4Pr8uwc9MJbcKixBh3pX35Dt?usp=drive_link",
      "electronic-devices-&-circuits-i": "https://drive.google.com/drive/folders/1sEMgkwWGLUAPYNKZjLlGKe_0G0TwDJ7G?usp=drive_link",
      "electronic-devices-&-circuits-ii": "https://drive.google.com/drive/folders/1oNyljapdE_2xrdSpu8sUAEHByJQpvorD?usp=drive_link",
      "electronic-instruments-&-measurements": "https://drive.google.com/drive/folders/1ce2dsnxnHGSJGwpufWNa_akwrvLfyzne?usp=drive_link",
      "fundamentals-of-electrical-engineering": "https://drive.google.com/drive/folders/1nno0ifZ7HUS6max4fouclJ4dZN2ggKny?usp=drive_link",
      "instrumentation": "https://drive.google.com/drive/folders/1oQuocjrlPygjixJSha9yxoDR9jQ5p7_z?usp=drive_link",
      "microprocessors-&-micro-controllers": "https://drive.google.com/drive/folders/1fOwKLm10G3-AuvVuoYwmV575N5IQVssr?usp=drive_link",
      "optical-fibre-communication": "https://drive.google.com/drive/folders/16gEf65W8L761_qrwHbZFL9Ok54jT_Esg?usp=drive_link",
      "plc-&-scada": "https://drive.google.com/drive/folders/1bPNpPciBS7BM2rBQpzitKyRE30DbiYrR?usp=drive_link",
      "power-electronics": "https://drive.google.com/drive/folders/1ag4zeYlEN6g8o_jYXk-L2mbMuQPQFdH-?usp=drive_link",
      "programming-in-c": "https://drive.google.com/drive/folders/1tng9WxpmKAiOGtG5BoP3Y9kP0eAWBAf8?usp=drive_link",
      "wireless-&-mobile-communication": "https://drive.google.com/drive/folders/1s_5te3xPoW3vUyh0wSc4cZN2ne8din18?usp=drive_link"
    },
    "fashion": {
      "accessory-designing": "https://drive.google.com/drive/folders/1Jb39Ln_Sh0h64EiVrKfTu0kkiNa4OYX6?usp=drive_link",
      "apparel-management-&-quality-control": "https://drive.google.com/drive/folders/1Gw3ZnnVNqZ9YAeUAYuMmOaQziwWuRoLq?usp=drive_link",
      "basic-design-&-illustration": "https://drive.google.com/drive/folders/13r7P61-UEgXYKaLHcyFiz5maLnNfHV-d?usp=drive_link",
      "design-to-dispatch": "https://drive.google.com/drive/folders/1ruKOvttZ6F016-0h9vBcU1Ko8J0ledFQ?usp=drive_link",
      "fashion-merchandising": "https://drive.google.com/drive/folders/1K8FqxK99NqxrOPr3p2_Wj1DCNojQSWJj?usp=drive_link",
      "fashion-retailing": "https://drive.google.com/drive/folders/1l5VbhS9q1gqGdf-6UWGrcb5YO8YdbWKL?usp=drive_link",
      "fundamentals-of-pattern-making": "https://drive.google.com/drive/folders/1KIbJrOyiTESO65fvr7Cd_5IPWnGuYMnX?usp=drive_link",
      "history-of-fashion": "https://drive.google.com/drive/folders/1J6-dOqqyMirs0z_YWEOeRhRcy74UHpZ7?usp=drive_link",
      "textile-science": "https://drive.google.com/drive/folders/1uO5qZ2MVdfqQX5KC6PELm1z1c75pq3WE?usp=drive_link",
      "theory-of-fashion": "https://drive.google.com/drive/folders/1_OD4Smjou3wBjcRpctmzVcDwxxdLTbFp?usp=drive_link",
      "traditional-indian-textiles": "https://drive.google.com/drive/folders/1_OD4Smjou3wBjcRpctmzVcDwxxdLTbFp?usp=drive_link"
    },
    "mechanical": {
      "applied-mechanics": "https://drive.google.com/drive/folders/1raDOS49P_1WSIbz3Q50SfwOOLx51J2OC?usp=drive_link",
      "automobile-engineering": "https://drive.google.com/drive/folders/1HfUXJzWKy2MRW_1tHb2X0baBpafBUJcQ?usp=drive_link",
      "basics-of-electrical-&-electronics-engineering": "https://drive.google.com/drive/folders/1ejYu59S1nDhvDLPLbawtmSES8LeAcaFS?usp=drive_link",
      "hydraulics-&-pneumatics": "https://drive.google.com/drive/folders/1zqIF7N0gPXJY7AQVLaYYvUKcmWK1PJmP?usp=drive_link",
      "machine-design": "https://drive.google.com/drive/folders/19sZ9N9v62qzQOWr_ll16sVPL3Tp0ta0t?usp=drive_link",
      "materials-&-metallurgy": "https://drive.google.com/drive/folders/1CZo__2oFgBwZRWqsMOnHRewaVKr429eJ?usp=drive_link",
      "mechanical-engineering-drawing-i": "https://drive.google.com/drive/folders/1xQKEyaCjx3HATr8SFftTLVHWnhEE9IqY?usp=drive_link",
      "mechanical-engineering-drawing-ii": "https://drive.google.com/drive/folders/14MDoZrfZhkdE_c1Ejn7tbV6Yas-GpH2x?usp=drive_link",
      "metrology-&-quality-control": "https://drive.google.com/drive/folders/16ntmsnWLw4iXQ0pGh3AMwOv6PktCE3cS?usp=drive_link",
      "refrigeration-&-air-conditioning": "https://drive.google.com/drive/folders/1WbWMNDMTEf4GcM5eoF6_H4D4-vVMzOLm?usp=drive_link",
      "strength-of-materials": "https://drive.google.com/drive/folders/10Xq0rtp9i5C88zdImsEeOXU7ZKQonSUU?usp=drive_link",
      "theory-of-machines": "https://drive.google.com/drive/folders/1BbkXaFgiJU3hPXTA0NBV91Td6A8UK1PM?usp=drive_link",
      "thermodynamics-i": "https://drive.google.com/drive/folders/16WNa_WAE02L1wsKhbdBFAtz6M0l8OFhk?usp=drive_link",
      "thermodynamics-ii": "https://drive.google.com/drive/folders/1VzQp89nSTf-osYco1wmExdynJUHO1cNM?usp=drive_link",
      "workshop-technology-i": "https://drive.google.com/drive/folders/1zI5eKCI_raaUcV808FM6LS1HyYE_MsXP?usp=drive_link",
      "workshop-technology-ii": "https://drive.google.com/drive/folders/1vgUnPpGLGjufXg_mKYORKgTM8t9-Nlr5?usp=drive_link",
      "workshop-technology-iii": "https://drive.google.com/drive/folders/1ltfKw_cfRcMj9bxkvSJ5KL6kwmOW8_Hr?usp=drive_link"
    }
  };

  if (branch !== 'none' && subject !== 'none' && urls[branch] && urls[branch][subject]) {
    window.location.href = urls[branch][subject];
  } else {
    alert('Please select both a branch and a subject, or the URL may not be available.');
  }
}

function redirectToBranchUrl() {
  const branch = document.getElementById('sBranch').value;
  const branchUrls = {
      "common": "https://drive.google.com/drive/folders/1vhbSCbaK7XcZIhSZeGTL-G2NlPUotXno",
      "civil": "https://drive.google.com/drive/folders/1wz5tR9RLBq7INpqC41hSt1qCBDsG0Hz5",
      "computer-science": "https://drive.google.com/drive/folders/15W7l6NKFxAqb6hsx9d3LvAR_sdjblrcq",
      "electrical": "https://drive.google.com/drive/folders/1UTwy-Mi6h1gtTgYgQAyH8o-48nR86yfY",
      "electronics": "https://drive.google.com/drive/folders/199dRnaAgS5r--GDi5Nq6jmCwqBXfaR7P",
      "fashion": "https://drive.google.com/drive/folders/1hwnrqSDIvvM_Nk0AQAGajjhQXghAF5Z5",
      "mechanical": "https://drive.google.com/drive/folders/1i6RDrctvypCYVbSH0A6mkwdCj0NfcWKj"
  };

  if (branch !== 'none' && branchUrls[branch]) {
      window.location.href = branchUrls[branch];
  } else {
      alert('Please select a valid branch to continue.');
  }
}

function updateButtonState() {
  const branch = document.getElementById('sBranch').value;
  const subject = document.getElementById('sSubject').value;
  const subjectButton = document.getElementById('subjectButton');
  const branchButton = document.getElementById('branchButton');

  if (subject !== 'none') {
    subjectButton.disabled = false;
  } else {
    subjectButton.disabled = true;
  }

  if (branch !== 'none') {
      branchButton.disabled = false;
  } else {
      branchButton.disabled = true;
  }
}
