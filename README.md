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
* [`setLogLevel(...)`](#setloglevel)
* [`offerings()`](#offerings)
* [`permissions()`](#permissions)
* [`skuWithId(...)`](#skuwithid)
* [`skuWithIdAndStore(...)`](#skuwithidandstore)
* [`connectCustomSubscriber(...)`](#connectcustomsubscriber)
* [`connectPaddleLicenseKey(...)`](#connectpaddlelicensekey)
* [`setEmailUserProperty(...)`](#setemailuserproperty)
* [`setDeviceToken(...)`](#setdevicetoken)
* [`setExtraUserProperty(...)`](#setextrauserproperty)
* [`getUserProperty()`](#getuserproperty)
* [`purchaseSku(...)`](#purchasesku)
* [`restorePurchases()`](#restorepurchases)
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
| **`offeringId`** | <code>string</code>       |
| **`skus`**       | <code>[GlassfySku]</code> |


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
| **`description`**       | <code>string</code>                                                       |
| **`currencyCode`**      | <code>string</code>                                                       |
| **`price`**             | <code>number</code>                                                       |
| **`introductoryPrice`** | <code><a href="#glassfyproductdiscount">GlassfyProductDiscount</a></code> |
| **`discounts`**         | <code>GlassfyProductDiscount[]</code>                                     |


#### GlassfyProductDiscount

| Prop                  | Type                |
| --------------------- | ------------------- |
| **`price`**           | <code>number</code> |
| **`period`**          | <code>string</code> |
| **`numberOfPeriods`** | <code>number</code> |
| **`type`**            | <code>string</code> |


#### GlassfyPermissions

| Prop                             | Type                             |
| -------------------------------- | -------------------------------- |
| **`installationId`**             | <code>string</code>              |
| **`subscriberId`**               | <code>string</code>              |
| **`originalApplicationVersion`** | <code>string</code>              |
| **`originalApplicationDate`**    | <code>string</code>              |
| **`all`**                        | <code>[GlassfyPermission]</code> |


#### GlassfyPermission

| Prop                  | Type                                                                |
| --------------------- | ------------------------------------------------------------------- |
| **`permissionId`**    | <code>string</code>                                                 |
| **`entitlement`**     | <code><a href="#glassfy_entitlement">GLASSFY_ENTITLEMENT</a></code> |
| **`isValid`**         | <code>boolean</code>                                                |
| **`expireDate`**      | <code>string</code>                                                 |
| **`accountableSkus`** | <code>[string]</code>                                               |


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


#### GLASSFY_STORE

| Members         | Value          |
| --------------- | -------------- |
| **`AppStore`**  | <code>1</code> |
| **`PlayStore`** | <code>2</code> |
| **`Paddle`**    | <code>3</code> |

</docgen-api>
