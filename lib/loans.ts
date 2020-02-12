import { ClientResource } from './types';

class Loans implements ClientResource {
  readonly client: ClientResource['client'];
  constructor(client: ClientResource['client']) {
    this.client = client;
  }
  products() {
    return this.client.requestGet('/loan_products/');
  }
  get(loanProductId: string) {
    return this.client.requestGet(`/loan_products/${loanProductId}`, {
      method: 'GET',
    });
  }
}
export default Loans;
