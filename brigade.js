const { events, Job } = require('brigadier');

events.on('push', function(e, project) {
  console.log('received push for commit ' + e.commit);
  console.log(JSON.stringify(e));
  console.log(JSON.stringify(project));
  var job = new Job('hello', 'alpine:3.4');
  job.tasks = ['cat src/app1/hello.txt'];
  job.run();
});
