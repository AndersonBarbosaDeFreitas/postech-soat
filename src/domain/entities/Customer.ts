import { Order } from './Order';

export class Customer {
	readonly id?: number;
	readonly name: string;
	readonly cpf: string;
	readonly email: string;
	readonly orders?: Order[]

	constructor(id: number | undefined, name: string, cpf: string, email: string, orders: Order[] | undefined) {
		this.id = id;
		this.name = name;
		this.cpf = cpf;
		this.email = email;
		this.orders = orders;
	}
}