import { activities } from "../data/activities"
import type { DayLabel } from "../types"

export function calculateScore(loggedIds: string[]): number {
  // for each id, find the activity and sum up the points
  return loggedIds.reduce((total, id) => {
    const activity = activities.find(act => act.id === id)
    return total + (activity ? activity.points : 0)
  }, 0)
}

export function getLabel(score: number): DayLabel {
  // if score is between x and y, return the label
    if (score <= 10) return "Unproductive"
    if (score <= 30) return "Low Productivity"
    if (score <= 55) return "Decent Day"
    if (score <= 80) return "Productive Day"
    return "Super Productive"
}