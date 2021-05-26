import React, { useState } from "react"

export default function toggle() {
    const [textVisible, setTextVisible] = useState("visible")
    const [buttonText, setButtonText] = useState("Hide")

    const handleClick = () => {
        setTextVisible(textVisible === "visible" ? "hidden" : "visible")
        setButtonText(buttonText === "Hide" ? "Show" : "Hide")

        // if (textVisible === "visible") {
        //     setTextVisible("hidden")
        //     setButtonText("Show")
        // }
        // else {
        //     setTextVisible("visible")
        //     setButtonText("Hide")
        // }
    }

    return (
        <div className="toggle-wrapper">
            <h3 style={{ visibility: textVisible }}>Hide Me!</h3>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}