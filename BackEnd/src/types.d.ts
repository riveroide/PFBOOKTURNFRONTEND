export interface Client {
    name: string,
    lastName: string,
    email: string,
    user: string,
    passWord: string,
    totalRates: number,
    totalRated: number,
    rating: number,
    business: string,
}

export type newClientEntry = Omit<Client>