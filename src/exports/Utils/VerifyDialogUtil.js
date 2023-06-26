const prUrl = 'https://api-beta.midasit.com';

export function isExistQueryStrings(query) {
  const params = new URLSearchParams(window.location.search);
  const param = params.get(query) || "";
  return ( param !== "" );
}

export async function getVerifyInfoAsync(mapiKey) {
	const res = await fetch(`${prUrl}/mapikey/verify`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"MAPI-Key": mapiKey
		}
	});

	if (!res.ok) console.error('verify mapikey is failed');
	return await res.json();
}

export async function getBaseUrlAsync() {
	const mapiKey = getMapiKey();
	const info = await getVerifyInfoAsync(mapiKey);
	return `${prUrl}/${info.program}`;
}

export function getMapiKey() {
	const param = new URLSearchParams(window.location.search);
	return param.get('mapiKey') || "";
}