class RequestService{
    async getRequest(url){
        let data = await fetch(url).then(res=>{
            return res.json()
        })
        .catch(err =>{
            console.log('Error', err)
        });
        return data;
    }

}