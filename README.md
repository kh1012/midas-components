# MIDAS COMPONENTS
마이다스에서 제공하는 기본 Components
<br /><br />

## VerifyDialog
Plugin 작성 시 사용하는 baseUrl과 MapiKey에 대한 Dialog Component 입니다.  
Plugin 제작 시 기본적으로 적용하면,  
기본 규칙에 따른 baseUrl과 mapiKey를 쉽게 사용할 수 있습니다.  
- Default Component  
	VerifyDialogComponent  

- functions  
	async function getBaseUrlAsync() (ASYNC)  
	function getMapiKey() (SYNC)  


```jsx
//사용예제
import React from "react";
import { VerifyDialog, VerifyUtil } from "midas-components";

//자신의 Component와 동일한 위치에 VerifyDialog를 삽입합니다.
//조건에 따라 VerifyDialog가 활성화 됩니다.
function Component(props) {
	const [baseUrl, setBaseUrl] = React.useState("");
	const [mapiKey, setMapiKey] = React.useState("");

	//컴포넌트 마운트 시점에 baseUrl과 mapiKey를 얻으려면 VerifyUtil을 사용합니다.
	React.useEffect(() => {
		//useEffect hook 내부에서 async 함수를 쓰기위해 비동기 부분을 감싼 함수를 사용합니다.
		const initAsync = async () => {
			setBaseUrl(await VerifyUtil.getBaseUrlAsync());
			setMapiKey(VerifyUtil.getMapiKey());
		};

		initAsync();
	}, []);

	return (
		<>
			<VerifyDialog />
			<div className="myComponent">
				...
			</div>
		</>
	);
}

```