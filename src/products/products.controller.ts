import { Controller, Get, Param,Post,Body, Delete, Put,HttpStatus, HttpCode, Header, } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';
import { ProductService } from './dto/product.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productService:ProductService){
  }

// @Get()
// // @Redirect('https://google.com', 301)
// getAll(@Req() req:Request, @Res() res:Response):string{

// res.status(201).end('Poka')

//   return 'getAll'
// }

@Get()
getAll(){
  return this.productService.getAll()
}



@Get(':id')
getOne(@Param('id') id:string){
  return this.productService.getById(id)
}

@Post()
@HttpCode(HttpStatus.CREATED)
@Header('Cache-Control','none')
create(@Body() createProductDto:CreateProductDto){

  return this.productService.create(createProductDto)

  // return `Title is : ${createProductDto.title} Prise is : ${createProductDto.price}`

}

@Delete(':id')
remove(@Param('id') id:string){

  return 'Remove ' + id

}

@Put(':id')
update(@Body() updateProductDto:updateProductDto, @Param('id') id:string){

  return 'Update ' + id

}




}
