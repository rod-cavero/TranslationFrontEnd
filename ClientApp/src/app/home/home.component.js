"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, baseUrl, fb) {
        this.http = http;
        this.fb = fb;
        this.translatedText = '';
        this.detected = '';
        this.source = '';
        this.translationForm = this.fb.group({
            text: ['', forms_1.Validators.required],
            sourceLanguage: ['auto', forms_1.Validators.required],
            targetLanguage: ['en', forms_1.Validators.required]
        });
        this.translateServiceUrl = baseUrl.substr(0, baseUrl.lastIndexOf(':')) + ':5000/api/Translation';
        //this.translateServiceUrl = baseUrl + 'api/Translation';
    }
    Object.defineProperty(HomeComponent.prototype, "textc", {
        get: function () {
            return this.translationForm.get('text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "slc", {
        get: function () {
            return this.translationForm.get('sourceLanguage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "tlc", {
        get: function () {
            return this.translationForm.get('targetLanguage');
        },
        enumerable: false,
        configurable: true
    });
    HomeComponent.prototype.Translate = function () {
        var _this = this;
        if (this.translationForm.valid) {
            var params = new http_1.HttpParams();
            params = params.append('text', this.textc.value);
            params = params.append('target', this.tlc.value);
            params = params.append('source', this.slc.value);
            this.http.get(this.translateServiceUrl, { params: params }).subscribe(function (result) {
                _this.translation = result;
                _this.translatedText = _this.translation.translated;
                _this.detected = 'Detected Language: ';
                _this.source = _this.translation.detectedLanguage;
            }, function (error) {
                console.error(error);
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
        }),
        __param(1, core_1.Inject('BASE_URL')),
        __metadata("design:paramtypes", [http_1.HttpClient, String, forms_1.FormBuilder])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map