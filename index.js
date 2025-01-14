document.getElementById('sBranch').addEventListener('change', updateSubjects);
document.getElementById('sSubject').addEventListener('change', updateButtonState);

function updateSubjects() {
  const branch = document.getElementById('sBranch').value;
  const subjectSelect = document.getElementById('sSubject');

  const subjects = {
    "common": ["Applied Chemistry", "Applied Mathematics I", "Applied Mathematics II", "Applied Physics I", "Applied Physics II", "CNC Machines & Automation", "Engineering Graphics", "English & Communication Skills I", "English & Communication Skills II", "Entrepreneurship Development & Management", "Environmental Studies & Disaster Management", "Fundamentals of IT"],
    "civil": ["Applied Mechanics", "Building Construction", "Civil Engineering Practices", "Concrete Technology", "Construction Management", "Construction Material", "Earthquake Resistant Building Construction", "Estimation & Costing", "Fluid Mechanics", "Highway Engineering", "Irrigation Engineering", "Plumbing Services", "Railways, Bridges & Tunnels", "RCC Design & Drawing", "Soil Mechanics & Foundation Engineering", "Steel Structures Design & Drawing", "Structural Mechanics", "Surveying I", "Surveying II", "Water Supply & Waste Water Engineering"],
    "computer-science": ["Advances in IT", "Analog Electronics", "Cloud Computing", "Computer Networks", "Computer Organisation & Architecture", "Data Base Management Systems", "Data Structures Using C", "Digital Electronics", "Multimedia Applications", "OOPs using Java", "Operating Systems", "Programming in C", "Python Programming", "Software Engineering", "Web Technologies"],
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
      "applied-chemistry": "",
      "applied-mathematics-i": "",
      "applied-mathematics-ii": "",
      "applied-physics-i": "",
      "applied-physics-ii": "",
      "cnc-machines-automation": "",
      "engineering-graphics": "",
      "english-communication-skills-i": "",
      "english-communication-skills-ii": "",
      "entrepreneurship-development-management": "",
      "environmental-studies-disaster-management": "",
      "fundamentals-of-it": ""
    },
    "civil": {
      "applied-mechanics": "",
      "building-construction": "",
      "civil-engineering-practices": "",
      "concrete-technology": "",
      "construction-management": "",
      "construction-material": "",
      "earthquake-resistant-building-construction": "",
      "estimation-costing": "",
      "fluid-mechanics": "",
      "highway-engineering": "",
      "irrigation-engineering": "",
      "plumbing-services": "",
      "railways-bridges-tunnels": "",
      "rcc-design-drawing": "",
      "soil-mechanics-foundation-engineering": "",
      "steel-structures-design-drawing": "",
      "structural-mechanics": "",
      "surveying-i": "",
      "surveying-ii": "",
      "water-supply-waste-water-engineering": ""
    },
    "computer-science": {
      "advances-in-it": "",
      "analog-electronics": "",
      "cloud-computing": "",
      "computer-networks": "",
      "computer-organisation-architecture": "",
      "data-base-management-systems": "",
      "data-structures-using-c": "",
      "digital-electronics": "",
      "multimedia-applications": "",
      "oops-using-java": "",
      "operating-systems": "",
      "programming-in-c": "",
      "python-programming": "",
      "software-engineering": "",
      "web-technologies": ""
    },
    "electrical": {
      "analog-digital-electronics": "",
      "electric-machines-i": "",
      "electric-machines-ii": "",
      "electric-vehicle-technology": "",
      "electrical-engineering-materials": "",
      "electrical-measurement-instrumentation": "",
      "electrical-networks": "",
      "energy-conservation-audit": "",
      "estimating-costing-in-electrical-engineering": "",
      "industrial-electronics-control-of-drives": "",
      "installation-maintenance-of-electrical-equipment": "",
      "non-conventional-sources-of-energy": "",
      "plc-microcontrollers": "",
      "power-system": "",
      "power-system-protection": "",
      "principles-of-electrical-engineering": "",
      "utilization-of-electrical-energy": ""
    },
    "electronics": {
      "analog-digital-communication": "",
      "communication-system": "",
      "computer-networks": "",
      "digital-electronics": "",
      "electronic-devices-circuits-i": "",
      "electronic-devices-circuits-ii": "",
      "electronic-instruments-measurements": "",
      "fundamentals-of-electrical-engineering": "",
      "instrumentation": "",
      "microprocessors-micro-controllers": "",
      "optical-fibre-communication": "",
      "plc-scada": "",
      "power-electronics": "",
      "programming-in-c": "",
      "wireless-mobile-communication": ""
    },
    "fashion": {
      "accessory-designing": "",
      "apparel-management-quality-control": "",
      "basic-design-illustration": "",
      "design-to-dispatch": "",
      "fashion-merchandising": "",
      "fashion-retailing": "",
      "fundamentals-of-pattern-making": "",
      "history-of-fashion": "",
      "textile-science": "",
      "theory-of-fashion": "",
      "traditional-indian-textiles": ""
    },
    "mechanical": {
      "applied-mechanics": "",
      "automobile-engineering": "",
      "basics-of-electrical-electronics-engineering": "",
      "hydraulics-pneumatics": "",
      "machine-design": "",
      "materials-metallurgy": "",
      "mechanical-engineering-drawing-i": "",
      "mechanical-engineering-drawing-ii": "",
      "metrology-quality-control": "",
      "refrigeration-air-conditioning": "",
      "strength-of-materials": "",
      "theory-of-machines": "",
      "thermodynamics-i": "",
      "thermodynamics-ii": "",
      "workshop-technology-i": "",
      "workshop-technology-ii": "",
      "workshop-technology-iii": ""
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
      "common": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/u5qbah6euj08njjm197kkosj5pjgnhsc/1736829000000/0bfde9d7-a197-4ccf-8150-b96b7ad9fd85/111876480700172355227/ADt3v-NadUn62h-vqSCdBZDtUTbDyPhTC2XVUAr7H_gs26iVMZySPSVCETVSKw_tmHHAtDNu3FufUXGxCyV9HPz_QBDI1zjCOJ1WnD8xjIqRha5gzC0wu3GRkCXKUiLP_88dEROYlZg_VHWQW4mtfs-1GM5SyTH4PGt-rpI7iNXZ4g13x2yi4zlyGneJctEXpVXtYBYRcgDzlSkvrrTNuy1x865pR_duQxTmeF6gSdgbhl1TtAZepzI2Cr6lph_y9-3u2gJSy_PmtNZRJKtRxjP5GX_G98lhdwXEXhNV7zIj3ykM582KzO2NJtGuYjMnMlh1gmluf-pm?j=0bfde9d7-a197-4ccf-8150-b96b7ad9fd85&user=769110230425&i=0&authuser=0",
      "civil": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/mbhrfrbf68o7i00bi3fkk2oje3gcjv1t/1736829000000/33ce03d4-3981-46cc-a228-383e82f02147/111876480700172355227/ADt3v-Nl9jGc5HlOb2kGS4cZN7kFBHa4jFaXWeRRpd7DSrXThNjdFESqzq9TyiHwNLF1JiwaaoxbF3CzyRK-MqVsZS-OrQ5EYMqSMB5BwHfJ5wRRmKdBVDu87wkpUazLsYSIUXbqQwuGSkCSWEMhTuhDk2h2_JwhXFjovPwZ-J26AhG8wZvkwDCS4x9-N8nnSaSaKQV8U1oj2AZrBR7D1kthTEb2O_JWxv3_ro8xoK6mhAo8kRqciTAbEgy7GOtjsN3KQJt3xg3Jz5lPVpFxwnGQtWqfNU1uJXWxPg6e2tQ_MbMw9cr2nW5OXENNDbrtDMDMiKIOV5MD?j=33ce03d4-3981-46cc-a228-383e82f02147&user=769110230425&i=0&authuser=0",
      "computer-science": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/17dmbgd16o4hk0fhglvo4suikn43e5v7/1736829000000/554900a3-2a83-4b18-bcfa-85f1611d4417/111876480700172355227/ADt3v-NvITk8HmDTDQ8ali5Icit-vbvLE161uW6-PxpwlFPjUeg_QDfsx0L71sqQzTyLQ-G0OURxi4npguhet0vcar6l0CirRpoXqXWfcUTnUUbspfaJuYpWegVPBASU7OCpx4q-yorSHT7YVFYMKvCVdIRrdV4pcuZ7NWPQ9YVsiiFS9ygAOXU6BGSiWW5IUIqdV1vqrJmz8aHoWBX5At5ZqTApfWtsSNbPSnJ4FRFYPYvaAzSihxsThODE2gqa3AYXcy_iXpnoI6SdMuzBdBKwllY0SOcVGbrhL-vF6hia0jUVWMXVbpZoVrMNOETkfGZ-CH9MuRhgz4d_MrqvTqslChYjUN-hXw==?j=554900a3-2a83-4b18-bcfa-85f1611d4417&user=769110230425&i=0&authuser=0",
      "electrical": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/ojm22uh455m888rfvoagrekbdhqjp2mb/1736829000000/d85e55ab-12ad-4c4d-87b3-b589f9ee326c/111876480700172355227/ADt3v-NYgK2woho3MODd3C4Ostc8EpzMQTsPb66QaiNkZasfhsfZ8kZQMEjzPQs2sD1MkirMRiuH1p7N9AASRpYXd69S-YrsOFC58Qm-NjZK1XqN78pgAKCkpneND7p2gvw5mMhNIJJkJ5yiec-Nc2mfHKljLwUkCIvwLyAzbViz3lAsMHmF0sYHsYxg6ZW7kzDf23i7ndsNjFrCpBXq6tDV9QUs5VKNq9_Q_Pp2RvjyOTXJHYCMFrC2B6hap8JeLif8v8tnfthRHILKslv2NOICdGDTjwc6P9rLe3Bte3qeGvKY1lxvAMCiFnD0tC3DHg6v_tNEa88VPpxOuBb56KGJ1S6cSIn_Ag==?j=d85e55ab-12ad-4c4d-87b3-b589f9ee326c&user=769110230425&i=0&authuser=0",
      "electronics": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/g8t1o4ifhllg2kd7dh1i76tn5b6hu2f6/1736829000000/a42049c5-7b62-40bc-99ea-31e7d3424f91/111876480700172355227/ADt3v-PFElMxQegO2_1PQKkGm_uQ-Ti6j-TWCLakP2rz2yxKQsLys1qN6jkBSGqALOmHjHBcfdVoDJcefhpNWVp-V3T5VXes4FZFWim-NXDDcyM8Ycr_4WH2PEu0TN5ISCZKzI2GOJqpzeUVnLaOg1hyZNF8TYIyLvolP3vAUjbliYTzVrEnpSVum__3CdRdyEMo48SYIFsDpAomsPH-0DAmjtMC0CtO_29oQu_LqgHqNBdm-j-sChMMuKwTU8aK52nt0vDaHNoKlTPxyO2CkDdjg_Ou2-H4pDr22hHrBRcJZutds3K6nfkN_t74gxMHcyMPuM-kdW4Ur-uQGUdWFlUUqep7cq4fhmglBa-SGimIo4u48vYvIH8=?j=a42049c5-7b62-40bc-99ea-31e7d3424f91&user=769110230425&i=0&authuser=0",
      "fashion": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/dqjf1qddgga19oua5on7iktanjs4tq80/1736829000000/7e134b0d-3152-4872-9860-6ddf4ce0d0af/111876480700172355227/ADt3v-Otg_5frYP_FvVzQiviqHjk3O09Qs4gdTLLyEaasC3SOoHjTOAwVEvxFhmvLL4zJNGkVfAJTs3BsrJscVhUERcN7AoQ0ledTUvBfD_IMiz3-Guhp_gW6jEWpfq71EO0Li8aJNrNy4OeIDwGNaIcHTlOnzB1L67hqG0R_0elPBstTjknE6iEvFrz3WBPv1MRHoDPH1tTSCHkjSJQ_3Q_FX--62SJoni9lyG_kja1-h0t8tqsbCxHMpOj09yrdF2-poGES5rwjhazI4YSPUwno8vidfOb01nw3nyngFFZsPbbqpl4bygdR_8RzZPID5UOjpo-tCUk?j=7e134b0d-3152-4872-9860-6ddf4ce0d0af&user=769110230425&i=0&authuser=0",
      "mechanical": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/9pt4o951n1bufce3bp354f51pd6j0ubo/1736829000000/78c84036-cc88-460b-91c7-f2a26bb804c7/111876480700172355227/ADt3v-OOYOUGZ9cbkx9KEOPgkS59gByjFPQNMRfrV-zkWbYdWo2Zo1qi2OE6qUQIcxUbULFi0UISl868JZ-vNZRLfq31-v8wyicf-wmcANC8paE8MWiaktIWFAUPgCSPE2sHeSBS7frHu66SOd0qmCLs6ddLIbeZ_pyySuqDKEtRZyZDzNcNAchucfc1hPXgtnKIF2ZbHczf24adgJ3rxI15CSZembc6DPhhxcfJkenE2C8pIh2lZml8-EcSvQS0UYODKPWWVvIYT1VFnmzF15rqPmBSXUq3rXvsFAnkzqmRDvaUEFUbevlfte8dzsbuwvkNRW9f04sUOBFdfkq04-pijR9Gsj0JMQ==?j=78c84036-cc88-460b-91c7-f2a26bb804c7&user=769110230425&i=0&authuser=0"
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
