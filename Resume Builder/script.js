// JavaScript (script.js)

// User Registration
const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user registration data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate and process the registration data here
    // You would typically send an AJAX request to a server for registration
    // For simplicity, we'll just show an alert here
    alert(`Registered with Username: ${username}`);
});

// Education
const educationList = document.getElementById('education-list');
const addEducationButton = document.getElementById('add-education');

addEducationButton.addEventListener('click', () => {
    const educationItem = document.createElement('div');
    educationItem.innerHTML = `
        <label for="education">Education:</label>
        <input type="text" name="education" required>
        <br>
    `;
    educationList.appendChild(educationItem);
});
//skills
const skillsList = document.getElementById('skills-list');
const addSkillsButton = document.getElementById('add-skills');

addSkillsButton.addEventListener('click', () => {
    const skillsItem = document.createElement('div');
    skillsItem.innerHTML = `
        <label for="skills">Skills:</label>
        <input type="text" name="skills" required>
        <br>
    `;
    skillsList.appendChild(skillsItem);
});


// Work Experience
const experienceList = document.getElementById('experience-list');
const addExperienceButton = document.getElementById('add-experience');

addExperienceButton.addEventListener('click', () => {
    const experienceItem = document.createElement('div');
    experienceItem.innerHTML = `
        <label for="experience">Experience:</label>
        <input type="text" name="experience" required>
        <br>
    `;
    experienceList.appendChild(experienceItem);
});

// Generate Resume
const generateResumeButton = document.getElementById('generate-resume');
const resumeOutput = document.getElementById('resume');

generateResumeButton.addEventListener('click', () => {
    // Gather user input from the form fields and create a resume
    const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
    const linkedin = document.getElementById('email').value;
  
  const github = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    const educationInputs = document.getElementsByName('education');
   const skillsInputs = document.getElementsByName('skills');
    const experienceInputs = document.getElementsByName('experience');
    
    const educationData = [];
    const skillsData = [];
    const experienceData = [];
    
    educationInputs.forEach((input) => {
        educationData.push(input.value);
    });
  skillsInputs.forEach((input) => {
        skillsData.push(input.value);
    });
    
    experienceInputs.forEach((input) => {
        experienceData.push(input.value);
    });

    // Create a basic HTML resume
    const resumeHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>github: ${email}</p>
        <p>linkedin: ${email}</p>
        <p>Phone: ${phone}</p>

        <h4>Education</h4>
        <ul>
            ${educationData.map((edu) => `<li>${edu}</li>`).join('')}
        </ul>
        <h4>Skills</h4>
        <ul>
            ${skillsData.map((edu) => `<li>${edu}</li>`).join('')}
        </ul>

        <h4>Work Experience</h4>
        <ul>
            ${experienceData.map((exp) => `<li>${exp}</li>`).join('')}
        </ul>
    `;

    resumeOutput.innerHTML = resumeHTML;
});
// JavaScript code to apply the selected template
document.addEventListener("DOMContentLoaded", function () {
    const templateForm = document.getElementById("template-form");
    const applyTemplateButton = document.getElementById("apply-template");
    const selectedTemplate = document.getElementById("template");

    applyTemplateButton.addEventListener("click", function () {
        const selectedValue = selectedTemplate.value;

        // Apply the selected template's CSS by changing the stylesheet href
        const linkElement = document.getElementById("selected-template");
        linkElement.href = `${selectedValue}.css`; // Assuming template CSS files are named "template-default.css", "template-1.css", etc.
    });
});
