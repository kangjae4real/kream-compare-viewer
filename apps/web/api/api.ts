/* tslint:disable */
/* eslint-disable */
/**
 * Kream Compare Viewer REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface ProductBrand
 */
export interface ProductBrand {
    /**
     * 
     * @type {string}
     * @memberof ProductBrand
     */
    'english': string;
    /**
     * 
     * @type {string}
     * @memberof ProductBrand
     */
    'korean': string;
    /**
     * 
     * @type {string}
     * @memberof ProductBrand
     */
    'logo'?: string;
}
/**
 * 
 * @export
 * @interface ProductResponse
 */
export interface ProductResponse {
    /**
     * 
     * @type {ProductTitle}
     * @memberof ProductResponse
     */
    'title'?: ProductTitle;
    /**
     * 
     * @type {ProductBrand}
     * @memberof ProductResponse
     */
    'brand'?: ProductBrand;
    /**
     * 
     * @type {number}
     * @memberof ProductResponse
     */
    'price'?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductResponse
     */
    'interest'?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    'imageURL'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    'siteURL'?: string;
}
/**
 * 
 * @export
 * @interface ProductTitle
 */
export interface ProductTitle {
    /**
     * 
     * @type {string}
     * @memberof ProductTitle
     */
    'english': string;
    /**
     * 
     * @type {string}
     * @memberof ProductTitle
     */
    'korean': string;
}
/**
 * 
 * @export
 * @interface RootControllerHealthCheck200Response
 */
export interface RootControllerHealthCheck200Response {
    /**
     * 
     * @type {string}
     * @memberof RootControllerHealthCheck200Response
     */
    'status'?: string;
    /**
     * 
     * @type {{ [key: string]: RootControllerHealthCheck200ResponseInfoValue; }}
     * @memberof RootControllerHealthCheck200Response
     */
    'info'?: { [key: string]: RootControllerHealthCheck200ResponseInfoValue; } | null;
    /**
     * 
     * @type {{ [key: string]: RootControllerHealthCheck200ResponseInfoValue; }}
     * @memberof RootControllerHealthCheck200Response
     */
    'error'?: { [key: string]: RootControllerHealthCheck200ResponseInfoValue; } | null;
    /**
     * 
     * @type {{ [key: string]: RootControllerHealthCheck200ResponseInfoValue; }}
     * @memberof RootControllerHealthCheck200Response
     */
    'details'?: { [key: string]: RootControllerHealthCheck200ResponseInfoValue; };
}
/**
 * 
 * @export
 * @interface RootControllerHealthCheck200ResponseInfoValue
 */
export interface RootControllerHealthCheck200ResponseInfoValue {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof RootControllerHealthCheck200ResponseInfoValue
     */
    'status': string;
}
/**
 * 
 * @export
 * @interface RootControllerHealthCheck503Response
 */
export interface RootControllerHealthCheck503Response {
    /**
     * 
     * @type {string}
     * @memberof RootControllerHealthCheck503Response
     */
    'status'?: string;
    /**
     * 
     * @type {{ [key: string]: RootControllerHealthCheck200ResponseInfoValue; }}
     * @memberof RootControllerHealthCheck503Response
     */
    'info'?: { [key: string]: RootControllerHealthCheck200ResponseInfoValue; } | null;
    /**
     * 
     * @type {{ [key: string]: RootControllerHealthCheck200ResponseInfoValue; }}
     * @memberof RootControllerHealthCheck503Response
     */
    'error'?: { [key: string]: RootControllerHealthCheck200ResponseInfoValue; } | null;
    /**
     * 
     * @type {{ [key: string]: RootControllerHealthCheck200ResponseInfoValue; }}
     * @memberof RootControllerHealthCheck503Response
     */
    'details'?: { [key: string]: RootControllerHealthCheck200ResponseInfoValue; };
}

/**
 * RootApi - axios parameter creator
 * @export
 */
export const RootApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootControllerGetHello: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get server health
         * @summary Health check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootControllerHealthCheck: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/health-check`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RootApi - functional programming interface
 * @export
 */
export const RootApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RootApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rootControllerGetHello(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rootControllerGetHello(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RootApi.rootControllerGetHello']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get server health
         * @summary Health check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rootControllerHealthCheck(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RootControllerHealthCheck200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rootControllerHealthCheck(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RootApi.rootControllerHealthCheck']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RootApi - factory interface
 * @export
 */
export const RootApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RootApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootControllerGetHello(options?: any): AxiosPromise<string> {
            return localVarFp.rootControllerGetHello(options).then((request) => request(axios, basePath));
        },
        /**
         * Get server health
         * @summary Health check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootControllerHealthCheck(options?: any): AxiosPromise<RootControllerHealthCheck200Response> {
            return localVarFp.rootControllerHealthCheck(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RootApi - object-oriented interface
 * @export
 * @class RootApi
 * @extends {BaseAPI}
 */
export class RootApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RootApi
     */
    public rootControllerGetHello(options?: RawAxiosRequestConfig) {
        return RootApiFp(this.configuration).rootControllerGetHello(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get server health
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RootApi
     */
    public rootControllerHealthCheck(options?: RawAxiosRequestConfig) {
        return RootApiFp(this.configuration).rootControllerHealthCheck(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * SitesApi - axios parameter creator
 * @export
 */
export const SitesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get kream product info (like title, price, image)
         * @summary Get kream product info
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sitesControllerGetProduct: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('sitesControllerGetProduct', 'id', id)
            const localVarPath = `/sites/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SitesApi - functional programming interface
 * @export
 */
export const SitesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SitesApiAxiosParamCreator(configuration)
    return {
        /**
         * Get kream product info (like title, price, image)
         * @summary Get kream product info
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sitesControllerGetProduct(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sitesControllerGetProduct(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SitesApi.sitesControllerGetProduct']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SitesApi - factory interface
 * @export
 */
export const SitesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SitesApiFp(configuration)
    return {
        /**
         * Get kream product info (like title, price, image)
         * @summary Get kream product info
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sitesControllerGetProduct(id: string, options?: any): AxiosPromise<ProductResponse> {
            return localVarFp.sitesControllerGetProduct(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SitesApi - object-oriented interface
 * @export
 * @class SitesApi
 * @extends {BaseAPI}
 */
export class SitesApi extends BaseAPI {
    /**
     * Get kream product info (like title, price, image)
     * @summary Get kream product info
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SitesApi
     */
    public sitesControllerGetProduct(id: string, options?: RawAxiosRequestConfig) {
        return SitesApiFp(this.configuration).sitesControllerGetProduct(id, options).then((request) => request(this.axios, this.basePath));
    }
}



