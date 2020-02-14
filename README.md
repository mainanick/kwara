# Kwara Node.js Library
## Not Complete.

```ts
import Kwara from 'kwara';
const kwara = new Kwara('cid', 'csk');
const members = kwara.members.list(); // Promise<[Member]>
```

### Members

#### List Members
```ts
const members = kwara.members.list();
```
#### Show's a member's details
```ts
const member = kwara.members.get(memberId: string);
```
#### List a member's loans
```ts
const loans = kwara.members.loans(memberId: string);
```
#### Show's a member's loan
```ts
const loan = kwara.members.loan(memberId: string, loanId: string);
```
#### List a member's savings.
```ts
const savings = kwara.members.savings(memberId: string);
```
#### Show's a member's saving
```ts
const saving = kwara.members.saving(memberId: string, savingId: string);
```

### Loans

#### List available loan products
```ts
const loanProducts = kwara.loans.products()
```

####  Show an available loan product
```ts
const loanProduct = kwara.loans.get(<productID>)
```

### Events

| Event    |        When         |
| -------- | :-----------------: |
| request  | On request dispatch |
| response |     On response     |
| error    |      On errors      |

```ts
function onRequest(ev) {
  console.log(ev);
}
kwara.on('request', onRequest);
```
