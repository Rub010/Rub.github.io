import React from "react";
import '../assents/i18next/index'
import { useTranslation } from "react-i18next";

export default function (){
const { t, i18n} = useTranslation()
const changeLanguage = (e) => {
    i18n.changeLanguage (e.target.id)
};
return(
    <div>
        <button id="en" onClick={changeLanguage}>En</button>
        <button id="hy" onClick={changeLanguage}>Hy</button>
        <span  className="pdp">
            {t("hello")}
        </span>
    </div>
)
}