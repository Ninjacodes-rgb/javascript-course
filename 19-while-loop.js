let username = "";
do{
    username = window.prompt(`Enter your name:`);
}
while(username === "" || username === null);
console.log(`Hello ${username}`);