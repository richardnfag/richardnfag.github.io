const githubUrl = "https://api.github.com/users/richardnfag/repos";

const githubRequestInfo = {
    method: 'GET',
    headers: {'X-GitHub-Api-Version': '2022-11-28'},
};

function github_projects(data) {
    return data.reduce((all, v) => {
        if (v.fork) return all;

        return all
            + '<tr><td>'
            + '<a href="' + v.html_url + '">' + v.name + '<a/></td>'
            + '<td>' + v.description + '</td></tr>';

    }, '<tbody>'
    + '<tr>'
    + '<th>Repositories</th><th>Description</th>'
    + '</tr><tr>') + '</tr></tbody>';
}

function defineProjects(projects) {
    document.getElementById("github_projects").innerHTML = projects;
}

fetch(githubUrl, githubRequestInfo)
    .then(res => res.json())
    .then(data => defineProjects(
        github_projects(data)
    ))
    .catch(err => console.log(err));
