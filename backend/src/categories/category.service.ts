import { Injectable } from '@nestjs/common';
import { Category, CategoryEntity } from './category.interface';

@Injectable()
export class CategoryService {
    allCategories(): Array<CategoryEntity> {
        return Object.values(Category).map((value) => ({ name: value }));
    }
}
