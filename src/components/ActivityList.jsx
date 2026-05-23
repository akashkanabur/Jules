import { Trash2, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const ActivityList = ({ workouts, onDelete }) => {
  return (
    <div className="activity-list">
      <h3>Recent Activities</h3>
      {workouts.length === 0 ? (
        <p className="no-data">No activities logged yet.</p>
      ) : (
        <div className="list-container">
          {workouts.map((workout) => (
            <div key={workout.id} className="activity-item">
              <div className="activity-main">
                <div className="activity-type">{workout.type}</div>
                <div className="activity-date">
                  <Calendar size={14} />
                  <span>{format(new Date(workout.date), 'MMM d, h:mm a')}</span>
                </div>
              </div>
              <div className="activity-stats">
                <span>{workout.duration} min</span>
                <span>{workout.calories} kcal</span>
                {workout.steps > 0 && <span>{workout.steps} steps</span>}
              </div>
              <button
                className="delete-btn"
                onClick={() => onDelete(workout.id)}
                title="Delete Activity"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityList;
