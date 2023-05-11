"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.GlassfyWeb = void 0;
var core_1 = require("@capacitor/core");
var GlassfyWeb = /** @class */ (function (_super) {
    __extends(GlassfyWeb, _super);
    function GlassfyWeb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlassfyWeb.prototype.sdkVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.initialize = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.setLogLevel = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.offerings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.purchaseHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.permissions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.skuWithId = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.skuWithIdAndStore = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.connectCustomSubscriber = function (options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    };
    GlassfyWeb.prototype.connectPaddleLicenseKey = function (options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    };
    GlassfyWeb.prototype.connectGlassfyUniversalCode = function (options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    };
    GlassfyWeb.prototype.setEmailUserProperty = function (options) {
        console.log(options);
        throw this.unimplemented('Not supported on web.');
    };
    GlassfyWeb.prototype.setDeviceToken = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.setExtraUserProperty = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.getUserProperty = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.purchaseSku = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.restorePurchases = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.setAttribution = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype.setAttributions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype._paywall = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(options);
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype._closePaywall = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    GlassfyWeb.prototype._openUrl = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw this.unimplemented('Not supported on web.');
            });
        });
    };
    return GlassfyWeb;
}(core_1.WebPlugin));
exports.GlassfyWeb = GlassfyWeb;
