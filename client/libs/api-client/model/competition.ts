/**
 * Huculský šampionať API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Horse } from './horse';
import { Arbiter } from './arbiter';
import { Rider } from './rider';
import { Result } from './result';


export interface Competition { 
    id?: number;
    name?: string | null;
    description?: string | null;
    date?: string | null;
    arbiter?: Arbiter;
    results?: Array<Result> | null;
    riders?: Array<Rider> | null;
    horses?: Array<Horse> | null;
}

