import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoryEntity } from './category.interface';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @ApiOperation({
        summary: 'Get categories',
    })
    @ApiResponse({ status: 200, description: 'Return categories.' })
    @Get('')
    getCategories(): Array<CategoryEntity> {
        return this.categoryService.allCategories();
    }
}
