class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = 'By ' + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);



   

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
        newsImage.alt = "Foto da notícia"
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.append(cardRight);

        return componentRoot;

    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 15px;
            margin-left: 15px;
            width: 720px;
            border: 1px solid gray;
            -webkit-box-shadow: 34px 1px 48px -1px rgba(0,0,0,0.35);
            -moz-box-shadow: 34px 1px 48px -1px rgba(0,0,0,0.35);
            box-shadow: 34px 1px 48px -1px rgba(0,0,0,0.35);
        
        }
            
            .card__right{
                display: flex;
                justify-content: center;
            
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            img {
                height: 160px;
                width: 200px;
                margin: 15px;
            }
            
            .card__left > span {
                font-weight: 400;
            }
            
            .card__left > a {
                font-size: 25px;
                margin: 15px 0px;
                text-decoration: none;
                color: black;
            }
            
            .card__left > p {
                color: rgb(107, 106, 106);
            }
        `

        return style;

    }
}


customElements.define('card-news', CardNews);