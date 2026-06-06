import { useState } from "react";

export default function DarkModeToggle({ isDark, onClick }){
    return(
        <button
            onClick={onClick}
            className="p-2 bg-green-800 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Dark Mode"
        >
            {isDark ? "☀️" : "🌙"}
        </button>
    )
}
