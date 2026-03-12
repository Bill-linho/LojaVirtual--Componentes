export default function Button({ text, onClick, bgColor = "primary", size = "md", textColor = "light" }) {
    const bgColors = {
        primary: "#1465",
        success: "rgba(109, 19, 49, 1)",
        dark: "#000000ff",
        light: "#ffffffff"
    }

    const sizes = {
        sm:"6px 10px",
        md:"10px 15px",
        lg:"999px 999px"
    }

    const textColors = {
        primary: "rgba(13, 19, 9, 0.33)",
        success: "rgba(199, 89, 15, 1)",
        dark: "#000000ff",
        light: "#ffffffff"
    }

    const styleButton = {
        backgroundColor: bgColors[bgColor] || bgColor,
        color: textColors[textColor] || textColor,
        padding: sizes[size] || size,
        border: "none",
        borderRadius: "8px",
        frontWeight: "bold",
        cursor: "pointer"
    }

    return (
        <button className="button" onClick={onClick} style={styleButton}>
            {text}
        </button>
    )
}
