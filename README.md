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
module.exports = {
    ...
    themeConfig: {
        sidebar: [],
        sidebarDepth: 2
    ...
```
- `cd docs/src`
- `npx vuepress-auto-sidebar`
- `cd ../..`
- `npm run docs:build`

# Update

- `git submodule update && npm run remove-files`
- `npm run docs:build`
