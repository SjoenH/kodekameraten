webpackJsonp([17],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var ContentProvider = (function () {
    function ContentProvider(http, afAuth) {
        var _this = this;
        this.http = http;
        this.afAuth = afAuth;
        this.user = {};
        // private serverURL = 'http://localhost:8080';
        this.serverURL = 'https://oase-api.herokuapp.com';
        this.afAuth.authState.subscribe(function (data) {
            _this.user.uid = data.uid;
        });
    }
    ContentProvider.prototype.postPerson = function (person) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + _this.user.uid);
            _this.http
                .post(_this.serverURL + "/api/person", JSON.stringify(person), {
                headers: headers,
            })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    ContentProvider.prototype.delPerson = function (updatedData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('Deleting Event');
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + _this.user.uid);
            _this.http
                .delete(_this.serverURL + "/api/person/" + updatedData._id, {
                headers: headers,
            })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    ContentProvider.prototype.updatePerson = function (updatedData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + _this.user.uid);
            _this.http
                .put(_this.serverURL + "/api/person/" + updatedData._id, JSON.stringify(updatedData), { headers: headers })
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            });
        });
    };
    ContentProvider.prototype.importData = function (events) {
        var _this = this;
        /// TODO: NOTE this is very hacky way to quickly add data to database. Do NOT use this in a production environment!
        // const data = [];
        var updated = 0;
        var posted = 0;
        events.forEach(function (event) {
            if (!event._id) {
                // console.log(`New event ${event.title}`);
                _this.postEvent(event).then(function () {
                    posted++;
                });
            }
            else {
                // console.log(`Update ${event.title}`);
                _this.updateEvent(event);
                updated++;
            }
        });
        console.log("Out of " + events.length + "\n Tried to update " + updated + " events and \n tried to post " + posted + " events.");
    };
    ContentProvider.prototype.currentAppVersion = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.serverURL + "/api/currentAppVersion")
                .map(function (res) { return res.json(); })
                .subscribe(function (NewestAppVersion) {
                resolve(NewestAppVersion);
            });
        });
    };
    ContentProvider.prototype.postMessage = function (messageData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + _this.user.uid);
            _this.http
                .post(_this.serverURL + "/api/messages", JSON.stringify(messageData), {
                headers: headers,
            })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    ContentProvider.prototype.postEvent = function (eventData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + _this.user.uid);
            _this.http
                .post(_this.serverURL + "/api/events", JSON.stringify(eventData), {
                headers: headers,
            })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    ContentProvider.prototype.getMessagesForTracks = function (tracks, category) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var allMessages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allMessages = [];
                        return [4 /*yield*/, tracks.forEach(function (track) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getMessages(track, category).then(function (messages) {
                                                messages.forEach(function (message) {
                                                    allMessages.push(message);
                                                });
                                                allMessages
                                                    .sort(function (a, b) {
                                                    return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
                                                });
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, allMessages];
                }
            });
        });
    };
    ContentProvider.prototype.getEventsForTracks = function (tracks) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var allEvents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allEvents = [];
                        return [4 /*yield*/, tracks.forEach(function (track) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getEventsForArrangement(track).then(function (events) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            events.forEach(function (event) {
                                                                allEvents.push(event);
                                                            });
                                                            return [4 /*yield*/, allEvents
                                                                    .sort(function (a, b) {
                                                                    return new Date(a.fromTime).getTime() - new Date(b.fromTime).getTime();
                                                                })];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, allEvents];
                }
            });
        });
    };
    /**
     * Get Messages for arrangement with category
     *
     * @param {string} arrangement
     * @param {string} category
     * @returns promise with posts sorted by date
     * @memberof ContentProvider
     */
    ContentProvider.prototype.getMessages = function (arrangement, category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.serverURL + "/api/" + arrangement + "/messages/" + category)
                .map(function (res) { return res.json(); })
                .subscribe(function (posts) {
                posts.sort(function (a, b) {
                    return (new Date(a.fromTime).getTime() - new Date(b.fromTime).getTime());
                });
                resolve(posts);
            });
        });
    };
    /**
     * Get Upcoming events for arrangement
     *
     * @param {string} arrangement
     * @returns
     * @memberof ContentProvider
     */
    ContentProvider.prototype.getUpcomingEvents = function (arrangement) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.serverURL + "/api/" + arrangement + "/events/upcoming")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                data.sort(function (a, b) {
                    return (new Date(a.fromTime).getTime() - new Date(b.fromTime).getTime());
                });
                resolve(data);
            });
        });
    };
    ContentProvider.prototype.getAllEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.serverURL + "/api/events")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                data.sort(function (a, b) {
                    return (new Date(a.fromTime).getTime() - new Date(b.fromTime).getTime());
                });
                resolve(data);
            });
        });
    };
    ContentProvider.prototype.getEventsForArrangement = function (arrangement) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.serverURL + "/api/" + arrangement + "/events")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                data.sort(function (a, b) {
                    return (new Date(a.fromTime).getTime() - new Date(b.fromTime).getTime());
                });
                resolve(data);
            });
        });
    };
    ContentProvider.prototype.getMessagesForArrangementWithCategory = function (arrangement, category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.serverURL + "/api/" + arrangement + "/messages/" + category)
                .map(function (res) { return res.json(); })
                .subscribe(function (posts) {
                resolve(posts);
            });
        });
    };
    ContentProvider.prototype.getEventsForArrangementWithCategory = function (arrangement, category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.serverURL + "/api/" + arrangement + "/events/" + category)
                .map(function (res) { return res.json(); })
                .subscribe(function (posts) {
                resolve(posts);
            });
        });
    };
    ContentProvider.prototype.deleteEvent = function (updatedData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('Deleting Event');
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + _this.user.uid);
            _this.http
                .delete(_this.serverURL + "/api/events/" + updatedData._id, {
                headers: headers,
            })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    ContentProvider.prototype.deleteMessage = function (updatedData) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            console.log('Deleting Message');
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + _this.user.uid);
            _this.http
                .delete(_this.serverURL + "/api/messages/" + updatedData._id, {
                headers: headers,
            })
                .subscribe(function (res) {
                resolve(res);
            });
            return promise;
        });
    };
    ContentProvider.prototype.updateMessage = function (updatedData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + _this.user.uid);
            _this.http
                .put(_this.serverURL + "/api/messages/" + updatedData._id, JSON.stringify(updatedData), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    ContentProvider.prototype.updateEvent = function (updatedData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + _this.user.uid);
            _this.http
                .put(_this.serverURL + "/api/events/" + updatedData._id, JSON.stringify(updatedData), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    ContentProvider.prototype.getArrangements = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.serverURL + "/api/arrangements")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ContentProvider.prototype.userIsAdmin = function (userID) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', "Bearer " + userID);
            _this.http
                .post(_this.serverURL + "/api/user/auth", {}, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
            return promise;
        });
        return promise;
    };
    ContentProvider.prototype.getTeam = function (team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.serverURL + "/api/persons/team/" + team)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            });
        });
    };
    ContentProvider.prototype.getTime = function (date) {
        return date != null ? date.getTime() : 0;
    };
    return ContentProvider;
}());
ContentProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], ContentProvider);

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		447,
		16
	],
	"../pages/batch-edit/batch-edit.module": [
		448,
		15
	],
	"../pages/event-creator/event-creator.module": [
		449,
		6
	],
	"../pages/event-detail/event-detail.module": [
		451,
		5
	],
	"../pages/home/home.module": [
		450,
		4
	],
	"../pages/info/info.module": [
		452,
		3
	],
	"../pages/login/login.module": [
		455,
		14
	],
	"../pages/message-creator/message-creator.module": [
		453,
		13
	],
	"../pages/news-detail/news-detail.module": [
		457,
		2
	],
	"../pages/news/news.module": [
		454,
		1
	],
	"../pages/person-creator/person-creator.module": [
		456,
		12
	],
	"../pages/person-detail/person-detail.module": [
		458,
		11
	],
	"../pages/program/program.module": [
		459,
		0
	],
	"../pages/register/register.module": [
		460,
		10
	],
	"../pages/settings/settings.module": [
		461,
		9
	],
	"../pages/tabs/tabs.module": [
		463,
		8
	],
	"../pages/tutorial/tutorial.module": [
		462,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_content__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppConfigProvider = (function () {
    function AppConfigProvider(fcm, storage, platform, afAuth, cntProvider, toast) {
        var _this = this;
        this.fcm = fcm;
        this.storage = storage;
        this.platform = platform;
        this.afAuth = afAuth;
        this.cntProvider = cntProvider;
        this.toast = toast;
        this.mainTrack = 'VoksenOase';
        this.tracks = ["" + this.mainTrack];
        this.user = {};
        this.subscribeToTopic("" + this.mainTrack);
        this.setarrangement("" + this.mainTrack);
        storage.get('tracks').then(function (tracks) {
            if (tracks != null) {
                _this.tracks = tracks;
            }
        });
        this.checkAdmin();
        if (this.platform.is('cordova')) {
            this.fcm.getToken().then(function () {
                // Just make sure that we are subscribed to the voksenoase channel.
                _this.fcm.subscribeToTopic("" + _this.mainTrack);
                if (_this.user.admin) {
                    _this.fcm.subscribeToTopic('admin').catch(function (e) { return console.log(e); });
                }
                else {
                    _this.fcm.unsubscribeFromTopic('admin');
                }
            });
        }
    }
    AppConfigProvider.prototype.removeTrack = function (track) {
        var pos = this.tracks.indexOf(track);
        if (pos !== -1) {
            this.tracks.splice(pos, 1);
            this.unsubscribeFromTopic(track);
            this.toast.create({
                message: track + " abbonement avsluttet",
                showCloseButton: true,
                closeButtonText: 'OK',
                duration: 2000,
                position: 'top'
            }).present();
        }
        // save new tracks state
        this.storage.set('tracks', this.tracks);
    };
    AppConfigProvider.prototype.getTracks = function () {
        return this.tracks;
    };
    AppConfigProvider.prototype.clearAllTracks = function () {
        this.tracks = [];
        this.storage.set('tracks', this.tracks);
    };
    AppConfigProvider.prototype.isSubscribedToTrack = function (track) {
        return (this.tracks.indexOf(track) !== -1);
    };
    AppConfigProvider.prototype.addTrack = function (track) {
        var pos = this.tracks.indexOf(track);
        if (pos === -1) {
            this.tracks.push(track);
            this.subscribeToTopic(track);
            this.toast.create({
                message: "F\u00F8lger n\u00E5 " + track,
                showCloseButton: true,
                closeButtonText: 'OK',
                duration: 2000,
                position: 'top'
            }).present();
        }
        // save new tracks state
        this.storage.set('tracks', this.tracks);
    };
    AppConfigProvider.prototype.checkAdmin = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            _this.user.uid = data.uid;
            _this.storage.set('uid', data.uid);
            // Check if user is admin
            _this.cntProvider.userIsAdmin(data.uid).then(function (res) {
                _this.user.admin = res;
            });
        });
    };
    AppConfigProvider.prototype.subscribeToTopic = function (topic) {
        if (this.platform.is('cordova')) {
            this.fcm.subscribeToTopic(topic).then(function (data) {
                console.log(data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    };
    AppConfigProvider.prototype.unsubscribeFromTopic = function (topic) {
        if (this.platform.is('cordova')) {
            this.fcm.unsubscribeFromTopic(topic).catch(function (error) { return console.log(error); });
        }
    };
    AppConfigProvider.prototype.getSubscriptions = function () {
        return this.user.pushSubscriptions;
    };
    AppConfigProvider.prototype.getUser = function () {
        return this.user;
    };
    AppConfigProvider.prototype.setUser = function (user) {
        this.user = user;
        this.storage.set('user', user);
    };
    AppConfigProvider.prototype.setarrangement = function (arrangement) {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.fcm.getToken().then(function () {
                _this.storage.get('arrangement').then(function (oldarrangement) {
                    if (oldarrangement !== arrangement) {
                        _this.fcm
                            .unsubscribeFromTopic("" + oldarrangement)
                            .catch(function (e) { return console.log(e); })
                            .then(function () {
                            _this.fcm
                                .subscribeToTopic("" + arrangement)
                                .catch(function (e) { return console.log(e); });
                        });
                    }
                    else {
                        _this.fcm.subscribeToTopic("" + arrangement).catch(function (e) { return console.log(e); });
                    }
                });
            });
        }
        else {
            this.storage.set('arrangement', arrangement);
        }
    };
    AppConfigProvider.prototype.getArrangement = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.storage.get('arrangement').then(function (arrangement) {
                resolve(arrangement);
            });
        });
        return promise;
    };
    return AppConfigProvider;
}());
AppConfigProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__["a" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_7__content_content__["a" /* ContentProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["v" /* ToastController */]])
], AppConfigProvider);

//# sourceMappingURL=appconfig.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_appconfig_appconfig__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_content_content__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_firebase_config__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/batch-edit/batch-edit.module#BatchEditPageModule', name: 'BatchEditPage', segment: 'batch-edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-creator/event-creator.module#EventCreatorPageModule', name: 'EventCreatorPage', segment: 'event-creator', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'high', defaultHistory: [] },
                    { loadChildren: '../pages/event-detail/event-detail.module#EventDetailPageModule', name: 'EventDetailPage', segment: 'event-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/message-creator/message-creator.module#MessageCreatorPageModule', name: 'MessageCreatorPage', segment: 'message-creator', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/person-creator/person-creator.module#PersonCreatorPageModule', name: 'PersonCreatorPage', segment: 'person-creator', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news-detail/news-detail.module#NewsDetailPageModule', name: 'NewsDetailPage', segment: 'news-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/person-detail/person-detail.module#PersonDetailPageModule', name: 'PersonDetailPage', segment: 'person-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/program/program.module#ProgramPageModule', name: 'ProgramPage', segment: 'program', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#UserPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__["b" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_12__providers_appconfig_appconfig__["a" /* AppConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_content_content__["a" /* ContentProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, fcm, statusBar, splashScreen, toast, storage, afAuth) {
        var _this = this;
        this.fcm = fcm;
        this.toast = toast;
        this.afAuth = afAuth;
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                fcm.onNotification().subscribe(function (data) {
                    if (data.wasTapped) {
                        // TODO: Received in background
                    }
                    else {
                        // TODO: Received in foreground
                        _this.toast.create({
                            message: "" + data,
                            duration: 8000,
                            position: 'top'
                        }).present();
                    }
                });
            }
            storage.get('hasSeenTutorial').then(function (t) {
                storage.get('v1.1.0').then(function (v) {
                    if (t && v) {
                        _this.rootPage = 'TabsPage';
                        _this.afAuth.authState.subscribe(function (data) {
                            if (data && data.email && data.uid) {
                                _this.toast.create({
                                    message: "Du er logget inn som " + data.email,
                                    showCloseButton: true,
                                    closeButtonText: 'OK',
                                    duration: 2000,
                                    position: 'top'
                                }).present();
                            }
                        });
                    }
                    else {
                        _this.rootPage = 'TutorialPage';
                    }
                });
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/henry/Documents/GitHub/Oase/Oase-App/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/henry/Documents/GitHub/Oase/Oase-App/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: 'AIzaSyBKQ8RxFpjx8fBbS-fcwUI51rjUONX5y5w',
    authDomain: 'oase-74981.firebaseapp.com',
    databaseURL: 'https://oase-74981.firebaseio.com',
    projectId: 'oase-74981',
    storageBucket: 'oase-74981.appspot.com',
    messagingSenderId: '690446808200'
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ })

},[262]);
//# sourceMappingURL=main.js.map