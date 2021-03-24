import axios from 'axios';

const user_API_BASE_URL = "http://localhost:7777/api/v1/";

class Service {


    getCustomers(){
        return axios.get(user_API_BASE_URL+'dd');
    }

    getCustomerById(cid){
        return axios.get(user_API_BASE_URL+'ss'+'/'+cid);
    }

    createCustomer(cst){
        return axios.post(user_API_BASE_URL+'cc', cst);
    }

    updtCustomer(cst){
        return axios.post(user_API_BASE_URL+'upt', cst);
    }

    loginrec(rc){
        console.log(rc);
        return axios.post(user_API_BASE_URL +'logrec', rc);
    }
    loginadmin(us){
        console.log(us);
        return axios.post(user_API_BASE_URL +'logadmin',us );
    }

    // userDet(ac){
    //     return axios.get(user_API_BASE_URL + 'ss' +'/'+ ac);
    // }

    // viewbal(ac){
    //     return axios.post(user_API_BASE_URL + 'bal' +'/'+ ac);
    // }

    // updateuser(user, acno){
    //     return axios.post(user_API_BASE_URL +'upt'+ '/' + acno, user);
    // }

    // blockuser(acno){
    //     return axios.post(user_API_BASE_URL +'block'+ '/' + acno);
    // }
    // unblockuser(acno){
    //     return axios.post(user_API_BASE_URL +'unblock'+ '/' + acno);
    // }

    // deposit(acno,amount){
    //     return axios.post(user_API_BASE_URL +'depo'+ '/' + acno+'/'+amount);
    // }

    // withdraw(acno,amount){
    //     return axios.post(user_API_BASE_URL +'wdraw'+ '/' + acno+'/'+amount);
    // }

    // seeBlockedUsers(){
    //     return axios.get(user_API_BASE_URL + 'slist' );
    // }

    // deleteuser(userId){
    //     return axios.delete(user_API_BASE_URL + '/' + userId);
    // }
}

export default new Service()