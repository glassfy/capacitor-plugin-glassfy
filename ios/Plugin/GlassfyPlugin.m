#import <Capacitor/Capacitor.h>
#import <Foundation/Foundation.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(GlassfyPlugin, "Glassfy",
           CAP_PLUGIN_METHOD(sdkVersion, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(initialize, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setLogLevel, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(offerings, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(permissions, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(skuWithId, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(skuWithIdAndStore, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(connectCustomSubscriber, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(connectPaddleLicenseKey, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setEmailUserProperty, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setDeviceToken, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setExtraUserProperty, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getUserProperty, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(purchaseSku, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(restorePurchases, CAPPluginReturnPromise);)