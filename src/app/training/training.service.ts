import { Exercise } from './exercise.model';

export class TrainingService {
    private currentExercise: Exercise;

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
    }
}
