import { useState } from "react"

export default function Button({
    text,
    onClick,
    bgColor = "primary",
    size = "md",
    textColor = "light",
}) {
    const bgColors = {
        primary: "#ff7a00",
        success: "#10b981",
        dark: "#000000",
        light: "#ffffff"
    }

    const sizes = {
        sm: "6px 10px",
        md: "10px 15px",
        lg: "12px 20px"
    }

    const textColors = {
        primary: "#ff7a00",
        success: "#10b981",
        dark: "#000000",
        light: "#ffffff"
    }


    const styleButton = {
        backgroundColor: bgColors[bgColor] || bgColor,
        color: textColors[textColor] || textColor,
        padding: sizes[size] || size,
        border: "none",
        borderRadius: "8px",
        fontWeight: "bold",
        cursor: "pointer",
    }

    return (
        <button className="product-button" style={styleButton} onClick={onClick}>
            {text}
        </button>
    )
}