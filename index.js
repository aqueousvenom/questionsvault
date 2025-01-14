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
      "applied-chemistry": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/kmm19kbb15vlevnq01rcmq8cbp02ajhu/1736829000000/1e94cfd6-8816-46dd-bdb6-56e93ede30ea/111876480700172355227/ADt3v-O1Jp8OOhumwmTGV0-cFDH_wIebHB6sZ3rNm9M_YdgGZlwFvNn_HYZa3aqCJEgCrEJM9hV4MbwWerhk5x5c0w_834Ha-7JWNVcCtt1K8fjQfkCQTQ_I_nSGdz8bD1eyJhBZ74ZXde681FXmYeyxaIxCDoLPVzsMEhmP9HphEwb_WnDYd4Iajxqh_4pVUlbTYq4DBUndlGPpm9ARxRvB4LQTylVAjgO2s5eGt_2UvWaYtOrxhAScWgonNoeE1V5Ls-fexKF0WMqohoOmYGWZ7HCb8aeQZFx7pGyY6ZS6jD6qGnXeJSIEeRC_1wq0Ri66ZQPEYZUv?j=1e94cfd6-8816-46dd-bdb6-56e93ede30ea&user=769110230425&i=0&authuser=0",
      "applied-mathematics-i": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/9q04iq1c9j4fa7vlg8nf1rkd4oc2ilh3/1736829000000/3c3c92d0-e642-4f4a-a4c5-2b8d048040ea/111876480700172355227/ADt3v-M03t2SbHNZ8WXKIMtLHEjHEKbENrOw10hflb9JlvpQWt1MKxUiDg_h9L4IW3d-minLNM_NDSbktyzH3KpL1a6wvoCihGiamr57_rTBhhBaYan0BYXH3lQ57tXOXkFEtsf38LRt_PQ8XUUenStaZGsJZsOh2fCpxfuubkTHrEQHpAzaoDVmIxFW8kcyTQ-duEXAoqvyZ_p4oYNFbNFcy9bU3ZNMxm-fqzy3KmvKdUC_6LfHZO_Lmt8vBUSWuWCpGqT-W4ctrsnpy2Eic1vT1guzBshskYgGNF_ZSRsmK9l6wqbxXVIKcvTl3fwlhgzp-HiPp8bw-Wq3qzAFf-dJF5qCskhmJQ==?j=3c3c92d0-e642-4f4a-a4c5-2b8d048040ea&user=769110230425&i=0&authuser=0",
      "applied-mathematics-ii": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/0lc7ruig6hdppsekdp8bli8njmtpkfoj/1736829000000/ee966a6c-912a-4c4c-ae4f-de8017e9fa71/111876480700172355227/ADt3v-Oe2LG8tnFYO83qC_kJDlVV7-Lx-KzjlmitEdHr3DKTQLf5TShwGpXAdGBSIo9Fj2laUnXSpTzAFMgEoeVEc8VMKV0XpSgsyMBTV6ARzSMqmbbNhREJT1x2vfv5p1iZhEkJNrZyJg8foTo2csyBzwqQfTbrxzexw2x82V9U7Y7Ntm2ulv3sAwqCv6OLy33FGPQghIEFuMZQ13MLBkL9WyNWzp_v300BxI9NI9-U9Qvb53uggo4nNjVK3otMkM2H2Qfr4ti4lUsJf9MjON4h8I2uzPUVnVvv71JFPENTzbm_fg5QaB8ooEmqoYVJL972eKBM3nMFYSmnh9vE67m6bhvdDIO1rA==?j=ee966a6c-912a-4c4c-ae4f-de8017e9fa71&user=769110230425&i=0&authuser=0",
      "applied-physics-i": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/rj5m2k851gfo9c60tp96c1agvhbranl7/1736829000000/b3f66dc3-9234-4644-8276-35b2fe0d6595/111876480700172355227/ADt3v-M3_haQopxTBYSPkl0yCaDnN87zb6FfaAcvGrFv125qYebPk4JSJKFMBOiqw88ez00SlYUSLaCDbbrRPbc8l1Z13N5miyYlYSa7_7iqbIZ9S1EN69ev0OneZJcw8M1YuWC1XY1RpuYgaGIVujwELj7ZsrTtM36DNFge79AOJOq7N7rCQqFdQ92UqoCqf5PWzjnghG2N8xu3xOzN-3IU5C7vmyODR0CRSJ1q1rmUTW_him9CjT40oXDQeeuA3G23-ZrZMXYSk8fzF_bLCM3Ry5wxmSBkV0-cSF7NylhazmN_ZatvOcRJ6obkk8xjvxA_Vyq9FhxI?j=b3f66dc3-9234-4644-8276-35b2fe0d6595&user=769110230425&i=0&authuser=0",
      "applied-physics-ii": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/sr8eh7ngte5sbt1mctk2vr6d2llt750t/1736829000000/80ba61fc-f191-485f-a1f7-1fafc0891c0d/111876480700172355227/ADt3v-MvNH9jtlBdjNGJUOADf3BwOt8arhXfDi9Ij573-W7-QBAtlKOnPV85QBYrIuRFclm7qjxFeLNXqwhcls8G0NvWlXr5oEj11UNfZvkt2xsZ0CRS5XppgEAYD7hv4qL4FMNSA4qA9hucdzDZCFRSv3GTj8J9fxnIO0993CWOUFar2dFS_BxhWWG5p6ubyVB-k6X_9Mb2kofcYnjif8pPYVCRma_cbuqcKLyKQrJHUst8en4AiL0_m2-5QqVYsaLsGeu1NWxCt0I9YtvvkmRy5VCxOcrVHP8ixFrKd7Ck-F1mrN_EYy_EczS6Mtps2lRQNzm7E7G5?j=80ba61fc-f191-485f-a1f7-1fafc0891c0d&user=769110230425&i=0&authuser=0",
      "cnc-machines-&-automation": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/h56f8ct8sf1valnp7q6bc3iaihjfl4v5/1736829000000/e4eca669-7adf-49cf-8698-a9b4f974be01/111876480700172355227/ADt3v-M3QK9_p0A_qc-TK2641Bvk40MxeTS1tppQpuOQOP4yR9xXS0GYbt45TrZdPfBjjbHzQkOuJpCFYb4nj9jjP2EEqmfyKtMTMm9-5PFSLTGX0P_yYgHqeh7l3CGUVjJ9PCnYjy_msDTK6L5A29HfSwsBzpWHWZQ6DRagtTqiGcRFnW0MUm6hXrdx6SGf7hSo2zbkQY2yhYrRln_tBxn9STFw_fBts1WfGWNA1Q9rAaqfnmBT8CijrotJbvK6k15FRhYhlpmhjrLsTPlghDkjE0bm27efR3dK73IS149C29i5EGkQqKTINeGBrN2qyVxf9zenDwgvaN56xNxwlEfEmlDUZjRt4A==?j=e4eca669-7adf-49cf-8698-a9b4f974be01&user=769110230425&i=0&authuser=0",
      "engineering-graphics": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/snbt11k3pt71397edcqhg8m7v9eevn65/1736829000000/fde2d4e5-d22b-44c7-93ee-421c33f139fb/111876480700172355227/ADt3v-N8fmxNU7l6U49ZfMcNfK9LDaWsyBmlHI7Va9wWs32t2NsujZ0ChKtd7l5s078nAqZLZ_LT4Q0K-vLzDFv2IF5IbjIzXbDZe3Y-3pIvIHxotNtesSkdj9F34K3GSAkeqfT8ykCiAQ1EOaJ8KTZd_JxX2gYmsvm7Szp3poXpro2m-ngXPL1cbdfVy894WsmSeSGlQmvR7-bQF6ynEMwgOU7x8TiNiQTmnYjS9xa1Pfgdyj_7DDoSepIvA-KC_ueWAmDQ84nDqNjNEe-b4LCin9r2wiI5Kh5yirQbGDFsgWVOCWYuORhdIcEz5yLTdz9qs0rtKTED?j=fde2d4e5-d22b-44c7-93ee-421c33f139fb&user=769110230425&i=0&authuser=0",
      "english-&-communication-skills-i": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/vr52fflvm0sqo3c5uo90k8n0c7opaetp/1736829000000/976597a0-49f8-455a-87bb-a187b45de08d/111876480700172355227/ADt3v-MtLSKeqUuMIwoCNn9rf_aphpPbHypWYwVupeuAfJvWNwBXGHPBR4XX7SzRvwAjbAPf53GlXzrjTTiTdw_piM0EABZHIDVqfFjblZH9Y32z7ezNC52s53QYF4oEcAKEwl3NhORiFSLoRP0UwDBz6yttI34H6IkVsvRR0CTAf6typVGayA5aeF_dSt_Vrq56s2Rx85tXQkrZ_8yv98RrLt7WXklivuQaLb1zZGWBRn4fBnAuz0GUo-R0J_0gJXYjjbfOgl_rfnnggP48Pku0swl-0MaObiFNg2mLGSdDVMauzaapCUdXbGqTju-d4Ala7K6wrBuIZNFfhT_OYw0ri-7IB64avQ==?j=976597a0-49f8-455a-87bb-a187b45de08d&user=769110230425&i=0&authuser=0",
      "english-&-communication-skills-ii": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/k894hfdcppj2d13445tspo2532n7ns85/1736829000000/67553840-58cd-4893-af58-07dd7c247d6e/111876480700172355227/ADt3v-MIe1kVFTSJS9mwjRUkVcZo51z2ED0Qu64aZZwsVdbdQEYIxL23lPrqCLJoDwO1AxZ4AargR3DSwv2eaLU6Z57rwkdefzmVdpdMir53Bg7Xb382nvm1vRQV4JxHRm2wJBGW2K7Ofa2WasQe-G_98kaMikYSOV9ZSyi4kJEP3m1jJiUGp97p1O4DFjAtjRLPNqLrEUPFdhrjwbjzJlc8VcUmpWmG2VhOM_ngBY98PuNk-sZTUFIKhDmT7K0lgGesj2FaC-XlOHZKYUAQvVPptAYw_vGFMAbkSrjbYMErFzjLhd3dcbgtQLgkFyz_ujKZQYSWB6z5qSA0uFm0YwCjIRQvHrtzNQ==?j=67553840-58cd-4893-af58-07dd7c247d6e&user=769110230425&i=0&authuser=0",
      "entrepreneurship-development-&-management": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/1g7s6r6mm58j8p8q3ou4iffjrueinvr1/1736829000000/0b276a69-aca7-4de2-886c-88b2b1184c1d/111876480700172355227/ADt3v-PExPZbFP5kfkO5SXAo7eMfDEQWZGwdw6RXnWZyji5n5NGkukNZUhrpbh3r9KKFLIaY-8wOk6oBt8zSwty52nsZ6C5tToejSUS3YcxsLKfUrHIPk8j6kuHtm5HonS-f7B_HMLrXCt-9fUhgixvxO1BNYEd1vIBPgT6tN5fe9_jVs4vne2FumBeQeblW9fezt08t81dK0A9CeKZr42DgRWnve2Ed1bO464FE2sltbpjndTIjT4yco0hadVmF-WfzhTvZ9e6L7YjkLi2J3B_HURtUugYGi0Yk8X3k7DecXcNkHWlhAaZYtGVshBo9-tI7Kw7JNPGgNAnEBBJ307y1P5fGy9hVhatznI0n22ZSXIPIPn8li6U=?j=0b276a69-aca7-4de2-886c-88b2b1184c1d&user=769110230425&i=0&authuser=0",
      "environmental-studies-&-disaster-management": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/brk0agmqhb404athfmhugr7m0g4ddnh7/1736829000000/d6ad8644-46e0-427f-80f5-812f4d238280/111876480700172355227/ADt3v-MfP-PGqUP99PlWRmnwbxbES7QmgwFFKsBmqpLE5JKRgcn-lXP-8UxOasXO5e5ey1ZAtgd-P1nTt5R--LUYkDNuQmaR_3JrfoXoBpRAGXM9y7nOUnW50J59moKanGrQvBadE7BtWqEKniR887bZzp14lnjTKVCahgz4wI2B0dlARxRRdDZWFIbh4YXoUG1-zf8LnwC6XbohHD4ZTGqKbmhZb04gVKKBxzN66FT902p0oON5TKNQ8rpVsjHVWGbVBX29msqWGIZ3nTcBQmfbhYFjVYqh7Ym1_pnEvbJjuBjTyM1m1VaKa_Y1ZrrNHNiuoMSK4kdLGZ_zVH2W_furMh4V5y8QURag0q03vQ5xQjaB78ro4kI=?j=d6ad8644-46e0-427f-80f5-812f4d238280&user=769110230425&i=0&authuser=0",
      "fundamentals-of-it": "https://drive-data-export.usercontent.google.com/download/4vlasqaah34g6gkc1i8af4l60kt4hbvu/dp9mogebld8gk6b3g98hj18q1qh113td/1736829000000/a97eb870-1c57-46ec-8b94-37c28c3bf34b/111876480700172355227/ADt3v-M13ClTU5ULFRnGEy9awy4v33dZ7mq0Y3SUfDW1ZeQDjY8lteE928yilAROL9qhU1wK9qQ1NA6aTtRwqm_ihhKBTXqfWRPMthk2FKVMrdWQ__T1hNVUp1kCYvjOEqN3nsuv6EEvTXcGeBiiUQttZksTccoHCqjFf4n1FbG2-LXye5l8NuemNGihXE_4FZObQp7drNzjzFyzyJXryco2NGJAPERq_Fhws8t5v6m2hhZ0-e42oUpyRcvxTLuL1uqTU_McxK--r8kYwu5XSftedR1PlcVTp5CxQmZwlaWZrSk6fyXIzEz4YZ3Uv7JsGqYaor1cka-o?j=a97eb870-1c57-46ec-8b94-37c28c3bf34b&user=769110230425&i=0&authuser=0"
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
