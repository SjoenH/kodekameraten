(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/*******************************************************************************
 * Copyright (c) 2019. All rights reserved.
 * Henry S. Sjøen aka. Kodekameraten.
 * For business inquiries: henry@kodekameraten.no
 ******************************************************************************/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]],
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n  ~ Copyright (c) 2019. All rights reserved.\n  ~ Henry S. Sjøen aka. Kodekameraten.\n  ~ For business inquiries: henry@kodekameraten.no\n  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n\n<!--<ion-header class=\"hidden\" padding>-->\n<!--</ion-header>-->\n\n<ion-content>\n    <ion-card (click)=\"showContentModal(post)\" *ngFor=\"let post of posts | async\" class=welcome-card tappable>\n        <ion-img *ngIf=\"post.img\" src={{post.img}}></ion-img>\n        <ion-card-header>\n            <ion-card-title>{{post.title}}</ion-card-title>\n            <ion-card-subtitle\n                    *ngIf=\"post.datetime\">{{ post.datetime.toDate() | date:'EEEE d.M.yy, HH:mm'}}</ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"post.startTime\">\n                {{ post.startTime.toDate() | date:'EEEE d.M.yy, HH:mm'}}\n                <span *ngIf=\"post.endTime\">\n          -> {{ post.endTime.toDate() | date:'EEEE d.M.yy, HH:mm'}}\n        </span>\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <p [innerHTML]=\"post.content\"></p>\n            <br>\n            <ion-buttons>\n                <ion-button *ngIf=\"post.number\">\n                    <ion-icon class=\"hints\" name=\"call\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n                <ion-button *ngIf=\"post.url\">\n                    <ion-icon class=\"hints\" name=\"globe\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-card-content>\n    </ion-card>\n    <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\n        <ion-fab-button (click)=\"createNewPush()\" tappable>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"goToUserPage()\" tappable>\n            <ion-icon name=\"person\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*!******************************************************************************\n * Copyright (c) 2019. All rights reserved.\n * Henry S. Sjøen aka. Kodekameraten.\n * For business inquiries: henry@kodekameraten.no\n ******************************************************************************/\n.welcome-card ion-img {\n  max-height: 200px;\n  overflow: hidden; }\n.welcome-card {\n  transition: all 220ms ease-in-out; }\n.welcome-card:hover {\n  -webkit-transform: scale(0.99, 0.99);\n          transform: scale(0.99, 0.99); }\n.hints {\n  color: gray; }\n.welcome-card ion-card-content p {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9oZW5yeS9naXQvaW1wdWxzLWFkbWluL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Z0ZBSWdGO0FBRWhGO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0Usa0NBQWlDLEVBRWxDO0FBRUQ7RUFDRSxxQ0FBNEI7VUFBNUIsNkJBQTRCLEVBQzdCO0FBRUQ7RUFDRSxZQUFXLEVBQ1o7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogSGVucnkgUy4gU2rDuGVuIGFrYS4gS29kZWthbWVyYXRlbi5cbiAqIEZvciBidXNpbmVzcyBpbnF1aXJpZXM6IGhlbnJ5QGtvZGVrYW1lcmF0ZW4ubm9cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ud2VsY29tZS1jYXJkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDIyMG1zIGVhc2UtaW4tb3V0OyB9XG5cbi53ZWxjb21lLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTksIDAuOTkpOyB9XG5cbi5oaW50cyB7XG4gIGNvbG9yOiBncmF5OyB9XG5cbi53ZWxjb21lLWNhcmQgaW9uLWNhcmQtY29udGVudCBwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiIsIi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogSGVucnkgUy4gU2rDuGVuIGFrYS4gS29kZWthbWVyYXRlbi5cbiAqIEZvciBidXNpbmVzcyBpbnF1aXJpZXM6IGhlbnJ5QGtvZGVrYW1lcmF0ZW4ubm9cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2VsY29tZS1jYXJkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDIyMG1zIGVhc2UtaW4tb3V0O1xuICAvLyBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxuLndlbGNvbWUtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OSwgMC45OSk7XG59XG5cbi5oaW50cyB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ud2VsY29tZS1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgcHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers.service */ "./src/app/helpers.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*******************************************************************************
 * Copyright (c) 2019. All rights reserved.
 * Henry S. Sjøen aka. Kodekameraten.
 * For business inquiries: henry@kodekameraten.no
 ******************************************************************************/
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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







var Tab1Page = /** @class */ (function () {
    function Tab1Page(helper, db, storage, modalCtrl, router) {
        this.helper = helper;
        this.db = db;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.ionViewWillEnter();
    }
    Tab1Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('domainPath').then(function (path) {
            //Quick-fix: For bug when starting up for the first time.
            if (path == null) {
                _this.ionViewWillEnter();
                return;
            }
            //Make sure that the tab is updated with correct domain,
            // but only refresh content if domain has changed.
            if (_this.path !== path) {
                _this.path = path;
                _this.itemsCollection = _this.posts = _this.db.collection(path + 'news', function (ref) { return ref.orderBy('startTime'); });
                _this.posts = _this.itemsCollection.valueChanges();
                _this.path = path;
            }
        });
    };
    Tab1Page.prototype.showContentModal = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"],
                                componentProps: {
                                    data: __assign({}, data)
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        modal.onDidDismiss().then(function (e) {
                            if (e.data) {
                                console.log("WE NEED TO UPDATE! 🤯", e.data);
                                //TODO: Do the update procedure! Yes sir!👮‍
                                //Something like...
                                // this.itemsCollection.doc(this.path + 'news/'+documentID).update(e.data)
                                _this.updateItem(e.data);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.createNewPush = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"],
                            componentProps: {
                            // data: {newThing: true}
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        modal.onDidDismiss().then(function (e) {
                            if (e.data) {
                                console.log("SEND THIS TO THE SERVER!", e.data);
                                _this.addItem(e.data);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.goToUserPage = function () {
        this.router.navigate(['user']);
    };
    Tab1Page.prototype.addItem = function (item) {
        this.itemsCollection.add(item);
    };
    Tab1Page.prototype.updateItem = function (item) {
        // this.itemsCollection.snapshotChanges().doc(item.id).update(item)
        // console.log(item);
    };
    Tab1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map