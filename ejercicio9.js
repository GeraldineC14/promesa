async function showGitHubPersonal(){
  //fetch devuelve una promesa
  let response = await fetch('https://api.github.com/users/GeraldineC14/repos')
  
  //json() retorna una promesa
  let listasRepos = await response.json();
  console.log(listasRepos);
}

//showGitHubPersonal();

function getRepos(){
  fetch('https://api.github.com/users/GeraldineC14/repos')
    .then(respuesta => respuesta.json())
    .then(datos => {
      console.log(datos)
    })
}

getRepos();