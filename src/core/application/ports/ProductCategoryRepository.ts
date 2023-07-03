import { ProductCategory } from "../../../database/entities/ProductCategory";

export default interface ProductCategoryRespository {
	save(category: ProductCategory): Promise<ProductCategory>;
	findById(id: number): Promise<ProductCategory | null>;
}