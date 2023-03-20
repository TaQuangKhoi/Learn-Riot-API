

// Get Account Info with Riot API
let KhoiQuangTa = {
    puuid: 'omNYk0A4itclmIEiAzZkQMxfn0ZaXW1chlWfBjMuBOmtpooEVuYSqkTaBpFHlm3AcZnz__Um7ATETA',
    gameName: 'KhoiQuangTa',
    tagLine: '8374',
    apiKey: 'RGAPI-d330f5bc-d1ae-467f-bbbb-1b964f1ab565'
}

let TaQuangKhoi = {
    puuid: 'omNYk0A4itclmIEiAzZkQMxfn0ZaXW1chlWfBjMuBOmtpooEVuYSqkTaBpFHlm3AcZnz__Um7ATETA',
    gameName: 'TaQuangKhoi',
    tagLine: '8374',
    apiKey: 'RGAPI-6572d7de-57f4-4716-943b-c45695e1eb2f'
}

console.log(endpoint);

let requestOption = {
    method: 'GET',
    headers: {
        'X-api-key': apiKey
    }
}

let endpointAccountByPUUID = getEndpointAccountByPUUID(
    TaQuangKhoi.puuid, TaQuangKhoi.tagLine, TaQuangKhoi.apiKey);

fetch(endpointAccountByPUUID).then(
    function(response) {
        console.log(response);
    }
)

function getEndpointAccountByPUUID(puuid, apiKey) {
    return "https://asia.api.riotgames.com/riot/account/v1/accounts/by-puuid/" + puuid + `/?api_key=${apiKey}`;
}

function getEndpointAccountByRiotId(gameName, tagLine, apiKey) {
    return "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id" + `/${gameName}/${tagLine}/?api_key=${apiKey}`;
}

async function getPUUIDByRiotId(gameName, tagLine, apiKey) {
    let endpoint = getEndpointAccountByRiotId(gameName, tagLine, apiKey);
    let response = await fetch(endpoint).then(
        return response.json();
    )
    console.log(response);
}