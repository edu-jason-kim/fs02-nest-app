import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async create(data: Omit<Product, 'id'>) {
    return this.productRepository.create(data);
  }

  async findAll() {
    return this.productRepository.findAll();
  }
}
