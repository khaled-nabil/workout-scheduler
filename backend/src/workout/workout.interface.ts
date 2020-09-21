import { Category } from '../categories/category.interface';

export interface Workout {
    name: string;
    description: string;
    startDate: Date;
    category: Category;
    picture: string;
}

export type PaginationQuery = { limit: number; offset: number };

export type FilterQuery = { startDate?: Date; category?: Category };

// Service definitions
export interface FindAll {
    (pageniate: PaginationQuery, filter?: FilterQuery): Promise<Array<Workout>>;
}

export interface FindAllWhereQuery {
    startDate?: { $gte: Date };
    category?: Category;
}
