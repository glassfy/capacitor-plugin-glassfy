"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.GlassfyPaywall = void 0;
var index_1 = require("./index");
var GlassfyPaywall = /** @class */ (function () {
    function GlassfyPaywall() {
    }
    GlassfyPaywall.paywall = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options.listener) {
                            GlassfyPaywall.setupListener(options.listener);
                        }
                        return [4 /*yield*/, index_1.Glassfy._paywall({ remoteConfig: options.remoteConfig })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GlassfyPaywall.setupListener = function (listener) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                index_1.Glassfy.addListener('paywallEvent', function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var eventName, close, _a, error_1, transaction, error_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                eventName = event.event;
                                close = function (transaction, error) {
                                    if (listener.onClose) {
                                        listener.onClose(transaction, error);
                                    }
                                    else {
                                        GlassfyPaywall.close();
                                    }
                                };
                                _a = eventName;
                                switch (_a) {
                                    case "onClose": return [3 /*break*/, 1];
                                    case "onLink": return [3 /*break*/, 2];
                                    case "onRestore": return [3 /*break*/, 6];
                                    case "onPurchase": return [3 /*break*/, 11];
                                }
                                return [3 /*break*/, 16];
                            case 1:
                                close(event.transaction, event.error);
                                return [3 /*break*/, 17];
                            case 2:
                                if (!listener.onLink) return [3 /*break*/, 3];
                                listener.onLink(event.url);
                                return [3 /*break*/, 5];
                            case 3: return [4 /*yield*/, index_1.Glassfy._openUrl({ url: event.url })];
                            case 4:
                                _b.sent();
                                _b.label = 5;
                            case 5: return [3 /*break*/, 17];
                            case 6:
                                if (!listener.onRestore) return [3 /*break*/, 7];
                                listener.onRestore();
                                return [3 /*break*/, 10];
                            case 7:
                                _b.trys.push([7, 9, , 10]);
                                return [4 /*yield*/, index_1.Glassfy.restorePurchases()];
                            case 8:
                                _b.sent();
                                close(null, null);
                                return [3 /*break*/, 10];
                            case 9:
                                error_1 = _b.sent();
                                close(null, error_1);
                                return [3 /*break*/, 10];
                            case 10: return [3 /*break*/, 17];
                            case 11:
                                if (!listener.onPurchase) return [3 /*break*/, 12];
                                listener.onPurchase(event.sku);
                                return [3 /*break*/, 15];
                            case 12:
                                _b.trys.push([12, 14, , 15]);
                                return [4 /*yield*/, index_1.Glassfy.purchaseSku({ sku: event.sku })];
                            case 13:
                                transaction = _b.sent();
                                close(transaction, null);
                                return [3 /*break*/, 15];
                            case 14:
                                error_2 = _b.sent();
                                close(null, error_2);
                                return [3 /*break*/, 15];
                            case 15: return [3 /*break*/, 17];
                            case 16: return [3 /*break*/, 17];
                            case 17: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    GlassfyPaywall.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index_1.Glassfy.removeAllListeners('paywallEvent');
                        return [4 /*yield*/, index_1.Glassfy._closePaywall()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return GlassfyPaywall;
}());
exports.GlassfyPaywall = GlassfyPaywall;
