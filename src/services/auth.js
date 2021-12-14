export function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'awda64wda4wd5a4w54da4da5wd45ads857d',
                user: {
                    name: 'Marcos',
                    email: 'vinicius.uchoa2002@gmail.com'
                }
            })
        }, 2000)
    })
}