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
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    function NumbersCollection(collection) {
        return _super.call(this, collection) || this;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (indexA, indexB) {
        return this.data[indexA] > this.data[indexB];
    };
    NumbersCollection.prototype.swap = function (indexA, indexB) {
        var valueAtA = this.data[indexA];
        this.data[indexA] = this.data[indexB];
        this.data[indexB] = valueAtA;
    };
    NumbersCollection.prototype.sort = function () {
        Sorter_1.Sorter.sort(this);
    };
    return NumbersCollection;
}(Sortable_1.Sortable));
exports.NumbersCollection = NumbersCollection;
