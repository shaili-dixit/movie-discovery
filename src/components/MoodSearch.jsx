import { useState } from "react";

function MoodSearch({ onMoodSearch }) {

    const [mood, setMood] = useState("");

    function handleSubmit() {

        if (!mood.trim()) return;

        onMoodSearch(mood);

        setMood("");

    }

    return (

        <div className="mood-search">

            <input
                type="text"
                placeholder="😊 How are you feeling today?"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
            />

            <button
                className="btn"
                onClick={handleSubmit}
            >
                Find Movie
            </button>

        </div>

    );

}

export default MoodSearch;