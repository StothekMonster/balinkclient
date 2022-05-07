import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
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
					add: 'Add New User',
					phoneError: 'phone number must be between 6 and 15 digits',
					lastNameError: 'Error: must have Last name',
					firstNameError: 'Error: must have first name',
					ageError: 'Error: age must be between 1 and 120',
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
					add: 'הוסף משתמש חדש',
					phoneError: 'מספר הטלפון חייב להיות בין 6 ל-15 ספרות',
					lastNameError: 'שגיאה: חייב להיות שם משפחה',
					firstNameError: 'שגיאה: חייב להיות שם פרטי',
					ageError: 'שגיאה: הגיל חייב להיות בין 1 ל-120',
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
