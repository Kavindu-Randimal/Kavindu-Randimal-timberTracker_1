import RequestService from "./RequestService";

class NetworkService{
    getUser(){
        var url = `http://192.168.1.4:8080/users/users/3`
        return RequestService.getRequest(url)
    }

    doLogin(data){
        var url =`http://localhost:8080/users/login`
        return RequestService.postRequest(url,data);
    }
}

export default new NetworkService()