import React, { Component } from 'react';
import '../css/Config.css'
// import { useTranslation } from 'react-i18next';

export default class Configuration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: localStorage.getItem('theme') || 'light',
        };
    }
    render() {
    // const { t, i18n } = useTranslation();
    const onClickLanguageChange = (e) => {
        const language = e.target.value;
        // i18n.changeLanguage(language);
        localStorage.setItem('language', language);

    };
    const toggleTheme = () => {
        if (this.state.theme === 'light') {
            this.setState({theme: 'dark'});
        } else {
            this.setState({theme: 'light'});
        }

    };
    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    //     document.body.className = theme;
    // }, [theme]);
    return (
    <div className="config-container">
    <form className={`config-${this.state.theme}`}>
        <span className="create-event-header">{/*t("ConfTitle")*/}ConfTitle</span>
            <label style={{marginBottom: "20px"}}>{/*t("ConfColour")*/}ConfColour<button className={`config-button-${this.state.theme}`} onClick={toggleTheme}>{/*t("ConfButton")*/}ConfButton</button></label>
            
            <label style={{marginBottom: "20px"}}>{/*t("ConfLanguage")*/}ConfLanguage<select className="custom-select" style={{width: 200}} onChange={onClickLanguageChange}>
            <option value="en">{/*t("ConfEnglish")*/}ConfEnglish</option>
            <option value="es">{/*t("ConfSpanish")*/}ConfSpanish</option>
            </select>
            </label>
        
        <div style={{width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px"}}>
            <div style={{marginRight: "4%", display: "flex", flexDirection: "column", width: "62%"}}>
            </div>
        </div>
    </form>
</div>
    );
    }
}