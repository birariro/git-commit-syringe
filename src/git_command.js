require('dotenv').config();

const terminal_command = require('./terminal_command');

const author = getAuthorName();
const email = getAuthorEmail();

function getLastCommitHash(){
  command = "git rev-parse HEAD"
  return terminal_command.execute(command).replace("\n", "");
}
function getAuthorEmail(){
  command = "git config user.email"
  return terminal_command.execute(command).replace("\n", "");
}
function getAuthorName(){
  command = "git config user.name"
  return terminal_command.execute(command).replace("\n", "");
}
function initWorkingDirectory(filePath) {

  const currentContent = require('fs').readFileSync(filePath, 'utf-8');
  let newContent = currentContent === 'fizz' ? 'buzz' : 'fizz'

  require('fs').writeFileSync(filePath, newContent);
}
function initStagingArea(filePath) {
  const fileHash = gitFile(filePath);
  const treeHash = gitTree(filePath, fileHash);
  return treeHash
}


function gitFile(filePath) {
  const command = `git hash-object -w ${filePath}`;
  return terminal_command.execute(command).replace("\n", "");
}

function gitTree(filePath, fileHash) {
  const indexCommand = `
    git update-index --add --cacheinfo 100644 ${fileHash} ${filePath}
  `;

  terminal_command.execute(indexCommand);
  const treeCommand = 'git write-tree';
  return terminal_command.execute(treeCommand).replace("\n", "");
}

function resetHead(commitHash) {
  const command = `git reset ${commitHash}`;
  terminal_command.execute(command);
}

function initRepository(treeHash, oldCommitHash, timestamp, commandMsg) {

  const commit = `echo "tree ${treeHash}
parent ${oldCommitHash}
author ${author} <${email}> ${timestamp} +0900
committer ${author} <${email}> ${timestamp} +0900

${commandMsg}" | git hash-object -t commit --stdin -w`;

  const commitHash= terminal_command.execute(commit).replace("\n", "")
  resetHead(commitHash);
  return commitHash
}

module.exports = {
  getLastCommitHash,initWorkingDirectory,initStagingArea,initRepository
};