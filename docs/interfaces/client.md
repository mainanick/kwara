[kwara](../README.md) › [Globals](../globals.md) › [Client](client.md)

# Interface: Client

## Hierarchy

* **Client**

## Implemented by

* [Kwara](../classes/kwara.md)

## Indexable

* \[ **k**: *string*\]: any

## Index

### Properties

* [members](client.md#members)
* [options](client.md#options)

### Methods

* [request](client.md#request)
* [requestGet](client.md#requestget)
* [requestPost](client.md#requestpost)

## Properties

###  members

• **members**: *[ClientResource](clientresource.md)*

Defined in types.ts:19

___

###  options

• **options**: *object*

Defined in types.ts:4

#### Type declaration:

* **version**? : *undefined | string*

## Methods

###  request

▸ **request**(`uri`: string, `requestOptions?`: RequestInit | undefined): *Promise‹Response›*

Defined in types.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`requestOptions?` | RequestInit &#124; undefined |

**Returns:** *Promise‹Response›*

___

###  requestGet

▸ **requestGet**(`uri`: string, `requestOptions?`: RequestInit | undefined): *Promise‹Response›*

Defined in types.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`requestOptions?` | RequestInit &#124; undefined |

**Returns:** *Promise‹Response›*

___

###  requestPost

▸ **requestPost**(`uri`: string, `requestOptions?`: RequestInit | undefined): *Promise‹Response›*

Defined in types.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`requestOptions?` | RequestInit &#124; undefined |

**Returns:** *Promise‹Response›*
