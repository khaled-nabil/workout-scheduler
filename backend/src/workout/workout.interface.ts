export interface Workout {
    name: string;
    description: string;
    startDate: Date;
    category: string;
}

export enum Category {
    c1 = 'c1',
    c2 = 'c2',
    c3 = 'c3',
    c4 = 'c4',
    c5 = 'c5',
    c6 = 'c6',
    c7 = 'c7',
}

// Service definitions
export interface FindAll {
    (pageniate: { limit: number; offset: number }): Promise<Array<Workout>>;
}
