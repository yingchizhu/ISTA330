

window.onload = () => {
    console.log(window.location.href);
    let hostname = new URL(window.location.href).hostname;
    let username = hostname.split('.')[0];
    console.log(username);
    let api = `https://${username}-imagequiz-backend.herokuapp.com`;
    let testDiv = document.getElementById('test-the-api');
     fetch(`${api}/flowers`).then(x => testDiv.innerHTML += x.length);
    let iframe = document.getElementById('myApplicationFrame');
    iframe.setAttribute('src', api);
}

