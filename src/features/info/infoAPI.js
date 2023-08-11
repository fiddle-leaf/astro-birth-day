
/**
 * Geocoder API
 *  *   * PARAMETERS: text and API Key
 *  *   * url: https://api.geoapify.com/v1/geocode/search?REQUEST_PARAMS
 *  *   * output: lat and lon values from string location (in Form)
 */
let apiKey, url;


export function fetchLocation(text = "Washington, DC") {
    apiKey = '771666a9f3ba44e7abe1b0e8c2c65931';

    url = `https://api.geoapify.com/v1/geocode/search?&text=${text.split(",").join("%20")}&apiKey=${apiKey}`;

    return url;

}

