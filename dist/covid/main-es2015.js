(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container2\">\n  <div class=\"row\">\n    <div class=\" col-md-8 col-sm-12\">\n      <app-charts [(graf1)]=\"graf1\" [(graf2)]=\"graf2\" [(refLines)]=\"refLines\">\n      </app-charts>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"w-100 text-center border shadow\">\n        <!-- <button mat-mini-fab (click)=\"backStep()\" color=\"primary\">\n          <mat-icon style=\" transform: scale(1.3);\">skip_previous</mat-icon>\n        </button> &nbsp;\n        <button mat-mini-fab (click)=\"back()\" color=\"primary\">\n          <mat-icon style=\" transform: scale(1.3);\">fast_rewind</mat-icon>\n        </button> &nbsp; -->\n        <mat-form-field class=\"input-width\">\n          <mat-label>Passos</mat-label>\n          <input matInput type=\"number\" [(ngModel)]=\"passos\">\n        </mat-form-field> &nbsp;\n        <button mat-mini-fab (click)=\"changePlay()\" color=\"primary\">\n          <mat-icon style=\" transform: scale(1.3);\">fast_forward</mat-icon>\n        </button> &nbsp;\n        <button mat-mini-fab (click)=\"makeStep()\" color=\"primary\">\n          <mat-icon style=\" transform: scale(1.3);\">skip_next</mat-icon>\n        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <button mat-mini-fab (click)=\"reset()\" color=\"primary\">\n          <mat-icon style=\" transform: scale(1.3);\">refresh</mat-icon>\n        </button>\n\n      </div>\n\n      <app-control [(populacao)]=\"populacao\" [(dinamica)]=\"dinamica\" [(death)]=\"death\" [(tempos)]=\"tempos\"\n        [(capacidade)]=\"capacidade\" (change)=\"setRefLines($event)\">\n      </app-control>\n\n    </div>\n\n  </div>\n</div>\n<button (click)=\"log()\">TESTE</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/capacity/capacity.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/capacity/capacity.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n    <!-- <div> -->\n    <ng-container *ngFor=\"let p of capacidade|keyvalue\">\n      <div class=\"w-100 mt-3\">\n        <mat-form-field class=\"input-width\">\n          <mat-label>{{p.value.name}}</mat-label>\n          <input matInput type=number [(ngModel)]=\"p.value.value\">\n        </mat-form-field>\n        <!-- <mat-form-field class=\"input-width\">\n          <mat-label>{{p.value.name}}</mat-label>\n          <input matInput type=number [(ngModel)]=\"p.value.value\">\n        </mat-form-field> -->\n      </div>\n    </ng-container>\n    <!-- </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/charts/charts.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charts/charts.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container2 pl-1\">\n  <div class=\"chart-wrapper row\">\n    <div class=\"chart-line\">\n      <ngx-charts-line-chart class=\"charts-text\" [legend]=\"legend\" [showXAxisLabel]=\"showXAxisLabel\"\n        [showYAxisLabel]=\"showYAxisLabel\" [xAxis]=\"xAxis\" [yAxis]=\"yAxis\" [xAxisLabel]=\"xAxisLabel\"\n        [yAxisLabel]=\"yAxisLabel\" [referenceLines]=\"refLines\" [showRefLines]=\"true\" [showRefLabels]=\"true\"\n        [scheme]=\"{ domain: ['#0000FF','#00AF00', '#DF0000', '#000000' ] }\" [results]=\"graf1\">\n      </ngx-charts-line-chart>\n    </div>\n  </div>\n\n  <div class=\"chart-wrapper row\">\n    <div class=\"chart-line\">\n      <ngx-charts-line-chart class=\"charts-text\" [legend]=\"legend\" [showXAxisLabel]=\"showXAxisLabel\"\n        [showYAxisLabel]=\"showYAxisLabel\" [xAxis]=\"xAxis\" [yAxis]=\"yAxis\" [xAxisLabel]=\"xAxisLabel\"\n        [referenceLines]=\"refLines\" [showRefLines]=\"true\" [showRefLabels]=\"true\" [yAxisLabel]=\"yAxisLabel\"\n        [scheme]=\"{ domain: ['#0000FF','#00AF00', '#000000', '#DF0000' , '#993300' , '#993300' ] }\" [results]=\"graf2\">\n      </ngx-charts-line-chart>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/config-population/config-population.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/config-population/config-population.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n    <!-- <div> -->\n    <ng-container *ngFor=\"let p of populacao|keyvalue\">\n      <div class=\"col-12\" *ngIf=\"p.value.show\">\n        <mat-form-field class=\"input-width\">\n          <mat-label>{{p.value.name}}</mat-label>\n          <input matInput type=number [(ngModel)]=\"p.value.value\">\n        </mat-form-field>\n      </div>\n    </ng-container>\n    <!-- </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/control/control.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/control/control.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel expanded=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        População\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-population [(populacao)]=\"populacao\"></app-population>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Dinâmica\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-dinamic [(dinamica)]=\"dinamica\"></app-dinamic>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Capacidade Hospitalar\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-capacity [(capacidade)]=\"capacidade\"></app-capacity>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Tempos\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-times [(tempos)]=\"tempos\"></app-times>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        CURA/MORTE\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-death [(death)]=\"death\"></app-death>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/death/death.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/death/death.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n    <!-- <div> -->\n    <ng-container *ngFor=\"let p of death | keyvalue\">\n      <div class=\"w-100 mt-3 text-center\">\n        <h6>{{ p.value.name }}</h6>\n        <span class=\"text-center\">\n          <b>Melhora: {{ p.value.cura }}</b> {{ p.value.unit }} |\n          <b>Morte: {{ p.value.morte() }}</b> {{ p.value.unit }}\n        </span>\n        <mat-slider\n          style=\"width: 100%;\"\n          [max]=\"p.value.max\"\n          [min]=\"p.value.min\"\n          [step]=\"p.value.step\"\n          thumbLabel=\"true\"\n          [(ngModel)]=\"p.value.cura\"\n        >\n        </mat-slider>\n        <br />\n\n        <mat-divider></mat-divider>\n        <!-- <mat-form-field class=\"input-width\">\n          <mat-label>{{p.value.name}}</mat-label>\n          <input matInput type=number [(ngModel)]=\"p.value.value\">\n        </mat-form-field> -->\n      </div>\n    </ng-container>\n    <!-- </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dinamic/dinamic.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dinamic/dinamic.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n    <!-- <div> -->\n    <ng-container *ngFor=\"let p of dinamica|keyvalue\">\n      <div class=\"w-100 mt-3\">\n        <h6>{{p.value.name}}</h6>\n        <!-- <br> -->\n        <mat-slider style=\"width: 70%;\" [max]=\"p.value.max\" [min]=\"p.value.min\" [step]=\"p.value.step\" thumbLabel=\"true\"\n          [(ngModel)]=\"p.value.value\">\n        </mat-slider> <b>{{p.value.value}}</b> {{p.value.unit}}\n        <mat-divider></mat-divider>\n        <!-- <mat-form-field class=\"input-width\">\n          <mat-label>{{p.value.name}}</mat-label>\n          <input matInput type=number [(ngModel)]=\"p.value.value\">\n        </mat-form-field> -->\n      </div>\n    </ng-container>\n    <!-- </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/times/times.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/times/times.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n    <!-- <div> -->\n    <ng-container *ngFor=\"let p of tempos|keyvalue\">\n      <div class=\"w-100 mt-3\">\n        <h6>{{p.value.name}}</h6>\n        <!-- <br> -->\n        <mat-slider style=\"width: 80%;\" [max]=\"p.value.max\" [min]=\"p.value.min\" [step]=\"p.value.step\" thumbLabel=\"true\"\n          [(ngModel)]=\"p.value.value\">\n        </mat-slider> <b>{{p.value.value}}</b> {{p.value.unit}}\n        <mat-divider></mat-divider>\n        <!-- <mat-form-field class=\"input-width\">\n          <mat-label>{{p.value.name}}</mat-label>\n          <input matInput type=number [(ngModel)]=\"p.value.value\">\n        </mat-form-field> -->\n      </div>\n    </ng-container>\n    <!-- </div> -->\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container2 {\n  margin-top: 10px;\n  width: 100%\n}\n\n.input-width {\n  width: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJVxufVxuXG4uaW5wdXQtd2lkdGgge1xuICB3aWR0aDogNzBweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");




let AppComponent = class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.title = "Sistema para análise da evolução da covid";
        this.populacao = new _data__WEBPACK_IMPORTED_MODULE_1__["Populacao"]();
        this.dinamica = new _data__WEBPACK_IMPORTED_MODULE_1__["Dinamica"]();
        this.capacidade = new _data__WEBPACK_IMPORTED_MODULE_1__["Capacidade"]();
        this.tempos = new _data__WEBPACK_IMPORTED_MODULE_1__["Tempo"]();
        this.death = new _data__WEBPACK_IMPORTED_MODULE_1__["Sobrevida"]();
        // rawData = new DadosSC();
        this.graf1 = [];
        this.graf2 = [];
        this.refLines = [];
    }
    ngOnInit() {
        this.reset();
    }
    reset() {
        this.populacao = new _data__WEBPACK_IMPORTED_MODULE_1__["Populacao"]();
        this.dinamica = new _data__WEBPACK_IMPORTED_MODULE_1__["Dinamica"]();
        this.capacidade = new _data__WEBPACK_IMPORTED_MODULE_1__["Capacidade"]();
        this.tempos = new _data__WEBPACK_IMPORTED_MODULE_1__["Tempo"]();
        this.death = new _data__WEBPACK_IMPORTED_MODULE_1__["Sobrevida"]();
        this.passos = 7;
        this.time = 1;
        this.infectadosIniciais = 5;
        this.play = false;
        this.graf1 = [
            { name: "Dados - S.E.S", series: [] },
            { name: "Infectados", series: [] },
            { name: "Hospitalizados", series: [] },
            { name: "Mortos", series: [] }
        ];
        this.graf2 = [
            { name: "Hosp. Total", series: [] },
            { name: "Leito Comum", series: [] },
            { name: "UTI", series: [] },
            { name: "Ventilação Mecânica", series: [] },
            { name: "Leito Grave", series: [] },
            { name: "Mortos (SES)", series: [] }
        ];
        this.refLines = [
            { value: 0, name: "" },
            { value: this.capacidade.leito.value, name: "Leitos" },
            { value: this.capacidade.uti.value, name: "UTIs" },
            {
                value: this.capacidade.leito.value + this.capacidade.uti.value,
                name: "Leitos Totais"
            }
        ];
        this.dataService.sendGetRequest("SC").subscribe((data) => {
            this.populacao.total.value = data.results[0].estimated_population_2019;
            data.results.reverse().map((v, t) => {
                this.graf1[0].series.push({ name: t + 1, value: v.confirmed });
                this.graf2[5].series.push({ name: t + 1, value: v.deaths });
            });
            this.updateChart();
        });
    }
    back() { }
    backStep() {
        this.graf1[1].series.pop();
        this.graf1[2].series.pop();
        this.graf1[2].series.pop();
        this.graf1[2].series.pop();
        this.graf1[2].series.pop();
    }
    changePlay() {
        // console.log("Comecei a simular");
        this.play = true;
        for (let i = 0; i < this.passos; i++) {
            this.makeStep();
        }
        this.play = false;
        // console.log("Terminei de simular");
    }
    makeStep() {
        if (this.time === 1) {
            this.refresh();
        }
        // console.log("comecei calc");
        this.calcStep();
        // console.log("comecei setData");
        this.setData(this.time);
        this.time += 1;
    }
    refresh() {
        this.time = 1;
        this.populacao.saudaveis.value =
            this.populacao.total.value - this.populacao.infectado.value;
        this.populacao.exposto.value = 0;
        this.populacao.infectadoGrave.value = 0;
        this.populacao.hospitalizadoLeito.value = 0;
        this.populacao.hospitalizadoUTI.value = 0;
        this.populacao.hospitalizadoVentilador.value = 0;
        this.populacao.hospitalizadoGrave.value = 0;
        this.populacao.mortos.value = 0;
        this.populacao.curados.value = 0;
        this.setData(this.time);
        this.time += 1;
    }
    calcStep() {
        const arg = {
            S: this.populacao.saudaveis.value,
            E: this.populacao.exposto.value,
            I: this.populacao.infectado.value,
            Ig: this.populacao.infectadoGrave.value,
            Hl: this.populacao.hospitalizadoLeito.value,
            Hu: this.populacao.hospitalizadoUTI.value,
            Hlv: this.populacao.hospitalizadoVentilador.value,
            Hlg: this.populacao.hospitalizadoGrave.value
        };
        // console.log("dS= " + this.dS(arg));
        // console.log("dE= " + this.dE(arg));
        // console.log("dI= " + this.dI(arg));
        // console.log("dIg= " + this.dIg(arg));
        // console.log("dHl= " + this.dHl(arg));
        // console.log("dHu= " + this.dHu(arg));
        // console.log("dHlv= " + this.dHlv(arg));
        this.populacao.saudaveis.value += this.dS(arg);
        this.populacao.exposto.value += this.dE(arg);
        this.populacao.infectado.value += this.dI(arg);
        this.populacao.infectadoGrave.value += this.dIg(arg);
        this.populacao.hospitalizadoLeito.value += this.dHl(arg);
        this.populacao.hospitalizadoUTI.value += this.dHu(arg);
        this.populacao.hospitalizadoVentilador.value += this.dHlv(arg);
        this.populacao.hospitalizadoGrave.value += this.dHlg(arg);
        this.populacao.mortos.value += this.dM(arg);
    }
    setData(t) {
        let val = this.populacao.infectado.value + this.populacao.infectadoGrave.value;
        this.graf1[1].series.push({ name: t, value: val });
        val = this.populacao.mortos.value;
        this.graf1[3].series.push({ name: t, value: val });
        val =
            this.populacao.hospitalizadoGrave.value +
                this.populacao.hospitalizadoLeito.value +
                this.populacao.hospitalizadoUTI.value +
                this.populacao.hospitalizadoVentilador.value;
        this.graf1[2].series.push({ name: t, value: val });
        this.graf2[0].series.push({ name: t, value: val });
        this.graf2[1].series.push({
            name: t,
            value: this.populacao.hospitalizadoLeito.value
        });
        this.graf2[2].series.push({
            name: t,
            value: this.populacao.hospitalizadoUTI.value
        });
        this.graf2[3].series.push({
            name: t,
            value: this.populacao.hospitalizadoVentilador.value
        });
        this.graf2[4].series.push({
            name: t,
            value: this.populacao.hospitalizadoGrave.value
        });
        this.updateChart();
    }
    updateChart() {
        // console.log(this.graf1);
        // console.log(this.graf2);
        this.graf1 = [...this.graf1];
        this.graf2 = [...this.graf2];
    }
    setRefLines(a) {
        console.log(a);
        this.refLines = [
            { value: 0, name: "" },
            { value: this.capacidade.leito.value, name: "Leitos" },
            { value: this.capacidade.uti.value, name: "UTIs" },
            {
                value: this.capacidade.leito.value + this.capacidade.uti.value,
                name: "Leitos Totais"
            }
        ];
    }
    log() {
        console.log(this.capacidade);
    }
    ////////////////////////////////////////////////////////////
    ///// DERIVADAS DO PROBLEMA
    ///////////////////////////////////////////////
    dS(a) {
        return (-a.S *
            (this.dinamica.delta.value / 100) *
            ((this.dinamica.r0I.value * a.I) /
                (this.tempos.tInfc.value * this.populacao.total.value) +
                (this.dinamica.r0G.value * a.Ig) /
                    (this.tempos.tInfcGrave.value * this.populacao.total.value)));
    }
    dE(a) {
        return (+a.S *
            (this.dinamica.delta.value / 100) *
            ((this.dinamica.r0I.value * a.I) /
                (this.tempos.tInfc.value * this.populacao.total.value) +
                (this.dinamica.r0G.value * a.Ig) /
                    (this.tempos.tInfcGrave.value * this.populacao.total.value)) -
            a.E / this.tempos.tInc.value);
    }
    dI(a) {
        return (a.E / this.tempos.tInc.value -
            (a.I * this.death.infectado.cura) / (100 * this.tempos.tInfc.value) -
            (a.I * this.death.infectado.morte()) / (100 * this.tempos.tInfc.value));
    }
    dIg(a) {
        const frac = (a.Hl + a.Hu + a.Hlv + a.Hlg) /
            (this.capacidade.leito.value + this.capacidade.uti.value);
        // console.log(frac);
        return ((a.I * this.death.infectado.morte()) / (100 * this.tempos.tInfc.value) -
            ((frac + (100 - this.dinamica.gamma.value) / 100) * a.Ig) /
                this.tempos.tInfcGrave.value -
            (1 - frac) * (this.dinamica.gamma.value / 100) * a.Ig);
    }
    dHl(a) {
        const frac = (a.Hl + a.Hu + a.Hlv + a.Hlg) /
            (this.capacidade.leito.value + this.capacidade.uti.value);
        return ((1 - frac) * (this.dinamica.gamma.value / 100) * a.Ig -
            a.Hl / this.tempos.tLeito.value +
            (this.death.hospitalizadoUTI.cura / (100 * this.tempos.tUti.value)) *
                a.Hu +
            (this.death.hospitalizadoGrave.cura / (100 * this.tempos.tLG.value)) *
                a.Hlg +
            (this.death.hospitalizadoVentilador.cura /
                (100 * this.tempos.tLV.value)) *
                a.Hlv);
    }
    dHu(a) {
        const frac = a.Hu / this.capacidade.uti.value;
        return (((a.Hl * this.death.hospitalizadoLeito.morte()) /
            (100 * this.tempos.tLeito.value)) *
            (1 - frac) -
            a.Hu / this.tempos.tUti.value);
    }
    dHlv(a) {
        const fracU = a.Hu / this.capacidade.uti.value;
        const frac = a.Hlv / this.capacidade.ventilador.value;
        return (((a.Hl * this.death.hospitalizadoLeito.morte()) /
            (100 * this.tempos.tLeito.value)) *
            fracU *
            (1 - frac) -
            a.Hlv / this.tempos.tLV.value);
    }
    dHlg(a) {
        const fracU = a.Hu / this.capacidade.uti.value;
        const frac = a.Hlv / this.capacidade.ventilador.value;
        return (((a.Hl * this.death.hospitalizadoLeito.morte()) /
            (100 * this.tempos.tLeito.value)) *
            fracU *
            frac -
            a.Hlg / this.tempos.tLG.value);
    }
    dM(a) {
        const frac = (a.Hl + a.Hu + a.Hlv + a.Hlg) /
            (this.capacidade.leito.value + this.capacidade.uti.value);
        return (a.Ig *
            (this.death.infectadoGrave.morte() /
                (100 * this.tempos.tInfcGrave.value)) *
            (frac + (100 - this.dinamica.gamma.value) / 100) +
            (a.Hu * this.death.hospitalizadoUTI.morte()) /
                (100 * this.tempos.tUti.value) +
            (a.Hlv * this.death.hospitalizadoVentilador.morte()) /
                (100 * this.tempos.tLV.value) +
            (a.Hlg * this.death.hospitalizadoGrave.morte()) /
                (100 * this.tempos.tLG.value));
    }
    dC(a) {
        const frac = (a.Hl + a.Hu + a.Hlv + a.Hlg) /
            (this.capacidade.leito.value + this.capacidade.uti.value);
        return (((a.Ig * this.death.infectadoGrave.cura) /
            (100 * this.tempos.tInfcGrave.value)) *
            (frac + (100 - this.dinamica.gamma.value) / 100) +
            (a.Hl * this.death.hospitalizadoLeito.cura) /
                (100 * this.tempos.tUti.value));
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var src_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/material-module */ "./src/material-module.ts");
/* harmony import */ var _config_population_config_population_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-population/config-population.component */ "./src/app/config-population/config-population.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dinamic_dinamic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dinamic/dinamic.component */ "./src/app/dinamic/dinamic.component.ts");
/* harmony import */ var _capacity_capacity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./capacity/capacity.component */ "./src/app/capacity/capacity.component.ts");
/* harmony import */ var _times_times_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./times/times.component */ "./src/app/times/times.component.ts");
/* harmony import */ var _death_death_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./death/death.component */ "./src/app/death/death.component.ts");
/* harmony import */ var _control_control_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./control/control.component */ "./src/app/control/control.component.ts");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/charts/charts.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _config_population_config_population_component__WEBPACK_IMPORTED_MODULE_8__["ConfigPopulationComponent"],
            _dinamic_dinamic_component__WEBPACK_IMPORTED_MODULE_10__["DinamicComponent"],
            _capacity_capacity_component__WEBPACK_IMPORTED_MODULE_11__["CapacityComponent"],
            _times_times_component__WEBPACK_IMPORTED_MODULE_12__["TimesComponent"],
            _death_death_component__WEBPACK_IMPORTED_MODULE_13__["DeathComponent"],
            _control_control_component__WEBPACK_IMPORTED_MODULE_14__["ControlComponent"],
            _charts_charts_component__WEBPACK_IMPORTED_MODULE_15__["ChartsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
            src_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/capacity/capacity.component.css":
/*!*************************************************!*\
  !*** ./src/app/capacity/capacity.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcGFjaXR5L2NhcGFjaXR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/capacity/capacity.component.ts":
/*!************************************************!*\
  !*** ./src/app/capacity/capacity.component.ts ***!
  \************************************************/
/*! exports provided: CapacityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacityComponent", function() { return CapacityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CapacityComponent = class CapacityComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CapacityComponent.prototype, "capacidade", void 0);
CapacityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-capacity",
        template: __webpack_require__(/*! raw-loader!./capacity.component.html */ "./node_modules/raw-loader/index.js!./src/app/capacity/capacity.component.html"),
        styles: [__webpack_require__(/*! ./capacity.component.css */ "./src/app/capacity/capacity.component.css")]
    })
], CapacityComponent);



/***/ }),

/***/ "./src/app/charts/charts.component.css":
/*!*********************************************!*\
  !*** ./src/app/charts/charts.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container2{\n  width: 100% !important;\n  height: 100% !important;\n  min-height: 780px;\n}\n.chart-wrapper{\n  height: 49%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIye1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNzgwcHg7XG59XG4uY2hhcnQtd3JhcHBlcntcbiAgaGVpZ2h0OiA0OSU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/charts/charts.component.ts":
/*!********************************************!*\
  !*** ./src/app/charts/charts.component.ts ***!
  \********************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChartsComponent = class ChartsComponent {
    constructor() {
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = "Dias após o primeiro caso";
        this.yAxisLabel = "População";
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartsComponent.prototype, "graf1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartsComponent.prototype, "graf2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartsComponent.prototype, "refLines", void 0);
ChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-charts",
        template: __webpack_require__(/*! raw-loader!./charts.component.html */ "./node_modules/raw-loader/index.js!./src/app/charts/charts.component.html"),
        styles: [__webpack_require__(/*! ./charts.component.css */ "./src/app/charts/charts.component.css")]
    })
], ChartsComponent);



/***/ }),

/***/ "./src/app/config-population/config-population.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/config-population/config-population.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy1wb3B1bGF0aW9uL2NvbmZpZy1wb3B1bGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/config-population/config-population.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/config-population/config-population.component.ts ***!
  \******************************************************************/
/*! exports provided: ConfigPopulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPopulationComponent", function() { return ConfigPopulationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfigPopulationComponent = class ConfigPopulationComponent {
    constructor() { }
    log() {
        console.log(this.populacao);
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfigPopulationComponent.prototype, "populacao", void 0);
ConfigPopulationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-population",
        template: __webpack_require__(/*! raw-loader!./config-population.component.html */ "./node_modules/raw-loader/index.js!./src/app/config-population/config-population.component.html"),
        styles: [__webpack_require__(/*! ./config-population.component.css */ "./src/app/config-population/config-population.component.css")]
    })
], ConfigPopulationComponent);



/***/ }),

/***/ "./src/app/control/control.component.css":
/*!***********************************************!*\
  !*** ./src/app/control/control.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/control/control.component.ts":
/*!**********************************************!*\
  !*** ./src/app/control/control.component.ts ***!
  \**********************************************/
/*! exports provided: ControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlComponent", function() { return ControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ControlComponent = class ControlComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlComponent.prototype, "dinamica", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlComponent.prototype, "populacao", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlComponent.prototype, "tempos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlComponent.prototype, "capacidade", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlComponent.prototype, "death", void 0);
ControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-control",
        template: __webpack_require__(/*! raw-loader!./control.component.html */ "./node_modules/raw-loader/index.js!./src/app/control/control.component.html"),
        styles: [__webpack_require__(/*! ./control.component.css */ "./src/app/control/control.component.css")]
    })
], ControlComponent);



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: Tempo, Populacao, Capacidade, Sobrevida, Dinamica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tempo", function() { return Tempo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Populacao", function() { return Populacao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacidade", function() { return Capacidade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sobrevida", function() { return Sobrevida; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dinamica", function() { return Dinamica; });
class Tempo {
    constructor() {
        this.tInc = {
            name: "Tempo de Incubação",
            value: 5,
            min: 0,
            max: 20,
            step: 1,
            unit: "dias",
            show: true,
            visible: true,
            fixed: 0 // Quantas casas decimais devem ser apresentadas
        };
        this.tInfc = {
            name: "Tempo de Infecção",
            value: 14,
            min: 0,
            max: 20,
            step: 1,
            unit: "dias",
            show: true,
            visible: true,
            fixed: 0 // Quantas casas decimais devem ser apresentadas
        };
        this.tLeito = {
            name: "Tempo em Leito Comum",
            value: 13,
            min: 0,
            max: 20,
            step: 1,
            unit: "dias",
            show: true,
            visible: true,
            fixed: 0 // Quantas casas decimais devem ser apresentadas
        };
        this.tUti = {
            name: "Tempo em UTI",
            value: 10,
            min: 0,
            max: 20,
            step: 1,
            unit: "dias",
            show: true,
            visible: true,
            fixed: 0 // Quantas casas decimais devem ser apresentadas
        };
        this.tLV = {
            name: "Tempo em Leito com Ventilação Mecânica",
            value: 5,
            min: 0,
            max: 20,
            step: 1,
            unit: "dias",
            show: true,
            visible: true,
            fixed: 0 // Quantas casas decimais devem ser apresentadas
        };
        this.tLG = {
            name: "Tempo em Leito em Estado Grave",
            value: 5,
            min: 0,
            max: 20,
            step: 1,
            unit: "dias",
            show: true,
            visible: true,
            fixed: 0 // Quantas casas decimais devem ser apresentadas
        };
        this.tInfcGrave = {
            name: "Tempo de Infecção Grave",
            value: 5,
            min: 0,
            max: 20,
            step: 1,
            unit: "dias",
            show: true,
            visible: true,
            fixed: 0 // Quantas casas decimais devem ser apresentadas
        };
    }
}
class Populacao {
    constructor() {
        this.saudaveis = {
            name: "População Saudável",
            value: 0,
            show: false
        };
        this.exposto = {
            name: "População Exposta",
            value: 0,
            show: false
        };
        this.infectado = {
            name: "População Infectada",
            value: 5,
            show: true
        };
        this.infectadoGrave = {
            name: "População Infectada em Estado Grave",
            value: 0,
            show: false
        };
        this.hospitalizadoLeito = {
            name: "População Hospitalizada em Leito Comum",
            value: 0,
            show: false
        };
        this.hospitalizadoUTI = {
            name: "População Hospitalizada em UTI",
            value: 0,
            show: false
        };
        this.hospitalizadoVentilador = {
            name: "População Hospitalizada em Leito com Ventilador",
            value: 0,
            show: false
        };
        this.hospitalizadoGrave = {
            name: "População Hospitalizada em Estado Grave",
            value: 0
        };
        this.mortos = {
            name: "Mortos",
            value: 0,
            show: false
        };
        this.curados = {
            name: "Curados",
            value: 0,
            show: false
        };
        this.total = {
            name: "População Total",
            value: 7000000,
            show: true
        };
    }
}
class Capacidade {
    constructor() {
        this.leito = {
            name: "Número de leitos comuns",
            value: 100
        };
        this.uti = {
            name: "Número de leitos de UTI",
            value: 80
        };
        this.ventilador = {
            name: "Número de Ventiladores",
            value: 300
        };
    }
}
class Sobrevida {
    constructor() {
        this.infectado = {
            name: "Probabilidade de Melhora do Infectado",
            cura: 80,
            min: 0,
            max: 100,
            step: 1,
            unit: "%",
            show: true,
            morte: () => {
                return 100 - this.infectado.cura;
            },
            visible: true,
            fixed: 0
        };
        this.infectadoGrave = {
            name: "Probabilidade de Melhora do Infectado Grave",
            cura: 30,
            min: 0,
            max: 100,
            step: 1,
            unit: "%",
            show: true,
            visible: true,
            fixed: 0,
            morte: () => {
                return 100 - this.infectadoGrave.cura;
            }
        };
        this.hospitalizadoLeito = {
            name: "Probabilidade de Melhora do Hospitalizado em Leito",
            cura: 40,
            min: 0,
            max: 100,
            step: 1,
            unit: "%",
            show: true,
            visible: true,
            fixed: 0,
            morte: () => {
                return 100 - this.hospitalizadoLeito.cura;
            }
        };
        this.hospitalizadoUTI = {
            name: "Probabilidade de Melhora do Hospitalizado em Leito de UTI",
            cura: 50,
            min: 0,
            max: 100,
            step: 1,
            unit: "%",
            show: true,
            visible: true,
            fixed: 0,
            morte: () => {
                return 100 - this.hospitalizadoUTI.cura;
            }
        };
        this.hospitalizadoVentilador = {
            name: "Probabilidade de Melhora do Hospitalizado em Leito com Ventilador",
            cura: 40,
            min: 0,
            max: 100,
            step: 1,
            unit: "%",
            show: true,
            visible: true,
            fixed: 0,
            morte: () => {
                return 100 - this.hospitalizadoVentilador.cura;
            }
        };
        this.hospitalizadoGrave = {
            name: "Probabilidade de Melhora do Hospitalizado em estado Grave",
            cura: 5,
            min: 0,
            max: 100,
            step: 1,
            unit: "%",
            show: true,
            visible: true,
            fixed: 0,
            morte: () => {
                return 100 - this.hospitalizadoGrave.cura;
            }
        };
    }
}
class Dinamica {
    constructor() {
        this.delta = {
            name: "Percentual Fora da Quarentena",
            min: 0,
            max: 100,
            value: 100,
            step: 1,
            unit: "%"
        };
        this.r0I = {
            name: "Número de reprodução do Infectados (R0)",
            min: 0,
            max: 20,
            value: 6.3,
            step: 0.1,
            unit: "contágios"
        };
        this.r0G = {
            name: "Número de reprodução dos Infectados Graves (R0)",
            min: 0,
            max: 20,
            value: 2.3,
            step: 0.1,
            unit: "contágios"
        };
        // zeta = {
        //   name: "Percentual de agravamento dos Infectados",
        //   min: 0,
        //   max: 100,
        //   value: 30,
        //   step: 1,
        //   unit: "%",
        // };
        this.gamma = {
            name: "Percentual de procura por Hospital",
            min: 0,
            max: 100,
            value: 80,
            step: 1,
            unit: "%"
        };
        // nu = {
        //   name: "Percentual de agravamento dos hospitalizados em leito comum",
        //   min: 0,
        //   max: 100,
        //   value: 10,
        //   step: 1,
        //   unit: "%",
        // };
    }
}


/***/ }),

/***/ "./src/app/death/death.component.css":
/*!*******************************************!*\
  !*** ./src/app/death/death.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlYXRoL2RlYXRoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/death/death.component.ts":
/*!******************************************!*\
  !*** ./src/app/death/death.component.ts ***!
  \******************************************/
/*! exports provided: DeathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathComponent", function() { return DeathComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeathComponent = class DeathComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DeathComponent.prototype, "death", void 0);
DeathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-death",
        template: __webpack_require__(/*! raw-loader!./death.component.html */ "./node_modules/raw-loader/index.js!./src/app/death/death.component.html"),
        styles: [__webpack_require__(/*! ./death.component.css */ "./src/app/death/death.component.css")]
    })
], DeathComponent);



/***/ }),

/***/ "./src/app/dinamic/dinamic.component.css":
/*!***********************************************!*\
  !*** ./src/app/dinamic/dinamic.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpbmFtaWMvZGluYW1pYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dinamic/dinamic.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dinamic/dinamic.component.ts ***!
  \**********************************************/
/*! exports provided: DinamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicComponent", function() { return DinamicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DinamicComponent = class DinamicComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DinamicComponent.prototype, "dinamica", void 0);
DinamicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dinamic",
        template: __webpack_require__(/*! raw-loader!./dinamic.component.html */ "./node_modules/raw-loader/index.js!./src/app/dinamic/dinamic.component.html"),
        styles: [__webpack_require__(/*! ./dinamic.component.css */ "./src/app/dinamic/dinamic.component.css")]
    })
], DinamicComponent);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.REST_API_SERVER = "https://brasil.io/api/dataset/covid19/caso/data?is_last=false&place_type=state&state=";
    }
    sendGetRequest(state) {
        return this.httpClient.get(this.REST_API_SERVER + state);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], DataService);



/***/ }),

/***/ "./src/app/times/times.component.css":
/*!*******************************************!*\
  !*** ./src/app/times/times.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVzL3RpbWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/times/times.component.ts":
/*!******************************************!*\
  !*** ./src/app/times/times.component.ts ***!
  \******************************************/
/*! exports provided: TimesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesComponent", function() { return TimesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimesComponent = class TimesComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimesComponent.prototype, "tempos", void 0);
TimesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-times",
        template: __webpack_require__(/*! raw-loader!./times.component.html */ "./node_modules/raw-loader/index.js!./src/app/times/times.component.html"),
        styles: [__webpack_require__(/*! ./times.component.css */ "./src/app/times/times.component.css")]
    })
], TimesComponent);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/material-module.ts":
/*!********************************!*\
  !*** ./src/material-module.ts ***!
  \********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































// import { FlexLayoutModule } from "@angular/flex-layout";
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]
            // FlexLayoutModule
        ]
    })
], MaterialModule);

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/daniel/covid/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map