const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    forks: '',
    watchers: '',
    stars: '',
    languages: '',
    events: [],
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
    },
    setEvents(events) {
        this.events = events;
    },
    setForks(forks) {
        this.forks = forks;
    },
    setStars(stars) {
        this.stars = stars;
    },
    setWatchers(watchers) {
        this.watchers = watchers;
    },
    setLanguages(language) {
        this.languages = language;
    }
};

export { user };