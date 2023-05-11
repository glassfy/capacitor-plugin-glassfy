import { registerPlugin } from '@capacitor/core';

import type { GlassfyPlugin } from './definitions';

const Glassfy = registerPlugin<GlassfyPlugin>('Glassfy', {
  web: () => import('./web').then(m => new m.GlassfyWeb()),
});

export * from './definitions';
export { Glassfy };
export { GlassfyPaywall, PaywallListener } from './paywall';
