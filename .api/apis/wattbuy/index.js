"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'wattbuy/3.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * This endpoint returns the key details about the electric utility serving a particular
     * location. Pass in a user’s location and return the utility name, phone number, web
     * address, and any other key information available.
     *
     *
     * @summary Utility Information Lookup
     * @throws FetchError<400, types.GetElectricityInfoResponse400> Bad request
     */
    SDK.prototype.getElectricityInfo = function (metadata) {
        return this.core.fetch('/electricity/info', 'get', metadata);
    };
    /**
     * This endpoint returns a home’s expected electricity usage (in kWh) over a 12-month
     * period, as well as the carbon footprint, utility rate, expected bill, and more. Our
     * best-in-class machine learning model is trained on millions of data points and is
     * constantly being updated with new information to create a personalized estimation output
     * to every home.
     *
     * There are a number of ways this API can be used, depending on the amount of data you
     * already have.
     *
     * Case 1 (Zip Code Only): The minimum input required is a zip code. This allows us to
     * apply weather and climate data in order to return a usage prediction for the average
     * home in the area
     *
     * Case 2 (Full Address): This is the most common use case. You provide the address of the
     * user and we take care of the rest! We use the address to fill in the rest of the fields
     * for you.
     *
     * Case 3 (Housing Data): If you don't have the address but you know some other
     * characteristics of the home (square footage, bedrooms, etc), you can manually enter
     * those as well and we'll apply whatever you have to the model.
     *
     * Case 4 (Address and Housing Data): For the best results, you can enter both the address
     * and the housing data. We'll trust any housing data you give us, and use the address to
     * attempt to fill in any empty fields.
     *
     *
     * @summary Electricity Usage Estimate
     * @throws FetchError<400, types.GetElectricityEstimationResponse400> Bad request
     */
    SDK.prototype.getElectricityEstimation = function (metadata) {
        return this.core.fetch('/electricity/estimation', 'get', metadata);
    };
    /**
     * This endpoint returns our recommended solar panel size and estimated production of that
     * solar panel system. Simply input the address of the home and we'll handle the rest. We
     * do the work of estimating the available roof space as well as the solar efficiency of
     * that specific location.
     *
     * The estimated optimal size of the solar panel system is returned in the "m2_decided"
     * response field.
     *
     * The estimated monthly production of that system can be found in
     * "solar_production_monthly". This field is a list of solar production values for each
     * month, January through December. If you'd like net usage, these solar values can be
     * subtracted from our total usage estimate response.
     *
     *
     * @summary Electricity Solar Estimate
     */
    SDK.prototype.getElectricitySolarEstimation = function (metadata) {
        return this.core.fetch('/electricity/solar/estimation', 'get', metadata);
    };
    /**
     * This endpoint returns information about a particular home's carbon footprint impact.
     * Just enter a home's address information and we'll handle the rest. We look up the
     * building characteristics of that particular home, along with climate characteristics and
     * the fuel mix of the area's electricity generation to provide a personalized estimate.
     *
     * If you don't need that level of specificity, you can also just enter the state and we'll
     * return the fuel mix to give you a general idea of the carbon impact of electricity in
     * that state.
     *
     * In the response, "carbon_foot_print" is the estimated annual carbon footprint (in
     * pounds) for that home. Additionally, "estimated_generation_data" represents the
     * estimated mix of fuel sources for that home, where "value" is the percentage of
     * electricity that a particular fuel source generates in that area.
     *
     *
     * @summary Carbon Footprint Estimate
     * @throws FetchError<400, types.GetElectricityCarbonFootprintResponse400> Bad request
     */
    SDK.prototype.getElectricityCarbonFootprint = function (metadata) {
        return this.core.fetch('/electricity/carbon-footprint', 'get', metadata);
    };
    /**
     * This endpoint takes an address as input and returns the ESI ID and utility name.
     *
     * @summary ESI ID Lookup
     * @throws FetchError<400, types.GetElectricityInfoEsiResponse400> Bad request
     */
    SDK.prototype.getElectricityInfoEsi = function (metadata) {
        return this.core.fetch('/electricity/info/esi', 'get', metadata);
    };
    /**
     * This endpoint returns the tariffs (structures) and rates (costs) to purchase electricity
     * from electrical utilities in the United States. The bulk of our retail rates are for
     * residential customers (though there may be some overlap with small commercial or other
     * electricity users). We include all types of utilities, including investor owned
     * utilities, municipal utilities, and coops. Our data includes component charges, the
     * source of the data, and the recency.
     *
     * We include time-varying rates, also known as “time of use” rates, and provide the
     * structure of peak versus non-peak
     *
     * Our Retail Rate Database contains electricity rates for 95% of US customers (over 1700
     * utility companies).
     *
     * Our database uses a human-augmented machine learning approach to pull the latest rates
     * whenever they become available and we are continually feeding in new rates as well as
     * updating existing rates.
     *
     * Users can employ this data to estimate the cost of electricity based on a set usage. It
     * can also be used to determine based on changes in electricity usage, for instance from
     * energy efficiency upgrades. This data can be combined with the electricity usage
     * estimate (link) to estimate the cost of electricity for nearly any home in the US
     *
     * This API is currently in open beta. Please contact info@wattb.com to request access,
     * report any errors, or request for missing utilities.
     *
     *
     * @summary Retail Rate Database
     */
    SDK.prototype.getElectricityRetailRates = function (metadata) {
        return this.core.fetch('/electricity/retail-rates', 'get', metadata);
    };
    /**
     * This endpoint returns the surplus generation rate for electricity utilities in the
     * United States, also sometimes referred to as the net metering rate. The bulk of our
     * surplus generation rates are for residential customers, usually with rooftop solar, but
     * some of the generation rates may be helpful also for small commercial customers, or for
     * customers with wind or other generation facilities. Our data includes the rates, the
     * parameters employed by utilities to calculate the total value, the sources of the data,
     * the recency of collection, and when it is not possible to directly calculate the surplus
     * generation rate, we identify the type of estimation that was used to calculate the
     * estimate.
     *
     * If a rate varies with time, we include the structure so that users are able to calculate
     * the value of surplus for a period of time, over a calendar year.
     *
     * Our surplus generation rate database includes sixty of the utilities with the largest
     * number of customers generating surplus generation.
     *
     * We collect this data with a human-augmented machine learning approach to collect the
     * latest data concerning surplus generation valuations, and it is verified by an
     * independent energy consultancy.
     *
     * Users can employ this data to estimate the value of surplus generated electricity, based
     * on a production curve. It can also be used to test the value of different production
     * curves, for instance to determine the increased return on investment if a larger rooftop
     * solar system is installed. This data can be combined with the electricity solar estimate
     * and the electricity usage estimate to calculate the value of surplus solar production
     * for nearly every home in the US.
     *
     * This API is currently in open beta. Please contact info@wattb.com to request access,
     * report any errors, or request missing utilities.
     *
     *
     * @summary Surplus Generation Rate Database
     * @throws FetchError<400, types.GetElectricityGenerationRateResponse400> Bad request
     */
    SDK.prototype.getElectricityGenerationRate = function (metadata) {
        return this.core.fetch('/electricity/generation-rate', 'get', metadata);
    };
    /**
     * This endpoint combines our electricity estimation, solar, cost, and carbon footprint
     * APIs into one call. This allows us to efficiently re-use components of the calculations
     * and return all data quicker than calling all the APIs separately.
     *
     * If given address not found it will return 204 status
     *
     * If given address has mutliple matches it will return 400 status with relavent addresses
     *
     *
     * @summary Get All Electricity Details For A Property
     * @throws FetchError<400, types.GetElectricityResponse400> Bad request
     */
    SDK.prototype.getElectricity = function (metadata) {
        return this.core.fetch('/electricity', 'get', metadata);
    };
    /**
     * Offers
     *
     * @throws FetchError<400, types.GetOffersResponse400> Bad request
     * @throws FetchError<500, types.GetOffersResponse500> Internal server error
     */
    SDK.prototype.getOffers = function (metadata) {
        return this.core.fetch('/offers', 'get', metadata);
    };
    SDK.prototype.postPlansLink = function (body, metadata) {
        return this.core.fetch('/plans/link', 'post', body, metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
