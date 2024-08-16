const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
            <div class="data">
                <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p><br>
                <p>Este perfil possui: ${user.followers ?? 'Não possui seguidores 😢'} seguidores</p>
                <p>Este perfil está seguindo: ${user.following ?? 'Usuário segue 0 pessoas'} seguidores</p>
            </div>
        </div>`;

        if (user.followers.length === 0) {
            this.userProfile.innerHTML += `<p>Não possui seguidores 😢</p>`;
        }

        let repositoriesItens = '';
        user.repositories.forEach(repo => {
            repositoriesItens += `<li>
                <a class="textRepositories" href="${repo.html_url}" target="_blank">${repo.name}
                <div>
                <ul>
                    <div class="forks"><li class="infosRepositories">🍴${repo.forks}</li></div>
                    <div class="stars"><li class="infosRepositories">⭐${repo.stars ?? '0'}</li></div>
                    <div class="watchers"><li class="infosRepositories">👀${repo.watchers}</li></div>
                    <div class="languages"><li class="infosRepositories">👅${repo.language ?? 'linguagem não informada'}</li></div>
                </ul>
                </div></a>
                
            </li>`;
        });

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`;
        }

        let eventsItens = '';
        user.events.forEach(event => {
            if (event.type === 'PushEvent') {
                event.payload.commits.forEach(commit => {
                    eventsItens += `<li><strong>${event.repo.name}</strong> - ${commit.message}</li>`;
                });
            } else if (event.type === 'CreateEvent') {
                eventsItens += `<li><strong>${event.repo.name}</strong> - Sem mensagem de commit</li>`;
            } else {
                eventsItens += `<li>${event.type} at <a href="${event.repo.url}" target="_blank">${event.repo.name}</a></li>`;
            }
        });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                <h2>Eventos Recentes</h2><br>
                <ul>${eventsItens}</ul>
            </div>`;
        } else {
            this.userProfile.innerHTML += `<p>Usuário não possui Eventos Recentes 😢</p>`;
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    }
};

export { screen };