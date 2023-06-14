package io.glassfy.capacitor.plugin

import android.net.Uri
import io.glassfy.androidsdk.GlassfyError
import io.glassfy.androidsdk.model.Sku
import io.glassfy.androidsdk.model.Transaction
import io.glassfy.paywall.PaywallFragment
import io.glassfy.glue.encodedJson
import org.json.JSONObject

internal class CapacitorPaywallListener(private val plugin: GlassfyPlugin) {
    val onClose: (Transaction?, GlassfyError?) -> Unit = { transaction, error ->
        val payload = JSONObject().apply {
            put("event", "onClose")
            put("transaction", transaction?.encodedJson())
            put("error", error?.toString())
        }
        plugin.sendEvent("paywallEvent", payload)
    }

    val onLink: (Uri) -> Unit = { url ->
        val payload = JSONObject().apply {
            put("event", "onLink")
            put("url", url.toString())
        }
        plugin.sendEvent("paywallEvent", payload)
    }

    val onRestore: () -> Unit = {
        val payload = JSONObject().apply {
            put("event", "onRestore")
        }
        plugin.sendEvent("paywallEvent", payload)
    }

    val onPurchase: (Sku) -> Unit = { sku ->
        val payload = JSONObject().apply {
            put("event", "onPurchase")
            put("sku", sku.encodedJson())
        }
        plugin.sendEvent("paywallEvent", payload)
    }
}
