// TranslationContext.js
import React, { createContext, useState, useContext } from 'react';
import translate from 'google-translate-api';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
const [translatedText, setTranslatedText] = useState('');

const translateText = async (text, targetLanguage) => {
try {
const translation = await translate(text, { to: targetLanguage });
setTranslatedText(translation.text);
} catch (error) {
console.error('Translation error:', error);
}
};

return (
<TranslationContext.Provider value={{ translatedText, translateText }}>
{children}
</TranslationContext.Provider>
);
};

export const useTranslation = () => useContext(TranslationContext);