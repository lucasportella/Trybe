const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
}

describe('test getRepos', () => {
  it('should return sd01 todo-list', async () => {
    const requestedRepo = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect.assertions(2);
    expect(requestedRepo).toContain('sd-01-week4-5-project-todo-list');
    expect(requestedRepo).toContain('sd-01-week4-5-project-meme-generator');
  })
})