export type User = {
    id: string;
    name: string;
    email: string;
    token: string;
    imageUrl?: string;
    roles: string[];
}

export type LoginCreds = {
    email: string;
    password: string;
}

export type RegisterCreds = {
    email: string;
    name: string;
    password: string;
    gender: string;
    dateOfBirth: string;
    city: string;
    country: string;
}