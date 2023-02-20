var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("data/arrowCodes", [], function (exports_1, context_1) {
    "use strict";
    var arrowCodes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("arrowCodes", arrowCodes = {
                purposefulness: '048+',
                procrastination: '048-',
                spirituality: '246+',
                research: '246-',
                intelligence: '258+',
                forgetfulness: '258-',
                equilibrium: '147+',
                hypersensitivity: '147-',
                practicality: '036+',
                chaos: '036-',
                planning: '012+',
                will: '345+',
                dissatisfaction: '345-',
                activity: '678+',
                passivity: '678-'
            });
        }
    };
});
System.register("modules/helpers", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function getTwoDigitsString(value) {
        var stringValue = value.toString();
        return stringValue.length === 2 ? stringValue : "0".concat(stringValue);
    }
    exports_2("getTwoDigitsString", getTwoDigitsString);
    function calculateSum(value) {
        if (value === '22') {
            return '22/4';
        }
        if (value === '10' || value === '11' || value.length === 1) {
            return value;
        }
        return calculateSum(sumDigits(value));
    }
    exports_2("calculateSum", calculateSum);
    function calculateFlatSum(value) {
        if (value.length === 1) {
            return value;
        }
        return calculateFlatSum(sumDigits(value));
    }
    exports_2("calculateFlatSum", calculateFlatSum);
    function sumDigits(value) {
        return value
            .split('')
            .map(function (valueString) { return parseInt(valueString); })
            .reduce(function (prev, curr) { return prev + curr; }, 0)
            .toString();
    }
    exports_2("sumDigits", sumDigits);
    function calculateTopPeakValue(baseLeft, baseRight) {
        var value;
        var firstSum = (baseLeft + baseRight).toString();
        if (firstSum === '10' ||
            firstSum === '11' ||
            firstSum.length === 1) {
            value = parseInt(firstSum);
        }
        else {
            value = parseInt(sumDigits(firstSum));
        }
        return value;
    }
    exports_2("calculateTopPeakValue", calculateTopPeakValue);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("modules/BirthDate", ["modules/helpers"], function (exports_3, context_3) {
    "use strict";
    var helpers_1, BirthDate, BirthDateError;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            }
        ],
        execute: function () {
            BirthDate = /** @class */ (function () {
                function BirthDate(day, month, year) {
                    // Checking recieved values
                    if (month > 12 || month < 1) {
                        throw new BirthDateError("Wrong month argument value: ".concat(month));
                    }
                    if (year < 1000) {
                        throw new BirthDateError("Wrong year argument value: ".concat(year));
                    }
                    if (new Date(year, month - 1, day).getTime() > Date.now()) {
                        throw new BirthDateError('Used birth date from the feature');
                    }
                    var maxDaysInMonth = new Date(new Date(year, month, 1).getTime() - 43200000).getDate();
                    if (day > maxDaysInMonth || day < 1) {
                        throw new BirthDateError("Wrong day argument value: ".concat(day));
                    }
                    // Create digitsArray
                    this.digitsArray = [];
                    var dayString = helpers_1.getTwoDigitsString(day);
                    var monthString = helpers_1.getTwoDigitsString(month);
                    var yearString = year.toString();
                    this.digitsArray = "".concat(dayString).concat(monthString).concat(yearString)
                        .split('')
                        .map(function (valueString) { return parseInt(valueString); });
                    // Save values
                    this.day = dayString;
                    this.month = monthString;
                    this.year = yearString;
                }
                BirthDate.prototype.toString = function () {
                    return "".concat(this.day, ".").concat(this.month, ".").concat(this.year);
                };
                Object.defineProperty(BirthDate.prototype, "dayNumber", {
                    get: function () {
                        return parseInt(this.day);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(BirthDate.prototype, "monthNumber", {
                    get: function () {
                        return parseInt(this.month);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(BirthDate.prototype, "yearNumber", {
                    get: function () {
                        return parseInt(this.year);
                    },
                    enumerable: false,
                    configurable: true
                });
                return BirthDate;
            }());
            exports_3("default", BirthDate);
            BirthDateError = /** @class */ (function (_super) {
                __extends(BirthDateError, _super);
                function BirthDateError(message) {
                    var _this = _super.call(this, message) || this;
                    _this.name = 'BirthDateError';
                    return _this;
                }
                return BirthDateError;
            }(Error));
            exports_3("BirthDateError", BirthDateError);
        }
    };
});
System.register("modules/NumerologyBirthDate", ["modules/BirthDate", "modules/helpers"], function (exports_4, context_4) {
    "use strict";
    var BirthDate_1, helpers_2, NumerologyBirthDate, NumerologyError;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (BirthDate_1_1) {
                BirthDate_1 = BirthDate_1_1;
            },
            function (helpers_2_1) {
                helpers_2 = helpers_2_1;
            }
        ],
        execute: function () {
            NumerologyBirthDate = /** @class */ (function (_super) {
                __extends(NumerologyBirthDate, _super);
                function NumerologyBirthDate() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                NumerologyBirthDate.prototype.getNumberAmount = function (numberValue) {
                    if (numberValue < 0 || numberValue > 9) {
                        throw new NumerologyError("Wrong argument value: ".concat(numberValue));
                    }
                    return this.digitsArray.filter(function (digit) { return digit === numberValue; })
                        .length;
                };
                NumerologyBirthDate.prototype.getRulingNumber = function () {
                    return helpers_2.calculateSum(this.digitsArray.join(''));
                };
                NumerologyBirthDate.prototype.getBirthDayNumber = function () {
                    return helpers_2.calculateSum(this.day);
                };
                NumerologyBirthDate.prototype.getIndividualYearNumber = function (year) {
                    // Checking argument
                    if (year < 1000) {
                        throw new NumerologyError("Wrong year argument value: ".concat(year));
                    }
                    if (year > this.yearNumber + 120) {
                        throw new NumerologyError("Too big year argument value: ".concat(year));
                    }
                    if (year < this.yearNumber) {
                        throw new NumerologyError("Year argument value ".concat(year, " less than subject birth year"));
                    }
                    return helpers_2.calculateFlatSum("".concat(this.digitsArray.slice(0, 4).join('')).concat(year.toString()));
                };
                return NumerologyBirthDate;
            }(BirthDate_1["default"]));
            exports_4("default", NumerologyBirthDate);
            NumerologyError = /** @class */ (function (_super) {
                __extends(NumerologyError, _super);
                function NumerologyError(message) {
                    var _this = _super.call(this, message) || this;
                    _this.name = 'NumerologyError';
                    return _this;
                }
                return NumerologyError;
            }(Error));
        }
    };
});
System.register("modules/NatalChart", ["data/arrowCodes"], function (exports_5, context_5) {
    "use strict";
    var arrowCodes_1, NatalChart;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (arrowCodes_1_1) {
                arrowCodes_1 = arrowCodes_1_1;
            }
        ],
        execute: function () {
            NatalChart = /** @class */ (function () {
                function NatalChart(birthDate) {
                    var _this = this;
                    this.birthDate = birthDate;
                    // Create natal chart
                    this.natalChart = Array(9)
                        .fill(0)
                        .map(function (val, idx) { return _this.birthDate.getNumberAmount(idx + 1); });
                }
                NatalChart.prototype.getMatches = function () {
                    var matches = [];
                    this.natalChart.forEach(function (val, idx) {
                        if (val > 0) {
                            matches.push((idx + 1).toString().repeat(val));
                        }
                    });
                    return matches;
                };
                NatalChart.prototype.getArrows = function () {
                    var _this = this;
                    var arrows = [];
                    Object.entries(arrowCodes_1.arrowCodes).forEach(function (_a) {
                        var arrowName = _a[0], arrowCode = _a[1];
                        var code = arrowCode
                            .slice(0, 3)
                            .split('')
                            .map(function (val) { return parseInt(val); });
                        var flag = arrowCode.slice(-1);
                        if (flag === '+' &&
                            _this.natalChart[code[0]] &&
                            _this.natalChart[code[1]] &&
                            _this.natalChart[code[2]]) {
                            arrows.push(arrowName);
                        }
                        if (flag === '-' &&
                            !_this.natalChart[code[0]] &&
                            !_this.natalChart[code[1]] &&
                            !_this.natalChart[code[2]]) {
                            arrows.push(arrowName);
                        }
                    });
                    return arrows;
                };
                return NatalChart;
            }());
            exports_5("default", NatalChart);
        }
    };
});
System.register("modules/Pyramid", ["modules/helpers"], function (exports_6, context_6) {
    "use strict";
    var helpers_3, Pyramid;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (helpers_3_1) {
                helpers_3 = helpers_3_1;
            }
        ],
        execute: function () {
            Pyramid = /** @class */ (function () {
                function Pyramid(birthDate) {
                    this.birthDate = birthDate;
                    var base = [birthDate.month, birthDate.day, birthDate.year].map(function (val) { return parseInt(helpers_3.calculateFlatSum(val)); });
                    var baseAge = 36 - parseInt(birthDate.getRulingNumber());
                    // First peak
                    var firstPeak = {
                        value: parseInt(helpers_3.calculateFlatSum((base[0] + base[1]).toString())),
                        age: baseAge,
                        year: birthDate.yearNumber + baseAge
                    };
                    // Second peak
                    var secondPeak = {
                        value: parseInt(helpers_3.calculateFlatSum((base[1] + base[2]).toString())),
                        age: firstPeak.age + 9,
                        year: firstPeak.year + 9
                    };
                    // Third peak
                    var thirdPeak = {
                        value: helpers_3.calculateTopPeakValue(firstPeak.value, secondPeak.value),
                        age: secondPeak.age + 9,
                        year: secondPeak.year + 9
                    };
                    var fourthPeak = {
                        value: helpers_3.calculateTopPeakValue(base[0], base[2]),
                        age: thirdPeak.age + 9,
                        year: thirdPeak.year + 9
                    };
                    this.peaks = [firstPeak, secondPeak, thirdPeak, fourthPeak];
                }
                Pyramid.prototype.getPeaks = function () {
                    return this.peaks.map(function (peak) { return ({
                        value: peak.value.toString(),
                        age: peak.age.toString(),
                        year: peak.year.toString()
                    }); });
                };
                return Pyramid;
            }());
            exports_6("default", Pyramid);
        }
    };
});
System.register("modules/NumerologyMap", ["modules/NatalChart", "modules/NumerologyBirthDate", "modules/Pyramid"], function (exports_7, context_7) {
    "use strict";
    var NatalChart_1, NumerologyBirthDate_1, Pyramid_1, NumerologyMap;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (NatalChart_1_1) {
                NatalChart_1 = NatalChart_1_1;
            },
            function (NumerologyBirthDate_1_1) {
                NumerologyBirthDate_1 = NumerologyBirthDate_1_1;
            },
            function (Pyramid_1_1) {
                Pyramid_1 = Pyramid_1_1;
            }
        ],
        execute: function () {
            NumerologyMap = /** @class */ (function () {
                function NumerologyMap(day, month, year) {
                    var birthDate = new NumerologyBirthDate_1["default"](day, month, year);
                    var natalChart = new NatalChart_1["default"](birthDate);
                    var pyramid = new Pyramid_1["default"](birthDate);
                    this.rulingNumber = birthDate.getRulingNumber();
                    this.birthDayNumber = birthDate.getBirthDayNumber();
                    this.individualYearNumber = birthDate.getIndividualYearNumber(new Date().getFullYear());
                    this.natalChart = {
                        matches: natalChart.getMatches(),
                        arrows: natalChart.getArrows()
                    };
                    this.pyramid = pyramid.getPeaks();
                }
                return NumerologyMap;
            }());
            exports_7("default", NumerologyMap);
        }
    };
});
System.register("index", ["modules/NumerologyMap"], function (exports_8, context_8) {
    "use strict";
    var NumerologyMap_1, nm;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (NumerologyMap_1_1) {
                NumerologyMap_1 = NumerologyMap_1_1;
            }
        ],
        execute: function () {
            nm = new NumerologyMap_1["default"](4, 4, 1988);
        }
    };
});
