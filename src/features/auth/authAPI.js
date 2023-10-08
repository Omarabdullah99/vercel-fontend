const link="https://vercel-backend-orpin.vercel.app"

export function createUser(userData){
    return new Promise(async(resolve)=>{
        const response= await fetch(`${link}/users/signup`,{
            method:'POST',
            body:JSON.stringify(userData),
            headers:{'content-type':'application/json'}
        })
        const data= await response.json()
        console.log('signup-authapi',data)
        resolve({data})

    })
}

export function checkeUser(loginInfo){
    return new Promise(async(resolve,reject)=>{
        try {
            const response= await fetch(`${link}/users/login`,{
            method:'POST',
            body:JSON.stringify(loginInfo),
            headers:{'content-type':'application/json'}
        })
        if(response.ok){
            const data= await response.json()
            resolve({data})
        }else{
            const error= await response.text()
            console.log('loginapi',error)
            reject(error)
        }
       
        } catch (error) {
            reject(error)
            
        }
        
    })
}