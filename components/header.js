const header = document.getElementById("page-header");

const headerElement = document.createElement("div");

headerElement.className = "container page-header";

const pathName = location.pathname;

headerElement.innerHTML = `
     <div class="page-logo">
        <img src="./images/Isolation_Mode.png" width="39" height="30" />
        <p class="page-name">EduPress</p>
      </div>
      <div class="page-menu">
        <p><a href="./index.html" class="${
          pathName == "/final_project/index.html" ? "page-menu-active" : ""
        }">Home</a></p>
        <p class="${
          pathName == "/final_project/course.html" ? "page-menu-active" : ""
        }"><a href="./course.html">Courses</a></p>
        <p><a href="#">Blog</a></p>
        <p>
          <a href="#">Page <img src="./icons/arrow-down.svg" /></a>
        </p>
        <p><a href="#">Learn Press Add-Ons</a></p>
        <p><a href="#">Premium Theme</a></p>
      </div>
      <div class="page-option">
        <p><a href="#">Login</a> / <a href="#">Register</a></p>
        <div class="page-option-search-icon">
          <img src="./icons/search.svg" />
        </div>
      </div>
`;

header.appendChild(headerElement);
