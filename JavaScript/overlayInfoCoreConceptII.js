const coreConceptII = document.createElement('template');

coreConceptII.innerHTML = `
    
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../css/style.css">
    
    <h2>
        Decentralization
    </h2>
    <h2 class="h2-Dec">
        Core Concept II
    </h2>
    <p class="p-HoverInfo">
        Centralized factory seeks the best efficiency. It highlights the simplification of the production process in order to maximize profit. Commercialization resulting from centralization damages human interaction and creativity.
    </p>
    <p class="p-HoverInfo">
        Therefore, we emphasize decentralization in the quazi-autonomous factory system to evoke the consciousness of humanity’s sustainability.
    </p>
`

class coreConceptSecond extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(coreConceptII.content);
    }
}

customElements.define('core-concept-ii', coreConceptSecond);