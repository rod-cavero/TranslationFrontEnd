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
    function HomeComponent(http, baseUrl, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        //variables to be expost in the template
        this.translatedText = '';
        this.detected = '';
        this.source = '';
        this.translationForm = this.formBuilder.group({
            //set the controls from the form
            textControl: ['', forms_1.Validators.required],
            sourceLanguageControl: ['auto', forms_1.Validators.required],
            targetLanguageControl: ['en', forms_1.Validators.required]
        });
        //set the url assuming both services are running in the same machine
        //this is only por demo porpuses
        this.translateServiceUrl = baseUrl.substr(0, baseUrl.lastIndexOf(':')) + ':5000/api/Translation';
        //this.translateServiceUrl = baseUrl + 'api/Translation';
    }
    Object.defineProperty(HomeComponent.prototype, "textControl", {
        //getters for all the controls in the form
        get: function () {
            return this.translationForm.get('textControl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "sourceLanguageControl", {
        get: function () {
            return this.translationForm.get('sourceLanguageControl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "targetLanguageControl", {
        get: function () {
            return this.translationForm.get('targetLanguageControl');
        },
        enumerable: false,
        configurable: true
    });
    HomeComponent.prototype.Translate = function () {
        var _this = this;
        //validete that the user had introduce some text and select target language
        if (this.translationForm.valid) {
            //set the query string to invoke the service
            var params = new http_1.HttpParams();
            params = params.append('text', this.textControl.value);
            params = params.append('target', this.targetLanguageControl.value);
            params = params.append('source', this.sourceLanguageControl.value);
            //call the service
            this.http.get(this.translateServiceUrl, { params: params }).subscribe(function (result) {
                _this.translation = result;
                // set the result in the UI
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