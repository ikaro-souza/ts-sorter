"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.sort = function (collection) {
        for (var i = 0; i < collection.length; i++) {
            for (var j = 0; j < collection.length - i - 1; j++) {
                if (collection.compare(j, j + 1))
                    collection.swap(j, j + 1);
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
