const { execSync } = require('child_process');

function execute(command) {
  return execSync(command, { encoding: 'utf-8' });
}

module.exports = {
  execute
};