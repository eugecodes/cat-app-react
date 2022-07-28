import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function LightSwitch() {
    const {darkMode, ToggleDarkMode} = useContext(DarkModeContext)
    const handleChange = () => {
        ToggleDarkMode()
    }
    return (
        <div className="my-switch">
            <img src={darkMode ? '/one.png' : '/two.png'} width="50px" alt="Change Mode" onClick={handleChange} />
        </div>
    )
}
export default LightSwitch