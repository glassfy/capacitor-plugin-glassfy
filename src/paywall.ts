import { GlassfySku, GlassfyTransaction } from "./definitions";
import { Glassfy } from "./index";

const paywallEvent = 'paywallEvent';

export class GlassfyPaywall {
    private static currentListener: any = null

    public static async showPaywall(options: { remoteConfig: String, awaitLoading: Boolean, listener: PaywallListener | null }) { 
        GlassfyPaywall.removeAllListeners();       
        GlassfyPaywall.setupListener(options.listener ?? {});
        await Glassfy._paywall({ remoteConfig: options.remoteConfig, awaitLoading: options.awaitLoading });
    }

    private static async removeAllListeners() {
        GlassfyPaywall.currentListener?.remove();
    }

    private static async setupListener(listener: PaywallListener) {        
        const handler = async (event: any) => {
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
        };
        GlassfyPaywall.currentListener = (Glassfy as any).addListener(paywallEvent, handler);
    }

    public static async close() {
        (Glassfy as any).removeAllListeners(paywallEvent);
        await Glassfy._closePaywall();
    }
}

export interface PaywallListener {
    onClose?(transaction: GlassfyTransaction | null, error: any | null): void;
    onLink?(url: URL): void;
    onRestore?(): void;
    onPurchase?(sku: GlassfySku): void;
}
