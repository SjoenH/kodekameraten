webpackJsonp([16],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(586);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
        ],
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AboutPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/henry/Documents/Oase/Oase-App/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Om App-en</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card full>\n    <ion-card-content>\n      <h2>Utvikler</h2>\n      <p>\n        Denne appen for Åpen Himmel er utviklet av Henry Skorpe Sjøen (også kjent som Kodekameraten) for IMI-Kirken.</p>\n      <a ion-button round small href="mailto:henry@kodekameraten.no">Kontakt utvikler</a>\n      <hr>\n      <h2>Innhold og Personvern</h2>\n      <p>Vi samler ikke inn personlig data av våre brukere uten å\n        <b>1.</b> gi implisitt beskjed om dette og\n        <b>2.</b> får samtykke fra deg som bruker.</p>\n      <p>Det er mulig å opprette en bruker i App-en, men dette er ikke nødvendig eller tenkt for sluttbruker.\n        Brukerinnlogging\n        er kun brukt for administrering av appen.</p>\n      <p>Vi publiserer ikke personopplysninger uten et frivillig, informert og uttrykkelig samtykke fra den\n        opplysningene gjelder.\n        Vi sørger også for at disse opplysningene som publiseres skal være korrekte og oppdaterte. Et samtykke kan\n        trekkes\n        tilbake når som helst. Dersom du ønsker å fjerne data om deg fra denne App-en eller våre nettsider\n        <i>imikirken.no</i>, ikke nøl med å ta kontakt med oss på\n        <b>Telefon:</b> 51 84 21 60 eller\n        <b>E-mail:</b> hei@imikirken.no</p>\n      <hr>\n      <a ion-button href="tel:004751842160">Ring oss</a>\n      <a ion-button href="mailto:hei@imikirken.no">Send oss mail</a>\n      <a ion-button href="https://slettmeg.no/lover-og-rettigheter/personvern">Les mer om dine rettigheter</a>\n      <a ion-button href="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens_en">Your\n        Personal data rights</a>\n      <hr>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/henry/Documents/Oase/Oase-App/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=16.js.map