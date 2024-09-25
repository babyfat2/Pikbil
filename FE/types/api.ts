export interface IUserData {
    id: string;
    email: string;
    password: string;
    fullname: string;
    avatar: string;
}

export interface IError {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string; 
}

export interface ICar {
    id: string;
    name: string;
    description: string;
    fuel: string;
    interiorColor: string;
    kilometers: number;
    seats: string;
    transmission: string;
    price: number;
    address: string;
    imageUri: string[];
    owner: IUserData;
}
export interface IDiscount {
    id: string;
    name: string;
    promoCode: string;
    description: string;
    discountRent: string;
    minimunRent: number;
    imageUri: string;
    addressDiscount: string[];
}

export interface IComment {
    id: string;
    description: string;
    star: number;
    createdAt: Date;
    user: IUserData;
    carId: string;
}

export interface IProtection {
    id: string;
    description: string;
    name: string;
    price: number;
}

export interface ITrip {
    id: string;
    car: ICar;
    status: string;
    dateRent: Date;
    createdAt: Date;
}


export interface IBoxChat {
    roomId: string;
    arrayMessage: Array<IMessage>;
}

export interface IMessage {
    id: string;
    message: string | null;
    imageUri: string | null;
    createdAt: Date;
    roomId: string;
    sender: IUserData;
    receiver: IUserData;
}