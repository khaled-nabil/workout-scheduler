import { Category } from '../categories/category.interface';
import { FindOperator } from 'typeorm';

export interface Workout {
    name: string;
    description: string;
    startDate: Date;
    category: Category;
    picture: string;
}

export type PaginationQuery = { limit: number; offset: number };

export type FilterQuery = { startDate?: Date; category?: Array<Category> };

// Service definitions
export interface FindAll {
    (pageniate: PaginationQuery, filter?: FilterQuery): Promise<Array<Workout>>;
}

export interface FindAllWhereQuery {
    startDate?: { $gte: Date };
    category?: { $in: Array<Category> };
}
