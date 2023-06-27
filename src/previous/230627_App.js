import React from 'react';
import { VerifyDialog, VerifyUtil } from "./exports/index";
import "./output.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const errorColor = 'text-red-500';
const successColor = 'text-black';

const getTextColor = (v) => {
	if ( v === "" ) return errorColor;
	if ( v.includes('undefined')) return errorColor;
	if ( v.includes('true') ) return successColor;
	if ( v.length < 10 ) return errorColor;
	return successColor;
}

const TextComponent = (props) => {
	const { text } = props;
	if (text === "" || text === undefined) {
		return <Typography className="text-red-500" variant="body2">undefined</Typography>
	}

	return <Typography className={`${getTextColor(text)} break-all`} variant="body2">{text}</Typography>
}

const getImage = (texts) => {
	for ( const text of texts ) {
		if ( errorColor === getTextColor(text) ) {
			return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3Jt8bovtPGE1gz4rZ3q9ef5BPLLEXRHoUw&usqp=CAU";
		}
	}

	return "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/10/19070942/TED-Talk-What-Is-YOUR-Definition-of-Success-1024x512.jpg";
}

const App = () => {
	const [ isExistQueryStringsMapiKey, setIsExistQueryStringsMapiKey ] = React.useState(false);
	const [ productionUrl, setProductionUrl ] = React.useState("");
	const [ verifyInfo, setVerifyInfo ] = React.useState({});
	const [ baseUrl, setBaseUrl ] = React.useState("");
	const [ mapiKey, setMapiKey ] = React.useState("");

	React.useEffect(() => {
		const initAsync = async () => {
			setIsExistQueryStringsMapiKey(VerifyUtil.isExistQueryStrings('mapiKey'));
			setProductionUrl(VerifyUtil.getProductionUrl());
			setBaseUrl(await VerifyUtil.getBaseUrlAsync());
			setMapiKey(VerifyUtil.getMapiKey());
		}
		initAsync();
	}, []);

	React.useEffect(() => {
		const updateAsync = async () => {
			setVerifyInfo(await VerifyUtil.getVerifyInfoAsync(mapiKey));
		}

		updateAsync();
	}, [mapiKey])

	document.body.style.backgroundColor = "#e2e2e2";

	return (
		<div className="p-10 space-y-4 flex justify-center items-center h-full">
			<VerifyDialog />
			<Card sx={{ maxWidth: 800 }}>
				<CardMedia
					sx={{ height: 140 }}
					image={getImage([ productionUrl, baseUrl, mapiKey ])}
					title="success"
				/>
				<CardContent className="space-y-5">
					<div>
						<Typography gutterBottom variant="h5" component="div">function isExistQueryStringsMapiKey(queryKey: string)</Typography>
						<TextComponent text={isExistQueryStringsMapiKey.toString()} />
					</div>
					<div>
						<Typography gutterBottom variant="h5" component="div">function getProductionUrl()</Typography>
						<TextComponent text={productionUrl} />
					</div>
					<div>
						<Typography gutterBottom variant="h5" component="div">async function getVerifyInfoAsync(mapiKey: string)</Typography>
						<TextComponent text={JSON.stringify(verifyInfo)} />
					</div>
					<div>
						<Typography gutterBottom variant="h5" component="div">async function getBaseUrlAsync()</Typography>
						<TextComponent text={baseUrl} />
					</div>
					<div>
						<Typography gutterBottom variant="h5" component="div">function getMapiKey()</Typography>
						<TextComponent text={mapiKey} />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default App;