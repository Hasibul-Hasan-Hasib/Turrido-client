import { useEffect } from "react"
import { themeChange } from "theme-change"

const ThemeChanger = () => {
    const themes = [
        "dark",
        "night",
        "light",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
    ]

    useEffect(() => {
        themeChange(false)
    })

    return (
        <select className="select md:mx-3 focus:outline-none" data-choose-theme>
            {themes.map((values) => (
                <option key={values} value={values}>
                    {values}
                </option>
            ))}
        </select>
    )
}

export default ThemeChanger
