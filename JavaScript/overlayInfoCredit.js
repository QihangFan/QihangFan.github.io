const creditInfo = document.createElement('template');

creditInfo.innerHTML = `
    
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../css/style.css">
    
      <p class="p-HoverInfo" style="margin-bottom:0;">
        Copyright © 2020 Qihang Fan. All Rights Reserved
      </p>
`

class overlayCredit extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(creditInfo.content);
    }
}

customElements.define('overlay-credit', overlayCredit);