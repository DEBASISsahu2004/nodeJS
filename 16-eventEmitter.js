// on - listen for an event
// emit - emit an event
// Order matters here first write on then emit

// import the event module 
const eventEmitter = require('events');

// created the instance of class eventEmitter
const customEmitter = new eventEmitter();

// pass the event name and the callback function
customEmitter.on('response',()=>{
   console.log(`data received`);
});
customEmitter.on('response',(name, age)=>{
   console.log(`some other logic here ${name} ${age}`);
});

// emit the event
customEmitter.emit('response', 'JOHN', 34);