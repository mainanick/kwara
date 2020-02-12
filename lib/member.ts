import { ClientResource } from './types';

class Members implements ClientResource {
  readonly client: ClientResource['client'];
  constructor(client: ClientResource['client']) {
    this.client = client;
  }
  /**
   * List Members
   */
  list() {
    return this.client.requestGet('/members/');
  }
  /**
   * Show's a member's details
   */
  get(memberId: string) {
    return this.client.requestGet(`/members/${memberId}`);
  }
  /**
   * List a member's loans
   */
  loans(memberId: string) {
    return this.client.requestGet(`/members/${memberId}/loans`);
  }
  /**
   * Show's a member's loan
   */
  loan(memberId: string, loanId: string) {
    return this.client.requestGet(`/members/${memberId}/loans/${loanId}`);
  }
  /**
   * List a member's savings.
   */
  savings(memberId: string) {
    return this.client.requestGet(`/members/${memberId}/savings`);
  }
  /**
   * Show's a member's saving
   */
  saving(memberId: string, savingId: string) {
    return this.client.requestGet(`/members/${memberId}/savings/${savingId}`);
  }
}
export default Members;
