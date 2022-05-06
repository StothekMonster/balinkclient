import { HebrewButton, EnglishButton } from './userForm.styles.jsx';
import { LangButtons } from './LanguageButtons.styles';
const LanguageButtons = ({ changeLanguageHandler }) => (
	<LangButtons>
		<HebrewButton onClick={() => changeLanguageHandler('he')}>
			Hebrew
		</HebrewButton>
		<EnglishButton onClick={() => changeLanguageHandler('en')}>
			English
		</EnglishButton>
	</LangButtons>
);

export default LanguageButtons;
