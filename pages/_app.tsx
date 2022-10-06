import { GlobalStyles } from '@bigcommerce/big-design';
import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { ThemeProvider } from 'styled-components';
import Home from '@components/authentication';

import Dashboard from "@components/dashboard";

import SessionProvider  from '../context/session';

const MyApp = () => {
	return (
		<SessionProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Dashboard />
				<Home />
			</ThemeProvider>
		</SessionProvider>
	);
};

export default MyApp;
