import { WebPlugin } from '@capacitor/core';

import type { GlassfyPlugin, GlassfyVersion, GlassfyOfferings, GlassfySku, GlassfyPermissions, GLASSFY_PRORATION_MODE, GLASSFY_ATTRIBUTION, GlassfyAttributionItem, GLASSFY_LOGLEVEL, GlassfyTransaction, GlassfySkuBase, GLASSFY_STORE, GlassfyUserProperties, GlassfyPurchasesHistory } from './definitions';

export class GlassfyWeb extends WebPlugin implements GlassfyPlugin {

  async sdkVersion(): Promise<GlassfyVersion> {
    throw this.unimplemented('Not supported on web.');
  }

  async initialize(options: { apiKey: string, watcherMode: boolean }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async setLogLevel(options: { logLevel: GLASSFY_LOGLEVEL }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async offerings(): Promise<GlassfyOfferings> {
    throw this.unimplemented('Not supported on web.');
  }

  async purchaseHistory(): Promise<GlassfyPurchasesHistory> {
    throw this.unimplemented('Not supported on web.');
  }

  async permissions(): Promise<GlassfyPermissions> {
    throw this.unimplemented('Not supported on web.');
  }

  async skuWithId(options: { identifier: string }): Promise<GlassfySku> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async skuWithIdAndStore(options: { identifier: string, store: GLASSFY_STORE }): Promise<GlassfySkuBase> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  connectCustomSubscriber(options: { subscriberId: string }): Promise<GlassfySku> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  connectPaddleLicenseKey(options: { licenseKey: string, force: boolean }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  connectGlassfyUniversalCode(options: { universalCode: string, force: boolean }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  setEmailUserProperty(options: { email: string }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async setDeviceToken(options: { token: string }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async setExtraUserProperty(options: { extra: { [key: string]: any } }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async getUserProperty(): Promise<GlassfyUserProperties> {
    throw this.unimplemented('Not supported on web.');
  }

  async purchaseSku(options: { sku: GlassfySku, skuToUpgrade?: GlassfySku, prorationMode?: GLASSFY_PRORATION_MODE }): Promise<GlassfyTransaction> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async restorePurchases(): Promise<GlassfyPermissions> {
    throw this.unimplemented('Not supported on web.');
  }


  async setAttribution(options: { type: GLASSFY_ATTRIBUTION, value: string }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async setAttributions(options: { items: GlassfyAttributionItem[] }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }


}
