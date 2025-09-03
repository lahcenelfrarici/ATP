
document.addEventListener('DOMContentLoaded', function () {
  // Create header HTML content
  const headerContent = `

   <div class="preloader">
        <div class="logo-container">
            <!-- Using a placeholder logo with your color -->
          <!-- <div class="atp__pr">
            ATP
            </div> -->
        </div>
        <div class="spinner"><img class="two--sc--img" src="./assets/images/logo.png"></div>
        <!-- <p class="loading-text">LOADING</p>
        <div class="progress-bar">
            <div class="progress"></div>
        </div> -->
    </div>
    <header class="header-inside" id="header-inside">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand logo__1" href="#"> <img class="two--sc--img" src="./assets/images/logo.png"></a>
          <a class="navbar-brand logo__2" href="#"> <img class="two--sc--img" src="./assets/images/logo-2.png"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="/index.html">Accueil</a></li>
              <li class="nav-item"><a class="nav-link" href="/Our_hestory.html">Agence</a></li>
              <li class="nav-item"><a class="nav-link" href="/Nos_projets.html">Projets</a></li>
              <li class="nav-item"><a class="nav-link" href="/carriere.html">Carrières</a></li>

            </ul>
          </div>
          <div class="right--contact-multi-langue">
            <div class="d-flex align-items-center gap-3">
              <div class="dropdown">
                <button class="btn btn-lang dropdown-toggle" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false">FR</button>
                <ul class="dropdown-menu" aria-labelledby="langDropdown">
                  <li><a class="dropdown-item" href="#">EN</a></li>
                  <li><a class="dropdown-item" href="#">ES</a></li>
                  <li><a class="dropdown-item" href="#">DE</a></li>
                </ul>
              </div>
              <button class="btn btn-contact">
              <a href="/Contactez-nous.html">
                <span class="contact-text">Contact</span>
                <span class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect width="28" height="28" rx="14" fill="#600100" />
                    <g clip-path="url(#clip0_6230_84)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3802 6.13867C14.3802 7.098 14.5514 8.04792 14.8841 8.93422C15.2168 9.82052 15.7044 10.6258 16.3191 11.3042C16.9338 11.9825 17.6635 12.5206 18.4667 12.8877C19.2698 13.2548 20.1307 13.4438 21 13.4438V13.4748H21V14.5248H21V14.5557C20.1307 14.5557 19.2698 14.7447 18.4667 15.1118C17.6635 15.4789 16.9338 16.017 16.3191 16.6954C15.7044 17.3737 15.2168 18.179 14.8841 19.0653C14.5514 19.9516 14.3802 20.9015 14.3802 21.8609H13.3067C13.3067 17.8982 15.745 15.2686 19.0285 14.5248L7 14.5248L7 13.4748L19.0286 13.4748C15.745 12.731 13.3067 10.1014 13.3067 6.13867H14.3802Z" fill="#FAFFF4" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6230_84">
                        <rect width="14" height="14" fill="white" transform="translate(7 7)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span></a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;

  // Insert the header at the beginning of the body
  document.body.insertAdjacentHTML('afterbegin', headerContent);
});

 