webpackJsonp([13],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCreatorPageModule", function() { return MessageCreatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_creator__ = __webpack_require__(593);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageCreatorPageModule = (function () {
    function MessageCreatorPageModule() {
    }
    return MessageCreatorPageModule;
}());
MessageCreatorPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__message_creator__["a" /* MessageCreatorPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_creator__["a" /* MessageCreatorPage */])]
    })
], MessageCreatorPageModule);

//# sourceMappingURL=message-creator.module.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageCreatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_content_content__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageCreatorPage = (function () {
    function MessageCreatorPage(navCtrl, navParams, viewCtrl, alertCtrl, cntProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.cntProvider = cntProvider;
        this.arrangements = [];
        this.postData = navParams.get('postData');
        this.cntProvider.getArrangements().then(function (data) {
            _this.arrangements = data;
        });
    }
    MessageCreatorPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MessageCreatorPage.prototype.saveChanges = function () {
        this.viewCtrl.dismiss(this.postData);
    };
    MessageCreatorPage.prototype.delete = function () {
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
                        _this.postData.delete = true;
                        _this.viewCtrl.dismiss(_this.postData);
                        return;
                    }
                }
            ]
        });
        alert.present();
    };
    return MessageCreatorPage;
}());
MessageCreatorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-message-creator',template:/*ion-inline-start:"/home/henry/Documents/Oase/Oase-App/src/pages/message-creator/message-creator.html"*/'<!--\n  Generated template for the MessageCreatorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button padding (click)="close()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button large ion-button padding (click)="saveChanges()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>MessageCreator</p>\n  <ion-list>\n    <ion-item>\n      <!-- title: String, -->\n      <ion-label stacked>Title*</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="postData.title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <!-- content: String, -->\n      <ion-label stacked>Content*</ion-label>\n      <ion-textarea [(ngModel)]="postData.content"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <!-- imgURL: String, -->\n      <ion-label stacked>imgURL</ion-label>\n      <ion-input type="text" [(ngModel)]="postData.imgURL" placeholder="http://via.placeholder.com/350x250"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <!-- category: Array, //info eller nyhet -->\n      <ion-label>Kategori*</ion-label>\n      <!-- <ion-select [(ngModel)]="postData.category">\n        <ion-option value="nyhet">Nyhet</ion-option>\n        <ion-option value="info">Info</ion-option>\n      </ion-select> -->\n      <ion-input type="text" [(ngModel)]="postData.category" placeholder=""></ion-input>\n    </ion-item>\n\n    <!-- datetime: Date, -->\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="postData.datetime"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf="!postData._id">\n      <ion-label>Push-notifikasjon</ion-label>\n      <ion-toggle [(ngModel)]="postData.sendPush"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Spor*</ion-label>\n      <ion-select [(ngModel)]="postData.arrangement">\n        <ion-option *ngFor="let arrangement of arrangements" value={{arrangement.title}}>{{arrangement.title}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <!-- value: Number, //To weight the importance of info, eg. to be used in sorting -->\n  <!-- ////ACTIONS -->\n\n  <p>Ekstra</p>\n  <ion-item>\n    <!-- location: String, -->\n    <ion-label stacked>Sted</ion-label>\n    <ion-input type="text" value="" [(ngModel)]="postData.location"></ion-input>\n  </ion-item>\n  <ion-item>\n    <!-- weblink: String, -->\n    <ion-label stacked>WebLink</ion-label>\n    <ion-input type="text" [(ngModel)]="postData.weblink" placeholder="http://impulsweb.no"></ion-input>\n  </ion-item>\n  <ion-item>\n    <!-- tlf: String, -->\n    <ion-label stacked>Telefonnummer</ion-label>\n    <ion-input type="text" [(ngModel)]="postData.tlf" placeholder="0047 984 36 185"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Show Messages with category</ion-label>\n    <ion-input type="text" [(ngModel)]="postData.refMessageCategory" placeholder=""></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Show Events with category</ion-label>\n    <ion-input type="text" [(ngModel)]="postData.refEventCategory" placeholder=""></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Show Team</ion-label>\n    <ion-input type="text" [(ngModel)]="postData.refPerson" placeholder=""></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Channel</ion-label>\n    <ion-input type="text" [(ngModel)]="postData.channel" placeholder=""></ion-input>\n  </ion-item>\n  <ion-item>\n    <button ion-button color="danger" *ngIf="postData._id" (click)="delete()" full>Delete message</button>\n  </ion-item>\n\n</ion-content>\n<!--MESSAGE\n      title: String,\n        content: String,\n        datetime: Date,\n        imgURL: String,\n        arrangement: String, //Arrangement "group" for all events,messages etc...\n        category: String, //info eller nyhet\n        channel: String, //VoksenOase, TenOase, BoJoKo etc...\n        refMessageCategory: String,\n        refEventCategory: String,\n        location: String,\n        sendPush: Boolean,\n        //ACTIONS\n        weblink: String,\n        tlf: String,\n        refPerson: String // For eksempel team1-->\n'/*ion-inline-end:"/home/henry/Documents/Oase/Oase-App/src/pages/message-creator/message-creator.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_content_content__["a" /* ContentProvider */]])
], MessageCreatorPage);

//# sourceMappingURL=message-creator.js.map

/***/ })

});
//# sourceMappingURL=13.js.map