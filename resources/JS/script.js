// Declare variables
const projects = document.getElementById('projects-section');
const collapse = document.getElementById('collapse');
const expand = document.getElementById('expand');
const sidebar = document.getElementById('sidebar');
const sidebarSmall = document.getElementById('sidebar-small');
const main = document.getElementById('main');

// Function to generate random words
const createRandomWord = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let word = '';
  const length = Math.floor(Math.random() * 8) + 3;
  for (let i = 0; i < length; i += 1) {
    const index = Math.floor(Math.random() * 26);
    const letter = alphabet[index];
    word += letter;
  }
  return word;
};

// Create and append 20 projects to the projects section
for (let i = 0; i < 20; i += 1) {
  const project = document.createElement('div');
  project.className = 'project';
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

// Add event listeners to the collapse and expand buttons to control the sidebar
collapse.addEventListener('click', () => {
  sidebar.style.display = 'none';
  sidebarSmall.style.display = 'block';
  main.style.marginLeft = '80px';
});

expand.addEventListener('click', () => {
  sidebar.style.display = 'block';
  sidebarSmall.style.display = 'none';
  main.style.marginLeft = '230px';
});

// Function to make the sidebar responsive to the screen size
const responsiveSidebar = (x) => {
  if (x.matches) { // If media query matches
    sidebar.style.display = 'none';
    sidebarSmall.style.display = 'none';
    main.style.marginLeft = '0px';
  } else {
    sidebar.style.display = 'block';
    sidebarSmall.style.display = 'none';
    main.style.marginLeft = '230px';
  }
};

const x = window.matchMedia('(max-width: 600px)');
responsiveSidebar(x); // Call listener function at run time
x.addListener(responsiveSidebar); // Attach listener function on state changes
