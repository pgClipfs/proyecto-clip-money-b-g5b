(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Facun\Desktop\CLIPMONEY WORKING TREE\CLIPMONEY\proyecto-clip-money-b-g5b\clipFront\src\main.ts */"zUnb");


/***/ }),

/***/ "6CE+":
/*!******************************************************!*\
  !*** ./src/app/component/navsup/navsup.component.ts ***!
  \******************************************************/
/*! exports provided: NavsupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavsupComponent", function() { return NavsupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavsupComponent {
    constructor() { }
    ngOnInit() {
    }
    a() {
        let menu = document.querySelector('.menuIcon');
        menu.classList.toggle('active');
    }
}
NavsupComponent.ɵfac = function NavsupComponent_Factory(t) { return new (t || NavsupComponent)(); };
NavsupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavsupComponent, selectors: [["app-navsup"]], decls: 11, vars: 0, consts: [[1, "navtop"], [1, "a"], ["src", "../../assets/logo.png", "alt", "logo", 1, "logo"], [1, "menuContainer"], ["href", "#", 1, "mLink", 3, "click"], [1, "menuIcon"]], template: function NavsupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clipmoney");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavsupComponent_Template_a_click_6_listener() { return ctx.a(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.navtop[_ngcontent-%COMP%]{\r\n\r\nborder-top: solid;\r\nborder-top-width: 9px;\r\nborder-bottom: solid;\r\nborder-color:rgba(7, 13, 89, 1);\r\nbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n\r\n\r\n}\r\n\r\n\r\n.a[_ngcontent-%COMP%]{\r\n    padding-left: 70px;\r\n    display:inline-block;\r\n    \r\n    \r\n\r\n}\r\n\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    height: 25px;\r\n    width:  25px;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    padding: 50px 0px;\r\n    display: inline;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n\r\n}\r\n\r\n\r\n.menuContainer[_ngcontent-%COMP%]{\r\n    \r\n    padding-top: 8px;\r\n    \r\n    \r\n    display: inline;\r\n    float: right;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n  \r\n}\r\n\r\n\r\n.menuIcon[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.menuIcon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: .2rem;\r\n    background-color: black;\r\n    border-radius: 16px;\r\n    position: absolute;\r\n    transform: rotate(0deg);\r\n    transition: all .25s;\r\n    transform-origin: left center;\r\n    will-change: transform,opacity;\r\n}\r\n\r\n\r\n.menuIcon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){\r\n    top: 0;\r\n}\r\n\r\n\r\n.menuIcon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n    top: 9px;\r\n}\r\n\r\n\r\n.menuIcon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n    top: 18px;\r\n}\r\n\r\n\r\n.mLink[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .mLink[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .mLink[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n}\r\n\r\n\r\n.menuIcon.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){\r\n    transform: rotate(45deg);\r\n    top: 1px;\r\n    left: 2px;\r\n}\r\n\r\n\r\n.menuIcon.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.menuIcon.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n    transform: rotate(-45deg);\r\n    top: 22px;\r\n    left: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25hdnN1cC9uYXZzdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7OztBQUdBOztBQUVBLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLCtCQUErQjtBQUMvQiwyQ0FBMkM7OztBQUczQzs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QiwrQkFBK0I7O0FBRW5DOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysd0VBQXdFOztBQUU1RTs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCOztJQUVoQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25COzs7O3lCQUlxQjs7QUFFekI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7O0FBRUE7SUFDSSxNQUFNO0FBQ1Y7OztBQUNBO0lBQ0ksUUFBUTtBQUNaOzs7QUFDQTtJQUNJLFNBQVM7QUFDYjs7O0FBR0E7OztJQUdJLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7OztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbmF2c3VwL25hdnN1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4ubmF2dG9we1xyXG5cclxuYm9yZGVyLXRvcDogc29saWQ7XHJcbmJvcmRlci10b3Atd2lkdGg6IDlweDtcclxuYm9yZGVyLWJvdHRvbTogc29saWQ7XHJcbmJvcmRlci1jb2xvcjpyZ2JhKDcsIDEzLCA4OSwgMSk7XHJcbmJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblxyXG5cclxufVxyXG5cclxuLmF7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIC8qbWFyZ2luLXJpZ2h0OiAxMDBweDsqL1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7Ki9cclxuXHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6ICAyNXB4O1xyXG59XHJcblxyXG5oMXtcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLm1lbnVDb250YWluZXJ7XHJcbiAgICAvKm1pbi1oZWlnaHQ6IDEwMHZoOyovXHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTsqL1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLypcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xyXG4gIFxyXG59XHJcblxyXG4ubWVudUljb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLm1lbnVJY29uIHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sb3BhY2l0eTtcclxufVxyXG5cclxuLm1lbnVJY29uIHNwYW46bnRoLWNoaWxkKDEpe1xyXG4gICAgdG9wOiAwO1xyXG59XHJcbi5tZW51SWNvbiBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgIHRvcDogOXB4O1xyXG59XHJcbi5tZW51SWNvbiBzcGFuOm50aC1jaGlsZCgzKXtcclxuICAgIHRvcDogMThweDtcclxufVxyXG5cclxuXHJcbi5tTGluazpob3ZlciBzcGFuLFxyXG4ubUxpbms6aG92ZXIgc3BhbixcclxuLm1MaW5rOmhvdmVyIHNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1lbnVJY29uLmFjdGl2ZSBzcGFuOm50aC1jaGlsZCgxKXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgbGVmdDogMnB4O1xyXG59XHJcbi5tZW51SWNvbi5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMil7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbi5tZW51SWNvbi5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdG9wOiAyMnB4O1xyXG4gICAgbGVmdDogMnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavsupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navsup',
                templateUrl: './navsup.component.html',
                styleUrls: ['./navsup.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "E8dp":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navsup_navsup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navsup/navsup.component */ "6CE+");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inicio/inicio.component */ "xOp4");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navsup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-inicio");
    } }, directives: [_navsup_navsup_component__WEBPACK_IMPORTED_MODULE_1__["NavsupComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'clipFront';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_navsup_navsup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/navsup/navsup.component */ "6CE+");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/footer/footer.component */ "xb3B");
/* harmony import */ var _component_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/inicio/inicio.component */ "xOp4");
/* harmony import */ var _component_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/inicio-sesion/inicio-sesion.component */ "qISU");
/* harmony import */ var _component_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/registro/registro.component */ "k7kH");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _component_navsup_navsup_component__WEBPACK_IMPORTED_MODULE_4__["NavsupComponent"],
        _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _component_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__["InicioComponent"],
        _component_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_7__["InicioSesionComponent"],
        _component_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__["RegistroComponent"],
        _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _component_navsup_navsup_component__WEBPACK_IMPORTED_MODULE_4__["NavsupComponent"],
                    _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _component_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__["InicioComponent"],
                    _component_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_7__["InicioSesionComponent"],
                    _component_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__["RegistroComponent"],
                    _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "k7kH":
/*!**********************************************************!*\
  !*** ./src/app/component/registro/registro.component.ts ***!
  \**********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navsup_navsup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navsup/navsup.component */ "6CE+");



class RegistroComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 36, vars: 0, consts: [["action", ""], ["type", "text"], ["type", "email"], [1, "fotos"], [1, "lan"], [1, "las"], ["type", "checkbox", "name", "", "id", "terminos"], ["type", "button", 1, "buton"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navsup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Usuario :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contase\u00F1a :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Repetir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " contrase\u00F1a :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Frente y Dorso DNI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Al registrarte, aceptas nuestras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Condiciones de uso y Pol\u00EDtica de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "privacidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "iniciar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navsup_navsup_component__WEBPACK_IMPORTED_MODULE_1__["NavsupComponent"]], styles: [".lan[_ngcontent-%COMP%]{\r\n    padding-left: 25px;\r\n}\r\n\r\n.las[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    \r\n    width: 70%;\r\n}\r\n\r\n#terminos[_ngcontent-%COMP%]{\r\n    \r\n    display: inline;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7O0lBRXJCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4ubGFze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgXHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4jdGVybWlub3N7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registro',
                templateUrl: './registro.component.html',
                styleUrls: ['./registro.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qISU":
/*!********************************************************************!*\
  !*** ./src/app/component/inicio-sesion/inicio-sesion.component.ts ***!
  \********************************************************************/
/*! exports provided: InicioSesionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionComponent", function() { return InicioSesionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navsup_navsup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navsup/navsup.component */ "6CE+");



class InicioSesionComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioSesionComponent.ɵfac = function InicioSesionComponent_Factory(t) { return new (t || InicioSesionComponent)(); };
InicioSesionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioSesionComponent, selectors: [["app-inicio-sesion"]], decls: 22, vars: 0, consts: [["action", ""], ["id", "usuario", 1, "txt"], ["type", "text"], [1, "txt"], ["type", "text", 1, "contrase\u00F1a"], ["href", "/register"], ["type", "button", 1, "buton"]], template: function InicioSesionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navsup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "iniciar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "usuario :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "contase\u00F1a :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00BFolvido su contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00BFno tiene cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "registrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "iniciar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navsup_navsup_component__WEBPACK_IMPORTED_MODULE_1__["NavsupComponent"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    margin-top: 19px;\r\n    text-align: center;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.txt[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    display: inline;\r\n    font-family: 'Montserrat', sans-serif;\r\n    width: 73px;\r\n    height: 21px;\r\n\r\n}\r\n#usuario[_ngcontent-%COMP%]{\r\n    margin-left: 28px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    width: 190px;\r\n    height: 27px;\r\n    border: 3px solid #070D59;\r\n    border-radius: 15px;\r\n}\r\n.buton[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    background: #070D59;\r\n    border-radius: 15px;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-left: 35%;\r\n}\r\n.contrase\u00F1a[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2luaWNpby1zZXNpb24vaW5pY2lvLXNlc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxZQUFZOztBQUVoQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbmljaW8tc2VzaW9uL2luaWNpby1zZXNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMntcclxuICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50eHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcblxyXG59XHJcblxyXG4jdXN1YXJpb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG59XHJcbmlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwNzBENTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYnV0b257XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzA3MEQ1OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxufVxyXG4uY29udHJhc2XDsWF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioSesionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inicio-sesion',
                templateUrl: './inicio-sesion.component.html',
                styleUrls: ['./inicio-sesion.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _component_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/inicio-sesion/inicio-sesion.component */ "qISU");
/* harmony import */ var _component_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/registro/registro.component */ "k7kH");







const routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _component_inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_3__["InicioSesionComponent"] },
    { path: 'register', component: _component_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__["RegistroComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xOp4":
/*!******************************************************!*\
  !*** ./src/app/component/inicio/inicio.component.ts ***!
  \******************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 6, vars: 0, consts: [[2, "background-color", "rgb(246,245,245)"], ["src", "../../assets/modoUso.png", "alt", "modo de uso", 1, "fondo"], ["routerLink", "/login", 1, "boton"], ["routerLink", "/register", 1, "boton"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".fondo[_ngcontent-%COMP%]{\r\n    height: 500px;\r\n    width: 100%;\r\n    \r\n    \r\n    }\r\n    .boton[_ngcontent-%COMP%]{\r\n        background-color: rgba(7, 13, 89, 1);\r\n    ;\r\n        padding: 10px 25px;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n        margin-left: 40px;\r\n        border-radius: 15px;\r\n        color: white;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXOzs7SUFHWDtJQUNBO1FBQ0ksb0NBQW9DOztRQUVwQyxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRve1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIC5ib3RvbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDEzLCA4OSwgMSk7XHJcbiAgICA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inicio',
                templateUrl: './inicio.component.html',
                styleUrls: ['./inicio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xb3B":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map