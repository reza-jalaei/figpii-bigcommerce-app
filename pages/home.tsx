import { useEffect, useState } from 'react';
import { fetcher, useSessionContext, useStore } from '../lib/hooks';

let contextGlobal = "";

const Home = () => {
	const [openAuth, setOpenAuth] = useState(false);
	const [openReg, setOpenReg] = useState(false);

	const context = useSessionContext();
	const { store, isLoading } = useStore();

	if (context) contextGlobal = context;

	console.warn(store, isLoading);

	useEffect(() => {
		window.addEventListener("message", async (event) => {
			if (event.origin != "https://www.figpii.com") return;

			console.warn(event);

			if (event.data.type == "loginCompleted") {
				console.warn("loginCompleted");

				const params = new URLSearchParams({ contextGlobal }).toString();

				console.warn(contextGlobal);

				const data = await fetcher(`/api/script/${event.data.code}`, params);

				throw { data: data };
			}
		});
	}, []);

	return (
		<div className="container">
			<style global jsx>{`
				html,
				body,
				body > div:first-child,
				div#__next,
				div#__next > div {
					height: 100%;
				}
			`}</style>
			{!openAuth && !openReg && (
				<div style={{ height: ' 100%' }}>
					<img src={'/FigPii.svg'} style={style.logo} />
					<div style={style.main}>
						<div>
							<h1>Connect your FigPii account</h1>
							<p
								style={{
									color: '#828282',
									fontSize: '24px',
									flexWrap: 'wrap',
									width: '550px',
								}}
							>
								Instantly find problematic areas on your website before you lose
								more potential customers.
							</p>
							<button style={style.buttonReg} onClick={() => setOpenReg(true)}>
								{'Create New Account'}
							</button>
							<button
								style={style.buttonAuth}
								onClick={() => setOpenAuth(true)}
							>
								{'Connect Existing Account'}
							</button>
							<p style={{ color: '#421C59', textAlign: 'center' }}>
								Sign up for a <b>free 14-day trial</b>. All features unlocked.
							</p>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								marginLeft: '90px',
							}}
						>
							<img src={'/image18.png'} />
							<img src={'/Group378.png'} />
						</div>
					</div>
					<p style={{ textAlign: 'center' }}>
						Need help? Send us an email at
						<span style={style.footerText}> support@figpii.com </span>or visit
						our
						<span style={style.footerText}> FigPii Knowledge Base</span>
					</p>
				</div>
			)}
			{openAuth && (
				<iframe
					src="https://www.figpii.com/login"
					style={{ width: '100%', height: '100%' }}
				/>
			)}
			{openReg && !isLoading && (
				<iframe
				src={
					`https://www.figpii.com/register?store_type=5949ed&package=STARTER&full_name=${store.first_name}+${store.last_name}&email=${store.admin_email}&org_name=${store.name}&domain_name=${store.domain}`
				}
					style={{ width: '100%', height: '100%' }}
				/>
			)}
		</div>
	);
};

export default Home;

const style = {
	logo: {
		width: '151px',
		height: '57px',
		marginLeft: ' 48px',
		marginTop: '39px',
	},
	main: {
		display: 'flex',
		alignItems: 'center',
		height: '80%',
		justifyContent: 'center',
	},
	buttonReg: {
		width: '234px',
		height: '42px',
		left: '146px',
		top: '484px',
		background: '#51266D',
		borderRadius: '4px',
		color: '#FFFFFF',
		marginRight: '22px',
	},
	buttonAuth: {
		width: '267px',
		height: '42px',
		left: '402px',
		top: '484px',
		background: '#FBFCFC',
		border: '1px solid #51266D',
		borderRadius: '4px',
		color: '#51266D',
	},
	imageGroup: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '90px',
	},
	footerText: {
		color: '#51266D',
	},
};
