[kwara](../README.md) › [Globals](../globals.md) › [Loans](loans.md)

# Class: Loans

## Hierarchy

* **Loans**

## Implements

* [ClientResource](../interfaces/clientresource.md)

## Index

### Constructors

* [constructor](loans.md#constructor)

### Properties

* [client](loans.md#client)

### Methods

* [get](loans.md#get)
* [products](loans.md#products)

## Constructors

###  constructor

\+ **new Loans**(`client`: ClientResource["client"]): *[Loans](loans.md)*

Defined in loans.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`client` | ClientResource["client"] |

**Returns:** *[Loans](loans.md)*

## Properties

###  client

• **client**: *ClientResource["client"]*

*Implementation of [ClientResource](../interfaces/clientresource.md).[client](../interfaces/clientresource.md#client)*

Defined in loans.ts:4

## Methods

###  get

▸ **get**(`loanProductId`: string): *Promise‹Response‹››*

Defined in loans.ts:17

Show an available loan product

**Parameters:**

Name | Type |
------ | ------ |
`loanProductId` | string |

**Returns:** *Promise‹Response‹››*

___

###  products

▸ **products**(): *Promise‹Response‹››*

Defined in loans.ts:11

List available loan products

**Returns:** *Promise‹Response‹››*
