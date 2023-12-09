require('dotenv').config();

const terminalCommander = require('./TerminalCommander');
const converter = require("./Converter");

const author = getAuthorName();
const email = getAuthorEmail();

function getLastCommit(){
  const command = "git rev-parse HEAD"
  return terminalCommander.execute(command).replace("\n", "");
}

function getAuthorEmail(){
  const command = "git config user.email"
  return terminalCommander.execute(command).replace("\n", "");
}

function getAuthorName(){
  const command = "git config user.name"
  return terminalCommander.execute(command).replace("\n", "");
}


function workingDirectoryFileToGitObject(filePath) {
  const command = `git hash-object -w ${filePath}`;
  return terminalCommander.execute(command).replace("\n", "");
}

function gitObjectToTree(filePath, fileHash) {
  const indexCommand = `
    git update-index --add --cacheinfo 100644 ${fileHash} ${filePath}
  `;

  terminalCommander.execute(indexCommand);
  const treeCommand = 'git write-tree';
  return terminalCommander.execute(treeCommand).replace("\n", "");
}

function lastCommitResetHead(commitHash) {
  const command = `git reset ${commitHash}`;
  terminalCommander.execute(command);
}


function createCommitByDate(treeHash, oldCommitHash, date) {

  const timestamp = converter.yyyyMMddToTimeStamp(date)

  const command = `echo "tree ${treeHash}
parent ${oldCommitHash}
author ${author} <${email}> ${timestamp} +0900
committer ${author} <${email}> ${timestamp} +0900

${date}" | git hash-object -t commit --stdin -w`;

  const commit = terminalCommander.execute(command).replace("\n", "")
  lastCommitResetHead(commit);
  return commit
}

module.exports = {
  getLastCommit,createCommitByDate, workingDirectoryFileToGitObject,gitObjectToTree
};