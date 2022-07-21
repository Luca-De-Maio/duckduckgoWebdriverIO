import { BASE_URI } from '../src/APIconfig';
import supertest, { Response } from "supertest";

const request = supertest(BASE_URI)

export const makeGETCall = async (endpoint: string, payload?: object, headers?: object): Promise<Response> => {
    if (payload && headers) return request.get(endpoint).set(headers).send(payload);
    else if (payload) return request.get(endpoint).send(payload);
    else return request.get(endpoint);
}