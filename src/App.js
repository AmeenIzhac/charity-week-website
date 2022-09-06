import React from 'react'
  import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (<>
  <header class="nav">
    <div class="navbar-fixed">
      <nav class="nav-wrapper blue darken-1">
        <div class="container">
          <a class="brand-logo" href="./">
            <img class="responsive-image" src="cw-logo.png" alt="Logo"></img>
          </a>
          <a href="#/" class="sidenav-trigger" data-target="mobile-menu">
            <i class="material-icons white-text">menu</i>
          </a>
          <ul class="right hide-on-med-only  hide-on-med-and-down valign-wrapper">
            <li><a class="white-text l1 m1" href="#home">Home</a></li>
            <li><a class="white-text l1 m1" href="#about">About</a></li>
            <li><a class="white-text l1 m1" href="#events">Events</a></li>
            <li><a class="white-text l1 m1" href="#contact">Contact</a></li>
            <li><a class="white-text l1 m1" href="#sponsors">Sponsors</a></li>
            <li><a class="white-text l1 m1" href="./archive/">Archive</a></li>

            <li><a href="https://www.facebook.com/ImperialCW/"
                  class="btn-floating transparent z-depth-0 waves-effect waves-light">
                  <i class="fab fa-facebook"></i>
                </a></li>
            <li><a href="https://www.instagram.com/imperialcollegecw/"
                  class="btn-floating transparent z-depth-0 waves-effect waves-light">
                  <i class="fab fa-instagram"></i>
                </a></li>
            <li><a href="https://twitter.com/impcw"
                  class="btn-floating transparent z-depth-0 waves-effect waves-light">
                  <i class="fab fa-twitter"></i>
                </a></li>
            <li><a class="white-text btn orange darken-2 waves-effect waves-light"
                  href="https://charityweek-schools.islamic-relief.org.uk/fundraising/imperial-college-charity-week-2021-auction-di">Donate</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
    <h1>cw website</h1>
  </>);
}

export default App;
















