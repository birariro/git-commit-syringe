require('dotenv').config();

const git = require('./src/GitCommander');

const filePath = process.env.filePath
const dates = process.env.dates.split(',');

function readyModifyFile(filePath) {

  const currentContent = require('fs').readFileSync(filePath, 'utf-8');
  let newContent = currentContent === 'fizz' ? 'buzz' : 'fizz'

  require('fs').writeFileSync(filePath, newContent);
}

for (const date of dates) {

  readyModifyFile(filePath);
  const tree = git.addDot(filePath)
  const commit = git.commit(tree, date);

  console.log(`${date} commit hash: ${commit} \n`);
}

