import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const WorkoutForm = ({ onAdd }) => {
  const [type, setType] = useState('Walking');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duration || !calories) return;

    onAdd({
      type,
      duration: Number(duration),
      calories: Number(calories),
      steps: Number(steps) || 0,
    });

    setDuration('');
    setCalories('');
    setSteps('');
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <h3>Log Workout</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Activity Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Walking">Walking</option>
            <option value="Running">Running</option>
            <option value="Cycling">Cycling</option>
            <option value="Swimming">Swimming</option>
            <option value="Gym">Gym</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Duration (mins)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="30"
            required
          />
        </div>
        <div className="form-group">
          <label>Calories</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="200"
            required
          />
        </div>
        <div className="form-group">
          <label>Steps (optional)</label>
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="5000"
          />
        </div>
      </div>
      <button type="submit" className="submit-btn">
        <PlusCircle size={20} />
        <span>Add Activity</span>
      </button>
    </form>
  );
};

export default WorkoutForm;
