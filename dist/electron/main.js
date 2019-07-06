module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/electron-is-dev/index.js":
/*!*********************************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/node_modules/electron-is-dev/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const electron = __webpack_require__(/*! electron */ "electron");

const app = electron.app || electron.remote.app;

const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

module.exports = isEnvSet ? getFromEnv : !app.isPackaged;


/***/ }),

/***/ "../../node_modules/node-pty/lib sync recursive":
/*!**************************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/node_modules/node-pty/lib sync ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/node-pty/lib sync recursive";

/***/ }),

/***/ "../../node_modules/node-pty/lib/index.js":
/*!******************************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/node_modules/node-pty/lib/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2012-2015, Christopher Jeffrey, Peter Sunde (MIT License)
 * Copyright (c) 2016, Daniel Imms (MIT License).
 * Copyright (c) 2018, Microsoft Corporation (MIT License).
 */
Object.defineProperty(exports, "__esModule", { value: true });
var path = __webpack_require__(/*! path */ "path");
var terminalCtor;
if (process.platform === 'win32') {
    terminalCtor = __webpack_require__(/*! ./windowsTerminal */ "../../node_modules/node-pty/lib/windowsTerminal.js").WindowsTerminal;
}
else {
    terminalCtor = __webpack_require__(/*! ./unixTerminal */ "../../node_modules/node-pty/lib/unixTerminal.js").UnixTerminal;
}
/**
 * Forks a process as a pseudoterminal.
 * @param file The file to launch.
 * @param args The file's arguments as argv (string[]) or in a pre-escaped
 * CommandLine format (string). Note that the CommandLine option is only
 * available on Windows and is expected to be escaped properly.
 * @param options The options of the terminal.
 * @throws When the file passed to spawn with does not exists.
 * @see CommandLineToArgvW https://msdn.microsoft.com/en-us/library/windows/desktop/bb776391(v=vs.85).aspx
 * @see Parsing C++ Comamnd-Line Arguments https://msdn.microsoft.com/en-us/library/17w5ykft.aspx
 * @see GetCommandLine https://msdn.microsoft.com/en-us/library/windows/desktop/ms683156.aspx
 */
function spawn(file, args, opt) {
    return new terminalCtor(file, args, opt);
}
exports.spawn = spawn;
/** @deprecated */
function fork(file, args, opt) {
    return new terminalCtor(file, args, opt);
}
exports.fork = fork;
/** @deprecated */
function createTerminal(file, args, opt) {
    return new terminalCtor(file, args, opt);
}
exports.createTerminal = createTerminal;
function open(options) {
    return terminalCtor.open(options);
}
exports.open = open;
/**
 * Expose the native API when not Windows, note that this is not public API and
 * could be removed at any time.
 */
exports.native = (process.platform !== 'win32' ? __webpack_require__("../../node_modules/node-pty/lib sync recursive")(path.join('..', 'build', 'Release', 'pty.node')) : null);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/node-pty/lib/terminal.js":
/*!*********************************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/node_modules/node-pty/lib/terminal.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2012-2015, Christopher Jeffrey (MIT License)
 * Copyright (c) 2016, Daniel Imms (MIT License).
 * Copyright (c) 2018, Microsoft Corporation (MIT License).
 */
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! events */ "events");
exports.DEFAULT_COLS = 80;
exports.DEFAULT_ROWS = 24;
var Terminal = /** @class */ (function () {
    function Terminal(opt) {
        // for 'close'
        this._internalee = new events_1.EventEmitter();
        if (!opt) {
            return;
        }
        // Do basic type checks here in case node-pty is being used within JavaScript. If the wrong
        // types go through to the C++ side it can lead to hard to diagnose exceptions.
        this._checkType('name', opt.name ? opt.name : null, 'string');
        this._checkType('cols', opt.cols ? opt.cols : null, 'number');
        this._checkType('rows', opt.rows ? opt.rows : null, 'number');
        this._checkType('cwd', opt.cwd ? opt.cwd : null, 'string');
        this._checkType('env', opt.env ? opt.env : null, 'object');
        this._checkType('uid', opt.uid ? opt.uid : null, 'number');
        this._checkType('gid', opt.gid ? opt.gid : null, 'number');
        this._checkType('encoding', opt.encoding ? opt.encoding : null, 'string');
    }
    Object.defineProperty(Terminal.prototype, "pid", {
        get: function () { return this._pid; },
        enumerable: true,
        configurable: true
    });
    Terminal.prototype._checkType = function (name, value, type) {
        if (value && typeof value !== type) {
            throw new Error(name + " must be a " + type + " (not a " + typeof value + ")");
        }
    };
    /** See net.Socket.end */
    Terminal.prototype.end = function (data) {
        this._socket.end(data);
    };
    /** See stream.Readable.pipe */
    Terminal.prototype.pipe = function (dest, options) {
        return this._socket.pipe(dest, options);
    };
    /** See net.Socket.pause */
    Terminal.prototype.pause = function () {
        return this._socket.pause();
    };
    /** See net.Socket.resume */
    Terminal.prototype.resume = function () {
        return this._socket.resume();
    };
    /** See net.Socket.setEncoding */
    Terminal.prototype.setEncoding = function (encoding) {
        if (this._socket._decoder) {
            delete this._socket._decoder;
        }
        if (encoding) {
            this._socket.setEncoding(encoding);
        }
    };
    Terminal.prototype.addListener = function (eventName, listener) { this.on(eventName, listener); };
    Terminal.prototype.on = function (eventName, listener) {
        if (eventName === 'close') {
            this._internalee.on('close', listener);
            return;
        }
        this._socket.on(eventName, listener);
    };
    Terminal.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (eventName === 'close') {
            return this._internalee.emit.apply(this._internalee, arguments);
        }
        return this._socket.emit.apply(this._socket, arguments);
    };
    Terminal.prototype.listeners = function (eventName) {
        return this._socket.listeners(eventName);
    };
    Terminal.prototype.removeListener = function (eventName, listener) {
        this._socket.removeListener(eventName, listener);
    };
    Terminal.prototype.removeAllListeners = function (eventName) {
        this._socket.removeAllListeners(eventName);
    };
    Terminal.prototype.once = function (eventName, listener) {
        this._socket.once(eventName, listener);
    };
    Terminal.prototype._close = function () {
        this._socket.writable = false;
        this._socket.readable = false;
        this.write = function () { };
        this.end = function () { };
        this._writable = false;
        this._readable = false;
    };
    Terminal.prototype._parseEnv = function (env) {
        var keys = Object.keys(env || {});
        var pairs = [];
        for (var i = 0; i < keys.length; i++) {
            pairs.push(keys[i] + '=' + env[keys[i]]);
        }
        return pairs;
    };
    return Terminal;
}());
exports.Terminal = Terminal;
//# sourceMappingURL=terminal.js.map

/***/ }),

/***/ "../../node_modules/node-pty/lib/unixTerminal.js":
/*!*************************************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/node_modules/node-pty/lib/unixTerminal.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2012-2015, Christopher Jeffrey (MIT License)
 * Copyright (c) 2016, Daniel Imms (MIT License).
 * Copyright (c) 2018, Microsoft Corporation (MIT License).
 */
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
var net = __webpack_require__(/*! net */ "net");
var terminal_1 = __webpack_require__(/*! ./terminal */ "../../node_modules/node-pty/lib/terminal.js");
var utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/node-pty/lib/utils.js");
var pty = utils_1.loadNative('pty');
var DEFAULT_FILE = 'sh';
var DEFAULT_NAME = 'xterm';
var DESTROY_SOCKET_TIMEOUT_MS = 200;
var UnixTerminal = /** @class */ (function (_super) {
    __extends(UnixTerminal, _super);
    function UnixTerminal(file, args, opt) {
        var _this = _super.call(this, opt) || this;
        if (typeof args === 'string') {
            throw new Error('args as a string is not supported on unix.');
        }
        // Initialize arguments
        args = args || [];
        file = file || DEFAULT_FILE;
        opt = opt || {};
        opt.env = opt.env || process.env;
        var cols = opt.cols || terminal_1.DEFAULT_COLS;
        var rows = opt.rows || terminal_1.DEFAULT_ROWS;
        var uid = opt.uid || -1;
        var gid = opt.gid || -1;
        var env = utils_1.assign({}, opt.env);
        if (opt.env === process.env) {
            _this._sanitizeEnv(env);
        }
        var cwd = opt.cwd || process.cwd();
        var name = opt.name || env.TERM || DEFAULT_NAME;
        env.TERM = name;
        var parsedEnv = _this._parseEnv(env);
        var encoding = (opt.encoding === undefined ? 'utf8' : opt.encoding);
        var onexit = function (code, signal) {
            // XXX Sometimes a data event is emitted after exit. Wait til socket is
            // destroyed.
            if (!_this._emittedClose) {
                if (_this._boundClose) {
                    return;
                }
                _this._boundClose = true;
                // From macOS High Sierra 10.13.2 sometimes the socket never gets
                // closed. A timeout is applied here to avoid the terminal never being
                // destroyed when this occurs.
                var timeout_1 = setTimeout(function () {
                    timeout_1 = null;
                    // Destroying the socket now will cause the close event to fire
                    _this._socket.destroy();
                }, DESTROY_SOCKET_TIMEOUT_MS);
                _this.once('close', function () {
                    if (timeout_1 !== null) {
                        clearTimeout(timeout_1);
                    }
                    _this.emit('exit', code, signal);
                });
                return;
            }
            _this.emit('exit', code, signal);
        };
        // fork
        var term = pty.fork(file, args, parsedEnv, cwd, cols, rows, uid, gid, (encoding === 'utf8'), onexit);
        _this._socket = new PipeSocket(term.fd);
        if (encoding !== null) {
            _this._socket.setEncoding(encoding);
        }
        // setup
        _this._socket.on('error', function (err) {
            // NOTE: fs.ReadStream gets EAGAIN twice at first:
            if (err.code) {
                if (~err.code.indexOf('EAGAIN')) {
                    return;
                }
            }
            // close
            _this._close();
            // EIO on exit from fs.ReadStream:
            if (!_this._emittedClose) {
                _this._emittedClose = true;
                _this.emit('close');
            }
            // EIO, happens when someone closes our child process: the only process in
            // the terminal.
            // node < 0.6.14: errno 5
            // node >= 0.6.14: read EIO
            if (err.code) {
                if (~err.code.indexOf('errno 5') || ~err.code.indexOf('EIO')) {
                    return;
                }
            }
            // throw anything else
            if (_this.listeners('error').length < 2) {
                throw err;
            }
        });
        _this._pid = term.pid;
        _this._fd = term.fd;
        _this._pty = term.pty;
        _this._file = file;
        _this._name = name;
        _this._readable = true;
        _this._writable = true;
        _this._socket.on('close', function () {
            if (_this._emittedClose) {
                return;
            }
            _this._emittedClose = true;
            _this._close();
            _this.emit('close');
        });
        return _this;
    }
    Object.defineProperty(UnixTerminal.prototype, "master", {
        get: function () { return this._master; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnixTerminal.prototype, "slave", {
        get: function () { return this._slave; },
        enumerable: true,
        configurable: true
    });
    /**
     * openpty
     */
    UnixTerminal.open = function (opt) {
        var self = Object.create(UnixTerminal.prototype);
        opt = opt || {};
        if (arguments.length > 1) {
            opt = {
                cols: arguments[1],
                rows: arguments[2]
            };
        }
        var cols = opt.cols || terminal_1.DEFAULT_COLS;
        var rows = opt.rows || terminal_1.DEFAULT_ROWS;
        var encoding = opt.encoding ? 'utf8' : opt.encoding;
        // open
        var term = pty.open(cols, rows);
        self._master = new PipeSocket(term.master);
        self._master.setEncoding(encoding);
        self._master.resume();
        self._slave = new PipeSocket(term.slave);
        self._slave.setEncoding(encoding);
        self._slave.resume();
        self._socket = self._master;
        self._pid = null;
        self._fd = term.master;
        self._pty = term.pty;
        self._file = process.argv[0] || 'node';
        self._name = process.env.TERM || '';
        self._readable = true;
        self._writable = true;
        self._socket.on('error', function (err) {
            self._close();
            if (self.listeners('error').length < 2) {
                throw err;
            }
        });
        self._socket.on('close', function () {
            self._close();
        });
        return self;
    };
    UnixTerminal.prototype.write = function (data) {
        this._socket.write(data);
    };
    UnixTerminal.prototype.destroy = function () {
        var _this = this;
        this._close();
        // Need to close the read stream so node stops reading a dead file
        // descriptor. Then we can safely SIGHUP the shell.
        this._socket.once('close', function () {
            _this.kill('SIGHUP');
        });
        this._socket.destroy();
    };
    UnixTerminal.prototype.kill = function (signal) {
        try {
            process.kill(this.pid, signal || 'SIGHUP');
        }
        catch (e) { /* swallow */ }
    };
    Object.defineProperty(UnixTerminal.prototype, "process", {
        /**
         * Gets the name of the process.
         */
        get: function () {
            return pty.process(this._fd, this._pty) || this._file;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * TTY
     */
    UnixTerminal.prototype.resize = function (cols, rows) {
        pty.resize(this._fd, cols, rows);
    };
    UnixTerminal.prototype._sanitizeEnv = function (env) {
        // Make sure we didn't start our server from inside tmux.
        delete env['TMUX'];
        delete env['TMUX_PANE'];
        // Make sure we didn't start our server from inside screen.
        // http://web.mit.edu/gnu/doc/html/screen_20.html
        delete env['STY'];
        delete env['WINDOW'];
        // Delete some variables that might confuse our terminal.
        delete env['WINDOWID'];
        delete env['TERMCAP'];
        delete env['COLUMNS'];
        delete env['LINES'];
    };
    return UnixTerminal;
}(terminal_1.Terminal));
exports.UnixTerminal = UnixTerminal;
/**
 * Wraps net.Socket to force the handle type "PIPE" by temporarily overwriting
 * tty_wrap.guessHandleType.
 * See: https://github.com/chjj/pty.js/issues/103
 */
var PipeSocket = /** @class */ (function (_super) {
    __extends(PipeSocket, _super);
    function PipeSocket(fd) {
        var _this = this;
        var tty = process.binding('tty_wrap');
        var guessHandleType = tty.guessHandleType;
        tty.guessHandleType = function () { return 'PIPE'; };
        // @types/node has fd as string? https://github.com/DefinitelyTyped/DefinitelyTyped/pull/18275
        _this = _super.call(this, { fd: fd }) || this;
        tty.guessHandleType = guessHandleType;
        return _this;
    }
    return PipeSocket;
}(net.Socket));
//# sourceMappingURL=unixTerminal.js.map

/***/ }),

/***/ "../../node_modules/node-pty/lib/utils.js":
/*!******************************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/node_modules/node-pty/lib/utils.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017, Daniel Imms (MIT License).
 * Copyright (c) 2018, Microsoft Corporation (MIT License).
 */
Object.defineProperty(exports, "__esModule", { value: true });
var path = __webpack_require__(/*! path */ "path");
function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) { return Object.keys(source).forEach(function (key) { return target[key] = source[key]; }); });
    return target;
}
exports.assign = assign;
function loadNative(moduleName) {
    try {
        return __webpack_require__("../../node_modules/node-pty/lib sync recursive")(path.join('..', 'build', 'Release', moduleName + ".node"));
    }
    catch (_a) {
        return __webpack_require__("../../node_modules/node-pty/lib sync recursive")(path.join('..', 'build', 'Debug', moduleName + ".node"));
    }
}
exports.loadNative = loadNative;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../node_modules/node-pty/lib/windowsPtyAgent.js":
/*!****************************************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/node_modules/node-pty/lib/windowsPtyAgent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
/**
 * Copyright (c) 2012-2015, Christopher Jeffrey, Peter Sunde (MIT License)
 * Copyright (c) 2016, Daniel Imms (MIT License).
 * Copyright (c) 2018, Microsoft Corporation (MIT License).
 */
Object.defineProperty(exports, "__esModule", { value: true });
var os = __webpack_require__(/*! os */ "os");
var path = __webpack_require__(/*! path */ "path");
var net_1 = __webpack_require__(/*! net */ "net");
var utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/node-pty/lib/utils.js");
var child_process_1 = __webpack_require__(/*! child_process */ "child_process");
var conptyNative;
var winptyNative;
/**
 * The amount of time to wait for additional data after the conpty shell process has exited before
 * shutting down the socket. The timer will be reset if a new data event comes in after the timer
 * has started.
 */
var FLUSH_DATA_INTERVAL = 20;
/**
 * This agent sits between the WindowsTerminal class and provides a common interface for both conpty
 * and winpty.
 */
var WindowsPtyAgent = /** @class */ (function () {
    function WindowsPtyAgent(file, args, env, cwd, cols, rows, debug, _useConpty) {
        var _this = this;
        this._useConpty = _useConpty;
        if (this._useConpty === undefined || this._useConpty === true) {
            this._useConpty = this._getWindowsBuildNumber() >= 18309;
        }
        if (this._useConpty) {
            if (!conptyNative) {
                conptyNative = utils_1.loadNative('conpty');
            }
        }
        else {
            if (!winptyNative) {
                winptyNative = utils_1.loadNative('pty');
            }
        }
        this._ptyNative = this._useConpty ? conptyNative : winptyNative;
        // Sanitize input variable.
        cwd = path.resolve(cwd);
        // Compose command line
        var commandLine = argsToCommandLine(file, args);
        // Open pty session.
        var term;
        if (this._useConpty) {
            term = this._ptyNative.startProcess(file, cols, rows, debug, this._generatePipeName());
        }
        else {
            term = this._ptyNative.startProcess(file, commandLine, env, cwd, cols, rows, debug);
            this._pid = term.pid;
            this._innerPid = term.innerPid;
            this._innerPidHandle = term.innerPidHandle;
        }
        // Not available on windows.
        this._fd = term.fd;
        // Generated incremental number that has no real purpose besides  using it
        // as a terminal id.
        this._pty = term.pty;
        // Create terminal pipe IPC channel and forward to a local unix socket.
        this._outSocket = new net_1.Socket();
        this._outSocket.setEncoding('utf8');
        this._outSocket.connect(term.conout, function () {
            // TODO: Emit event on agent instead of socket?
            // Emit ready event.
            _this._outSocket.emit('ready_datapipe');
        });
        this._inSocket = new net_1.Socket();
        this._inSocket.setEncoding('utf8');
        this._inSocket.connect(term.conin);
        // TODO: Wait for ready event?
        if (this._useConpty) {
            var connect = this._ptyNative.connect(this._pty, commandLine, cwd, env, this._$onProcessExit.bind(this));
            this._innerPid = connect.pid;
        }
    }
    Object.defineProperty(WindowsPtyAgent.prototype, "inSocket", {
        get: function () { return this._inSocket; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowsPtyAgent.prototype, "outSocket", {
        get: function () { return this._outSocket; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowsPtyAgent.prototype, "fd", {
        get: function () { return this._fd; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowsPtyAgent.prototype, "innerPid", {
        get: function () { return this._innerPid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowsPtyAgent.prototype, "pty", {
        get: function () { return this._pty; },
        enumerable: true,
        configurable: true
    });
    WindowsPtyAgent.prototype.resize = function (cols, rows) {
        if (this._useConpty) {
            if (this._exitCode !== undefined) {
                throw new Error('Cannot resize a pty that has already exited');
            }
            this._ptyNative.resize(this._pty, cols, rows);
            return;
        }
        this._ptyNative.resize(this._pid, cols, rows);
    };
    WindowsPtyAgent.prototype.kill = function () {
        var _this = this;
        this._inSocket.readable = false;
        this._inSocket.writable = false;
        this._outSocket.readable = false;
        this._outSocket.writable = false;
        // Tell the agent to kill the pty, this releases handles to the process
        if (this._useConpty) {
            this._getConsoleProcessList().then(function (consoleProcessList) {
                consoleProcessList.forEach(function (pid) {
                    try {
                        process.kill(pid);
                    }
                    catch (e) {
                        // Ignore if process cannot be found (kill ESRCH error)
                    }
                });
                _this._ptyNative.kill(_this._pty);
            });
        }
        else {
            this._ptyNative.kill(this._pid, this._innerPidHandle);
            // Since pty.kill closes the handle it will kill most processes by itself
            // and process IDs can be reused as soon as all handles to them are
            // dropped, we want to immediately kill the entire console process list.
            // If we do not force kill all processes here, node servers in particular
            // seem to become detached and remain running (see
            // Microsoft/vscode#26807).
            var processList = this._ptyNative.getProcessList(this._pid);
            processList.forEach(function (pid) {
                try {
                    process.kill(pid);
                }
                catch (e) {
                    // Ignore if process cannot be found (kill ESRCH error)
                }
            });
        }
    };
    WindowsPtyAgent.prototype._getConsoleProcessList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var agent = child_process_1.fork(path.join(__dirname, 'conpty_console_list_agent'), [_this._innerPid.toString()]);
            agent.on('message', function (message) {
                clearTimeout(timeout);
                resolve(message.consoleProcessList);
            });
            var timeout = setTimeout(function () {
                // Something went wrong, just send back the shell PID
                console.error('Could not fetch console process list');
                agent.kill();
                resolve([_this._innerPid]);
            }, 5000);
        });
    };
    Object.defineProperty(WindowsPtyAgent.prototype, "exitCode", {
        get: function () {
            if (this._useConpty) {
                return this._exitCode;
            }
            return this._ptyNative.getExitCode(this._innerPidHandle);
        },
        enumerable: true,
        configurable: true
    });
    WindowsPtyAgent.prototype._getWindowsBuildNumber = function () {
        var osVersion = (/(\d+)\.(\d+)\.(\d+)/g).exec(os.release());
        var buildNumber = 0;
        if (osVersion && osVersion.length === 4) {
            buildNumber = parseInt(osVersion[3]);
        }
        return buildNumber;
    };
    WindowsPtyAgent.prototype._generatePipeName = function () {
        return "conpty-" + Math.random() * 10000000;
    };
    /**
     * Triggered from the native side when a contpy process exits.
     */
    WindowsPtyAgent.prototype._$onProcessExit = function (exitCode) {
        var _this = this;
        this._exitCode = exitCode;
        this._flushDataAndCleanUp();
        this._outSocket.on('data', function () { return _this._flushDataAndCleanUp(); });
    };
    WindowsPtyAgent.prototype._flushDataAndCleanUp = function () {
        var _this = this;
        if (this._closeTimeout) {
            clearTimeout(this._closeTimeout);
        }
        this._closeTimeout = setTimeout(function () { return _this._cleanUpProcess(); }, FLUSH_DATA_INTERVAL);
    };
    WindowsPtyAgent.prototype._cleanUpProcess = function () {
        this._inSocket.readable = false;
        this._inSocket.writable = false;
        this._outSocket.readable = false;
        this._outSocket.writable = false;
        this._outSocket.destroy();
    };
    return WindowsPtyAgent;
}());
exports.WindowsPtyAgent = WindowsPtyAgent;
// Convert argc/argv into a Win32 command-line following the escaping convention
// documented on MSDN (e.g. see CommandLineToArgvW documentation). Copied from
// winpty project.
function argsToCommandLine(file, args) {
    if (isCommandLine(args)) {
        if (args.length === 0) {
            return file;
        }
        return argsToCommandLine(file, []) + " " + args;
    }
    var argv = [file];
    Array.prototype.push.apply(argv, args);
    var result = '';
    for (var argIndex = 0; argIndex < argv.length; argIndex++) {
        if (argIndex > 0) {
            result += ' ';
        }
        var arg = argv[argIndex];
        // if it is empty or it contains whitespace and is not already quoted
        var hasLopsidedEnclosingQuote = xOr((arg[0] !== '"'), (arg[arg.length - 1] !== '"'));
        var hasNoEnclosingQuotes = ((arg[0] !== '"') && (arg[arg.length - 1] !== '"'));
        var quote = arg === '' ||
            (arg.indexOf(' ') !== -1 ||
                arg.indexOf('\t') !== -1) &&
                ((arg.length > 1) &&
                    (hasLopsidedEnclosingQuote || hasNoEnclosingQuotes));
        if (quote) {
            result += '\"';
        }
        var bsCount = 0;
        for (var i = 0; i < arg.length; i++) {
            var p = arg[i];
            if (p === '\\') {
                bsCount++;
            }
            else if (p === '"') {
                result += repeatText('\\', bsCount * 2 + 1);
                result += '"';
                bsCount = 0;
            }
            else {
                result += repeatText('\\', bsCount);
                bsCount = 0;
                result += p;
            }
        }
        if (quote) {
            result += repeatText('\\', bsCount * 2);
            result += '\"';
        }
        else {
            result += repeatText('\\', bsCount);
        }
    }
    return result;
}
exports.argsToCommandLine = argsToCommandLine;
function isCommandLine(args) {
    return typeof args === 'string';
}
function repeatText(text, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += text;
    }
    return result;
}
function xOr(arg1, arg2) {
    return ((arg1 && !arg2) || (!arg1 && arg2));
}
//# sourceMappingURL=windowsPtyAgent.js.map
/* WEBPACK VAR INJECTION */}.call(this, "../../node_modules/node-pty/lib"))

/***/ }),

/***/ "../../node_modules/node-pty/lib/windowsTerminal.js":
/*!****************************************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/node_modules/node-pty/lib/windowsTerminal.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2012-2015, Christopher Jeffrey, Peter Sunde (MIT License)
 * Copyright (c) 2016, Daniel Imms (MIT License).
 * Copyright (c) 2018, Microsoft Corporation (MIT License).
 */
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
var terminal_1 = __webpack_require__(/*! ./terminal */ "../../node_modules/node-pty/lib/terminal.js");
var windowsPtyAgent_1 = __webpack_require__(/*! ./windowsPtyAgent */ "../../node_modules/node-pty/lib/windowsPtyAgent.js");
var utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/node-pty/lib/utils.js");
var DEFAULT_FILE = 'cmd.exe';
var DEFAULT_NAME = 'Windows Shell';
var WindowsTerminal = /** @class */ (function (_super) {
    __extends(WindowsTerminal, _super);
    function WindowsTerminal(file, args, opt) {
        var _this = _super.call(this, opt) || this;
        // Initialize arguments
        args = args || [];
        file = file || DEFAULT_FILE;
        opt = opt || {};
        opt.env = opt.env || process.env;
        if (opt.encoding) {
            console.warn('Setting encoding on Windows is not supported');
        }
        var env = utils_1.assign({}, opt.env);
        var cols = opt.cols || terminal_1.DEFAULT_COLS;
        var rows = opt.rows || terminal_1.DEFAULT_ROWS;
        var cwd = opt.cwd || process.cwd();
        var name = opt.name || env.TERM || DEFAULT_NAME;
        var parsedEnv = _this._parseEnv(env);
        // If the terminal is ready
        _this._isReady = false;
        // Functions that need to run after `ready` event is emitted.
        _this._deferreds = [];
        // Create new termal.
        _this._agent = new windowsPtyAgent_1.WindowsPtyAgent(file, args, parsedEnv, cwd, cols, rows, false, opt.experimentalUseConpty);
        _this._socket = _this._agent.outSocket;
        // Not available until `ready` event emitted.
        _this._pid = _this._agent.innerPid;
        _this._fd = _this._agent.fd;
        _this._pty = _this._agent.pty;
        // The forked windows terminal is not available until `ready` event is
        // emitted.
        _this._socket.on('ready_datapipe', function () {
            // These events needs to be forwarded.
            ['connect', 'data', 'end', 'timeout', 'drain'].forEach(function (event) {
                _this._socket.on(event, function () {
                    // Wait until the first data event is fired then we can run deferreds.
                    if (!_this._isReady && event === 'data') {
                        // Terminal is now ready and we can avoid having to defer method
                        // calls.
                        _this._isReady = true;
                        // Execute all deferred methods
                        _this._deferreds.forEach(function (fn) {
                            // NB! In order to ensure that `this` has all its references
                            // updated any variable that need to be available in `this` before
                            // the deferred is run has to be declared above this forEach
                            // statement.
                            fn.run();
                        });
                        // Reset
                        _this._deferreds = [];
                    }
                });
            });
            // Shutdown if `error` event is emitted.
            _this._socket.on('error', function (err) {
                // Close terminal session.
                _this._close();
                // EIO, happens when someone closes our child process: the only process
                // in the terminal.
                // node < 0.6.14: errno 5
                // node >= 0.6.14: read EIO
                if (err.code) {
                    if (~err.code.indexOf('errno 5') || ~err.code.indexOf('EIO'))
                        return;
                }
                // Throw anything else.
                if (_this.listeners('error').length < 2) {
                    throw err;
                }
            });
            // Cleanup after the socket is closed.
            _this._socket.on('close', function () {
                _this.emit('exit', _this._agent.exitCode);
                _this._close();
            });
        });
        _this._file = file;
        _this._name = name;
        _this._readable = true;
        _this._writable = true;
        return _this;
    }
    /**
     * openpty
     */
    WindowsTerminal.open = function (options) {
        throw new Error('open() not supported on windows, use Fork() instead.');
    };
    /**
     * Events
     */
    WindowsTerminal.prototype.write = function (data) {
        var _this = this;
        this._defer(function () {
            _this._agent.inSocket.write(data);
        });
    };
    /**
     * TTY
     */
    WindowsTerminal.prototype.resize = function (cols, rows) {
        var _this = this;
        if (cols <= 0 || rows <= 0) {
            throw new Error('resizing must be done using positive cols and rows');
        }
        this._defer(function () {
            _this._agent.resize(cols, rows);
        });
    };
    WindowsTerminal.prototype.destroy = function () {
        var _this = this;
        this._defer(function () {
            _this.kill();
        });
    };
    WindowsTerminal.prototype.kill = function (signal) {
        var _this = this;
        this._defer(function () {
            if (signal) {
                throw new Error('Signals not supported on windows.');
            }
            _this._close();
            _this._agent.kill();
        });
    };
    WindowsTerminal.prototype._defer = function (deferredFn) {
        var _this = this;
        // Ensure that this method is only used within Terminal class.
        if (!(this instanceof WindowsTerminal)) {
            throw new Error('Must be instanceof WindowsTerminal');
        }
        // If the terminal is ready, execute.
        if (this._isReady) {
            deferredFn.apply(this, null);
            return;
        }
        // Queue until terminal is ready.
        this._deferreds.push({
            run: function () { return deferredFn.apply(_this, null); }
        });
    };
    Object.defineProperty(WindowsTerminal.prototype, "process", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowsTerminal.prototype, "master", {
        get: function () { throw new Error('master is not supported on Windows'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowsTerminal.prototype, "slave", {
        get: function () { throw new Error('slave is not supported on Windows'); },
        enumerable: true,
        configurable: true
    });
    return WindowsTerminal;
}(terminal_1.Terminal));
exports.WindowsTerminal = WindowsTerminal;
//# sourceMappingURL=windowsTerminal.js.map

/***/ }),

/***/ "../../src/main/index.js":
/*!*************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/src/main/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const electron = __webpack_require__(/*! electron */ "electron");
const app = electron.app;
const ipcMain = electron.ipcMain;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;
const { launchTerminal } = __webpack_require__(/*! ./terminal */ "../../src/main/terminal.js");
const path = __webpack_require__(/*! path */ "path");
const isDev = __webpack_require__(/*! electron-is-dev */ "../../node_modules/electron-is-dev/index.js");
__webpack_require__(/*! ./menu */ "../../src/main/menu.js");
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900, 
    height: 680,
    webPreferences: {
      nodeIntegration: true
  }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
})
ipcMain.on('open-directory-dialog', (event, p) => {
  dialog.showOpenDialog({
        properties: [p]
      },function (files) {
          if (files){// 如果有选中
            // 发送选择的对象给子进程
            event.sender.send('selectDir', files[0])
          }
      })
})

// 驱动终端
launchTerminal(ipcMain);
/* WEBPACK VAR INJECTION */}.call(this, "../../src/main"))

/***/ }),

/***/ "../../src/main/menu.js":
/*!************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/src/main/menu.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



const electron = __webpack_require__(/*! electron */ "electron");
const Menu = electron.Menu;
var template = [{
  label: '编辑',
  submenu: [{
    label: '撤销',
    accelerator: 'CmdOrCtrl+Z',
    role: 'undo'
  }, {
    label: '重做',
    accelerator: 'Shift+CmdOrCtrl+Z',
    role: 'redo'
  }, {
    type: 'separator'
  }, {
    label: '复制',
    accelerator: 'CmdOrCtrl+C',
    role: 'copy'
  }, {
    label: '粘贴',
    accelerator: 'CmdOrCtrl+V',
    role: 'paste'
  }]
}, {
  label: '帮助',
  role: 'help',
  submenu: [{
    label: '学习更多',
    click: function () {
      electron.shell.openExternal('http://electron.atom.io')
    }
  }]
}];

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu);

/***/ }),

/***/ "../../src/main/terminal.js":
/*!****************************************************************!*\
  !*** /Users/mac/Documents/cxq/web/a-plan/src/main/terminal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pty = __webpack_require__(/*! node-pty */ "../../node_modules/node-pty/lib/index.js");
class Shell {
  constructor() {
    this.sender = null;
    this.shell = pty.spawn('/bin/zsh', [], {
      name: 'xterm-color',
      cwd: process.env.HOME,
      env: process.env
    });
    var that = this;
    this.shell.on('data', function () {
      that.sender && that.sender.send('shell-out', arguments[0])
      process.stdout.write(arguments[0]);
    });
    this.sender = null;
  }
  write(sender, p) {
    this.sender = sender;
    this.shell.write(p + '\r')
  }
}
exports.launchTerminal = function (ipcMain) {
  const shell = new Shell();

  ipcMain.on('shell-message', (event, p) => {
    shell.write(event.sender, p);
  })
}

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map