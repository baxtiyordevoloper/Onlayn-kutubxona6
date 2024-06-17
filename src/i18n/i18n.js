import {createI18n} from "vue-i18n";

import uz from './locales/uz.json'
import en from './locales/en.json'
import ru from './locales/ru.json'

export default createI18n({
    allowComposition: true,
    legacy: false,
    locale: 'uz',
    fallbackLocale: 'ru',
    messages: {en,ru,uz}
})