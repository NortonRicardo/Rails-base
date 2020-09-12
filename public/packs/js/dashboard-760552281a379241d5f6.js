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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/dashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/dashboard.js":
/*!*******************************************!*\
  !*** ./app/javascript/packs/dashboard.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var options1 = {
  chart: {
    type: "bar",
    height: 60,
    sparkline: {
      enabled: !0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "60%"
    }
  },
  colors: ["#033B45"],
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: !1
    },
    x: {
      show: !1
    },
    y: {
      title: {
        formatter: function formatter(e) {
          return "";
        }
      }
    },
    marker: {
      show: !1
    }
  }
};
new ApexCharts(document.querySelector("#campaign-sent-chart"), options1).render();
var options2 = {
  chart: {
    type: "line",
    height: 60,
    sparkline: {
      enabled: !0
    }
  },
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  stroke: {
    width: 2,
    curve: "smooth"
  },
  markers: {
    size: 0
  },
  colors: ["#033B45"],
  tooltip: {
    fixed: {
      enabled: !1
    },
    x: {
      show: !1
    },
    y: {
      title: {
        formatter: function formatter(e) {
          return "";
        }
      }
    },
    marker: {
      show: !1
    }
  }
};
new ApexCharts(document.querySelector("#new-leads-chart"), options2).render();
var options3 = {
  chart: {
    type: "bar",
    height: 60,
    sparkline: {
      enabled: !0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "60%"
    }
  },
  colors: ["#033B45"],
  series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: !1
    },
    x: {
      show: !1
    },
    y: {
      title: {
        formatter: function formatter(e) {
          return "";
        }
      }
    },
    marker: {
      show: !1
    }
  }
};
new ApexCharts(document.querySelector("#deals-chart"), options3).render();
var options4 = {
  chart: {
    type: "bar",
    height: 60,
    sparkline: {
      enabled: !0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "60%"
    }
  },
  colors: ["#033B45"],
  series: [{
    data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
  }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: !1
    },
    x: {
      show: !1
    },
    y: {
      title: {
        formatter: function formatter(e) {
          return "";
        }
      }
    },
    marker: {
      show: !1
    }
  }
};
new ApexCharts(document.querySelector("#booked-revenue-chart"), options4).render();
var options = {
  chart: {
    height: 320,
    type: "radialBar"
  },
  colors: ["#ffbc00", "#033B45", "#0acf97"],
  series: [86, 36, 50],
  labels: ["Total Sent", "Reached", "Opened"],
  plotOptions: {
    radialBar: {
      track: {
        margin: 8
      }
    }
  }
};
(chart = new ApexCharts(document.querySelector("#dash-campaigns-chart"), options)).render();
var chart;
options = {
  chart: {
    height: 336,
    type: "line",
    toolbar: {
      show: !1
    }
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  series: [{
    name: "Total Revenue",
    type: "area",
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 43]
  }, {
    name: "Total Pipeline",
    type: "line",
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 56]
  }],
  fill: {
    type: "solid",
    opacity: [.35, 1]
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  markers: {
    size: 0
  },
  colors: ["#0acf97", "#fa5c7c"],
  yaxis: [{
    title: {
      text: "Revenue (USD)"
    },
    min: 0
  }],
  tooltip: {
    shared: !0,
    intersect: !1,
    y: {
      formatter: function formatter(e) {
        return void 0 !== e ? e.toFixed(0) + "k" : e;
      }
    }
  },
  grid: {
    borderColor: "#f1f3fa"
  },
  legend: {
    fontSize: "14px",
    fontFamily: "14px",
    offsetY: -10
  },
  responsive: [{
    breakpoint: 600,
    options: {
      yaxis: {
        show: !1
      },
      legend: {
        show: !1
      }
    }
  }]
};
(chart = new ApexCharts(document.querySelector("#dash-revenue-chart"), options)).render();

/***/ })

/******/ });
//# sourceMappingURL=dashboard-760552281a379241d5f6.js.map