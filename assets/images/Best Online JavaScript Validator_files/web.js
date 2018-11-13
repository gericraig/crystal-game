
(function() {
    // Dynamic values from page request
    
var script = document.getElementById("celtra-script-1");
if (!script || script.tagName.toLowerCase() !== 'script')
    throw 'Element with id equal to scriptId does not exist or is not a script.';
  
    var runtimeParams = {"tagVersion":"6","deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.14.1","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"70.0.3538.102","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"weather":{"windy":"0","currentCondition":"cloudy","apparentTemperature":15.0,"temperature":15.1,"windSpeed":2,"cloudCoverage":100,"conditions":[{"name":"cloudy","weight":0}]},"ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"CA","ipCityGeonameId":"5327684","ipCity":"Berkeley","ipPostalCode":"94720","ipLat":37.8738,"ipLng":-122.2549,"accountId":"6c8f8b42","folderId":"89c44f96","placementId":"4cee59fa","supplierId":null,"sessionId":"s1542136997xca6c7a1f4f180fx18551369","purpose":"live","secure":1,"clientTimestamp":"1542136921.805","clientTimeZoneOffsetInMinutes":480,"clientIp":"192.31.105.240","gpsLat":null,"gpsLng":null,"language":"en","acceptLanguage":"en-US,en;q=0.9","platformAdvId":null,"platformAdvIdTrackingLimited":null,"userIdentifiers":{"externalAdServer/DCM":["0"]},"variantChoices":{"CreativeLocation/1660c376/36473":"Default","CreativeLocation/1660c376/36130":"Default","CreativeLocation/1660c376/35515":"Default","CreativeLocation/1660c376/36484":"Default","CreativeLocation/1660c376/36162":"Default","CreativeLocation/1660c376/36357":"Default","CreativeLocation/1660c376/36346":"Default","CreativeLocation/1660c376/37325":"Default","CreativeLocation/1660c376/36315":"Default","CreativeLocation/1660c376/35546":"Default","CreativeLocation/1660c376/37314":"Default","CreativeLocation/1660c376/36212":"Default","CreativeLocation/1660c376/36495":"Default","CreativeLocation/1660c376/36335":"Default","CreativeLocation/1660c376/35999":"Default","CreativeLocation/1660c376/35557":"Default","CreativeLocation/1660c376/35989":"Default","CreativeLocation/1660c376/36021":"Default","CreativeLocation/1660c376/36325":"Default","CreativeLocation/1660c376/36010":"Default","WindowOpenWithDelay":"withDelay","CreativeLocation/1660c376/36151":"Default","CreativeLocation/1660c376/36573":"Default","CreativeLocation/1660c376/35535":"Default","CreativeLocation/1660c376/36584":"Default","CreativeLocation/1660c376/36140":"Default","CreativeLocation/1660c376/36562":"Default","CreativeLocation/1660c376/37293":"Default","CreativeLocation/1660c376/36542":"Default","CreativeLocation/1660c376/36232":"Default","CreativeLocation/1660c376/37283":"Default","CreativeLocation/1660c376/36243":"Default","CreativeLocation/1660c376/36254":"Default","CreativeLocation/1660c376/35525":"Default","CreativeLocation/1660c376/36463":"Default","CreativeLocation/1660c376/36120":"Default","CreativeLocation/1660c376/36552":"Default","CreativeLocation/1660c376/36453":"Default","CreativeLocation/1660c376/35979":"Default","CreativeLocation/1660c376/36222":"Default","CreativeLocation/1660c376/37303":"Default"},"neustarSegment":null,"authBasis":"1542136997714,1660c376,4cee59fa","authToken":"3b6aa36f622a7b4394674e3e4b243966","customAudiences":{},"derivedAudiences":{},"destinationDefinitions":[],"dynamicContent":{"CustomFeedField/80d67013":"https://cache-ssl.celtra.com/api/blobs/20c0511da425ba4daf22a8f43aebc7a75883f39f34db7ef4038fdf05e4235fea/image.png","CustomFeedField/c5f1a9ed":"Last minute shopping?","CustomFeedField/2076d130":"Not this year","CustomFeedField/66babff5":"Last minute shopping?","CustomFeedField/e7386451":"Dual-Version1","CustomFeedField/6354a667":"Last minute shopping? Not this year","CustomFeedField/573743af":"https://cache-ssl.celtra.com/api/blobs/27fc8671aa5cdadb991f51270c2e4e8d5ee8b588c11bf06f46a38472f02ea217/image.jpg","CustomFeedField/4d5a7274":"https://cache-ssl.celtra.com/api/blobs/ad6deb8a744db0746ff9a911e62e74820b8f7f3651a3597ef886f22d382d410d/image.jpg","CustomFeedField/f4627863":"https://cache-ssl.celtra.com/api/blobs/602f9f90674a41c2885f737ee05d90c4f7e9299ee96f0723bd5854ff71de01a6/image.jpg","CustomFeedField/f8a447d1":"https://cache-ssl.celtra.com/api/blobs/1f3fba7a14ce9af230f2a92e978741669e173bbeea4385555c5ac5b4bfbd4004/image.jpg","CustomFeedField/66e17dfc":"https://cache-ssl.celtra.com/api/blobs/27fc8671aa5cdadb991f51270c2e4e8d5ee8b588c11bf06f46a38472f02ea217/image.jpg","CustomFeedField/7875959d":"SHOP GIFT IDEAS","CustomFeedField/f9f5a056":"Early Gifting","CustomFeedField/03027f25":"https://cache-ssl.celtra.com/api/blobs/1f3fba7a14ce9af230f2a92e978741669e173bbeea4385555c5ac5b4bfbd4004/image.jpg","CustomFeedField/6cea0fb5":"https://cache-ssl.celtra.com/api/blobs/ad6deb8a744db0746ff9a911e62e74820b8f7f3651a3597ef886f22d382d410d/image.jpg","CustomFeedField/f83d33cb":"https://cache-ssl.celtra.com/api/blobs/07a57e473211f1f337b128ff3c5b38dc86bf55fce94ea38345d6da965876e39c/image.jpg","CustomFeedField/d255a997":"SHOP GIFT IDEAS","CustomFeedField/5c7aadea":"Not this year","CustomFeedField/ba793130":"https://cache-ssl.celtra.com/api/blobs/602f9f90674a41c2885f737ee05d90c4f7e9299ee96f0723bd5854ff71de01a6/image.jpg","CustomFeedField/d2300c56":"https://cache-ssl.celtra.com/api/blobs/07a57e473211f1f337b128ff3c5b38dc86bf55fce94ea38345d6da965876e39c/image.jpg","CustomFeedField/21e7496a":"https://cache-ssl.celtra.com/api/blobs/27fc8671aa5cdadb991f51270c2e4e8d5ee8b588c11bf06f46a38472f02ea217/image.jpg","CustomFeedField/b40ead22":"https://cache-ssl.celtra.com/api/blobs/07a57e473211f1f337b128ff3c5b38dc86bf55fce94ea38345d6da965876e39c/image.jpg","CustomFeedField/2a72c6c3":"https://cache-ssl.celtra.com/api/blobs/5f36dc80d52da9b3c2fa08c4228f4f7e495f07a9012033e78e6542226a8e8e89/image.png","CustomFeedField/11f6b7e6":"Early Gifting","CustomFeedField/10597473":"https://cache-ssl.celtra.com/api/blobs/e40d1e1588a5b81267ade16d624a48f9e46454bb9b068b08b4ef937ee0c1cbc5/image.jpg","CustomFeedField/9f356529":"https://cache-ssl.celtra.com/api/blobs/27fc8671aa5cdadb991f51270c2e4e8d5ee8b588c11bf06f46a38472f02ea217/image.jpg","CustomFeedField/b50570de":"https://cache-ssl.celtra.com/api/blobs/07a57e473211f1f337b128ff3c5b38dc86bf55fce94ea38345d6da965876e39c/image.jpg","CustomFeedField/2df83574":"https://cache-ssl.celtra.com/api/blobs/e40d1e1588a5b81267ade16d624a48f9e46454bb9b068b08b4ef937ee0c1cbc5/image.jpg","CustomFeedField/50a3a479":"Dual-Version1","CustomFeedField/e368358d":"Last minute shopping? Not this year"},"usedCustomFeedFields":["CustomFeedField/80d67013","CustomFeedField/c5f1a9ed","CustomFeedField/2076d130","CustomFeedField/e7386451","CustomFeedField/6354a667","CustomFeedField/4d5a7274","CustomFeedField/f4627863","CustomFeedField/66e17dfc","CustomFeedField/7875959d","CustomFeedField/03027f25","CustomFeedField/b40ead22","CustomFeedField/10597473","CustomFeedField/9f356529","CustomFeedField/b50570de"],"dynamicContentMetaData":{"CustomFeedField/80d67013":null,"CustomFeedField/c5f1a9ed":null,"CustomFeedField/2076d130":null,"CustomFeedField/66babff5":null,"CustomFeedField/e7386451":null,"CustomFeedField/6354a667":null,"CustomFeedField/573743af":null,"CustomFeedField/4d5a7274":null,"CustomFeedField/f4627863":null,"CustomFeedField/f8a447d1":null,"CustomFeedField/66e17dfc":null,"CustomFeedField/7875959d":null,"CustomFeedField/f9f5a056":null,"CustomFeedField/03027f25":null,"CustomFeedField/6cea0fb5":null,"CustomFeedField/f83d33cb":null,"CustomFeedField/d255a997":null,"CustomFeedField/5c7aadea":null,"CustomFeedField/ba793130":null,"CustomFeedField/d2300c56":null,"CustomFeedField/21e7496a":null,"CustomFeedField/b40ead22":null,"CustomFeedField/2a72c6c3":null,"CustomFeedField/11f6b7e6":null,"CustomFeedField/10597473":null,"CustomFeedField/9f356529":null,"CustomFeedField/b50570de":null,"CustomFeedField/2df83574":null,"CustomFeedField/50a3a479":null,"CustomFeedField/e368358d":null},"customFeedFields":[{"id":"10597473","name":"160x600","feedId":"1c0abaa6","type":"image"},{"id":"b50570de","name":"250x250","feedId":"1c0abaa6","type":"image"},{"id":"f4627863","name":"728x90","feedId":"1c0abaa6","type":"image"},{"id":"b40ead22","name":"300x250","feedId":"1c0abaa6","type":"image"},{"id":"6354a667","name":"Headline","feedId":"1c0abaa6","type":"text"},{"id":"50a3a479","name":"CustomTracking","feedId":"1c0abaa6","type":"choice"},{"id":"2076d130","name":"Headline2","feedId":"1c0abaa6","type":"text"},{"id":"c5f1a9ed","name":"Headline1","feedId":"1c0abaa6","type":"text"},{"id":"4d5a7274","name":"300x600","feedId":"1c0abaa6","type":"image"},{"id":"f9f5a056","name":"Promo","feedId":"1c0abaa6","type":"choice"},{"id":"d255a997","name":"CTA","feedId":"1c0abaa6","type":"text"},{"id":"66e17dfc","name":"300x50","feedId":"1c0abaa6","type":"image"},{"id":"9f356529","name":"320x50","feedId":"1c0abaa6","type":"image"},{"id":"03027f25","name":"970x250","feedId":"1c0abaa6","type":"image"},{"id":"80d67013","name":"Button","feedId":"1c0abaa6","type":"image"},{"id":"573743af","name":"300x50","feedId":"dcae2b47","type":"image"},{"id":"11f6b7e6","name":"Promo","feedId":"dcae2b47","type":"choice"},{"id":"6cea0fb5","name":"300x600","feedId":"dcae2b47","type":"image"},{"id":"f8a447d1","name":"970x250","feedId":"dcae2b47","type":"image"},{"id":"ba793130","name":"728x90","feedId":"dcae2b47","type":"image"},{"id":"5c7aadea","name":"Headline2","feedId":"dcae2b47","type":"text"},{"id":"7875959d","name":"CTA","feedId":"dcae2b47","type":"text"},{"id":"2a72c6c3","name":"Button","feedId":"dcae2b47","type":"image"},{"id":"2df83574","name":"160x600","feedId":"dcae2b47","type":"image"},{"id":"e7386451","name":"CustomTracking","feedId":"dcae2b47","type":"choice"},{"id":"21e7496a","name":"320x50","feedId":"dcae2b47","type":"image"},{"id":"66babff5","name":"Headline1","feedId":"dcae2b47","type":"text"},{"id":"d2300c56","name":"300x250","feedId":"dcae2b47","type":"image"},{"id":"f83d33cb","name":"250x250","feedId":"dcae2b47","type":"image"},{"id":"e368358d","name":"Headline","feedId":"dcae2b47","type":"text"}],"tuneIosQueryStringFragment":null,"tuneAndroidQueryStringFragment":null,"tuneCustomAttributes":{},"admarvel_format":null,"overrides":{"placementId":"4cee59fa","customAudiences":{},"derivedAudiences":{},"deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.14.1","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"70.0.3538.102","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"language":"en","ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"CA","ipCityGeonameId":"5327684","ipCity":"Berkeley","weather":{"windy":"0","currentCondition":"cloudy","apparentTemperature":15.0,"temperature":15.1,"windSpeed":2,"cloudCoverage":100,"conditions":[{"name":"cloudy","weight":0}]},"clientTimestamp":"1542136921.805","clientTimeZoneOffsetInMinutes":480},"utSignals":null,"_mraidCheck":null,"externalAdServer":"DCM","externalCreativeId":"108535382","externalCreativeName":null,"externalPlacementId":"233453490","externalPlacementName":null,"externalSiteId":"2763042","externalSiteName":null,"externalSupplierId":null,"externalSupplierName":null,"externalLineItemId":"431179594","externalSessionId":null,"externalBundleId":null,"externalCreativeWidth":728,"externalCreativeHeight":90,"externalCampaignId":"21953183","externalCampaignName":null,"clickUrl":"https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjst4szHThiZHVLenKYAWbJg4cfRhLSCgEQBss0AXTgYUElwm8C5yEkOmRAH81wKjjfLxVjUhp8mCad8NLnYSK_mepmW5AIKFE0I42sLAqx-pkT_wmcng7Eb9fTgWdCkIwk7EB-Y5WmwfJsGeVjjaFUgLR3EEdwN0yuiVKoHJmn3FwvH00nVdqLUb-5-Kw_zxPjr3w8gOh1r591cijn8I5FzG26Q0948yRb7FwDbIQhab4FKw12HdAWapop1psWJa1aXWNb_lzqhS5UPFVgqVXGijUTb1_CjCUKHWrVhw7UCJgGTf3HmyCNOxkuJwmKhSHmnqddWQhASJMoAuEJyemOTCq7Tm4m6RmPf9l0otMWTdGz3IzYmCblhmLzqiBX4S9yRGM8jdpyFtt-dpZ24MHbcW6HZQawIuOgn_4DlGhL-yQHuCuTx0pxLR7D6oP1IZKYdJt_Ia755zivLP1c4gUzrAJPqp29IKzJPRUn2Sc3bO-ubWNwMM2gQI2PrUGMZquuBJyjoTrtVnKofYLYtLGvhgagLJMJ0W1SFe8CA8SJEEOuBQlDhYxtYCC5MdgwLezyqBY64LIwyqickTrcloVVmFAdLTZQB3psjb-kBMgMfCJrw5CyW2vZUf5vn3qM2XV3fDe9YVFlYfU4Ax2LGwXyIDf70bPvQTq3jQzJYl2P3ZU97ym_RBiz8fCm4U6IAGe3hbJC6bvbp3PRwqP6KlZo7o5tgZM5hZj3wZKyICmRWOAjfkpn1jzrwfWgcwVc0JHr9RBjHbCB4v7WUWpFmz6W9VkEq9rcxi436IpW8Nzfbhm234pHsHZJzq5eguR8UJA0ZTFn5M9jg3i-GQyeVJ16euA8KA05KmaXY7pAEdv_v_wOWQ9o1bs7eE2eBWWKxMpXpQW7p20ombi6W9pNCEmNDUQW8D3-DcVde7YPRK9A&sai=AMfl-YRY93lWtD1LMfHzaDz0nhBXfZ9xRr75NfHmrEdkJLNq_iSFx1Xl3uHhaZn5CmbJVOu5Iq1sqFnKDvBgP6V7JL7h_l_UuB-RH87FDiT3mu7_qEkSVJpGdEVcuR9yxa1HPjAMdjv6KxKVbvC7kp1of-dpJyDl4V8TLLYOFBdK2iI1JotBuL1mMslfG8xw7U2w38Z6lgsMF2aEkFQwQNHhjX4AcqNZ0sSfg5chMx5oJoJMic_OGv4-8Fp5QqsLoAqZ2lxirXreEKPPxMzCoWYvlv2s5ogG86t8OomPP8QzYk29rGK3EADkfsQVDCH92Yrj5Ii86m4CeSM6hzyPqMuJHN-h5LexvFnOqnp0Wdd_kmnyiA&sig=Cg0ArKJSzE9yP3PgFuPzEAE&urlfix=1&adurl=","useClickAsDestination":null,"scriptId":"celtra-script-1","firehoseUrl":null,"clickEvent":"advertiser","clickUrlNeedsDest":null,"ncu":null,"firstPage":1,"dataURIsEnabled":0,"universalAndAppLinksInMRAID":0,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null,"moatRandom":{"first":862094728,"second":609313873},"skipOffset":null,"_enablePoliteLoading":null,"_politeImageUrl":null,"_politeClickThrough":null,"sticky":null,"_mopubExt":null,"enabledServices":["googleMaps","contentSharing"],"vastCompanion":0,"creativeVariantLockSize":null,"vastVersion":null,"preferredClickThroughWindow":"new","externalDestinationUrl":"https://shop.lululemon.com/c/gift-ideas/_/N-8mp?cid=disp_2018_dbm_tof_w41_us_dual_int_c-holiday","externalUserId":"0","externalCreativeSize":"728x90","expandDirection":"undefined","externalLandingPageUrl":"https://shop.lululemon.com/c/gift-ideas/_/N-8mp?cid=disp_2018_dbm_tof_w41_us_dual_int_c-holiday","hostPageLoadId":"18378190826953777"};
    runtimeParams.overridableClickThroughDestinationUrl = false;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
    
    
var macros = function (x) {
    if (x instanceof Array) {
        return x.map(macros);
    } else {
        var macroTags = [
            ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)]
,['%n', (Math.random()+'').slice(2)]
,['%s', "https"]
,['{celtraAccountId}', "6c8f8b42"]
,['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraAndroidAdvIdTrackingLimited}', ""]
,['{celtraAndroidAdvId}', ""]
,['{celtraCampaignId:int}', "2311344022"]
,['{celtraCampaignId}', "89c44f96"]
,['{celtraCreativeId:int}', "375440246"]
,['{celtraCreativeId}', "1660c376"]
,['{celtraCreativeVariant:urlenc}', "Default%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault%7CDefault"]
,['{celtraCreativeVariant}', "Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default|Default"]
,['{celtraExternalAdServer}', "DCM"]
,['{celtraExternalBundleId}', ""]
,['{celtraExternalCampaignId}', "21953183"]
,['{celtraExternalCampaignName}', ""]
,['{celtraExternalCreativeId}', "108535382"]
,['{celtraExternalCreativeName}', ""]
,['{celtraExternalLineItemId}', "431179594"]
,['{celtraExternalPlacementId}', "233453490"]
,['{celtraExternalPlacementName}', ""]
,['{celtraExternalSessionId}', ""]
,['{celtraExternalSiteId}', "2763042"]
,['{celtraExternalSiteName}', ""]
,['{celtraExternalSupplierId}', ""]
,['{celtraExternalSupplierName}', ""]
,['{celtraIosAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraIosAdvIdTrackingLimited}', ""]
,['{celtraIosAdvId}', ""]
,['{celtraPlacementId:int}', "1290689018"]
,['{celtraPlacementId}', "4cee59fa"]
,['{celtraPlatformAdvIdTrackingLimited}', ""]
,['{celtraPlatformAdvId}', ""]
,['{celtraProto}', "https"]
,['{celtraRandom}', (Math.random()+'').slice(2)]
,['{celtraSessionId}', "s1542136997xca6c7a1f4f180fx18551369"]
,['{celtraSupplierId:int}', ""]
,['{celtraSupplierId}', ""]

        ];
        return macroTags.reduce(function(str, replacementRule, idx, arr) {
            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
        }, x);
    }
};

    // Dynamic values that we do not want to pass forward in urls,
    // so we look them up on every page request based on runtimeParams
    var urlOpenedOverrideUrls = {};
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = null;

    // Less dynamic values for payload request
    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/1660c376/compiled/web.js";
    var cacheParams = {"v": "26-889054396b", "secure": 1, "cachedVariantChoices": "W10-", "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0', "batch-trackers-enabled": '1'};

    var trackers = (function() {
    return [
        // 3rd-party tracker (regular)
function(event) {
    if (event.name == 'adLoading')
        return {urls: macros([])};

    if (event.name == 'firstInteraction')
        return {urls: macros([])};

    if (event.name == 'creativeLoaded')
        return {urls: macros([])};

    if (event.name == 'creativeRendered')
        return {urls: macros([])};

    if (event.name == 'viewable00')
        return {urls: macros([])};

    if (event.name == 'viewable501')
        return {urls: macros([])};

    if (event.name == 'expandRequested')
        return {urls: macros([])};

    if (event.name == 'videoPlayInitiated')
        return {urls: macros([])};

    if (event.name == 'videoStart')
        return {urls: macros([])};

    if (event.name == 'videoFirstQuartile')
        return {urls: macros([])};

    if (event.name == 'videoMidpoint')
        return {urls: macros([])};

    if (event.name == 'videoThirdQuartile')
        return {urls: macros([])};

    if (event.name == 'videoComplete')
        return {urls: macros([])};

    if (event.name == 'videoPause')
        return {urls: macros([])};

    if (event.name == 'videoMuted')
        return {urls: macros([])};

    if (event.name == 'videoUnmuted')
        return {urls: macros([])};

    if (event.name == 'custom')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'urlOpened')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'storeOpened')
        return {urls: macros({}[event.label] || [])};
},
// 3rd-party tracker (click regular)
function(event) {
    if (event.name === "firstInteraction")
        return {urls: macros([]), events: [{name: 'click'}] };
},
// Ad server tracker
function(event) {
    if (event.name === "firstInteraction")
        return {urls: macros(["https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjst4szHThiZHVLenKYAWbJg4cfRhLSCgEQBss0AXTgYUElwm8C5yEkOmRAH81wKjjfLxVjUhp8mCad8NLnYSK_mepmW5AIKFE0I42sLAqx-pkT_wmcng7Eb9fTgWdCkIwk7EB-Y5WmwfJsGeVjjaFUgLR3EEdwN0yuiVKoHJmn3FwvH00nVdqLUb-5-Kw_zxPjr3w8gOh1r591cijn8I5FzG26Q0948yRb7FwDbIQhab4FKw12HdAWapop1psWJa1aXWNb_lzqhS5UPFVgqVXGijUTb1_CjCUKHWrVhw7UCJgGTf3HmyCNOxkuJwmKhSHmnqddWQhASJMoAuEJyemOTCq7Tm4m6RmPf9l0otMWTdGz3IzYmCblhmLzqiBX4S9yRGM8jdpyFtt-dpZ24MHbcW6HZQawIuOgn_4DlGhL-yQHuCuTx0pxLR7D6oP1IZKYdJt_Ia755zivLP1c4gUzrAJPqp29IKzJPRUn2Sc3bO-ubWNwMM2gQI2PrUGMZquuBJyjoTrtVnKofYLYtLGvhgagLJMJ0W1SFe8CA8SJEEOuBQlDhYxtYCC5MdgwLezyqBY64LIwyqickTrcloVVmFAdLTZQB3psjb-kBMgMfCJrw5CyW2vZUf5vn3qM2XV3fDe9YVFlYfU4Ax2LGwXyIDf70bPvQTq3jQzJYl2P3ZU97ym_RBiz8fCm4U6IAGe3hbJC6bvbp3PRwqP6KlZo7o5tgZM5hZj3wZKyICmRWOAjfkpn1jzrwfWgcwVc0JHr9RBjHbCB4v7WUWpFmz6W9VkEq9rcxi436IpW8Nzfbhm234pHsHZJzq5eguR8UJA0ZTFn5M9jg3i-GQyeVJ16euA8KA05KmaXY7pAEdv_v_wOWQ9o1bs7eE2eBWWKxMpXpQW7p20ombi6W9pNCEmNDUQW8D3-DcVde7YPRK9A&sai=AMfl-YRY93lWtD1LMfHzaDz0nhBXfZ9xRr75NfHmrEdkJLNq_iSFx1Xl3uHhaZn5CmbJVOu5Iq1sqFnKDvBgP6V7JL7h_l_UuB-RH87FDiT3mu7_qEkSVJpGdEVcuR9yxa1HPjAMdjv6KxKVbvC7kp1of-dpJyDl4V8TLLYOFBdK2iI1JotBuL1mMslfG8xw7U2w38Z6lgsMF2aEkFQwQNHhjX4AcqNZ0sSfg5chMx5oJoJMic_OGv4-8Fp5QqsLoAqZ2lxirXreEKPPxMzCoWYvlv2s5ogG86t8OomPP8QzYk29rGK3EADkfsQVDCH92Yrj5Ii86m4CeSM6hzyPqMuJHN-h5LexvFnOqnp0Wdd_kmnyiA&sig=Cg0ArKJSzE9yP3PgFuPzEAE&urlfix=1&adurl="]), events: [{name: 'clickReportedToSupplier'}] };
}
    ]
})();
    trackers.urlsAndEventsFor = function(event) {
        return this.reduce(function(acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls:   acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, {urls: [], events: []});
    };

    
var adLoadingEvent = {"name":"adLoading","sessionId":"s1542136997xca6c7a1f4f180fx18551369"};
adLoadingEvent.clientTimestamp = new Date/1000;

trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
    // On IE 8+ URLs containing '%' character sometimes throw an error and
    // stop current JS run loop. One solution  would be to look for that
    // and replace it with '%25', but we've decided not to modify incoming
    // URLs, because this issue is really a combination of two external
    // problems: broken URL on a buggy browser.
    // https://celtra.atlassian.net/browse/MAB-4476
    try {
        (new Image).src = url;
    } catch(e) {}
});
    

    function buildPayloadUrl(payloadBase) {
      var pairs = [];
      for (var k in cacheParams)
          pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
      return payloadBase + '?' + pairs.join('&');
    }

    var payloadUrl = buildPayloadUrl(payloadBase);

    
// Request and run payload
var payload = document.createElement('script');
payload.src = payloadUrl;
payload.onload = function() {

runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
    
};
script.parentNode.insertBefore(payload, script.nextSibling);
    
    
    
})();
  