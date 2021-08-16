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
        //this.translateServiceUrl = baseUrl.substr(0, baseUrl.lastIndexOf(":")) + ":5000/api/Translation?text=hola,target=en";
        this.translateServiceUrl = baseUrl + 'api/Translation?text=hola,target=en';
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
    HomeComponent.prototype.onSubmit = function () {
        if (this.translationForm.valid) {
            //let params = new HttpParams();
            //params = params.append('text', this.textc.value);
            //params = params.append('target', this.tlc.value);
            //params = params.append('source', this.slc.value);
            //this.http.get<Translation>(this.translateServiceUrl).subscribe(result => {
            //  this.translation = result;
            //}, error => console.error(error));
            //this.translatedText = this.translation.translated;
            //this.detected = 'Detected Language:';
            //this.source = this.translation.detectedLanguage;
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