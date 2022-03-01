import { registerPlugin } from '@capacitor/core';

import { GlassfyPlugin } from './definitions';

const Glassfy = registerPlugin<GlassfyPlugin>('Glassfy', {
  web: () => import('./web').then(m => new m.GlassfyWeb()),
});

export * from './definitions';
export { Glassfy };
