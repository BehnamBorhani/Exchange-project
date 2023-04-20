const template = document.createElement("template");
template.innerHTML = `
   <link rel="stylesheet" href="components/InvestorCard/investorCard.css">
   <div class="card">
       <div class="header">
           <div class="img-box">
               <img>
           </div>
           <h1 class="title">Features</h1>
       </div>
   
       <div class="content">
           <p>
               One of the largest investor in Decentralized world
           </p>
   
           <a class="btn-link">Read More...</a>
       </div>
   </div>
`;

class Investor extends HTMLElement {
   constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
   }

   connectedCallback() {
      this.shadowRoot.querySelector(".img-box img").setAttribute("src", `images/Investors/${this.getAttribute("logo")}.png`);
      this.shadowRoot.querySelector(".title").innerHTML = this.getAttribute("logo");
   }

   static observedAttributes() {
      return ["logo"];
   }
}

export { Investor };
