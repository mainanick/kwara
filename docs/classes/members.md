[kwara](../README.md) › [Globals](../globals.md) › [Members](members.md)

# Class: Members

## Hierarchy

* **Members**

## Implements

* [ClientResource](../interfaces/clientresource.md)

## Index

### Constructors

* [constructor](members.md#constructor)

### Properties

* [client](members.md#client)

### Methods

* [get](members.md#get)
* [list](members.md#list)
* [loan](members.md#loan)
* [loans](members.md#loans)
* [saving](members.md#saving)
* [savings](members.md#savings)

## Constructors

###  constructor

\+ **new Members**(`client`: ClientResource["client"]): *[Members](members.md)*

*Defined in [member.ts:4](https://github.com/mainanick/kwara/blob/286defe/lib/member.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | ClientResource["client"] |

**Returns:** *[Members](members.md)*

## Properties

###  client

• **client**: *ClientResource["client"]*

*Implementation of [ClientResource](../interfaces/clientresource.md).[client](../interfaces/clientresource.md#client)*

*Defined in [member.ts:4](https://github.com/mainanick/kwara/blob/286defe/lib/member.ts#L4)*

## Methods

###  get

▸ **get**(`memberId`: string): *Promise‹Response‹››*

*Defined in [member.ts:17](https://github.com/mainanick/kwara/blob/286defe/lib/member.ts#L17)*

Show's a member's details

**Parameters:**

Name | Type |
------ | ------ |
`memberId` | string |

**Returns:** *Promise‹Response‹››*

___

###  list

▸ **list**(): *Promise‹Response‹››*

*Defined in [member.ts:11](https://github.com/mainanick/kwara/blob/286defe/lib/member.ts#L11)*

List Members

**Returns:** *Promise‹Response‹››*

___

###  loan

▸ **loan**(`memberId`: string, `loanId`: string): *Promise‹Response‹››*

*Defined in [member.ts:29](https://github.com/mainanick/kwara/blob/286defe/lib/member.ts#L29)*

Show's a member's loan

**Parameters:**

Name | Type |
------ | ------ |
`memberId` | string |
`loanId` | string |

**Returns:** *Promise‹Response‹››*

___

###  loans

▸ **loans**(`memberId`: string): *Promise‹Response‹››*

*Defined in [member.ts:23](https://github.com/mainanick/kwara/blob/286defe/lib/member.ts#L23)*

List a member's loans

**Parameters:**

Name | Type |
------ | ------ |
`memberId` | string |

**Returns:** *Promise‹Response‹››*

___

###  saving

▸ **saving**(`memberId`: string, `savingId`: string): *Promise‹Response‹››*

*Defined in [member.ts:41](https://github.com/mainanick/kwara/blob/286defe/lib/member.ts#L41)*

Show's a member's saving

**Parameters:**

Name | Type |
------ | ------ |
`memberId` | string |
`savingId` | string |

**Returns:** *Promise‹Response‹››*

___

###  savings

▸ **savings**(`memberId`: string): *Promise‹Response‹››*

*Defined in [member.ts:35](https://github.com/mainanick/kwara/blob/286defe/lib/member.ts#L35)*

List a member's savings.

**Parameters:**

Name | Type |
------ | ------ |
`memberId` | string |

**Returns:** *Promise‹Response‹››*
