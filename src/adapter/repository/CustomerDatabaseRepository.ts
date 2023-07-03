import { AppDataSource } from "../../data-source";
import CustomerRepository from "../../core/application/ports/CustomerRepository";
import { Customer } from "../../database/entities/Customer";

export default class CustomerDatabaseRepository implements CustomerRepository {

  customerRepository = AppDataSource.getRepository(Customer);

  async save(customer: Customer): Promise<Customer> {
    const newCustomer = this.customerRepository.create(customer);
    return await this.customerRepository.save(newCustomer);
  }

  async findByCPF(cpf: string): Promise<Customer | null> {
    const result = await this.customerRepository.findOneBy({ cpf });
    return result;
  }
}