import type { DayEntry } from "../types"
import CalendarHeatmap from "react-calendar-heatmap"
import "react-calendar-heatmap/dist/styles.css"

interface Props {
    entries: DayEntry[]
}

const HeatmapCalendar = ({ entries }: Props) => {

    const today = new Date()
    const startDate = new Date()
    startDate.setMonth(startDate.getMonth() - 6)

    const values = entries.map(entry => ({
        date: entry.date,
        count: entry.totalScore
    }))

    return (
        <div>
            <h2>Your Productivity Heatmap</h2>
            <CalendarHeatmap
                startDate={startDate}
                endDate={today}
                values={values}
                classForValue={(value) => {
                    if (!value || value.count === 0) return "color-empty"
                    if (value.count <= 10) return "color-scale-1"
                    if (value.count <= 30) return "color-scale-2"
                    if (value.count <= 55) return "color-scale-3"
                    if (value.count <= 80) return "color-scale-4"
                    return "color-scale-5"
                }}
                titleForValue={(value) => {
                    if (!value || !value.date) return "No data"
                    const entry = entries.find(e => e.date === value.date)
                    if (!entry) return value.date
                    return `${entry.date} — Score: ${entry.totalScore} — ${entry.label}`
                }}
            />
            <div className="heatmap-legend">
                <span>Less</span>
                <span className="legend-cell color-empty"></span>
                <span className="legend-cell color-scale-1"></span>
                <span className="legend-cell color-scale-2"></span>
                <span className="legend-cell color-scale-3"></span>
                <span className="legend-cell color-scale-4"></span>
                <span className="legend-cell color-scale-5"></span>
                <span>More</span>
            </div>
        </div>
    )
}

export default HeatmapCalendar