export class Users
{
    id: string | undefined;
    name: string | undefined;
    email: string | undefined;
    mobile: string | undefined;
    message: string | undefined;

    constructor(id: string | undefined,name: string | undefined,email: string | undefined,mobile: string | undefined,message: string | undefined){
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.message = message;
    }
}

