package io.glassfy.capacitor.plugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Glassfy")
public class GlassfyPlugin extends Plugin {

    @PluginMethod
    public void sdkVersion(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void initialize(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void offerings(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void skuWithIdentifier(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void login(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void logout(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void permissions(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void purchaseSku(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void restorePurchases(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void setLogLevel(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void setDeviceToken(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void setExtraUserProperty(PluginCall call) {
        call.unimplemented();
    }

    @PluginMethod
    public void getUserProperty(PluginCall call) {
        call.unimplemented();
    }
}
