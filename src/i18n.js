import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// we init with resources
		resources: {
			en: {
				translations: {
					home: 'home',
					filter: 'Filter',
					edit: 'Edit Existing User',
					back: 'Back',
					delete: 'Delete',
					editBtn: 'Edit',
					submit: 'Submit',
					age: 'Age',
					first: 'First Name',
					last: 'Last Name',
					phone: 'Phone',
					id: 'id',
					phoneError: 'phone number must be between 6 and 15 digits',
				},
			},
			he: {
				translations: {
					home: 'בית',
					filter: 'פילטר',
					edit: 'ערוך משתמש קיים',
					back: 'חזור',
					delete: 'למחוק',
					editBtn: 'לערוך',
					submit: 'שלח',
					age: 'גיל',
					first: 'שם פרטי',
					last: 'שם משפחה',
					phone: 'מספר טלפון',
					id: 'מזהה',
					phoneError: 'מספר הטלפון חייב להיות בין 6 ל-15 ספרות',
				},
			},
		},
		fallbackLng: 'en',
		debug: true,

		// have a common namespace used around the full app
		ns: ['translations'],
		defaultNS: 'translations',

		keySeparator: false, // we use content as keys

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
