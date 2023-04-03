<img src="https://media.glassfy.io/banner_purple.png" />

[![npm](https://img.shields.io/npm/v/capacitor-plugin-glassfy)](https://www.npmjs.com/package/capacitor-plugin-glassfy)

> **Warning** <br/>
> These plugin is for Capacitor 4. For Capacitor 3, use the 1.x version.

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
* [`purchaseHistory()`](#purchasehistory)
* [`purchaseSku(...)`](#purchasesku)
* [`restorePurchases()`](#restorepurchases)
* [`setAttribution(...)`](#setattribution)
* [`setAttributions(...)`](#setattributions)
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
connectCustomSubscriber(options: { subscriberId: string; }) => Promise<GlassfySku>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ subscriberId: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#glassfysku">GlassfySku</a>&gt;</code>

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

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
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
purchaseSku(options: { sku: GlassfySku; skuToUpgrade?: GlassfySku; prorationMode?: GLASSFY_PRORATION_MODE; }) => Promise<GlassfyTransaction>
```

| Param         | Type                                                                                                                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ sku: <a href="#glassfysku">GlassfySku</a>; skuToUpgrade?: <a href="#glassfysku">GlassfySku</a>; prorationMode?: <a href="#glassfy_proration_mode">GLASSFY_PRORATION_MODE</a>; }</code> |

**Returns:** <code>Promise&lt;<a href="#glassfytransaction">GlassfyTransaction</a>&gt;</code>

--------------------


### restorePurchases()

```typescript
restorePurchases() => Promise<GlassfyPermissions>
```

**Returns:** <code>Promise&lt;<a href="#glassfypermissions">GlassfyPermissions</a>&gt;</code>

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

| Prop                          | Type                                                                  |
| ----------------------------- | --------------------------------------------------------------------- |
| **`introductoryEligibility`** | <code><a href="#glassfy_eleggibility">GLASSFY_ELEGGIBILITY</a></code> |
| **`promotionalEligibility`**  | <code><a href="#glassfy_eleggibility">GLASSFY_ELEGGIBILITY</a></code> |
| **`extravars`**               | <code>{ [key: string]: string; }</code>                               |
| **`product`**                 | <code><a href="#glassfyproduct">GlassfyProduct</a></code>             |


#### GlassfyProduct

| Prop                    | Type                                                                      |
| ----------------------- | ------------------------------------------------------------------------- |
| **`title`**             | <code>string</code>                                                       |
| **`identifier`**        | <code>string</code>                                                       |
| **`description`**       | <code>string</code>                                                       |
| **`price`**             | <code>number</code>                                                       |
| **`currencyCode`**      | <code>string</code>                                                       |
| **`introductoryPrice`** | <code><a href="#glassfyproductdiscount">GlassfyProductDiscount</a></code> |
| **`discounts`**         | <code>GlassfyProductDiscount[]</code>                                     |


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


#### GlassfySkuBase

| Prop            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| **`skuId`**     | <code>string</code>                                     |
| **`productId`** | <code>string</code>                                     |
| **`store`**     | <code><a href="#glassfy_store">GLASSFY_STORE</a></code> |


#### GlassfyUserProperties

| Prop        | Type                                                                  |
| ----------- | --------------------------------------------------------------------- |
| **`email`** | <code><a href="#string">String</a></code>                             |
| **`token`** | <code>boolean</code>                                                  |
| **`extra`** | <code><a href="#glassfyextraproperty">GlassfyExtraProperty</a></code> |


#### String

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

| Prop         | Type                | Description                                                  |
| ------------ | ------------------- | ------------------------------------------------------------ |
| **`length`** | <code>number</code> | Returns the length of a <a href="#string">String</a> object. |

| Method                | Signature                                                                                                                      | Description                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**          | () =&gt; string                                                                                                                | Returns a string representation of a string.                                                                                                  |
| **charAt**            | (pos: number) =&gt; string                                                                                                     | Returns the character at the specified index.                                                                                                 |
| **charCodeAt**        | (index: number) =&gt; number                                                                                                   | Returns the Unicode value of the character at the specified location.                                                                         |
| **concat**            | (...strings: string[]) =&gt; string                                                                                            | Returns a string that contains the concatenation of two or more strings.                                                                      |
| **indexOf**           | (searchString: string, position?: number \| undefined) =&gt; number                                                            | Returns the position of the first occurrence of a substring.                                                                                  |
| **lastIndexOf**       | (searchString: string, position?: number \| undefined) =&gt; number                                                            | Returns the last occurrence of a substring in the string.                                                                                     |
| **localeCompare**     | (that: string) =&gt; number                                                                                                    | Determines whether two strings are equivalent in the current locale.                                                                          |
| **match**             | (regexp: string \| <a href="#regexp">RegExp</a>) =&gt; <a href="#regexpmatcharray">RegExpMatchArray</a> \| null                | Matches a string with a regular expression, and returns an array containing the results of that search.                                       |
| **replace**           | (searchValue: string \| <a href="#regexp">RegExp</a>, replaceValue: string) =&gt; string                                       | Replaces text in a string, using a regular expression or search string.                                                                       |
| **replace**           | (searchValue: string \| <a href="#regexp">RegExp</a>, replacer: (substring: string, ...args: any[]) =&gt; string) =&gt; string | Replaces text in a string, using a regular expression or search string.                                                                       |
| **search**            | (regexp: string \| <a href="#regexp">RegExp</a>) =&gt; number                                                                  | Finds the first substring match in a regular expression search.                                                                               |
| **slice**             | (start?: number \| undefined, end?: number \| undefined) =&gt; string                                                          | Returns a section of a string.                                                                                                                |
| **split**             | (separator: string \| <a href="#regexp">RegExp</a>, limit?: number \| undefined) =&gt; string[]                                | Split a string into substrings using the specified separator and return them as an array.                                                     |
| **substring**         | (start: number, end?: number \| undefined) =&gt; string                                                                        | Returns the substring at the specified location within a <a href="#string">String</a> object.                                                 |
| **toLowerCase**       | () =&gt; string                                                                                                                | Converts all the alphabetic characters in a string to lowercase.                                                                              |
| **toLocaleLowerCase** | (locales?: string \| string[] \| undefined) =&gt; string                                                                       | Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.                                   |
| **toUpperCase**       | () =&gt; string                                                                                                                | Converts all the alphabetic characters in a string to uppercase.                                                                              |
| **toLocaleUpperCase** | (locales?: string \| string[] \| undefined) =&gt; string                                                                       | Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. |
| **trim**              | () =&gt; string                                                                                                                | Removes the leading and trailing white space and line terminator characters from a string.                                                    |
| **substr**            | (from: number, length?: number \| undefined) =&gt; string                                                                      | Gets a substring beginning at the specified location and having the specified length.                                                         |
| **valueOf**           | () =&gt; string                                                                                                                | Returns the primitive value of the specified object.                                                                                          |


#### RegExpMatchArray

| Prop        | Type                |
| ----------- | ------------------- |
| **`index`** | <code>number</code> |
| **`input`** | <code>string</code> |


#### RegExp

| Prop             | Type                 | Description                                                                                                                                                          |
| ---------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`source`**     | <code>string</code>  | Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. |
| **`global`**     | <code>boolean</code> | Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.                                     |
| **`ignoreCase`** | <code>boolean</code> | Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.                                 |
| **`multiline`**  | <code>boolean</code> | Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.                                  |
| **`lastIndex`**  | <code>number</code>  |                                                                                                                                                                      |

| Method      | Signature                                                                     | Description                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **exec**    | (string: string) =&gt; <a href="#regexpexecarray">RegExpExecArray</a> \| null | Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search. |
| **test**    | (string: string) =&gt; boolean                                                | Returns a Boolean value that indicates whether or not a pattern exists in a searched string.                                  |
| **compile** | () =&gt; this                                                                 |                                                                                                                               |


#### RegExpExecArray

| Prop        | Type                |
| ----------- | ------------------- |
| **`index`** | <code>number</code> |
| **`input`** | <code>string</code> |


#### GlassfyTransaction

| Prop                   | Type                                                              |
| ---------------------- | ----------------------------------------------------------------- |
| **`productId`**        | <code>string</code>                                               |
| **`receiptValidated`** | <code>boolean</code>                                              |
| **`permissions`**      | <code><a href="#glassfypermissions">GlassfyPermissions</a></code> |


#### GlassfyAttributionItem

| Prop        | Type                                                                |
| ----------- | ------------------------------------------------------------------- |
| **`type`**  | <code><a href="#glassfy_attribution">GLASSFY_ATTRIBUTION</a></code> |
| **`value`** | <code>string</code>                                                 |


### Type Aliases


#### GlassfyExtraProperty

<code>{ [key: string]: string }</code>


### Enums


#### GLASSFY_LOGLEVEL

| Members     | Value          |
| ----------- | -------------- |
| **`OFF`**   | <code>0</code> |
| **`ERROR`** | <code>1</code> |
| **`DEBUG`** | <code>2</code> |
| **`INFO`**  | <code>3</code> |
| **`ALL`**   | <code>3</code> |


#### GLASSFY_ELEGGIBILITY

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


#### GLASSFY_PRORATION_MODE

| Members                                             | Value          |
| --------------------------------------------------- | -------------- |
| **`UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY`** | <code>0</code> |
| **`IMMEDIATE_WITH_TIME_PRORATION`**                 | <code>1</code> |
| **`IMMEDIATE_AND_CHARGE_PRORATED_PRICE`**           | <code>2</code> |
| **`IMMEDIATE_WITHOUT_PRORATION`**                   | <code>3</code> |
| **`DEFERRED`**                                      | <code>4</code> |
| **`IMMEDIATE_AND_CHARGE_FULL_PRICE`**               | <code>5</code> |


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
