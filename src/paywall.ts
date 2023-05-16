import { GlassfySku, GlassfyTransaction } from "./definitions";
import { Glassfy } from "./index";

export class GlassfyPaywall {
    public static async paywall(options: { remoteConfig: String, listener: PaywallListener | null }) {        
        GlassfyPaywall.setupListener(options.listener ?? {});
        await Glassfy._paywall({ remoteConfig: options.remoteConfig });
    }

    private static async setupListener(listener: PaywallListener) {        
        (Glassfy as any).addListener('paywallEvent', async (event: any) => {
            const eventName: string = event.event;

            const close = (transaction: GlassfyTransaction | null, error: any | null) => {
                if (listener.onClose) {
                    listener.onClose!(transaction, error);
                } else {
                    GlassfyPaywall.close();
                }
            };

            switch (eventName) {
                case "onClose":
                    close(event.transaction, event.error);
                    break;

                case "onLink":
                    if (listener.onLink) {
                        listener.onLink(event.url);
                    } else {
                        await Glassfy._openUrl({ url: event.url });
                    }
                    break;

                case "onRestore":
                    if (listener.onRestore) {
                        listener.onRestore();
                    } else {
                        try {
                            await Glassfy.restorePurchases();
                            close(null, null);
                        } catch(error) {
                            close(null, error);
                        }
                    }
                    break;

                case "onPurchase":
                    if (listener.onPurchase) {
                        listener.onPurchase(event.sku);
                    } else {
                        try {
                            const transaction = await Glassfy.purchaseSku({ sku: event.sku })
                            close(transaction, null);
                        } catch(error) {
                            close(null, error);
                        }
                    }
                    break;

                default:
                    break;
            }
        });
    }

    public static async close() {
        (Glassfy as any).removeAllListeners('paywallEvent');
        await Glassfy._closePaywall();
    }
}

export interface PaywallListener {
    onClose?(transaction: GlassfyTransaction | null, error: any | null): void;
    onLink?(url: URL): void;
    onRestore?(): void;
    onPurchase?(sku: GlassfySku): void;
}
