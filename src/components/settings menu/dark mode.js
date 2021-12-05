import { useState } from "react";
import { Setting } from "./setting";

export const DarkModeSetting = ({
    theme,
    changeTheme,
    enabled
}) => {

    const [ themeState, setThemeState ] = useState(
        theme === 'light' ? 
        false :
        true
        );

    const handleSettingState = () => {
        if (theme === 'light') {
            setThemeState(true);
            changeTheme('dark');
        } else if (theme === 'dark' ) {
            setThemeState(false);
            changeTheme('light');
        }
    }

    return (
        <Setting 
            enabled={true}
            switchState={themeState}
            TitleSetting="Dark Mode"
            description="modo oscuro"
            trigger={changeTheme}
            handleSettingState={handleSettingState}
        />
    );
}