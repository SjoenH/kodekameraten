webpackJsonp([10],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(600);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = (function () {
    function UserPageModule() {
    }
    return UserPageModule;
}());
UserPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
    })
], UserPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appconfig_appconfig__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_content_content__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = (function () {
    function SettingsPage(navCtrl, viewCtrl, acp, contentProvider, storage, modalCtr, cntProvider, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.acp = acp;
        this.contentProvider = contentProvider;
        this.storage = storage;
        this.modalCtr = modalCtr;
        this.cntProvider = cntProvider;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.user = this.acp.getUser();
        this.VoksenCamp = acp.isSubscribedToTrack('VoksenCamp');
        this.KidsCamp = acp.isSubscribedToTrack('KidsCamp');
        this.YouthCamp = acp.isSubscribedToTrack('YouthCamp');
        this.storage.get('datetimeLast').then(function (value) {
            _this.datetimeLast = value;
        });
        this.storage.get('hideCountdown').then(function (value) {
            _this.hideCountdown = value;
        });
        this.storage.get('hideCountdown').then(function (value) {
            _this.hideCountdown = value;
        });
    }
    SettingsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SettingsPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    SettingsPage.prototype.changeArrangement = function () {
        var _this = this;
        this.navCtrl.pop().then(function () {
            _this.navCtrl.push('HomePage');
        });
    };
    SettingsPage.prototype.showTutorial = function () {
        var _this = this;
        this.navCtrl.pop().then(function () {
            _this.navCtrl.push('TutorialPage');
        });
    };
    SettingsPage.prototype.showAboutThisApp = function () {
        this.navCtrl.push('AboutPage');
    };
    SettingsPage.prototype.toggleDateBeforeInfo = function () {
        if (this.datetimeLast === true)
            this.storage.set('datetimeLast', true);
        else {
            this.storage.set('datetimeLast', false);
        }
    };
    SettingsPage.prototype.toggleHideCountdown = function () {
        if (this.hideCountdown === true)
            this.storage.set('hideCountdown', true);
        else {
            this.storage.set('hideCountdown', false);
        }
    };
    SettingsPage.prototype.toggleMedarbeider = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Medarbeiderinfo',
            message: 'For å sla på medarbeiderinfo må du vite passordet.',
            inputs: [
                {
                    name: 'passord',
                    placeholder: 'passord',
                    type: 'password',
                }
            ],
            buttons: [
                {
                    text: 'Avbryt',
                    handler: function () {
                        _this.medarbeider = false;
                        return;
                    }
                },
                {
                    text: 'Logg inn',
                    handler: function (data) {
                        if (data.passord === 'Medarbeider2018') {
                            _this.enableMedarbeider();
                            _this.showAlert('Suksess', 'Medarbeiderinfo er nå slått på.');
                        }
                        else {
                            _this.medarbeider = false;
                            _this.showAlert('Feil passord', '');
                        }
                        return;
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.enableMedarbeider = function () {
        if (this.medarbeider === true) {
            this.storage.set('medarbeider', true);
            this.acp.addTrack('Medarbeider');
        }
        else {
            this.storage.set('medarbeider', false);
            this.acp.removeTrack('Medarbeider');
        }
    };
    SettingsPage.prototype.newPerson = function () {
        var _this = this;
        this.acp.getArrangement().then(function (arrangement) {
            var person = {
                arrangement: "" + arrangement,
            };
            var modal = _this.modalCtr.create('PersonCreatorPage', { person: person });
            modal.onDidDismiss(function (freshData) {
                if (freshData) {
                    _this.cntProvider.postPerson(freshData);
                }
            });
            modal.present();
        });
    };
    SettingsPage.prototype.BatchEdit = function () {
        var _this = this;
        this.navCtrl.push('BatchEditPage').then(function () { return _this.showAlert('Done', 'Finished edit/importing events'); });
    };
    SettingsPage.prototype.subscribeTo = function (topic) {
        this.acp.addTrack(topic);
    };
    SettingsPage.prototype.unsubscribeFrom = function (topic) {
        this.acp.removeTrack(topic);
    };
    SettingsPage.prototype.toggleKid = function () {
        if (this.KidsCamp === true) {
            this.subscribeTo('KidsCamp');
        }
        else {
            this.unsubscribeFrom('KidsCamp');
        }
    };
    SettingsPage.prototype.toggleAdult = function () {
        if (this.VoksenCamp === true) {
            this.subscribeTo('VoksenCamp');
        }
        else {
            this.unsubscribeFrom('VoksenCamp');
        }
    };
    SettingsPage.prototype.toggleYouth = function () {
        if (this.YouthCamp === true) {
            this.subscribeTo('YouthCamp');
        }
        else {
            this.unsubscribeFrom('YouthCamp');
        }
    };
    SettingsPage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        return;
                    }
                }
            ]
        });
        // noinspection JSIgnoredPromiseFromCall
        alert.present();
    };
    SettingsPage.prototype.subscribeToDialog = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add or remove track',
            inputs: [
                {
                    name: 'trackName',
                    placeholder: 'TrackName',
                }
            ],
            buttons: [
                {
                    text: 'Remove track',
                    handler: function (data) {
                        _this.acp.removeTrack(data.trackName);
                        return;
                    }
                },
                {
                    text: 'Add track',
                    handler: function (data) {
                        _this.acp.addTrack(data.trackName);
                        return;
                    }
                }
            ]
        });
        alert.present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/home/henry/Documents/GitHub/festivus/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button padding (click)="close()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Instillinger</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Innhold</h2>\n  <ion-list>\n    <ion-item class="VoksenCamp">\n      <ion-label>VoksenCamp</ion-label>\n      <ion-checkbox [(ngModel)]="VoksenCamp" (click)="toggleAdult()"></ion-checkbox>\n    </ion-item>\n    <ion-item class="KidsCamp">\n      <ion-label>KidsCamp</ion-label>\n      <ion-checkbox [(ngModel)]="KidsCamp" (click)="toggleKid()"></ion-checkbox>\n    </ion-item>\n    <ion-item class="YouthCamp">\n      <ion-label>YouthCamp</ion-label>\n      <ion-checkbox [(ngModel)]="YouthCamp" (click)="toggleYouth()"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <hr>\n  <h2>Visningsalternativer for programsiden</h2>\n  <p>\n    <b>Obs:</b> Du må muligens gå inn og ut av programsiden for å se noen endring.\n  </p>\n  <ion-item>\n    <ion-label>Vis tid til høyre</ion-label>\n    <ion-checkbox [(ngModel)]="datetimeLast" (click)="toggleDateBeforeInfo()"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Skjul nedtelling</ion-label>\n    <ion-checkbox [(ngModel)]="hideCountdown" (click)="toggleHideCountdown()"></ion-checkbox>\n  </ion-item>\n  <hr>\n  <h2>Annet</h2>\n  <button ion-button (click)="showTutorial()" round>Vis Tutorial</button>\n  <button ion-button (click)="showAboutThisApp()" round>Om Appen</button>\n  <!--<hr>-->\n  <!--<h2>Medarbeider</h2>-->\n  <!--<ion-item>-->\n    <!--<ion-label>Medarbeiderinfo</ion-label>-->\n    <!--<ion-checkbox [(ngModel)]="medarbeider" (click)="toggleMedarbeider()"></ion-checkbox>-->\n  <!--</ion-item>-->\n  <hr>\n  <h2>Admin</h2>\n  <button ion-button (click)="login()" round>Login/Register</button>\n  <button *ngIf="user.admin" ion-button round (click)="newPerson()" color="danger">Create Person</button>\n  <button *ngIf="user.admin" ion-button round (click)="BatchEdit()" color="danger">Batch Edit</button>\n  <button *ngIf="user.admin" ion-button round (click)="subscribeToDialog()" color="danger">subscribeTo</button>\n</ion-content>\n'/*ion-inline-end:"/home/henry/Documents/GitHub/festivus/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appconfig_appconfig__["a" /* AppConfigProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_content_content__["a" /* ContentProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_content_content__["a" /* ContentProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=10.js.map