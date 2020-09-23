export const linkSelector = {
    "github": {
        "link": "https://api.github.com/search/repositories?sort=stars&q=",
        "count": "total_count",
        "items": "items",
        "author": "owner|login",
        "author_avatar": "owner|avatar_url",
        "name": "name",
        "full_name": "full_name",
        "stars": "stargazers_count",
        "language": "language",
        "forks": "forks",
        "issues": "open_issues",
        "html_url": "html_url",
        "description": "description"
    },
    "gitlab": {
        "link": "https://gitlab.com/api/v4/projects?search=",
        "count": "",
        "items": "",
        "author": "namespace|name",
        "author_avatar": "namespace|avatar_url",
        "name": "name",
        "full_name": "name_with_namespace",
        "stars": "star_count",
        "language": "",
        "forks": "forks_count",
        "issues": "",
        "html_url": "web_url",
        "description": "description"
    },
    "bitbucket": {
        "link": "https://api.bitbucket.org/2.0/repositories/",
        "count": "",
        "items": "",
        "author": "owner|display_name",
        "author_avatar": "owner|links|avatar|href",
        "name": "name",
        "full_name": "full_name",
        "stars": "",
        "language": "language",
        "forks": "",
        "issues": "",
        "html_url": "project|links|html|href",
        "description": "description"
    }
}
