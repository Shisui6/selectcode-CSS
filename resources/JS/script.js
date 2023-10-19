const createRandomWord = () => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let word = "";
  let length = Math.floor(Math.random() * 8) + 3;
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * 26);
    let letter = alphabet[index];
    word += letter;
  }
  return word;
};

const projects = document.getElementById("projects-section");

for (let i = 0; i < 20; i++) {
  const project = document.createElement("div");
  project.className = "project";
  project.innerHTML = `
    <h2>${createRandomWord()}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
    <div class="header-first">
      <div class="project-bottom">
        <img src="./resources/images/cash.png" alt="cash">
        <p>1.2345,67 €</p>
      </div>
      <div class="project-bottom">
        <img src="./resources/images/head.png" alt="head">
        <p>Customer A</p>
      </div>
    </div>
  `;
  projects.appendChild(project);
}
