class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = ""
    }

    build() {

    }

    styles() {
        
    }
}


customElements.define('card-news', CardNews);