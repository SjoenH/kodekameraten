webpackJsonp([12],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailPageModule", function() { return PersonDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_detail__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PersonDetailPageModule = (function () {
    function PersonDetailPageModule() {
    }
    return PersonDetailPageModule;
}());
PersonDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__person_detail__["a" /* PersonDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__person_detail__["a" /* PersonDetailPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */],
        ],
    })
], PersonDetailPageModule);

//# sourceMappingURL=person-detail.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appconfig_appconfig__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_content_content__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(261);
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
 * Generated class for the PersonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonDetailPage = (function () {
    function PersonDetailPage(navCtrl, navParams, acp, modalCtr, cntProvider, viewCtrl, imageViewerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.acp = acp;
        this.modalCtr = modalCtr;
        this.cntProvider = cntProvider;
        this.viewCtrl = viewCtrl;
        this.imageViewerCtrl = imageViewerCtrl;
        this.person = this.navParams.get('personData');
        this.user = this.acp.getUser();
    }
    PersonDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonDetailPage');
    };
    PersonDetailPage.prototype.onClick = function (imageToView) {
        var viewer = this.imageViewerCtrl.create(imageToView);
        viewer.present();
    };
    PersonDetailPage.prototype.edit = function () {
        var _this = this;
        var modal = this.modalCtr.create('PersonCreatorPage', { person: this.person });
        modal.onDidDismiss(function (updatedData) {
            if (updatedData) {
                if (updatedData.delete === true) {
                    _this.cntProvider.delPerson(updatedData);
                    _this.viewCtrl.dismiss({ refresh: true });
                }
                else {
                    _this.person = updatedData;
                    _this.cntProvider.updatePerson(updatedData);
                }
            }
        });
        modal.present();
    };
    PersonDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return PersonDetailPage;
}());
PersonDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-person-detail',template:/*ion-inline-start:"/home/henry/Documents/GitHub/festivus/src/pages/person-detail/person-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-title>newsDetail</ion-title> -->\n    <ion-buttons>\n      <button ion-button padding (click)="close()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right *ngIf="user.admin">\n      <button ion-button padding color="primary" (click)="edit(person)">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="center">\n    <img src={{person.imgURL}} imageViewer tappable/>\n    <ion-card-header style="white-space: normal;">\n      <h1>{{person.firstName}} {{person.lastName}}</h1>\n      <p class="align-right">{{person.role}}</p>\n    </ion-card-header>\n    <ion-card-content>\n      <div [innerHTML]="person.about"></div>\n      <!-- {{person.category}} -->\n      <span *ngIf="person.weblink">\n        <hr>\n        <a href="{{person.weblink}}">\n          <button ion-button icon-start full>\n            <ion-icon name="globe" item-left></ion-icon>\n            {{person.weblink}}\n          </button>\n        </a>\n      </span>\n      <span *ngIf="person.number">\n        <hr>\n        <a href="tel:{{person.number}}">\n          <button ion-button icon-start full>\n            <ion-icon name="call" item-left></ion-icon>\n            {{person.number}}\n          </button>\n        </a>\n      </span>\n      <span *ngIf="person.email">\n        <hr>\n        <a href="mailto:{{person.email}}">\n          <button ion-button icon-start full>\n            <ion-icon name="mail" item-left></ion-icon>\n            {{person.email}}\n          </button>\n        </a>\n      </span>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<!-- //////////PERSON////////////////////////\n                firstName: person.firstName,\n                lastName: person.lastName,\n    Todo? =>    role: person.role,\n                about: person.about,\n                number: person.number,\n                email: person.email,\n                weblink: person.weblink,\n                arrangement: person.arrangement,\nNot in use? =>  channel: person.channel,\nKeep hidden? => team: person.team\n//////////////////////////////////////////////-->\n'/*ion-inline-end:"/home/henry/Documents/GitHub/festivus/src/pages/person-detail/person-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appconfig_appconfig__["a" /* AppConfigProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_content_content__["a" /* ContentProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */]])
], PersonDetailPage);

//# sourceMappingURL=person-detail.js.map

/***/ })

});
//# sourceMappingURL=12.js.map