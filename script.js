require('dotenv').config();

// Get Account Info with Riot API
let KhoiQuangTa = {
    puuid: 'omNYk0A4itclmIEiAzZkQMxfn0ZaXW1chlWfBjMuBOmtpooEVuYSqkTaBpFHlm3AcZnz__Um7ATETA',
    gameName: 'KhoiQuangTa',
    tagLine: '8374',
    apiKey: process.env.KHOI_QUANG_TA_KEY
}

let TaQuangKhoi = {
    puuid: 'omNYk0A4itclmIEiAzZkQMxfn0ZaXW1chlWfBjMuBOmtpooEVuYSqkTaBpFHlm3AcZnz__Um7ATETA',
    gameName: 'TaQuangKhoi',
    tagLine: '8374',
    apiKey: process.env.TA_QUANG_KHOI_KEY
}

function getEndpointAccountByPUUID(puuid, apiKey) {
    return "https://asia.api.riotgames.com/riot/account/v1/accounts/by-puuid/" + puuid + `/?api_key=${apiKey}`;
}

function getEndpointAccountByRiotId(gameName, tagLine, apiKey) {
    return "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id" + `/${gameName}/${tagLine}/?api_key=${apiKey}`;
}

async function getPUUIDByRiotId(User) {
    console.group("getPUUIDByRiotId");

    let gameName = User.gameName,
        tagLine = User.tagLine,
        apiKey = User.apiKey;
    let endpoint = getEndpointAccountByRiotId(gameName, tagLine, apiKey);
    console.log("endpoint: ", endpoint);
    let response = await fetch(endpoint).then((response) => response.json());
    console.log("response: ", response);
    console.groupEnd();

    return response.puuid;
}

async function getAccountInfoByPUUID(User) {
    console.group("getAccountInfoByPUUID");
    let puuid, apiKey = User.apiKey;

    await getPUUIDByRiotId(User).then(
        (response) => {
            puuid = response;
        }
    )

    let endpoint = getEndpointAccountByPUUID(puuid, apiKey);
    console.log("endpoint: ", endpoint)
    let response = await fetch(endpoint).then((response) => response.json());
    console.log("response: ", response);
    console.groupEnd();

    return response;
}



async function main() {
    await getAccountInfoByPUUID(KhoiQuangTa).then(
        (response) => {
            console.log(response);
        }
    )
}

main();