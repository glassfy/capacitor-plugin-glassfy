export enum GLASSFY_ELEGGIBILITY {
  ELEGIBLE = 1,
  NON_ELEGIBLE = -1,
  UNKNOWN = 0,
}

export enum GLASSFY_EVENT_TYPE {
  InitialBuy = 5001,
  Restarted = 5002,
  Renewed = 5003,
  Expired = 5004,
  DidChangeRenewalStatus = 5005,
  IsInBillingRetryPeriod = 5006,
  ProductChange = 5007,
  InAppPurchase = 5008,
  Refund = 5009,
  Paused = 5010,
  Resumed = 5011,
  ConnectLicense = 5012,
  DisconnectLicense = 5013
}

export enum GLASSFY_STORE {
  AppStore = 1,
  PlayStore = 2,
  Paddle = 3,
  Stripe = 4,
  Glassfy = 5
}

export enum GLASSFY_LOGLEVEL {
  OFF = 0,
  ERROR = 1,
  DEBUG = 2,
  INFO = 3,
  ALL = 3,
}

export enum GLASSFY_ATTRIBUTION {
  AdjustID = 1,
  AppsFlyerID = 2,
  IP = 3,
  IDFA = 4,
  IDFV = 5,
  GAID = 6,
  ASID = 7,
  AID = 8
}

export enum GLASSFY_PRORATION_MODE {
  UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY = 0,
  IMMEDIATE_WITH_TIME_PRORATION = 1,
  IMMEDIATE_AND_CHARGE_PRORATED_PRICE = 2,
  IMMEDIATE_WITHOUT_PRORATION = 3,
  DEFERRED = 4,
  IMMEDIATE_AND_CHARGE_FULL_PRICE = 5
}

export enum GLASSFY_ENTITLEMENT {
  NEVERBUY = -9,
  // The customer received a refund for the subscription.
  OTHERREFUND = -8,
  // The customer received a refund due to a perceived issue with the app.
  ISSUEREFUND = -7,
  // The system canceled the subscription because the customer upgraded.
  UPGRADED = -6,
  // The customer intentionally cancelled the subscription.
  EXPIREDVOLUNTARY = -5,
  // The product is no longer available.
  PRODUCTNOTAVAILABLE = -4,
  // The customer did not accept the price increase.
  FAILTOACCEPTINCREASE = -3,
  // The receipt is fully expired due to a billing issue.
  EXPIREDFROMBILLING = -2,
  // The receipt is expired but the subscription is still in a billing-retry state.
  // If grace period is enabled this state excludes subscriptions in grace period.
  INRETRY = -1,
  // The receipt is out of date or there is another purchase issue.
  MISSINGINFO = 0,
  // The subscription expired but is in grace period.
  EXPIREDINGRACE = 1,
  // The subscription is an off-platform subscription.
  OFFPLATFORM = 2,
  // The subscription is a non-renewing subscription.
  NONRENEWING = 3,
  // The subscription is active and auto-renew is off.
  AUTORENEWOFF = 4,
  // The subscription is active and auto-renew is on.
  AUTORENEWON = 5,
}

export interface GlassfyVersion {
  readonly version: string;
}

export interface GlassfyProductDiscount {
  readonly identifier: string;
  readonly price: number;
  readonly currencyCode: string;
  readonly period: string;
  readonly numberOfPeriods: number;
  readonly type: string;
}


export interface GlassfyProduct {
  readonly title: string;
  readonly identifier: string;
  readonly description: string;
  readonly price: number;
  readonly currencyCode: string;
  readonly introductoryPrice: GlassfyProductDiscount;
  readonly discounts: GlassfyProductDiscount[];
}

export interface GlassfySkuBase {
  readonly skuId: string;
  readonly productId: string;
  readonly store: GLASSFY_STORE;
}

export interface GlassfySku extends GlassfySkuBase {
  readonly introductoryEligibility: GLASSFY_ELEGGIBILITY;
  readonly promotionalEligibility: GLASSFY_ELEGGIBILITY;
  readonly extravars: { [key: string]: string };
  readonly product: GlassfyProduct;
}

export interface GlassfySkuPaddle extends GlassfySkuBase {
  readonly name: string;
  readonly initialPrice: number;
  readonly initialPriceCode: string;
  readonly recurringPrice: number;
  readonly recurringPriceCode: string;
  readonly extravars: { [key: string]: string };
}

export interface GlassfyAccountableSku extends GlassfySkuBase {
  readonly isInIntroOfferPeriod: boolean;
  readonly isInTrialPeriod: boolean;
}

export interface GlassfyOffering {
  readonly offeringId: string;
  readonly skus: GlassfySku[];
}

export interface GlassfyOfferings {
  readonly all: GlassfyOffering[];
}

export interface GlassfyPurchasesHistory {
  readonly all: GlassfyPurchaseHistory[];
}

export interface GlassfyPurchaseHistory {
  readonly productId: string;
  readonly skuId: string;
  readonly type: GLASSFY_EVENT_TYPE;
  readonly store: GLASSFY_STORE;
  readonly purchaseDate: string;
  readonly expireDate: string;
  readonly transactionId: string;
  readonly subscriberId: string;
  readonly currencyCode: string;
  readonly countryCode: string;
  readonly isInIntroOfferPeriod: boolean;
  readonly promotionalOfferId: string;
  readonly offerCodeRefName: string;
  readonly licenseCode: string;
  readonly webOrderLineItemId: string;
}

export interface GlassfyPermission {
  readonly permissionId: string;
  readonly entitlement: GLASSFY_ENTITLEMENT;
  readonly isValid: boolean;
  readonly expireDate: string;
  readonly accountableSkus: GlassfyAccountableSku[]

}

export interface GlassfyPermissions {
  readonly installationId: string,
  readonly subscriberId: string,
  readonly originalApplicationVersion: string,
  readonly originalApplicationDate: string,
  readonly all: GlassfyPermission[];
}

export interface GlassfyTransaction {
  readonly productId: string,
  readonly receiptValidated: boolean;
  readonly permissions: GlassfyPermissions;
}

export interface GlassfyUserProperties {
  readonly email: String;
  readonly token: boolean;
  readonly extra: GlassfyExtraProperty;
}

export interface GlassfyAttributionItem {
  readonly type: GLASSFY_ATTRIBUTION;
  readonly value: string;
}


export type GlassfyExtraProperty = { [key: string]: string };


export interface GlassfyPlugin {
  sdkVersion(): Promise<GlassfyVersion>;

  /**
   *  For more details, follow instruction at https://docs.glassfy.io/get-started/configuration
   */
  initialize(options: { apiKey: string, watcherMode: boolean }): Promise<void>;

  setLogLevel(options: { logLevel: GLASSFY_LOGLEVEL }): Promise<void>;

  /**
   *  For more details, check the documentation https://docs.glassfy.io/dashboard/configure-offerings
   */
  offerings(): Promise<GlassfyOfferings>;

  /**
   * For more details, check the documentation https://docs.glassfy.io/dashboard/configure-offerings
   */
  purchaseHistory(): Promise<GlassfyPurchasesHistory>;

  /**
   * For more details, check the documentation https://docs.glassfy.io/dashboard/configure-permissions.html
   */
  permissions(): Promise<GlassfyPermissions>;

  /**
   * For more details, check the documentation https://docs.glassfy.io/dashboard/configure-products
   */
  skuWithId(options: { identifier: string }): Promise<GlassfySku>;
  
  skuWithIdAndStore(options: { identifier: string, store: GLASSFY_STORE }): Promise<GlassfySkuBase>;

  connectCustomSubscriber(options: { subscriberId: string }): Promise<GlassfySku>;

  connectPaddleLicenseKey(options: { licenseKey: string, force: boolean }): Promise<void>;
  
  connectGlassfyUniversalCode(options: { universalCode: string, force: boolean }): Promise<void>;

  setEmailUserProperty(options: { email: string }): Promise<void>;

  setDeviceToken(options: { token: string }): Promise<void>;

  setExtraUserProperty(options: { extra: GlassfyExtraProperty }): Promise<void>;

  getUserProperty(): Promise<GlassfyUserProperties>;

  purchaseSku(options: { sku: GlassfySku, skuToUpgrade?: GlassfySku, prorationMode?: GLASSFY_PRORATION_MODE }): Promise<GlassfyTransaction>;

  restorePurchases(): Promise<GlassfyPermissions>;

  setAttribution(options: { type: GLASSFY_ATTRIBUTION, value: string }): Promise<void>;

  setAttributions(options: { items: GlassfyAttributionItem[] }): Promise<void>;

  _paywall(options: { remoteConfig: String }): Promise<void>;

  _closePaywall(): Promise<void>;

  _openUrl(options: { url: String }): Promise<void>;
}
