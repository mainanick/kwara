import { Response } from 'node-fetch';

export interface Client {
  options: {
    version?: string;
  };
  request(
    uri: string,
    requestOptions?: RequestInit | undefined
  ): Promise<Response>;
  requestGet(
    uri: string,
    requestOptions?: RequestInit | undefined
  ): Promise<Response>;
  requestPost(
    uri: string,
    requestOptions?: RequestInit | undefined
  ): Promise<Response>;
  members: ClientResource;
  [k: string]: any;
}

export interface ClientResource {
  client: Client;
}
