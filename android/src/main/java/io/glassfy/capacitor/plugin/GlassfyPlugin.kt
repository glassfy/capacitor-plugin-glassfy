package io.glassfy.capacitor.plugin

import android.content.Intent
import android.net.Uri
import androidx.fragment.app.DialogFragment
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.PluginMethod
import com.getcapacitor.PluginCall
import io.glassfy.glue.GlassfyGlue
import io.glassfy.paywall.GlassfyPaywall
import kotlinx.coroutines.MainScope
import org.json.JSONArray
import org.json.JSONObject

@CapacitorPlugin(name = "Glassfy")
class GlassfyPlugin : Plugin() {
    private var paywallListener: CapacitorPaywallListener? = null
    private var paywallFragment: DialogFragment? = null

    fun JSONObject.toMap(): Map<String, *> = keys().asSequence().associateWith {
        when (val value = this[it]) {
            is JSONArray -> {
                val map = (0 until value.length()).associate { Pair(it.toString(), value[it]) }
                JSONObject(map).toMap().values.toList()
            }
            is JSONObject -> value.toMap()
            JSONObject.NULL -> null
            else -> value
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
        val jo = value.let { JSObject(it) }
        call.resolve(jo)
    }

    @PluginMethod
    fun sdkVersion(call: PluginCall) {
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
            watcherMode,
            "capacitor",
            "3.3.3"
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
    fun purchaseHistory(call: PluginCall) {
        GlassfyGlue.purchaseHistory { value, error -> pluginCompletion(call, value, error) }
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
    fun connectGlassfyUniversalCode(call: PluginCall) {
        var universalCode = call.getString("universalCode")
        var force = call.getBoolean("force")

        if (universalCode == null || force == null ) {
            call.reject("invalid universalCode parameter")
            return
        }
        GlassfyGlue.connectGlassfyUniversalCode(universalCode, force) { value, error ->
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
        if (activity == null) {
            call.reject("Invalid Android Activity", "Invalid Android Activity")
            return
        }

        val sku = call.getObject("sku", null)
        if (sku == null) {
            call.reject("missing sku parameter")
            return
        }
        val skuId = sku.getString("skuId")
        if (skuId == null) {
            call.reject("invalid sku object")
            return
        }

        val skuToUpgrade = call.getObject("skuToUpgrade", null)

        var subscriptionUpdateId: String? = null
        var replacementMode: Int? = null
        if (skuToUpgrade != null) {
            subscriptionUpdateId = skuToUpgrade.getString("skuId")
            if (subscriptionUpdateId == null) {
                call.reject("Invalid skuToUpgrade")
                return
            }
            replacementMode = call.getInt("replacementMode")
            if (replacementMode == null) {
                replacementMode = 1
            }
        }
        GlassfyGlue.purchaseSku(
            activity,
            skuId,
            subscriptionUpdateId,
            replacementMode
        ) { v, e -> pluginCompletion(call, v, e) }
    }

    @PluginMethod
    fun restorePurchases(call: PluginCall) {
        GlassfyGlue.restorePurchases() { value, error -> pluginCompletion(call, value, error) }
    }

    @PluginMethod
    fun storeInfo(call: PluginCall) {
        GlassfyGlue.storeInfo() { value, error -> pluginCompletion(call, value, error) }
    }

    @PluginMethod
    fun setDeviceToken(call: PluginCall) {
        call.resolve()
    }

    @PluginMethod
    fun setAttribution(call: PluginCall) {
        val type = call.getInt("type")
        if (type == null ) {
            call.reject("invalid/missing parameter 'type'")
            return
        }
        val attribValue = call.getString("value")
        if (attribValue == null ) {
            call.reject("invalid/missing parameter 'value'")
            return
        }

        GlassfyGlue.setAttribution(type,attribValue) { value, error ->
            pluginCompletion(
                call,
                value,
                error
            )
        }
    }

    @PluginMethod
    fun setAttributions(call: PluginCall) {
        val items = call.getArray("items")
        if (items == null) {
            call.reject("invalid/missing parameter 'items'")
            return
        }

        val listItems =  mutableListOf<Map<String,Any?>>()
        for (i in 0 until items.length()) {
            val item = items.getJSONObject(i).toMap()

            listItems.add(item)
        }

        GlassfyGlue.setAttributions(listItems) { value, error ->
            pluginCompletion(
                call,
                value,
                error
            )
        }
    }

    @PluginMethod
    fun _paywall(call: PluginCall) {
        if (paywallFragment != null) {
            call.reject("Only one paywall can be shown at a time, please call `GlassfyPaywall.close()`")
            return
        }
        val awaitLoading = call.getBoolean("awaitLoading") ?: false
        val remoteConfig = call.getString("remoteConfig")
        if (remoteConfig == null) {
            call.reject("invalid/missing parameter 'remoteConfig'")
            return
        }

        val listener = CapacitorPaywallListener(this)
        paywallListener = listener
        GlassfyPaywall.fragment(this.getContext(), remoteConfig, awaitLoading) { paywall, error ->
            MainScope().run {
                paywall?.setCloseHandler(listener.onClose)
                paywall?.setPurchaseHandler(listener.onPurchase)
                paywall?.setRestoreHandler(listener.onRestore)
                paywall?.setLinkHandler(listener.onLink)
                paywall?.show(bridge.activity.supportFragmentManager, "paywall")
            }
            paywallFragment = paywall
            pluginCompletion(call, null, null)
        }
    }

    @PluginMethod
    fun _openUrl(call: PluginCall) {
        val urlString = call.getString("url")
        if (urlString == null) {
            call.reject("invalid/missing parameter 'url'")
            return
        }
        try {
            val i = Intent(Intent.ACTION_VIEW).apply { data = Uri.parse(urlString) }
            bridge.activity.startActivity(i)
        } catch(_: Exception) {
            call.reject("invalid parameter 'url'")
        }
    }

    @PluginMethod
    fun _closePaywall(call: PluginCall) {
        MainScope().run {
            paywallFragment?.dismiss()
            paywallFragment = null
            paywallListener = null
        }
        pluginCompletion(call, null, null)
    }

    internal fun sendEvent(eventName: String, payload: JSONObject) {
        val jsObject = JSObject(payload.toString());
        notifyListeners(eventName, jsObject);
    }
}