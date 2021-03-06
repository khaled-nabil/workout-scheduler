import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';
import { Category } from '../categories/category.interface';
import { Workout } from './workout.interface';

@Entity('workout')
export class WorkoutEntity implements Workout {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    startDate: Date;

    @Column('enum', { enum: Category })
    category: Category;

    @Column({ default: 'http://placehold.it/200x200' })
    picture: string;
}
