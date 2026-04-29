import { useEffect, useState } from "react"
import type { DayEntry } from "../types"
import { calculateScore, getLabel } from "../utils/scoring"

const useProductivity = () => {
    const [entries, setEntries] = useState<DayEntry[]>([])
    const [todayIds, setTodayIds] = useState<string[]>([])

    // On mount, load entries from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("productivity-entries")
        // what do you do with `stored`?
        if (stored) {
            setEntries(JSON.parse(stored))
        }
    }, [])

    // Whenever entries change, save to localStorage
    useEffect(() => {
        // how do you save an array to localStorage?
        localStorage.setItem("productivity-entries", JSON.stringify(entries))
    }, [entries])

    const toggleActivity = (id: string) => {
        // if id is in todayIds, remove it, otherwise add it
        setTodayIds(prev =>
            prev.includes(id) ? prev.filter(actId => actId !== id) : [...prev, id]
        )
    }

    const saveDay = () => {
        // create a new DayEntry with today's date, todayIds, calculated score and label
        const today = new Date().toISOString().split("T")[0]
        const alreadySaved = entries.some(entry => entry.date === today)
        if (alreadySaved) return
        const score = calculateScore(todayIds)
        const newEntry: DayEntry = {
            date: new Date().toISOString().split("T")[0],
            loggedActivities: todayIds,
            totalScore: score,
            label: getLabel(score)
        }
        setEntries(prev => [...prev, newEntry])
    }

    const getTodayEntry = () => {
        const today = new Date().toISOString().split("T")[0]
        return entries.find(entry => entry.date === today)
    }

    return {
        entries,
        todayIds,
        toggleActivity,
        saveDay,
        getTodayEntry
    }
}

export default useProductivity
