import RequestService from ".RequestService";

class NetworkService{
    getUser(){
        var url = `/localhost:8080/users/users/1`
        return RequestService.getRequest(url)
    }

    // doLogin(data){
    //     var url =`http://localhost:8080/users/users`
    //     return RequestService.postRequest(url,data);
    // }
}

export default new NetworkService()