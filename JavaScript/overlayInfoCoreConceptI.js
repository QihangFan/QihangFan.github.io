const coreConceptI = document.createElement('template');

coreConceptI.innerHTML = `
    
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../css/style.css">
    
    <h2>
        Macro vs Micro
    </h2>
    <h2 class="h2-Dec">
        Core Concept I
    </h2>
    <p class="p-HoverInfo">
        A factory that resists mechanization trend should maintain original functionality while emphasizing human-centered spaces. On the one hand, the Macro scale indicates our programmatic consideration of the architecture adaption.
    </p>
    <p class="p-HoverInfo">
        Each typology iterates and interacts with the local environment. On the other hand, the Micro scale suggests human involvement in all Duran Lantink production processes. Production activities no longer happen in a linear way but jump among various spaces presented in typological miniatures.
    </p>
`

class coreConcept extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(coreConceptI.content);
    }
}

customElements.define('core-concept-i', coreConcept);