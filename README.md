<p align="center">
  <a href="https://github.com/eliooses/vuepress-multi-repos">
    <img src="https://vuepress.vuejs.org/hero.png" alt="VuePress" width="200">
  </a>
</p>
<p align="center">
  VuePress for multiple repositories
</p>

---

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/eliooses/vuepress-multi-repos)](https://github.com/eliooses/vuepress-multi-repos/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/eliooses/vuepress-multi-repos.svg)](https://github.com/eliooses/vuepress-multi-repos/pulls)
  [![License](https://img.shields.io/github/license/eliooses/vuepress-multi-repos)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Running the tests](#tests)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)
- [Disclaimer](#disclaimer)
- [Contact](#contact)
- [About this README](#about-readme)

---

## 👨‍💻 About <a name="about"></a>

[VuePress for multiple repositories](https://github.com/eliooses/vuepress-multi-repos) is an experimental repository with the purpose of obtaining automagically the complete list of repositories of an organization, user, product or group of them and gathering all their documentation in one place.

---

## 🏁 Getting Started <a name="getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development, testing and production purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

This is a very simple project that uses the VueJs framework to publish documentation from a group of repositories of an organization, user, product, etc. from an external API ([GitHub API](https://docs.github.com/en/free-pro-team@latest/rest)).

### Prerequisites:

**Git**: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

**GitHub CLI**: [https://cli.github.com/](https://cli.github.com/)

**Node**: [https://nodejs.org/](https://nodejs.org/)

**NPM**: [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)

**NPX**:

```bash
npm install -g npx
```

How to check if installations succeeded:

```bash
git version
```
```bash
gh version
```
```bash
node -v
```
```bash
npm -v
```
```bash
npx -v
```
---

Open your terminal and type:

```bash 
gh repo clone eliooses/vuepress-multi-repos
```

**NOTE**: If you don´t have experience with terminals (it will be a problem for what follows, but at least in this step you have a visual interface alternative), you can open the [GitHub Desktop app](https://desktop.github.com/) in your OS and go to `File` > `Clone Repository` > `URL` tab and type:
```
eliooses/vuepress-multi-repos
```
After, just click the `CLONE` button.

Finally you have the simplest option: download and unzip the following `.zip` file with all the files and resources:

[https://github.com/eliooses/vuepress-multi-repos/archive/master.zip](https://github.com/eliooses/vuepress-multi-repos/archive/master.zip)

After that, just type the following instructions:

```bash 
cd vuepress-multi-repos
```

```bash 
npm i
```

Open your favorite IDE and edit the `.env` file with your target ID, for example:

```text 
# Set your ID TYPE ("orgs" or "users")
REPO_TYPE_ID=orgs

# Set your USER ID
REPO_USER_ID=zondax
```

Run the `get-repos.js` file with the following command (this get the complete list of repositories of your target ID):
```bash 
npm run repos
```

Run the `git-submodules.sh` file with the following command (this will download all the repositories to your hard disk):
```bash 
npm run submodules
```

Run the `remove-undesirable-files.sh` file with the following command (this will delete all the unnecessary files on the repositories):
```bash 
npm run remove-files
```

Create a installation of VuePress with the following command:
```bash 
npx create-vuepress-site
```
Follow the Vuepress instructions.

After that, edit `config.js` file:
```javascript
module.exports = {
    ...
    themeConfig: {
        sidebar: [],
        sidebarDepth: 2
    ...
```

With the following commands we will generate an auto sidebar for the documentation:
```bash 
cd docs/src
npx vuepress-auto-sidebar
cd ../..
```

Finally we will build the site:
```bash 
NODE_OPTIONS="--max-old-space-size=8192" npx vuepress build docs/src
```
---

## 🎈 Usage <a name="usage"></a>

### Work in Progress.

This project is under WIP, but for now, if you want update the documentation you can try the following:

```bash 
git submodule update && npm run remove-files
npm run docs:build
```

If an error occurs, delete all files of `\.git\modules\docs\src` folder and type the following command in your terminal:
```bash
git submodule update 
```

---

## 🚀 Deployment <a name="deployment"></a>

Take the content of `vuepress-multi-repos\docs\src\.vuepress\dist` folder and deploy in your production environment.

---

## 🔧 Running the tests <a name="tests"></a>

### Work in Progress.

---

## ⛏️ Built Using <a name="built_using"></a>

- [VueJs](https://vuejs.org/)
- [VuePress](https://vuepress.vuejs.org/)
- [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest)
- ❤️, Node, NPM, NPX and bash commands

---

## ✍️ Authors <a name="authors"></a>

- [@eliooses](https://github.com/eliooses) - Initial work

See also the list of [contributors](https://github.com/eliooses/vuepress-multi-repos/contributors) who participated in this project.

---

## 🎉 Acknowledgements <a name="acknowledgement"></a>

This project is a tribute to the memory and work of my brother [Pablo Osés](https://twitter.com/pablooses), who until the last day of his life was programming to try to make this world a happier place.

---

## ©️ DISCLAIMER <a name="disclaimer"></a>

All code and text in this project belongs to their respective authors. All rights over them are completely reserved.

All the code originally developed for this project is under its respective [LICENSE](/LICENSE).

---

## 📧 CONTACT <a name="contact"></a>

Feel free to contact me with any questions at [elio@netfilmx.com](elio@netfilmx.com).

---

## 📖 About this README <a name="about-readme"></a>

This [README](/README.md) file was made with some third-party open source or free-to-use tools like the ones listed below:

- [Shields IO](https://shields.io/)
- [The Documentation Compendium](https://github.com/kylelobo/The-Documentation-Compendium)
- [Emojipedia](https://emojipedia.org/)