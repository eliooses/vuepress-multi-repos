# Init

- `gh repo clone eliooses/vuepress-multi-repos`
- `cd vuepress-multi-repos`
- `npm i`
- Edit the `.env` file with your desire ID
- `npm run repos`
- `npm run submodules`
- `npm run remove-files`
- `npx create-vuepress-site` #ToDo: chequear si fuera necesario
- Follow the instructions
- config.js
```javascript
const sidebar = require('vuepress-auto-sidebar')

module.exports = {
    ...
    themeConfig: {
        sidebar: sidebar.getSidebar()
    ...
```
- `npm run docs:build`

# Update

- `git submodule update && npm run remove-files`
- `npm run docs:build`
