import { ClientResource } from './types';

class Members implements ClientResource {
  readonly client: ClientResource['client'];
  constructor(client: ClientResource['client']) {
    this.client = client;
  }
  list() {
    return this.client.request('members/');
  }
}
export default Members;
