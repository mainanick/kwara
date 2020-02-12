[kwara](../README.md) › [Globals](../globals.md) › [Kwara](kwara.md)

# Class: Kwara

## Hierarchy

* **Kwara**

## Implements

* [Client](../interfaces/client.md)

## Index

### Constructors

* [constructor](kwara.md#constructor)

### Properties

* [clientId](kwara.md#clientid)
* [clientSecret](kwara.md#clientsecret)
* [emitter](kwara.md#emitter)
* [live](kwara.md#live)
* [members](kwara.md#members)
* [options](kwara.md#options)

### Accessors

* [url](kwara.md#url)

### Methods

* [getContentType](kwara.md#getcontenttype)
* [on](kwara.md#on)
* [request](kwara.md#request)
* [requestAccessToken](kwara.md#requestaccesstoken)
* [requestGet](kwara.md#requestget)
* [requestPost](kwara.md#requestpost)

## Constructors

###  constructor

\+ **new Kwara**(`clientId`: string, `clientSecret`: string, `live`: boolean, `clientOptions`: object): *[Kwara](kwara.md)*

Defined in index.ts:17

**Parameters:**

▪ **clientId**: *string*

▪ **clientSecret**: *string*

▪`Default value`  **live**: *boolean*= false

▪`Default value`  **clientOptions**: *object*= { version: DEFAULT_API_VERSION }

Name | Type | Default |
------ | ------ | ------ |
`version` | string | DEFAULT_API_VERSION |

**Returns:** *[Kwara](kwara.md)*

## Properties

###  clientId

• **clientId**: *string*

Defined in index.ts:12

___

###  clientSecret

• **clientSecret**: *string*

Defined in index.ts:13

___

###  emitter

• **emitter**: *EventEmitter*

Defined in index.ts:15

___

###  live

• **live**: *boolean*

Defined in index.ts:14

___

###  members

• **members**: *[Members](members.md)*

*Implementation of [Client](../interfaces/client.md).[members](../interfaces/client.md#members)*

Defined in index.ts:16

___

###  options

• **options**: *Client["options"]*

*Implementation of [Client](../interfaces/client.md).[options](../interfaces/client.md#options)*

Defined in index.ts:17

## Accessors

###  url

• **get url**(): *"api.kwara.com" | "api.sandbox.kwara.com"*

Defined in index.ts:32

**Returns:** *"api.kwara.com" | "api.sandbox.kwara.com"*

## Methods

###  getContentType

▸ **getContentType**(): *string*

Defined in index.ts:41

**Returns:** *string*

___

###  on

▸ **on**(`event`: string, `listeners`: function): *void*

Defined in index.ts:38

**Parameters:**

▪ **event**: *string*

▪ **listeners**: *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  request

▸ **request**(`uri`: string, `requestOptions`: undefined): *Promise‹Response‹››*

Defined in index.ts:63

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`uri` | string | - |
`requestOptions` | undefined | undefined |

**Returns:** *Promise‹Response‹››*

___

###  requestAccessToken

▸ **requestAccessToken**(): *Promise‹Response‹››*

Defined in index.ts:44

**Returns:** *Promise‹Response‹››*

___

###  requestGet

▸ **requestGet**(`uri`: string, `requestOptions`: object): *Promise‹Response‹››*

Defined in index.ts:66

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`uri` | string | - |
`requestOptions` | object | {} |

**Returns:** *Promise‹Response‹››*

___

###  requestPost

▸ **requestPost**(`uri`: string, `requestOptions`: object): *Promise‹Response‹››*

Defined in index.ts:69

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`uri` | string | - |
`requestOptions` | object | {} |

**Returns:** *Promise‹Response‹››*
