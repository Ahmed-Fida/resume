const skillsList = document.getElementById("skills-list");
const skillInput = document.getElementById("skill-input");
const addSkillBtn = document.getElementById("add-skill");

window.onload = () => {
  const storedSkills = JSON.parse(localStorage.getItem("skills")) || [];
  storedSkills.forEach((skill) => addSkillToList(skill));
};

addSkillBtn.addEventListener("click", () => {
  const skill = skillInput.value.trim();
  if (skill) {
    addSkillToList(skill);
    saveSkill(skill);
    skillInput.value = "";
  }
});

function addSkillToList(skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
}

function saveSkill(skill) {
  const storedSkills = JSON.parse(localStorage.getItem("skills")) || [];
  storedSkills.push(skill);
  localStorage.setItem("skills", JSON.stringify(storedSkills));
}
