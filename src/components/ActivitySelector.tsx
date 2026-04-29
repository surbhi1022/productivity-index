import { activities } from "../data/activities"

interface Props {
  todayIds: string[]
  onToggle: (id: string) => void
}

const categoryLabels: Record<string, string> = {
  "high": "🏆 High Impact",
  "medium": "⚡ Medium Impact",
  "low-medium": "✨ Low-Medium Impact",
  "low": "🌱 Low Impact",
  "unproductive": "💤 Unproductive"
}

const categories = ["high", "medium", "low-medium", "low", "unproductive"]

const ActivitySelector = ({ todayIds, onToggle }: Props) => {
  return (
    <div>
      <h2>What did you do today?</h2>
      {categories.map(category => {
        const filtered = activities.filter(a => a.category === category)
        return (
          <div key={category} className="category-group">
            <p className="category-label">{categoryLabels[category]}</p>
            <div className="activity-grid">
              {filtered.map(activity => (
                <label
                  key={activity.id}
                  className={`activity-pill cat-${activity.category} ${todayIds.includes(activity.id) ? "selected" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={todayIds.includes(activity.id)}
                    onChange={() => onToggle(activity.id)}
                  />
                  {activity.name}
                  <span className="activity-points">{activity.points}pts</span>
                </label>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ActivitySelector