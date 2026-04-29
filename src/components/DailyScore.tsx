interface Props {
    score: number
    label: string
    todayIds: string[]
    onSave: () => void
    isSaved: boolean
}
const DailyScore = ({ score, label, todayIds, onSave, isSaved }: Props) => {
    if (todayIds.length === 0) {
        return <p className="empty-state">Select activities above to see your score ✨</p>
    }

    const scoreClass =
        score <= 10 ? "unproductive" :
            score <= 30 ? "low" :
                score <= 55 ? "decent" :
                    score <= 80 ? "productive" : "super"

    return (
        <div>
            <div className={`score-number ${scoreClass}`}>{score}</div>
            <div className="score-label">{label}</div>
            <div className="score-count">{todayIds.length} {todayIds.length === 1 ? "activity" : "activities"} logged</div>
            {isSaved
                ? <span className="saved-badge">✅ Day saved!</span>
                : <button className="save-btn" onClick={onSave}>Save Today</button>
            }
        </div>
    )
}

export default DailyScore
