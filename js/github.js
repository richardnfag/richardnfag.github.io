
var res;
var xhr = new XMLHttpRequest();
let projects_content = document.getElementById("github_projects");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        res = JSON.parse(xhr.response);
        
        projects_content.innerHTML =
            res.reduce(function (all, v) {
                return all + '<tr class="spectrum-Table-row"><td class="spectrum-Table-cell">'
                    +'<a href=\"'+ v.html_url + '\">' + v.name + '<a/></td>'
                    + '<td class="spectrum-Table-cell">' + v.description + '</td></tr>' 
            }, '<tbody class="spectrum-Table-body">'
                +'<tr class="spectrum-Table-row">'
                +'<th class="spectrum-Table-headCell">Projeto</th>'
                +'<th class="spectrum-Table-headCell">Descrição</th>'
                +'</tr><tr class="spectrum-Table-row">') + '</tr></tbody>';
        
    }
}

xhr.open('GET', 'https://api.github.com/users/richardnas/repos', true);
xhr.send('');
