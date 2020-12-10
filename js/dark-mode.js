const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

const getCookieValue = (name) => {
    let value = document.cookie.split('; ').filter(
        x => x.search(name + '=') >= 0
    );
    
    return value.length ? value[0].substring(value[0].search('=')+1) : ''
};

const setCookieValue = (name, value, days) => {
    let date = (new Date(Date.now() + (days * 24 * 60 * 60 * 1000)));
    let expires = '; Expires=' + date.toGMTString();
    let domain = '; Domain=' + window.location.hostname;

    document.cookie = name + '=' + value + expires +  domain + '; Path=/ ; SameSite=Strict';
};

let dm_cookie = getCookieValue("dark-mode");

let button = document.getElementById('theme-button');

let body = document.body.classList;

button.addEventListener("click", () => {

    body.toggle('dark-mode');

    if (getCookieValue("dark-mode") == 'on') {
        setCookieValue('dark-mode', 'off', 365);
        button.innerHTML = moon;
        console.log("OFF? " + document.cookie);
    } else {
        setCookieValue('dark-mode', 'on', 365);
        button.innerHTML = sun;
        console.log("ON? " + document.cookie);
    }
});

switch (dm_cookie) {
    case 'on':
        body.add('dark-mode');
        // body.remove('dark-light');
        break;
    case 'off':
        body.remove('dark-mode');
        // body.add('dark-light');
        break;
    default:
        setCookieValue('dark-mode', 'on', 365);
        body.add('dark-mode');
        break;
}

button.innerHTML = (getCookieValue("dark-mode") == 'on') ? sun : moon;
