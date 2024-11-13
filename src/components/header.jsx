import React from 'react';
import "../header.css"

export const Header = () => {
    return (
        <header>
            <h1>Diabetes Prediction Model</h1>
            <nav>
                <a href="/#">Home</a>
                <a href="/boxplots">Boxplots</a>
            </nav>
        </header>
    )
}