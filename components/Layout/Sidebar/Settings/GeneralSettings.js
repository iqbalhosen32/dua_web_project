import { useEffect, useState } from "react";
import { UseStateContext } from '../../../../context/StateContext';
import { generalSettings } from "../../../../dataStore/dummy";

const GeneralSettings = () => {
  const { language, isArabic, isTranslation, isTransliteration, isRefference, onSetArabic, onSetTranslation, onSetTransliteration, onSetRefference } = UseStateContext();



  // const [isArabic, setArabic] = useState(JSON.parse(localStorage.getItem("showArabic") ?? true));
  // const [isTranslation, setTranslation] = useState(JSON.parse(localStorage.getItem("showTranslation")));
  // const [isTransliteration, setTransliteration] = useState(JSON.parse(localStorage.getItem("showTransliteration")));
  // const [isRefference, setRefference] = useState(JSON.parse(localStorage.getItem("showRefference")));

  // useEffect(() => {
  //   localStorage.setItem("showArabic", isArabic);
  //   localStorage.setItem("showTranslation", isTranslation);
  //   localStorage.setItem("showTransliteration", isTransliteration);
  //   localStorage.setItem("showRefference", isRefference);
  // }, [isArabic, isTranslation, isTransliteration, isRefference]);

  return (
    <div className="flex flex-col py-2 px-4  animate-scale-down">

      <CheckboxList onClick={() => onSetArabic(!isArabic)} state={isArabic} name={language === 'bn' ? "আরবি দেখুন" : "Show Arabic"} />
      <CheckboxList onClick={() => onSetTranslation(!isTranslation)} state={isTranslation} name={language === 'bn' ? "অনুবাদ দেখুন" : "Show Translation"} />
      <CheckboxList onClick={() => onSetTransliteration(!isTransliteration)} state={isTransliteration} name={language === 'bn' ? "উচ্চারণ দেখুন" : "Show Transliteration"} />
      <CheckboxList onClick={() => onSetRefference(!isRefference)} state={isRefference} name={language === 'bn' ? "রেফারেন্স দেখুন" : "Show Refference"} />
    </div>
  );
};

export default GeneralSettings;

function CheckboxList(props) {
  return (
    <div onClick={() => props.onClick()} className="flex text-sm py-1 justify-between text-title flex-row gap-x-3   cursor-pointer">
      <p>{props.name}</p>
      <div
        className={`w-5 h-5 flex items-center justify-center  ${props.state ? "bg-blue-400 transition duration-150 delay-75" : "border-solid border-[2px] border-black  transition duration-150 delay-75"
          }`}>
        {props.state && (
          <svg width="12" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L5 11L15 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}
