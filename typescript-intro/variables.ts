//string, number, boolean, null, undefined
let myName: string | null = '';
myName = 'test';


//Arrays
const items = [5, 'luis'];


//Object

interface IAccount {
    name: string,
    balance: number,
    status?: string,
    deposit?: () => void
};

const account: IAccount = {
    name: 'Luis',
    balance: 10
};

let accounts: IAccount[];


//Class
class InvestmentAccount implements IAccount {
    constructor(public name, public balance){

    }

    private withdraw(){

    }

};


//Generics
