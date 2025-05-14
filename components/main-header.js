class Header extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../master.css"/>
        <link rel="stylesheet" href="/components/main-header.css"/>
        <div class="page-header">
            <div class="header-logo">
                <img src="../assets/logo.png" alt="NurSprout Logo">
                <a href="../index.html">NurSprout</a>
            </div>
            <div class="menu-link">
                <a href="../home.html">Home</a>
                <a href="../nuri/nuri.html">NuRI</a>
            </div>
            <div class="account-button">
                <a href="/registration/register.html" id="sign-up">Sign Up</a>
                <a href="/registration/login.html" id="login">Login</a>
            </div>
        </div>
        `;
    }
}


customElements.define('main-header', Header);
