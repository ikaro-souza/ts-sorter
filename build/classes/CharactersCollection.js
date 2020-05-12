"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Sortable_1 = require("./Sortable/Sortable");
var CharactersCollection = /** @class */ (function (_super) {
    __extends(CharactersCollection, _super);
    function CharactersCollection(data) {
        return _super.call(this, data) || this;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (indexA, indexB) {
        var charAtA = this.data[indexA].toLowerCase();
        var chatAtB = this.data[indexB].toLowerCase();
        return charAtA > chatAtB;
    };
    CharactersCollection.prototype.swap = function (indexA, indexB) {
        var chars = this.data.split("");
        chars[indexA] = this.data[indexB];
        chars[indexB] = this.data[indexA];
        this.data = chars.join("");
    };
    CharactersCollection.prototype.sort = function () {
        Sorter_1.Sorter.sort(this);
    };
    return CharactersCollection;
}(Sortable_1.Sortable));
exports.CharactersCollection = CharactersCollection;
