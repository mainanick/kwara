```ts
import Kwara from 'kwara';
const kwara = new Kwara('cid', 'csk');
const members = kwara.members.list(); // Promise<[Member]>
const members = kwara.members.list((err, members){
  console.log(members)
}); // With callback
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
