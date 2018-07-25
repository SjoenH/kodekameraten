webpackJsonp([12],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonCreatorPageModule", function() { return PersonCreatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_creator__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonCreatorPageModule = (function () {
    function PersonCreatorPageModule() {
    }
    return PersonCreatorPageModule;
}());
PersonCreatorPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__person_creator__["a" /* PersonCreatorPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__person_creator__["a" /* PersonCreatorPage */]),
        ],
    })
], PersonCreatorPageModule);

//# sourceMappingURL=person-creator.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonCreatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appconfig_appconfig__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PersonCreatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonCreatorPage = (function () {
    function PersonCreatorPage(navCtrl, navParams, acp, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.acp = acp;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.person = this.navParams.get('person');
        this.user = this.acp.getUser();
    }
    PersonCreatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonCreatorPage');
    };
    PersonCreatorPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PersonCreatorPage.prototype.saveChanges = function () {
        this.viewCtrl.dismiss(this.person);
    };
    PersonCreatorPage.prototype.delete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete message?',
            message: 'Er du helt sikker?',
            buttons: [
                {
                    text: 'Behold',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: 'Slett',
                    handler: function () {
                        _this.person.delete = true;
                        _this.viewCtrl.dismiss(_this.person);
                        return;
                    }
                }
            ]
        });
        alert.present();
    };
    return PersonCreatorPage;
}());
PersonCreatorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-person-creator',template:/*ion-inline-start:"/Users/henry/Documents/GitHub/Oase/Oase-App/src/pages/person-creator/person-creator.html"*/'<!--\n  Generated template for the PersonCreatorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PersonCreator</ion-title>\n    <ion-buttons>\n      <button ion-button padding (click)="close()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button padding (click)="saveChanges()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="center">\n    <p>Det med * er viktigst. Teamnavn blir brukt til gruppering av flere personer</p>\n    imgURL:\n    <input type="text" [(ngModel)]="person.imgURL"/>\n    <hr>\n    firstName*:\n    <input type="text" [(ngModel)]="person.firstName"/>\n    <hr>\n    lastName*:\n    <input type="text" [(ngModel)]="person.lastName"/>\n    <hr>\n    arrangement/spor:\n    <input type="text" [(ngModel)]="person.arrangement"/>\n    <hr>\n    channel?:\n    <input type="text" [(ngModel)]="person.channel"/>\n    <hr>\n    team*:\n    <input type="text" [(ngModel)]="person.team"/>\n    <hr>\n    rolle:\n    <input type="text" [(ngModel)]="person.role"/>\n    <hr>\n    content:\n    <textarea cols="50%" rows="10" [(ngModel)]="person.about"></textarea>\n    <hr>\n    weblink:\n    <input type="url" [(ngModel)]="person.weblink"/>\n    <hr>\n    number:\n    <input type="number" [(ngModel)]="person.number"/>\n    <hr>\n    email:\n    <input type="email" [(ngModel)]="person.email"/>\n    <hr>\n    <h2>Preview</h2>\n    <ion-card class="center">\n      <img src={{person.imgURL}} imageViewer tappable/>\n      <ion-card-header style="white-space: normal;">\n        <h1>{{person.firstName}} {{person.lastName}}</h1>\n        <p class="align-right">{{person.role}}</p>\n      </ion-card-header>\n      <ion-card-content>\n        <div [innerHTML]="person.about"></div>\n        <!-- {{person.category}} -->\n        <span *ngIf="person.weblink">\n          <hr>\n          <a href="{{person.weblink}}">\n            <button ion-button icon-start full>\n              <ion-icon name="globe" item-left></ion-icon>\n              {{person.weblink}}\n            </button>\n          </a>\n        </span>\n        <span *ngIf="person.number">\n          <hr>\n          <a href="tel:{{person.number}}">\n            <button ion-button icon-start full>\n              <ion-icon name="call" item-left></ion-icon>\n              {{person.number}}\n            </button>\n          </a>\n        </span>\n        <span *ngIf="person.email">\n          <hr>\n          <a href="mailto:{{person.email}}">\n            <button ion-button icon-start full>\n              <ion-icon name="mail" item-left></ion-icon>\n              {{person.email}}\n            </button>\n          </a>\n        </span>\n      </ion-card-content>\n    </ion-card>\n  </ion-card>\n  <hr>\n  <button ion-button color="danger" *ngIf="person._id" (click)="delete()" full>Slett person</button>\n</ion-content>\n'/*ion-inline-end:"/Users/henry/Documents/GitHub/Oase/Oase-App/src/pages/person-creator/person-creator.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appconfig_appconfig__["a" /* AppConfigProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PersonCreatorPage);

//# sourceMappingURL=person-creator.js.map

/***/ })

});
//# sourceMappingURL=12.js.map