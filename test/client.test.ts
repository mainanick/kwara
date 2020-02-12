import Kwara from '../lib';
import Members from '../lib/member';

function getNewClient() {
  return new Kwara('cid', 'csk');
}

test('', () => {
  const kwara = getNewClient();
  expect(kwara.clientId).toEqual('cid');
});

describe('Member', () => {
  test('Client has members', () => {
    const kwara = getNewClient();
    expect(kwara.members).toBeInstanceOf(Members);
  });
});
