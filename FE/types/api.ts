export interface IUserData {
    id: string;
    email: string;
    password: string;
    fullname: string;
}

export interface IError {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string; 
}