(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n    text-align: center;\r\n    margin-left:400px;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLG9GQUFvRjtJQUNwRix1QkFBdUI7R0FDeEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6NDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"example-card\">\n  <mat-card-header @animateImage >\n  <img mat-card-image src=\"../assets/images/defacto.png\" alt=\"Photo of a Shiba Inu\" >\n    \n</mat-card-header>\n  <mat-card-content>\n    <p>\n      Online Defacto website seeks to expolit the internet goals by making the world \n      as a small town and make the life easier.\n    </p>\n  </mat-card-content>\n  \n</mat-card>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animateImage', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void=>*', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translateX(500px)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 1,
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(5000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                transform: 'translateX(0)'
                            }))
                        ])
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-products/manage-products.component */ "./src/app/manage-products/manage-products.component.ts");
/* harmony import */ var _man_list_man_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./man-list/man-list.component */ "./src/app/man-list/man-list.component.ts");
/* harmony import */ var _woman_list_woman_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./woman-list/woman-list.component */ "./src/app/woman-list/woman-list.component.ts");
/* harmony import */ var _baby_list_baby_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./baby-list/baby-list.component */ "./src/app/baby-list/baby-list.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");













var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //  {path:"", redirectTo:"/app-home", pathMatch: "full"},
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'aboutus', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
    { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"] },
    { path: 'manlist', component: _man_list_man_list_component__WEBPACK_IMPORTED_MODULE_7__["ManListComponent"] },
    { path: 'manageProduct', component: _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_6__["ManageProductsComponent"] },
    { path: 'womanlist', component: _woman_list_woman_list_component__WEBPACK_IMPORTED_MODULE_8__["WomanListComponent"] },
    { path: 'babylist', component: _baby_list_baby_list_component__WEBPACK_IMPORTED_MODULE_9__["BabyListComponent"] },
    { path: 'editProduct/:id', component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_10__["EditProductComponent"] },
    { path: "AppComponent", component: _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n   \n    <app-nav (loginEvent) ='checkLoggin($event)' > \n        \n      <!-- <app-login (loginEvent) ='checkLoggin($event)'></app-login> -->\n</app-nav> \n\n<router-outlet>\n  \n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isLoggedIn = false;
        this.title = 'Defacto';
    }
    AppComponent.prototype.checkLoggin = function (e) {
        console.log(e, "ee");
        if (e.success) {
            this.isLoggedIn = true;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var angular_image_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-image-slider */ "./node_modules/angular-image-slider/esm5/angular-image-slider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _man_list_man_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./man-list/man-list.component */ "./src/app/man-list/man-list.component.ts");
/* harmony import */ var _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./manage-products/manage-products.component */ "./src/app/manage-products/manage-products.component.ts");
/* harmony import */ var _woman_list_woman_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./woman-list/woman-list.component */ "./src/app/woman-list/woman-list.component.ts");
/* harmony import */ var _baby_list_baby_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./baby-list/baby-list.component */ "./src/app/baby-list/baby-list.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_22__["CategoryComponent"],
                _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_24__["ManageProductsComponent"],
                _man_list_man_list_component__WEBPACK_IMPORTED_MODULE_23__["ManListComponent"],
                _woman_list_woman_list_component__WEBPACK_IMPORTED_MODULE_25__["WomanListComponent"],
                _baby_list_baby_list_component__WEBPACK_IMPORTED_MODULE_26__["BabyListComponent"],
                _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_27__["EditProductComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                angular_image_slider__WEBPACK_IMPORTED_MODULE_12__["SliderModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/baby-list/baby-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/baby-list/baby-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\ndiv.gallery {\r\n    margin:5px;\r\n   \r\n    border: 1px solid #ccc;\r\n    float: left;\r\n    width: 180px;\r\n   \r\n  }\r\n  \r\n  div.gallery:hover {\r\n    border: 1px solid #777;\r\n  }\r\n  \r\n  div.gallery img {\r\n    width: 100%;\r\n  \r\n  }\r\n  \r\n  div.desc {\r\n    padding: 15px;\r\n    text-align: center;\r\n    /* border: 1px solid #ccc; */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFieS1saXN0L2JhYnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTs7R0FFZDs7RUFFRDtJQUNFLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLFlBQVk7O0dBRWI7O0VBRUQ7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDZCQUE2QjtHQUM5QiIsImZpbGUiOiJzcmMvYXBwL2JhYnktbGlzdC9iYWJ5LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZGl2LmdhbGxlcnkge1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBkaXYuZ2FsbGVyeTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xyXG4gIH1cclxuICBcclxuICBkaXYuZ2FsbGVyeSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGRpdi5kZXNjIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/baby-list/baby-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/baby-list/baby-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor = \"let obj of productBaby\" >\n\n  <div *ngIf='obj.type === \"baby\" ' class=\"gallery\" >\n    <a >\n      <img src=\"{{obj.image}}\" alt=\"baby\" width=\"300\" height=\"200\">\n    </a>\n    <div class=\"desc\" >{{obj.description}}</div>\n    <div class=\"desc\"> {{obj.price | currency}}</div>\n  </div>\n \n  </div>\n"

/***/ }),

/***/ "./src/app/baby-list/baby-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/baby-list/baby-list.component.ts ***!
  \**************************************************/
/*! exports provided: BabyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabyListComponent", function() { return BabyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage.service */ "./src/app/manage.service.ts");



var BabyListComponent = /** @class */ (function () {
    function BabyListComponent(manageService) {
        this.manageService = manageService;
        this.productBaby = [];
    }
    BabyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manageService.getProduct().subscribe(function (pro) { return _this.productBaby = pro; });
    };
    BabyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-baby-list',
            template: __webpack_require__(/*! ./baby-list.component.html */ "./src/app/baby-list/baby-list.component.html"),
            styles: [__webpack_require__(/*! ./baby-list.component.css */ "./src/app/baby-list/baby-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_manage_service__WEBPACK_IMPORTED_MODULE_2__["ManageService"]])
    ], BabyListComponent);
    return BabyListComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.gallery {\n    margin: 5px;\n    border: 1px solid #ccc;\n    float: left;\n    width: 180px;\n  }\n  \n  div.gallery:hover {\n    border: 1px solid #777;\n  }\n  \n  div.gallery img {\n    width: 100%;\n    height: auto;\n  }\n  \n  div.desc {\n    padding: 15px;\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7R0FDZDs7RUFFRDtJQUNFLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0dBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5nYWxsZXJ5IHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuICBcbiAgZGl2LmdhbGxlcnk6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XG4gIH1cbiAgXG4gIGRpdi5nYWxsZXJ5IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICBkaXYuZGVzYyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"gallery\">\n  <a >\n    <img src=\"../assets/images/man.jpg\" alt=\"Man\" width=\"300\" height=\"200\">\n  </a>\n  <div class=\"desc\"  (click)= \"onSelectMan()\">Man Clothing</div>\n</div>\n\n<div class=\"gallery\">\n  <a >\n    <img src=\"../assets/images/woman.jpg\" alt=\"Woman\" width=\"300\" height=\"200\">\n  </a>\n  <div class=\"desc\" (click)=\"onSelectWoman()\">Woman Clothing</div>\n</div>\n\n<div class=\"gallery\">\n  <a >\n    <img src=\"../assets/images/baby.jpg\" alt=\"baby\" width=\"300\" height=\"200\">\n  </a>\n  <div class=\"desc\" (click)= \"onSelectBaby()\">Baby Clothing</div>\n</div>\n"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(router) {
        this.router = router;
        this.catgory = [
            { name: "Man Clothing", im: "../assets/images/1.jpg" },
            { name: "Woman Clothing", im: "../assets/images/2.jpg" },
            { name: "Baby Clothing", im: "../assets/images/3.jpg" }
        ];
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.onSelectMan = function () {
        this.router.navigate(['/manlist']);
    };
    CategoryComponent.prototype.onSelectWoman = function () {
        this.router.navigate(['/womanlist']);
    };
    CategoryComponent.prototype.onSelectBaby = function () {
        this.router.navigate(['/babylist']);
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/edit-product/edit-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);\n\n.tablestyle{\n \n  background-color:#2f4e4a;\n  text-align:center;\n  min-width: 300px;\n  margin-left:250px;\n margin-right: 250px;\n}\n\nh1 {\n  font-family:cursive;\n  display: block;\n  font-size: 2em;\n  padding-top:30px;\n  font-weight: bold;\n  margin-top:60px;\n  color:rgb(221, 54, 54);\n}\n\n.mat-card-content, .mat-card-subtitle {\n  font-size: 14px;\n  text-align:left;\n }\n\n.example-container {\n   \n   flex-direction: column;\n   /* margin-left: 100px; */\n }\n\n.example-container > * {\n   width: 100%;\n }\n\n.example-container form {\n   margin-bottom: 20px;\n }\n\n.example-container form > * {\n   margin: 5px 0;\n }\n\n.example-container .mat-radio-button {\n   margin: 0 5px;\n   text-align: left;\n }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFFQUFxRTs7QUFFckU7O0VBRUUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CLG9CQUFvQjtDQUNwQjs7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEI7O0FBQ0Q7O0dBRUUsdUJBQXVCO0dBQ3ZCLHlCQUF5QjtFQUMxQjs7QUFFRDtHQUNFLFlBQVk7RUFDYjs7QUFFRDtHQUNFLG9CQUFvQjtFQUNyQjs7QUFFRDtHQUNFLGNBQWM7RUFDZjs7QUFFRDtHQUNFLGNBQWM7R0FDZCxpQkFBaUI7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNTAwKTtcblxuLnRhYmxlc3R5bGV7XG4gXG4gIGJhY2tncm91bmQtY29sb3I6IzJmNGU0YTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OjI1MHB4O1xuIG1hcmdpbi1yaWdodDogMjUwcHg7XG59XG5oMSB7XG4gIGZvbnQtZmFtaWx5OmN1cnNpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDJlbTtcbiAgcGFkZGluZy10b3A6MzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6NjBweDtcbiAgY29sb3I6cmdiKDIyMSwgNTQsIDU0KTtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQsIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuIH1cbiAuZXhhbXBsZS1jb250YWluZXIge1xuICAgXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgLyogbWFyZ2luLWxlZnQ6IDEwMHB4OyAqL1xuIH1cbiBcbiAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgIHdpZHRoOiAxMDAlO1xuIH1cbiBcbiAuZXhhbXBsZS1jb250YWluZXIgZm9ybSB7XG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuIH1cbiBcbiAuZXhhbXBsZS1jb250YWluZXIgZm9ybSA+ICoge1xuICAgbWFyZ2luOiA1cHggMDtcbiB9XG4gXG4gLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgIG1hcmdpbjogMCA1cHg7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"tablestyle\">\n\n  <h1 >Product Edit Form</h1>\n\n  \n<mat-card class=\"example-container\" >\n\n<mat-card-content>\n<form class=\"example-container\" [formGroup]=\"editForm\" >\n\n    <mat-form-field>\n      <input matInput placeholder=\"Enter your name product\"  class=\"form-control\" formControlName=\"name\" [value]=\"data.name\" required>\n   \n      </mat-form-field>\n    \n    <mat-form-field>\n     <input matInput placeholder=\"Enter your Description\"  class=\"form-control\" formControlName=\"description\"  [value]=\"data.description\" required>\n    </mat-form-field>\n   \n    <mat-form-field >\n        <input matInput placeholder=\"Enter your price\"  class=\"form-control\" formControlName=\"price\"  [value]=\"data.price\" required>\n       </mat-form-field>\n       \n    <mat-form-field >\n        <input matInput placeholder=\"Enter your image\"  class=\"form-control\" formControlName=\"image\" [value]=\"data.image\" required>\n       </mat-form-field>\n\n       <label>Category: </label>\n       <mat-radio-group  formControlName=\"type\" >\n         <mat-radio-button  *ngFor=\"let collections of collection\" [value]=\"collections\" >\n           {{collections}}\n         </mat-radio-button>\n       </mat-radio-group>\n\n</form>\n\n<mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n</mat-card-content>\n<mat-card-actions>\n  <button  mat-raised-button  color=\"primary\"  type=\"submit\" (click)='editProduct()'>edit</button>\n  <button  mat-raised-button color=\"warn\" type=\"submit\" (click)='resetForm()'>cancle</button>\n</mat-card-actions>\n</mat-card> \n</div>\n"

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.ts ***!
  \********************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage.service */ "./src/app/manage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(manageService, router) {
        this.manageService = manageService;
        this.router = router;
        this.data = [];
        // radio button
        this.collection = ['man', 'woman', 'baby'];
        // reactive form way 
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manageService.getLogin().subscribe(function (response) { return _this.islogin = response; });
        this.id = parseInt(this.router.snapshot.paramMap.get('id'));
        this.manageService.getProductById(this.id).subscribe(function (res) { return _this.data = res; });
    };
    EditProductComponent.prototype.editProduct = function () {
        console.log(this.id);
        var obj = { name: this.editForm.value.name, type: this.editForm.value.type, description: this.editForm.value.description,
            image: this.editForm.value.image, price: this.editForm.value.price };
        this.manageService.edit(this.id, obj).subscribe(function (re) { return console.log(re); });
        console.log("sucsses edit");
        //    for(let prod of this.data){
        // if(this.id==prod.id){
        //  prod.name= this.editForm.value.name;
        //  prod.description=this.editForm.value.description;
        //  prod.type=this.editForm.value.type;
        // }
        //  alert("edit sucsses")
        //}
    };
    EditProductComponent.prototype.resetForm = function () {
        this.editForm.reset();
        //  this.editForm.reset({name:this.editForm.value.name,type:this.editForm.value.type,description:this.editForm.value.description
        //     ,image:this.editForm.value.image,price:this.editForm.value.price})
    };
    EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/edit-product/edit-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_manage_service__WEBPACK_IMPORTED_MODULE_2__["ManageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font-family: cursive;\r\n    text-align: center;\r\n    padding-bottom: 30px;\r\n    padding-top: 20px;\r\n}\r\n.container{\r\n    padding-left: 200px;\r\n    /* background-color: black; */\r\n}\r\n.catg1{\r\n    /* padding:20px; */\r\n    background-color: black;\r\n    margin-right: 150px;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\nh2{\r\n    color: red;\r\n}\r\np{\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n/* Form Styling*/\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: mintcream;\r\n    padding-left: 250px;\r\n    padding-bottom: 50px;\r\n\r\n  }\r\n.example-container > * {\r\n    width: 50%;\r\n  }\r\nfooter {\r\n    /* position: fixed; */\r\n    /* left: 0;\r\n    bottom: 0; */\r\n    padding-top:5px;\r\n    padding-bottom: 5px;\r\n    width: 100%;\r\n    background-color: black;\r\n    color: white;\r\n    text-align: center;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQiw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCO0FBQ0QsaUJBQWlCO0FBQ2pCO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLHFCQUFxQjs7R0FFdEI7QUFFRDtJQUNFLFdBQVc7R0FDWjtBQUVEO0lBQ0Usc0JBQXNCO0lBQ3RCO2lCQUNhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXHJcbn1cclxuLmNhdGcxe1xyXG4gICAgLyogcGFkZGluZzoyMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi8qIEZvcm0gU3R5bGluZyovXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pbnRjcmVhbTtcclxuICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICAvKiBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwOyAqL1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>OnLine Defacto</h1>\n\n<angular-image-slider [images]=\"imagesUrl\"></angular-image-slider>\n<br>\n<br>\n<hr>\n\n<h1>Our Categories</h1>\n<div class=\"container\">\n    <div class=\"catg1\">\n       <div class=\"catImg\">\n           <img src=\"../assets/images/man.jpg\" height=\"200px\" width= \"250px\" border-radius= 50% >\n       </div>\n       <div class=\"catDesc\">\n           <h2>Man Clothing</h2>\n           <p>We try to provide you with all your needs from man clothing.</p>\n       </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"catg1\" >\n        <div class=\"catImg\">\n            <img src=\"../assets/images/woman.jpg\" height=\"200px\" width= \"250px\" border-radius= 50% >\n        </div>\n        <div class=\"catDesc\">\n            <h2>Woman Clothing</h2>\n            <p>We try to provide you with all your needs from woman clothing.</p>\n        </div>\n     </div>\n     <br>\n     <br>\n\n     <div class=\"catg1\">\n        <div class=\"catImg\">\n            <img src=\"../assets/images/baby.jpg\" height=\"200px\" width= \"250px\" border-radius= 50% >\n        </div>\n        <div class=\"catDesc\">\n            <h2>Baby Clothing</h2>\n            <p>We try to provide you with all your needs from baby clothing.</p>\n        </div>\n     </div>\n</div>\n\n<hr>\n\n\n\n<div class=\"example-container\">\n    <h1>Contact Us</h1>\n    <mat-form-field>\n      <input matInput placeholder=\"Email\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <textarea matInput placeholder=\"Your Message\"></textarea>\n    </mat-form-field>\n\n    <button mat-button>Send Message</button>\n  \n  </div>\n\n  <footer>\n        <p>© 2018 Copyright</p>\n  </footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.imagesUrl = [
            '../assets/images/man.jpg',
            '../assets/images/woman.jpg',
            '../assets/images/baby.jpg',
        ];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginstyle{\ntext-align: center;\n\n\n\n\n}\n.example-container{\n\n  margin-top: 80px;\n    text-align: center;\n    border: 1px solid #777;\n    padding: 30px;\n    margin-left:350px;\n margin-right:350px;\n background-color: bisque\n}\nmat-card-title{\n\nfont-family:cursive;\ncolor: brown;\ntext-align: center;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLG1CQUFtQjs7Ozs7Q0FLbEI7QUFDRDs7RUFFRSxpQkFBaUI7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7Q0FDckIsbUJBQW1CO0NBQ25CLHdCQUF3QjtDQUN4QjtBQUVEOztBQUVBLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsbUJBQW1COztDQUVsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5zdHlsZXtcbnRleHQtYWxpZ246IGNlbnRlcjtcblxuXG5cblxufVxuLmV4YW1wbGUtY29udGFpbmVye1xuXG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBtYXJnaW4tbGVmdDozNTBweDtcbiBtYXJnaW4tcmlnaHQ6MzUwcHg7XG4gYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlXG59XG5cbm1hdC1jYXJkLXRpdGxle1xuXG5mb250LWZhbWlseTpjdXJzaXZlO1xuY29sb3I6IGJyb3duO1xudGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"example-container\" >\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n\n\n  <br>\n  <br>\n  <span style=\"color: red\"> {{error}}</span>\n  <mat-card-content>\n    <form [formGroup]=\"loginForm\" >\n      \n            <mat-form-field >\n            <input matInput placeholder=\"Username\" class=\"form-control\" formControlName=\"username\"  required>\n            </mat-form-field>\n            <span style=\"color: red\">{{errorName}}</span>\n            <br>\n            <br>\n          <mat-form-field >\n          <input matInput placeholder=\"Password\"  class=\"form-control\" formControlName=\"password\" type=\"password\"  required>\n        </mat-form-field>\n        <span style=\"color: red\">{{errorpass}}</span>\n        <br>\n        <br>\n      \n    </form>\n    \n   \n    <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n  </mat-card-content>\n  <mat-card-actions>\n    <button  mat-raised-button  color=\"primary\" (click)='submitForm(loginForm)'>Login</button>\n    <!-- <button  mat-raised-button color=\"primary\" (click) ='logIn()'>submit</button> -->\n  </mat-card-actions>\n</div> \n\n\n\n\n<!--\n<form  [FormGroup]=\"loginForm\" (ngSubmit) ='login()'  >\n    <input  placeholder=\"Username\" formControlName=\"username\"  required>\n  <input  placeholder=\"Password\" formControlName=\"password\" type=\"password\"  required>\n  <button type=\"submit\" color=\"primary\">Login</button>\n\n</form> -->\n\n<!-- \n\n<form [formGroup]='myform'  (ngSubmit) = 'submitForm()'>\n    name : <input formControlName='name'/>\n  <br/>\n  <br/>\n    age : <input formControlName='age'/>\n    <br/>\n    <br/>\n    <span>{{error}}</span><br/><br/>\n    <button mat-flat-button color=\"primary\">Add</button>\n  </form> -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _manage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manage.service */ "./src/app/manage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(manageService, route) {
        this.manageService = manageService;
        this.route = route;
        this.loginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.users = [];
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.errorName = "";
        this.errorpass = "";
    }
    LoginComponent.prototype.logIn = function () {
        console.log("userLoggedIn");
        this.loginEvent.emit({ success: true });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manageService.getUsers().subscribe(function (pro) { return _this.users = pro; });
    };
    LoginComponent.prototype.submitForm = function () {
        if (this.loginForm.controls.username.errors && this.loginForm.controls.username.errors.required) {
            this.errorName = "user name required ";
            if (this.loginForm.controls.password.errors && this.loginForm.controls.password.errors.required) {
                this.errorpass = "password required";
            }
        }
        else {
            for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                var data = _a[_i];
                if (data.username === this.loginForm.value.username && data.password === this.loginForm.value.password) {
                    this.manageService.setLogin(true);
                    // alert("sucsses");
                    this.route.navigate(['/home']);
                }
                else {
                    this.error = (" * invalid user name or password");
                    // alert("invalid user name or password");
                }
            }
            //   alert(this.loginForm.value.username);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "loginEvent", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_manage_service__WEBPACK_IMPORTED_MODULE_3__["ManageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/man-list/man-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/man-list/man-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\ndiv.gallery {\r\n    margin:5px;\r\n   \r\n    border: 1px solid #ccc;\r\n    float: left;\r\n    width: 180px;\r\n   \r\n  }\r\n  \r\n  div.gallery:hover {\r\n    border: 1px solid #777;\r\n  }\r\n  \r\n  div.gallery img {\r\n    width: 100%;\r\n  \r\n  }\r\n  \r\n  div.desc {\r\n    padding: 15px;\r\n    text-align: center;\r\n    /* border: 1px solid #ccc; */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuLWxpc3QvbWFuLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7O0dBRWQ7O0VBRUQ7SUFDRSx1QkFBdUI7R0FDeEI7O0VBRUQ7SUFDRSxZQUFZOztHQUViOztFQUVEO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw2QkFBNkI7R0FDOUIiLCJmaWxlIjoic3JjL2FwcC9tYW4tbGlzdC9tYW4tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5kaXYuZ2FsbGVyeSB7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIGRpdi5nYWxsZXJ5OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdi5nYWxsZXJ5IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgZGl2LmRlc2Mge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7ICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/man-list/man-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/man-list/man-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul *ngFor = \"let obj of productMan\" >\n  <li *ngIf='obj.type === \"man\" '>{{obj.id}}-{{obj.name}} -{{obj.description}} </li>\n\n</ul> -->\n\n<div *ngFor = \"let obj of productMan\" >\n\n\n  \n  <div *ngIf='obj.type === \"man\" ' class=\"gallery\" >\n    <a >\n      <img src=\"{{obj.image}}\" alt=\"Woman\" width=\"300\" height=\"200\">\n    </a>\n    <div class=\"desc\" >{{obj.description}}</div>\n    <div class=\"desc\"> {{obj.price | currency}}</div>\n  </div>\n \n  </div>\n"

/***/ }),

/***/ "./src/app/man-list/man-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/man-list/man-list.component.ts ***!
  \************************************************/
/*! exports provided: ManListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManListComponent", function() { return ManListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage.service */ "./src/app/manage.service.ts");



var ManListComponent = /** @class */ (function () {
    function ManListComponent(manageService) {
        this.manageService = manageService;
        /* public Product =[
           {id :0 , name : "pman1" , type: "man" , description : " i am pman1"},
           {id :0 , name : "pman2" , type: "man" , description : " i am pman2"},
           {id :0 , name : "pman3" , type: "woman" , description : " i am pwoman1"},
           {id :0 , name : "pman4" , type: "man" , description : " i am pman3"},
           {id :0 , name : "pman4" , type: "baby" , description : " i am pbaby1"},
       
         ]
          */
        this.productMan = [];
    }
    ManListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manageService.getProduct().subscribe(function (pro) { return _this.productMan = pro; });
        /*   for(let obj of this.Product){
             if(obj.type === "man"){
               this.productMan.push(obj);
           }   }*/
    };
    ManListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-man-list',
            template: __webpack_require__(/*! ./man-list.component.html */ "./src/app/man-list/man-list.component.html"),
            styles: [__webpack_require__(/*! ./man-list.component.css */ "./src/app/man-list/man-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_manage_service__WEBPACK_IMPORTED_MODULE_2__["ManageService"]])
    ], ManListComponent);
    return ManListComponent;
}());



/***/ }),

/***/ "./src/app/manage-products/manage-products.component.css":
/*!***************************************************************!*\
  !*** ./src/app/manage-products/manage-products.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);\n\n.tablestyle{\n \n  background-color:#2f4e4a;\n  text-align:center;\n  min-width: 300px;\n  margin-left:250px;\n margin-right: 250px;\n}\n\nh1 {\n  font-family:cursive;\n  display: block;\n  font-size: 2em;\n  padding-top:30px;\n  font-weight: bold;\n  margin-top:60px;\n  color:rgb(240, 12, 152)\n}\n\n.mat-card-content, .mat-card-subtitle {\n font-size: 14px;\n text-align:left;\n}\n\n.example-container {\n  \n  flex-direction: column;\n  /* margin-left: 100px; */\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 5px;\n  text-align: left;\n}\n\n.cardmargin{\n  margin-top: 30px;\n\n}\n\ntable {\n  width: 80%;\n  margin-left: 10%;\n  margin-left: 10%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 20%;\n}\n\n.marginsty{\nmargin: 0px 5px;\n}\n\n.borderstyle{\n\n  border-block-start-color: 2px solid black;\n}\n\n.floatright{\n  float:center;\n}\n\n.example-card {\n  max-width: 100%;\n}\n\n.marginsty{\n  margin: 0px 5px;\n  }\n\n.spancenter{\n    position: relative;\n    left: 400px;\n    color: crimson\n}\n\n/* tr:nth-child(even) {background-color: lightslategrey;}\ntable, td, th {\n    border: 2px solid black;\n  }\n  \n  table {\n    border-collapse: collapse;\n    width: 40%;\n    margin-left:350px;\n  \n  }\n  \n  th {\n    height: 30px;\n    color: rgb(206, 79, 98);\n \n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXByb2R1Y3RzL21hbmFnZS1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFFQUFxRTs7QUFFckU7O0VBRUUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CLG9CQUFvQjtDQUNwQjs7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtDQUN4Qjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEI7O0FBQ0Q7O0VBRUUsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7O0NBRWxCOztBQUVEO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsV0FBVztDQUNaOztBQUNEO0FBQ0EsZ0JBQWdCO0NBQ2Y7O0FBQ0Q7O0VBRUUsMENBQTBDO0NBQzNDOztBQUNEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsZ0JBQWdCO0dBQ2Y7O0FBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7Q0FDakI7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnQk0iLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UtcHJvZHVjdHMvbWFuYWdlLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNTAwKTtcblxuLnRhYmxlc3R5bGV7XG4gXG4gIGJhY2tncm91bmQtY29sb3I6IzJmNGU0YTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OjI1MHB4O1xuIG1hcmdpbi1yaWdodDogMjUwcHg7XG59XG5oMSB7XG4gIGZvbnQtZmFtaWx5OmN1cnNpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDJlbTtcbiAgcGFkZGluZy10b3A6MzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6NjBweDtcbiAgY29sb3I6cmdiKDI0MCwgMTIsIDE1Milcbn1cblxuXG4ubWF0LWNhcmQtY29udGVudCwgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiBmb250LXNpemU6IDE0cHg7XG4gdGV4dC1hbGlnbjpsZWZ0O1xufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIG1hcmdpbi1sZWZ0OiAxMDBweDsgKi9cbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciBmb3JtID4gKiB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJkbWFyZ2lue1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuXG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5tYXJnaW5zdHl7XG5tYXJnaW46IDBweCA1cHg7XG59XG4uYm9yZGVyc3R5bGV7XG5cbiAgYm9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOiAycHggc29saWQgYmxhY2s7XG59XG4uZmxvYXRyaWdodHtcbiAgZmxvYXQ6Y2VudGVyO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLm1hcmdpbnN0eXtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICB9XG4gIC5zcGFuY2VudGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0MDBweDtcbiAgICBjb2xvcjogY3JpbXNvblxufVxuXG4vKiB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O31cbnRhYmxlLCB0ZCwgdGgge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIFxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OjM1MHB4O1xuICBcbiAgfVxuICBcbiAgdGgge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjb2xvcjogcmdiKDIwNiwgNzksIDk4KTtcbiBcbiAgfSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/manage-products/manage-products.component.html":
/*!****************************************************************!*\
  !*** ./src/app/manage-products/manage-products.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"tablestyle\">\n\n        <h1 >Product Add Form</h1>\n\n        \n<mat-card class=\"example-container\" >\n    \n    <mat-card-content>\n      <form class=\"example-container\" [formGroup]=\"addForm\" >\n\n          \n              <mat-form-field >\n             <input matInput placeholder=\"Enter your Id product\" class=\"form-control\" formControlName=\"id\"  required>\n              </mat-form-field>\n          \n          <mat-form-field>\n            <input matInput placeholder=\"Enter your name product\"  class=\"form-control\" formControlName=\"name\"  required>\n         \n            </mat-form-field>\n          \n          <mat-form-field>\n           <input matInput placeholder=\"Enter your Description\"  class=\"form-control\" formControlName=\"description\"  required>\n          </mat-form-field>\n         \n          <mat-form-field >\n              <input matInput placeholder=\"Enter your price\"  class=\"form-control\" formControlName=\"price\"  required>\n             </mat-form-field>\n             \n          <mat-form-field >\n              <input matInput placeholder=\"Enter your image\"  class=\"form-control\" formControlName=\"image\"  required>\n             </mat-form-field>\n\n             <label>Category: </label>\n             <mat-radio-group  formControlName=\"type\" >\n               <mat-radio-button  *ngFor=\"let collections of collection\" [value]=\"collections\" >\n                 {{collections}}\n               </mat-radio-button>\n             </mat-radio-group>\n\n      </form>\n      <!-- <span>{{errorName}}</span> -->\n      <!-- <span>{{errorpass}}</span> -->\n      <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    </mat-card-content>\n    <mat-card-actions>\n      <button  mat-raised-button color=\"accent\" (click)='addProduct(addForm)'>Adding</button>\n    </mat-card-actions>\n  </mat-card> \n</div>\n<!--   \n<div id=\"form-outer\">\n  \n \n\n  <div class=\"labels\">\n    <label> ID: </label>\n  </div>\n  <div class=\"rightTab\">\n    <input autofocus type=\"text\"  [(ngModel)] ='id' class=\"input-field\" placeholder=\"Enter your Id product\" required>\n  </div>\n\n      <div class=\"labels\">\n        <label> Name Product : </label>\n      </div>\n      <div class=\"rightTab\">\n        <input autofocus type=\"text\"  [(ngModel)] ='name' class=\"input-field\" placeholder=\"Enter your name product\" required>\n      </div>\n   \n      <div class=\"labels\">\n        <label >  Category: </label>\n      </div>\n      <div class=\"rightTab\">\n          <input type=\"radio\" [(ngModel)] ='type' value=\"man\" > Man<br>\n          <input type=\"radio\" [(ngModel)] ='type' value=\"woman\"> woman<br>\n          <input type=\"radio\" [(ngModel)] ='type' value='baby'> baby\n       \n      </div>\n    \n      <div class=\"labels\">\n        <label> Description : </label>\n      </div>\n      <div class=\"rightTab\">\n        <input type=\"text\"  [(ngModel)] ='description' class=\"input-field\" placeholder=\"Description\">\n      </div>\n   \n    \n</div>\n  \n     \n    <button id=\"submit\" type=\"submit\" (click)=\" addProduct()\">Adding</button>\n\n    \n       --> \n\n    \n\n\n      \n\n<!-- \n<div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n  \n    \n      <div *ngFor= 'let prod of data'>\n      <ng-container matColumnDef=\"position\" >\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{prod.id}} </td>\n      </ng-container>\n  \n  \n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name Product </th>\n        <td mat-cell *matCellDef=\"let element\">{{prod.name}} </td>\n      </ng-container>\n  \n     \n      <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> type </th>\n        <td mat-cell *matCellDef=\"let element\"> {{prod.type}} </td>\n      </ng-container>\n  \n     \n      <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{prod.description}}</td>\n      </ng-container>\n  \n      \n       <ng-container matColumnDef=\"symbol\">\n          <th mat-header-cell *matHeaderCellDef>delete </th>\n          <td mat-cell *matCellDef=\"let element\"> delete</td>\n        </ng-container>\n\n       \n       <ng-container matColumnDef=\"symbol\">\n          <th mat-header-cell *matHeaderCellDef>Edit </th>\n          <td mat-cell *matCellDef=\"let element\"> edit</td>\n        </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </div>\n    </table>\n\n</div> -->\n  <!-- ///////////////////// -->\n  <br>\n  <br>\n       <!-- <table>\n            <tr>\n                <th>Id</th>\n                <th>name Product</th>\n                <th>Category</th> \n                <th>description</th>\n                <th>Price</th>\n                <th>Edit</th>\n                <th >Delete</th>\n                \n              </tr>\n              <tr *ngFor= 'let prod of data'>\n                <td>{{prod.id}}</td>\n                <td>{{prod.name}}</td> \n                <td>{{prod.type}}</td>\n                <td>{{prod.description}}</td>\n                <td>{{prod.price}}</td>\n                <td><button  mat-mini-fab color=\"primary\" (click)=\"onClick(prod.id)\">edit</button></td>\n                <td ><button mat-mini-fab color=\"warn\" (click)=\"delete(prod.id)\"> delete </button> </td>\n              </tr>\n        </table> \n          -->\n\n        <mat-card class=\"example-card cardmargin\" >\n          <mat-card-header>\n            <mat-card-title> <span class=\"spancenter\"> Selected All Product Details </span> </mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n                \n                <div >\n                  <table  >\n                    <thead>\n                        <tr class=\"borderstyle\">\n                            <td > ID </td>\n                            <td > Name Product</td>\n                            <td > Type </td>\n                            <td > Description </td>\n                            <td > price </td>\n                            <td > Edit </td>\n                            <td > Delete </td>\n    \n                        </tr>\n                    </thead>\n                    <tbody>\n                 <tr class=\"borderstyle\" *ngFor= 'let prod of data'>\n                <td>{{prod.id}}</td>\n                <td>{{prod.name}}</td> \n                <td>{{prod.type}}</td>\n                <td>{{prod.description}}</td>\n                <td>{{prod.price}}</td>\n                <td><button  mat-raised-button type=\"button\" color=\"primary\" (click)=\"onClick(prod.id)\">edit</button></td>\n                <td ><button mat-raised-button color=\"warn\" (click)=\"delete(prod.id)\"> delete </button> </td>\n    \n                        </tr>\n                    </tbody>\n            \n                  </table>\n                \n                </div>\n            <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n          </mat-card-content>\n        </mat-card>\n        <!-- <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSource\">\n        \n            <!-- Position Column -->\n            <!-- <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef> No. </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n            </ng-container> -->\n        \n            <!-- Name Column\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef> Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n         -->\n            <!-- Weight Column\n            <ng-container matColumnDef=\"weight\">\n              <th mat-header-cell *matHeaderCellDef> Weight </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n            </ng-container> -->\n        \n            <!-- Symbol Column \n            <ng-container matColumnDef=\"symbol\">\n              <th mat-header-cell *matHeaderCellDef> Symbol </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n            </ng-container>\n        \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        \n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div> -->"

/***/ }),

/***/ "./src/app/manage-products/manage-products.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/manage-products/manage-products.component.ts ***!
  \**************************************************************/
/*! exports provided: ManageProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsComponent", function() { return ManageProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage.service */ "./src/app/manage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ManageProductsComponent = /** @class */ (function () {
    //dataOfProduct =this.manageService.Product;
    function ManageProductsComponent(manageService, route) {
        this.manageService = manageService;
        this.route = route;
        this.selectedObj = {};
        this.data = [];
        // displayedColumns: string[] = ['id', 'name', 'type', 'price'];
        // dataSource = new MatTableDataSource<PeriodicElement>(this.data);
        // @ViewChild(MatPaginator) paginator: MatPaginator;
        /// table
        // displayedColumns = ['id', 'name', 'description', 'type'];
        // dataSource = this.data;
        // radio button
        this.collection = ['man', 'woman', 'baby'];
        // reactive form way 
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
    }
    ManageProductsComponent.prototype.addProduct = function () {
        var _this = this;
        var obj = { id: this.addForm.value.id, name: this.addForm.value.name, type: this.addForm.value.type, description: this.addForm.value.description,
            image: this.addForm.value.image, price: this.addForm.value.price };
        this.manageService.addNewProduct(obj).subscribe(function (res) { return _this.selectedObj = res; });
        console.log(this.addForm);
    };
    ManageProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manageService.getProduct().subscribe(function (pro) { return _this.data = pro; });
        // this.dataSource.paginator = this.paginator;
    };
    //with out reactive form
    //  addProduct(){
    //     let obj={id:this.id,name:this.name,type:this.type,description:this.description}
    //   this.manageService.addNewProduct(obj).subscribe(res =>this.selectedObj = res )
    //  }
    ManageProductsComponent.prototype.delete = function (id) {
        //this. id =this.manageService.getProductById;
        this.manageService.delet(id).subscribe(function (re) { return console.log(re); });
    };
    ManageProductsComponent.prototype.onClick = function (id) {
        this.route.navigate(['/editProduct', id]);
    };
    ManageProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-products',
            template: __webpack_require__(/*! ./manage-products.component.html */ "./src/app/manage-products/manage-products.component.html"),
            styles: [__webpack_require__(/*! ./manage-products.component.css */ "./src/app/manage-products/manage-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_manage_service__WEBPACK_IMPORTED_MODULE_2__["ManageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManageProductsComponent);
    return ManageProductsComponent;
}());

// export interface PeriodicElement {
//   id: number;
//   name: string;
//   type:string;
// description:string;
// image:string;
// price:number;
// }


/***/ }),

/***/ "./src/app/manage.service.ts":
/*!***********************************!*\
  !*** ./src/app/manage.service.ts ***!
  \***********************************/
/*! exports provided: ManageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageService", function() { return ManageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




// import { SessionService } from './session.service';
var ManageService = /** @class */ (function () {
    /* public Product =[
       {id :0 , name : "pman1" , type: "man" , description : " i am pman1"},
       {id :0 , name : "pman2" , type: "man" , description : " i am pman2"},
       {id :0 , name : "pman3" , type: "woman" , description : " i am pwoman1"},
       {id :0 , name : "pman4" , type: "man" , description : " i am pman3"},
       {id :0 , name : "pman4" , type: "baby" , description : " i am pbaby1"},
   
     ]
   
   */
    function ManageService(http) {
        this.http = http;
        this.url = "http://localhost:3000/products";
        this.urlUsers = "http://localhost:3000/users";
        this.isloginin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ManageService.prototype.setLogin = function (success) {
        this.isloginin.next(success);
    };
    ManageService.prototype.getLogin = function () {
        return this.isloginin.asObservable();
    };
    ManageService.prototype.getUsers = function () {
        return this.http.get(this.urlUsers);
    };
    ManageService.prototype.getProduct = function () {
        return this.http.get(this.url);
    };
    ManageService.prototype.addNewProduct = function (obj) {
        return this.http.post(this.url, obj);
    };
    ManageService.prototype.delet = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    ManageService.prototype.getProductById = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    ManageService.prototype.edit = function (id, obj) {
        return this.http.put(this.url + "/" + id, obj);
    };
    ManageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ManageService);
    return ManageService;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333333;\n  }\n  \n  li {\n    float: left;\n  }\n  \n  li a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 16px;\n    text-decoration: none;\n    \n  }\n  \n  li a:hover {\n    background-color: #111111;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLFlBQVk7R0FDYjs7RUFFRDtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxzQkFBc0I7O0dBRXZCOztFQUVEO0lBQ0UsMEJBQTBCO0dBQzNCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIH1cbiAgXG4gIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBcbiAgfVxuICBcbiAgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n        <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/aboutus\">About Us</a></li>\n            <li><a routerLink=\"/category\"> My Service</a></li>\n            <li><a *ngIf = \"islogin\" routerLink=\"/manageProduct\">Manange Products </a></li>\n           <li><a *ngIf = \"!islogin\"  routerLink=\"/login\">Login </a></li>\n           <li><a  *ngIf = \"islogin\" class=\"nav-item nav-link\" routerLink=\"/login\" (click) = \"Logout()\">Logout</a></li>\n          \n        </ul>\n      \n  \n\n       \n  \n  "

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manage.service */ "./src/app/manage.service.ts");




var NavComponent = /** @class */ (function () {
    function NavComponent(router, manageService) {
        this.router = router;
        this.manageService = manageService;
        this.appTitle = 'myapp';
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manageService.getLogin().subscribe(function (response) { return _this.islogin = response; });
    };
    NavComponent.prototype.Logout = function () {
        this.manageService.setLogin(false);
        // let token =localStorage.getItem("token");
        // if (token){
        //   this.islogin=true;
        // }
        // console.log(token);
        //  this.router.navigate(["login"]);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _manage_service__WEBPACK_IMPORTED_MODULE_3__["ManageService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/woman-list/woman-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/woman-list/woman-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.gallery {\r\n    margin:5px;\r\n   \r\n    border: 1px solid #ccc;\r\n    float: left;\r\n    width: 180px;\r\n  }\r\n  \r\n  div.gallery:hover {\r\n    border: 1px solid #777;\r\n  }\r\n  \r\n  div.gallery img {\r\n    width: 100%;\r\n   \r\n  }\r\n  \r\n  div.desc {\r\n    padding: 15px;\r\n    text-align: center;\r\n    /* border: 1px solid #ccc; */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29tYW4tbGlzdC93b21hbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXOztJQUVYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtHQUNkOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsWUFBWTs7R0FFYjs7RUFFRDtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsNkJBQTZCO0dBQzlCIiwiZmlsZSI6InNyYy9hcHAvd29tYW4tbGlzdC93b21hbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZ2FsbGVyeSB7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICB9XHJcbiAgXHJcbiAgZGl2LmdhbGxlcnk6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3NztcclxuICB9XHJcbiAgXHJcbiAgZGl2LmdhbGxlcnkgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgZGl2LmRlc2Mge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7ICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/woman-list/woman-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/woman-list/woman-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let obj of productWoman\" >\n\n\n  \n  <div *ngIf='obj.type === \"woman\" ' class=\"gallery\" >\n    <a >\n      <img src=\"{{obj.image}}\" alt=\"Woman\" width=\"300\" height=\"200\">\n    </a>\n    <div class=\"desc\" >{{obj.description}}</div>\n    <div class=\"desc\"> {{obj.price | currency}}</div>\n  </div>\n \n  </div>\n   "

/***/ }),

/***/ "./src/app/woman-list/woman-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/woman-list/woman-list.component.ts ***!
  \****************************************************/
/*! exports provided: WomanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomanListComponent", function() { return WomanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage.service */ "./src/app/manage.service.ts");



var WomanListComponent = /** @class */ (function () {
    function WomanListComponent(manageService) {
        this.manageService = manageService;
        this.productWoman = [];
    }
    WomanListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manageService.getProduct().subscribe(function (pro) { return _this.productWoman = pro; });
    };
    WomanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-woman-list',
            template: __webpack_require__(/*! ./woman-list.component.html */ "./src/app/woman-list/woman-list.component.html"),
            styles: [__webpack_require__(/*! ./woman-list.component.css */ "./src/app/woman-list/woman-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_manage_service__WEBPACK_IMPORTED_MODULE_2__["ManageService"]])
    ], WomanListComponent);
    return WomanListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\DefactoOnline-master\DefactoOnline-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map