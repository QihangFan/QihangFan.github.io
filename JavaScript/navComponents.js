const navTemplate = document.createElement('template');
navTemplate.innerHTML = `

<style>
    .flex-container {
      display: flex;
      gap: 10px;
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 10;
    }
    
    .Icon {
      width: 28px;
      cursor: pointer;
    }
   
</style>

<div id="menu" class="flex-container" >
    <div>
        <img class="Icon" src="/Materials/Icon/Home.png" alt="Home" onclick="this.src='/Materials/Icon/Home-invert.png'; location.href='/index.html';">
    </div>
    <div id="infoIcon">
        <img class="Icon" src="/Materials/Icon/Info.png" alt="Info" onclick="showHideChecker(getElementById('hoverInfoDiv'), this, '/Materials/Icon/Info-invert.png', '/Materials/Icon/Info.png');">
    </div>
    <div>
        <img class="Icon" src="/Materials/Icon/sound-disabled.png" alt="Sound-Disabled">
    </div id="menuIcon">
    <div>
        <img class="Icon" src="/Materials/Icon/Menu.png" alt="Menu" onclick="showHideCheckerDropDown(getElementById('menuDropdown'), this, '/Materials/Icon/Menu-revert.png', '/Materials/Icon/Menu.png');">
    </div>
</div>
`

class navMenu extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navTemplate.content);
    }
}

customElements.define('nav-menu', navMenu);


function infoShowAnim(hoverContentDiv) {
    // console.log("run show function");
    if (hoverContentDiv.classList.contains("hidden-slide")) {
        hoverContentDiv.classList.remove("hidden-slide");
    }
    hoverContentDiv.classList.add("visible-slide");
}

function infoShyAnim(hoverContentDiv) {
    // console.log("run hide function");
    if (hoverContentDiv.classList.contains("visible-slide")) {
        hoverContentDiv.classList.remove("visible-slide");
    }
    hoverContentDiv.classList.add("hidden-slide");
}

var showHideController = 0;

function showHideChecker(hoverContent, icon, iconNewAddress, iconPrevAddress) {
    // console.log("run checker");

    if (showHideController === 0) {
        icon.src = iconNewAddress;
        infoShowAnim(hoverContent);
        ++showHideController;
    }
    else if(showHideController === 1) {
        icon.src = iconPrevAddress;
        infoShyAnim(hoverContent);
        showHideController = 0;
        topFunction();
    }
}

var showHideControllerDropDown = 0;

function showHideCheckerDropDown(hoverContent, icon, iconNewAddress, iconPrevAddress) {
    // console.log("run checker");

    if (showHideControllerDropDown === 0) {
        icon.src = iconNewAddress;
        infoShowAnim(hoverContent);
        ++showHideControllerDropDown;
    }
    else if(showHideControllerDropDown === 1) {
        icon.src = iconPrevAddress;
        infoShyAnim(hoverContent);
        showHideControllerDropDown = 0;
    }
}

function topFunction() {
    console.log("scroll to top");

    document.getElementById("siteDiv").scrollTo({top: 0, behavior: 'smooth'});
    document.body.scrollTo({top: 0, behavior: 'smooth'}); // For Safari
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
}
