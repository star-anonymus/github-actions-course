const core = require('@actions/core');
const github = require('@actions/github');

const VERSION = '1.0.1';

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! Greetings from a custom JavaScript action (v${VERSION}).`);

  const time = new Date().toTimeString();
  core.setOutput('time', time);

  const ctx = github.context;
  console.log(`Repository : ${ctx.repo.owner}/${ctx.repo.repo}`);
  console.log(`Event      : ${ctx.eventName}`);
  console.log(`Actor      : ${ctx.actor}`);
  core.info(`Workflow   : ${ctx.workflow}`);
} catch (error) {
  core.setFailed(error.message);
}
