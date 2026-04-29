type Category = "high" | "medium" | "low-medium" | "low" | "unproductive"

type DayLabel = "Unproductive" | "Low Productivity" | "Decent Day" | "Productive Day" | "Super Productive"

interface Activity {
  id: string
  name: string
  points: number
  category: Category
}

interface DayEntry {
  date: string
  loggedActivities: string[]
  totalScore: number
  label: DayLabel
}

export type { Category, DayLabel, Activity, DayEntry }