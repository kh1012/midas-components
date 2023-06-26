import React from 'react';
import { VerifyDialog, VerifyUtil } from "./exports/index";
import "./output.css";

const App = () => {
	const [ productionUrl, setProductionUrl ] = React.useState("");
	const [ baseUrl, setBaseUrl ] = React.useState("");
	const [ mapiKey, setMapiKey ] = React.useState("");

	React.useEffect(() => {
		const initAsync = async () => {
			setProductionUrl(VerifyUtil.getProductionUrl());
			setBaseUrl(await VerifyUtil.getBaseUrlAsync());
			setMapiKey(VerifyUtil.getMapiKey());
		}
		initAsync();
	}, []);

	return (
		<>
			<VerifyDialog />
			<div className='text-blue-500'>PRODUCTION URL : {productionUrl}</div>
			<div className='myClass2'>BASEURL : {baseUrl}</div>
			<div className='myClass3'>MAPIKEY : {mapiKey}</div>
		</>
	)
}

export default App;