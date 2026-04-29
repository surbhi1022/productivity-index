import type { Activity } from "../types"

export const activities: Activity[] = [
  { id: "coding", name: "Coding", points: 20, category: "high" },
  { id: "learning", name: "Learning / Youtube courses", points: 20, category: "high" },
  { id: "crochet", name: "Crochet", points: 10, category: "low-medium" },
  { id: "reading", name: "Reading", points: 15, category: "medium" },
  { id: "japanese", name: "Japanese Learning", points: 15, category: "medium" },
  { id: "chilling", name: "Chilling", points: 5, category: "low" },
  { id: "walking", name: "Walking", points: 10, category: "low-medium" },
  { id: "making-reels", name: "Making Reels", points: 15, category: "medium" },
  { id: "shopping", name: "Shopping", points: 5, category: "low" },
  { id: "brainrot", name: "Brainrot / Doing Nothing", points: 0, category: "unproductive" },
  { id: "going-out", name: "Going Out with Friends", points: 5, category: "low" },
]