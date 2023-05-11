package io.glassfy.capacitor.plugin

import android.net.Uri
import io.glassfy.androidsdk.GlassfyError
import io.glassfy.androidsdk.model.Sku
import io.glassfy.androidsdk.model.Transaction
import io.glassfy.paywall.PaywallFragment
import io.glassfy.paywall.PaywallListener
import io.glassfy.glue.encodedJson
import org.json.JSONObject

internal class CapacitorPaywallListener(private val plugin: GlassfyPlugin) : PaywallListener {
    override fun onClose(f: PaywallFragment, transaction: Transaction?, error: GlassfyError?) {
        val payload = JSONObject().apply {
            put("event", "onClose")
            put("transaction", transaction?.encodedJson())
            put("error", error?.toString())
        }
        plugin.sendEvent("paywallEvent", payload)
    }

    override fun onLink(f: PaywallFragment, url: Uri) {
        val payload = JSONObject().apply {
            put("event", "onLink")
            put("url", url.toString())
        }
        plugin.sendEvent("paywallEvent", payload)
    }

    override fun onRestore(f: PaywallFragment) {
        val payload = JSONObject().apply {
            put("event", "onRestore")
        }
        plugin.sendEvent("paywallEvent", payload)
    }

    override fun onPurchase(f: PaywallFragment, sku: Sku) {
        val payload = JSONObject().apply {
            put("event", "onPurchase")
            put("sku", sku.encodedJson())
        }
        plugin.sendEvent("paywallEvent", payload)
    }
}
