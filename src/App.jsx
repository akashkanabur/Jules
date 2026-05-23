import Header from './components/Header';
import Dashboard from './components/Dashboard';
import WorkoutForm from './components/WorkoutForm';
import ActivityList from './components/ActivityList';
import { useFitnessData } from './hooks/useFitnessData';
import './App.css';

function App() {
  const { workouts, addWorkout, deleteWorkout, stats } = useFitnessData();

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Dashboard stats={stats} />
        <div className="content-grid">
          <WorkoutForm onAdd={addWorkout} />
          <ActivityList workouts={workouts} onDelete={deleteWorkout} />
        </div>
      </main>
    </div>
  );
}

export default App;
