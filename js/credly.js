
const credlyUrl = "js/credly.json";
// const credlyUrl = "https://richardn-spider.s3.us-south.cloud-object-storage.appdomain.cloud/credly.json";

const credlyRequestInfo = {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'},
    mode: 'cors',
    cache: 'default'
};

function credly_badges(data) {
    return data.reduce((all, v) => (
        all + '<a class="card" href="' + v.reference + '"><img src="' + v.image_url + '" alt="' + v.title + '"></a>'
    ), '');
}

function defineBadges(badges) {
    document.getElementById("credly_badges").innerHTML = badges;
}

fetch(credlyUrl, credlyRequestInfo)
    .then(res => res.json())
    .then(data => defineBadges(
        credly_badges(data)
    ))
    .catch(err => console.log(err));
