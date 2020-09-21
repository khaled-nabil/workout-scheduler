import { Category } from '../categories/category.interface';

export interface Workout {
    name: string;
    description: string;
    startDate: Date;
    category: Category;
    picture: string;
}

export type PaginationQuery = { limit: number; offset: number };

// Service definitions
export interface FindAll {
    (pageniate: PaginationQuery): Promise<Array<Workout>>;
}
