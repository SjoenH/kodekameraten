(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n  ~ Copyright (c) 2019. All rights reserved.\n  ~ Henry S. Sjøen aka. Kodekameraten.\n  ~ For business inquiries: henry@kodekameraten.no\n  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->\n\n<ion-toolbar color=\"primary\">\n    <ion-searchbar\n            (ionInput)=\"filterItems($event)\"\n            [(ngModel)]=\"searchBar\"\n            [showCancelButton]=true\n            placeholder=\"Søk\">\n    </ion-searchbar>\n</ion-toolbar>\n\n<ion-content>\n    <!--<table style=\"table-layout: fixed; width: 100%\">-->\n    <!--<tr>-->\n    <!--<th>title</th>-->\n    <!--<th>content</th>-->\n    <!--<th>img</th>-->\n    <!--<th>startTime</th>-->\n    <!--<th>endTime</th>-->\n    <!--<th>location</th>-->\n    <!--</tr>-->\n    <!--<tr *ngFor=\"let event of events\">-->\n    <!--<td>-->\n    <!--<input type=\"text\" ngModel=\"{{event.title}}\"/>-->\n    <!--</td>-->\n    <!--<td>-->\n    <!--<ion-textarea value=\"{{event.content}}\"></ion-textarea>-->\n    <!--</td>-->\n    <!--<td>-->\n    <!--<input type=\"text\" ngModel=\"{{event.img}}\"/>-->\n    <!--</td>-->\n    <!--<td>-->\n    <!--<input type=\"text\" ngModel=\"{{event.startTime}}\"/>-->\n    <!--</td>-->\n    <!--<td>-->\n    <!--<input type=\"text\" ngModel=\"{{event.endTime}}\"/>-->\n    <!--</td>-->\n    <!--<td>-->\n    <!--<input type=\"text\" ngModel=\"{{event.location}}\"/>-->\n    <!--</td>-->\n    <!--<td>-->\n    <!--<ion-button>-->\n    <!--Slett hendelse-->\n    <!--</ion-button>-->\n    <!--</td>-->\n    <!--</tr>-->\n    <!--<tr>-->\n    <!--<ion-button color=\"secondary\">Legg til hendelse</ion-button>-->\n    <!--</tr>-->\n    <!--</table>-->\n\n    <ion-list *ngFor=\"let event of filteredEvents\">\n        <ion-item (click)=\"showContentModal(event)\" [id]=\"event.startTime.seconds\" class=\"event-card\" tappable>\n    <span class=\"staticWidth\">\n    <p>{{ event.startTime.toDate() | date:'HH:mm'}}\n        <br>{{ event.startTime.toDate() | date:'EEE dd.MM'}}\n    </p>\n    </span>\n            <ion-avatar *ngIf=\"event.img\" slot=\"end\">\n                <img src={{event.img}}/>\n            </ion-avatar>\n            <ion-label>\n                <h2>{{event.title}}</h2>\n                <h3 *ngIf=\"event.location\">\n                    {{event.location}}</h3>\n                <p>{{event.content}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\n        <ion-fab-button (click)=\"createNewEvent()\" tappable>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"scrollToCurrentlyActiveOrNextEvent()\" tappable>\n            <ion-icon name=\"clock\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*!******************************************************************************\n * Copyright (c) 2019. All rights reserved.\n * Henry S. Sjøen aka. Kodekameraten.\n * For business inquiries: henry@kodekameraten.no\n ******************************************************************************/\n.event-card {\n  transition: all 220ms ease-in-out; }\n.event-card:hover {\n  -webkit-transform: scale(0.99, 0.99);\n          transform: scale(0.99, 0.99);\n  transition: all 220ms ease-in-out;\n  color: var(--ion-color-primary); }\n.staticWidth {\n  text-align: justify;\n  width: 90px;\n  font-size: 0.8em;\n  overflow: hidden;\n  position: static; }\n.active {\n  color: var(--ion-color-primary);\n  -webkit-transform: scale(1.02, 1.02);\n          transform: scale(1.02, 1.02); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9oZW5yeS9naXQvaW1wdWxzLWFkbWluL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7Ozs7Z0ZBSWdGO0FBRWhGO0VBQ0Usa0NBQWlDLEVBQ2xDO0FBRUQ7RUFDRSxxQ0FBNEI7VUFBNUIsNkJBQTRCO0VBQzVCLGtDQUFpQztFQUNqQyxnQ0FBK0IsRUFDaEM7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLGdDQUErQjtFQUMvQixxQ0FBNEI7VUFBNUIsNkJBQTRCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogSGVucnkgUy4gU2rDuGVuIGFrYS4gS29kZWthbWVyYXRlbi5cbiAqIEZvciBidXNpbmVzcyBpbnF1aXJpZXM6IGhlbnJ5QGtvZGVrYW1lcmF0ZW4ubm9cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uZXZlbnQtY2FyZCB7XG4gIHRyYW5zaXRpb246IGFsbCAyMjBtcyBlYXNlLWluLW91dDsgfVxuXG4uZXZlbnQtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OSwgMC45OSk7XG4gIHRyYW5zaXRpb246IGFsbCAyMjBtcyBlYXNlLWluLW91dDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgfVxuXG4uc3RhdGljV2lkdGgge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHN0YXRpYzsgfVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyLCAxLjAyKTsgfVxuIiwiLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBIZW5yeSBTLiBTasO4ZW4gYWthLiBLb2Rla2FtZXJhdGVuLlxuICogRm9yIGJ1c2luZXNzIGlucXVpcmllczogaGVucnlAa29kZWthbWVyYXRlbi5ub1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmV2ZW50LWNhcmQge1xuICB0cmFuc2l0aW9uOiBhbGwgMjIwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ldmVudC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5LCAwLjk5KTtcbiAgdHJhbnNpdGlvbjogYWxsIDIyMG1zIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc3RhdGljV2lkdGgge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMiwgMS4wMik7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers.service */ "./src/app/helpers.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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






var Tab2Page = /** @class */ (function () {
    function Tab2Page(helper, db, storage, modalCtrl) {
        this.helper = helper;
        this.db = db;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.events = [];
        this.filteredEvents = [];
        this.ionViewWillEnter();
    }
    Tab2Page.prototype.eventIsActive = function (event) {
        if (event.startTime === undefined || event.endTime === undefined) {
            return false;
        }
        var now = new Date().getTime() / 1000;
        var startTime = event.startTime.seconds;
        var endTime = event.endTime.seconds;
        return startTime <= now && now <= endTime;
    };
    Tab2Page.prototype.inTheFuture = function (event) {
        return (new Date().getTime() / 1000 < event.startTime.seconds);
    };
    Tab2Page.prototype.scrollIntoView = function (event) {
        console.log("Trying to scroll to event", event);
        var element = document.getElementById(event.startTime.seconds);
        if (element != null) {
            console.log("Element found, scrolling to", element);
            element.classList.add("active");
            element.scrollIntoView({ behavior: "smooth" });
            return true;
        }
        else {
            console.warn("Element could not be found...", event);
            return false;
        }
    };
    Tab2Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.setupDBConnection()
            .then(function () {
            _this.copyEventsFromPromiseIntoArray();
        });
    };
    Tab2Page.prototype.showContentModal = function (data) {
        this.helper.showContentModal(data);
    };
    Tab2Page.prototype.copyEventsFromPromiseIntoArray = function () {
        var _this = this;
        this.observableEvents.forEach(function (events) {
            _this.events = [];
            for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                var event_1 = events_1[_i];
                _this.events.push(event_1);
            }
            _this.filteredEvents = _this.events;
        });
    };
    Tab2Page.prototype.scrollToCurrentlyActiveOrNextEvent = function () {
        this.filteredEvents = this.events;
        this.searchBar = '';
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var e = _a[_i];
            if (this.eventIsActive(e) || this.inTheFuture(e)) {
                this.scrollIntoView(e);
                return;
            }
            else {
                this.removeActiveClass(e);
            }
        }
    };
    Tab2Page.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() !== ' ') {
            this.filteredEvents = this.events.filter(function (item) {
                return item.title.toLowerCase().includes(val.toLowerCase());
            });
        }
        else {
            this.filteredEvents = this.events;
        }
    };
    Tab2Page.prototype.createNewEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"],
                            componentProps: {
                                data: { newThing: true }
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
    Tab2Page.prototype.setupDBConnection = function () {
        var _this = this;
        return this.storage.get('domainPath').then(function (path) {
            if (_this.path !== path) {
                _this.itemsCollection = _this.db.collection(path + 'program', function (ref) { return ref.orderBy('startTime'); });
                _this.observableEvents = _this.itemsCollection.valueChanges();
                _this.observableEvents.subscribe(function () {
                    _this.copyEventsFromPromiseIntoArray();
                });
                _this.path = path;
            }
        });
    };
    Tab2Page.prototype.removeActiveClass = function (e) {
        var element = document.getElementById(e.startTime.seconds);
        if (element != null) {
            element.classList.remove("active");
        }
    };
    Tab2Page.prototype.addItem = function (item) {
        this.itemsCollection.add(item);
    };
    Tab2Page.prototype.removeItem = function (item) {
        this.itemsCollection.doc(item).delete();
    };
    Tab2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_service__WEBPACK_IMPORTED_MODULE_1__["HelpersService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map