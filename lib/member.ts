import { ClientResource } from './types';

class Members implements ClientResource {
  readonly client: ClientResource['client'];
  constructor(client: ClientResource['client']) {
    this.client = client;
  }
  list() {
    return this.client.requestGet('/members/');
  }
  get(memberId: string) {
    return this.client.requestGet(`/members/${memberId}`);
  }

  loans(memberId: string) {
    return this.client.requestGet(`/members/${memberId}/loans`);
  }

  loan(memberId: string, loanId: string) {
    return this.client.requestGet(`/members/${memberId}/loans/${loanId}`);
  }
  savings(memberId: string) {
    return this.client.requestGet(`/members/${memberId}/savings`);
  }

  saving(memberId: string, savingId: string) {
    return this.client.requestGet(`/members/${memberId}/savings/${savingId}`);
  }
}
export default Members;
