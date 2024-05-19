declare const GetElectricity: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
                readonly utility_eid: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "EID of Utility which is getting in electricity info API";
                };
                readonly year_built: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Year the home was built";
                };
                readonly bedrooms: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of bedrooms in the home";
                };
                readonly bathrooms: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of bathrooms in the home";
                };
                readonly sq_ft: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Square footage of livable indoor area";
                };
                readonly stories: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of floors in the home";
                };
                readonly house_type: {
                    readonly type: "number";
                    readonly enum: readonly [3, 4, 5, 6, 7, 10, 13];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly estimation: {
                    readonly type: "object";
                    readonly properties: {
                        readonly monthly_usage_estimates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly x: {
                                        readonly type: "string";
                                    };
                                    readonly y: {
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                        readonly annual_usage_estimate: {
                            readonly type: "string";
                        };
                        readonly incomplete_data: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly solar: {
                    readonly type: "object";
                    readonly properties: {
                        readonly solar_production_monthly: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                        };
                        readonly cost_savings_monthly: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                        };
                        readonly upfront_cost: {
                            readonly type: "number";
                        };
                        readonly payback_period: {
                            readonly type: "number";
                        };
                        readonly solar_property_page: {
                            readonly type: "string";
                        };
                    };
                };
                readonly carbon_foot_print: {
                    readonly type: "object";
                    readonly properties: {
                        readonly annual_carbon_footprint: {
                            readonly type: "number";
                        };
                        readonly baseline_annual_carbon_footprint: {
                            readonly type: "number";
                        };
                        readonly baseline_annual_usage: {
                            readonly type: "number";
                        };
                        readonly estimated_generation_data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                    };
                                    readonly value: {
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly cost: {
                    readonly type: "object";
                    readonly properties: {
                        readonly est_bill_range: {
                            readonly type: "object";
                            readonly properties: {
                                readonly max: {
                                    readonly type: "number";
                                };
                                readonly min: {
                                    readonly type: "number";
                                };
                            };
                        };
                        readonly monthly_cost: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                        };
                        readonly avg_rate: {
                            readonly type: "number";
                        };
                    };
                };
                readonly energy_score: {
                    readonly type: "number";
                };
                readonly deregulated: {
                    readonly type: "boolean";
                };
                readonly wb_property_page: {
                    readonly type: "string";
                };
                readonly wattkey: {
                    readonly type: "string";
                    readonly description: "wattkey will be used to call Offers API";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["err"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["\"zip\" is required,\"city\" is required"];
                };
                readonly relavent_addresses: {
                    readonly description: "This propety will present only if mutliple addresses found";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "string";
                            };
                            readonly shortstate: {
                                readonly type: "string";
                            };
                            readonly zip: {
                                readonly type: "string";
                            };
                            readonly county: {
                                readonly type: "string";
                            };
                            readonly formatted_address: {
                                readonly type: "string";
                            };
                            readonly location: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly lat: {
                                        readonly type: "number";
                                    };
                                    readonly lng: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly sub_type: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityCarbonFootprint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly annual_carbon_footprint: {
                            readonly type: "number";
                        };
                        readonly baseline_annual_carbon_footprint: {
                            readonly type: "number";
                        };
                        readonly baseline_annual_usage: {
                            readonly type: "number";
                        };
                        readonly estimated_generation_data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                    };
                                    readonly value: {
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["state is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityEstimation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
                readonly year_built: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The year the home was built. Should be four digits.";
                };
                readonly bedrooms: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of bedrooms in the home.";
                };
                readonly bathrooms: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of bathrooms in the home.";
                };
                readonly sq_ft: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The square footage of the home.";
                };
                readonly stories: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of stories in the home.";
                };
                readonly house_type: {
                    readonly type: "string";
                    readonly enum: readonly ["house", "apartment"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The house type. Either house or apartment.";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly state_name: {
                    readonly type: "string";
                    readonly description: "The name of the state where the address is located.";
                };
                readonly graph_data: {
                    readonly type: "array";
                    readonly description: "An array of objects representing the estimated electricity usage for the home for each month of the year.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly x: {
                                readonly type: "string";
                                readonly description: "The name of the month.";
                            };
                            readonly y: {
                                readonly type: "number";
                                readonly description: "The estimated electricity usage for the month in kilowatt-hours (kWh).";
                            };
                        };
                    };
                };
                readonly est_bill_amount: {
                    readonly type: "object";
                    readonly description: "An object containing the estimated monthly electricity bill amount for the home.";
                    readonly properties: {
                        readonly min: {
                            readonly type: "number";
                            readonly description: "The estimated minimum monthly bill amount in USD.";
                        };
                        readonly max: {
                            readonly type: "number";
                            readonly description: "The estimated maximum monthly bill amount in USD.";
                        };
                    };
                };
                readonly monthly_cost: {
                    readonly type: "array";
                    readonly description: "An array of monthly bill amount in USD.";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly avg_cost: {
                    readonly type: "number";
                    readonly description: "The average cost of electricity per kilowatt-hour (kWh) for the address.";
                };
                readonly est_usage: {
                    readonly type: "number";
                    readonly description: "The estimated total electricity usage for the home for the year in kilowatt-hours (kWh).";
                };
                readonly interpolated: {
                    readonly type: "boolean";
                };
                readonly is_apartment_or_unit: {
                    readonly type: "boolean";
                };
                readonly wattkey: {
                    readonly type: "string";
                    readonly description: "The unique identifier for the address used in the estimation.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["zip is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityGenerationRate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly state: {
                    readonly type: "string";
                    readonly examples: readonly ["nc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Required, short form two characters state abbreviation";
                };
                readonly utility_id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Required, Numeric String of utilityID, provided by EIA for every utility in the US. (A listing of Utilities IDs can be found here: https://www.eia.gov/electricity/data/eia861/)";
                };
            };
            readonly required: readonly ["state"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly error_messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["state is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityInfo: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of energy service for the address, either regulated or deregulated.\n\n`regulated` `deregulated`";
                    readonly enum: readonly ["regulated", "deregulated"];
                };
                readonly esiid: {
                    readonly type: "string";
                    readonly description: "The Electric Service Identifier (ESID) of the address.";
                };
                readonly exact_match: {
                    readonly type: "boolean";
                    readonly description: "Indicates whether the search results are an exact match to the address searched.";
                };
                readonly exact_match_reason: {
                    readonly type: "string";
                    readonly description: "The reason for the exact match result, if applicable.\n\n`success` `multiple_addresses_found` `unknown` `address_unavailable`";
                    readonly enum: readonly ["success", "multiple_addresses_found", "unknown", "address_unavailable"];
                };
                readonly wattkey: {
                    readonly type: "string";
                    readonly description: "The unique identifier for the address used in the estimation.";
                };
                readonly utility_info: {
                    readonly type: "array";
                    readonly description: "An array of objects containing information about the addresses's utility provider.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly utility_name: {
                                readonly type: "string";
                            };
                            readonly utility_id: {
                                readonly type: "string";
                            };
                            readonly place: {
                                readonly type: "string";
                                readonly description: "Place or Service Terrirtory";
                            };
                            readonly website: {
                                readonly type: "string";
                            };
                            readonly phone_number: {
                                readonly type: "string";
                            };
                            readonly facebook: {
                                readonly type: "string";
                            };
                            readonly twitter: {
                                readonly type: "string";
                            };
                            readonly signup_url: {
                                readonly type: "string";
                            };
                            readonly signup_phone_number: {
                                readonly type: "string";
                            };
                            readonly default_rate: {
                                readonly type: "number";
                                readonly description: "The default rate (per kWh) for the address.";
                            };
                            readonly distributor_monthly_rate: {
                                readonly type: "number";
                            };
                            readonly distributor_rate_per_kwh: {
                                readonly type: "number";
                            };
                            readonly time_of_use_rate: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed | Invalid Input"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["zip is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityInfoEsi: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly page: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly total_count: {
                    readonly type: "integer";
                };
                readonly page_count: {
                    readonly type: "number";
                };
                readonly page_number: {
                    readonly type: "number";
                };
                readonly has_next_page: {
                    readonly type: "boolean";
                };
                readonly exact_match: {
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly esiid: {
                                readonly type: "string";
                                readonly description: "ESI ID";
                            };
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly zipcode: {
                                readonly type: "string";
                            };
                            readonly premise_type: {
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["Active"];
                            };
                            readonly utility: {
                                readonly type: "string";
                            };
                            readonly plans_available: {
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly error_messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["zip is required", "state is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricityRetailRates: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly utilityID: {
                    readonly type: "integer";
                    readonly examples: readonly ["6452"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Required, Numeric String of utilityID, provided by EIA for every utility in the US. (A listing of Utilities IDs can be found here: https://www.eia.gov/electricity/data/eia861/)";
                };
                readonly state: {
                    readonly type: "string";
                    readonly examples: readonly ["fl"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Required, short form two characters state abbreviation";
                };
                readonly baseline_zone: {
                    readonly type: "string";
                    readonly examples: readonly ["Q"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional, baseline allocation zone if applicable. This is assigned to most customers in CA based on where they live, and can be found on the bill.";
                };
                readonly verified_from: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional, Epoch time, default 1 year ago, example: 1664514205";
                };
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Non negative page number, default 1";
                };
            };
            readonly required: readonly ["utilityID", "state"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetElectricitySolarEstimation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly description: "The unique identifier for the address used in the estimation.";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly solar_production_monthly: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                            readonly description: "Monthly solar production values in kWh for each month, January through December.";
                        };
                        readonly cost_savings_monthly: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                            readonly description: "Monthly cost savings in USD for each month, January through December, if the solar panel system is installed.";
                        };
                        readonly upfront_cost: {
                            readonly type: "number";
                            readonly description: "The upfront cost of installing the recommended solar panel system in USD.";
                        };
                        readonly payback_period: {
                            readonly type: "number";
                            readonly description: "The estimated payback period for the solar panel system in years. The payback period is the length of time it takes for the cost savings to equal the upfront cost.";
                        };
                        readonly payback_period_with_incentives: {
                            readonly type: "number";
                            readonly description: "The estimated payback period with incentives for the solar panel system in years. The payback period with incentives is the length of time it takes for the cost savings to equal the upfront cost taking the federal incentives into account.";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOffers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
                readonly language: {
                    readonly type: "string";
                    readonly enum: readonly ["en", "es"];
                    readonly default: "en";
                    readonly description: "Language code to be used for offer URLs. Supported languages are English (en) and Spanish (es).";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly category: {
                    readonly type: "string";
                    readonly enum: readonly ["electricity_plans", "rooftop_solar", "smart_plugs", "community_solar", "demand_response", "smart_thermostat", "light_bulbs"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The category of offers to return. All offers will be returned if category is not provided.";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ok"];
                };
                readonly wattkey: {
                    readonly type: "string";
                };
                readonly offers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly offer_id: {
                                readonly type: "string";
                            };
                            readonly offer_name: {
                                readonly type: "string";
                            };
                            readonly offer_desc: {
                                readonly type: "string";
                            };
                            readonly offer_cta: {
                                readonly type: "string";
                            };
                            readonly offer_image: {
                                readonly type: "string";
                            };
                            readonly offer_category: {
                                readonly type: "string";
                            };
                            readonly cost: {
                                readonly type: "number";
                            };
                            readonly link: {
                                readonly type: "string";
                            };
                            readonly kwh_saved: {
                                readonly type: "number";
                            };
                            readonly kwh_generated: {
                                readonly type: "number";
                            };
                            readonly monthly_savings: {
                                readonly type: "number";
                            };
                            readonly item_count: {
                                readonly type: "number";
                            };
                            readonly payback_period: {
                                readonly type: "number";
                            };
                            readonly carbon_fp_saved: {
                                readonly type: "number";
                            };
                            readonly form: {
                                readonly type: "boolean";
                            };
                            readonly offer_data: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["err"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["zip is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["err"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal server error"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPlansLink: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly first_name: {
                readonly type: "string";
            };
            readonly last_name: {
                readonly type: "string";
            };
            readonly email: {
                readonly type: "string";
            };
            readonly phone_number: {
                readonly type: "string";
            };
            readonly dob: {
                readonly type: "string";
                readonly description: "MM/DD/YYYY";
            };
            readonly service_start_date: {
                readonly type: "string";
                readonly description: "MM/DD/YYYY";
            };
            readonly service_type: {
                readonly type: "string";
                readonly enum: readonly ["switch", "move"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wattkey: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Our identifier for this home";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The street address of the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City of the property";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "State of the property as a two letter code (e.g. \"TX\")";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5-digit zip code of the property";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly description: "custom url with partner code and customer_id";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Validation Failed"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["first_name is required", "last_name is required"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetElectricity, GetElectricityCarbonFootprint, GetElectricityEstimation, GetElectricityGenerationRate, GetElectricityInfo, GetElectricityInfoEsi, GetElectricityRetailRates, GetElectricitySolarEstimation, GetOffers, PostPlansLink };
