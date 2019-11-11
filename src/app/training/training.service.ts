import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

export class TrainingService {
    private currentExercise: Exercise;
    exerciseChanged = new Subject<Exercise>();
    private exercises: Exercise[] = [];

    private availableExercises: Exercise[] = [
        {
            exerciseId: 'crunches',
            name: 'Crunches',
            duration: 60,
            calories: 9
        },
        {
            exerciseId: 'touch-toes',
            name: 'Touch Toes',
            duration: 180,
            calories: 11
        },
        {
            exerciseId: 'side-lunges',
            name: 'Side Lunges',
            duration: 120,
            calories: 13
        },
        {
            exerciseId: 'burpees',
            name: 'Burpees',
            duration: 60,
            calories: 15
        },
        {
            exerciseId: 'pushups',
            name: 'Push ups',
            duration: 60,
            calories: 15
        },
        {
            exerciseId: 'squats',
            name: 'Squats',
            duration: 60,
            calories: 15
        },
    ];

    getAvailableExercises() {
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string) {
        const selectedExercise = this.availableExercises.find(ex => ex.exerciseId === selectedId);
        this.currentExercise = selectedExercise;

        this.exerciseChanged.next({ ...this.currentExercise });
    }

    completeExercise() {
        this.exercises.push({ ...this.currentExercise, date: new Date(), state: 'completed' });
        this.currentExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.exercises.push({
            ...this.currentExercise, 
            duration: this.currentExercise.duration * (progress / 100),
            calories: this.currentExercise.duration * (progress / 100),
            date: new Date(), 
            state: 'cancelled' });
        this.currentExercise = null;
        this.exerciseChanged.next(null);

    }

    getCurrentExercise() {
        return { ...this.currentExercise };
    }
}
