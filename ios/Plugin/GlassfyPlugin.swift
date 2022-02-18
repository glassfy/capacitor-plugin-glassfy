import Capacitor
import Foundation
import GlassfyGlue

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(GlassfyPlugin)
public class GlassfyPlugin: CAPPlugin {
    
    
    @objc func sdkVersion(_ call: CAPPluginCall) {
        GlassfyGlue.sdkVersion { result, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            if let version = result {
                
                call.resolve(version)
            }
        }
    }

    @objc func initialize(_ call: CAPPluginCall) {
        guard let apiKey = call.getString("apiKey"),
              let watcherMode = call.getBool("watcherMode")
        else {
            call.reject("invalid initialize parameters")
            return
        }
        GlassfyGlue.initialize(withApiKey: apiKey, watcherMode: watcherMode) { _, _ in
            call.resolve()
        }
    }

    @objc func offerings(_ call: CAPPluginCall) {
        GlassfyGlue.offerings { offerings, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            if let offerings = offerings {
                call.resolve(offerings)
            }
        }
    }

    @objc func skuWithIdentifier(_ call: CAPPluginCall) {
        guard let identifier = call.getString("identifier") else {
            call.reject("invalid skuWithIdentifier parameters")
            return
        }
        GlassfyGlue.sku(withIdentifier: identifier) { sku, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            if let sku = sku {
                call.resolve(sku)
            }
        }
    }
    
    @objc func login(_ call: CAPPluginCall) {
        guard let userid = call.getString("userid") else {
            call.reject("invalid login parameters")
            return
        }
        GlassfyGlue.loginUser(userid) { _, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            call.resolve()
        }
    }
    
    @objc func logout(_ call: CAPPluginCall) {
        GlassfyGlue.logoutUser() { _, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            call.resolve()
        }
    }
    
    @objc func permissions(_ call: CAPPluginCall) {
        GlassfyGlue.permissions() { permissions, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            if let permissions = permissions {
                call.resolve(permissions)
            }
        }
    }
    @objc func purchaseSku(_ call: CAPPluginCall) {
        guard let sku = call.getObject("sku") else {
            call.reject("Invalid SKU")
            return
        }
                
        GlassfyGlue.purchaseSku(sku) { sku, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            if let sku = sku {
                call.resolve(sku)
            } else {
                call.reject("impossible to purchase the SKU")
            }
        }
    }
    
    @objc func restorePurchases(_ call: CAPPluginCall) {
        GlassfyGlue.restorePurchases { permissions, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            if let permissions = permissions {
                call.resolve(permissions)
            }
        }
    }
    
    
    @objc func setLogLevel(_ call: CAPPluginCall) {
        guard let logLevel = call.getInt("logLevel") else {
            call.reject("invalid login parameters")
            return
        }
        if let ll = Glassfy.LogLevel(rawValue: UInt(logLevel)) {
            Glassfy.log(level: ll)
        }
        call.resolve()
    }
    
    @objc func setDeviceToken(_ call: CAPPluginCall) {
        guard let token = call.getString("token") else {
            call.reject("invalid setDeviceToken parameters")
            return
        }
        
        GlassfyGlue.setDeviceToken(token) { _, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            call.resolve()
        }
        call.resolve()
    }
    
    
    @objc func setExtraUserProperty(_ call: CAPPluginCall) {
        guard let extra = call.getObject("extra") else {
            call.reject("invalid setDeviceToken parameters")
            return
        }
        
        GlassfyGlue.setExtraUserProperty(extra) { _, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            call.resolve()
        }
        call.resolve()
    }

    @objc func getExtraUserProperty(_ call: CAPPluginCall) {
        
        GlassfyGlue.getExtraUserProperty() { extra, error in
            if let error = error {
                call.reject(error.localizedDescription)
                return
            }
            if let extra = extra {
                call.resolve(extra)
            }
        }
        call.resolve()
    }
}
