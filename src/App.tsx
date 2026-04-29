import useProductivity from "./hooks/useProductivity"
import ActivitySelector from "./components/ActivitySelector"
import DailyScore from "./components/DailyScore"
import HeatmapCalendar from "./components/HeatmapCalendar"
import { calculateScore, getLabel } from "./utils/scoring"

function App() {
  const { entries, todayIds, toggleActivity, saveDay, getTodayEntry } = useProductivity()

  // derive these from existing state — don't create new state for them!
  const score = calculateScore(todayIds)
  const label = getTodayEntry()?.label || getLabel(score)
  const isSaved = !!getTodayEntry()

  return (
    <div className="app">
      <div className="app-header">
        <h1>Productivity Index</h1>
        <p>Track what you do. See how you grow.</p>
      </div>
      <div className="card activity-selector">
        <ActivitySelector todayIds={todayIds} onToggle={toggleActivity} />
      </div>
      <div className="card daily-score">
        <DailyScore score={score} label={label} todayIds={todayIds} onSave={saveDay} isSaved={isSaved} />
      </div>
      <div className="card heatmap-section">
        <HeatmapCalendar entries={entries} />
      </div>
    </div>
  )
}

export default App
