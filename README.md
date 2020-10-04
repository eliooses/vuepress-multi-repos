# Init

- `gh repo clone eliooses/vuepress-multi-repos`
- `cd vuepress-multi-repos`
- `npm i`
- Edit the `.env` file with your desire ID
- `npm run repos`
- `npm run submodules`
- `npm run remove-files`
- `npx create-vuepress-site`
- Follow the Vuepress instructions
- Edit `config.js` file:
```javascript
const sidebar = require('vuepress-auto-sidebar')

module.exports = {
    ...
    themeConfig: {
        sidebar: []
    ...
```
- `npx vuepress-auto-sidebar`
- `npm run docs:build`

# Update

- `git submodule update && npm run remove-files`
- `npm run docs:build`
