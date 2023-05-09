import Capacitor
import Foundation
import GlassfyGlue

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(GlassfyPlugin)
public class GlassfyPlugin: CAPPlugin {
    
    func convertResponseFromGlassfyGlue(_ call: CAPPluginCall) -> (Dictionary<String,Any>?,Error?) -> Void {
        return {value,error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            if let value = value {
                call.resolve(value)
            } else {
                call.resolve()
            }
        }
    }
    
    
    @objc func sdkVersion(_ call: CAPPluginCall) {
        GlassfyGlue.sdkVersion (completion: self.convertResponseFromGlassfyGlue(call));
    }

    @objc func initialize(_ call: CAPPluginCall) {
        guard let apiKey = call.getString("apiKey"),
              let watcherMode = call.getBool("watcherMode")
        else {
            call.reject("invalid initialize parameters")
            return
        }
        GlassfyGlue.initialize(
            withApiKey: apiKey, 
            watcherMode: watcherMode, 
            crossPlatformSdkFramework: "capacitor",
            crossPlatformSdkVersion: "2.1.0",
            withCompletion: self.convertResponseFromGlassfyGlue(call)
        )
    }
    
    @objc func setLogLevel(_ call: CAPPluginCall) {
        guard let logLevel = call.getInt("logLevel") else {
            call.reject("invalid login parameters")
            return
        }
        if let ll = Glassfy.LogLevel(rawValue: UInt(logLevel)) {
            Glassfy.log(level: ll)
        }
    }

    @objc func offerings(_ call: CAPPluginCall) {
        GlassfyGlue.offerings(completion: self.convertResponseFromGlassfyGlue(call))
    }

    @objc func purchaseHistory(_ call: CAPPluginCall) {
        GlassfyGlue.purchaseHistory(completion: self.convertResponseFromGlassfyGlue(call))
    }
    
    @objc func permissions(_ call: CAPPluginCall) {
        GlassfyGlue.permissions(completion: self.convertResponseFromGlassfyGlue(call));
    }
    
    @objc func skuWithId(_ call: CAPPluginCall) {
        guard let identifier = call.getString("identifier") else {
            call.reject("invalid skuWithIdentifier parameters")
            return
        }
        GlassfyGlue.sku(withId: identifier, withCompletion: self.convertResponseFromGlassfyGlue(call));
    }
    
    @objc func skuWithIdAndStore(_ call: CAPPluginCall) {
        guard let identifier = call.getString("identifier") else {
            call.reject("invalid skuWithIdAndStore 'identifier' parameters")
            return
        }
        guard let storecode = call.getInt("identifier") else {
            call.reject("invalid skuWithIdAndStore 'store' parameters")
            return
        }
        let store:Glassfy.Store
        switch storecode {
        case 1:
            store = Glassfy.Store.appStore
        case 2:
            store = Glassfy.Store.playStore
        case 3:
            store = Glassfy.Store.paddle
        default:
            call.reject("invalid skuWithIdAndStore 'store' parameters")
            return
        }
        
        GlassfyGlue.sku(withId: identifier, store: store, completion: self.convertResponseFromGlassfyGlue(call));
    }
    
    
    @objc func connectCustomSubscriber(_ call: CAPPluginCall) {
        guard let subscriberId = call.getString("subscriberId") else {
            call.reject("invalid subscriberId parameters")
            return
        }
        GlassfyGlue.connectCustomSubscriber(subscriberId, completion: self.convertResponseFromGlassfyGlue(call));
    }

    @objc func connectPaddleLicenseKey(_ call: CAPPluginCall) {
        guard let licenseKey = call.getString("licenseKey") else {
            call.reject("invalid licenseKey parameters")
            return
        }
        guard let force = call.getBool("force") else {
            call.reject("invalid licenseKey parameters")
            return
        }

        GlassfyGlue.connectPaddleLicenseKey(licenseKey, force: force , completion: self.convertResponseFromGlassfyGlue(call));
    }
    
    @objc func setEmailUserProperty(_ call: CAPPluginCall) {
        guard let email = call.getString("email") else {
            call.reject("invalid email parameters")
            return
        }

        GlassfyGlue.setEmailUserProperty(email, withCompletion: self.convertResponseFromGlassfyGlue(call));
    }
    
    @objc func setDeviceToken(_ call: CAPPluginCall) {
        guard let token = call.getString("token") else {
            call.reject("invalid setDeviceToken parameters")
            return
        }
        
        GlassfyGlue.setDeviceToken(token, withCompletion: self.convertResponseFromGlassfyGlue(call));
    }

    @objc func setExtraUserProperty(_ call: CAPPluginCall) {
        guard let extra = call.getObject("extra") else {
            call.reject("invalid setDeviceToken parameters")
            return
        }
        
        GlassfyGlue.setExtraUserProperty(extra, withCompletion: self.convertResponseFromGlassfyGlue(call));
    }

    @objc func getUserProperty(_ call: CAPPluginCall) {
        
        GlassfyGlue.getExtraUserProperty(completion: self.convertResponseFromGlassfyGlue(call));
        
    }


    @objc func purchaseSku(_ call: CAPPluginCall) {
        guard let sku = call.getObject("sku") else {
            call.reject("Invalid SKU")
            return
        }
                
        GlassfyGlue.purchaseSku(sku, withCompletion: self.convertResponseFromGlassfyGlue(call));
    }
    
    @objc func restorePurchases(_ call: CAPPluginCall) {
        GlassfyGlue.restorePurchases(completion: self.convertResponseFromGlassfyGlue(call));
    }

    @objc func setAttribution(_ call: CAPPluginCall) {
        guard let type = call.getInt("type") else {
            call.reject("invalid/missing Type")
            return
        }
        guard let value = call.getString("value") else {
            call.reject("invalid/missing value")
            return
        }

        GlassfyGlue.setAttributionType(NSNumber(integerLiteral: type), value:value, completion: self.convertResponseFromGlassfyGlue(call));
    }
    
    @objc func setAttributions(_ call: CAPPluginCall) {
        guard let items = call.getArray("items") else {
            call.reject("invalid/missing items")
            return
        }

        GlassfyGlue.setAttributions(items, completion:  self.convertResponseFromGlassfyGlue(call));
    }
}
