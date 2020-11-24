interface Response{
    token:string;
    user:{
        email:string;
        password: string;
    }
}

export  function login(): Promise<Response>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token:'o1i2hjo',
                user:{
                    email:'talysebf@gmail.com',
                    password:'unifacef',
                }
            })
        }, 2000)
    })
}