import { useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const AppInput = ({ type = "text", placeholder, required = false, value, handleChange, errorMessage  }) => {
    const [focus, setFocus] = useState(!!value);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = (e) => {
        if (e.target.closest(".app-password-visibility")) return;
        e.target.closest(".app-input-container")?.querySelector("input").focus()
        setFocus(true);
    }

    const handleBlur = (e) => {
        if (value) return;
        setFocus(false);
    }

    const togglePassword = () => setShowPassword(!showPassword);

    return <div
        className={[
            "app-input-container",
            focus ? "focused" : "",
            errorMessage ? "error" : ""
        ].join(" ")}
        onBlur={handleBlur}
        onClick={handleFocus}
        onFocus={handleFocus}
    >
        <label children={[placeholder, required ? "*" : ""].join(" ")} />

        <div className="app-input">
            <input type={showPassword ? "text" : type} value={value} onChange={handleChange} />
            {errorMessage && <span children={"* " + errorMessage} />}
        </div>

        {placeholder == "Senha" && <div className="app-password-visibility" onClick={togglePassword}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
        </div>}
    </div>
}