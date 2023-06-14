import Foundation
import Glassfy
import GlassfyGlue

protocol PaywallListener: AnyObject {
    func onClose(transaction: Glassfy.Transaction?, error: Error?)
    func onLink(url: URL)
    func onRestore()
    func onPurchase(sku: Glassfy.Sku)
}

extension Glassfy.PaywallViewController {
    func install(_ listener: PaywallListener) {
        setCloseHandler { [weak listener] transaction, error in
            listener?.onClose(transaction: transaction, error: error)
        }
        setLinkHandler { [weak listener] link in
            listener?.onLink(url: link)
        }
        setRestoreHandler { [weak listener] in
            listener?.onRestore()
        }
        setPurchaseHandler { [weak listener] sku in
            listener?.onPurchase(sku: sku)
        }
    }
}

class CapacitorPaywallListener: PaywallListener {
    private let sendEvent: (String, [String: Any]) -> Void
    private let eventName = "paywallEvent"
    
    init(sendEvent: @escaping (String, [String: Any]) -> Void) {
        self.sendEvent = sendEvent
    }
    
    func onClose(transaction: Glassfy.Transaction?, error: Error?) {
        var payload: [String: Any] = [
            "event": "onClose"
        ]
        if let transaction {
            payload["transaction"] = transaction.encodedDictionary()
        }
        if let error {
            payload["error"] = "\(error)"
        }
        sendEvent(eventName, payload)
    }
    
    func onLink(url: URL) {
        let payload: [String: Any] = [
            "event": "onLink",
            "url": url.absoluteString
        ]
        sendEvent(eventName, payload)
    }
    
    func onRestore() {
        let payload: [String: Any] = [
            "event": "onRestore"
        ]
        sendEvent(eventName, payload)
    }
    
    func onPurchase(sku: Glassfy.Sku) {
        var payload: [String: Any] = [
            "event": "onPurchase"
        ]
        if let sku = sku.encodedDictionary() {
            payload["sku"] = sku
        }
        sendEvent(eventName, payload)
    }
}
