const navTemplate2 = document.createElement('template');
navTemplate2.innerHTML = `

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
    
    .flex-vertical {
        margin-top: 38px;
        flex-direction: column;
        gap:5px;
    }
</style>

<div id="menuDropdown" class="flex-container flex-vertical">
    <div>
        <img class="Icon" src="/Materials/Icon/instagram.png" alt="Ins" onclick="parent.open('https://www.instagram.com/fqhang/')">
    </div>
    <div>
        <img class="Icon" src="/Materials/Icon/linkedin.png" alt="LinkedIn" onclick="parent.open('https://www.linkedin.com/in/fqhang/')">
    </div>
</div>
`

class dropdownMenu extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navTemplate2.content);
    }
}

customElements.define('dropdown-menu', dropdownMenu);