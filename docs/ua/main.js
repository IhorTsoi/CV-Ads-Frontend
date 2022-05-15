var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"ua"});
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/u1q":
/*!*****************************************************!*\
  !*** ./src/app/domain/constants/SmartDeviceMode.ts ***!
  \*****************************************************/
/*! exports provided: SmartDeviceMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartDeviceMode", function() { return SmartDeviceMode; });
var SmartDeviceMode;
(function (SmartDeviceMode) {
    SmartDeviceMode[SmartDeviceMode["Inactive"] = 0] = "Inactive";
    SmartDeviceMode[SmartDeviceMode["Active"] = 1] = "Active";
    SmartDeviceMode[SmartDeviceMode["Blocked"] = 2] = "Blocked";
})(SmartDeviceMode || (SmartDeviceMode = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\personal\CV-Ads-Frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0bpm":
/*!**********************************************************************************************!*\
  !*** ./src/app/customer-components/advertisement-details/advertisement-details.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdvertisementDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementDetailsComponent", function() { return AdvertisementDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/constants/Gender */ "mVRz");
/* harmony import */ var _domain_constants_AdvertisementStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/constants/AdvertisementStatus */ "KqBD");
/* harmony import */ var _services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/functions/dateFunctions */ "nx/h");
/* harmony import */ var _services_api_advertisement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/advertisement.service */ "5Z0V");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/language-selector.service */ "aqoI");
/* harmony import */ var _domain_Advertisement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../domain/Advertisement */ "UPp+");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ "LPYB");














function AdvertisementDetailsComponent_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertisementDetailsComponent_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertisementDetailsComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const humanLimit_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", humanLimit_r6, " ");
} }
function AdvertisementDetailsComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeLimit_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", timeLimit_r7, " ");
} }
function AdvertisementDetailsComponent_h2_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertisementDetailsComponent_div_22_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r8.pieChartData.values)("labels", ctx_r8.pieChartData.labels)("colors", ctx_r8.pieChartData.colors)("options", ctx_r8.pieChartData.options)("chartType", "pie");
} }
function AdvertisementDetailsComponent_div_22_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r9.barChartData.datasets)("labels", ctx_r9.barChartData.labels)("options", ctx_r9.barChartData.options)("legend", true)("chartType", "bar");
} }
function AdvertisementDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdvertisementDetailsComponent_div_22_div_4_Template, 2, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdvertisementDetailsComponent_div_22_div_8_Template, 2, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.pieChartData.values.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.barChartData.labels.length > 0);
} }
const CHART_COLORS = [
    'rgba(255,0,0,0.3)',
    'rgba(0,255,0,0.3)',
    'rgba(0,0,255,0.3)'
];
const DATA_VIEWS_COUNT_INDEX = 0;
const DATA_AUDIENCE_COUNT_INDEX = 1;
class AdvertisementDetailsComponent {
    constructor(advertisement, advertisementService, languageService) {
        this.advertisement = advertisement;
        this.advertisementService = advertisementService;
        this.languageService = languageService;
        this.pieChartData = {
            labels: [],
            values: [],
            colors: [{ backgroundColor: [] }],
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontSize: 20,
                        fontColor: 'white'
                    }
                }
            }
        };
        this.barChartData = {
            datasets: [
                { data: [], label: null },
                { data: [], label: null }
            ],
            labels: [],
            options: {
                responsive: true,
                scales: {
                    xAxes: [{ ticks: { fontSize: 20, fontColor: 'white' } }],
                    yAxes: [{ ticks: {
                                suggestedMin: 0,
                                suggestedMax: 1,
                                stepSize: 1,
                                fontSize: 20,
                                fontColor: 'white'
                            } }]
                },
                plugins: { datalabels: { anchor: 'end', align: 'end' } },
                legend: {
                    display: true,
                    labels: {
                        fontSize: 20,
                        fontColor: 'white'
                    }
                }
            }
        };
        this.AdvertisementStatus = _domain_constants_AdvertisementStatus__WEBPACK_IMPORTED_MODULE_3__["AdvertisementStatus"];
    }
    ngOnInit() {
        this.advertisementService.getViewsForAdvertisementAsync(this.advertisement)
            .then((views) => {
            this.SetPieChartData(views);
            this.setBarChartData(views);
        });
    }
    get location() {
        if (!this.advertisement.countryScope) {
            return this.getLocalizedWholeWorldLabel();
        }
        const countryLabel = this.advertisement.countryScope;
        if (!this.advertisement.cityScope) {
            return countryLabel;
        }
        return `${countryLabel}, ${this.advertisement.cityScope}`;
    }
    get humanLimits() {
        return this.advertisement.humanLimits.map(humanLimit => {
            if (this.languageService.getPreferredLanguage() === 'ua') {
                let humanLimitLabel = '';
                switch (humanLimit.gender) {
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_2__["Gender"].NotSpecified:
                        humanLimitLabel += 'чоловік або жінка 👨👩';
                        break;
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_2__["Gender"].Male:
                        humanLimitLabel += 'чоловік 👨';
                        break;
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_2__["Gender"].Female:
                        humanLimitLabel += 'жінка 👩';
                        break;
                }
                humanLimitLabel += ` від ${humanLimit.minAge} до ${humanLimit.maxAge} років`;
                return humanLimitLabel;
            }
            else {
                let humanLimitLabel = '';
                switch (humanLimit.gender) {
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_2__["Gender"].NotSpecified:
                        humanLimitLabel += 'male or female 👨👩';
                        break;
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_2__["Gender"].Male:
                        humanLimitLabel += 'male 👨';
                        break;
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_2__["Gender"].Female:
                        humanLimitLabel += 'female 👩';
                        break;
                }
                humanLimitLabel += ` from ${humanLimit.minAge} to ${humanLimit.maxAge} years old`;
                return humanLimitLabel;
            }
        });
    }
    get timeLimits() {
        return this.advertisement.timePeriodLimits.map(timeLimit => {
            const fromTimeLabel = this.getTimeLabelFromMinutes(timeLimit.fromInMinutes);
            const toTimeLabel = this.getTimeLabelFromMinutes(timeLimit.toInMinutes);
            return `${fromTimeLabel} - ${toTimeLabel}`;
        });
    }
    SetPieChartData(views) {
        views.forEach(view => {
            const locationLabel = `${view.city}@${view.country}`;
            if (this.pieChartData.labels.includes(locationLabel)) {
                const locationIndex = this.pieChartData.labels.indexOf(locationLabel);
                this.pieChartData.values[locationIndex]++;
            }
            else {
                this.pieChartData.labels.push(locationLabel);
                this.pieChartData.values.push(1);
                this.pieChartData.colors[0].backgroundColor.push(CHART_COLORS[(this.pieChartData.labels.length - 1) % CHART_COLORS.length]);
            }
        });
    }
    setBarChartData(views) {
        views.sort((firstView, secondView) => {
            const firstDateMilliseconds = Object(_services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_4__["toLocalDate"])(firstView.dateTime).getTime();
            const secondDataMilliseconds = Object(_services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_4__["toLocalDate"])(secondView.dateTime).getTime();
            return firstDateMilliseconds - secondDataMilliseconds;
        });
        views.forEach(view => {
            const dateLabel = Object(_services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_4__["getDateString"])(Object(_services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_4__["toLocalDate"])(view.dateTime));
            const lastIndex = this.barChartData.labels.length - 1;
            if (this.barChartData.labels[lastIndex] === dateLabel) {
                this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].data[lastIndex]++;
                this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX]
                    .data[lastIndex] += view.audienceCount;
            }
            else {
                this.barChartData.labels.push(dateLabel);
                this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].data.push(1);
                this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX]
                    .data.push(view.audienceCount);
            }
        });
        this.configureBarChartScale();
        this.localizeBarChartLegend();
    }
    configureBarChartScale() {
        const maxBarHeight = Math.max(Math.max(...this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].data), Math.max(...this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX].data)) + 1;
        const stepSize = maxBarHeight < 10 ? 1 : 10;
        this.barChartData.options.scales.yAxes[0].ticks.stepSize = stepSize;
        this.barChartData.options.scales.yAxes[0].ticks.suggestedMax = maxBarHeight;
    }
    getLocalizedWholeWorldLabel() {
        if (this.languageService.getPreferredLanguage() === 'ua') {
            return 'весь світ';
        }
        else {
            return 'whole world';
        }
    }
    getTimeLabelFromMinutes(minutes) {
        const labelHours = Math.floor(minutes / 60).toString();
        const labelMinutes = (minutes % 60).toString();
        return `${labelHours.length === 2 ? labelHours : ('0' + labelHours)}:` +
            `${labelMinutes.length === 2 ? labelMinutes : ('0' + labelMinutes)}`;
    }
    localizeBarChartLegend() {
        if (this.languageService.getPreferredLanguage() === 'ua') {
            this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].label = 'Кількість показів';
            this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX].label = 'Об\'єм аудиторії';
        }
        else {
            this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].label = 'Views count';
            this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX].label = 'Audience count';
        }
    }
}
AdvertisementDetailsComponent.ɵfac = function AdvertisementDetailsComponent_Factory(t) { return new (t || AdvertisementDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_advertisement_service__WEBPACK_IMPORTED_MODULE_5__["AdvertisementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_6__["LanguageSelectorService"])); };
AdvertisementDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvertisementDetailsComponent, selectors: [["app-advertisement-details"]], decls: 23, vars: 8, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1511960606601849989$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS_1 = goog.getMsg("\uD83D\uDFE2 Location: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_0 = MSG_EXTERNAL_1511960606601849989$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\uD83D\uDFE2 \u0422\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u044F: " + "\uFFFD0\uFFFD" + "";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8208850397207105819$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS_3 = goog.getMsg("\uD83D\uDFE2 Human limits: ");
        i18n_2 = MSG_EXTERNAL_8208850397207105819$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\uD83D\uDFE2 \u0421\u0435\u0433\u043C\u0435\u043D\u0442\u0438 \u0446\u0456\u043B\u044C\u0432\u043E\u0457 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u0457: ";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9126027201202393061$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS_5 = goog.getMsg("\uD83D\uDFE2 Time limits: ");
        i18n_4 = MSG_EXTERNAL_9126027201202393061$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\uD83D\uDFE2 \u0427\u0430\u0441\u043E\u0432\u0456 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F: ";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1135722392973439774$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS_7 = goog.getMsg("\uD83D\uDFE2 Statistics:");
        i18n_6 = MSG_EXTERNAL_1135722392973439774$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\uD83D\uDFE2 \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430:";
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8479912871395670991$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__9 = goog.getMsg(" Status: Published ");
        i18n_8 = MSG_EXTERNAL_8479912871395670991$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "\n          \u0421\u0442\u0430\u0442\u0443\u0441: \u041E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u043E\n        ";
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1313073659721730675$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__11 = goog.getMsg(" Status: Draft ");
        i18n_10 = MSG_EXTERNAL_1313073659721730675$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "\n              \u0421\u0442\u0430\u0442\u0443\u0441: \u041F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u0435\u043D\u043E\n            ";
    } var i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_580472458912753724$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__13 = goog.getMsg(" There isn't any views data for this advertisement. ");
        i18n_12 = MSG_EXTERNAL_580472458912753724$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "\n      \u0414\u0430\u043D\u0435 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F \u0449\u0435 \u043D\u0435 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u043B\u043E\u0441\u044F \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443.\n    ";
    } var i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7350152411290260459$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__15 = goog.getMsg("Location statistics:");
        i18n_14 = MSG_EXTERNAL_7350152411290260459$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "\u0422\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0430\u043B\u044C\u043D\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430:";
    } var i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6353628111411342442$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__17 = goog.getMsg("Views and audience count per day statistics:");
        i18n_16 = MSG_EXTERNAL_6353628111411342442$$SRC_APP_CUSTOMER_COMPONENTS_ADVERTISEMENT_DETAILS_ADVERTISEMENT_DETAILS_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "\u041F\u043E\u043A\u0430\u0437\u0438 \u0442\u0430 \u043E\u0445\u043E\u043F\u043B\u0435\u043D\u0430 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u044F \u0437\u0430 \u0434\u0435\u043D\u044C:";
    } return [[2, "display", "flex", "justify-content", "space-between"], ["aria-label", "Advertisement status"], ["color", "accent", "selected", "", 4, "ngIf"], ["color", "warn", "selected", "", 4, "ngIf"], [1, "mat-typography"], i18n_0, i18n_2, [4, "ngFor", "ngForOf"], i18n_4, i18n_6, ["style", "text-align: center; margin: 10px 0;", 4, "ngIf"], ["style", "display: flex; justify-content: space-between;", 4, "ngIf"], ["color", "accent", "selected", ""], i18n_8, ["color", "warn", "selected", ""], i18n_10, [2, "text-align", "center", "margin", "10px 0"], i18n_12, [2, "width", "50%"], i18n_14, ["style", "display: block", 4, "ngIf"], i18n_16, [2, "display", "block"], ["baseChart", "", 3, "data", "labels", "colors", "options", "chartType"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"]]; }, template: function AdvertisementDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdvertisementDetailsComponent_mat_chip_4_Template, 2, 0, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdvertisementDetailsComponent_mat_chip_5_Template, 2, 0, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdvertisementDetailsComponent_p_13_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdvertisementDetailsComponent_p_17_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdvertisementDetailsComponent_h2_21_Template, 2, 0, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdvertisementDetailsComponent_div_22_Template, 9, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("*\uFE0F\u20E3 \"", ctx.advertisement.name, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advertisement.status === ctx.AdvertisementStatus.Published);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advertisement.status === ctx.AdvertisementStatus.Draft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.humanLimits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeLimits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pieChartData.values.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pieChartData.values.length !== 0);
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"], ng2_charts__WEBPACK_IMPORTED_MODULE_10__["BaseChartDirective"]], styles: ["hr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n  margin-left: 50px;\r\n  font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50cy9hZHZlcnRpc2VtZW50LWRldGFpbHMvYWR2ZXJ0aXNlbWVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci1jb21wb25lbnRzL2FkdmVydGlzZW1lbnQtZGV0YWlscy9hZHZlcnRpc2VtZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcclxuICBib3JkZXI6IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertisementDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-advertisement-details',
                templateUrl: './advertisement-details.component.html',
                styleUrls: ['./advertisement-details.component.css']
            }]
    }], function () { return [{ type: _domain_Advertisement__WEBPACK_IMPORTED_MODULE_7__["Advertisement"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_api_advertisement_service__WEBPACK_IMPORTED_MODULE_5__["AdvertisementService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_6__["LanguageSelectorService"] }]; }, null); })();


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/authentication.service */ "B6lr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/language-selector.service */ "aqoI");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/notification.service */ "OC8m");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RegisterComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class RegisterComponent {
    constructor(authenticationService, router, languageService, notificationService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.languageService = languageService;
        this.notificationService = notificationService;
    }
    ngOnInit() {
    }
    onRegisterAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const registerData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            };
            const errorMessage = yield this.authenticationService
                .registerCustomerAsync(registerData);
            if (!errorMessage) {
                yield this.router.navigate(['/login']);
                if (this.languageService.getPreferredLanguage() === 'ua') {
                    this.notificationService.displayMessage('Реєстрація пройшла успішно ✅');
                }
                else {
                    this.notificationService.displayMessage('The registration was successful ✅');
                }
                return;
            }
            this.errorMessage = errorMessage;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 26, vars: 5, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3301086086650990787$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_1 = goog.getMsg("Register");
        i18n_0 = MSG_EXTERNAL_3301086086650990787$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5342432350421167093$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_3 = goog.getMsg("First name");
        i18n_2 = MSG_EXTERNAL_5342432350421167093$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0406\u043C'\u044F";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3586674587150281199$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_5 = goog.getMsg("Last name");
        i18n_4 = MSG_EXTERNAL_3586674587150281199$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4768749765465246664$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_7 = goog.getMsg("Email");
        i18n_6 = MSG_EXTERNAL_4768749765465246664$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430";
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1431416938026210429$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_9 = goog.getMsg("Password");
        i18n_8 = MSG_EXTERNAL_1431416938026210429$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "\u041F\u0430\u0440\u043E\u043B\u044C";
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1580879949716435119$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_11 = goog.getMsg("{$startTagSpan}{$closeTagSpan}{$startTagSpan}{$closeTagSpan}{$startTagSpan}{$closeTagSpan}{$startTagSpan}{$closeTagSpan} Submit ", { "startTagSpan": "[\uFFFD#22\uFFFD|\uFFFD#23\uFFFD|\uFFFD#24\uFFFD|\uFFFD#25\uFFFD]", "closeTagSpan": "[\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD]" });
        i18n_10 = MSG_EXTERNAL_1580879949716435119$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "\n      " + "[\uFFFD#22\uFFFD|\uFFFD#23\uFFFD|\uFFFD#24\uFFFD|\uFFFD#25\uFFFD]" + "" + "[\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD]" + "\n      " + "[\uFFFD#22\uFFFD|\uFFFD#23\uFFFD|\uFFFD#24\uFFFD|\uFFFD#25\uFFFD]" + "" + "[\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD]" + "\n      " + "[\uFFFD#22\uFFFD|\uFFFD#23\uFFFD|\uFFFD#24\uFFFD|\uFFFD#25\uFFFD]" + "" + "[\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD]" + "\n      " + "[\uFFFD#22\uFFFD|\uFFFD#23\uFFFD|\uFFFD#24\uFFFD|\uFFFD#25\uFFFD]" + "" + "[\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#25\uFFFD]" + "\n      \u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438\n    ";
    } i18n_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](i18n_10); return [["ngNativeValidate", "", 3, "submit"], i18n_0, ["style", "color: #e43e32;margin-top: -25px;", 4, "ngIf"], [1, "user-box"], ["type", "text", "required", "", "name", "firstName", "autocomplete", "off", 3, "ngModel", "ngModelChange"], i18n_2, ["type", "text", "required", "", "name", "lastName", "autocomplete", "off", 3, "ngModel", "ngModelChange"], i18n_4, ["type", "text", "required", "", "name", "email", "autocomplete", "off", 3, "ngModel", "ngModelChange"], i18n_6, ["type", "password", "required", "", "name", "password", "autocomplete", "off", 3, "ngModel", "ngModelChange"], i18n_8, ["type", "submit"], i18n_10, [2, "color", "#e43e32", "margin-top", "-25px"]]; }, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_0_listener() { return ctx.onRegisterAsync(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterComponent_p_3_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_5_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["[_nghost-%COMP%] {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 55%;\r\n  left: 50%;\r\n  width: 400px;\r\n  padding: 40px;\r\n  transform: translate(-50%, -50%);\r\n  background: rgb(41 17 123 / 90%);\r\n  box-sizing: border-box;\r\n  box-shadow: 0 15px 25px rgba(0,0,0,.6);\r\n  border-radius: 10px;\r\n}\r\n\r\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 0 30px;\r\n  padding: 0;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n[_nghost-%COMP%]   .user-box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n[_nghost-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  margin-bottom: 30px;\r\n  border: none;\r\n  border-bottom: 1px solid #fff;\r\n  outline: none;\r\n  background: transparent;\r\n}\r\n\r\n[_nghost-%COMP%]   .user-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top:0;\r\n  left: 0;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  pointer-events: none;\r\n  transition: .5s;\r\n}\r\n\r\n[_nghost-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], [_nghost-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\r\n  top: -20px;\r\n  left: 0;\r\n  color: #03e9f4;\r\n  font-size: 12px;\r\n}\r\n\r\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  border: none;\r\n  background: rgb(62 40 136);\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  color: #03e9f4;\r\n  font-size: 16px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  overflow: hidden;\r\n  transition: .5s;\r\n  margin-top: 40px;\r\n  letter-spacing: 4px\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #03e9f4;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px #03e9f4,\r\n  0 0 25px #03e9f4,\r\n  0 0 50px #03e9f4,\r\n  0 0 100px #03e9f4;\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: block;\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(90deg, transparent, #03e9f4);\r\n  animation: btn-anim1 1s linear infinite;\r\n}\r\n\r\n@keyframes btn-anim1 {\r\n  0% {\r\n    left: -100%;\r\n  }\r\n  50%,100% {\r\n    left: 100%;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n  top: -100%;\r\n  right: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(180deg, transparent, #03e9f4);\r\n  animation: btn-anim2 1s linear infinite;\r\n  animation-delay: .25s\r\n}\r\n\r\n@keyframes btn-anim2 {\r\n  0% {\r\n    top: -100%;\r\n  }\r\n  50%,100% {\r\n    top: 100%;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n  bottom: 0;\r\n  right: -100%;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(270deg, transparent, #03e9f4);\r\n  animation: btn-anim3 1s linear infinite;\r\n  animation-delay: .5s\r\n}\r\n\r\n@keyframes btn-anim3 {\r\n  0% {\r\n    right: -100%;\r\n  }\r\n  50%,100% {\r\n    right: 100%;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n  bottom: -100%;\r\n  left: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(360deg, transparent, #03e9f4);\r\n  animation: btn-anim4 1s linear infinite;\r\n  animation-delay: .75s\r\n}\r\n\r\n@keyframes btn-anim4 {\r\n  0% {\r\n    bottom: -100%;\r\n  }\r\n  50%,100% {\r\n    bottom: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsT0FBTztFQUNQLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFVBQVU7RUFDVixPQUFPO0VBQ1AsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCOzs7bUJBR2lCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0RBQXdEO0VBQ3hELHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWix5REFBeUQ7RUFDekQsdUNBQXVDO0VBQ3ZDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gseURBQXlEO0VBQ3pELHVDQUF1QztFQUN2QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlEQUF5RDtFQUN6RCx1Q0FBdUM7RUFDdkM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQxIDE3IDEyMyAvIDkwJSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwIDE1cHggMjVweCByZ2JhKDAsMCwwLC42KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46aG9zdCBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgLnVzZXItYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbjpob3N0IC51c2VyLWJveCBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbjpob3N0IC51c2VyLWJveCBsYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbjpob3N0IC51c2VyLWJveCBpbnB1dDpmb2N1cyB+IGxhYmVsLFxyXG46aG9zdCAudXNlci1ib3ggaW5wdXQ6dmFsaWQgfiBsYWJlbCB7XHJcbiAgdG9wOiAtMjBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiAjMDNlOWY0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuOmhvc3QgZm9ybSBidXR0b24ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHJnYig2MiA0MCAxMzYpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGNvbG9yOiAjMDNlOWY0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHhcclxufVxyXG5cclxuOmhvc3QgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDNlOWY0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwM2U5ZjQsXHJcbiAgMCAwIDI1cHggIzAzZTlmNCxcclxuICAwIDAgNTBweCAjMDNlOWY0LFxyXG4gIDAgMCAxMDBweCAjMDNlOWY0O1xyXG59XHJcblxyXG46aG9zdCBidXR0b24gc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG46aG9zdCBidXR0b24gc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAjMDNlOWY0KTtcclxuICBhbmltYXRpb246IGJ0bi1hbmltMSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnRuLWFuaW0xIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IGJ1dHRvbiBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgdG9wOiAtMTAwJTtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCwgIzAzZTlmNCk7XHJcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjI1c1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMiB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgYnV0dG9uIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IC0xMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHRyYW5zcGFyZW50LCAjMDNlOWY0KTtcclxuICBhbmltYXRpb246IGJ0bi1hbmltMyAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNXNcclxufVxyXG5cclxuQGtleWZyYW1lcyBidG4tYW5pbTMge1xyXG4gIDAlIHtcclxuICAgIHJpZ2h0OiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCBidXR0b24gc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gIGJvdHRvbTogLTEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCB0cmFuc3BhcmVudCwgIzAzZTlmNCk7XHJcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTQgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjc1c1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltNCB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSelectorService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "3U2V":
/*!********************************************************************************!*\
  !*** ./src/app/customer-components/add-time-limit/add-time-limit.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddTimeLimitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimeLimitComponent", function() { return AddTimeLimitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _domain_TimePeriodLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/TimePeriodLimit */ "8Ofh");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class AddTimeLimitComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    onAddTimeLimit() {
        const timeLimit = new _domain_TimePeriodLimit__WEBPACK_IMPORTED_MODULE_1__["TimePeriodLimit"]();
        timeLimit.fromInMinutes = this.convertStringTimeToMinutes(this.fromTime);
        timeLimit.toInMinutes = this.convertStringTimeToMinutes(this.toTime);
        this.dialogRef.close(timeLimit);
    }
    convertStringTimeToMinutes(timeString) {
        const [hours, minutes] = timeString.split(':').map(s => Number(s));
        return hours * 60 + minutes;
    }
}
AddTimeLimitComponent.ɵfac = function AddTimeLimitComponent_Factory(t) { return new (t || AddTimeLimitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
AddTimeLimitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTimeLimitComponent, selectors: [["app-add-time-limit"]], decls: 17, vars: 2, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6137168924299575736$$SRC_APP_CUSTOMER_COMPONENTS_ADD_TIME_LIMIT_ADD_TIME_LIMIT_COMPONENT_TS_1 = goog.getMsg("Add time period limit");
        i18n_0 = MSG_EXTERNAL_6137168924299575736$$SRC_APP_CUSTOMER_COMPONENTS_ADD_TIME_LIMIT_ADD_TIME_LIMIT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0414\u043E\u0434\u0430\u0442\u0438 \u0447\u0430\u0441\u043E\u0432\u0456 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7199204271922375124$$SRC_APP_CUSTOMER_COMPONENTS_ADD_TIME_LIMIT_ADD_TIME_LIMIT_COMPONENT_TS_3 = goog.getMsg("From time: {$tagInput}", { "tagInput": "\uFFFD#6\uFFFD\uFFFD/#6\uFFFD" });
        i18n_2 = MSG_EXTERNAL_7199204271922375124$$SRC_APP_CUSTOMER_COMPONENTS_ADD_TIME_LIMIT_ADD_TIME_LIMIT_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u041F\u043E\u0447\u0438\u043D\u0430\u044E\u0447\u0438 \u0437:\n      " + "\uFFFD#6\uFFFD\uFFFD/#6\uFFFD" + "\n    ";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8443092876866733279$$SRC_APP_CUSTOMER_COMPONENTS_ADD_TIME_LIMIT_ADD_TIME_LIMIT_COMPONENT_TS_5 = goog.getMsg("To time: {$tagInput}", { "tagInput": "\uFFFD#11\uFFFD\uFFFD/#11\uFFFD" });
        i18n_4 = MSG_EXTERNAL_8443092876866733279$$SRC_APP_CUSTOMER_COMPONENTS_ADD_TIME_LIMIT_ADD_TIME_LIMIT_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u0414\u043E:\n      " + "\uFFFD#11\uFFFD\uFFFD/#11\uFFFD" + "\n    ";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4602295772322219423$$SRC_APP_CUSTOMER_COMPONENTS_ADD_TIME_LIMIT_ADD_TIME_LIMIT_COMPONENT_TS_7 = goog.getMsg("Add new time period limit");
        i18n_6 = MSG_EXTERNAL_4602295772322219423$$SRC_APP_CUSTOMER_COMPONENTS_ADD_TIME_LIMIT_ADD_TIME_LIMIT_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\u0414\u043E\u0434\u0430\u0442\u0438 \u043D\u043E\u0432\u0435 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F \u0447\u0430\u0441\u0443";
    } return [i18n_0, ["ngNativeValidate", "", 3, "submit"], i18n_2, ["type", "time", "name", "fromTime", "required", "", 3, "ngModel", "ngModelChange"], i18n_4, ["type", "time", "name", "toTime", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-button", "", "color", "accent"], [2, "font-size", "15px"], i18n_6]; }, template: function AddTimeLimitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddTimeLimitComponent_Template_form_submit_3_listener() { return ctx.onAddTimeLimit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTimeLimitComponent_Template_input_ngModelChange_6_listener($event) { return ctx.fromTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](10, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTimeLimitComponent_Template_input_ngModelChange_11_listener($event) { return ctx.toTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fromTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.toTime);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 20px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50cy9hZGQtdGltZS1saW1pdC9hZGQtdGltZS1saW1pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50cy9hZGQtdGltZS1saW1pdC9hZGQtdGltZS1saW1pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogc29saWQgIzIxMjEyMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTimeLimitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-time-limit',
                templateUrl: './add-time-limit.component.html',
                styleUrls: ['./add-time-limit.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "4Y8T":
/*!*****************************************************************************!*\
  !*** ./src/app/admin-components/register-admin/register-admin.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAdminComponent", function() { return RegisterAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/authentication.service */ "B6lr");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language-selector.service */ "aqoI");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function RegisterAdminComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class RegisterAdminComponent {
    constructor(authenticationService, languageService, notificationService) {
        this.authenticationService = authenticationService;
        this.languageService = languageService;
        this.notificationService = notificationService;
    }
    ngOnInit() {
    }
    onRegisterAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const registerAdminData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            };
            const errorMessage = yield this.authenticationService
                .registerAdminAsync(registerAdminData);
            if (errorMessage) {
                this.errorMessage = errorMessage;
            }
            else {
                this.resetLocalData();
                if (this.languageService.getPreferredLanguage() === 'ua') {
                    this.notificationService.displayMessage('Реєстрація пройшла успішно ✅');
                }
                else {
                    this.notificationService.displayMessage('The registration was successful ✅');
                }
            }
        });
    }
    resetLocalData() {
        this.errorMessage = null;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
    }
}
RegisterAdminComponent.ɵfac = function RegisterAdminComponent_Factory(t) { return new (t || RegisterAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__["LanguageSelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
RegisterAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterAdminComponent, selectors: [["app-register-admin"]], decls: 24, vars: 5, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7991735763283291883$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_1 = goog.getMsg("New admin data");
        i18n_0 = MSG_EXTERNAL_7991735763283291883$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0414\u0430\u043D\u0456 \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2550118914661189014$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_3 = goog.getMsg("First name: {$tagInput}", { "tagInput": "\uFFFD#8\uFFFD\uFFFD/#8\uFFFD" });
        i18n_2 = MSG_EXTERNAL_2550118914661189014$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0406\u043C'\u044F:\n          " + "\uFFFD#8\uFFFD\uFFFD/#8\uFFFD" + "\n        ";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2443216975333141749$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_5 = goog.getMsg("Last name: {$tagInput}", { "tagInput": "\uFFFD#12\uFFFD\uFFFD/#12\uFFFD" });
        i18n_4 = MSG_EXTERNAL_2443216975333141749$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:\n          " + "\uFFFD#12\uFFFD\uFFFD/#12\uFFFD" + "\n        ";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1956199292540409939$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_7 = goog.getMsg("Email: {$tagInput}", { "tagInput": "\uFFFD#16\uFFFD\uFFFD/#16\uFFFD" });
        i18n_6 = MSG_EXTERNAL_1956199292540409939$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430:\n          " + "\uFFFD#16\uFFFD\uFFFD/#16\uFFFD" + "\n        ";
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2712907036888985230$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_9 = goog.getMsg("Password: {$tagInput}", { "tagInput": "\uFFFD#20\uFFFD\uFFFD/#20\uFFFD" });
        i18n_8 = MSG_EXTERNAL_2712907036888985230$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "\u041F\u0430\u0440\u043E\u043B\u044C:\n          " + "\uFFFD#20\uFFFD\uFFFD/#20\uFFFD" + "\n        ";
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1601928118246178067$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_11 = goog.getMsg(" Register ");
        i18n_10 = MSG_EXTERNAL_1601928118246178067$$SRC_APP_ADMIN_COMPONENTS_REGISTER_ADMIN_REGISTER_ADMIN_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "\n          \u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\n        ";
    } return [i18n_0, ["style", "color: #e43e32; font-size: 18px;", 4, "ngIf"], ["ngNativeValidate", "", 3, "submit"], i18n_2, ["type", "text", "required", "", "autocomplete", "off", "name", "firstName", 3, "ngModel", "ngModelChange"], i18n_4, ["type", "text", "required", "", "autocomplete", "off", "name", "lastName", 3, "ngModel", "ngModelChange"], i18n_6, ["type", "text", "required", "", "autocomplete", "off", "name", "email", 3, "ngModel", "ngModelChange"], i18n_8, ["type", "password", "required", "", "autocomplete", "off", "name", "password", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-raised-button", "", "color", "primary"], i18n_10, [2, "color", "#e43e32", "font-size", "18px"]]; }, template: function RegisterAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterAdminComponent_p_4_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function RegisterAdminComponent_Template_form_submit_5_listener() { return ctx.onRegisterAsync(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterAdminComponent_Template_input_ngModelChange_8_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterAdminComponent_Template_input_ngModelChange_12_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](15, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterAdminComponent_Template_input_ngModelChange_16_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterAdminComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 60%;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  background-color: aliceblue;\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 18px;\r\n  padding: 5px;\r\n  margin-top: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9yZWdpc3Rlci1hZG1pbi9yZWdpc3Rlci1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvcmVnaXN0ZXItYWRtaW4vcmVnaXN0ZXItYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmRpdj5oMiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register-admin',
                templateUrl: './register-admin.component.html',
                styleUrls: ['./register-admin.component.css']
            }]
    }], function () { return [{ type: _services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__["LanguageSelectorService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "5Z0V":
/*!*******************************************************!*\
  !*** ./src/app/services/api/advertisement.service.ts ***!
  \*******************************************************/
/*! exports provided: AdvertisementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementService", function() { return AdvertisementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AdvertisementService {
    constructor(http) {
        this.http = http;
    }
    getCustomerAdvertisementsAsync() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.getCustomerAdvertisements).toPromise()
            .then(advertisements => advertisements.map(ad => {
            ad.pictureLink = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseAPIUrl + ad.pictureLink;
            return ad;
        }));
    }
    createAsync(advertisementData) {
        const formData = new FormData();
        formData.append('name', advertisementData.name);
        formData.append('viewsLimit', advertisementData.viewsLimit.toString());
        if (advertisementData.countryScope) {
            formData.append('countryScope', advertisementData.countryScope);
            if (advertisementData.cityScope) {
                formData.append('cityScope', advertisementData.cityScope);
            }
        }
        formData.append('formFile', advertisementData.formFile, advertisementData.formFile.name);
        for (let i = 0; i < advertisementData.humanLimits.length; i++) {
            const hl = advertisementData.humanLimits[i];
            formData.append(`humanLimits[${i}].Gender`, hl.gender.toString());
            formData.append(`humanLimits[${i}].MinAge`, hl.minAge.toString());
            formData.append(`humanLimits[${i}].MaxAge`, hl.maxAge.toString());
        }
        for (let i = 0; i < advertisementData.timePeriodLimits.length; i++) {
            const tl = advertisementData.timePeriodLimits[i];
            formData.append(`timePeriodLimits[${i}].FromInMinutes`, tl.fromInMinutes.toString());
            formData.append(`timePeriodLimits[${i}].ToInMinutes`, tl.toInMinutes.toString());
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.createAdvertisement, formData).toPromise();
    }
    updateAdvertisementStatusAsync(advertisement) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.changeStatusOfAdvertisement
            .replace('{id}', advertisement.id);
        return this.http.patch(url, {
            newAdvertisementStatus: advertisement.status
        }).toPromise();
    }
    getViewsForAdvertisementAsync(advertisement) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.getStatisticsForAdvertisement
            .replace('{id}', advertisement.id);
        return this.http.get(url).toPromise();
    }
}
AdvertisementService.ɵfac = function AdvertisementService_Factory(t) { return new (t || AdvertisementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AdvertisementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdvertisementService, factory: AdvertisementService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertisementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "864E":
/*!**************************************************!*\
  !*** ./src/app/services/user-manager.service.ts ***!
  \**************************************************/
/*! exports provided: UserManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerService", function() { return UserManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



const TOKEN_STORAGE_KEY = 'token';
class UserManagerService {
    constructor() {
        this.$tokenUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getTokenUpdateStream() {
        return this.$tokenUpdate;
    }
    getToken() {
        const tokenJSON = sessionStorage[TOKEN_STORAGE_KEY];
        if (tokenJSON) {
            return JSON.parse(tokenJSON);
        }
        return null;
    }
    saveToken(token) {
        sessionStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
        this.$tokenUpdate.next(null);
    }
    deleteToken() {
        sessionStorage.removeItem(TOKEN_STORAGE_KEY);
        this.$tokenUpdate.next(null);
    }
}
UserManagerService.ɵfac = function UserManagerService_Factory(t) { return new (t || UserManagerService)(); };
UserManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserManagerService, factory: UserManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8Ofh":
/*!*******************************************!*\
  !*** ./src/app/domain/TimePeriodLimit.ts ***!
  \*******************************************/
/*! exports provided: TimePeriodLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePeriodLimit", function() { return TimePeriodLimit; });
class TimePeriodLimit {
    static GetDefaultTimePeriodLimit() {
        return { fromInMinutes: 0, toInMinutes: 1439 };
    }
}


/***/ }),

/***/ "8UQP":
/*!**********************************************************************************************!*\
  !*** ./src/app/customer-components/customer-cost-payment/customer-cost-payment.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CustomerCostPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCostPaymentComponent", function() { return CustomerCostPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/payment.service */ "qktC");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language-selector.service */ "aqoI");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function CustomerCostPaymentComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r0.paymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](1);
} }
class CustomerCostPaymentComponent {
    constructor(paymentService, languageService, notificationService) {
        this.paymentService = paymentService;
        this.languageService = languageService;
        this.notificationService = notificationService;
        this.paymentAmount = undefined;
    }
    ngOnInit() {
        this.setPaymentAmount();
    }
    onPayAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const paid = yield this.paymentService.payAsync();
            this.setPaymentAmount();
            if (this.languageService.getPreferredLanguage() === 'ua') {
                this.notificationService.displayMessage('Оплата пройшла успішно ✅ Сплачено: ' + paid.toFixed(2) + ' $');
            }
            else {
                this.notificationService.displayMessage('The payment was successful ✅ Paid: ' + paid.toFixed(2) + ' $');
            }
        });
    }
    setPaymentAmount() {
        this.paymentService.getCustomerPaymentAmountAsync()
            .then(paymentAmount => this.paymentAmount = paymentAmount);
    }
}
CustomerCostPaymentComponent.ɵfac = function CustomerCostPaymentComponent_Factory(t) { return new (t || CustomerCostPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__["LanguageSelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
CustomerCostPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerCostPaymentComponent, selectors: [["app-customer-cost-payment"]], decls: 8, vars: 1, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7139710918104379011$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_COST_PAYMENT_CUSTOMER_COST_PAYMENT_COMPONENT_TS_1 = goog.getMsg(" Please click the button to pay for services provided by CV-Ads: ");
        i18n_0 = MSG_EXTERNAL_7139710918104379011$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_COST_PAYMENT_CUSTOMER_COST_PAYMENT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\n          \u0411\u0443\u0434\u044C-\u043B\u0430\u0441\u043A\u0430, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u0449\u043E\u0431 \u0441\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043F\u043E\u0441\u043B\u0443\u0433 \u043D\u0430\u0434\u0430\u043D\u0438\u0445 CV-Ads:\n        ";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2969666787323850534$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_COST_PAYMENT_CUSTOMER_COST_PAYMENT_COMPONENT_TS_3 = goog.getMsg(" Pay ");
        i18n_2 = MSG_EXTERNAL_2969666787323850534$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_COST_PAYMENT_CUSTOMER_COST_PAYMENT_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\n          \u0421\u043F\u043B\u0430\u0442\u0438\u0442\u0438\n        ";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5786576766296179566$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_COST_PAYMENT_CUSTOMER_COST_PAYMENT_COMPONENT_TS__5 = goog.getMsg(" Payment amount: {$interpolation} $ ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_4 = MSG_EXTERNAL_5786576766296179566$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_COST_PAYMENT_CUSTOMER_COST_PAYMENT_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "\n      \u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C: " + "\uFFFD0\uFFFD" + " $\n    ";
    } return [[4, "ngIf"], [2, "display", "flex", "margin", "auto 0"], [2, "font-size", "20px", "margin-top", "auto", "margin-bottom", "auto", "margin-right", "10px"], i18n_0, ["mat-raised-button", "", "color", "primary", 3, "click"], i18n_2, i18n_4]; }, template: function CustomerCostPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerCostPaymentComponent_h2_1_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerCostPaymentComponent_Template_button_click_6_listener() { return ctx.onPayAsync(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentAmount !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 60%;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  background-color: aliceblue;\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50cy9jdXN0b21lci1jb3N0LXBheW1lbnQvY3VzdG9tZXItY29zdC1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50cy9jdXN0b21lci1jb3N0LXBheW1lbnQvY3VzdG9tZXItY29zdC1wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuZGl2IHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5kaXY+aDIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogc29saWQgIzIxMjEyMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerCostPaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-customer-cost-payment',
                templateUrl: './customer-cost-payment.component.html',
                styleUrls: ['./customer-cost-payment.component.css']
            }]
    }], function () { return [{ type: _services_api_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__["LanguageSelectorService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _domain_constants_Role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/constants/Role */ "v17P");
/* harmony import */ var _services_user_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-manager.service */ "864E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-components/admin-home/admin-home.component */ "ktu+");
/* harmony import */ var _customer_components_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-components/customer-home/customer-home.component */ "jjDG");








function HomeComponent_app_admin_home_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-home");
} }
function HomeComponent_app_customer_home_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-customer-home");
} }
class HomeComponent {
    constructor(userManager, router) {
        this.userManager = userManager;
        this.router = router;
    }
    ngOnInit() {
        const token = this.userManager.getToken();
        if (!token) {
            this.router.navigate(['/login']);
            return;
        }
        this.isAdmin = token.role === _domain_constants_Role__WEBPACK_IMPORTED_MODULE_1__["Role"].ADMIN;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_manager_service__WEBPACK_IMPORTED_MODULE_2__["UserManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_app_admin_home_0_Template, 1, 0, "app-admin-home", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_customer_home_1_Template, 1, 0, "app-customer-home", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _admin_components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_5__["AdminHomeComponent"], _customer_components_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_6__["CustomerHomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_user_manager_service__WEBPACK_IMPORTED_MODULE_2__["UserManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AVsq":
/*!**************************************!*\
  !*** ./src/app/domain/HumanLimit.ts ***!
  \**************************************/
/*! exports provided: HumanLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanLimit", function() { return HumanLimit; });
/* harmony import */ var _constants_Gender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/Gender */ "mVRz");

class HumanLimit {
    static GetDefaultHumanLimit() {
        return { gender: _constants_Gender__WEBPACK_IMPORTED_MODULE_0__["Gender"].NotSpecified, minAge: 0, maxAge: 100 };
    }
}


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
const BASE_API_URL = 'https://c7b4-176-32-10-240.eu.ngrok.io/';
const environment = {
    production: false,
    baseAPIUrl: BASE_API_URL,
    endpoints: {
        loginAdmin: BASE_API_URL + '/admins/login',
        loginCustomer: BASE_API_URL + '/customers/login',
        registerCustomer: BASE_API_URL + '/customers/register',
        getCustomerPaymentAmount: BASE_API_URL + '/customers/payment',
        payCustomer: BASE_API_URL + '/customers/payment',
        registerAdmin: BASE_API_URL + '/admins/register',
        registerSmartDevice: BASE_API_URL + '/smartdevices/register',
        export: BASE_API_URL + '/servicedata',
        import: BASE_API_URL + '/servicedata',
        getAllSmartDevices: BASE_API_URL + '/smartdevices',
        blockSmartDevice: BASE_API_URL + '/smartdevices/{id}/block',
        resetSmartDevice: BASE_API_URL + '/smartdevices/{id}/reset',
        getStatisticsForSmartDevice: BASE_API_URL + '/smartdevices/{id}/views',
        getCustomerAdvertisements: BASE_API_URL + '/advertisements',
        changeStatusOfAdvertisement: BASE_API_URL + '/advertisements/{id}',
        getStatisticsForAdvertisement: BASE_API_URL + '/advertisements/{id}/views',
        createAdvertisement: BASE_API_URL + '/advertisements'
    },
    selfUAVersion: 'https://ihortsoi.github.io/CV-Ads-Frontend/ua',
    selfENVersion: 'https://ihortsoi.github.io/CV-Ads-Frontend/en'
};


/***/ }),

/***/ "B6lr":
/*!********************************************************!*\
  !*** ./src/app/services/api/authentication.service.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-manager.service */ "864E");





class AuthenticationService {
    constructor(http, userManager) {
        this.http = http;
        this.userManager = userManager;
    }
    registerCustomerAsync(registerData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.registerCustomer, registerData)
            .toPromise()
            .then(() => null)
            .catch(this.retrieveErrorMessage);
    }
    registerAdminAsync(registerData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.registerAdmin, registerData)
            .toPromise()
            .then(() => null)
            .catch(this.retrieveErrorMessage);
    }
    registerSmartDeviceAsync(registerData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.registerSmartDevice, registerData)
            .toPromise()
            .then(() => null)
            .catch(this.retrieveErrorMessage);
    }
    loginCustomerAsync(credentials) {
        return this.loginAsync(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.loginCustomer, credentials);
    }
    loginAdminAsync(credentials) {
        return this.loginAsync(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.loginAdmin, credentials);
    }
    loginAsync(loginEndpoint, credentials) {
        return this.http.post(loginEndpoint, credentials)
            .toPromise()
            .then((token) => {
            this.userManager.saveToken(token);
            return null;
        })
            .catch(this.retrieveErrorMessage);
    }
    retrieveErrorMessage(errorResponse) {
        if (errorResponse.error.message) {
            return errorResponse.error.message;
        }
        return Object.values(errorResponse.error.errors).join('\n');
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_manager_service__WEBPACK_IMPORTED_MODULE_3__["UserManagerService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _user_manager_service__WEBPACK_IMPORTED_MODULE_3__["UserManagerService"] }]; }, null); })();


/***/ }),

/***/ "BlVS":
/*!***************************************************!*\
  !*** ./src/app/domain/CreateAdvertisementData.ts ***!
  \***************************************************/
/*! exports provided: CreateAdvertisementData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdvertisementData", function() { return CreateAdvertisementData; });
class CreateAdvertisementData {
}


/***/ }),

/***/ "EdA8":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin-components/register-smart-device/register-smart-device.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegisterSmartDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSmartDeviceComponent", function() { return RegisterSmartDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/authentication.service */ "B6lr");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language-selector.service */ "aqoI");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function RegisterSmartDeviceComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class RegisterSmartDeviceComponent {
    constructor(authenticationService, languageService, notificationService) {
        this.authenticationService = authenticationService;
        this.languageService = languageService;
        this.notificationService = notificationService;
    }
    ngOnInit() {
    }
    onRegisterAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const registerSmartDeviceData = {
                serialNumber: this.serialNumber,
                password: this.password
            };
            const errorMessage = yield this.authenticationService
                .registerSmartDeviceAsync(registerSmartDeviceData);
            if (errorMessage) {
                this.errorMessage = errorMessage;
            }
            else {
                this.resetLocalData();
                if (this.languageService.getPreferredLanguage() === 'ua') {
                    this.notificationService.displayMessage('Реєстрація пройшла успішно ✅');
                }
                else {
                    this.notificationService.displayMessage('The registration was successful ✅');
                }
            }
        });
    }
    resetLocalData() {
        this.errorMessage = null;
        this.serialNumber = '';
        this.password = '';
    }
}
RegisterSmartDeviceComponent.ɵfac = function RegisterSmartDeviceComponent_Factory(t) { return new (t || RegisterSmartDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__["LanguageSelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
RegisterSmartDeviceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterSmartDeviceComponent, selectors: [["app-register-smart-device"]], decls: 16, vars: 3, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6325773613460994380$$SRC_APP_ADMIN_COMPONENTS_REGISTER_SMART_DEVICE_REGISTER_SMART_DEVICE_COMPONENT_TS_1 = goog.getMsg("New smart device data");
        i18n_0 = MSG_EXTERNAL_6325773613460994380$$SRC_APP_ADMIN_COMPONENTS_REGISTER_SMART_DEVICE_REGISTER_SMART_DEVICE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0414\u0430\u043D\u0456 \u043D\u043E\u0432\u043E\u0433\u043E \u0440\u043E\u0437\u0443\u043C\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1528387043971821375$$SRC_APP_ADMIN_COMPONENTS_REGISTER_SMART_DEVICE_REGISTER_SMART_DEVICE_COMPONENT_TS_3 = goog.getMsg("Serial number: {$tagInput}", { "tagInput": "\uFFFD#8\uFFFD\uFFFD/#8\uFFFD" });
        i18n_2 = MSG_EXTERNAL_1528387043971821375$$SRC_APP_ADMIN_COMPONENTS_REGISTER_SMART_DEVICE_REGISTER_SMART_DEVICE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0421\u0435\u0440\u0456\u0439\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440:\n          " + "\uFFFD#8\uFFFD\uFFFD/#8\uFFFD" + "\n        ";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2712907036888985230$$SRC_APP_ADMIN_COMPONENTS_REGISTER_SMART_DEVICE_REGISTER_SMART_DEVICE_COMPONENT_TS_5 = goog.getMsg("Password: {$tagInput}", { "tagInput": "\uFFFD#12\uFFFD\uFFFD/#12\uFFFD" });
        i18n_4 = MSG_EXTERNAL_2712907036888985230$$SRC_APP_ADMIN_COMPONENTS_REGISTER_SMART_DEVICE_REGISTER_SMART_DEVICE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u041F\u0430\u0440\u043E\u043B\u044C:\n          " + "\uFFFD#12\uFFFD\uFFFD/#12\uFFFD" + "\n        ";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1601928118246178067$$SRC_APP_ADMIN_COMPONENTS_REGISTER_SMART_DEVICE_REGISTER_SMART_DEVICE_COMPONENT_TS_7 = goog.getMsg(" Register ");
        i18n_6 = MSG_EXTERNAL_1601928118246178067$$SRC_APP_ADMIN_COMPONENTS_REGISTER_SMART_DEVICE_REGISTER_SMART_DEVICE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\n          \u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\n        ";
    } return [i18n_0, ["style", "color: #e43e32; font-size: 18px;", 4, "ngIf"], ["ngNativeValidate", "", 3, "submit"], i18n_2, ["type", "text", "required", "", "autocomplete", "off", "name", "serialNumber", 3, "ngModel", "ngModelChange"], i18n_4, ["type", "password", "required", "", "autocomplete", "off", "name", "password", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-raised-button", "", "color", "primary"], i18n_6, [2, "color", "#e43e32", "font-size", "18px"]]; }, template: function RegisterSmartDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterSmartDeviceComponent_p_4_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function RegisterSmartDeviceComponent_Template_form_submit_5_listener() { return ctx.onRegisterAsync(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterSmartDeviceComponent_Template_input_ngModelChange_8_listener($event) { return ctx.serialNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterSmartDeviceComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.serialNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 60%;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  background-color: aliceblue;\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 18px;\r\n  padding: 5px;\r\n  margin-top: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9yZWdpc3Rlci1zbWFydC1kZXZpY2UvcmVnaXN0ZXItc21hcnQtZGV2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9yZWdpc3Rlci1zbWFydC1kZXZpY2UvcmVnaXN0ZXItc21hcnQtZGV2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuZGl2IHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5kaXY+aDIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterSmartDeviceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register-smart-device',
                templateUrl: './register-smart-device.component.html',
                styleUrls: ['./register-smart-device.component.css']
            }]
    }], function () { return [{ type: _services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__["LanguageSelectorService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "KqBD":
/*!*********************************************************!*\
  !*** ./src/app/domain/constants/AdvertisementStatus.ts ***!
  \*********************************************************/
/*! exports provided: AdvertisementStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementStatus", function() { return AdvertisementStatus; });
var AdvertisementStatus;
(function (AdvertisementStatus) {
    AdvertisementStatus[AdvertisementStatus["Published"] = 0] = "Published";
    AdvertisementStatus[AdvertisementStatus["Draft"] = 1] = "Draft";
})(AdvertisementStatus || (AdvertisementStatus = {}));


/***/ }),

/***/ "KvZh":
/*!**********************************************************************************!*\
  !*** ./src/app/customer-components/add-human-limit/add-human-limit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddHumanLimitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHumanLimitComponent", function() { return AddHumanLimitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _domain_HumanLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/HumanLimit */ "AVsq");
/* harmony import */ var _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/constants/Gender */ "mVRz");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class AddHumanLimitComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.humanLimit = new _domain_HumanLimit__WEBPACK_IMPORTED_MODULE_1__["HumanLimit"]();
        this.Gender = _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_2__["Gender"];
    }
    onAddHumanLimit() {
        this.humanLimit.gender = Number(this.humanLimit.gender);
        this.dialogRef.close(this.humanLimit);
    }
}
AddHumanLimitComponent.ɵfac = function AddHumanLimitComponent_Factory(t) { return new (t || AddHumanLimitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"])); };
AddHumanLimitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddHumanLimitComponent, selectors: [["app-add-human-limit"]], decls: 28, vars: 6, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2640637760017686308$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_1 = goog.getMsg("Add human limit");
        i18n_0 = MSG_EXTERNAL_2640637760017686308$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0435\u0433\u043C\u0435\u043D\u0442 \u0446\u0456\u043B\u044C\u0432\u043E\u0457 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u0457";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6283914624769804238$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_3 = goog.getMsg("Gender:");
        i18n_2 = MSG_EXTERNAL_6283914624769804238$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0421\u0442\u0430\u0442\u044C:";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_95213720452925222$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_5 = goog.getMsg("Not specified");
        i18n_4 = MSG_EXTERNAL_95213720452925222$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u041D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8012344910054029733$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_7 = goog.getMsg("Male");
        i18n_6 = MSG_EXTERNAL_8012344910054029733$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0430";
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5667840900782067941$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_9 = goog.getMsg("Female");
        i18n_8 = MSG_EXTERNAL_5667840900782067941$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "\u0416\u0456\u043D\u043E\u0447\u0430";
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8102250304341488382$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_11 = goog.getMsg("Minimum age: {$tagInput}", { "tagInput": "\uFFFD#17\uFFFD\uFFFD/#17\uFFFD" });
        i18n_10 = MSG_EXTERNAL_8102250304341488382$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u0456\u043A:\n      " + "\uFFFD#17\uFFFD\uFFFD/#17\uFFFD" + "\n    ";
    } var i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5989544844417038507$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_13 = goog.getMsg("Maximum age: {$tagInput}", { "tagInput": "\uFFFD#22\uFFFD\uFFFD/#22\uFFFD" });
        i18n_12 = MSG_EXTERNAL_5989544844417038507$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_13;
    }
    else {
        i18n_12 = "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u0456\u043A:\n      " + "\uFFFD#22\uFFFD\uFFFD/#22\uFFFD" + "\n    ";
    } var i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7469556530501499968$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_15 = goog.getMsg("Add new human limit");
        i18n_14 = MSG_EXTERNAL_7469556530501499968$$SRC_APP_CUSTOMER_COMPONENTS_ADD_HUMAN_LIMIT_ADD_HUMAN_LIMIT_COMPONENT_TS_15;
    }
    else {
        i18n_14 = "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0435\u0433\u043C\u0435\u043D\u0442 \u0446\u0456\u043B\u044C\u0432\u043E\u0457 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u0457";
    } return [i18n_0, ["ngNativeValidate", "", 3, "submit"], ["for", "genderSelect"], i18n_2, ["name", "gender", "required", "", "id", "genderSelect", 3, "ngModel", "ngModelChange"], [3, "value"], i18n_4, i18n_6, i18n_8, i18n_10, ["type", "number", "min", "0", "max", "100", "name", "minAge", "required", "", 3, "ngModel", "ngModelChange"], i18n_12, ["type", "number", "min", "0", "max", "100", "name", "maxAge", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-button", "", "color", "accent"], [2, "font-size", "15px"], i18n_14]; }, template: function AddHumanLimitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddHumanLimitComponent_Template_form_submit_3_listener() { return ctx.onAddHumanLimit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddHumanLimitComponent_Template_select_ngModelChange_6_listener($event) { return ctx.humanLimit.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddHumanLimitComponent_Template_input_ngModelChange_17_listener($event) { return ctx.humanLimit.minAge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](21, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddHumanLimitComponent_Template_input_ngModelChange_22_listener($event) { return ctx.humanLimit.maxAge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](27, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.humanLimit.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.Gender.NotSpecified);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.Gender.Male);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.Gender.Female);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.humanLimit.minAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.humanLimit.maxAge);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 20px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50cy9hZGQtaHVtYW4tbGltaXQvYWRkLWh1bWFuLWxpbWl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWNvbXBvbmVudHMvYWRkLWh1bWFuLWxpbWl0L2FkZC1odW1hbi1saW1pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddHumanLimitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-human-limit',
                templateUrl: './add-human-limit.component.html',
                styleUrls: ['./add-human-limit.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "LjMN":
/*!********************************************************************!*\
  !*** ./src/app/services/interceptors/authorization.interceptor.ts ***!
  \********************************************************************/
/*! exports provided: AuthorizationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationInterceptor", function() { return AuthorizationInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-manager.service */ "864E");



class AuthorizationInterceptor {
    constructor(userManager) {
        this.userManager = userManager;
    }
    intercept(request, next) {
        const token = this.userManager.getToken();
        if (token !== null) {
            const authorizedRequest = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + token.accessToken)
            });
            return next.handle(authorizedRequest);
        }
        return next.handle(request);
    }
}
AuthorizationInterceptor.ɵfac = function AuthorizationInterceptor_Factory(t) { return new (t || AuthorizationInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_manager_service__WEBPACK_IMPORTED_MODULE_1__["UserManagerService"])); };
AuthorizationInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationInterceptor, factory: AuthorizationInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _user_manager_service__WEBPACK_IMPORTED_MODULE_1__["UserManagerService"] }]; }, null); })();


/***/ }),

/***/ "NTXF":
/*!**************************************************************************************************!*\
  !*** ./src/app/customer-components/customer-advertisements/customer-advertisements.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CustomerAdvertisementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAdvertisementsComponent", function() { return CustomerAdvertisementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _domain_constants_AdvertisementStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/constants/AdvertisementStatus */ "KqBD");
/* harmony import */ var _advertisement_details_advertisement_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../advertisement-details/advertisement-details.component */ "0bpm");
/* harmony import */ var _services_api_advertisement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/advertisement.service */ "5Z0V");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/language-selector.service */ "aqoI");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");














function CustomerAdvertisementsComponent_mat_grid_tile_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerAdvertisementsComponent_mat_grid_tile_5_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onOpenDetails(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerAdvertisementsComponent_mat_grid_tile_5_Template_h2_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onOpenDetails(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-slide-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerAdvertisementsComponent_mat_grid_tile_5_Template_mat_slide_toggle_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onStatusToggleAsync(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ad_r1.pictureLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\"", ad_r1.name, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ad_r1.viewsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ad_r1.viewsLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ad_r1.status === ctx_r0.AdvertisementStatus.Published);
} }
class CustomerAdvertisementsComponent {
    constructor(advertisementService, languageService, notificationService, dialog) {
        this.advertisementService = advertisementService;
        this.languageService = languageService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.AdvertisementStatus = _domain_constants_AdvertisementStatus__WEBPACK_IMPORTED_MODULE_2__["AdvertisementStatus"];
    }
    ngOnInit() {
        this.advertisementService.getCustomerAdvertisementsAsync()
            .then(advertisements => this.advertisements = advertisements);
        this.advertisementCreatedObservable.subscribe({
            next: () => this.advertisementService.getCustomerAdvertisementsAsync()
                .then(advertisements => this.advertisements = advertisements)
        });
    }
    onStatusToggleAsync(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.toggleAdvertisementStatus(index);
            yield this.advertisementService.updateAdvertisementStatusAsync(this.advertisements[index]);
            this.displayLocalizedSuccessfulMessage();
        });
    }
    onOpenDetails(index) {
        const ad = this.advertisements[index];
        this.dialog.open(_advertisement_details_advertisement_details_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisementDetailsComponent"], { data: ad, width: '80%' });
    }
    toggleAdvertisementStatus(index) {
        if (this.advertisements[index].status === _domain_constants_AdvertisementStatus__WEBPACK_IMPORTED_MODULE_2__["AdvertisementStatus"].Published) {
            this.advertisements[index].status = _domain_constants_AdvertisementStatus__WEBPACK_IMPORTED_MODULE_2__["AdvertisementStatus"].Draft;
        }
        else {
            this.advertisements[index].status = _domain_constants_AdvertisementStatus__WEBPACK_IMPORTED_MODULE_2__["AdvertisementStatus"].Published;
        }
    }
    displayLocalizedSuccessfulMessage() {
        if (this.languageService.getPreferredLanguage() === 'ua') {
            this.notificationService.displayMessage('Статус рекламного оголошення було успішно змінено ✅');
        }
        else {
            this.notificationService.displayMessage('The advertisement status was updated successfully ✅');
        }
    }
}
CustomerAdvertisementsComponent.ɵfac = function CustomerAdvertisementsComponent_Factory(t) { return new (t || CustomerAdvertisementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_advertisement_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_5__["LanguageSelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
CustomerAdvertisementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerAdvertisementsComponent, selectors: [["app-customer-advertisements"]], inputs: { advertisementCreatedObservable: "advertisementCreatedObservable" }, decls: 6, vars: 2, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6070880194812763519$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_ADVERTISEMENTS_CUSTOMER_ADVERTISEMENTS_COMPONENT_TS_1 = goog.getMsg(" My advertisements ");
        i18n_0 = MSG_EXTERNAL_6070880194812763519$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_ADVERTISEMENTS_CUSTOMER_ADVERTISEMENTS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\n      \u041C\u043E\u0457 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F\n    ";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9098468063764152135$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_ADVERTISEMENTS_CUSTOMER_ADVERTISEMENTS_COMPONENT_TS__3 = goog.getMsg("Views count: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_2 = MSG_EXTERNAL_9098468063764152135$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_ADVERTISEMENTS_CUSTOMER_ADVERTISEMENTS_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u0456\u0432: " + "\uFFFD0\uFFFD" + "";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3538236466596886638$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_ADVERTISEMENTS_CUSTOMER_ADVERTISEMENTS_COMPONENT_TS__5 = goog.getMsg("Views limit: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_4 = MSG_EXTERNAL_3538236466596886638$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_ADVERTISEMENTS_CUSTOMER_ADVERTISEMENTS_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "\u041E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F \u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u0456\u0432: " + "\uFFFD0\uFFFD" + "";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7670648600270137368$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_ADVERTISEMENTS_CUSTOMER_ADVERTISEMENTS_COMPONENT_TS__7 = goog.getMsg(" Published: ");
        i18n_6 = MSG_EXTERNAL_7670648600270137368$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_ADVERTISEMENTS_CUSTOMER_ADVERTISEMENTS_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "\n                      \u041E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u043E:\n                    ";
    } return [[1, "container"], i18n_0, ["cols", "3", "rowHeight", "1:1.1", 3, "gutterSize"], [4, "ngFor", "ngForOf"], [1, "card"], ["alt", "Advertisement picture", 3, "src", "click"], [3, "click"], i18n_2, i18n_4, [2, "display", "flex", "margin", "5px 10px", "color", "white", "justify-content", "space-between"], [2, "font-size", "20px", "margin-top", "auto", "margin-bottom", "auto", "margin-right", "10px"], i18n_6, [3, "checked", "change"]]; }, template: function CustomerAdvertisementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomerAdvertisementsComponent_mat_grid_tile_5_Template, 16, 5, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gutterSize", "20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.advertisements);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 90%;\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  background-color: aliceblue;\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\ndiv.card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #212121;\r\n}\r\n\r\ndiv.card[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  height: 60%;\r\n  object-fit: cover;\r\n  margin: 10px;\r\n  width: calc(100% - 20px);\r\n  outline: solid white;\r\n}\r\n\r\ndiv.card[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-left: 10px;\r\n  margin-bottom: 0;\r\n}\r\n\r\ndiv.card[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%] {\r\n  color: aliceblue;\r\n  margin-left: 10px;\r\n  margin-bottom: 0;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50cy9jdXN0b21lci1hZHZlcnRpc2VtZW50cy9jdXN0b21lci1hZHZlcnRpc2VtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci1jb21wb25lbnRzL2N1c3RvbWVyLWFkdmVydGlzZW1lbnRzL2N1c3RvbWVyLWFkdmVydGlzZW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuZGl2LmNvbnRhaW5lcj5oMiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5kaXYuY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuXHJcbmRpdi5jYXJkPmltZyB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICBvdXRsaW5lOiBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuZGl2LmNhcmQ+aDIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5kaXYuY2FyZD5oMyB7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMjEyMTIxO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerAdvertisementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-customer-advertisements',
                templateUrl: './customer-advertisements.component.html',
                styleUrls: ['./customer-advertisements.component.css']
            }]
    }], function () { return [{ type: _services_api_advertisement_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_5__["LanguageSelectorService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, { advertisementCreatedObservable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "OC8m":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



const DEFAULT_DURATION = 4000;
const DEFAULT_ACTION = 'OK';
class NotificationService {
    constructor(snackBarService) {
        this.snackBarService = snackBarService;
    }
    displayMessage(message, duration, action) {
        this.snackBarService.open(message, action !== null && action !== void 0 ? action : DEFAULT_ACTION, {
            duration: duration !== null && duration !== void 0 ? duration : DEFAULT_DURATION
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Q/ev":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin-components/admin-reset-smart-device/admin-reset-smart-device.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AdminResetSmartDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminResetSmartDeviceComponent", function() { return AdminResetSmartDeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class AdminResetSmartDeviceComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    onSetNewPassword() {
        this.dialogRef.close(this.newPassword);
    }
}
AdminResetSmartDeviceComponent.ɵfac = function AdminResetSmartDeviceComponent_Factory(t) { return new (t || AdminResetSmartDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AdminResetSmartDeviceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminResetSmartDeviceComponent, selectors: [["app-admin-reset-smart-device"]], decls: 8, vars: 1, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3843960037862845732$$SRC_APP_ADMIN_COMPONENTS_ADMIN_RESET_SMART_DEVICE_ADMIN_RESET_SMART_DEVICE_COMPONENT_TS_1 = goog.getMsg("What is the new password?");
        i18n_0 = MSG_EXTERNAL_3843960037862845732$$SRC_APP_ADMIN_COMPONENTS_ADMIN_RESET_SMART_DEVICE_ADMIN_RESET_SMART_DEVICE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u042F\u043A\u0438\u0439 \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C?";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4099895221156718403$$SRC_APP_ADMIN_COMPONENTS_ADMIN_RESET_SMART_DEVICE_ADMIN_RESET_SMART_DEVICE_COMPONENT_TS_3 = goog.getMsg("Set new password");
        i18n_2 = MSG_EXTERNAL_4099895221156718403$$SRC_APP_ADMIN_COMPONENTS_ADMIN_RESET_SMART_DEVICE_ADMIN_RESET_SMART_DEVICE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C";
    } return [["mat-dialog-title", ""], i18n_0, ["ngNativeValidate", "", 3, "submit"], ["type", "password", "required", "", "name", "newPassword", 2, "font-size", "15px", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-button", "", "color", "accent"], [2, "font-size", "15px"], i18n_2]; }, template: function AdminResetSmartDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AdminResetSmartDeviceComponent_Template_form_submit_3_listener() { return ctx.onSetNewPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminResetSmartDeviceComponent_Template_input_ngModelChange_4_listener($event) { return ctx.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvYWRtaW4tcmVzZXQtc21hcnQtZGV2aWNlL2FkbWluLXJlc2V0LXNtYXJ0LWRldmljZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminResetSmartDeviceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-reset-smart-device',
                templateUrl: './admin-reset-smart-device.component.html',
                styleUrls: ['./admin-reset-smart-device.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "QR/Y":
/*!********************************************************************************************!*\
  !*** ./src/app/customer-components/create-advertisement/create-advertisement.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CreateAdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdvertisementComponent", function() { return CreateAdvertisementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _domain_CreateAdvertisementData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/CreateAdvertisementData */ "BlVS");
/* harmony import */ var src_app_domain_HumanLimit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/HumanLimit */ "AVsq");
/* harmony import */ var src_app_domain_TimePeriodLimit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/TimePeriodLimit */ "8Ofh");
/* harmony import */ var _add_human_limit_add_human_limit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-human-limit/add-human-limit.component */ "KvZh");
/* harmony import */ var _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/constants/Gender */ "mVRz");
/* harmony import */ var _add_time_limit_add_time_limit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-time-limit/add-time-limit.component */ "3U2V");
/* harmony import */ var _services_api_advertisement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api/advertisement.service */ "5Z0V");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/language-selector.service */ "aqoI");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");

















function CreateAdvertisementComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 36);
} }
function CreateAdvertisementComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.displayErrorMessages[0], " ");
} }
function CreateAdvertisementComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 38);
} }
function CreateAdvertisementComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 39);
} }
function CreateAdvertisementComponent_p_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateAdvertisementComponent_div_44_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const humanLimit_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](humanLimit_r12);
} }
function CreateAdvertisementComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateAdvertisementComponent_div_44_p_3_Template, 2, 1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.humanLimits);
} }
function CreateAdvertisementComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 44);
} }
function CreateAdvertisementComponent_p_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateAdvertisementComponent_div_57_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeLimit_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timeLimit_r14);
} }
function CreateAdvertisementComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateAdvertisementComponent_div_57_p_3_Template, 2, 1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.timeLimits);
} }
function CreateAdvertisementComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 47);
} }
class CreateAdvertisementComponent {
    constructor(advertisementService, languageService, notificationService, dialog, router) {
        this.advertisementService = advertisementService;
        this.languageService = languageService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.router = router;
        this.advertisement = new _domain_CreateAdvertisementData__WEBPACK_IMPORTED_MODULE_1__["CreateAdvertisementData"]();
        this.displayErrorMessages = [];
        this.validators = [
            [
                () => this.advertisement.name && this.advertisement.name.trim() !== '',
                () => this.advertisement.viewsLimit && this.advertisement.viewsLimit > 0,
                () => this.advertisement.formFile
            ]
        ];
        this.errorMessages = [
            [
                ['The name is required.', 'Ім\'я обов\'язкове для заповнення.'],
                [
                    'The views limit is required and must be greater than 0.',
                    'Максимальна кількість показів обов\'язкова для заповнення та більше 0.'
                ],
                [
                    'The picture is required.',
                    'Зображення обов\'язкове для для створення оголошення.'
                ]
            ]
        ];
    }
    get firstStepCompleted() {
        return this.getStepCompleted(0);
    }
    get humanLimits() {
        return this.advertisement.humanLimits.map(humanLimit => {
            if (this.languageService.getPreferredLanguage() === 'ua') {
                let humanLimitLabel = '';
                switch (humanLimit.gender) {
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_5__["Gender"].NotSpecified:
                        humanLimitLabel += 'чоловік або жінка 👨👩';
                        break;
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_5__["Gender"].Male:
                        humanLimitLabel += 'чоловік 👨';
                        break;
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_5__["Gender"].Female:
                        humanLimitLabel += 'жінка 👩';
                        break;
                }
                humanLimitLabel += ` від ${humanLimit.minAge} до ${humanLimit.maxAge} років`;
                return humanLimitLabel;
            }
            else {
                let humanLimitLabel = '';
                switch (humanLimit.gender) {
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_5__["Gender"].NotSpecified:
                        humanLimitLabel += 'male or female 👨👩';
                        break;
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_5__["Gender"].Male:
                        humanLimitLabel += 'male 👨';
                        break;
                    case _domain_constants_Gender__WEBPACK_IMPORTED_MODULE_5__["Gender"].Female:
                        humanLimitLabel += 'female 👩';
                        break;
                }
                humanLimitLabel += ` from ${humanLimit.minAge} to ${humanLimit.maxAge} years old`;
                return humanLimitLabel;
            }
        });
    }
    get timeLimits() {
        return this.advertisement.timePeriodLimits.map(timeLimit => {
            const fromTimeLabel = this.getTimeLabelFromMinutes(timeLimit.fromInMinutes);
            const toTimeLabel = this.getTimeLabelFromMinutes(timeLimit.toInMinutes);
            return `${fromTimeLabel} - ${toTimeLabel}`;
        });
    }
    onNext(index) {
        const ua = 1;
        const en = 0;
        for (let i = 0; i < this.validators[index].length; i++) {
            if (!this.validators[index][i]()) {
                if (this.languageService.getPreferredLanguage() === 'ua') {
                    this.displayErrorMessages[index] = this.errorMessages[index][i][ua];
                }
                else {
                    this.displayErrorMessages[index] = this.errorMessages[index][i][en];
                }
                break;
            }
        }
    }
    onFileSelected(event) {
        this.advertisement.formFile = event.target.files[0];
    }
    onAddHumanLimit() {
        const dialogRef = this.dialog
            .open(_add_human_limit_add_human_limit_component__WEBPACK_IMPORTED_MODULE_4__["AddHumanLimitComponent"]);
        dialogRef.afterClosed()
            .toPromise()
            .then(humanLimit => {
            if (humanLimit) {
                if (this.advertisement.humanLimits) {
                    this.advertisement.humanLimits = [...this.advertisement.humanLimits, humanLimit];
                }
                else {
                    this.advertisement.humanLimits = [humanLimit];
                }
            }
        });
    }
    onAddTimeLimit() {
        const dialogRef = this.dialog
            .open(_add_time_limit_add_time_limit_component__WEBPACK_IMPORTED_MODULE_6__["AddTimeLimitComponent"]);
        dialogRef.afterClosed()
            .toPromise()
            .then(timeLimit => {
            if (timeLimit) {
                if (this.advertisement.timePeriodLimits) {
                    this.advertisement.timePeriodLimits = [...this.advertisement.timePeriodLimits, timeLimit];
                }
                else {
                    this.advertisement.timePeriodLimits = [timeLimit];
                }
            }
        });
    }
    onDone() {
        if (!this.advertisement.humanLimits || this.advertisement.humanLimits.length === 0) {
            this.advertisement.humanLimits = [src_app_domain_HumanLimit__WEBPACK_IMPORTED_MODULE_2__["HumanLimit"].GetDefaultHumanLimit()];
        }
        if (!this.advertisement.timePeriodLimits || this.advertisement.timePeriodLimits.length === 0) {
            this.advertisement.timePeriodLimits = [src_app_domain_TimePeriodLimit__WEBPACK_IMPORTED_MODULE_3__["TimePeriodLimit"].GetDefaultTimePeriodLimit()];
        }
        this.advertisementService.createAsync(this.advertisement)
            .then(() => {
            this.createAdvertisementSubject.next(null);
            if (this.languageService.getPreferredLanguage() === 'ua') {
                this.notificationService.displayMessage('Оголошення створене ✅');
            }
            else {
                this.notificationService.displayMessage('The advertisement was created ✅');
            }
        });
    }
    getStepCompleted(index) {
        if (!this.validators[index].every(v => v())) {
            return false;
        }
        this.displayErrorMessages[index] = null;
        return true;
    }
    getTimeLabelFromMinutes(minutes) {
        const labelHours = Math.floor(minutes / 60).toString();
        const labelMinutes = (minutes % 60).toString();
        return `${labelHours.length === 2 ? labelHours : ('0' + labelHours)}:` +
            `${labelMinutes.length === 2 ? labelMinutes : ('0' + labelMinutes)}`;
    }
}
CreateAdvertisementComponent.ɵfac = function CreateAdvertisementComponent_Factory(t) { return new (t || CreateAdvertisementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_advertisement_service__WEBPACK_IMPORTED_MODULE_7__["AdvertisementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_8__["LanguageSelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
CreateAdvertisementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateAdvertisementComponent, selectors: [["app-create-advertisement"]], inputs: { createAdvertisementSubject: "createAdvertisementSubject" }, decls: 77, vars: 13, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5142263391182693003$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_1 = goog.getMsg("Create advertisement");
        i18n_0 = MSG_EXTERNAL_5142263391182693003$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7658402240953727096$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_3 = goog.getMsg("Name:");
        i18n_2 = MSG_EXTERNAL_7658402240953727096$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u041D\u0430\u0437\u0432\u0430:";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1459551502072867140$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_5 = goog.getMsg("Views count limit:");
        i18n_4 = MSG_EXTERNAL_1459551502072867140$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u041E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F \u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u0456\u0432:";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7108703553356296657$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_7 = goog.getMsg("Picture:");
        i18n_6 = MSG_EXTERNAL_7108703553356296657$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F:";
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1158167302755020867$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_9 = goog.getMsg(" Load picture ");
        i18n_8 = MSG_EXTERNAL_1158167302755020867$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "\n              \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F\n            ";
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7429764807078135739$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_11 = goog.getMsg(" Next ");
        i18n_10 = MSG_EXTERNAL_7429764807078135739$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "\n                  \u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430\n                ";
    } var i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4863373404095396982$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_13 = goog.getMsg("Country:");
        i18n_12 = MSG_EXTERNAL_4863373404095396982$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_13;
    }
    else {
        i18n_12 = "\u041A\u0440\u0430\u0457\u043D\u0430:";
    } var i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8499614752066309224$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_15 = goog.getMsg("City:");
        i18n_14 = MSG_EXTERNAL_8499614752066309224$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_15;
    }
    else {
        i18n_14 = "\u041C\u0456\u0441\u0442\u043E:";
    } var i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8890553633144307762$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_17 = goog.getMsg("Back");
        i18n_16 = MSG_EXTERNAL_8890553633144307762$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_17;
    }
    else {
        i18n_16 = "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044F";
    } var i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3885497195825665706$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_19 = goog.getMsg("Next");
        i18n_18 = MSG_EXTERNAL_3885497195825665706$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_19;
    }
    else {
        i18n_18 = "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430";
    } var i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1607991630966513641$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_21 = goog.getMsg(" Add human limit ");
        i18n_20 = MSG_EXTERNAL_1607991630966513641$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_21;
    }
    else {
        i18n_20 = "\n              \u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0435\u0433\u043C\u0435\u043D\u0442 \u0446\u0456\u043B\u044C\u0432\u043E\u0457 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u0457\n            ";
    } var i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8890553633144307762$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_23 = goog.getMsg("Back");
        i18n_22 = MSG_EXTERNAL_8890553633144307762$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_23;
    }
    else {
        i18n_22 = "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044F";
    } var i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3885497195825665706$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_25 = goog.getMsg("Next");
        i18n_24 = MSG_EXTERNAL_3885497195825665706$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_25;
    }
    else {
        i18n_24 = "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430";
    } var i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1785324072432127445$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_27 = goog.getMsg(" Add time limit ");
        i18n_26 = MSG_EXTERNAL_1785324072432127445$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_27;
    }
    else {
        i18n_26 = "\n              \u0414\u043E\u0434\u0430\u0442\u0438 \u0447\u0430\u0441\u043E\u0432\u0435 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F\n            ";
    } var i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8890553633144307762$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_29 = goog.getMsg("Back");
        i18n_28 = MSG_EXTERNAL_8890553633144307762$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_29;
    }
    else {
        i18n_28 = "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044F";
    } var i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3885497195825665706$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_31 = goog.getMsg("Next");
        i18n_30 = MSG_EXTERNAL_3885497195825665706$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_31;
    }
    else {
        i18n_30 = "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430";
    } var i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5589819645991394750$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_33 = goog.getMsg("To create an advertisement click 'Create!' button.");
        i18n_32 = MSG_EXTERNAL_5589819645991394750$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_33;
    }
    else {
        i18n_32 = "\u0429\u043E\u0431 \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 '\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438!'.";
    } var i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8890553633144307762$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_35 = goog.getMsg("Back");
        i18n_34 = MSG_EXTERNAL_8890553633144307762$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_35;
    }
    else {
        i18n_34 = "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044F";
    } var i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3451248186637504028$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_37 = goog.getMsg("Create!");
        i18n_36 = MSG_EXTERNAL_3451248186637504028$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS_37;
    }
    else {
        i18n_36 = "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438!";
    } var i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_123842545276072825$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__39 = goog.getMsg("General information");
        i18n_38 = MSG_EXTERNAL_123842545276072825$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__39;
    }
    else {
        i18n_38 = "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F";
    } var i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6696638177944893849$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__41 = goog.getMsg("Location configuration");
        i18n_40 = MSG_EXTERNAL_6696638177944893849$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__41;
    }
    else {
        i18n_40 = "\u0422\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0430\u043B\u044C\u043D\u0456 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F";
    } var i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8311567524003886118$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__43 = goog.getMsg("Human limits");
        i18n_42 = MSG_EXTERNAL_8311567524003886118$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__43;
    }
    else {
        i18n_42 = "\u0421\u0435\u0433\u043C\u0435\u043D\u0442\u0438 \u0446\u0456\u043B\u044C\u0432\u043E\u0457 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u0457";
    } var i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2412222031724247253$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__45 = goog.getMsg("No human limits specified.");
        i18n_44 = MSG_EXTERNAL_2412222031724247253$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__45;
    }
    else {
        i18n_44 = "\u0421\u0435\u0433\u043C\u0435\u043D\u0442\u0438 \u0446\u0456\u043B\u044C\u0432\u043E\u0457 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u0457 \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456.";
    } var i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_861833557838776572$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__47 = goog.getMsg(" Human Limits: ");
        i18n_46 = MSG_EXTERNAL_861833557838776572$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__47;
    }
    else {
        i18n_46 = "\n                  \u0421\u0435\u0433\u043C\u0435\u043D\u0442\u0438 \u0446\u0456\u043B\u044C\u0432\u043E\u0457 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u0457:\n                ";
    } var i18n_48; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3571249666568832086$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__49 = goog.getMsg("Time limits");
        i18n_48 = MSG_EXTERNAL_3571249666568832086$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__49;
    }
    else {
        i18n_48 = "\u0427\u0430\u0441\u043E\u0432\u0456 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F";
    } var i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2795042268735641165$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__51 = goog.getMsg("No time limits specified.");
        i18n_50 = MSG_EXTERNAL_2795042268735641165$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__51;
    }
    else {
        i18n_50 = "\u0427\u0430\u0441\u043E\u0432\u0456 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456.";
    } var i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3227338399011354655$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__53 = goog.getMsg(" Time Limits: ");
        i18n_52 = MSG_EXTERNAL_3227338399011354655$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__53;
    }
    else {
        i18n_52 = "\n                  \u0427\u0430\u0441\u043E\u0432\u0456 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F:\n                ";
    } var i18n_54; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_397098723873502323$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__55 = goog.getMsg("Done");
        i18n_54 = MSG_EXTERNAL_397098723873502323$$SRC_APP_CUSTOMER_COMPONENTS_CREATE_ADVERTISEMENT_CREATE_ADVERTISEMENT_COMPONENT_TS__55;
    }
    else {
        i18n_54 = "\u0413\u043E\u0442\u043E\u0432\u043E";
    } return [[1, "container"], i18n_0, ["linear", ""], [3, "completed"], ["matStepLabel", ""], ["style", "color: red;", 4, "ngIf"], i18n_2, ["type", "text", 3, "ngModel", "ngModelChange"], i18n_4, ["type", "number", 3, "ngModel", "ngModelChange"], i18n_6, ["type", "file", "accept", "image/jpeg", 2, "display", "none", 3, "change"], ["fileLoader", ""], ["mat-raised-button", "", "color", "primary", 2, "width", "200px", 3, "click"], i18n_8, ["mat-raised-button", "", "matStepperNext", "", "color", "primary", 3, "click"], i18n_10, [3, "optional"], i18n_12, i18n_14, ["mat-raised-button", "", "matStepperPrevious", ""], i18n_16, ["mat-raised-button", "", "matStepperNext", "", "color", "primary"], i18n_18, [4, "ngIf"], ["mat-raised-button", "", "color", "accent", 2, "width", "300px", 3, "click"], i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, i18n_34, ["mat-raised-button", "", "color", "accent", 3, "click"], i18n_36, i18n_38, [2, "color", "red"], i18n_40, i18n_42, i18n_44, i18n_46, ["style", "margin-left: 20px;", 4, "ngFor", "ngForOf"], [2, "margin-left", "20px"], i18n_48, i18n_50, i18n_52, i18n_54]; }, template: function CreateAdvertisementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-horizontal-stepper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateAdvertisementComponent_ng_template_6_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateAdvertisementComponent_p_8_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateAdvertisementComponent_Template_input_ngModelChange_11_listener($event) { return ctx.advertisement.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateAdvertisementComponent_Template_input_ngModelChange_14_listener($event) { return ctx.advertisement.viewsLimit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateAdvertisementComponent_Template_input_change_17_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAdvertisementComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAdvertisementComponent_Template_button_click_23_listener() { return ctx.onNext(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-step", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CreateAdvertisementComponent_ng_template_26_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](29, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateAdvertisementComponent_Template_input_ngModelChange_30_listener($event) { return ctx.advertisement.countryScope = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](32, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateAdvertisementComponent_Template_input_ngModelChange_33_listener($event) { return ctx.advertisement.cityScope = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](37, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](39, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-step", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CreateAdvertisementComponent_ng_template_41_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CreateAdvertisementComponent_p_43_Template, 2, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CreateAdvertisementComponent_div_44_Template, 4, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAdvertisementComponent_Template_button_click_45_listener() { return ctx.onAddHumanLimit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](46, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](50, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](52, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-step", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CreateAdvertisementComponent_ng_template_54_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CreateAdvertisementComponent_p_56_Template, 2, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CreateAdvertisementComponent_div_57_Template, 4, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAdvertisementComponent_Template_button_click_58_listener() { return ctx.onAddTimeLimit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](59, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](63, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](65, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, CreateAdvertisementComponent_ng_template_67_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](70, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](74, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAdvertisementComponent_Template_button_click_75_listener() { return ctx.onDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](76, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", ctx.firstStepCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayErrorMessages[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.viewsLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.countryScope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.advertisement.cityScope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.advertisement.humanLimits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advertisement.humanLimits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.advertisement.timePeriodLimits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advertisement.timePeriodLimits);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperPrevious"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 90%;\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  background-color: aliceblue;\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: white;\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 98%;\r\n  font-size: 20px;\r\n  padding: 4px;\r\n  margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50cy9jcmVhdGUtYWR2ZXJ0aXNlbWVudC9jcmVhdGUtYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItY29tcG9uZW50cy9jcmVhdGUtYWR2ZXJ0aXNlbWVudC9jcmVhdGUtYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXI+aDIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogOTglO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateAdvertisementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-advertisement',
                templateUrl: './create-advertisement.component.html',
                styleUrls: ['./create-advertisement.component.css']
            }]
    }], function () { return [{ type: _services_api_advertisement_service__WEBPACK_IMPORTED_MODULE_7__["AdvertisementService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_8__["LanguageSelectorService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }]; }, { createAdvertisementSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _domain_constants_Role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/constants/Role */ "v17P");
/* harmony import */ var _services_user_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user-manager.service */ "864E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/language-selector.service */ "aqoI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");











function AppComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "CV - Ads\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_toolbar_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_toolbar_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "CV - Ads\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_mat_toolbar_1_span_1_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_mat_toolbar_1_span_2_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-menu", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_mat_toolbar_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onLanguageChange("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](12, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_mat_toolbar_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onLanguageChange("ua"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_mat_toolbar_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onLogoutAsync(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](17, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r1.token.firstName)(ctx_r1.token.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r4);
} }
class AppComponent {
    constructor(userManager, router, languageSelectorService) {
        this.userManager = userManager;
        this.router = router;
        this.languageSelectorService = languageSelectorService;
    }
    ngOnInit() {
        this.userManager.getTokenUpdateStream().subscribe({
            next: () => {
                this.token = this.userManager.getToken();
                if (this.token !== null) {
                    this.isAdmin = this.token.role === _domain_constants_Role__WEBPACK_IMPORTED_MODULE_2__["Role"].ADMIN;
                }
            }
        });
    }
    onLogoutAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userManager.deleteToken();
            yield this.router.navigate(['/login']);
        });
    }
    onLanguageChange(newLanguage) {
        this.languageSelectorService.setPreferredLanguage(newLanguage);
        // redirect to another locale build
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_manager_service__WEBPACK_IMPORTED_MODULE_3__["UserManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_5__["LanguageSelectorService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3301086086650990787$$SRC_APP_APP_COMPONENT_TS__1 = goog.getMsg("Register");
        i18n_0 = MSG_EXTERNAL_3301086086650990787$$SRC_APP_APP_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2454050363478003966$$SRC_APP_APP_COMPONENT_TS__3 = goog.getMsg("Login");
        i18n_2 = MSG_EXTERNAL_2454050363478003966$$SRC_APP_APP_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "\u0423\u0432\u0456\u0439\u0442\u0438";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6162077149814382498$$SRC_APP_APP_COMPONENT_TS__5 = goog.getMsg("Hello, {$interpolation} {$interpolation_1}!", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_4 = MSG_EXTERNAL_6162077149814382498$$SRC_APP_APP_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "\u041F\u0440\u0438\u0432\u0456\u0442, " + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "!";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1930933852686914206$$SRC_APP_APP_COMPONENT_TS__7 = goog.getMsg("Change language\uD83C\uDF0E");
        i18n_6 = MSG_EXTERNAL_1930933852686914206$$SRC_APP_APP_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043C\u043E\u0432\u0443\uD83C\uDF0E";
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5866254605255506989$$SRC_APP_APP_COMPONENT_TS__9 = goog.getMsg("English");
        i18n_8 = MSG_EXTERNAL_5866254605255506989$$SRC_APP_APP_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430";
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3578644052206125685$$SRC_APP_APP_COMPONENT_TS__11 = goog.getMsg("Ukrainian");
        i18n_10 = MSG_EXTERNAL_3578644052206125685$$SRC_APP_APP_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430";
    } var i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_76327022810163826$$SRC_APP_APP_COMPONENT_TS__13 = goog.getMsg("Logout\uD83D\uDEAA");
        i18n_12 = MSG_EXTERNAL_76327022810163826$$SRC_APP_APP_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "\u0412\u0438\u0439\u0442\u0438\uD83D\uDEAA";
    } var i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8878907649182797646$$SRC_APP_APP_COMPONENT_TS___15 = goog.getMsg("CV - Ads | Admin panel\uD83E\uDD16");
        i18n_14 = MSG_EXTERNAL_8878907649182797646$$SRC_APP_APP_COMPONENT_TS___15;
    }
    else {
        i18n_14 = "CV - Ads | \u041F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430\uD83E\uDD16";
    } return [[4, "ngIf"], [1, "spacer"], ["routerLink", "/register", "mat-button", "", 1, "header"], i18n_0, ["routerLink", "/login", "mat-button", "", 1, "header"], i18n_2, i18n_4, ["mat-button", "", 1, "header", 2, "background-color", "#8e8ef6", "color", "black", 3, "matMenuTriggerFor"], i18n_6, ["xPosition", "before"], ["beforeMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], i18n_8, i18n_10, ["mat-button", "", 1, "header", 2, "background-color", "aliceblue", "color", "black", 3, "click"], i18n_12, i18n_14]; }, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_mat_toolbar_0_Template, 10, 0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_mat_toolbar_1_Template, 18, 5, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.token);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"]], styles: ["span[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nbutton.header[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuYnV0dG9uLmhlYWRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_user_manager_service__WEBPACK_IMPORTED_MODULE_3__["UserManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_5__["LanguageSelectorService"] }]; }, null); })();


/***/ }),

/***/ "TGvR":
/*!***************************************************************************************!*\
  !*** ./src/app/admin-components/admin-smart-devices/admin-smart-devices.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AdminSmartDevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSmartDevicesComponent", function() { return AdminSmartDevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _domain_constants_SmartDeviceMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/constants/SmartDeviceMode */ "/u1q");
/* harmony import */ var _admin_reset_smart_device_admin_reset_smart_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-reset-smart-device/admin-reset-smart-device.component */ "Q/ev");
/* harmony import */ var _services_api_smart_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/smart-device.service */ "xGwr");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/language-selector.service */ "aqoI");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _admin_smart_device_statistics_admin_smart_device_statistics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../admin-smart-device-statistics/admin-smart-device-statistics.component */ "az6j");














function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r11.errorMessage, " ");
} }
function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_app_admin_smart_device_statistics_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-admin-smart-device-statistics", 32);
} if (rf & 2) {
    const smartDevice_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("smartDevice", smartDevice_r2);
} }
function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("opened", function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r3 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.onPanelChangeState(i_r3, true); })("closed", function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r3 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.onPanelChangeState(i_r3, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-chip-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_8_Template, 2, 0, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_9_Template, 2, 0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_10_Template, 2, 0, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_11_Template, 2, 0, "mat-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_12_Template, 2, 0, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_13_Template, 2, 0, "mat-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_mat_chip_14_Template, 2, 0, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_p_15_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-button-toggle-group", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-button-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_Template_mat_button_toggle_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r3 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.onBlockAsync(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](18, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-button-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_Template_mat_button_toggle_change_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r3 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.onResetAsync(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](20, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_app_admin_smart_device_statistics_21_Template, 1, 1, "app-admin-smart-device-statistics", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const smartDevice_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", ctx_r1.smartDevicePanelExpanded[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](smartDevice_r2.serialNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", smartDevice_r2.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r1.Mode.Inactive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r1.Mode.Active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r1.Mode.Blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", smartDevice_r2.isTurnedOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !smartDevice_r2.isTurnedOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", smartDevice_r2.isCaching);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !smartDevice_r2.isCaching);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", smartDevice_r2.mode !== ctx_r1.Mode.Active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", smartDevice_r2.mode !== ctx_r1.Mode.Blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.smartDevicePanelExpanded[i_r3]);
} }
function AdminSmartDevicesComponent_mat_accordion_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-accordion", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminSmartDevicesComponent_mat_accordion_4_mat_expansion_panel_1_Template, 22, 14, "mat-expansion-panel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.smartDevices);
} }
class AdminSmartDevicesComponent {
    constructor(smartDeviceService, notificationService, languageService, dialog) {
        this.smartDeviceService = smartDeviceService;
        this.notificationService = notificationService;
        this.languageService = languageService;
        this.dialog = dialog;
        this.Mode = _domain_constants_SmartDeviceMode__WEBPACK_IMPORTED_MODULE_2__["SmartDeviceMode"];
    }
    ngOnInit() {
        this.smartDeviceService.getAllSmartDevicesAsync()
            .then(smartDevices => this.reloadSmartDevices(smartDevices));
    }
    onPanelChangeState(index, newState) {
        this.smartDevicePanelExpanded[index] = newState;
    }
    onBlockAsync(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.smartDeviceService.blockSmartDeviceAsync(this.smartDevices[index]);
            this.smartDevices[index].mode = _domain_constants_SmartDeviceMode__WEBPACK_IMPORTED_MODULE_2__["SmartDeviceMode"].Blocked;
            if (this.languageService.getPreferredLanguage() === 'ua') {
                this.notificationService.displayMessage('Розумний пристрій заблоковано ✅');
            }
            else {
                this.notificationService.displayMessage('The smart device was blocked ✅');
            }
        });
    }
    onResetAsync(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.errorMessage = yield this.smartDeviceService.resetSmartDeviceAsync(this.smartDevices[index], yield this.getNewPasswordAsync());
            if (this.errorMessage) {
                return;
            }
            this.smartDeviceService.getAllSmartDevicesAsync()
                .then(smartDevices => this.reloadSmartDevices(smartDevices));
            if (this.languageService.getPreferredLanguage() === 'ua') {
                this.notificationService.displayMessage('Налаштування розумного пристрою скинуто ✅');
            }
            else {
                this.notificationService.displayMessage('The smart device was reset ✅');
            }
        });
    }
    reloadSmartDevices(smartDevices) {
        this.smartDevices = smartDevices;
        this.smartDevicePanelExpanded = smartDevices.map(() => false);
    }
    getNewPasswordAsync() {
        const dialogRef = this.dialog.open(_admin_reset_smart_device_admin_reset_smart_device_component__WEBPACK_IMPORTED_MODULE_3__["AdminResetSmartDeviceComponent"]);
        return dialogRef.afterClosed()
            .toPromise()
            .then(newPassword => newPassword ? newPassword : '');
    }
}
AdminSmartDevicesComponent.ɵfac = function AdminSmartDevicesComponent_Factory(t) { return new (t || AdminSmartDevicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_smart_device_service__WEBPACK_IMPORTED_MODULE_4__["SmartDeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_6__["LanguageSelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
AdminSmartDevicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminSmartDevicesComponent, selectors: [["app-admin-smart-devices"]], decls: 5, vars: 1, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8905744122305135138$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS_1 = goog.getMsg("Smart devices");
        i18n_0 = MSG_EXTERNAL_8905744122305135138$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0420\u043E\u0437\u0443\u043C\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4504002719556597168$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS___3 = goog.getMsg(" SN: {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_2 = MSG_EXTERNAL_4504002719556597168$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS___3;
    }
    else {
        i18n_2 = "\n          \u0421\u041D: " + "\uFFFD0\uFFFD" + "\n        ";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5580634723466955633$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS___5 = goog.getMsg(" Block ");
        i18n_4 = MSG_EXTERNAL_5580634723466955633$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS___5;
    }
    else {
        i18n_4 = "\n                  \u0417\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438\n                ";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3466654961496504426$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS___7 = goog.getMsg(" Reset ");
        i18n_6 = MSG_EXTERNAL_3466654961496504426$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS___7;
    }
    else {
        i18n_6 = "\n                  \u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\n                ";
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7603027251051055379$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____9 = goog.getMsg(" Inactive ");
        i18n_8 = MSG_EXTERNAL_7603027251051055379$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____9;
    }
    else {
        i18n_8 = "\n                \u041D\u0435 \u0430\u043A\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u0438\u0439\n              ";
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8203396389293823061$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____11 = goog.getMsg(" Active ");
        i18n_10 = MSG_EXTERNAL_8203396389293823061$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____11;
    }
    else {
        i18n_10 = "\n        \u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439\n      ";
    } var i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2355378305838394083$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____13 = goog.getMsg(" Blocked ");
        i18n_12 = MSG_EXTERNAL_2355378305838394083$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____13;
    }
    else {
        i18n_12 = "\n                \u0417\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0438\u0439\n              ";
    } var i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6809294804849459827$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____15 = goog.getMsg(" Is turned on ");
        i18n_14 = MSG_EXTERNAL_6809294804849459827$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____15;
    }
    else {
        i18n_14 = "\n                      \u0423\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u0438\u0439\n                    ";
    } var i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2550664352760826533$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____17 = goog.getMsg(" Is turned off ");
        i18n_16 = MSG_EXTERNAL_2550664352760826533$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____17;
    }
    else {
        i18n_16 = "\n              \u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438\u0439\n          ";
    } var i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7608732543896530626$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____19 = goog.getMsg(" Caching ");
        i18n_18 = MSG_EXTERNAL_7608732543896530626$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____19;
    }
    else {
        i18n_18 = "\n            \u041A\u0435\u0448\u0443\u0454\n          ";
    } var i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_155109753647486459$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____21 = goog.getMsg(" Not caching ");
        i18n_20 = MSG_EXTERNAL_155109753647486459$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICES_ADMIN_SMART_DEVICES_COMPONENT_TS____21;
    }
    else {
        i18n_20 = "\n                       \u041D\u0435 \u043A\u0435\u0448\u0443\u0454\n                     ";
    } return [i18n_0, ["multi", "", 4, "ngIf"], ["multi", ""], [3, "expanded", "opened", "closed", 4, "ngFor", "ngForOf"], [3, "expanded", "opened", "closed"], i18n_2, [1, "spacer"], ["aria-label", "Smart device data"], [3, "ngSwitch"], ["color", "warn", "selected", "", 4, "ngSwitchCase"], ["color", "accent", "selected", "", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["color", "accent", "selected", "", 4, "ngIf"], ["color", "accent", 4, "ngIf"], ["style", "color: #e43e32; font-size: 18px;", 4, "ngIf"], [2, "width", "100%"], ["color", "warn", 2, "width", "50%", 3, "disabled", "change"], i18n_4, ["color", "accent", 2, "width", "50%", 3, "disabled", "change"], i18n_6, [3, "smartDevice", 4, "ngIf"], ["color", "warn", "selected", ""], i18n_8, ["color", "accent", "selected", ""], i18n_10, i18n_12, i18n_14, ["color", "accent"], i18n_16, i18n_18, i18n_20, [2, "color", "#e43e32", "font-size", "18px"], [3, "smartDevice"]]; }, template: function AdminSmartDevicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminSmartDevicesComponent_mat_accordion_4_Template, 2, 1, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.smartDevices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelDescription"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggle"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChip"], _admin_smart_device_statistics_admin_smart_device_statistics_component__WEBPACK_IMPORTED_MODULE_12__["AdminSmartDeviceStatisticsComponent"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 60%;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  background-color: aliceblue;\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9hZG1pbi1zbWFydC1kZXZpY2VzL2FkbWluLXNtYXJ0LWRldmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9hZG1pbi1zbWFydC1kZXZpY2VzL2FkbWluLXNtYXJ0LWRldmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmRpdj5oMiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminSmartDevicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin-smart-devices',
                templateUrl: './admin-smart-devices.component.html',
                styleUrls: ['./admin-smart-devices.component.css']
            }]
    }], function () { return [{ type: _services_api_smart_device_service__WEBPACK_IMPORTED_MODULE_4__["SmartDeviceService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_6__["LanguageSelectorService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "UPp+":
/*!*****************************************!*\
  !*** ./src/app/domain/Advertisement.ts ***!
  \*****************************************/
/*! exports provided: Advertisement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Advertisement", function() { return Advertisement; });
class Advertisement {
}


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_interceptors_authorization_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/interceptors/authorization.interceptor */ "LjMN");
/* harmony import */ var _services_interceptors_language_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/interceptors/language.interceptor */ "gJVu");
/* harmony import */ var _admin_components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-components/admin-home/admin-home.component */ "ktu+");
/* harmony import */ var _customer_components_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./customer-components/customer-home/customer-home.component */ "jjDG");
/* harmony import */ var _admin_components_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin-components/import-export/import-export.component */ "ZYrL");
/* harmony import */ var _admin_components_register_admin_register_admin_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin-components/register-admin/register-admin.component */ "4Y8T");
/* harmony import */ var _admin_components_register_smart_device_register_smart_device_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin-components/register-smart-device/register-smart-device.component */ "EdA8");
/* harmony import */ var _admin_components_admin_smart_devices_admin_smart_devices_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin-components/admin-smart-devices/admin-smart-devices.component */ "TGvR");
/* harmony import */ var _admin_components_admin_reset_smart_device_admin_reset_smart_device_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin-components/admin-reset-smart-device/admin-reset-smart-device.component */ "Q/ev");
/* harmony import */ var _admin_components_admin_smart_device_statistics_admin_smart_device_statistics_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin-components/admin-smart-device-statistics/admin-smart-device-statistics.component */ "az6j");
/* harmony import */ var _customer_components_customer_cost_payment_customer_cost_payment_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./customer-components/customer-cost-payment/customer-cost-payment.component */ "8UQP");
/* harmony import */ var _customer_components_customer_advertisements_customer_advertisements_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./customer-components/customer-advertisements/customer-advertisements.component */ "NTXF");
/* harmony import */ var _customer_components_advertisement_details_advertisement_details_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./customer-components/advertisement-details/advertisement-details.component */ "0bpm");
/* harmony import */ var _customer_components_create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./customer-components/create-advertisement/create-advertisement.component */ "QR/Y");
/* harmony import */ var _customer_components_add_human_limit_add_human_limit_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./customer-components/add-human-limit/add-human-limit.component */ "KvZh");
/* harmony import */ var _customer_components_add_time_limit_add_time_limit_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./customer-components/add-time-limit/add-time-limit.component */ "3U2V");










































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_authorization_interceptor__WEBPACK_IMPORTED_MODULE_25__["AuthorizationInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_language_interceptor__WEBPACK_IMPORTED_MODULE_26__["LanguageInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
        _admin_components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_27__["AdminHomeComponent"],
        _customer_components_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_28__["CustomerHomeComponent"],
        _admin_components_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_29__["ImportExportComponent"],
        _admin_components_register_admin_register_admin_component__WEBPACK_IMPORTED_MODULE_30__["RegisterAdminComponent"],
        _admin_components_register_smart_device_register_smart_device_component__WEBPACK_IMPORTED_MODULE_31__["RegisterSmartDeviceComponent"],
        _admin_components_admin_smart_devices_admin_smart_devices_component__WEBPACK_IMPORTED_MODULE_32__["AdminSmartDevicesComponent"],
        _admin_components_admin_reset_smart_device_admin_reset_smart_device_component__WEBPACK_IMPORTED_MODULE_33__["AdminResetSmartDeviceComponent"],
        _admin_components_admin_smart_device_statistics_admin_smart_device_statistics_component__WEBPACK_IMPORTED_MODULE_34__["AdminSmartDeviceStatisticsComponent"],
        _customer_components_customer_cost_payment_customer_cost_payment_component__WEBPACK_IMPORTED_MODULE_35__["CustomerCostPaymentComponent"],
        _customer_components_customer_advertisements_customer_advertisements_component__WEBPACK_IMPORTED_MODULE_36__["CustomerAdvertisementsComponent"],
        _customer_components_advertisement_details_advertisement_details_component__WEBPACK_IMPORTED_MODULE_37__["AdvertisementDetailsComponent"],
        _customer_components_create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_38__["CreateAdvertisementComponent"],
        _customer_components_add_human_limit_add_human_limit_component__WEBPACK_IMPORTED_MODULE_39__["AddHumanLimitComponent"],
        _customer_components_add_time_limit_add_time_limit_component__WEBPACK_IMPORTED_MODULE_40__["AddTimeLimitComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                    _admin_components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_27__["AdminHomeComponent"],
                    _customer_components_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_28__["CustomerHomeComponent"],
                    _admin_components_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_29__["ImportExportComponent"],
                    _admin_components_register_admin_register_admin_component__WEBPACK_IMPORTED_MODULE_30__["RegisterAdminComponent"],
                    _admin_components_register_smart_device_register_smart_device_component__WEBPACK_IMPORTED_MODULE_31__["RegisterSmartDeviceComponent"],
                    _admin_components_admin_smart_devices_admin_smart_devices_component__WEBPACK_IMPORTED_MODULE_32__["AdminSmartDevicesComponent"],
                    _admin_components_admin_reset_smart_device_admin_reset_smart_device_component__WEBPACK_IMPORTED_MODULE_33__["AdminResetSmartDeviceComponent"],
                    _admin_components_admin_smart_device_statistics_admin_smart_device_statistics_component__WEBPACK_IMPORTED_MODULE_34__["AdminSmartDeviceStatisticsComponent"],
                    _customer_components_customer_cost_payment_customer_cost_payment_component__WEBPACK_IMPORTED_MODULE_35__["CustomerCostPaymentComponent"],
                    _customer_components_customer_advertisements_customer_advertisements_component__WEBPACK_IMPORTED_MODULE_36__["CustomerAdvertisementsComponent"],
                    _customer_components_advertisement_details_advertisement_details_component__WEBPACK_IMPORTED_MODULE_37__["AdvertisementDetailsComponent"],
                    _customer_components_create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_38__["CreateAdvertisementComponent"],
                    _customer_components_add_human_limit_add_human_limit_component__WEBPACK_IMPORTED_MODULE_39__["AddHumanLimitComponent"],
                    _customer_components_add_time_limit_add_time_limit_component__WEBPACK_IMPORTED_MODULE_40__["AddTimeLimitComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptors_authorization_interceptor__WEBPACK_IMPORTED_MODULE_25__["AuthorizationInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptors_language_interceptor__WEBPACK_IMPORTED_MODULE_26__["LanguageInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZYrL":
/*!***************************************************************************!*\
  !*** ./src/app/admin-components/import-export/import-export.component.ts ***!
  \***************************************************************************/
/*! exports provided: ImportExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportExportComponent", function() { return ImportExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_import_export_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/import-export.service */ "uNOd");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/language-selector.service */ "aqoI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class ImportExportComponent {
    constructor(importExportService, notificationService, languageService) {
        this.importExportService = importExportService;
        this.notificationService = notificationService;
        this.languageService = languageService;
    }
    ngOnInit() {
    }
    onFileSelectedAsync(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.importExportService.uploadExportedDataAsync(event.target.files[0]);
            if (this.languageService.getPreferredLanguage() === 'ua') {
                this.notificationService.displayMessage('Файл було успішно завантажено ✅');
            }
            else {
                this.notificationService.displayMessage('The file was uploaded successfully ✅');
            }
        });
    }
    onExport() {
        this.importExportService.downloadExportData();
        if (this.languageService.getPreferredLanguage() === 'ua') {
            this.notificationService.displayMessage('Завантаження зараз почнеться ✅');
        }
        else {
            this.notificationService.displayMessage('The downloading is going to start in a few seconds ✅');
        }
    }
}
ImportExportComponent.ɵfac = function ImportExportComponent_Factory(t) { return new (t || ImportExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_import_export_service__WEBPACK_IMPORTED_MODULE_2__["ImportExportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSelectorService"])); };
ImportExportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImportExportComponent, selectors: [["app-import-export"]], decls: 20, vars: 0, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1071721880474488785$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_1 = goog.getMsg("Import");
        i18n_0 = MSG_EXTERNAL_1071721880474488785$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0406\u043C\u043F\u043E\u0440\u0442";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6061045813628004253$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_3 = goog.getMsg(" Please upload the text file with exported data: ");
        i18n_2 = MSG_EXTERNAL_6061045813628004253$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0411\u0443\u0434\u044C-\u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0442\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u0438\u0439 \u0444\u0430\u0439\u043B \u0437 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438:";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8555530311117406314$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_5 = goog.getMsg(" Load file ");
        i18n_4 = MSG_EXTERNAL_8555530311117406314$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7462301153729425254$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_7 = goog.getMsg("Export");
        i18n_6 = MSG_EXTERNAL_7462301153729425254$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\u0415\u043A\u0441\u043F\u043E\u0440\u0442";
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5203940649144794961$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_9 = goog.getMsg(" Please click the button to download the exported data: ");
        i18n_8 = MSG_EXTERNAL_5203940649144794961$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "\u0411\u0443\u0434\u044C-\u043B\u0430\u0441\u043A\u0430, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u0449\u043E\u0431 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u043E\u0432\u0430\u043D\u0456 \u0434\u0430\u043D\u0456";
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4922685752551389932$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_11 = goog.getMsg(" Download ");
        i18n_10 = MSG_EXTERNAL_4922685752551389932$$SRC_APP_ADMIN_COMPONENTS_IMPORT_EXPORT_IMPORT_EXPORT_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438";
    } return [i18n_0, ["type", "file", "accept", "text/plain", 2, "display", "none", 3, "change"], ["fileLoader", ""], [2, "display", "flex", "margin", "auto 0"], [2, "font-size", "20px", "margin-top", "auto", "margin-bottom", "auto", "margin-right", "10px"], i18n_2, ["mat-raised-button", "", "color", "primary", 3, "click"], i18n_4, i18n_6, i18n_8, i18n_10]; }, template: function ImportExportComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImportExportComponent_Template_input_change_4_listener($event) { return ctx.onFileSelectedAsync($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportExportComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportExportComponent_Template_button_click_18_listener() { return ctx.onExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](19, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 60%;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  background-color: aliceblue;\r\n  margin-bottom: 20px;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: solid #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tcG9uZW50cy9pbXBvcnQtZXhwb3J0L2ltcG9ydC1leHBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1jb21wb25lbnRzL2ltcG9ydC1leHBvcnQvaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuZGl2PmgyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportExportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-import-export',
                templateUrl: './import-export.component.html',
                styleUrls: ['./import-export.component.css']
            }]
    }], function () { return [{ type: _services_api_import_export_service__WEBPACK_IMPORTED_MODULE_2__["ImportExportService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSelectorService"] }]; }, null); })();


/***/ }),

/***/ "aqoI":
/*!*******************************************************!*\
  !*** ./src/app/services/language-selector.service.ts ***!
  \*******************************************************/
/*! exports provided: LanguageSelectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSelectorService", function() { return LanguageSelectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



const PREFERRED_LANGUAGE_KEY = 'language';
const DEFAULT_LANGUAGE = 'ua';
class LanguageSelectorService {
    constructor() { }
    getPreferredLanguage() {
        const preferredLanguage = localStorage[PREFERRED_LANGUAGE_KEY];
        if (preferredLanguage) {
            return preferredLanguage;
        }
        return DEFAULT_LANGUAGE;
    }
    setPreferredLanguage(preferredLanguage) {
        localStorage[PREFERRED_LANGUAGE_KEY] = preferredLanguage;
        const a = document.createElement('a');
        if (preferredLanguage === 'ua') {
            a.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].selfUAVersion;
        }
        else {
            a.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].selfENVersion;
        }
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
}
LanguageSelectorService.ɵfac = function LanguageSelectorService_Factory(t) { return new (t || LanguageSelectorService)(); };
LanguageSelectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageSelectorService, factory: LanguageSelectorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageSelectorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "az6j":
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin-components/admin-smart-device-statistics/admin-smart-device-statistics.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AdminSmartDeviceStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSmartDeviceStatisticsComponent", function() { return AdminSmartDeviceStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/functions/dateFunctions */ "nx/h");
/* harmony import */ var _services_api_smart_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/smart-device.service */ "xGwr");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language-selector.service */ "aqoI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "LPYB");








function AdminSmartDeviceStatisticsComponent_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminSmartDeviceStatisticsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.pieChartData.values)("labels", ctx_r1.pieChartData.labels)("colors", ctx_r1.pieChartData.colors)("options", ctx_r1.pieChartData.options)("chartType", "pie");
} }
function AdminSmartDeviceStatisticsComponent_mat_divider_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider", 0);
} }
function AdminSmartDeviceStatisticsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r3.barChartData.datasets)("labels", ctx_r3.barChartData.labels)("options", ctx_r3.barChartData.options)("legend", true)("chartType", "bar");
} }
const CHART_COLORS = [
    'rgba(255,0,0,0.3)',
    'rgba(0,255,0,0.3)',
    'rgba(0,0,255,0.3)'
];
const DATA_VIEWS_COUNT_INDEX = 0;
const DATA_AUDIENCE_COUNT_INDEX = 1;
class AdminSmartDeviceStatisticsComponent {
    constructor(smartDeviceService, languageService) {
        this.smartDeviceService = smartDeviceService;
        this.languageService = languageService;
        this.pieChartData = {
            labels: [],
            values: [],
            colors: [{ backgroundColor: [] }],
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontSize: 20,
                        fontColor: 'white'
                    }
                }
            }
        };
        this.barChartData = {
            datasets: [
                { data: [], label: null },
                { data: [], label: null }
            ],
            labels: [],
            options: {
                responsive: true,
                scales: {
                    xAxes: [{ ticks: { fontSize: 20, fontColor: 'white' } }],
                    yAxes: [{ ticks: {
                                suggestedMin: 0,
                                suggestedMax: 1,
                                stepSize: 1,
                                fontSize: 20,
                                fontColor: 'white'
                            } }]
                },
                plugins: { datalabels: { anchor: 'end', align: 'end' } },
                legend: {
                    display: true,
                    labels: {
                        fontSize: 20,
                        fontColor: 'white'
                    }
                }
            }
        };
    }
    ngOnInit() {
        this.smartDeviceService.getViewsForSmartDeviceAsync(this.smartDevice)
            .then((views) => {
            this.SetPieChartData(views);
            this.setBarChartData(views);
        });
    }
    get partnerFullName() {
        const defaultFullName = this.getLocalizedNoDataMessage();
        return this.smartDevice.partnerFirstName ?
            `${this.smartDevice.partnerFirstName} ${this.smartDevice.partnerLastName}` :
            defaultFullName;
    }
    get partnerEmail() {
        var _a;
        const defaultEmail = this.getLocalizedNoDataMessage();
        return (_a = this.smartDevice.partnerEmail) !== null && _a !== void 0 ? _a : defaultEmail;
    }
    SetPieChartData(views) {
        views.forEach(view => {
            const locationLabel = `${view.city}@${view.country}`;
            if (this.pieChartData.labels.includes(locationLabel)) {
                const locationIndex = this.pieChartData.labels.indexOf(locationLabel);
                this.pieChartData.values[locationIndex]++;
            }
            else {
                this.pieChartData.labels.push(locationLabel);
                this.pieChartData.values.push(1);
                this.pieChartData.colors[0].backgroundColor.push(CHART_COLORS[(this.pieChartData.labels.length - 1) % CHART_COLORS.length]);
            }
        });
    }
    setBarChartData(views) {
        views.sort((firstView, secondView) => {
            const firstDateMilliseconds = Object(_services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_1__["toLocalDate"])(firstView.dateTime).getTime();
            const secondDataMilliseconds = Object(_services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_1__["toLocalDate"])(secondView.dateTime).getTime();
            return firstDateMilliseconds - secondDataMilliseconds;
        });
        views.forEach(view => {
            const dateLabel = Object(_services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_1__["getDateString"])(Object(_services_functions_dateFunctions__WEBPACK_IMPORTED_MODULE_1__["toLocalDate"])(view.dateTime));
            const lastIndex = this.barChartData.labels.length - 1;
            if (this.barChartData.labels[lastIndex] === dateLabel) {
                this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].data[lastIndex]++;
                this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX]
                    .data[lastIndex] += view.audienceCount;
            }
            else {
                this.barChartData.labels.push(dateLabel);
                this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].data.push(1);
                this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX]
                    .data.push(view.audienceCount);
            }
        });
        this.configureBarChartScale();
        this.localizeBarChartLegend();
    }
    configureBarChartScale() {
        const maxBarHeight = Math.max(Math.max(...this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].data), Math.max(...this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX].data)) + 1;
        const stepSize = maxBarHeight < 10 ? 1 : 10;
        this.barChartData.options.scales.yAxes[0].ticks.stepSize = stepSize;
        this.barChartData.options.scales.yAxes[0].ticks.suggestedMax = maxBarHeight;
    }
    getLocalizedNoDataMessage() {
        return this.languageService.getPreferredLanguage() === 'ua' ?
            'немає даних' :
            'none';
    }
    localizeBarChartLegend() {
        if (this.languageService.getPreferredLanguage() === 'ua') {
            this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].label = 'Кількість показів';
            this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX].label = 'Об\'єм аудиторії';
        }
        else {
            this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].label = 'Views count';
            this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX].label = 'Audience count';
        }
    }
}
AdminSmartDeviceStatisticsComponent.ɵfac = function AdminSmartDeviceStatisticsComponent_Factory(t) { return new (t || AdminSmartDeviceStatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_smart_device_service__WEBPACK_IMPORTED_MODULE_2__["SmartDeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__["LanguageSelectorService"])); };
AdminSmartDeviceStatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminSmartDeviceStatisticsComponent, selectors: [["app-admin-smart-device-statistics"]], inputs: { smartDevice: "smartDevice" }, decls: 11, vars: 6, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3744322421078547107$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICE_STATISTICS_ADMIN_SMART_DEVICE_STATISTICS_COMPONENT_TS_1 = goog.getMsg("Partner name: {$interpolation}\n", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3744322421078547107$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICE_STATISTICS_ADMIN_SMART_DEVICE_STATISTICS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0406\u043C'\u044F \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430:\n  " + "\uFFFD0\uFFFD" + "\n";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5096927675410727306$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICE_STATISTICS_ADMIN_SMART_DEVICE_STATISTICS_COMPONENT_TS_3 = goog.getMsg("Partner email: {$interpolation}\n", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_2 = MSG_EXTERNAL_5096927675410727306$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICE_STATISTICS_ADMIN_SMART_DEVICE_STATISTICS_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430:\n  " + "\uFFFD0\uFFFD" + "\n";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9211724450998115848$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICE_STATISTICS_ADMIN_SMART_DEVICE_STATISTICS_COMPONENT_TS__5 = goog.getMsg(" There isn't any views data for this smart device.\n");
        i18n_4 = MSG_EXTERNAL_9211724450998115848$$SRC_APP_ADMIN_COMPONENTS_ADMIN_SMART_DEVICE_STATISTICS_ADMIN_SMART_DEVICE_STATISTICS_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "\n  \u0420\u043E\u0437\u0443\u043C\u043D\u0438\u0439 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0457 \u0449\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0432 \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F.\n";
    } return [[2, "margin-top", "20px", "margin-bottom", "20px"], i18n_0, i18n_2, ["style", "text-align: center; margin: 10px 0;", 4, "ngIf"], ["style", "display: block", 4, "ngIf"], ["style", "margin-top: 20px; margin-bottom: 20px;", 4, "ngIf"], [2, "text-align", "center", "margin", "10px 0"], i18n_4, [2, "display", "block"], ["baseChart", "", 3, "data", "labels", "colors", "options", "chartType"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"]]; }, template: function AdminSmartDeviceStatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminSmartDeviceStatisticsComponent_h2_6_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminSmartDeviceStatisticsComponent_div_7_Template, 2, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminSmartDeviceStatisticsComponent_mat_divider_8_Template, 1, 0, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminSmartDeviceStatisticsComponent_div_10_Template, 2, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.partnerFullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.partnerEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pieChartData.values.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pieChartData.values.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barChartData.labels.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barChartData.labels.length > 0);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvYWRtaW4tc21hcnQtZGV2aWNlLXN0YXRpc3RpY3MvYWRtaW4tc21hcnQtZGV2aWNlLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSmartDeviceStatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-smart-device-statistics',
                templateUrl: './admin-smart-device-statistics.component.html',
                styleUrls: ['./admin-smart-device-statistics.component.css']
            }]
    }], function () { return [{ type: _services_api_smart_device_service__WEBPACK_IMPORTED_MODULE_2__["SmartDeviceService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_3__["LanguageSelectorService"] }]; }, { smartDevice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gJVu":
/*!***************************************************************!*\
  !*** ./src/app/services/interceptors/language.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: LanguageInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageInterceptor", function() { return LanguageInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _language_selector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language-selector.service */ "aqoI");



class LanguageInterceptor {
    constructor(languageSelectorService) {
        this.languageSelectorService = languageSelectorService;
    }
    intercept(request, next) {
        const preferredLanguage = this.languageSelectorService.getPreferredLanguage();
        const languageRequest = request.clone({
            headers: request.headers.set('Accept-Language', preferredLanguage)
        });
        return next.handle(languageRequest);
    }
}
LanguageInterceptor.ɵfac = function LanguageInterceptor_Factory(t) { return new (t || LanguageInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_language_selector_service__WEBPACK_IMPORTED_MODULE_1__["LanguageSelectorService"])); };
LanguageInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageInterceptor, factory: LanguageInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _language_selector_service__WEBPACK_IMPORTED_MODULE_1__["LanguageSelectorService"] }]; }, null); })();


/***/ }),

/***/ "jjDG":
/*!******************************************************************************!*\
  !*** ./src/app/customer-components/customer-home/customer-home.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHomeComponent", function() { return CustomerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _customer_advertisements_customer_advertisements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer-advertisements/customer-advertisements.component */ "NTXF");
/* harmony import */ var _create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-advertisement/create-advertisement.component */ "QR/Y");
/* harmony import */ var _customer_cost_payment_customer_cost_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-cost-payment/customer-cost-payment.component */ "8UQP");







class CustomerHomeComponent {
    constructor() {
        this.selectedTabIndex = 0;
        this.createAdvertisementSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get advertisementCreatedObservable() {
        return this.createAdvertisementSubject;
    }
    ngOnInit() {
        this.createAdvertisementSubject.subscribe({
            next: () => this.selectedTabIndex = 0
        });
    }
    onSelectedTabIndexChange(newIndex) {
        this.selectedTabIndex = newIndex;
    }
}
CustomerHomeComponent.ɵfac = function CustomerHomeComponent_Factory(t) { return new (t || CustomerHomeComponent)(); };
CustomerHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerHomeComponent, selectors: [["app-customer-home"]], decls: 10, vars: 4, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1298165794467174235$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_HOME_CUSTOMER_HOME_COMPONENT_TS_1 = goog.getMsg("My advertisements");
        i18n_0 = MSG_EXTERNAL_1298165794467174235$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_HOME_CUSTOMER_HOME_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u041C\u043E\u0457 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5142263391182693003$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_HOME_CUSTOMER_HOME_COMPONENT_TS_3 = goog.getMsg("Create advertisement");
        i18n_2 = MSG_EXTERNAL_5142263391182693003$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_HOME_CUSTOMER_HOME_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6707318518295945488$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_HOME_CUSTOMER_HOME_COMPONENT_TS_5 = goog.getMsg("Cost & Payment");
        i18n_4 = MSG_EXTERNAL_6707318518295945488$$SRC_APP_CUSTOMER_COMPONENTS_CUSTOMER_HOME_CUSTOMER_HOME_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C & \u041E\u043F\u043B\u0430\u0442\u0430";
    } return [["mat-align-tabs", "center", 3, "backgroundColor", "selectedIndex", "selectedIndexChange"], [6, "label"], ["label", i18n_0], [3, "advertisementCreatedObservable"], ["label", i18n_2], [3, "createAdvertisementSubject"], ["label", i18n_4]]; }, template: function CustomerHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function CustomerHomeComponent_Template_mat_tab_group_selectedIndexChange_0_listener($event) { return ctx.onSelectedTabIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-customer-advertisements", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-create-advertisement", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-customer-cost-payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", "primary")("selectedIndex", ctx.selectedTabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("advertisementCreatedObservable", ctx.advertisementCreatedObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("createAdvertisementSubject", ctx.createAdvertisementSubject);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _customer_advertisements_customer_advertisements_component__WEBPACK_IMPORTED_MODULE_3__["CustomerAdvertisementsComponent"], _create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_4__["CreateAdvertisementComponent"], _customer_cost_payment_customer_cost_payment_component__WEBPACK_IMPORTED_MODULE_5__["CustomerCostPaymentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWNvbXBvbmVudHMvY3VzdG9tZXItaG9tZS9jdXN0b21lci1ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-home',
                templateUrl: './customer-home.component.html',
                styleUrls: ['./customer-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ktu+":
/*!*********************************************************************!*\
  !*** ./src/app/admin-components/admin-home/admin-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _admin_smart_devices_admin_smart_devices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-smart-devices/admin-smart-devices.component */ "TGvR");
/* harmony import */ var _register_smart_device_register_smart_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register-smart-device/register-smart-device.component */ "EdA8");
/* harmony import */ var _register_admin_register_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register-admin/register-admin.component */ "4Y8T");
/* harmony import */ var _import_export_import_export_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../import-export/import-export.component */ "ZYrL");







class AdminHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminHomeComponent.ɵfac = function AdminHomeComponent_Factory(t) { return new (t || AdminHomeComponent)(); };
AdminHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminHomeComponent, selectors: [["app-admin-home"]], decls: 13, vars: 1, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8789450099477205806$$SRC_APP_ADMIN_COMPONENTS_ADMIN_HOME_ADMIN_HOME_COMPONENT_TS_1 = goog.getMsg("Monitor smart devices");
        i18n_0 = MSG_EXTERNAL_8789450099477205806$$SRC_APP_ADMIN_COMPONENTS_ADMIN_HOME_ADMIN_HOME_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0412\u0441\u0456 \u0440\u043E\u0437\u0443\u043C\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4379251072119177421$$SRC_APP_ADMIN_COMPONENTS_ADMIN_HOME_ADMIN_HOME_COMPONENT_TS_3 = goog.getMsg("Register smart device");
        i18n_2 = MSG_EXTERNAL_4379251072119177421$$SRC_APP_ADMIN_COMPONENTS_ADMIN_HOME_ADMIN_HOME_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0440\u043E\u0437\u0443\u043C\u043D\u0438\u0439 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4640150331714491363$$SRC_APP_ADMIN_COMPONENTS_ADMIN_HOME_ADMIN_HOME_COMPONENT_TS_5 = goog.getMsg("Register admin");
        i18n_4 = MSG_EXTERNAL_4640150331714491363$$SRC_APP_ADMIN_COMPONENTS_ADMIN_HOME_ADMIN_HOME_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_909114780120402669$$SRC_APP_ADMIN_COMPONENTS_ADMIN_HOME_ADMIN_HOME_COMPONENT_TS_7 = goog.getMsg("Import / Export");
        i18n_6 = MSG_EXTERNAL_909114780120402669$$SRC_APP_ADMIN_COMPONENTS_ADMIN_HOME_ADMIN_HOME_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\u0406\u043C\u043F\u043E\u0440\u0442 / \u0415\u043A\u0441\u043F\u043E\u0440\u0442";
    } return [["mat-align-tabs", "center", 3, "backgroundColor"], [6, "label"], ["label", i18n_0], ["label", i18n_2], ["label", i18n_4], ["label", i18n_6]]; }, template: function AdminHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-admin-smart-devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-register-smart-device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-register-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-import-export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", "primary");
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _admin_smart_devices_admin_smart_devices_component__WEBPACK_IMPORTED_MODULE_2__["AdminSmartDevicesComponent"], _register_smart_device_register_smart_device_component__WEBPACK_IMPORTED_MODULE_3__["RegisterSmartDeviceComponent"], _register_admin_register_admin_component__WEBPACK_IMPORTED_MODULE_4__["RegisterAdminComponent"], _import_export_import_export_component__WEBPACK_IMPORTED_MODULE_5__["ImportExportComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNvbXBvbmVudHMvYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-home',
                templateUrl: './admin-home.component.html',
                styleUrls: ['./admin-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mVRz":
/*!********************************************!*\
  !*** ./src/app/domain/constants/Gender.ts ***!
  \********************************************/
/*! exports provided: Gender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
var Gender;
(function (Gender) {
    Gender[Gender["NotSpecified"] = 0] = "NotSpecified";
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
})(Gender || (Gender = {}));


/***/ }),

/***/ "nx/h":
/*!*****************************************************!*\
  !*** ./src/app/services/functions/dateFunctions.ts ***!
  \*****************************************************/
/*! exports provided: toLocalDate, getDateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocalDate", function() { return toLocalDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateString", function() { return getDateString; });
function toLocalDate(dateString) {
    const time = new Date(dateString);
    const offset = -(new Date().getTimezoneOffset());
    time.setMinutes(time.getMinutes() + offset);
    return time;
}
function getDateString(date) {
    return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
}


/***/ }),

/***/ "qktC":
/*!*************************************************!*\
  !*** ./src/app/services/api/payment.service.ts ***!
  \*************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PaymentService {
    constructor(http) {
        this.http = http;
    }
    getCustomerPaymentAmountAsync() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.getCustomerPaymentAmount)
            .toPromise();
    }
    payAsync() {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoints.payCustomer, {})
            .toPromise();
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uNOd":
/*!*******************************************************!*\
  !*** ./src/app/services/api/import-export.service.ts ***!
  \*******************************************************/
/*! exports provided: ImportExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportExportService", function() { return ImportExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ImportExportService {
    constructor(http) {
        this.http = http;
    }
    uploadExportedDataAsync(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('formFile', file, file.name);
            yield this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.import, formData).toPromise();
        });
    }
    downloadExportData() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.export, {
            observe: 'response',
            responseType: 'blob'
        }).subscribe({
            next: response => {
                const url = window.URL.createObjectURL(response.body);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'export.txt';
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
        });
    }
}
ImportExportService.ɵfac = function ImportExportService_Factory(t) { return new (t || ImportExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ImportExportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImportExportService, factory: ImportExportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportExportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "v17P":
/*!******************************************!*\
  !*** ./src/app/domain/constants/Role.ts ***!
  \******************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["CUSTOMER"] = "CUSTOMER";
    Role["PARTNER"] = "PARTNER";
    Role["SMART_DEVICE"] = "SMART_DEVICE";
})(Role || (Role = {}));


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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");







const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: '**', redirectTo: '/home' }
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

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/authentication.service */ "B6lr");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification.service */ "OC8m");
/* harmony import */ var _services_language_selector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/language-selector.service */ "aqoI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LoginComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class LoginComponent {
    constructor(authenticationService, notificationService, languageService, router) {
        this.authenticationService = authenticationService;
        this.notificationService = notificationService;
        this.languageService = languageService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userCredentials = {
                login: this.username,
                password: this.password
            };
            let errorMessage = yield this.authenticationService.loginAdminAsync(userCredentials);
            if (!errorMessage) {
                this.showSuccessNotification();
                yield this.router.navigate(['/home']);
                return;
            }
            errorMessage = yield this.authenticationService.loginCustomerAsync(userCredentials);
            if (!errorMessage) {
                this.showSuccessNotification();
                yield this.router.navigate(['/home']);
                return;
            }
            this.errorMessage = errorMessage;
        });
    }
    showSuccessNotification() {
        if (this.languageService.getPreferredLanguage() === 'ua') {
            this.notificationService.displayMessage('Користувач пройшов автентифікацію ✅');
        }
        else {
            this.notificationService.displayMessage('The user is logged in ✅');
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_selector_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 3, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2454050363478003966$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_1 = goog.getMsg("Login");
        i18n_0 = MSG_EXTERNAL_2454050363478003966$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0423\u0432\u0456\u0439\u0442\u0438";
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5248717555542428023$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_3 = goog.getMsg("Username");
        i18n_2 = MSG_EXTERNAL_5248717555542428023$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0406\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430";
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1431416938026210429$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_5 = goog.getMsg("Password");
        i18n_4 = MSG_EXTERNAL_1431416938026210429$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u041F\u0430\u0440\u043E\u043B\u044C";
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1580879949716435119$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_7 = goog.getMsg("{$startTagSpan}{$closeTagSpan}{$startTagSpan}{$closeTagSpan}{$startTagSpan}{$closeTagSpan}{$startTagSpan}{$closeTagSpan} Submit ", { "startTagSpan": "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]", "closeTagSpan": "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]" });
        i18n_6 = MSG_EXTERNAL_1580879949716435119$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\n      " + "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]" + "" + "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]" + "\n      " + "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]" + "" + "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]" + "\n      " + "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]" + "" + "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]" + "\n      " + "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]" + "" + "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]" + "\n      \u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438\n    ";
    } i18n_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](i18n_6); return [["ngNativeValidate", "", 3, "submit"], i18n_0, ["style", "color: #e43e32;margin-top: -25px;", 4, "ngIf"], [1, "user-box"], ["type", "text", "required", "", "name", "username", "autocomplete", "off", 3, "ngModel", "ngModelChange"], i18n_2, ["type", "password", "required", "", "name", "password", "autocomplete", "off", 3, "ngModel", "ngModelChange"], i18n_4, ["type", "submit"], i18n_6, [2, "color", "#e43e32", "margin-top", "-25px"]]; }, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_0_listener() { return ctx.onLoginAsync(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginComponent_p_3_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["[_nghost-%COMP%] {\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 400px;\r\n  padding: 40px;\r\n  transform: translate(-50%, -50%);\r\n  background: rgb(41 17 123 / 90%);\r\n  box-sizing: border-box;\r\n  box-shadow: 0 15px 25px rgba(0,0,0,.6);\r\n  border-radius: 10px;\r\n}\r\n\r\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 0 30px;\r\n  padding: 0;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n[_nghost-%COMP%]   .user-box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n[_nghost-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  margin-bottom: 30px;\r\n  border: none;\r\n  border-bottom: 1px solid #fff;\r\n  outline: none;\r\n  background: transparent;\r\n}\r\n\r\n[_nghost-%COMP%]   .user-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top:0;\r\n  left: 0;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  pointer-events: none;\r\n  transition: .5s;\r\n}\r\n\r\n[_nghost-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], [_nghost-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\r\n  top: -20px;\r\n  left: 0;\r\n  color: #03e9f4;\r\n  font-size: 12px;\r\n}\r\n\r\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  border: none;\r\n  background: rgb(62 40 136);\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  color: #03e9f4;\r\n  font-size: 16px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  overflow: hidden;\r\n  transition: .5s;\r\n  margin-top: 40px;\r\n  letter-spacing: 4px\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #03e9f4;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px #03e9f4,\r\n  0 0 25px #03e9f4,\r\n  0 0 50px #03e9f4,\r\n  0 0 100px #03e9f4;\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: block;\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(90deg, transparent, #03e9f4);\r\n  animation: btn-anim1 1s linear infinite;\r\n}\r\n\r\n@keyframes btn-anim1 {\r\n  0% {\r\n    left: -100%;\r\n  }\r\n  50%,100% {\r\n    left: 100%;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n  top: -100%;\r\n  right: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(180deg, transparent, #03e9f4);\r\n  animation: btn-anim2 1s linear infinite;\r\n  animation-delay: .25s\r\n}\r\n\r\n@keyframes btn-anim2 {\r\n  0% {\r\n    top: -100%;\r\n  }\r\n  50%,100% {\r\n    top: 100%;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n  bottom: 0;\r\n  right: -100%;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(270deg, transparent, #03e9f4);\r\n  animation: btn-anim3 1s linear infinite;\r\n  animation-delay: .5s\r\n}\r\n\r\n@keyframes btn-anim3 {\r\n  0% {\r\n    right: -100%;\r\n  }\r\n  50%,100% {\r\n    right: 100%;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n  bottom: -100%;\r\n  left: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(360deg, transparent, #03e9f4);\r\n  animation: btn-anim4 1s linear infinite;\r\n  animation-delay: .75s\r\n}\r\n\r\n@keyframes btn-anim4 {\r\n  0% {\r\n    bottom: -100%;\r\n  }\r\n  50%,100% {\r\n    bottom: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsT0FBTztFQUNQLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFVBQVU7RUFDVixPQUFPO0VBQ1AsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCOzs7bUJBR2lCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0RBQXdEO0VBQ3hELHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWix5REFBeUQ7RUFDekQsdUNBQXVDO0VBQ3ZDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gseURBQXlEO0VBQ3pELHVDQUF1QztFQUN2QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlEQUF5RDtFQUN6RCx1Q0FBdUM7RUFDdkM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQxIDE3IDEyMyAvIDkwJSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwIDE1cHggMjVweCByZ2JhKDAsMCwwLC42KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46aG9zdCBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgLnVzZXItYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbjpob3N0IC51c2VyLWJveCBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbjpob3N0IC51c2VyLWJveCBsYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbjpob3N0IC51c2VyLWJveCBpbnB1dDpmb2N1cyB+IGxhYmVsLFxyXG46aG9zdCAudXNlci1ib3ggaW5wdXQ6dmFsaWQgfiBsYWJlbCB7XHJcbiAgdG9wOiAtMjBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiAjMDNlOWY0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuOmhvc3QgZm9ybSBidXR0b24ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHJnYig2MiA0MCAxMzYpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGNvbG9yOiAjMDNlOWY0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHhcclxufVxyXG5cclxuOmhvc3QgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDNlOWY0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwM2U5ZjQsXHJcbiAgMCAwIDI1cHggIzAzZTlmNCxcclxuICAwIDAgNTBweCAjMDNlOWY0LFxyXG4gIDAgMCAxMDBweCAjMDNlOWY0O1xyXG59XHJcblxyXG46aG9zdCBidXR0b24gc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG46aG9zdCBidXR0b24gc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAjMDNlOWY0KTtcclxuICBhbmltYXRpb246IGJ0bi1hbmltMSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnRuLWFuaW0xIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IGJ1dHRvbiBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgdG9wOiAtMTAwJTtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCwgIzAzZTlmNCk7XHJcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjI1c1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMiB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgYnV0dG9uIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IC0xMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHRyYW5zcGFyZW50LCAjMDNlOWY0KTtcclxuICBhbmltYXRpb246IGJ0bi1hbmltMyAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNXNcclxufVxyXG5cclxuQGtleWZyYW1lcyBidG4tYW5pbTMge1xyXG4gIDAlIHtcclxuICAgIHJpZ2h0OiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCBidXR0b24gc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gIGJvdHRvbTogLTEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCB0cmFuc3BhcmVudCwgIzAzZTlmNCk7XHJcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTQgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjc1c1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltNCB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _services_language_selector_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSelectorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "xGwr":
/*!******************************************************!*\
  !*** ./src/app/services/api/smart-device.service.ts ***!
  \******************************************************/
/*! exports provided: SmartDeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartDeviceService", function() { return SmartDeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SmartDeviceService {
    constructor(http) {
        this.http = http;
    }
    getAllSmartDevicesAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const smartDevices = yield this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.getAllSmartDevices).toPromise();
            return smartDevices;
        });
    }
    blockSmartDeviceAsync(smartDevice) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.blockSmartDevice
            .replace('{id}', smartDevice.id);
        return this.http.patch(url, {}).toPromise();
    }
    resetSmartDeviceAsync(smartDevice, newPassword) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.resetSmartDevice
            .replace('{id}', smartDevice.id);
        return this.http.post(url, { newPassword }).toPromise()
            .then(() => null)
            .catch(this.retrieveErrorMessage);
        ;
    }
    getViewsForSmartDeviceAsync(smartDevice) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.getStatisticsForSmartDevice
            .replace('{id}', smartDevice.id);
        return this.http.get(url).toPromise();
    }
    retrieveErrorMessage(errorResponse) {
        if (errorResponse.error.message) {
            return errorResponse.error.message;
        }
        return Object.values(errorResponse.error.errors).join('\n');
    }
}
SmartDeviceService.ɵfac = function SmartDeviceService_Factory(t) { return new (t || SmartDeviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SmartDeviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SmartDeviceService, factory: SmartDeviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SmartDeviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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