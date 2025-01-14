document.getElementById('sBranch').addEventListener('change', updateSubjects);
document.getElementById('sSubject').addEventListener('change', updateButtonState);

function updateSubjects() {
  const branch = document.getElementById('sBranch').value;
  const subjectSelect = document.getElementById('sSubject');

  const subjects = {
    "common": ["Applied Chemistry", "Applied Mathematics I", "Applied Mathematics II", "Applied Physics I", "Applied Physics II", "CNC Machines & Automation", "Engineering Graphics", "English & Communication Skills I", "English & Communication Skills II", "Entrepreneurship Development & Management", "Environmental Studies & Disaster Management", "Fundamentals of IT"],
    "civil": [],
    "computer-science": [],
    "electrical": [],
    "electronics": [],
    "fashion": [],
    "mechanical": []
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
    "civil": {
      "structural-analysis": "https://example.com/civil/structural-analysis",
      "fluid-mechanics": "https://example.com/civil/fluid-mechanics",
      "geotechnical-engineering": "https://example.com/civil/geotechnical-engineering"
    },
    "computer-science": {
      "data-structures": "https://example.com/computer-science/data-structures",
      "algorithms": "https://example.com/computer-science/algorithms",
      "operating-systems": "https://example.com/computer-science/operating-systems"
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
      "civil": "https://example.com/civil",
      "computer-science": "https://example.com/computer-science",
      "electrical": "https://example.com/electrical",
      "electronics": "https://example.com/electronics",
      "fashion": "https://example.com/fashion",
      "mechanical": "https://example.com/mechanical"
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
