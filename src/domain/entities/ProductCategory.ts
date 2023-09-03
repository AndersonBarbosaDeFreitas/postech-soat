export class ProductCategory {
	readonly id?: number;
	readonly name: string;

	constructor(id: number | undefined, name: string) {
		this.id = id;
		this.name = name;
	}
}