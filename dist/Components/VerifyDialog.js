"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KeyVerifyDialog;
var _react = _interopRequireDefault(require("react"));
var mui = _interopRequireWildcard(require("@mui/material"));
var _VerifyDialogUtil = require("exports/Utils/VerifyDialogUtil");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MdasCIsvg = function MdasCIsvg() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 1000 295",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath18"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M 0,841.89 H 595.276 V 0 H 0 Z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath30"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m202.54 734.79c-42.134-0.932-49.907-6.23-53.853-10.303-1.774-1.862-3.765-4.605-5.565-9.892-0.722-2.115-0.767-2.007-2.035-7.431-1.266-5.424-2.057-15.335-2.556-19.528h11.051c0.186 2.288 0.286 4.5 0.745 8.549h0.014c2.354 17.483 8.142 25.592 12.736 29.341v3e-3c5.332 4.571 21.366 8.551 40.881 8.073 60.047-1.472 62.172-22.547 62.172-22.547h10.328c-1.896 10.367-12.714 23.821-66.246 23.822-2.468 0-5.019-0.029-7.672-0.087"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "linearGradient56",
    x2: "1",
    gradientTransform: "matrix(130.09,-3.8075,-3.8075,-130.09,138.95,712.36)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#004098",
    offset: "0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#004098",
    offset: ".011236"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#004098",
    offset: ".066335"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#004098",
    offset: ".10112"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#094",
    offset: ".33146"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#fff100",
    offset: ".53371"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#e60013",
    offset: ".76966"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#e60013",
    offset: ".78174"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#eb9200",
    offset: ".96629"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    "stop-color": "#eb9200",
    offset: "1"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath66"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M 0,841.89 H 595.276 V 0 H 0 Z"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(6.1873 0 0 -6.1873 -710.89 4546.9)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    "clip-path": "url(#clipPath18)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(156.29,712.24)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m0 0 0.01-24.533h12.633v39.385c-0.02-6e-3 -8.38-4.144-12.643-14.852",
    fill: "#004098"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    "clip-path": "url(#clipPath30)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m202.54 734.79c-42.134-0.932-49.907-6.23-53.853-10.303-1.774-1.862-3.765-4.605-5.565-9.892-0.722-2.115-0.767-2.007-2.035-7.431-1.266-5.424-2.057-15.335-2.556-19.528h11.051c0.186 2.288 0.286 4.5 0.745 8.549h0.014c2.354 17.483 8.142 25.592 12.736 29.341v3e-3c5.332 4.571 21.366 8.551 40.881 8.073 60.047-1.472 62.172-22.547 62.172-22.547h10.328c-1.896 10.367-12.714 23.821-66.246 23.822-2.468 0-5.019-0.029-7.672-0.087",
    fill: "url(#linearGradient56)"
  })), /*#__PURE__*/_react.default.createElement("g", {
    "clip-path": "url(#clipPath66)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(204.84,698.1)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m0 0c-0.495-1.14-1.179-1.939-2.055-2.396-0.875-0.457-2.345-0.687-4.413-0.687h-2.428v17.455h2.47c2.566 0 4.401-0.625 5.508-1.875 1.107-1.249 1.663-3.567 1.663-6.952 0-2.556-0.248-4.405-0.745-5.545m9.848 11.935c-0.523 1.944-1.365 3.65-2.528 5.116-1.164 1.465-2.636 2.59-4.417 3.373-1.782 0.785-4.117 1.176-7.011 1.176h-14.678v-31.911h14.678c1.758 0 3.722 0.288 5.887 0.871 1.585 0.419 3.068 1.265 4.45 2.534 1.381 1.27 2.46 2.844 3.238 4.724 0.778 1.879 1.167 4.524 1.167 7.936 0 2.176-0.263 4.237-0.786 6.181",
    fill: "#004098"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(235.76,719.7)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m0 0h-10.877l-11.938-31.911h10.078l7.166 22.03 6.994-22.042 10.5 0.012z",
    fill: "#004098"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(273,702.88)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m0 0c-0.854 1.412-2.213 2.592-4.084 3.546-1.87 0.95-4.968 1.891-9.292 2.819-1.746 0.363-2.854 0.754-3.322 1.177-0.483 0.404-0.724 0.86-0.724 1.368 0 0.696 0.291 1.288 0.872 1.774s1.448 0.73 2.595 0.73c1.396 0 2.491-0.325 3.282-0.971 0.13-0.105 0.238-0.237 0.353-0.364-1.167 2.162-3.136 5.05-6.105 7.14-1.748-0.195-3.221-0.555-4.415-1.076-1.912-0.837-3.344-1.987-4.297-3.446-0.953-1.462-1.427-3.014-1.427-4.657 0-2.5 0.932-4.559 2.794-6.173 1.851-1.614 4.943-2.906 9.282-3.878 2.648-0.581 4.345-1.197 5.091-1.848 0.743-0.654 1.117-1.394 1.117-2.221 0-0.869-0.384-1.635-1.152-2.295-0.766-0.659-1.858-0.99-3.276-0.99-1.896 0-3.357 0.644-4.378 1.93-0.629 0.795-1.046 1.954-1.25 3.473l-9.392-0.586c0.275-3.231 1.461-5.894 3.554-7.99 2.094-2.096 5.86-3.143 11.298-3.143 3.096 0 5.662 0.449 7.697 1.341 2.035 0.895 3.62 2.206 4.755 3.937 1.134 1.728 1.7 3.619 1.7 5.671 0 1.743-0.424 3.323-1.276 4.732",
    fill: "#004098"
  })), /*#__PURE__*/_react.default.createElement("path", {
    d: "m172.74 687.79h9.891v31.911h-9.891z",
    fill: "#004098"
  }), /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(140.79,717.82)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m0 0c-4.242 8.163-8.4 7.998-8.4 7.998h-17.496v-38.104h12.852v28.126c2.943-5.231 5.782-13.19 7.539-25.336 0.134-0.931 0.265-1.872 0.386-2.851h1.243s1.257 22 4.786 28.192c-0.372 0.856-0.535 1.254-0.91 1.975",
    fill: "#004098"
  })))));
};
function KeyVerifyDialog() {
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = _react.default.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    error = _React$useState4[0],
    setError = _React$useState4[1];
  var _React$useState5 = _react.default.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    mapiKey = _React$useState6[0],
    setMapiKey = _React$useState6[1];
  var handleOk = function handleOk() {
    if (mapiKey === '') {
      setError(true);
      return;
    }
    setOpen(false);
    window.location.search = "?mapiKey=".concat(mapiKey);
  };
  _react.default.useEffect(function () {
    if (!(0, _VerifyDialogUtil.isExistQueryStrings)('mapiKey')) setOpen(true);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(mui.Dialog, {
    open: open
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 20px 10px 20px'
    }
  }, /*#__PURE__*/_react.default.createElement(MdasCIsvg, null)), /*#__PURE__*/_react.default.createElement(mui.DialogTitle, {
    sx: {
      display: 'flex',
      alignItems: 'center'
    }
  }, "Enter MAPI-Key"), /*#__PURE__*/_react.default.createElement(mui.DialogContent, null, /*#__PURE__*/_react.default.createElement(mui.DialogContentText, null, "To use the plugin, ", /*#__PURE__*/_react.default.createElement("br", null), "you need an MAPI-key"), /*#__PURE__*/_react.default.createElement(mui.TextField, {
    margin: "dense",
    id: "mapikey",
    label: "MAPI-Key",
    type: "email",
    fullWidth: true,
    variant: "standard",
    onChange: function onChange(e) {
      return setMapiKey(e.target.value);
    },
    error: error
  })), /*#__PURE__*/_react.default.createElement(mui.DialogActions, null, /*#__PURE__*/_react.default.createElement(mui.Button, {
    onClick: handleOk
  }, "OK"))));
}