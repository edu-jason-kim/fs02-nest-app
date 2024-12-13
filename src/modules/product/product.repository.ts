import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async create(data: Omit<Product, 'id'>) {
    const created = await this.productModel.create(data);
    console.log(data);
    return created.toObject();
  }

  async findAll() {
    return this.productModel.find();
  }
}
