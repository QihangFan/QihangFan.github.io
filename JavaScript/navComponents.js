const navTemplate = document.createElement('template');
navTemplate.innerHTML = `

<style>
    #menu {
      display: flex;
      gap: 10px;
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 3;
    }
    
    .Icon {
      width: 28px;
      cursor: pointer;
    }
</style>

<div id="menu" class="flex-container" >
    <div>
        <img class="Icon" src="/Materials/Icon/Home.png" alt="Home" onclick="location.href='/index.html';">
    </div>
    <div>
        <img class="Icon" src="/Materials/Icon/Info.png" alt="Info">
    </div>
    <div>
        <img class="Icon" src="/Materials/Icon/Replay.png" alt="Replay">
    </div>
    <div>
        <img class="Icon" src="/Materials/Icon/Menu.png" alt="Menu">
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




// const headerTemplate = document.createElement('template');
// headerTemplate.innerHTML = `
//
// <style>
//     .header{
//         text-align: center;
//     }
//     h1{
//         color: blue;
//     }
// </style>
//
// <div>
//     <div class="header">
//         <h1> Header - My First Blog on Web Component </h1>
//     </div>
// </div>
// `
//
// class Header extends HTMLElement {
//     constructor() {
//         // Always call super first in constructor
//         super();
//     }
//
//     connectedCallback() {
//         const shadowRoot = this.attachShadow({ mode: 'open' });
//         shadowRoot.appendChild(headerTemplate.content);
//     }
// }
//
// customElements.define('header-component', Header);