"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/main.js?{"page":"pages%2Ftext%2Ftext"} ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_text_text_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/text/text.nvue?mpType=page */ 9);

        
        
        
        _pages_text_text_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_text_text_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/text/text'
        _pages_text_text_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_text_text_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_id":"@dcloudio/uni-stat@2.0.0-v3-24020191018001","_inBundle":false,"_integrity":"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"^2.0.0-alpha-24420191128001","saveSpec":null,"fetchSpec":"^2.0.0-alpha-24420191128001"},"_requiredBy":["/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz","_shasum":"6ef04326cc0b945726413eebe442ab8f47c7536c","_spec":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-v3-24020191018001"};

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/pages.json?{"type":"style"} ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 5 */
/*!******************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/pages.json?{"type":"stat"} ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__0432911"});

/***/ }),
/* 6 */
/*!*******************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/main.js?{"type":"appStyle"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 7 */
/*!*******************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "uniicons",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url('./static/uni.ttf') format('truetype')"
    },
    {
      "fontFamily": "iconfont",
      "src": "url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')"
    }
  ],
  "uni-flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "uni-flex-item": {
    "flex": 1
  },
  "uni-row": {
    "flexDirection": "row"
  },
  "uni-column": {
    "flexDirection": "column"
  },
  "uni-link": {
    "color": "#576B95",
    "fontSize": "26rpx"
  },
  "uni-center": {
    "textAlign": "center"
  },
  "uni-inline-item": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-page-head": {
    "paddingTop": "35rpx",
    "paddingRight": "35rpx",
    "paddingBottom": "35rpx",
    "paddingLeft": "35rpx",
    "textAlign": "center"
  },
  "uni-page-head-title": {
    "display": "inline-block",
    "paddingTop": 0,
    "paddingRight": "40rpx",
    "paddingBottom": 0,
    "paddingLeft": "40rpx",
    "fontSize": "30rpx",
    "height": "88rpx",
    "lineHeight": "88rpx",
    "color": "#BEBEBE",
    "boxSizing": "border-box",
    "borderBottom": "2rpx solid #D8D8D8"
  },
  "uni-page-body": {
    "width": 100,
    "flexGrow": 1,
    "overflowX": "hidden"
  },
  "uni-padding-wrap": {
    "width": "690rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-word": {
    "textAlign": "center",
    "paddingTop": "200rpx",
    "paddingRight": "100rpx",
    "paddingBottom": "200rpx",
    "paddingLeft": "100rpx"
  },
  "uni-title": {
    "fontSize": "30rpx",
    "fontWeight": "500",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0,
    "lineHeight": 1.5
  },
  "uni-text": {
    "fontSize": "28rpx"
  },
  "uni-text-gray": {
    "color": "#cccccc"
  },
  "uni-text-small": {
    "fontSize": "24rpx"
  },
  "uni-common-mb": {
    "marginBottom": "30rpx"
  },
  "uni-common-pb": {
    "paddingBottom": "30rpx"
  },
  "uni-common-pl": {
    "paddingLeft": "30rpx"
  },
  "uni-common-mt": {
    "marginTop": "30rpx"
  },
  "uni-bg-red": {
    "background": "#F76260",
    "color": "#FFFFFF"
  },
  "uni-bg-green": {
    "background": "#09BB07",
    "color": "#FFFFFF"
  },
  "uni-bg-blue": {
    "background": "#007AFF",
    "color": "#FFFFFF"
  },
  "uni-h1": {
    "fontSize": "80rpx",
    "fontWeight": "700"
  },
  "uni-h2": {
    "fontSize": "60rpx",
    "fontWeight": "700"
  },
  "uni-h3": {
    "fontSize": "48rpx",
    "fontWeight": "700"
  },
  "uni-h4": {
    "fontSize": "36rpx",
    "fontWeight": "700"
  },
  "uni-h5": {
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-h6": {
    "fontSize": "24rpx",
    "color": "#8f8f94"
  },
  "uni-bold": {
    "fontWeight": "bold"
  },
  "uni-ellipsis": {
    "overflow": "hidden",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "uni-btn-v": {
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-form-item": {
    "display": "flex",
    "width": 100,
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-label": {
    "width": "210rpx",
    "wordWrap": "break-word",
    "wordBreak": "break-all",
    "textIndent": "20rpx"
  },
  "uni-input": {
    "height": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "25rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "25rpx",
    "lineHeight": "50rpx",
    "fontSize": "28rpx",
    "background": "#FFF",
    "flex": 1
  },
  "uni-loadmore": {
    "height": "80rpx",
    "lineHeight": "80rpx",
    "textAlign": "center",
    "paddingBottom": "30rpx"
  },
  "uni-badge": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-default": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-primary": {
    "color": "#ffffff",
    "backgroundColor": "#007aff"
  },
  "uni-badge-green": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-success": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-warning": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-yellow": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-danger": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-red": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-purple": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-badge-royal": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-collapse-content": {
    "height": 0,
    "width": 100,
    "overflow": "hidden"
  },
  "uni-card": {
    "background": "#fff",
    "borderRadius": "8rpx",
    "marginTop": "20rpx",
    "marginRight": 0,
    "marginBottom": "20rpx",
    "marginLeft": 0,
    "position": "relative",
    "boxShadow": "0 2rpx 4rpx rgba(0, 0, 0, .3)"
  },
  "uni-card-content": {
    "fontSize": "30rpx"
  },
  "uni-card-content-inner": {
    "position": "relative",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "uni-card-footer": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "color": "#6d6d72",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "WebkitTransform:before": "scaleY(.5)",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc"
  },
  "uni-card-header": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "fontSize": "36rpx",
    "position:before:after": "absolute",
    "top:before:after": 0,
    "right:before:after": 0,
    "left:before:after": 0,
    "height:before:after": "2rpx",
    "content:before:after": "''",
    "WebkitTransform:before:after": "scaleY(.5)",
    "transform:before:after": "scaleY(.5)",
    "backgroundColor:before:after": "#c8c7cc",
    "bottom:after": 0
  },
  "uni-card-media": {
    "justifyContent": "flex-start"
  },
  "uni-card-media-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-card-media-body": {
    "height": "84rpx",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  "uni-card-media-text-top": {
    "lineHeight": "36rpx",
    "fontSize": "34rpx"
  },
  "uni-card-media-text-bottom": {
    "lineHeight": "30rpx",
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-card-link": {
    "color": "#007AFF"
  },
  "uni-list": {
    "backgroundColor": "#FFFFFF",
    "position": "relative",
    "width": 100,
    "display": "flex",
    "flexDirection": "column",
    "position:after": "absolute",
    "zIndex:after": 10,
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "1",
    "content:after": "''",
    "WebkitTransform:after": "scaleY(.5)",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc",
    "position::before": "absolute",
    "zIndex::before": 10,
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc"
  },
  "uni-list-cell": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "position::after": "absolute",
    "zIndex::after": 3,
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "30rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-hover": {
    "backgroundColor": "#eeeeee"
  },
  "uni-list-cell-pd": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-left": {
    "fontSize": "28rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-db": {
    "flex": 1
  },
  "uni-list-cell-right": {
    "flex": 1
  },
  "uni-list-cell-divider": {
    "position": "relative",
    "display": "flex",
    "color": "#999999",
    "backgroundColor": "#f7f7f7",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "position::before": "absolute",
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc",
    "position::after": "absolute",
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "0rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-navigate": {
    "fontSize": "30rpx",
    "paddingTop": "22rpx",
    "paddingRight": "36rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "lineHeight": "48rpx",
    "position": "relative",
    "display": "flex",
    "boxSizing": "border-box",
    "width": 100,
    "flex": 1,
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "uni-navigate-badge": {
    "paddingRight": "50rpx"
  },
  "uni-triplex-row": {
    "display": "flex",
    "flex": 1,
    "width": 100,
    "boxSizing": "border-box",
    "flexDirection": "row",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-triplex-right": {
    "display": "flex",
    "flexDirection": "column",
    "width": 16,
    "textAlign": "right"
  },
  "uni-triplex-left": {
    "display": "flex",
    "flexDirection": "column",
    "width": 84
  },
  "uni-media-list": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "boxSizing": "border-box",
    "display": "flex",
    "width": 100,
    "flexDirection": "row"
  },
  "uni-pull-right": {
    "flexDirection": "row-reverse"
  },
  "uni-media-list-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-media-list-body": {
    "height": "84rpx",
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "overflow": "hidden"
  },
  "uni-media-list-text-top": {
    "width": 100,
    "lineHeight": "36rpx",
    "fontSize": "30rpx"
  },
  "uni-media-list-text-bottom": {
    "width": 100,
    "lineHeight": "30rpx",
    "fontSize": "26rpx",
    "color": "#8f8f94"
  },
  "uni-grid-9": {
    "background": "#f2f2f2",
    "width": "750rpx",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "borderTop": "2rpx solid #eee"
  },
  "uni-grid-9-item": {
    "width": "250rpx",
    "height": "200rpx",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottom": "2rpx solid",
    "borderRight": "2rpx solid",
    "borderColor": "#eeeeee",
    "boxSizing": "border-box"
  },
  "no-border-right": {
    "borderRight": "none"
  },
  "uni-grid-9-image": {
    "width": "100rpx",
    "height": "100rpx"
  },
  "uni-grid-9-text": {
    "width": "250rpx",
    "lineHeight": "4rpx",
    "height": "40rpx",
    "textAlign": "center",
    "fontSize": "30rpx"
  },
  "uni-grid-9-item-hover": {
    "background": "rgba(0, 0, 0, 0.1)"
  },
  "uni-uploader": {
    "flex": 1,
    "flexDirection": "column"
  },
  "uni-uploader-head": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "uni-uploader-info": {
    "color": "#B2B2B2"
  },
  "uni-uploader-body": {
    "marginTop": "16rpx"
  },
  "uni-uploader__files": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "uni-uploader__file": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__img": {
    "display": "block",
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__input-box": {
    "position": "relative",
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "208rpx",
    "height": "208rpx",
    "border": "2rpx solid #D9D9D9",
    "content:before": "\" \"",
    "position:before": "absolute",
    "top:before": 50,
    "left:before": 50,
    "WebkitTransform:before": "translate(-50%, -50%)",
    "transform:before": "translate(-50%, -50%)",
    "backgroundColor:before": "#D9D9D9",
    "content:before:after": "\" \"",
    "position:before:after": "absolute",
    "top:before:after": 50,
    "left:before:after": 50,
    "WebkitTransform:before:after": "translate(-50%, -50%)",
    "transform:before:after": "translate(-50%, -50%)",
    "backgroundColor:before:after": "#D9D9D9",
    "width:before": "4rpx",
    "height:before": "79rpx",
    "width:after": "79rpx",
    "height:after": "4rpx",
    "borderColor:active": "#999999",
    "backgroundColor:active:before": "#999999",
    "backgroundColor:active:before:active:after": "#999999"
  },
  "uni-uploader__input": {
    "position": "absolute",
    "zIndex": 1,
    "top": 0,
    "left": 0,
    "width": 100,
    "height": 100,
    "opacity": 0
  },
  "feedback-title": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "color": "#8f8f94",
    "fontSize": "28rpx"
  },
  "feedback-quick": {
    "position": "relative",
    "paddingRight": "40rpx",
    "fontFamily:after": "uniicons",
    "fontSize:after": "40rpx",
    "content:after": "'\\e581'",
    "position:after": "absolute",
    "right:after": 0,
    "top:after": 50,
    "color:after": "#bbbbbb",
    "WebkitTransform:after": "translateY(-50%)",
    "transform:after": "translateY(-50%)"
  },
  "feedback-body": {
    "background": "#fff"
  },
  "feedback-textare": {
    "height": "200rpx",
    "fontSize": "34rpx",
    "lineHeight": "50rpx",
    "width": 100,
    "boxSizing": "border-box",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "feedback-input": {
    "fontSize": "34rpx",
    "height": "50rpx",
    "minHeight": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "lineHeight": "50rpx"
  },
  "feedback-uploader": {
    "paddingTop": "22rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "20rpx"
  },
  "feedback-star": {
    "fontFamily": "uniicons",
    "fontSize": "40rpx",
    "marginLeft": "6rpx",
    "content:after": "'\\e408'"
  },
  "feedback-star-view": {
    "marginLeft": "20rpx"
  },
  "feedback-submit": {
    "background": "#007AFF",
    "color": "#FFFFFF",
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "uni-input-group": {
    "position": "relative",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "border": 0,
    "backgroundColor": "#ffffff",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc",
    "position:after": "absolute",
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "2rpx",
    "content:after": "''",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "uni-input-row": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "fontSize": "28rpx",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between"
  },
  "uni-textarea": {
    "width": 100,
    "background": "#FFF"
  },
  "uni-tab-bar": {
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden",
    "height": 100
  },
  "uni-swiper-tab": {
    "width": 100,
    "whiteSpace": "nowrap",
    "lineHeight": "100rpx",
    "height": "100rpx",
    "borderBottom": "1px solid #c8c7cc"
  },
  "swiper-tab-list": {
    "fontSize": "30rpx",
    "width": "150rpx",
    "display": "inline-block",
    "textAlign": "center",
    "color": "#555555"
  },
  "uni-tab-bar-loading": {
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0
  },
  "uni-comment": {
    "paddingTop": "5rpx",
    "paddingRight": 0,
    "paddingBottom": "5rpx",
    "paddingLeft": 0,
    "display": "flex",
    "flexGrow": 1,
    "flexDirection": "column"
  },
  "uni-comment-list": {
    "flexWrap": "nowrap",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "marginTop": "10rpx",
    "marginRight": 0,
    "marginBottom": "10rpx",
    "marginLeft": 0,
    "width": 100,
    "display": "flex"
  },
  "uni-comment-face": {
    "width": "70rpx",
    "height": "70rpx",
    "borderRadius": 100,
    "marginRight": "20rpx",
    "flexShrink": 0,
    "overflow": "hidden"
  },
  "uni-comment-body": {
    "width": 100
  },
  "uni-comment-top": {
    "lineHeight": 1.5,
    "justifyContent": "space-between"
  },
  "uni-comment-date": {
    "lineHeight": "38rpx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "display": "flex",
    "flexGrow": 1
  },
  "uni-comment-content": {
    "lineHeight": 1.6,
    "fontSize": "28rpx",
    "paddingTop": "8rpx",
    "paddingRight": 0,
    "paddingBottom": "8rpx",
    "paddingLeft": 0
  },
  "uni-comment-replay-btn": {
    "background": "#FFF",
    "fontSize": "24rpx",
    "lineHeight": "28rpx",
    "paddingTop": "5rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "20rpx",
    "borderRadius": "30rpx",
    "color": "#333333",
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx"
  },
  "uni-swiper-msg": {
    "width": 100,
    "paddingTop": "12rpx",
    "paddingRight": 0,
    "paddingBottom": "12rpx",
    "paddingLeft": 0,
    "flexWrap": "nowrap",
    "display": "flex"
  },
  "uni-swiper-msg-icon": {
    "width": "50rpx",
    "marginRight": "20rpx"
  },
  "uni-product-list": {
    "display": "flex",
    "width": 100,
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "uni-product": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "display": "flex",
    "flexDirection": "column"
  },
  "image-view": {
    "height": "330rpx",
    "width": "330rpx",
    "marginTop": "12rpx",
    "marginRight": 0,
    "marginBottom": "12rpx",
    "marginLeft": 0
  },
  "uni-product-image": {
    "height": "330rpx",
    "width": "330rpx"
  },
  "uni-product-title": {
    "width": "300rpx",
    "wordBreak": "break-all",
    "display": "-webkit-box",
    "overflow": "hidden",
    "lineHeight": 1.5,
    "textOverflow": "ellipsis",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2
  },
  "uni-product-price": {
    "marginTop": "10rpx",
    "fontSize": "28rpx",
    "lineHeight": 1.5,
    "position": "relative"
  },
  "uni-product-price-original": {
    "color": "#e80080"
  },
  "uni-product-price-favour": {
    "color": "#888888",
    "textDecoration": "line-through",
    "marginLeft": "10rpx"
  },
  "uni-product-tip": {
    "position": "absolute",
    "right": "10rpx",
    "backgroundColor": "#ff3333",
    "color": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx",
    "borderRadius": "5rpx"
  },
  "uni-timeline": {
    "marginTop": "35rpx",
    "marginRight": 0,
    "marginBottom": "35rpx",
    "marginLeft": 0,
    "display": "flex",
    "flexDirection": "column",
    "position": "relative"
  },
  "uni-timeline-item": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "paddingBottom": "20rpx",
    "boxSizing": "border-box",
    "overflow": "hidden"
  },
  "uni-timeline-item-divider": {
    "position::before": "absolute",
    "left::before": "15rpx",
    "width::before": "1rpx",
    "height::before": 100,
    "content::before": "''",
    "background::before": "inherit",
    "position::before::after": "absolute",
    "left::before::after": "15rpx",
    "width::before::after": "1rpx",
    "height::before::after": 100,
    "content::before::after": "''",
    "background::before::after": "inherit",
    "bottom::before": 100,
    "top::after": 100
  },
  "uni-icon": {
    "fontFamily": "uniicons",
    "fontSize": "24",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "display": "inline-block",
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "uni-icon-contact": {
    "content:before": "'\\e100'"
  },
  "uni-icon-person": {
    "content:before": "'\\e101'"
  },
  "uni-icon-personadd": {
    "content:before": "'\\e102'"
  },
  "uni-icon-contact-filled": {
    "content:before": "'\\e130'"
  },
  "uni-icon-person-filled": {
    "content:before": "'\\e131'"
  },
  "uni-icon-personadd-filled": {
    "content:before": "'\\e132'"
  },
  "uni-icon-phone": {
    "content:before": "'\\e200'"
  },
  "uni-icon-email": {
    "content:before": "'\\e201'"
  },
  "uni-icon-chatbubble": {
    "content:before": "'\\e202'"
  },
  "uni-icon-chatboxes": {
    "content:before": "'\\e203'"
  },
  "uni-icon-phone-filled": {
    "content:before": "'\\e230'"
  },
  "uni-icon-email-filled": {
    "content:before": "'\\e231'"
  },
  "uni-icon-chatbubble-filled": {
    "content:before": "'\\e232'"
  },
  "uni-icon-chatboxes-filled": {
    "content:before": "'\\e233'"
  },
  "uni-icon-weibo": {
    "content:before": "'\\e260'"
  },
  "uni-icon-weixin": {
    "content:before": "'\\e261'"
  },
  "uni-icon-pengyouquan": {
    "content:before": "'\\e262'"
  },
  "uni-icon-chat": {
    "content:before": "'\\e263'"
  },
  "uni-icon-qq": {
    "content:before": "'\\e264'"
  },
  "uni-icon-videocam": {
    "content:before": "'\\e300'"
  },
  "uni-icon-camera": {
    "content:before": "'\\e301'"
  },
  "uni-icon-mic": {
    "content:before": "'\\e302'"
  },
  "uni-icon-location": {
    "content:before": "'\\e303'"
  },
  "uni-icon-mic-filled": {
    "content:before": "'\\e332'"
  },
  "uni-icon-speech": {
    "content:before:before": "'\\e332'"
  },
  "uni-icon-location-filled": {
    "content:before": "'\\e333'"
  },
  "uni-icon-micoff": {
    "content:before": "'\\e360'"
  },
  "uni-icon-image": {
    "content:before": "'\\e363'"
  },
  "uni-icon-map": {
    "content:before": "'\\e364'"
  },
  "uni-icon-compose": {
    "content:before": "'\\e400'"
  },
  "uni-icon-trash": {
    "content:before": "'\\e401'"
  },
  "uni-icon-upload": {
    "content:before": "'\\e402'"
  },
  "uni-icon-download": {
    "content:before": "'\\e403'"
  },
  "uni-icon-close": {
    "content:before": "'\\e404'"
  },
  "uni-icon-redo": {
    "content:before": "'\\e405'"
  },
  "uni-icon-undo": {
    "content:before": "'\\e406'"
  },
  "uni-icon-refresh": {
    "content:before": "'\\e407'"
  },
  "uni-icon-star": {
    "content:before": "'\\e408'"
  },
  "uni-icon-plus": {
    "content:before": "'\\e409'"
  },
  "uni-icon-minus": {
    "content:before": "'\\e410'"
  },
  "uni-icon-circle": {
    "content:before": "'\\e411'"
  },
  "uni-icon-checkbox": {
    "content:before:before": "'\\e411'"
  },
  "uni-icon-close-filled": {
    "content:before": "'\\e434'"
  },
  "uni-icon-clear": {
    "content:before:before": "'\\e434'"
  },
  "uni-icon-refresh-filled": {
    "content:before": "'\\e437'"
  },
  "uni-icon-star-filled": {
    "content:before": "'\\e438'"
  },
  "uni-icon-plus-filled": {
    "content:before": "'\\e439'"
  },
  "uni-icon-minus-filled": {
    "content:before": "'\\e440'"
  },
  "uni-icon-circle-filled": {
    "content:before": "'\\e441'"
  },
  "uni-icon-checkbox-filled": {
    "content:before": "'\\e442'"
  },
  "uni-icon-closeempty": {
    "content:before": "'\\e460'"
  },
  "uni-icon-refreshempty": {
    "content:before": "'\\e461'"
  },
  "uni-icon-reload": {
    "content:before": "'\\e462'"
  },
  "uni-icon-starhalf": {
    "content:before": "'\\e463'"
  },
  "uni-icon-spinner": {
    "content:before": "'\\e464'"
  },
  "uni-icon-spinner-cycle": {
    "content:before": "'\\e465'"
  },
  "uni-icon-search": {
    "content:before": "'\\e466'"
  },
  "uni-icon-plusempty": {
    "content:before": "'\\e468'"
  },
  "uni-icon-forward": {
    "content:before": "'\\e470'"
  },
  "uni-icon-back": {
    "content:before": "'\\e471'"
  },
  "uni-icon-left-nav": {
    "content:before:before": "'\\e471'"
  },
  "uni-icon-checkmarkempty": {
    "content:before": "'\\e472'"
  },
  "uni-icon-home": {
    "content:before": "'\\e500'"
  },
  "uni-icon-navigate": {
    "content:before": "'\\e501'"
  },
  "uni-icon-gear": {
    "content:before": "'\\e502'"
  },
  "uni-icon-paperplane": {
    "content:before": "'\\e503'"
  },
  "uni-icon-info": {
    "content:before": "'\\e504'"
  },
  "uni-icon-help": {
    "content:before": "'\\e505'"
  },
  "uni-icon-locked": {
    "content:before": "'\\e506'"
  },
  "uni-icon-more": {
    "content:before": "'\\e507'"
  },
  "uni-icon-flag": {
    "content:before": "'\\e508'"
  },
  "uni-icon-home-filled": {
    "content:before": "'\\e530'"
  },
  "uni-icon-gear-filled": {
    "content:before": "'\\e532'"
  },
  "uni-icon-info-filled": {
    "content:before": "'\\e534'"
  },
  "uni-icon-help-filled": {
    "content:before": "'\\e535'"
  },
  "uni-icon-more-filled": {
    "content:before": "'\\e537'"
  },
  "uni-icon-settings": {
    "content:before": "'\\e560'"
  },
  "uni-icon-list": {
    "content:before": "'\\e562'"
  },
  "uni-icon-bars": {
    "content:before": "'\\e563'"
  },
  "uni-icon-loop": {
    "content:before": "'\\e565'"
  },
  "uni-icon-paperclip": {
    "content:before": "'\\e567'"
  },
  "uni-icon-eye": {
    "content:before": "'\\e568'"
  },
  "uni-icon-arrowup": {
    "content:before": "'\\e580'"
  },
  "uni-icon-arrowdown": {
    "content:before": "'\\e581'"
  },
  "uni-icon-arrowleft": {
    "content:before": "'\\e582'"
  },
  "uni-icon-arrowright": {
    "content:before": "'\\e583'"
  },
  "uni-icon-arrowthinup": {
    "content:before": "'\\e584'"
  },
  "uni-icon-arrowthindown": {
    "content:before": "'\\e585'"
  },
  "uni-icon-arrowthinleft": {
    "content:before": "'\\e586'"
  },
  "uni-icon-arrowthinright": {
    "content:before": "'\\e587'"
  },
  "uni-icon-pulldown": {
    "content:before": "'\\e588'"
  },
  "uni-icon-scan": {
    "content:before": "\"\\e612\""
  },
  "uni-divider": {
    "height": "110rpx",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative"
  },
  "uni-divider__content": {
    "fontSize": "28rpx",
    "color": "#999999",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "position": "relative",
    "zIndex": 101,
    "background": "#F4F5F6"
  },
  "uni-divider__line": {
    "backgroundColor": "#CCCCCC",
    "height": "1",
    "width": 100,
    "position": "absolute",
    "zIndex": 100,
    "top": 50,
    "left": 0,
    "transform": "translateY(50%)"
  },
  "u-flex": {
    "display": "flex"
  },
  "u-align-items": {
    "display": "flex",
    "alignItems": "center"
  },
  "u-justify-content": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "u-justify-contentb": {
    "display": "flex",
    "justifyContent": "space-between"
  },
  "iconfont": {
    "fontFamily": "\"iconfont\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  },
  "iconsousuo": {
    "content:before": "\"\\e60b\""
  },
  "iconyijin14-cai": {
    "content:before": "\"\\e60e\""
  },
  "icondianzan": {
    "content:before": "\"\\e644\""
  },
  "iconjiantouarrow487": {
    "content:before": "\"\\e6ab\""
  },
  "iconxingbienv": {
    "content:before": "\"\\e605\""
  },
  "iconxingbienan": {
    "content:before": "\"\\e606\""
  },
  "iconshanchu": {
    "content:before": "\"\\e747\""
  },
  "iconiconset0213": {
    "content:before": "\"\\e670\""
  },
  "iconxialazhankai": {
    "content:before": "\"\\e6b5\""
  },
  "iconbofang": {
    "content:before": "\"\\e60a\""
  },
  "iconkulian": {
    "content:before": "\"\\e600\""
  },
  "iconzhuanfa": {
    "content:before": "\"\\e65f\""
  },
  "iconplus-line": {
    "content:before": "\"\\e636\""
  },
  "iconxiaolian": {
    "content:before": "\"\\e7ed\""
  },
  "iconpinglun": {
    "content:before": "\"\\e73e\""
  },
  "iconpen": {
    "content:before": "\"\\e61c\""
  },
  "iconqiandao": {
    "content:before": "\"\\e609\""
  },
  "iconxiaoxi": {
    "content:before": "\"\\e60d\""
  },
  "icondongtaiganzhi": {
    "content:before": "\"\\e7ae\""
  },
  "iconmy": {
    "content:before": "\"\\e635\""
  },
  "iconzhuye": {
    "content:before": "\"\\e62d\""
  },
  "bounce": {
    "WebkitAnimationName": "bounce",
    "animationName": "bounce",
    "WebkitTransformOrigin": "center bottom",
    "transformOrigin": "center bottom"
  },
  "flash": {
    "WebkitAnimationName": "flash",
    "animationName": "flash"
  },
  "pulse": {
    "WebkitAnimationName": "pulse",
    "animationName": "pulse"
  },
  "rubberBand": {
    "WebkitAnimationName": "rubberBand",
    "animationName": "rubberBand"
  },
  "shake": {
    "WebkitAnimationName": "shake",
    "animationName": "shake"
  },
  "headShake": {
    "WebkitAnimationTimingFunction": "ease-in-out",
    "animationTimingFunction": "ease-in-out",
    "WebkitAnimationName": "headShake",
    "animationName": "headShake"
  },
  "swing": {
    "WebkitTransformOrigin": "top center",
    "transformOrigin": "top center",
    "WebkitAnimationName": "swing",
    "animationName": "swing"
  },
  "tada": {
    "WebkitAnimationName": "tada",
    "animationName": "tada"
  },
  "wobble": {
    "WebkitAnimationName": "wobble",
    "animationName": "wobble"
  },
  "jello": {
    "WebkitAnimationName": "jello",
    "animationName": "jello",
    "WebkitTransformOrigin": "center",
    "transformOrigin": "center"
  },
  "heartBeat": {
    "WebkitAnimationName": "heartBeat",
    "animationName": "heartBeat",
    "WebkitAnimationDuration": 1.3,
    "animationDuration": 1.3,
    "WebkitAnimationTimingFunction": "ease-in-out",
    "animationTimingFunction": "ease-in-out"
  },
  "bounceIn": {
    "WebkitAnimationDuration": 0.75,
    "animationDuration": 0.75,
    "WebkitAnimationName": "bounceIn",
    "animationName": "bounceIn"
  },
  "bounceInDown": {
    "WebkitAnimationName": "bounceInDown",
    "animationName": "bounceInDown"
  },
  "bounceInLeft": {
    "WebkitAnimationName": "bounceInLeft",
    "animationName": "bounceInLeft"
  },
  "bounceInRight": {
    "WebkitAnimationName": "bounceInRight",
    "animationName": "bounceInRight"
  },
  "bounceInUp": {
    "WebkitAnimationName": "bounceInUp",
    "animationName": "bounceInUp"
  },
  "bounceOut": {
    "WebkitAnimationDuration": 0.75,
    "animationDuration": 0.75,
    "WebkitAnimationName": "bounceOut",
    "animationName": "bounceOut"
  },
  "bounceOutDown": {
    "WebkitAnimationName": "bounceOutDown",
    "animationName": "bounceOutDown"
  },
  "bounceOutLeft": {
    "WebkitAnimationName": "bounceOutLeft",
    "animationName": "bounceOutLeft"
  },
  "bounceOutRight": {
    "WebkitAnimationName": "bounceOutRight",
    "animationName": "bounceOutRight"
  },
  "bounceOutUp": {
    "WebkitAnimationName": "bounceOutUp",
    "animationName": "bounceOutUp"
  },
  "fadeIn": {
    "WebkitAnimationName": "fadeIn",
    "animationName": "fadeIn"
  },
  "fadeInDown": {
    "WebkitAnimationName": "fadeInDown",
    "animationName": "fadeInDown"
  },
  "fadeInDownBig": {
    "WebkitAnimationName": "fadeInDownBig",
    "animationName": "fadeInDownBig"
  },
  "fadeInLeft": {
    "WebkitAnimationName": "fadeInLeft",
    "animationName": "fadeInLeft"
  },
  "fadeInLeftBig": {
    "WebkitAnimationName": "fadeInLeftBig",
    "animationName": "fadeInLeftBig"
  },
  "fadeInRight": {
    "WebkitAnimationName": "fadeInRight",
    "animationName": "fadeInRight"
  },
  "fadeInRightBig": {
    "WebkitAnimationName": "fadeInRightBig",
    "animationName": "fadeInRightBig"
  },
  "fadeInUp": {
    "WebkitAnimationName": "fadeInUp",
    "animationName": "fadeInUp"
  },
  "fadeInUpBig": {
    "WebkitAnimationName": "fadeInUpBig",
    "animationName": "fadeInUpBig"
  },
  "fadeOut": {
    "WebkitAnimationName": "fadeOut",
    "animationName": "fadeOut"
  },
  "fadeOutDown": {
    "WebkitAnimationName": "fadeOutDown",
    "animationName": "fadeOutDown"
  },
  "fadeOutDownBig": {
    "WebkitAnimationName": "fadeOutDownBig",
    "animationName": "fadeOutDownBig"
  },
  "fadeOutLeft": {
    "WebkitAnimationName": "fadeOutLeft",
    "animationName": "fadeOutLeft"
  },
  "fadeOutLeftBig": {
    "WebkitAnimationName": "fadeOutLeftBig",
    "animationName": "fadeOutLeftBig"
  },
  "fadeOutRight": {
    "WebkitAnimationName": "fadeOutRight",
    "animationName": "fadeOutRight"
  },
  "fadeOutRightBig": {
    "WebkitAnimationName": "fadeOutRightBig",
    "animationName": "fadeOutRightBig"
  },
  "fadeOutUp": {
    "WebkitAnimationName": "fadeOutUp",
    "animationName": "fadeOutUp"
  },
  "fadeOutUpBig": {
    "WebkitAnimationName": "fadeOutUpBig",
    "animationName": "fadeOutUpBig"
  },
  "flipInX": {
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible",
    "WebkitAnimationName": "flipInX",
    "animationName": "flipInX"
  },
  "flipInY": {
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible",
    "WebkitAnimationName": "flipInY",
    "animationName": "flipInY"
  },
  "flipOutX": {
    "WebkitAnimationDuration": 0.75,
    "animationDuration": 0.75,
    "WebkitAnimationName": "flipOutX",
    "animationName": "flipOutX",
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible"
  },
  "flipOutY": {
    "WebkitAnimationDuration": 0.75,
    "animationDuration": 0.75,
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible",
    "WebkitAnimationName": "flipOutY",
    "animationName": "flipOutY"
  },
  "lightSpeedIn": {
    "WebkitAnimationName": "lightSpeedIn",
    "animationName": "lightSpeedIn",
    "WebkitAnimationTimingFunction": "ease-out",
    "animationTimingFunction": "ease-out"
  },
  "lightSpeedOut": {
    "WebkitAnimationName": "lightSpeedOut",
    "animationName": "lightSpeedOut",
    "WebkitAnimationTimingFunction": "ease-in",
    "animationTimingFunction": "ease-in"
  },
  "rotateIn": {
    "WebkitAnimationName": "rotateIn",
    "animationName": "rotateIn"
  },
  "rotateInDownLeft": {
    "WebkitAnimationName": "rotateInDownLeft",
    "animationName": "rotateInDownLeft"
  },
  "rotateInDownRight": {
    "WebkitAnimationName": "rotateInDownRight",
    "animationName": "rotateInDownRight"
  },
  "rotateInUpLeft": {
    "WebkitAnimationName": "rotateInUpLeft",
    "animationName": "rotateInUpLeft"
  },
  "rotateInUpRight": {
    "WebkitAnimationName": "rotateInUpRight",
    "animationName": "rotateInUpRight"
  },
  "rotateOut": {
    "WebkitAnimationName": "rotateOut",
    "animationName": "rotateOut"
  },
  "rotateOutDownLeft": {
    "WebkitAnimationName": "rotateOutDownLeft",
    "animationName": "rotateOutDownLeft"
  },
  "rotateOutDownRight": {
    "WebkitAnimationName": "rotateOutDownRight",
    "animationName": "rotateOutDownRight"
  },
  "rotateOutUpLeft": {
    "WebkitAnimationName": "rotateOutUpLeft",
    "animationName": "rotateOutUpLeft"
  },
  "rotateOutUpRight": {
    "WebkitAnimationName": "rotateOutUpRight",
    "animationName": "rotateOutUpRight"
  },
  "hinge": {
    "WebkitAnimationDuration": 2,
    "animationDuration": 2,
    "WebkitAnimationName": "hinge",
    "animationName": "hinge"
  },
  "jackInTheBox": {
    "WebkitAnimationName": "jackInTheBox",
    "animationName": "jackInTheBox"
  },
  "rollIn": {
    "WebkitAnimationName": "rollIn",
    "animationName": "rollIn"
  },
  "rollOut": {
    "WebkitAnimationName": "rollOut",
    "animationName": "rollOut"
  },
  "zoomIn": {
    "WebkitAnimationName": "zoomIn",
    "animationName": "zoomIn"
  },
  "zoomInDown": {
    "WebkitAnimationName": "zoomInDown",
    "animationName": "zoomInDown"
  },
  "zoomInLeft": {
    "WebkitAnimationName": "zoomInLeft",
    "animationName": "zoomInLeft"
  },
  "zoomInRight": {
    "WebkitAnimationName": "zoomInRight",
    "animationName": "zoomInRight"
  },
  "zoomInUp": {
    "WebkitAnimationName": "zoomInUp",
    "animationName": "zoomInUp"
  },
  "zoomOut": {
    "WebkitAnimationName": "zoomOut",
    "animationName": "zoomOut"
  },
  "zoomOutDown": {
    "WebkitAnimationName": "zoomOutDown",
    "animationName": "zoomOutDown"
  },
  "zoomOutLeft": {
    "WebkitAnimationName": "zoomOutLeft",
    "animationName": "zoomOutLeft"
  },
  "zoomOutRight": {
    "WebkitAnimationName": "zoomOutRight",
    "animationName": "zoomOutRight"
  },
  "zoomOutUp": {
    "WebkitAnimationName": "zoomOutUp",
    "animationName": "zoomOutUp"
  },
  "slideInDown": {
    "WebkitAnimationName": "slideInDown",
    "animationName": "slideInDown"
  },
  "slideInLeft": {
    "WebkitAnimationName": "slideInLeft",
    "animationName": "slideInLeft"
  },
  "slideInRight": {
    "WebkitAnimationName": "slideInRight",
    "animationName": "slideInRight"
  },
  "slideInUp": {
    "WebkitAnimationName": "slideInUp",
    "animationName": "slideInUp"
  },
  "slideOutDown": {
    "WebkitAnimationName": "slideOutDown",
    "animationName": "slideOutDown"
  },
  "slideOutLeft": {
    "WebkitAnimationName": "slideOutLeft",
    "animationName": "slideOutLeft"
  },
  "slideOutRight": {
    "WebkitAnimationName": "slideOutRight",
    "animationName": "slideOutRight"
  },
  "slideOutUp": {
    "WebkitAnimationName": "slideOutUp",
    "animationName": "slideOutUp"
  },
  "animated": {
    "WebkitAnimationDuration": 1,
    "animationDuration": 1,
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both"
  }
}

/***/ }),
/* 9 */
/*!************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/pages/text/text.nvue?mpType=page ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_nvue_vue_type_template_id_45967a2c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.nvue?vue&type=template&id=45967a2c&mpType=page */ 10);
/* harmony import */ var _text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.nvue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 22);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}

}

/* normalize component */

var component = Object(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _text_nvue_vue_type_template_id_45967a2c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _text_nvue_vue_type_template_id_45967a2c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "25c24472"
  
)

injectStyles.call(component)
component.options.__file = "C:/Users/甘正/Desktop/hgb的uni-app/pages/text/text.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/*!******************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/pages/text/text.nvue?vue&type=template&id=45967a2c&mpType=page ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_text_nvue_vue_type_template_id_45967a2c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./text.nvue?vue&type=template&id=45967a2c&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_text_nvue_vue_type_template_id_45967a2c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_text_nvue_vue_type_template_id_45967a2c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 11 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/甘正/Desktop/hgb的uni-app/pages/text/text.nvue?vue&type=template&id=45967a2c&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        [
          _c("tarBar", {
            attrs: { tabBarinfo: _vm.tabBarinfo, tabIndex: _vm.tabIndex },
            on: { changIndex: _vm.handleChange }
          }),
          _c(
            "view",
            { staticClass: ["uni-tab-bar"] },
            [
              _c(
                "swiper",
                {
                  staticClass: ["swiper-box"],
                  style: { height: _vm.swipHeight + "px" },
                  attrs: { current: _vm.tabIndex },
                  on: { change: _vm.changeSwipe }
                },
                _vm._l(_vm.newslist, function(item1, index1) {
                  return _c(
                    "swiper-item",
                    { key: index1, staticClass: ["swiper-item"] },
                    [
                      _c(
                        "scroll-view",
                        {
                          staticClass: ["list"],
                          attrs: { scrollY: "true" },
                          on: {
                            scrolltolower: function($event) {
                              _vm.onReflash(index1)
                            }
                          }
                        },
                        [
                          item1.list.length > 0
                            ? [
                                _vm._l(item1.list, function(item, index) {
                                  return _c(
                                    "block",
                                    { key: index },
                                    [
                                      _c("index-list", {
                                        attrs: {
                                          item: item,
                                          index: index,
                                          index1: index1
                                        },
                                        on: {
                                          onFocus: function($event) {
                                            _vm.onFoucs(index1, index)
                                          },
                                          onChanl: function($event) {
                                            _vm.onChanl(index1, index)
                                          },
                                          dingCai: _vm.dingcai
                                        }
                                      })
                                    ],
                                    1
                                  )
                                }),
                                _c("load-more", {
                                  attrs: { reflashtext: _vm.reflashtext }
                                })
                              ]
                            : [_c("no-thing")]
                        ],
                        2
                      )
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/pages/text/text.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./text.nvue?vue&type=script&lang=js&mpType=page */ 13);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_text_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/甘正/Desktop/hgb的uni-app/pages/text/text.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




































var _indexList = _interopRequireDefault(__webpack_require__(/*! ../../components/index/index-list.vue */ 14));
var _uniTabBar = _interopRequireDefault(__webpack_require__(/*! ../../components/index/uni-tab-bar.vue */ 23));
var _loadMore = _interopRequireDefault(__webpack_require__(/*! ../../components/common/load-more.vue */ 30));
var _noThing = _interopRequireDefault(__webpack_require__(/*! ../../components/common/no-thing.vue */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { indexList: _indexList.default, tarBar: _uniTabBar.default, loadMore: _loadMore.default, noThing: _noThing.default }, data: function data() {return { reflashtext: "上拉加载更多", swipHeight: 800, tabIndex: 0, tabBarinfo: [{ name: "关注", id: "guanzhu" }, { name: "推荐", id: "tuijian" }, { name: "热点", id: "redian" }, { name: "财经", id: "caijing" }, { name: "娱乐", id: "yule" }, { name: "体育", id: "tiyu" }, { name: "军事", id: "junshi" }, { name: "本地", id: "bendi" }], newslist: [{ list: [{ userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 0, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          }, commentnum: 999, repostnum: 999 }, { userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 0, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          }, commentnum: 999, repostnum: 999 }, {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 0, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 },

        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 0, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 },

        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: true, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "video", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          videoinfo: {
            time: "2:47",
            num: "30w" },

          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 1, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 },

        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 2, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 }] },



      {
        list: [

        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: true, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "video", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          videoinfo: {
            time: "2:47",
            num: "30w" },

          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 1, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 },

        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 2, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 }] },



      {
        list: [
        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 0, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 },

        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: true, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "video", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          videoinfo: {
            time: "2:47",
            num: "30w" },

          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 1, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 },

        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 2, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 }] },



      {
        list: [
        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 0, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 },

        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: true, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "video", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          videoinfo: {
            time: "2:47",
            num: "30w" },

          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 1, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 },

        {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 2, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 }] },



      {
        list: [] },

      { list: [] },
      { list: [] },
      { list: [] }] };


  },
  onLoad: function onLoad() {var _this = this;
    uni.getSystemInfo({
      success: function success(res) {
        var height = res.windowHeight - uni.upx2px(100);
        // console.log(height)
        _this.swipHeight = height;
      } });

  },
  methods: {
    //监听原生导航栏按钮点击事件
    onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
      if (e.index == 1) {
        uni.navigateTo({
          url: "../publish/publish" });

      }
    },
    //监听原生标题栏搜索框点击事件
    onNavigationBarSearchInputClicked: function onNavigationBarSearchInputClicked() {
      uni.navigateTo({
        url: '../search/search' });

    },
    handleChange: function handleChange(index) {
      this.tabIndex = index;
    },
    changeSwipe: function changeSwipe(e) {
      this.tabIndex = e.detail.current;
    },
    onReflash: function onReflash(index1) {var _this2 = this;
      if (this.reflashtext !== "上拉加载更多") {return;}
      this.reflashtext = "加载中";
      setTimeout(function () {
        var newxinxi = {
          userpic: "../../static/notepic/1.jpg", //用户头像url
          username: "我又不是uzi", //用户名
          isguanzhu: false, //是否已关注的人，0表示不是，1表示是
          title: "欢迎来到德莱联盟！！！", // 用户发表说说的标题
          type: "img", // 发表的是内容类型，'img'为图片,'text'为文本,'video'为视频
          titlepic: "../../static/notepic/2.jpg", // 发表的图片url
          infobar: { //说说底部信息对象
            isexpress: 0, //是否点赞或者踩,0表示未操作，1表示点赞，2表示踩
            zannum: 10, //点赞数量
            cainum: 10 // 踩的数量
          },
          commentnum: 999,
          repostnum: 999 };

        _this2.newslist[index1].list.push(newxinxi);
        _this2.reflashtext = "上拉加载更多";
      }, 1500);
    },

    // 关注按钮事件
    onFoucs: function onFoucs(index1, index) {
      this.newslist[index1].list[index].isguanzhu = true;
      uni.showToast({
        title: "关注成功!" });

    },
    // 取消关注按钮
    onChanl: function onChanl(index1, index) {var _this3 = this;
      uni.showModal({
        title: '提示',
        content: '确定取消关注？',
        confirmText: "是",
        cancelText: "否",
        success: function success(res) {
          if (res.confirm) {
            _this3.newslist[index1].list[index].isguanzhu = false;
            uni.showToast({
              title: "取消成功!" });

          }
        } });

    },
    dingcai: function dingcai(index1, index, type) {
      switch (type) {
        case 1:
          if (this.newslist[index1].list[index].infobar.isexpress == 1) {return;}
          this.newslist[index1].list[index].infobar.zannum++;
          if (this.newslist[index1].list[index].infobar.isexpress == 2)
          this.newslist[index1].list[index].infobar.cainum--;
          this.newslist[index1].list[index].infobar.isexpress = 1;
          break;
        case 2:
          if (this.newslist[index1].list[index].infobar.isexpress == 2) {return;}
          this.newslist[index1].list[index].infobar.cainum++;
          if (this.newslist[index1].list[index].infobar.isexpress == 1)
          this.newslist[index1].list[index].infobar.zannum--;
          this.newslist[index1].list[index].infobar.isexpress = 2;
          break;}

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 14 */
/*!***********************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/index/index-list.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_list_vue_vue_type_template_id_5123adad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-list.vue?vue&type=template&id=5123adad&scoped=true& */ 15);
/* harmony import */ var _index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-list.vue?vue&type=script&lang=js& */ 17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 22);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./index-list.vue?vue&type=style&index=0&id=5123adad&scoped=true&lang=css& */ 20).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./index-list.vue?vue&type=style&index=0&id=5123adad&scoped=true&lang=css& */ 20).default)
          }

}

/* normalize component */

var component = Object(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_list_vue_vue_type_template_id_5123adad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_list_vue_vue_type_template_id_5123adad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5123adad",
  "820c751c"
  
)

injectStyles.call(component)
component.options.__file = "C:/Users/甘正/Desktop/hgb的uni-app/components/index/index-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/*!******************************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/index/index-list.vue?vue&type=template&id=5123adad&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_template_id_5123adad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./index-list.vue?vue&type=template&id=5123adad&scoped=true& */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_template_id_5123adad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_template_id_5123adad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 16 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/index/index-list.vue?vue&type=template&id=5123adad&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["index-list", "animated", "bounceInLeft"] },
    [
      _c(
        "view",
        { staticClass: ["index-list1", "u-justify-contentb"] },
        [
          _c(
            "view",
            { staticClass: ["u-align-items"] },
            [
              _c("u-image", {
                attrs: {
                  src: _vm.item.userpic,
                  mode: "widthFix",
                  lazyLoad: true
                }
              }),
              _c("u-text", [_vm._v(_vm._s(_vm.item.username) + "\n\t\t")])
            ],
            1
          ),
          !_vm.item.isguanzhu
            ? [
                _c(
                  "view",
                  {
                    staticClass: ["u-align-items"],
                    on: {
                      click: function($event) {
                        _vm.onFocus(_vm.index)
                      }
                    }
                  },
                  [
                    _c("view", {
                      staticClass: ["icon", "iconfont", "iconplus-line"]
                    }),
                    _c("u-text", [_vm._v("关注\n\t\t\t")])
                  ]
                )
              ]
            : [
                _c(
                  "view",
                  {
                    staticClass: ["u-align-items"],
                    staticStyle: { color: "red", fontSize: "20upx" },
                    on: { click: _vm.onChanl }
                  },
                  [_c("u-text", [_vm._v("\n\t\t\t\t取消关注\n\t\t\t")])]
                )
              ]
        ],
        2
      ),
      _c("view", { staticClass: ["index-list2"], on: { click: _vm.Details } }, [
        _c("u-text", [_vm._v("\n\t\t" + _vm._s(_vm.item.title) + "\n\t")])
      ]),
      _c(
        "view",
        { staticClass: ["index-list3", "u-justify-content"] },
        [
          _c("u-image", {
            attrs: { src: _vm.item.titlepic, mode: "widthFix", lazyLoad: true }
          }),
          _vm.item.type == "video"
            ? [
                _c("view", {
                  staticClass: [
                    "index-list3-play",
                    "icon",
                    "iconfont",
                    "iconbofang"
                  ]
                }),
                _c("view", { staticClass: ["index-list3-playnum"] }, [
                  _c("u-text", [
                    _vm._v(
                      _vm._s(_vm.item.videoinfo.num) +
                        "播放量 " +
                        _vm._s(_vm.item.videoinfo.time)
                    )
                  ])
                ])
              ]
            : _vm._e()
        ],
        2
      ),
      _c("view", { staticClass: ["index-list4", "u-justify-contentb"] }, [
        _c("view", { staticClass: ["u-align-items"] }, [
          _c(
            "view",
            {
              staticClass: ["u-align-items"],
              class: { active: _vm.item.infobar.isexpress == 1 },
              on: {
                click: function($event) {
                  _vm.dingcai(1)
                }
              }
            },
            [
              _c("view", { staticClass: ["icon", "iconfont", "iconxiaolian"] }),
              _c("u-text", [
                _vm._v(
                  "\n\t\t\t\t" + _vm._s(_vm.item.infobar.zannum) + "\n\t\t\t"
                )
              ])
            ]
          ),
          _c(
            "view",
            {
              staticClass: ["u-align-items"],
              class: { active: _vm.item.infobar.isexpress == 2 },
              on: {
                click: function($event) {
                  _vm.dingcai(2)
                }
              }
            },
            [
              _c("view", { staticClass: ["icon", "iconfont", "iconkulian"] }),
              _c("u-text", [
                _vm._v(
                  "\n\t\t\t\t" + _vm._s(_vm.item.infobar.cainum) + "\n\t\t\t"
                )
              ])
            ]
          )
        ]),
        _c("view", { staticClass: ["u-align-items"] }, [
          _c("view", { staticClass: ["u-align-items"] }, [
            _c("view", { staticClass: ["icon", "iconfont", "iconpinglun"] }),
            _c("u-text", [
              _vm._v("\n\t\t\t\t" + _vm._s(_vm.item.commentnum) + "\n\t\t\t")
            ])
          ]),
          _c("view", { staticClass: ["u-align-items"] }, [
            _c("view", { staticClass: ["icon", "iconfont", "iconzhuanfa"] }),
            _c("u-text", [
              _vm._v("\n\t\t\t\t" + _vm._s(_vm.item.repostnum) + "\n\t\t\t")
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/index/index-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./index-list.vue?vue&type=script&lang=js& */ 18);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/index/index-list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    item: Object,
    index: Number,
    index1: Number },

  data: function data() {
    return {};

  },
  methods: {
    // 进入详情页
    Details: function Details() {
      console.log(__f__("进入详情页", " at components\\index\\index-list.vue:72"));
    },
    /* 关注按钮方法 */
    onFocus: function onFocus(index1) {
      this.$emit("on-focus");
    },
    // 取消关注按钮方法
    onChanl: function onChanl() {
      this.$emit("on-chanl");
    },
    // 顶和踩事件
    dingcai: function dingcai(type) {
      this.$emit("ding-cai", this.index1, this.index, type);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 19)["default"]))

/***/ }),
/* 19 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);

    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  return msg;
}

/***/ }),
/* 20 */
/*!********************************************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/index/index-list.vue?vue&type=style&index=0&id=5123adad&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_style_index_0_id_5123adad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./index-list.vue?vue&type=style&index=0&id=5123adad&scoped=true&lang=css& */ 21);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_style_index_0_id_5123adad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_style_index_0_id_5123adad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_style_index_0_id_5123adad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_style_index_0_id_5123adad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_index_list_vue_vue_type_style_index_0_id_5123adad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/index/index-list.vue?vue&type=style&index=0&id=5123adad&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "index-list": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "borderBottom": "1rpx solid #EEEEEE"
  },
  "index-list2": {
    "paddingTop": "10rpx"
  },
  "index-list3": {
    "paddingTop": "10rpx",
    "position": "relative"
  },
  "index-list3-play": {
    "position": "absolute",
    "color": "#EEEEEE",
    "fontSize": "90rpx"
  },
  "index-list3-playnum": {
    "background": "rgba(51, 51, 51, 0.82)",
    "color": "#FFFFFF",
    "borderRadius": "15rpx",
    "position": "absolute",
    "bottom": "4rpx",
    "right": "4rpx",
    "fontSize": "11rpx",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx"
  }
}

/***/ }),
/* 22 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 23 */
/*!************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/index/uni-tab-bar.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_tab_bar_vue_vue_type_template_id_e9ca5b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-tab-bar.vue?vue&type=template&id=e9ca5b8c& */ 24);
/* harmony import */ var _uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-tab-bar.vue?vue&type=script&lang=js& */ 26);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 22);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-tab-bar.vue?vue&type=style&index=0&lang=css& */ 28).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./uni-tab-bar.vue?vue&type=style&index=0&lang=css& */ 28).default)
          }

}

/* normalize component */

var component = Object(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_tab_bar_vue_vue_type_template_id_e9ca5b8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_tab_bar_vue_vue_type_template_id_e9ca5b8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "4ff099d6"
  
)

injectStyles.call(component)
component.options.__file = "C:/Users/甘正/Desktop/hgb的uni-app/components/index/uni-tab-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
/*!*******************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/index/uni-tab-bar.vue?vue&type=template&id=e9ca5b8c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_template_id_e9ca5b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-tab-bar.vue?vue&type=template&id=e9ca5b8c& */ 25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_template_id_e9ca5b8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_template_id_e9ca5b8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 25 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/index/uni-tab-bar.vue?vue&type=template&id=e9ca5b8c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-tab-bar"] },
    [
      _c(
        "scroll-view",
        { staticClass: ["uni-swiper-tab"], attrs: { scrollX: "true" } },
        _vm._l(_vm.tabBarinfo, function(item, index) {
          return _c("block", { key: item.id }, [
            _c(
              "view",
              {
                staticClass: ["swiper-tab-list"],
                class: { active: _vm.tabIndex == index },
                on: {
                  click: function($event) {
                    _vm.changeIndex(index)
                  }
                }
              },
              [
                _c("u-text", [
                  _vm._v("\n\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t")
                ]),
                _c("view", { staticClass: ["swiper-tab-line"] })
              ]
            )
          ])
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 26 */
/*!*************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/index/uni-tab-bar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-tab-bar.vue?vue&type=script&lang=js& */ 27);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/index/uni-tab-bar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    tabBarinfo: Array,
    tabIndex: Number },

  methods: {
    changeIndex: function changeIndex(index) {
      this.$emit("changIndex", index);
    } } };exports.default = _default;

/***/ }),
/* 28 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/index/uni-tab-bar.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-tab-bar.vue?vue&type=style&index=0&lang=css& */ 29);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_tab_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/index/uni-tab-bar.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-swiper-tab": {
    "borderBottom": "1rpx solid #EEEEEE"
  },
  "swiper-tab-list": {
    "color": "#969696",
    "fontWeight": "bold"
  }
}

/***/ }),
/* 30 */
/*!***********************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/common/load-more.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_more_vue_vue_type_template_id_59c74962___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-more.vue?vue&type=template&id=59c74962& */ 31);
/* harmony import */ var _load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-more.vue?vue&type=script&lang=js& */ 33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 22);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./load-more.vue?vue&type=style&index=0&lang=css& */ 35).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./load-more.vue?vue&type=style&index=0&lang=css& */ 35).default)
          }

}

/* normalize component */

var component = Object(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _load_more_vue_vue_type_template_id_59c74962___WEBPACK_IMPORTED_MODULE_0__["render"],
  _load_more_vue_vue_type_template_id_59c74962___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "295d369a"
  
)

injectStyles.call(component)
component.options.__file = "C:/Users/甘正/Desktop/hgb的uni-app/components/common/load-more.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/*!******************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/common/load-more.vue?vue&type=template&id=59c74962& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_template_id_59c74962___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./load-more.vue?vue&type=template&id=59c74962& */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_template_id_59c74962___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_template_id_59c74962___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 32 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/common/load-more.vue?vue&type=template&id=59c74962& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["onReflash"] }, [
    _c("u-text", [_vm._v(_vm._s(_vm.reflashtext) + "...")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 33 */
/*!************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/common/load-more.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./load-more.vue?vue&type=script&lang=js& */ 34);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/common/load-more.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
var _default =
{
  props: {
    reflashtext: String },

  data: function data() {
    return {};

  } };exports.default = _default;

/***/ }),
/* 35 */
/*!********************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/common/load-more.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./load-more.vue?vue&type=style&index=0&lang=css& */ 36);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_load_more_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/common/load-more.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "onReflash": {
    "textAlign": "center",
    "paddingTop": "2rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "2rpx",
    "paddingLeft": "10rpx",
    "color": "#AAAAAA"
  }
}

/***/ }),
/* 37 */
/*!**********************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/common/no-thing.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _no_thing_vue_vue_type_template_id_11090582___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-thing.vue?vue&type=template&id=11090582& */ 38);
/* harmony import */ var _no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-thing.vue?vue&type=script&lang=js& */ 40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 22);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./no-thing.vue?vue&type=style&index=0&lang=css& */ 42).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./no-thing.vue?vue&type=style&index=0&lang=css& */ 42).default)
          }

}

/* normalize component */

var component = Object(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _no_thing_vue_vue_type_template_id_11090582___WEBPACK_IMPORTED_MODULE_0__["render"],
  _no_thing_vue_vue_type_template_id_11090582___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "5d5c8c94"
  
)

injectStyles.call(component)
component.options.__file = "C:/Users/甘正/Desktop/hgb的uni-app/components/common/no-thing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */
/*!*****************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/common/no-thing.vue?vue&type=template&id=11090582& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_template_id_11090582___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./no-thing.vue?vue&type=template&id=11090582& */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_template_id_11090582___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_template_id_11090582___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 39 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/common/no-thing.vue?vue&type=template&id=11090582& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["nothing", "u-justify-content"] },
    [
      _c("u-image", {
        attrs: { src: "../../static/common/nothing.png", mode: "widthFix" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 40 */
/*!***********************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/common/no-thing.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./no-thing.vue?vue&type=script&lang=js& */ 41);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/common/no-thing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {};


  } };exports.default = _default;

/***/ }),
/* 42 */
/*!*******************************************************************************************************!*\
  !*** C:/Users/甘正/Desktop/hgb的uni-app/components/common/no-thing.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./no-thing.vue?vue&type=style&index=0&lang=css& */ 43);
/* harmony import */ var _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_H_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_no_thing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/甘正/Desktop/hgb的uni-app/components/common/no-thing.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "nothing": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "left": 0,
    "bottom": 0
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9DOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL21haW4uanM/ZTU2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1zdGF0L2Rpc3QvaW5kZXguanM/OTIxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy91bmktYXBwLXBsdXMtbnZ1ZS12OC9kaXN0L2luZGV4LmpzPzk5MmEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvcGFnZXMuanNvbj84NTkxIiwid2VicGFjazovLy9DOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL3BhZ2VzLmpzb24/MWMzZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9tYWluLmpzPzFkMTEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvQXBwLnZ1ZT85ODA2Iiwid2VicGFjazovLy9DOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL0FwcC52dWU/ZjFkYyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9wYWdlcy90ZXh0L3RleHQubnZ1ZT9lMTgxIiwid2VicGFjazovLy9DOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL3BhZ2VzL3RleHQvdGV4dC5udnVlPzI0NWIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvcGFnZXMvdGV4dC90ZXh0Lm52dWU/MmE3MCIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9wYWdlcy90ZXh0L3RleHQubnZ1ZT9iZTEyIiwidW5pLWFwcDovLy9wYWdlcy90ZXh0L3RleHQubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2luZGV4L2luZGV4LWxpc3QudnVlP2I5YzAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvY29tcG9uZW50cy9pbmRleC9pbmRleC1saXN0LnZ1ZT9jNWJiIiwid2VicGFjazovLy9DOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXgtbGlzdC52dWU/Njg5NiIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2luZGV4L2luZGV4LWxpc3QudnVlP2FjNWEiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvaW5kZXgvaW5kZXgtbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2luZGV4L2luZGV4LWxpc3QudnVlP2RjNzEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvY29tcG9uZW50cy9pbmRleC9pbmRleC1saXN0LnZ1ZT85MGZhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2luZGV4L3VuaS10YWItYmFyLnZ1ZT9jODYyIiwid2VicGFjazovLy9DOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL2NvbXBvbmVudHMvaW5kZXgvdW5pLXRhYi1iYXIudnVlP2FhMmMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvY29tcG9uZW50cy9pbmRleC91bmktdGFiLWJhci52dWU/YzRiOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2luZGV4L3VuaS10YWItYmFyLnZ1ZT8wZjBkIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2luZGV4L3VuaS10YWItYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2luZGV4L3VuaS10YWItYmFyLnZ1ZT8wZDAzIiwid2VicGFjazovLy9DOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL2NvbXBvbmVudHMvaW5kZXgvdW5pLXRhYi1iYXIudnVlPzQ0MzYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvY29tcG9uZW50cy9jb21tb24vbG9hZC1tb3JlLnZ1ZT9jN2Y1Iiwid2VicGFjazovLy9DOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL2NvbXBvbmVudHMvY29tbW9uL2xvYWQtbW9yZS52dWU/YTA0YSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2NvbW1vbi9sb2FkLW1vcmUudnVlPzA2MWEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvY29tcG9uZW50cy9jb21tb24vbG9hZC1tb3JlLnZ1ZT83ODM4IiwidW5pLWFwcDovLy9jb21wb25lbnRzL2NvbW1vbi9sb2FkLW1vcmUudnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL2NvbXBvbmVudHMvY29tbW9uL2xvYWQtbW9yZS52dWU/N2ZiMCIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2NvbW1vbi9sb2FkLW1vcmUudnVlP2ZiYWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvY29tcG9uZW50cy9jb21tb24vbm8tdGhpbmcudnVlPzc3OWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvY29tcG9uZW50cy9jb21tb24vbm8tdGhpbmcudnVlP2U0NWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvY29tcG9uZW50cy9jb21tb24vbm8tdGhpbmcudnVlP2I4NzAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+eUmOatoy9EZXNrdG9wL2hnYueahHVuaS1hcHAvY29tcG9uZW50cy9jb21tb24vbm8tdGhpbmcudnVlPzhhNzIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvY29tbW9uL25vLXRoaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2NvbW1vbi9uby10aGluZy52dWU/M2U0OCIsIndlYnBhY2s6Ly8vQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2NvbW1vbi9uby10aGluZy52dWU/ODU2MiJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInR5cGUiLCJyZXNpZGVuY2VUaW1lIiwib3ZlcnRpbWUiLCJnZXRSb3V0ZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsIl9zZWxmIiwiJHZtIiwiJG1wIiwiaXMiLCIkc2NvcGUiLCJyb3V0ZSIsImdldFBhZ2VSb3V0ZSIsInNlbGYiLCJxdWVyeSIsIl9xdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCIkb3B0aW9ucyIsImNhbGlicmF0aW9uIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImVycm9yIiwiUGFnZXNKc29uIiwicmVxdWlyZSIsImRlZmF1bHQiLCJzdGF0Q29uZmlnIiwicmVzdWx0T3B0aW9ucyIsImdldFN5c3RlbUluZm9TeW5jIiwiVXRpbCIsIl9yZXRyeSIsIl9wbGF0Zm9ybSIsIl9uYXZpZ2F0aW9uQmFyVGl0bGUiLCJjb25maWciLCJyZXBvcnQiLCJsdCIsIl9vcGVyYXRpbmdUaW1lIiwiX3JlcG9ydGluZ1JlcXVlc3REYXRhIiwiX19wcmV2ZW50X3RyaWdnZXJpbmciLCJfX2xpY2F0aW9uSGlkZSIsIl9fbGljYXRpb25TaG93IiwiX2xhc3RQYWdlUm91dGUiLCJ1dCIsIm1wbiIsImFrIiwiYXBwaWQiLCJ1c3YiLCJ2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJwYXRoIiwic2MiLCJfc2VuZFJlcG9ydFJlcXVlc3QiLCJfc2VuZEhpZGVSZXF1ZXN0IiwidXJscmVmIiwidXJscmVmX3RzIiwicm91dGVwYXRoIiwidGl0bGVOVmlldyIsInRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJfc2VuZFBhZ2VSZXF1ZXN0IiwidXJsIiwiX3NlbmRFdmVudFJlcXVlc3QiLCJrZXkiLCJmdnRzIiwibHZ0cyIsInR2YyIsImdldFByb3BlcnR5IiwiZ2V0TmV0d29ya0luZm8iLCJvcHQiLCJyZXF1ZXN0IiwidmFsdWUiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInB1c2giLCJ1bmlTdGF0RGF0YSIsImZpcnN0QXJyIiwiY29udGVudEFyciIsImxhc3RBcnIiLCJyZCIsImZvckVhY2giLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJtZXRob2QiLCJmYWlsIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiYXJncyIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJjYWxsIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm9uRXJyb3IiLCJtYWluIiwiaW5pdFVuaSIsImlzRm4iLCJoYW5kbGVQcm9taXNlIiwicHJvbWlzZSIsInRoZW4iLCJjYXRjaCIsImVyciIsIlJFR0VYIiwiQVBJX05PUk1BTF9MSVNUIiwic2hvdWxkUHJvbWlzZSIsIm5hbWUiLCJ0ZXN0IiwiaW5kZXhPZiIsInByb21pc2lmeSIsImFwaSIsIl9sZW4iLCJhcmd1bWVudHMiLCJwYXJhbXMiLCJBcnJheSIsIl9rZXkiLCJ1bmRlZmluZWQiLCJhcHBseSIsImNvbmNhdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiY29uc3RydWN0b3IiLCJyZWFzb24iLCJvbk1lc3NhZ2VDYWxsYmFja3MiLCJvcmlnaW4iLCJvblN1Yk5WdWVNZXNzYWdlIiwid2Vidmlld0lkIiwid2VleFBsdXMiLCJ3ZWJ2aWV3IiwiY3VycmVudFdlYnZpZXciLCJpZCIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJldmVudCIsInRvIiwid3JhcHBlciIsIiRwcm9jZXNzZWQiLCJjdXJyZW50V2Vidmlld0lkIiwiaXNQb3B1cE5WdWUiLCJob3N0TlZ1ZUlkIiwiX191bmlhcHBfb3JpZ2luX3R5cGUiLCJfX3VuaWFwcF9vcmlnaW5faWQiLCJwb3B1cE5WdWVJZCIsInBvc3RNZXNzYWdlIiwib25NZXNzYWdlIiwiX191bmlhcHBfbWFza19pZCIsIl9fdW5pYXBwX2hvc3QiLCJtYXNrQ29sb3IiLCJfX3VuaWFwcF9tYXNrIiwibWFza1dlYnZpZXciLCJnZXRXZWJ2aWV3QnlJZCIsInBhcmVudCIsIm9sZFNob3ciLCJvbGRIaWRlIiwib2xkQ2xvc2UiLCJjbG9zZSIsInNob3dNYXNrIiwic2V0U3R5bGUiLCJtYXNrIiwiY2xvc2VNYXNrIiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJnZXRTdWJOVnVlQnlJZCIsImdldEN1cnJlbnRTdWJOVnVlIiwid2VleCIsInJlcXVpcmVNb2R1bGUiLCJnbG9iYWxFdmVudCIsImNhbGxiYWNrcyIsIlVOSUFQUF9TRVJWSUNFX05WVUVfSUQiLCJhZGRFdmVudExpc3RlbmVyIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayIsImNyZWF0ZUNhbGxiYWNrIiwicmVzIiwiZXJyTXNnIiwia2VlcEFsaXZlIiwiY2FsbGJhY2tJZCIsInB1Ymxpc2giLCJfcmVmIiwiY3JlYXRlUHVibGlzaCIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsInBsdWdpbk5hbWUiLCJkb20iLCJsb2FkRm9udEZhY2UiLCJmYW1pbHkiLCJzb3VyY2UiLCJkZXNjIiwiYWRkUnVsZSIsImZvbnRGYW1pbHkiLCJzdGF0dXMiLCJnbG9iYWxFdmVudCQxIiwiY2FsbGJhY2tzJDEiLCJpc1VuaUFwcFJlYWR5IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwic3RyZWFtIiwiTUVUSE9EX0dFVCIsIk1FVEhPRF9QT1NUIiwiQ09OVEVOVF9UWVBFX0pTT04iLCJDT05URU5UX1RZUEVfRk9STSIsInNlcmlhbGl6ZSIsImNvbnRlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImpvaW4iLCJoZWFkZXIiLCJfcmVmJG1ldGhvZCIsIl9yZWYkZGF0YVR5cGUiLCJkYXRhVHlwZSIsInJlc3BvbnNlVHlwZSIsImFib3J0ZWQiLCJoYXNDb250ZW50VHlwZSIsImhlYWRlcnMiLCJmZXRjaCIsImJvZHkiLCJfcmVmMiIsIm9rIiwic3RhdHVzVGV4dCIsInJldCIsInN0YXR1c0NvZGUiLCJhYm9ydCIsInN0b3JhZ2UiLCJVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUiLCJnZXRTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwic2V0U3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVTdG9yYWdlIiwiX3JlZjMiLCJyZW1vdmVJdGVtIiwiY2xlYXJTdG9yYWdlIiwiX3JlZjQiLCJjbGlwYm9hcmQiLCJnZXRDbGlwYm9hcmREYXRhIiwiZ2V0U3RyaW5nIiwic2V0Q2xpcGJvYXJkRGF0YSIsInNldFN0cmluZyIsImdldEVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiRW1pdHRlciIsIiRvbiIsIndhcm4iLCIkb2ZmIiwiJG9uY2UiLCIkZW1pdCIsImN0eCIsInNsaWNlIiwiZnJlZXplIiwid3giLCJ1cGxvYWRGaWxlIiwiZG93bmxvYWRGaWxlIiwiY2hvb3NlSW1hZ2UiLCJwcmV2aWV3SW1hZ2UiLCJnZXRJbWFnZUluZm8iLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiY2hvb3NlVmlkZW8iLCJzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtIiwic2F2ZUZpbGUiLCJnZXRTYXZlZEZpbGVMaXN0IiwiZ2V0U2F2ZWRGaWxlSW5mbyIsInJlbW92ZVNhdmVkRmlsZSIsIm9wZW5Eb2N1bWVudCIsImdldFN0b3JhZ2VJbmZvIiwiY2hvb3NlTG9jYXRpb24iLCJvcGVuTG9jYXRpb24iLCJnZXRTeXN0ZW1JbmZvIiwibWFrZVBob25lQ2FsbCIsInNjYW5Db2RlIiwic2V0U2NyZWVuQnJpZ2h0bmVzcyIsImdldFNjcmVlbkJyaWdodG5lc3MiLCJzZXRLZWVwU2NyZWVuT24iLCJ2aWJyYXRlTG9uZyIsInZpYnJhdGVTaG9ydCIsImFkZFBob25lQ29udGFjdCIsInNob3dUb2FzdCIsInNob3dMb2FkaW5nIiwiaGlkZVRvYXN0IiwiaGlkZUxvYWRpbmciLCJzaG93TW9kYWwiLCJzaG93QWN0aW9uU2hlZXQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJzZXROYXZpZ2F0aW9uQmFyQ29sb3IiLCJuYXZpZ2F0ZVRvIiwicmVkaXJlY3RUbyIsInJlTGF1bmNoIiwic3dpdGNoVGFiIiwibmF2aWdhdGVCYWNrIiwiZ2V0UHJvdmlkZXIiLCJsb2dpbiIsImdldFVzZXJJbmZvIiwic2hhcmUiLCJyZXF1ZXN0UGF5bWVudCIsInN1YnNjcmliZVB1c2giLCJ1bnN1YnNjcmliZVB1c2giLCJvblB1c2giLCJvZmZQdXNoIiwiYmFzZVVuaSIsIm9zIiwibnZ1ZSIsIlByb3h5IiwiZ2V0IiwidGFyZ2V0IiwiY3JlYXRlVW5pIiwiZ2V0VW5pIiwiV2VleFBsdXMiLCJ0eXBvZiIsInMiLCJzdWJzdHJpbmciLCJmb3JtYXRMb2ciLCJtc2dzIiwidlR5cGUiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwicG9wIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVB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QUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy90ZXh0L3RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy90ZXh0L3RleHQubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdGV4dC90ZXh0J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IFNUQVRfVkVSU0lPTiA9IHZlcnNpb247XHJcbmNvbnN0IFNUQVRfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdCc7XHJcbmNvbnN0IFNUQVRfSDVfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdC5naWYnOyBcclxuY29uc3QgUEFHRV9QVkVSX1RJTUUgPSAxODAwO1xyXG5jb25zdCBBUFBfUFZFUl9USU1FID0gMzAwO1xyXG5jb25zdCBPUEVSQVRJTkdfVElNRSA9IDEwO1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5jb25zdCBVVUlEX1ZBTFVFID0gJ19fRENfVVVJRF9WQUxVRSc7XHJcblxyXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xyXG4gIGxldCB1dWlkID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHV1aWQgPSBwbHVzLnJ1bnRpbWUuZ2V0RENsb3VkSWQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdXVpZCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV1aWRcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICB1dWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB1dWlkID0gVVVJRF9WQUxVRTtcclxuICB9XHJcblxyXG4gIGlmICghdXVpZCkge1xyXG4gICAgdXVpZCA9IERhdGUubm93KCkgKyAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIHV1aWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIFVVSURfVkFMVUUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdXVpZDtcclxufVxyXG5cclxuY29uc3QgZ2V0U2dpbiA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBhcnIgPSBPYmplY3Qua2V5cyhzdGF0RGF0YSk7XHJcbiAgbGV0IHNvcnRBcnIgPSBhcnIuc29ydCgpO1xyXG4gIGxldCBzZ2luID0ge307XHJcbiAgbGV0IHNnaW5TdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIHNvcnRBcnIpIHtcclxuICAgIHNnaW5bc29ydEFycltpXV0gPSBzdGF0RGF0YVtzb3J0QXJyW2ldXTtcclxuICAgIHNnaW5TdHIgKz0gc29ydEFycltpXSArICc9JyArIHN0YXREYXRhW3NvcnRBcnJbaV1dICsgJyYnO1xyXG4gIH1cclxuICAvLyBjb25zdCBvcHRpb25zID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIC8vIHNnaW5TdHIgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpICsgJyZrZXk9JyArIFNUQVRfS0VZO1xyXG4gIC8vIGNvbnN0IHNpID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzZ2luU3RyKS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzaWduOiAnJyxcclxuICAgIG9wdGlvbnM6IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3BsaWNpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBzdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcclxuICAgIHN0ciArPSBpICsgJz0nICsgZGF0YVtpXSArICcmJztcclxuICB9XHJcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpXHJcbn07XHJcblxyXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhdGZvcm1OYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTGlzdCA9IHtcclxuICAgICdhcHAtcGx1cyc6ICduJyxcclxuICAgICdoNSc6ICdoNScsXHJcbiAgICAnbXAtd2VpeGluJzogJ3d4JyxcclxuICAgICdtcC1hbGlwYXknOiAnYWxpJyxcclxuICAgICdtcC1iYWlkdSc6ICdiZCcsXHJcbiAgICAnbXAtdG91dGlhbyc6ICd0dCcsXHJcbiAgICAnbXAtcXEnOiAncXEnXHJcbiAgfTtcclxuICByZXR1cm4gcGxhdGZvcm1MaXN0W3Byb2Nlc3MuZW52LlZVRV9BUFBfUExBVEZPUk1dO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFja05hbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHBhY2tOYW1lID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnd3gnIHx8IGdldFBsYXRmb3JtTmFtZSgpID09PSAncXEnKSB7XHJcbiAgICAvLyDlhbzlrrnlvq7kv6HlsI/nqIvluo/kvY7niYjmnKzln7rnoYDlupNcclxuICAgIGlmKHVuaS5jYW5JVXNlKCdnZXRBY2NvdW50SW5mb1N5bmMnKSl7XHJcbiAgICAgIHBhY2tOYW1lID0gdW5pLmdldEFjY291bnRJbmZvU3luYygpLm1pbmlQcm9ncmFtLmFwcElkIHx8ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFja05hbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgPyBwbHVzLnJ1bnRpbWUudmVyc2lvbiA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgY2hhbm5lbCA9ICcnO1xyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICduJykge1xyXG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xyXG4gIH1cclxuICByZXR1cm4gY2hhbm5lbDtcclxufTtcclxuXHJcbmNvbnN0IGdldFNjZW5lID0gKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgc2NlbmUgPSAnJztcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICd3eCcpIHtcclxuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XHJcbiAgfVxyXG4gIHJldHVybiBzY2VuZTtcclxufTtcclxuY29uc3QgRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnRmlyc3RfX1Zpc2l0X19UaW1lJztcclxuY29uc3QgTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdMYXN0X19WaXNpdF9fVGltZSc7XHJcblxyXG5jb25zdCBnZXRGaXJzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZLCB0aW1lKTtcclxuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICB9XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMYXN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9ICcnO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSwgZ2V0VGltZSgpKTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcclxubGV0IEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5sZXQgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxuXHJcblxyXG5jb25zdCBzZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSwgZ2V0VGltZSgpKTtcclxuICB9XHJcbiAgcmV0dXJuIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FKTtcclxuICB9XHJcbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuY29uc3QgVE9UQUxfX1ZJU0lUX19DT1VOVCA9ICdUb3RhbF9fVmlzaXRfX0NvdW50JztcclxuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCk7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgY291bnQgPSB0aW1lU3RvcmdlO1xyXG4gICAgY291bnQrKztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQsIGNvdW50KTtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5jb25zdCBHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBmb3IgKGxldCBwcm9wIGluIHN0YXREYXRhKSB7XHJcbiAgICBkYXRhW3Byb3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0YXREYXRhW3Byb3BdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5sZXQgU2V0X19GaXJzdF9fVGltZSA9IDA7XHJcbmxldCBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gMDtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IHRpbWU7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0UmVzaWRlbmNlVGltZSA9ICh0eXBlKSA9PiB7XHJcbiAgbGV0IHJlc2lkZW5jZVRpbWUgPSAwO1xyXG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XHJcbiAgICByZXNpZGVuY2VUaW1lID0gU2V0X19MYXN0X19UaW1lIC0gU2V0X19GaXJzdF9fVGltZTtcclxuICB9XHJcblxyXG4gIHJlc2lkZW5jZVRpbWUgPSBwYXJzZUludChyZXNpZGVuY2VUaW1lIC8gMTAwMCk7XHJcbiAgcmVzaWRlbmNlVGltZSA9IHJlc2lkZW5jZVRpbWUgPCAxID8gMSA6IHJlc2lkZW5jZVRpbWU7XHJcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gQVBQX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gUEFHRV9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXNpZGVuY2VUaW1lXHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG5cclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSkgfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG4gIGxldCBxdWVyeSA9IHNlbGYuX3F1ZXJ5O1xyXG4gIGxldCBzdHIgPSBxdWVyeSAmJiBKU09OLnN0cmluZ2lmeShxdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShxdWVyeSkgOiAnJztcclxuICAvLyBjbGVhclxyXG4gIHNlbGYuX3F1ZXJ5ID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUgKyBzdHIgKXx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUgKyBzdHIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XHJcbiAgaWYgKHNlbGYubXBUeXBlID09PSAncGFnZScgfHwgKHNlbGYuJG1wICYmIHNlbGYuJG1wLm1wVHlwZSA9PT0gJ3BhZ2UnKSB8fCBzZWxmLiRvcHRpb25zLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FsaWJyYXRpb24gPSAoZXZlbnROYW1lLCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gIGxvZ2luIOOAgSBzaGFyZSDjgIFwYXlfc3VjY2VzcyDjgIFwYXlfZmFpbCDjgIFyZWdpc3RlciDjgIF0aXRsZVxyXG4gIGlmKCFldmVudE5hbWUpe1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCDnvLrlsJEgW2V2ZW50TmFtZV0g5Y+C5pWwYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAoZXZlbnROYW1lLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOaIliBPYmplY3Qg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChldmVudE5hbWUgPT09ICd0aXRsZScgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUGFnZXNKc29uID0gcmVxdWlyZSgndW5pLXBhZ2VzP3tcInR5cGVcIjpcInN0eWxlXCJ9JykuZGVmYXVsdDtcclxuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XHJcblxyXG5jb25zdCByZXN1bHRPcHRpb25zID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5jbGFzcyBVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VsZiA9ICcnO1xyXG4gICAgdGhpcy5fcmV0cnkgPSAwO1xyXG4gICAgdGhpcy5fcGxhdGZvcm0gPSAnJztcclxuICAgIHRoaXMuX3F1ZXJ5ID0ge307XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICBsdDogJydcclxuICAgIH07XHJcbiAgICB0aGlzLl9vcGVyYXRpbmdUaW1lID0gMDtcclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge1xyXG4gICAgICAnMSc6IFtdLFxyXG4gICAgICAnMTEnOiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhID0ge1xyXG4gICAgICB1dWlkOiBnZXRVdWlkKCksXHJcbiAgICAgIHV0OiBnZXRQbGF0Zm9ybU5hbWUoKSxcclxuICAgICAgbXBuOiBnZXRQYWNrTmFtZSgpLFxyXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sXHJcbiAgICAgIHY6IGdldFZlcnNpb24oKSxcclxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcclxuICAgICAgY246ICcnLFxyXG4gICAgICBwbjogJycsXHJcbiAgICAgIGN0OiAnJyxcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICB0dDogJycsXHJcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcclxuICAgICAgYnJhbmQ6IHJlc3VsdE9wdGlvbnMuYnJhbmQgfHwgJycsXHJcbiAgICAgIG1kOiByZXN1bHRPcHRpb25zLm1vZGVsLFxyXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcclxuICAgICAgbXBzZGs6IHJlc3VsdE9wdGlvbnMuU0RLVmVyc2lvbiB8fCAnJyxcclxuICAgICAgbXB2OiByZXN1bHRPcHRpb25zLnZlcnNpb24gfHwgJycsXHJcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXHJcbiAgICAgIHByOiByZXN1bHRPcHRpb25zLnBpeGVsUmF0aW8sXHJcbiAgICAgIHd3OiByZXN1bHRPcHRpb25zLndpbmRvd1dpZHRoLFxyXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXHJcbiAgICAgIHN3OiByZXN1bHRPcHRpb25zLnNjcmVlbldpZHRoLFxyXG4gICAgICBzaDogcmVzdWx0T3B0aW9ucy5zY3JlZW5IZWlnaHRcclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uU2hvdygpIHtcclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdhcHAnKTtcclxuICAgICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0eXBlKSB7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICB0aGlzLl9zZW5kSGlkZVJlcXVlc3Qoe1xyXG4gICAgICB1cmxyZWY6IHJvdXRlLFxyXG4gICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgfSwgdHlwZSk7XHJcbiAgfVxyXG5cclxuICBfcGFnZVNob3coKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIGNvbnN0IHJvdXRlcGF0aCA9IGdldFJvdXRlKCk7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUuY29uZmlnID0gUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcgJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldy50aXRsZVRleHQgfHxcclxuICAgICAgUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLm5hdmlnYXRpb25CYXJUaXRsZVRleHQgfHwgJyc7XHJcblxyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvblNob3cpIHtcclxuICAgICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+i/meaYryBvbkxhdWNoIOS5i+WQjuaJp+ihjOeahOesrOS4gOasoSBwYWdlU2hvdyDvvIzkuLrkuIvmrKHorrDlvZXml7bpl7TlgZrlh4blpIcnKTtcclxuICAgICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBfcGFnZUhpZGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgICAgdGhpcy5fc2VuZFBhZ2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgICBwYWdlOiAnJyxcclxuICAgICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICAgIGx0OiAnJ1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9naW4oKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnbG9naW4nXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIF9zaGFyZSgpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdzaGFyZSdcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfcGF5bWVudChrZXkpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXlcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxJztcclxuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdCA9ICcxJztcclxuICAgIHRoaXMuc3RhdERhdGEudXJsID0gKG9wdGlvbnMucGF0aCArIHF1ZXJ5KSB8fCAnJztcclxuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEuc2MgPSBnZXRTY2VuZShvcHRpb25zLnNjZW5lKTtcclxuICAgIHRoaXMuc3RhdERhdGEuZnZ0cyA9IGdldEZpcnN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnR2YyA9IGdldFRvdGFsVmlzaXRDb3VudCgpO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMTEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsLFxyXG4gICAgICB0dDogdGhpcy5zdGF0RGF0YS50dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCB0eXBlKTtcclxuICB9XHJcbiAgX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAga2V5ID0gJycsXHJcbiAgICB2YWx1ZSA9IFwiXCJcclxuICB9ID0ge30pIHtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fbGFzdFBhZ2VSb3V0ZTtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzIxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybDogcm91dGUsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBlX246IGtleSxcclxuICAgICAgZV92OiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLnRvU3RyaW5nKCksXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV0d29ya0luZm8oKSB7XHJcbiAgICB1bmkuZ2V0TmV0d29ya1R5cGUoe1xyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0RGF0YS5uZXQgPSByZXN1bHQubmV0d29ya1R5cGU7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KCkge1xyXG4gICAgcGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldExvY2F0aW9uKCkge1xyXG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcclxuICAgICAgdW5pLmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLnBuID0gcmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY3QgPSByZXN1bHQuYWRkcmVzcy5jaXR5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IDA7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcclxuICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChkYXRhLCB0eXBlKSB7XHJcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlO1xyXG4gICAgZGF0YS50dG4gPSB0aXRsZS5wYWdlO1xyXG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xyXG4gICAgZGF0YS50dGMgPSB0aXRsZS5yZXBvcnQ7XHJcblxyXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICByZXF1ZXN0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGlmICghcmVxdWVzdERhdGFbZGF0YS5sdF0pIHtcclxuICAgICAgcmVxdWVzdERhdGFbZGF0YS5sdF0gPSBbXTtcclxuICAgIH1cclxuICAgIHJlcXVlc3REYXRhW2RhdGEubHRdLnB1c2goZGF0YSk7XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScsIHJlcXVlc3REYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaVN0YXREYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG4gICAgLy8g5pe26Ze06LaF6L+H77yM6YeN5paw6I635Y+W5pe26Ze05oizXHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgbGV0IGZpcnN0QXJyID0gW107XHJcbiAgICBsZXQgY29udGVudEFyciA9IFtdO1xyXG4gICAgbGV0IGxhc3RBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHVuaVN0YXREYXRhKSB7XHJcbiAgICAgIGNvbnN0IHJkID0gdW5pU3RhdERhdGFbaV07XHJcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBnZXRTcGxpY2luZyhlbG0pO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xyXG4gICAgICAgICAgbGFzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xyXG4gICAgbGV0IG9wdGlvbnNEYXRhID0ge1xyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTiwgLy/nu5/orqEgU0RLIOeJiOacrOWPt1xyXG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxyXG4gICAgICByZXF1ZXN0czogSlNPTi5zdHJpbmdpZnkoZmlyc3RBcnIpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHt9O1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgJiYgdGhpcy5zdGF0RGF0YS5wID09PSAnYScpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICB9XHJcbiAgX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKSB7XHJcbiAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogU1RBVF9VUkwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAvLyBoZWFkZXI6IHtcclxuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBkYXRhOiBvcHRpb25zRGF0YSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3N0YXQgcmVxdWVzdCBzdWNjZXNzJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGg1IOivt+axglxyXG4gICAqL1xyXG4gIGltYWdlUmVxdWVzdChkYXRhKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCBvcHRpb25zID0gZ2V0U2dpbihHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zKGRhdGEpKS5vcHRpb25zO1xyXG4gICAgaW1hZ2Uuc3JjID0gU1RBVF9INV9VUkwgKyAnPycgKyBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2VuZEV2ZW50KGtleSwgdmFsdWUpIHtcclxuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxyXG4gICAgaWYgKGNhbGlicmF0aW9uKGtleSwgdmFsdWUpKSByZXR1cm5cclxuXHJcbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5yZXBvcnQgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5LFxyXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vIOazqOWGjOaLpuaIquWZqFxyXG4gICAgaWYgKHR5cGVvZiB1bmkuYWRkSW50ZXJjZXB0b3IgPT09ICdmdW5jdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRMb2dpbigpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFNoYXJlKHRydWUpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRJbnRlcmNlcHRvckluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcclxuICAgICAgaW52b2tlKGFyZ3MpIHtcclxuICAgICAgICBzZWxmLl9uYXZpZ2F0aW9uQmFyVGl0bGUucGFnZSA9IGFyZ3MudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0TG9naW4oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBzZWxmLl9sb2dpbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFNoYXJlKHR5cGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2hhcmUnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFJlcXVlc3RQYXltZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdyZXF1ZXN0UGF5bWVudCcsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVwb3J0KG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ3JlcG9ydCBpbml0Jyk7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xyXG4gICAgaWYgKCFzZWxmLiRzY29wZSAmJiAhc2VsZi4kbXApIHtcclxuICAgICAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzaG93KHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25TaG93KHNlbGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZHkoc2VsZikge1xyXG4gICAgLy8gdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGhpZGUoc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVycm9yKGVtKSB7XHJcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCflvZPliY3ov5DooYznjq/looPkuLrlvIDlj5HogIXlt6XlhbfvvIzkuI3kuIrmiqXmlbDmja7jgIInKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZW1WYWwgPSAnJztcclxuICAgIGlmICghZW0ubWVzc2FnZSkge1xyXG4gICAgICBlbVZhbCA9IEpTT04uc3RyaW5naWZ5KGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtVmFsID0gZW0uc3RhY2s7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXHJcbiAgICAgIG1wdjogdGhpcy5zdGF0RGF0YS5tcHYsXHJcbiAgICAgIHY6IHRoaXMuc3RhdERhdGEudixcclxuICAgICAgZW06IGVtVmFsLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XHJcbmxldCBpc0hpZGUgPSBmYWxzZTtcclxuY29uc3QgbGlmZWN5Y2xlID0ge1xyXG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcclxuICAgIHN0YXQucmVwb3J0KG9wdGlvbnMsIHRoaXMpO1xyXG4gIH0sXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHN0YXQucmVhZHkodGhpcyk7XHJcbiAgfSxcclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgc3RhdC5sb2FkKG9wdGlvbnMsIHRoaXMpO1xyXG4gICAgLy8g6YeN5YaZ5YiG5Lqr77yM6I635Y+W5YiG5Lqr5LiK5oql5LqL5Lu2XHJcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG9sZFNoYXJlQXBwTWVzc2FnZSA9IHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlO1xyXG4gICAgICB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gb2xkU2hhcmVBcHBNZXNzYWdlLmNhbGwodGhpcywgb3B0aW9ucylcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2hvdygpIHtcclxuICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgc3RhdC5zaG93KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25IaWRlKCkge1xyXG4gICAgaXNIaWRlID0gdHJ1ZTtcclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgaWYgKGlzSGlkZSkge1xyXG4gICAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvbkVycm9yKGUpIHtcclxuICAgIHN0YXQuZXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnN0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xyXG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7XHJcbiAgICAgIHN0YXQuc2VuZEV2ZW50KHR5cGUsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbm1haW4oKTtcclxuIiwiZnVuY3Rpb24gaW5pdFVuaSgpIHtcclxuXHJcbiAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uIGlzRm4odikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbmRsZVByb21pc2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUkVHRVggPSAvXlxcJHxeb258XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxecGF1c2UvO1xyXG4gICAgdmFyIEFQSV9OT1JNQUxfTElTVCA9IFsnb3MnLCAnZ2V0Q3VycmVudFN1Yk5WdWUnLCAnZ2V0U3ViTlZ1ZUJ5SWQnLCAnc3RvcFJlY29yZCcsICdzdG9wVm9pY2UnLFxyXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXHJcbiAgICAgICAgJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnY2FuSVVzZScsICduYXZpZ2F0ZUJhY2snLCAnY2xvc2VTb2NrZXQnLFxyXG4gICAgICAgICdwYWdlU2Nyb2xsVG8nLCAnZHJhd0NhbnZhcydcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHNob3VsZFByb21pc2UgPSBmdW5jdGlvbiBzaG91bGRQcm9taXNlKG5hbWUpIHtcclxuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgdmFyIG9yaWdpbiA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Yk5WdWVNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3ZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XHJcbiAgICBjaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudG8gPT09IHdlYnZpZXdJZCkge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwcGVyKHdlYnZpZXcpIHtcclxuICAgICAgICB3ZWJ2aWV3LiRwcm9jZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuICAgICAgICB2YXIgaXNQb3B1cE5WdWUgPSBjdXJyZW50V2Vidmlld0lkID09PSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5WdWVJZCA9IHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX3R5cGUgPT09ICd1bmlOVmlldycgJiYgd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5faWQ7XHJcbiAgICAgICAgdmFyIHBvcHVwTlZ1ZUlkID0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGhvc3ROVnVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGlzUG9wdXBOVnVlID8gaG9zdE5WdWVJZCA6IHBvcHVwTlZ1ZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcub25NZXNzYWdlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xyXG5cclxuICAgICAgICB2YXIgbWFza0NvbG9yID0gd2Vidmlldy5fX3VuaWFwcF9tYXNrO1xyXG5cclxuICAgICAgICB2YXIgbWFza1dlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKHdlYnZpZXcuX191bmlhcHBfbWFza19pZCk7XHJcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fMDQzMjkxMVwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIkBGT05ULUZBQ0VcIjogW1xuICAgIHtcbiAgICAgIFwiZm9udEZhbWlseVwiOiBcInVuaWljb25zXCIsXG4gICAgICBcImZvbnRXZWlnaHRcIjogXCJub3JtYWxcIixcbiAgICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgICBcInNyY1wiOiBcInVybCgnLi9zdGF0aWMvdW5pLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgICAgXCJzcmNcIjogXCJ1cmwoJ2RhdGE6YXBwbGljYXRpb24veC1mb250LXdvZmYyO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdNZ0FCQUFBQUFBL3NBQXNBQUFBQUd2d0FBQStlQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIRUlHVmdDR0FBcWtJSnhrQVRZQ0pBTllDeTRBQkNBRmhHMEhnZzBiUnhham9sNlFWakRaUHhOak1KYjJXRWhvMnlxWDJ5Z1U0TGg0UnhQT1lyRWlwZGlFYjk3dmgxTENVNjE5dnA3dTVkazlJSlMvenJJR0ZBWTRMTXl4dmNpVVQvbG9RT0VTR1ZZSWZvZm50L2wvTGhkUkxrTGJmTDFHMFNLYnJCQWJPeEVrRFdDVXVNU1YrbktSNFNLTldrUTg0MVdzMmkvejV2U1ZrcUdVZkRRa0hkQUh4dVBlTTVRb3paQnpzYmViZktWQXl6YTMvY0FrMnpzQ3BUbkErWDFycnhiWnhUSUlseGNyZHU5Q3N6c2ZObnovd25RQmdDb0NWMkdyS2tOQWtsUnM0K3B0cGFrczZKZ2FkTWMrV3BCUEE5dkdiVllNV2dmaWlJaVhzajBFU09tRUF6U1htbFVFUERBWUV6UTcxR3NWd01PUmd2bTRDN0UrRkN4clFHNEROMkxYZ2JrTzROSjhmZm1HVUR3QWprQUIyOUhpZG9vS1NEK0NQNS9EVHRjUlZkb0tuT2twd0dFbFVHQWNnSUg4RjZvL0FmeUNjWk9ub3JiR2M1NGdldWttVitzK0FpZFRhTWMxV1RJNWt3Tk9Mam50d3o4dlMvZ0l1RW5rL3JHWU5CU21DTDJ5ZHovRGpNWThmalRJQ0FpcElVV294VkZOQS9Ya0tMNk4yeVpVRVZGSHNmL0xDNkVOUElEb25ZQUcrQWhVUVdhaUd4aEFIQmhBUEFRMVFBUU1JQUVDQVJJaHFBV1NJSEJBSmdUVlFDN2tQSEVTQlBYQXlXREV4MlFJRkNpSHdBTk5FTVRBQXhBWThDUkNrTUFuU1FpcTRGTmFDQ0w0ZERnRWRmRHB1WWtDeGh2MVpjYUJOUWp1UVhRQWRIZE5WWEV6UVJmT3hyalpLYmw0SUFSL1k5bHJ2THkrTnNpekVnN1VRRDdIeWIzNG1ocUdaNTQ3YzdnSm1TdXQ4NzZ1bGtwT09vdk0ycjJ2ajZMZU5EWHR0Mzd2MHpDMG1ocEM1aWRrdElpTGhHdzB2cXhHZzJTVC9aa3NrZW9qVjA0dEZvUEJpNzBFSlpKNWFoNUhvblRiUmRwNWtrcDI2UnYxZVVRYktqbGtueTB3VmJwcU5EN3NZSEdRZ3FGbjY4KzhlQWVtcVd6Q05wUlJHS3hkZVNjN2ZMbUNySkUzSnBxR2wxeEdpTmpNMlRjQk9LSUYzZmR0aEV6M2NROStJVk1MTVBiNC9KMzBnd2xaaHNQUFA4TUt5S0F2cXhmbjViTFllN0F3T3NJM1VtaDUySmtxR3RXQ2lBODRoVVVuS0FyMDIzNmRoQ3BmSGpEVlNKdGZxaW5sWEJ5TEpkQWtpVVJwU2FlY3VnamExcHYwM2JGNGZ3YmE4YVRkRFdFMjhKOEppcG1xTCtmY1VJMXdYZ3NVUCtZbGtHUkpvc3BScXNYUFlvVStwYTNrN3FLTHl2YmdudmJneWduMStPWDdZcjdKTXJwM1g0ZzFwMVpsQk4wT1RsS1ZBZ2toek1NTWpFRzJpNjcwbDRTQmZxazhJSmZLWDJvV2JGTk5vb05teGVoQzdwTDY0dzEwbWM0UXJuNmVuQzNZRnd0SWZJRXE3Qmk2dEQ1LzVzbzdYU3BVelY3TGFuaG5ISlkxVG1ITmk4N2NDdGdhbTJ0OFhQWG4xU1cvcVhQbVJ5bGF2bXoyRWlCcTJXcldzdTgrdytQTERYV2FNUDBESnBsVWlpV2pRdjhSNG4vRjlIODUrZThuZzJSUnU1YiswNWtraDg1Mk8rM2cvRFBwd3JSeklPbm9DWVc3ZEVHWXFPbFNDMnNqZ2xVMG8wTFRqaVIyYXJvSmtkaCtGU2pYdEJ0UXJZZHVqbHpsaTZ2WFd3aWxEd3M2MEJYRFlLT3RqWHFWbTg4dDlob2NaOExqeVk4OTNYQ2YrNGN3c2pMdEU2RUV1RDkrTDZaL3M2RDhrNnJDU2k1YmRDV1RJekV6Y1Q3VHREckdiSjVtcWxtaFZPaXkwVC8xTmtoOGdmcVZ4ZGRpTGQxcmVheFJZMGJBeG5aSTIwUmh1N3hUM2k2STJ5b1o1U0thUVM0M1Vwc3JPTzlGNFlMY0NJR1g5akJ6ZjNIWmV1aTNmcVVQbmVLL3RZWlBWNlNRTEJKRU9WSi9FbitVZnVxVEtsZ0xBRGp5NTgxcTY0bGdJOElZSUYwSG9HZ3crMFQ3WndNY2tuSWczNDFzdi9CU0xaZy8yNHN5MldTNEFBR3NHU0NqNkdnV01XRld0VEQrZGt4SUNaV1RFUFphM0owRitvVndwYU9yTU1qQi9CRlptRm85YjNpRlBQWGV2UEVWRWdaSW1seTA0SVk4djhwSTQ5YUs4K3BOdUZwWWNHWHQvRXMveklQeUZVSXNGb2F3Vm1oSzVXOXo1bmdFZm5pYkpnWDBUc1o0cFBPK0lmNXJRWWxGdzJ2VXVXWTdnTUNZTnFNLzNEUlM1MHppcy9yUmdsNHpITjVMZC9wTzFvZE1ybFhRRVNKbXVTdGtTMk5iTkNHdWRTaWFvUWpMQk4zbHBEaEkrVkw4MXNMeFpFZVNDTVUwN2w1Q2Z4V1hKci85dkdDVWJ1dWF4UXR4S2w5SkpVT0wxSkQ0aW14VW5UYUMrTXAwUUNCZ3dvU0dBRy91OUQvM1V2SVh3MWwvaWlJeE9UTmRleVRkNlBFOHRKb2dkejZCOEhpNk5OcUkrUnN5UG5WdnZ1T3d2RlZhQXd3dVl0amF1bk14REFNbzNjU0FLZ3RZWS82cGVQbXhtTkYxMStTdFpFMlliRUF1ZDE2MjZwa01yZVR5eHptemtXNGJ6bDF3L3ZhODA2dW01SUZOUkJoZldXNkFhcnpaWU9OTityeVRkTkZSeWhwVlZGWTlqVDF4cHVlbU1LMmZaOWludzJHWTdjNjJHU1hBTTdXSXp5WkdGNHA2VEdid2FUZFpoQjdxaTQzNDFMTzNNa2JWSm02ZHo2b2hnNGdQTW9vL1FNSUdYNzZRYmk0Wk5kL21CbHd5cjErLzI2S2xKRjlxMTRVM3VYQ01ldTRDRkJpOGFTVVdLNFVzc1dYVkhCdW1WV2l1S2JkeFdtR3o4SFhqMnVCOVdmNTlhdUpLd2pwekFxVXpRdk13RlVFRmtvVGMwRXBNZmxDaVpMbERGWUgvMXJ6UTI0QzlFYndPdS9YWlE0eTVaQ3p3djZucW83Q1hFbnpqVmgvSlBORGYyZVhwQmVYVnpjejJETU45ODZyOE5aWmVHZWFDUDRSZENKK1Q1c3hZSFZZNzNmQ0NJc0JnQ242NzB3SERUSHhxQWV6ejdDYUJrc0VoZGxHMVlBUm9hN3J5anVoQXlzeStIZDROL3JPeEFRZU9CNitCc1NmV09HcXl1R1B5SHduOUtUbG1aMDRSSVN0RXZNYTljeWdDOW1USmRTM1dWVDdMQUhwQll5NWtLTUdWY3Bsc2d1MFNoREJxek1jbXBjbGVzY0RFL0Q1c3o5ZXZQWjJFL1NnUytUaG5RWTJiTnhlcWdlU1JVb09CdXh5cUdVZC9OQ2Nud0Q4bnQ3T3pqQWlCalUzYlM3SFRKRFI3bUFhU1FKcnZOa2tvbWpEdGg1bjJvNEFyNWZrVXI3aTV3UlBTNUtQU0pGY3VXbUdQQ1RTdi9Mb25jb001T2lZanRzVTRTOGdRTSt3eDRwaG1ScDJJMmg3U3RYbzFtMklQczFPV0VtZXNTZXNZSHI1MlkzZ3BBYUEzUUZiVG1tbExDL0REVWtoTHM1VURzZHNkenQ1YlhrNG5BL05Ia2YxSWtBc0pHZnRINlRGNVlsODRqLzA0dkRNVGRNYjFVdzlyTDB0NjI3NWNhQ2JpenlHQTBTZEpmUUluMmxmSTZnTWd2Zjg4YU1YenBCdzB6YmZ4Q0psSzNoL0tjcjZQV3Y3VG1WZVgvcVJxS1U1S1dremsvaWpHL0xRNTJGR2FiMGNPZW1TVWVyL1dtSTkvRi8zK2UxZkhqMk9jTWE1THFaZHdjZC9rSGE4Wm9PcDg3SWFpYm8rRFhLb2w4bGJFRlRjdVlOM2RzU1JkMk1ZTGdRaVVVdjRnbUF0elJZZGpHaWFpVm9FTmtjdEloMFB2bEFWdXlvbFk2RGpFckZPSk51aWJkTGxSUFhMcTVvRlE2NDdRNXJ0LytuTnNMRXZXakV5QXJtVEs5OGhtejVidDZUV1piL2ZJZWgwdjUvVXR5bmRwUjZoaDI2ZHRENk1laWRzWUU3aE10bnphQWxtcnRTaTJrcDRld2w4UElPZVoyV0hha1BLclBIQ0pJaEF1L3BhUnlZaUFvTjNMRTRIK210ZmJnQThuVHdQS3pOcXFKM01jOS8xQUlwMngxbGRqRFlFSEQ3eGN1MXhmOS9iNTF2cHBDU2JBWHJIeVorWFdhZmo5dFAxNE1nNUE2NlM5MlBHdmNJL3l4OGQ3WCtLVzQrTjhKYndWYm9IdnZZUTNvOXk3dDRXU0k5Tnp1YnZKbkFHY21memt2MC9peS9UVDVoaWw3RGtKcS9iNVZISmtDL1BtTjF3dnJ4aXVxUHp5NFYvYkx1SkdPWnZrQm9nN0htNURoOUVpTWwvdzlXQWpoYytuR0FmeThwaEZ6RTRlS0hxZFh4dm16UnRjUFB6MXh2SXAxK0R4Nnl1aWdlU1VtWlhabHRBbXIrbnJrOHNkQ1pPVmtYMjllUGlmbDVXa0VEcDZlb0JvUTlSRWE2Y2Yzdk5UZEtnRE9veHgwSnNTRXAxZCtETDhNbEh4MTh3TFdKb3dKTVVsNE42L1RFQ2JNUVRJZ2Vvb2JYUUN2WTJTbU9pTmRPRlBJTmRDdVhVaEo5YUI5NTQ4bHhUTXBKTFdrYWpNWU5LVk84UlJxY1IxdTVlMTRtL0ozU2JmNWI3NFcwMnk1MjRpYjl0UGN4WlRlY2RWOS8xTGhSOTlQdnFlQ3B2WDlKQ2V0SEo5MWlMZnJCZEZqaCtHdDEzNU1FLzBXRlJnWGVwYlFGem5PQlJTS2FwTXNvU2Zja1FYU0xPbnorV2NtaDFkS0FIelBzRDlFZ0QxS3oxZWtPdTgyQS81WTRnWHMyNU50ZFppZDdwZVBZRkZZdDIyczZKaVk2RjR6OG8vWkh0UytKbXRRR2J0VDAvdGhDSGtZOXV4SGZ5WllQS09zakt6MHBMUDhZc09oL04vNVByMGlvWERzUXYvUHl1RjFZMzcraFRlRGtiUFFGdW4xc2JGdFUwaFNOM2JTZTN1azVMM2lMMm5LaVlYM2haN2lXTWQyK0lRc2VpOGVPRXBNb0U0eGxMOFNNYThCZmlMeno1OUVKV0ljck52VEduMG4xL24weU82bDliYzRzenlSVFNiYk1JWTZmakhRV0ZGY2Jyc2ZLeks3OGNtNWdOeFhrNTduTkxQN21LL1pMMVVGODFnci9NWCtnbjlZLzJubDB5d0p0Z1N5M1JiK0tmN2RJWWhZQWYrVi94ZUVKVzkxTkQvK09QL0M5TmVBb013OGxQQ3dGWjFhNVdzWjVPR1VEZ0VCd2UvRExkSFkxS3dsWnY2bkRBdFBSSGc1UDNCaFU5TmxCV1I2WFFjZmlNTjdvV2w1Z2dSaElFU3dzdGpnMkZjQ0l3T1RYcW1aR203c1ZVTS82OEp0eEE2bkZtTEZLSlRJUHY3UVdJKzk4TFZ3R3lKNXhvS1JzN29jVVJPTDB1ZHFUbGd5cVhjcm0xNkJjOTBvOTJFa3owWU9ESmFIL09BUzh3ZmZIK3h1UkJGRkhBV2xURG1QVHZCOXVpeG40VkNPT01oVDFOQkx3WWlaRWVDN0d0dkd5cUlOQ2FOV0VHaWtoYlYvb25WZmdxRWpzejBxOFpyWG9HOGwxUWQxZTVjMG1yM3FHQXBtUXlta3NYRkMyOHZJUVdUcWtraE5hUGtDTmFlRmZIc0VpaDlkL3plYUxjVmUvYkVNNk9ZSytQYndQejM0MEQ1V2hmRFJOUHpvYTZHUTh6Znl6OTBiZHdyNXdLVUF3M0E0NGxGM3hLZ1J6Q0FjcjlLNFJLbisxUG45RDZ1ZHpSVGZlRitoN3FKK1MyT01xZ0pxSE5SejhFU1YwNThaRUNQQVNpMzZxald3dk9zWHRSVXordmFyeXpQcjFvT2s2dVA2amdjczUwekhUY1h6aFRLeWRQZmV4RCsrNVM4c2g3cEpyM1NxeURHd1ppVVVOcXFLVExJVmY2WGVRTlViVFFnR2luMTNkSUZLNUZ6eVdya3dDYUJYQlpJNWJkZ3F5YTNsaEdpYXdnZHQxbWxhK0Mram9nT1VKRjFQeGlzeDMwRE1pb1F3bnJTTjJXTXRKVXo2akFESTRZSE1NcGkrQXJWSFBGMUZEd0JoZlVOTUZnUCt3WTA4andweEZsZzM1UjFvYTh6WTFEMFNKSlpyYkNxVmFpeUJkWFhHUTBhcDFzUnEzbUJXbXRyVkpoSndtNjJFclhab2pjYTBCaWU0Rm1UcGphb3pXa3NZTEZyaFZhckJ0V1lqVTFvcWpTUHVySFJpSnJNeG5wMW5aV25vOW8wbGMvWG5CYmsxUm1iQU1Jc1p0UW9zT3FCVmFBb2FZbXVwdzRqQmpUZnQ0SzRmbjhCYXJUWWFFU0IyYWZmVy9RUzFKaXhvUDk1bEJoNENFS1lwM0ZEcUg3TDB0YUNIUzFDckVUUmdLcGR6UmhwQWlXVktHb2E1VW9qS0NieFZQV29xY01LRDEyTWNoTlQ0Wk0zYWNKeVh2NjZwcW5BR1h3RHNvZlNLQmdJaHJDUUc0U0QzQ0VQQ0E4aEVBSHloSWdRQ1NKREZJZ0swU0E2eElDOElHL0lCK0J1R1cwV201SFFvcS9YRzJKRTNEcUYzbDJsVnhobVdaRHJ6VjFhalRhRjJXeHNGb25qOEE2OVFhdlVxdzEyNURXWnd1QnUwU2tNZFRvYm9ZOFhzS2l0QW1GTXJLZERyMmhVelBxNlVJTkNqMU1hTlFxREZ0ZGdhOVFIM2NBc25VMWgwQ2p3cGthYmhkdW9ONmc5RHR6NEhVd0p0bTIwR1dDVDJ1QSs4Nk5BcFREaVBFaTFKYXFNQnExVm9kZVdTYVBUWTVwYTNKSW9hRkVEQUFBPScpIGZvcm1hdCgnd29mZjInKVwiXG4gICAgfVxuICBdLFxuICBcInVuaS1mbGV4XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ1bmktZmxleC1pdGVtXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInVuaS1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLWNvbHVtblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJ1bmktbGlua1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM1NzZCOTVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjZycHhcIlxuICB9LFxuICBcInVuaS1jZW50ZXJcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktaW5saW5lLWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1wYWdlLWhlYWRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjM1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzNXJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjM1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjM1cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1wYWdlLWhlYWQtdGl0bGVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI0JFQkVCRVwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMnJweCBzb2xpZCAjRDhEOEQ4XCJcbiAgfSxcbiAgXCJ1bmktcGFnZS1ib2R5XCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImZsZXhHcm93XCI6IDEsXG4gICAgXCJvdmVyZmxvd1hcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInVuaS1wYWRkaW5nLXdyYXBcIjoge1xuICAgIFwid2lkdGhcIjogXCI2OTBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktd29yZFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMDBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMDBycHhcIlxuICB9LFxuICBcInVuaS10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjVcbiAgfSxcbiAgXCJ1bmktdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCJcbiAgfSxcbiAgXCJ1bmktdGV4dC1ncmF5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2NjY2NjY1wiXG4gIH0sXG4gIFwidW5pLXRleHQtc21hbGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwidW5pLWNvbW1vbi1tYlwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWNvbW1vbi1wYlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInVuaS1jb21tb24tcGxcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWNvbW1vbi1tdFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWJnLXJlZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI0Y3NjI2MFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJ1bmktYmctZ3JlZW5cIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIiMwOUJCMDdcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidW5pLWJnLWJsdWVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIiMwMDdBRkZcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidW5pLWgxXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiODBycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcInVuaS1oMlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjYwcnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCJcbiAgfSxcbiAgXCJ1bmktaDNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0OHJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH0sXG4gIFwidW5pLWg0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzZycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcInVuaS1oNVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZjhmOTRcIlxuICB9LFxuICBcInVuaS1oNlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZjhmOTRcIlxuICB9LFxuICBcInVuaS1ib2xkXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJ1bmktZWxsaXBzaXNcIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCJ1bmktYnRuLXZcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInVuaS1mb3JtLWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJ1bmktbGFiZWxcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMTBycHhcIixcbiAgICBcIndvcmRXcmFwXCI6IFwiYnJlYWstd29yZFwiLFxuICAgIFwid29yZEJyZWFrXCI6IFwiYnJlYWstYWxsXCIsXG4gICAgXCJ0ZXh0SW5kZW50XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInVuaS1pbnB1dFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNXJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI1cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImJhY2tncm91bmRcIjogXCIjRkZGXCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJ1bmktbG9hZG1vcmVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInVuaS1iYWRnZVwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjEyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiM1wiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNlwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjNcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNlwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMDBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4xNSlcIlxuICB9LFxuICBcInVuaS1iYWRnZS1kZWZhdWx0XCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMSxcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI2XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiM1wiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjE1KVwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YWZmXCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2UtZ3JlZW5cIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGNkOTY0XCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2Utc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0Y2Q5NjRcIlxuICB9LFxuICBcInVuaS1iYWRnZS13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YwYWQ0ZVwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLXllbGxvd1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGFkNGVcIlxuICB9LFxuICBcInVuaS1iYWRnZS1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGQ1MjRkXCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2UtcmVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RkNTI0ZFwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLXB1cnBsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4YTZkZTlcIlxuICB9LFxuICBcInVuaS1iYWRnZS1yb3lhbFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4YTZkZTlcIlxuICB9LFxuICBcInVuaS1jb2xsYXBzZS1jb250ZW50XCI6IHtcbiAgICBcImhlaWdodFwiOiAwLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInVuaS1jYXJkXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCIjZmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJib3hTaGFkb3dcIjogXCIwIDJycHggNHJweCByZ2JhKDAsIDAsIDAsIC4zKVwiXG4gIH0sXG4gIFwidW5pLWNhcmQtY29udGVudFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktY2FyZC1jb250ZW50LWlubmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWNhcmQtZm9vdGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzZkNmQ3MlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmVcIjogMCxcbiAgICBcInJpZ2h0OmJlZm9yZVwiOiAwLFxuICAgIFwibGVmdDpiZWZvcmVcIjogMCxcbiAgICBcImhlaWdodDpiZWZvcmVcIjogXCIycnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06YmVmb3JlXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmVcIjogXCIjYzhjN2NjXCJcbiAgfSxcbiAgXCJ1bmktY2FyZC1oZWFkZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNnJweFwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmU6YWZ0ZXJcIjogMCxcbiAgICBcInJpZ2h0OmJlZm9yZTphZnRlclwiOiAwLFxuICAgIFwibGVmdDpiZWZvcmU6YWZ0ZXJcIjogMCxcbiAgICBcImhlaWdodDpiZWZvcmU6YWZ0ZXJcIjogXCIycnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZTphZnRlclwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06YmVmb3JlOmFmdGVyXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZTphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmU6YWZ0ZXJcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJib3R0b206YWZ0ZXJcIjogMFxuICB9LFxuICBcInVuaS1jYXJkLW1lZGlhXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwidW5pLWNhcmQtbWVkaWEtbG9nb1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4NHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI4NHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwidW5pLWNhcmQtbWVkaWEtYm9keVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4NHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcInVuaS1jYXJkLW1lZGlhLXRleHQtdG9wXCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogXCIzNnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNHJweFwiXG4gIH0sXG4gIFwidW5pLWNhcmQtbWVkaWEtdGV4dC1ib3R0b21cIjoge1xuICAgIFwibGluZUhlaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZjhmOTRcIlxuICB9LFxuICBcInVuaS1jYXJkLWxpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3QUZGXCJcbiAgfSxcbiAgXCJ1bmktbGlzdFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiekluZGV4OmFmdGVyXCI6IDEwLFxuICAgIFwicmlnaHQ6YWZ0ZXJcIjogMCxcbiAgICBcImJvdHRvbTphZnRlclwiOiAwLFxuICAgIFwibGVmdDphZnRlclwiOiAwLFxuICAgIFwiaGVpZ2h0OmFmdGVyXCI6IFwiMVwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm06YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWZ0ZXJcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJwb3NpdGlvbjo6YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInpJbmRleDo6YmVmb3JlXCI6IDEwLFxuICAgIFwicmlnaHQ6OmJlZm9yZVwiOiAwLFxuICAgIFwidG9wOjpiZWZvcmVcIjogMCxcbiAgICBcImxlZnQ6OmJlZm9yZVwiOiAwLFxuICAgIFwiaGVpZ2h0OjpiZWZvcmVcIjogXCIxXCIsXG4gICAgXCJjb250ZW50OjpiZWZvcmVcIjogXCInJ1wiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOjpiZWZvcmVcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm06OmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjo6YmVmb3JlXCI6IFwiI2M4YzdjY1wiXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiekluZGV4OjphZnRlclwiOiAzLFxuICAgIFwicmlnaHQ6OmFmdGVyXCI6IDAsXG4gICAgXCJib3R0b206OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlclwiOiBcIjMwcnB4XCIsXG4gICAgXCJoZWlnaHQ6OmFmdGVyXCI6IFwiMVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXJcIjogXCInJ1wiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOjphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6OmFmdGVyXCI6IFwiI2M4YzdjY1wiXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbC1ob3ZlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVlZWVlXCJcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLXBkXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbC1sZWZ0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLWRiXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInVuaS1saXN0LWNlbGwtcmlnaHRcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbC1kaXZpZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmN2Y3ZjdcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNXJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicG9zaXRpb246OmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodDo6YmVmb3JlXCI6IDAsXG4gICAgXCJ0b3A6OmJlZm9yZVwiOiAwLFxuICAgIFwibGVmdDo6YmVmb3JlXCI6IDAsXG4gICAgXCJoZWlnaHQ6OmJlZm9yZVwiOiBcIjFcIixcbiAgICBcImNvbnRlbnQ6OmJlZm9yZVwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06OmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcInRyYW5zZm9ybTo6YmVmb3JlXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOjpiZWZvcmVcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHQ6OmFmdGVyXCI6IDAsXG4gICAgXCJib3R0b206OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlclwiOiBcIjBycHhcIixcbiAgICBcImhlaWdodDo6YWZ0ZXJcIjogXCIxXCIsXG4gICAgXCJjb250ZW50OjphZnRlclwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06OmFmdGVyXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwidHJhbnNmb3JtOjphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjo6YWZ0ZXJcIjogXCIjYzhjN2NjXCJcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLW5hdmlnYXRlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzZycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktbmF2aWdhdGUtYmFkZ2VcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInVuaS10cmlwbGV4LXJvd1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktdHJpcGxleC1yaWdodFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogMTYsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwidW5pLXRyaXBsZXgtbGVmdFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogODRcbiAgfSxcbiAgXCJ1bmktbWVkaWEtbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ1bmktcHVsbC1yaWdodFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93LXJldmVyc2VcIlxuICB9LFxuICBcInVuaS1tZWRpYS1saXN0LWxvZ29cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODRycHhcIixcbiAgICBcIndpZHRoXCI6IFwiODRycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInVuaS1tZWRpYS1saXN0LWJvZHlcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODRycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwidW5pLW1lZGlhLWxpc3QtdGV4dC10b3BcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjM2cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktbWVkaWEtbGlzdC10ZXh0LWJvdHRvbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmOGY5NFwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2YyZjJmMlwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImJvcmRlclRvcFwiOiBcIjJycHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOS1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMDBycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMnJweCBzb2xpZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogXCIycnB4IHNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlZWVlZWVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcIm5vLWJvcmRlci1yaWdodFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFwiOiBcIm5vbmVcIlxuICB9LFxuICBcInVuaS1ncmlkLTktaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOS10ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOS1pdGVtLWhvdmVyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcInVuaS11cGxvYWRlclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXItaGVhZFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXItaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNCMkIyQjJcIlxuICB9LFxuICBcInVuaS11cGxvYWRlci1ib2R5XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE2cnB4XCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXJfX2ZpbGVzXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInVuaS11cGxvYWRlcl9fZmlsZVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIyMTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIxMHJweFwiXG4gIH0sXG4gIFwidW5pLXVwbG9hZGVyX19pbWdcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjIxMHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjEwcnB4XCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXJfX2lucHV0LWJveFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIyMDhycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIwOHJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMnJweCBzb2xpZCAjRDlEOUQ5XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmVcIjogNTAsXG4gICAgXCJsZWZ0OmJlZm9yZVwiOiA1MCxcbiAgICBcIldlYmtpdFRyYW5zZm9ybTpiZWZvcmVcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcInRyYW5zZm9ybTpiZWZvcmVcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmVcIjogXCIjRDlEOUQ5XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZTphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmU6YWZ0ZXJcIjogNTAsXG4gICAgXCJsZWZ0OmJlZm9yZTphZnRlclwiOiA1MCxcbiAgICBcIldlYmtpdFRyYW5zZm9ybTpiZWZvcmU6YWZ0ZXJcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcInRyYW5zZm9ybTpiZWZvcmU6YWZ0ZXJcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmU6YWZ0ZXJcIjogXCIjRDlEOUQ5XCIsXG4gICAgXCJ3aWR0aDpiZWZvcmVcIjogXCI0cnB4XCIsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiNzlycHhcIixcbiAgICBcIndpZHRoOmFmdGVyXCI6IFwiNzlycHhcIixcbiAgICBcImhlaWdodDphZnRlclwiOiBcIjRycHhcIixcbiAgICBcImJvcmRlckNvbG9yOmFjdGl2ZVwiOiBcIiM5OTk5OTlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphY3RpdmU6YmVmb3JlXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFjdGl2ZTpiZWZvcmU6YWN0aXZlOmFmdGVyXCI6IFwiIzk5OTk5OVwiXG4gIH0sXG4gIFwidW5pLXVwbG9hZGVyX19pbnB1dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ6SW5kZXhcIjogMSxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9LFxuICBcImZlZWRiYWNrLXRpdGxlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGY4Zjk0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCJcbiAgfSxcbiAgXCJmZWVkYmFjay1xdWlja1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcInVuaWljb25zXCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjQwcnB4XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiJ1xcXFxlNTgxJ1wiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHQ6YWZ0ZXJcIjogMCxcbiAgICBcInRvcDphZnRlclwiOiA1MCxcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOmFmdGVyXCI6IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgIFwidHJhbnNmb3JtOmFmdGVyXCI6IFwidHJhbnNsYXRlWSgtNTAlKVwiXG4gIH0sXG4gIFwiZmVlZGJhY2stYm9keVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2ZmZlwiXG4gIH0sXG4gIFwiZmVlZGJhY2stdGV4dGFyZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyMDBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzRycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwiZmVlZGJhY2staW5wdXRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTVycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwiZmVlZGJhY2stdXBsb2FkZXJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJmZWVkYmFjay1zdGFyXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJ1bmlpY29uc1wiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjZycHhcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCInXFxcXGU0MDgnXCJcbiAgfSxcbiAgXCJmZWVkYmFjay1zdGFyLXZpZXdcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJmZWVkYmFjay1zdWJtaXRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIiMwMDdBRkZcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInVuaS1pbnB1dC1ncm91cFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJib3JkZXJcIjogMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBvc2l0aW9uOmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6YmVmb3JlXCI6IDAsXG4gICAgXCJyaWdodDpiZWZvcmVcIjogMCxcbiAgICBcImxlZnQ6YmVmb3JlXCI6IDAsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiMnJweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInJ1wiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmVcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodDphZnRlclwiOiAwLFxuICAgIFwiYm90dG9tOmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OmFmdGVyXCI6IDAsXG4gICAgXCJoZWlnaHQ6YWZ0ZXJcIjogXCIycnB4XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiJydcIixcbiAgICBcInRyYW5zZm9ybTphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphZnRlclwiOiBcIiNjOGM3Y2NcIlxuICB9LFxuICBcInVuaS1pbnB1dC1yb3dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJ1bmktdGV4dGFyZWFcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNGRkZcIlxuICB9LFxuICBcInVuaS10YWItYmFyXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiaGVpZ2h0XCI6IDEwMFxuICB9LFxuICBcInVuaS1zd2lwZXItdGFiXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNjOGM3Y2NcIlxuICB9LFxuICBcInN3aXBlci10YWItbGlzdFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE1MHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIlxuICB9LFxuICBcInVuaS10YWItYmFyLWxvYWRpbmdcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInVuaS1jb21tZW50XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhHcm93XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJ1bmktY29tbWVudC1saXN0XCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIlxuICB9LFxuICBcInVuaS1jb21tZW50LWZhY2VcIjoge1xuICAgIFwid2lkdGhcIjogXCI3MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDAsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwidW5pLWNvbW1lbnQtYm9keVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJ1bmktY29tbWVudC10b3BcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiAxLjUsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcInVuaS1jb21tZW50LWRhdGVcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiBcIjM4cnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4R3Jvd1wiOiAxXG4gIH0sXG4gIFwidW5pLWNvbW1lbnQtY29udGVudFwiOiB7XG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuNixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI4cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI4cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwidW5pLWNvbW1lbnQtcmVwbGF5LWJ0blwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI0ZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI4cnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzMHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJ1bmktc3dpcGVyLW1zZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwiZmxleFdyYXBcIjogXCJub3dyYXBcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCJcbiAgfSxcbiAgXCJ1bmktc3dpcGVyLW1zZy1pY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInVuaS1wcm9kdWN0LWxpc3RcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLXByb2R1Y3RcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiaW1hZ2Utdmlld1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIzMzBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzMwcnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDBcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC1pbWFnZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIzMzBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC10aXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMwMHJweFwiLFxuICAgIFwid29yZEJyZWFrXCI6IFwiYnJlYWstYWxsXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiLXdlYmtpdC1ib3hcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuNSxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCIsXG4gICAgXCJXZWJraXRCb3hPcmllbnRcIjogXCJ2ZXJ0aWNhbFwiLFxuICAgIFwiV2Via2l0TGluZUNsYW1wXCI6IDJcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC1wcmljZVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjUsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC1wcmljZS1vcmlnaW5hbFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNlODAwODBcIlxuICB9LFxuICBcInVuaS1wcm9kdWN0LXByaWNlLWZhdm91clwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4ODg4ODhcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibGluZS10aHJvdWdoXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInVuaS1wcm9kdWN0LXRpcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjEwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmYzMzMzXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJ1bmktdGltZWxpbmVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzVycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzNXJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInVuaS10aW1lbGluZS1pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJ1bmktdGltZWxpbmUtaXRlbS1kaXZpZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uOjpiZWZvcmVcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdDo6YmVmb3JlXCI6IFwiMTVycHhcIixcbiAgICBcIndpZHRoOjpiZWZvcmVcIjogXCIxcnB4XCIsXG4gICAgXCJoZWlnaHQ6OmJlZm9yZVwiOiAxMDAsXG4gICAgXCJjb250ZW50OjpiZWZvcmVcIjogXCInJ1wiLFxuICAgIFwiYmFja2dyb3VuZDo6YmVmb3JlXCI6IFwiaW5oZXJpdFwiLFxuICAgIFwicG9zaXRpb246OmJlZm9yZTo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdDo6YmVmb3JlOjphZnRlclwiOiBcIjE1cnB4XCIsXG4gICAgXCJ3aWR0aDo6YmVmb3JlOjphZnRlclwiOiBcIjFycHhcIixcbiAgICBcImhlaWdodDo6YmVmb3JlOjphZnRlclwiOiAxMDAsXG4gICAgXCJjb250ZW50OjpiZWZvcmU6OmFmdGVyXCI6IFwiJydcIixcbiAgICBcImJhY2tncm91bmQ6OmJlZm9yZTo6YWZ0ZXJcIjogXCJpbmhlcml0XCIsXG4gICAgXCJib3R0b206OmJlZm9yZVwiOiAxMDAsXG4gICAgXCJ0b3A6OmFmdGVyXCI6IDEwMFxuICB9LFxuICBcInVuaS1pY29uXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJ1bmlpY29uc1wiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIm5vcm1hbFwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcIm5vbmVcIixcbiAgICBcIldlYmtpdEZvbnRTbW9vdGhpbmdcIjogXCJhbnRpYWxpYXNlZFwiXG4gIH0sXG4gIFwidW5pLWljb24tY29udGFjdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEwMCdcIlxuICB9LFxuICBcInVuaS1pY29uLXBlcnNvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEwMSdcIlxuICB9LFxuICBcInVuaS1pY29uLXBlcnNvbmFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEwMidcIlxuICB9LFxuICBcInVuaS1pY29uLWNvbnRhY3QtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMTMwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGVyc29uLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEzMSdcIlxuICB9LFxuICBcInVuaS1pY29uLXBlcnNvbmFkZC1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUxMzInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1waG9uZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIwMCdcIlxuICB9LFxuICBcInVuaS1pY29uLWVtYWlsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjAxJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2hhdGJ1YmJsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIwMidcIlxuICB9LFxuICBcInVuaS1pY29uLWNoYXRib3hlc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIwMydcIlxuICB9LFxuICBcInVuaS1pY29uLXBob25lLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIzMCdcIlxuICB9LFxuICBcInVuaS1pY29uLWVtYWlsLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIzMSdcIlxuICB9LFxuICBcInVuaS1pY29uLWNoYXRidWJibGUtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjMyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2hhdGJveGVzLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIzMydcIlxuICB9LFxuICBcInVuaS1pY29uLXdlaWJvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjYwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24td2VpeGluXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjYxJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGVuZ3lvdXF1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyNjInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jaGF0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjYzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcXFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyNjQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi12aWRlb2NhbVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMwMCdcIlxuICB9LFxuICBcInVuaS1pY29uLWNhbWVyYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMwMSdcIlxuICB9LFxuICBcInVuaS1pY29uLW1pY1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMwMidcIlxuICB9LFxuICBcInVuaS1pY29uLWxvY2F0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMzAzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tbWljLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMzMidcIlxuICB9LFxuICBcInVuaS1pY29uLXNwZWVjaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZTpiZWZvcmVcIjogXCInXFxcXGUzMzInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1sb2NhdGlvbi1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzMzMnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1taWNvZmZcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzNjAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1pbWFnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTM2MydcIlxuICB9LFxuICBcInVuaS1pY29uLW1hcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTM2NCdcIlxuICB9LFxuICBcInVuaS1pY29uLWNvbXBvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi10cmFzaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwMSdcIlxuICB9LFxuICBcInVuaS1pY29uLXVwbG9hZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwMidcIlxuICB9LFxuICBcInVuaS1pY29uLWRvd25sb2FkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDAzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2xvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1yZWRvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDA1J1wiXG4gIH0sXG4gIFwidW5pLWljb24tdW5kb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwNidcIlxuICB9LFxuICBcInVuaS1pY29uLXJlZnJlc2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDcnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zdGFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDA4J1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGx1c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwOSdcIlxuICB9LFxuICBcInVuaS1pY29uLW1pbnVzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDEwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2lyY2xlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDExJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2hlY2tib3hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmU6YmVmb3JlXCI6IFwiJ1xcXFxlNDExJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2xvc2UtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDM0J1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2xlYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmU6YmVmb3JlXCI6IFwiJ1xcXFxlNDM0J1wiXG4gIH0sXG4gIFwidW5pLWljb24tcmVmcmVzaC1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MzcnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zdGFyLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQzOCdcIlxuICB9LFxuICBcInVuaS1pY29uLXBsdXMtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDM5J1wiXG4gIH0sXG4gIFwidW5pLWljb24tbWludXMtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDQwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2lyY2xlLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ0MSdcIlxuICB9LFxuICBcInVuaS1pY29uLWNoZWNrYm94LWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ0MidcIlxuICB9LFxuICBcInVuaS1pY29uLWNsb3NlZW1wdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1yZWZyZXNoZW1wdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1yZWxvYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zdGFyaGFsZlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ2MydcIlxuICB9LFxuICBcInVuaS1pY29uLXNwaW5uZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zcGlubmVyLWN5Y2xlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDY1J1wiXG4gIH0sXG4gIFwidW5pLWljb24tc2VhcmNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDY2J1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGx1c2VtcHR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDY4J1wiXG4gIH0sXG4gIFwidW5pLWljb24tZm9yd2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ3MCdcIlxuICB9LFxuICBcInVuaS1pY29uLWJhY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NzEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1sZWZ0LW5hdlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZTpiZWZvcmVcIjogXCInXFxcXGU0NzEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jaGVja21hcmtlbXB0eVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ3MidcIlxuICB9LFxuICBcInVuaS1pY29uLWhvbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1uYXZpZ2F0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwMSdcIlxuICB9LFxuICBcInVuaS1pY29uLWdlYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1wYXBlcnBsYW5lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTAzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24taW5mb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwNCdcIlxuICB9LFxuICBcInVuaS1pY29uLWhlbHBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDUnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1sb2NrZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDYnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1tb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTA3J1wiXG4gIH0sXG4gIFwidW5pLWljb24tZmxhZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwOCdcIlxuICB9LFxuICBcInVuaS1pY29uLWhvbWUtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTMwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tZ2Vhci1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MzInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1pbmZvLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUzNCdcIlxuICB9LFxuICBcInVuaS1pY29uLWhlbHAtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTM1J1wiXG4gIH0sXG4gIFwidW5pLWljb24tbW9yZS1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MzcnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zZXR0aW5nc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2MCdcIlxuICB9LFxuICBcInVuaS1pY29uLWxpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1NjInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1iYXJzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTYzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tbG9vcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2NSdcIlxuICB9LFxuICBcInVuaS1pY29uLXBhcGVyY2xpcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2NydcIlxuICB9LFxuICBcInVuaS1pY29uLWV5ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2OCdcIlxuICB9LFxuICBcInVuaS1pY29uLWFycm93dXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd2Rvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd2xlZnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd3JpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTgzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tYXJyb3d0aGludXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd3RoaW5kb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTg1J1wiXG4gIH0sXG4gIFwidW5pLWljb24tYXJyb3d0aGlubGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU4NidcIlxuICB9LFxuICBcInVuaS1pY29uLWFycm93dGhpbnJpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTg3J1wiXG4gIH0sXG4gIFwidW5pLWljb24tcHVsbGRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODgnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zY2FuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjEyXFxcIlwiXG4gIH0sXG4gIFwidW5pLWRpdmlkZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTEwcnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInVuaS1kaXZpZGVyX19jb250ZW50XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInpJbmRleFwiOiAxMDEsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI0Y0RjVGNlwiXG4gIH0sXG4gIFwidW5pLWRpdmlkZXJfX2xpbmVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDQ0NDQ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMVwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiekluZGV4XCI6IDEwMCxcbiAgICBcInRvcFwiOiA1MCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoNTAlKVwiXG4gIH0sXG4gIFwidS1mbGV4XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCJcbiAgfSxcbiAgXCJ1LWFsaWduLWl0ZW1zXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1LWp1c3RpZnktY29udGVudFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInUtanVzdGlmeS1jb250ZW50YlwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJpY29uZm9udFwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNlwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nXCI6IFwiYW50aWFsaWFzZWRcIixcbiAgICBcIk1vek9zeEZvbnRTbW9vdGhpbmdcIjogXCJncmF5c2NhbGVcIlxuICB9LFxuICBcImljb25zb3VzdW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGJcXFwiXCJcbiAgfSxcbiAgXCJpY29ueWlqaW4xNC1jYWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uZGlhbnphblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NFxcXCJcIlxuICB9LFxuICBcImljb25qaWFudG91YXJyb3c0ODdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YWJcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGluZ2JpZW52XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnhpbmdiaWVuYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2hhbmNodVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0N1xcXCJcIlxuICB9LFxuICBcImljb25pY29uc2V0MDIxM1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3MFxcXCJcIlxuICB9LFxuICBcImljb254aWFsYXpoYW5rYWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uYm9mYW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmt1bGlhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMFxcXCJcIlxuICB9LFxuICBcImljb256aHVhbmZhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnBsdXMtbGluZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzNlxcXCJcIlxuICB9LFxuICBcImljb254aWFvbGlhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZFxcXCJcIlxuICB9LFxuICBcImljb25waW5nbHVuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnBlblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxY1xcXCJcIlxuICB9LFxuICBcImljb25xaWFuZGFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnhpYW94aVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwZFxcXCJcIlxuICB9LFxuICBcImljb25kb25ndGFpZ2FuemhpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbm15XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjM1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnpodXllXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjJkXFxcIlwiXG4gIH0sXG4gIFwiYm91bmNlXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VcIixcbiAgICBcIldlYmtpdFRyYW5zZm9ybU9yaWdpblwiOiBcImNlbnRlciBib3R0b21cIixcbiAgICBcInRyYW5zZm9ybU9yaWdpblwiOiBcImNlbnRlciBib3R0b21cIlxuICB9LFxuICBcImZsYXNoXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJmbGFzaFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImZsYXNoXCJcbiAgfSxcbiAgXCJwdWxzZVwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwicHVsc2VcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJwdWxzZVwiXG4gIH0sXG4gIFwicnViYmVyQmFuZFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwicnViYmVyQmFuZFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInJ1YmJlckJhbmRcIlxuICB9LFxuICBcInNoYWtlXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJzaGFrZVwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNoYWtlXCJcbiAgfSxcbiAgXCJoZWFkU2hha2VcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImhlYWRTaGFrZVwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImhlYWRTaGFrZVwiXG4gIH0sXG4gIFwic3dpbmdcIjoge1xuICAgIFwiV2Via2l0VHJhbnNmb3JtT3JpZ2luXCI6IFwidG9wIGNlbnRlclwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luXCI6IFwidG9wIGNlbnRlclwiLFxuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInN3aW5nXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwic3dpbmdcIlxuICB9LFxuICBcInRhZGFcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInRhZGFcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJ0YWRhXCJcbiAgfSxcbiAgXCJ3b2JibGVcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcIndvYmJsZVwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcIndvYmJsZVwiXG4gIH0sXG4gIFwiamVsbG9cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImplbGxvXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiamVsbG9cIixcbiAgICBcIldlYmtpdFRyYW5zZm9ybU9yaWdpblwiOiBcImNlbnRlclwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJoZWFydEJlYXRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImhlYXJ0QmVhdFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImhlYXJ0QmVhdFwiLFxuICAgIFwiV2Via2l0QW5pbWF0aW9uRHVyYXRpb25cIjogMS4zLFxuICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogMS4zLFxuICAgIFwiV2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiXG4gIH0sXG4gIFwiYm91bmNlSW5cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uRHVyYXRpb25cIjogMC43NSxcbiAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDAuNzUsXG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiYm91bmNlSW5cIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VJblwiXG4gIH0sXG4gIFwiYm91bmNlSW5Eb3duXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VJbkRvd25cIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VJbkRvd25cIlxuICB9LFxuICBcImJvdW5jZUluTGVmdFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiYm91bmNlSW5MZWZ0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiYm91bmNlSW5MZWZ0XCJcbiAgfSxcbiAgXCJib3VuY2VJblJpZ2h0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VJblJpZ2h0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiYm91bmNlSW5SaWdodFwiXG4gIH0sXG4gIFwiYm91bmNlSW5VcFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiYm91bmNlSW5VcFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImJvdW5jZUluVXBcIlxuICB9LFxuICBcImJvdW5jZU91dFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25EdXJhdGlvblwiOiAwLjc1LFxuICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogMC43NSxcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VPdXRcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VPdXRcIlxuICB9LFxuICBcImJvdW5jZU91dERvd25cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImJvdW5jZU91dERvd25cIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VPdXREb3duXCJcbiAgfSxcbiAgXCJib3VuY2VPdXRMZWZ0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VPdXRMZWZ0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiYm91bmNlT3V0TGVmdFwiXG4gIH0sXG4gIFwiYm91bmNlT3V0UmlnaHRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImJvdW5jZU91dFJpZ2h0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiYm91bmNlT3V0UmlnaHRcIlxuICB9LFxuICBcImJvdW5jZU91dFVwXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJib3VuY2VPdXRVcFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImJvdW5jZU91dFVwXCJcbiAgfSxcbiAgXCJmYWRlSW5cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImZhZGVJblwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImZhZGVJblwiXG4gIH0sXG4gIFwiZmFkZUluRG93blwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiZmFkZUluRG93blwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImZhZGVJbkRvd25cIlxuICB9LFxuICBcImZhZGVJbkRvd25CaWdcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImZhZGVJbkRvd25CaWdcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJmYWRlSW5Eb3duQmlnXCJcbiAgfSxcbiAgXCJmYWRlSW5MZWZ0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJmYWRlSW5MZWZ0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmFkZUluTGVmdFwiXG4gIH0sXG4gIFwiZmFkZUluTGVmdEJpZ1wiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiZmFkZUluTGVmdEJpZ1wiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImZhZGVJbkxlZnRCaWdcIlxuICB9LFxuICBcImZhZGVJblJpZ2h0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJmYWRlSW5SaWdodFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImZhZGVJblJpZ2h0XCJcbiAgfSxcbiAgXCJmYWRlSW5SaWdodEJpZ1wiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiZmFkZUluUmlnaHRCaWdcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJmYWRlSW5SaWdodEJpZ1wiXG4gIH0sXG4gIFwiZmFkZUluVXBcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImZhZGVJblVwXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmFkZUluVXBcIlxuICB9LFxuICBcImZhZGVJblVwQmlnXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJmYWRlSW5VcEJpZ1wiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImZhZGVJblVwQmlnXCJcbiAgfSxcbiAgXCJmYWRlT3V0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJmYWRlT3V0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmFkZU91dFwiXG4gIH0sXG4gIFwiZmFkZU91dERvd25cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImZhZGVPdXREb3duXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmFkZU91dERvd25cIlxuICB9LFxuICBcImZhZGVPdXREb3duQmlnXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJmYWRlT3V0RG93bkJpZ1wiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImZhZGVPdXREb3duQmlnXCJcbiAgfSxcbiAgXCJmYWRlT3V0TGVmdFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiZmFkZU91dExlZnRcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJmYWRlT3V0TGVmdFwiXG4gIH0sXG4gIFwiZmFkZU91dExlZnRCaWdcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImZhZGVPdXRMZWZ0QmlnXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmFkZU91dExlZnRCaWdcIlxuICB9LFxuICBcImZhZGVPdXRSaWdodFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiZmFkZU91dFJpZ2h0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmFkZU91dFJpZ2h0XCJcbiAgfSxcbiAgXCJmYWRlT3V0UmlnaHRCaWdcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImZhZGVPdXRSaWdodEJpZ1wiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImZhZGVPdXRSaWdodEJpZ1wiXG4gIH0sXG4gIFwiZmFkZU91dFVwXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJmYWRlT3V0VXBcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJmYWRlT3V0VXBcIlxuICB9LFxuICBcImZhZGVPdXRVcEJpZ1wiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiZmFkZU91dFVwQmlnXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmFkZU91dFVwQmlnXCJcbiAgfSxcbiAgXCJmbGlwSW5YXCI6IHtcbiAgICBcIldlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eVwiOiBcInZpc2libGVcIixcbiAgICBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiBcInZpc2libGVcIixcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJmbGlwSW5YXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmxpcEluWFwiXG4gIH0sXG4gIFwiZmxpcEluWVwiOiB7XG4gICAgXCJXZWJraXRCYWNrZmFjZVZpc2liaWxpdHlcIjogXCJ2aXNpYmxlXCIsXG4gICAgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogXCJ2aXNpYmxlXCIsXG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiZmxpcEluWVwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImZsaXBJbllcIlxuICB9LFxuICBcImZsaXBPdXRYXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbkR1cmF0aW9uXCI6IDAuNzUsXG4gICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiAwLjc1LFxuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImZsaXBPdXRYXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmxpcE91dFhcIixcbiAgICBcIldlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eVwiOiBcInZpc2libGVcIixcbiAgICBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiBcInZpc2libGVcIlxuICB9LFxuICBcImZsaXBPdXRZXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbkR1cmF0aW9uXCI6IDAuNzUsXG4gICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiAwLjc1LFxuICAgIFwiV2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5XCI6IFwidmlzaWJsZVwiLFxuICAgIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IFwidmlzaWJsZVwiLFxuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImZsaXBPdXRZXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiZmxpcE91dFlcIlxuICB9LFxuICBcImxpZ2h0U3BlZWRJblwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwibGlnaHRTcGVlZEluXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwibGlnaHRTcGVlZEluXCIsXG4gICAgXCJXZWJraXRBbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2Utb3V0XCIsXG4gICAgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2Utb3V0XCJcbiAgfSxcbiAgXCJsaWdodFNwZWVkT3V0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJsaWdodFNwZWVkT3V0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwibGlnaHRTcGVlZE91dFwiLFxuICAgIFwiV2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlLWluXCIsXG4gICAgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2UtaW5cIlxuICB9LFxuICBcInJvdGF0ZUluXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVJblwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZUluXCJcbiAgfSxcbiAgXCJyb3RhdGVJbkRvd25MZWZ0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVJbkRvd25MZWZ0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwicm90YXRlSW5Eb3duTGVmdFwiXG4gIH0sXG4gIFwicm90YXRlSW5Eb3duUmlnaHRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZUluRG93blJpZ2h0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwicm90YXRlSW5Eb3duUmlnaHRcIlxuICB9LFxuICBcInJvdGF0ZUluVXBMZWZ0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVJblVwTGVmdFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZUluVXBMZWZ0XCJcbiAgfSxcbiAgXCJyb3RhdGVJblVwUmlnaHRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZUluVXBSaWdodFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZUluVXBSaWdodFwiXG4gIH0sXG4gIFwicm90YXRlT3V0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVPdXRcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVPdXRcIlxuICB9LFxuICBcInJvdGF0ZU91dERvd25MZWZ0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVPdXREb3duTGVmdFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZU91dERvd25MZWZ0XCJcbiAgfSxcbiAgXCJyb3RhdGVPdXREb3duUmlnaHRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZU91dERvd25SaWdodFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZU91dERvd25SaWdodFwiXG4gIH0sXG4gIFwicm90YXRlT3V0VXBMZWZ0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVPdXRVcExlZnRcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVPdXRVcExlZnRcIlxuICB9LFxuICBcInJvdGF0ZU91dFVwUmlnaHRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZU91dFVwUmlnaHRcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVPdXRVcFJpZ2h0XCJcbiAgfSxcbiAgXCJoaW5nZVwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25EdXJhdGlvblwiOiAyLFxuICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogMixcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJoaW5nZVwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImhpbmdlXCJcbiAgfSxcbiAgXCJqYWNrSW5UaGVCb3hcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcImphY2tJblRoZUJveFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImphY2tJblRoZUJveFwiXG4gIH0sXG4gIFwicm9sbEluXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJyb2xsSW5cIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJyb2xsSW5cIlxuICB9LFxuICBcInJvbGxPdXRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInJvbGxPdXRcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJyb2xsT3V0XCJcbiAgfSxcbiAgXCJ6b29tSW5cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInpvb21JblwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInpvb21JblwiXG4gIH0sXG4gIFwiem9vbUluRG93blwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiem9vbUluRG93blwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInpvb21JbkRvd25cIlxuICB9LFxuICBcInpvb21JbkxlZnRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInpvb21JbkxlZnRcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJ6b29tSW5MZWZ0XCJcbiAgfSxcbiAgXCJ6b29tSW5SaWdodFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiem9vbUluUmlnaHRcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJ6b29tSW5SaWdodFwiXG4gIH0sXG4gIFwiem9vbUluVXBcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInpvb21JblVwXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiem9vbUluVXBcIlxuICB9LFxuICBcInpvb21PdXRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInpvb21PdXRcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJ6b29tT3V0XCJcbiAgfSxcbiAgXCJ6b29tT3V0RG93blwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiem9vbU91dERvd25cIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJ6b29tT3V0RG93blwiXG4gIH0sXG4gIFwiem9vbU91dExlZnRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInpvb21PdXRMZWZ0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiem9vbU91dExlZnRcIlxuICB9LFxuICBcInpvb21PdXRSaWdodFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwiem9vbU91dFJpZ2h0XCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiem9vbU91dFJpZ2h0XCJcbiAgfSxcbiAgXCJ6b29tT3V0VXBcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInpvb21PdXRVcFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInpvb21PdXRVcFwiXG4gIH0sXG4gIFwic2xpZGVJbkRvd25cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlSW5Eb3duXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwic2xpZGVJbkRvd25cIlxuICB9LFxuICBcInNsaWRlSW5MZWZ0XCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJzbGlkZUluTGVmdFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlSW5MZWZ0XCJcbiAgfSxcbiAgXCJzbGlkZUluUmlnaHRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlSW5SaWdodFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlSW5SaWdodFwiXG4gIH0sXG4gIFwic2xpZGVJblVwXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJzbGlkZUluVXBcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJzbGlkZUluVXBcIlxuICB9LFxuICBcInNsaWRlT3V0RG93blwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwic2xpZGVPdXREb3duXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwic2xpZGVPdXREb3duXCJcbiAgfSxcbiAgXCJzbGlkZU91dExlZnRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlT3V0TGVmdFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlT3V0TGVmdFwiXG4gIH0sXG4gIFwic2xpZGVPdXRSaWdodFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwic2xpZGVPdXRSaWdodFwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlT3V0UmlnaHRcIlxuICB9LFxuICBcInNsaWRlT3V0VXBcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlT3V0VXBcIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJzbGlkZU91dFVwXCJcbiAgfSxcbiAgXCJhbmltYXRlZFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25EdXJhdGlvblwiOiAxLFxuICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogMSxcbiAgICBcIldlYmtpdEFuaW1hdGlvbkZpbGxNb2RlXCI6IFwiYm90aFwiLFxuICAgIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogXCJib3RoXCJcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGV4dC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1OTY3YTJjJm1wVHlwZT1wYWdlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGV4dC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RleHQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjI1YzI0NDcyXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9wYWdlcy90ZXh0L3RleHQubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC0wIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0wIS4vdGV4dC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1OTY3YTJjJm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ0YXJCYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGFiQmFyaW5mbzogX3ZtLnRhYkJhcmluZm8sIHRhYkluZGV4OiBfdm0udGFiSW5kZXggfSxcbiAgICAgICAgICAgIG9uOiB7IGNoYW5nSW5kZXg6IF92bS5oYW5kbGVDaGFuZ2UgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktdGFiLWJhclwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInN3aXBlclwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzd2lwZXItYm94XCJdLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uc3dpcEhlaWdodCArIFwicHhcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY3VycmVudDogX3ZtLnRhYkluZGV4IH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5jaGFuZ2VTd2lwZSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm5ld3NsaXN0LCBmdW5jdGlvbihpdGVtMSwgaW5kZXgxKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3dpcGVyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4MSwgc3RhdGljQ2xhc3M6IFtcInN3aXBlci1pdGVtXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImxpc3RcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsdG9sb3dlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25SZWZsYXNoKGluZGV4MSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0xLmxpc3QubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbTEubGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbmRleC1saXN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4MTogaW5kZXgxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1czogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkZvdWNzKGluZGV4MSwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFubDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNoYW5sKGluZGV4MSwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGluZ0NhaTogX3ZtLmRpbmdjYWlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibG9hZC1tb3JlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByZWZsYXNodGV4dDogX3ZtLnJlZmxhc2h0ZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtfYyhcIm5vLXRoaW5nXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTAhLi90ZXh0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTAhLi90ZXh0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDx0YXJCYXIgXHJcblx0XHQ6dGFiQmFyaW5mbz1cInRhYkJhcmluZm9cIiBcclxuXHRcdDp0YWJJbmRleD1cInRhYkluZGV4XCJcclxuXHRcdEBjaGFuZ0luZGV4PVwiaGFuZGxlQ2hhbmdlXCI+XHJcblx0XHQ8L3RhckJhcj5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktdGFiLWJhclwiPlxyXG5cdFx0XHQ8c3dpcGVyICBcclxuXHRcdFx0Y2xhc3M9XCJzd2lwZXItYm94XCIgXHJcblx0XHRcdDpjdXJyZW50PVwidGFiSW5kZXhcIiBcclxuXHRcdFx0OnN0eWxlPVwie2hlaWdodDpzd2lwSGVpZ2h0KydweCd9XCJcclxuXHRcdFx0QGNoYW5nZT1cImNoYW5nZVN3aXBlXCI+XHJcblx0XHRcdFx0PHN3aXBlci1pdGVtIGNsYXNzPVwic3dpcGVyLWl0ZW1cIiB2LWZvcj1cIihpdGVtMSxpbmRleDEpIGluIG5ld3NsaXN0XCIgOmtleT1cImluZGV4MVwiPlxyXG5cdFx0XHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIGNsYXNzPVwibGlzdFwiIEBzY3JvbGx0b2xvd2VyPVwib25SZWZsYXNoKGluZGV4MSlcIj5cclxuXHRcdFx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJpdGVtMS5saXN0Lmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDliJfooajmlbDmja4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGl0ZW0xLmxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbmRleC1saXN0IDppdGVtPVwiaXRlbVwiIDppbmRleD1cImluZGV4XCIgQG9uLWZvY3VzPVwib25Gb3VjcyhpbmRleDEsaW5kZXgpXCIgQG9uLWNoYW5sPVwib25DaGFubChpbmRleDEsaW5kZXgpXCIgQGRpbmctY2FpPVwiZGluZ2NhaVwiIDppbmRleDE9XCJpbmRleDFcIj48L2luZGV4LWxpc3Q+XHJcblx0XHRcdFx0XHRcdFx0PC9ibG9jaz4gXHJcblx0XHRcdFx0XHRcdFx0PCEtLSDkuIrmi4nliLfmlrAgLS0+XHJcblx0XHRcdFx0XHRcdFx0PGxvYWQtbW9yZSA6cmVmbGFzaHRleHQ9XCJyZWZsYXNodGV4dFwiPjwvbG9hZC1tb3JlPlxyXG5cdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5peg5YaF5a655Yy6IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxuby10aGluZz48L25vLXRoaW5nPlxyXG5cdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0XHQ8L3N3aXBlcj5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGluZGV4TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luZGV4L2luZGV4LWxpc3QudnVlJ1xyXG5cdGltcG9ydCB0YXJCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbmRleC91bmktdGFiLWJhci52dWUnXHJcblx0aW1wb3J0IGxvYWRNb3JlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2xvYWQtbW9yZS52dWUnXHJcblx0aW1wb3J0IG5vVGhpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vbm8tdGhpbmcudnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6e1xyXG5cdFx0XHRpbmRleExpc3QsXHJcblx0XHRcdHRhckJhcixcclxuXHRcdFx0bG9hZE1vcmUsXHJcblx0XHRcdG5vVGhpbmdcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJlZmxhc2h0ZXh0Olwi5LiK5ouJ5Yqg6L295pu05aSaXCIsXHJcblx0XHRcdFx0c3dpcEhlaWdodCA6IDgwMCxcclxuXHRcdFx0XHR0YWJJbmRleCA6MCxcclxuXHRcdFx0XHR0YWJCYXJpbmZvIDogW1xyXG5cdFx0XHRcdFx0e25hbWUgOiBcIuWFs+azqFwiLGlkIDogXCJndWFuemh1XCJ9LFxyXG5cdFx0XHRcdFx0e25hbWUgOiBcIuaOqOiNkFwiLGlkIDogXCJ0dWlqaWFuXCJ9LFxyXG5cdFx0XHRcdFx0e25hbWUgOiBcIueDreeCuVwiLGlkIDogXCJyZWRpYW5cIn0sXHJcblx0XHRcdFx0XHR7bmFtZSA6IFwi6LSi57uPXCIsaWQgOiBcImNhaWppbmdcIn0sXHJcblx0XHRcdFx0XHR7bmFtZSA6IFwi5aix5LmQXCIsaWQgOiBcInl1bGVcIn0sXHJcblx0XHRcdFx0XHR7bmFtZSA6IFwi5L2T6IKyXCIsaWQgOiBcInRpeXVcIn0sXHJcblx0XHRcdFx0XHR7bmFtZSA6IFwi5Yab5LqLXCIsaWQgOiBcImp1bnNoaVwifSxcclxuXHRcdFx0XHRcdHtuYW1lIDogXCLmnKzlnLBcIixpZCA6IFwiYmVuZGlcIn0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRuZXdzbGlzdCA6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGlzdCA6IFtcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogZmFsc2UsIC8v5piv5ZCm5bey5YWz5rOo55qE5Lq677yMMOihqOekuuS4jeaYr++8jDHooajnpLrmmK9cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlIDogXCLmrKLov47mnaXliLDlvrfojrHogZTnm5/vvIHvvIHvvIFcIiwgIC8vIOeUqOaIt+WPkeihqOivtOivtOeahOagh+mimFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZSA6IFwiaW1nXCIgLCAvLyDlj5HooajnmoTmmK/lhoXlrrnnsbvlnovvvIwnaW1nJ+S4uuWbvueJhywndGV4dCfkuLrmlofmnKwsJ3ZpZGVvJ+S4uuinhumikVxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAwICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogZmFsc2UsIC8v5piv5ZCm5bey5YWz5rOo55qE5Lq677yMMOihqOekuuS4jeaYr++8jDHooajnpLrmmK9cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlIDogXCLmrKLov47mnaXliLDlvrfojrHogZTnm5/vvIHvvIHvvIFcIiwgIC8vIOeUqOaIt+WPkeihqOivtOivtOeahOagh+mimFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZSA6IFwiaW1nXCIgLCAvLyDlj5HooajnmoTmmK/lhoXlrrnnsbvlnovvvIwnaW1nJ+S4uuWbvueJhywndGV4dCfkuLrmlofmnKwsJ3ZpZGVvJ+S4uuinhumikVxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAwICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogZmFsc2UsIC8v5piv5ZCm5bey5YWz5rOo55qE5Lq677yMMOihqOekuuS4jeaYr++8jDHooajnpLrmmK9cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlIDogXCLmrKLov47mnaXliLDlvrfojrHogZTnm5/vvIHvvIHvvIFcIiwgIC8vIOeUqOaIt+WPkeihqOivtOivtOeahOagh+mimFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZSA6IFwiaW1nXCIgLCAvLyDlj5HooajnmoTmmK/lhoXlrrnnsbvlnovvvIwnaW1nJ+S4uuWbvueJhywndGV4dCfkuLrmlofmnKwsJ3ZpZGVvJ+S4uuinhumikVxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAwICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogZmFsc2UsIC8v5piv5ZCm5bey5YWz5rOo55qE5Lq677yMMOihqOekuuS4jeaYr++8jDHooajnpLrmmK9cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlIDogXCLmrKLov47mnaXliLDlvrfojrHogZTnm5/vvIHvvIHvvIFcIiwgIC8vIOeUqOaIt+WPkeihqOivtOivtOeahOagh+mimFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZSA6IFwiaW1nXCIgLCAvLyDlj5HooajnmoTmmK/lhoXlrrnnsbvlnovvvIwnaW1nJ+S4uuWbvueJhywndGV4dCfkuLrmlofmnKwsJ3ZpZGVvJ+S4uuinhumikVxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAwICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogdHJ1ZSwgLy/mmK/lkKblt7LlhbPms6jnmoTkurrvvIww6KGo56S65LiN5piv77yMMeihqOekuuaYr1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUgOiBcIuasoui/juadpeWIsOW+t+iOseiBlOebn++8ge+8ge+8gVwiLCAgLy8g55So5oi35Y+R6KGo6K+06K+055qE5qCH6aKYXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlIDogXCJ2aWRlb1wiICwgLy8g5Y+R6KGo55qE5piv5YaF5a6557G75Z6L77yMJ2ltZyfkuLrlm77niYcsJ3RleHQn5Li65paH5pysLCd2aWRlbyfkuLrop4bpopFcclxuXHRcdFx0XHRcdFx0XHRcdHZpZGVvaW5mbyA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGltZSA6IFwiMjo0N1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRudW0gOiBcIjMwd1wiXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAxICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogZmFsc2UsIC8v5piv5ZCm5bey5YWz5rOo55qE5Lq677yMMOihqOekuuS4jeaYr++8jDHooajnpLrmmK9cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlIDogXCLmrKLov47mnaXliLDlvrfojrHogZTnm5/vvIHvvIHvvIFcIiwgIC8vIOeUqOaIt+WPkeihqOivtOivtOeahOagh+mimFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZSA6IFwiaW1nXCIgLCAvLyDlj5HooajnmoTmmK/lhoXlrrnnsbvlnovvvIwnaW1nJ+S4uuWbvueJhywndGV4dCfkuLrmlofmnKwsJ3ZpZGVvJ+S4uuinhumikVxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAyICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsaXN0IDogW1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHVzZXJwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzEuanBnXCIsIC8v55So5oi35aS05YOPdXJsXHJcblx0XHRcdFx0XHRcdFx0XHR1c2VybmFtZSA6IFwi5oiR5Y+I5LiN5pivdXppXCIsIC8v55So5oi35ZCNXHJcblx0XHRcdFx0XHRcdFx0XHRpc2d1YW56aHUgOiB0cnVlLCAvL+aYr+WQpuW3suWFs+azqOeahOS6uu+8jDDooajnpLrkuI3mmK/vvIwx6KGo56S65pivXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZSA6IFwi5qyi6L+O5p2l5Yiw5b636I6x6IGU55uf77yB77yB77yBXCIsICAvLyDnlKjmiLflj5Hooajor7Tor7TnmoTmoIfpophcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGUgOiBcInZpZGVvXCIgLCAvLyDlj5HooajnmoTmmK/lhoXlrrnnsbvlnovvvIwnaW1nJ+S4uuWbvueJhywndGV4dCfkuLrmlofmnKwsJ3ZpZGVvJ+S4uuinhumikVxyXG5cdFx0XHRcdFx0XHRcdFx0dmlkZW9pbmZvIDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aW1lIDogXCIyOjQ3XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG51bSA6IFwiMzB3XCJcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZXBpYyA6IFwiLi4vLi4vc3RhdGljL25vdGVwaWMvMi5qcGdcIiwgLy8g5Y+R6KGo55qE5Zu+54mHdXJsXHJcblx0XHRcdFx0XHRcdFx0XHRpbmZvYmFyIDogeyAgIC8v6K+06K+05bqV6YOo5L+h5oGv5a+56LGhXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzZXhwcmVzcyA6IDEgLC8v5piv5ZCm54K56LWe5oiW6ICF6LipLDDooajnpLrmnKrmk43kvZzvvIwx6KGo56S654K56LWe77yMMuihqOekuui4qVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR6YW5udW0gOiAxMCAsIC8v54K56LWe5pWw6YePXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhaW51bSA6IDEwIC8vIOi4qeeahOaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbW1lbnRudW0gOiA5OTksXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBvc3RudW0gOiA5OTlcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHVzZXJwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzEuanBnXCIsIC8v55So5oi35aS05YOPdXJsXHJcblx0XHRcdFx0XHRcdFx0XHR1c2VybmFtZSA6IFwi5oiR5Y+I5LiN5pivdXppXCIsIC8v55So5oi35ZCNXHJcblx0XHRcdFx0XHRcdFx0XHRpc2d1YW56aHUgOiBmYWxzZSwgLy/mmK/lkKblt7LlhbPms6jnmoTkurrvvIww6KGo56S65LiN5piv77yMMeihqOekuuaYr1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUgOiBcIuasoui/juadpeWIsOW+t+iOseiBlOebn++8ge+8ge+8gVwiLCAgLy8g55So5oi35Y+R6KGo6K+06K+055qE5qCH6aKYXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlIDogXCJpbWdcIiAsIC8vIOWPkeihqOeahOaYr+WGheWuueexu+Wei++8jCdpbWcn5Li65Zu+54mHLCd0ZXh0J+S4uuaWh+acrCwndmlkZW8n5Li66KeG6aKRXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZXBpYyA6IFwiLi4vLi4vc3RhdGljL25vdGVwaWMvMi5qcGdcIiwgLy8g5Y+R6KGo55qE5Zu+54mHdXJsXHJcblx0XHRcdFx0XHRcdFx0XHRpbmZvYmFyIDogeyAgIC8v6K+06K+05bqV6YOo5L+h5oGv5a+56LGhXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzZXhwcmVzcyA6IDIgLC8v5piv5ZCm54K56LWe5oiW6ICF6LipLDDooajnpLrmnKrmk43kvZzvvIwx6KGo56S654K56LWe77yMMuihqOekuui4qVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR6YW5udW0gOiAxMCAsIC8v54K56LWe5pWw6YePXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhaW51bSA6IDEwIC8vIOi4qeeahOaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbW1lbnRudW0gOiA5OTksXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBvc3RudW0gOiA5OTlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxpc3QgOiBbXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcnBpYyA6IFwiLi4vLi4vc3RhdGljL25vdGVwaWMvMS5qcGdcIiwgLy/nlKjmiLflpLTlg491cmxcclxuXHRcdFx0XHRcdFx0XHRcdHVzZXJuYW1lIDogXCLmiJHlj4jkuI3mmK91emlcIiwgLy/nlKjmiLflkI1cclxuXHRcdFx0XHRcdFx0XHRcdGlzZ3VhbnpodSA6IGZhbHNlLCAvL+aYr+WQpuW3suWFs+azqOeahOS6uu+8jDDooajnpLrkuI3mmK/vvIwx6KGo56S65pivXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZSA6IFwi5qyi6L+O5p2l5Yiw5b636I6x6IGU55uf77yB77yB77yBXCIsICAvLyDnlKjmiLflj5Hooajor7Tor7TnmoTmoIfpophcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGUgOiBcImltZ1wiICwgLy8g5Y+R6KGo55qE5piv5YaF5a6557G75Z6L77yMJ2ltZyfkuLrlm77niYcsJ3RleHQn5Li65paH5pysLCd2aWRlbyfkuLrop4bpopFcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlcGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8yLmpwZ1wiLCAvLyDlj5HooajnmoTlm77niYd1cmxcclxuXHRcdFx0XHRcdFx0XHRcdGluZm9iYXIgOiB7ICAgLy/or7Tor7TlupXpg6jkv6Hmga/lr7nosaFcclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNleHByZXNzIDogMCAsLy/mmK/lkKbngrnotZ7miJbogIXouKksMOihqOekuuacquaTjeS9nO+8jDHooajnpLrngrnotZ7vvIwy6KGo56S66LipXHJcblx0XHRcdFx0XHRcdFx0XHRcdHphbm51bSA6IDEwICwgLy/ngrnotZ7mlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FpbnVtIDogMTAgLy8g6Lip55qE5pWw6YePXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWVudG51bSA6IDk5OSxcclxuXHRcdFx0XHRcdFx0XHRcdHJlcG9zdG51bSA6IDk5OVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcnBpYyA6IFwiLi4vLi4vc3RhdGljL25vdGVwaWMvMS5qcGdcIiwgLy/nlKjmiLflpLTlg491cmxcclxuXHRcdFx0XHRcdFx0XHRcdHVzZXJuYW1lIDogXCLmiJHlj4jkuI3mmK91emlcIiwgLy/nlKjmiLflkI1cclxuXHRcdFx0XHRcdFx0XHRcdGlzZ3VhbnpodSA6IHRydWUsIC8v5piv5ZCm5bey5YWz5rOo55qE5Lq677yMMOihqOekuuS4jeaYr++8jDHooajnpLrmmK9cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlIDogXCLmrKLov47mnaXliLDlvrfojrHogZTnm5/vvIHvvIHvvIFcIiwgIC8vIOeUqOaIt+WPkeihqOivtOivtOeahOagh+mimFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZSA6IFwidmlkZW9cIiAsIC8vIOWPkeihqOeahOaYr+WGheWuueexu+Wei++8jCdpbWcn5Li65Zu+54mHLCd0ZXh0J+S4uuaWh+acrCwndmlkZW8n5Li66KeG6aKRXHJcblx0XHRcdFx0XHRcdFx0XHR2aWRlb2luZm8gOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpbWUgOiBcIjI6NDdcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0bnVtIDogXCIzMHdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlcGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8yLmpwZ1wiLCAvLyDlj5HooajnmoTlm77niYd1cmxcclxuXHRcdFx0XHRcdFx0XHRcdGluZm9iYXIgOiB7ICAgLy/or7Tor7TlupXpg6jkv6Hmga/lr7nosaFcclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNleHByZXNzIDogMSAsLy/mmK/lkKbngrnotZ7miJbogIXouKksMOihqOekuuacquaTjeS9nO+8jDHooajnpLrngrnotZ7vvIwy6KGo56S66LipXHJcblx0XHRcdFx0XHRcdFx0XHRcdHphbm51bSA6IDEwICwgLy/ngrnotZ7mlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FpbnVtIDogMTAgLy8g6Lip55qE5pWw6YePXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWVudG51bSA6IDk5OSxcclxuXHRcdFx0XHRcdFx0XHRcdHJlcG9zdG51bSA6IDk5OVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcnBpYyA6IFwiLi4vLi4vc3RhdGljL25vdGVwaWMvMS5qcGdcIiwgLy/nlKjmiLflpLTlg491cmxcclxuXHRcdFx0XHRcdFx0XHRcdHVzZXJuYW1lIDogXCLmiJHlj4jkuI3mmK91emlcIiwgLy/nlKjmiLflkI1cclxuXHRcdFx0XHRcdFx0XHRcdGlzZ3VhbnpodSA6IGZhbHNlLCAvL+aYr+WQpuW3suWFs+azqOeahOS6uu+8jDDooajnpLrkuI3mmK/vvIwx6KGo56S65pivXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZSA6IFwi5qyi6L+O5p2l5Yiw5b636I6x6IGU55uf77yB77yB77yBXCIsICAvLyDnlKjmiLflj5Hooajor7Tor7TnmoTmoIfpophcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGUgOiBcImltZ1wiICwgLy8g5Y+R6KGo55qE5piv5YaF5a6557G75Z6L77yMJ2ltZyfkuLrlm77niYcsJ3RleHQn5Li65paH5pysLCd2aWRlbyfkuLrop4bpopFcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlcGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8yLmpwZ1wiLCAvLyDlj5HooajnmoTlm77niYd1cmxcclxuXHRcdFx0XHRcdFx0XHRcdGluZm9iYXIgOiB7ICAgLy/or7Tor7TlupXpg6jkv6Hmga/lr7nosaFcclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNleHByZXNzIDogMiAsLy/mmK/lkKbngrnotZ7miJbogIXouKksMOihqOekuuacquaTjeS9nO+8jDHooajnpLrngrnotZ7vvIwy6KGo56S66LipXHJcblx0XHRcdFx0XHRcdFx0XHRcdHphbm51bSA6IDEwICwgLy/ngrnotZ7mlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FpbnVtIDogMTAgLy8g6Lip55qE5pWw6YePXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWVudG51bSA6IDk5OSxcclxuXHRcdFx0XHRcdFx0XHRcdHJlcG9zdG51bSA6IDk5OVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGlzdCA6IFtcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogZmFsc2UsIC8v5piv5ZCm5bey5YWz5rOo55qE5Lq677yMMOihqOekuuS4jeaYr++8jDHooajnpLrmmK9cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlIDogXCLmrKLov47mnaXliLDlvrfojrHogZTnm5/vvIHvvIHvvIFcIiwgIC8vIOeUqOaIt+WPkeihqOivtOivtOeahOagh+mimFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZSA6IFwiaW1nXCIgLCAvLyDlj5HooajnmoTmmK/lhoXlrrnnsbvlnovvvIwnaW1nJ+S4uuWbvueJhywndGV4dCfkuLrmlofmnKwsJ3ZpZGVvJ+S4uuinhumikVxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAwICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogdHJ1ZSwgLy/mmK/lkKblt7LlhbPms6jnmoTkurrvvIww6KGo56S65LiN5piv77yMMeihqOekuuaYr1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUgOiBcIuasoui/juadpeWIsOW+t+iOseiBlOebn++8ge+8ge+8gVwiLCAgLy8g55So5oi35Y+R6KGo6K+06K+055qE5qCH6aKYXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlIDogXCJ2aWRlb1wiICwgLy8g5Y+R6KGo55qE5piv5YaF5a6557G75Z6L77yMJ2ltZyfkuLrlm77niYcsJ3RleHQn5Li65paH5pysLCd2aWRlbyfkuLrop4bpopFcclxuXHRcdFx0XHRcdFx0XHRcdHZpZGVvaW5mbyA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGltZSA6IFwiMjo0N1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRudW0gOiBcIjMwd1wiXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAxICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogZmFsc2UsIC8v5piv5ZCm5bey5YWz5rOo55qE5Lq677yMMOihqOekuuS4jeaYr++8jDHooajnpLrmmK9cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlIDogXCLmrKLov47mnaXliLDlvrfojrHogZTnm5/vvIHvvIHvvIFcIiwgIC8vIOeUqOaIt+WPkeihqOivtOivtOeahOagh+mimFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZSA6IFwiaW1nXCIgLCAvLyDlj5HooajnmoTmmK/lhoXlrrnnsbvlnovvvIwnaW1nJ+S4uuWbvueJhywndGV4dCfkuLrmlofmnKwsJ3ZpZGVvJ+S4uuinhumikVxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAyICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsaXN0OltdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eyBsaXN0IDogW10gfSxcclxuXHRcdFx0XHRcdHsgbGlzdCA6IFtdIH0sXHJcblx0XHRcdFx0XHR7IGxpc3QgOiBbXSB9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdCAgICBzdWNjZXNzOiAocmVzKT0+IHtcclxuXHRcdFx0ICAgICAgICBsZXQgaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodCAtIHVuaS51cHgycHgoMTAwKTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGhlaWdodClcclxuXHRcdFx0XHRcdHRoaXMuc3dpcEhlaWdodCA9IGhlaWdodDtcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvL+ebkeWQrOWOn+eUn+WvvOiIquagj+aMiemSrueCueWHu+S6i+S7tlxyXG5cdFx0XHRvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoZSl7XHJcblx0XHRcdFx0aWYoZS5pbmRleCA9PSAxKXtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOlwiLi4vcHVibGlzaC9wdWJsaXNoXCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+ebkeWQrOWOn+eUn+agh+mimOagj+aQnOe0ouahhueCueWHu+S6i+S7tlxyXG5cdFx0XHRvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQoKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi9zZWFyY2gvc2VhcmNoJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGhhbmRsZUNoYW5nZShpbmRleCl7XHJcblx0XHRcdFx0dGhpcy50YWJJbmRleCA9IGluZGV4O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VTd2lwZShlKXtcclxuXHRcdFx0XHR0aGlzLnRhYkluZGV4ID0gZS5kZXRhaWwuY3VycmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblJlZmxhc2goaW5kZXgxKXtcclxuXHRcdFx0XHRpZih0aGlzLnJlZmxhc2h0ZXh0ICE9PSBcIuS4iuaLieWKoOi9veabtOWkmlwiKXtyZXR1cm4gO31cclxuXHRcdFx0XHR0aGlzLnJlZmxhc2h0ZXh0ID0gXCLliqDovb3kuK1cIjtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRsZXQgbmV3eGlueGkgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VycGljIDogXCIuLi8uLi9zdGF0aWMvbm90ZXBpYy8xLmpwZ1wiLCAvL+eUqOaIt+WktOWDj3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgOiBcIuaIkeWPiOS4jeaYr3V6aVwiLCAvL+eUqOaIt+WQjVxyXG5cdFx0XHRcdFx0XHRcdFx0aXNndWFuemh1IDogZmFsc2UsIC8v5piv5ZCm5bey5YWz5rOo55qE5Lq677yMMOihqOekuuS4jeaYr++8jDHooajnpLrmmK9cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlIDogXCLmrKLov47mnaXliLDlvrfojrHogZTnm5/vvIHvvIHvvIFcIiwgIC8vIOeUqOaIt+WPkeihqOivtOivtOeahOagh+mimFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZSA6IFwiaW1nXCIgLCAvLyDlj5HooajnmoTmmK/lhoXlrrnnsbvlnovvvIwnaW1nJ+S4uuWbvueJhywndGV4dCfkuLrmlofmnKwsJ3ZpZGVvJ+S4uuinhumikVxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVwaWMgOiBcIi4uLy4uL3N0YXRpYy9ub3RlcGljLzIuanBnXCIsIC8vIOWPkeihqOeahOWbvueJh3VybFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5mb2JhciA6IHsgICAvL+ivtOivtOW6lemDqOS/oeaBr+WvueixoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc2V4cHJlc3MgOiAwICwvL+aYr+WQpueCuei1nuaIluiAhei4qSww6KGo56S65pyq5pON5L2c77yMMeihqOekuueCuei1nu+8jDLooajnpLrouKlcclxuXHRcdFx0XHRcdFx0XHRcdFx0emFubnVtIDogMTAgLCAvL+eCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWludW0gOiAxMCAvLyDouKnnmoTmlbDph49cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tZW50bnVtIDogOTk5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3N0bnVtIDogOTk5XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5ld3NsaXN0W2luZGV4MV0ubGlzdC5wdXNoKG5ld3hpbnhpKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVmbGFzaHRleHQgPSBcIuS4iuaLieWKoOi9veabtOWkmlwiO1xyXG5cdFx0XHRcdH0sMTUwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOWFs+azqOaMiemSruS6i+S7tlxyXG5cdFx0XHRvbkZvdWNzKGluZGV4MSxpbmRleCl7XHJcblx0XHRcdFx0dGhpcy5uZXdzbGlzdFtpbmRleDFdLmxpc3RbaW5kZXhdLmlzZ3VhbnpodSA9IHRydWU7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTpcIuWFs+azqOaIkOWKnyFcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlj5bmtojlhbPms6jmjInpkq5cclxuXHRcdFx0b25DaGFubChpbmRleDEsaW5kZXgpe1xyXG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdCAgICB0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0ICAgIGNvbnRlbnQ6ICfnoa7lrprlj5bmtojlhbPms6jvvJ8nLFxyXG5cdFx0XHRcdCAgICBjb25maXJtVGV4dDpcIuaYr1wiLFxyXG5cdFx0XHRcdCAgICBjYW5jZWxUZXh0Olwi5ZCmXCIsXHJcblx0XHRcdFx0ICAgIHN1Y2Nlc3M6IChyZXMpPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5uZXdzbGlzdFtpbmRleDFdLmxpc3RbaW5kZXhdLmlzZ3VhbnpodSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6XCLlj5bmtojmiJDlip8hXCJcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkaW5nY2FpKGluZGV4MSxpbmRleCx0eXBlKXtcclxuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpe1xyXG5cdFx0XHRcdFx0Y2FzZSAxOiBcclxuXHRcdFx0XHRcdGlmKHRoaXMubmV3c2xpc3RbaW5kZXgxXS5saXN0W2luZGV4XS5pbmZvYmFyLmlzZXhwcmVzcyA9PSAxKXtyZXR1cm4gO31cclxuXHRcdFx0XHRcdHRoaXMubmV3c2xpc3RbaW5kZXgxXS5saXN0W2luZGV4XS5pbmZvYmFyLnphbm51bSsrO1xyXG5cdFx0XHRcdFx0aWYodGhpcy5uZXdzbGlzdFtpbmRleDFdLmxpc3RbaW5kZXhdLmluZm9iYXIuaXNleHByZXNzID09IDIpXHJcblx0XHRcdFx0XHR0aGlzLm5ld3NsaXN0W2luZGV4MV0ubGlzdFtpbmRleF0uaW5mb2Jhci5jYWludW0tLTtcclxuXHRcdFx0XHRcdHRoaXMubmV3c2xpc3RbaW5kZXgxXS5saXN0W2luZGV4XS5pbmZvYmFyLmlzZXhwcmVzcyA9MTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRpZih0aGlzLm5ld3NsaXN0W2luZGV4MV0ubGlzdFtpbmRleF0uaW5mb2Jhci5pc2V4cHJlc3MgPT0gMil7cmV0dXJuIDt9XHJcblx0XHRcdFx0XHR0aGlzLm5ld3NsaXN0W2luZGV4MV0ubGlzdFtpbmRleF0uaW5mb2Jhci5jYWludW0rKztcclxuXHRcdFx0XHRcdGlmKHRoaXMubmV3c2xpc3RbaW5kZXgxXS5saXN0W2luZGV4XS5pbmZvYmFyLmlzZXhwcmVzcyA9PSAxKVxyXG5cdFx0XHRcdFx0dGhpcy5uZXdzbGlzdFtpbmRleDFdLmxpc3RbaW5kZXhdLmluZm9iYXIuemFubnVtLS07XHJcblx0XHRcdFx0XHR0aGlzLm5ld3NsaXN0W2luZGV4MV0ubGlzdFtpbmRleF0uaW5mb2Jhci5pc2V4cHJlc3MgPTI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMjNhZGFkJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaW5kZXgtbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MTIzYWRhZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUxMjNhZGFkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjUxMjNhZGFkXCIsXG4gIFwiODIwYzc1MWNcIlxuICBcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXgtbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5yZWN5Y2xlLmpzIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC0wIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMjNhZGFkJnNjb3BlZD10cnVlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJpbmRleC1saXN0XCIsIFwiYW5pbWF0ZWRcIiwgXCJib3VuY2VJbkxlZnRcIl0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImluZGV4LWxpc3QxXCIsIFwidS1qdXN0aWZ5LWNvbnRlbnRiXCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widS1hbGlnbi1pdGVtc1wiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6IF92bS5pdGVtLnVzZXJwaWMsXG4gICAgICAgICAgICAgICAgICBtb2RlOiBcIndpZHRoRml4XCIsXG4gICAgICAgICAgICAgICAgICBsYXp5TG9hZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnVzZXJuYW1lKSArIFwiXFxuXFx0XFx0XCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICAhX3ZtLml0ZW0uaXNndWFuemh1XG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widS1hbGlnbi1pdGVtc1wiXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25Gb2N1cyhfdm0uaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uXCIsIFwiaWNvbmZvbnRcIiwgXCJpY29ucGx1cy1saW5lXCJdXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCBbX3ZtLl92KFwi5YWz5rOoXFxuXFx0XFx0XFx0XCIpXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1LWFsaWduLWl0ZW1zXCJdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiwgZm9udFNpemU6IFwiMjB1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQ2hhbmwgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcInUtdGV4dFwiLCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx05Y+W5raI5YWz5rOoXFxuXFx0XFx0XFx0XCIpXSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiaW5kZXgtbGlzdDJcIl0sIG9uOiB7IGNsaWNrOiBfdm0uRGV0YWlscyB9IH0sIFtcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgW192bS5fdihcIlxcblxcdFxcdFwiICsgX3ZtLl9zKF92bS5pdGVtLnRpdGxlKSArIFwiXFxuXFx0XCIpXSlcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJpbmRleC1saXN0M1wiLCBcInUtanVzdGlmeS1jb250ZW50XCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uaXRlbS50aXRsZXBpYywgbW9kZTogXCJ3aWR0aEZpeFwiLCBsYXp5TG9hZDogdHJ1ZSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLml0ZW0udHlwZSA9PSBcInZpZGVvXCJcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBcImluZGV4LWxpc3QzLXBsYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvbmZvbnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uYm9mYW5nXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiaW5kZXgtbGlzdDMtcGxheW51bVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLml0ZW0udmlkZW9pbmZvLm51bSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCLmkq3mlL7ph48gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pdGVtLnZpZGVvaW5mby50aW1lKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJpbmRleC1saXN0NFwiLCBcInUtanVzdGlmeS1jb250ZW50YlwiXSB9LCBbXG4gICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1LWFsaWduLWl0ZW1zXCJdIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widS1hbGlnbi1pdGVtc1wiXSxcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uaXRlbS5pbmZvYmFyLmlzZXhwcmVzcyA9PSAxIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmRpbmdjYWkoMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJpY29uXCIsIFwiaWNvbmZvbnRcIiwgXCJpY29ueGlhb2xpYW5cIl0gfSksXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS5pdGVtLmluZm9iYXIuemFubnVtKSArIFwiXFxuXFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widS1hbGlnbi1pdGVtc1wiXSxcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uaXRlbS5pbmZvYmFyLmlzZXhwcmVzcyA9PSAyIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmRpbmdjYWkoMilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJpY29uXCIsIFwiaWNvbmZvbnRcIiwgXCJpY29ua3VsaWFuXCJdIH0pLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcIiArIF92bS5fcyhfdm0uaXRlbS5pbmZvYmFyLmNhaW51bSkgKyBcIlxcblxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1LWFsaWduLWl0ZW1zXCJdIH0sIFtcbiAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widS1hbGlnbi1pdGVtc1wiXSB9LCBbXG4gICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiaWNvblwiLCBcImljb25mb250XCIsIFwiaWNvbnBpbmdsdW5cIl0gfSksXG4gICAgICAgICAgICBfYyhcInUtdGV4dFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS5pdGVtLmNvbW1lbnRudW0pICsgXCJcXG5cXHRcXHRcXHRcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInUtYWxpZ24taXRlbXNcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImljb25cIiwgXCJpY29uZm9udFwiLCBcImljb256aHVhbmZhXCJdIH0pLFxuICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcIiArIF92bS5fcyhfdm0uaXRlbS5yZXBvc3RudW0pICsgXCJcXG5cXHRcXHRcXHRcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDwhLS0g5Zu+5paH5YiX6KGoIC0tPlxuXHQ8dmlldyBjbGFzcz1cImluZGV4LWxpc3QgYW5pbWF0ZWQgYm91bmNlSW5MZWZ0XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImluZGV4LWxpc3QxIHUtanVzdGlmeS1jb250ZW50YlwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInUtYWxpZ24taXRlbXNcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udXNlcnBpY1wiIG1vZGU9XCJ3aWR0aEZpeFwiIGxhenktbG9hZD48L2ltYWdlPnt7aXRlbS51c2VybmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHRlbXBsYXRlIHYtaWY9XCIhaXRlbS5pc2d1YW56aHVcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtYWxpZ24taXRlbXNcIiAgQHRhcD1cIm9uRm9jdXMoaW5kZXgpXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24gaWNvbmZvbnQgaWNvbnBsdXMtbGluZVwiPjwvdmlldz7lhbPms6hcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSB2LWVsc2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWFsaWduLWl0ZW1zXCIgc3R5bGU9XCJjb2xvcjogcmVkO2ZvbnQtc2l6ZTogMjB1cHg7XCIgQHRhcD1cIm9uQ2hhbmxcIj5cclxuXHRcdFx0XHRcdOWPlua2iOWFs+azqFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaW5kZXgtbGlzdDJcIiBAdGFwPVwiRGV0YWlsc1wiPlxyXG5cdFx0XHR7e2l0ZW0udGl0bGV9fVxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbmRleC1saXN0MyB1LWp1c3RpZnktY29udGVudFwiPlxyXG5cdFx0XHQ8IS0tIOWbvueJhyAtLT5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udGl0bGVwaWNcIiBtb2RlPVwid2lkdGhGaXhcIiBsYXp5LWxvYWQ+PC9pbWFnZT5cclxuXHRcdFx0PCEtLSDop4bpopEgLS0+XHJcblx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS50eXBlID09ICd2aWRlbydcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImluZGV4LWxpc3QzLXBsYXkgaWNvbiBpY29uZm9udCBpY29uYm9mYW5nXCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5kZXgtbGlzdDMtcGxheW51bVwiPnt7aXRlbS52aWRlb2luZm8ubnVtfX3mkq3mlL7ph48ge3tpdGVtLnZpZGVvaW5mby50aW1lfX08L3ZpZXc+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImluZGV4LWxpc3Q0IHUtanVzdGlmeS1jb250ZW50YlwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInUtYWxpZ24taXRlbXNcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtYWxpZ24taXRlbXMgXCIgOmNsYXNzPVwieydhY3RpdmUnOiBpdGVtLmluZm9iYXIuaXNleHByZXNzID09IDF9XCIgQHRhcD1cImRpbmdjYWkoMSlcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbiBpY29uZm9udCBpY29ueGlhb2xpYW5cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHR7e2l0ZW0uaW5mb2Jhci56YW5udW19fVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtYWxpZ24taXRlbXNcIiA6Y2xhc3M9XCJ7J2FjdGl2ZScgOiBpdGVtLmluZm9iYXIuaXNleHByZXNzID09IDJ9XCIgQHRhcD1cImRpbmdjYWkoMilcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbiBpY29uZm9udCBpY29ua3VsaWFuXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0e3tpdGVtLmluZm9iYXIuY2FpbnVtfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS1hbGlnbi1pdGVtc1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1hbGlnbi1pdGVtc1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uIGljb25mb250IGljb25waW5nbHVuXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0e3tpdGVtLmNvbW1lbnRudW19fVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtYWxpZ24taXRlbXNcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbiBpY29uZm9udCBpY29uemh1YW5mYVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdHt7aXRlbS5yZXBvc3RudW19fVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6e1xyXG5cdFx0XHRpdGVtIDogT2JqZWN0LFxyXG5cdFx0XHRpbmRleCA6IE51bWJlcixcclxuXHRcdFx0aW5kZXgxIDogTnVtYmVyXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpe1xyXG5cdFx0XHRyZXR1cm57XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0Ly8g6L+b5YWl6K+m5oOF6aG1XHJcblx0XHRcdERldGFpbHMoKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIui/m+WFpeivpuaDhemhtVwiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Lyog5YWz5rOo5oyJ6ZKu5pa55rOVICovXHJcblx0XHRcdG9uRm9jdXMoaW5kZXgxKXtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KFwib24tZm9jdXNcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWPlua2iOWFs+azqOaMiemSruaWueazlVxyXG5cdFx0XHRvbkNoYW5sKCl7XHJcblx0XHRcdFx0dGhpcy4kZW1pdChcIm9uLWNoYW5sXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpobblkozouKnkuovku7ZcclxuXHRcdFx0ZGluZ2NhaSh0eXBlKXtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KFwiZGluZy1jYWlcIix0aGlzLmluZGV4MSx0aGlzLmluZGV4LHR5cGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmluZGV4LWxpc3R7XHJcblx0cGFkZGluZzogMjB1cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDA7XHJcblx0Ym9yZGVyLWJvdHRvbToxdXB4IHNvbGlkICNFRUVFRUU7XHJcbn1cclxuLmluZGV4LWxpc3QxPnZpZXc6Zmlyc3QtY2hpbGR7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcbn1cclxuLmluZGV4LWxpc3QxPnZpZXc6Zmlyc3QtY2hpbGQ+aW1hZ2V7XHJcblx0d2lkdGg6IDkwdXB4O1xyXG5cdGhlaWdodDogOTB1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwdXB4O1xyXG5cdC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7ICovXHJcbn1cclxuLmluZGV4LWxpc3QxPnZpZXc6bGFzdC1jaGlsZHtcclxuXHRmb250LXNpemU6IDI1dXB4O1xyXG5cdGJhY2tncm91bmQ6ICNFRUVFRUU7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJ1cHg7XHJcblx0cGFkZGluZzogMCAxMHVweDtcclxuXHRoZWlnaHQ6IDYwdXB4O1xyXG5cdG1hcmdpbi10b3A6IDEwdXB4O1xyXG59XHJcbi5pbmRleC1saXN0MiwuaW5kZXgtbGlzdDN7XHJcblx0XHRwYWRkaW5nLXRvcDogMTB1cHg7XHJcbn1cclxuLmluZGV4LWxpc3Qze1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5kZXgtbGlzdDM+aW1hZ2V7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyLXJhZGl1czogMjB1cHg7XHJcbn1cclxuLmluZGV4LWxpc3QzLXBsYXl7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGNvbG9yOiAjRUVFRUVFO1xyXG5cdGZvbnQtc2l6ZTogOTB1cHg7XHJcbn1cclxuLmluZGV4LWxpc3QzLXBsYXludW17XHJcblx0YmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjgyKTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRib3JkZXItcmFkaXVzOiAxNXVweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiA0dXB4O1xyXG5cdHJpZ2h0OiA0dXB4O1xyXG5cdGZvbnQtc2l6ZTogMTF1cHg7XHJcblx0cGFkZGluZzogMCAxMHVweDtcclxufVxyXG4uaW5kZXgtbGlzdDQgdmlld3tcclxuXHRjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLmluZGV4LWxpc3Q0PnZpZXc+dmlld3tcclxuXHRtYXJnaW4tcmlnaHQ6IDEwdXB4O1xyXG59XHJcbi5pbmRleC1saXN0ND52aWV3PnZpZXc+dmlld3tcclxuXHRtYXJnaW4tcmlnaHQ6IDEwdXB4O1xyXG59XHJcbi5pbmRleC1saXN0NCAuYWN0aXZlLC5pbmRleC1saXN0NCAuYWN0aXZlPnZpZXd7XHJcblx0Y29sb3I6ICNGNUVBMTA7XHJcbn1cbjwvc3R5bGU+XG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xyXG4gIHZhciBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcclxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV1cclxuICB9XHJcblxyXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcclxuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcblxyXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2ID0gJy0tLUJFR0lOOkpTT04tLS0nICsgSlNPTi5zdHJpbmdpZnkodikgKyAnLS0tRU5EOkpTT04tLS0nXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHYgPT09IG51bGwpIHtcclxuICAgICAgICB2ID0gJy0tLU5VTEwtLS0nXHJcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxyXG5cclxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcclxuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZcclxuICB9KVxyXG4gIHZhciBtc2cgPSAnJ1xyXG5cclxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XHJcbiAgICB2YXIgbGFzdE1zZyA9IG1zZ3MucG9wKClcclxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxyXG5cclxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xyXG4gICAgICBtc2cgKz0gbGFzdE1zZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1zZyA9IG1zZ3NbMF1cclxuICB9XHJcblxyXG4gIHJldHVybiBtc2dcclxufVxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUxMjNhZGFkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUxMjNhZGFkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaW5kZXgtbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcnB4IHNvbGlkICNFRUVFRUVcIlxuICB9LFxuICBcImluZGV4LWxpc3QyXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwiaW5kZXgtbGlzdDNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJpbmRleC1saXN0My1wbGF5XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImNvbG9yXCI6IFwiI0VFRUVFRVwiLFxuICAgIFwiZm9udFNpemVcIjogXCI5MHJweFwiXG4gIH0sXG4gIFwiaW5kZXgtbGlzdDMtcGxheW51bVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwicmdiYSg1MSwgNTEsIDUxLCAwLjgyKVwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNXJweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IFwiNHJweFwiLFxuICAgIFwicmlnaHRcIjogXCI0cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjExcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH1cbn0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi91bmktdGFiLWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTljYTViOGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXRhYi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktdGFiLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoKSB7XG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS10YWItYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS10YWItYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjRmZjA5OWQ2XCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMv55SY5q2jL0Rlc2t0b3AvaGdi55qEdW5pLWFwcC9jb21wb25lbnRzL2luZGV4L3VuaS10YWItYmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LTAhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRhYi1iYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5Y2E1YjhjJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktdGFiLWJhclwiXSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInNjcm9sbC12aWV3XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zd2lwZXItdGFiXCJdLCBhdHRyczogeyBzY3JvbGxYOiBcInRydWVcIiB9IH0sXG4gICAgICAgIF92bS5fbChfdm0udGFiQmFyaW5mbywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJibG9ja1wiLCB7IGtleTogaXRlbS5pZCB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wic3dpcGVyLXRhYi1saXN0XCJdLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnRhYkluZGV4ID09IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNoYW5nZUluZGV4KGluZGV4KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKGl0ZW0ubmFtZSkgKyBcIlxcblxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJzd2lwZXItdGFiLWxpbmVcIl0gfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdGFiLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10YWItYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJ1bmktdGFiLWJhclwiID5cclxuXHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteD1cInRydWVcIiBjbGFzcz1cInVuaS1zd2lwZXItdGFiIFwiPlxyXG5cdFx0XHQ8YmxvY2sgdi1mb3I9XCIoaXRlbSAsaW5kZXgpIGluIHRhYkJhcmluZm9cIiA6a2V5PVwiaXRlbS5pZFwiPlxyXG5cdFx0XHRcdDx2aWV3XHJcblx0XHRcdFx0IGNsYXNzPVwic3dpcGVyLXRhYi1saXN0XCIgXHJcblx0XHRcdFx0IDpjbGFzcz1cInthY3RpdmUgOiB0YWJJbmRleCA9PSBpbmRleH1cIlxyXG5cdFx0XHRcdCBAdGFwPVwiY2hhbmdlSW5kZXgoaW5kZXgpXCI+XHJcblx0XHRcdFx0XHR7e2l0ZW0ubmFtZX19XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzd2lwZXItdGFiLWxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6e1xyXG5cdFx0XHR0YWJCYXJpbmZvIDogQXJyYXksXHJcblx0XHRcdHRhYkluZGV4IDogTnVtYmVyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRjaGFuZ2VJbmRleChpbmRleCl7XHJcblx0XHRcdFx0dGhpcy4kZW1pdChcImNoYW5nSW5kZXhcIixpbmRleCk7XHJcblx0XHRcdH1cclxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LnVuaS1zd2lwZXItdGFie1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXVweCBzb2xpZCAjRUVFRUVFO1xyXG5cdH1cclxuXHQuc3dpcGVyLXRhYi1saXN0e1xyXG5cdFx0Y29sb3I6ICM5Njk2OTY7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0LnVuaS1zd2lwZXItdGFiIC5hY3RpdmV7XHJcblx0XHRjb2xvcjogIzM0MzQzNDtcclxuXHR9XHJcblx0LmFjdGl2ZSAuc3dpcGVyLXRhYi1saW5le1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTB1cHg7XHJcblx0XHRib3JkZXItdG9wOiA1dXB4IHNvbGlkICNGQ0YwMDQ7XHJcblx0XHRib3JkZXItYm90dG9tOiA1dXB4IHNvbGlkICNGQ0YwMDQ7XHJcblx0XHR3aWR0aDogNzB1cHg7XHJcblx0XHRtYXJnaW46IGF1dG87XHJcblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10YWItYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdGFiLWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1zd2lwZXItdGFiXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFycHggc29saWQgI0VFRUVFRVwiXG4gIH0sXG4gIFwic3dpcGVyLXRhYi1saXN0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzk2OTY5NlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sb2FkLW1vcmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5Yzc0OTYyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xvYWQtbW9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvYWQtbW9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoKSB7XG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2xvYWQtbW9yZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9sb2FkLW1vcmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMjk1ZDM2OWFcIlxuICBcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL2NvbXBvbmVudHMvY29tbW9uL2xvYWQtbW9yZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5yZWN5Y2xlLmpzIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC0wIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvYWQtbW9yZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTljNzQ5NjImXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJvblJlZmxhc2hcIl0gfSwgW1xuICAgIF9jKFwidS10ZXh0XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5yZWZsYXNodGV4dCkgKyBcIi4uLlwiKV0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJvblJlZmxhc2hcIj57e3JlZmxhc2h0ZXh0fX0uLi48L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczp7XHJcblx0XHRcdHJlZmxhc2h0ZXh0IDogU3RyaW5nXHJcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuLm9uUmVmbGFzaHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDJ1cHggMTB1cHg7XHJcblx0XHRjb2xvcjogI0FBQUFBQTtcclxuXHRcdC8qIGNvbG9yOiAjRUVFRUVFOyAqL1xyXG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2FkLW1vcmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvYWQtbW9yZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIm9uUmVmbGFzaFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI0FBQUFBQVwiXG4gIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vLXRoaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMTA5MDU4MiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9uby10aGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vLXRoaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbm8tdGhpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vbm8tdGhpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNWQ1YzhjOTRcIlxuICBcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOi9Vc2Vycy/nlJjmraMvRGVza3RvcC9oZ2LnmoR1bmktYXBwL2NvbXBvbmVudHMvY29tbW9uL25vLXRoaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LTAhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm8tdGhpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExMDkwNTgyJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJub3RoaW5nXCIsIFwidS1qdXN0aWZ5LWNvbnRlbnRcIl0gfSxcbiAgICBbXG4gICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICBhdHRyczogeyBzcmM6IFwiLi4vLi4vc3RhdGljL2NvbW1vbi9ub3RoaW5nLnBuZ1wiLCBtb2RlOiBcIndpZHRoRml4XCIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vLXRoaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm8tdGhpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cIm5vdGhpbmcgdS1qdXN0aWZ5LWNvbnRlbnRcIj5cclxuXHRcdDxpbWFnZSBcclxuXHRcdHNyYz1cIi4uLy4uL3N0YXRpYy9jb21tb24vbm90aGluZy5wbmdcIiBcclxuXHRcdG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcblx0XHRcdH07XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLm5vdGhpbmd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0fVxyXG5cdC5ub3RoaW5nIGltYWdle1xyXG5cdFx0d2lkdGg6IDcwJTtcclxuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm8tdGhpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhSDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFIOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIUg6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vLXRoaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibm90aGluZ1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==