require('dotenv').config();

const converter = require('./src/converter');
const git_command = require('./src/git_command');

const filePath = process.env.filePath

const dates = process.env.dates.split(',');

let lastCommitHash = git_command.getLastCommitHash();

for (const date of dates) {
  
  const timestamp = converter.yyyyMMddToTimeStamp(date)

  git_command.initWorkingDirectory(filePath);
  const treeHash = git_command.initStagingArea(filePath)
  const commitHash = git_command.initRepository(treeHash, lastCommitHash, timestamp, `${date} message`);

  lastCommitHash = commitHash;

  console.log(`${date} commit hash: ${commitHash} \n`);
}

