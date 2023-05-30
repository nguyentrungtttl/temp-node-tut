const os = require('os')
//info of current user
const user = os.userInfo()
console.log(user)

//system uptime in second
console.log(`system uptime in second is ${os.uptime} second`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);