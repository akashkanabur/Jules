import { Flame, Timer, Footprints } from 'lucide-react';

const Dashboard = ({ stats }) => {
  return (
    <div className="dashboard">
      <div className="stat-card">
        <div className="stat-icon steps">
          <Footprints size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-label">Total Steps</span>
          <span className="stat-value">{stats.totalSteps.toLocaleString()}</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon calories">
          <Flame size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-label">Calories Burned</span>
          <span className="stat-value">{stats.totalCalories.toLocaleString()}</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon duration">
          <Timer size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-label">Active Minutes</span>
          <span className="stat-value">{stats.totalDuration}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
