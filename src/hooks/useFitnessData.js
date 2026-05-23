import { useState, useEffect } from 'react';

const STORAGE_KEY = 'fitness_tracker_data';

export const useFitnessData = () => {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    const newWorkout = {
      ...workout,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    setWorkouts((prev) => [newWorkout, ...prev]);
  };

  const deleteWorkout = (id) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  };

  const stats = workouts.reduce(
    (acc, workout) => {
      acc.totalCalories += Number(workout.calories) || 0;
      acc.totalDuration += Number(workout.duration) || 0;
      acc.totalSteps += Number(workout.steps) || 0;
      return acc;
    },
    { totalCalories: 0, totalDuration: 0, totalSteps: 0 }
  );

  return {
    workouts,
    addWorkout,
    deleteWorkout,
    stats,
  };
};
