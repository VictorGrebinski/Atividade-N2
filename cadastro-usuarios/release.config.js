module.exports = {
  branches: ['main'], // Aqui é o nome da branch principal do seu repositório (ex: 'main' ou 'master')
  plugins: [
    '@semantic-release/commit-analyzer',         // Lê os tipos de commits
    '@semantic-release/release-notes-generator', // Gera as notas de versão
    '@semantic-release/changelog',               // Atualiza o CHANGELOG.md
    '@semantic-release/npm',                     // Atualiza a versão no package.json
    '@semantic-release/git'                      // Faz o commit das mudanças (changelog + versão)
  ]
};
