const usernameInput=document.getElementById("username");
const searchBtn=document.getElementById("searchBtn");

const profile=document.getElementById("profile");
const repositories=document.getElementById("repositories");

searchBtn.addEventListener("click", async function(){
    const username=usernameInput.value;
    if(username===""){
        alert("Please enter a Username");
        return;
    }
    getProfile(username);
 
});


// async function getGithubUserData(username){
//     const response=await fetch(`https://api.github.com/users/${username}`);
//     const data=await response.json();
//     return data;

// } 
// async function getGithubRepoData(username){
//     const response=await fetch('https://api.github.com/users/${username}/repos');
//     const data=await response.json();
//     return data;
// }

async function getProfile(username){
    try{
        const url=`https://api.github.com/users/${username}`;
        const response=await fetch(url);

        if(!response.ok){
            throw new Error("User not found");
        }
        const data=await response.json();

        profile.innerHTML=`
        <div class="profile">
        <img src="${data.avatar_url}">
            <div>
                <h2>${data.name || data.login}</h2>
                <p>Username:${data.login}</p>
                <p>${data.bio || "No bio available"}</p>
                <p>Followers:${data.followers} | Following:${data.following}</p>
                <p>Public Repos:${data.public_repos}</p>
                <a href="${data.html_url}" target="_blank">View Profile</a>
                <p>Following:${data.following}</p>

            </div>
        </div>
        `;
        const repoUrl=`https://api.github.com/users/${username}/repos`;
        const repoResponse=await fetch(repoUrl);
        const repoData=await repoResponse.json();
        repositories.innerHTML="<h2>Repositories</h2>";
        repoData.forEach(function(repo){
            repositories.innerHTML+=`
            <div class="repo">
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available"}</p>
            <p>Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count}</p>
            <a href="${repo.html_url}" target="_blank">View Repository</a>
            <p>Languae: ${repo.language || "Not specified"}</p>
            </div>
            `;
        });
    }catch(error){
        profile.innerHTML=`
        <p>${error.message}</p>
        `;
        repositories.innerHTML="";
    }
}