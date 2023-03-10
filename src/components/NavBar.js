import React from "react";


function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="btn btn-secondary" href="/">GROW SMART</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="/home">Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/journal-entries">Journal</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/to-do">To-Do</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/seed-list">Seed List</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="/sign-in">Sign In</a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="/plant-library">Plant Library</a>
              </li>
              </ul>
              </div>
  </div>
</nav>
    );
}


export default Navigation;