#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(GlassfyPlugin, "Glassfy",
    CAP_PLUGIN_METHOD(sdkVersion, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(initialize, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(offerings, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(skuWithId, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(login, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(logout, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(permissions, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(purchaseSku, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(restorePurchases, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(setLogLevel, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(setDeviceToken, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(setExtraUserProperty, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(getUserProperty, CAPPluginReturnPromise);
)
