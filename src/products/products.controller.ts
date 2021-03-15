import { BadRequestException, Body, Controller, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product.entity';
import { Repository } from 'typeorm';

@ApiTags('Products')
@Controller('products')
export class ProductsController {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>

    ){}


    @Get()
    async index() : Promise<Product[]> {
        return this.productRepository.find();
    }

    @Get('active')
    async productActives() : Promise<Product[]> {
        return this.productRepository.find({ where: { ativo: true}});
    }

    @Get(':id')
    async show(@Param('id') id: string) : Promise<Product>{
        let product = await this.productRepository.findOne(+id);
        console.log(product);

        if (product === undefined) {
            throw new NotFoundException('Product not found!');
        }
        return product
    }

    @Post()
    async store(@Body() body:Product) : Promise<Product> {
        console.log(body);
        const product = this.productRepository.create(body);
        return this.productRepository.save(product);   
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: Product) : Promise<Product>{
        await this.productRepository.findOneOrFail(+id);
        this.productRepository.update({id: +id}, body);
        return this.productRepository.findOneOrFail(+id);
    }
}
