webpackJsonp([7],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(602);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutorialPageModule = (function () {
    function TutorialPageModule() {
    }
    return TutorialPageModule;
}());
TutorialPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
        ]
    })
], TutorialPageModule);

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appconfig_appconfig__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage, apc) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.apc = apc;
        this.showSkip = false;
        this.sted = 'TenOase';
        this.apc.setarrangement(this.sted);
        this.subscribeTo(this.sted);
        this.BoJoKo = this.apc.isSubscribedToTrack('BoJoKo');
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.setRoot('TabsPage').then(function () {
            _this.navCtrl.popToRoot();
            _this.storage.set('hasSeenTutorial', 'true');
            _this.storage.set('v1.1.0', true);
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(true);
    };
    TutorialPage.prototype.nextSlide = function () {
        this.slides.slideNext();
    };
    TutorialPage.prototype.subscribeTo = function (topic) {
        this.apc.addTrack(topic);
    };
    TutorialPage.prototype.togggleChildren = function () {
        if (this.BoJoKo === true) {
            this.subscribeTo('BoJoKo');
        }
        else {
            this.unsubscribeFrom('BoJoKo');
        }
    };
    TutorialPage.prototype.unsubscribeFrom = function (topic) {
        this.apc.removeTrack(topic);
    };
    TutorialPage.prototype.clearTracks = function () {
        this.apc.clearAllTracks();
    };
    return TutorialPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Slides */])
], TutorialPage.prototype, "slides", void 0);
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"/Users/henry/Documents/GitHub/Oase/Oase-App/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="false">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <h2 class="slide-title">\n        Velkommen til\n        <b>TenOase</b>!\n      </h2>\n      <p>\n        Her finner du program for stevnet og all annen informasjon som du kan komme til å trenge.\n      </p>\n      <button ion-button round (click)="startApp()">Gå Videre</button>\n      <br>\n      <img src="./assets/Oase_logo_anim.svg" class="logo"/>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/henry/Documents/GitHub/Oase/Oase-App/src/pages/tutorial/tutorial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appconfig_appconfig__["a" /* AppConfigProvider */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=7.js.map