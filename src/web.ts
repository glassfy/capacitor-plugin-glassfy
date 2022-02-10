import { WebPlugin } from '@capacitor/core';

import type { GlassfyPlugin, GlassfyVersion, GlassfyOfferings, GlassfySku, GlassfyPermissions, GLASSFY_LOGLEVEL } from './definitions';

export class GlassfyWeb extends WebPlugin implements GlassfyPlugin {

  async sdkVersion(): Promise<GlassfyVersion> {
    throw this.unimplemented('Not supported on web.');
  }


  async initialize(options: { apiKey: string, watcherMode: boolean }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async offerings(): Promise<GlassfyOfferings> {
    throw this.unimplemented('Not supported on web.');
  }

  async skuWithIdentifier(options: { identifier: string }): Promise<GlassfySku> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }
  async login(options: { userid: string }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');

  }
  async logout(): Promise<void> {
    throw this.unimplemented('Not supported on web.');

  }

  async permissions(): Promise<GlassfyPermissions> {
    throw this.unimplemented('Not supported on web.');
  }

  async purchaseSku(options: { sku: GlassfySku }): Promise<GlassfySku> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');

  }

  async restorePurchases(): Promise<GlassfyPermissions> {
    throw this.unimplemented('Not supported on web.');
  }

  async setLogLevel(options: { logLevel: GLASSFY_LOGLEVEL }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async setDeviceToken(options: { token: string }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async setExtraUserProperty(options: { extraProperty: [string: any] }): Promise<void> {
    console.log(options);
    throw this.unimplemented('Not supported on web.');
  }

  async getUserProperty(): Promise<void> {
    throw this.unimplemented('Not supported on web.');
  }

}
