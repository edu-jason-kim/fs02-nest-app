import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';

@Controller('/products')
export class ProductController {
  constructor(
    @Inject(ProductService)
    private readonly productService: ProductService,
  ) {}

  @Post()
  async create(@Body() data: Omit<Product, 'id'>) {
    return this.productService.create(data);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    console.log({ id });
    throw new Error('Not implemented');
  }
}
