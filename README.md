<img src="https://media.glassfy.io/banner_purple.png" />

[![npm](https://img.shields.io/npm/v/capacitor-plugin-glassfy)](https://www.npmjs.com/package/capacitor-plugin-glassfy)

> **Warning** <br/>
> These plugin is for Capacitor 6. For Capacitor 5, use the 3.x version.

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
* [`setLogLevel(...)`](#setloglevel)
* [`offerings()`](#offerings)
* [`purchaseHistory()`](#purchasehistory)
* [`permissions()`](#permissions)
* [`skuWithId(...)`](#skuwithid)
* [`skuWithIdAndStore(...)`](#skuwithidandstore)
* [`connectCustomSubscriber(...)`](#connectcustomsubscriber)
* [`connectPaddleLicenseKey(...)`](#connectpaddlelicensekey)
* [`connectGlassfyUniversalCode(...)`](#connectglassfyuniversalcode)
* [`setEmailUserProperty(...)`](#setemailuserproperty)
* [`setDeviceToken(...)`](#setdevicetoken)
* [`setExtraUserProperty(...)`](#setextrauserproperty)
* [`getUserProperty()`](#getuserproperty)
* [`purchaseSku(...)`](#purchasesku)
* [`restorePurchases()`](#restorepurchases)
* [`storeInfo()`](#storeinfo)
* [`setAttribution(...)`](#setattribution)
* [`setAttributions(...)`](#setattributions)
* [`_paywall(...)`](#_paywall)
* [`_closePaywall()`](#_closepaywall)
* [`_openUrl(...)`](#_openurl)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
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


### setLogLevel(...)

```typescript
setLogLevel(options: { logLevel: GLASSFY_LOGLEVEL; }) => Promise<void>
```

| Param         | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **`options`** | <code>{ logLevel: <a href="#glassfy_loglevel">GLASSFY_LOGLEVEL</a>; }</code> |

--------------------


### offerings()

```typescript
offerings() => Promise<GlassfyOfferings>
```

For more details, check the documentation https://docs.glassfy.io/dashboard/configure-offerings

**Returns:** <code>Promise&lt;<a href="#glassfyofferings">GlassfyOfferings</a>&gt;</code>

--------------------


### purchaseHistory()

```typescript
purchaseHistory() => Promise<GlassfyPurchasesHistory>
```

For more details, check the documentation https://docs.glassfy.io/dashboard/configure-offerings

**Returns:** <code>Promise&lt;<a href="#glassfypurchaseshistory">GlassfyPurchasesHistory</a>&gt;</code>

--------------------


### permissions()

```typescript
permissions() => Promise<GlassfyPermissions>
```

For more details, check the documentation https://docs.glassfy.io/dashboard/configure-permissions.html

**Returns:** <code>Promise&lt;<a href="#glassfypermissions">GlassfyPermissions</a>&gt;</code>

--------------------


### skuWithId(...)

```typescript
skuWithId(options: { identifier: string; }) => Promise<GlassfySku>
```

For more details, check the documentation https://docs.glassfy.io/dashboard/configure-products

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ identifier: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#glassfysku">GlassfySku</a>&gt;</code>

--------------------


### skuWithIdAndStore(...)

```typescript
skuWithIdAndStore(options: { identifier: string; store: GLASSFY_STORE; }) => Promise<GlassfySkuBase>
```

| Param         | Type                                                                                    |
| ------------- | --------------------------------------------------------------------------------------- |
| **`options`** | <code>{ identifier: string; store: <a href="#glassfy_store">GLASSFY_STORE</a>; }</code> |

**Returns:** <code>Promise&lt;<a href="#glassfyskubase">GlassfySkuBase</a>&gt;</code>

--------------------


### connectCustomSubscriber(...)

```typescript
connectCustomSubscriber(options: { subscriberId: string; }) => Promise<void>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ subscriberId: string; }</code> |

--------------------


### connectPaddleLicenseKey(...)

```typescript
connectPaddleLicenseKey(options: { licenseKey: string; force: boolean; }) => Promise<void>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ licenseKey: string; force: boolean; }</code> |

--------------------


### connectGlassfyUniversalCode(...)

```typescript
connectGlassfyUniversalCode(options: { universalCode: string; force: boolean; }) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ universalCode: string; force: boolean; }</code> |

--------------------


### setEmailUserProperty(...)

```typescript
setEmailUserProperty(options: { email: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ email: string; }</code> |

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
setExtraUserProperty(options: { extra: GlassfyExtraProperty; }) => Promise<void>
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code>{ extra: <a href="#glassfyextraproperty">GlassfyExtraProperty</a>; }</code> |

--------------------


### getUserProperty()

```typescript
getUserProperty() => Promise<GlassfyUserProperties>
```

**Returns:** <code>Promise&lt;<a href="#glassfyuserproperties">GlassfyUserProperties</a>&gt;</code>

--------------------


### purchaseSku(...)

```typescript
purchaseSku(options: { sku: GlassfySku; skuToUpgrade?: GlassfySku; replacementMode?: GLASSFY_REPLACEMENT_MODE; }) => Promise<GlassfyTransaction>
```

| Param         | Type                                                                                                                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ sku: <a href="#glassfysku">GlassfySku</a>; skuToUpgrade?: <a href="#glassfysku">GlassfySku</a>; replacementMode?: <a href="#glassfy_replacement_mode">GLASSFY_REPLACEMENT_MODE</a>; }</code> |

**Returns:** <code>Promise&lt;<a href="#glassfytransaction">GlassfyTransaction</a>&gt;</code>

--------------------


### restorePurchases()

```typescript
restorePurchases() => Promise<GlassfyPermissions>
```

**Returns:** <code>Promise&lt;<a href="#glassfypermissions">GlassfyPermissions</a>&gt;</code>

--------------------


### storeInfo()

```typescript
storeInfo() => Promise<GlassfyStoresInfo>
```

**Returns:** <code>Promise&lt;<a href="#glassfystoresinfo">GlassfyStoresInfo</a>&gt;</code>

--------------------


### setAttribution(...)

```typescript
setAttribution(options: { type: GLASSFY_ATTRIBUTION; value: string; }) => Promise<void>
```

| Param         | Type                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ type: <a href="#glassfy_attribution">GLASSFY_ATTRIBUTION</a>; value: string; }</code> |

--------------------


### setAttributions(...)

```typescript
setAttributions(options: { items: GlassfyAttributionItem[]; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ items: GlassfyAttributionItem[]; }</code> |

--------------------


### _paywall(...)

```typescript
_paywall(options: { remoteConfig: string; awaitLoading: boolean; }) => Promise<void>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code>{ remoteConfig: string; awaitLoading: boolean; }</code> |

--------------------


### _closePaywall()

```typescript
_closePaywall() => Promise<void>
```

--------------------


### _openUrl(...)

```typescript
_openUrl(options: { url: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

--------------------


### Interfaces


#### GlassfyVersion

| Prop          | Type                |
| ------------- | ------------------- |
| **`version`** | <code>string</code> |


#### GlassfyOfferings

| Prop      | Type                           |
| --------- | ------------------------------ |
| **`all`** | <code>GlassfyOffering[]</code> |


#### GlassfyOffering

| Prop             | Type                      |
| ---------------- | ------------------------- |
| **`offeringId`** | <code>string</code>       |
| **`skus`**       | <code>GlassfySku[]</code> |


#### GlassfySku

| Prop                          | Type                                                                      |
| ----------------------------- | ------------------------------------------------------------------------- |
| **`introductoryEligibility`** | <code><a href="#glassfy_elegibility">GLASSFY_ELEGIBILITY</a></code>       |
| **`promotionalEligibility`**  | <code><a href="#glassfy_elegibility">GLASSFY_ELEGIBILITY</a></code>       |
| **`extravars`**               | <code>{ [key: string]: string; }</code>                                   |
| **`product`**                 | <code><a href="#glassfyproduct">GlassfyProduct</a></code>                 |
| **`basePlanId`**              | <code>string</code>                                                       |
| **`offerId`**                 | <code>string</code>                                                       |
| **`discount`**                | <code><a href="#glassfyproductdiscount">GlassfyProductDiscount</a></code> |


#### GlassfyProduct

| Prop                    | Type                                                                      |
| ----------------------- | ------------------------------------------------------------------------- |
| **`title`**             | <code>string</code>                                                       |
| **`identifier`**        | <code>string</code>                                                       |
| **`description`**       | <code>string</code>                                                       |
| **`price`**             | <code>number</code>                                                       |
| **`currencyCode`**      | <code>string</code>                                                       |
| **`period`**            | <code>string</code>                                                       |
| **`introductoryPrice`** | <code><a href="#glassfyproductdiscount">GlassfyProductDiscount</a></code> |
| **`discounts`**         | <code>GlassfyProductDiscount[]</code>                                     |
| **`basePlanId`**        | <code>string</code>                                                       |


#### GlassfyProductDiscount

| Prop                  | Type                |
| --------------------- | ------------------- |
| **`identifier`**      | <code>string</code> |
| **`price`**           | <code>number</code> |
| **`currencyCode`**    | <code>string</code> |
| **`period`**          | <code>string</code> |
| **`numberOfPeriods`** | <code>number</code> |
| **`type`**            | <code>string</code> |


#### GlassfyPurchasesHistory

| Prop      | Type                                  |
| --------- | ------------------------------------- |
| **`all`** | <code>GlassfyPurchaseHistory[]</code> |


#### GlassfyPurchaseHistory

| Prop                       | Type                                                              |
| -------------------------- | ----------------------------------------------------------------- |
| **`productId`**            | <code>string</code>                                               |
| **`skuId`**                | <code>string</code>                                               |
| **`type`**                 | <code><a href="#glassfy_event_type">GLASSFY_EVENT_TYPE</a></code> |
| **`store`**                | <code><a href="#glassfy_store">GLASSFY_STORE</a></code>           |
| **`purchaseDate`**         | <code>string</code>                                               |
| **`expireDate`**           | <code>string</code>                                               |
| **`transactionId`**        | <code>string</code>                                               |
| **`subscriberId`**         | <code>string</code>                                               |
| **`currencyCode`**         | <code>string</code>                                               |
| **`countryCode`**          | <code>string</code>                                               |
| **`isInIntroOfferPeriod`** | <code>boolean</code>                                              |
| **`promotionalOfferId`**   | <code>string</code>                                               |
| **`offerCodeRefName`**     | <code>string</code>                                               |
| **`licenseCode`**          | <code>string</code>                                               |
| **`webOrderLineItemId`**   | <code>string</code>                                               |


#### GlassfyPermissions

| Prop                             | Type                             |
| -------------------------------- | -------------------------------- |
| **`installationId`**             | <code>string</code>              |
| **`subscriberId`**               | <code>string</code>              |
| **`originalApplicationVersion`** | <code>string</code>              |
| **`originalApplicationDate`**    | <code>string</code>              |
| **`all`**                        | <code>GlassfyPermission[]</code> |


#### GlassfyPermission

| Prop                  | Type                                                                |
| --------------------- | ------------------------------------------------------------------- |
| **`permissionId`**    | <code>string</code>                                                 |
| **`entitlement`**     | <code><a href="#glassfy_entitlement">GLASSFY_ENTITLEMENT</a></code> |
| **`isValid`**         | <code>boolean</code>                                                |
| **`expireDate`**      | <code>string</code>                                                 |
| **`accountableSkus`** | <code>GlassfyAccountableSku[]</code>                                |


#### GlassfyAccountableSku

| Prop                       | Type                 |
| -------------------------- | -------------------- |
| **`isInIntroOfferPeriod`** | <code>boolean</code> |
| **`isInTrialPeriod`**      | <code>boolean</code> |
| **`basePlanId`**           | <code>string</code>  |
| **`offerId`**              | <code>string</code>  |


#### GlassfySkuBase

| Prop            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| **`skuId`**     | <code>string</code>                                     |
| **`productId`** | <code>string</code>                                     |
| **`store`**     | <code><a href="#glassfy_store">GLASSFY_STORE</a></code> |


#### GlassfyUserProperties

| Prop        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| **`email`** | <code>string</code>                                                   |
| **`token`** | <code>boolean</code>                                                  |
| **`extra`** | <code><a href="#glassfyextraproperty">GlassfyExtraProperty</a></code> |


#### GlassfyTransaction

| Prop                   | Type                                                              |
| ---------------------- | ----------------------------------------------------------------- |
| **`productId`**        | <code>string</code>                                               |
| **`receiptValidated`** | <code>boolean</code>                                              |
| **`permissions`**      | <code><a href="#glassfypermissions">GlassfyPermissions</a></code> |


#### GlassfyStoresInfo

| Prop      | Type                                                                                                                              |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **`all`** | <code>(<a href="#glassfystoreinfo">GlassfyStoreInfo</a> \| <a href="#glassfypaddlestoreinfo">GlassfyPaddleStoreInfo</a>)[]</code> |


#### GlassfyStoreInfo

| Prop            | Type                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`store`**     | <code><a href="#exclude">Exclude</a>&lt;<a href="#glassfy_store">GLASSFY_STORE</a>, <a href="#glassfy_store">GLASSFY_STORE.Paddle</a>&gt;</code> |
| **`extravars`** | <code>{ [key: string]: string; }</code>                                                                                                          |


#### GlassfyPaddleStoreInfo

| Prop                 | Type                                                           |
| -------------------- | -------------------------------------------------------------- |
| **`store`**          | <code><a href="#glassfy_store">GLASSFY_STORE.Paddle</a></code> |
| **`extravars`**      | <code>{ [key: string]: string; }</code>                        |
| **`userid`**         | <code>string</code>                                            |
| **`planId`**         | <code>string</code>                                            |
| **`subscriptionId`** | <code>string</code>                                            |
| **`updateURL`**      | <code>string</code>                                            |
| **`cancelURL`**      | <code>string</code>                                            |


#### GlassfyAttributionItem

| Prop        | Type                                                                |
| ----------- | ------------------------------------------------------------------- |
| **`type`**  | <code><a href="#glassfy_attribution">GLASSFY_ATTRIBUTION</a></code> |
| **`value`** | <code>string</code>                                                 |


### Type Aliases


#### GlassfyExtraProperty

<code>{ [key: string]: string }</code>


#### Exclude

<a href="#exclude">Exclude</a> from T those types that are assignable to U

<code>T extends U ? never : T</code>


### Enums


#### GLASSFY_LOGLEVEL

| Members     | Value          |
| ----------- | -------------- |
| **`OFF`**   | <code>0</code> |
| **`ERROR`** | <code>1</code> |
| **`DEBUG`** | <code>2</code> |
| **`INFO`**  | <code>3</code> |
| **`ALL`**   | <code>3</code> |


#### GLASSFY_ELEGIBILITY

| Members            | Value           |
| ------------------ | --------------- |
| **`ELEGIBLE`**     | <code>1</code>  |
| **`NON_ELEGIBLE`** | <code>-1</code> |
| **`UNKNOWN`**      | <code>0</code>  |


#### GLASSFY_EVENT_TYPE

| Members                      | Value             |
| ---------------------------- | ----------------- |
| **`InitialBuy`**             | <code>5001</code> |
| **`Restarted`**              | <code>5002</code> |
| **`Renewed`**                | <code>5003</code> |
| **`Expired`**                | <code>5004</code> |
| **`DidChangeRenewalStatus`** | <code>5005</code> |
| **`IsInBillingRetryPeriod`** | <code>5006</code> |
| **`ProductChange`**          | <code>5007</code> |
| **`InAppPurchase`**          | <code>5008</code> |
| **`Refund`**                 | <code>5009</code> |
| **`Paused`**                 | <code>5010</code> |
| **`Resumed`**                | <code>5011</code> |
| **`ConnectLicense`**         | <code>5012</code> |
| **`DisconnectLicense`**      | <code>5013</code> |


#### GLASSFY_STORE

| Members         | Value          |
| --------------- | -------------- |
| **`AppStore`**  | <code>1</code> |
| **`PlayStore`** | <code>2</code> |
| **`Paddle`**    | <code>3</code> |
| **`Stripe`**    | <code>4</code> |
| **`Glassfy`**   | <code>5</code> |


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


#### GLASSFY_REPLACEMENT_MODE

| Members                        | Value          |
| ------------------------------ | -------------- |
| **`UNKNOWN_REPLACEMENT_MODE`** | <code>0</code> |
| **`WITH_TIME_PRORATION`**      | <code>1</code> |
| **`CHARGE_PRORATED_PRICE`**    | <code>2</code> |
| **`WITHOUT_PRORATION`**        | <code>3</code> |
| **`CHARGE_FULL_PRICE`**        | <code>5</code> |
| **`DEFERRED`**                 | <code>6</code> |


#### GLASSFY_ATTRIBUTION

| Members           | Value          |
| ----------------- | -------------- |
| **`AdjustID`**    | <code>1</code> |
| **`AppsFlyerID`** | <code>2</code> |
| **`IP`**          | <code>3</code> |
| **`IDFA`**        | <code>4</code> |
| **`IDFV`**        | <code>5</code> |
| **`GAID`**        | <code>6</code> |
| **`ASID`**        | <code>7</code> |
| **`AID`**         | <code>8</code> |

</docgen-api>
