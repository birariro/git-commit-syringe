const gitRowCommander = require('./core/GitLowCommander');

function addDot(filePath) {
    const file = gitRowCommander.workingDirectoryFileToGitObject(filePath);
    const tree = gitRowCommander.gitObjectToTree(filePath, file);
    return tree
}

function commit(treeHash, date) {
    const oldCommit = gitRowCommander.getLastCommit();
    return gitRowCommander.createCommitByDate(treeHash, oldCommit, date)
}

module.exports = {
    addDot, commit
};