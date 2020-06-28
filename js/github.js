
var res;
var xhr = new XMLHttpRequest();
let projects_content = document.getElementById("github_projects");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        res = JSON.parse(xhr.response);
        
        projects_content.innerHTML =
            res.reduce(function (all, v) {
                return all + '<tr><td>'
                    +'<a href=\"'+ v.html_url + '\">' + v.name + '<a/></td>'
                    + '<td>' + v.description + '</td></tr>' 
            }, '<tbody>'
                +'<tr>'
                +'<th>Projeto</th>'
                +'<th>Descrição</th>'
                +'</tr><tr>') + '</tr></tbody>';
        
    }
}

xhr.open('GET', 'https://api.github.com/users/richardnas/repos', true);
xhr.send('');
