const os =require("os");
console.log(`os platform:${os.platform()}`);
console.log(`os architecture:${os.arch()}`);
console.log(`os type:${os.type()}`);
console.log(`os release:${os.release()}`);
console.log(`HostName:${os.hostname()}`);

const totalMemGB=(os.totalmem()/1024/1024/1024).toFixed(2);
const freeMemGB=(os.freemem()/1024/1024/1024).toFixed(2);
console.log(`Memory:${freeMemGB} GB free out of ${totalMemGB} GB `);

const userInfo=os.userInfo();
console.log(`Current user:${userInfo.username}`);
console.log(`User home directory:${userInfo.homedir}`);