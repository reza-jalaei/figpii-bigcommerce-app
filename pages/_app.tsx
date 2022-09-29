import { GlobalStyles } from '@bigcommerce/big-design';
import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { ThemeProvider } from 'styled-components';
import SessionProvider  from '../context/session';
import Home from './home';

const MyApp = () => {
	return (
		<SessionProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				{/* <Box
				marginHorizontal={{ mobile: 'none', tablet: 'xxxLarge' }}
				marginVertical={{ mobile: 'none', tablet: 'xxLarge' }}
				style={{ height: '100%' }}
			>
					<Header />
					<SessionProvider>
						<Component {...pageProps} />
					</SessionProvider> 
					</Box> */}

					<Home />
				</ThemeProvider>
		</SessionProvider>
	);
};

export default MyApp;
