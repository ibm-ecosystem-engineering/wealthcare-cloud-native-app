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
/* harmony import */ var _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");
/* harmony import */ var _customer_customer_homepage_customer_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer/customer-homepage/customer-homepage.component */ "./src/app/customer/customer-homepage/customer-homepage.component.ts");
/* harmony import */ var _customer_customer_financialplan_customer_financialplan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer/customer-financialplan/customer-financialplan.component */ "./src/app/customer/customer-financialplan/customer-financialplan.component.ts");
/* harmony import */ var _customer_customer_portfolio_customer_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/customer-portfolio/customer-portfolio.component */ "./src/app/customer/customer-portfolio/customer-portfolio.component.ts");
/* harmony import */ var _customer_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/customer-profile/customer-profile.component */ "./src/app/customer/customer-profile/customer-profile.component.ts");
/* harmony import */ var _wealthmanager_wm_customer_wm_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wealthmanager/wm-customer/wm-customer.component */ "./src/app/wealthmanager/wm-customer/wm-customer.component.ts");
/* harmony import */ var _wealthmanager_wm_homepage_wm_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wealthmanager/wm-homepage/wm-homepage.component */ "./src/app/wealthmanager/wm-homepage/wm-homepage.component.ts");
/* harmony import */ var _wealthmanager_wm_financialplan_wm_financialplan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wealthmanager/wm-financialplan/wm-financialplan.component */ "./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.ts");
/* harmony import */ var _wealthmanager_wm_financialplan_detail_wm_financialplan_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component */ "./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.ts");
/* harmony import */ var _wealthmanager_wm_portfolio_wm_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wealthmanager/wm-portfolio/wm-portfolio.component */ "./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.ts");
/* harmony import */ var _wealthmanager_wm_profile_wm_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wealthmanager/wm-profile/wm-profile.component */ "./src/app/wealthmanager/wm-profile/wm-profile.component.ts");
/* harmony import */ var _wealthmanager_wm_financialplan_goal_add_wm_financialplan_goal_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component */ "./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.ts");
/* harmony import */ var _wealthmanager_wm_financialplan_investment_add_wm_financialplan_investment_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component */ "./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.ts");
/* harmony import */ var _businessmanager_bm_homepage_bm_homepage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./businessmanager/bm-homepage/bm-homepage.component */ "./src/app/businessmanager/bm-homepage/bm-homepage.component.ts");
/* harmony import */ var _businessmanager_bm_customer_bm_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./businessmanager/bm-customer/bm-customer.component */ "./src/app/businessmanager/bm-customer/bm-customer.component.ts");
/* harmony import */ var _businessmanager_bm_customer_add_bm_customer_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./businessmanager/bm-customer-add/bm-customer-add.component */ "./src/app/businessmanager/bm-customer-add/bm-customer-add.component.ts");
/* harmony import */ var _businessmanager_bm_customer_edit_bm_customer_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./businessmanager/bm-customer-edit/bm-customer-edit.component */ "./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.ts");
/* harmony import */ var _businessmanager_bm_wealthmanager_add_bm_wealthmanager_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component */ "./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.ts");
/* harmony import */ var _businessmanager_bm_wealthmanager_edit_bm_wealthmanager_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component */ "./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.ts");
/* harmony import */ var _businessmanager_bm_wealthmanager_bm_wealthmanager_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./businessmanager/bm-wealthmanager/bm-wealthmanager.component */ "./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.ts");























var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '**',  redirectTo: '/home'},
    { path: 'home', component: _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'businessmanager', component: _businessmanager_bm_homepage_bm_homepage_component__WEBPACK_IMPORTED_MODULE_16__["BmHomepageComponent"] },
    { path: 'businessmanager',
        component: _businessmanager_bm_homepage_bm_homepage_component__WEBPACK_IMPORTED_MODULE_16__["BmHomepageComponent"],
        children: [
            { path: '', component: _businessmanager_bm_homepage_bm_homepage_component__WEBPACK_IMPORTED_MODULE_16__["BmHomepageComponent"] },
            { path: 'customer', component: _businessmanager_bm_customer_bm_customer_component__WEBPACK_IMPORTED_MODULE_17__["BmCustomerComponent"] },
            { path: 'customerAdd', component: _businessmanager_bm_customer_add_bm_customer_add_component__WEBPACK_IMPORTED_MODULE_18__["BmCustomerAddComponent"] },
            { path: 'customerEdit/:id', component: _businessmanager_bm_customer_edit_bm_customer_edit_component__WEBPACK_IMPORTED_MODULE_19__["BmCustomerEditComponent"] },
            { path: 'wealthmanager', component: _businessmanager_bm_wealthmanager_bm_wealthmanager_component__WEBPACK_IMPORTED_MODULE_22__["BmWealthmanagerComponent"] },
            { path: 'wealthmanagerAdd', component: _businessmanager_bm_wealthmanager_add_bm_wealthmanager_add_component__WEBPACK_IMPORTED_MODULE_20__["BmWealthmanagerAddComponent"] },
            { path: 'wealthmanagerEdit/:id', component: _businessmanager_bm_wealthmanager_edit_bm_wealthmanager_edit_component__WEBPACK_IMPORTED_MODULE_21__["BmWealthmanagerEditComponent"] }
        ]
    },
    { path: 'wealthmanager',
        component: _wealthmanager_wm_homepage_wm_homepage_component__WEBPACK_IMPORTED_MODULE_9__["WmHomepageComponent"],
        children: [
            { path: '', redirectTo: '/wealthmanager/customer', pathMatch: 'full' },
            { path: 'customer', component: _wealthmanager_wm_customer_wm_customer_component__WEBPACK_IMPORTED_MODULE_8__["WmCustomerComponent"] },
            { path: 'financialplan', component: _wealthmanager_wm_financialplan_wm_financialplan_component__WEBPACK_IMPORTED_MODULE_10__["WmFinancialplanComponent"] },
            { path: 'financialplanDetail/:id', component: _wealthmanager_wm_financialplan_detail_wm_financialplan_detail_component__WEBPACK_IMPORTED_MODULE_11__["WmFinancialplanDetailComponent"] },
            { path: 'goalAdd', component: _wealthmanager_wm_financialplan_goal_add_wm_financialplan_goal_add_component__WEBPACK_IMPORTED_MODULE_14__["WmFinancialplanGoalAddComponent"] },
            { path: 'investmentAdd/:id', component: _wealthmanager_wm_financialplan_investment_add_wm_financialplan_investment_add_component__WEBPACK_IMPORTED_MODULE_15__["WmFinancialplanInvestmentAddComponent"] },
            { path: 'portfolio', component: _wealthmanager_wm_portfolio_wm_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["WmPortfolioComponent"] },
            { path: 'profile', component: _wealthmanager_wm_profile_wm_profile_component__WEBPACK_IMPORTED_MODULE_13__["WmProfileComponent"] }
        ]
    },
    {
        path: 'customer',
        component: _customer_customer_homepage_customer_homepage_component__WEBPACK_IMPORTED_MODULE_4__["CustomerHomepageComponent"],
        children: [
            { path: '', redirectTo: '/customer/financialplan', pathMatch: 'full' },
            { path: 'financialplan', component: _customer_customer_financialplan_customer_financialplan_component__WEBPACK_IMPORTED_MODULE_5__["CustomerFinancialplanComponent"] },
            { path: 'financialplanDetail/:id', component: _customer_customer_portfolio_customer_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["CustomerPortfolioComponent"] },
            { path: 'profile', component: _customer_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_7__["CustomerProfileComponent"] }
        ]
    },
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

module.exports = ".jumbotron {\n  background-color: #f4511e;\n  color: #fff;\n  padding: 100px 25px;\n}\n.container-fluid {\n  padding: 70px 0px;\n}\n.bg-grey {\n  background-color: #f6f6f6;\n}\n.logo-small {\n  color: #f4511e;\n  font-size: 50px;\n}\n.logo {\n  color: #f4511e;\n  font-size: 200px;\n}\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: none;\n  border-radius: 0;\n}\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #f4511e;\n}\n.carousel-indicators li {\n  border-color: #f4511e;\n}\n.carousel-indicators li.active {\n  background-color: #f4511e;\n}\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0;\n}\n.item span {\n  font-style: normal;\n}\n.panel {\n  border: 1px solid #f4511e; \n  border-radius:0 !important;\n  transition: box-shadow 0.5s;\n}\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0,0,0, .2);\n}\n.panel-footer .btn:hover {\n  border: 1px solid #f4511e;\n  background-color: #fff !important;\n  color: #f4511e;\n}\n.panel-heading {\n  color: #fff !important;\n  background-color: #f4511e !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n.panel-footer {\n  background-color: white !important;\n}\n.panel-footer h3 {\n  font-size: 32px;\n}\n.panel-footer h4 {\n  color: #aaa;\n  font-size: 14px;\n}\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: rgb(16, 90, 140);\n  color: #fff;\n}\n.navbar {\n  margin-bottom: 0;\n  background-color: rgb(16, 90, 140) !important;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n}\n.navbar li a, .navbar .navbar-brand {\n  color: #fff !important;\n}\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #f4511e !important;\n  background-color: #fff !important;\n}\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  background:rgb(16, 90, 140) !important;\n}\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #f4511e;\n}\n@media screen and (max-width: 1200px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0;\n  }\n}\n.divCell1 {\n  float: left;\n  width: 33.33%;\n}\n.divCell2 {\n  float: left;\n  width: 100px;\n}\n.divCell3 {\n  float: left;\n  width: 200px;\n}\n.divCell4 {\n  float: left;\n  width: 33.33%;\n}\n.divRow {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 5px 20px ;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin: 1px 1px;\n  cursor: pointer;\n}\n.buttonBlue {background-color: #008CBA;}\n/* Blue */\n.buttonGray {background-color: #808080;}\n/* Blue */\n.bgGray1 {background-color: #607D8B;}\n/* Blue */\n.bgGray2 {background-color: #F0FFFF;}\n/* Blue */\n#tableType1, #tableType2 {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  box-align:center;\n  width:100%;\n  text-align:center;\n}\n#tableType1 td, #tableType1 th, #tableType2 td, #tableType2 th{\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n#tableType1 tr:nth-child(even){background-color: #f2f2f2;}\n#tableType1 tr:hover {background-color: #ddd;}\n#tableType1 th {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-align: left;\n  background-color: #778899;\n  color: white;\n}\n.baseCss {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 65em;\n  }\n.baseCss li {\n    position: relative;\n    cursor: pointer;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.baseCss li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.baseCss a {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 550px;\n  }\n.baseCss a:hover {\n    color:#607D8B;\n  }\n.baseCss .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    min-width: 16px;\n    text-align: right;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\nbutton {\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n    font-family: Arial;\n  }\nbutton:hover {\n    background-color: #cfd8dc;\n  }\nbutton.delete {\n    position: relative;\n    left: 800px;\n    top: -32px;\n    background-color: gray !important;\n    color: white;\n  }\n.width1200 {\n    width: 1000px;\n    background-color: #008CBA;\n  }\n.width900 {\n    width: 900px;\n  }\n.width1000 {\n    width: 1000px;\n  }\n.width300 {\n    width: 300px;\n  }\n/* You can add global styles to this file, and also import other style files */\n.screenHeading {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    padding-left: 20px;\n    padding-top: 20px;\n    color:  rgb(255, 184, 44);\n  }\n.divCenter500 {\n    margin: auto;  /* To align center */\n    width: 500px;\n  }\n.divCenter1000 {\n    margin: auto;  /* To align center */\n    width: 1000px;\n  }\n.textStyleType1 {\n    color:  rgb(255, 184, 44);\n  }\n.textStyleType2 {\n    font-size: 14px;\n    font-weight: bold;\n    color:  rgb(23, 31, 132);\n  }\n.textStyleType3 {\n    color:  #4CAF50; /* Green */\n  }\n.textStyleType3 {\n    color:  #4CAF50; /* Green */\n  }\n.floatleft {\n    float: left;\n  }\n.floatClear {\n    clear:both;\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZDQUE2QztFQUM3QyxhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7QUFDRjtBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxVQUFVO0VBQ3JDLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBLGFBQWEseUJBQXlCLENBQUM7QUFBRSxTQUFTO0FBQ2xELGFBQWEseUJBQXlCLENBQUM7QUFBRSxTQUFTO0FBRWxELFVBQVUseUJBQXlCLENBQUM7QUFBRSxTQUFTO0FBQy9DLFVBQVUseUJBQXlCLENBQUM7QUFBRSxTQUFTO0FBRS9DO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUVBLCtCQUErQix5QkFBeUIsQ0FBQztBQUV6RCxzQkFBc0Isc0JBQXNCLENBQUM7QUFFN0M7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7QUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7QUFFQTtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1QjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxZQUFZO0VBQ2Q7QUFDQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UsYUFBYTtFQUNmO0FBR0E7SUFDRSxZQUFZO0VBQ2Q7QUFFQSw4RUFBOEU7QUFFOUU7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsWUFBWSxHQUFHLG9CQUFvQjtJQUNuQyxZQUFZO0VBQ2Q7QUFDQTtJQUNFLFlBQVksR0FBRyxvQkFBb0I7SUFDbkMsYUFBYTtFQUNmO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxlQUFlLEVBQUUsVUFBVTtFQUM3QjtBQUNBO0lBQ0UsZUFBZSxFQUFFLFVBQVU7RUFDN0I7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNBO0lBQ0UsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwMHB4IDI1cHg7XG59XG4uY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZzogNzBweCAwcHg7XG59XG4uYmctZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG59XG4ubG9nby1zbWFsbCB7XG4gIGNvbG9yOiAjZjQ1MTFlO1xuICBmb250LXNpemU6IDUwcHg7XG59XG4ubG9nbyB7XG4gIGNvbG9yOiAjZjQ1MTFlO1xuICBmb250LXNpemU6IDIwMHB4O1xufVxuLnRodW1ibmFpbCB7XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi50aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0LCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgY29sb3I6ICNmNDUxMWU7XG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJvcmRlci1jb2xvcjogI2Y0NTExZTtcbn1cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG59XG4uaXRlbSBoNCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiA3MHB4IDA7XG59XG4uaXRlbSBzcGFuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnBhbmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0NTExZTsgXG4gIGJvcmRlci1yYWRpdXM6MCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XG59XG4ucGFuZWw6aG92ZXIge1xuICBib3gtc2hhZG93OiA1cHggMHB4IDQwcHggcmdiYSgwLDAsMCwgLjIpO1xufVxuLnBhbmVsLWZvb3RlciAuYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0NTExZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y0NTExZTtcbn1cbi5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuLnBhbmVsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucGFuZWwtZm9vdGVyIGgzIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuLnBhbmVsLWZvb3RlciBoNCB7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucGFuZWwtZm9vdGVyIC5idG4ge1xuICBtYXJnaW46IDE1cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCA5MCwgMTQwKTtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCA5MCwgMTQwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MyAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLm5hdmJhciBsaSBhLCAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLm5hdmJhci1uYXYgbGkgYTpob3ZlciwgLm5hdmJhci1uYXYgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI2Y0NTExZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOnJnYigxNiwgOTAsIDE0MCkgIWltcG9ydGFudDtcbn1cbmZvb3RlciAuZ2x5cGhpY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI2Y0NTExZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29sLXNtLTQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI1cHggMDtcbiAgfVxufVxuXG4uZGl2Q2VsbDEge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzLjMzJTtcbn1cbi5kaXZDZWxsMiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwcHg7XG59XG4uZGl2Q2VsbDMge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLmRpdkNlbGw0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMy4zMyU7XG59XG4uZGl2Um93IHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAyMHB4IDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDFweCAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbkJsdWUge2JhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7fSAvKiBCbHVlICovXG4uYnV0dG9uR3JheSB7YmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDt9IC8qIEJsdWUgKi9cblxuLmJnR3JheTEge2JhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7fSAvKiBCbHVlICovXG4uYmdHcmF5MiB7YmFja2dyb3VuZC1jb2xvcjogI0YwRkZGRjt9IC8qIEJsdWUgKi9cblxuI3RhYmxlVHlwZTEsICN0YWJsZVR5cGUyIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJveC1hbGlnbjpjZW50ZXI7XG4gIHdpZHRoOjEwMCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4jdGFibGVUeXBlMSB0ZCwgI3RhYmxlVHlwZTEgdGgsICN0YWJsZVR5cGUyIHRkLCAjdGFibGVUeXBlMiB0aHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4jdGFibGVUeXBlMSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG5cbiN0YWJsZVR5cGUxIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cblxuI3RhYmxlVHlwZTEgdGgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc4ODk5O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmFzZUNzcyB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDY1ZW07XG4gIH1cbiAgLmJhc2VDc3MgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgcGFkZGluZzogLjNlbSAwO1xuICAgIGhlaWdodDogMS42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIFxuICAuYmFzZUNzcyBsaTpob3ZlciB7XG4gICAgY29sb3I6ICM2MDdEOEI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgICBsZWZ0OiAuMWVtO1xuICB9XG4gIFxuICAuYmFzZUNzcyBhIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1NTBweDtcbiAgfVxuICBcbiAgLmJhc2VDc3MgYTpob3ZlciB7XG4gICAgY29sb3I6IzYwN0Q4QjtcbiAgfVxuICBcbiAgLmJhc2VDc3MgLmJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgdG9wOiAtNHB4O1xuICAgIGhlaWdodDogMS44ZW07XG4gICAgbWluLXdpZHRoOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGN1cnNvcjogaGFuZDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgfVxuICBcbiAgYnV0dG9uLmRlbGV0ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDgwMHB4O1xuICAgIHRvcDogLTMycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAud2lkdGgxMjAwIHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XG4gIH1cbiAgLndpZHRoOTAwIHtcbiAgICB3aWR0aDogOTAwcHg7XG4gIH1cbiAgLndpZHRoMTAwMCB7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgfVxuXG5cbiAgLndpZHRoMzAwIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgXG4gIC8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuICAuc2NyZWVuSGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgY29sb3I6ICByZ2IoMjU1LCAxODQsIDQ0KTtcbiAgfVxuXG4gIC5kaXZDZW50ZXI1MDAge1xuICAgIG1hcmdpbjogYXV0bzsgIC8qIFRvIGFsaWduIGNlbnRlciAqL1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuICAuZGl2Q2VudGVyMTAwMCB7XG4gICAgbWFyZ2luOiBhdXRvOyAgLyogVG8gYWxpZ24gY2VudGVyICovXG4gICAgd2lkdGg6IDEwMDBweDtcbiAgfVxuICAudGV4dFN0eWxlVHlwZTEge1xuICAgIGNvbG9yOiAgcmdiKDI1NSwgMTg0LCA0NCk7XG4gIH1cblxuICAudGV4dFN0eWxlVHlwZTIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIHJnYigyMywgMzEsIDEzMik7XG4gIH1cbiAgLnRleHRTdHlsZVR5cGUzIHtcbiAgICBjb2xvcjogICM0Q0FGNTA7IC8qIEdyZWVuICovXG4gIH1cbiAgLnRleHRTdHlsZVR5cGUzIHtcbiAgICBjb2xvcjogICM0Q0FGNTA7IC8qIEdyZWVuICovXG4gIH1cblxuICAuZmxvYXRsZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuZmxvYXRDbGVhciB7XG4gICAgY2xlYXI6Ym90aDtcbiAgfVxuXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n <router-outlet></router-outlet>\n<div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'product-ui';
    }
    AppComponent.prototype.products = function () {
        console.log("Hi this is product click 1");
        this.router.navigate(['/product']);
        console.log("Hi this is products click 2");
    };
    AppComponent.prototype.orders = function () {
        this.router.navigate(['/orders']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _wealthmanager_wealthmanager_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wealthmanager/wealthmanager.module */ "./src/app/wealthmanager/wealthmanager.module.ts");
/* harmony import */ var _businessmanager_businessmanager_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./businessmanager/businessmanager.module */ "./src/app/businessmanager/businessmanager.module.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_9__["ProductModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"], _wealthmanager_wealthmanager_module__WEBPACK_IMPORTED_MODULE_13__["WealthmanagerModule"], _businessmanager_businessmanager_module__WEBPACK_IMPORTED_MODULE_14__["BusinessmanagerModule"], _customer_customer_module__WEBPACK_IMPORTED_MODULE_15__["CustomerModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/businessmanager/bm-customer-add/bm-customer-add.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/businessmanager/bm-customer-add/bm-customer-add.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzbWFuYWdlci9ibS1jdXN0b21lci1hZGQvYm0tY3VzdG9tZXItYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/businessmanager/bm-customer-add/bm-customer-add.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/businessmanager/bm-customer-add/bm-customer-add.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"screenHeading\">\n      <span>Add Customer</span>\n  </div> \n  <br> \n  <div class=\"divCenter500\">\n    <div class=\"row\">  \n      <div class=\"col-sm-3\"><p>First Name</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.firstName\" placeholder=\"First Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Last Name</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.lastName\" placeholder=\"Last Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Age</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.age\" placeholder=\"Age\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Gender</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n          <input type=\"radio\" value=\"Male\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Male\n          <input type=\"radio\" value=\"Female\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Female\n        </p>    \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Email</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.emailId\" placeholder=\"Email\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Country</p></div>\n      <div class=\"col-sm-5\">\n                <select [(ngModel)]=\"mainData.country\">\n            <option *ngFor=\"let countryItem of countries\" [ngValue]=\"countryItem.id\">\n              {{countryItem.name}}\n            </option>\n          </select>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>City</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n        <input [(ngModel)]=\"mainData.city\" placeholder=\"City\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Income</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.avgIncome\" placeholder=\"Income\"/>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n        <button (click)=\"save()\" class=\"button buttonBlue\">Save</button>\n        <button (click)=\"cancel()\" class=\"button buttonBlue\">Cancel</button>\n    </div>\n  </div>\n  \n  <br>\n</div>"

/***/ }),

/***/ "./src/app/businessmanager/bm-customer-add/bm-customer-add.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/businessmanager/bm-customer-add/bm-customer-add.component.ts ***!
  \******************************************************************************/
/*! exports provided: BmCustomerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmCustomerAddComponent", function() { return BmCustomerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer.service */ "./src/app/service/customer.service.ts");
/* harmony import */ var _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/common-data.service */ "./src/app/service/common-data.service.ts");





var BmCustomerAddComponent = /** @class */ (function () {
    function BmCustomerAddComponent(customerService, commonDataService, route, router) {
        this.customerService = customerService;
        this.commonDataService = commonDataService;
        this.route = route;
        this.router = router;
        this.mainData = { firstName: '', lastName: '', age: 18, gender: 'Male', emailId: '', city: '', country: '', avgIncome: 10000 };
    }
    BmCustomerAddComponent.prototype.ngOnInit = function () {
        this.countries = this.commonDataService.getCountries();
    };
    BmCustomerAddComponent.prototype.save = function () {
        var _this = this;
        this.customerService.add(this.mainData).subscribe(function (result) {
            _this.router.navigate(['/businessmanager/customer']);
        }, function (err) {
            console.log(err);
        });
    };
    BmCustomerAddComponent.prototype.cancel = function () {
        this.router.navigate(['/businessmanager/customer']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BmCustomerAddComponent.prototype, "mainData", void 0);
    BmCustomerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bm-customer-add',
            template: __webpack_require__(/*! ./bm-customer-add.component.html */ "./src/app/businessmanager/bm-customer-add/bm-customer-add.component.html"),
            styles: [__webpack_require__(/*! ./bm-customer-add.component.css */ "./src/app/businessmanager/bm-customer-add/bm-customer-add.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BmCustomerAddComponent);
    return BmCustomerAddComponent;
}());



/***/ }),

/***/ "./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzbWFuYWdlci9ibS1jdXN0b21lci1lZGl0L2JtLWN1c3RvbWVyLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"screenHeading\">\n      <span>Edit Customer</span>\n  </div> \n  <br> \n  <div class=\"divCenter500\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>First Name</p></div>\n      <div class=\"col-sm-5\"> \n        <input [(ngModel)]=\"mainData.firstName\" placeholder=\"First Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Last Name</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.lastName\" placeholder=\"Last Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Age</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.age\" placeholder=\"Age\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Gender</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n          <input type=\"radio\" value=\"Male\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Male\n          <input type=\"radio\" value=\"Female\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Female\n        </p>    \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Email</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.emailId\" placeholder=\"Email\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Country</p></div>\n      <div class=\"col-sm-5\">\n                <select [(ngModel)]=\"mainData.country\">\n            <option *ngFor=\"let countryItem of countries\" [ngValue]=\"countryItem.id\">\n              {{countryItem.name}}\n            </option>\n          </select>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>City</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n        <input [(ngModel)]=\"mainData.city\" placeholder=\"City\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Income</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.avgIncome\" placeholder=\"Income\"/>\n      </div>\n    </div>\n\n    <br>\n    <div class=\"row\">\n        <input type=hidden [(ngModel)]=\"mainData.id\"/>\n        <button (click)=\"save()\" class=\"button buttonBlue\">Save</button>\n        <button (click)=\"cancel()\" class=\"button buttonBlue\">Cancel</button>\n    </div>\n  </div>\n  \n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.ts ***!
  \********************************************************************************/
/*! exports provided: BmCustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmCustomerEditComponent", function() { return BmCustomerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/customer.service */ "./src/app/service/customer.service.ts");
/* harmony import */ var _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/common-data.service */ "./src/app/service/common-data.service.ts");





var BmCustomerEditComponent = /** @class */ (function () {
    function BmCustomerEditComponent(customerService, commonDataService, route, router) {
        this.customerService = customerService;
        this.commonDataService = commonDataService;
        this.route = route;
        this.router = router;
        this.mainData = { id: 0, firstName: '', lastName: '', age: 18, gender: 'Male', emailId: '', city: '', country: '', avgIncome: 10000 };
    }
    BmCustomerEditComponent.prototype.ngOnInit = function () {
        this.countries = this.commonDataService.getCountries();
        this.loadById();
    };
    BmCustomerEditComponent.prototype.loadById = function () {
        var _this = this;
        this.customerService.getById(this.route.snapshot.params['id']).subscribe(function (data) {
            console.log(data);
            _this.mainData = data;
        });
    };
    BmCustomerEditComponent.prototype.save = function () {
        var _this = this;
        this.customerService.update(this.mainData.id, this.mainData).subscribe(function (result) {
            _this.router.navigate(['/businessmanager/customer']);
        }, function (err) {
            console.log(err);
        });
    };
    BmCustomerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/businessmanager/customer']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BmCustomerEditComponent.prototype, "mainData", void 0);
    BmCustomerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bm-customer-edit',
            template: __webpack_require__(/*! ./bm-customer-edit.component.html */ "./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.html"),
            styles: [__webpack_require__(/*! ./bm-customer-edit.component.css */ "./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BmCustomerEditComponent);
    return BmCustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/businessmanager/bm-customer/bm-customer.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/businessmanager/bm-customer/bm-customer.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzbWFuYWdlci9ibS1jdXN0b21lci9ibS1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/businessmanager/bm-customer/bm-customer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/businessmanager/bm-customer/bm-customer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<button title=\"Add\" (click)=\"add()\" class=\"button buttonBlue\">Add Customer</button>\n<br>\n<br>\n\n<div style=\"padding:12px; background:#f2f2f2;\">\n  <div class=\"mycard width300\" *ngFor=\"let p of mainData\">  \n    <div style=\"padding:0px 0px 5px 10px;\">\n      <mat-card class=\"width300\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"my-card-header-image-male\" *ngIf=\"p.gender == 'Male'\"></div>\n          <div mat-card-avatar class=\"my-card-header-image-female\" *ngIf=\"p.gender == 'Female'\"></div>\n          <mat-card-title><strong>{{p.firstName}} {{p.lastName}}</strong></mat-card-title>\n          <a (click)=\"edit(p.id)\">\n              <img border=\"0\" alt=\"Edit\" src=\"../../assets/img/button-edit.png\" width=\"20\" height=\"20\">\n          </a>\n          <a (click)=\"delete(p.id)\">\n              <img border=\"0\" alt=\"Delete\" src=\"../../assets/img/button-delete.png\" width=\"20\" height=\"20\">\n          </a>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            {{p.gender}}, {{p.age}}, {{p.city}}\n            <BR>\n            member since {{p.startDateString}}\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n<div style=\"padding:12px; background:#f2f2f2;\">\n  <div class=\"mycard width300\" *ngFor=\"let p of [10,20,30,40,50,60,70,80], let i = index\">\n    <div style=\"padding:0px 0px 5px 10px;\">\n      <mat-card class=\"width300\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"my-card-header-image-male\"></div>\n          <mat-card-title><strong>Shiba Inu {{i}}</strong></mat-card-title>\n          <a (click)=\"edit(i)\">\n              <img border=\"0\" alt=\"Edit\" src=\"../../assets/img/button-edit.png\" width=\"20\" height=\"20\">\n          </a>\n          <a (click)=\"delete(i)\">\n              <img border=\"0\" alt=\"Delete\" src=\"../../assets/img/button-delete.png\" width=\"20\" height=\"20\">\n          </a>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            Male, {{i}}, {{p}} \n            <BR>\n            member since {{i}}\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/businessmanager/bm-customer/bm-customer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/businessmanager/bm-customer/bm-customer.component.ts ***!
  \**********************************************************************/
/*! exports provided: BmCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmCustomerComponent", function() { return BmCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/customer.service */ "./src/app/service/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BmCustomerComponent = /** @class */ (function () {
    function BmCustomerComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.mainData = [];
    }
    BmCustomerComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    BmCustomerComponent.prototype.getAll = function () {
        var _this = this;
        this.mainData = [];
        this.customerService.getAll().subscribe(function (data) {
            _this.mainData = data;
        });
    };
    BmCustomerComponent.prototype.add = function () {
        var myURL = '/businessmanager/customerAdd';
        this.router.navigate([myURL]);
    };
    BmCustomerComponent.prototype.edit = function (id) {
        var myURL = '/businessmanager/customerEdit/' + id;
        this.router.navigate([myURL]);
    };
    BmCustomerComponent.prototype.delete = function (id) {
        var _this = this;
        this.customerService.delete(id)
            .subscribe(function (res) {
            _this.getAll();
        }, function (err) {
            console.log(err);
        });
    };
    BmCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bm-customer',
            template: __webpack_require__(/*! ./bm-customer.component.html */ "./src/app/businessmanager/bm-customer/bm-customer.component.html"),
            styles: [__webpack_require__(/*! ./bm-customer.component.css */ "./src/app/businessmanager/bm-customer/bm-customer.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BmCustomerComponent);
    return BmCustomerComponent;
}());



/***/ }),

/***/ "./src/app/businessmanager/bm-homepage/bm-homepage.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/businessmanager/bm-homepage/bm-homepage.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzbWFuYWdlci9ibS1ob21lcGFnZS9ibS1ob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/businessmanager/bm-homepage/bm-homepage.component.html":
/*!************************************************************************!*\
  !*** ./src/app/businessmanager/bm-homepage/bm-homepage.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <br>\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n     <ul class=\"nav navbar-nav navbar-left\">\n          <li><img border=\"0\" src=\"../../assets/img/logo.png\" height=\"50\"></li>\n      </ul>\n     <ul class=\"nav navbar-nav navbar-left\">\n          <li><span class=\"navbar-brand text-left\">  Business Manager</span></li>\n      </ul>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><button (click)=\"gotoWealthmanager()\" class=\"button buttonBlue\">WEALTH MANAGER</button></li>\n          <li><button (click)=\"gotoCustomer()\" class=\"button buttonBlue\">CUSTOMER</button></li>\n        </ul>\n    </div>\n  </div>\n</nav>\n<!-- Container (Portfolio Section) -->\n<div id=\"customer\" class=\"container-fluid text-center bg-grey\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/businessmanager/bm-homepage/bm-homepage.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/businessmanager/bm-homepage/bm-homepage.component.ts ***!
  \**********************************************************************/
/*! exports provided: BmHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmHomepageComponent", function() { return BmHomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BmHomepageComponent = /** @class */ (function () {
    function BmHomepageComponent(router) {
        this.router = router;
    }
    BmHomepageComponent.prototype.ngOnInit = function () {
    };
    BmHomepageComponent.prototype.gotoWealthmanager = function () {
        this.router.navigate(['/businessmanager/wealthmanager']);
    };
    BmHomepageComponent.prototype.gotoCustomer = function () {
        this.router.navigate(['/businessmanager/customer']);
    };
    BmHomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bm-homepage',
            template: __webpack_require__(/*! ./bm-homepage.component.html */ "./src/app/businessmanager/bm-homepage/bm-homepage.component.html"),
            styles: [__webpack_require__(/*! ./bm-homepage.component.css */ "./src/app/businessmanager/bm-homepage/bm-homepage.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BmHomepageComponent);
    return BmHomepageComponent;
}());



/***/ }),

/***/ "./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzbWFuYWdlci9ibS13ZWFsdGhtYW5hZ2VyLWFkZC9ibS13ZWFsdGhtYW5hZ2VyLWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"screenHeading\">\n      <span>Add Wealth Manager</span>\n  </div> \n  <br> \n  <div class=\"divCenter500\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>First Name</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.firstName\" placeholder=\"First Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Last Name</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.lastName\" placeholder=\"Last Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Gender</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n          <input type=\"radio\" value=\"Male\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Male\n          <input type=\"radio\" value=\"Female\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Female\n        </p>    \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Email</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.emailId\" placeholder=\"Email\"/>\n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>City</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n        <input [(ngModel)]=\"mainData.city\" placeholder=\"City\"/>\n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Country</p></div>\n      <div class=\"col-sm-5\">\n            <select [(ngModel)]=\"mainData.country\">\n            <option *ngFor=\"let countryItem of countries\" [ngValue]=\"countryItem.id\">\n              {{countryItem.name}}\n            </option>\n          </select>\n      </div>\n    </div>\n    <br>\n    \n    <div class=\"row\">\n        <button (click)=\"save()\" class=\"button buttonBlue\">Save</button>\n        <button (click)=\"cancel()\" class=\"button buttonBlue\">Cancel</button>\n    </div>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BmWealthmanagerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmWealthmanagerAddComponent", function() { return BmWealthmanagerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_wealthmanager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/wealthmanager.service */ "./src/app/service/wealthmanager.service.ts");
/* harmony import */ var _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/common-data.service */ "./src/app/service/common-data.service.ts");





var BmWealthmanagerAddComponent = /** @class */ (function () {
    function BmWealthmanagerAddComponent(wealthmanagerService, commonDataService, route, router) {
        this.wealthmanagerService = wealthmanagerService;
        this.commonDataService = commonDataService;
        this.route = route;
        this.router = router;
        this.mainData = { firstName: '', lastName: '', age: 18, gender: 'Male', emailId: '', city: '', country: '' };
    }
    BmWealthmanagerAddComponent.prototype.ngOnInit = function () {
        this.countries = this.commonDataService.getCountries();
    };
    BmWealthmanagerAddComponent.prototype.save = function () {
        var _this = this;
        this.wealthmanagerService.add(this.mainData).subscribe(function (result) {
            _this.router.navigate(['/businessmanager/wealthmanager']);
        }, function (err) {
            console.log(err);
        });
    };
    BmWealthmanagerAddComponent.prototype.cancel = function () {
        this.router.navigate(['/businessmanager/wealthmanager']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BmWealthmanagerAddComponent.prototype, "mainData", void 0);
    BmWealthmanagerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bm-wealthmanager-add',
            template: __webpack_require__(/*! ./bm-wealthmanager-add.component.html */ "./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.html"),
            styles: [__webpack_require__(/*! ./bm-wealthmanager-add.component.css */ "./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_wealthmanager_service__WEBPACK_IMPORTED_MODULE_3__["WealthmanagerService"], _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BmWealthmanagerAddComponent);
    return BmWealthmanagerAddComponent;
}());



/***/ }),

/***/ "./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzbWFuYWdlci9ibS13ZWFsdGhtYW5hZ2VyLWVkaXQvYm0td2VhbHRobWFuYWdlci1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"screenHeading\">\n      <span>Edit Wealth Manager</span>\n  </div> \n  <br> \n  <div class=\"divCenter500\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>First Name</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.firstName\" placeholder=\"First Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Last Name</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.lastName\" placeholder=\"Last Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Gender</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n          <input type=\"radio\" value=\"Male\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Male\n          <input type=\"radio\" value=\"Female\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Female\n        </p>    \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Email</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.emailId\" placeholder=\"Email\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>City</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n        <input [(ngModel)]=\"mainData.city\" placeholder=\"City\"/>\n      </div>\n    </div>  \n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Country</p></div>\n      <div class=\"col-sm-5\">\n                <select [(ngModel)]=\"mainData.country\">\n            <option *ngFor=\"let countryItem of countries\" [ngValue]=\"countryItem.id\">\n              {{countryItem.name}}\n            </option>\n          </select>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n        <input type=hidden [(ngModel)]=\"mainData.id\"/>\n        <button (click)=\"save()\" class=\"button buttonBlue\">Save</button>\n        <button (click)=\"cancel()\" class=\"button buttonBlue\">Cancel</button>\n    </div>\n    <br>\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BmWealthmanagerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmWealthmanagerEditComponent", function() { return BmWealthmanagerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_wealthmanager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/wealthmanager.service */ "./src/app/service/wealthmanager.service.ts");
/* harmony import */ var _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/common-data.service */ "./src/app/service/common-data.service.ts");





var BmWealthmanagerEditComponent = /** @class */ (function () {
    function BmWealthmanagerEditComponent(wealthmanagerService, commonDataService, route, router) {
        this.wealthmanagerService = wealthmanagerService;
        this.commonDataService = commonDataService;
        this.route = route;
        this.router = router;
        this.mainData = { id: 0, firstName: '', lastName: '', age: 18, gender: 'Male', emailId: '', city: '', country: '' };
    }
    BmWealthmanagerEditComponent.prototype.ngOnInit = function () {
        this.countries = this.commonDataService.getCountries();
        this.loadById();
    };
    BmWealthmanagerEditComponent.prototype.loadById = function () {
        var _this = this;
        this.wealthmanagerService.getById(this.route.snapshot.params['id']).subscribe(function (data) {
            console.log(data);
            _this.mainData = data;
        });
    };
    BmWealthmanagerEditComponent.prototype.save = function () {
        var _this = this;
        this.wealthmanagerService.update(this.mainData.id, this.mainData).subscribe(function (result) {
            _this.router.navigate(['/businessmanager/wealthmanager']);
        }, function (err) {
            console.log(err);
        });
    };
    BmWealthmanagerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/businessmanager/wealthmanager']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BmWealthmanagerEditComponent.prototype, "mainData", void 0);
    BmWealthmanagerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bm-wealthmanager-edit',
            template: __webpack_require__(/*! ./bm-wealthmanager-edit.component.html */ "./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.html"),
            styles: [__webpack_require__(/*! ./bm-wealthmanager-edit.component.css */ "./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_wealthmanager_service__WEBPACK_IMPORTED_MODULE_3__["WealthmanagerService"], _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BmWealthmanagerEditComponent);
    return BmWealthmanagerEditComponent;
}());



/***/ }),

/***/ "./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzbWFuYWdlci9ibS13ZWFsdGhtYW5hZ2VyL2JtLXdlYWx0aG1hbmFnZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<button title=\"Add\" (click)=\"add()\" class=\"button buttonBlue\">Add Wealth Manager</button>\n<br>\n<br>\n\n<div style=\"padding:12px; background:#f2f2f2;\">\n  <div class=\"mycard width300\" *ngFor=\"let p of mainData\">  \n    <div style=\"padding:0px 0px 5px 10px;\">\n      <mat-card class=\"width300\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"my-card-header-image-male\" *ngIf=\"p.gender == 'Male'\"></div>\n          <div mat-card-avatar class=\"my-card-header-image-female\" *ngIf=\"p.gender == 'Female'\"></div>\n          <mat-card-title><strong>{{p.firstName}} {{p.lastName}}</strong></mat-card-title>\n          <a (click)=\"edit(p.id)\">\n              <img border=\"0\" alt=\"Edit\" src=\"../../assets/img/button-edit.png\" width=\"20\" height=\"20\">\n          </a>\n          <a (click)=\"delete(p.id)\">\n              <img border=\"0\" alt=\"Delete\" src=\"../../assets/img/button-delete.png\" width=\"20\" height=\"20\">\n          </a>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            {{p.gender}}, {{p.age}}, {{p.city}}\n            <BR>\n            member since {{p.startDateString}}\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n<div style=\"padding:12px; background:#f2f2f2;\">\n  <div class=\"mycard width300\" *ngFor=\"let p of [10,20,30,40,50,60,70,80], let i = index\">  \n    <div style=\"padding:0px 0px 5px 10px;\">\n      <mat-card class=\"width300\" >\n        <mat-card-header>\n          <div mat-card-avatar class=\"my-card-header-image-male\"></div>\n          <mat-card-title><strong>Shiba Inu {{i}}</strong></mat-card-title>\n          <a (click)=\"edit(i)\">\n              <img border=\"0\" alt=\"Edit\" src=\"../../assets/img/button-edit.png\" width=\"20\" height=\"20\">\n          </a>\n          <a (click)=\"delete(i)\">\n              <img border=\"0\" alt=\"Delete\" src=\"../../assets/img/button-delete.png\" width=\"20\" height=\"20\">\n          </a>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            Male, {{i}}, {{p}} \n            <BR>\n            member since {{i}}\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.ts ***!
  \********************************************************************************/
/*! exports provided: BmWealthmanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmWealthmanagerComponent", function() { return BmWealthmanagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_wealthmanager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/wealthmanager.service */ "./src/app/service/wealthmanager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BmWealthmanagerComponent = /** @class */ (function () {
    function BmWealthmanagerComponent(wealthmanagerService, router) {
        this.wealthmanagerService = wealthmanagerService;
        this.router = router;
        this.mainData = [];
    }
    BmWealthmanagerComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    BmWealthmanagerComponent.prototype.getAll = function () {
        var _this = this;
        this.mainData = [];
        this.wealthmanagerService.getAll().subscribe(function (data) {
            _this.mainData = data;
        });
    };
    BmWealthmanagerComponent.prototype.add = function () {
        var myURL = '/businessmanager/wealthmanagerAdd';
        this.router.navigate([myURL]);
    };
    BmWealthmanagerComponent.prototype.edit = function (id) {
        var myURL = '/businessmanager/wealthmanagerEdit/' + id;
        this.router.navigate([myURL]);
    };
    BmWealthmanagerComponent.prototype.delete = function (id) {
        var _this = this;
        this.wealthmanagerService.delete(id)
            .subscribe(function (res) {
            _this.getAll();
        }, function (err) {
            console.log(err);
        });
    };
    BmWealthmanagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bm-wealthmanager',
            template: __webpack_require__(/*! ./bm-wealthmanager.component.html */ "./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.html"),
            styles: [__webpack_require__(/*! ./bm-wealthmanager.component.css */ "./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_wealthmanager_service__WEBPACK_IMPORTED_MODULE_2__["WealthmanagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BmWealthmanagerComponent);
    return BmWealthmanagerComponent;
}());



/***/ }),

/***/ "./src/app/businessmanager/businessmanager.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/businessmanager/businessmanager.module.ts ***!
  \***********************************************************/
/*! exports provided: BusinessmanagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessmanagerModule", function() { return BusinessmanagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _bm_homepage_bm_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bm-homepage/bm-homepage.component */ "./src/app/businessmanager/bm-homepage/bm-homepage.component.ts");
/* harmony import */ var _bm_wealthmanager_bm_wealthmanager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bm-wealthmanager/bm-wealthmanager.component */ "./src/app/businessmanager/bm-wealthmanager/bm-wealthmanager.component.ts");
/* harmony import */ var _bm_wealthmanager_add_bm_wealthmanager_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bm-wealthmanager-add/bm-wealthmanager-add.component */ "./src/app/businessmanager/bm-wealthmanager-add/bm-wealthmanager-add.component.ts");
/* harmony import */ var _bm_wealthmanager_edit_bm_wealthmanager_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bm-wealthmanager-edit/bm-wealthmanager-edit.component */ "./src/app/businessmanager/bm-wealthmanager-edit/bm-wealthmanager-edit.component.ts");
/* harmony import */ var _bm_customer_bm_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bm-customer/bm-customer.component */ "./src/app/businessmanager/bm-customer/bm-customer.component.ts");
/* harmony import */ var _bm_customer_add_bm_customer_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bm-customer-add/bm-customer-add.component */ "./src/app/businessmanager/bm-customer-add/bm-customer-add.component.ts");
/* harmony import */ var _bm_customer_edit_bm_customer_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bm-customer-edit/bm-customer-edit.component */ "./src/app/businessmanager/bm-customer-edit/bm-customer-edit.component.ts");















var BusinessmanagerModule = /** @class */ (function () {
    function BusinessmanagerModule() {
    }
    BusinessmanagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_bm_homepage_bm_homepage_component__WEBPACK_IMPORTED_MODULE_8__["BmHomepageComponent"], _bm_wealthmanager_bm_wealthmanager_component__WEBPACK_IMPORTED_MODULE_9__["BmWealthmanagerComponent"], _bm_wealthmanager_add_bm_wealthmanager_add_component__WEBPACK_IMPORTED_MODULE_10__["BmWealthmanagerAddComponent"], _bm_wealthmanager_edit_bm_wealthmanager_edit_component__WEBPACK_IMPORTED_MODULE_11__["BmWealthmanagerEditComponent"], _bm_customer_bm_customer_component__WEBPACK_IMPORTED_MODULE_12__["BmCustomerComponent"], _bm_customer_add_bm_customer_add_component__WEBPACK_IMPORTED_MODULE_13__["BmCustomerAddComponent"], _bm_customer_edit_bm_customer_edit_component__WEBPACK_IMPORTED_MODULE_14__["BmCustomerEditComponent"]],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]
            ]
        })
    ], BusinessmanagerModule);
    return BusinessmanagerModule;
}());



/***/ }),

/***/ "./src/app/common/css/common.css":
/*!***************************************!*\
  !*** ./src/app/common/css/common.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* label style */\n.mat-tab-label{\n    background: blue;\n    color:white;\n  }\n/* focus style */\n.mat-tab-group.mat-primary \n  .mat-tab-label:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary \n  .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary \n  .mat-tab-label:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary \n  .mat-tab-link:not(.mat-tab-disabled):focus{\n    background: red;\n  }\n/* ink bar style */\n.mat-tab-group.mat-primary .mat-ink-bar, \n  .mat-tab-nav-bar.mat-primary .mat-ink-bar{\n    background: yellow;\n    height: 10px;\n  }\n.my-card {\n    width: 400px;\n    margin: 4px\n  }\n.my-card-header-image-male {\n    background-image: url('male.png');\n    background-size: cover;\n  }\n.my-card-header-image-female {\n    background-image: url('female.png');\n    background-size: cover;\n  }\n.buttonEdit{\n    background:url('button-edit.png') no-repeat left center;\n    padding-left:20px;\n    alt:Edit;\n  }\n.buttonDelete{\n    background:url('button-delete.png') no-repeat left center;\n    padding-left:20px;\n    alt:Delete;\n  }\n/* Add some padding inside the card container */\n.container {\n    padding: 2px 16px;\n  }\n/* Style buttons */\n.btn {\n  background-color: DodgerBlue; /* Blue background */\n  border: none; /* Remove borders */\n  color: white; /* White text */\n  padding: 12px 16px; /* Some padding */\n  font-size: 16px; /* Set a font size */\n  cursor: pointer; /* Mouse pointer on hover */\n}\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: RoyalBlue;\n}\n.button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 5px 20px ;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin: 1px 1px;\n  cursor: pointer;\n}\n.buttonBlue {background-color: #008CBA;}\n/* Blue */\n.buttonGray {background-color: #808080;}\n/* Blue */\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 800px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n.mycard {\n  background:#fff;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\n\n  margin-left: 12px;\n  margin-bottom: 12px;\n\n  float: left;\n}\n/* On mouse-over, add a deeper shadow */\n.mycard:hover {\n  box-shadow: 0 2px 2px 0 #6a97c4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Nzcy9jb21tb24uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnQkFBZ0I7QUFDaEI7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7OztJQUtFLGVBQWU7RUFDakI7QUFDQSxrQkFBa0I7QUFDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUVBO0lBQ0UsWUFBWTtJQUNaO0VBQ0Y7QUFFQTtJQUNFLGlDQUFxRDtJQUNyRCxzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLG1DQUF1RDtJQUN2RCxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLHVEQUEyRTtJQUMzRSxpQkFBaUI7SUFDakIsUUFBUTtFQUNWO0FBQ0E7SUFDRSx5REFBNkU7SUFDN0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjtBQUdBLCtDQUErQztBQUMvQztJQUNFLGlCQUFpQjtFQUNuQjtBQUVELGtCQUFrQjtBQUNsQjtFQUNDLDRCQUE0QixFQUFFLG9CQUFvQjtFQUNsRCxZQUFZLEVBQUUsbUJBQW1CO0VBQ2pDLFlBQVksRUFBRSxlQUFlO0VBQzdCLGtCQUFrQixFQUFFLGlCQUFpQjtFQUNyQyxlQUFlLEVBQUUsb0JBQW9CO0VBQ3JDLGVBQWUsRUFBRSwyQkFBMkI7QUFDOUM7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSwyQkFBMkI7QUFDN0I7QUFHQTtFQUNFLHlCQUF5QixFQUFFLFVBQVU7RUFDckMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUEsYUFBYSx5QkFBeUIsQ0FBQztBQUFFLFNBQVM7QUFDbEQsYUFBYSx5QkFBeUIsQ0FBQztBQUFFLFNBQVM7QUFDbEQ7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLG9FQUFvRTs7RUFFcEUsaUJBQWlCO0VBQ2pCLG1CQUFtQjs7RUFFbkIsV0FBVztBQUNiO0FBQ0EsdUNBQXVDO0FBQ3ZDO0VBQ0UsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2Nzcy9jb21tb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBsYWJlbCBzdHlsZSAqL1xuLm1hdC10YWItbGFiZWx7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxuICAvKiBmb2N1cyBzdHlsZSAqL1xuICAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSBcbiAgLm1hdC10YWItbGFiZWw6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cywgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgXG4gIC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cywgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSBcbiAgLm1hdC10YWItbGFiZWw6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cywgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSBcbiAgLm1hdC10YWItbGluazpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3Vze1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgfVxuICAvKiBpbmsgYmFyIHN0eWxlICovXG4gIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwgXG4gIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFye1xuICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH0gXG5cbiAgLm15LWNhcmQge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDRweFxuICB9XG4gIFxuICAubXktY2FyZC1oZWFkZXItaW1hZ2UtbWFsZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL21hbGUucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICAubXktY2FyZC1oZWFkZXItaW1hZ2UtZmVtYWxlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmVtYWxlLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuYnV0dG9uRWRpdHtcbiAgICBiYWNrZ3JvdW5kOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b24tZWRpdC5wbmcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgYWx0OkVkaXQ7XG4gIH0gICBcbiAgLmJ1dHRvbkRlbGV0ZXtcbiAgICBiYWNrZ3JvdW5kOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b24tZGVsZXRlLnBuZycpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICBhbHQ6RGVsZXRlO1xuICB9XG4gIFxuXG4gIC8qIEFkZCBzb21lIHBhZGRpbmcgaW5zaWRlIHRoZSBjYXJkIGNvbnRhaW5lciAqL1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAycHggMTZweDtcbiAgfVxuXG4gLyogU3R5bGUgYnV0dG9ucyAqL1xuIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlOyAvKiBCbHVlIGJhY2tncm91bmQgKi9cbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xuICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgKi9cbiAgcGFkZGluZzogMTJweCAxNnB4OyAvKiBTb21lIHBhZGRpbmcgKi9cbiAgZm9udC1zaXplOiAxNnB4OyAvKiBTZXQgYSBmb250IHNpemUgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBNb3VzZSBwb2ludGVyIG9uIGhvdmVyICovXG59XG5cbi8qIERhcmtlciBiYWNrZ3JvdW5kIG9uIG1vdXNlLW92ZXIgKi9cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBSb3lhbEJsdWU7XG59IFxuXG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDIwcHggO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMXB4IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uQmx1ZSB7YmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTt9IC8qIEJsdWUgKi9cbi5idXR0b25HcmF5IHtiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO30gLyogQmx1ZSAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuXG5idXR0b24uZGVsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA4MDBweDtcbiAgdG9wOiAtMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5teWNhcmQge1xuICBiYWNrZ3JvdW5kOiNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNiksIDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDgpO1xuXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gIGZsb2F0OiBsZWZ0O1xufVxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xuLm15Y2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwICM2YTk3YzQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/customer/customer-financialplan/customer-financialplan.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/customer/customer-financialplan/customer-financialplan.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWZpbmFuY2lhbHBsYW4vY3VzdG9tZXItZmluYW5jaWFscGxhbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/customer-financialplan/customer-financialplan.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/customer/customer-financialplan/customer-financialplan.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div style=\"padding:12px; background:#f2f2f2;\">\n  <div class=\"mycard width900\" *ngFor=\"let p of mainData\">  \n    <div style=\"padding:0px 0px 5px 10px;\">\n      <mat-card class=\"width900\">\n        <mat-card-header>\n          <mat-card-title><span class=\"textStyleType2\">GOAL # {{p.goalReference}} : {{p.goalDesc}}</span> <span class=\"textStyleType1\">( {{p.goalAchievementString}} )</span></mat-card-title>\n          <a (click)=\"selectGoal(p.id)\">\n              <img border=\"0\" alt=\"Goal Details\" src=\"../../assets/img/button-edit.png\" width=\"20\" height=\"20\">\n          </a>\n        </mat-card-header>\n        <mat-card-content>\n          <div class=\"row width900\">\n            <div class=\"col-sm-2\"><span> <strong>Target Date : </strong>{{p.targetDate}}</span></div>\n            <div class=\"col-sm-2\"><span><strong>Target Amount :  {{p.currency}}</strong>{{p.targetAmount}}</span></div>\n            <div class=\"col-sm-2\"><span><strong>Total Investment : </strong>{{p.totalInvestmentAmount}}  {{p.currency}}</span></div>\n            <div class=\"col-sm-2\"><span><strong>Investment Current Value : </strong>{{p.investmentCurrentValue}} {{p.currency}}</span></div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n<div style=\"padding:12px; background:#f2f2f2;\">\n  <div class=\"mycard width900\" *ngFor=\"let p of mainData\">  \n    <div style=\"padding:0px 0px 5px 10px;\">\n      <mat-card class=\"width900\">\n        <mat-card-header>\n          <mat-card-title><strong>GOAL # {{p}} : Desc {{p}} </strong> (6{{p}}% goal reached in 3/5 years)</mat-card-title>\n          <a (click)=\"selectGoal(p.id)\">\n              <img border=\"0\" alt=\"Goal Details\" src=\"../../assets/img/button-edit.png\" width=\"20\" height=\"20\">\n          </a>\n        </mat-card-header>\n        <mat-card-content>\n          <div class=\"row\">\n            <div class=\"col-sm-1\"><strong>Target Date : </strong></div>\n            <div class=\"col-sm-1\">Aug 202{{p}}</div>\n            <div class=\"col-sm-1\"><strong>Target Amount : </strong></div>\n            <div class=\"col-sm-1\">5000000 INR</div>\n            <div class=\"col-sm-1\"><strong>Total Investment : </strong></div>\n            <div class=\"col-sm-1\">40000</div>\n            <div class=\"col-sm-1\"><strong>Investment Current Value : </strong></div>\n            <div class=\"col-sm-1\">45000</div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/customer/customer-financialplan/customer-financialplan.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/customer/customer-financialplan/customer-financialplan.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerFinancialplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFinancialplanComponent", function() { return CustomerFinancialplanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_goal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/goal.service */ "./src/app/service/goal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");





var CustomerFinancialplanComponent = /** @class */ (function () {
    function CustomerFinancialplanComponent(goalService, wcLocalStorageService, route, router) {
        this.goalService = goalService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.route = route;
        this.router = router;
        this.mainData = [];
    }
    CustomerFinancialplanComponent.prototype.ngOnInit = function () {
        this.loadSessionData();
        this.getAllInfoByCustomerId(this.customerId);
    };
    CustomerFinancialplanComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
    };
    CustomerFinancialplanComponent.prototype.getAllInfoByCustomerId = function (id) {
        var _this = this;
        this.mainData = [];
        this.goalService.getAllInfoByCustomerId(id).subscribe(function (data) {
            _this.mainData = data;
        });
    };
    CustomerFinancialplanComponent.prototype.goback = function () {
        this.router.navigate(['/customer/financialplan']);
    };
    CustomerFinancialplanComponent.prototype.selectGoal = function (id) {
        var myURL = '/customer/financialplanDetail/' + id;
        this.router.navigate([myURL]);
    };
    CustomerFinancialplanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-financialplan',
            template: __webpack_require__(/*! ./customer-financialplan.component.html */ "./src/app/customer/customer-financialplan/customer-financialplan.component.html"),
            styles: [__webpack_require__(/*! ./customer-financialplan.component.css */ "./src/app/customer/customer-financialplan/customer-financialplan.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_goal_service__WEBPACK_IMPORTED_MODULE_2__["GoalService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerFinancialplanComponent);
    return CustomerFinancialplanComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-homepage/customer-homepage.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/customer/customer-homepage/customer-homepage.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWhvbWVwYWdlL2N1c3RvbWVyLWhvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer-homepage/customer-homepage.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/customer/customer-homepage/customer-homepage.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <br>\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n     <ul class=\"nav navbar-nav navbar-left\">\n          <li><img border=\"0\" src=\"../../assets/img/logo.png\" height=\"50\"></li>\n      </ul>\n     <ul class=\"nav navbar-nav navbar-left\">\n          <li><span class=\"navbar-brand text-left\">  Customer</span></li>\n      </ul>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><button (click)=\"gotoFinancialPlan()\" class=\"button buttonBlue\">FINANCIAL PLAN</button></li>\n          <li><button (click)=\"gotoPortfolio()\" class=\"button buttonBlue\">PORTFOLIO</button></li>\n          <li><button (click)=\"gotoProfile()\" class=\"button buttonBlue\">PROFILE</button></li>\n        </ul>\n    </div>    \n  </div>\n</nav>\n\n<!-- Container (Portfolio Section) -->\n<div id=\"customer\" class=\"container-fluid text-center bg-grey\">\n  <br>\n  <strong>CUSTOMER</strong> > {{customerName}} (ID: {{customerId}})\n  <br>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/customer/customer-homepage/customer-homepage.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/customer/customer-homepage/customer-homepage.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHomepageComponent", function() { return CustomerHomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CustomerHomepageComponent = /** @class */ (function () {
    function CustomerHomepageComponent(wcLocalStorageService, router) {
        this.wcLocalStorageService = wcLocalStorageService;
        this.router = router;
    }
    CustomerHomepageComponent.prototype.ngOnInit = function () {
        //TODO: to be removed
        this.wcLocalStorageService.putCustomerDetails(40001, 'Nathan Kumar');
        this.loadSessionData();
    };
    CustomerHomepageComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
    };
    CustomerHomepageComponent.prototype.gotoFinancialPlan = function () {
        this.router.navigate(['/customer/financialplan']);
    };
    CustomerHomepageComponent.prototype.gotoPortfolio = function () {
        this.router.navigate(['/customer/financialplanDetail']);
    };
    CustomerHomepageComponent.prototype.gotoProfile = function () {
        this.router.navigate(['/customer/profile']);
    };
    CustomerHomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-homepage',
            template: __webpack_require__(/*! ./customer-homepage.component.html */ "./src/app/customer/customer-homepage/customer-homepage.component.html"),
            styles: [__webpack_require__(/*! ./customer-homepage.component.css */ "./src/app/customer/customer-homepage/customer-homepage.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerHomepageComponent);
    return CustomerHomepageComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-portfolio/customer-portfolio.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/customer/customer-portfolio/customer-portfolio.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLXBvcnRmb2xpby9jdXN0b21lci1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customer/customer-portfolio/customer-portfolio.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/customer/customer-portfolio/customer-portfolio.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n  <br>\n  <div style=\"padding:12px; background:#f2f2f2;\">\n    <div class=\"mycard width1000\">  \n      <div style=\"padding:0px 0px 5px 10px;\">\n        <mat-card class=\"width1000\">\n          <mat-card-header>\n              <mat-card-title><span class=\"textStyleType2\">GOAL # {{mainData.goalReference}} : {{mainData.goalDesc}}</span> <span class=\"textStyleType1\">( {{mainData.goalAchievementString}} )</span></mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div class=\"row width900\">\n              <div class=\"col-sm-2\"><span> <strong>Target Date : </strong>{{mainData.targetDate}}</span></div>\n              <div class=\"col-sm-2\"><span><strong>Target Amount :  {{mainData.currency}}</strong>{{mainData.targetAmount}}</span></div>\n              <div class=\"col-sm-2\"><span><strong>Total Investment : </strong>{{mainData.totalInvestmentAmount}}  {{mainData.currency}}</span></div>\n              <div class=\"col-sm-2\"><span><strong>Investment Current Value : </strong>{{mainData.investmentCurrentValue}} {{mainData.currency}}</span></div>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n  <div class=\"row floatClear\">\n    <br>\n    <br>\n      <button title=\"Back\" (click)=\"goback()\" class=\"button buttonBlue\">Back</button>\n      <br>\n    <br>\n    <br>\n  </div>\n  <div class=\"row divCenter1000\">\n    <div style=\"width:1000px; height:320px; overflow: auto;text-align: center;\"> \n      <table id=\"tableType1\" class=\"width900\">\n        <thead>\n          <tr>\n              <th>Investment Date</th>\n              <th>Investment Amount</th>\n              <th>Stocks</th>\n              <th>Mutual Fund</th>\n              <th>Fixed Deposit</th>\n              <th>Current Value</th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let p of mainData.investments\">\n              <td>{{p.investmentDate}}</td>\n              <td>{{p.investmentAmount}}</td>\n              <td>{{p.stockAmount}} <br> <span class=\"textStyleType3\"> {{p.currentValueStockAmountString}}</span></td>\n              <td>{{p.mutualFundAmount}} <br> <span class=\"textStyleType3\">{{p.currentValueMutualFundAmountString}}</span></td>\n              <td>{{p.fixedDepositAmount}} <br> <span class=\"textStyleType3\">{{p.currentValueFixedDepositAmountString}}</span></td>\n              <td>{{p.currentValueTotalString}} <br> <span class=\"textStyleType3\">{{p.currentValueTotalComments}}</span></td>\n            </tr>\n        </tbody>\n      </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/customer/customer-portfolio/customer-portfolio.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/customer/customer-portfolio/customer-portfolio.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPortfolioComponent", function() { return CustomerPortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");
/* harmony import */ var src_app_service_goal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/goal.service */ "./src/app/service/goal.service.ts");





var CustomerPortfolioComponent = /** @class */ (function () {
    function CustomerPortfolioComponent(goalService, wcLocalStorageService, route, router) {
        this.goalService = goalService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.route = route;
        this.router = router;
        this.mainData = [];
    }
    CustomerPortfolioComponent.prototype.ngOnInit = function () {
        this.loadSessionData();
        this.loadById();
    };
    CustomerPortfolioComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
    };
    CustomerPortfolioComponent.prototype.loadById = function () {
        var _this = this;
        console.log("load by id ---------->" + this.route.snapshot.params['id']);
        this.goalService.getInfoById(this.route.snapshot.params['id']).subscribe(function (data) {
            _this.mainData = data;
        });
    };
    CustomerPortfolioComponent.prototype.goback = function () {
        this.router.navigate(['/customer/financialplan']);
    };
    CustomerPortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-portfolio',
            template: __webpack_require__(/*! ./customer-portfolio.component.html */ "./src/app/customer/customer-portfolio/customer-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./customer-portfolio.component.css */ "./src/app/customer/customer-portfolio/customer-portfolio.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_goal_service__WEBPACK_IMPORTED_MODULE_4__["GoalService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerPortfolioComponent);
    return CustomerPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-profile/customer-profile.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/customer/customer-profile/customer-profile.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLXByb2ZpbGUvY3VzdG9tZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/customer-profile/customer-profile.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/customer/customer-profile/customer-profile.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div class=\"screenHeading\">\n      <span>My Profile</span>\n  </div> \n  <br>\n  <div class=\"divCenter500\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><p>First Name</p></div>\n    <div class=\"col-sm-5\">\n      <input [(ngModel)]=\"mainData.firstName\" placeholder=\"First Name\"/>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><p>Last Name</p></div>\n    <div class=\"col-sm-5\">\n      <input [(ngModel)]=\"mainData.lastName\" placeholder=\"Last Name\"/>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><p>Age</p></div>\n    <div class=\"col-sm-5\">\n      <input [(ngModel)]=\"mainData.age\" placeholder=\"Age\"/>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><p>Gender</p></div>\n    <div class=\"col-sm-5\">\n      <p>\n        <input type=\"radio\" value=\"Male\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Male\n        <input type=\"radio\" value=\"Female\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Female\n      </p>    \n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><p>Email</p></div>\n    <div class=\"col-sm-5\">\n      <input [(ngModel)]=\"mainData.emailId\" placeholder=\"Email\"/>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><p>Country</p></div>\n    <div class=\"col-sm-3\"><p>{{mainData.country}}</p></div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><p>City</p></div>\n    <div class=\"col-sm-5\">\n      <p>\n      <input [(ngModel)]=\"mainData.city\" placeholder=\"City\"/>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"><p>Income</p></div>\n    <div class=\"col-sm-5\">\n      <input [(ngModel)]=\"mainData.avgIncome\" placeholder=\"Income\"/>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n      <input type=hidden [(ngModel)]=\"mainData.id\"/>\n      <button (click)=\"goback()\" class=\"button buttonBlue\">Back</button>\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/customer-profile/customer-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-profile/customer-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileComponent", function() { return CustomerProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/customer.service */ "./src/app/service/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");





var CustomerProfileComponent = /** @class */ (function () {
    function CustomerProfileComponent(customerService, wcLocalStorageService, router) {
        this.customerService = customerService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.router = router;
        this.mainData = [];
    }
    CustomerProfileComponent.prototype.ngOnInit = function () {
        this.loadSessionData();
        this.getById(this.customerId);
    };
    CustomerProfileComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
    };
    CustomerProfileComponent.prototype.getById = function (id) {
        var _this = this;
        this.mainData = [];
        this.customerService.getById(id).subscribe(function (data) {
            _this.mainData = data;
        });
    };
    CustomerProfileComponent.prototype.goback = function () {
        this.router.navigate(['/customer/financialplan']);
    };
    CustomerProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-profile',
            template: __webpack_require__(/*! ./customer-profile.component.html */ "./src/app/customer/customer-profile/customer-profile.component.html"),
            styles: [__webpack_require__(/*! ./customer-profile.component.css */ "./src/app/customer/customer-profile/customer-profile.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerProfileComponent);
    return CustomerProfileComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _customer_homepage_customer_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-homepage/customer-homepage.component */ "./src/app/customer/customer-homepage/customer-homepage.component.ts");
/* harmony import */ var _customer_financialplan_customer_financialplan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-financialplan/customer-financialplan.component */ "./src/app/customer/customer-financialplan/customer-financialplan.component.ts");
/* harmony import */ var _customer_portfolio_customer_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-portfolio/customer-portfolio.component */ "./src/app/customer/customer-portfolio/customer-portfolio.component.ts");
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ "./src/app/customer/customer-profile/customer-profile.component.ts");















var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_customer_homepage_customer_homepage_component__WEBPACK_IMPORTED_MODULE_10__["CustomerHomepageComponent"], _customer_financialplan_customer_financialplan_component__WEBPACK_IMPORTED_MODULE_11__["CustomerFinancialplanComponent"], _customer_portfolio_customer_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["CustomerPortfolioComponent"], _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_13__["CustomerProfileComponent"]],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/homepage/homepage.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/homepage/homepage.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <br>\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n     <ul class=\"nav navbar-nav navbar-left\">\n          <li><img border=\"0\" src=\"../../assets/img/logo.png\" height=\"50\"></li>\n      </ul>\n     <ul class=\"nav navbar-nav navbar-left\">\n          <li><span class=\"navbar-brand text-left\">  </span></li>\n      </ul>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#about\">ABOUT</a></li>\n        <li><a href=\"#services\">SERVICES</a></li>\n        <li><a href=\"#portfolio\">PORTFOLIO</a></li>\n        <li><a href=\"#contact\">CONTACT</a></li>\n          <li><button (click)=\"gotoBusinessmanager()\" class=\"button buttonBlue\">BUSINESS MANAGER</button></li>\n           <li><button (click)=\"gotoWealthmanager()\" class=\"button buttonBlue\">WEALTH MANAGER</button></li>\n          <li><button (click)=\"gotoCustomer()\" class=\"button buttonBlue\">CUSTOMER</button></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!-- Container (About Section) -->\n<div id=\"about\" class=\"container-fluid \">\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-2\" >\n    </div>\n    <div class=\"col-sm-5 text-left\" >\n      <h2 style=\"color:turquoise\">Wealth Care</h2>\n      <h4 style=\"color:gray\">Wealth Care is a wealth management company headquartered in Bangalore and rapidly expanded to all the major cities of India. It provides wealth management solutions to individuals in terms of financial plan creation and making investments</h4> \n      <br>\n      <h4 style=\"color:teal\">Hot summer picks</h4>\n      <p style=\"color:gray\">Trendy products with free shipping</p>\n      <br>\n      <h4 style=\"color:darkorange;\">Looking for an affordable electronics</h4>\n      <p style=\"color:gray\">Handpicked from top brands</p>\n      <br>\n      <h4 style=\"color:dodgerblue;\">Source from sports industry leaders</h4>\n      <p style=\"color:gray\">Top selling sports products with more discounts</p>\n      <br>\n      <button class=\"btn btn-default btn-lg\">Get in Touch</button>\n    </div>\n    <div class=\"col-sm-5 text-left\">\n      <br><br>\n      <img src=\"/assets/img/product_credit_score.png\" alt=\"bags\" width=\"500\" >\n    </div>\n  </div>\n  <br><br>\n</div>\n\n<!-- Container (Services Section) -->\n<div id=\"services\" class=\"container-fluid text-center\">\n  <h2>SERVICES</h2>\n  <h4>What we offer</h4>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-off logo-small\"></span>\n      <h4>Bright Ideas</h4>\n      <p>ring summer into your space with vibrant colors, patterns, and shapes, inspired by the earth and sky. Brighten every corner of your home with our eclectic collection of traditional and modern home accents</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-heart logo-small\"></span>\n      <h4>Handbags</h4>\n      <p>Indulge in luxurious leather and sumptuous suede handbags, in colors that will take your breath away. From oversized totes to elegant clutches, you'll find your perfect match at a perfect price in our handcrafted designer collection.</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-lock logo-small\"></span>\n      <h4>Flat-out Comfort</h4>\n      <p>Beautifully designed, soft leather shoes with an elasticized edge for perfect fit. Lightweight and durable, these flats will provide all-day comfort with their cushioned insole and soft lining. Multi-colored accent lace combinations and patterns are available as a special order. </p>\n    </div>\n  </div>\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-leaf logo-small\"></span>\n      <h4>Kids' Stuff</h4>\n      <p>Summer style is all about fun prints, bright colors, comfort, and durability. Stock up on our easy-to-wear and affordable fashions for kids. Spend $100* or more, and earn a $25 gift certificate.\n*Before taxes. Gift certificates are redeemable on your next visit. </p>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-certificate logo-small\"></span>\n      <h4>FOOT WEAR</h4>\n      <p>Upto 60% off</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-wrench logo-small\"></span>\n      <h4 style=\"color:#303030;\">50% Off Polos</h4>\n      <p>Select from our collection of modern, easy-to-coordinate polo shirts to create a smart but casual look. Available in a kaleidoscope of colors, with superior shape retention and wrinkle resistance. Free shipping on purchases over $60 before taxes. </p>\n    </div>\n  </div>\n</div>\n\n<!-- Container (Portfolio Section) -->\n<div id=\"portfolio\" class=\"container-fluid text-center bg-grey\">\n  <h2>Portfolio</h2><br>\n  <h4>What we offer</h4>\n  <div class=\"row text-center\">\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <span class=\"glyphicon glyphicon-leaf logo-small\"></span>\n        <p><strong>1000+ BRANDS</strong></p>\n        <p>Well Curated 2 Lakhs+ Products</p>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <span class=\"glyphicon glyphicon-heart logo-small\"></span>\n        <p><strong>FREE SHIPPING</strong></p>\n        <p>For Orders Above 500</p>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <span class=\"glyphicon glyphicon-off logo-small\"></span>\n        <p><strong>GENUINE PRODUCTS</strong></p>\n        <p>Sourced Directly From Brands</p>\n      </div>\n    </div>\n  </div>\n\n  <h2>What our customers say</h2>\n  <div id=\"myCarousel\" class=\"carousel slide text-center\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item active\">\n        <h4>\"This application is the best. I am so happy with the product search!\"<br><span>Victor Brown, President, ABCD Inc</span></h4>\n      </div>\n      <div class=\"item\">\n        <h4>\"Excellent Product!!\"<br><span>Peter Vim, Sales Head, ZyncH Inc</span></h4>\n      </div>\n      <div class=\"item\">\n        <h4>\"Very nice product. Easy to search any products?\"<br><span>Alex, Tok, Fran Inc</span></h4>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<!-- Container (Contact Section) -->\n<div id=\"contact\" class=\"container-fluid \">\n  <h2 class=\"text-center\">CONTACT</h2>\n    <div class=\"text-center\">\n      <p>&nbsp;</p>\n      <p>Contact us and we'll get back to you </p>\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Product Pro, US</p>\n      <p><span class=\"glyphicon glyphicon-phone\"></span> +00 1112223344</p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> info@productprof.com</p>\n      <p>&nbsp;</p>\n    </div>\n</div>\n\n<!-- Image of location/map -->\n<footer class=\"container-fluid text-center bg-grey\">\n  <a href=\"#myPage\" title=\"To Top\">\n    <span class=\"glyphicon glyphicon-chevron-up\"></span>\n  </a>\n  <p>Thank you for visiting</p>\n</footer>\n"

/***/ }),

/***/ "./src/app/home/homepage/homepage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.ts ***!
  \*****************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router) {
        this.router = router;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.gotoBusinessmanager = function () {
        this.router.navigate(['/businessmanager']);
    };
    HomepageComponent.prototype.gotoWealthmanager = function () {
        this.router.navigate(['/wealthmanager']);
    };
    HomepageComponent.prototype.gotoCustomer = function () {
        this.router.navigate(['/customer']);
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/home/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/home/homepage/homepage.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var ProductService = /** @class */ (function () {
    // Lets allways keep for Production time....
    function ProductService(http) {
        this.http = http;
        //To access PRODUCT-API mircorservice. The value will be initialized during ngOnInit
        this.apiServiceURL = "1111";
        /////////// The URL to acess springboot apis from angular 
        // ----- Developement time: when running via ng serve, it can point to localhost:9080
        // webSericeURL = environment.webSericeURL;
        // ----- Production time: it is already inside localhost:9080, so the url should be empty, otherwise, it will bring CORS error
        this.webSericeURL = "";
    }
    ProductService.prototype.loadEndPointURL = function () {
        var _this = this;
        console.log("ProductService  loadEndPointURL 1: ");
        return this.getAPIServiceURL().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (apiResponse) {
            console.log("ProductService  loadEndPointURL 2: ");
            _this.apiServiceURL = apiResponse.url;
            return _this.http.get(_this.apiServiceURL + '/api/product', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(_this.extractData));
        }));
    };
    ProductService.prototype.ngOnInit = function () {
        console.log("ProductService  ngOnInit 1.1: ");
        this.mySimpleMethod();
        console.log("ProductService  ngOnInit 1.2: ");
        this.getAPIServiceURL();
        console.log("ProductService  ngOnInit 2.2: ");
    };
    ProductService.prototype.extractDataString = function (res) {
        var body = res;
        var result = body || {};
        //this.endpointPort = result + "";
        return result;
    };
    ProductService.prototype.mySimpleMethod = function () {
        console.log("mySimpleMethod URL : " + this.webSericeURL);
    };
    ProductService.prototype.getAPIServiceURL = function () {
        console.log("webSericeURL URL : " + this.webSericeURL);
        return this.http.get(this.webSericeURL + '/api/apiServiceURL');
    };
    ProductService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ProductService.prototype.getProducts = function () {
        var _this = this;
        console.log("ProductService ----> getProducts 1 : ");
        return this.getAPIServiceURL().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (apiResponse) {
            //Store this end point for future reference..
            _this.apiServiceURL = apiResponse.url;
            console.log("ProductService ----> getProducts 2: Before callling : " + _this.apiServiceURL + '/user/api/customer');
            return _this.http.get(_this.apiServiceURL + '/user/api/customer', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(_this.extractData));
        }));
    };
    ProductService.prototype.getLoginUserName = function () {
        console.log("ProductService  getLoginUserName 1: ");
        return this.http.get(this.apiServiceURL + '/api/loginUserName', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ProductService.prototype.getProduct = function (id) {
        console.log("ProductService  getProduct 1: ");
        return this.http.get(this.apiServiceURL + '/user/api/customer/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ProductService.prototype.addProduct = function (product) {
        console.log("Add product ---> " + JSON.stringify(product));
        return this.http.post(this.apiServiceURL + '/user/customer', JSON.stringify(product), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (product) { return console.log("added product w/ id=" + product.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProduct')));
    };
    ProductService.prototype.updateProduct = function (id, product) {
        return this.http.put(this.apiServiceURL + '/user/customer', JSON.stringify(product), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProduct')));
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.apiServiceURL + '/user/customer/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteProduct')));
    };
    ProductService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product-add/product-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1hZGQvcHJvZHVjdC1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product-add/product-add.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n    <div class=\"container\">\n      <div class=\"row\">\n          <h4>Add New Product</h4>\n      </div> \n      <br> \n      <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Category</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.category\" placeholder=\"Product Category\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n       <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Name</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.name\" placeholder=\"Product Name\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n      <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Price</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.price\" placeholder=\"Product Price\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n      <br>\n      <div class=\"row\">\n          <div >\n            <button (click)=\"addProduct()\" class=\"button buttonBlue\">Save</button>\n            <button (click)=\"cancel()\" class=\"button buttonBlue\">Cancel</button>\n          </div>\n      </div>\n      <br>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-add/product-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.productData = { category: '', name: '', description: '', price: 0 };
    }
    ProductAddComponent.prototype.ngOnInit = function () {
    };
    ProductAddComponent.prototype.addProduct = function () {
        var _this = this;
        this.productService.addProduct(this.productData).subscribe(function (result) {
            _this.router.navigate(['/product']);
        }, function (err) {
            console.log(err);
        });
    };
    ProductAddComponent.prototype.cancel = function () {
        this.router.navigate(['/product']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductAddComponent.prototype, "productData", void 0);
    ProductAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product/product-add/product-add.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div style=\"text-align:center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <h4>Product Details</h4>\n        <div *ngIf=\"product\" class=\"baseCss\">\n          <table class=\"table\">\n            <tbody>\n                <tr>\n                  <td>Id</td>\n                  <td>{{product.id}}</td>\n                </tr>\n                <tr>\n                  <td>Category</td>\n                  <td>{{product.category}}</td>\n                </tr>\n                <tr>\n                  <td>Name</td>\n                  <td>{{product.name}}</td>\n                </tr>\n                <tr>\n                  <td>Price</td>\n                  <td>{{product.price}}</td>\n                </tr>\n            </tbody>\n          </table>\n        </div>\n        <p><button (click)=\"products()\" class=\"button buttonBlue\"> Go to Product List </button></p>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/product.service */ "./src/app/product.service.ts");




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProduct(this.route.snapshot.params['id']).subscribe(function (data) {
            console.log(data);
            _this.product = data;
        });
    };
    ProductDetailComponent.prototype.products = function () {
        this.router.navigate(['/product']);
    };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product/product-detail/product-detail.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product-home/product-home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-home/product-home.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1ob21lL3Byb2R1Y3QtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-home/product-home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n    <div class=\"container\">\n      <div class=\"row\">\n          <p><button (click)=\"products()\" class=\"button buttonBlue\"> View Product List </button></p>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-home/product-home.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHomeComponent", function() { return ProductHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductHomeComponent = /** @class */ (function () {
    function ProductHomeComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ProductHomeComponent.prototype.ngOnInit = function () {
        this.products();
    };
    ProductHomeComponent.prototype.products = function () {
        this.router.navigate(['/product']);
    };
    ProductHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-home',
            template: __webpack_require__(/*! ./product-home.component.html */ "./src/app/product/product-home/product-home.component.html"),
            styles: [__webpack_require__(/*! ./product-home.component.css */ "./src/app/product/product-home/product-home.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductHomeComponent);
    return ProductHomeComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycard {\n    width: 300px;\n  }\n  .width1200 {\n    width: 1000px;\n    background-color: #008CBA;\n  }\n  .example-header-image {\n    background-image: url('/assets/img/human.png');\n    background-size: cover;\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDhDQUE4QztJQUM5QyxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNhcmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAud2lkdGgxMjAwIHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XG4gIH1cbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2h1bWFuLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAiXX0= */"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"container\">\n      <div class=\"row\">\n          Welcome {{loginUserName}}\n      </div>     \n      <div class=\"row\">\n          <h4>Customer List</h4>\n      </div> \n\n      <mat-card>\n        <mat-tab-group [selectedIndex]=\"0\">\n          <mat-tab label=\"Breakfast\">\n            <h3>Breakfast option</h3>\n            <p>Toast /w peanut butter</p>\n          </mat-tab>\n          <mat-tab label=\"Lunch\">\n            <h3>Lunch option</h3>\n            <p>Club sandwich</p>\n          </mat-tab>\n          <mat-tab label=\"Customer\">\n\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"20px\" fxLayout.md=\"column\">\n              <mat-card class=\"flex-item mycard\" *ngFor=\"let p of [10,20,30,40,50,60,70,80], let i = index\">\n                    <mat-card-header>\n                      <div mat-card-avatar class=\"example-header-image\"></div>\n                      <mat-card-title>Kumar Raj</mat-card-title>\n                      <mat-card-subtitle>\n                          <p> Male, {{i}}, {{p}}</p>\n                          <p> member since {{i}}</p>\n                      </mat-card-subtitle>\n                    </mat-card-header>\n                    <mat-card-actions>\n                      <button mat-button>LIKE</button>\n                      <button mat-button>SHARE</button>\n                    </mat-card-actions>\n              </mat-card>\n\n              <mat-card class=\"example-card\" *ngFor=\"let p of products\">\n                    <mat-card-header>\n                      <div mat-card-avatar class=\"example-header-image\"></div>\n                      <mat-card-title>{{p.firstName}} {{p.lastName}}</mat-card-title>\n                      <mat-card-subtitle>\n                          <p> {{p.gender}}, {{p.age}}, {{p.city}}</p>\n                          <p> member since {{p.startDate}}</p>\n                      </mat-card-subtitle>\n                    </mat-card-header>\n                    <mat-card-actions>\n                      <button mat-button>LIKE</button>\n                      <button mat-button>SHARE</button>\n                    </mat-card-actions>\n              </mat-card>\n\n              </div>\n              <br>\n                <div class=\"row\">\n                    <div >\n                    <button (click)=\"refresh()\" class=\"button buttonBlue\">Refresh</button>\n                    &nbsp;&nbsp;&nbsp;\n                    <button (click)=\"add()\" class=\"button buttonBlue\">Add product</button>\n                    </div>\n                </div>\n          </mat-tab>\n        </mat-tab-group>\n      </mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.products = [];
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductListComponent.prototype.getLoginUserName = function () {
        var _this = this;
        this.loginUserName = "";
        this.productService.getLoginUserName().subscribe(function (data) {
            _this.loginUserName = data;
        });
    };
    ProductListComponent.prototype.add = function () {
        this.router.navigate(['/product-add']);
    };
    ProductListComponent.prototype.edit = function (id) {
        var myURL = '/product-update/' + id;
        console.log("ProductListComponent edit id :" + myURL + ":");
        this.router.navigate([myURL]);
    };
    ProductListComponent.prototype.delete = function (id) {
        var _this = this;
        this.productService.deleteProduct(id)
            .subscribe(function (res) {
            _this.getProducts();
        }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent.prototype.refresh = function () {
        this.router.navigate(['/product']);
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product/product-list/product-list.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/product-update/product-update.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/product-update/product-update.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC11cGRhdGUvcHJvZHVjdC11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product-update/product-update.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-update/product-update.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n    <div class=\"container\">\n      <div class=\"row\">\n          <h4>Product Modification</h4>\n      </div> \n      <br> \n      <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Category</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.category\" placeholder=\"Product Category\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n       <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Name</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.name\" placeholder=\"Product Name\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n      <div class=\"divRow\">\n        <div class=\"divCell1\"><p></p></div>\n        <div class=\"divCell2\"><p>Price</p></div>\n        <div class=\"divCell3\">\n          <input [(ngModel)]=\"productData.price\" placeholder=\"Product Price\"/>\n        </div>\n        <div class=\"divCell4\"><p></p></div>\n      </div>\n      <br>\n      <input type=hidden [(ngModel)]=\"productData.id\"/>\n      <div class=\"row\">\n          <div >\n            <button (click)=\"updateProduct()\" class=\"button buttonBlue\">Save</button>\n            <button (click)=\"cancel()\" class=\"button buttonBlue\">Cancel</button>\n          </div>\n      </div>\n      <br>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-update/product-update.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-update/product-update.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateComponent", function() { return ProductUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductUpdateComponent = /** @class */ (function () {
    function ProductUpdateComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.productData = { id: 0, category: '', name: '', description: '', price: 0 };
    }
    ProductUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        console.log("ProductUpdateComponent ngOnInit id: " + id);
        this.productService.getProduct(id).subscribe(function (data) {
            console.log("ProductUpdateComponent ngOnInit getProduct: " + data);
            _this.productData = data;
        });
    };
    ProductUpdateComponent.prototype.updateProduct = function () {
        var _this = this;
        this.productService.updateProduct(this.route.snapshot.params['id'], this.productData).subscribe(function (result) {
            _this.router.navigate(['/product']);
        }, function (err) {
            console.log(err);
        });
    };
    ProductUpdateComponent.prototype.cancel = function () {
        this.router.navigate(['/product']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductUpdateComponent.prototype, "productData", void 0);
    ProductUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-update',
            template: __webpack_require__(/*! ./product-update.component.html */ "./src/app/product/product-update/product-update.component.html"),
            styles: [__webpack_require__(/*! ./product-update.component.css */ "./src/app/product/product-update/product-update.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductUpdateComponent);
    return ProductUpdateComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product/product-add/product-add.component.ts");
/* harmony import */ var _product_update_product_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-update/product-update.component */ "./src/app/product/product-update/product-update.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product/product-detail/product-detail.component.ts");
/* harmony import */ var _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-home/product-home.component */ "./src/app/product/product-home/product-home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");













var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"], _product_update_product_update_component__WEBPACK_IMPORTED_MODULE_7__["ProductUpdateComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"], _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_9__["ProductHomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/service/common-app.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/common-app.service.ts ***!
  \***********************************************/
/*! exports provided: CommonAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAppService", function() { return CommonAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var CommonAppService = /** @class */ (function () {
    // ----- Customerion time: it is already inside localhost:9080, so the url should be empty, otherwise, it will bring CORS error
    //webSericeURL = "";
    // Lets allways keep for Production time....
    function CommonAppService(http) {
        this.http = http;
        //To access API Gateway. The value will be initialized during ngOnInit
        this.apiGatewayURL = "http://localhost:9091";
        this.apiGatewayURL2 = "http://localhost:9092";
        this.apiGatewayURL1 = "http://fyre.wealthcare.api.9.20.194.143.nip.io";
        /////////// The URL to acess springboot apis from angular 
        // ----- Developement time: when running via ng serve, it can point to localhost:9080
        this.webSericeURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].webSericeURL;
    }
    CommonAppService.prototype.ngOnInit = function () {
        console.log("CommonAppService  ngOnInit 1.1: ");
        this.initApiGatewayURL();
        console.log("CommonAppService  ngOnInit 2.2: ");
    };
    CommonAppService.prototype.initApiGatewayURL = function () {
        var _this = this;
        console.log("CommonAppService  loadApiGatewayURL 1: ");
        return this.fetchApiGatewayURL().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (apiResponse) {
            console.log("CommonAppService  loadApiGatewayURL 2:  " + _this.apiGatewayURL);
            _this.apiGatewayURL = apiResponse.url;
            console.log("CommonAppService  loadApiGatewayURL 3: " + _this.apiGatewayURL);
        }));
    };
    CommonAppService.prototype.getCusCus = function () {
        var _this = this;
        console.log("CommonAppService ----> getCusCus 1 : " + this.apiGatewayURL);
        return this.initApiGatewayURL().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (apiResponse) {
            //Store this end point for future reference..
            console.log("CommonAppService ----> getCusCus 2 : " + _this.apiGatewayURL);
            console.log("CommonAppService ----> getCusCus 2: Before callling : " + _this.apiGatewayURL + '/user/api/customer');
            return _this.http.get(_this.apiGatewayURL + '/user/api/customer', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(_this.extractData));
        }));
    };
    CommonAppService.prototype.fetchApiGatewayURL = function () {
        console.log("fetchApiGatewayURL : webSericeURL URL : " + this.webSericeURL);
        return this.http.get(this.webSericeURL + '/api/apiServiceURL');
    };
    CommonAppService.prototype.getApiGatewayURL = function () {
        console.log("getApiGatewayURL URL 1: " + this.apiGatewayURL);
        if (this.apiGatewayURL == "1111") {
            console.log("getApiGatewayURL URL : before initApiGatewayURL");
            this.initApiGatewayURL();
            console.log("getApiGatewayURL URL : after initApiGatewayURL");
            console.log("getApiGatewayURL URL 2: " + this.apiGatewayURL);
        }
        console.log("getApiGatewayURL URL 3: " + this.apiGatewayURL);
        return this.apiGatewayURL;
    };
    CommonAppService.prototype.getApiGatewayURL2 = function () {
        return this.apiGatewayURL2;
    };
    CommonAppService.prototype.getHttpHeaders = function () {
        return httpOptions;
    };
    CommonAppService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CommonAppService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    CommonAppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommonAppService);
    return CommonAppService;
}());



/***/ }),

/***/ "./src/app/service/common-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/common-data.service.ts ***!
  \************************************************/
/*! exports provided: CommonDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDataService", function() { return CommonDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonDataService = /** @class */ (function () {
    function CommonDataService() {
    }
    CommonDataService.prototype.getCountries = function () {
        return [
            { id: 'IN', name: 'India' },
            { id: 'US', name: 'USA' },
            { id: 'EU', name: 'Europe' },
            { id: 'UK', name: 'United Kingdom' }
        ];
    };
    CommonDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonDataService);
    return CommonDataService;
}());



/***/ }),

/***/ "./src/app/service/customer.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/customer.service.ts ***!
  \*********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-app.service */ "./src/app/service/common-app.service.ts");





var CustomerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomerService, _super);
    function CustomerService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    CustomerService.prototype.getAll = function () {
        this.getCusCus();
        return this.http.get(this.getURL(), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    CustomerService.prototype.getById = function (id) {
        return this.http.get(this.getURL() + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    CustomerService.prototype.add = function (mainData) {
        console.log("add ---> " + JSON.stringify(mainData));
        return this.http.post(this.getURL(), JSON.stringify(mainData), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (product) { return console.log("added  w/ id=" + product.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add')));
    };
    CustomerService.prototype.update = function (id, mainData) {
        return this.http.put(this.getURL(), JSON.stringify(mainData), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated  id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    CustomerService.prototype.delete = function (id) {
        return this.http.delete(this.getURL() + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted  id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    CustomerService.prototype.getURL = function () {
        return this.getApiGatewayURL() + '/user/api/customer/';
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}(_common_app_service__WEBPACK_IMPORTED_MODULE_4__["CommonAppService"]));



/***/ }),

/***/ "./src/app/service/goal.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/goal.service.ts ***!
  \*****************************************/
/*! exports provided: GoalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalService", function() { return GoalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-app.service */ "./src/app/service/common-app.service.ts");





var GoalService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GoalService, _super);
    function GoalService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    GoalService.prototype.getAll = function () {
        this.getCusCus();
        return this.http.get(this.getURL(), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    GoalService.prototype.getAllInfoByCustomerId = function (id) {
        this.getCusCus();
        return this.http.get(this.getURL() + "findInfoByCustomerId/" + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    GoalService.prototype.getInfoById = function (id) {
        return this.http.get(this.getURL() + "findInfo/" + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    GoalService.prototype.getById = function (id) {
        return this.http.get(this.getURL() + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    GoalService.prototype.add = function (mainData) {
        console.log("add ---> " + JSON.stringify(mainData));
        return this.http.post(this.getURL(), JSON.stringify(mainData), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (mainData) { return console.log("added  w/ id=" + mainData.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add')));
    };
    GoalService.prototype.update = function (id, mainData) {
        return this.http.put(this.getURL(), JSON.stringify(mainData), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated  id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    GoalService.prototype.delete = function (id) {
        return this.http.delete(this.getURL() + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted  id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    GoalService.prototype.getURL = function () {
        return this.getApiGatewayURL2() + '/fp/api/goal/';
    };
    GoalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GoalService);
    return GoalService;
}(_common_app_service__WEBPACK_IMPORTED_MODULE_4__["CommonAppService"]));



/***/ }),

/***/ "./src/app/service/investment.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/investment.service.ts ***!
  \***********************************************/
/*! exports provided: InvestmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentService", function() { return InvestmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-app.service */ "./src/app/service/common-app.service.ts");





var InvestmentService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvestmentService, _super);
    function InvestmentService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    InvestmentService.prototype.getAll = function () {
        this.getCusCus();
        return this.http.get(this.getURL(), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    InvestmentService.prototype.getAllByGoalId = function (id) {
        this.getCusCus();
        return this.http.get(this.getURL() + "findByGoalId/" + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    InvestmentService.prototype.getById = function (id) {
        return this.http.get(this.getURL() + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    InvestmentService.prototype.add = function (mainData) {
        console.log("add ---> " + JSON.stringify(mainData));
        return this.http.post(this.getURL(), JSON.stringify(mainData), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (product) { return console.log("added  w/ id=" + product.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add')));
    };
    InvestmentService.prototype.update = function (id, mainData) {
        return this.http.put(this.getURL(), JSON.stringify(mainData), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated  id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    InvestmentService.prototype.delete = function (id) {
        return this.http.delete(this.getURL() + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted  id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    InvestmentService.prototype.getURL = function () {
        return this.getApiGatewayURL2() + '/fp/api/investment/';
    };
    InvestmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InvestmentService);
    return InvestmentService;
}(_common_app_service__WEBPACK_IMPORTED_MODULE_4__["CommonAppService"]));



/***/ }),

/***/ "./src/app/service/wc-local-storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/wc-local-storage.service.ts ***!
  \*****************************************************/
/*! exports provided: WcLocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcLocalStorageService", function() { return WcLocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WcLocalStorageService = /** @class */ (function () {
    function WcLocalStorageService() {
    }
    //Customer Details
    WcLocalStorageService.prototype.putCustomerDetails = function (id, name) {
        this.put("Customer-Id", id);
        this.put("Customer-Name", name);
    };
    WcLocalStorageService.prototype.getCustomerId = function () {
        return this.getWithNullCheck("Customer-Id");
    };
    WcLocalStorageService.prototype.getCustomerName = function () {
        return this.getWithNullCheck("Customer-Name");
    };
    //WealthManager Details
    WcLocalStorageService.prototype.putWealthManagerId = function (id) {
        this.put("WealthManager-Id", id);
    };
    WcLocalStorageService.prototype.getWealthManagerId = function () {
        return this.getWithNullCheck("WealthManager-Id");
    };
    //JSON
    WcLocalStorageService.prototype.putJson = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    WcLocalStorageService.prototype.getJson = function (key) {
        var item = JSON.parse(localStorage.getItem(key));
        return item;
    };
    //Get, Put
    WcLocalStorageService.prototype.put = function (key, value) {
        localStorage.setItem(key, value);
    };
    WcLocalStorageService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    WcLocalStorageService.prototype.getWithNullCheck = function (key) {
        var value = this.get(key);
        if (value === null) {
            value = "";
        }
        return value;
    };
    //Clear
    WcLocalStorageService.prototype.clear = function () {
        localStorage.clear();
    };
    WcLocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WcLocalStorageService);
    return WcLocalStorageService;
}());



/***/ }),

/***/ "./src/app/service/wealthmanager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/wealthmanager.service.ts ***!
  \**************************************************/
/*! exports provided: WealthmanagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WealthmanagerService", function() { return WealthmanagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-app.service */ "./src/app/service/common-app.service.ts");





var WealthmanagerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WealthmanagerService, _super);
    function WealthmanagerService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    WealthmanagerService.prototype.getAll = function () {
        this.getCusCus();
        return this.http.get(this.getURL(), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    WealthmanagerService.prototype.getById = function (id) {
        return this.http.get(this.getURL() + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    WealthmanagerService.prototype.add = function (mainData) {
        console.log("add ---> " + JSON.stringify(mainData));
        return this.http.post(this.getURL(), JSON.stringify(mainData), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (product) { return console.log("added  w/ id=" + product.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add')));
    };
    WealthmanagerService.prototype.update = function (id, mainData) {
        return this.http.put(this.getURL(), JSON.stringify(mainData), this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated  id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    WealthmanagerService.prototype.delete = function (id) {
        return this.http.delete(this.getURL() + id, this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted  id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    WealthmanagerService.prototype.getURL = function () {
        return this.getApiGatewayURL() + '/user/api/wealthmanager/';
    };
    WealthmanagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WealthmanagerService);
    return WealthmanagerService;
}(_common_app_service__WEBPACK_IMPORTED_MODULE_4__["CommonAppService"]));



/***/ }),

/***/ "./src/app/wealthmanager/wealthmanager.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/wealthmanager/wealthmanager.module.ts ***!
  \*******************************************************/
/*! exports provided: WealthmanagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WealthmanagerModule", function() { return WealthmanagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _wm_homepage_wm_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wm-homepage/wm-homepage.component */ "./src/app/wealthmanager/wm-homepage/wm-homepage.component.ts");
/* harmony import */ var _wm_customer_wm_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wm-customer/wm-customer.component */ "./src/app/wealthmanager/wm-customer/wm-customer.component.ts");
/* harmony import */ var _wm_financialplan_wm_financialplan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wm-financialplan/wm-financialplan.component */ "./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.ts");
/* harmony import */ var _wm_financialplan_detail_wm_financialplan_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wm-financialplan-detail/wm-financialplan-detail.component */ "./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.ts");
/* harmony import */ var _wm_financialplan_goal_add_wm_financialplan_goal_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wm-financialplan-goal-add/wm-financialplan-goal-add.component */ "./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.ts");
/* harmony import */ var _wm_financialplan_investment_add_wm_financialplan_investment_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wm-financialplan-investment-add/wm-financialplan-investment-add.component */ "./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.ts");
/* harmony import */ var _wm_portfolio_wm_portfolio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wm-portfolio/wm-portfolio.component */ "./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.ts");
/* harmony import */ var _wm_profile_wm_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wm-profile/wm-profile.component */ "./src/app/wealthmanager/wm-profile/wm-profile.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");





















var WealthmanagerModule = /** @class */ (function () {
    function WealthmanagerModule() {
    }
    WealthmanagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_wm_homepage_wm_homepage_component__WEBPACK_IMPORTED_MODULE_8__["WmHomepageComponent"], _wm_customer_wm_customer_component__WEBPACK_IMPORTED_MODULE_9__["WmCustomerComponent"], _wm_financialplan_wm_financialplan_component__WEBPACK_IMPORTED_MODULE_10__["WmFinancialplanComponent"],
                _wm_financialplan_detail_wm_financialplan_detail_component__WEBPACK_IMPORTED_MODULE_11__["WmFinancialplanDetailComponent"], _wm_financialplan_goal_add_wm_financialplan_goal_add_component__WEBPACK_IMPORTED_MODULE_12__["WmFinancialplanGoalAddComponent"], _wm_financialplan_investment_add_wm_financialplan_investment_add_component__WEBPACK_IMPORTED_MODULE_13__["WmFinancialplanInvestmentAddComponent"],
                _wm_portfolio_wm_portfolio_component__WEBPACK_IMPORTED_MODULE_14__["WmPortfolioComponent"], _wm_profile_wm_profile_component__WEBPACK_IMPORTED_MODULE_15__["WmProfileComponent"]],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]
            ]
        })
    ], WealthmanagerModule);
    return WealthmanagerModule;
}());



/***/ }),

/***/ "./src/app/wealthmanager/wm-customer/wm-customer.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/wealthmanager/wm-customer/wm-customer.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYWx0aG1hbmFnZXIvd20tY3VzdG9tZXIvd20tY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/wealthmanager/wm-customer/wm-customer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/wealthmanager/wm-customer/wm-customer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <br>\n    <br>\n    <strong>CUSTOMER</strong> > {{customerName}} (ID: {{customerId}})\n  <br>\n  <br>\n  <div style=\"padding:12px; background:#f2f2f2;\">\n    <div class=\"mycard width300\" *ngFor=\"let p of mainData\">  \n      <div style=\"padding:0px 0px 5px 10px;\">\n        <mat-card class=\"width300\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"my-card-header-image-male\" *ngIf=\"p.gender == 'Male'\"></div>\n          <div mat-card-avatar class=\"my-card-header-image-female\" *ngIf=\"p.gender == 'Female'\"></div>\n          <mat-card-title><strong>{{p.firstName}} {{p.lastName}}</strong></mat-card-title>\n          <a (click)=\"selectCustomer(p.id, p.firstName)\">\n              <img border=\"0\" alt=\"Select\" src=\"../../assets/img/button-edit.png\" width=\"20\" height=\"20\">\n          </a>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            {{p.gender}}, {{p.age}}, {{p.city}}\n            <BR>\n            member since {{p.startDateString}}\n          </p>\n        </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"padding:12px; background:#f2f2f2;\">\n    <div class=\"mycard width300\" *ngFor=\"let p of [10,20,30,40,50,60,70,80,90,91,92,93], let i = index\">  \n      <div style=\"padding:0px 0px 5px 10px;\">\n        <mat-card class=\"width300\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"my-card-header-image-male\"></div>\n            <mat-card-title><strong>Shiba Inu {{i}}</strong></mat-card-title>\n            <a (click)=\"selectCustomer(i,i)\">\n                <img border=\"0\" alt=\"Edit\" src=\"../../assets/img/button-edit.png\" width=\"20\" height=\"20\">\n            </a>\n          </mat-card-header>\n          <mat-card-content>\n            <p>\n              Male, {{i}}, {{p}} \n              <BR>\n              member since {{i}}\n            </p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/wealthmanager/wm-customer/wm-customer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/wealthmanager/wm-customer/wm-customer.component.ts ***!
  \********************************************************************/
/*! exports provided: WmCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmCustomerComponent", function() { return WmCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/customer.service */ "./src/app/service/customer.service.ts");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WmCustomerComponent = /** @class */ (function () {
    function WmCustomerComponent(customerService, wcLocalStorageService, router) {
        this.customerService = customerService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.router = router;
        this.mainData = [];
    }
    WmCustomerComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    WmCustomerComponent.prototype.getAll = function () {
        var _this = this;
        this.mainData = [];
        this.customerService.getAll().subscribe(function (data) {
            _this.mainData = data;
        });
    };
    WmCustomerComponent.prototype.selectCustomer = function (id, name) {
        console.log("Slect customer id-> " + id);
        console.log("Slect customer name-> " + name);
        this.wcLocalStorageService.putCustomerDetails(id, name);
        var myURL = '/wealthmanager/financialplan';
        this.router.navigate([myURL]);
    };
    WmCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wm-customer',
            template: __webpack_require__(/*! ./wm-customer.component.html */ "./src/app/wealthmanager/wm-customer/wm-customer.component.html"),
            styles: [__webpack_require__(/*! ./wm-customer.component.css */ "./src/app/wealthmanager/wm-customer/wm-customer.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WmCustomerComponent);
    return WmCustomerComponent;
}());



/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYWx0aG1hbmFnZXIvd20tZmluYW5jaWFscGxhbi1kZXRhaWwvd20tZmluYW5jaWFscGxhbi1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n  <br>\n    <br>\n    <strong>CUSTOMER</strong> > {{customerName}} (ID: {{customerId}})\n  <br>\n  <br>\n  <br>\n  <div style=\"padding:12px; background:#f2f2f2;\">\n    <div class=\"mycard width1000\">  \n      <div style=\"padding:0px 0px 5px 10px;\">\n        <mat-card class=\"width1000\">\n          <mat-card-header>\n              <mat-card-title><span class=\"textStyleType2\">GOAL # {{mainData.goalReference}} : {{mainData.goalDesc}} </span> <span class=\"textStyleType1\">( {{mainData.goalAchievementString}} )</span></mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div class=\"row width1000\">\n              <div class=\"col-sm-2\"><span> <strong>Target Date : </strong>{{mainData.targetDate}}</span></div>\n              <div class=\"col-sm-2\"><span><strong>Target Amount :  {{mainData.currency}}</strong>{{mainData.targetAmount}}</span></div>\n              <div class=\"col-sm-2\"><span><strong>Total Investment : </strong>{{mainData.totalInvestmentAmount}}  {{mainData.currency}}</span></div>\n              <div class=\"col-sm-2\"><span><strong>Investment Current Value : </strong>{{mainData.investmentCurrentValue}} {{mainData.currency}}</span></div>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"floatClear row\">\n    <br>\n    <br>\n      <button title=\"Add Investment\" (click)=\"addInvestment(mainData.id)\" class=\"button buttonBlue\">Add Investment</button>\n      <button title=\"Delete Goal\" (click)=\"deleteGoal(mainData.id)\" class=\"button buttonBlue\">Delete Goal</button>\n      <button title=\"Back\" (click)=\"goback(mainData.id)\" class=\"button buttonBlue\">Back</button>\n    <br>\n    <br>\n    <br>\n  </div>\n\n  <div class=\"floatClear row divCenter1000\">\n    <div style=\"width:1000px; height:320px; overflow: auto;text-align: center;\"> \n      <table id=\"tableType1\" class=\"width900\">\n        <thead>\n          <tr>\n              <th>Investment Date</th>\n              <th>Investment Amount</th>\n              <th>Stocks</th>\n              <th>Mutual Fund</th>\n              <th>Fixed Deposit</th>\n              <th>Current Value</th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let p of mainData.investments\">\n              <td>{{p.investmentDate}}</td>\n              <td>{{p.investmentAmount}}</td>\n              <td>{{p.stockAmount}} <br> <span class=\"textStyleType3\"> {{p.currentValueStockAmountString}}</span></td>\n              <td>{{p.mutualFundAmount}} <br> <span class=\"textStyleType3\">{{p.currentValueMutualFundAmountString}}</span></td>\n              <td>{{p.fixedDepositAmount}} <br> <span class=\"textStyleType3\">{{p.currentValueFixedDepositAmountString}}</span></td>\n              <td>{{p.currentValueTotalString}} <br> <span class=\"textStyleType3\">{{p.currentValueTotalComments}}</span></td>\n            </tr>\n        </tbody>\n      </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WmFinancialplanDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmFinancialplanDetailComponent", function() { return WmFinancialplanDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_goal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/goal.service */ "./src/app/service/goal.service.ts");
/* harmony import */ var _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/common-data.service */ "./src/app/service/common-data.service.ts");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");






var WmFinancialplanDetailComponent = /** @class */ (function () {
    function WmFinancialplanDetailComponent(goalService, commonDataService, wcLocalStorageService, route, router) {
        this.goalService = goalService;
        this.commonDataService = commonDataService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.route = route;
        this.router = router;
        this.mainData = [];
    }
    WmFinancialplanDetailComponent.prototype.ngOnInit = function () {
        this.loadSessionData();
        this.loadById();
    };
    WmFinancialplanDetailComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
        this.wealthManagerId = this.wcLocalStorageService.getWealthManagerId();
    };
    WmFinancialplanDetailComponent.prototype.loadById = function () {
        var _this = this;
        console.log("load by id ---------->" + this.route.snapshot.params['id']);
        this.goalService.getInfoById(this.route.snapshot.params['id']).subscribe(function (data) {
            _this.mainData = data;
        });
    };
    WmFinancialplanDetailComponent.prototype.goback = function () {
        this.router.navigate(['/wealthmanager/financialplan']);
    };
    WmFinancialplanDetailComponent.prototype.addInvestment = function (id) {
        var myURL = '/wealthmanager/investmentAdd/' + id;
        this.router.navigate([myURL]);
    };
    WmFinancialplanDetailComponent.prototype.deleteGoal = function (id) {
        var _this = this;
        this.goalService.delete(id)
            .subscribe(function (res) {
            _this.goback();
        }, function (err) {
            console.log(err);
        });
    };
    WmFinancialplanDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wm-financialplan-detail',
            template: __webpack_require__(/*! ./wm-financialplan-detail.component.html */ "./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.html"),
            styles: [__webpack_require__(/*! ./wm-financialplan-detail.component.css */ "./src/app/wealthmanager/wm-financialplan-detail/wm-financialplan-detail.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_goal_service__WEBPACK_IMPORTED_MODULE_3__["GoalService"], _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WmFinancialplanDetailComponent);
    return WmFinancialplanDetailComponent;
}());



/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYWx0aG1hbmFnZXIvd20tZmluYW5jaWFscGxhbi1nb2FsLWFkZC93bS1maW5hbmNpYWxwbGFuLWdvYWwtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n    <br>\n    <strong>CUSTOMER</strong> > {{customerName}} (ID: {{customerId}})\n  <br>\n  <br>\n  <br>\n  <div class=\"screenHeading\">\n      <span>Add New Goal</span>\n  </div> \n  <br> \n  <div class=\"divCenter500\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Goal Reference</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.goalReference\" placeholder=\"Goal Reference\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Description</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.goalDesc\" placeholder=\"Description\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Target Date</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.targetDate\" placeholder=\"Target Date\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Target Amount</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.targetAmount\" placeholder=\"Target Amount\"/>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <input type=hidden [(ngModel)]=\"mainData.wcCustomerId\"/>\n      <input type=hidden [(ngModel)]=\"mainData.wcWealthManagerId\"/>\n      <button (click)=\"save()\" class=\"button buttonBlue\">Save</button>\n      <button (click)=\"cancel()\" class=\"button buttonBlue\">Cancel</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.ts ***!
  \************************************************************************************************/
/*! exports provided: WmFinancialplanGoalAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmFinancialplanGoalAddComponent", function() { return WmFinancialplanGoalAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_goal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/goal.service */ "./src/app/service/goal.service.ts");
/* harmony import */ var _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/common-data.service */ "./src/app/service/common-data.service.ts");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");






var WmFinancialplanGoalAddComponent = /** @class */ (function () {
    function WmFinancialplanGoalAddComponent(goalService, commonDataService, wcLocalStorageService, route, router) {
        this.goalService = goalService;
        this.commonDataService = commonDataService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.route = route;
        this.router = router;
        this.mainData = { wcCustomerId: 0, wcWealthManagerId: 0, goalReference: '', goalDesc: '', targetDate: '2025-12-25', targetAmount: 100, };
    }
    WmFinancialplanGoalAddComponent.prototype.ngOnInit = function () {
        this.loadSessionData();
        this.mainData.wcCustomerId = this.customerId;
        this.mainData.wcWealthManagerId = this.wealthManagerId;
    };
    WmFinancialplanGoalAddComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
        this.wealthManagerId = this.wcLocalStorageService.getWealthManagerId();
    };
    WmFinancialplanGoalAddComponent.prototype.save = function () {
        var _this = this;
        this.goalService.add(this.mainData).subscribe(function (result) {
            _this.router.navigate(['/wealthmanager/financialplan']);
        }, function (err) {
            console.log(err);
        });
    };
    WmFinancialplanGoalAddComponent.prototype.cancel = function () {
        this.router.navigate(['/wealthmanager/financialplan']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WmFinancialplanGoalAddComponent.prototype, "mainData", void 0);
    WmFinancialplanGoalAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wm-financialplan-goal-add',
            template: __webpack_require__(/*! ./wm-financialplan-goal-add.component.html */ "./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.html"),
            styles: [__webpack_require__(/*! ./wm-financialplan-goal-add.component.css */ "./src/app/wealthmanager/wm-financialplan-goal-add/wm-financialplan-goal-add.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_goal_service__WEBPACK_IMPORTED_MODULE_3__["GoalService"], _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WmFinancialplanGoalAddComponent);
    return WmFinancialplanGoalAddComponent;
}());



/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYWx0aG1hbmFnZXIvd20tZmluYW5jaWFscGxhbi1pbnZlc3RtZW50LWFkZC93bS1maW5hbmNpYWxwbGFuLWludmVzdG1lbnQtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n    <br>\n    <strong>CUSTOMER</strong> > {{customerName}} (ID: {{customerId}})\n  <br>\n  <br>\n  <br>\n  <div class=\"screenHeading\">\n      <span>Add New Investment</span>\n  </div> \n  <br> \n  <div class=\"divCenter500\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Goal Reference</p></div>\n      <div class=\"col-sm-5\">{{mainData.goalReference}}</div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Description</p></div>\n      <div class=\"col-sm-5\">\n      <div class=\"col-sm-5\">{{mainData.desc}}</div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Investment Date</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.investmentDate\" placeholder=\"Investment Date\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Investment Amount</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.investmentAmount\" placeholder=\"Investment Amount\"/>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n        <input type=hidden [(ngModel)]=\"mainData.wcGoalId\"/>\n        <button (click)=\"save()\" class=\"button buttonBlue\">Save</button>\n        <button (click)=\"cancel()\" class=\"button buttonBlue\">Cancel</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: WmFinancialplanInvestmentAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmFinancialplanInvestmentAddComponent", function() { return WmFinancialplanInvestmentAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_investment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/investment.service */ "./src/app/service/investment.service.ts");
/* harmony import */ var _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/common-data.service */ "./src/app/service/common-data.service.ts");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");






var WmFinancialplanInvestmentAddComponent = /** @class */ (function () {
    function WmFinancialplanInvestmentAddComponent(investmentService, commonDataService, wcLocalStorageService, route, router) {
        this.investmentService = investmentService;
        this.commonDataService = commonDataService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.route = route;
        this.router = router;
        this.mainData = { wcGoalId: 0, investmentDate: '2019-10-17', investmentAmount: 100, wcWealthManagerId: 0 };
    }
    WmFinancialplanInvestmentAddComponent.prototype.ngOnInit = function () {
        this.loadSessionData();
        this.mainData.wcGoalId = this.route.snapshot.params['id'];
    };
    WmFinancialplanInvestmentAddComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
        this.wealthManagerId = this.wcLocalStorageService.getWealthManagerId();
    };
    WmFinancialplanInvestmentAddComponent.prototype.save = function () {
        var _this = this;
        this.investmentService.add(this.mainData).subscribe(function (result) {
            _this.router.navigate(['/wealthmanager/financialplanDetail/' + +_this.mainData.wcGoalId]);
        }, function (err) {
            console.log(err);
        });
    };
    WmFinancialplanInvestmentAddComponent.prototype.cancel = function () {
        this.router.navigate(['/wealthmanager/financialplanDetail/' + this.mainData.wcGoalId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WmFinancialplanInvestmentAddComponent.prototype, "mainData", void 0);
    WmFinancialplanInvestmentAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wm-financialplan-investment-add',
            template: __webpack_require__(/*! ./wm-financialplan-investment-add.component.html */ "./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.html"),
            styles: [__webpack_require__(/*! ./wm-financialplan-investment-add.component.css */ "./src/app/wealthmanager/wm-financialplan-investment-add/wm-financialplan-investment-add.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_investment_service__WEBPACK_IMPORTED_MODULE_3__["InvestmentService"], _service_common_data_service__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WmFinancialplanInvestmentAddComponent);
    return WmFinancialplanInvestmentAddComponent;
}());



/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYWx0aG1hbmFnZXIvd20tZmluYW5jaWFscGxhbi93bS1maW5hbmNpYWxwbGFuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <br>\n    <br>\n    <strong>CUSTOMER</strong> > {{customerName}} (ID: {{customerId}})\n  <br>\n  <br>\n  <button title=\"Add Goal\" (click)=\"addGoal()\" class=\"button buttonBlue\">Add Goal</button>\n  <br>\n  <br>\n  <div style=\"padding:12px; background:#f2f2f2;\">\n    <div class=\"mycard width900\" *ngFor=\"let p of mainData\">  \n      <div style=\"padding:0px 0px 5px 10px;\">\n        <mat-card class=\"width900\">\n          <mat-card-header>\n            <mat-card-title><span class=\"textStyleType2\">GOAL # {{p.goalReference}} : {{p.goalDesc}}</span> <span class=\"textStyleType1\">( {{p.goalAchievementString}} )</span></mat-card-title>\n            <a (click)=\"addInvestment(p.id)\">\n                <img border=\"0\" alt=\"Add Investment\" src=\"../../assets/img/button-add.png\" width=\"20\" height=\"20\">\n            </a>\n            <a (click)=\"selectGoal(p.id)\">\n                <img border=\"0\" alt=\"Goal Details\" src=\"../../assets/img/button-edit.png\" width=\"20\" height=\"20\">\n            </a>\n            <a (click)=\"deleteGoal(p.id)\">\n                <img border=\"0\" alt=\"Edit\" src=\"../../assets/img/button-delete.png\" width=\"20\" height=\"20\">\n            </a>          \n          </mat-card-header>\n          <mat-card-content>\n            <div class=\"row width900\">\n              <div class=\"col-sm-2\"><span> <strong>Target Date : </strong>{{p.targetDate}}</span></div>\n              <div class=\"col-sm-2\"><span><strong>Target Amount :  {{p.currency}}</strong>{{p.targetAmount}}</span></div>\n              <div class=\"col-sm-2\"><span><strong>Total Investment : </strong>{{p.totalInvestmentAmount}}  {{p.currency}}</span></div>\n              <div class=\"col-sm-2\"><span><strong>Investment Current Value : </strong>{{p.investmentCurrentValue}} {{p.currency}}</span></div>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.ts ***!
  \******************************************************************************/
/*! exports provided: WmFinancialplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmFinancialplanComponent", function() { return WmFinancialplanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_goal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/goal.service */ "./src/app/service/goal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");





var WmFinancialplanComponent = /** @class */ (function () {
    function WmFinancialplanComponent(goalService, wcLocalStorageService, router) {
        this.goalService = goalService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.router = router;
        this.mainData = [];
    }
    WmFinancialplanComponent.prototype.ngOnInit = function () {
        this.loadSessionData();
        this.getAllInfoByCustomerId(this.customerId);
    };
    WmFinancialplanComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
        this.wealthManagerId = this.wcLocalStorageService.getWealthManagerId();
    };
    WmFinancialplanComponent.prototype.getAllInfoByCustomerId = function (id) {
        var _this = this;
        this.mainData = [];
        this.goalService.getAllInfoByCustomerId(id).subscribe(function (data) {
            _this.mainData = data;
        });
    };
    WmFinancialplanComponent.prototype.addInvestment = function (id) {
        var myURL = '/wealthmanager/investmentAdd/' + id;
        this.router.navigate([myURL]);
    };
    WmFinancialplanComponent.prototype.selectGoal = function (id) {
        var myURL = '/wealthmanager/financialplanDetail/' + id;
        this.router.navigate([myURL]);
    };
    WmFinancialplanComponent.prototype.addGoal = function () {
        var myURL = '/wealthmanager/goalAdd';
        this.router.navigate([myURL]);
    };
    WmFinancialplanComponent.prototype.deleteGoal = function (id) {
        var _this = this;
        this.goalService.delete(id)
            .subscribe(function (res) {
            _this.getAllInfoByCustomerId(_this.customerId);
        }, function (err) {
            console.log(err);
        });
    };
    WmFinancialplanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wm-financialplan',
            template: __webpack_require__(/*! ./wm-financialplan.component.html */ "./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.html"),
            styles: [__webpack_require__(/*! ./wm-financialplan.component.css */ "./src/app/wealthmanager/wm-financialplan/wm-financialplan.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_goal_service__WEBPACK_IMPORTED_MODULE_2__["GoalService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WmFinancialplanComponent);
    return WmFinancialplanComponent;
}());



/***/ }),

/***/ "./src/app/wealthmanager/wm-homepage/wm-homepage.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/wealthmanager/wm-homepage/wm-homepage.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYWx0aG1hbmFnZXIvd20taG9tZXBhZ2Uvd20taG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/wealthmanager/wm-homepage/wm-homepage.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/wealthmanager/wm-homepage/wm-homepage.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <br>\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n     <ul class=\"nav navbar-nav navbar-left\">\n          <li><img border=\"0\" src=\"../../assets/img/logo.png\" height=\"50\"></li>\n      </ul>\n     <ul class=\"nav navbar-nav navbar-left\">\n          <li><span class=\"navbar-brand text-left\">  Wealth Manager</span></li>\n      </ul>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><button (click)=\"gotoCustomer()\" class=\"button buttonBlue\">CUSTOMER</button></li>\n          <li><button (click)=\"gotoFinancialPlan()\" class=\"button buttonBlue\">FINANCIAL PLAN</button></li>\n          <li><button (click)=\"gotoPortfolio()\" class=\"button buttonBlue\">PORTFOLIO</button></li>\n          <li><button (click)=\"gotoProfile()\" class=\"button buttonBlue\">PROFILE</button></li>\n        </ul>\n    </div>    \n  </div>\n</nav>\n\n<!-- Container (Portfolio Section) -->\n<div id=\"customer\" class=\"container-fluid text-center bg-grey\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/wealthmanager/wm-homepage/wm-homepage.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/wealthmanager/wm-homepage/wm-homepage.component.ts ***!
  \********************************************************************/
/*! exports provided: WmHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmHomepageComponent", function() { return WmHomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WmHomepageComponent = /** @class */ (function () {
    function WmHomepageComponent(wcLocalStorageService, router) {
        this.wcLocalStorageService = wcLocalStorageService;
        this.router = router;
    }
    WmHomepageComponent.prototype.ngOnInit = function () {
        //TODO: to be removed
        this.wcLocalStorageService.putWealthManagerId(30001);
        this.loadSessionData();
    };
    WmHomepageComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
    };
    WmHomepageComponent.prototype.gotoFinancialPlan = function () {
        this.router.navigate(['/wealthmanager/financialplan']);
    };
    WmHomepageComponent.prototype.gotoPortfolio = function () {
        this.router.navigate(['/wealthmanager/portfolio']);
    };
    WmHomepageComponent.prototype.gotoProfile = function () {
        this.router.navigate(['/wealthmanager/profile']);
    };
    WmHomepageComponent.prototype.gotoCustomer = function () {
        this.router.navigate(['/wealthmanager/customer']);
    };
    WmHomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wm-homepage',
            template: __webpack_require__(/*! ./wm-homepage.component.html */ "./src/app/wealthmanager/wm-homepage/wm-homepage.component.html"),
            styles: [__webpack_require__(/*! ./wm-homepage.component.css */ "./src/app/wealthmanager/wm-homepage/wm-homepage.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WmHomepageComponent);
    return WmHomepageComponent;
}());



/***/ }),

/***/ "./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYWx0aG1hbmFnZXIvd20tcG9ydGZvbGlvL3dtLXBvcnRmb2xpby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.html":
/*!************************************************************************!*\
  !*** ./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\n  <br>\n    <br>\n    <strong>CUSTOMER</strong> > {{customerName}} (ID: {{customerId}})\n  <br>\n  <br>\n  <br>\n  <div class=\"screenHeading\">\n      <span>Customer Portfolio</span>\n  </div> \n  <br> \n  <div class=\"row divCenter1000\">\n    <div style=\"width:1000px; height:320px; overflow: auto;text-align: center;\"> \n      <table id=\"tableType1\" class=\"width900\">\n        <thead>\n          <tr>\n              <th>Goal Reference</th>\n              <th>Goal Desc</th>\n              <th>Investment Date</th>\n              <th>Investment Amount</th>\n              <th>Stocks</th>\n              <th>Mutual Fund</th>\n              <th>Fixed Deposit</th>\n              <th>Current Value</th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let t of mainData\">\n            <tr *ngFor=\"let p of t.investments\">\n            <td>{{t.goalReference}}</td>\n            <td>{{t.goalDesc}}</td>\n            <td>{{p.investmentDate}}</td>\n            <td>{{p.investmentAmount}}</td>\n            <td>{{p.stockAmount}} <br> <span class=\"textStyleType3\"> {{p.currentValueStockAmountString}}</span></td>\n            <td>{{p.mutualFundAmount}} <br> <span class=\"textStyleType3\">{{p.currentValueMutualFundAmountString}}</span></td>\n            <td>{{p.fixedDepositAmount}} <br> <span class=\"textStyleType3\">{{p.currentValueFixedDepositAmountString}}</span></td>\n            <td>{{p.currentValueTotalString}} <br> <span class=\"textStyleType3\">{{p.currentValueTotalComments}}</span></td>\n            </tr>\n          </ng-container> \n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.ts ***!
  \**********************************************************************/
/*! exports provided: WmPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmPortfolioComponent", function() { return WmPortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");
/* harmony import */ var src_app_service_goal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/goal.service */ "./src/app/service/goal.service.ts");





var WmPortfolioComponent = /** @class */ (function () {
    function WmPortfolioComponent(goalService, wcLocalStorageService, route, router) {
        this.goalService = goalService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.route = route;
        this.router = router;
        this.mainData = [];
    }
    WmPortfolioComponent.prototype.ngOnInit = function () {
        this.loadSessionData();
        this.getAllInfoByCustomerId(this.customerId);
    };
    WmPortfolioComponent.prototype.getAllInfoByCustomerId = function (id) {
        var _this = this;
        this.mainData = [];
        this.goalService.getAllInfoByCustomerId(id).subscribe(function (data) {
            _this.mainData = data;
        });
    };
    WmPortfolioComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
        this.wealthManagerId = this.wcLocalStorageService.getWealthManagerId();
    };
    WmPortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wm-portfolio',
            template: __webpack_require__(/*! ./wm-portfolio.component.html */ "./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./wm-portfolio.component.css */ "./src/app/wealthmanager/wm-portfolio/wm-portfolio.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_goal_service__WEBPACK_IMPORTED_MODULE_4__["GoalService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WmPortfolioComponent);
    return WmPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/wealthmanager/wm-profile/wm-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/wealthmanager/wm-profile/wm-profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYWx0aG1hbmFnZXIvd20tcHJvZmlsZS93bS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wealthmanager/wm-profile/wm-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/wealthmanager/wm-profile/wm-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n    <br>\n    <strong>CUSTOMER</strong> > {{customerName}} (ID: {{customerId}})\n  <br>\n  <br>\n  <br>\n  <div class=\"screenHeading\">\n      <span>Customer Profile</span>\n  </div> \n  <br> \n  <div class=\"divCenter500\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>First Name</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.firstName\" placeholder=\"First Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Last Name</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.lastName\" placeholder=\"Last Name\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Age</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.age\" placeholder=\"Age\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Gender</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n          <input type=\"radio\" value=\"Male\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Male\n          <input type=\"radio\" value=\"Female\" name=\"gender\" [ngModel]=\"mainData.gender\" required #gender=\"ngModel\"> Female\n        </p>    \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Email</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.emailId\" placeholder=\"Email\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Country</p></div>\n      <div class=\"col-sm-3\"><p>{{mainData.country}}</p></div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>City</p></div>\n      <div class=\"col-sm-5\">\n        <p>\n        <input [(ngModel)]=\"mainData.city\" placeholder=\"City\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\"><p>Income</p></div>\n      <div class=\"col-sm-5\">\n        <input [(ngModel)]=\"mainData.avgIncome\" placeholder=\"Income\"/>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n          <input type=hidden [(ngModel)]=\"mainData.id\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wealthmanager/wm-profile/wm-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/wealthmanager/wm-profile/wm-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: WmProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmProfileComponent", function() { return WmProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/customer.service */ "./src/app/service/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/wc-local-storage.service */ "./src/app/service/wc-local-storage.service.ts");





var WmProfileComponent = /** @class */ (function () {
    function WmProfileComponent(customerService, wcLocalStorageService, router) {
        this.customerService = customerService;
        this.wcLocalStorageService = wcLocalStorageService;
        this.router = router;
        this.mainData = [];
    }
    WmProfileComponent.prototype.ngOnInit = function () {
        this.loadSessionData();
        this.getAll();
    };
    WmProfileComponent.prototype.loadSessionData = function () {
        this.customerId = this.wcLocalStorageService.getCustomerId();
        this.customerName = this.wcLocalStorageService.getCustomerName();
        this.wealthManagerId = this.wcLocalStorageService.getWealthManagerId();
    };
    WmProfileComponent.prototype.getAll = function () {
        var _this = this;
        this.mainData = [];
        this.customerService.getById(this.customerId).subscribe(function (data) {
            _this.mainData = data;
        });
    };
    WmProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wm-profile',
            template: __webpack_require__(/*! ./wm-profile.component.html */ "./src/app/wealthmanager/wm-profile/wm-profile.component.html"),
            styles: [__webpack_require__(/*! ./wm-profile.component.css */ "./src/app/wealthmanager/wm-profile/wm-profile.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../common/css/common.css */ "./src/app/common/css/common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _service_wc_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["WcLocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WmProfileComponent);
    return WmProfileComponent;
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
    production: false,
    webSericeURL: "http://localhost:9090"
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

module.exports = __webpack_require__(/*! /Users/jeyagandhi/Gandhi/Projects/Apps/wealthcare/wealthweb/angularUI/wealthcare-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map