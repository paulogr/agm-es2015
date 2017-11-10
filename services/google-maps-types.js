"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var google = exports.google = undefined;
/**
 * Identifiers used to specify the placement of controls on the map. Controls are
 * positioned relative to other controls in the same layout position. Controls that
 * are added first are positioned closer to the edge of the map.
 */
var ControlPosition = exports.ControlPosition = undefined;
(function (ControlPosition) {
    ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
    ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
    ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
    ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
    ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
    ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
    ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
    ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
    ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
    ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
    ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
    ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
})(ControlPosition || (exports.ControlPosition = ControlPosition = {}));
var MapTypeId = exports.MapTypeId = undefined;
(function (MapTypeId) {
    /** This map type displays a transparent layer of major streets on satellite images. */
    MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
    /** This map type displays a normal street map. */
    MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
    /** This map type displays satellite images. */
    MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
    /** This map type displays maps with physical features such as terrain and vegetation. */
    MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
})(MapTypeId || (exports.MapTypeId = MapTypeId = {}));
var MapTypeControlStyle = exports.MapTypeControlStyle = undefined;
(function (MapTypeControlStyle) {
    MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
    MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 1] = "DROPDOWN_MENU";
    MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 2] = "HORIZONTAL_BAR";
})(MapTypeControlStyle || (exports.MapTypeControlStyle = MapTypeControlStyle = {}));
var ScaleControlStyle = exports.ScaleControlStyle = undefined;
(function (ScaleControlStyle) {
    ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
})(ScaleControlStyle || (exports.ScaleControlStyle = ScaleControlStyle = {}));
var ZoomControlStyle = exports.ZoomControlStyle = undefined;
(function (ZoomControlStyle) {
    ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
    ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
    ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
})(ZoomControlStyle || (exports.ZoomControlStyle = ZoomControlStyle = {}));
//# sourceMappingURL=google-maps-types.js.map