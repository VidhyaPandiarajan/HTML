
function getusers() {
    let users = [];
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        
        users = [
            {username: 'steve', email:'steve@mail.com'},
            {username: 'dustin', email: 'dustin@mail.com'},
        ];
        if(users != null)
        {
            resolve(users);
        }else{
            reject("data failed");
        }
    
    }, 1000);
    });
    }

    const promise = getusers();
    function finduser(username)  {
        promise.then((value) => {
  
                const user = value.find((user) => user.username === username);
                console.log(user);

                
            });

        };
        finduser('steve');
    