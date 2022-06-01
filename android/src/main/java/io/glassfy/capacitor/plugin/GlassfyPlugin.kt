package io.glassfy.capacitor.plugin

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.PluginMethod
import com.getcapacitor.PluginCall
import io.glassfy.glue.GlassfyGlue
import org.json.JSONArray
import org.json.JSONObject

//import io.glassfy.capacitor.plugin.Glassfy2

@CapacitorPlugin(name = "Glassfy")
class GlassfyPlugin : Plugin() {

    fun JSONObject.toMap(): Map<String, *> = keys().asSequence().associateWith {
        when (val value = this[it])
        {
            is JSONArray ->
            {
                val map = (0 until value.length()).associate { Pair(it.toString(), value[it]) }
                JSONObject(map).toMap().values.toList()
            }
            is JSONObject -> value.toMap()
            JSONObject.NULL -> null
            else            -> value
        }
    }

    private fun pluginCompletion(call: PluginCall, value: String?, error: String?) {
        if (error != null) {
            call.reject(error)
            return
        }

        if (value==null) {
            call.resolve()
            return;
        }

        // convert json string to JSONOBJECT
        val jo = value.let { JSObject(it) }
        call.resolve(jo)
    }

    @PluginMethod
    fun sdkVersion(call: PluginCall) {
        val ret = JSObject()
        GlassfyGlue.sdkVersion { value, error -> pluginCompletion(call, value, error) }
    }

    @PluginMethod
    fun initialize(call: PluginCall) {
        var apiKey = call.getString("apiKey")
        var watcherMode = call.getBoolean("watcherMode")
        if (apiKey == null || watcherMode == null) {
            call.reject("invalid parameter")
            return
        }
        GlassfyGlue.initialize(
            this.getContext(),
            apiKey,
            watcherMode
        ) { value, error -> pluginCompletion(call, value, error) }
    }

    @PluginMethod
    fun setLogLevel(call: PluginCall) {
        var logLevel = call.getInt("logLevel")

        if (logLevel == null ) {
            call.reject("invalid parameter")
            return
        }
        GlassfyGlue.setLogLevel(logLevel);
        call.resolve()
    }

    @PluginMethod
    fun offerings(call: PluginCall) {
        GlassfyGlue.offerings { value, error -> pluginCompletion(call, value, error) }
    }

    @PluginMethod
    fun permissions(call: PluginCall) {
        GlassfyGlue.permissions { value, error -> pluginCompletion(call, value, error) }
    }

    @PluginMethod
    fun skuWithId(call: PluginCall) {
        var identifier = call.getString("identifier")
        if (identifier == null ) {
            call.reject("invalid parameter")
            return
        }
        GlassfyGlue.skuWithId(identifier) { value, error -> pluginCompletion(call, value, error) }
    }

    @PluginMethod
    fun skuWithIdAndStore(call: PluginCall) {
        var identifier = call.getString("identifier")
        var store = call.getInt("store")

        if (identifier == null || store == null ) {
            call.reject("invalid parameter")
            return
        }
        GlassfyGlue.skuWithIdAndStore(identifier, store) { value, error ->
            pluginCompletion(
                call,
                value,
                error
            )
        }
    }

    @PluginMethod
    fun connectCustomSubscriber(call: PluginCall) {
        var subscriberId = call.getString("subscriberId")
        if (subscriberId == null ) {
            call.reject("invalid parameter")
            return
        }
        GlassfyGlue.connectCustomSubscriber(subscriberId) { value, error ->
            pluginCompletion(
                call,
                value,
                error
            )
        }
    }

    @PluginMethod
    fun connectPaddleLicenseKey(call: PluginCall) {
        var licenseKey = call.getString("licenseKey")
        var force = call.getBoolean("force")

        if (licenseKey == null || force == null ) {
            call.reject("invalid parameter")
            return
        }
        GlassfyGlue.connectPaddleLicenseKey(licenseKey, force) { value, error ->
            pluginCompletion(
                call,
                value,
                error
            )
        }
    }

    @PluginMethod
    fun setEmailUserProperty(call: PluginCall) {
        var email = call.getString("email")
        if (email == null ) {
            call.reject("invalid parameter")
            return
        }
        GlassfyGlue.setEmailUserProperty(email) { value, error ->
            pluginCompletion(
                call,
                value,
                error
            )
        }
    }

    @PluginMethod
    fun setExtraUserProperty( call: PluginCall) {
        var extra = call.getObject("extra").toMap()
        if (extra == null ) {
            call.reject("invalid parameter")
            return
        }
        val map = HashMap<String,String>()
        var validMap = true
        extra.forEach { (key, value) ->
            if (value is String) {
                map[key] = value
            } else {
                validMap = false;
            }
        }
        if (validMap == false) {
            call.reject("invalid parameter")
            return
        }

        GlassfyGlue.setExtraUserProperty(map) { value, error ->
            pluginCompletion(
                call,
                value,
                error
            )
        }
    }

    @PluginMethod
    fun getUserProperties(call: PluginCall) {
        GlassfyGlue.getExtraUserProperty() { value, error -> pluginCompletion(call, value, error) }
    }

    @PluginMethod
    fun purchaseSku(call: PluginCall) {
        var sku = call.getObject("sku")
        if (sku == null ) {
            call.reject("invalid parameter")
            return
        }
        val activity = this.activity
        val skuId = sku.getString("skuId")
        if (skuId == null ) {
            call.reject("invalid parameter")
            return
        }
        if (activity == null) {
            call.reject("Invalid Android Activity", "Invalid Android Activity")
            return
        }

        GlassfyGlue.purchaseSku(activity, skuId) { value, error ->
            pluginCompletion(
                call,
                value,
                error
            )
        }
    }

    @PluginMethod
    fun restorePurchases(call: PluginCall) {
        GlassfyGlue.restorePurchases() { value, error -> pluginCompletion(call, value, error) }
    }

    @PluginMethod
    fun setDeviceToken(call: PluginCall) {
        call.resolve()
    }
}