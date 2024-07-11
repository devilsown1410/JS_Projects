let api="https://api.github.com/users/";
const inputForm=document.getElementById('userInput')
const inputBox=document.getElementById('inputBox')
const main=document.getElementById('main')

const userGetFunction=(user)=>{
    fetch(api+user).then((response)=>{
        if (!response.ok) {
            throw new Error("No Such Profile Exists");
        }
        return response.json();
    }).then((data)=>{
        userCard(data);
        repoGetFunction(user);
    }).catch((error)=>{
        console.error(error);
        errorFunction(error.message);
    })
}
const repoGetFunction=(user)=>{
    fetch(api+user+"/repos?sort=updated")
    .then((response)=>{
        if (!response.ok) {
            throw new Error("Repo does not Exists");
        }
        return response.json();
    }).then((data)=>{
        repoCardFunction(data);
    })
    .catch((err)=>{
        console.error(err);
    })
}
const userCard=(user)=>{
    let id=user.name || user.login
    let info =user.bio ? `<p style="background-color:white">${user.bio}</p>`:"";
    let cardElement=`<div class="card">
                        <div style="background-color: rgb( 
		141, 
		240, 
		243
	)"><img src="${user.avatar_url}" alt="${user.name}" class="avatar"></div>
                        <div style="background-color:white" class="user-info">
                            <h2 style="background-color:white">${id}</h2>
                            <h2 style="background-color:white">${info}</h2>
                            <ul style="background-color:white">
                                <li>${user.followers} <strong>Followers</strong></li> 
                                <li>${user.following} <strong>Following</strong></li> 
                                <li>${user.public_repos} <strong>Repos</strong></li> 
                            </ul>
                            <div style="background-color:white" id="repos"></div> 
                            </div>
                    </div>`
    main.innerHTML = cardElement} 
  
const errorFunction = (error) => { 
    let cardHTML = `<div class="card"> 
                        <h1>${error}</h1> 
                    </div>`; 
    main.innerHTML = cardHTML
} 
  
const repoCardFunction = (repos) => { 
    let reposElement = document.getElementById("repos"); 
    reposElement.innerHTML="";
    for (let i = 0; i < 5 && i < repos.length; i++) { 
        let repo = repos[i]; 
        let repoEl = document.createElement("a"); 
        repoEl.classList.add("repo"); 
        repoEl.href = repo.html_url; 
        repoEl.target = "_blank"; 
        repoEl.innerText = repo.name; 
        reposElement.appendChild(repoEl);}
}

inputForm.addEventListener('submit',function(e){
    e.preventDefault()
    let user=inputBox.value;
    if(user){
        userGetFunction(user);
        inputBox.value=""
    }
})