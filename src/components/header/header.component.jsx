import React, { useState } from 'react';
// import './header.styles.scss';
import { Link } from 'react-router-dom';
import { PATHS } from '../../App';
import { Navigation, SwitchContainer, Switch, Logo } from './header.styles';

const languages = { english: 'en', hebrew: 'he' };

const Header = ({ changeLanguageHandler }) => {
	const [language, setLanguage] = useState(languages.english);
	return (
		<Navigation>
			<Logo>
				<Link to={PATHS.HOME}>BaLink</Link>
			</Logo>

			<ul>
				<li>
					<SwitchContainer>
						<span>{language === languages.hebrew ? 'Hebrew' : 'English'}</span>
						<Switch>
							<input
								type='checkbox'
								onClick={() => {
									setLanguage(
										language === languages.english
											? languages.hebrew
											: languages.english
									);
									changeLanguageHandler(language);
								}}
							/>
							<div />
						</Switch>
					</SwitchContainer>
				</li>
			</ul>
		</Navigation>
	);
};
export default Header;
