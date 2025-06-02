const regisLogin = `
<div class="account-button">
    <a href="/registration/register.html" id="sign-up">Sign Up</a>
    <a href="/registration/login.html" id="login">Login</a>
</div>
`
const username = localStorage.getItem("username");
const accountInfo = `
<div id="username-detail">
    <img src="/assets/pfp2.jpg"><p id="username-bold">${username}</p>
</div>
`

let navbarRight;

if(localStorage.getItem("login-status")){
    navbarRight = accountInfo;
}else{
    navbarRight = regisLogin;
}

class Header extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/master.css"/>
        <link rel="stylesheet" href="/components/main-header.css"/>
        <div class="page-header">
            <div class="header-logo">
                <img src="../assets/logo.png" alt="NurSprout Logo">
                <a href="../index.html">NurSprout</a>
            </div>
            <div class="menu-link">
                <a href="../home.html"><p>Home</p></a>
                <a href="../nuri/nuri.html"><p>NuRI</p></a>
                <a href="../settings/Settings.html"><p>Settings</p></a>
            </div>
            ${navbarRight}
        </div>
        `;

        const currPage = window.location.pathname;
        const allLinks = this.shadowRoot.querySelectorAll('.menu-link a');

        allLinks.forEach(link => {
            const hreflink = link.getAttribute('href');
            const absolutePage = new URL(hreflink, window.location.origin).pathname;
            if (currPage === absolutePage){
                link.classList.add('active')
            }
        })
    }
}


customElements.define('main-header', Header);
