function getusers() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {username: 'steve', email:'steve@mail.com'},
            {username: 'dustin', email: 'dustin@mail.com'},
        ]);
    }, 1000);
    });
    }
function onFulfilled(users) {
    console.log(users);
}

const promise = getusers();
promise.then(onFulfilled);