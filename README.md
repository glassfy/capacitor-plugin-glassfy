<img src="https://media.glassfy.io/banner_purple.png" />

### CapacitorJS Glassfy Plugin

[Glassfy](https://glassfy.io/) is a subscription revenue optimisation infrastructure for mobile applications.

### Getting Started

Check the documentation at [docs.glassfy.io](https://docs.glassfy.io/get-started/quick-start) to learn details on implementing and using Glassfy SDK.

---

## Plugin Install

```bash
npm install capacitor-plugin-glassfy
npx cap sync
```

## Build plugin and example

be sure to have ionic cli installed following instructions [here](https://ionicframework.com/docs/intro/cli)

```

npm install
npm run build
cd example
npm install
ionic capacitor sync ios
ionic capacitor open ios
```

## API

<docgen-index>

* [`sdkVersion()`](#sdkversion)
* [`initialize(...)`](#initialize)
* [`offerings()`](#offerings)
* [`skuWithIdentifier(...)`](#skuwithidentifier)
* [`login(...)`](#login)
* [`logout()`](#logout)
* [`permissions()`](#permissions)
* [`purchaseSku(...)`](#purchasesku)
* [`restorePurchases()`](#restorepurchases)
* [`setLogLevel(...)`](#setloglevel)
* [`setDeviceToken(...)`](#setdevicetoken)
* [`setExtraUserProperty(...)`](#setextrauserproperty)
* [`getUserProperty()`](#getuserproperty)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### sdkVersion()

```typescript
sdkVersion() => Promise<GlassfyVersion>
```

**Returns:** <code>Promise&lt;<a href="#glassfyversion">GlassfyVersion</a>&gt;</code>

--------------------


### initialize(...)

```typescript
initialize(options: { apiKey: string; watcherMode: boolean; }) => Promise<void>
```

For more details, follow instruction at https://docs.glassfy.io/get-started/configuration

| Param         | Type                                                   |
| ------------- | ------------------------------------------------------ |
| **`options`** | <code>{ apiKey: string; watcherMode: boolean; }</code> |

--------------------


### offerings()

```typescript
offerings() => Promise<GlassfyOfferings>
```

For more details, check the documentation https://docs.glassfy.io/dashboard/configure-offerings

**Returns:** <code>Promise&lt;<a href="#glassfyofferings">GlassfyOfferings</a>&gt;</code>

--------------------


### skuWithIdentifier(...)

```typescript
skuWithIdentifier(options: { identifier: string; }) => Promise<GlassfySku>
```

For more details, check the documentation https://docs.glassfy.io/dashboard/configure-products

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ identifier: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#glassfysku">GlassfySku</a>&gt;</code>

--------------------


### login(...)

```typescript
login(options: { userid: string; }) => Promise<void>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ userid: string; }</code> |

--------------------


### logout()

```typescript
logout() => Promise<void>
```

--------------------


### permissions()

```typescript
permissions() => Promise<GlassfyPermissions>
```

For more details, check the documentation https://docs.glassfy.io/dashboard/configure-permissions.html

**Returns:** <code>Promise&lt;<a href="#glassfypermissions">GlassfyPermissions</a>&gt;</code>

--------------------


### purchaseSku(...)

```typescript
purchaseSku(options: { sku: GlassfySku; }) => Promise<GlassfyTransaction>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code>{ sku: <a href="#glassfysku">GlassfySku</a>; }</code> |

**Returns:** <code>Promise&lt;<a href="#glassfytransaction">GlassfyTransaction</a>&gt;</code>

--------------------


### restorePurchases()

```typescript
restorePurchases() => Promise<GlassfyPermissions>
```

**Returns:** <code>Promise&lt;<a href="#glassfypermissions">GlassfyPermissions</a>&gt;</code>

--------------------


### setLogLevel(...)

```typescript
setLogLevel(options: { logLevel: GLASSFY_LOGLEVEL; }) => Promise<void>
```

| Param         | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **`options`** | <code>{ logLevel: <a href="#glassfy_loglevel">GLASSFY_LOGLEVEL</a>; }</code> |

--------------------


### setDeviceToken(...)

```typescript
setDeviceToken(options: { token: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ token: string; }</code> |

--------------------


### setExtraUserProperty(...)

```typescript
setExtraUserProperty(options: { extraProperty: [string: any]; }) => Promise<void>
```

| Param         | Type                                           |
| ------------- | ---------------------------------------------- |
| **`options`** | <code>{ extraProperty: [string: any]; }</code> |

--------------------


### getUserProperty()

```typescript
getUserProperty() => Promise<void>
```

--------------------


### Interfaces


#### GlassfyVersion

| Prop          | Type                |
| ------------- | ------------------- |
| **`version`** | <code>string</code> |


#### GlassfyOfferings

| Prop      | Type                           |
| --------- | ------------------------------ |
| **`all`** | <code>[GlassfyOffering]</code> |


#### GlassfyOffering

| Prop             | Type                      |
| ---------------- | ------------------------- |
| **`identifier`** | <code>string</code>       |
| **`skus`**       | <code>[GlassfySku]</code> |


#### GlassfySku

| Prop                          | Type                                                                  |
| ----------------------------- | --------------------------------------------------------------------- |
| **`identifier`**              | <code>string</code>                                                   |
| **`productId`**               | <code>string</code>                                                   |
| **`introductoryEligibility`** | <code><a href="#glassfy_eleggibility">GLASSFY_ELEGGIBILITY</a></code> |
| **`promotionalEligibility`**  | <code><a href="#glassfy_eleggibility">GLASSFY_ELEGGIBILITY</a></code> |
| **`extravars`**               | <code>{ [key: string]: string; }</code>                               |


#### GlassfyPermissions

| Prop                             | Type                             |
| -------------------------------- | -------------------------------- |
| **`installationId`**             | <code>string</code>              |
| **`subscriberId`**               | <code>string</code>              |
| **`originalApplicationVersion`** | <code>string</code>              |
| **`originalApplicationDate`**    | <code>string</code>              |
| **`all`**                        | <code>[GlassfyPermission]</code> |


#### GlassfyPermission

| Prop                       | Type                                                                |
| -------------------------- | ------------------------------------------------------------------- |
| **`permissionIdentifier`** | <code>string</code>                                                 |
| **`entitlement`**          | <code><a href="#glassfy_entitlement">GLASSFY_ENTITLEMENT</a></code> |
| **`isValid`**              | <code>boolean</code>                                                |
| **`expireDate`**           | <code>string</code>                                                 |
| **`accountableSkus`**      | <code>[string]</code>                                               |


#### GlassfyTransaction

| Prop                    | Type                                                              |
| ----------------------- | ----------------------------------------------------------------- |
| **`productIdentifier`** | <code>string</code>                                               |
| **`receiptValidated`**  | <code>boolean</code>                                              |
| **`permissions`**       | <code><a href="#glassfypermissions">GlassfyPermissions</a></code> |


### Enums


#### GLASSFY_ELEGGIBILITY

| Members            | Value           |
| ------------------ | --------------- |
| **`ELEGIBLE`**     | <code>1</code>  |
| **`NON_ELEGIBLE`** | <code>-1</code> |
| **`UNKNOWN`**      | <code>0</code>  |


#### GLASSFY_ENTITLEMENT

| Members                    | Value           |
| -------------------------- | --------------- |
| **`NEVERBUY`**             | <code>-9</code> |
| **`OTHERREFUND`**          | <code>-8</code> |
| **`ISSUEREFUND`**          | <code>-7</code> |
| **`UPGRADED`**             | <code>-6</code> |
| **`EXPIREDVOLUNTARY`**     | <code>-5</code> |
| **`PRODUCTNOTAVAILABLE`**  | <code>-4</code> |
| **`FAILTOACCEPTINCREASE`** | <code>-3</code> |
| **`EXPIREDFROMBILLING`**   | <code>-2</code> |
| **`INRETRY`**              | <code>-1</code> |
| **`MISSINGINFO`**          | <code>0</code>  |
| **`EXPIREDINGRACE`**       | <code>1</code>  |
| **`OFFPLATFORM`**          | <code>2</code>  |
| **`NONRENEWING`**          | <code>3</code>  |
| **`AUTORENEWOFF`**         | <code>4</code>  |
| **`AUTORENEWON`**          | <code>5</code>  |


#### GLASSFY_LOGLEVEL

| Members             | Value                                                   |
| ------------------- | ------------------------------------------------------- |
| **`LOGLEVELOFF`**   | <code>0</code>                                          |
| **`LOGLEVELERROR`** | <code>LOGLEVELOFF \| GLASSFY_LOGFLAG.FLAGERROR</code>   |
| **`LOGLEVELDEBUG`** | <code>LOGLEVELERROR \| GLASSFY_LOGFLAG.FLAGDEBUG</code> |
| **`LOGLEVELINFO`**  | <code>LOGLEVELDEBUG \| GLASSFY_LOGFLAG.FLAGINFO</code>  |

</docgen-api>
