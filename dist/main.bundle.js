webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.apiEndpoint = '/data/';
AppSettings.subcutaneous = [{ k: 't', t: 'Sampling Time' }, { k: 'ins', t: 'Insulin Type' }, { k: 'col1', t: 'Column 1', type: 'number' }, { k: 'col2', t: 'Column 2', type: 'number' }, { k: 'col3', t: 'Column 3', type: 'number' }, { k: 'col4', t: 'Column 4', type: 'number' }, { k: 'col5', t: 'Column 5', type: 'number' }, { k: 'col6', t: 'Column 6', type: 'number' }, { k: 'col7', t: 'Column 7', type: 'number' }, { k: 'col8', t: 'Column 8', type: 'number' }];
AppSettings.infusion = [{ k: 'min', t: 'Min Glucose' }, { k: 'max', t: 'Max Glucose' }, { k: 'col1', t: 'Column 1', type: 'number' }, { k: 'col2', t: 'Column 2', type: 'number' }, { k: 'col3', t: 'Column 3', type: 'number' }, { k: 'col4', t: 'Column 4', type: 'number' }, { k: 'col5', t: 'Column 5', type: 'number' }, { k: 'col6', t: 'Column 6', type: 'number' }, { k: 'col7', t: 'Column 7', type: 'number' }, { k: 'col8', t: 'Column 8', type: 'number' }, { k: 'col9', t: 'Column 9', type: 'number' }];
AppSettings.pages = [{ title: 'Patient List', access: ['doctor', 'nurse', 'admin'], route: ['patient-list'] }, { title: 'Patient', access: ['doctor', 'nurse', 'admin'], route: ['patient'], hidden: true }, { title: 'My Transactions', access: ['doctor', 'nurse', 'admin'], route: ['transactions'] }, { title: 'Manage Protocol', access: ['doctor', 'admin'], route: ['manage-protocol'] }, { title: 'Validate Protocol', access: ['doctor', 'admin'], route: ['validate-protocol'] }, { title: 'Manage Users', access: ['admin'], route: ['manage-users'] }, { title: 'Logout', access: ['doctor', 'nurse', 'admin'], route: ['logout'] }];
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n\t<md-sidenav #sideNav mode=\"over\" opened=\"false\" style=\"width:300px;\">\n\t\t<div class=\"profileBox\">\n\t\t\t<div class=\"profileImg\">\n\t\t\t\t<img [src]=\"authService.user?'assets/'+authService.user.role+'_orange.png':'' \" style=\"height:100%;\">\n\t\t\t</div> \n\t\t\t<div style=\"font-size: 20px;margin-top: 4.6%;\">Hi! {{authService.user?.name}}</div>\n\t\t\t<div style=\"font-size: 14px;margin-top: 1%;\">{{authService.user?.email}}</div>\n\t\t</div>\n\t\t<div class=\"sideNavOption\" *ngFor=\"let page of authService.pages\" (click)=\"sideNavHandler(page)\" ><div style=\"padding-top: 7%;\">{{page.title}}</div></div>\n\t</md-sidenav>\n\t<div class=\"mainwindow\">\n\t\t<div *ngIf=\"server.isBusy\" style=\"position: absolute;top:0;left:0;height: 100%;width: 100%;z-index: 1000;background-color: #FFFFFF;opacity: 0.7;text-align: center;\">\n\t\t\t<div style=\"height: 8%;width: 20%;margin:46% auto 0 auto;\">\n\t\t\t\t<md-spinner style=\"height: 70px;width: 70px;\"></md-spinner>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t<router-outlet></router-outlet>\n\t</div>\n</md-sidenav-container>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(authService, router, server) {
        this.authService = authService;
        this.router = router;
        this.server = server;
        this.authService.init();
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.authService.sideNav = this.sideNav;
    };
    AppComponent.prototype.sideNavHandler = function (page) {
        this.sideNav.close();
        this.router.navigate(page.route);
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdSidenav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdSidenav */]) === "function" && _a || Object)
], AppComponent.prototype, "sideNav", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__server_service__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__server_service__["a" /* Server */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__patient_list_component__ = __webpack_require__("../../../../../src/app/patient-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__patient_component__ = __webpack_require__("../../../../../src/app/patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__patient_profile_component__ = __webpack_require__("../../../../../src/app/patient-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_component__ = __webpack_require__("../../../../../src/app/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forms_list_component__ = __webpack_require__("../../../../../src/app/forms-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__manage_protocol_component__ = __webpack_require__("../../../../../src/app/manage-protocol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validate_protocol_component__ = __webpack_require__("../../../../../src/app/validate-protocol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialog_component__ = __webpack_require__("../../../../../src/app/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dialog_service__ = __webpack_require__("../../../../../src/app/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__patient_provider_service__ = __webpack_require__("../../../../../src/app/patient-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_16__login_component__["a" /* LoginComponent */] },
    { path: '', pathMatch: 'full', redirectTo: '/patient-list' },
    { path: 'patient-list', component: __WEBPACK_IMPORTED_MODULE_7__patient_list_component__["a" /* PatientListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__auth_guard_service__["a" /* AuthGuard */]] },
    {
        path: 'patient', component: __WEBPACK_IMPORTED_MODULE_8__patient_component__["a" /* PatientComponent */],
        children: [
            { path: '', pathMatch: 'full', redirectTo: '0/profile' },
            { path: ':id', pathMatch: 'full', redirectTo: ':id/profile' },
            { path: ':id/profile', component: __WEBPACK_IMPORTED_MODULE_9__patient_profile_component__["a" /* PatientProfileComponent */] },
            { path: ':id/forms-list', component: __WEBPACK_IMPORTED_MODULE_11__forms_list_component__["a" /* FormsListComponent */] },
            { path: ':id/form', component: __WEBPACK_IMPORTED_MODULE_10__form_component__["a" /* FormComponent */] },
            { path: ':id/form/:type', component: __WEBPACK_IMPORTED_MODULE_10__form_component__["a" /* FormComponent */] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_14__page_not_found_component__["a" /* PageNotFoundComponent */] }
        ],
        canActivate: [__WEBPACK_IMPORTED_MODULE_20__auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_11__forms_list_component__["a" /* FormsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manage-protocol', component: __WEBPACK_IMPORTED_MODULE_12__manage_protocol_component__["a" /* ManageProtocolComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'validate-protocol', component: __WEBPACK_IMPORTED_MODULE_13__validate_protocol_component__["a" /* ValidateProtocolComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__auth_guard_service__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_14__page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_22__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes), __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdDialogModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__patient_list_component__["a" /* PatientListComponent */], __WEBPACK_IMPORTED_MODULE_9__patient_profile_component__["a" /* PatientProfileComponent */], __WEBPACK_IMPORTED_MODULE_14__page_not_found_component__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_10__form_component__["a" /* FormComponent */], __WEBPACK_IMPORTED_MODULE_8__patient_component__["a" /* PatientComponent */], __WEBPACK_IMPORTED_MODULE_15__dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_11__forms_list_component__["a" /* FormsListComponent */], __WEBPACK_IMPORTED_MODULE_12__manage_protocol_component__["a" /* ManageProtocolComponent */], __WEBPACK_IMPORTED_MODULE_13__validate_protocol_component__["a" /* ValidateProtocolComponent */], __WEBPACK_IMPORTED_MODULE_16__login_component__["a" /* LoginComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_17__server_service__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_21__patient_provider_service__["a" /* PatientProvider */], __WEBPACK_IMPORTED_MODULE_18__dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_19__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__auth_guard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_15__dialog_component__["a" /* DialogComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var status = false, role = this.authService.user ? this.authService.user.role : null, path = route.url.length ? route.url[0].path : null, pages = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].pages;
        var page = pages.find(function (page) { return page.route.length ? page.route[0] === path : null; });
        if (path && page && role && page.access.find(function (r) { return r === role; }))
            status = true;
        else
            this.router.navigate(['login']);
        return status;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var w = window;
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.init = function () {
        var u = localStorage.getItem('currentUser');
        if (u)
            this.user = JSON.parse(u);
    };
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this.currentUser;
        },
        set: function (user) {
            this.currentUser = user;
            this.pages = __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].pages.filter(function (page) { return !page.hidden && page.access.find(function (role) { return user.role === role; }); });
            localStorage.setItem('currentUser', JSON.stringify(user));
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signIn = function () {
        return w.googleAuth2SignIn();
    };
    AuthService.prototype.signOut = function () {
        localStorage.removeItem('currentUser');
        w.googleAuthDelCookie();
        delete this.currentUser;
        delete this.pages;
        return w.googleAuth2SignOut();
    };
    AuthService.prototype.reload = function () {
        return w.googleAuth2Reload();
    };
    AuthService.prototype.checkLogin = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(w.checkLogin);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DialogComponent = (function () {
    function DialogComponent() {
    }
    return DialogComponent;
}());
DialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n\t\t<h2 md-dialog-title >{{title}}</h2>\n\t\t<md-dialog-content>{{text}}</md-dialog-content>\n\t\t<md-dialog-actions style=\"text-align:center;\">\n\t\t\t<button md-button md-dialog-close *ngIf=\"close\">{{close}}</button>\n\t\t</md-dialog-actions>\t\n\t\t"
    })
], DialogComponent);

//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_component__ = __webpack_require__("../../../../../src/app/dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.show = function (title, text, actions, close) {
        var diag = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialog_component__["a" /* DialogComponent */]);
        var disp = diag.componentInstance;
        disp.title = title;
        disp.text = text;
        disp.actions = actions;
        disp.close = close;
        return diag;
    };
    return DialogService;
}());
DialogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:65px 5px 0 5px;height:100%;box-sizing:border-box;overflow:scroll;\">\t\n\t<form (ngSubmit)=\"saveForm()\" #insulinForm=\"ngForm\" >\n\t\t<div *ngIf=\"type=='infusion'\">\n\t\t\t<h3>Insulin Infusion Form</h3>\n\t\t\t<md-input-container floatPlaceholder=\"always\" class=\"big\">\n\t\t\t\t<input mdInput type=\"datetime-local\" name=\"dt\" placeholder=\"MEASUREMENT TIME\" required [(ngModel)]=\"form.dt\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container floatPlaceholder=\"always\" class=\"big\">\n\t\t\t\t<input mdInput type=\"number\" step=\"0.1\" name=\"currentRate\" placeholder=\"CURRENT INFUSION RATE (units/hr)\" required [(ngModel)]=\"form.data.currentRate\">\n\t\t\t</md-input-container>\n\t\t\t<br>\n\t\t\t<md-input-container floatPlaceholder=\"always\" class=\"big\">\n\t\t\t\t<input mdInput type=\"number\" step=\"0.1\" name=\"plasmaGlucose\" placeholder=\"PLASMA GLUCOSE (mg/dl)\" required [(ngModel)]=\"form.data.plasmaGlucose\">\n\t\t\t</md-input-container>\n\t\t\t<div style=\"text-align:center;margin-top:10px;\">\n\t\t\t\t<button md-raised-button color=\"primary\" class=\"fullButton\" type=\"submit\" [disabled]=\"!insulinForm.form.valid\">Get Recommendation</button>\n\t\t\t\t<button md-raised-button class=\"fullButton\" (click)=\"changeProfile()\">Change Insulin Type</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"type=='subcutaneous'\">\n\t\t\t<h3>Subcutaneous Insulin Form</h3>\n\t\t\t<md-input-container floatPlaceholder=\"always\" class=\"big\">\n\t\t\t\t<input mdInput type=\"datetime-local\" name=\"dt\" placeholder=\"MEASUREMENT TIME\" required [(ngModel)]=\"form.dt\">\n\t\t\t</md-input-container>\n\t\t\t<md-select floatPlaceholder=\"always\" placeholder=\"DOSAGE TYPE\" name=\"dosageType\" required [(ngModel)]=\"form.data.dosageType\" class=\"big\">\n\t\t\t\t<md-option value=\"Before Breakfast\" >Before Breakfast</md-option>\n\t\t\t\t<md-option value=\"10:00 AM\" >10:00 AM</md-option>\t\t\t\n\t\t\t\t<md-option value=\"Before Lunch\">Before Lunch</md-option>\n\t\t\t\t<md-option value=\"Before Evening Snack\">Before Evening Snack</md-option>\n\t\t\t\t<md-option value=\"Before Dinner\">Before Dinner</md-option>\n\t\t\t\t<md-option value=\"Bedtime\">Bedtime</md-option>\n\t\t\t</md-select>\n\t\t\t<br>\n\t\t\t<md-input-container floatPlaceholder=\"always\" class=\"big\">\n\t\t\t\t<input mdInput type=\"number\" step=\"0.1\" name=\"plasmaGlucose\" placeholder=\"PLASMA GLUCOSE (mg/dl)\" required [(ngModel)]=\"form.data.plasmaGlucose\">\n\t\t\t</md-input-container>\n\t\t\t<div style=\"text-align:center;margin-top:10px;\">\n\t\t\t\t<button md-raised-button color=\"primary\" class=\"fullButton\" type=\"submit\" [disabled]=\"!insulinForm.form.valid\">Get Recommendation</button>\n\t\t\t\t<button md-raised-button class=\"fullButton\" (click)=\"changeProfile()\">Change Insulin Type</button>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t<div *ngIf=\"type=='subcutaneousDose' || type == 'infusionDose' \">\n\t\t\t<div *ngIf=\"recommendation\">\n\t\t\t\t<h2>Recommendation</h2>\n\t\t\t\t<h4>CALCULATION METHOD</h4>\n\t\t\t\t<div [innerHTML]=\"recommendation.text\"></div>\n\t\t\t\t<h4>INSULIN TYPE</h4>\n\t\t\t\t<div [innerHTML]=\"recommendation.insulinType\"></div>\n\t\t\t\t<h4>DOSE</h4>\n\t\t\t\t<div [innerHTML]=\"recommendation.dose + (type=='subcutaneousDose'?' units':' units/hr') \"></div>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<h3>{{recommendation?.dosageType}} Dose</h3>\n\t\t\t<md-input-container floatPlaceholder=\"always\" class=\"big\">\n\t\t\t\t<input mdInput type=\"number\" step=\"0.1\" name=\"insulinDose\" placeholder=\"INSULIN DOSE\" required [(ngModel)]=\"form.data.insulinDose\">\n\t\t\t</md-input-container>\n\t\t\t<div style=\"text-align:center;margin-top:10px;\">\n\t\t\t\t<button md-raised-button type=\"submit\" [disabled]=\"!insulinForm.form.valid\">Save</button>\n\t\t\t</div>\t\t\t\n\t\t</div>\t\t\n\t</form>\t\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_provider_service__ = __webpack_require__("../../../../../src/app/patient-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form__ = __webpack_require__("../../../../../src/app/form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_service__ = __webpack_require__("../../../../../src/app/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FormComponent = (function () {
    function FormComponent(pp, router, route, location, server, dialogService) {
        this.pp = pp;
        this.router = router;
        this.route = route;
        this.location = location;
        this.server = server;
        this.dialogService = dialogService;
        this.form = new __WEBPACK_IMPORTED_MODULE_4__form__["a" /* Form */]();
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.do(function (params) { return _this.patientId = +params['id']; }).subscribe(function (params) {
            _this.pp.getPatient(+params['id']).then(function () {
                _this.type = _this.pp.patient.profile.insulinDeliveryType;
            });
        });
    };
    FormComponent.prototype.saveForm = function () {
        var _this = this;
        this.form.patientId = this.patientId;
        this.form.type = this.type;
        this.form.dt = __WEBPACK_IMPORTED_MODULE_6_moment__(this.form.dt).format();
        this.server.busy = this.server.saveForm(this.form).subscribe(function (rs) {
            if (rs == 'success') {
                var diag = _this.dialogService.show('Saved', 'The form submitted has been successfully saved.', [], 'Close');
                diag.afterClosed().subscribe(function () { return _this.router.navigate(['patient-list']); });
            }
            else {
                _this.form = new __WEBPACK_IMPORTED_MODULE_4__form__["a" /* Form */]();
                _this.form.data.dosageType = rs.dosageType;
                _this.form.data.parentId = rs.parentId;
                _this.type = _this.type + 'Dose';
                _this.recommendation = rs;
            }
        }, function (e) { return _this.error = e; });
    };
    FormComponent.prototype.goBack = function () {
        this.router.navigate(['patient-list']);
    };
    FormComponent.prototype.changeProfile = function () {
        this.router.navigate(['patient', this.patientId]);
    };
    return FormComponent;
}());
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__patient_provider_service__["a" /* PatientProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__patient_provider_service__["a" /* PatientProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__server_service__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__server_service__["a" /* Server */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__dialog_service__["a" /* DialogService */]) === "function" && _f || Object])
], FormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var Form = (function () {
    function Form() {
        this.dt = __WEBPACK_IMPORTED_MODULE_0_moment__().format('YYYY-MM-DDTHH:mm');
        this.data = {};
    }
    return Form;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ "../../../../../src/app/forms-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topfixed\">\n\t<md-toolbar color=\"primary\">\n\t\t<i (click)=\"goBack()\" class=\"material-icons\">arrow_back</i>\n\t\t<span>History</span>\n\t\t<span class=\"filler\"></span>\n\t</md-toolbar>\n</div>\n<div style=\"padding:65px 5px 0 5px;height:100%;box-sizing:border-box;overflow:scroll;\">\t\n\t<div style=\"margin:2em auto;text-align: center;\" *ngIf=\"!forms.length\">\n\t\tNo data entered yet\n\t</div>\n\t<md-card *ngFor=\"let form of forms\">\n\t\t<div style=\"display: flex;flex-wrap: nowrap;font-weight: bold;\">\n\t\t\t<span>{{form.dt | date:'d MMM, HH:mm'}}</span>\n\t\t\t<span class=\"filler\"></span>\n\t\t\t<span>{{form.type == 'infusion'?'Infusion':form.data.dosageType}}</span>\n\t\t</div>\n\t\t<div style=\"display: flex;flex-wrap: nowrap;margin-top: 5px;\">\n\t\t\t<span>Plasma Glucose: {{form.data.plasmaGlucose || ' - '}} mg/dl</span>\t\t\t\n\t\t</div>\n\t\t<div style=\"display: flex;flex-wrap: nowrap;margin-top: 5px;\">\n\t\t\t<span>Recommended: {{form.data.dose || ' - '}}</span>\n\t\t\t<span class=\"filler\"></span>\n\t\t\t<span>Actual: {{form.data.insulinDose || ' - '}}</span>\n\t\t</div>\n\t\t<div style=\"margin-top: 5px;\">\n\t\t\tEntered By: {{form.savedby.name}}\n\t\t</div>\t\n\t</md-card>\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/forms-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_provider_service__ = __webpack_require__("../../../../../src/app/patient-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormsListComponent = (function () {
    function FormsListComponent(pp, route, router, server) {
        this.pp = pp;
        this.route = route;
        this.router = router;
        this.server = server;
        this.forms = [];
    }
    FormsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.url[0].path == 'transactions') {
            this.route.params.subscribe(function (params) {
                setTimeout(function () { return _this.server.busy = _this.server.getTransactions().subscribe(function (forms) { return _this.processForms(forms); }); });
            });
        }
        else {
            this.route.params.subscribe(function (params) {
                setTimeout(function () {
                    _this.pp.getPatient(+params['id']);
                    _this.server.busy = _this.server.getForms(+params['id']).subscribe(function (forms) { return _this.processForms(forms); });
                });
            });
        }
    };
    FormsListComponent.prototype.goBack = function () {
        this.router.navigate(['patient-list']);
    };
    FormsListComponent.prototype.processForms = function (forms) {
        var h = {};
        forms.sort(function (f1, f2) { return f1.id - f2.id; });
        for (var i = 0; i < forms.length; i++) {
            var f = forms[i], parentId = f.data.parentId;
            if (parentId && h[parentId]) {
                if (f.data.dose)
                    h[parentId].data.dose = f.data.dose;
                if (f.data.insulinDose)
                    h[parentId].data.insulinDose = f.data.insulinDose;
            }
            else
                h[f.id] = f;
        }
        for (var t in h)
            this.forms.push(h[t]);
        this.forms.reverse();
    };
    return FormsListComponent;
}());
FormsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/forms-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__patient_provider_service__["a" /* PatientProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__patient_provider_service__["a" /* PatientProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* Server */]) === "function" && _d || Object])
], FormsListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=forms-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"splashScreen\">\n\t<div style=\"position: absolute;bottom:10px; width: 100%;\">\n\t\t<div class=\"legal\">\n\t\t\tBy using this application you accept these <a href=\"https://github.com/pravincar/insulinprotocol/blob/master/LICENSE\" target=\"_blank\">terms and conditions</a>.\n\t\t</div>\t\n\t</div>\t\n\t<div class=\"appTitle\">\n\t\tRENAL TRANSPLANT<br>PROTOCOL\n\t\t<div>\n\t\t\t<img src=\"assets/insulin.png\" srcset=\"assets/insulin@2x.png 2x,assets/insulin@3x.png 3x\" class=\"insulin\">\n\t\t</div>\n\t</div>\n\t<div style=\"position:absolute;bottom:90px;width:100%;text-align:center;\">\n\t\t<img src=\"assets/btn_google_signin_light_normal_web.png\" style=\"cursor: pointer;height:50px;\" (click) = \"signIn()\" >\t\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(authService, router, route, server) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.server = server;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.filter(function (url) { return url.find(function (urlSeg) { return urlSeg.path === 'logout'; }) ? true : false; }).subscribe(function (params) {
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].from(_this.authService.signOut().then(function () { return _this.router.navigate(['login']); }, function (e) { _this.router.navigate(['login']); })).subscribe();
        });
        this.route.url.filter(function (url) { return url.find(function (urlSeg) { return urlSeg.path === 'login'; }) ? true : false; })
            .subscribe(function () {
            _this.server.busy = _this.authService.checkLogin()
                .switchMap(function () { return _this.server.getUserProfile(); })
                .subscribe(function (user) {
                if (user.role)
                    _this.router.navigate(['patient-list']);
                else
                    _this.router.navigate(['patient-list']); //add the account type choosing screen here
            }, function (e) { });
        });
    };
    LoginComponent.prototype.signIn = function () {
        this.authService.signIn();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* Server */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-protocol.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topfixed\">\n\t<md-toolbar color=\"primary\" >\n\t\t<i class=\"material-icons\" (click)=\"authService.sideNav.toggle()\" >account_circle</i>\n\t\t<span>Manage Protocol</span>\n\t\t<span class=\"filler\"></span>\t\t\n\t</md-toolbar>\n\t<div style=\"padding:0 5px;\">\n\t\t<div style=\"width:100%;\">\n\t\t\t<span>Edit Protocol:</span>\n\t\t\t<md-select name=\"type\" required [(ngModel)]=\"type\" class=\"big\" (change)=\"getProtocol()\">\n\t\t\t\t<md-option value=\"subcutaneous\" >Subcutaneous Insulin</md-option>\n\t\t\t\t<md-option value=\"infusion\" >Insulin Infusion</md-option>\n\t\t\t</md-select>\n\t\t</div>\t\t\n\t</div>\n</div>\n<div style=\"padding:120px 5px 0 5px;box-sizing:border-box;overflow:scroll;height:100%;\">\n\t<md-spinner *ngIf=\"!protocol\" class=\"spinner\"></md-spinner>\n\t<form (ngSubmit)=\"saveProtocol()\" #protocolForm=\"ngForm\" >\n\t\t<div *ngIf=\"protocol\">\n\t\t\t<div *ngIf=\"type=='subcutaneous'\">\t\t\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th *ngFor=\"let col of config[type]\">{{col.t}}</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tr *ngFor=\"let row of protocol?.data?.chart;let i = index; \">\n\t\t\t\t\t\t<td *ngFor=\"let col of config[type]; let j=index; \">\n\t\t\t\t\t\t\t<md-input-container *ngIf=\"col.type\">\n\t\t\t\t\t\t\t\t<input mdInput [type]=\"col.type\" step=\"0.1\" [name]=\"i+'_'+j\"  required [(ngModel)]=\"row[col.k]\" class=\"centered\">\n\t\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t\t<span *ngIf=\"!col.type\">{{row[col.k]}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\t\t\n\t\t\t</div>\n\t\t\t<div *ngIf=\"type=='infusion'\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th *ngFor=\"let col of config[type]\">{{col.t}}</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tr *ngFor=\"let row of protocol?.data?.chart; let i = index; \">\n\t\t\t\t\t\t<td *ngFor=\"let col of config[type]; let j = index;\">\n\t\t\t\t\t\t\t<md-input-container *ngIf=\"col.type\">\n\t\t\t\t\t\t\t\t<input mdInput [type]=\"col.type\" step=\"0.1\" [name]=\"i+'_'+j\" required [(ngModel)]=\"row[col.k]\" class=\"centered\">\n\t\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t\t<span *ngIf=\"!col.type\">{{row[col.k]}}</span>\t\t\t\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\t\t\n\t\t\t</div>\n\t\t\t<div style=\"text-align:center;margin-top:10px;\">\n\t\t\t\t<button md-raised-button type=\"submit\" [disabled]=\"!protocolForm.form.valid\">Save</button>\n\t\t\t\t<a md-button (click)=\"getProtocol()\">Cancel</a>\n\t\t\t</div>\t\n\t\t</div>\t\t\n\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-protocol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageProtocolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_service__ = __webpack_require__("../../../../../src/app/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageProtocolComponent = (function () {
    function ManageProtocolComponent(server, dialog, authService) {
        this.server = server;
        this.dialog = dialog;
        this.authService = authService;
        this.type = 'infusion';
        this.config = {
            subcutaneous: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].subcutaneous,
            infusion: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].infusion
        };
    }
    ManageProtocolComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.getProtocol(); });
    };
    ManageProtocolComponent.prototype.getProtocol = function () {
        var _this = this;
        delete this.protocol;
        this.server.busy = this.server.getProtocol(this.type).subscribe(function (rs) { _this.protocol = rs; });
    };
    ManageProtocolComponent.prototype.saveProtocol = function () {
        var _this = this;
        this.server.busy = this.server.saveProtocol(this.protocol).subscribe(function () {
            var diag = _this.dialog.show('Saved', 'The protocol has been successfully saved.', [], 'Close');
            diag.afterClosed().subscribe(function () { });
        });
    };
    return ManageProtocolComponent;
}());
ManageProtocolComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/manage-protocol.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* Server */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dialog_service__["a" /* DialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ManageProtocolComponent);

var _a, _b, _c;
//# sourceMappingURL=manage-protocol.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: '<h2>Page not found</h2>'
    })
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/patient-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label{font-weight:bold;font-size:0.8em;}\n.fright{float:right;}\n.halfwidth{width:50%;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topfixed\">\n\t<md-toolbar color=\"primary\" *ngIf=\"!showSearch\">\n\t\t<i class=\"material-icons\" (click)=\"authService.sideNav.toggle()\">account_circle</i>\n\t\t<span>Home</span>\n\t\t<span class=\"filler\"></span>\n\t\t<i class=\"material-icons\" (click)=\"newPatient()\">person_add</i>\n\t\t<i class=\"material-icons\" (click)=\"showSearch=true\">search</i>\t\n\t</md-toolbar>\n\t<md-toolbar *ngIf=\"showSearch\">\n\t\t<i class=\"material-icons\" (click)=\"searchBack()\">arrow_back</i>\n\t\t<md-input-container floatPlaceholder=\"never\" style=\"width:100%;\" *ngIf=\"showSearch\">\n\t\t\t<input mdInput #searchBox type=\"search\" (keyup)=\"$event.keyCode==13 && onSearch(searchBox.value)\" name=\"search\" placeholder=\"Search by UHID\">\n\t\t</md-input-container>\n\t</md-toolbar>\t\n</div>\n<div style=\"padding:60px 5px 0 5px;box-sizing:border-box;overflow:scroll;height:100%;\">\t\n\t<md-card *ngFor=\"let patient of patients\">\n\t\t<div style=\"display: flex;flex-wrap: nowrap;\">\n\t\t\t<div (click)=\"showForm(patient.id)\" class=\"patBox\">\n\t\t\t\t<div style=\"font-size: 20px;\">{{patient.name}}</div>\n\t\t\t\t<div style=\"margin-top: 7px;\">\n\t\t\t\t\t<label>UHID: </label> {{patient.uhid}} | <label>Bed : </label>{{patient.bednum}}\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\t\n\t\t\t<i (click)=\"editPatient(patient.id)\" class=\"material-icons\">mode_edit</i>\n\t\t\t<i (click)=\"formsList(patient.id)\" class=\"material-icons\">list</i>\t\n\t\t</div>\t\t\n\t</md-card>\n\t<div *ngIf=\"!patients || !patients.length\" style=\"text-align:center;\">\n\t\t<div style=\"margin:2em auto;\">\n\t\t\tNo patient found<br><br>Add a new patient to proceed\t\n\t\t</div>\t\n\t\t<div style=\"margin:1em auto;\">\n\t\t\t<button md-raised-button (click)=\"newPatient()\">Add a patient</button>\t\n\t\t</div>\t\n\t</div>\n\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/patient-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_service__ = __webpack_require__("../../../../../src/app/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientListComponent = (function () {
    function PatientListComponent(server, router, dialogService, authService) {
        this.server = server;
        this.router = router;
        this.dialogService = dialogService;
        this.authService = authService;
    }
    Object.defineProperty(PatientListComponent.prototype, "error", {
        set: function (error) {
            var diag = this.dialogService.show('Error', 'There has been an error in contacting the server. Please check your connection and try again.', [], 'Close');
        },
        enumerable: true,
        configurable: true
    });
    PatientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onSearch(); });
    };
    PatientListComponent.prototype.onSearch = function (search) {
        var _this = this;
        this.server.busy = this.server.getPatients(search).subscribe(function (patients) { return _this.patients = patients; }, function (error) { return _this.error = error; });
    };
    PatientListComponent.prototype.editPatient = function (id) {
        this.router.navigate(['patient', id, 'profile']);
    };
    PatientListComponent.prototype.newPatient = function () {
        this.router.navigate(['patient', 0, 'profile']);
    };
    PatientListComponent.prototype.showForm = function (id) {
        if (!id)
            return;
        this.router.navigate(['patient', id, 'form']);
    };
    PatientListComponent.prototype.formsList = function (id) {
        this.router.navigate(['patient', id, 'forms-list']);
    };
    PatientListComponent.prototype.searchBack = function () {
        this.showSearch = false;
        this.onSearch();
    };
    return PatientListComponent;
}());
PatientListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/patient-list.component.html"),
        selector: 'patient-list',
        styles: [__webpack_require__("../../../../../src/app/patient-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* Server */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dialog_service__["a" /* DialogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], PatientListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=patient-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/patient-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:65px 5px 0 5px;height:100%;box-sizing:border-box;overflow:scroll;\">\n\t<form (ngSubmit)=\"saveProfile()\" #profileForm=\"ngForm\" >\n\t\t<md-input-container>\n\t\t\t<input mdInput type=\"text\" name=\"uhid\" class=\"medium\" placeholder=\"UHID\" required [(ngModel)]=\"pp.patient.uhid\">\t\t\n\t\t</md-input-container>\n\t\t<md-input-container>\n\t\t\t<input mdInput type=\"text\" name=\"name\" class=\"big\" placeholder=\"Name\" required [(ngModel)]=\"pp.patient.name\">\n\t\t</md-input-container>\n\t\t<!-- <md-input-container>\n\t\t\t<input mdInput type=\"date\" name=\"dob\" class=\"small\" placeholder=\"Date of birth\" required [ngModel]=\"pp.patient.dob | date: 'yyyy-MM-dd'\" (ngModelChange)=\"pp.patient.dob=$event\" >\n\t\t</md-input-container> -->\n\t\t<md-input-container>\n\t\t\t<input mdInput type=\"text\" name=\"bednum\" class=\"small\" placeholder=\"Bed Number\" required [(ngModel)]=\"pp.patient.bednum\">\n\t\t</md-input-container>\n\t\t<md-input-container>\n\t\t\t<input mdInput type=\"number\" name=\"weight\" class=\"small\" placeholder=\"Weight (Kgs)\" required [(ngModel)]=\"pp.patient.profile.weight\">\n\t\t</md-input-container>\t\t\t\t\t\t\t\t\n\t\t<md-select placeholder=\"Diabetes Type\" name=\"diabetes\" class=\"big\" required [(ngModel)]=\"pp.patient.profile.diabetes\" >\n\t\t\t<md-option value=\"Known Case\" >Known Case</md-option>\n\t\t\t<md-option value=\"New Onset\">New Onset</md-option>\n\t\t</md-select>\n\t\t<md-input-container class=\"big\">\n\t\t\t<input mdInput type=\"number\" step=\"0.1\" name=\"preTransplantDose\" placeholder=\"Pre-Transplant Insulin Dose (units/day)\" required [(ngModel)]=\"pp.patient.profile.preTransplantDose\">\n\t\t</md-input-container>\n\t\t<md-select placeholder=\"Insulin Delivery Type\" name=\"insulinDeliveryType\" class=\"medium\" required [(ngModel)]=\"pp.patient.profile.insulinDeliveryType\" >\n\t\t\t<md-option value=\"infusion\" >Infusion</md-option>\n\t\t\t<md-option value=\"subcutaneous\">Subcutaneous</md-option>\n\t\t</md-select>\n\t\t<br>\n\t\t<br>\n\t\t<md-select *ngIf=\"pp.patient.profile.insulinDeliveryType=='subcutaneous' && pp.patient.profile.subcutaneousColumn\" placeholder=\"Subcutaneous Column\" name=\"subcutaneousColumn\" class=\"medium\" required [(ngModel)]=\"pp.patient.profile.subcutaneousColumn\" >\n\t\t\t<md-option *ngFor=\"let item of getOptions('subcutaneous')\" [value]=item.k >{{item.t}}</md-option>\n\t\t</md-select>\n\t\t<md-select *ngIf=\"pp.patient.profile.insulinDeliveryType=='infusion' && pp.patient.profile.infusionColumn\" placeholder=\"Infusion Column\" name=\"infusionColumn\" class=\"medium\" required [(ngModel)]=\"pp.patient.profile.infusionColumn\" >\n\t\t\t<md-option *ngFor=\"let item of getOptions('infusion')\" [value]=item.k >{{item.t}}</md-option>\n\t\t</md-select>\t\t\n\t\t<div style=\"text-align:center;margin-top:10px;\">\n\t\t\t<button md-raised-button type=\"submit\" [disabled]=\"!profileForm.form.valid\">Save</button>\n\t\t\t<a md-button (click)=\"goBack()\">Cancel</a>\n\t\t</div>\n\t</form>\t\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_provider_service__ = __webpack_require__("../../../../../src/app/patient-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatientProfileComponent = (function () {
    function PatientProfileComponent(pp, router, route, location, server) {
        this.pp = pp;
        this.router = router;
        this.route = route;
        this.location = location;
        this.server = server;
    }
    PatientProfileComponent.prototype.getOptions = function (type) {
        var conf = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */][type];
        return conf.filter(function (r) { return r.k.match(/col/); });
    };
    PatientProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        setTimeout(function () { return _this.pp.getPatient(id); });
    };
    PatientProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        this.server.busy = this.pp.savePatient().subscribe(function (patient) { _this.router.navigate(['patient-list']); }, function (error) { return _this.error = error; });
    };
    PatientProfileComponent.prototype.goBack = function () {
        this.router.navigate(['patient-list']);
    };
    return PatientProfileComponent;
}());
PatientProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/patient-profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__patient_provider_service__["a" /* PatientProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__patient_provider_service__["a" /* PatientProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__server_service__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__server_service__["a" /* Server */]) === "function" && _e || Object])
], PatientProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=patient-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/patient-provider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient__ = __webpack_require__("../../../../../src/app/patient.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//This service is a caching method to allow multiple components to use the same patient without requesting each time



var PatientProvider = (function () {
    function PatientProvider(server) {
        this.server = server;
        this.patient = new __WEBPACK_IMPORTED_MODULE_2__patient__["a" /* Patient */]();
    }
    ;
    PatientProvider.prototype.getPatient = function (id) {
        var _this = this;
        if (!id) {
            this.patient = new __WEBPACK_IMPORTED_MODULE_2__patient__["a" /* Patient */]();
            return Promise.resolve();
        }
        else if (!this.patient || this.patient.id != id)
            return new Promise(function (resolve, reject) {
                _this.server.busy = _this.server.getProfile(id).subscribe(function (patient) {
                    _this.patient = patient;
                    resolve();
                }, function (e) { return reject(); });
            });
        else
            return Promise.resolve();
    };
    PatientProvider.prototype.savePatient = function () {
        return this.server.savePatient(this.patient);
    };
    return PatientProvider;
}());
PatientProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* Server */]) === "function" && _a || Object])
], PatientProvider);

var _a;
//# sourceMappingURL=patient-provider.service.js.map

/***/ }),

/***/ "../../../../../src/app/patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_provider_service__ = __webpack_require__("../../../../../src/app/patient-provider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientComponent = (function () {
    function PatientComponent(pp, route, router) {
        this.pp = pp;
        this.route = route;
        this.router = router;
    }
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        if (!id)
            return;
        setTimeout(function () { return _this.pp.getPatient(id); });
    };
    PatientComponent.prototype.goBack = function () {
        this.router.navigate(['patient-list']);
    };
    return PatientComponent;
}());
PatientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n\t\t<div class=\"topfixed\">\n\t\t\t<md-toolbar color=\"primary\">\n\t\t\t\t<i class=\"material-icons\" (click)=\"goBack()\">arrow_back</i>\n\t\t\t\t<span>{{pp.patient.id?pp.patient.name:'New Patient'}}</span>\n\t\t\t</md-toolbar>\n\t\t</div>\t\n\t\t<router-outlet></router-outlet>\n\t"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__patient_provider_service__["a" /* PatientProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__patient_provider_service__["a" /* PatientProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PatientComponent);

var _a, _b, _c;
//# sourceMappingURL=patient.component.js.map

/***/ }),

/***/ "../../../../../src/app/patient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile__ = __webpack_require__("../../../../../src/app/profile.ts");

var Patient = (function () {
    function Patient() {
        this.profile = new __WEBPACK_IMPORTED_MODULE_0__profile__["a" /* Profile */]();
        //add other optional properties diabetes type, etc
    }
    return Patient;
}());

//# sourceMappingURL=patient.js.map

/***/ }),

/***/ "../../../../../src/app/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ "../../../../../src/app/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Server; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_retryWhen__ = __webpack_require__("../../../../rxjs/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialog_service__ = __webpack_require__("../../../../../src/app/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var Server = (function () {
    function Server(http, authService, dialogService) {
        this.http = http;
        this.authService = authService;
        this.dialogService = dialogService;
        this.dataUrl = __WEBPACK_IMPORTED_MODULE_14__app_settings__["a" /* AppSettings */].apiEndpoint;
    }
    Object.defineProperty(Server.prototype, "busy", {
        set: function (sub) {
            var _this = this;
            if (!sub)
                this.isBusy = false;
            else {
                this.isBusy = true;
                sub.add(function () { setTimeout(function () { return _this.isBusy = false; }, 100); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Server.prototype.getPatients = function (uhid) {
        var _this = this;
        return this.http.post(this.dataUrl + 'getPatients', uhid).map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).catch(this.handleError);
    };
    Server.prototype.getProfile = function (id) {
        var _this = this;
        return this.http.post(this.dataUrl + 'getProfile', id).map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).catch(this.handleError);
    };
    Server.prototype.savePatient = function (patient) {
        var _this = this;
        return this.http.post(this.dataUrl + 'savePatient', patient).map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).catch(this.handleError);
    };
    Server.prototype.saveForm = function (form) {
        var _this = this;
        return this.http.post(this.dataUrl + 'saveForm', form).map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).catch(this.handleError);
    };
    Server.prototype.getForms = function (patientid) {
        var _this = this;
        return this.http.post(this.dataUrl + 'getForms', patientid).map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).catch(this.handleError);
    };
    Server.prototype.getProtocol = function (type) {
        var _this = this;
        return this.http.post(this.dataUrl + 'getProtocol', type).map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).catch(this.handleError);
    };
    Server.prototype.saveProtocol = function (protocol) {
        var _this = this;
        return this.http.post(this.dataUrl + 'saveProtocol', protocol).map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).catch(this.handleError);
    };
    Server.prototype.validateProtocol = function (patient, forms) {
        var _this = this;
        return this.http.post(this.dataUrl + 'validateProtocol', { patient: patient, forms: forms }).map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).catch(this.handleError);
    };
    Server.prototype.getUserProfile = function () {
        var _this = this;
        return this.http.get(this.dataUrl + 'getUserProfile').map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).do(function (user) { return _this.authService.user = user; }).catch(this.handleError);
    };
    Server.prototype.getTransactions = function () {
        var _this = this;
        return this.http.get(this.dataUrl + 'getTransactions').map(function (res) { return _this.parseBody(res); }).retryWhen(function (e) { return _this.retryRequest(e); }).catch(this.handleError);
    };
    Server.prototype.retryRequest = function (error) {
        var _this = this;
        return error.scan(function (count, e, index) {
            if (e != 'Auth Fail' || index == 1)
                throw e;
            return;
        }, 0).delay(1000).switchMap(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(_this.authService.reload()); });
    };
    Server.prototype.parseBody = function (res) {
        if (res.text() == 'fail')
            throw "Server Internal Error";
        if (res.text() == 'authFail') {
            throw "Auth Fail";
        }
        return res.text() == 'success' ? 'success' : (res.json() || {});
    };
    Server.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return Server;
}());
Server = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_13__dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__dialog_service__["a" /* DialogService */]) === "function" && _c || Object])
], Server);

var _a, _b, _c;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ "../../../../../src/app/validate-protocol.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topfixed\">\n\t<md-toolbar color=\"primary\" >\n\t\t<i class=\"material-icons\" (click)=\"authService.sideNav.toggle()\">account_circle</i>\n\t\t<span>Validate Protocol</span>\n\t\t<span class=\"filler\"></span>\t\t\n\t</md-toolbar>\n\t<!-- <div style=\"padding:0 5px;\">\n\t\t<div style=\"width:100%;\">\n\t\t\t<span>Edit Protocol:</span>\n\t\t\t<md-select name=\"type\" required [(ngModel)]=\"type\" class=\"big\" (change)=\"getProtocol()\">\n\t\t\t\t<md-option value=\"subcutaneous\" >Subcutaneous Insulin</md-option>\n\t\t\t\t<md-option value=\"infusion\" >Insulin Infusion</md-option>\n\t\t\t</md-select>\n\t\t</div>\t\t\n\t</div> -->\n</div>\n<div #page id=\"page\" style=\"padding:100px 5px 0 5px;box-sizing:border-box;overflow:scroll;height:100%;\">\n\t<md-input-container>\n\t\t<input mdInput type=\"number\" name=\"weight\" placeholder=\"Patient's weight\"  [(ngModel)]=\"patient.profile.weight\">\n\t</md-input-container>\n\t<md-input-container>\n\t\t<input mdInput type=\"number\"  step=\"0.1\" name=\"preTransplantDose\" placeholder=\"Pre-transplant Insulin Dose\"  [(ngModel)]=\"patient.profile.preTransplantDose\">\n\t</md-input-container>\n\t<form (ngSubmit)=\"submit(page)\" #protocolForm=\"ngForm\" >\n\t\t<div>\t\t\t\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<th *ngFor=\"let col of config\">{{col.t}}</th>\n\t\t\t\t</thead>\n\t\t\t\t<tr *ngFor=\"let row of data;let i = index; \">\n\t\t\t\t\t<td *ngFor=\"let col of config; let j=index; \">\n\t\t\t\t\t\t<md-input-container *ngIf=\"col.type\">\n\t\t\t\t\t\t\t<input mdInput [type]=\"col.type\" step=\"0.1\" [name]=\"i+'_'+j\"  [(ngModel)]=\"row[col.k]\" class=\"centered\">\n\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t<span *ngIf=\"!col.type\">{{row[col.k]}}</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\t\t\n\t\t</div>\n\t\t<div style=\"text-align:center;margin-top:10px;\">\n\t\t\t<button md-raised-button type=\"submit\" [disabled]=\"!protocolForm.form.valid\">Get Recommendation</button>\n\t\t</div>\t\n\t</form>\n\t<div style=\"text-align:center;\">\n\t\t<div *ngIf=\"recommendation?.text\">\n\t\t\t<h2>Recommendation</h2>\n\t\t\t<h4 *ngIf=\"recommendation.dosageType\">For {{recommendation.dosageType}} dose</h4>\n\t\t\t<div style=\"margin:0 auto;min-width:300px;width:60%;text-align:left;\">Text:{{recommendation.text}}</div>\n\t\t\t<div style=\"margin:0 auto;min-width:300px;width:60%;text-align:left;\">Insulin:{{recommendation.ins}}</div>\n\t\t\t<div style=\"margin:0 auto;min-width:300px;width:60%;text-align:left;\">Dose:{{recommendation.dose}}</div>\t\t\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/validate-protocol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateProtocolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidateProtocolComponent = (function () {
    function ValidateProtocolComponent(server, authService) {
        this.server = server;
        this.authService = authService;
        this.patient = { name: 'Pravin', id: 3, dob: new Date(), profile: { diabetes: 'Known Case', insulinDeliveryType: 'subcutaneous', preTransplantDose: 40, weight: 80 }, bednum: '123', uhid: '1234' };
        this.order = ['Before Breakfast', '10:00 AM', 'Before Lunch', 'Before Evening Snack', 'Before Dinner', 'Bedtime'];
        this.data = [];
        this.config = [{ k: 'dt', t: 'Date' }, { k: 'dosageType', t: 'Dosage Type' }, { k: 'plasmaGlucose', t: 'Plasma Glucose', type: 'number' }, { k: 'insulinDose', t: 'Insulin Dose', type: 'number' }];
        this.recommendation = {};
        for (var i = 0; i < this.order.length; i++)
            this.data.push({ dt: date.format(date.addDays(new Date(), -1), 'DD MMM YYYY'), dosageType: this.order[i], plasmaGlucose: 90 + Math.round(Math.random() * 100), insulinDose: 10 + Math.round(Math.random() * 10) });
        for (var i = 0; i < this.order.length; i++)
            this.data.push({ dt: date.format(new Date(), 'DD MMM YYYY'), dosageType: this.order[i] });
    }
    ValidateProtocolComponent.prototype.submit = function (page) {
        var _this = this;
        delete this.recommendation;
        var forms = [];
        for (var i = 0; i < this.data.length; i++) {
            var r = this.data[i];
            if (r.plasmaGlucose)
                forms.push({ type: 'subcutaneous', dt: r.dt, data: { plasmaGlucose: r.plasmaGlucose, dosageType: r.dosageType } });
            if (r.insulinDose)
                forms.push({ type: 'subcutaneousDose', dt: r.dt, data: { insulinDose: r.insulinDose, dosageType: r.dosageType } });
        }
        this.server.busy = this.server.validateProtocol(this.patient, forms).subscribe(function (rs) { _this.recommendation = rs; setImmediate(function () { page.scrollTop = page.scrollHeight; }); });
    };
    return ValidateProtocolComponent;
}());
ValidateProtocolComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/validate-protocol.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* Server */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ValidateProtocolComponent);

var _a, _b;
//# sourceMappingURL=validate-protocol.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn-bd": "../../../../moment/locale/bn-bd.js",
	"./bn-bd.js": "../../../../moment/locale/bn-bd.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-in": "../../../../moment/locale/en-in.js",
	"./en-in.js": "../../../../moment/locale/en-in.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./en-sg": "../../../../moment/locale/en-sg.js",
	"./en-sg.js": "../../../../moment/locale/en-sg.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-mx": "../../../../moment/locale/es-mx.js",
	"./es-mx.js": "../../../../moment/locale/es-mx.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fil": "../../../../moment/locale/fil.js",
	"./fil.js": "../../../../moment/locale/fil.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./ga": "../../../../moment/locale/ga.js",
	"./ga.js": "../../../../moment/locale/ga.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-deva": "../../../../moment/locale/gom-deva.js",
	"./gom-deva.js": "../../../../moment/locale/gom-deva.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it-ch": "../../../../moment/locale/it-ch.js",
	"./it-ch.js": "../../../../moment/locale/it-ch.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ku": "../../../../moment/locale/ku.js",
	"./ku.js": "../../../../moment/locale/ku.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./oc-lnc": "../../../../moment/locale/oc-lnc.js",
	"./oc-lnc.js": "../../../../moment/locale/oc-lnc.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tk": "../../../../moment/locale/tk.js",
	"./tk.js": "../../../../moment/locale/tk.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-mo": "../../../../moment/locale/zh-mo.js",
	"./zh-mo.js": "../../../../moment/locale/zh-mo.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map