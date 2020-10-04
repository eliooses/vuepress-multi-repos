const fetch = require("node-fetch");
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const limitPerPage = 100;
const apiUrl = "https://api.github.com/" + process.env.REPO_TYPE_ID + "/" + process.env.REPO_USER_ID + "/repos";

const getUsers = async function(pageNo = 1) {

    let actualUrl = apiUrl + `?page=${pageNo}&per_page=${limitPerPage}`;
    var apiResults = await fetch(actualUrl)
        .then(resp => {
            return resp.json();
        });
    return apiResults;
}

const getEntireUserList = async function(pageNo = 1) {
    const results = await getUsers(pageNo);
    if (results.length > 0) {
        return results.concat(await getEntireUserList(pageNo + 1));
    } else {
        return results;
    }
};

(async() => {

    const entireList = await getEntireUserList();

    var submodules = "";

    this.items = entireList
    this.items.forEach(function(item) {
        submodules += '[submodule "' + item.name + '"]' + '\n'
        submodules += '	path = docs/' + item.name + '\n'
        submodules += '	url = ' + item.html_url + '\n'
    });

    fs.writeFile(".gitmodules", submodules, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

})();