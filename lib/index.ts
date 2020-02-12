import { EventEmitter } from 'events';
import fetch, { RequestInit } from 'node-fetch';

import Members from './member';
import { Client } from './types';

export const DEFAULT_API_URL = 'api.kwara.com';
export const DEFAULT_SANBOX_API_URL = 'api.sandbox.kwara.com';
export const DEFAULT_BASE_PATH = '/v1/';
export const DEFAULT_API_VERSION = null;

class Kwara implements Client {
  public clientId: string;
  public clientSecret: string;
  public live: boolean;
  public emitter: EventEmitter;
  public members: Members;
  public options: Client['options'];

  constructor(
    clientId: string,
    clientSecret: string,
    live: boolean = false,
    clientOptions = { version: 'v1' }
  ) {
    this.options = clientOptions;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.live = live;
    this.emitter = new EventEmitter();
    this.members = new Members(this);
  }
  get url() {
    if (this.live) {
      return DEFAULT_API_URL;
    }
    return DEFAULT_SANBOX_API_URL;
  }
  on(event: string, listeners: (...args: any[]) => any) {
    this.emitter.on(event, listeners);
  }
  getContentType() {
    return `application/vnd.kwara.${this.options.version}+json`;
  }
  requestAccessToken() {
    const contentType = this.getContentType();
    const body = {
      grant_type: 'client_credentials',
      client_id: this.clientId,
      client_secret: this.clientSecret,
    };
    this.emitter.emit('request', { type: 'accesstoken', ...body });
    const res = fetch(this.url + '/oauth/token', {
      method: 'POST',
      headers: {
        Accept: contentType,
        'Content-Type': contentType,
      },
      body: JSON.stringify(body),
    });
    return res;
  }

  request(
    uri: string = 'POST',
    requestOptions: RequestInit | undefined = undefined
  ) {
    return fetch(uri, requestOptions);
  }
}

export default Kwara;
