/*! For license information please see main.2af36c97.js.LICENSE.txt */
(() => {
	var e = {
			194: e => {
				e.exports = function e(t, n, r) {
					function i(s, o) {
						if (!n[s]) {
							if (!t[s]) {
								if (a) return a(s, !0);
								var l = new Error("Cannot find module '" + s + "'");
								throw l.code = "MODULE_NOT_FOUND", l
							}
							var c = n[s] = {
								exports: {}
							};
							t[s][0].call(c.exports, (function(e) {
								var n = t[s][1][e];
								return i(n || e)
							}), c, c.exports, e, t, n, r)
						}
						return n[s].exports
					}
					for (var a = void 0, s = 0; s < r.length; s++) i(r[s]);
					return i
				}({
					1: [function(e, t, n) {
						function r() {
							this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
						}

						function i(e) {
							return "function" === typeof e
						}

						function a(e) {
							return "number" === typeof e
						}

						function s(e) {
							return "object" === typeof e && null !== e
						}

						function o(e) {
							return void 0 === e
						}
						t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
							if (!a(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
							return this._maxListeners = e, this
						}, r.prototype.emit = function(e) {
							var t, n, r, a, l, c;
							if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
								if ((t = arguments[1]) instanceof Error) throw t;
								var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
								throw u.context = t, u
							}
							if (o(n = this._events[e])) return !1;
							if (i(n)) switch (arguments.length) {
								case 1:
									n.call(this);
									break;
								case 2:
									n.call(this, arguments[1]);
									break;
								case 3:
									n.call(this, arguments[1], arguments[2]);
									break;
								default:
									a = Array.prototype.slice.call(arguments, 1), n.apply(this, a)
							} else if (s(n))
								for (a = Array.prototype.slice.call(arguments, 1), r = (c = n.slice()).length, l = 0; l < r; l++) c[l].apply(this, a);
							return !0
						}, r.prototype.addListener = function(e, t) {
							var n;
							if (!i(t)) throw TypeError("listener must be a function");
							return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (n = o(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" === typeof console.trace && console.trace()), this
						}, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
							if (!i(t)) throw TypeError("listener must be a function");
							var n = !1;

							function r() {
								this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
							}
							return r.listener = t, this.on(e, r), this
						}, r.prototype.removeListener = function(e, t) {
							var n, r, a, o;
							if (!i(t)) throw TypeError("listener must be a function");
							if (!this._events || !this._events[e]) return this;
							if (a = (n = this._events[e]).length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
							else if (s(n)) {
								for (o = a; o-- > 0;)
									if (n[o] === t || n[o].listener && n[o].listener === t) {
										r = o;
										break
									} if (r < 0) return this;
								1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
							}
							return this
						}, r.prototype.removeAllListeners = function(e) {
							var t, n;
							if (!this._events) return this;
							if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
							if (0 === arguments.length) {
								for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
								return this.removeAllListeners("removeListener"), this._events = {}, this
							}
							if (i(n = this._events[e])) this.removeListener(e, n);
							else if (n)
								for (; n.length;) this.removeListener(e, n[n.length - 1]);
							return delete this._events[e], this
						}, r.prototype.listeners = function(e) {
							return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
						}, r.prototype.listenerCount = function(e) {
							if (this._events) {
								var t = this._events[e];
								if (i(t)) return 1;
								if (t) return t.length
							}
							return 0
						}, r.listenerCount = function(e, t) {
							return e.listenerCount(t)
						}
					}, {}],
					2: [function(e, t, n) {
						var r, i, a, s, o;
						o = navigator.userAgent.toLowerCase(), s = navigator.platform.toLowerCase(), a = "ie" === (r = o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0])[1] && document.documentMode, (i = {
							name: "version" === r[1] ? r[3] : r[1],
							version: a || parseFloat("opera" === r[1] && r[4] ? r[4] : r[2]),
							platform: {
								name: o.match(/ip(?:ad|od|hone)/) ? "ios" : (o.match(/(?:webos|android)/) || s.match(/mac|win|linux/) || ["other"])[0]
							}
						})[i.name] = !0, i[i.name + parseInt(i.version, 10)] = !0, i.platform[i.platform.name] = !0, t.exports = i
					}, {}],
					3: [function(e, t, n) {
						var r, i, a, s = function(e, t) {
								for (var n in t) o.call(t, n) && (e[n] = t[n]);

								function r() {
									this.constructor = e
								}
								return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
							},
							o = {}.hasOwnProperty,
							l = [].indexOf || function(e) {
								for (var t = 0, n = this.length; t < n; t++)
									if (t in this && this[t] === e) return t;
								return -1
							},
							c = [].slice;
						r = e("events").EventEmitter, a = e("./browser.coffee"), i = function(e) {
							var t, n;

							function r(e) {
								var n, r, i;
								for (r in this.running = !1, this.options = {}, this.frames = [], this.freeWorkers = [], this.activeWorkers = [], this.setOptions(e), t) i = t[r], null == (n = this.options)[r] && (n[r] = i)
							}
							return s(r, e), t = {
								workerScript: "gif.worker.js",
								workers: 2,
								repeat: 0,
								background: "#fff",
								quality: 10,
								width: null,
								height: null,
								transparent: null,
								debug: !1,
								dither: !1
							}, n = {
								delay: 500,
								copy: !1
							}, r.prototype.setOption = function(e, t) {
								if (this.options[e] = t, null != this._canvas && ("width" === e || "height" === e)) return this._canvas[e] = t
							}, r.prototype.setOptions = function(e) {
								var t, n, r;
								for (t in n = [], e) o.call(e, t) && (r = e[t], n.push(this.setOption(t, r)));
								return n
							}, r.prototype.addFrame = function(e, t) {
								var r, i;
								for (i in null == t && (t = {}), (r = {}).transparent = this.options.transparent, n) r[i] = t[i] || n[i];
								if (null == this.options.width && this.setOption("width", e.width), null == this.options.height && this.setOption("height", e.height), "undefined" !== typeof ImageData && null !== ImageData && e instanceof ImageData) r.data = e.data;
								else if ("undefined" !== typeof CanvasRenderingContext2D && null !== CanvasRenderingContext2D && e instanceof CanvasRenderingContext2D || "undefined" !== typeof WebGLRenderingContext && null !== WebGLRenderingContext && e instanceof WebGLRenderingContext) t.copy ? r.data = this.getContextData(e) : r.context = e;
								else {
									if (null == e.childNodes) throw new Error("Invalid image");
									t.copy ? r.data = this.getImageData(e) : r.image = e
								}
								return this.frames.push(r)
							}, r.prototype.render = function() {
								var e, t, n;
								if (this.running) throw new Error("Already running");
								if (null == this.options.width || null == this.options.height) throw new Error("Width and height must be set prior to rendering");
								if (this.running = !0, this.nextFrame = 0, this.finishedFrames = 0, this.imageParts = function() {
										var e, t, n;
										for (n = [], e = 0, t = this.frames.length; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) n.push(null);
										return n
									}.call(this), t = this.spawnWorkers(), !0 === this.options.globalPalette) this.renderNextFrame();
								else
									for (e = 0, n = t; 0 <= n ? e < n : e > n; 0 <= n ? ++e : --e) this.renderNextFrame();
								return this.emit("start"), this.emit("progress", 0)
							}, r.prototype.abort = function() {
								for (var e; null != (e = this.activeWorkers.shift());) this.log("killing active worker"), e.terminate();
								return this.running = !1, this.emit("abort")
							}, r.prototype.spawnWorkers = function() {
								var e, t, n, r;
								return e = Math.min(this.options.workers, this.frames.length),
									function() {
										n = [];
										for (var r = t = this.freeWorkers.length; t <= e ? r < e : r > e; t <= e ? r++ : r--) n.push(r);
										return n
									}.apply(this).forEach((r = this, function(e) {
										var t;
										return r.log("spawning worker " + e), (t = new Worker(r.options.workerScript)).onmessage = function(e) {
											return r.activeWorkers.splice(r.activeWorkers.indexOf(t), 1), r.freeWorkers.push(t), r.frameFinished(e.data)
										}, r.freeWorkers.push(t)
									})), e
							}, r.prototype.frameFinished = function(e) {
								var t, n;
								if (this.log("frame " + e.index + " finished - " + this.activeWorkers.length + " active"), this.finishedFrames++, this.emit("progress", this.finishedFrames / this.frames.length), this.imageParts[e.index] = e, !0 === this.options.globalPalette && (this.options.globalPalette = e.globalPalette, this.log("global palette analyzed"), this.frames.length > 2))
									for (t = 1, n = this.freeWorkers.length; 1 <= n ? t < n : t > n; 1 <= n ? ++t : --t) this.renderNextFrame();
								return l.call(this.imageParts, null) >= 0 ? this.renderNextFrame() : this.finishRendering()
							}, r.prototype.finishRendering = function() {
								var e, t, n, r, i, a, s, o, l, c, u, d, h, f, p, g;
								for (o = 0, i = 0, l = (f = this.imageParts).length; i < l; i++) o += ((t = f[i]).data.length - 1) * t.pageSize + t.cursor;
								for (o += t.pageSize - t.cursor, this.log("rendering finished - filesize " + Math.round(o / 1e3) + "kb"), e = new Uint8Array(o), d = 0, a = 0, c = (p = this.imageParts).length; a < c; a++)
									for (n = s = 0, u = (g = (t = p[a]).data).length; s < u; n = ++s) h = g[n], e.set(h, d), n === t.data.length - 1 ? d += t.cursor : d += t.pageSize;
								return r = new Blob([e], {
									type: "image/gif"
								}), this.emit("finished", r, e)
							}, r.prototype.renderNextFrame = function() {
								var e, t, n;
								if (0 === this.freeWorkers.length) throw new Error("No free workers");
								if (!(this.nextFrame >= this.frames.length)) return e = this.frames[this.nextFrame++], n = this.freeWorkers.shift(), t = this.getTask(e), this.log("starting frame " + (t.index + 1) + " of " + this.frames.length), this.activeWorkers.push(n), n.postMessage(t)
							}, r.prototype.getContextData = function(e) {
								return e.getImageData(0, 0, this.options.width, this.options.height).data
							}, r.prototype.getImageData = function(e) {
								var t;
								return null == this._canvas && (this._canvas = document.createElement("canvas"), this._canvas.width = this.options.width, this._canvas.height = this.options.height), (t = this._canvas.getContext("2d")).setFill = this.options.background, t.fillRect(0, 0, this.options.width, this.options.height), t.drawImage(e, 0, 0), this.getContextData(t)
							}, r.prototype.getTask = function(e) {
								var t, n;
								if (n = {
										index: t = this.frames.indexOf(e),
										last: t === this.frames.length - 1,
										delay: e.delay,
										transparent: e.transparent,
										width: this.options.width,
										height: this.options.height,
										quality: this.options.quality,
										dither: this.options.dither,
										globalPalette: this.options.globalPalette,
										repeat: this.options.repeat,
										canTransfer: "chrome" === a.name
									}, null != e.data) n.data = e.data;
								else if (null != e.context) n.data = this.getContextData(e.context);
								else {
									if (null == e.image) throw new Error("Invalid frame");
									n.data = this.getImageData(e.image)
								}
								return n
							}, r.prototype.log = function() {
								var e;
								if (e = 1 <= arguments.length ? c.call(arguments, 0) : [], this.options.debug) return console.log.apply(console, e)
							}, r
						}(r), t.exports = i
					}, {
						"./browser.coffee": 2,
						events: 1
					}]
				}, {}, [3])(3)
			},
			160: (e, t, n) => {
				"use strict";
				var r = n(43);

				function i(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				var a = Object.prototype.hasOwnProperty,
					s = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					o = {},
					l = {};

				function c(e) {
					return !!a.call(l, e) || !a.call(o, e) && (s.test(e) ? l[e] = !0 : (o[e] = !0, !1))
				}

				function u(e, t, n, r, i, a, s) {
					this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = s
				}
				var d = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
					d[e] = new u(e, 0, !1, e, null, !1, !1)
				})), [
					["acceptCharset", "accept-charset"],
					["className", "class"],
					["htmlFor", "for"],
					["httpEquiv", "http-equiv"]
				].forEach((function(e) {
					var t = e[0];
					d[t] = new u(t, 1, !1, e[1], null, !1, !1)
				})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
					d[e] = new u(e, 2, !1, e.toLowerCase(), null, !1, !1)
				})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
					d[e] = new u(e, 2, !1, e, null, !1, !1)
				})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
					d[e] = new u(e, 3, !1, e.toLowerCase(), null, !1, !1)
				})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
					d[e] = new u(e, 3, !0, e, null, !1, !1)
				})), ["capture", "download"].forEach((function(e) {
					d[e] = new u(e, 4, !1, e, null, !1, !1)
				})), ["cols", "rows", "size", "span"].forEach((function(e) {
					d[e] = new u(e, 6, !1, e, null, !1, !1)
				})), ["rowSpan", "start"].forEach((function(e) {
					d[e] = new u(e, 5, !1, e.toLowerCase(), null, !1, !1)
				}));
				var h = /[\-:]([a-z])/g;

				function f(e) {
					return e[1].toUpperCase()
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
					var t = e.replace(h, f);
					d[t] = new u(t, 1, !1, e, null, !1, !1)
				})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
					var t = e.replace(h, f);
					d[t] = new u(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
				})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
					var t = e.replace(h, f);
					d[t] = new u(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
				})), ["tabIndex", "crossOrigin"].forEach((function(e) {
					d[e] = new u(e, 1, !1, e.toLowerCase(), null, !1, !1)
				})), d.xlinkHref = new u("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
					d[e] = new u(e, 1, !1, e.toLowerCase(), null, !0, !0)
				}));
				var p = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0
					},
					g = ["Webkit", "ms", "Moz", "O"];
				Object.keys(p).forEach((function(e) {
					g.forEach((function(t) {
						t = t + e.charAt(0).toUpperCase() + e.substring(1), p[t] = p[e]
					}))
				}));
				var m = /["'&<>]/;

				function v(e) {
					if ("boolean" === typeof e || "number" === typeof e) return "" + e;
					e = "" + e;
					var t = m.exec(e);
					if (t) {
						var n, r = "",
							i = 0;
						for (n = t.index; n < e.length; n++) {
							switch (e.charCodeAt(n)) {
								case 34:
									t = "&quot;";
									break;
								case 38:
									t = "&amp;";
									break;
								case 39:
									t = "&#x27;";
									break;
								case 60:
									t = "&lt;";
									break;
								case 62:
									t = "&gt;";
									break;
								default:
									continue
							}
							i !== n && (r += e.substring(i, n)), i = n + 1, r += t
						}
						e = i !== n ? r + e.substring(i, n) : r
					}
					return e
				}
				var y = /([A-Z])/g,
					b = /^ms-/,
					w = Array.isArray;

				function x(e, t) {
					return {
						insertionMode: e,
						selectedValue: t
					}
				}
				var k = new Map;

				function S(e, t, n) {
					if ("object" !== typeof n) throw Error(i(62));
					for (var r in t = !0, n)
						if (a.call(n, r)) {
							var s = n[r];
							if (null != s && "boolean" !== typeof s && "" !== s) {
								if (0 === r.indexOf("--")) {
									var o = v(r);
									s = v(("" + s).trim())
								} else {
									o = r;
									var l = k.get(o);
									void 0 !== l || (l = v(o.replace(y, "-$1").toLowerCase().replace(b, "-ms-")), k.set(o, l)), o = l, s = "number" === typeof s ? 0 === s || a.call(p, r) ? "" + s : s + "px" : v(("" + s).trim())
								}
								t ? (t = !1, e.push(' style="', o, ":", s)) : e.push(";", o, ":", s)
							}
						} t || e.push('"')
				}

				function C(e, t, n, r) {
					switch (n) {
						case "style":
							return void S(e, t, r);
						case "defaultValue":
						case "defaultChecked":
						case "innerHTML":
						case "suppressContentEditableWarning":
						case "suppressHydrationWarning":
							return
					}
					if (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1])
						if (null !== (t = d.hasOwnProperty(n) ? d[n] : null)) {
							switch (typeof r) {
								case "function":
								case "symbol":
									return;
								case "boolean":
									if (!t.acceptsBooleans) return
							}
							switch (n = t.attributeName, t.type) {
								case 3:
									r && e.push(" ", n, '=""');
									break;
								case 4:
									!0 === r ? e.push(" ", n, '=""') : !1 !== r && e.push(" ", n, '="', v(r), '"');
									break;
								case 5:
									isNaN(r) || e.push(" ", n, '="', v(r), '"');
									break;
								case 6:
									!isNaN(r) && 1 <= r && e.push(" ", n, '="', v(r), '"');
									break;
								default:
									t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', v(r), '"')
							}
						} else if (c(n)) {
						switch (typeof r) {
							case "function":
							case "symbol":
								return;
							case "boolean":
								if ("data-" !== (t = n.toLowerCase().slice(0, 5)) && "aria-" !== t) return
						}
						e.push(" ", n, '="', v(r), '"')
					}
				}

				function _(e, t, n) {
					if (null != t) {
						if (null != n) throw Error(i(60));
						if ("object" !== typeof t || !("__html" in t)) throw Error(i(61));
						null !== (t = t.__html) && void 0 !== t && e.push("" + t)
					}
				}

				function E(e, t, n, r) {
					e.push(N(n));
					var i, s = n = null;
					for (i in t)
						if (a.call(t, i)) {
							var o = t[i];
							if (null != o) switch (i) {
								case "children":
									n = o;
									break;
								case "dangerouslySetInnerHTML":
									s = o;
									break;
								default:
									C(e, r, i, o)
							}
						} return e.push(">"), _(e, s, n), "string" === typeof n ? (e.push(v(n)), null) : n
				}
				var T = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
					I = new Map;

				function N(e) {
					var t = I.get(e);
					if (void 0 === t) {
						if (!T.test(e)) throw Error(i(65, e));
						t = "<" + e, I.set(e, t)
					}
					return t
				}

				function R(e, t, n, s, o) {
					switch (t) {
						case "select":
							e.push(N("select"));
							var l = null,
								u = null;
							for (p in n)
								if (a.call(n, p)) {
									var d = n[p];
									if (null != d) switch (p) {
										case "children":
											l = d;
											break;
										case "dangerouslySetInnerHTML":
											u = d;
											break;
										case "defaultValue":
										case "value":
											break;
										default:
											C(e, s, p, d)
									}
								} return e.push(">"), _(e, u, l), l;
						case "option":
							u = o.selectedValue, e.push(N("option"));
							var h = d = null,
								f = null,
								p = null;
							for (l in n)
								if (a.call(n, l)) {
									var g = n[l];
									if (null != g) switch (l) {
										case "children":
											d = g;
											break;
										case "selected":
											f = g;
											break;
										case "dangerouslySetInnerHTML":
											p = g;
											break;
										case "value":
											h = g;
										default:
											C(e, s, l, g)
									}
								} if (null != u)
								if (n = null !== h ? "" + h : function(e) {
										var t = "";
										return r.Children.forEach(e, (function(e) {
											null != e && (t += e)
										})), t
									}(d), w(u)) {
									for (s = 0; s < u.length; s++)
										if ("" + u[s] === n) {
											e.push(' selected=""');
											break
										}
								} else "" + u === n && e.push(' selected=""');
							else f && e.push(' selected=""');
							return e.push(">"), _(e, p, d), d;
						case "textarea":
							for (d in e.push(N("textarea")), p = u = l = null, n)
								if (a.call(n, d) && null != (h = n[d])) switch (d) {
									case "children":
										p = h;
										break;
									case "value":
										l = h;
										break;
									case "defaultValue":
										u = h;
										break;
									case "dangerouslySetInnerHTML":
										throw Error(i(91));
									default:
										C(e, s, d, h)
								}
							if (null === l && null !== u && (l = u), e.push(">"), null != p) {
								if (null != l) throw Error(i(92));
								if (w(p) && 1 < p.length) throw Error(i(93));
								l = "" + p
							}
							return "string" === typeof l && "\n" === l[0] && e.push("\n"), null !== l && e.push(v("" + l)), null;
						case "input":
							for (u in e.push(N("input")), h = p = d = l = null, n)
								if (a.call(n, u) && null != (f = n[u])) switch (u) {
									case "children":
									case "dangerouslySetInnerHTML":
										throw Error(i(399, "input"));
									case "defaultChecked":
										h = f;
										break;
									case "defaultValue":
										d = f;
										break;
									case "checked":
										p = f;
										break;
									case "value":
										l = f;
										break;
									default:
										C(e, s, u, f)
								}
							return null !== p ? C(e, s, "checked", p) : null !== h && C(e, s, "checked", h), null !== l ? C(e, s, "value", l) : null !== d && C(e, s, "value", d), e.push("/>"), null;
						case "menuitem":
							for (var m in e.push(N("menuitem")), n)
								if (a.call(n, m) && null != (l = n[m])) switch (m) {
									case "children":
									case "dangerouslySetInnerHTML":
										throw Error(i(400));
									default:
										C(e, s, m, l)
								}
							return e.push(">"), null;
						case "title":
							for (g in e.push(N("title")), l = null, n)
								if (a.call(n, g) && null != (u = n[g])) switch (g) {
									case "children":
										l = u;
										break;
									case "dangerouslySetInnerHTML":
										throw Error(i(434));
									default:
										C(e, s, g, u)
								}
							return e.push(">"), l;
						case "listing":
						case "pre":
							for (h in e.push(N(t)), u = l = null, n)
								if (a.call(n, h) && null != (d = n[h])) switch (h) {
									case "children":
										l = d;
										break;
									case "dangerouslySetInnerHTML":
										u = d;
										break;
									default:
										C(e, s, h, d)
								}
							if (e.push(">"), null != u) {
								if (null != l) throw Error(i(60));
								if ("object" !== typeof u || !("__html" in u)) throw Error(i(61));
								null !== (n = u.__html) && void 0 !== n && ("string" === typeof n && 0 < n.length && "\n" === n[0] ? e.push("\n", n) : e.push("" + n))
							}
							return "string" === typeof l && "\n" === l[0] && e.push("\n"), l;
						case "area":
						case "base":
						case "br":
						case "col":
						case "embed":
						case "hr":
						case "img":
						case "keygen":
						case "link":
						case "meta":
						case "param":
						case "source":
						case "track":
						case "wbr":
							for (var y in e.push(N(t)), n)
								if (a.call(n, y) && null != (l = n[y])) switch (y) {
									case "children":
									case "dangerouslySetInnerHTML":
										throw Error(i(399, t));
									default:
										C(e, s, y, l)
								}
							return e.push("/>"), null;
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return E(e, n, t, s);
						case "html":
							return 0 === o.insertionMode && e.push("<!DOCTYPE html>"), E(e, n, t, s);
						default:
							if (-1 === t.indexOf("-") && "string" !== typeof n.is) return E(e, n, t, s);
							for (f in e.push(N(t)), u = l = null, n)
								if (a.call(n, f) && null != (d = n[f])) switch (f) {
									case "children":
										l = d;
										break;
									case "dangerouslySetInnerHTML":
										u = d;
										break;
									case "style":
										S(e, s, d);
										break;
									case "suppressContentEditableWarning":
									case "suppressHydrationWarning":
										break;
									default:
										c(f) && "function" !== typeof d && "symbol" !== typeof d && e.push(" ", f, '="', v(d), '"')
								}
							return e.push(">"), _(e, u, l), l
					}
				}

				function A(e, t, n) {
					if (e.push('\x3c!--$?--\x3e<template id="'), null === n) throw Error(i(395));
					return e.push(n), e.push('"></template>')
				}
				var P = /[<\u2028\u2029]/g;

				function j(e) {
					return JSON.stringify(e).replace(P, (function(e) {
						switch (e) {
							case "<":
								return "\\u003c";
							case "\u2028":
								return "\\u2028";
							case "\u2029":
								return "\\u2029";
							default:
								throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
						}
					}))
				}

				function D(e, t, n, r) {
					return n.generateStaticMarkup ? (e.push(v(t)), !1) : ("" === t ? e = r : (r && e.push("\x3c!-- --\x3e"), e.push(v(t)), e = !0), e)
				}
				var O = Object.assign,
					L = Symbol.for("react.element"),
					M = Symbol.for("react.portal"),
					F = Symbol.for("react.fragment"),
					U = Symbol.for("react.strict_mode"),
					V = Symbol.for("react.profiler"),
					z = Symbol.for("react.provider"),
					B = Symbol.for("react.context"),
					G = Symbol.for("react.forward_ref"),
					q = Symbol.for("react.suspense"),
					H = Symbol.for("react.suspense_list"),
					W = Symbol.for("react.memo"),
					K = Symbol.for("react.lazy"),
					Q = Symbol.for("react.scope"),
					X = Symbol.for("react.debug_trace_mode"),
					Y = Symbol.for("react.legacy_hidden"),
					$ = Symbol.for("react.default_value"),
					J = Symbol.iterator;

				function Z(e) {
					if (null == e) return null;
					if ("function" === typeof e) return e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case F:
							return "Fragment";
						case M:
							return "Portal";
						case V:
							return "Profiler";
						case U:
							return "StrictMode";
						case q:
							return "Suspense";
						case H:
							return "SuspenseList"
					}
					if ("object" === typeof e) switch (e.$$typeof) {
						case B:
							return (e.displayName || "Context") + ".Consumer";
						case z:
							return (e._context.displayName || "Context") + ".Provider";
						case G:
							var t = e.render;
							return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
						case W:
							return null !== (t = e.displayName || null) ? t : Z(e.type) || "Memo";
						case K:
							t = e._payload, e = e._init;
							try {
								return Z(e(t))
							} catch (n) {}
					}
					return null
				}
				var ee = {};

				function te(e, t) {
					if (!(e = e.contextTypes)) return ee;
					var n, r = {};
					for (n in e) r[n] = t[n];
					return r
				}
				var ne = null;

				function re(e, t) {
					if (e !== t) {
						e.context._currentValue2 = e.parentValue, e = e.parent;
						var n = t.parent;
						if (null === e) {
							if (null !== n) throw Error(i(401))
						} else {
							if (null === n) throw Error(i(401));
							re(e, n)
						}
						t.context._currentValue2 = t.value
					}
				}

				function ie(e) {
					e.context._currentValue2 = e.parentValue, null !== (e = e.parent) && ie(e)
				}

				function ae(e) {
					var t = e.parent;
					null !== t && ae(t), e.context._currentValue2 = e.value
				}

				function se(e, t) {
					if (e.context._currentValue2 = e.parentValue, null === (e = e.parent)) throw Error(i(402));
					e.depth === t.depth ? re(e, t) : se(e, t)
				}

				function oe(e, t) {
					var n = t.parent;
					if (null === n) throw Error(i(402));
					e.depth === n.depth ? re(e, n) : oe(e, n), t.context._currentValue2 = t.value
				}

				function le(e) {
					var t = ne;
					t !== e && (null === t ? ae(e) : null === e ? ie(t) : t.depth === e.depth ? re(t, e) : t.depth > e.depth ? se(t, e) : oe(t, e), ne = e)
				}
				var ce = {
					isMounted: function() {
						return !1
					},
					enqueueSetState: function(e, t) {
						null !== (e = e._reactInternals).queue && e.queue.push(t)
					},
					enqueueReplaceState: function(e, t) {
						(e = e._reactInternals).replace = !0, e.queue = [t]
					},
					enqueueForceUpdate: function() {}
				};

				function ue(e, t, n, r) {
					var i = void 0 !== e.state ? e.state : null;
					e.updater = ce, e.props = n, e.state = i;
					var a = {
						queue: [],
						replace: !1
					};
					e._reactInternals = a;
					var s = t.contextType;
					if (e.context = "object" === typeof s && null !== s ? s._currentValue2 : r, "function" === typeof(s = t.getDerivedStateFromProps) && (i = null === (s = s(n, i)) || void 0 === s ? i : O({}, i, s), e.state = i), "function" !== typeof t.getDerivedStateFromProps && "function" !== typeof e.getSnapshotBeforeUpdate && ("function" === typeof e.UNSAFE_componentWillMount || "function" === typeof e.componentWillMount))
						if (t = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), t !== e.state && ce.enqueueReplaceState(e, e.state, null), null !== a.queue && 0 < a.queue.length)
							if (t = a.queue, s = a.replace, a.queue = null, a.replace = !1, s && 1 === t.length) e.state = t[0];
							else {
								for (a = s ? t[0] : e.state, i = !0, s = s ? 1 : 0; s < t.length; s++) {
									var o = t[s];
									null != (o = "function" === typeof o ? o.call(e, a, n, r) : o) && (i ? (i = !1, a = O({}, a, o)) : O(a, o))
								}
								e.state = a
							}
					else a.queue = null
				}
				var de = {
					id: 1,
					overflow: ""
				};

				function he(e, t, n) {
					var r = e.id;
					e = e.overflow;
					var i = 32 - fe(r) - 1;
					r &= ~(1 << i), n += 1;
					var a = 32 - fe(t) + i;
					if (30 < a) {
						var s = i - i % 5;
						return a = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, {
							id: 1 << 32 - fe(t) + i | n << i | r,
							overflow: a + e
						}
					}
					return {
						id: 1 << a | n << i | r,
						overflow: e
					}
				}
				var fe = Math.clz32 ? Math.clz32 : function(e) {
						return 0 === (e >>>= 0) ? 32 : 31 - (pe(e) / ge | 0) | 0
					},
					pe = Math.log,
					ge = Math.LN2;
				var me = "function" === typeof Object.is ? Object.is : function(e, t) {
						return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
					},
					ve = null,
					ye = null,
					be = null,
					we = null,
					xe = !1,
					ke = !1,
					Se = 0,
					Ce = null,
					_e = 0;

				function Ee() {
					if (null === ve) throw Error(i(321));
					return ve
				}

				function Te() {
					if (0 < _e) throw Error(i(312));
					return {
						memoizedState: null,
						queue: null,
						next: null
					}
				}

				function Ie() {
					return null === we ? null === be ? (xe = !1, be = we = Te()) : (xe = !0, we = be) : null === we.next ? (xe = !1, we = we.next = Te()) : (xe = !0, we = we.next), we
				}

				function Ne() {
					ye = ve = null, ke = !1, be = null, _e = 0, we = Ce = null
				}

				function Re(e, t) {
					return "function" === typeof t ? t(e) : t
				}

				function Ae(e, t, n) {
					if (ve = Ee(), we = Ie(), xe) {
						var r = we.queue;
						if (t = r.dispatch, null !== Ce && void 0 !== (n = Ce.get(r))) {
							Ce.delete(r), r = we.memoizedState;
							do {
								r = e(r, n.action), n = n.next
							} while (null !== n);
							return we.memoizedState = r, [r, t]
						}
						return [we.memoizedState, t]
					}
					return e = e === Re ? "function" === typeof t ? t() : t : void 0 !== n ? n(t) : t, we.memoizedState = e, e = (e = we.queue = {
						last: null,
						dispatch: null
					}).dispatch = je.bind(null, ve, e), [we.memoizedState, e]
				}

				function Pe(e, t) {
					if (ve = Ee(), t = void 0 === t ? null : t, null !== (we = Ie())) {
						var n = we.memoizedState;
						if (null !== n && null !== t) {
							var r = n[1];
							e: if (null === r) r = !1;
								else {
									for (var i = 0; i < r.length && i < t.length; i++)
										if (!me(t[i], r[i])) {
											r = !1;
											break e
										} r = !0
								}
							if (r) return n[0]
						}
					}
					return e = e(), we.memoizedState = [e, t], e
				}

				function je(e, t, n) {
					if (25 <= _e) throw Error(i(301));
					if (e === ve)
						if (ke = !0, e = {
								action: n,
								next: null
							}, null === Ce && (Ce = new Map), void 0 === (n = Ce.get(t))) Ce.set(t, e);
						else {
							for (t = n; null !== t.next;) t = t.next;
							t.next = e
						}
				}

				function De() {
					throw Error(i(394))
				}

				function Oe() {}
				var Le = {
						readContext: function(e) {
							return e._currentValue2
						},
						useContext: function(e) {
							return Ee(), e._currentValue2
						},
						useMemo: Pe,
						useReducer: Ae,
						useRef: function(e) {
							ve = Ee();
							var t = (we = Ie()).memoizedState;
							return null === t ? (e = {
								current: e
							}, we.memoizedState = e) : t
						},
						useState: function(e) {
							return Ae(Re, e)
						},
						useInsertionEffect: Oe,
						useLayoutEffect: function() {},
						useCallback: function(e, t) {
							return Pe((function() {
								return e
							}), t)
						},
						useImperativeHandle: Oe,
						useEffect: Oe,
						useDebugValue: Oe,
						useDeferredValue: function(e) {
							return Ee(), e
						},
						useTransition: function() {
							return Ee(), [!1, De]
						},
						useId: function() {
							var e = ye.treeContext,
								t = e.overflow;
							e = ((e = e.id) & ~(1 << 32 - fe(e) - 1)).toString(32) + t;
							var n = Me;
							if (null === n) throw Error(i(404));
							return t = Se++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":"
						},
						useMutableSource: function(e, t) {
							return Ee(), t(e._source)
						},
						useSyncExternalStore: function(e, t, n) {
							if (void 0 === n) throw Error(i(407));
							return n()
						}
					},
					Me = null,
					Fe = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;

				function Ue(e) {
					return console.error(e), null
				}

				function Ve() {}

				function ze(e, t, n, r, i, a, s, o) {
					e.allPendingTasks++, null === n ? e.pendingRootTasks++ : n.pendingTasks++;
					var l = {
						node: t,
						ping: function() {
							var t = e.pingedTasks;
							t.push(l), 1 === t.length && nt(e)
						},
						blockedBoundary: n,
						blockedSegment: r,
						abortSet: i,
						legacyContext: a,
						context: s,
						treeContext: o
					};
					return i.add(l), l
				}

				function Be(e, t, n, r, i, a) {
					return {
						status: 0,
						id: -1,
						index: t,
						parentFlushed: !1,
						chunks: [],
						children: [],
						formatContext: r,
						boundary: n,
						lastPushedText: i,
						textEmbedded: a
					}
				}

				function Ge(e, t) {
					if (null != (e = e.onError(t)) && "string" !== typeof e) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
					return e
				}

				function qe(e, t) {
					var n = e.onShellError;
					n(t), (n = e.onFatalError)(t), null !== e.destination ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t)
				}

				function He(e, t, n, r, i) {
					for (ve = {}, ye = t, Se = 0, e = n(r, i); ke;) ke = !1, Se = 0, _e += 1, we = null, e = n(r, i);
					return Ne(), e
				}

				function We(e, t, n, r) {
					var a = n.render(),
						s = r.childContextTypes;
					if (null !== s && void 0 !== s) {
						var o = t.legacyContext;
						if ("function" !== typeof n.getChildContext) r = o;
						else {
							for (var l in n = n.getChildContext())
								if (!(l in s)) throw Error(i(108, Z(r) || "Unknown", l));
							r = O({}, o, n)
						}
						t.legacyContext = r, Xe(e, t, a), t.legacyContext = o
					} else Xe(e, t, a)
				}

				function Ke(e, t) {
					if (e && e.defaultProps) {
						for (var n in t = O({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
						return t
					}
					return t
				}

				function Qe(e, t, n, r, a) {
					if ("function" === typeof n)
						if (n.prototype && n.prototype.isReactComponent) {
							a = te(n, t.legacyContext);
							var s = n.contextType;
							ue(s = new n(r, "object" === typeof s && null !== s ? s._currentValue2 : a), n, r, a), We(e, t, s, n)
						} else {
							a = He(e, t, n, r, s = te(n, t.legacyContext));
							var o = 0 !== Se;
							if ("object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof) ue(a, n, r, s), We(e, t, a, n);
							else if (o) {
								r = t.treeContext, t.treeContext = he(r, 1, 0);
								try {
									Xe(e, t, a)
								} finally {
									t.treeContext = r
								}
							} else Xe(e, t, a)
						}
					else {
						if ("string" !== typeof n) {
							switch (n) {
								case Y:
								case X:
								case U:
								case V:
								case F:
								case H:
									return void Xe(e, t, r.children);
								case Q:
									throw Error(i(343));
								case q:
									e: {
										n = t.blockedBoundary,
										a = t.blockedSegment,
										s = r.fallback,
										r = r.children;
										var l = {
												id: null,
												rootSegmentID: -1,
												parentFlushed: !1,
												pendingTasks: 0,
												forceClientRender: !1,
												completedSegments: [],
												byteSize: 0,
												fallbackAbortableTasks: o = new Set,
												errorDigest: null
											},
											c = Be(0, a.chunks.length, l, a.formatContext, !1, !1);a.children.push(c),
										a.lastPushedText = !1;
										var u = Be(0, 0, null, a.formatContext, !1, !1);u.parentFlushed = !0,
										t.blockedBoundary = l,
										t.blockedSegment = u;
										try {
											if ($e(e, t, r), e.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push("\x3c!-- --\x3e"), u.status = 1, et(l, u), 0 === l.pendingTasks) break e
										} catch (d) {
											u.status = 4, l.forceClientRender = !0, l.errorDigest = Ge(e, d)
										} finally {
											t.blockedBoundary = n, t.blockedSegment = a
										}
										t = ze(e, s, n, c, o, t.legacyContext, t.context, t.treeContext),
										e.pingedTasks.push(t)
									}
									return
							}
							if ("object" === typeof n && null !== n) switch (n.$$typeof) {
								case G:
									if (r = He(e, t, n.render, r, a), 0 !== Se) {
										n = t.treeContext, t.treeContext = he(n, 1, 0);
										try {
											Xe(e, t, r)
										} finally {
											t.treeContext = n
										}
									} else Xe(e, t, r);
									return;
								case W:
									return void Qe(e, t, n = n.type, r = Ke(n, r), a);
								case z:
									if (a = r.children, n = n._context, r = r.value, s = n._currentValue2, n._currentValue2 = r, ne = r = {
											parent: o = ne,
											depth: null === o ? 0 : o.depth + 1,
											context: n,
											parentValue: s,
											value: r
										}, t.context = r, Xe(e, t, a), null === (e = ne)) throw Error(i(403));
									return r = e.parentValue, e.context._currentValue2 = r === $ ? e.context._defaultValue : r, e = ne = e.parent, void(t.context = e);
								case B:
									return void Xe(e, t, r = (r = r.children)(n._currentValue2));
								case K:
									return void Qe(e, t, n = (a = n._init)(n._payload), r = Ke(n, r), void 0)
							}
							throw Error(i(130, null == n ? n : typeof n, ""))
						}
						switch (s = R((a = t.blockedSegment).chunks, n, r, e.responseState, a.formatContext), a.lastPushedText = !1, o = a.formatContext, a.formatContext = function(e, t, n) {
								switch (t) {
									case "select":
										return x(1, null != n.value ? n.value : n.defaultValue);
									case "svg":
										return x(2, null);
									case "math":
										return x(3, null);
									case "foreignObject":
										return x(1, null);
									case "table":
										return x(4, null);
									case "thead":
									case "tbody":
									case "tfoot":
										return x(5, null);
									case "colgroup":
										return x(7, null);
									case "tr":
										return x(6, null)
								}
								return 4 <= e.insertionMode || 0 === e.insertionMode ? x(1, null) : e
							}(o, n, r), $e(e, t, s), a.formatContext = o, n) {
							case "area":
							case "base":
							case "br":
							case "col":
							case "embed":
							case "hr":
							case "img":
							case "input":
							case "keygen":
							case "link":
							case "meta":
							case "param":
							case "source":
							case "track":
							case "wbr":
								break;
							default:
								a.chunks.push("</", n, ">")
						}
						a.lastPushedText = !1
					}
				}

				function Xe(e, t, n) {
					if (t.node = n, "object" === typeof n && null !== n) {
						switch (n.$$typeof) {
							case L:
								return void Qe(e, t, n.type, n.props, n.ref);
							case M:
								throw Error(i(257));
							case K:
								var r = n._init;
								return void Xe(e, t, n = r(n._payload))
						}
						if (w(n)) return void Ye(e, t, n);
						if (null === n || "object" !== typeof n ? r = null : r = "function" === typeof(r = J && n[J] || n["@@iterator"]) ? r : null, r && (r = r.call(n))) {
							if (!(n = r.next()).done) {
								var a = [];
								do {
									a.push(n.value), n = r.next()
								} while (!n.done);
								Ye(e, t, a)
							}
							return
						}
						throw e = Object.prototype.toString.call(n), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
					}
					"string" === typeof n ? (r = t.blockedSegment).lastPushedText = D(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText) : "number" === typeof n && ((r = t.blockedSegment).lastPushedText = D(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText))
				}

				function Ye(e, t, n) {
					for (var r = n.length, i = 0; i < r; i++) {
						var a = t.treeContext;
						t.treeContext = he(a, r, i);
						try {
							$e(e, t, n[i])
						} finally {
							t.treeContext = a
						}
					}
				}

				function $e(e, t, n) {
					var r = t.blockedSegment.formatContext,
						i = t.legacyContext,
						a = t.context;
					try {
						return Xe(e, t, n)
					} catch (l) {
						if (Ne(), "object" !== typeof l || null === l || "function" !== typeof l.then) throw t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, le(a), l;
						n = l;
						var s = t.blockedSegment,
							o = Be(0, s.chunks.length, null, s.formatContext, s.lastPushedText, !0);
						s.children.push(o), s.lastPushedText = !1, e = ze(e, t.node, t.blockedBoundary, o, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, le(a)
					}
				}

				function Je(e) {
					var t = e.blockedBoundary;
					(e = e.blockedSegment).status = 3, tt(this, t, e)
				}

				function Ze(e, t, n) {
					var r = e.blockedBoundary;
					e.blockedSegment.status = 3, null === r ? (t.allPendingTasks--, 2 !== t.status && (t.status = 2, null !== t.destination && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = void 0 === n ? Error(i(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach((function(e) {
						return Ze(e, t, n)
					})), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, 0 === t.allPendingTasks && (r = t.onAllReady)())
				}

				function et(e, t) {
					if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary) {
						var n = t.children[0];
						n.id = t.id, n.parentFlushed = !0, 1 === n.status && et(e, n)
					} else e.completedSegments.push(t)
				}

				function tt(e, t, n) {
					if (null === t) {
						if (n.parentFlushed) {
							if (null !== e.completedRootSegment) throw Error(i(389));
							e.completedRootSegment = n
						}
						e.pendingRootTasks--, 0 === e.pendingRootTasks && (e.onShellError = Ve, (t = e.onShellReady)())
					} else t.pendingTasks--, t.forceClientRender || (0 === t.pendingTasks ? (n.parentFlushed && 1 === n.status && et(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Je, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && 1 === n.status && (et(t, n), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t)));
					e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)()
				}

				function nt(e) {
					if (2 !== e.status) {
						var t = ne,
							n = Fe.current;
						Fe.current = Le;
						var r = Me;
						Me = e.responseState;
						try {
							var i, a = e.pingedTasks;
							for (i = 0; i < a.length; i++) {
								var s = a[i],
									o = e,
									l = s.blockedSegment;
								if (0 === l.status) {
									le(s.context);
									try {
										Xe(o, s, s.node), o.responseState.generateStaticMarkup || l.lastPushedText && l.textEmbedded && l.chunks.push("\x3c!-- --\x3e"), s.abortSet.delete(s), l.status = 1, tt(o, s.blockedBoundary, l)
									} catch (f) {
										if (Ne(), "object" === typeof f && null !== f && "function" === typeof f.then) {
											var c = s.ping;
											f.then(c, c)
										} else {
											s.abortSet.delete(s), l.status = 4;
											var u = s.blockedBoundary,
												d = f,
												h = Ge(o, d);
											if (null === u ? qe(o, d) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, u.errorDigest = h, u.parentFlushed && o.clientRenderedBoundaries.push(u))), o.allPendingTasks--, 0 === o.allPendingTasks)(0, o.onAllReady)()
										}
									}
								}
							}
							a.splice(0, i), null !== e.destination && lt(e, e.destination)
						} catch (f) {
							Ge(e, f), qe(e, f)
						} finally {
							Me = r, Fe.current = n, n === Le && le(t)
						}
					}
				}

				function rt(e, t, n) {
					switch (n.parentFlushed = !0, n.status) {
						case 0:
							var r = n.id = e.nextSegmentId++;
							return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, t.push('<template id="'), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push('"></template>');
						case 1:
							n.status = 2;
							var a = !0;
							r = n.chunks;
							var s = 0;
							n = n.children;
							for (var o = 0; o < n.length; o++) {
								for (a = n[o]; s < a.index; s++) t.push(r[s]);
								a = it(e, t, a)
							}
							for (; s < r.length - 1; s++) t.push(r[s]);
							return s < r.length && (a = t.push(r[s])), a;
						default:
							throw Error(i(390))
					}
				}

				function it(e, t, n) {
					var r = n.boundary;
					if (null === r) return rt(e, t, n);
					if (r.parentFlushed = !0, r.forceClientRender) return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push("\x3c!--$!--\x3e"), t.push("<template"), r && (t.push(' data-dgst="'), r = v(r), t.push(r), t.push('"')), t.push("></template>")), rt(e, t, n), e = !!e.responseState.generateStaticMarkup || t.push("\x3c!--/$--\x3e");
					if (0 < r.pendingTasks) {
						r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
						var a = e.responseState,
							s = a.nextSuspenseID++;
						return a = a.boundaryPrefix + s.toString(16), r = r.id = a, A(t, e.responseState, r), rt(e, t, n), t.push("\x3c!--/$--\x3e")
					}
					if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), A(t, e.responseState, r.id), rt(e, t, n), t.push("\x3c!--/$--\x3e");
					if (e.responseState.generateStaticMarkup || t.push("\x3c!--$--\x3e"), 1 !== (n = r.completedSegments).length) throw Error(i(391));
					return it(e, t, n[0]), e = !!e.responseState.generateStaticMarkup || t.push("\x3c!--/$--\x3e")
				}

				function at(e, t, n) {
					return function(e, t, n, r) {
							switch (n.insertionMode) {
								case 0:
								case 1:
									return e.push('<div hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
								case 2:
									return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
								case 3:
									return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
								case 4:
									return e.push('<table hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
								case 5:
									return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
								case 6:
									return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
								case 7:
									return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
								default:
									throw Error(i(397))
							}
						}(t, e.responseState, n.formatContext, n.id), it(e, t, n),
						function(e, t) {
							switch (t.insertionMode) {
								case 0:
								case 1:
									return e.push("</div>");
								case 2:
									return e.push("</svg>");
								case 3:
									return e.push("</math>");
								case 4:
									return e.push("</table>");
								case 5:
									return e.push("</tbody></table>");
								case 6:
									return e.push("</tr></table>");
								case 7:
									return e.push("</colgroup></table>");
								default:
									throw Error(i(397))
							}
						}(t, n.formatContext)
				}

				function st(e, t, n) {
					for (var r = n.completedSegments, a = 0; a < r.length; a++) ot(e, t, n, r[a]);
					if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), null === r) throw Error(i(395));
					return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>')
				}

				function ot(e, t, n, r) {
					if (2 === r.status) return !0;
					var a = r.id;
					if (-1 === a) {
						if (-1 === (r.id = n.rootSegmentID)) throw Error(i(392));
						return at(e, t, r)
					}
					return at(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), a = a.toString(16), t.push(a), t.push('","'), t.push(e.placeholderPrefix), t.push(a), t.push('")<\/script>')
				}

				function lt(e, t) {
					try {
						var n = e.completedRootSegment;
						if (null !== n && 0 === e.pendingRootTasks) {
							it(e, t, n), e.completedRootSegment = null;
							var r = e.responseState.bootstrapChunks;
							for (n = 0; n < r.length - 1; n++) t.push(r[n]);
							n < r.length && t.push(r[n])
						}
						var a, s = e.clientRenderedBoundaries;
						for (a = 0; a < s.length; a++) {
							var o = s[a];
							r = t;
							var l = e.responseState,
								c = o.id,
								u = o.errorDigest,
								d = o.errorMessage,
								h = o.errorComponentStack;
							if (r.push(l.startInlineScript), l.sentClientRenderFunction ? r.push('$RX("') : (l.sentClientRenderFunction = !0, r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), null === c) throw Error(i(395));
							if (r.push(c), r.push('"'), u || d || h) {
								r.push(",");
								var f = j(u || "");
								r.push(f)
							}
							if (d || h) {
								r.push(",");
								var p = j(d || "");
								r.push(p)
							}
							if (h) {
								r.push(",");
								var g = j(h);
								r.push(g)
							}
							if (!r.push(")<\/script>")) return e.destination = null, a++, void s.splice(0, a)
						}
						s.splice(0, a);
						var m = e.completedBoundaries;
						for (a = 0; a < m.length; a++)
							if (!st(e, t, m[a])) return e.destination = null, a++, void m.splice(0, a);
						m.splice(0, a);
						var v = e.partialBoundaries;
						for (a = 0; a < v.length; a++) {
							var y = v[a];
							e: {
								s = e,
								o = t;
								var b = y.completedSegments;
								for (l = 0; l < b.length; l++)
									if (!ot(s, o, y, b[l])) {
										l++, b.splice(0, l);
										var w = !1;
										break e
									} b.splice(0, l),
								w = !0
							}
							if (!w) return e.destination = null, a++, void v.splice(0, a)
						}
						v.splice(0, a);
						var x = e.completedBoundaries;
						for (a = 0; a < x.length; a++)
							if (!st(e, t, x[a])) return e.destination = null, a++, void x.splice(0, a);
						x.splice(0, a)
					} finally {
						0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length && t.push(null)
					}
				}

				function ct(e, t) {
					try {
						var n = e.abortableTasks;
						n.forEach((function(n) {
							return Ze(n, e, t)
						})), n.clear(), null !== e.destination && lt(e, e.destination)
					} catch (r) {
						Ge(e, r), qe(e, r)
					}
				}

				function ut() {}

				function dt(e, t, n, r) {
					var a = !1,
						s = null,
						o = "",
						l = {
							push: function(e) {
								return null !== e && (o += e), !0
							},
							destroy: function(e) {
								a = !0, s = e
							}
						},
						c = !1;
					if (e = function(e, t, n, r, i, a, s, o, l) {
							var c = [],
								u = new Set;
							return (n = Be(t = {
								destination: null,
								responseState: t,
								progressiveChunkSize: void 0 === r ? 12800 : r,
								status: 0,
								fatalError: null,
								nextSegmentId: 0,
								allPendingTasks: 0,
								pendingRootTasks: 0,
								completedRootSegment: null,
								abortableTasks: u,
								pingedTasks: c,
								clientRenderedBoundaries: [],
								completedBoundaries: [],
								partialBoundaries: [],
								onError: void 0 === i ? Ue : i,
								onAllReady: void 0 === a ? Ve : a,
								onShellReady: void 0 === s ? Ve : s,
								onShellError: void 0 === o ? Ve : o,
								onFatalError: void 0 === l ? Ve : l
							}, 0, null, n, !1, !1)).parentFlushed = !0, e = ze(t, e, null, n, u, ee, null, de), c.push(e), t
						}(e, function(e, t) {
							return {
								bootstrapChunks: [],
								startInlineScript: "<script>",
								placeholderPrefix: (t = void 0 === t ? "" : t) + "P:",
								segmentPrefix: t + "S:",
								boundaryPrefix: t + "B:",
								idPrefix: t,
								nextSuspenseID: 0,
								sentCompleteSegmentFunction: !1,
								sentCompleteBoundaryFunction: !1,
								sentClientRenderFunction: !1,
								generateStaticMarkup: e
							}
						}(n, t ? t.identifierPrefix : void 0), {
							insertionMode: 1,
							selectedValue: null
						}, 1 / 0, ut, void 0, (function() {
							c = !0
						}), void 0, void 0), nt(e), ct(e, r), 1 === e.status) e.status = 2, l.destroy(e.fatalError);
					else if (2 !== e.status && null === e.destination) {
						e.destination = l;
						try {
							lt(e, l)
						} catch (u) {
							Ge(e, u), qe(e, u)
						}
					}
					if (a) throw s;
					if (!c) throw Error(i(426));
					return o
				}
				t.renderToNodeStream = function() {
					throw Error(i(207))
				}, t.renderToStaticMarkup = function(e, t) {
					return dt(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')
				}, t.renderToStaticNodeStream = function() {
					throw Error(i(208))
				}, t.renderToString = function(e, t) {
					return dt(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')
				}, t.version = "18.3.1"
			},
			556: (e, t, n) => {
				"use strict";
				var r = n(43);

				function i(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				var a = null,
					s = 0;

				function o(e, t) {
					if (0 !== t.length)
						if (512 < t.length) 0 < s && (e.enqueue(new Uint8Array(a.buffer, 0, s)), a = new Uint8Array(512), s = 0), e.enqueue(t);
						else {
							var n = a.length - s;
							n < t.length && (0 === n ? e.enqueue(a) : (a.set(t.subarray(0, n), s), e.enqueue(a), t = t.subarray(n)), a = new Uint8Array(512), s = 0), a.set(t, s), s += t.length
						}
				}

				function l(e, t) {
					return o(e, t), !0
				}

				function c(e) {
					a && 0 < s && (e.enqueue(new Uint8Array(a.buffer, 0, s)), a = null, s = 0)
				}
				var u = new TextEncoder;

				function d(e) {
					return u.encode(e)
				}

				function h(e) {
					return u.encode(e)
				}

				function f(e, t) {
					"function" === typeof e.error ? e.error(t) : e.close()
				}
				var p = Object.prototype.hasOwnProperty,
					g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					m = {},
					v = {};

				function y(e) {
					return !!p.call(v, e) || !p.call(m, e) && (g.test(e) ? v[e] = !0 : (m[e] = !0, !1))
				}

				function b(e, t, n, r, i, a, s) {
					this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = s
				}
				var w = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
					w[e] = new b(e, 0, !1, e, null, !1, !1)
				})), [
					["acceptCharset", "accept-charset"],
					["className", "class"],
					["htmlFor", "for"],
					["httpEquiv", "http-equiv"]
				].forEach((function(e) {
					var t = e[0];
					w[t] = new b(t, 1, !1, e[1], null, !1, !1)
				})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
					w[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1)
				})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
					w[e] = new b(e, 2, !1, e, null, !1, !1)
				})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
					w[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1)
				})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
					w[e] = new b(e, 3, !0, e, null, !1, !1)
				})), ["capture", "download"].forEach((function(e) {
					w[e] = new b(e, 4, !1, e, null, !1, !1)
				})), ["cols", "rows", "size", "span"].forEach((function(e) {
					w[e] = new b(e, 6, !1, e, null, !1, !1)
				})), ["rowSpan", "start"].forEach((function(e) {
					w[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1)
				}));
				var x = /[\-:]([a-z])/g;

				function k(e) {
					return e[1].toUpperCase()
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
					var t = e.replace(x, k);
					w[t] = new b(t, 1, !1, e, null, !1, !1)
				})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
					var t = e.replace(x, k);
					w[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
				})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
					var t = e.replace(x, k);
					w[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
				})), ["tabIndex", "crossOrigin"].forEach((function(e) {
					w[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1)
				})), w.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
					w[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0)
				}));
				var S = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0
					},
					C = ["Webkit", "ms", "Moz", "O"];
				Object.keys(S).forEach((function(e) {
					C.forEach((function(t) {
						t = t + e.charAt(0).toUpperCase() + e.substring(1), S[t] = S[e]
					}))
				}));
				var _ = /["'&<>]/;

				function E(e) {
					if ("boolean" === typeof e || "number" === typeof e) return "" + e;
					e = "" + e;
					var t = _.exec(e);
					if (t) {
						var n, r = "",
							i = 0;
						for (n = t.index; n < e.length; n++) {
							switch (e.charCodeAt(n)) {
								case 34:
									t = "&quot;";
									break;
								case 38:
									t = "&amp;";
									break;
								case 39:
									t = "&#x27;";
									break;
								case 60:
									t = "&lt;";
									break;
								case 62:
									t = "&gt;";
									break;
								default:
									continue
							}
							i !== n && (r += e.substring(i, n)), i = n + 1, r += t
						}
						e = i !== n ? r + e.substring(i, n) : r
					}
					return e
				}
				var T = /([A-Z])/g,
					I = /^ms-/,
					N = Array.isArray,
					R = h("<script>"),
					A = h("<\/script>"),
					P = h('<script src="'),
					j = h('<script type="module" src="'),
					D = h('" async=""><\/script>'),
					O = /(<\/|<)(s)(cript)/gi;

				function L(e, t, n, r) {
					return t + ("s" === n ? "\\u0073" : "\\u0053") + r
				}

				function M(e, t) {
					return {
						insertionMode: e,
						selectedValue: t
					}
				}
				var F = h("\x3c!-- --\x3e");

				function U(e, t, n, r) {
					return "" === t ? r : (r && e.push(F), e.push(d(E(t))), !0)
				}
				var V = new Map,
					z = h(' style="'),
					B = h(":"),
					G = h(";");

				function q(e, t, n) {
					if ("object" !== typeof n) throw Error(i(62));
					for (var r in t = !0, n)
						if (p.call(n, r)) {
							var a = n[r];
							if (null != a && "boolean" !== typeof a && "" !== a) {
								if (0 === r.indexOf("--")) {
									var s = d(E(r));
									a = d(E(("" + a).trim()))
								} else {
									s = r;
									var o = V.get(s);
									void 0 !== o || (o = h(E(s.replace(T, "-$1").toLowerCase().replace(I, "-ms-"))), V.set(s, o)), s = o, a = "number" === typeof a ? 0 === a || p.call(S, r) ? d("" + a) : d(a + "px") : d(E(("" + a).trim()))
								}
								t ? (t = !1, e.push(z, s, B, a)) : e.push(G, s, B, a)
							}
						} t || e.push(K)
				}
				var H = h(" "),
					W = h('="'),
					K = h('"'),
					Q = h('=""');

				function X(e, t, n, r) {
					switch (n) {
						case "style":
							return void q(e, t, r);
						case "defaultValue":
						case "defaultChecked":
						case "innerHTML":
						case "suppressContentEditableWarning":
						case "suppressHydrationWarning":
							return
					}
					if (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1])
						if (null !== (t = w.hasOwnProperty(n) ? w[n] : null)) {
							switch (typeof r) {
								case "function":
								case "symbol":
									return;
								case "boolean":
									if (!t.acceptsBooleans) return
							}
							switch (n = d(t.attributeName), t.type) {
								case 3:
									r && e.push(H, n, Q);
									break;
								case 4:
									!0 === r ? e.push(H, n, Q) : !1 !== r && e.push(H, n, W, d(E(r)), K);
									break;
								case 5:
									isNaN(r) || e.push(H, n, W, d(E(r)), K);
									break;
								case 6:
									!isNaN(r) && 1 <= r && e.push(H, n, W, d(E(r)), K);
									break;
								default:
									t.sanitizeURL && (r = "" + r), e.push(H, n, W, d(E(r)), K)
							}
						} else if (y(n)) {
						switch (typeof r) {
							case "function":
							case "symbol":
								return;
							case "boolean":
								if ("data-" !== (t = n.toLowerCase().slice(0, 5)) && "aria-" !== t) return
						}
						e.push(H, d(n), W, d(E(r)), K)
					}
				}
				var Y = h(">"),
					$ = h("/>");

				function J(e, t, n) {
					if (null != t) {
						if (null != n) throw Error(i(60));
						if ("object" !== typeof t || !("__html" in t)) throw Error(i(61));
						null !== (t = t.__html) && void 0 !== t && e.push(d("" + t))
					}
				}
				var Z = h(' selected=""');

				function ee(e, t, n, r) {
					e.push(ie(n));
					var i, a = n = null;
					for (i in t)
						if (p.call(t, i)) {
							var s = t[i];
							if (null != s) switch (i) {
								case "children":
									n = s;
									break;
								case "dangerouslySetInnerHTML":
									a = s;
									break;
								default:
									X(e, r, i, s)
							}
						} return e.push(Y), J(e, a, n), "string" === typeof n ? (e.push(d(E(n))), null) : n
				}
				var te = h("\n"),
					ne = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
					re = new Map;

				function ie(e) {
					var t = re.get(e);
					if (void 0 === t) {
						if (!ne.test(e)) throw Error(i(65, e));
						t = h("<" + e), re.set(e, t)
					}
					return t
				}
				var ae = h("<!DOCTYPE html>");

				function se(e, t, n, a, s) {
					switch (t) {
						case "select":
							e.push(ie("select"));
							var o = null,
								l = null;
							for (f in n)
								if (p.call(n, f)) {
									var c = n[f];
									if (null != c) switch (f) {
										case "children":
											o = c;
											break;
										case "dangerouslySetInnerHTML":
											l = c;
											break;
										case "defaultValue":
										case "value":
											break;
										default:
											X(e, a, f, c)
									}
								} return e.push(Y), J(e, l, o), o;
						case "option":
							l = s.selectedValue, e.push(ie("option"));
							var u = c = null,
								h = null,
								f = null;
							for (o in n)
								if (p.call(n, o)) {
									var g = n[o];
									if (null != g) switch (o) {
										case "children":
											c = g;
											break;
										case "selected":
											h = g;
											break;
										case "dangerouslySetInnerHTML":
											f = g;
											break;
										case "value":
											u = g;
										default:
											X(e, a, o, g)
									}
								} if (null != l)
								if (n = null !== u ? "" + u : function(e) {
										var t = "";
										return r.Children.forEach(e, (function(e) {
											null != e && (t += e)
										})), t
									}(c), N(l)) {
									for (a = 0; a < l.length; a++)
										if ("" + l[a] === n) {
											e.push(Z);
											break
										}
								} else "" + l === n && e.push(Z);
							else h && e.push(Z);
							return e.push(Y), J(e, f, c), c;
						case "textarea":
							for (c in e.push(ie("textarea")), f = l = o = null, n)
								if (p.call(n, c) && null != (u = n[c])) switch (c) {
									case "children":
										f = u;
										break;
									case "value":
										o = u;
										break;
									case "defaultValue":
										l = u;
										break;
									case "dangerouslySetInnerHTML":
										throw Error(i(91));
									default:
										X(e, a, c, u)
								}
							if (null === o && null !== l && (o = l), e.push(Y), null != f) {
								if (null != o) throw Error(i(92));
								if (N(f) && 1 < f.length) throw Error(i(93));
								o = "" + f
							}
							return "string" === typeof o && "\n" === o[0] && e.push(te), null !== o && e.push(d(E("" + o))), null;
						case "input":
							for (l in e.push(ie("input")), u = f = c = o = null, n)
								if (p.call(n, l) && null != (h = n[l])) switch (l) {
									case "children":
									case "dangerouslySetInnerHTML":
										throw Error(i(399, "input"));
									case "defaultChecked":
										u = h;
										break;
									case "defaultValue":
										c = h;
										break;
									case "checked":
										f = h;
										break;
									case "value":
										o = h;
										break;
									default:
										X(e, a, l, h)
								}
							return null !== f ? X(e, a, "checked", f) : null !== u && X(e, a, "checked", u), null !== o ? X(e, a, "value", o) : null !== c && X(e, a, "value", c), e.push($), null;
						case "menuitem":
							for (var m in e.push(ie("menuitem")), n)
								if (p.call(n, m) && null != (o = n[m])) switch (m) {
									case "children":
									case "dangerouslySetInnerHTML":
										throw Error(i(400));
									default:
										X(e, a, m, o)
								}
							return e.push(Y), null;
						case "title":
							for (g in e.push(ie("title")), o = null, n)
								if (p.call(n, g) && null != (l = n[g])) switch (g) {
									case "children":
										o = l;
										break;
									case "dangerouslySetInnerHTML":
										throw Error(i(434));
									default:
										X(e, a, g, l)
								}
							return e.push(Y), o;
						case "listing":
						case "pre":
							for (u in e.push(ie(t)), l = o = null, n)
								if (p.call(n, u) && null != (c = n[u])) switch (u) {
									case "children":
										o = c;
										break;
									case "dangerouslySetInnerHTML":
										l = c;
										break;
									default:
										X(e, a, u, c)
								}
							if (e.push(Y), null != l) {
								if (null != o) throw Error(i(60));
								if ("object" !== typeof l || !("__html" in l)) throw Error(i(61));
								null !== (n = l.__html) && void 0 !== n && ("string" === typeof n && 0 < n.length && "\n" === n[0] ? e.push(te, d(n)) : e.push(d("" + n)))
							}
							return "string" === typeof o && "\n" === o[0] && e.push(te), o;
						case "area":
						case "base":
						case "br":
						case "col":
						case "embed":
						case "hr":
						case "img":
						case "keygen":
						case "link":
						case "meta":
						case "param":
						case "source":
						case "track":
						case "wbr":
							for (var v in e.push(ie(t)), n)
								if (p.call(n, v) && null != (o = n[v])) switch (v) {
									case "children":
									case "dangerouslySetInnerHTML":
										throw Error(i(399, t));
									default:
										X(e, a, v, o)
								}
							return e.push($), null;
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return ee(e, n, t, a);
						case "html":
							return 0 === s.insertionMode && e.push(ae), ee(e, n, t, a);
						default:
							if (-1 === t.indexOf("-") && "string" !== typeof n.is) return ee(e, n, t, a);
							for (h in e.push(ie(t)), l = o = null, n)
								if (p.call(n, h) && null != (c = n[h])) switch (h) {
									case "children":
										o = c;
										break;
									case "dangerouslySetInnerHTML":
										l = c;
										break;
									case "style":
										q(e, a, c);
										break;
									case "suppressContentEditableWarning":
									case "suppressHydrationWarning":
										break;
									default:
										y(h) && "function" !== typeof c && "symbol" !== typeof c && e.push(H, d(h), W, d(E(c)), K)
								}
							return e.push(Y), J(e, l, o), o
					}
				}
				var oe = h("</"),
					le = h(">"),
					ce = h('<template id="'),
					ue = h('"></template>'),
					de = h("\x3c!--$--\x3e"),
					he = h('\x3c!--$?--\x3e<template id="'),
					fe = h('"></template>'),
					pe = h("\x3c!--$!--\x3e"),
					ge = h("\x3c!--/$--\x3e"),
					me = h("<template"),
					ve = h('"'),
					ye = h(' data-dgst="');
				h(' data-msg="'), h(' data-stck="');
				var be = h("></template>");

				function we(e, t, n) {
					if (o(e, he), null === n) throw Error(i(395));
					return o(e, n), l(e, fe)
				}
				var xe = h('<div hidden id="'),
					ke = h('">'),
					Se = h("</div>"),
					Ce = h('<svg aria-hidden="true" style="display:none" id="'),
					_e = h('">'),
					Ee = h("</svg>"),
					Te = h('<math aria-hidden="true" style="display:none" id="'),
					Ie = h('">'),
					Ne = h("</math>"),
					Re = h('<table hidden id="'),
					Ae = h('">'),
					Pe = h("</table>"),
					je = h('<table hidden><tbody id="'),
					De = h('">'),
					Oe = h("</tbody></table>"),
					Le = h('<table hidden><tr id="'),
					Me = h('">'),
					Fe = h("</tr></table>"),
					Ue = h('<table hidden><colgroup id="'),
					Ve = h('">'),
					ze = h("</colgroup></table>");
				var Be = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),
					Ge = h('$RS("'),
					qe = h('","'),
					He = h('")<\/script>'),
					We = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
					Ke = h('$RC("'),
					Qe = h('","'),
					Xe = h('")<\/script>'),
					Ye = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),
					$e = h('$RX("'),
					Je = h('"'),
					Ze = h(")<\/script>"),
					et = h(","),
					tt = /[<\u2028\u2029]/g;

				function nt(e) {
					return JSON.stringify(e).replace(tt, (function(e) {
						switch (e) {
							case "<":
								return "\\u003c";
							case "\u2028":
								return "\\u2028";
							case "\u2029":
								return "\\u2029";
							default:
								throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
						}
					}))
				}
				var rt = Object.assign,
					it = Symbol.for("react.element"),
					at = Symbol.for("react.portal"),
					st = Symbol.for("react.fragment"),
					ot = Symbol.for("react.strict_mode"),
					lt = Symbol.for("react.profiler"),
					ct = Symbol.for("react.provider"),
					ut = Symbol.for("react.context"),
					dt = Symbol.for("react.forward_ref"),
					ht = Symbol.for("react.suspense"),
					ft = Symbol.for("react.suspense_list"),
					pt = Symbol.for("react.memo"),
					gt = Symbol.for("react.lazy"),
					mt = Symbol.for("react.scope"),
					vt = Symbol.for("react.debug_trace_mode"),
					yt = Symbol.for("react.legacy_hidden"),
					bt = Symbol.for("react.default_value"),
					wt = Symbol.iterator;

				function xt(e) {
					if (null == e) return null;
					if ("function" === typeof e) return e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case st:
							return "Fragment";
						case at:
							return "Portal";
						case lt:
							return "Profiler";
						case ot:
							return "StrictMode";
						case ht:
							return "Suspense";
						case ft:
							return "SuspenseList"
					}
					if ("object" === typeof e) switch (e.$$typeof) {
						case ut:
							return (e.displayName || "Context") + ".Consumer";
						case ct:
							return (e._context.displayName || "Context") + ".Provider";
						case dt:
							var t = e.render;
							return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
						case pt:
							return null !== (t = e.displayName || null) ? t : xt(e.type) || "Memo";
						case gt:
							t = e._payload, e = e._init;
							try {
								return xt(e(t))
							} catch (n) {}
					}
					return null
				}
				var kt = {};

				function St(e, t) {
					if (!(e = e.contextTypes)) return kt;
					var n, r = {};
					for (n in e) r[n] = t[n];
					return r
				}
				var Ct = null;

				function _t(e, t) {
					if (e !== t) {
						e.context._currentValue = e.parentValue, e = e.parent;
						var n = t.parent;
						if (null === e) {
							if (null !== n) throw Error(i(401))
						} else {
							if (null === n) throw Error(i(401));
							_t(e, n)
						}
						t.context._currentValue = t.value
					}
				}

				function Et(e) {
					e.context._currentValue = e.parentValue, null !== (e = e.parent) && Et(e)
				}

				function Tt(e) {
					var t = e.parent;
					null !== t && Tt(t), e.context._currentValue = e.value
				}

				function It(e, t) {
					if (e.context._currentValue = e.parentValue, null === (e = e.parent)) throw Error(i(402));
					e.depth === t.depth ? _t(e, t) : It(e, t)
				}

				function Nt(e, t) {
					var n = t.parent;
					if (null === n) throw Error(i(402));
					e.depth === n.depth ? _t(e, n) : Nt(e, n), t.context._currentValue = t.value
				}

				function Rt(e) {
					var t = Ct;
					t !== e && (null === t ? Tt(e) : null === e ? Et(t) : t.depth === e.depth ? _t(t, e) : t.depth > e.depth ? It(t, e) : Nt(t, e), Ct = e)
				}
				var At = {
					isMounted: function() {
						return !1
					},
					enqueueSetState: function(e, t) {
						null !== (e = e._reactInternals).queue && e.queue.push(t)
					},
					enqueueReplaceState: function(e, t) {
						(e = e._reactInternals).replace = !0, e.queue = [t]
					},
					enqueueForceUpdate: function() {}
				};

				function Pt(e, t, n, r) {
					var i = void 0 !== e.state ? e.state : null;
					e.updater = At, e.props = n, e.state = i;
					var a = {
						queue: [],
						replace: !1
					};
					e._reactInternals = a;
					var s = t.contextType;
					if (e.context = "object" === typeof s && null !== s ? s._currentValue : r, "function" === typeof(s = t.getDerivedStateFromProps) && (i = null === (s = s(n, i)) || void 0 === s ? i : rt({}, i, s), e.state = i), "function" !== typeof t.getDerivedStateFromProps && "function" !== typeof e.getSnapshotBeforeUpdate && ("function" === typeof e.UNSAFE_componentWillMount || "function" === typeof e.componentWillMount))
						if (t = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), t !== e.state && At.enqueueReplaceState(e, e.state, null), null !== a.queue && 0 < a.queue.length)
							if (t = a.queue, s = a.replace, a.queue = null, a.replace = !1, s && 1 === t.length) e.state = t[0];
							else {
								for (a = s ? t[0] : e.state, i = !0, s = s ? 1 : 0; s < t.length; s++) {
									var o = t[s];
									null != (o = "function" === typeof o ? o.call(e, a, n, r) : o) && (i ? (i = !1, a = rt({}, a, o)) : rt(a, o))
								}
								e.state = a
							}
					else a.queue = null
				}
				var jt = {
					id: 1,
					overflow: ""
				};

				function Dt(e, t, n) {
					var r = e.id;
					e = e.overflow;
					var i = 32 - Ot(r) - 1;
					r &= ~(1 << i), n += 1;
					var a = 32 - Ot(t) + i;
					if (30 < a) {
						var s = i - i % 5;
						return a = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, {
							id: 1 << 32 - Ot(t) + i | n << i | r,
							overflow: a + e
						}
					}
					return {
						id: 1 << a | n << i | r,
						overflow: e
					}
				}
				var Ot = Math.clz32 ? Math.clz32 : function(e) {
						return 0 === (e >>>= 0) ? 32 : 31 - (Lt(e) / Mt | 0) | 0
					},
					Lt = Math.log,
					Mt = Math.LN2;
				var Ft = "function" === typeof Object.is ? Object.is : function(e, t) {
						return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
					},
					Ut = null,
					Vt = null,
					zt = null,
					Bt = null,
					Gt = !1,
					qt = !1,
					Ht = 0,
					Wt = null,
					Kt = 0;

				function Qt() {
					if (null === Ut) throw Error(i(321));
					return Ut
				}

				function Xt() {
					if (0 < Kt) throw Error(i(312));
					return {
						memoizedState: null,
						queue: null,
						next: null
					}
				}

				function Yt() {
					return null === Bt ? null === zt ? (Gt = !1, zt = Bt = Xt()) : (Gt = !0, Bt = zt) : null === Bt.next ? (Gt = !1, Bt = Bt.next = Xt()) : (Gt = !0, Bt = Bt.next), Bt
				}

				function $t() {
					Vt = Ut = null, qt = !1, zt = null, Kt = 0, Bt = Wt = null
				}

				function Jt(e, t) {
					return "function" === typeof t ? t(e) : t
				}

				function Zt(e, t, n) {
					if (Ut = Qt(), Bt = Yt(), Gt) {
						var r = Bt.queue;
						if (t = r.dispatch, null !== Wt && void 0 !== (n = Wt.get(r))) {
							Wt.delete(r), r = Bt.memoizedState;
							do {
								r = e(r, n.action), n = n.next
							} while (null !== n);
							return Bt.memoizedState = r, [r, t]
						}
						return [Bt.memoizedState, t]
					}
					return e = e === Jt ? "function" === typeof t ? t() : t : void 0 !== n ? n(t) : t, Bt.memoizedState = e, e = (e = Bt.queue = {
						last: null,
						dispatch: null
					}).dispatch = tn.bind(null, Ut, e), [Bt.memoizedState, e]
				}

				function en(e, t) {
					if (Ut = Qt(), t = void 0 === t ? null : t, null !== (Bt = Yt())) {
						var n = Bt.memoizedState;
						if (null !== n && null !== t) {
							var r = n[1];
							e: if (null === r) r = !1;
								else {
									for (var i = 0; i < r.length && i < t.length; i++)
										if (!Ft(t[i], r[i])) {
											r = !1;
											break e
										} r = !0
								}
							if (r) return n[0]
						}
					}
					return e = e(), Bt.memoizedState = [e, t], e
				}

				function tn(e, t, n) {
					if (25 <= Kt) throw Error(i(301));
					if (e === Ut)
						if (qt = !0, e = {
								action: n,
								next: null
							}, null === Wt && (Wt = new Map), void 0 === (n = Wt.get(t))) Wt.set(t, e);
						else {
							for (t = n; null !== t.next;) t = t.next;
							t.next = e
						}
				}

				function nn() {
					throw Error(i(394))
				}

				function rn() {}
				var an = {
						readContext: function(e) {
							return e._currentValue
						},
						useContext: function(e) {
							return Qt(), e._currentValue
						},
						useMemo: en,
						useReducer: Zt,
						useRef: function(e) {
							Ut = Qt();
							var t = (Bt = Yt()).memoizedState;
							return null === t ? (e = {
								current: e
							}, Bt.memoizedState = e) : t
						},
						useState: function(e) {
							return Zt(Jt, e)
						},
						useInsertionEffect: rn,
						useLayoutEffect: function() {},
						useCallback: function(e, t) {
							return en((function() {
								return e
							}), t)
						},
						useImperativeHandle: rn,
						useEffect: rn,
						useDebugValue: rn,
						useDeferredValue: function(e) {
							return Qt(), e
						},
						useTransition: function() {
							return Qt(), [!1, nn]
						},
						useId: function() {
							var e = Vt.treeContext,
								t = e.overflow;
							e = ((e = e.id) & ~(1 << 32 - Ot(e) - 1)).toString(32) + t;
							var n = sn;
							if (null === n) throw Error(i(404));
							return t = Ht++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":"
						},
						useMutableSource: function(e, t) {
							return Qt(), t(e._source)
						},
						useSyncExternalStore: function(e, t, n) {
							if (void 0 === n) throw Error(i(407));
							return n()
						}
					},
					sn = null,
					on = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;

				function ln(e) {
					return console.error(e), null
				}

				function cn() {}

				function un(e, t, n, r, i, a, s, o) {
					e.allPendingTasks++, null === n ? e.pendingRootTasks++ : n.pendingTasks++;
					var l = {
						node: t,
						ping: function() {
							var t = e.pingedTasks;
							t.push(l), 1 === t.length && _n(e)
						},
						blockedBoundary: n,
						blockedSegment: r,
						abortSet: i,
						legacyContext: a,
						context: s,
						treeContext: o
					};
					return i.add(l), l
				}

				function dn(e, t, n, r, i, a) {
					return {
						status: 0,
						id: -1,
						index: t,
						parentFlushed: !1,
						chunks: [],
						children: [],
						formatContext: r,
						boundary: n,
						lastPushedText: i,
						textEmbedded: a
					}
				}

				function hn(e, t) {
					if (null != (e = e.onError(t)) && "string" !== typeof e) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
					return e
				}

				function fn(e, t) {
					var n = e.onShellError;
					n(t), (n = e.onFatalError)(t), null !== e.destination ? (e.status = 2, f(e.destination, t)) : (e.status = 1, e.fatalError = t)
				}

				function pn(e, t, n, r, i) {
					for (Ut = {}, Vt = t, Ht = 0, e = n(r, i); qt;) qt = !1, Ht = 0, Kt += 1, Bt = null, e = n(r, i);
					return $t(), e
				}

				function gn(e, t, n, r) {
					var a = n.render(),
						s = r.childContextTypes;
					if (null !== s && void 0 !== s) {
						var o = t.legacyContext;
						if ("function" !== typeof n.getChildContext) r = o;
						else {
							for (var l in n = n.getChildContext())
								if (!(l in s)) throw Error(i(108, xt(r) || "Unknown", l));
							r = rt({}, o, n)
						}
						t.legacyContext = r, yn(e, t, a), t.legacyContext = o
					} else yn(e, t, a)
				}

				function mn(e, t) {
					if (e && e.defaultProps) {
						for (var n in t = rt({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
						return t
					}
					return t
				}

				function vn(e, t, n, r, a) {
					if ("function" === typeof n)
						if (n.prototype && n.prototype.isReactComponent) {
							a = St(n, t.legacyContext);
							var s = n.contextType;
							Pt(s = new n(r, "object" === typeof s && null !== s ? s._currentValue : a), n, r, a), gn(e, t, s, n)
						} else {
							a = pn(e, t, n, r, s = St(n, t.legacyContext));
							var o = 0 !== Ht;
							if ("object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof) Pt(a, n, r, s), gn(e, t, a, n);
							else if (o) {
								r = t.treeContext, t.treeContext = Dt(r, 1, 0);
								try {
									yn(e, t, a)
								} finally {
									t.treeContext = r
								}
							} else yn(e, t, a)
						}
					else {
						if ("string" !== typeof n) {
							switch (n) {
								case yt:
								case vt:
								case ot:
								case lt:
								case st:
								case ft:
									return void yn(e, t, r.children);
								case mt:
									throw Error(i(343));
								case ht:
									e: {
										n = t.blockedBoundary,
										a = t.blockedSegment,
										s = r.fallback,
										r = r.children;
										var l = {
												id: null,
												rootSegmentID: -1,
												parentFlushed: !1,
												pendingTasks: 0,
												forceClientRender: !1,
												completedSegments: [],
												byteSize: 0,
												fallbackAbortableTasks: o = new Set,
												errorDigest: null
											},
											c = dn(0, a.chunks.length, l, a.formatContext, !1, !1);a.children.push(c),
										a.lastPushedText = !1;
										var u = dn(0, 0, null, a.formatContext, !1, !1);u.parentFlushed = !0,
										t.blockedBoundary = l,
										t.blockedSegment = u;
										try {
											if (wn(e, t, r), u.lastPushedText && u.textEmbedded && u.chunks.push(F), u.status = 1, Sn(l, u), 0 === l.pendingTasks) break e
										} catch (h) {
											u.status = 4, l.forceClientRender = !0, l.errorDigest = hn(e, h)
										} finally {
											t.blockedBoundary = n, t.blockedSegment = a
										}
										t = un(e, s, n, c, o, t.legacyContext, t.context, t.treeContext),
										e.pingedTasks.push(t)
									}
									return
							}
							if ("object" === typeof n && null !== n) switch (n.$$typeof) {
								case dt:
									if (r = pn(e, t, n.render, r, a), 0 !== Ht) {
										n = t.treeContext, t.treeContext = Dt(n, 1, 0);
										try {
											yn(e, t, r)
										} finally {
											t.treeContext = n
										}
									} else yn(e, t, r);
									return;
								case pt:
									return void vn(e, t, n = n.type, r = mn(n, r), a);
								case ct:
									if (a = r.children, n = n._context, r = r.value, s = n._currentValue, n._currentValue = r, Ct = r = {
											parent: o = Ct,
											depth: null === o ? 0 : o.depth + 1,
											context: n,
											parentValue: s,
											value: r
										}, t.context = r, yn(e, t, a), null === (e = Ct)) throw Error(i(403));
									return r = e.parentValue, e.context._currentValue = r === bt ? e.context._defaultValue : r, e = Ct = e.parent, void(t.context = e);
								case ut:
									return void yn(e, t, r = (r = r.children)(n._currentValue));
								case gt:
									return void vn(e, t, n = (a = n._init)(n._payload), r = mn(n, r), void 0)
							}
							throw Error(i(130, null == n ? n : typeof n, ""))
						}
						switch (s = se((a = t.blockedSegment).chunks, n, r, e.responseState, a.formatContext), a.lastPushedText = !1, o = a.formatContext, a.formatContext = function(e, t, n) {
								switch (t) {
									case "select":
										return M(1, null != n.value ? n.value : n.defaultValue);
									case "svg":
										return M(2, null);
									case "math":
										return M(3, null);
									case "foreignObject":
										return M(1, null);
									case "table":
										return M(4, null);
									case "thead":
									case "tbody":
									case "tfoot":
										return M(5, null);
									case "colgroup":
										return M(7, null);
									case "tr":
										return M(6, null)
								}
								return 4 <= e.insertionMode || 0 === e.insertionMode ? M(1, null) : e
							}(o, n, r), wn(e, t, s), a.formatContext = o, n) {
							case "area":
							case "base":
							case "br":
							case "col":
							case "embed":
							case "hr":
							case "img":
							case "input":
							case "keygen":
							case "link":
							case "meta":
							case "param":
							case "source":
							case "track":
							case "wbr":
								break;
							default:
								a.chunks.push(oe, d(n), le)
						}
						a.lastPushedText = !1
					}
				}

				function yn(e, t, n) {
					if (t.node = n, "object" === typeof n && null !== n) {
						switch (n.$$typeof) {
							case it:
								return void vn(e, t, n.type, n.props, n.ref);
							case at:
								throw Error(i(257));
							case gt:
								var r = n._init;
								return void yn(e, t, n = r(n._payload))
						}
						if (N(n)) return void bn(e, t, n);
						if (null === n || "object" !== typeof n ? r = null : r = "function" === typeof(r = wt && n[wt] || n["@@iterator"]) ? r : null, r && (r = r.call(n))) {
							if (!(n = r.next()).done) {
								var a = [];
								do {
									a.push(n.value), n = r.next()
								} while (!n.done);
								bn(e, t, a)
							}
							return
						}
						throw e = Object.prototype.toString.call(n), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
					}
					"string" === typeof n ? (r = t.blockedSegment).lastPushedText = U(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText) : "number" === typeof n && ((r = t.blockedSegment).lastPushedText = U(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText))
				}

				function bn(e, t, n) {
					for (var r = n.length, i = 0; i < r; i++) {
						var a = t.treeContext;
						t.treeContext = Dt(a, r, i);
						try {
							wn(e, t, n[i])
						} finally {
							t.treeContext = a
						}
					}
				}

				function wn(e, t, n) {
					var r = t.blockedSegment.formatContext,
						i = t.legacyContext,
						a = t.context;
					try {
						return yn(e, t, n)
					} catch (l) {
						if ($t(), "object" !== typeof l || null === l || "function" !== typeof l.then) throw t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, Rt(a), l;
						n = l;
						var s = t.blockedSegment,
							o = dn(0, s.chunks.length, null, s.formatContext, s.lastPushedText, !0);
						s.children.push(o), s.lastPushedText = !1, e = un(e, t.node, t.blockedBoundary, o, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, Rt(a)
					}
				}

				function xn(e) {
					var t = e.blockedBoundary;
					(e = e.blockedSegment).status = 3, Cn(this, t, e)
				}

				function kn(e, t, n) {
					var r = e.blockedBoundary;
					e.blockedSegment.status = 3, null === r ? (t.allPendingTasks--, 2 !== t.status && (t.status = 2, null !== t.destination && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = void 0 === n ? Error(i(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach((function(e) {
						return kn(e, t, n)
					})), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, 0 === t.allPendingTasks && (r = t.onAllReady)())
				}

				function Sn(e, t) {
					if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary) {
						var n = t.children[0];
						n.id = t.id, n.parentFlushed = !0, 1 === n.status && Sn(e, n)
					} else e.completedSegments.push(t)
				}

				function Cn(e, t, n) {
					if (null === t) {
						if (n.parentFlushed) {
							if (null !== e.completedRootSegment) throw Error(i(389));
							e.completedRootSegment = n
						}
						e.pendingRootTasks--, 0 === e.pendingRootTasks && (e.onShellError = cn, (t = e.onShellReady)())
					} else t.pendingTasks--, t.forceClientRender || (0 === t.pendingTasks ? (n.parentFlushed && 1 === n.status && Sn(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(xn, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && 1 === n.status && (Sn(t, n), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t)));
					e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)()
				}

				function _n(e) {
					if (2 !== e.status) {
						var t = Ct,
							n = on.current;
						on.current = an;
						var r = sn;
						sn = e.responseState;
						try {
							var i, a = e.pingedTasks;
							for (i = 0; i < a.length; i++) {
								var s = a[i],
									o = e,
									l = s.blockedSegment;
								if (0 === l.status) {
									Rt(s.context);
									try {
										yn(o, s, s.node), l.lastPushedText && l.textEmbedded && l.chunks.push(F), s.abortSet.delete(s), l.status = 1, Cn(o, s.blockedBoundary, l)
									} catch (f) {
										if ($t(), "object" === typeof f && null !== f && "function" === typeof f.then) {
											var c = s.ping;
											f.then(c, c)
										} else {
											s.abortSet.delete(s), l.status = 4;
											var u = s.blockedBoundary,
												d = f,
												h = hn(o, d);
											if (null === u ? fn(o, d) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, u.errorDigest = h, u.parentFlushed && o.clientRenderedBoundaries.push(u))), o.allPendingTasks--, 0 === o.allPendingTasks)(0, o.onAllReady)()
										}
									}
								}
							}
							a.splice(0, i), null !== e.destination && An(e, e.destination)
						} catch (f) {
							hn(e, f), fn(e, f)
						} finally {
							sn = r, on.current = n, n === an && Rt(t)
						}
					}
				}

				function En(e, t, n) {
					switch (n.parentFlushed = !0, n.status) {
						case 0:
							var r = n.id = e.nextSegmentId++;
							return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, o(t, ce), o(t, e.placeholderPrefix), o(t, e = d(r.toString(16))), l(t, ue);
						case 1:
							n.status = 2;
							var a = !0;
							r = n.chunks;
							var s = 0;
							n = n.children;
							for (var c = 0; c < n.length; c++) {
								for (a = n[c]; s < a.index; s++) o(t, r[s]);
								a = Tn(e, t, a)
							}
							for (; s < r.length - 1; s++) o(t, r[s]);
							return s < r.length && (a = l(t, r[s])), a;
						default:
							throw Error(i(390))
					}
				}

				function Tn(e, t, n) {
					var r = n.boundary;
					if (null === r) return En(e, t, n);
					if (r.parentFlushed = !0, r.forceClientRender) r = r.errorDigest, l(t, pe), o(t, me), r && (o(t, ye), o(t, d(E(r))), o(t, ve)), l(t, be), En(e, t, n);
					else if (0 < r.pendingTasks) {
						r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
						var a = e.responseState,
							s = a.nextSuspenseID++;
						a = h(a.boundaryPrefix + s.toString(16)), r = r.id = a, we(t, e.responseState, r), En(e, t, n)
					} else if (r.byteSize > e.progressiveChunkSize) r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), we(t, e.responseState, r.id), En(e, t, n);
					else {
						if (l(t, de), 1 !== (n = r.completedSegments).length) throw Error(i(391));
						Tn(e, t, n[0])
					}
					return l(t, ge)
				}

				function In(e, t, n) {
					return function(e, t, n, r) {
							switch (n.insertionMode) {
								case 0:
								case 1:
									return o(e, xe), o(e, t.segmentPrefix), o(e, d(r.toString(16))), l(e, ke);
								case 2:
									return o(e, Ce), o(e, t.segmentPrefix), o(e, d(r.toString(16))), l(e, _e);
								case 3:
									return o(e, Te), o(e, t.segmentPrefix), o(e, d(r.toString(16))), l(e, Ie);
								case 4:
									return o(e, Re), o(e, t.segmentPrefix), o(e, d(r.toString(16))), l(e, Ae);
								case 5:
									return o(e, je), o(e, t.segmentPrefix), o(e, d(r.toString(16))), l(e, De);
								case 6:
									return o(e, Le), o(e, t.segmentPrefix), o(e, d(r.toString(16))), l(e, Me);
								case 7:
									return o(e, Ue), o(e, t.segmentPrefix), o(e, d(r.toString(16))), l(e, Ve);
								default:
									throw Error(i(397))
							}
						}(t, e.responseState, n.formatContext, n.id), Tn(e, t, n),
						function(e, t) {
							switch (t.insertionMode) {
								case 0:
								case 1:
									return l(e, Se);
								case 2:
									return l(e, Ee);
								case 3:
									return l(e, Ne);
								case 4:
									return l(e, Pe);
								case 5:
									return l(e, Oe);
								case 6:
									return l(e, Fe);
								case 7:
									return l(e, ze);
								default:
									throw Error(i(397))
							}
						}(t, n.formatContext)
				}

				function Nn(e, t, n) {
					for (var r = n.completedSegments, a = 0; a < r.length; a++) Rn(e, t, n, r[a]);
					if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, o(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? o(t, Ke) : (e.sentCompleteBoundaryFunction = !0, o(t, We)), null === r) throw Error(i(395));
					return n = d(n.toString(16)), o(t, r), o(t, Qe), o(t, e.segmentPrefix), o(t, n), l(t, Xe)
				}

				function Rn(e, t, n, r) {
					if (2 === r.status) return !0;
					var a = r.id;
					if (-1 === a) {
						if (-1 === (r.id = n.rootSegmentID)) throw Error(i(392));
						return In(e, t, r)
					}
					return In(e, t, r), o(t, (e = e.responseState).startInlineScript), e.sentCompleteSegmentFunction ? o(t, Ge) : (e.sentCompleteSegmentFunction = !0, o(t, Be)), o(t, e.segmentPrefix), o(t, a = d(a.toString(16))), o(t, qe), o(t, e.placeholderPrefix), o(t, a), l(t, He)
				}

				function An(e, t) {
					a = new Uint8Array(512), s = 0;
					try {
						var n = e.completedRootSegment;
						if (null !== n && 0 === e.pendingRootTasks) {
							Tn(e, t, n), e.completedRootSegment = null;
							var r = e.responseState.bootstrapChunks;
							for (n = 0; n < r.length - 1; n++) o(t, r[n]);
							n < r.length && l(t, r[n])
						}
						var u, h = e.clientRenderedBoundaries;
						for (u = 0; u < h.length; u++) {
							var f = h[u];
							r = t;
							var p = e.responseState,
								g = f.id,
								m = f.errorDigest,
								v = f.errorMessage,
								y = f.errorComponentStack;
							if (o(r, p.startInlineScript), p.sentClientRenderFunction ? o(r, $e) : (p.sentClientRenderFunction = !0, o(r, Ye)), null === g) throw Error(i(395));
							if (o(r, g), o(r, Je), (m || v || y) && (o(r, et), o(r, d(nt(m || "")))), (v || y) && (o(r, et), o(r, d(nt(v || "")))), y && (o(r, et), o(r, d(nt(y)))), !l(r, Ze)) return e.destination = null, u++, void h.splice(0, u)
						}
						h.splice(0, u);
						var b = e.completedBoundaries;
						for (u = 0; u < b.length; u++)
							if (!Nn(e, t, b[u])) return e.destination = null, u++, void b.splice(0, u);
						b.splice(0, u), c(t), a = new Uint8Array(512), s = 0;
						var w = e.partialBoundaries;
						for (u = 0; u < w.length; u++) {
							var x = w[u];
							e: {
								h = e,
								f = t;
								var k = x.completedSegments;
								for (p = 0; p < k.length; p++)
									if (!Rn(h, f, x, k[p])) {
										p++, k.splice(0, p);
										var S = !1;
										break e
									} k.splice(0, p),
								S = !0
							}
							if (!S) return e.destination = null, u++, void w.splice(0, u)
						}
						w.splice(0, u);
						var C = e.completedBoundaries;
						for (u = 0; u < C.length; u++)
							if (!Nn(e, t, C[u])) return e.destination = null, u++, void C.splice(0, u);
						C.splice(0, u)
					} finally {
						c(t), 0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length && t.close()
					}
				}

				function Pn(e, t) {
					try {
						var n = e.abortableTasks;
						n.forEach((function(n) {
							return kn(n, e, t)
						})), n.clear(), null !== e.destination && An(e, e.destination)
					} catch (r) {
						hn(e, r), fn(e, r)
					}
				}
				t.renderToReadableStream = function(e, t) {
					return new Promise((function(n, r) {
						var i, a, s = new Promise((function(e, t) {
								a = e, i = t
							})),
							o = function(e, t, n, r, i, a, s, o, l) {
								var c = [],
									u = new Set;
								return (n = dn(t = {
									destination: null,
									responseState: t,
									progressiveChunkSize: void 0 === r ? 12800 : r,
									status: 0,
									fatalError: null,
									nextSegmentId: 0,
									allPendingTasks: 0,
									pendingRootTasks: 0,
									completedRootSegment: null,
									abortableTasks: u,
									pingedTasks: c,
									clientRenderedBoundaries: [],
									completedBoundaries: [],
									partialBoundaries: [],
									onError: void 0 === i ? ln : i,
									onAllReady: void 0 === a ? cn : a,
									onShellReady: void 0 === s ? cn : s,
									onShellError: void 0 === o ? cn : o,
									onFatalError: void 0 === l ? cn : l
								}, 0, null, n, !1, !1)).parentFlushed = !0, e = un(t, e, null, n, u, kt, null, jt), c.push(e), t
							}(e, function(e, t, n, r, i) {
								e = void 0 === e ? "" : e, t = void 0 === t ? R : h('<script nonce="' + E(t) + '">');
								var a = [];
								if (void 0 !== n && a.push(t, d(("" + n).replace(O, L)), A), void 0 !== r)
									for (n = 0; n < r.length; n++) a.push(P, d(E(r[n])), D);
								if (void 0 !== i)
									for (r = 0; r < i.length; r++) a.push(j, d(E(i[r])), D);
								return {
									bootstrapChunks: a,
									startInlineScript: t,
									placeholderPrefix: h(e + "P:"),
									segmentPrefix: h(e + "S:"),
									boundaryPrefix: e + "B:",
									idPrefix: e,
									nextSuspenseID: 0,
									sentCompleteSegmentFunction: !1,
									sentCompleteBoundaryFunction: !1,
									sentClientRenderFunction: !1
								}
							}(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), function(e) {
								return M("http://www.w3.org/2000/svg" === e ? 2 : "http://www.w3.org/1998/Math/MathML" === e ? 3 : 0, null)
							}(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, a, (function() {
								var e = new ReadableStream({
									type: "bytes",
									pull: function(e) {
										if (1 === o.status) o.status = 2, f(e, o.fatalError);
										else if (2 !== o.status && null === o.destination) {
											o.destination = e;
											try {
												An(o, e)
											} catch (t) {
												hn(o, t), fn(o, t)
											}
										}
									},
									cancel: function() {
										Pn(o)
									}
								}, {
									highWaterMark: 0
								});
								e.allReady = s, n(e)
							}), (function(e) {
								s.catch((function() {})), r(e)
							}), i);
						if (t && t.signal) {
							var l = t.signal,
								c = function() {
									Pn(o, l.reason), l.removeEventListener("abort", c)
								};
							l.addEventListener("abort", c)
						}
						_n(o)
					}))
				}, t.version = "18.3.1"
			},
			730: (e, t, n) => {
				"use strict";
				var r = n(43),
					i = n(853);

				function a(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				var s = new Set,
					o = {};

				function l(e, t) {
					c(e, t), c(e + "Capture", t)
				}

				function c(e, t) {
					for (o[e] = t, e = 0; e < t.length; e++) s.add(t[e])
				}
				var u = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
					d = Object.prototype.hasOwnProperty,
					h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					f = {},
					p = {};

				function g(e, t, n, r, i, a, s) {
					this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = s
				}
				var m = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
					m[e] = new g(e, 0, !1, e, null, !1, !1)
				})), [
					["acceptCharset", "accept-charset"],
					["className", "class"],
					["htmlFor", "for"],
					["httpEquiv", "http-equiv"]
				].forEach((function(e) {
					var t = e[0];
					m[t] = new g(t, 1, !1, e[1], null, !1, !1)
				})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
					m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1)
				})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
					m[e] = new g(e, 2, !1, e, null, !1, !1)
				})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
					m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1)
				})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
					m[e] = new g(e, 3, !0, e, null, !1, !1)
				})), ["capture", "download"].forEach((function(e) {
					m[e] = new g(e, 4, !1, e, null, !1, !1)
				})), ["cols", "rows", "size", "span"].forEach((function(e) {
					m[e] = new g(e, 6, !1, e, null, !1, !1)
				})), ["rowSpan", "start"].forEach((function(e) {
					m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1)
				}));
				var v = /[\-:]([a-z])/g;

				function y(e) {
					return e[1].toUpperCase()
				}

				function b(e, t, n, r) {
					var i = m.hasOwnProperty(t) ? m[t] : null;
					(null !== i ? 0 !== i.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
						if (null === t || "undefined" === typeof t || function(e, t, n, r) {
								if (null !== n && 0 === n.type) return !1;
								switch (typeof t) {
									case "function":
									case "symbol":
										return !0;
									case "boolean":
										return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
									default:
										return !1
								}
							}(e, t, n, r)) return !0;
						if (r) return !1;
						if (null !== n) switch (n.type) {
							case 3:
								return !t;
							case 4:
								return !1 === t;
							case 5:
								return isNaN(t);
							case 6:
								return isNaN(t) || 1 > t
						}
						return !1
					}(t, n, i, r) && (n = null), r || null === i ? function(e) {
						return !!d.call(p, e) || !d.call(f, e) && (h.test(e) ? p[e] = !0 : (f[e] = !0, !1))
					}(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
					var t = e.replace(v, y);
					m[t] = new g(t, 1, !1, e, null, !1, !1)
				})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
					var t = e.replace(v, y);
					m[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
				})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
					var t = e.replace(v, y);
					m[t] = new g(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
				})), ["tabIndex", "crossOrigin"].forEach((function(e) {
					m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1)
				})), m.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
					m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0)
				}));
				var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					x = Symbol.for("react.element"),
					k = Symbol.for("react.portal"),
					S = Symbol.for("react.fragment"),
					C = Symbol.for("react.strict_mode"),
					_ = Symbol.for("react.profiler"),
					E = Symbol.for("react.provider"),
					T = Symbol.for("react.context"),
					I = Symbol.for("react.forward_ref"),
					N = Symbol.for("react.suspense"),
					R = Symbol.for("react.suspense_list"),
					A = Symbol.for("react.memo"),
					P = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var j = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
				var D = Symbol.iterator;

				function O(e) {
					return null === e || "object" !== typeof e ? null : "function" === typeof(e = D && e[D] || e["@@iterator"]) ? e : null
				}
				var L, M = Object.assign;

				function F(e) {
					if (void 0 === L) try {
						throw Error()
					} catch (n) {
						var t = n.stack.trim().match(/\n( *(at )?)/);
						L = t && t[1] || ""
					}
					return "\n" + L + e
				}
				var U = !1;

				function V(e, t) {
					if (!e || U) return "";
					U = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (t = function() {
									throw Error()
								}, Object.defineProperty(t.prototype, "props", {
									set: function() {
										throw Error()
									}
								}), "object" === typeof Reflect && Reflect.construct) {
								try {
									Reflect.construct(t, [])
								} catch (c) {
									var r = c
								}
								Reflect.construct(e, [], t)
							} else {
								try {
									t.call()
								} catch (c) {
									r = c
								}
								e.call(t.prototype)
							}
						else {
							try {
								throw Error()
							} catch (c) {
								r = c
							}
							e()
						}
					} catch (c) {
						if (c && r && "string" === typeof c.stack) {
							for (var i = c.stack.split("\n"), a = r.stack.split("\n"), s = i.length - 1, o = a.length - 1; 1 <= s && 0 <= o && i[s] !== a[o];) o--;
							for (; 1 <= s && 0 <= o; s--, o--)
								if (i[s] !== a[o]) {
									if (1 !== s || 1 !== o)
										do {
											if (s--, 0 > --o || i[s] !== a[o]) {
												var l = "\n" + i[s].replace(" at new ", " at ");
												return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
											}
										} while (1 <= s && 0 <= o);
									break
								}
						}
					} finally {
						U = !1, Error.prepareStackTrace = n
					}
					return (e = e ? e.displayName || e.name : "") ? F(e) : ""
				}

				function z(e) {
					switch (e.tag) {
						case 5:
							return F(e.type);
						case 16:
							return F("Lazy");
						case 13:
							return F("Suspense");
						case 19:
							return F("SuspenseList");
						case 0:
						case 2:
						case 15:
							return e = V(e.type, !1);
						case 11:
							return e = V(e.type.render, !1);
						case 1:
							return e = V(e.type, !0);
						default:
							return ""
					}
				}

				function B(e) {
					if (null == e) return null;
					if ("function" === typeof e) return e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case S:
							return "Fragment";
						case k:
							return "Portal";
						case _:
							return "Profiler";
						case C:
							return "StrictMode";
						case N:
							return "Suspense";
						case R:
							return "SuspenseList"
					}
					if ("object" === typeof e) switch (e.$$typeof) {
						case T:
							return (e.displayName || "Context") + ".Consumer";
						case E:
							return (e._context.displayName || "Context") + ".Provider";
						case I:
							var t = e.render;
							return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
						case A:
							return null !== (t = e.displayName || null) ? t : B(e.type) || "Memo";
						case P:
							t = e._payload, e = e._init;
							try {
								return B(e(t))
							} catch (n) {}
					}
					return null
				}

				function G(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return "Cache";
						case 9:
							return (t.displayName || "Context") + ".Consumer";
						case 10:
							return (t._context.displayName || "Context") + ".Provider";
						case 18:
							return "DehydratedFragment";
						case 11:
							return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
						case 7:
							return "Fragment";
						case 5:
							return t;
						case 4:
							return "Portal";
						case 3:
							return "Root";
						case 6:
							return "Text";
						case 16:
							return B(t);
						case 8:
							return t === C ? "StrictMode" : "Mode";
						case 22:
							return "Offscreen";
						case 12:
							return "Profiler";
						case 21:
							return "Scope";
						case 13:
							return "Suspense";
						case 19:
							return "SuspenseList";
						case 25:
							return "TracingMarker";
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ("function" === typeof t) return t.displayName || t.name || null;
							if ("string" === typeof t) return t
					}
					return null
				}

				function q(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return ""
					}
				}

				function H(e) {
					var t = e.type;
					return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
				}

				function W(e) {
					e._valueTracker || (e._valueTracker = function(e) {
						var t = H(e) ? "checked" : "value",
							n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
							r = "" + e[t];
						if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
							var i = n.get,
								a = n.set;
							return Object.defineProperty(e, t, {
								configurable: !0,
								get: function() {
									return i.call(this)
								},
								set: function(e) {
									r = "" + e, a.call(this, e)
								}
							}), Object.defineProperty(e, t, {
								enumerable: n.enumerable
							}), {
								getValue: function() {
									return r
								},
								setValue: function(e) {
									r = "" + e
								},
								stopTracking: function() {
									e._valueTracker = null, delete e[t]
								}
							}
						}
					}(e))
				}

				function K(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
				}

				function Q(e) {
					if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
					try {
						return e.activeElement || e.body
					} catch (t) {
						return e.body
					}
				}

				function X(e, t) {
					var n = t.checked;
					return M({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked
					})
				}

				function Y(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					n = q(null != t.value ? t.value : n), e._wrapperState = {
						initialChecked: r,
						initialValue: n,
						controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
					}
				}

				function $(e, t) {
					null != (t = t.checked) && b(e, "checked", t, !1)
				}

				function J(e, t) {
					$(e, t);
					var n = q(t.value),
						r = t.type;
					if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
					t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, q(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
				}

				function Z(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var r = t.type;
						if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
						t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
					}
					"" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
				}

				function ee(e, t, n) {
					"number" === t && Q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
				}
				var te = Array.isArray;

				function ne(e, t, n, r) {
					if (e = e.options, t) {
						t = {};
						for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
						for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
					} else {
						for (n = "" + q(n), t = null, i = 0; i < e.length; i++) {
							if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
							null !== t || e[i].disabled || (t = e[i])
						}
						null !== t && (t.selected = !0)
					}
				}

				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
					return M({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue
					})
				}

				function ie(e, t) {
					var n = t.value;
					if (null == n) {
						if (n = t.children, t = t.defaultValue, null != n) {
							if (null != t) throw Error(a(92));
							if (te(n)) {
								if (1 < n.length) throw Error(a(93));
								n = n[0]
							}
							t = n
						}
						null == t && (t = ""), n = t
					}
					e._wrapperState = {
						initialValue: q(n)
					}
				}

				function ae(e, t) {
					var n = q(t.value),
						r = q(t.defaultValue);
					null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
				}

				function se(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
				}

				function oe(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml"
					}
				}

				function le(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
				}
				var ce, ue, de = (ue = function(e, t) {
					if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
					else {
						for ((ce = ce || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild);
						for (; t.firstChild;) e.appendChild(t.firstChild)
					}
				}, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
					MSApp.execUnsafeLocalFunction((function() {
						return ue(e, t)
					}))
				} : ue);

				function he(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
					}
					e.textContent = t
				}
				var fe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0
					},
					pe = ["Webkit", "ms", "Moz", "O"];

				function ge(e, t, n) {
					return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || fe.hasOwnProperty(e) && fe[e] ? ("" + t).trim() : t + "px"
				}

				function me(e, t) {
					for (var n in e = e.style, t)
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf("--"),
								i = ge(n, t[n], r);
							"float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
						}
				}
				Object.keys(fe).forEach((function(e) {
					pe.forEach((function(t) {
						t = t + e.charAt(0).toUpperCase() + e.substring(1), fe[t] = fe[e]
					}))
				}));
				var ve = M({
					menuitem: !0
				}, {
					area: !0,
					base: !0,
					br: !0,
					col: !0,
					embed: !0,
					hr: !0,
					img: !0,
					input: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0
				});

				function ye(e, t) {
					if (t) {
						if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(a(60));
							if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
						}
						if (null != t.style && "object" !== typeof t.style) throw Error(a(62))
					}
				}

				function be(e, t) {
					if (-1 === e.indexOf("-")) return "string" === typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0
					}
				}
				var we = null;

				function xe(e) {
					return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
				}
				var ke = null,
					Se = null,
					Ce = null;

				function _e(e) {
					if (e = bi(e)) {
						if ("function" !== typeof ke) throw Error(a(280));
						var t = e.stateNode;
						t && (t = xi(t), ke(e.stateNode, e.type, t))
					}
				}

				function Ee(e) {
					Se ? Ce ? Ce.push(e) : Ce = [e] : Se = e
				}

				function Te() {
					if (Se) {
						var e = Se,
							t = Ce;
						if (Ce = Se = null, _e(e), t)
							for (e = 0; e < t.length; e++) _e(t[e])
					}
				}

				function Ie(e, t) {
					return e(t)
				}

				function Ne() {}
				var Re = !1;

				function Ae(e, t, n) {
					if (Re) return e(t, n);
					Re = !0;
					try {
						return Ie(e, t, n)
					} finally {
						Re = !1, (null !== Se || null !== Ce) && (Ne(), Te())
					}
				}

				function Pe(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = xi(n);
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
							break e;
						default:
							e = !1
					}
					if (e) return null;
					if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
					return n
				}
				var je = !1;
				if (u) try {
					var De = {};
					Object.defineProperty(De, "passive", {
						get: function() {
							je = !0
						}
					}), window.addEventListener("test", De, De), window.removeEventListener("test", De, De)
				} catch (ue) {
					je = !1
				}

				function Oe(e, t, n, r, i, a, s, o, l) {
					var c = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, c)
					} catch (u) {
						this.onError(u)
					}
				}
				var Le = !1,
					Me = null,
					Fe = !1,
					Ue = null,
					Ve = {
						onError: function(e) {
							Le = !0, Me = e
						}
					};

				function ze(e, t, n, r, i, a, s, o, l) {
					Le = !1, Me = null, Oe.apply(Ve, arguments)
				}

				function Be(e) {
					var t = e,
						n = e;
					if (e.alternate)
						for (; t.return;) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
						} while (e)
					}
					return 3 === t.tag ? n : null
				}

				function Ge(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
					}
					return null
				}

				function qe(e) {
					if (Be(e) !== e) throw Error(a(188))
				}

				function He(e) {
					return null !== (e = function(e) {
						var t = e.alternate;
						if (!t) {
							if (null === (t = Be(e))) throw Error(a(188));
							return t !== e ? null : e
						}
						for (var n = e, r = t;;) {
							var i = n.return;
							if (null === i) break;
							var s = i.alternate;
							if (null === s) {
								if (null !== (r = i.return)) {
									n = r;
									continue
								}
								break
							}
							if (i.child === s.child) {
								for (s = i.child; s;) {
									if (s === n) return qe(i), e;
									if (s === r) return qe(i), t;
									s = s.sibling
								}
								throw Error(a(188))
							}
							if (n.return !== r.return) n = i, r = s;
							else {
								for (var o = !1, l = i.child; l;) {
									if (l === n) {
										o = !0, n = i, r = s;
										break
									}
									if (l === r) {
										o = !0, r = i, n = s;
										break
									}
									l = l.sibling
								}
								if (!o) {
									for (l = s.child; l;) {
										if (l === n) {
											o = !0, n = s, r = i;
											break
										}
										if (l === r) {
											o = !0, r = s, n = i;
											break
										}
										l = l.sibling
									}
									if (!o) throw Error(a(189))
								}
							}
							if (n.alternate !== r) throw Error(a(190))
						}
						if (3 !== n.tag) throw Error(a(188));
						return n.stateNode.current === n ? e : t
					}(e)) ? We(e) : null
				}

				function We(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e;) {
						var t = We(e);
						if (null !== t) return t;
						e = e.sibling
					}
					return null
				}
				var Ke = i.unstable_scheduleCallback,
					Qe = i.unstable_cancelCallback,
					Xe = i.unstable_shouldYield,
					Ye = i.unstable_requestPaint,
					$e = i.unstable_now,
					Je = i.unstable_getCurrentPriorityLevel,
					Ze = i.unstable_ImmediatePriority,
					et = i.unstable_UserBlockingPriority,
					tt = i.unstable_NormalPriority,
					nt = i.unstable_LowPriority,
					rt = i.unstable_IdlePriority,
					it = null,
					at = null;
				var st = Math.clz32 ? Math.clz32 : function(e) {
						return e >>>= 0, 0 === e ? 32 : 31 - (ot(e) / lt | 0) | 0
					},
					ot = Math.log,
					lt = Math.LN2;
				var ct = 64,
					ut = 4194304;

				function dt(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e
					}
				}

				function ht(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						i = e.suspendedLanes,
						a = e.pingedLanes,
						s = 268435455 & n;
					if (0 !== s) {
						var o = s & ~i;
						0 !== o ? r = dt(o) : 0 !== (a &= s) && (r = dt(a))
					} else 0 !== (s = n & ~i) ? r = dt(s) : 0 !== a && (r = dt(a));
					if (0 === r) return 0;
					if (0 !== t && t !== r && 0 === (t & i) && ((i = r & -r) >= (a = t & -t) || 16 === i && 0 !== (4194240 & a))) return t;
					if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
						for (e = e.entanglements, t &= r; 0 < t;) i = 1 << (n = 31 - st(t)), r |= e[n], t &= ~i;
					return r
				}

				function ft(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1
					}
				}

				function pt(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
				}

				function gt() {
					var e = ct;
					return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e
				}

				function mt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t
				}

				function vt(e, t, n) {
					e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - st(t)] = n
				}

				function yt(e, t) {
					var n = e.entangledLanes |= t;
					for (e = e.entanglements; n;) {
						var r = 31 - st(n),
							i = 1 << r;
						i & t | e[r] & t && (e[r] |= t), n &= ~i
					}
				}
				var bt = 0;

				function wt(e) {
					return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
				}
				var xt, kt, St, Ct, _t, Et = !1,
					Tt = [],
					It = null,
					Nt = null,
					Rt = null,
					At = new Map,
					Pt = new Map,
					jt = [],
					Dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

				function Ot(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							It = null;
							break;
						case "dragenter":
						case "dragleave":
							Nt = null;
							break;
						case "mouseover":
						case "mouseout":
							Rt = null;
							break;
						case "pointerover":
						case "pointerout":
							At.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							Pt.delete(t.pointerId)
					}
				}

				function Lt(e, t, n, r, i, a) {
					return null === e || e.nativeEvent !== a ? (e = {
						blockedOn: t,
						domEventName: n,
						eventSystemFlags: r,
						nativeEvent: a,
						targetContainers: [i]
					}, null !== t && (null !== (t = bi(t)) && kt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e)
				}

				function Mt(e) {
					var t = yi(e.target);
					if (null !== t) {
						var n = Be(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = Ge(n))) return e.blockedOn = t, void _t(e.priority, (function() {
									St(n)
								}))
							} else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
					}
					e.blockedOn = null
				}

				function Ft(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length;) {
						var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n) return null !== (t = bi(n)) && kt(t), e.blockedOn = n, !1;
						var r = new(n = e.nativeEvent).constructor(n.type, n);
						we = r, n.target.dispatchEvent(r), we = null, t.shift()
					}
					return !0
				}

				function Ut(e, t, n) {
					Ft(e) && n.delete(t)
				}

				function Vt() {
					Et = !1, null !== It && Ft(It) && (It = null), null !== Nt && Ft(Nt) && (Nt = null), null !== Rt && Ft(Rt) && (Rt = null), At.forEach(Ut), Pt.forEach(Ut)
				}

				function zt(e, t) {
					e.blockedOn === t && (e.blockedOn = null, Et || (Et = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Vt)))
				}

				function Bt(e) {
					function t(t) {
						return zt(t, e)
					}
					if (0 < Tt.length) {
						zt(Tt[0], e);
						for (var n = 1; n < Tt.length; n++) {
							var r = Tt[n];
							r.blockedOn === e && (r.blockedOn = null)
						}
					}
					for (null !== It && zt(It, e), null !== Nt && zt(Nt, e), null !== Rt && zt(Rt, e), At.forEach(t), Pt.forEach(t), n = 0; n < jt.length; n++)(r = jt[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < jt.length && null === (n = jt[0]).blockedOn;) Mt(n), null === n.blockedOn && jt.shift()
				}
				var Gt = w.ReactCurrentBatchConfig,
					qt = !0;

				function Ht(e, t, n, r) {
					var i = bt,
						a = Gt.transition;
					Gt.transition = null;
					try {
						bt = 1, Kt(e, t, n, r)
					} finally {
						bt = i, Gt.transition = a
					}
				}

				function Wt(e, t, n, r) {
					var i = bt,
						a = Gt.transition;
					Gt.transition = null;
					try {
						bt = 4, Kt(e, t, n, r)
					} finally {
						bt = i, Gt.transition = a
					}
				}

				function Kt(e, t, n, r) {
					if (qt) {
						var i = Xt(e, t, n, r);
						if (null === i) qr(e, t, r, Qt, n), Ot(e, r);
						else if (function(e, t, n, r, i) {
								switch (t) {
									case "focusin":
										return It = Lt(It, e, t, n, r, i), !0;
									case "dragenter":
										return Nt = Lt(Nt, e, t, n, r, i), !0;
									case "mouseover":
										return Rt = Lt(Rt, e, t, n, r, i), !0;
									case "pointerover":
										var a = i.pointerId;
										return At.set(a, Lt(At.get(a) || null, e, t, n, r, i)), !0;
									case "gotpointercapture":
										return a = i.pointerId, Pt.set(a, Lt(Pt.get(a) || null, e, t, n, r, i)), !0
								}
								return !1
							}(i, e, t, n, r)) r.stopPropagation();
						else if (Ot(e, r), 4 & t && -1 < Dt.indexOf(e)) {
							for (; null !== i;) {
								var a = bi(i);
								if (null !== a && xt(a), null === (a = Xt(e, t, n, r)) && qr(e, t, r, Qt, n), a === i) break;
								i = a
							}
							null !== i && r.stopPropagation()
						} else qr(e, t, r, null, n)
					}
				}
				var Qt = null;

				function Xt(e, t, n, r) {
					if (Qt = null, null !== (e = yi(e = xe(r))))
						if (null === (t = Be(e))) e = null;
						else if (13 === (n = t.tag)) {
						if (null !== (e = Ge(t))) return e;
						e = null
					} else if (3 === n) {
						if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
						e = null
					} else t !== e && (e = null);
					return Qt = e, null
				}

				function Yt(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (Je()) {
								case Ze:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16
							}
							default:
								return 16
					}
				}
				var $t = null,
					Jt = null,
					Zt = null;

				function en() {
					if (Zt) return Zt;
					var e, t, n = Jt,
						r = n.length,
						i = "value" in $t ? $t.value : $t.textContent,
						a = i.length;
					for (e = 0; e < r && n[e] === i[e]; e++);
					var s = r - e;
					for (t = 1; t <= s && n[r - t] === i[a - t]; t++);
					return Zt = i.slice(e, 1 < t ? 1 - t : void 0)
				}

				function tn(e) {
					var t = e.keyCode;
					return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
				}

				function nn() {
					return !0
				}

				function rn() {
					return !1
				}

				function an(e) {
					function t(t, n, r, i, a) {
						for (var s in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(i) : i[s]);
						return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
					}
					return M(t.prototype, {
						preventDefault: function() {
							this.defaultPrevented = !0;
							var e = this.nativeEvent;
							e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
						},
						stopPropagation: function() {
							var e = this.nativeEvent;
							e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
						},
						persist: function() {},
						isPersistent: nn
					}), t
				}
				var sn, on, ln, cn = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function(e) {
							return e.timeStamp || Date.now()
						},
						defaultPrevented: 0,
						isTrusted: 0
					},
					un = an(cn),
					dn = M({}, cn, {
						view: 0,
						detail: 0
					}),
					hn = an(dn),
					fn = M({}, dn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: _n,
						button: 0,
						buttons: 0,
						relatedTarget: function(e) {
							return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
						},
						movementX: function(e) {
							return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (sn = e.screenX - ln.screenX, on = e.screenY - ln.screenY) : on = sn = 0, ln = e), sn)
						},
						movementY: function(e) {
							return "movementY" in e ? e.movementY : on
						}
					}),
					pn = an(fn),
					gn = an(M({}, fn, {
						dataTransfer: 0
					})),
					mn = an(M({}, dn, {
						relatedTarget: 0
					})),
					vn = an(M({}, cn, {
						animationName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					yn = M({}, cn, {
						clipboardData: function(e) {
							return "clipboardData" in e ? e.clipboardData : window.clipboardData
						}
					}),
					bn = an(yn),
					wn = an(M({}, cn, {
						data: 0
					})),
					xn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified"
					},
					kn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta"
					},
					Sn = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey"
					};

				function Cn(e) {
					var t = this.nativeEvent;
					return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
				}

				function _n() {
					return Cn
				}
				var En = M({}, dn, {
						key: function(e) {
							if (e.key) {
								var t = xn[e.key] || e.key;
								if ("Unidentified" !== t) return t
							}
							return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: _n,
						charCode: function(e) {
							return "keypress" === e.type ? tn(e) : 0
						},
						keyCode: function(e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						},
						which: function(e) {
							return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						}
					}),
					Tn = an(En),
					In = an(M({}, fn, {
						pointerId: 0,
						width: 0,
						height: 0,
						pressure: 0,
						tangentialPressure: 0,
						tiltX: 0,
						tiltY: 0,
						twist: 0,
						pointerType: 0,
						isPrimary: 0
					})),
					Nn = an(M({}, dn, {
						touches: 0,
						targetTouches: 0,
						changedTouches: 0,
						altKey: 0,
						metaKey: 0,
						ctrlKey: 0,
						shiftKey: 0,
						getModifierState: _n
					})),
					Rn = an(M({}, cn, {
						propertyName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					An = M({}, fn, {
						deltaX: function(e) {
							return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
						},
						deltaY: function(e) {
							return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
						},
						deltaZ: 0,
						deltaMode: 0
					}),
					Pn = an(An),
					jn = [9, 13, 27, 32],
					Dn = u && "CompositionEvent" in window,
					On = null;
				u && "documentMode" in document && (On = document.documentMode);
				var Ln = u && "TextEvent" in window && !On,
					Mn = u && (!Dn || On && 8 < On && 11 >= On),
					Fn = String.fromCharCode(32),
					Un = !1;

				function Vn(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== jn.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1
					}
				}

				function zn(e) {
					return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
				}
				var Bn = !1;
				var Gn = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0
				};

				function qn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!Gn[e.type] : "textarea" === t
				}

				function Hn(e, t, n, r) {
					Ee(r), 0 < (t = Wr(t, "onChange")).length && (n = new un("onChange", "change", null, n, r), e.push({
						event: n,
						listeners: t
					}))
				}
				var Wn = null,
					Kn = null;

				function Qn(e) {
					Fr(e, 0)
				}

				function Xn(e) {
					if (K(wi(e))) return e
				}

				function Yn(e, t) {
					if ("change" === e) return t
				}
				var $n = !1;
				if (u) {
					var Jn;
					if (u) {
						var Zn = "oninput" in document;
						if (!Zn) {
							var er = document.createElement("div");
							er.setAttribute("oninput", "return;"), Zn = "function" === typeof er.oninput
						}
						Jn = Zn
					} else Jn = !1;
					$n = Jn && (!document.documentMode || 9 < document.documentMode)
				}

				function tr() {
					Wn && (Wn.detachEvent("onpropertychange", nr), Kn = Wn = null)
				}

				function nr(e) {
					if ("value" === e.propertyName && Xn(Kn)) {
						var t = [];
						Hn(t, Kn, e, xe(e)), Ae(Qn, t)
					}
				}

				function rr(e, t, n) {
					"focusin" === e ? (tr(), Kn = n, (Wn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
				}

				function ir(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xn(Kn)
				}

				function ar(e, t) {
					if ("click" === e) return Xn(t)
				}

				function sr(e, t) {
					if ("input" === e || "change" === e) return Xn(t)
				}
				var or = "function" === typeof Object.is ? Object.is : function(e, t) {
					return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
				};

				function lr(e, t) {
					if (or(e, t)) return !0;
					if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var i = n[r];
						if (!d.call(t, i) || !or(e[i], t[i])) return !1
					}
					return !0
				}

				function cr(e) {
					for (; e && e.firstChild;) e = e.firstChild;
					return e
				}

				function ur(e, t) {
					var n, r = cr(e);
					for (e = 0; r;) {
						if (3 === r.nodeType) {
							if (n = e + r.textContent.length, e <= t && n >= t) return {
								node: r,
								offset: t - e
							};
							e = n
						}
						e: {
							for (; r;) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e
								}
								r = r.parentNode
							}
							r = void 0
						}
						r = cr(r)
					}
				}

				function dr(e, t) {
					return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
				}

				function hr() {
					for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement;) {
						try {
							var n = "string" === typeof t.contentWindow.location.href
						} catch (r) {
							n = !1
						}
						if (!n) break;
						t = Q((e = t.contentWindow).document)
					}
					return t
				}

				function fr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
				}

				function pr(e) {
					var t = hr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
						if (null !== r && fr(n))
							if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
							else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
							e = e.getSelection();
							var i = n.textContent.length,
								a = Math.min(r.start, i);
							r = void 0 === r.end ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = ur(n, a);
							var s = ur(n, r);
							i && s && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && ((t = t.createRange()).setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
						}
						for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
							element: e,
							left: e.scrollLeft,
							top: e.scrollTop
						});
						for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
					}
				}
				var gr = u && "documentMode" in document && 11 >= document.documentMode,
					mr = null,
					vr = null,
					yr = null,
					br = !1;

				function wr(e, t, n) {
					var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
					br || null == mr || mr !== Q(r) || ("selectionStart" in (r = mr) && fr(r) ? r = {
						start: r.selectionStart,
						end: r.selectionEnd
					} : r = {
						anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
						anchorOffset: r.anchorOffset,
						focusNode: r.focusNode,
						focusOffset: r.focusOffset
					}, yr && lr(yr, r) || (yr = r, 0 < (r = Wr(vr, "onSelect")).length && (t = new un("onSelect", "select", null, t, n), e.push({
						event: t,
						listeners: r
					}), t.target = mr)))
				}

				function xr(e, t) {
					var n = {};
					return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
				}
				var kr = {
						animationend: xr("Animation", "AnimationEnd"),
						animationiteration: xr("Animation", "AnimationIteration"),
						animationstart: xr("Animation", "AnimationStart"),
						transitionend: xr("Transition", "TransitionEnd")
					},
					Sr = {},
					Cr = {};

				function _r(e) {
					if (Sr[e]) return Sr[e];
					if (!kr[e]) return e;
					var t, n = kr[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in Cr) return Sr[e] = n[t];
					return e
				}
				u && (Cr = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
				var Er = _r("animationend"),
					Tr = _r("animationiteration"),
					Ir = _r("animationstart"),
					Nr = _r("transitionend"),
					Rr = new Map,
					Ar = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

				function Pr(e, t) {
					Rr.set(e, t), l(t, [e])
				}
				for (var jr = 0; jr < Ar.length; jr++) {
					var Dr = Ar[jr];
					Pr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)))
				}
				Pr(Er, "onAnimationEnd"), Pr(Tr, "onAnimationIteration"), Pr(Ir, "onAnimationStart"), Pr("dblclick", "onDoubleClick"), Pr("focusin", "onFocus"), Pr("focusout", "onBlur"), Pr(Nr, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
				var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
					Lr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));

				function Mr(e, t, n) {
					var r = e.type || "unknown-event";
					e.currentTarget = n,
						function(e, t, n, r, i, s, o, l, c) {
							if (ze.apply(this, arguments), Le) {
								if (!Le) throw Error(a(198));
								var u = Me;
								Le = !1, Me = null, Fe || (Fe = !0, Ue = u)
							}
						}(r, t, void 0, e), e.currentTarget = null
				}

				function Fr(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							i = r.event;
						r = r.listeners;
						e: {
							var a = void 0;
							if (t)
								for (var s = r.length - 1; 0 <= s; s--) {
									var o = r[s],
										l = o.instance,
										c = o.currentTarget;
									if (o = o.listener, l !== a && i.isPropagationStopped()) break e;
									Mr(i, o, c), a = l
								} else
									for (s = 0; s < r.length; s++) {
										if (l = (o = r[s]).instance, c = o.currentTarget, o = o.listener, l !== a && i.isPropagationStopped()) break e;
										Mr(i, o, c), a = l
									}
						}
					}
					if (Fe) throw e = Ue, Fe = !1, Ue = null, e
				}

				function Ur(e, t) {
					var n = t[gi];
					void 0 === n && (n = t[gi] = new Set);
					var r = e + "__bubble";
					n.has(r) || (Gr(t, e, 2, !1), n.add(r))
				}

				function Vr(e, t, n) {
					var r = 0;
					t && (r |= 4), Gr(n, e, r, t)
				}
				var zr = "_reactListening" + Math.random().toString(36).slice(2);

				function Br(e) {
					if (!e[zr]) {
						e[zr] = !0, s.forEach((function(t) {
							"selectionchange" !== t && (Lr.has(t) || Vr(t, !1, e), Vr(t, !0, e))
						}));
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[zr] || (t[zr] = !0, Vr("selectionchange", !1, t))
					}
				}

				function Gr(e, t, n, r) {
					switch (Yt(t)) {
						case 1:
							var i = Ht;
							break;
						case 4:
							i = Wt;
							break;
						default:
							i = Kt
					}
					n = i.bind(null, t, n, e), i = void 0, !je || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, {
						capture: !0,
						passive: i
					}) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, {
						passive: i
					}) : e.addEventListener(t, n, !1)
				}

				function qr(e, t, n, r, i) {
					var a = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
						if (null === r) return;
						var s = r.tag;
						if (3 === s || 4 === s) {
							var o = r.stateNode.containerInfo;
							if (o === i || 8 === o.nodeType && o.parentNode === i) break;
							if (4 === s)
								for (s = r.return; null !== s;) {
									var l = s.tag;
									if ((3 === l || 4 === l) && ((l = s.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i)) return;
									s = s.return
								}
							for (; null !== o;) {
								if (null === (s = yi(o))) return;
								if (5 === (l = s.tag) || 6 === l) {
									r = a = s;
									continue e
								}
								o = o.parentNode
							}
						}
						r = r.return
					}
					Ae((function() {
						var r = a,
							i = xe(n),
							s = [];
						e: {
							var o = Rr.get(e);
							if (void 0 !== o) {
								var l = un,
									c = e;
								switch (e) {
									case "keypress":
										if (0 === tn(n)) break e;
									case "keydown":
									case "keyup":
										l = Tn;
										break;
									case "focusin":
										c = "focus", l = mn;
										break;
									case "focusout":
										c = "blur", l = mn;
										break;
									case "beforeblur":
									case "afterblur":
										l = mn;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										l = pn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										l = gn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										l = Nn;
										break;
									case Er:
									case Tr:
									case Ir:
										l = vn;
										break;
									case Nr:
										l = Rn;
										break;
									case "scroll":
										l = hn;
										break;
									case "wheel":
										l = Pn;
										break;
									case "copy":
									case "cut":
									case "paste":
										l = bn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										l = In
								}
								var u = 0 !== (4 & t),
									d = !u && "scroll" === e,
									h = u ? null !== o ? o + "Capture" : null : o;
								u = [];
								for (var f, p = r; null !== p;) {
									var g = (f = p).stateNode;
									if (5 === f.tag && null !== g && (f = g, null !== h && (null != (g = Pe(p, h)) && u.push(Hr(p, g, f)))), d) break;
									p = p.return
								}
								0 < u.length && (o = new l(o, c, null, n, i), s.push({
									event: o,
									listeners: u
								}))
							}
						}
						if (0 === (7 & t)) {
							if (l = "mouseout" === e || "pointerout" === e, (!(o = "mouseover" === e || "pointerover" === e) || n === we || !(c = n.relatedTarget || n.fromElement) || !yi(c) && !c[pi]) && (l || o) && (o = i.window === i ? i : (o = i.ownerDocument) ? o.defaultView || o.parentWindow : window, l ? (l = r, null !== (c = (c = n.relatedTarget || n.toElement) ? yi(c) : null) && (c !== (d = Be(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (l = null, c = r), l !== c)) {
								if (u = pn, g = "onMouseLeave", h = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (u = In, g = "onPointerLeave", h = "onPointerEnter", p = "pointer"), d = null == l ? o : wi(l), f = null == c ? o : wi(c), (o = new u(g, p + "leave", l, n, i)).target = d, o.relatedTarget = f, g = null, yi(i) === r && ((u = new u(h, p + "enter", c, n, i)).target = f, u.relatedTarget = d, g = u), d = g, l && c) e: {
									for (h = c, p = 0, f = u = l; f; f = Kr(f)) p++;
									for (f = 0, g = h; g; g = Kr(g)) f++;
									for (; 0 < p - f;) u = Kr(u),
									p--;
									for (; 0 < f - p;) h = Kr(h),
									f--;
									for (; p--;) {
										if (u === h || null !== h && u === h.alternate) break e;
										u = Kr(u), h = Kr(h)
									}
									u = null
								}
								else u = null;
								null !== l && Qr(s, o, l, u, !1), null !== c && null !== d && Qr(s, d, c, u, !0)
							}
							if ("select" === (l = (o = r ? wi(r) : window).nodeName && o.nodeName.toLowerCase()) || "input" === l && "file" === o.type) var m = Yn;
							else if (qn(o))
								if ($n) m = sr;
								else {
									m = ir;
									var v = rr
								}
							else(l = o.nodeName) && "input" === l.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (m = ar);
							switch (m && (m = m(e, r)) ? Hn(s, m, n, i) : (v && v(e, o, r), "focusout" === e && (v = o._wrapperState) && v.controlled && "number" === o.type && ee(o, "number", o.value)), v = r ? wi(r) : window, e) {
								case "focusin":
									(qn(v) || "true" === v.contentEditable) && (mr = v, vr = r, yr = null);
									break;
								case "focusout":
									yr = vr = mr = null;
									break;
								case "mousedown":
									br = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									br = !1, wr(s, n, i);
									break;
								case "selectionchange":
									if (gr) break;
								case "keydown":
								case "keyup":
									wr(s, n, i)
							}
							var y;
							if (Dn) e: {
								switch (e) {
									case "compositionstart":
										var b = "onCompositionStart";
										break e;
									case "compositionend":
										b = "onCompositionEnd";
										break e;
									case "compositionupdate":
										b = "onCompositionUpdate";
										break e
								}
								b = void 0
							}
							else Bn ? Vn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
							b && (Mn && "ko" !== n.locale && (Bn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Bn && (y = en()) : (Jt = "value" in ($t = i) ? $t.value : $t.textContent, Bn = !0)), 0 < (v = Wr(r, b)).length && (b = new wn(b, e, null, n, i), s.push({
								event: b,
								listeners: v
							}), y ? b.data = y : null !== (y = zn(n)) && (b.data = y))), (y = Ln ? function(e, t) {
								switch (e) {
									case "compositionend":
										return zn(t);
									case "keypress":
										return 32 !== t.which ? null : (Un = !0, Fn);
									case "textInput":
										return (e = t.data) === Fn && Un ? null : e;
									default:
										return null
								}
							}(e, n) : function(e, t) {
								if (Bn) return "compositionend" === e || !Dn && Vn(e, t) ? (e = en(), Zt = Jt = $t = null, Bn = !1, e) : null;
								switch (e) {
									case "paste":
									default:
										return null;
									case "keypress":
										if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
											if (t.char && 1 < t.char.length) return t.char;
											if (t.which) return String.fromCharCode(t.which)
										}
										return null;
									case "compositionend":
										return Mn && "ko" !== t.locale ? null : t.data
								}
							}(e, n)) && (0 < (r = Wr(r, "onBeforeInput")).length && (i = new wn("onBeforeInput", "beforeinput", null, n, i), s.push({
								event: i,
								listeners: r
							}), i.data = y))
						}
						Fr(s, t)
					}))
				}

				function Hr(e, t, n) {
					return {
						instance: e,
						listener: t,
						currentTarget: n
					}
				}

				function Wr(e, t) {
					for (var n = t + "Capture", r = []; null !== e;) {
						var i = e,
							a = i.stateNode;
						5 === i.tag && null !== a && (i = a, null != (a = Pe(e, n)) && r.unshift(Hr(e, a, i)), null != (a = Pe(e, t)) && r.push(Hr(e, a, i))), e = e.return
					}
					return r
				}

				function Kr(e) {
					if (null === e) return null;
					do {
						e = e.return
					} while (e && 5 !== e.tag);
					return e || null
				}

				function Qr(e, t, n, r, i) {
					for (var a = t._reactName, s = []; null !== n && n !== r;) {
						var o = n,
							l = o.alternate,
							c = o.stateNode;
						if (null !== l && l === r) break;
						5 === o.tag && null !== c && (o = c, i ? null != (l = Pe(n, a)) && s.unshift(Hr(n, l, o)) : i || null != (l = Pe(n, a)) && s.push(Hr(n, l, o))), n = n.return
					}
					0 !== s.length && e.push({
						event: t,
						listeners: s
					})
				}
				var Xr = /\r\n?/g,
					Yr = /\u0000|\uFFFD/g;

				function $r(e) {
					return ("string" === typeof e ? e : "" + e).replace(Xr, "\n").replace(Yr, "")
				}

				function Jr(e, t, n) {
					if (t = $r(t), $r(e) !== t && n) throw Error(a(425))
				}

				function Zr() {}
				var ei = null,
					ti = null;

				function ni(e, t) {
					return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
				}
				var ri = "function" === typeof setTimeout ? setTimeout : void 0,
					ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
					ai = "function" === typeof Promise ? Promise : void 0,
					si = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ai ? function(e) {
						return ai.resolve(null).then(e).catch(oi)
					} : ri;

				function oi(e) {
					setTimeout((function() {
						throw e
					}))
				}

				function li(e, t) {
					var n = t,
						r = 0;
					do {
						var i = n.nextSibling;
						if (e.removeChild(n), i && 8 === i.nodeType)
							if ("/$" === (n = i.data)) {
								if (0 === r) return e.removeChild(i), void Bt(t);
								r--
							} else "$" !== n && "$?" !== n && "$!" !== n || r++;
						n = i
					} while (n);
					Bt(t)
				}

				function ci(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null
						}
					}
					return e
				}

				function ui(e) {
					e = e.previousSibling;
					for (var t = 0; e;) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--
							} else "/$" === n && t++
						}
						e = e.previousSibling
					}
					return null
				}
				var di = Math.random().toString(36).slice(2),
					hi = "__reactFiber$" + di,
					fi = "__reactProps$" + di,
					pi = "__reactContainer$" + di,
					gi = "__reactEvents$" + di,
					mi = "__reactListeners$" + di,
					vi = "__reactHandles$" + di;

				function yi(e) {
					var t = e[hi];
					if (t) return t;
					for (var n = e.parentNode; n;) {
						if (t = n[pi] || n[hi]) {
							if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
								for (e = ui(e); null !== e;) {
									if (n = e[hi]) return n;
									e = ui(e)
								}
							return t
						}
						n = (e = n).parentNode
					}
					return null
				}

				function bi(e) {
					return !(e = e[hi] || e[pi]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
				}

				function wi(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(a(33))
				}

				function xi(e) {
					return e[fi] || null
				}
				var ki = [],
					Si = -1;

				function Ci(e) {
					return {
						current: e
					}
				}

				function _i(e) {
					0 > Si || (e.current = ki[Si], ki[Si] = null, Si--)
				}

				function Ei(e, t) {
					Si++, ki[Si] = e.current, e.current = t
				}
				var Ti = {},
					Ii = Ci(Ti),
					Ni = Ci(!1),
					Ri = Ti;

				function Ai(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Ti;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
					var i, a = {};
					for (i in n) a[i] = t[i];
					return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
				}

				function Pi(e) {
					return null !== (e = e.childContextTypes) && void 0 !== e
				}

				function ji() {
					_i(Ni), _i(Ii)
				}

				function Di(e, t, n) {
					if (Ii.current !== Ti) throw Error(a(168));
					Ei(Ii, t), Ei(Ni, n)
				}

				function Oi(e, t, n) {
					var r = e.stateNode;
					if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
					for (var i in r = r.getChildContext())
						if (!(i in t)) throw Error(a(108, G(e) || "Unknown", i));
					return M({}, n, r)
				}

				function Li(e) {
					return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ti, Ri = Ii.current, Ei(Ii, e), Ei(Ni, Ni.current), !0
				}

				function Mi(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(a(169));
					n ? (e = Oi(e, t, Ri), r.__reactInternalMemoizedMergedChildContext = e, _i(Ni), _i(Ii), Ei(Ii, e)) : _i(Ni), Ei(Ni, n)
				}
				var Fi = null,
					Ui = !1,
					Vi = !1;

				function zi(e) {
					null === Fi ? Fi = [e] : Fi.push(e)
				}

				function Bi() {
					if (!Vi && null !== Fi) {
						Vi = !0;
						var e = 0,
							t = bt;
						try {
							var n = Fi;
							for (bt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0)
								} while (null !== r)
							}
							Fi = null, Ui = !1
						} catch (i) {
							throw null !== Fi && (Fi = Fi.slice(e + 1)), Ke(Ze, Bi), i
						} finally {
							bt = t, Vi = !1
						}
					}
					return null
				}
				var Gi = [],
					qi = 0,
					Hi = null,
					Wi = 0,
					Ki = [],
					Qi = 0,
					Xi = null,
					Yi = 1,
					$i = "";

				function Ji(e, t) {
					Gi[qi++] = Wi, Gi[qi++] = Hi, Hi = e, Wi = t
				}

				function Zi(e, t, n) {
					Ki[Qi++] = Yi, Ki[Qi++] = $i, Ki[Qi++] = Xi, Xi = e;
					var r = Yi;
					e = $i;
					var i = 32 - st(r) - 1;
					r &= ~(1 << i), n += 1;
					var a = 32 - st(t) + i;
					if (30 < a) {
						var s = i - i % 5;
						a = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Yi = 1 << 32 - st(t) + i | n << i | r, $i = a + e
					} else Yi = 1 << a | n << i | r, $i = e
				}

				function ea(e) {
					null !== e.return && (Ji(e, 1), Zi(e, 1, 0))
				}

				function ta(e) {
					for (; e === Hi;) Hi = Gi[--qi], Gi[qi] = null, Wi = Gi[--qi], Gi[qi] = null;
					for (; e === Xi;) Xi = Ki[--Qi], Ki[Qi] = null, $i = Ki[--Qi], Ki[Qi] = null, Yi = Ki[--Qi], Ki[Qi] = null
				}
				var na = null,
					ra = null,
					ia = !1,
					aa = null;

				function sa(e, t) {
					var n = Ac(5, null, null, 0);
					n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
				}

				function oa(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, na = e, ra = ci(t.firstChild), !0);
						case 6:
							return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, na = e, ra = null, !0);
						case 13:
							return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xi ? {
								id: Yi,
								overflow: $i
							} : null, e.memoizedState = {
								dehydrated: t,
								treeContext: n,
								retryLane: 1073741824
							}, (n = Ac(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, na = e, ra = null, !0);
						default:
							return !1
					}
				}

				function la(e) {
					return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
				}

				function ca(e) {
					if (ia) {
						var t = ra;
						if (t) {
							var n = t;
							if (!oa(e, t)) {
								if (la(e)) throw Error(a(418));
								t = ci(n.nextSibling);
								var r = na;
								t && oa(e, t) ? sa(r, n) : (e.flags = -4097 & e.flags | 2, ia = !1, na = e)
							}
						} else {
							if (la(e)) throw Error(a(418));
							e.flags = -4097 & e.flags | 2, ia = !1, na = e
						}
					}
				}

				function ua(e) {
					for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
					na = e
				}

				function da(e) {
					if (e !== na) return !1;
					if (!ia) return ua(e), ia = !0, !1;
					var t;
					if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ni(e.type, e.memoizedProps)), t && (t = ra)) {
						if (la(e)) throw ha(), Error(a(418));
						for (; t;) sa(e, t), t = ci(t.nextSibling)
					}
					if (ua(e), 13 === e.tag) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
						e: {
							for (e = e.nextSibling, t = 0; e;) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											ra = ci(e.nextSibling);
											break e
										}
										t--
									} else "$" !== n && "$!" !== n && "$?" !== n || t++
								}
								e = e.nextSibling
							}
							ra = null
						}
					} else ra = na ? ci(e.stateNode.nextSibling) : null;
					return !0
				}

				function ha() {
					for (var e = ra; e;) e = ci(e.nextSibling)
				}

				function fa() {
					ra = na = null, ia = !1
				}

				function pa(e) {
					null === aa ? aa = [e] : aa.push(e)
				}
				var ga = w.ReactCurrentBatchConfig;

				function ma(e, t, n) {
					if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
						if (n._owner) {
							if (n = n._owner) {
								if (1 !== n.tag) throw Error(a(309));
								var r = n.stateNode
							}
							if (!r) throw Error(a(147, e));
							var i = r,
								s = "" + e;
							return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === s ? t.ref : (t = function(e) {
								var t = i.refs;
								null === e ? delete t[s] : t[s] = e
							}, t._stringRef = s, t)
						}
						if ("string" !== typeof e) throw Error(a(284));
						if (!n._owner) throw Error(a(290, e))
					}
					return e
				}

				function va(e, t) {
					throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
				}

				function ya(e) {
					return (0, e._init)(e._payload)
				}

				function ba(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
						}
					}

					function n(n, r) {
						if (!e) return null;
						for (; null !== r;) t(n, r), r = r.sibling;
						return null
					}

					function r(e, t) {
						for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
						return e
					}

					function i(e, t) {
						return (e = jc(e, t)).index = 0, e.sibling = null, e
					}

					function s(t, n, r) {
						return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
					}

					function o(t) {
						return e && null === t.alternate && (t.flags |= 2), t
					}

					function l(e, t, n, r) {
						return null === t || 6 !== t.tag ? ((t = Mc(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
					}

					function c(e, t, n, r) {
						var a = n.type;
						return a === S ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === P && ya(a) === t.type) ? ((r = i(t, n.props)).ref = ma(e, t, n), r.return = e, r) : ((r = Dc(n.type, n.key, n.props, null, e.mode, r)).ref = ma(e, t, n), r.return = e, r)
					}

					function u(e, t, n, r) {
						return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Fc(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
					}

					function d(e, t, n, r, a) {
						return null === t || 7 !== t.tag ? ((t = Oc(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t)
					}

					function h(e, t, n) {
						if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Mc("" + t, e.mode, n)).return = e, t;
						if ("object" === typeof t && null !== t) {
							switch (t.$$typeof) {
								case x:
									return (n = Dc(t.type, t.key, t.props, null, e.mode, n)).ref = ma(e, null, t), n.return = e, n;
								case k:
									return (t = Fc(t, e.mode, n)).return = e, t;
								case P:
									return h(e, (0, t._init)(t._payload), n)
							}
							if (te(t) || O(t)) return (t = Oc(t, e.mode, n, null)).return = e, t;
							va(e, t)
						}
						return null
					}

					function f(e, t, n, r) {
						var i = null !== t ? t.key : null;
						if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== i ? null : l(e, t, "" + n, r);
						if ("object" === typeof n && null !== n) {
							switch (n.$$typeof) {
								case x:
									return n.key === i ? c(e, t, n, r) : null;
								case k:
									return n.key === i ? u(e, t, n, r) : null;
								case P:
									return f(e, t, (i = n._init)(n._payload), r)
							}
							if (te(n) || O(n)) return null !== i ? null : d(e, t, n, r, null);
							va(e, n)
						}
						return null
					}

					function p(e, t, n, r, i) {
						if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, i);
						if ("object" === typeof r && null !== r) {
							switch (r.$$typeof) {
								case x:
									return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
								case k:
									return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
								case P:
									return p(e, t, n, (0, r._init)(r._payload), i)
							}
							if (te(r) || O(r)) return d(t, e = e.get(n) || null, r, i, null);
							va(t, r)
						}
						return null
					}

					function g(i, a, o, l) {
						for (var c = null, u = null, d = a, g = a = 0, m = null; null !== d && g < o.length; g++) {
							d.index > g ? (m = d, d = null) : m = d.sibling;
							var v = f(i, d, o[g], l);
							if (null === v) {
								null === d && (d = m);
								break
							}
							e && d && null === v.alternate && t(i, d), a = s(v, a, g), null === u ? c = v : u.sibling = v, u = v, d = m
						}
						if (g === o.length) return n(i, d), ia && Ji(i, g), c;
						if (null === d) {
							for (; g < o.length; g++) null !== (d = h(i, o[g], l)) && (a = s(d, a, g), null === u ? c = d : u.sibling = d, u = d);
							return ia && Ji(i, g), c
						}
						for (d = r(i, d); g < o.length; g++) null !== (m = p(d, i, g, o[g], l)) && (e && null !== m.alternate && d.delete(null === m.key ? g : m.key), a = s(m, a, g), null === u ? c = m : u.sibling = m, u = m);
						return e && d.forEach((function(e) {
							return t(i, e)
						})), ia && Ji(i, g), c
					}

					function m(i, o, l, c) {
						var u = O(l);
						if ("function" !== typeof u) throw Error(a(150));
						if (null == (l = u.call(l))) throw Error(a(151));
						for (var d = u = null, g = o, m = o = 0, v = null, y = l.next(); null !== g && !y.done; m++, y = l.next()) {
							g.index > m ? (v = g, g = null) : v = g.sibling;
							var b = f(i, g, y.value, c);
							if (null === b) {
								null === g && (g = v);
								break
							}
							e && g && null === b.alternate && t(i, g), o = s(b, o, m), null === d ? u = b : d.sibling = b, d = b, g = v
						}
						if (y.done) return n(i, g), ia && Ji(i, m), u;
						if (null === g) {
							for (; !y.done; m++, y = l.next()) null !== (y = h(i, y.value, c)) && (o = s(y, o, m), null === d ? u = y : d.sibling = y, d = y);
							return ia && Ji(i, m), u
						}
						for (g = r(i, g); !y.done; m++, y = l.next()) null !== (y = p(g, i, m, y.value, c)) && (e && null !== y.alternate && g.delete(null === y.key ? m : y.key), o = s(y, o, m), null === d ? u = y : d.sibling = y, d = y);
						return e && g.forEach((function(e) {
							return t(i, e)
						})), ia && Ji(i, m), u
					}
					return function e(r, a, s, l) {
						if ("object" === typeof s && null !== s && s.type === S && null === s.key && (s = s.props.children), "object" === typeof s && null !== s) {
							switch (s.$$typeof) {
								case x:
									e: {
										for (var c = s.key, u = a; null !== u;) {
											if (u.key === c) {
												if ((c = s.type) === S) {
													if (7 === u.tag) {
														n(r, u.sibling), (a = i(u, s.props.children)).return = r, r = a;
														break e
													}
												} else if (u.elementType === c || "object" === typeof c && null !== c && c.$$typeof === P && ya(c) === u.type) {
													n(r, u.sibling), (a = i(u, s.props)).ref = ma(r, u, s), a.return = r, r = a;
													break e
												}
												n(r, u);
												break
											}
											t(r, u), u = u.sibling
										}
										s.type === S ? ((a = Oc(s.props.children, r.mode, l, s.key)).return = r, r = a) : ((l = Dc(s.type, s.key, s.props, null, r.mode, l)).ref = ma(r, a, s), l.return = r, r = l)
									}
									return o(r);
								case k:
									e: {
										for (u = s.key; null !== a;) {
											if (a.key === u) {
												if (4 === a.tag && a.stateNode.containerInfo === s.containerInfo && a.stateNode.implementation === s.implementation) {
													n(r, a.sibling), (a = i(a, s.children || [])).return = r, r = a;
													break e
												}
												n(r, a);
												break
											}
											t(r, a), a = a.sibling
										}(a = Fc(s, r.mode, l)).return = r,
										r = a
									}
									return o(r);
								case P:
									return e(r, a, (u = s._init)(s._payload), l)
							}
							if (te(s)) return g(r, a, s, l);
							if (O(s)) return m(r, a, s, l);
							va(r, s)
						}
						return "string" === typeof s && "" !== s || "number" === typeof s ? (s = "" + s, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = i(a, s)).return = r, r = a) : (n(r, a), (a = Mc(s, r.mode, l)).return = r, r = a), o(r)) : n(r, a)
					}
				}
				var wa = ba(!0),
					xa = ba(!1),
					ka = Ci(null),
					Sa = null,
					Ca = null,
					_a = null;

				function Ea() {
					_a = Ca = Sa = null
				}

				function Ta(e) {
					var t = ka.current;
					_i(ka), e._currentValue = t
				}

				function Ia(e, t, n) {
					for (; null !== e;) {
						var r = e.alternate;
						if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
						e = e.return
					}
				}

				function Na(e, t) {
					Sa = e, _a = Ca = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (bo = !0), e.firstContext = null)
				}

				function Ra(e) {
					var t = e._currentValue;
					if (_a !== e)
						if (e = {
								context: e,
								memoizedValue: t,
								next: null
							}, null === Ca) {
							if (null === Sa) throw Error(a(308));
							Ca = e, Sa.dependencies = {
								lanes: 0,
								firstContext: e
							}
						} else Ca = Ca.next = e;
					return t
				}
				var Aa = null;

				function Pa(e) {
					null === Aa ? Aa = [e] : Aa.push(e)
				}

				function ja(e, t, n, r) {
					var i = t.interleaved;
					return null === i ? (n.next = n, Pa(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Da(e, r)
				}

				function Da(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
					return 3 === n.tag ? n.stateNode : null
				}
				var Oa = !1;

				function La(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: {
							pending: null,
							interleaved: null,
							lanes: 0
						},
						effects: null
					}
				}

				function Ma(e, t) {
					e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
						baseState: e.baseState,
						firstBaseUpdate: e.firstBaseUpdate,
						lastBaseUpdate: e.lastBaseUpdate,
						shared: e.shared,
						effects: e.effects
					})
				}

				function Fa(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null
					}
				}

				function Ua(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (r = r.shared, 0 !== (2 & Il)) {
						var i = r.pending;
						return null === i ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Da(e, n)
					}
					return null === (i = r.interleaved) ? (t.next = t, Pa(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Da(e, n)
				}

				function Va(e, t, n) {
					if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
						var r = t.lanes;
						n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
					}
				}

				function za(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var i = null,
							a = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var s = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null
								};
								null === a ? i = a = s : a = a.next = s, n = n.next
							} while (null !== n);
							null === a ? i = a = t : a = a.next = t
						} else i = a = t;
						return n = {
							baseState: r.baseState,
							firstBaseUpdate: i,
							lastBaseUpdate: a,
							shared: r.shared,
							effects: r.effects
						}, void(e.updateQueue = n)
					}
					null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
				}

				function Ba(e, t, n, r) {
					var i = e.updateQueue;
					Oa = !1;
					var a = i.firstBaseUpdate,
						s = i.lastBaseUpdate,
						o = i.shared.pending;
					if (null !== o) {
						i.shared.pending = null;
						var l = o,
							c = l.next;
						l.next = null, null === s ? a = c : s.next = c, s = l;
						var u = e.alternate;
						null !== u && ((o = (u = u.updateQueue).lastBaseUpdate) !== s && (null === o ? u.firstBaseUpdate = c : o.next = c, u.lastBaseUpdate = l))
					}
					if (null !== a) {
						var d = i.baseState;
						for (s = 0, u = c = l = null, o = a;;) {
							var h = o.lane,
								f = o.eventTime;
							if ((r & h) === h) {
								null !== u && (u = u.next = {
									eventTime: f,
									lane: 0,
									tag: o.tag,
									payload: o.payload,
									callback: o.callback,
									next: null
								});
								e: {
									var p = e,
										g = o;
									switch (h = t, f = n, g.tag) {
										case 1:
											if ("function" === typeof(p = g.payload)) {
												d = p.call(f, d, h);
												break e
											}
											d = p;
											break e;
										case 3:
											p.flags = -65537 & p.flags | 128;
										case 0:
											if (null === (h = "function" === typeof(p = g.payload) ? p.call(f, d, h) : p) || void 0 === h) break e;
											d = M({}, d, h);
											break e;
										case 2:
											Oa = !0
									}
								}
								null !== o.callback && 0 !== o.lane && (e.flags |= 64, null === (h = i.effects) ? i.effects = [o] : h.push(o))
							} else f = {
								eventTime: f,
								lane: h,
								tag: o.tag,
								payload: o.payload,
								callback: o.callback,
								next: null
							}, null === u ? (c = u = f, l = d) : u = u.next = f, s |= h;
							if (null === (o = o.next)) {
								if (null === (o = i.shared.pending)) break;
								o = (h = o).next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
							}
						}
						if (null === u && (l = d), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = u, null !== (t = i.shared.interleaved)) {
							i = t;
							do {
								s |= i.lane, i = i.next
							} while (i !== t)
						} else null === a && (i.shared.lanes = 0);
						Ll |= s, e.lanes = s, e.memoizedState = d
					}
				}

				function Ga(e, t, n) {
					if (e = t.effects, t.effects = null, null !== e)
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								i = r.callback;
							if (null !== i) {
								if (r.callback = null, r = n, "function" !== typeof i) throw Error(a(191, i));
								i.call(r)
							}
						}
				}
				var qa = {},
					Ha = Ci(qa),
					Wa = Ci(qa),
					Ka = Ci(qa);

				function Qa(e) {
					if (e === qa) throw Error(a(174));
					return e
				}

				function Xa(e, t) {
					switch (Ei(Ka, t), Ei(Wa, e), Ei(Ha, qa), e = t.nodeType) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
							break;
						default:
							t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
					}
					_i(Ha), Ei(Ha, t)
				}

				function Ya() {
					_i(Ha), _i(Wa), _i(Ka)
				}

				function $a(e) {
					Qa(Ka.current);
					var t = Qa(Ha.current),
						n = le(t, e.type);
					t !== n && (Ei(Wa, e), Ei(Ha, n))
				}

				function Ja(e) {
					Wa.current === e && (_i(Ha), _i(Wa))
				}
				var Za = Ci(0);

				function es(e) {
					for (var t = e; null !== t;) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 !== (128 & t.flags)) return t
						} else if (null !== t.child) {
							t.child.return = t, t = t.child;
							continue
						}
						if (t === e) break;
						for (; null === t.sibling;) {
							if (null === t.return || t.return === e) return null;
							t = t.return
						}
						t.sibling.return = t.return, t = t.sibling
					}
					return null
				}
				var ts = [];

				function ns() {
					for (var e = 0; e < ts.length; e++) ts[e]._workInProgressVersionPrimary = null;
					ts.length = 0
				}
				var rs = w.ReactCurrentDispatcher,
					is = w.ReactCurrentBatchConfig,
					as = 0,
					ss = null,
					os = null,
					ls = null,
					cs = !1,
					us = !1,
					ds = 0,
					hs = 0;

				function fs() {
					throw Error(a(321))
				}

				function ps(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!or(e[n], t[n])) return !1;
					return !0
				}

				function gs(e, t, n, r, i, s) {
					if (as = s, ss = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rs.current = null === e || null === e.memoizedState ? Js : Zs, e = n(r, i), us) {
						s = 0;
						do {
							if (us = !1, ds = 0, 25 <= s) throw Error(a(301));
							s += 1, ls = os = null, t.updateQueue = null, rs.current = eo, e = n(r, i)
						} while (us)
					}
					if (rs.current = $s, t = null !== os && null !== os.next, as = 0, ls = os = ss = null, cs = !1, t) throw Error(a(300));
					return e
				}

				function ms() {
					var e = 0 !== ds;
					return ds = 0, e
				}

				function vs() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null
					};
					return null === ls ? ss.memoizedState = ls = e : ls = ls.next = e, ls
				}

				function ys() {
					if (null === os) {
						var e = ss.alternate;
						e = null !== e ? e.memoizedState : null
					} else e = os.next;
					var t = null === ls ? ss.memoizedState : ls.next;
					if (null !== t) ls = t, os = e;
					else {
						if (null === e) throw Error(a(310));
						e = {
							memoizedState: (os = e).memoizedState,
							baseState: os.baseState,
							baseQueue: os.baseQueue,
							queue: os.queue,
							next: null
						}, null === ls ? ss.memoizedState = ls = e : ls = ls.next = e
					}
					return ls
				}

				function bs(e, t) {
					return "function" === typeof t ? t(e) : t
				}

				function ws(e) {
					var t = ys(),
						n = t.queue;
					if (null === n) throw Error(a(311));
					n.lastRenderedReducer = e;
					var r = os,
						i = r.baseQueue,
						s = n.pending;
					if (null !== s) {
						if (null !== i) {
							var o = i.next;
							i.next = s.next, s.next = o
						}
						r.baseQueue = i = s, n.pending = null
					}
					if (null !== i) {
						s = i.next, r = r.baseState;
						var l = o = null,
							c = null,
							u = s;
						do {
							var d = u.lane;
							if ((as & d) === d) null !== c && (c = c.next = {
								lane: 0,
								action: u.action,
								hasEagerState: u.hasEagerState,
								eagerState: u.eagerState,
								next: null
							}), r = u.hasEagerState ? u.eagerState : e(r, u.action);
							else {
								var h = {
									lane: d,
									action: u.action,
									hasEagerState: u.hasEagerState,
									eagerState: u.eagerState,
									next: null
								};
								null === c ? (l = c = h, o = r) : c = c.next = h, ss.lanes |= d, Ll |= d
							}
							u = u.next
						} while (null !== u && u !== s);
						null === c ? o = r : c.next = l, or(r, t.memoizedState) || (bo = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r
					}
					if (null !== (e = n.interleaved)) {
						i = e;
						do {
							s = i.lane, ss.lanes |= s, Ll |= s, i = i.next
						} while (i !== e)
					} else null === i && (n.lanes = 0);
					return [t.memoizedState, n.dispatch]
				}

				function xs(e) {
					var t = ys(),
						n = t.queue;
					if (null === n) throw Error(a(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						i = n.pending,
						s = t.memoizedState;
					if (null !== i) {
						n.pending = null;
						var o = i = i.next;
						do {
							s = e(s, o.action), o = o.next
						} while (o !== i);
						or(s, t.memoizedState) || (bo = !0), t.memoizedState = s, null === t.baseQueue && (t.baseState = s), n.lastRenderedState = s
					}
					return [s, r]
				}

				function ks() {}

				function Ss(e, t) {
					var n = ss,
						r = ys(),
						i = t(),
						s = !or(r.memoizedState, i);
					if (s && (r.memoizedState = i, bo = !0), r = r.queue, Os(Es.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || null !== ls && 1 & ls.memoizedState.tag) {
						if (n.flags |= 2048, Rs(9, _s.bind(null, n, r, i, t), void 0, null), null === Nl) throw Error(a(349));
						0 !== (30 & as) || Cs(n, t, i)
					}
					return i
				}

				function Cs(e, t, n) {
					e.flags |= 16384, e = {
						getSnapshot: t,
						value: n
					}, null === (t = ss.updateQueue) ? (t = {
						lastEffect: null,
						stores: null
					}, ss.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
				}

				function _s(e, t, n, r) {
					t.value = n, t.getSnapshot = r, Ts(t) && Is(e)
				}

				function Es(e, t, n) {
					return n((function() {
						Ts(t) && Is(e)
					}))
				}

				function Ts(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !or(e, n)
					} catch (r) {
						return !0
					}
				}

				function Is(e) {
					var t = Da(e, 1);
					null !== t && nc(t, e, 1, -1)
				}

				function Ns(e) {
					var t = vs();
					return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: bs,
						lastRenderedState: e
					}, t.queue = e, e = e.dispatch = Ks.bind(null, ss, e), [t.memoizedState, e]
				}

				function Rs(e, t, n, r) {
					return e = {
						tag: e,
						create: t,
						destroy: n,
						deps: r,
						next: null
					}, null === (t = ss.updateQueue) ? (t = {
						lastEffect: null,
						stores: null
					}, ss.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
				}

				function As() {
					return ys().memoizedState
				}

				function Ps(e, t, n, r) {
					var i = vs();
					ss.flags |= e, i.memoizedState = Rs(1 | t, n, void 0, void 0 === r ? null : r)
				}

				function js(e, t, n, r) {
					var i = ys();
					r = void 0 === r ? null : r;
					var a = void 0;
					if (null !== os) {
						var s = os.memoizedState;
						if (a = s.destroy, null !== r && ps(r, s.deps)) return void(i.memoizedState = Rs(t, n, a, r))
					}
					ss.flags |= e, i.memoizedState = Rs(1 | t, n, a, r)
				}

				function Ds(e, t) {
					return Ps(8390656, 8, e, t)
				}

				function Os(e, t) {
					return js(2048, 8, e, t)
				}

				function Ls(e, t) {
					return js(4, 2, e, t)
				}

				function Ms(e, t) {
					return js(4, 4, e, t)
				}

				function Fs(e, t) {
					return "function" === typeof t ? (e = e(), t(e), function() {
						t(null)
					}) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
						t.current = null
					}) : void 0
				}

				function Us(e, t, n) {
					return n = null !== n && void 0 !== n ? n.concat([e]) : null, js(4, 4, Fs.bind(null, t, e), n)
				}

				function Vs() {}

				function zs(e, t) {
					var n = ys();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ps(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
				}

				function Bs(e, t) {
					var n = ys();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ps(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
				}

				function Gs(e, t, n) {
					return 0 === (21 & as) ? (e.baseState && (e.baseState = !1, bo = !0), e.memoizedState = n) : (or(n, t) || (n = gt(), ss.lanes |= n, Ll |= n, e.baseState = !0), t)
				}

				function qs(e, t) {
					var n = bt;
					bt = 0 !== n && 4 > n ? n : 4, e(!0);
					var r = is.transition;
					is.transition = {};
					try {
						e(!1), t()
					} finally {
						bt = n, is.transition = r
					}
				}

				function Hs() {
					return ys().memoizedState
				}

				function Ws(e, t, n) {
					var r = tc(e);
					if (n = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null
						}, Qs(e)) Xs(t, n);
					else if (null !== (n = ja(e, t, n, r))) {
						nc(n, e, r, ec()), Ys(n, t, r)
					}
				}

				function Ks(e, t, n) {
					var r = tc(e),
						i = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null
						};
					if (Qs(e)) Xs(t, i);
					else {
						var a = e.alternate;
						if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
							var s = t.lastRenderedState,
								o = a(s, n);
							if (i.hasEagerState = !0, i.eagerState = o, or(o, s)) {
								var l = t.interleaved;
								return null === l ? (i.next = i, Pa(t)) : (i.next = l.next, l.next = i), void(t.interleaved = i)
							}
						} catch (c) {}
						null !== (n = ja(e, t, i, r)) && (nc(n, e, r, i = ec()), Ys(n, t, r))
					}
				}

				function Qs(e) {
					var t = e.alternate;
					return e === ss || null !== t && t === ss
				}

				function Xs(e, t) {
					us = cs = !0;
					var n = e.pending;
					null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
				}

				function Ys(e, t, n) {
					if (0 !== (4194240 & n)) {
						var r = t.lanes;
						n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
					}
				}
				var $s = {
						readContext: Ra,
						useCallback: fs,
						useContext: fs,
						useEffect: fs,
						useImperativeHandle: fs,
						useInsertionEffect: fs,
						useLayoutEffect: fs,
						useMemo: fs,
						useReducer: fs,
						useRef: fs,
						useState: fs,
						useDebugValue: fs,
						useDeferredValue: fs,
						useTransition: fs,
						useMutableSource: fs,
						useSyncExternalStore: fs,
						useId: fs,
						unstable_isNewReconciler: !1
					},
					Js = {
						readContext: Ra,
						useCallback: function(e, t) {
							return vs().memoizedState = [e, void 0 === t ? null : t], e
						},
						useContext: Ra,
						useEffect: Ds,
						useImperativeHandle: function(e, t, n) {
							return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ps(4194308, 4, Fs.bind(null, t, e), n)
						},
						useLayoutEffect: function(e, t) {
							return Ps(4194308, 4, e, t)
						},
						useInsertionEffect: function(e, t) {
							return Ps(4, 2, e, t)
						},
						useMemo: function(e, t) {
							var n = vs();
							return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
						},
						useReducer: function(e, t, n) {
							var r = vs();
							return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
								pending: null,
								interleaved: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: e,
								lastRenderedState: t
							}, r.queue = e, e = e.dispatch = Ws.bind(null, ss, e), [r.memoizedState, e]
						},
						useRef: function(e) {
							return e = {
								current: e
							}, vs().memoizedState = e
						},
						useState: Ns,
						useDebugValue: Vs,
						useDeferredValue: function(e) {
							return vs().memoizedState = e
						},
						useTransition: function() {
							var e = Ns(!1),
								t = e[0];
							return e = qs.bind(null, e[1]), vs().memoizedState = e, [t, e]
						},
						useMutableSource: function() {},
						useSyncExternalStore: function(e, t, n) {
							var r = ss,
								i = vs();
							if (ia) {
								if (void 0 === n) throw Error(a(407));
								n = n()
							} else {
								if (n = t(), null === Nl) throw Error(a(349));
								0 !== (30 & as) || Cs(r, t, n)
							}
							i.memoizedState = n;
							var s = {
								value: n,
								getSnapshot: t
							};
							return i.queue = s, Ds(Es.bind(null, r, s, e), [e]), r.flags |= 2048, Rs(9, _s.bind(null, r, s, n, t), void 0, null), n
						},
						useId: function() {
							var e = vs(),
								t = Nl.identifierPrefix;
							if (ia) {
								var n = $i;
								t = ":" + t + "R" + (n = (Yi & ~(1 << 32 - st(Yi) - 1)).toString(32) + n), 0 < (n = ds++) && (t += "H" + n.toString(32)), t += ":"
							} else t = ":" + t + "r" + (n = hs++).toString(32) + ":";
							return e.memoizedState = t
						},
						unstable_isNewReconciler: !1
					},
					Zs = {
						readContext: Ra,
						useCallback: zs,
						useContext: Ra,
						useEffect: Os,
						useImperativeHandle: Us,
						useInsertionEffect: Ls,
						useLayoutEffect: Ms,
						useMemo: Bs,
						useReducer: ws,
						useRef: As,
						useState: function() {
							return ws(bs)
						},
						useDebugValue: Vs,
						useDeferredValue: function(e) {
							return Gs(ys(), os.memoizedState, e)
						},
						useTransition: function() {
							return [ws(bs)[0], ys().memoizedState]
						},
						useMutableSource: ks,
						useSyncExternalStore: Ss,
						useId: Hs,
						unstable_isNewReconciler: !1
					},
					eo = {
						readContext: Ra,
						useCallback: zs,
						useContext: Ra,
						useEffect: Os,
						useImperativeHandle: Us,
						useInsertionEffect: Ls,
						useLayoutEffect: Ms,
						useMemo: Bs,
						useReducer: xs,
						useRef: As,
						useState: function() {
							return xs(bs)
						},
						useDebugValue: Vs,
						useDeferredValue: function(e) {
							var t = ys();
							return null === os ? t.memoizedState = e : Gs(t, os.memoizedState, e)
						},
						useTransition: function() {
							return [xs(bs)[0], ys().memoizedState]
						},
						useMutableSource: ks,
						useSyncExternalStore: Ss,
						useId: Hs,
						unstable_isNewReconciler: !1
					};

				function to(e, t) {
					if (e && e.defaultProps) {
						for (var n in t = M({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
						return t
					}
					return t
				}

				function no(e, t, n, r) {
					n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : M({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
				}
				var ro = {
					isMounted: function(e) {
						return !!(e = e._reactInternals) && Be(e) === e
					},
					enqueueSetState: function(e, t, n) {
						e = e._reactInternals;
						var r = ec(),
							i = tc(e),
							a = Fa(r, i);
						a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Ua(e, a, i)) && (nc(t, e, i, r), Va(t, e, i))
					},
					enqueueReplaceState: function(e, t, n) {
						e = e._reactInternals;
						var r = ec(),
							i = tc(e),
							a = Fa(r, i);
						a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Ua(e, a, i)) && (nc(t, e, i, r), Va(t, e, i))
					},
					enqueueForceUpdate: function(e, t) {
						e = e._reactInternals;
						var n = ec(),
							r = tc(e),
							i = Fa(n, r);
						i.tag = 2, void 0 !== t && null !== t && (i.callback = t), null !== (t = Ua(e, i, r)) && (nc(t, e, r, n), Va(t, e, r))
					}
				};

				function io(e, t, n, r, i, a, s) {
					return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, s) : !t.prototype || !t.prototype.isPureReactComponent || (!lr(n, r) || !lr(i, a))
				}

				function ao(e, t, n) {
					var r = !1,
						i = Ti,
						a = t.contextType;
					return "object" === typeof a && null !== a ? a = Ra(a) : (i = Pi(t) ? Ri : Ii.current, a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Ai(e, i) : Ti), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ro, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
				}

				function so(e, t, n, r) {
					e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ro.enqueueReplaceState(t, t.state, null)
				}

				function oo(e, t, n, r) {
					var i = e.stateNode;
					i.props = n, i.state = e.memoizedState, i.refs = {}, La(e);
					var a = t.contextType;
					"object" === typeof a && null !== a ? i.context = Ra(a) : (a = Pi(t) ? Ri : Ii.current, i.context = Ai(e, a)), i.state = e.memoizedState, "function" === typeof(a = t.getDerivedStateFromProps) && (no(e, t, a, n), i.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (t = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && ro.enqueueReplaceState(i, i.state, null), Ba(e, n, i, r), i.state = e.memoizedState), "function" === typeof i.componentDidMount && (e.flags |= 4194308)
				}

				function lo(e, t) {
					try {
						var n = "",
							r = t;
						do {
							n += z(r), r = r.return
						} while (r);
						var i = n
					} catch (a) {
						i = "\nError generating stack: " + a.message + "\n" + a.stack
					}
					return {
						value: e,
						source: t,
						stack: i,
						digest: null
					}
				}

				function co(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null
					}
				}

				function uo(e, t) {
					try {
						console.error(t.value)
					} catch (n) {
						setTimeout((function() {
							throw n
						}))
					}
				}
				var ho = "function" === typeof WeakMap ? WeakMap : Map;

				function fo(e, t, n) {
					(n = Fa(-1, n)).tag = 3, n.payload = {
						element: null
					};
					var r = t.value;
					return n.callback = function() {
						ql || (ql = !0, Hl = r), uo(0, t)
					}, n
				}

				function po(e, t, n) {
					(n = Fa(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ("function" === typeof r) {
						var i = t.value;
						n.payload = function() {
							return r(i)
						}, n.callback = function() {
							uo(0, t)
						}
					}
					var a = e.stateNode;
					return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function() {
						uo(0, t), "function" !== typeof r && (null === Wl ? Wl = new Set([this]) : Wl.add(this));
						var e = t.stack;
						this.componentDidCatch(t.value, {
							componentStack: null !== e ? e : ""
						})
					}), n
				}

				function go(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new ho;
						var i = new Set;
						r.set(t, i)
					} else void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i));
					i.has(n) || (i.add(n), e = _c.bind(null, e, t, n), t.then(e, e))
				}

				function mo(e) {
					do {
						var t;
						if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
						e = e.return
					} while (null !== e);
					return null
				}

				function vo(e, t, n, r, i) {
					return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Fa(-1, 1)).tag = 2, Ua(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
				}
				var yo = w.ReactCurrentOwner,
					bo = !1;

				function wo(e, t, n, r) {
					t.child = null === e ? xa(t, null, n, r) : wa(t, e.child, n, r)
				}

				function xo(e, t, n, r, i) {
					n = n.render;
					var a = t.ref;
					return Na(t, i), r = gs(e, t, n, r, a, i), n = ms(), null === e || bo ? (ia && n && ea(t), t.flags |= 1, wo(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, qo(e, t, i))
				}

				function ko(e, t, n, r, i) {
					if (null === e) {
						var a = n.type;
						return "function" !== typeof a || Pc(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Dc(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, So(e, t, a, r, i))
					}
					if (a = e.child, 0 === (e.lanes & i)) {
						var s = a.memoizedProps;
						if ((n = null !== (n = n.compare) ? n : lr)(s, r) && e.ref === t.ref) return qo(e, t, i)
					}
					return t.flags |= 1, (e = jc(a, r)).ref = t.ref, e.return = t, t.child = e
				}

				function So(e, t, n, r, i) {
					if (null !== e) {
						var a = e.memoizedProps;
						if (lr(a, r) && e.ref === t.ref) {
							if (bo = !1, t.pendingProps = r = a, 0 === (e.lanes & i)) return t.lanes = e.lanes, qo(e, t, i);
							0 !== (131072 & e.flags) && (bo = !0)
						}
					}
					return Eo(e, t, n, r, i)
				}

				function Co(e, t, n) {
					var r = t.pendingProps,
						i = r.children,
						a = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode)
						if (0 === (1 & t.mode)) t.memoizedState = {
							baseLanes: 0,
							cachePool: null,
							transitions: null
						}, Ei(jl, Pl), Pl |= n;
						else {
							if (0 === (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
								baseLanes: e,
								cachePool: null,
								transitions: null
							}, t.updateQueue = null, Ei(jl, Pl), Pl |= e, null;
							t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null
							}, r = null !== a ? a.baseLanes : n, Ei(jl, Pl), Pl |= r
						}
					else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Ei(jl, Pl), Pl |= r;
					return wo(e, t, i, n), t.child
				}

				function _o(e, t) {
					var n = t.ref;
					(null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
				}

				function Eo(e, t, n, r, i) {
					var a = Pi(n) ? Ri : Ii.current;
					return a = Ai(t, a), Na(t, i), n = gs(e, t, n, r, a, i), r = ms(), null === e || bo ? (ia && r && ea(t), t.flags |= 1, wo(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, qo(e, t, i))
				}

				function To(e, t, n, r, i) {
					if (Pi(n)) {
						var a = !0;
						Li(t)
					} else a = !1;
					if (Na(t, i), null === t.stateNode) Go(e, t), ao(t, n, r), oo(t, n, r, i), r = !0;
					else if (null === e) {
						var s = t.stateNode,
							o = t.memoizedProps;
						s.props = o;
						var l = s.context,
							c = n.contextType;
						"object" === typeof c && null !== c ? c = Ra(c) : c = Ai(t, c = Pi(n) ? Ri : Ii.current);
						var u = n.getDerivedStateFromProps,
							d = "function" === typeof u || "function" === typeof s.getSnapshotBeforeUpdate;
						d || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (o !== r || l !== c) && so(t, s, r, c), Oa = !1;
						var h = t.memoizedState;
						s.state = h, Ba(t, r, s, i), l = t.memoizedState, o !== r || h !== l || Ni.current || Oa ? ("function" === typeof u && (no(t, n, u, r), l = t.memoizedState), (o = Oa || io(t, n, o, r, h, l, c)) ? (d || "function" !== typeof s.UNSAFE_componentWillMount && "function" !== typeof s.componentWillMount || ("function" === typeof s.componentWillMount && s.componentWillMount(), "function" === typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" === typeof s.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof s.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = o) : ("function" === typeof s.componentDidMount && (t.flags |= 4194308), r = !1)
					} else {
						s = t.stateNode, Ma(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : to(t.type, o), s.props = c, d = t.pendingProps, h = s.context, "object" === typeof(l = n.contextType) && null !== l ? l = Ra(l) : l = Ai(t, l = Pi(n) ? Ri : Ii.current);
						var f = n.getDerivedStateFromProps;
						(u = "function" === typeof f || "function" === typeof s.getSnapshotBeforeUpdate) || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (o !== d || h !== l) && so(t, s, r, l), Oa = !1, h = t.memoizedState, s.state = h, Ba(t, r, s, i);
						var p = t.memoizedState;
						o !== d || h !== p || Ni.current || Oa ? ("function" === typeof f && (no(t, n, f, r), p = t.memoizedState), (c = Oa || io(t, n, c, r, h, p, l) || !1) ? (u || "function" !== typeof s.UNSAFE_componentWillUpdate && "function" !== typeof s.componentWillUpdate || ("function" === typeof s.componentWillUpdate && s.componentWillUpdate(r, p, l), "function" === typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(r, p, l)), "function" === typeof s.componentDidUpdate && (t.flags |= 4), "function" === typeof s.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof s.componentDidUpdate || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), s.props = r, s.state = p, s.context = l, r = c) : ("function" !== typeof s.componentDidUpdate || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
					}
					return Io(e, t, n, r, a, i)
				}

				function Io(e, t, n, r, i, a) {
					_o(e, t);
					var s = 0 !== (128 & t.flags);
					if (!r && !s) return i && Mi(t, n, !1), qo(e, t, a);
					r = t.stateNode, yo.current = t;
					var o = s && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
					return t.flags |= 1, null !== e && s ? (t.child = wa(t, e.child, null, a), t.child = wa(t, null, o, a)) : wo(e, t, o, a), t.memoizedState = r.state, i && Mi(t, n, !0), t.child
				}

				function No(e) {
					var t = e.stateNode;
					t.pendingContext ? Di(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Di(0, t.context, !1), Xa(e, t.containerInfo)
				}

				function Ro(e, t, n, r, i) {
					return fa(), pa(i), t.flags |= 256, wo(e, t, n, r), t.child
				}
				var Ao, Po, jo, Do, Oo = {
					dehydrated: null,
					treeContext: null,
					retryLane: 0
				};

				function Lo(e) {
					return {
						baseLanes: e,
						cachePool: null,
						transitions: null
					}
				}

				function Mo(e, t, n) {
					var r, i = t.pendingProps,
						s = Za.current,
						o = !1,
						l = 0 !== (128 & t.flags);
					if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & s)), r ? (o = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (s |= 1), Ei(Za, 1 & s), null === e) return ca(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = i.children, e = i.fallback, o ? (i = t.mode, o = t.child, l = {
						mode: "hidden",
						children: l
					}, 0 === (1 & i) && null !== o ? (o.childLanes = 0, o.pendingProps = l) : o = Lc(l, i, 0, null), e = Oc(e, i, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Lo(n), t.memoizedState = Oo, e) : Fo(t, l));
					if (null !== (s = e.memoizedState) && null !== (r = s.dehydrated)) return function(e, t, n, r, i, s, o) {
						if (n) return 256 & t.flags ? (t.flags &= -257, Uo(e, t, o, r = co(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Lc({
							mode: "visible",
							children: r.children
						}, i, 0, null), (s = Oc(s, i, o, null)).flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, 0 !== (1 & t.mode) && wa(t, e.child, null, o), t.child.memoizedState = Lo(o), t.memoizedState = Oo, s);
						if (0 === (1 & t.mode)) return Uo(e, t, o, null);
						if ("$!" === i.data) {
							if (r = i.nextSibling && i.nextSibling.dataset) var l = r.dgst;
							return r = l, Uo(e, t, o, r = co(s = Error(a(419)), r, void 0))
						}
						if (l = 0 !== (o & e.childLanes), bo || l) {
							if (null !== (r = Nl)) {
								switch (o & -o) {
									case 4:
										i = 2;
										break;
									case 16:
										i = 8;
										break;
									case 64:
									case 128:
									case 256:
									case 512:
									case 1024:
									case 2048:
									case 4096:
									case 8192:
									case 16384:
									case 32768:
									case 65536:
									case 131072:
									case 262144:
									case 524288:
									case 1048576:
									case 2097152:
									case 4194304:
									case 8388608:
									case 16777216:
									case 33554432:
									case 67108864:
										i = 32;
										break;
									case 536870912:
										i = 268435456;
										break;
									default:
										i = 0
								}
								0 !== (i = 0 !== (i & (r.suspendedLanes | o)) ? 0 : i) && i !== s.retryLane && (s.retryLane = i, Da(e, i), nc(r, e, i, -1))
							}
							return gc(), Uo(e, t, o, r = co(Error(a(421))))
						}
						return "$?" === i.data ? (t.flags |= 128, t.child = e.child, t = Tc.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, ra = ci(i.nextSibling), na = t, ia = !0, aa = null, null !== e && (Ki[Qi++] = Yi, Ki[Qi++] = $i, Ki[Qi++] = Xi, Yi = e.id, $i = e.overflow, Xi = t), t = Fo(t, r.children), t.flags |= 4096, t)
					}(e, t, l, i, r, s, n);
					if (o) {
						o = i.fallback, l = t.mode, r = (s = e.child).sibling;
						var c = {
							mode: "hidden",
							children: i.children
						};
						return 0 === (1 & l) && t.child !== s ? ((i = t.child).childLanes = 0, i.pendingProps = c, t.deletions = null) : (i = jc(s, c)).subtreeFlags = 14680064 & s.subtreeFlags, null !== r ? o = jc(r, o) : (o = Oc(o, l, n, null)).flags |= 2, o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, l = null === (l = e.child.memoizedState) ? Lo(n) : {
							baseLanes: l.baseLanes | n,
							cachePool: null,
							transitions: l.transitions
						}, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Oo, i
					}
					return e = (o = e.child).sibling, i = jc(o, {
						mode: "visible",
						children: i.children
					}), 0 === (1 & t.mode) && (i.lanes = n), i.return = t, i.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i
				}

				function Fo(e, t) {
					return (t = Lc({
						mode: "visible",
						children: t
					}, e.mode, 0, null)).return = e, e.child = t
				}

				function Uo(e, t, n, r) {
					return null !== r && pa(r), wa(t, e.child, null, n), (e = Fo(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
				}

				function Vo(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), Ia(e.return, t, n)
				}

				function zo(e, t, n, r, i) {
					var a = e.memoizedState;
					null === a ? e.memoizedState = {
						isBackwards: t,
						rendering: null,
						renderingStartTime: 0,
						last: r,
						tail: n,
						tailMode: i
					} : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i)
				}

				function Bo(e, t, n) {
					var r = t.pendingProps,
						i = r.revealOrder,
						a = r.tail;
					if (wo(e, t, r.children, n), 0 !== (2 & (r = Za.current))) r = 1 & r | 2, t.flags |= 128;
					else {
						if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
							if (13 === e.tag) null !== e.memoizedState && Vo(e, n, t);
							else if (19 === e.tag) Vo(e, n, t);
							else if (null !== e.child) {
								e.child.return = e, e = e.child;
								continue
							}
							if (e === t) break e;
							for (; null === e.sibling;) {
								if (null === e.return || e.return === t) break e;
								e = e.return
							}
							e.sibling.return = e.return, e = e.sibling
						}
						r &= 1
					}
					if (Ei(Za, r), 0 === (1 & t.mode)) t.memoizedState = null;
					else switch (i) {
						case "forwards":
							for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === es(e) && (i = n), n = n.sibling;
							null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), zo(t, !1, i, n, a);
							break;
						case "backwards":
							for (n = null, i = t.child, t.child = null; null !== i;) {
								if (null !== (e = i.alternate) && null === es(e)) {
									t.child = i;
									break
								}
								e = i.sibling, i.sibling = n, n = i, i = e
							}
							zo(t, !0, n, null, a);
							break;
						case "together":
							zo(t, !1, null, null, void 0);
							break;
						default:
							t.memoizedState = null
					}
					return t.child
				}

				function Go(e, t) {
					0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
				}

				function qo(e, t, n) {
					if (null !== e && (t.dependencies = e.dependencies), Ll |= t.lanes, 0 === (n & t.childLanes)) return null;
					if (null !== e && t.child !== e.child) throw Error(a(153));
					if (null !== t.child) {
						for (n = jc(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = jc(e, e.pendingProps)).return = t;
						n.sibling = null
					}
					return t.child
				}

				function Ho(e, t) {
					if (!ia) switch (e.tailMode) {
						case "hidden":
							t = e.tail;
							for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
							null === n ? e.tail = null : n.sibling = null;
							break;
						case "collapsed":
							n = e.tail;
							for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
							null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
					}
				}

				function Wo(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;
					else
						for (i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
					return e.subtreeFlags |= r, e.childLanes = n, t
				}

				function Ko(e, t, n) {
					var r = t.pendingProps;
					switch (ta(t), t.tag) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return Wo(t), null;
						case 1:
						case 17:
							return Pi(t.type) && ji(), Wo(t), null;
						case 3:
							return r = t.stateNode, Ya(), _i(Ni), _i(Ii), ns(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (da(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== aa && (sc(aa), aa = null))), Po(e, t), Wo(t), null;
						case 5:
							Ja(t);
							var i = Qa(Ka.current);
							if (n = t.type, null !== e && null != t.stateNode) jo(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(a(166));
									return Wo(t), null
								}
								if (e = Qa(Ha.current), da(t)) {
									r = t.stateNode, n = t.type;
									var s = t.memoizedProps;
									switch (r[hi] = t, r[fi] = s, e = 0 !== (1 & t.mode), n) {
										case "dialog":
											Ur("cancel", r), Ur("close", r);
											break;
										case "iframe":
										case "object":
										case "embed":
											Ur("load", r);
											break;
										case "video":
										case "audio":
											for (i = 0; i < Or.length; i++) Ur(Or[i], r);
											break;
										case "source":
											Ur("error", r);
											break;
										case "img":
										case "image":
										case "link":
											Ur("error", r), Ur("load", r);
											break;
										case "details":
											Ur("toggle", r);
											break;
										case "input":
											Y(r, s), Ur("invalid", r);
											break;
										case "select":
											r._wrapperState = {
												wasMultiple: !!s.multiple
											}, Ur("invalid", r);
											break;
										case "textarea":
											ie(r, s), Ur("invalid", r)
									}
									for (var l in ye(n, s), i = null, s)
										if (s.hasOwnProperty(l)) {
											var c = s[l];
											"children" === l ? "string" === typeof c ? r.textContent !== c && (!0 !== s.suppressHydrationWarning && Jr(r.textContent, c, e), i = ["children", c]) : "number" === typeof c && r.textContent !== "" + c && (!0 !== s.suppressHydrationWarning && Jr(r.textContent, c, e), i = ["children", "" + c]) : o.hasOwnProperty(l) && null != c && "onScroll" === l && Ur("scroll", r)
										} switch (n) {
										case "input":
											W(r), Z(r, s, !0);
											break;
										case "textarea":
											W(r), se(r);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" === typeof s.onClick && (r.onclick = Zr)
									}
									r = i, t.updateQueue = r, null !== r && (t.flags |= 4)
								} else {
									l = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = oe(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, {
										is: r.is
									}) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[hi] = t, e[fi] = r, Ao(e, t, !1, !1), t.stateNode = e;
									e: {
										switch (l = be(n, r), n) {
											case "dialog":
												Ur("cancel", e), Ur("close", e), i = r;
												break;
											case "iframe":
											case "object":
											case "embed":
												Ur("load", e), i = r;
												break;
											case "video":
											case "audio":
												for (i = 0; i < Or.length; i++) Ur(Or[i], e);
												i = r;
												break;
											case "source":
												Ur("error", e), i = r;
												break;
											case "img":
											case "image":
											case "link":
												Ur("error", e), Ur("load", e), i = r;
												break;
											case "details":
												Ur("toggle", e), i = r;
												break;
											case "input":
												Y(e, r), i = X(e, r), Ur("invalid", e);
												break;
											case "option":
											default:
												i = r;
												break;
											case "select":
												e._wrapperState = {
													wasMultiple: !!r.multiple
												}, i = M({}, r, {
													value: void 0
												}), Ur("invalid", e);
												break;
											case "textarea":
												ie(e, r), i = re(e, r), Ur("invalid", e)
										}
										for (s in ye(n, i), c = i)
											if (c.hasOwnProperty(s)) {
												var u = c[s];
												"style" === s ? me(e, u) : "dangerouslySetInnerHTML" === s ? null != (u = u ? u.__html : void 0) && de(e, u) : "children" === s ? "string" === typeof u ? ("textarea" !== n || "" !== u) && he(e, u) : "number" === typeof u && he(e, "" + u) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (o.hasOwnProperty(s) ? null != u && "onScroll" === s && Ur("scroll", e) : null != u && b(e, s, u, l))
											} switch (n) {
											case "input":
												W(e), Z(e, r, !1);
												break;
											case "textarea":
												W(e), se(e);
												break;
											case "option":
												null != r.value && e.setAttribute("value", "" + q(r.value));
												break;
											case "select":
												e.multiple = !!r.multiple, null != (s = r.value) ? ne(e, !!r.multiple, s, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												"function" === typeof i.onClick && (e.onclick = Zr)
										}
										switch (n) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												r = !!r.autoFocus;
												break e;
											case "img":
												r = !0;
												break e;
											default:
												r = !1
										}
									}
									r && (t.flags |= 4)
								}
								null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
							}
							return Wo(t), null;
						case 6:
							if (e && null != t.stateNode) Do(e, t, e.memoizedProps, r);
							else {
								if ("string" !== typeof r && null === t.stateNode) throw Error(a(166));
								if (n = Qa(Ka.current), Qa(Ha.current), da(t)) {
									if (r = t.stateNode, n = t.memoizedProps, r[hi] = t, (s = r.nodeValue !== n) && null !== (e = na)) switch (e.tag) {
										case 3:
											Jr(r.nodeValue, n, 0 !== (1 & e.mode));
											break;
										case 5:
											!0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, 0 !== (1 & e.mode))
									}
									s && (t.flags |= 4)
								} else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[hi] = t, t.stateNode = r
							}
							return Wo(t), null;
						case 13:
							if (_i(Za), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
								if (ia && null !== ra && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) ha(), fa(), t.flags |= 98560, s = !1;
								else if (s = da(t), null !== r && null !== r.dehydrated) {
									if (null === e) {
										if (!s) throw Error(a(318));
										if (!(s = null !== (s = t.memoizedState) ? s.dehydrated : null)) throw Error(a(317));
										s[hi] = t
									} else fa(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
									Wo(t), s = !1
								} else null !== aa && (sc(aa), aa = null), s = !0;
								if (!s) return 65536 & t.flags ? t : null
							}
							return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & Za.current) ? 0 === Dl && (Dl = 3) : gc())), null !== t.updateQueue && (t.flags |= 4), Wo(t), null);
						case 4:
							return Ya(), Po(e, t), null === e && Br(t.stateNode.containerInfo), Wo(t), null;
						case 10:
							return Ta(t.type._context), Wo(t), null;
						case 19:
							if (_i(Za), null === (s = t.memoizedState)) return Wo(t), null;
							if (r = 0 !== (128 & t.flags), null === (l = s.rendering))
								if (r) Ho(s, !1);
								else {
									if (0 !== Dl || null !== e && 0 !== (128 & e.flags))
										for (e = t.child; null !== e;) {
											if (null !== (l = es(e))) {
												for (t.flags |= 128, Ho(s, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (s = n).flags &= 14680066, null === (l = s.alternate) ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = l.childLanes, s.lanes = l.lanes, s.child = l.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = l.memoizedProps, s.memoizedState = l.memoizedState, s.updateQueue = l.updateQueue, s.type = l.type, e = l.dependencies, s.dependencies = null === e ? null : {
													lanes: e.lanes,
													firstContext: e.firstContext
												}), n = n.sibling;
												return Ei(Za, 1 & Za.current | 2), t.child
											}
											e = e.sibling
										}
									null !== s.tail && $e() > Bl && (t.flags |= 128, r = !0, Ho(s, !1), t.lanes = 4194304)
								}
							else {
								if (!r)
									if (null !== (e = es(l))) {
										if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Ho(s, !0), null === s.tail && "hidden" === s.tailMode && !l.alternate && !ia) return Wo(t), null
									} else 2 * $e() - s.renderingStartTime > Bl && 1073741824 !== n && (t.flags |= 128, r = !0, Ho(s, !1), t.lanes = 4194304);
								s.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = s.last) ? n.sibling = l : t.child = l, s.last = l)
							}
							return null !== s.tail ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = $e(), t.sibling = null, n = Za.current, Ei(Za, r ? 1 & n | 2 : 1 & n), t) : (Wo(t), null);
						case 22:
						case 23:
							return dc(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Pl) && (Wo(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Wo(t), null;
						case 24:
						case 25:
							return null
					}
					throw Error(a(156, t.tag))
				}

				function Qo(e, t) {
					switch (ta(t), t.tag) {
						case 1:
							return Pi(t.type) && ji(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
						case 3:
							return Ya(), _i(Ni), _i(Ii), ns(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
						case 5:
							return Ja(t), null;
						case 13:
							if (_i(Za), null !== (e = t.memoizedState) && null !== e.dehydrated) {
								if (null === t.alternate) throw Error(a(340));
								fa()
							}
							return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
						case 19:
							return _i(Za), null;
						case 4:
							return Ya(), null;
						case 10:
							return Ta(t.type._context), null;
						case 22:
						case 23:
							return dc(), null;
						default:
							return null
					}
				}
				Ao = function(e, t) {
					for (var n = t.child; null !== n;) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							n.child.return = n, n = n.child;
							continue
						}
						if (n === t) break;
						for (; null === n.sibling;) {
							if (null === n.return || n.return === t) return;
							n = n.return
						}
						n.sibling.return = n.return, n = n.sibling
					}
				}, Po = function() {}, jo = function(e, t, n, r) {
					var i = e.memoizedProps;
					if (i !== r) {
						e = t.stateNode, Qa(Ha.current);
						var a, s = null;
						switch (n) {
							case "input":
								i = X(e, i), r = X(e, r), s = [];
								break;
							case "select":
								i = M({}, i, {
									value: void 0
								}), r = M({}, r, {
									value: void 0
								}), s = [];
								break;
							case "textarea":
								i = re(e, i), r = re(e, r), s = [];
								break;
							default:
								"function" !== typeof i.onClick && "function" === typeof r.onClick && (e.onclick = Zr)
						}
						for (u in ye(n, r), n = null, i)
							if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && null != i[u])
								if ("style" === u) {
									var l = i[u];
									for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
								} else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (o.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
						for (u in r) {
							var c = r[u];
							if (l = null != i ? i[u] : void 0, r.hasOwnProperty(u) && c !== l && (null != c || null != l))
								if ("style" === u)
									if (l) {
										for (a in l) !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
										for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (n || (n = {}), n[a] = c[a])
									} else n || (s || (s = []), s.push(u, n)), n = c;
							else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, null != c && l !== c && (s = s || []).push(u, c)) : "children" === u ? "string" !== typeof c && "number" !== typeof c || (s = s || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (o.hasOwnProperty(u) ? (null != c && "onScroll" === u && Ur("scroll", e), s || l === c || (s = [])) : (s = s || []).push(u, c))
						}
						n && (s = s || []).push("style", n);
						var u = s;
						(t.updateQueue = u) && (t.flags |= 4)
					}
				}, Do = function(e, t, n, r) {
					n !== r && (t.flags |= 4)
				};
				var Xo = !1,
					Yo = !1,
					$o = "function" === typeof WeakSet ? WeakSet : Set,
					Jo = null;

				function Zo(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" === typeof n) try {
							n(null)
						} catch (r) {
							Cc(e, t, r)
						} else n.current = null
				}

				function el(e, t, n) {
					try {
						n()
					} catch (r) {
						Cc(e, t, r)
					}
				}
				var tl = !1;

				function nl(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var i = r = r.next;
						do {
							if ((i.tag & e) === e) {
								var a = i.destroy;
								i.destroy = void 0, void 0 !== a && el(t, n, a)
							}
							i = i.next
						} while (i !== r)
					}
				}

				function rl(e, t) {
					if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
						var n = t = t.next;
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r()
							}
							n = n.next
						} while (n !== t)
					}
				}

				function il(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
					}
				}

				function al(e) {
					var t = e.alternate;
					null !== t && (e.alternate = null, al(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[hi], delete t[fi], delete t[gi], delete t[mi], delete t[vi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
				}

				function sl(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag
				}

				function ol(e) {
					e: for (;;) {
						for (; null === e.sibling;) {
							if (null === e.return || sl(e.return)) return null;
							e = e.return
						}
						for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							e.child.return = e, e = e.child
						}
						if (!(2 & e.flags)) return e.stateNode
					}
				}

				function ll(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Zr));
					else if (4 !== r && null !== (e = e.child))
						for (ll(e, t, n), e = e.sibling; null !== e;) ll(e, t, n), e = e.sibling
				}

				function cl(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (cl(e, t, n), e = e.sibling; null !== e;) cl(e, t, n), e = e.sibling
				}
				var ul = null,
					dl = !1;

				function hl(e, t, n) {
					for (n = n.child; null !== n;) fl(e, t, n), n = n.sibling
				}

				function fl(e, t, n) {
					if (at && "function" === typeof at.onCommitFiberUnmount) try {
						at.onCommitFiberUnmount(it, n)
					} catch (o) {}
					switch (n.tag) {
						case 5:
							Yo || Zo(n, t);
						case 6:
							var r = ul,
								i = dl;
							ul = null, hl(e, t, n), dl = i, null !== (ul = r) && (dl ? (e = ul, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : ul.removeChild(n.stateNode));
							break;
						case 18:
							null !== ul && (dl ? (e = ul, n = n.stateNode, 8 === e.nodeType ? li(e.parentNode, n) : 1 === e.nodeType && li(e, n), Bt(e)) : li(ul, n.stateNode));
							break;
						case 4:
							r = ul, i = dl, ul = n.stateNode.containerInfo, dl = !0, hl(e, t, n), ul = r, dl = i;
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (!Yo && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
								i = r = r.next;
								do {
									var a = i,
										s = a.destroy;
									a = a.tag, void 0 !== s && (0 !== (2 & a) || 0 !== (4 & a)) && el(n, t, s), i = i.next
								} while (i !== r)
							}
							hl(e, t, n);
							break;
						case 1:
							if (!Yo && (Zo(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
								r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
							} catch (o) {
								Cc(n, t, o)
							}
							hl(e, t, n);
							break;
						case 21:
							hl(e, t, n);
							break;
						case 22:
							1 & n.mode ? (Yo = (r = Yo) || null !== n.memoizedState, hl(e, t, n), Yo = r) : hl(e, t, n);
							break;
						default:
							hl(e, t, n)
					}
				}

				function pl(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new $o), t.forEach((function(t) {
							var r = Ic.bind(null, e, t);
							n.has(t) || (n.add(t), t.then(r, r))
						}))
					}
				}

				function gl(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var i = n[r];
							try {
								var s = e,
									o = t,
									l = o;
								e: for (; null !== l;) {
									switch (l.tag) {
										case 5:
											ul = l.stateNode, dl = !1;
											break e;
										case 3:
										case 4:
											ul = l.stateNode.containerInfo, dl = !0;
											break e
									}
									l = l.return
								}
								if (null === ul) throw Error(a(160));
								fl(s, o, i), ul = null, dl = !1;
								var c = i.alternate;
								null !== c && (c.return = null), i.return = null
							} catch (u) {
								Cc(i, t, u)
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t;) ml(t, e), t = t.sibling
				}

				function ml(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if (gl(t, e), vl(e), 4 & r) {
								try {
									nl(3, e, e.return), rl(3, e)
								} catch (m) {
									Cc(e, e.return, m)
								}
								try {
									nl(5, e, e.return)
								} catch (m) {
									Cc(e, e.return, m)
								}
							}
							break;
						case 1:
							gl(t, e), vl(e), 512 & r && null !== n && Zo(n, n.return);
							break;
						case 5:
							if (gl(t, e), vl(e), 512 & r && null !== n && Zo(n, n.return), 32 & e.flags) {
								var i = e.stateNode;
								try {
									he(i, "")
								} catch (m) {
									Cc(e, e.return, m)
								}
							}
							if (4 & r && null != (i = e.stateNode)) {
								var s = e.memoizedProps,
									o = null !== n ? n.memoizedProps : s,
									l = e.type,
									c = e.updateQueue;
								if (e.updateQueue = null, null !== c) try {
									"input" === l && "radio" === s.type && null != s.name && $(i, s), be(l, o);
									var u = be(l, s);
									for (o = 0; o < c.length; o += 2) {
										var d = c[o],
											h = c[o + 1];
										"style" === d ? me(i, h) : "dangerouslySetInnerHTML" === d ? de(i, h) : "children" === d ? he(i, h) : b(i, d, h, u)
									}
									switch (l) {
										case "input":
											J(i, s);
											break;
										case "textarea":
											ae(i, s);
											break;
										case "select":
											var f = i._wrapperState.wasMultiple;
											i._wrapperState.wasMultiple = !!s.multiple;
											var p = s.value;
											null != p ? ne(i, !!s.multiple, p, !1) : f !== !!s.multiple && (null != s.defaultValue ? ne(i, !!s.multiple, s.defaultValue, !0) : ne(i, !!s.multiple, s.multiple ? [] : "", !1))
									}
									i[fi] = s
								} catch (m) {
									Cc(e, e.return, m)
								}
							}
							break;
						case 6:
							if (gl(t, e), vl(e), 4 & r) {
								if (null === e.stateNode) throw Error(a(162));
								i = e.stateNode, s = e.memoizedProps;
								try {
									i.nodeValue = s
								} catch (m) {
									Cc(e, e.return, m)
								}
							}
							break;
						case 3:
							if (gl(t, e), vl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
								Bt(t.containerInfo)
							} catch (m) {
								Cc(e, e.return, m)
							}
							break;
						case 4:
						default:
							gl(t, e), vl(e);
							break;
						case 13:
							gl(t, e), vl(e), 8192 & (i = e.child).flags && (s = null !== i.memoizedState, i.stateNode.isHidden = s, !s || null !== i.alternate && null !== i.alternate.memoizedState || (zl = $e())), 4 & r && pl(e);
							break;
						case 22:
							if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Yo = (u = Yo) || d, gl(t, e), Yo = u) : gl(t, e), vl(e), 8192 & r) {
								if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
									for (Jo = e, d = e.child; null !== d;) {
										for (h = Jo = d; null !== Jo;) {
											switch (p = (f = Jo).child, f.tag) {
												case 0:
												case 11:
												case 14:
												case 15:
													nl(4, f, f.return);
													break;
												case 1:
													Zo(f, f.return);
													var g = f.stateNode;
													if ("function" === typeof g.componentWillUnmount) {
														r = f, n = f.return;
														try {
															t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
														} catch (m) {
															Cc(r, n, m)
														}
													}
													break;
												case 5:
													Zo(f, f.return);
													break;
												case 22:
													if (null !== f.memoizedState) {
														xl(h);
														continue
													}
											}
											null !== p ? (p.return = f, Jo = p) : xl(h)
										}
										d = d.sibling
									}
								e: for (d = null, h = e;;) {
									if (5 === h.tag) {
										if (null === d) {
											d = h;
											try {
												i = h.stateNode, u ? "function" === typeof(s = i.style).setProperty ? s.setProperty("display", "none", "important") : s.display = "none" : (l = h.stateNode, o = void 0 !== (c = h.memoizedProps.style) && null !== c && c.hasOwnProperty("display") ? c.display : null, l.style.display = ge("display", o))
											} catch (m) {
												Cc(e, e.return, m)
											}
										}
									} else if (6 === h.tag) {
										if (null === d) try {
											h.stateNode.nodeValue = u ? "" : h.memoizedProps
										} catch (m) {
											Cc(e, e.return, m)
										}
									} else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === e) && null !== h.child) {
										h.child.return = h, h = h.child;
										continue
									}
									if (h === e) break e;
									for (; null === h.sibling;) {
										if (null === h.return || h.return === e) break e;
										d === h && (d = null), h = h.return
									}
									d === h && (d = null), h.sibling.return = h.return, h = h.sibling
								}
							}
							break;
						case 19:
							gl(t, e), vl(e), 4 & r && pl(e);
						case 21:
					}
				}

				function vl(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n;) {
									if (sl(n)) {
										var r = n;
										break e
									}
									n = n.return
								}
								throw Error(a(160))
							}
							switch (r.tag) {
								case 5:
									var i = r.stateNode;
									32 & r.flags && (he(i, ""), r.flags &= -33), cl(e, ol(e), i);
									break;
								case 3:
								case 4:
									var s = r.stateNode.containerInfo;
									ll(e, ol(e), s);
									break;
								default:
									throw Error(a(161))
							}
						}
						catch (o) {
							Cc(e, e.return, o)
						}
						e.flags &= -3
					}
					4096 & t && (e.flags &= -4097)
				}

				function yl(e, t, n) {
					Jo = e, bl(e, t, n)
				}

				function bl(e, t, n) {
					for (var r = 0 !== (1 & e.mode); null !== Jo;) {
						var i = Jo,
							a = i.child;
						if (22 === i.tag && r) {
							var s = null !== i.memoizedState || Xo;
							if (!s) {
								var o = i.alternate,
									l = null !== o && null !== o.memoizedState || Yo;
								o = Xo;
								var c = Yo;
								if (Xo = s, (Yo = l) && !c)
									for (Jo = i; null !== Jo;) l = (s = Jo).child, 22 === s.tag && null !== s.memoizedState ? kl(i) : null !== l ? (l.return = s, Jo = l) : kl(i);
								for (; null !== a;) Jo = a, bl(a, t, n), a = a.sibling;
								Jo = i, Xo = o, Yo = c
							}
							wl(e)
						} else 0 !== (8772 & i.subtreeFlags) && null !== a ? (a.return = i, Jo = a) : wl(e)
					}
				}

				function wl(e) {
					for (; null !== Jo;) {
						var t = Jo;
						if (0 !== (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 !== (8772 & t.flags)) switch (t.tag) {
									case 0:
									case 11:
									case 15:
										Yo || rl(5, t);
										break;
									case 1:
										var r = t.stateNode;
										if (4 & t.flags && !Yo)
											if (null === n) r.componentDidMount();
											else {
												var i = t.elementType === t.type ? n.memoizedProps : to(t.type, n.memoizedProps);
												r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
											} var s = t.updateQueue;
										null !== s && Ga(t, s, r);
										break;
									case 3:
										var o = t.updateQueue;
										if (null !== o) {
											if (n = null, null !== t.child) switch (t.child.tag) {
												case 5:
												case 1:
													n = t.child.stateNode
											}
											Ga(t, o, n)
										}
										break;
									case 5:
										var l = t.stateNode;
										if (null === n && 4 & t.flags) {
											n = l;
											var c = t.memoizedProps;
											switch (t.type) {
												case "button":
												case "input":
												case "select":
												case "textarea":
													c.autoFocus && n.focus();
													break;
												case "img":
													c.src && (n.src = c.src)
											}
										}
										break;
									case 6:
									case 4:
									case 12:
									case 19:
									case 17:
									case 21:
									case 22:
									case 23:
									case 25:
										break;
									case 13:
										if (null === t.memoizedState) {
											var u = t.alternate;
											if (null !== u) {
												var d = u.memoizedState;
												if (null !== d) {
													var h = d.dehydrated;
													null !== h && Bt(h)
												}
											}
										}
										break;
									default:
										throw Error(a(163))
								}
								Yo || 512 & t.flags && il(t)
							} catch (f) {
								Cc(t, t.return, f)
							}
						}
						if (t === e) {
							Jo = null;
							break
						}
						if (null !== (n = t.sibling)) {
							n.return = t.return, Jo = n;
							break
						}
						Jo = t.return
					}
				}

				function xl(e) {
					for (; null !== Jo;) {
						var t = Jo;
						if (t === e) {
							Jo = null;
							break
						}
						var n = t.sibling;
						if (null !== n) {
							n.return = t.return, Jo = n;
							break
						}
						Jo = t.return
					}
				}

				function kl(e) {
					for (; null !== Jo;) {
						var t = Jo;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										rl(4, t)
									} catch (l) {
										Cc(t, n, l)
									}
									break;
								case 1:
									var r = t.stateNode;
									if ("function" === typeof r.componentDidMount) {
										var i = t.return;
										try {
											r.componentDidMount()
										} catch (l) {
											Cc(t, i, l)
										}
									}
									var a = t.return;
									try {
										il(t)
									} catch (l) {
										Cc(t, a, l)
									}
									break;
								case 5:
									var s = t.return;
									try {
										il(t)
									} catch (l) {
										Cc(t, s, l)
									}
							}
						} catch (l) {
							Cc(t, t.return, l)
						}
						if (t === e) {
							Jo = null;
							break
						}
						var o = t.sibling;
						if (null !== o) {
							o.return = t.return, Jo = o;
							break
						}
						Jo = t.return
					}
				}
				var Sl, Cl = Math.ceil,
					_l = w.ReactCurrentDispatcher,
					El = w.ReactCurrentOwner,
					Tl = w.ReactCurrentBatchConfig,
					Il = 0,
					Nl = null,
					Rl = null,
					Al = 0,
					Pl = 0,
					jl = Ci(0),
					Dl = 0,
					Ol = null,
					Ll = 0,
					Ml = 0,
					Fl = 0,
					Ul = null,
					Vl = null,
					zl = 0,
					Bl = 1 / 0,
					Gl = null,
					ql = !1,
					Hl = null,
					Wl = null,
					Kl = !1,
					Ql = null,
					Xl = 0,
					Yl = 0,
					$l = null,
					Jl = -1,
					Zl = 0;

				function ec() {
					return 0 !== (6 & Il) ? $e() : -1 !== Jl ? Jl : Jl = $e()
				}

				function tc(e) {
					return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Il) && 0 !== Al ? Al & -Al : null !== ga.transition ? (0 === Zl && (Zl = gt()), Zl) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Yt(e.type)
				}

				function nc(e, t, n, r) {
					if (50 < Yl) throw Yl = 0, $l = null, Error(a(185));
					vt(e, n, r), 0 !== (2 & Il) && e === Nl || (e === Nl && (0 === (2 & Il) && (Ml |= n), 4 === Dl && oc(e, Al)), rc(e, r), 1 === n && 0 === Il && 0 === (1 & t.mode) && (Bl = $e() + 500, Ui && Bi()))
				}

				function rc(e, t) {
					var n = e.callbackNode;
					! function(e, t) {
						for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
							var s = 31 - st(a),
								o = 1 << s,
								l = i[s]; - 1 === l ? 0 !== (o & n) && 0 === (o & r) || (i[s] = ft(o, t)) : l <= t && (e.expiredLanes |= o), a &= ~o
						}
					}(e, t);
					var r = ht(e, e === Nl ? Al : 0);
					if (0 === r) null !== n && Qe(n), e.callbackNode = null, e.callbackPriority = 0;
					else if (t = r & -r, e.callbackPriority !== t) {
						if (null != n && Qe(n), 1 === t) 0 === e.tag ? function(e) {
							Ui = !0, zi(e)
						}(lc.bind(null, e)) : zi(lc.bind(null, e)), si((function() {
							0 === (6 & Il) && Bi()
						})), n = null;
						else {
							switch (wt(r)) {
								case 1:
									n = Ze;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt
							}
							n = Nc(n, ic.bind(null, e))
						}
						e.callbackPriority = t, e.callbackNode = n
					}
				}

				function ic(e, t) {
					if (Jl = -1, Zl = 0, 0 !== (6 & Il)) throw Error(a(327));
					var n = e.callbackNode;
					if (kc() && e.callbackNode !== n) return null;
					var r = ht(e, e === Nl ? Al : 0);
					if (0 === r) return null;
					if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mc(e, r);
					else {
						t = r;
						var i = Il;
						Il |= 2;
						var s = pc();
						for (Nl === e && Al === t || (Gl = null, Bl = $e() + 500, hc(e, t));;) try {
							yc();
							break
						} catch (l) {
							fc(e, l)
						}
						Ea(), _l.current = s, Il = i, null !== Rl ? t = 0 : (Nl = null, Al = 0, t = Dl)
					}
					if (0 !== t) {
						if (2 === t && (0 !== (i = pt(e)) && (r = i, t = ac(e, i))), 1 === t) throw n = Ol, hc(e, 0), oc(e, r), rc(e, $e()), n;
						if (6 === t) oc(e, r);
						else {
							if (i = e.current.alternate, 0 === (30 & r) && ! function(e) {
									for (var t = e;;) {
										if (16384 & t.flags) {
											var n = t.updateQueue;
											if (null !== n && null !== (n = n.stores))
												for (var r = 0; r < n.length; r++) {
													var i = n[r],
														a = i.getSnapshot;
													i = i.value;
													try {
														if (!or(a(), i)) return !1
													} catch (o) {
														return !1
													}
												}
										}
										if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
										else {
											if (t === e) break;
											for (; null === t.sibling;) {
												if (null === t.return || t.return === e) return !0;
												t = t.return
											}
											t.sibling.return = t.return, t = t.sibling
										}
									}
									return !0
								}(i) && (2 === (t = mc(e, r)) && (0 !== (s = pt(e)) && (r = s, t = ac(e, s))), 1 === t)) throw n = Ol, hc(e, 0), oc(e, r), rc(e, $e()), n;
							switch (e.finishedWork = i, e.finishedLanes = r, t) {
								case 0:
								case 1:
									throw Error(a(345));
								case 2:
								case 5:
									xc(e, Vl, Gl);
									break;
								case 3:
									if (oc(e, r), (130023424 & r) === r && 10 < (t = zl + 500 - $e())) {
										if (0 !== ht(e, 0)) break;
										if (((i = e.suspendedLanes) & r) !== r) {
											ec(), e.pingedLanes |= e.suspendedLanes & i;
											break
										}
										e.timeoutHandle = ri(xc.bind(null, e, Vl, Gl), t);
										break
									}
									xc(e, Vl, Gl);
									break;
								case 4:
									if (oc(e, r), (4194240 & r) === r) break;
									for (t = e.eventTimes, i = -1; 0 < r;) {
										var o = 31 - st(r);
										s = 1 << o, (o = t[o]) > i && (i = o), r &= ~s
									}
									if (r = i, 10 < (r = (120 > (r = $e() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cl(r / 1960)) - r)) {
										e.timeoutHandle = ri(xc.bind(null, e, Vl, Gl), r);
										break
									}
									xc(e, Vl, Gl);
									break;
								default:
									throw Error(a(329))
							}
						}
					}
					return rc(e, $e()), e.callbackNode === n ? ic.bind(null, e) : null
				}

				function ac(e, t) {
					var n = Ul;
					return e.current.memoizedState.isDehydrated && (hc(e, t).flags |= 256), 2 !== (e = mc(e, t)) && (t = Vl, Vl = n, null !== t && sc(t)), e
				}

				function sc(e) {
					null === Vl ? Vl = e : Vl.push.apply(Vl, e)
				}

				function oc(e, t) {
					for (t &= ~Fl, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
						var n = 31 - st(t),
							r = 1 << n;
						e[n] = -1, t &= ~r
					}
				}

				function lc(e) {
					if (0 !== (6 & Il)) throw Error(a(327));
					kc();
					var t = ht(e, 0);
					if (0 === (1 & t)) return rc(e, $e()), null;
					var n = mc(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = pt(e);
						0 !== r && (t = r, n = ac(e, r))
					}
					if (1 === n) throw n = Ol, hc(e, 0), oc(e, t), rc(e, $e()), n;
					if (6 === n) throw Error(a(345));
					return e.finishedWork = e.current.alternate, e.finishedLanes = t, xc(e, Vl, Gl), rc(e, $e()), null
				}

				function cc(e, t) {
					var n = Il;
					Il |= 1;
					try {
						return e(t)
					} finally {
						0 === (Il = n) && (Bl = $e() + 500, Ui && Bi())
					}
				}

				function uc(e) {
					null !== Ql && 0 === Ql.tag && 0 === (6 & Il) && kc();
					var t = Il;
					Il |= 1;
					var n = Tl.transition,
						r = bt;
					try {
						if (Tl.transition = null, bt = 1, e) return e()
					} finally {
						bt = r, Tl.transition = n, 0 === (6 & (Il = t)) && Bi()
					}
				}

				function dc() {
					Pl = jl.current, _i(jl)
				}

				function hc(e, t) {
					e.finishedWork = null, e.finishedLanes = 0;
					var n = e.timeoutHandle;
					if (-1 !== n && (e.timeoutHandle = -1, ii(n)), null !== Rl)
						for (n = Rl.return; null !== n;) {
							var r = n;
							switch (ta(r), r.tag) {
								case 1:
									null !== (r = r.type.childContextTypes) && void 0 !== r && ji();
									break;
								case 3:
									Ya(), _i(Ni), _i(Ii), ns();
									break;
								case 5:
									Ja(r);
									break;
								case 4:
									Ya();
									break;
								case 13:
								case 19:
									_i(Za);
									break;
								case 10:
									Ta(r.type._context);
									break;
								case 22:
								case 23:
									dc()
							}
							n = n.return
						}
					if (Nl = e, Rl = e = jc(e.current, null), Al = Pl = t, Dl = 0, Ol = null, Fl = Ml = Ll = 0, Vl = Ul = null, null !== Aa) {
						for (t = 0; t < Aa.length; t++)
							if (null !== (r = (n = Aa[t]).interleaved)) {
								n.interleaved = null;
								var i = r.next,
									a = n.pending;
								if (null !== a) {
									var s = a.next;
									a.next = i, r.next = s
								}
								n.pending = r
							} Aa = null
					}
					return e
				}

				function fc(e, t) {
					for (;;) {
						var n = Rl;
						try {
							if (Ea(), rs.current = $s, cs) {
								for (var r = ss.memoizedState; null !== r;) {
									var i = r.queue;
									null !== i && (i.pending = null), r = r.next
								}
								cs = !1
							}
							if (as = 0, ls = os = ss = null, us = !1, ds = 0, El.current = null, null === n || null === n.return) {
								Dl = 1, Ol = t, Rl = null;
								break
							}
							e: {
								var s = e,
									o = n.return,
									l = n,
									c = t;
								if (t = Al, l.flags |= 32768, null !== c && "object" === typeof c && "function" === typeof c.then) {
									var u = c,
										d = l,
										h = d.tag;
									if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
										var f = d.alternate;
										f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
									}
									var p = mo(o);
									if (null !== p) {
										p.flags &= -257, vo(p, o, l, 0, t), 1 & p.mode && go(s, u, t), c = u;
										var g = (t = p).updateQueue;
										if (null === g) {
											var m = new Set;
											m.add(c), t.updateQueue = m
										} else g.add(c);
										break e
									}
									if (0 === (1 & t)) {
										go(s, u, t), gc();
										break e
									}
									c = Error(a(426))
								} else if (ia && 1 & l.mode) {
									var v = mo(o);
									if (null !== v) {
										0 === (65536 & v.flags) && (v.flags |= 256), vo(v, o, l, 0, t), pa(lo(c, l));
										break e
									}
								}
								s = c = lo(c, l),
								4 !== Dl && (Dl = 2),
								null === Ul ? Ul = [s] : Ul.push(s),
								s = o;do {
									switch (s.tag) {
										case 3:
											s.flags |= 65536, t &= -t, s.lanes |= t, za(s, fo(0, c, t));
											break e;
										case 1:
											l = c;
											var y = s.type,
												b = s.stateNode;
											if (0 === (128 & s.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Wl || !Wl.has(b)))) {
												s.flags |= 65536, t &= -t, s.lanes |= t, za(s, po(s, l, t));
												break e
											}
									}
									s = s.return
								} while (null !== s)
							}
							wc(n)
						} catch (w) {
							t = w, Rl === n && null !== n && (Rl = n = n.return);
							continue
						}
						break
					}
				}

				function pc() {
					var e = _l.current;
					return _l.current = $s, null === e ? $s : e
				}

				function gc() {
					0 !== Dl && 3 !== Dl && 2 !== Dl || (Dl = 4), null === Nl || 0 === (268435455 & Ll) && 0 === (268435455 & Ml) || oc(Nl, Al)
				}

				function mc(e, t) {
					var n = Il;
					Il |= 2;
					var r = pc();
					for (Nl === e && Al === t || (Gl = null, hc(e, t));;) try {
						vc();
						break
					} catch (i) {
						fc(e, i)
					}
					if (Ea(), Il = n, _l.current = r, null !== Rl) throw Error(a(261));
					return Nl = null, Al = 0, Dl
				}

				function vc() {
					for (; null !== Rl;) bc(Rl)
				}

				function yc() {
					for (; null !== Rl && !Xe();) bc(Rl)
				}

				function bc(e) {
					var t = Sl(e.alternate, e, Pl);
					e.memoizedProps = e.pendingProps, null === t ? wc(e) : Rl = t, El.current = null
				}

				function wc(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (e = t.return, 0 === (32768 & t.flags)) {
							if (null !== (n = Ko(n, t, Pl))) return void(Rl = n)
						} else {
							if (null !== (n = Qo(n, t))) return n.flags &= 32767, void(Rl = n);
							if (null === e) return Dl = 6, void(Rl = null);
							e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
						}
						if (null !== (t = t.sibling)) return void(Rl = t);
						Rl = t = e
					} while (null !== t);
					0 === Dl && (Dl = 5)
				}

				function xc(e, t, n) {
					var r = bt,
						i = Tl.transition;
					try {
						Tl.transition = null, bt = 1,
							function(e, t, n, r) {
								do {
									kc()
								} while (null !== Ql);
								if (0 !== (6 & Il)) throw Error(a(327));
								n = e.finishedWork;
								var i = e.finishedLanes;
								if (null === n) return null;
								if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
								e.callbackNode = null, e.callbackPriority = 0;
								var s = n.lanes | n.childLanes;
								if (function(e, t) {
										var n = e.pendingLanes & ~t;
										e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n;) {
											var i = 31 - st(n),
												a = 1 << i;
											t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a
										}
									}(e, s), e === Nl && (Rl = Nl = null, Al = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Kl || (Kl = !0, Nc(tt, (function() {
										return kc(), null
									}))), s = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || s) {
									s = Tl.transition, Tl.transition = null;
									var o = bt;
									bt = 1;
									var l = Il;
									Il |= 4, El.current = null,
										function(e, t) {
											if (ei = qt, fr(e = hr())) {
												if ("selectionStart" in e) var n = {
													start: e.selectionStart,
													end: e.selectionEnd
												};
												else e: {
													var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
													if (r && 0 !== r.rangeCount) {
														n = r.anchorNode;
														var i = r.anchorOffset,
															s = r.focusNode;
														r = r.focusOffset;
														try {
															n.nodeType, s.nodeType
														} catch (x) {
															n = null;
															break e
														}
														var o = 0,
															l = -1,
															c = -1,
															u = 0,
															d = 0,
															h = e,
															f = null;
														t: for (;;) {
															for (var p; h !== n || 0 !== i && 3 !== h.nodeType || (l = o + i), h !== s || 0 !== r && 3 !== h.nodeType || (c = o + r), 3 === h.nodeType && (o += h.nodeValue.length), null !== (p = h.firstChild);) f = h, h = p;
															for (;;) {
																if (h === e) break t;
																if (f === n && ++u === i && (l = o), f === s && ++d === r && (c = o), null !== (p = h.nextSibling)) break;
																f = (h = f).parentNode
															}
															h = p
														}
														n = -1 === l || -1 === c ? null : {
															start: l,
															end: c
														}
													} else n = null
												}
												n = n || {
													start: 0,
													end: 0
												}
											} else n = null;
											for (ti = {
													focusedElem: e,
													selectionRange: n
												}, qt = !1, Jo = t; null !== Jo;)
												if (e = (t = Jo).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Jo = e;
												else
													for (; null !== Jo;) {
														t = Jo;
														try {
															var g = t.alternate;
															if (0 !== (1024 & t.flags)) switch (t.tag) {
																case 0:
																case 11:
																case 15:
																case 5:
																case 6:
																case 4:
																case 17:
																	break;
																case 1:
																	if (null !== g) {
																		var m = g.memoizedProps,
																			v = g.memoizedState,
																			y = t.stateNode,
																			b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? m : to(t.type, m), v);
																		y.__reactInternalSnapshotBeforeUpdate = b
																	}
																	break;
																case 3:
																	var w = t.stateNode.containerInfo;
																	1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
																	break;
																default:
																	throw Error(a(163))
															}
														} catch (x) {
															Cc(t, t.return, x)
														}
														if (null !== (e = t.sibling)) {
															e.return = t.return, Jo = e;
															break
														}
														Jo = t.return
													}
											g = tl, tl = !1
										}(e, n), ml(n, e), pr(ti), qt = !!ei, ti = ei = null, e.current = n, yl(n, e, i), Ye(), Il = l, bt = o, Tl.transition = s
								} else e.current = n;
								if (Kl && (Kl = !1, Ql = e, Xl = i), s = e.pendingLanes, 0 === s && (Wl = null), function(e) {
										if (at && "function" === typeof at.onCommitFiberRoot) try {
											at.onCommitFiberRoot(it, e, void 0, 128 === (128 & e.current.flags))
										} catch (t) {}
									}(n.stateNode), rc(e, $e()), null !== t)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
										componentStack: i.stack,
										digest: i.digest
									});
								if (ql) throw ql = !1, e = Hl, Hl = null, e;
								0 !== (1 & Xl) && 0 !== e.tag && kc(), s = e.pendingLanes, 0 !== (1 & s) ? e === $l ? Yl++ : (Yl = 0, $l = e) : Yl = 0, Bi()
							}(e, t, n, r)
					} finally {
						Tl.transition = i, bt = r
					}
					return null
				}

				function kc() {
					if (null !== Ql) {
						var e = wt(Xl),
							t = Tl.transition,
							n = bt;
						try {
							if (Tl.transition = null, bt = 16 > e ? 16 : e, null === Ql) var r = !1;
							else {
								if (e = Ql, Ql = null, Xl = 0, 0 !== (6 & Il)) throw Error(a(331));
								var i = Il;
								for (Il |= 4, Jo = e.current; null !== Jo;) {
									var s = Jo,
										o = s.child;
									if (0 !== (16 & Jo.flags)) {
										var l = s.deletions;
										if (null !== l) {
											for (var c = 0; c < l.length; c++) {
												var u = l[c];
												for (Jo = u; null !== Jo;) {
													var d = Jo;
													switch (d.tag) {
														case 0:
														case 11:
														case 15:
															nl(8, d, s)
													}
													var h = d.child;
													if (null !== h) h.return = d, Jo = h;
													else
														for (; null !== Jo;) {
															var f = (d = Jo).sibling,
																p = d.return;
															if (al(d), d === u) {
																Jo = null;
																break
															}
															if (null !== f) {
																f.return = p, Jo = f;
																break
															}
															Jo = p
														}
												}
											}
											var g = s.alternate;
											if (null !== g) {
												var m = g.child;
												if (null !== m) {
													g.child = null;
													do {
														var v = m.sibling;
														m.sibling = null, m = v
													} while (null !== m)
												}
											}
											Jo = s
										}
									}
									if (0 !== (2064 & s.subtreeFlags) && null !== o) o.return = s, Jo = o;
									else e: for (; null !== Jo;) {
										if (0 !== (2048 & (s = Jo).flags)) switch (s.tag) {
											case 0:
											case 11:
											case 15:
												nl(9, s, s.return)
										}
										var y = s.sibling;
										if (null !== y) {
											y.return = s.return, Jo = y;
											break e
										}
										Jo = s.return
									}
								}
								var b = e.current;
								for (Jo = b; null !== Jo;) {
									var w = (o = Jo).child;
									if (0 !== (2064 & o.subtreeFlags) && null !== w) w.return = o, Jo = w;
									else e: for (o = b; null !== Jo;) {
										if (0 !== (2048 & (l = Jo).flags)) try {
											switch (l.tag) {
												case 0:
												case 11:
												case 15:
													rl(9, l)
											}
										} catch (k) {
											Cc(l, l.return, k)
										}
										if (l === o) {
											Jo = null;
											break e
										}
										var x = l.sibling;
										if (null !== x) {
											x.return = l.return, Jo = x;
											break e
										}
										Jo = l.return
									}
								}
								if (Il = i, Bi(), at && "function" === typeof at.onPostCommitFiberRoot) try {
									at.onPostCommitFiberRoot(it, e)
								} catch (k) {}
								r = !0
							}
							return r
						} finally {
							bt = n, Tl.transition = t
						}
					}
					return !1
				}

				function Sc(e, t, n) {
					e = Ua(e, t = fo(0, t = lo(n, t), 1), 1), t = ec(), null !== e && (vt(e, 1, t), rc(e, t))
				}

				function Cc(e, t, n) {
					if (3 === e.tag) Sc(e, e, n);
					else
						for (; null !== t;) {
							if (3 === t.tag) {
								Sc(t, e, n);
								break
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Wl || !Wl.has(r))) {
									t = Ua(t, e = po(t, e = lo(n, e), 1), 1), e = ec(), null !== t && (vt(t, 1, e), rc(t, e));
									break
								}
							}
							t = t.return
						}
				}

				function _c(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t), t = ec(), e.pingedLanes |= e.suspendedLanes & n, Nl === e && (Al & n) === n && (4 === Dl || 3 === Dl && (130023424 & Al) === Al && 500 > $e() - zl ? hc(e, 0) : Fl |= n), rc(e, t)
				}

				function Ec(e, t) {
					0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ut, 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
					var n = ec();
					null !== (e = Da(e, t)) && (vt(e, t, n), rc(e, n))
				}

				function Tc(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Ec(e, n)
				}

				function Ic(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								i = e.memoizedState;
							null !== i && (n = i.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(a(314))
					}
					null !== r && r.delete(t), Ec(e, n)
				}

				function Nc(e, t) {
					return Ke(e, t)
				}

				function Rc(e, t, n, r) {
					this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
				}

				function Ac(e, t, n, r) {
					return new Rc(e, t, n, r)
				}

				function Pc(e) {
					return !(!(e = e.prototype) || !e.isReactComponent)
				}

				function jc(e, t) {
					var n = e.alternate;
					return null === n ? ((n = Ac(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
						lanes: t.lanes,
						firstContext: t.firstContext
					}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
				}

				function Dc(e, t, n, r, i, s) {
					var o = 2;
					if (r = e, "function" === typeof e) Pc(e) && (o = 1);
					else if ("string" === typeof e) o = 5;
					else e: switch (e) {
						case S:
							return Oc(n.children, i, s, t);
						case C:
							o = 8, i |= 8;
							break;
						case _:
							return (e = Ac(12, n, t, 2 | i)).elementType = _, e.lanes = s, e;
						case N:
							return (e = Ac(13, n, t, i)).elementType = N, e.lanes = s, e;
						case R:
							return (e = Ac(19, n, t, i)).elementType = R, e.lanes = s, e;
						case j:
							return Lc(n, i, s, t);
						default:
							if ("object" === typeof e && null !== e) switch (e.$$typeof) {
								case E:
									o = 10;
									break e;
								case T:
									o = 9;
									break e;
								case I:
									o = 11;
									break e;
								case A:
									o = 14;
									break e;
								case P:
									o = 16, r = null;
									break e
							}
							throw Error(a(130, null == e ? e : typeof e, ""))
					}
					return (t = Ac(o, n, t, i)).elementType = e, t.type = r, t.lanes = s, t
				}

				function Oc(e, t, n, r) {
					return (e = Ac(7, e, r, t)).lanes = n, e
				}

				function Lc(e, t, n, r) {
					return (e = Ac(22, e, r, t)).elementType = j, e.lanes = n, e.stateNode = {
						isHidden: !1
					}, e
				}

				function Mc(e, t, n) {
					return (e = Ac(6, e, null, t)).lanes = n, e
				}

				function Fc(e, t, n) {
					return (t = Ac(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
						containerInfo: e.containerInfo,
						pendingChildren: null,
						implementation: e.implementation
					}, t
				}

				function Uc(e, t, n, r, i) {
					this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mt(0), this.expirationTimes = mt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
				}

				function Vc(e, t, n, r, i, a, s, o, l) {
					return e = new Uc(e, t, n, o, l), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Ac(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
						element: r,
						isDehydrated: n,
						cache: null,
						transitions: null,
						pendingSuspenseBoundaries: null
					}, La(a), e
				}

				function zc(e) {
					if (!e) return Ti;
					e: {
						if (Be(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
						var t = e;do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (Pi(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e
									}
							}
							t = t.return
						} while (null !== t);
						throw Error(a(171))
					}
					if (1 === e.tag) {
						var n = e.type;
						if (Pi(n)) return Oi(e, n, t)
					}
					return t
				}

				function Bc(e, t, n, r, i, a, s, o, l) {
					return (e = Vc(n, r, !0, e, 0, a, 0, o, l)).context = zc(null), n = e.current, (a = Fa(r = ec(), i = tc(n))).callback = void 0 !== t && null !== t ? t : null, Ua(n, a, i), e.current.lanes = i, vt(e, i, r), rc(e, r), e
				}

				function Gc(e, t, n, r) {
					var i = t.current,
						a = ec(),
						s = tc(i);
					return n = zc(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Fa(a, s)).payload = {
						element: e
					}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ua(i, t, s)) && (nc(e, i, s, a), Va(e, i, s)), s
				}

				function qc(e) {
					return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
				}

				function Hc(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t
					}
				}

				function Wc(e, t) {
					Hc(e, t), (e = e.alternate) && Hc(e, t)
				}
				Sl = function(e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || Ni.current) bo = !0;
						else {
							if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return bo = !1,
								function(e, t, n) {
									switch (t.tag) {
										case 3:
											No(t), fa();
											break;
										case 5:
											$a(t);
											break;
										case 1:
											Pi(t.type) && Li(t);
											break;
										case 4:
											Xa(t, t.stateNode.containerInfo);
											break;
										case 10:
											var r = t.type._context,
												i = t.memoizedProps.value;
											Ei(ka, r._currentValue), r._currentValue = i;
											break;
										case 13:
											if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ei(Za, 1 & Za.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Mo(e, t, n) : (Ei(Za, 1 & Za.current), null !== (e = qo(e, t, n)) ? e.sibling : null);
											Ei(Za, 1 & Za.current);
											break;
										case 19:
											if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
												if (r) return Bo(e, t, n);
												t.flags |= 128
											}
											if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), Ei(Za, Za.current), r) break;
											return null;
										case 22:
										case 23:
											return t.lanes = 0, Co(e, t, n)
									}
									return qo(e, t, n)
								}(e, t, n);
							bo = 0 !== (131072 & e.flags)
						}
					else bo = !1, ia && 0 !== (1048576 & t.flags) && Zi(t, Wi, t.index);
					switch (t.lanes = 0, t.tag) {
						case 2:
							var r = t.type;
							Go(e, t), e = t.pendingProps;
							var i = Ai(t, Ii.current);
							Na(t, n), i = gs(null, t, r, e, i, n);
							var s = ms();
							return t.flags |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pi(r) ? (s = !0, Li(t)) : s = !1, t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, La(t), i.updater = ro, t.stateNode = i, i._reactInternals = t, oo(t, r, e, n), t = Io(null, t, r, !0, s, n)) : (t.tag = 0, ia && s && ea(t), wo(null, t, i, n), t = t.child), t;
						case 16:
							r = t.elementType;
							e: {
								switch (Go(e, t), e = t.pendingProps, r = (i = r._init)(r._payload), t.type = r, i = t.tag = function(e) {
										if ("function" === typeof e) return Pc(e) ? 1 : 0;
										if (void 0 !== e && null !== e) {
											if ((e = e.$$typeof) === I) return 11;
											if (e === A) return 14
										}
										return 2
									}(r), e = to(r, e), i) {
									case 0:
										t = Eo(null, t, r, e, n);
										break e;
									case 1:
										t = To(null, t, r, e, n);
										break e;
									case 11:
										t = xo(null, t, r, e, n);
										break e;
									case 14:
										t = ko(null, t, r, to(r.type, e), n);
										break e
								}
								throw Error(a(306, r, ""))
							}
							return t;
						case 0:
							return r = t.type, i = t.pendingProps, Eo(e, t, r, i = t.elementType === r ? i : to(r, i), n);
						case 1:
							return r = t.type, i = t.pendingProps, To(e, t, r, i = t.elementType === r ? i : to(r, i), n);
						case 3:
							e: {
								if (No(t), null === e) throw Error(a(387));r = t.pendingProps,
								i = (s = t.memoizedState).element,
								Ma(e, t),
								Ba(t, r, null, n);
								var o = t.memoizedState;
								if (r = o.element, s.isDehydrated) {
									if (s = {
											element: r,
											isDehydrated: !1,
											cache: o.cache,
											pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
											transitions: o.transitions
										}, t.updateQueue.baseState = s, t.memoizedState = s, 256 & t.flags) {
										t = Ro(e, t, r, n, i = lo(Error(a(423)), t));
										break e
									}
									if (r !== i) {
										t = Ro(e, t, r, n, i = lo(Error(a(424)), t));
										break e
									}
									for (ra = ci(t.stateNode.containerInfo.firstChild), na = t, ia = !0, aa = null, n = xa(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
								} else {
									if (fa(), r === i) {
										t = qo(e, t, n);
										break e
									}
									wo(e, t, r, n)
								}
								t = t.child
							}
							return t;
						case 5:
							return $a(t), null === e && ca(t), r = t.type, i = t.pendingProps, s = null !== e ? e.memoizedProps : null, o = i.children, ni(r, i) ? o = null : null !== s && ni(r, s) && (t.flags |= 32), _o(e, t), wo(e, t, o, n), t.child;
						case 6:
							return null === e && ca(t), null;
						case 13:
							return Mo(e, t, n);
						case 4:
							return Xa(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = wa(t, null, r, n) : wo(e, t, r, n), t.child;
						case 11:
							return r = t.type, i = t.pendingProps, xo(e, t, r, i = t.elementType === r ? i : to(r, i), n);
						case 7:
							return wo(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return wo(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, Ei(ka, r._currentValue), r._currentValue = o, null !== s)
									if (or(s.value, o)) {
										if (s.children === i.children && !Ni.current) {
											t = qo(e, t, n);
											break e
										}
									} else
										for (null !== (s = t.child) && (s.return = t); null !== s;) {
											var l = s.dependencies;
											if (null !== l) {
												o = s.child;
												for (var c = l.firstContext; null !== c;) {
													if (c.context === r) {
														if (1 === s.tag) {
															(c = Fa(-1, n & -n)).tag = 2;
															var u = s.updateQueue;
															if (null !== u) {
																var d = (u = u.shared).pending;
																null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
															}
														}
														s.lanes |= n, null !== (c = s.alternate) && (c.lanes |= n), Ia(s.return, n, t), l.lanes |= n;
														break
													}
													c = c.next
												}
											} else if (10 === s.tag) o = s.type === t.type ? null : s.child;
											else if (18 === s.tag) {
												if (null === (o = s.return)) throw Error(a(341));
												o.lanes |= n, null !== (l = o.alternate) && (l.lanes |= n), Ia(o, n, t), o = s.sibling
											} else o = s.child;
											if (null !== o) o.return = s;
											else
												for (o = s; null !== o;) {
													if (o === t) {
														o = null;
														break
													}
													if (null !== (s = o.sibling)) {
														s.return = o.return, o = s;
														break
													}
													o = o.return
												}
											s = o
										}
								wo(e, t, i.children, n),
								t = t.child
							}
							return t;
						case 9:
							return i = t.type, r = t.pendingProps.children, Na(t, n), r = r(i = Ra(i)), t.flags |= 1, wo(e, t, r, n), t.child;
						case 14:
							return i = to(r = t.type, t.pendingProps), ko(e, t, r, i = to(r.type, i), n);
						case 15:
							return So(e, t, t.type, t.pendingProps, n);
						case 17:
							return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : to(r, i), Go(e, t), t.tag = 1, Pi(r) ? (e = !0, Li(t)) : e = !1, Na(t, n), ao(t, r, i), oo(t, r, i, n), Io(null, t, r, !0, e, n);
						case 19:
							return Bo(e, t, n);
						case 22:
							return Co(e, t, n)
					}
					throw Error(a(156, t.tag))
				};
				var Kc = "function" === typeof reportError ? reportError : function(e) {
					console.error(e)
				};

				function Qc(e) {
					this._internalRoot = e
				}

				function Xc(e) {
					this._internalRoot = e
				}

				function Yc(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
				}

				function $c(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
				}

				function Jc() {}

				function Zc(e, t, n, r, i) {
					var a = n._reactRootContainer;
					if (a) {
						var s = a;
						if ("function" === typeof i) {
							var o = i;
							i = function() {
								var e = qc(s);
								o.call(e)
							}
						}
						Gc(t, s, e, i)
					} else s = function(e, t, n, r, i) {
						if (i) {
							if ("function" === typeof r) {
								var a = r;
								r = function() {
									var e = qc(s);
									a.call(e)
								}
							}
							var s = Bc(t, r, e, 0, null, !1, 0, "", Jc);
							return e._reactRootContainer = s, e[pi] = s.current, Br(8 === e.nodeType ? e.parentNode : e), uc(), s
						}
						for (; i = e.lastChild;) e.removeChild(i);
						if ("function" === typeof r) {
							var o = r;
							r = function() {
								var e = qc(l);
								o.call(e)
							}
						}
						var l = Vc(e, 0, !1, null, 0, !1, 0, "", Jc);
						return e._reactRootContainer = l, e[pi] = l.current, Br(8 === e.nodeType ? e.parentNode : e), uc((function() {
							Gc(t, l, n, r)
						})), l
					}(n, t, e, i, r);
					return qc(s)
				}
				Xc.prototype.render = Qc.prototype.render = function(e) {
					var t = this._internalRoot;
					if (null === t) throw Error(a(409));
					Gc(e, t, null, null)
				}, Xc.prototype.unmount = Qc.prototype.unmount = function() {
					var e = this._internalRoot;
					if (null !== e) {
						this._internalRoot = null;
						var t = e.containerInfo;
						uc((function() {
							Gc(null, e, null, null)
						})), t[pi] = null
					}
				}, Xc.prototype.unstable_scheduleHydration = function(e) {
					if (e) {
						var t = Ct();
						e = {
							blockedOn: null,
							target: e,
							priority: t
						};
						for (var n = 0; n < jt.length && 0 !== t && t < jt[n].priority; n++);
						jt.splice(n, 0, e), 0 === n && Mt(e)
					}
				}, xt = function(e) {
					switch (e.tag) {
						case 3:
							var t = e.stateNode;
							if (t.current.memoizedState.isDehydrated) {
								var n = dt(t.pendingLanes);
								0 !== n && (yt(t, 1 | n), rc(t, $e()), 0 === (6 & Il) && (Bl = $e() + 500, Bi()))
							}
							break;
						case 13:
							uc((function() {
								var t = Da(e, 1);
								if (null !== t) {
									var n = ec();
									nc(t, e, 1, n)
								}
							})), Wc(e, 1)
					}
				}, kt = function(e) {
					if (13 === e.tag) {
						var t = Da(e, 134217728);
						if (null !== t) nc(t, e, 134217728, ec());
						Wc(e, 134217728)
					}
				}, St = function(e) {
					if (13 === e.tag) {
						var t = tc(e),
							n = Da(e, t);
						if (null !== n) nc(n, e, t, ec());
						Wc(e, t)
					}
				}, Ct = function() {
					return bt
				}, _t = function(e, t) {
					var n = bt;
					try {
						return bt = e, t()
					} finally {
						bt = n
					}
				}, ke = function(e, t, n) {
					switch (t) {
						case "input":
							if (J(e, n), t = n.name, "radio" === n.type && null != t) {
								for (n = e; n.parentNode;) n = n.parentNode;
								for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
									var r = n[t];
									if (r !== e && r.form === e.form) {
										var i = xi(r);
										if (!i) throw Error(a(90));
										K(r), J(r, i)
									}
								}
							}
							break;
						case "textarea":
							ae(e, n);
							break;
						case "select":
							null != (t = n.value) && ne(e, !!n.multiple, t, !1)
					}
				}, Ie = cc, Ne = uc;
				var eu = {
						usingClientEntryPoint: !1,
						Events: [bi, wi, xi, Ee, Te, cc]
					},
					tu = {
						findFiberByHostInstance: yi,
						bundleType: 0,
						version: "18.3.1",
						rendererPackageName: "react-dom"
					},
					nu = {
						bundleType: tu.bundleType,
						version: tu.version,
						rendererPackageName: tu.rendererPackageName,
						rendererConfig: tu.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: w.ReactCurrentDispatcher,
						findHostInstanceByFiber: function(e) {
							return null === (e = He(e)) ? null : e.stateNode
						},
						findFiberByHostInstance: tu.findFiberByHostInstance || function() {
							return null
						},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
					};
				if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!ru.isDisabled && ru.supportsFiber) try {
						it = ru.inject(nu), at = ru
					} catch (ue) {}
				}
				t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu, t.createPortal = function(e, t) {
					var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					if (!Yc(t)) throw Error(a(200));
					return function(e, t, n) {
						var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
						return {
							$$typeof: k,
							key: null == r ? null : "" + r,
							children: e,
							containerInfo: t,
							implementation: n
						}
					}(e, t, null, n)
				}, t.createRoot = function(e, t) {
					if (!Yc(e)) throw Error(a(299));
					var n = !1,
						r = "",
						i = Kc;
					return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (i = t.onRecoverableError)), t = Vc(e, 1, !1, null, 0, n, 0, r, i), e[pi] = t.current, Br(8 === e.nodeType ? e.parentNode : e), new Qc(t)
				}, t.findDOMNode = function(e) {
					if (null == e) return null;
					if (1 === e.nodeType) return e;
					var t = e._reactInternals;
					if (void 0 === t) {
						if ("function" === typeof e.render) throw Error(a(188));
						throw e = Object.keys(e).join(","), Error(a(268, e))
					}
					return e = null === (e = He(t)) ? null : e.stateNode
				}, t.flushSync = function(e) {
					return uc(e)
				}, t.hydrate = function(e, t, n) {
					if (!$c(t)) throw Error(a(200));
					return Zc(null, e, t, !0, n)
				}, t.hydrateRoot = function(e, t, n) {
					if (!Yc(e)) throw Error(a(405));
					var r = null != n && n.hydratedSources || null,
						i = !1,
						s = "",
						o = Kc;
					if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (i = !0), void 0 !== n.identifierPrefix && (s = n.identifierPrefix), void 0 !== n.onRecoverableError && (o = n.onRecoverableError)), t = Bc(t, null, e, 1, null != n ? n : null, i, 0, s, o), e[pi] = t.current, Br(e), r)
						for (e = 0; e < r.length; e++) i = (i = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
					return new Xc(t)
				}, t.render = function(e, t, n) {
					if (!$c(t)) throw Error(a(200));
					return Zc(null, e, t, !1, n)
				}, t.unmountComponentAtNode = function(e) {
					if (!$c(e)) throw Error(a(40));
					return !!e._reactRootContainer && (uc((function() {
						Zc(null, null, e, !1, (function() {
							e._reactRootContainer = null, e[pi] = null
						}))
					})), !0)
				}, t.unstable_batchedUpdates = cc, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
					if (!$c(n)) throw Error(a(200));
					if (null == e || void 0 === e._reactInternals) throw Error(a(38));
					return Zc(e, t, n, !1, r)
				}, t.version = "18.3.1-next-f1338f8080-20240426"
			},
			391: (e, t, n) => {
				"use strict";
				var r = n(950);
				t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
			},
			950: (e, t, n) => {
				"use strict";
				! function e() {
					if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
						__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
					} catch (t) {
						console.error(t)
					}
				}(), e.exports = n(730)
			},
			885: (e, t, n) => {
				"use strict";
				var r, i;
				r = n(160), i = n(556), t.version = r.version, t.renderToString = r.renderToString, t.renderToStaticMarkup = r.renderToStaticMarkup, t.renderToNodeStream = r.renderToNodeStream, t.renderToStaticNodeStream = r.renderToStaticNodeStream, t.renderToReadableStream = i.renderToReadableStream
			},
			153: (e, t, n) => {
				"use strict";
				var r = n(43),
					i = Symbol.for("react.element"),
					a = Symbol.for("react.fragment"),
					s = Object.prototype.hasOwnProperty,
					o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
					l = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function c(e, t, n) {
					var r, a = {},
						c = null,
						u = null;
					for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
					if (e && e.defaultProps)
						for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
					return {
						$$typeof: i,
						type: e,
						key: c,
						ref: u,
						props: a,
						_owner: o.current
					}
				}
				t.Fragment = a, t.jsx = c, t.jsxs = c
			},
			202: (e, t) => {
				"use strict";
				var n = Symbol.for("react.element"),
					r = Symbol.for("react.portal"),
					i = Symbol.for("react.fragment"),
					a = Symbol.for("react.strict_mode"),
					s = Symbol.for("react.profiler"),
					o = Symbol.for("react.provider"),
					l = Symbol.for("react.context"),
					c = Symbol.for("react.forward_ref"),
					u = Symbol.for("react.suspense"),
					d = Symbol.for("react.memo"),
					h = Symbol.for("react.lazy"),
					f = Symbol.iterator;
				var p = {
						isMounted: function() {
							return !1
						},
						enqueueForceUpdate: function() {},
						enqueueReplaceState: function() {},
						enqueueSetState: function() {}
					},
					g = Object.assign,
					m = {};

				function v(e, t, n) {
					this.props = e, this.context = t, this.refs = m, this.updater = n || p
				}

				function y() {}

				function b(e, t, n) {
					this.props = e, this.context = t, this.refs = m, this.updater = n || p
				}
				v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
					if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
					this.updater.enqueueSetState(this, e, t, "setState")
				}, v.prototype.forceUpdate = function(e) {
					this.updater.enqueueForceUpdate(this, e, "forceUpdate")
				}, y.prototype = v.prototype;
				var w = b.prototype = new y;
				w.constructor = b, g(w, v.prototype), w.isPureReactComponent = !0;
				var x = Array.isArray,
					k = Object.prototype.hasOwnProperty,
					S = {
						current: null
					},
					C = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function _(e, t, r) {
					var i, a = {},
						s = null,
						o = null;
					if (null != t)
						for (i in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = "" + t.key), t) k.call(t, i) && !C.hasOwnProperty(i) && (a[i] = t[i]);
					var l = arguments.length - 2;
					if (1 === l) a.children = r;
					else if (1 < l) {
						for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
						a.children = c
					}
					if (e && e.defaultProps)
						for (i in l = e.defaultProps) void 0 === a[i] && (a[i] = l[i]);
					return {
						$$typeof: n,
						type: e,
						key: s,
						ref: o,
						props: a,
						_owner: S.current
					}
				}

				function E(e) {
					return "object" === typeof e && null !== e && e.$$typeof === n
				}
				var T = /\/+/g;

				function I(e, t) {
					return "object" === typeof e && null !== e && null != e.key ? function(e) {
						var t = {
							"=": "=0",
							":": "=2"
						};
						return "$" + e.replace(/[=:]/g, (function(e) {
							return t[e]
						}))
					}("" + e.key) : t.toString(36)
				}

				function N(e, t, i, a, s) {
					var o = typeof e;
					"undefined" !== o && "boolean" !== o || (e = null);
					var l = !1;
					if (null === e) l = !0;
					else switch (o) {
						case "string":
						case "number":
							l = !0;
							break;
						case "object":
							switch (e.$$typeof) {
								case n:
								case r:
									l = !0
							}
					}
					if (l) return s = s(l = e), e = "" === a ? "." + I(l, 0) : a, x(s) ? (i = "", null != e && (i = e.replace(T, "$&/") + "/"), N(s, t, i, "", (function(e) {
						return e
					}))) : null != s && (E(s) && (s = function(e, t) {
						return {
							$$typeof: n,
							type: e.type,
							key: t,
							ref: e.ref,
							props: e.props,
							_owner: e._owner
						}
					}(s, i + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(T, "$&/") + "/") + e)), t.push(s)), 1;
					if (l = 0, a = "" === a ? "." : a + ":", x(e))
						for (var c = 0; c < e.length; c++) {
							var u = a + I(o = e[c], c);
							l += N(o, t, i, u, s)
						} else if (u = function(e) {
								return null === e || "object" !== typeof e ? null : "function" === typeof(e = f && e[f] || e["@@iterator"]) ? e : null
							}(e), "function" === typeof u)
							for (e = u.call(e), c = 0; !(o = e.next()).done;) l += N(o = o.value, t, i, u = a + I(o, c++), s);
						else if ("object" === o) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
					return l
				}

				function R(e, t, n) {
					if (null == e) return e;
					var r = [],
						i = 0;
					return N(e, r, "", "", (function(e) {
						return t.call(n, e, i++)
					})), r
				}

				function A(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then((function(t) {
							0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
						}), (function(t) {
							0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
						})), -1 === e._status && (e._status = 0, e._result = t)
					}
					if (1 === e._status) return e._result.default;
					throw e._result
				}
				var P = {
						current: null
					},
					j = {
						transition: null
					},
					D = {
						ReactCurrentDispatcher: P,
						ReactCurrentBatchConfig: j,
						ReactCurrentOwner: S
					};

				function O() {
					throw Error("act(...) is not supported in production builds of React.")
				}
				t.Children = {
					map: R,
					forEach: function(e, t, n) {
						R(e, (function() {
							t.apply(this, arguments)
						}), n)
					},
					count: function(e) {
						var t = 0;
						return R(e, (function() {
							t++
						})), t
					},
					toArray: function(e) {
						return R(e, (function(e) {
							return e
						})) || []
					},
					only: function(e) {
						if (!E(e)) throw Error("React.Children.only expected to receive a single React element child.");
						return e
					}
				}, t.Component = v, t.Fragment = i, t.Profiler = s, t.PureComponent = b, t.StrictMode = a, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, t.act = O, t.cloneElement = function(e, t, r) {
					if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
					var i = g({}, e.props),
						a = e.key,
						s = e.ref,
						o = e._owner;
					if (null != t) {
						if (void 0 !== t.ref && (s = t.ref, o = S.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
						for (c in t) k.call(t, c) && !C.hasOwnProperty(c) && (i[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c])
					}
					var c = arguments.length - 2;
					if (1 === c) i.children = r;
					else if (1 < c) {
						l = Array(c);
						for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
						i.children = l
					}
					return {
						$$typeof: n,
						type: e.type,
						key: a,
						ref: s,
						props: i,
						_owner: o
					}
				}, t.createContext = function(e) {
					return (e = {
						$$typeof: l,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
						_defaultValue: null,
						_globalName: null
					}).Provider = {
						$$typeof: o,
						_context: e
					}, e.Consumer = e
				}, t.createElement = _, t.createFactory = function(e) {
					var t = _.bind(null, e);
					return t.type = e, t
				}, t.createRef = function() {
					return {
						current: null
					}
				}, t.forwardRef = function(e) {
					return {
						$$typeof: c,
						render: e
					}
				}, t.isValidElement = E, t.lazy = function(e) {
					return {
						$$typeof: h,
						_payload: {
							_status: -1,
							_result: e
						},
						_init: A
					}
				}, t.memo = function(e, t) {
					return {
						$$typeof: d,
						type: e,
						compare: void 0 === t ? null : t
					}
				}, t.startTransition = function(e) {
					var t = j.transition;
					j.transition = {};
					try {
						e()
					} finally {
						j.transition = t
					}
				}, t.unstable_act = O, t.useCallback = function(e, t) {
					return P.current.useCallback(e, t)
				}, t.useContext = function(e) {
					return P.current.useContext(e)
				}, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
					return P.current.useDeferredValue(e)
				}, t.useEffect = function(e, t) {
					return P.current.useEffect(e, t)
				}, t.useId = function() {
					return P.current.useId()
				}, t.useImperativeHandle = function(e, t, n) {
					return P.current.useImperativeHandle(e, t, n)
				}, t.useInsertionEffect = function(e, t) {
					return P.current.useInsertionEffect(e, t)
				}, t.useLayoutEffect = function(e, t) {
					return P.current.useLayoutEffect(e, t)
				}, t.useMemo = function(e, t) {
					return P.current.useMemo(e, t)
				}, t.useReducer = function(e, t, n) {
					return P.current.useReducer(e, t, n)
				}, t.useRef = function(e) {
					return P.current.useRef(e)
				}, t.useState = function(e) {
					return P.current.useState(e)
				}, t.useSyncExternalStore = function(e, t, n) {
					return P.current.useSyncExternalStore(e, t, n)
				}, t.useTransition = function() {
					return P.current.useTransition()
				}, t.version = "18.3.1"
			},
			43: (e, t, n) => {
				"use strict";
				e.exports = n(202)
			},
			579: (e, t, n) => {
				"use strict";
				e.exports = n(153)
			},
			234: (e, t) => {
				"use strict";

				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n;) {
						var r = n - 1 >>> 1,
							i = e[r];
						if (!(0 < a(i, t))) break e;
						e[r] = t, e[n] = i, n = r
					}
				}

				function r(e) {
					return 0 === e.length ? null : e[0]
				}

				function i(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, i = e.length, s = i >>> 1; r < s;) {
							var o = 2 * (r + 1) - 1,
								l = e[o],
								c = o + 1,
								u = e[c];
							if (0 > a(l, n)) c < i && 0 > a(u, l) ? (e[r] = u, e[c] = n, r = c) : (e[r] = l, e[o] = n, r = o);
							else {
								if (!(c < i && 0 > a(u, n))) break e;
								e[r] = u, e[c] = n, r = c
							}
						}
					}
					return t
				}

				function a(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id
				}
				if ("object" === typeof performance && "function" === typeof performance.now) {
					var s = performance;
					t.unstable_now = function() {
						return s.now()
					}
				} else {
					var o = Date,
						l = o.now();
					t.unstable_now = function() {
						return o.now() - l
					}
				}
				var c = [],
					u = [],
					d = 1,
					h = null,
					f = 3,
					p = !1,
					g = !1,
					m = !1,
					v = "function" === typeof setTimeout ? setTimeout : null,
					y = "function" === typeof clearTimeout ? clearTimeout : null,
					b = "undefined" !== typeof setImmediate ? setImmediate : null;

				function w(e) {
					for (var t = r(u); null !== t;) {
						if (null === t.callback) i(u);
						else {
							if (!(t.startTime <= e)) break;
							i(u), t.sortIndex = t.expirationTime, n(c, t)
						}
						t = r(u)
					}
				}

				function x(e) {
					if (m = !1, w(e), !g)
						if (null !== r(c)) g = !0, j(k);
						else {
							var t = r(u);
							null !== t && D(x, t.startTime - e)
						}
				}

				function k(e, n) {
					g = !1, m && (m = !1, y(E), E = -1), p = !0;
					var a = f;
					try {
						for (w(n), h = r(c); null !== h && (!(h.expirationTime > n) || e && !N());) {
							var s = h.callback;
							if ("function" === typeof s) {
								h.callback = null, f = h.priorityLevel;
								var o = s(h.expirationTime <= n);
								n = t.unstable_now(), "function" === typeof o ? h.callback = o : h === r(c) && i(c), w(n)
							} else i(c);
							h = r(c)
						}
						if (null !== h) var l = !0;
						else {
							var d = r(u);
							null !== d && D(x, d.startTime - n), l = !1
						}
						return l
					} finally {
						h = null, f = a, p = !1
					}
				}
				"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var S, C = !1,
					_ = null,
					E = -1,
					T = 5,
					I = -1;

				function N() {
					return !(t.unstable_now() - I < T)
				}

				function R() {
					if (null !== _) {
						var e = t.unstable_now();
						I = e;
						var n = !0;
						try {
							n = _(!0, e)
						} finally {
							n ? S() : (C = !1, _ = null)
						}
					} else C = !1
				}
				if ("function" === typeof b) S = function() {
					b(R)
				};
				else if ("undefined" !== typeof MessageChannel) {
					var A = new MessageChannel,
						P = A.port2;
					A.port1.onmessage = R, S = function() {
						P.postMessage(null)
					}
				} else S = function() {
					v(R, 0)
				};

				function j(e) {
					_ = e, C || (C = !0, S())
				}

				function D(e, n) {
					E = v((function() {
						e(t.unstable_now())
					}), n)
				}
				t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
					e.callback = null
				}, t.unstable_continueExecution = function() {
					g || p || (g = !0, j(k))
				}, t.unstable_forceFrameRate = function(e) {
					0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
				}, t.unstable_getCurrentPriorityLevel = function() {
					return f
				}, t.unstable_getFirstCallbackNode = function() {
					return r(c)
				}, t.unstable_next = function(e) {
					switch (f) {
						case 1:
						case 2:
						case 3:
							var t = 3;
							break;
						default:
							t = f
					}
					var n = f;
					f = t;
					try {
						return e()
					} finally {
						f = n
					}
				}, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
							break;
						default:
							e = 3
					}
					var n = f;
					f = e;
					try {
						return t()
					} finally {
						f = n
					}
				}, t.unstable_scheduleCallback = function(e, i, a) {
					var s = t.unstable_now();
					switch ("object" === typeof a && null !== a ? a = "number" === typeof(a = a.delay) && 0 < a ? s + a : s : a = s, e) {
						case 1:
							var o = -1;
							break;
						case 2:
							o = 250;
							break;
						case 5:
							o = 1073741823;
							break;
						case 4:
							o = 1e4;
							break;
						default:
							o = 5e3
					}
					return e = {
						id: d++,
						callback: i,
						priorityLevel: e,
						startTime: a,
						expirationTime: o = a + o,
						sortIndex: -1
					}, a > s ? (e.sortIndex = a, n(u, e), null === r(c) && e === r(u) && (m ? (y(E), E = -1) : m = !0, D(x, a - s))) : (e.sortIndex = o, n(c, e), g || p || (g = !0, j(k))), e
				}, t.unstable_shouldYield = N, t.unstable_wrapCallback = function(e) {
					var t = f;
					return function() {
						var n = f;
						f = t;
						try {
							return e.apply(this, arguments)
						} finally {
							f = n
						}
					}
				}
			},
			853: (e, t, n) => {
				"use strict";
				e.exports = n(234)
			}
		},
		t = {};

	function n(r) {
		var i = t[r];
		if (void 0 !== i) return i.exports;
		var a = t[r] = {
			exports: {}
		};
		return e[r](a, a.exports, n), a.exports
	}
	n.m = e, n.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return n.d(t, {
			a: t
		}), t
	}, n.d = (e, t) => {
		for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		})
	}, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, r) => (n.f[r](e, t), t)), [])), n.u = e => "static/js/" + e + ".9d686bb4.chunk.js", n.miniCssF = e => {}, n.g = function() {
		if ("object" === typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" === typeof window) return window
		}
	}(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
		var e = {},
			t = "svg-pattern-builder:";
		n.l = (r, i, a, s) => {
			if (e[r]) e[r].push(i);
			else {
				var o, l;
				if (void 0 !== a)
					for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
						var d = c[u];
						if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + a) {
							o = d;
							break
						}
					}
				o || (l = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, n.nc && o.setAttribute("nonce", n.nc), o.setAttribute("data-webpack", t + a), o.src = r), e[r] = [i];
				var h = (t, n) => {
						o.onerror = o.onload = null, clearTimeout(f);
						var i = e[r];
						if (delete e[r], o.parentNode && o.parentNode.removeChild(o), i && i.forEach((e => e(n))), t) return t(n)
					},
					f = setTimeout(h.bind(null, void 0, {
						type: "timeout",
						target: o
					}), 12e4);
				o.onerror = h.bind(null, o.onerror), o.onload = h.bind(null, o.onload), l && document.head.appendChild(o)
			}
		}
	})(), n.r = e => {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.p = "/", (() => {
		var e = {
			792: 0
		};
		n.f.j = (t, r) => {
			var i = n.o(e, t) ? e[t] : void 0;
			if (0 !== i)
				if (i) r.push(i[2]);
				else {
					var a = new Promise(((n, r) => i = e[t] = [n, r]));
					r.push(i[2] = a);
					var s = n.p + n.u(t),
						o = new Error;
					n.l(s, (r => {
						if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
							var a = r && ("load" === r.type ? "missing" : r.type),
								s = r && r.target && r.target.src;
							o.message = "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")", o.name = "ChunkLoadError", o.type = a, o.request = s, i[1](o)
						}
					}), "chunk-" + t, t)
				}
		};
		var t = (t, r) => {
				var i, a, s = r[0],
					o = r[1],
					l = r[2],
					c = 0;
				if (s.some((t => 0 !== e[t]))) {
					for (i in o) n.o(o, i) && (n.m[i] = o[i]);
					if (l) l(n)
				}
				for (t && t(r); c < s.length; c++) a = s[c], n.o(e, a) && e[a] && e[a][0](), e[a] = 0
			},
			r = self.webpackChunksvg_pattern_builder = self.webpackChunksvg_pattern_builder || [];
		r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
	})(), (() => {
		"use strict";
		var e = n(43),
			t = n(391),
			r = n(885),
			i = n(579);
		const a = e => {
				let {
					animateRotation: t,
					setAnimateRotation: n,
					animationDuration: r,
					setAnimationDuration: a,
					animateOpacity: s,
					setAnimateOpacity: o,
					opacityAnimationDuration: l,
					setOpacityAnimationDuration: c,
					animateScale: u,
					setAnimateScale: d,
					scaleAnimationDuration: h,
					setScaleAnimationDuration: f,
					minScale: p,
					setMinScale: g,
					maxScale: m,
					setMaxScale: v,
					animateTranslation: y,
					setAnimateTranslation: b,
					translationAnimationDuration: w,
					setTranslationAnimationDuration: x,
					translationDistanceX: k,
					setTranslationDistanceX: S,
					translationDistanceY: C,
					setTranslationDistanceY: _,
					animateBlur: E,
					setAnimateBlur: T,
					blurAnimationDuration: I,
					setBlurAnimationDuration: N,
					minBlur: R,
					setMinBlur: A,
					maxBlur: P,
					setMaxBlur: j
				} = e;
				return (0, i.jsxs)("div", {
					className: "flex flex-col space-y-4",
					children: [(0, i.jsxs)("div", {
						className: "flex items-center space-x-2",
						children: [(0, i.jsx)("input", {
							type: "checkbox",
							id: "animate-rotation",
							checked: t,
							onChange: e => n(e.target.checked),
							className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
						}), (0, i.jsx)("label", {
							htmlFor: "animate-rotation",
							className: "text-xs font-medium",
							children: "Animate Rotation"
						})]
					}), t && (0, i.jsxs)("div", {
						children: [(0, i.jsxs)("label", {
							htmlFor: "animationDuration",
							className: "block text-xs font-medium",
							children: ["Animation Duration: ", r, "s"]
						}), (0, i.jsx)("input", {
							type: "range",
							id: "animationDuration",
							min: "1",
							max: "30",
							value: r,
							onChange: e => a(Number(e.target.value)),
							className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
						})]
					}), (0, i.jsxs)("div", {
						className: "flex items-center space-x-2",
						children: [(0, i.jsx)("input", {
							type: "checkbox",
							id: "animate-opacity",
							checked: s,
							onChange: e => o(e.target.checked),
							className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
						}), (0, i.jsx)("label", {
							htmlFor: "animate-opacity",
							className: "text-xs font-medium",
							children: "Animate Opacity"
						})]
					}), s && (0, i.jsxs)("div", {
						children: [(0, i.jsxs)("label", {
							htmlFor: "opacityAnimationDuration",
							className: "block text-xs font-medium",
							children: ["Opacity Animation Duration: ", l, "s"]
						}), (0, i.jsx)("input", {
							type: "range",
							id: "opacityAnimationDuration",
							min: "1",
							max: "30",
							value: l,
							onChange: e => c(Number(e.target.value)),
							className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
						})]
					}), (0, i.jsxs)("div", {
						className: "flex items-center space-x-2",
						children: [(0, i.jsx)("input", {
							type: "checkbox",
							id: "animate-scale",
							checked: u,
							onChange: e => d(e.target.checked),
							className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
						}), (0, i.jsx)("label", {
							htmlFor: "animate-scale",
							className: "text-xs font-medium",
							children: "Animate Scale"
						})]
					}), u && (0, i.jsxs)("div", {
						className: "grid grid-cols-1 gap-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "scaleAnimationDuration",
								className: "block text-xs font-medium",
								children: ["Scale Animation Duration: ", h, "s"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "scaleAnimationDuration",
								min: "1",
								max: "30",
								value: h,
								onChange: e => f(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "minScale",
								className: "block text-xs font-medium",
								children: ["Min Scale: ", p.toFixed(2)]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "minScale",
								min: "0.1",
								max: "1",
								step: "0.1",
								value: p,
								onChange: e => g(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "maxScale",
								className: "block text-xs font-medium",
								children: ["Max Scale: ", m.toFixed(2)]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "maxScale",
								min: "1",
								max: "3",
								step: "0.1",
								value: m,
								onChange: e => v(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						})]
					}), (0, i.jsxs)("div", {
						className: "flex items-center space-x-2",
						children: [(0, i.jsx)("input", {
							type: "checkbox",
							id: "animate-translation",
							checked: y,
							onChange: e => b(e.target.checked),
							className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
						}), (0, i.jsx)("label", {
							htmlFor: "animate-translation",
							className: "text-xs font-medium",
							children: "Animate Translation"
						})]
					}), y && (0, i.jsxs)("div", {
						className: "grid grid-cols-1 gap-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "translationAnimationDuration",
								className: "block text-xs font-medium",
								children: ["Translation Animation Duration: ", w, "s"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "translationAnimationDuration",
								min: "1",
								max: "30",
								value: w,
								onChange: e => x(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "translationDistanceX",
								className: "block text-xs font-medium",
								children: ["Translation Distance X: ", k, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "translationDistanceX",
								min: "-100",
								max: "100",
								value: k,
								onChange: e => S(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "translationDistanceY",
								className: "block text-xs font-medium",
								children: ["Translation Distance Y: ", C, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "translationDistanceY",
								min: "-100",
								max: "100",
								value: C,
								onChange: e => _(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						})]
					}), (0, i.jsxs)("div", {
						className: "flex items-center space-x-2",
						children: [(0, i.jsx)("input", {
							type: "checkbox",
							id: "animate-blur",
							checked: E,
							onChange: e => T(e.target.checked),
							className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
						}), (0, i.jsx)("label", {
							htmlFor: "animate-blur",
							className: "text-xs font-medium",
							children: "Animate Blur"
						})]
					}), E && (0, i.jsxs)("div", {
						className: "grid grid-cols-1 gap-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "blurAnimationDuration",
								className: "block text-xs font-medium",
								children: ["Blur Animation Duration: ", I, "s"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "blurAnimationDuration",
								min: "1",
								max: "30",
								value: I,
								onChange: e => N(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "minBlur",
								className: "block text-xs font-medium",
								children: ["Min Blur: ", R, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "minBlur",
								min: "0",
								max: "10",
								value: R,
								onChange: e => A(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "maxBlur",
								className: "block text-xs font-medium",
								children: ["Max Blur: ", P, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "maxBlur",
								min: "0",
								max: "20",
								value: P,
								onChange: e => j(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						})]
					})]
				})
			},
			s = e => {
				let {
					randomizePosition: t,
					setRandomizePosition: n,
					positionRandomness: r,
					setPositionRandomness: a,
					offsetRotation: s,
					setOffsetRotation: o,
					rotationIncrement: l,
					setRotationIncrement: c,
					randomizeOpacity: u,
					setRandomizeOpacity: d,
					minOpacity: h,
					setMinOpacity: f,
					maxOpacity: p,
					setMaxOpacity: g,
					incrementTranslation: m,
					setIncrementTranslation: v,
					translationIncrementX: y,
					setTranslationIncrementX: b,
					translationIncrementY: w,
					setTranslationIncrementY: x,
					rotateCopies: k,
					setRotateCopies: S,
					numberOfCopies: C,
					setNumberOfCopies: _,
					rotateOffsetX: E,
					setRotateOffsetX: T,
					rotateOffsetY: I,
					setRotateOffsetY: N
				} = e;
				return (0, i.jsxs)("div", {
					className: "flex flex-col space-y-4",
					children: [(0, i.jsx)("div", {
						children: (0, i.jsxs)("div", {
							className: "flex items-center space-x-2",
							children: [(0, i.jsx)("input", {
								type: "checkbox",
								id: "randomize-position",
								checked: t,
								onChange: e => n(e.target.checked),
								className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
							}), (0, i.jsx)("label", {
								htmlFor: "randomize-position",
								className: "text-xs font-medium",
								children: "Randomize Position"
							})]
						})
					}), t && (0, i.jsxs)("div", {
						children: [(0, i.jsxs)("label", {
							htmlFor: "positionRandomness",
							className: "block text-xs font-medium",
							children: ["Position Randomness: ", r, "px"]
						}), (0, i.jsx)("input", {
							type: "range",
							id: "positionRandomness",
							min: "0",
							max: "20",
							value: r,
							onChange: e => a(Number(e.target.value)),
							className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
						})]
					}), (0, i.jsx)("div", {
						children: (0, i.jsxs)("div", {
							className: "flex items-center space-x-2",
							children: [(0, i.jsx)("input", {
								type: "checkbox",
								id: "randomize-opacity",
								checked: u,
								onChange: e => d(e.target.checked),
								className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
							}), (0, i.jsx)("label", {
								htmlFor: "randomize-opacity",
								className: "text-xs font-medium",
								children: "Randomize Opacity"
							})]
						})
					}), u && (0, i.jsxs)("div", {
						className: "grid grid-cols-1 gap-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "minOpacity",
								className: "block text-xs font-medium",
								children: ["Min Opacity: ", h.toFixed(2)]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "minOpacity",
								min: "0",
								max: "1",
								step: "0.01",
								value: h,
								onChange: e => f(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "maxOpacity",
								className: "block text-xs font-medium",
								children: ["Max Opacity: ", p.toFixed(2)]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "maxOpacity",
								min: "0",
								max: "1",
								step: "0.01",
								value: p,
								onChange: e => g(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						})]
					}), (0, i.jsx)("div", {
						children: (0, i.jsxs)("div", {
							className: "flex items-center space-x-2",
							children: [(0, i.jsx)("input", {
								type: "checkbox",
								id: "increment-translation",
								checked: m,
								onChange: e => v(e.target.checked),
								className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
							}), (0, i.jsx)("label", {
								htmlFor: "increment-translation",
								className: "text-xs font-medium",
								children: "Increment Translation"
							})]
						})
					}), m && (0, i.jsxs)("div", {
						className: "grid grid-cols-1 gap-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "translationIncrementX",
								className: "block text-xs font-medium",
								children: ["Translation Increment X: ", y, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "translationIncrementX",
								min: "-20",
								max: "20",
								value: y,
								onChange: e => b(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "translationIncrementY",
								className: "block text-xs font-medium",
								children: ["Translation Increment Y: ", w, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "translationIncrementY",
								min: "0",
								max: "20",
								value: w,
								onChange: e => x(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						})]
					}), (0, i.jsx)("div", {
						children: (0, i.jsxs)("div", {
							className: "flex items-center space-x-2",
							children: [(0, i.jsx)("input", {
								type: "checkbox",
								id: "offset-rotation",
								checked: s,
								onChange: e => o(e.target.checked),
								className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
							}), (0, i.jsx)("label", {
								htmlFor: "offset-rotation",
								className: "text-xs font-medium",
								children: "Increment Rotation"
							})]
						})
					}), s && (0, i.jsxs)("div", {
						children: [(0, i.jsxs)("label", {
							htmlFor: "rotationIncrement",
							className: "block text-xs font-medium",
							children: ["Rotation Increment: ", l, "\xb0"]
						}), (0, i.jsx)("input", {
							type: "range",
							id: "rotationIncrement",
							min: "0",
							max: "45",
							value: l,
							onChange: e => c(Number(e.target.value)),
							className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
						})]
					}), (0, i.jsx)("div", {
						children: (0, i.jsxs)("div", {
							className: "flex items-center space-x-2",
							children: [(0, i.jsx)("input", {
								type: "checkbox",
								id: "rotate-copies",
								checked: k,
								onChange: e => S(e.target.checked),
								className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
							}), (0, i.jsx)("label", {
								htmlFor: "rotate-copies",
								className: "text-xs font-medium",
								children: "Rotate Copies"
							})]
						})
					}), k && (0, i.jsxs)("div", {
						className: "space-y-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "numberOfCopies",
								className: "block text-xs font-medium",
								children: ["Number of Copies: ", C]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "numberOfCopies",
								min: "2",
								max: "8",
								value: C,
								onChange: e => _(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "rotateOffsetX",
								className: "block text-xs font-medium",
								children: ["Rotate Offset X: ", E, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "rotateOffsetX",
								min: "-50",
								max: "50",
								value: E,
								onChange: e => T(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "rotateOffsetY",
								className: "block text-xs font-medium",
								children: ["Rotate Offset Y: ", I, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "rotateOffsetY",
								min: "-50",
								max: "50",
								value: I,
								onChange: e => N(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						})]
					})]
				})
			},
			o = e => {
				let {
					gradientType: t,
					setGradientType: n,
					gradientPosition: r,
					setGradientPosition: a,
					aspectRatio: s,
					setAspectRatio: o,
					aspectRatioOptions: l,
					translationX: c,
					setTranslationX: u,
					translationY: d,
					setTranslationY: h
				} = e;
				const f = [{
					value: "angular",
					name: "Angular",
					icon: (0, i.jsxs)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("path", {
							d: "M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z",
							fill: "url(#paint0_radial)",
							stroke: "currentColor",
							strokeWidth: "2"
						}), (0, i.jsx)("path", {
							d: "M8 8H0.5",
							stroke: "currentColor",
							strokeWidth: "2"
						}), (0, i.jsx)("defs", {
							children: (0, i.jsxs)("radialGradient", {
								id: "paint0_radial",
								cx: "0",
								cy: "0",
								r: "1",
								gradientUnits: "userSpaceOnUse",
								gradientTransform: "translate(8 8) scale(8)",
								children: [(0, i.jsx)("stop", {
									stopColor: "currentColor",
									stopOpacity: "0"
								}), (0, i.jsx)("stop", {
									offset: "1",
									stopColor: "currentColor"
								})]
							})
						})]
					})
				}, {
					value: "linear",
					name: "Linear",
					icon: (0, i.jsxs)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("rect", {
							x: "1",
							y: "1",
							width: "14",
							height: "14",
							rx: "3",
							fill: "url(#paint0_linear)",
							stroke: "currentColor",
							strokeWidth: "2"
						}), (0, i.jsx)("defs", {
							children: (0, i.jsxs)("linearGradient", {
								id: "paint0_linear",
								x1: "0",
								y1: "8",
								x2: "16",
								y2: "8",
								gradientUnits: "userSpaceOnUse",
								children: [(0, i.jsx)("stop", {
									stopColor: "currentColor",
									stopOpacity: "0"
								}), (0, i.jsx)("stop", {
									offset: "1",
									stopColor: "currentColor"
								})]
							})
						})]
					})
				}, {
					value: "radial",
					name: "Radial",
					icon: (0, i.jsxs)("svg", {
						width: "17",
						height: "16",
						viewBox: "0 0 17 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("rect", {
							x: "1.5",
							y: "1",
							width: "14",
							height: "14",
							rx: "7",
							fill: "url(#paint0_radial_82_5884)",
							stroke: "currentColor",
							strokeWidth: "2"
						}), (0, i.jsx)("defs", {
							children: (0, i.jsxs)("radialGradient", {
								id: "paint0_radial_82_5884",
								cx: "0",
								cy: "0",
								r: "1",
								gradientUnits: "userSpaceOnUse",
								gradientTransform: "translate(8.5 8) scale(8)",
								children: [(0, i.jsx)("stop", {
									stopColor: "currentColor"
								}), (0, i.jsx)("stop", {
									offset: "1",
									stopColor: "currentColor",
									stopOpacity: "0"
								})]
							})
						})]
					})
				}, {
					value: "diamond",
					name: "Diamond",
					icon: (0, i.jsxs)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("rect", {
							x: "1",
							y: "1",
							width: "14",
							height: "14",
							rx: "7",
							fill: "url(#paint0_diamond)",
							stroke: "currentColor",
							strokeWidth: "2"
						}), (0, i.jsx)("defs", {
							children: (0, i.jsxs)("radialGradient", {
								id: "paint0_diamond",
								cx: "0",
								cy: "0",
								r: "1",
								gradientUnits: "userSpaceOnUse",
								gradientTransform: "translate(8 8) rotate(45) scale(11.3137)",
								children: [(0, i.jsx)("stop", {
									stopColor: "currentColor"
								}), (0, i.jsx)("stop", {
									offset: "0.25",
									stopColor: "currentColor",
									stopOpacity: "0"
								}), (0, i.jsx)("stop", {
									offset: "0.5",
									stopColor: "currentColor"
								}), (0, i.jsx)("stop", {
									offset: "0.76",
									stopColor: "currentColor",
									stopOpacity: "0"
								}), (0, i.jsx)("stop", {
									offset: "1",
									stopColor: "currentColor"
								})]
							})
						})]
					})
				}, {
					value: "wave",
					name: "Wave",
					icon: (0, i.jsxs)("svg", {
						width: "17",
						height: "16",
						viewBox: "0 0 17 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("rect", {
							x: "1.5",
							y: "1",
							width: "14",
							height: "14",
							rx: "7",
							stroke: "currentColor",
							strokeWidth: "2"
						}), (0, i.jsx)("circle", {
							cx: "6",
							cy: "5.5",
							r: "1.5",
							fill: "currentColor"
						}), (0, i.jsx)("circle", {
							cx: "11",
							cy: "5.5",
							r: "1.5",
							fill: "currentColor"
						}), (0, i.jsx)("circle", {
							cx: "11",
							cy: "10.5",
							r: "1.5",
							fill: "currentColor"
						}), (0, i.jsx)("circle", {
							cx: "6",
							cy: "10.5",
							r: "1.5",
							fill: "currentColor"
						})]
					})
				}, {
					value: "circular",
					name: "Circular",
					icon: (0, i.jsxs)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("circle", {
							cx: "8",
							cy: "8",
							r: "7",
							stroke: "currentColor",
							strokeWidth: "2"
						}), (0, i.jsx)("path", {
							d: "M8 3V8L11 11",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})]
					})
				}, {
					value: "none",
					name: "None",
					icon: (0, i.jsxs)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("path", {
							d: "M2 2L14 14",
							stroke: "currentColor",
							strokeWidth: "2"
						}), (0, i.jsx)("path", {
							d: "M14 2L2 14",
							stroke: "currentColor",
							strokeWidth: "2"
						})]
					})
				}];
				return (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 my-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsx)("div", {
								className: "block text-xs font-medium mb-2",
								children: "Size Gradient:"
							}), (0, i.jsx)("ul", {
								className: "flex flex-wrap text-xs font-medium text-center text-gray-500 dark:text-gray-400",
								children: f.map((e => {
									let {
										value: r,
										name: a,
										icon: s
									} = e;
									return (0, i.jsx)("li", {
										className: "flex-1",
										children: (0, i.jsx)("a", {
											href: "#",
											onClick: e => {
												e.preventDefault(), n(r)
											},
											className: "flex items-center justify-center w-full h-10 rounded-lg ".concat(t === r ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
											"aria-current": t === r ? "page" : void 0,
											children: (0, i.jsx)("span", {
												children: s
											})
										})
									}, r)
								}))
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsx)("div", {
								className: "block text-xs font-medium mb-2",
								children: "Aspect Ratio:"
							}), (0, i.jsx)("ul", {
								className: "flex flex-wrap text-xs font-medium text-center text-gray-500 dark:text-gray-400",
								children: l.map((e => {
									let {
										value: t,
										name: n
									} = e;
									return (0, i.jsx)("li", {
										className: "flex-1",
										children: (0, i.jsx)("a", {
											href: "#",
											onClick: e => {
												e.preventDefault(), o(t)
											},
											className: "flex items-center justify-center w-full h-10 rounded-lg ".concat(s === t ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
											"aria-current": s === t ? "page" : void 0,
											children: n
										})
									}, t)
								}))
							})]
						})]
					}), "none" !== t && (0, i.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "gradientPosition",
								className: "block text-xs font-medium",
								children: [(() => {
									switch (t) {
										case "angular":
											return "Angular Rotation";
										case "linear":
											return "Linear Rotation";
										case "radial":
											return "Radial Radius";
										case "wave":
											return "Wave Offset";
										case "diamond":
											return "Diamond Rotation";
										case "circular":
											return "Clock Divisions";
										default:
											return "Position"
									}
								})(), ": ", "radial" === t ? "".concat(90 + r, "%") : "circular" === t ? "".concat(r) : "".concat(r).concat("radial" === t ? "%" : "\xb0")]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "gradientPosition",
								min: "radial" === t ? "-90" : "circular" === t ? "-60" : "0",
								max: "radial" === t ? "90" : "circular" === t ? "60" : "360",
								step: "1",
								value: r,
								onChange: e => a(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [(0, i.jsxs)("div", {
								children: [(0, i.jsxs)("label", {
									htmlFor: "translationX",
									className: "block text-xs font-medium",
									children: ["X: ", c, "px"]
								}), (0, i.jsx)("input", {
									type: "range",
									id: "translationX",
									min: "-500",
									max: "500",
									value: c,
									onChange: e => u(Number(e.target.value)),
									className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
								})]
							}), (0, i.jsxs)("div", {
								children: [(0, i.jsxs)("label", {
									htmlFor: "translationY",
									className: "block text-xs font-medium",
									children: ["Y: ", d, "px"]
								}), (0, i.jsx)("input", {
									type: "range",
									id: "translationY",
									min: "-500",
									max: "500",
									value: d,
									onChange: e => h(Number(e.target.value)),
									className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
								})]
							})]
						})]
					})]
				})
			},
			l = e => {
				let {
					gradientType: t,
					setGradientType: n,
					aspectRatio: r,
					setAspectRatio: a,
					minSize: s,
					setMinSize: l,
					maxSize: c,
					setMaxSize: u,
					spacing: d,
					setSpacing: h,
					rotation: f,
					setRotation: p,
					gradientPosition: g,
					setGradientPosition: m,
					translationX: v,
					setTranslationX: y,
					translationY: b,
					setTranslationY: w
				} = e;
				return (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(o, {
						gradientType: t,
						setGradientType: n,
						gradientPosition: g,
						setGradientPosition: m,
						aspectRatio: r,
						setAspectRatio: a,
						aspectRatioOptions: [{
							value: "16:9",
							name: "16:9"
						}, {
							value: "1:1",
							name: "1:1"
						}, {
							value: "9:16",
							name: "9:16"
						}, {
							value: "4:3",
							name: "4:3"
						}, {
							value: "3:4",
							name: "3:4"
						}],
						translationX: v,
						setTranslationX: y,
						translationY: b,
						setTranslationY: w
					}), (0, i.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 my-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "minSize",
								className: "block text-xs font-medium",
								children: ["Min Size: ", s, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "minSize",
								min: "1",
								max: "10",
								value: s,
								onChange: e => l(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "maxSize",
								className: "block text-xs font-medium",
								children: ["Max Size: ", c, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "maxSize",
								min: "1",
								max: "220",
								value: c,
								onChange: e => u(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						})]
					}), (0, i.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 my-4",
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "spacing",
								className: "block text-xs font-medium",
								children: ["Spacing: ", d, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "spacing",
								min: "10",
								max: "220",
								value: d,
								onChange: e => h(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "rotation",
								className: "block text-xs font-medium",
								children: ["Rotation: ", f, "\xb0"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "rotation",
								min: "0",
								max: "360",
								value: f,
								onChange: e => p(Number(e.target.value)),
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						})]
					})]
				})
			},
			c = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return t.filter(((e, t, n) => Boolean(e) && n.indexOf(e) === t)).join(" ")
			};
		var u = {
			xmlns: "http://www.w3.org/2000/svg",
			width: 24,
			height: 24,
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 2,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		};
		const d = (0, e.forwardRef)(((t, n) => {
				let {
					color: r = "currentColor",
					size: i = 24,
					strokeWidth: a = 2,
					absoluteStrokeWidth: s,
					className: o = "",
					children: l,
					iconNode: d,
					...h
				} = t;
				return (0, e.createElement)("svg", {
					ref: n,
					...u,
					width: i,
					height: i,
					stroke: r,
					strokeWidth: s ? 24 * Number(a) / Number(i) : a,
					className: c("lucide", o),
					...h
				}, [...d.map((t => {
					let [n, r] = t;
					return (0, e.createElement)(n, r)
				})), ...Array.isArray(l) ? l : [l]])
			})),
			h = (t, n) => {
				const r = (0, e.forwardRef)(((r, i) => {
					let {
						className: a,
						...s
					} = r;
					return (0, e.createElement)(d, {
						ref: i,
						iconNode: n,
						className: c("lucide-".concat((o = t, o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())), a),
						...s
					});
					var o
				}));
				return r.displayName = "".concat(t), r
			},
			f = h("Settings2", [
				["path", {
					d: "M20 7h-9",
					key: "3s1dr2"
				}],
				["path", {
					d: "M14 17H5",
					key: "gfn3mx"
				}],
				["circle", {
					cx: "17",
					cy: "17",
					r: "3",
					key: "18b49y"
				}],
				["circle", {
					cx: "7",
					cy: "7",
					r: "3",
					key: "dfmy0x"
				}]
			]),
			p = [{
				value: "solid",
				icon: (0, i.jsx)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("rect", {
						x: "1",
						y: "1",
						width: "14",
						height: "14",
						fill: "currentColor",
						fillOpacity: "0.3",
						stroke: "currentColor",
						strokeWidth: "2"
					})
				})
			}, {
				value: "linear",
				icon: (0, i.jsxs)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("rect", {
						x: "1",
						y: "1",
						width: "14",
						height: "14",
						rx: "3",
						fill: "url(#paint0_linear)",
						stroke: "currentColor",
						strokeWidth: "2"
					}), (0, i.jsx)("defs", {
						children: (0, i.jsxs)("linearGradient", {
							id: "paint0_linear",
							x1: "0",
							y1: "8",
							x2: "16",
							y2: "8",
							gradientUnits: "userSpaceOnUse",
							children: [(0, i.jsx)("stop", {
								stopColor: "currentColor",
								stopOpacity: "0"
							}), (0, i.jsx)("stop", {
								offset: "1",
								stopColor: "currentColor"
							})]
						})
					})]
				})
			}, {
				value: "radial",
				icon: (0, i.jsxs)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("rect", {
						x: "1",
						y: "1",
						width: "14",
						height: "14",
						rx: "7",
						fill: "url(#paint1_radial)",
						stroke: "currentColor",
						strokeWidth: "2"
					}), (0, i.jsx)("defs", {
						children: (0, i.jsxs)("radialGradient", {
							id: "paint1_radial",
							cx: "0",
							cy: "0",
							r: "1",
							gradientUnits: "userSpaceOnUse",
							gradientTransform: "translate(8 8) scale(8)",
							children: [(0, i.jsx)("stop", {
								stopColor: "currentColor"
							}), (0, i.jsx)("stop", {
								offset: "1",
								stopColor: "currentColor",
								stopOpacity: "0"
							})]
						})
					})]
				})
			}],
			g = [{
				name: "Black",
				value: "#000000"
			}, {
				name: "Gray",
				value: "#111111"
			}, {
				name: "Gray (2)",
				value: "#222222"
			}, {
				name: "Gray (3)",
				value: "#8E8E93"
			}, {
				name: "Gray (4)",
				value: "#AEAEB2"
			}, {
				name: "Gray (5)",
				value: "#C7C7CC"
			}, {
				name: "Gray (6)",
				value: "#D1D1D6"
			}, {
				name: "Gray (7)",
				value: "#E5E5EA"
			}, {
				name: "Gray (8)",
				value: "#F2F2F7"
			}, {
				name: "White",
				value: "#FFFFFF"
			}, {
				name: "Red",
				value: "#FF3B30"
			}, {
				name: "Orange",
				value: "#FF9500"
			}, {
				name: "Yellow",
				value: "#FFCC00"
			}, {
				name: "Green",
				value: "#34C759"
			}, {
				name: "Mint",
				value: "#00C7BE"
			}, {
				name: "Teal",
				value: "#30B0C7"
			}, {
				name: "Cyan",
				value: "#32ADE6"
			}, {
				name: "Blue",
				value: "#007AFF"
			}, {
				name: "Indigo",
				value: "#5856D6"
			}, {
				name: "Purple",
				value: "#AF52DE"
			}, {
				name: "Pink",
				value: "#FF2D55"
			}],
			m = [{
				name: "Blue Gradient",
				color1: "#44009B",
				color2: "#2370CA"
			}, {
				name: "Dark Blue Gradient",
				color1: "#2B6ED1",
				color2: "#062550"
			}, {
				name: "Dark Gradient",
				color1: "#2E335A",
				color2: "#1C1B33"
			}, {
				name: "Sky Blue Gradient",
				color1: "#176AB1",
				color2: "#CBD8F1"
			}, {
				name: "Light Blue Gradient",
				color1: "#B0C5E6",
				color2: "#FFFFFF"
			}, {
				name: "Red to Purple Gradient",
				color1: "#FF2020",
				color2: "#59248A"
			}, {
				name: "Red Gradient",
				color1: "#FF7777",
				color2: "#EF234C"
			}, {
				name: "Mint Gradient",
				color1: "#F3FFC3",
				color2: "#00F8D2"
			}, {
				name: "Orange Gradient",
				color1: "#F68B2E",
				color2: "#F6BB5C"
			}, {
				name: "Sunset Gradient",
				color1: "#FF9D3F",
				color2: "#F46772"
			}, {
				name: "Ocean Gradient",
				color1: "#56D6FF",
				color2: "#2F70E4"
			}, {
				name: "Forest Gradient",
				color1: "#34C759",
				color2: "#007AFF"
			}, {
				name: "Lavender Gradient",
				color1: "#AF52DE",
				color2: "#5856D6"
			}, {
				name: "Peach Gradient",
				color1: "#FF9500",
				color2: "#FF2D55"
			}, {
				name: "Mint to Teal Gradient",
				color1: "#00C7BE",
				color2: "#30B0C7"
			}, {
				name: "Purple Gradient",
				color1: "#0093E9",
				color2: "#80D0C7"
			}, {
				name: "Purple Gradient",
				color1: "#a8c0ff",
				color2: "#3f2b96"
			}, {
				name: "Neon Gradient",
				color1: "#56D6FF",
				color2: "#AF52DE"
			}, {
				name: "Purple Gradient",
				color1: "#4E0BE0",
				color2: "#FFBEBA"
			}, {
				name: "Blue Gradient",
				color1: "#0130AF",
				color2: "#5DC7F0"
			}, {
				name: "Purple Gradient",
				color1: "#3523FF",
				color2: "#697BFF"
			}],
			v = t => {
				let {
					backgroundType: n,
					setBackgroundType: r,
					backgroundColor: a,
					setBackgroundColor: s,
					gradientColor1: o,
					setGradientColor1: l,
					gradientColor2: c,
					setGradientColor2: u,
					gradientAngle: d,
					setGradientAngle: h,
					shapeColorType: v,
					setShapeColorType: y,
					shapeColor: b,
					setShapeColor: w,
					shapeGradientColor1: x,
					setShapeGradientColor1: k,
					shapeGradientColor2: S,
					setShapeGradientColor2: C,
					shapeGradientAngle: _,
					setShapeGradientAngle: E,
					radialGradientRadius: T,
					setRadialGradientRadius: I,
					shapeRadialGradientRadius: N,
					setShapeRadialGradientRadius: R
				} = t;
				const [A, P] = (0, e.useState)(!1), [j, D] = (0, e.useState)(!1);
				return (0, i.jsxs)("div", {
					className: "grid grid-cols-2 gap-4 my-4",
					children: [(0, i.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [(0, i.jsx)("div", {
							className: "block text-xs font-medium",
							children: "Background Color:"
						}), (0, i.jsx)("ul", {
							className: "grid grid-cols-3 gap-2 text-xs font-medium text-center text-gray-500 dark:text-gray-400",
							children: p.map((e => {
								let {
									value: t,
									icon: a
								} = e;
								return (0, i.jsx)("li", {
									children: (0, i.jsx)("button", {
										onClick: () => r(t),
										className: "w-full h-10 flex items-center justify-center rounded-lg ".concat(n === t ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
										"aria-current": n === t ? "page" : void 0,
										children: a
									})
								}, t)
							}))
						}), (0, i.jsx)("div", {
							className: "grid gap-4",
							children: "solid" === n ? (0, i.jsxs)(i.Fragment, {
								children: [(0, i.jsx)("input", {
									type: "color",
									value: a,
									onChange: e => s(e.target.value),
									className: "w-full p-1 px-1 h-10 block bg-white border border-neutral-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
								}), (0, i.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: g.map((e => (0, i.jsx)("button", {
										onClick: () => s(e.value),
										className: "w-4 h-4 rounded focus:outline-none ring-1 ring-neutral-100 dark:ring-neutral-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500",
										style: {
											backgroundColor: e.value
										},
										title: e.name
									}, e.name)))
								})]
							}) : (0, i.jsxs)(i.Fragment, {
								children: [(0, i.jsxs)("div", {
									className: "grid grid-cols-[1fr_1fr_auto] gap-2 items-center",
									children: [(0, i.jsx)("input", {
										type: "color",
										value: o,
										onChange: e => l(e.target.value),
										className: "w-full p-1 px-1 h-10 block bg-white border border-neutral-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
									}), (0, i.jsx)("input", {
										type: "color",
										value: c,
										onChange: e => u(e.target.value),
										className: "w-full p-1 px-1 h-10 block bg-white border border-neutral-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
									}), (0, i.jsx)("button", {
										onClick: () => P(!A),
										className: "flex items-center justify-center w-10 h-10 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg",
										children: (0, i.jsx)(f, {
											className: "w-4 h-4 text-neutral-500 text-neutral-800 dark:text-neutral-200"
										})
									})]
								}), (0, i.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: m.map(((e, t) => (0, i.jsx)("button", {
										onClick: () => {
											l(e.color1), u(e.color2)
										},
										className: "w-4 h-4 rounded focus:outline-none ring-1 ring-neutral-100 dark:ring-neutral-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500",
										style: {
											background: "linear-gradient(to right, ".concat(e.color1, ", ").concat(e.color2, ")")
										},
										title: e.name
									}, t)))
								}), A && (0, i.jsxs)("div", {
									className: "space-y-4",
									children: ["linear" === n && (0, i.jsxs)("div", {
										children: [(0, i.jsxs)("label", {
											htmlFor: "gradientAngle",
											className: "block text-xs font-medium",
											children: ["Angle: ", d, "\xb0"]
										}), (0, i.jsx)("input", {
											type: "range",
											id: "gradientAngle",
											min: "0",
											max: "360",
											value: d,
											onChange: e => h(Number(e.target.value)),
											className: "w-full h-2 bg-neutral-200 lg:bg-neutral-300 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
										})]
									}), "radial" === n && (0, i.jsxs)("div", {
										children: [(0, i.jsxs)("label", {
											htmlFor: "radialGradientRadius",
											className: "block text-xs font-medium",
											children: ["Radius: ", T, "%"]
										}), (0, i.jsx)("input", {
											type: "range",
											id: "radialGradientRadius",
											min: "0",
											max: "100",
											value: T,
											onChange: e => I(Number(e.target.value)),
											className: "w-full h-2 bg-neutral-200 lg:bg-neutral-300 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
										})]
									})]
								})]
							})
						})]
					}), (0, i.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [(0, i.jsx)("div", {
							className: "block text-xs font-medium",
							children: "Shape Color:"
						}), (0, i.jsx)("ul", {
							className: "grid grid-cols-3 gap-2 text-xs font-medium text-center text-gray-500 dark:text-gray-400",
							children: p.map((e => {
								let {
									value: t,
									icon: n
								} = e;
								return (0, i.jsx)("li", {
									children: (0, i.jsx)("button", {
										onClick: () => y(t),
										className: "w-full h-10 flex items-center justify-center rounded-lg ".concat(v === t ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
										"aria-current": v === t ? "page" : void 0,
										children: n
									})
								}, t)
							}))
						}), (0, i.jsx)("div", {
							className: "grid gap-4",
							children: "solid" === v ? (0, i.jsxs)(i.Fragment, {
								children: [(0, i.jsx)("input", {
									type: "color",
									value: b,
									onChange: e => w(e.target.value),
									className: "w-full p-1 px-1 h-10 block bg-white border border-neutral-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
								}), (0, i.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: g.map((e => (0, i.jsx)("button", {
										onClick: () => w(e.value),
										className: "w-4 h-4 rounded focus:outline-none ring-1 ring-neutral-100 dark:ring-neutral-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500",
										style: {
											backgroundColor: e.value
										},
										title: e.name
									}, e.name)))
								})]
							}) : (0, i.jsxs)(i.Fragment, {
								children: [(0, i.jsxs)("div", {
									className: "grid grid-cols-[1fr_1fr_auto] gap-2 items-center",
									children: [(0, i.jsx)("input", {
										type: "color",
										value: x,
										onChange: e => k(e.target.value),
										className: "w-full p-1 px-1 h-10 block bg-white border border-neutral-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
									}), (0, i.jsx)("input", {
										type: "color",
										value: S,
										onChange: e => C(e.target.value),
										className: "w-full p-1 px-1 h-10 block bg-white border border-neutral-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
									}), (0, i.jsx)("button", {
										onClick: () => D(!j),
										className: "flex items-center justify-center w-10 h-10 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg",
										children: (0, i.jsx)(f, {
											className: "w-4 h-4 text-neutral-500 text-neutral-800 dark:text-neutral-200"
										})
									})]
								}), (0, i.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: m.map(((e, t) => (0, i.jsx)("button", {
										onClick: () => {
											k(e.color1), C(e.color2)
										},
										className: "w-4 h-4 rounded focus:outline-none ring-1 ring-neutral-100 dark:ring-neutral-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500",
										style: {
											background: "linear-gradient(to right, ".concat(e.color1, ", ").concat(e.color2, ")")
										},
										title: e.name
									}, t)))
								}), j && (0, i.jsxs)("div", {
									className: "space-y-4",
									children: ["linear" === v && (0, i.jsxs)("div", {
										children: [(0, i.jsxs)("label", {
											htmlFor: "shapeGradientAngle",
											className: "block text-xs font-medium",
											children: ["Angle: ", _, "\xb0"]
										}), (0, i.jsx)("input", {
											type: "range",
											id: "shapeGradientAngle",
											min: "0",
											max: "360",
											value: _,
											onChange: e => E(Number(e.target.value)),
											className: "w-full h-2 bg-neutral-200 lg:bg-neutral-300 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
										})]
									}), "radial" === v && (0, i.jsxs)("div", {
										children: [(0, i.jsxs)("label", {
											htmlFor: "shapeRadialGradientRadius",
											className: "block text-xs font-medium",
											children: ["Radius: ", N, "%"]
										}), (0, i.jsx)("input", {
											type: "range",
											id: "shapeRadialGradientRadius",
											min: "0",
											max: "100",
											value: N,
											onChange: e => R(Number(e.target.value)),
											className: "w-full h-2 bg-neutral-200 lg:bg-neutral-300 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
										})]
									})]
								})]
							})
						})]
					})]
				})
			},
			y = {
				dots: {
					name: "Dots",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("circle", {
							...a,
							cx: t,
							cy: n,
							r: r / 2
						})
					}
				},
				circles: {
					name: "Circles",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("circle", {
							...a,
							cx: t,
							cy: n,
							r: r / 2,
							fill: "none",
							stroke: a.fill,
							strokeWidth: r / 4
						})
					}
				},
				squares: {
					name: "Squares",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("rect", {
							...a,
							x: t - r / 2,
							y: n - r / 2,
							width: r,
							height: r
						})
					}
				},
				triangles: {
					name: "Triangles",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						const s = r * Math.sqrt(3) / 2;
						return (0, i.jsx)("polygon", {
							...a,
							points: "".concat(t, ",").concat(n - s / 2, " ").concat(t - r / 2, ",").concat(n + s / 2, " ").concat(t + r / 2, ",").concat(n + s / 2)
						})
					}
				},
				lines: {
					name: "Lines",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("path", {
							...a,
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M".concat(t + .907 * r, " ").concat(n + r, "\n           L").concat(t, " ").concat(n + .0925 * r, "\n           L").concat(t + .0925 * r, " ").concat(n, "\n           L").concat(t + r, " ").concat(n + .907 * r, "\n           Z")
						})
					}
				},
				plus: {
					name: "Plus",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						const s = r / 4;
						return (0, i.jsx)("path", {
							...a,
							d: "\n            M".concat(t - r / 2, " ").concat(n - s / 2, "\n            H").concat(t - s / 2, "\n            V").concat(n - r / 2, "\n            H").concat(t + s / 2, "\n            V").concat(n - s / 2, "\n            H").concat(t + r / 2, "\n            V").concat(n + s / 2, "\n            H").concat(t + s / 2, "\n            V").concat(n + r / 2, "\n            H").concat(t - s / 2, "\n            V").concat(n + s / 2, "\n            H").concat(t - r / 2, "\n            Z\n          ")
						})
					}
				},
				corner: {
					name: "Corner",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("path", {
							...a,
							d: "M".concat(t, " ").concat(n, " L").concat(t, " ").concat(n + r / 2, " L").concat(t + r / 2, " ").concat(n + r / 2, " L").concat(t + r / 2, " ").concat(n, " Z")
						})
					}
				},
				arrow: {
					name: "Arrow",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("path", {
							...a,
							d: "M".concat(t - r / 2, " ").concat(n, " L").concat(t + r / 2, " ").concat(n, " L").concat(t, " ").concat(n - r / 2, " Z")
						})
					}
				},
				hexagon: {
					name: "Hexagon",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						const s = r / 2,
							o = s * Math.sqrt(3);
						return (0, i.jsx)("polygon", {
							...a,
							points: "".concat(t - s, ",").concat(n - o / 2, " ").concat(t + s, ",").concat(n - o / 2, " ").concat(t + r, ",").concat(n, " ").concat(t + s, ",").concat(n + o / 2, " ").concat(t - s, ",").concat(n + o / 2, " ").concat(t - r, ",").concat(n)
						})
					}
				},
				star4: {
					name: "4-Point Star",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						const s = .4 * r;
						return (0, i.jsx)("path", {
							...a,
							d: "M".concat(t, " ").concat(n - r / 2, "\n             L").concat(t + s / 2, " ").concat(n - s / 2, "\n             L").concat(t + r / 2, " ").concat(n, "\n             L").concat(t + s / 2, " ").concat(n + s / 2, "\n             L").concat(t, " ").concat(n + r / 2, "\n             L").concat(t - s / 2, " ").concat(n + s / 2, "\n             L").concat(t - r / 2, " ").concat(n, "\n             L").concat(t - s / 2, " ").concat(n - s / 2, "\n             Z")
						})
					}
				},
				star5: {
					name: "5-Point Star",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						const s = [];
						for (let i = 0; i < 5; i++) {
							const e = 4 * i * Math.PI / 5 - Math.PI / 2;
							s.push("".concat(t + r / 2 * Math.cos(e), ",").concat(n + r / 2 * Math.sin(e)));
							const a = e + Math.PI / 5;
							s.push("".concat(t + r / 4 * Math.cos(a), ",").concat(n + r / 4 * Math.sin(a)))
						}
						return (0, i.jsx)("polygon", {
							...a,
							points: s.join(" ")
						})
					}
				},
				parallelogram: {
					name: "Parallelogram",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("path", {
							...a,
							d: "M".concat(t - r / 2, " ").concat(n + r / 4, "\n           L").concat(t + r / 2, " ").concat(n + r / 4, "\n           L").concat(t + r / 4, " ").concat(n - r / 4, "\n           L").concat(t - .75 * r, " ").concat(n - r / 4, "\n           Z"),
							fill: "none",
							stroke: a.fill,
							strokeWidth: r / 8
						})
					}
				},
				semicircle: {
					name: "Semicircle",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("path", {
							...a,
							d: "M".concat(t, " ").concat(n - r / 2, " A").concat(r / 2, " ").concat(r / 2, " 0 0 1 ").concat(t, " ").concat(n + r / 2)
						})
					}
				},
				wave: {
					name: "Wave",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("path", {
							...a,
							d: "M".concat(t - r / 2, " ").concat(n, " Q").concat(t, " ").concat(n - r / 2, " ").concat(t + r / 2, " ").concat(n),
							fill: "none",
							stroke: a.fill,
							strokeWidth: r / 8
						})
					}
				},
				chevron: {
					name: "Chevron",
					render: e => {
						let {
							posX: t,
							posY: n,
							size: r,
							shapeProps: a
						} = e;
						return (0, i.jsx)("path", {
							...a,
							d: "M".concat(t - r / 4, " ").concat(n - r / 4, " L").concat(t, " ").concat(n + r / 4, " L").concat(t + r / 4, " ").concat(n - r / 4),
							fill: "none",
							stroke: a.fill,
							strokeWidth: r / 8
						})
					}
				}
			},
			b = ["\ud83d\ude00", "\ud83d\ude0d", "\ud83e\udd14", "\ud83d\udc4d", "\ud83c\udf89", "\ud83d\ude80", "\ud83d\udca1", "\ud83c\udf08", "\ud83c\udf55", "\ud83c\udfb8", "\ud83d\udc31", "\ud83d\udc36", "\ud83c\udf3a", "\ud83c\udf40", "\u2b50", "\ud83d\udc96", "\ud83d\udd25", "\ud83c\udf88", "\ud83c\udf69", "\u2615", "\ud83d\ude02", "\ud83e\udd73", "\ud83d\ude0e", "\ud83e\udd17", "\ud83d\udcaa", "\u2728", "\ud83c\udf1f", "\ud83e\udd84", "\ud83c\udf54", "\ud83c\udf66", "\ud83d\udcda", "\ud83c\udfa8", "\ud83c\udfd6\ufe0f", "\ud83c\udf34", "\ud83e\udd8b", "\ud83d\udc3c", "\ud83c\udf3b", "\ud83c\udf53", "\ud83d\udeb2", "\ud83c\udfad"],
			w = ["\u2660", "\u2663", "\u2665", "\u2666", "\u2190", "\u273f", "\u2740", "\u262e", "\u266a", "\u266b", "\u266c", "\u263c", "\u263e", "\u262f", "\u2605", "\u2694", "\u2693", "\u25a1", "\u25a0", "\u25b3", "\u25b2", "\u260e", "\u2328", "\u270e", "\u2702", "\u2615", "\u2601", "\u2668", "\u2601", "\u2603", "\u267b", "\u26a1", "\u265e", "\u265b", "\u269b", "\u2618"],
			x = '<svg width="100" height="30">\n    <text x="10" y="20" font-size="24">Hello</text>\n</svg>'.replace(/^\s+/gm, "").trim(),
			k = h("EyeOff", [
				["path", {
					d: "M9.88 9.88a3 3 0 1 0 4.24 4.24",
					key: "1jxqfv"
				}],
				["path", {
					d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
					key: "9wicm4"
				}],
				["path", {
					d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
					key: "1jreej"
				}],
				["line", {
					x1: "2",
					x2: "22",
					y1: "2",
					y2: "22",
					key: "a6p6uj"
				}]
			]),
			S = h("Type", [
				["polyline", {
					points: "4 7 4 4 20 4 20 7",
					key: "1nosan"
				}],
				["line", {
					x1: "9",
					x2: "15",
					y1: "20",
					y2: "20",
					key: "swin9y"
				}],
				["line", {
					x1: "12",
					x2: "12",
					y1: "4",
					y2: "20",
					key: "1tx1rr"
				}]
			]),
			C = h("Bold", [
				["path", {
					d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
					key: "mg9rjx"
				}]
			]),
			_ = h("Italic", [
				["line", {
					x1: "19",
					x2: "10",
					y1: "4",
					y2: "4",
					key: "15jd3p"
				}],
				["line", {
					x1: "14",
					x2: "5",
					y1: "20",
					y2: "20",
					key: "bu0au3"
				}],
				["line", {
					x1: "15",
					x2: "9",
					y1: "4",
					y2: "20",
					key: "uljnxc"
				}]
			]),
			E = h("Lock", [
				["rect", {
					width: "18",
					height: "11",
					x: "3",
					y: "11",
					rx: "2",
					ry: "2",
					key: "1w4ew1"
				}],
				["path", {
					d: "M7 11V7a5 5 0 0 1 10 0v4",
					key: "fwvmzm"
				}]
			]),
			T = ["Space Grotesk", "Inter", "Manrope", "Plus Jakarta Sans", "Roboto", "Futura", "Open Sans", "Lato", "Comic Sans MS"],
			I = t => {
				let {
					patternType: n,
					customSvgCode: r,
					setCustomSvgCode: a,
					isPaidUser: s,
					initialMode: o = "custom",
					isHidden: l,
					setIsHidden: c,
					textInput: u,
					setTextInput: d,
					fontWeight: h,
					setFontWeight: f,
					fontStyle: p,
					setFontStyle: g,
					fontSize: m,
					setFontSize: v,
					selectedEmoji: y,
					setSelectedEmoji: I,
					selectedTextSymbol: N,
					setSelectedTextSymbol: R,
					fontFamily: A,
					setFontFamily: P,
					setShowPricingModal: j
				} = t;
				const D = (0, e.useRef)(null),
					[O, L] = (0, e.useState)(!1),
					[M, F] = (0, e.useState)(!1),
					[U, V] = (0, e.useState)(!1),
					[z, B] = (0, e.useState)(!1),
					[G, q] = (0, e.useState)(!1),
					[H, W] = (0, e.useState)(o);
				(0, e.useEffect)((() => {
					W(o), "textSymbols" === o ? (F(!0), L(!1), V(!1), B(!1)) : "emojis" === o ? (L(!0), F(!1), V(!1), B(!1)) : "text" === o ? (B(!0), L(!1), F(!1), V(!1)) : (F(!1), L(!1), V(!1), B(!1))
				}), [o]), (0, e.useEffect)((() => {
					"custom" === n && (c(!1), r || a(x))
				}), [n, r, a, c]), (0, e.useEffect)((() => {
					(() => {
						const e = D.current;
						e && (e.style.height = "auto", e.style.height = "".concat(e.scrollHeight, "px"))
					})()
				}), [r]);
				const K = e => {
						const t = (e => e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/on\w+="[^"]*"/g, "").replace(/xlink:href/g, "xlink-href"))(e);
						(e => {
							const t = (new DOMParser).parseFromString(e, "image/svg+xml").getElementsByTagName("svg")[0];
							if (t) {
								const e = parseInt(t.getAttribute("width") || "0", 10),
									n = parseInt(t.getAttribute("height") || "0", 10);
								return e <= 1e3 && n <= 1e3
							}
							return !1
						})(t) ? a(t): alert("Invalid SVG size. Please use dimensions up to 1000x1000 pixels.")
					},
					Q = e => {
						const t = '\n      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">\n        <text x="50" y="50" font-size="60" text-anchor="middle" dominant-baseline="central">'.concat(e, "</text>\n      </svg>\n    ").replace(/^\s+/gm, "").trim();
						K(t), d(e), "emojis" === H ? I(e) : "textSymbols" === H && R(e)
					},
					X = (e, t, n, r, i) => {
						d(e), f(t), g(n), v(r), P(i);
						const a = '\n    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">\n      <text\n        x="50"\n        y="50"\n        font-size="'.concat(r, '"\n        text-anchor="middle"\n        dominant-baseline="central"\n        font-weight="').concat(t, '"\n        font-style="').concat(n, '"\n        font-family="').concat(i, ', sans-serif"\n      >').concat(e, "</text>\n    </svg>\n  ").replace(/^\s+/gm, "").trim();
						K(a)
					};
				return "custom" !== n || l ? null : (0, i.jsxs)("div", {
					className: "col-span-2",
					children: [(0, i.jsxs)("div", {
						className: "flex justify-between items-center mb-2",
						children: [(0, i.jsxs)("div", {
							className: "block text-xs font-medium",
							children: ["emojis" === H && (0, i.jsxs)(i.Fragment, {
								children: ["Emojis:", (0, i.jsx)("p", {
									className: "text-xs text-neutral-500 my-1",
									children: "For more, use any Emoji from your keyboard or the internet"
								})]
							}), "textSymbols" === H && (0, i.jsxs)(i.Fragment, {
								children: ["Text Symbols:", (0, i.jsx)("p", {
									className: "text-xs text-neutral-500 my-1",
									children: "For more, use any Ascii code or text symbols from the internet"
								})]
							}), "text" === H && (0, i.jsxs)(i.Fragment, {
								children: ["Custom Text:", (0, i.jsx)("p", {
									className: "text-xs text-neutral-500 my-1",
									children: "This will be a text layer in Figma"
								})]
							})]
						}), (0, i.jsx)("button", {
							onClick: () => c(!0),
							className: "bg-neutral-800 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
							children: (0, i.jsx)(k, {
								className: "w-4 h-4"
							})
						})]
					}), "emojis" === H && (0, i.jsx)("div", {
						className: "mb-4",
						children: (0, i.jsx)("ul", {
							className: "flex flex-wrap text-lg font-medium text-center text-gray-500 dark:text-gray-400",
							children: b.map(((e, t) => (0, i.jsx)("li", {
								className: "mr-2 mb-2",
								children: (0, i.jsx)("button", {
									onClick: () => Q(e),
									className: "inline-block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 ".concat(y === e ? "bg-neutral-200 dark:bg-neutral-700" : ""),
									children: e
								})
							}, t)))
						})
					}), "textSymbols" === H && (0, i.jsx)("div", {
						className: "mb-4",
						children: (0, i.jsx)("ul", {
							className: "flex flex-wrap text-xl font-medium text-center text-gray-500 dark:text-gray-400",
							children: w.map(((e, t) => (0, i.jsx)("li", {
								className: "mr-2 mb-2",
								children: (0, i.jsx)("button", {
									onClick: () => Q(e),
									className: "inline-block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 ".concat(N === e ? "bg-neutral-200 dark:bg-neutral-700" : ""),
									children: e
								})
							}, t)))
						})
					}), "text" === H && (0, i.jsxs)("div", {
						className: "mb-4 space-y-4 max-w-[320px]",
						children: [(0, i.jsx)("input", {
							type: "text",
							value: u,
							onChange: e => {
								d(e.target.value), X(e.target.value, h, p, m, A)
							},
							className: "text-xs w-full p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg",
							maxLength: 20,
							placeholder: "Enter your text here"
						}), (0, i.jsxs)("div", {
							className: "flex text-xs",
							children: [(0, i.jsx)("button", {
								onClick: () => X(u, "normal", "normal", m, A),
								className: "px-3 py-3 rounded-lg ".concat("normal" === h && "normal" === p ? "bg-neutral-800 text-white" : "text-black dark:text-white"),
								children: (0, i.jsx)(S, {
									className: "w-4 h-4"
								})
							}), (0, i.jsx)("button", {
								onClick: () => X(u, "bold", "normal", m, A),
								className: "px-3 py-3 rounded-lg ".concat("bold" === h && "normal" === p ? "bg-neutral-800 text-white" : "text-black dark:text-white"),
								children: (0, i.jsx)(C, {
									className: "w-4 h-4"
								})
							}), (0, i.jsx)("button", {
								onClick: () => X(u, "normal", "italic", m, A),
								className: "px-3 py-3 rounded-lg ".concat("normal" === h && "italic" === p ? "bg-neutral-800 text-white" : "text-black dark:text-white"),
								children: (0, i.jsx)(_, {
									className: "w-4 h-4"
								})
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("label", {
								htmlFor: "fontSize",
								className: "block text-xs font-medium mb-1",
								children: ["Font Size: ", m, "px"]
							}), (0, i.jsx)("input", {
								type: "range",
								id: "fontSize",
								min: "10",
								max: "100",
								value: m,
								onChange: e => {
									const t = Number(e.target.value);
									v(t), X(u, h, p, t, A)
								},
								className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsx)("label", {
								htmlFor: "fontFamily",
								className: "block text-xs font-medium mb-1",
								children: "Font Family"
							}), (0, i.jsx)("select", {
								id: "fontFamily",
								value: A,
								onChange: e => {
									const t = e.target.value;
									P(t), X(u, h, p, m, t)
								},
								className: "w-full p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs",
								children: T.map((e => (0, i.jsx)("option", {
									value: e,
									children: e
								}, e)))
							})]
						})]
					}), (0, i.jsxs)("div", {
						className: "relative",
						children: [(0, i.jsxs)("label", {
							htmlFor: "customSvgCode",
							children: [(0, i.jsx)("p", {
								className: "text-xs font-medium",
								children: "Custom SVG Code:"
							}), (0, i.jsx)("p", {
								className: "text-xs text-neutral-500 my-1 mb-2",
								children: "Copy as SVG from Figma and paste here. Customize the code."
							})]
						}), (0, i.jsx)("textarea", {
							ref: D,
							id: "customSvgCode",
							value: r,
							onChange: e => {
								s && K(e.target.value)
							},
							onClick: () => {
								s || j(!0)
							},
							placeholder: s ? "Enter custom SVG code here (e.g., <svg width='100' height='100'><path d='M0,0 L10,10 L20,0 Z' /></svg>)" : "Upgrade to use custom SVG",
							className: "bg-white dark:bg-neutral-800 p-2 rounded-lg overflow-x-auto text-xs mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-neutral-600 ".concat(s ? "text-black dark:text-white" : "text-neutral-500 cursor-not-allowed"),
							style: {
								minHeight: "3rem",
								resize: "none",
								overflowY: "hidden"
							}
						}), !s && (0, i.jsx)("div", {
							className: "absolute bottom-2 right-2 bg-black bg-opacity-10 rounded-full p-1 cursor-pointer",
							onClick: () => j(!0),
							children: (0, i.jsx)(E, {
								className: "h-4 w-4 text-neutral-500 dark:text-white"
							})
						})]
					})]
				})
			},
			N = [{
				name: "dots",
				icon: (0, i.jsx)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("circle", {
						cx: "8",
						cy: "8",
						r: "8",
						fill: "currentColor"
					})
				})
			}, {
				name: "circles",
				icon: (0, i.jsx)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("circle", {
						cx: "8",
						cy: "8",
						r: "7",
						stroke: "currentColor",
						strokeWidth: "2"
					})
				})
			}, {
				name: "squares",
				icon: (0, i.jsx)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("rect", {
						width: "16",
						height: "16",
						fill: "currentColor"
					})
				})
			}, {
				name: "triangles",
				icon: (0, i.jsx)("svg", {
					width: "14",
					height: "12",
					viewBox: "0 0 14 12",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M7 0L13.9282 12H0.0717969L7 0Z",
						fill: "currentColor"
					})
				})
			}, {
				name: "lines",
				icon: (0, i.jsx)("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 18 18",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M1 1L17 17",
						stroke: "currentColor",
						strokeWidth: "2"
					})
				})
			}],
			R = [{
				name: "plus",
				icon: (0, i.jsxs)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("rect", {
						x: "6",
						width: "4",
						height: "16",
						fill: "currentColor"
					}), (0, i.jsx)("rect", {
						x: "16",
						y: "6",
						width: "4",
						height: "16",
						transform: "rotate(90 16 6)",
						fill: "currentColor"
					})]
				})
			}, {
				name: "corner",
				icon: (0, i.jsx)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("rect", {
						x: "6",
						y: "6",
						width: "10",
						height: "10",
						fill: "currentColor"
					})
				})
			}, {
				name: "arrow",
				icon: (0, i.jsx)("svg", {
					width: "14",
					height: "8",
					viewBox: "0 0 14 8",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M6.92773 0.75L13.8564 7.25H0L6.92773 0.75Z",
						fill: "currentColor"
					})
				})
			}, {
				name: "hexagon",
				icon: (0, i.jsx)("svg", {
					width: "15",
					height: "16",
					viewBox: "0 0 15 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M7.85645 0L14.7846 4V12L7.85645 16L0.928242 12V4L7.85645 0Z",
						fill: "currentColor"
					})
				})
			}, {
				name: "star4",
				icon: (0, i.jsx)("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 18 18",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M8.85645 1L11.0172 6.83927L16.8564 9L11.0172 11.1607L8.85645 17L6.69566 11.1607L0.856445 9L6.69566 6.83927L8.85645 1Z",
						fill: "currentColor"
					})
				})
			}, {
				name: "star5",
				icon: (0, i.jsx)("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 18 18",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M8.85645 1L10.6526 6.52786H16.4649L11.7626 9.94427L13.5587 15.4721L8.85645 12.0557L4.15421 15.4721L5.95028 9.94427L1.24805 6.52786H7.06028L8.85645 1Z",
						fill: "currentColor"
					})
				})
			}, {
				name: "parallelogram",
				icon: (0, i.jsx)("svg", {
					width: "18",
					height: "16",
					viewBox: "0 0 18 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M0.856445 1L14.8564 15H6.36996H0.856445",
						stroke: "currentColor",
						"stroke-width": "2"
					})
				})
			}, {
				name: "semicircle",
				icon: (0, i.jsx)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						d: "M0 8C0 12.4183 3.58172 16 8 16V0C3.58172 0 0 3.58172 0 8Z",
						fill: "currentColor"
					})
				})
			}, {
				name: "wave",
				icon: (0, i.jsx)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M14.6667 5.83325C12.9277 4.28338 10.5816 3.33325 8.00065 3.33325C5.41969 3.33325 3.07358 4.28338 1.33398 5.83325",
						stroke: "currentColor",
						"stroke-width": "1.5",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					})
				})
			}, {
				name: "chevron",
				icon: (0, i.jsx)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M5.33333 13.3334L10.6667 8.00008L5.33333 2.66675",
						stroke: "currentColor",
						"stroke-width": "1.5",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					})
				})
			}],
			A = {
				more: (0, i.jsxs)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("path", {
						d: "M8.00033 10.3334C8.73671 10.3334 9.33366 9.73646 9.33366 9.00008C9.33366 8.2637 8.73671 7.66675 8.00033 7.66675C7.26395 7.66675 6.66699 8.2637 6.66699 9.00008C6.66699 9.73646 7.26395 10.3334 8.00033 10.3334Z",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeMiterlimit: "10",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}), (0, i.jsx)("path", {
						d: "M13.3333 10.3334C14.0697 10.3334 14.6667 9.73646 14.6667 9.00008C14.6667 8.2637 14.0697 7.66675 13.3333 7.66675C12.597 7.66675 12 8.2637 12 9.00008C12 9.73646 12.597 10.3334 13.3333 10.3334Z",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeMiterlimit: "10",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}), (0, i.jsx)("path", {
						d: "M2.66634 10.3334C3.40272 10.3334 3.99967 9.73646 3.99967 9.00008C3.99967 8.2637 3.40272 7.66675 2.66634 7.66675C1.92996 7.66675 1.33301 8.2637 1.33301 9.00008C1.33301 9.73646 1.92996 10.3334 2.66634 10.3334Z",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeMiterlimit: "10",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})]
				}),
				text: (0, i.jsxs)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsxs)("g", {
						clipPath: "url(#clip0_0_1)",
						children: [(0, i.jsx)("path", {
							d: "M10.6667 14.6666H5.33333C5.14667 14.6666 5 14.5199 5 14.3333C5 14.1466 5.14667 13.9999 5.33333 13.9999H7.66667V1.66659C7.66667 1.47992 7.81333 1.33325 8 1.33325C8.18667 1.33325 8.33333 1.47992 8.33333 1.66659V13.9999H10.6667C10.8533 13.9999 11 14.1466 11 14.3333C11 14.5199 10.8533 14.6666 10.6667 14.6666Z",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeMiterlimit: "10",
							strokeLinecap: "round"
						}), (0, i.jsx)("path", {
							d: "M14.333 4.66659C14.1463 4.66659 13.9997 4.51992 13.9997 4.33325V1.99992H1.99967V4.33325C1.99967 4.51992 1.85301 4.66659 1.66634 4.66659C1.47967 4.66659 1.33301 4.51992 1.33301 4.33325V1.66659C1.33301 1.47992 1.47967 1.33325 1.66634 1.33325H14.333C14.5197 1.33325 14.6663 1.47992 14.6663 1.66659V4.33325C14.6663 4.51992 14.5197 4.66659 14.333 4.66659Z",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeMiterlimit: "10",
							strokeLinecap: "round"
						})]
					}), (0, i.jsx)("defs", {
						children: (0, i.jsx)("clipPath", {
							id: "clip0_0_1",
							children: (0, i.jsx)("rect", {
								width: "16",
								height: "16",
								fill: "currentColor"
							})
						})
					})]
				}),
				textSymbols: (0, i.jsxs)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsxs)("g", {
						clipPath: "url(#clip1_0_1)",
						children: [(0, i.jsx)("path", {
							d: "M7.9997 14.6666C11.6816 14.6666 14.6663 11.6818 14.6663 7.99992C14.6663 4.31802 11.6816 1.33325 7.9997 1.33325C4.3178 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.3178 14.6666 7.9997 14.6666Z",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}), (0, i.jsx)("path", {
							d: "M12 8H4",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}), (0, i.jsx)("path", {
							d: "M8 4L12 8L8 12",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})]
					}), (0, i.jsx)("defs", {
						children: (0, i.jsx)("clipPath", {
							id: "clip1_0_1",
							children: (0, i.jsx)("rect", {
								width: "16",
								height: "16",
								fill: "currentColor"
							})
						})
					})]
				}),
				emojis: (0, i.jsxs)("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("rect", {
						x: "1",
						y: "1",
						width: "14",
						height: "14",
						rx: "7",
						stroke: "currentColor",
						"stroke-width": "2"
					}), (0, i.jsx)("circle", {
						cx: "5.5",
						cy: "6.5",
						r: "1.5",
						fill: "currentColor"
					}), (0, i.jsx)("circle", {
						cx: "10.5",
						cy: "6.5",
						r: "1.5",
						fill: "currentColor"
					}), (0, i.jsx)("rect", {
						x: "6",
						y: "10",
						width: "4",
						height: "2",
						rx: "1",
						fill: "currentColor"
					})]
				}),
				customSvg: (0, i.jsx)("svg", {
					width: "34",
					height: "19",
					viewBox: "0 0 34 19",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, i.jsx)("path", {
						d: "M6.73699 2.663H5.54168C5.50759 2.46697 5.44474 2.29332 5.35312 2.14205C5.2615 1.98864 5.14751 1.85866 5.01114 1.75213C4.87478 1.6456 4.71924 1.5657 4.54452 1.51243C4.37194 1.45703 4.1855 1.42933 3.98522 1.42933C3.62939 1.42933 3.31405 1.51882 3.0392 1.6978C2.76434 1.87464 2.54914 2.13459 2.3936 2.47763C2.23806 2.81854 2.16029 3.23509 2.16029 3.72727C2.16029 4.22798 2.23806 4.64986 2.3936 4.9929C2.55127 5.33381 2.76647 5.59162 3.0392 5.76634C3.31405 5.93892 3.62833 6.02521 3.98202 6.02521C4.17805 6.02521 4.36128 5.99964 4.53174 5.94851C4.70432 5.89524 4.8588 5.81747 4.99516 5.7152C5.13366 5.61293 5.24978 5.48722 5.34353 5.33807C5.43941 5.18892 5.50546 5.01847 5.54168 4.8267L6.73699 4.8331C6.69225 5.14418 6.5953 5.43608 6.44616 5.70881C6.29914 5.98153 6.10631 6.2223 5.86768 6.43111C5.62904 6.63778 5.34992 6.79972 5.03032 6.9169C4.71072 7.03196 4.35596 7.08949 3.96604 7.08949C3.39076 7.08949 2.87726 6.95632 2.42556 6.68999C1.97385 6.42365 1.61803 6.03906 1.35809 5.53622C1.09814 5.03338 0.968173 4.4304 0.968173 3.72727C0.968173 3.02202 1.09921 2.41903 1.36128 1.91832C1.62336 1.41548 1.98025 1.03089 2.43195 0.764559C2.88366 0.498224 3.39502 0.365057 3.96604 0.365057C4.33039 0.365057 4.66917 0.416193 4.98238 0.518466C5.29559 0.620739 5.57471 0.770952 5.81974 0.969105C6.06476 1.16513 6.26611 1.40589 6.42378 1.69141C6.58359 1.97479 6.68799 2.29865 6.73699 2.663ZM10.9006 4.93537V2.09091H12.0576V7H10.9358V6.12749H10.8846C10.7738 6.40234 10.5917 6.62713 10.3381 6.80185C10.0867 6.97656 9.77668 7.06392 9.40807 7.06392C9.08634 7.06392 8.80189 6.99254 8.55473 6.84979C8.3097 6.7049 8.11794 6.49503 7.97945 6.22017C7.84095 5.94318 7.77171 5.60866 7.77171 5.21662V2.09091H8.92867V5.03764C8.92867 5.34872 9.01389 5.59588 9.18435 5.77912C9.3548 5.96236 9.57852 6.05398 9.85551 6.05398C10.026 6.05398 10.1911 6.01243 10.3509 5.92933C10.5107 5.84624 10.6417 5.72266 10.744 5.55859C10.8484 5.3924 10.9006 5.18466 10.9006 4.93537ZM17.1273 3.38849L16.0726 3.50355C16.0427 3.39702 15.9905 3.29688 15.916 3.20312C15.8435 3.10938 15.7455 3.03374 15.6219 2.97621C15.4984 2.91868 15.3471 2.88991 15.1681 2.88991C14.9273 2.88991 14.7249 2.94212 14.5609 3.04652C14.3989 3.15092 14.319 3.28622 14.3212 3.45241C14.319 3.59517 14.3712 3.71129 14.4778 3.80078C14.5864 3.89027 14.7654 3.96378 15.0147 4.02131L15.8521 4.20028C16.3165 4.30043 16.6617 4.45916 16.8876 4.67649C17.1155 4.89382 17.2306 5.17827 17.2327 5.52983C17.2306 5.83878 17.14 6.11151 16.9611 6.34801C16.7842 6.58239 16.5381 6.76562 16.2228 6.89773C15.9074 7.02983 15.5452 7.09588 15.1361 7.09588C14.5353 7.09588 14.0516 6.97017 13.6851 6.71875C13.3187 6.4652 13.1003 6.11257 13.03 5.66087L14.1582 5.5522C14.2093 5.77379 14.318 5.94105 14.4842 6.05398C14.6503 6.1669 14.8666 6.22337 15.1329 6.22337C15.4078 6.22337 15.6283 6.1669 15.7945 6.05398C15.9628 5.94105 16.047 5.80149 16.047 5.6353C16.047 5.49467 15.9927 5.37855 15.884 5.28693C15.7775 5.19531 15.6113 5.125 15.3854 5.07599L14.5481 4.90021C14.0772 4.8022 13.7288 4.63707 13.503 4.40483C13.2771 4.17045 13.1653 3.87429 13.1674 3.51634C13.1653 3.21378 13.2473 2.9517 13.4135 2.73011C13.5818 2.50639 13.8151 2.33381 14.1134 2.21236C14.4138 2.08878 14.7601 2.02699 15.1521 2.02699C15.7274 2.02699 16.1802 2.1495 16.5104 2.39453C16.8428 2.63956 17.0484 2.97088 17.1273 3.38849ZM20.6381 2.09091V2.9858H17.816V2.09091H20.6381ZM18.5127 0.914773H19.6697V5.52344C19.6697 5.67898 19.6931 5.7983 19.74 5.88139C19.789 5.96236 19.8529 6.01776 19.9318 6.04759C20.0106 6.07741 20.098 6.09233 20.1938 6.09233C20.2663 6.09233 20.3323 6.087 20.392 6.07635C20.4538 6.0657 20.5007 6.05611 20.5326 6.04759L20.7276 6.95206C20.6658 6.97337 20.5774 6.9968 20.4623 7.02237C20.3494 7.04794 20.2109 7.06286 20.0468 7.06712C19.7571 7.07564 19.496 7.03196 19.2638 6.93608C19.0316 6.83807 18.8473 6.68679 18.7109 6.48224C18.5767 6.2777 18.5106 6.02202 18.5127 5.7152V0.914773ZM23.6943 7.09588C23.2149 7.09588 22.7994 6.99041 22.4478 6.77947C22.0963 6.56854 21.8236 6.27344 21.6297 5.89418C21.4379 5.51491 21.342 5.07173 21.342 4.56463C21.342 4.05753 21.4379 3.61328 21.6297 3.23189C21.8236 2.8505 22.0963 2.55433 22.4478 2.34339C22.7994 2.13246 23.2149 2.02699 23.6943 2.02699C24.1737 2.02699 24.5892 2.13246 24.9407 2.34339C25.2923 2.55433 25.564 2.8505 25.7557 3.23189C25.9496 3.61328 26.0466 4.05753 26.0466 4.56463C26.0466 5.07173 25.9496 5.51491 25.7557 5.89418C25.564 6.27344 25.2923 6.56854 24.9407 6.77947C24.5892 6.99041 24.1737 7.09588 23.6943 7.09588ZM23.7007 6.16903C23.9606 6.16903 24.178 6.09766 24.3527 5.9549C24.5274 5.81001 24.6574 5.61612 24.7426 5.37322C24.8299 5.13033 24.8736 4.85973 24.8736 4.56143C24.8736 4.26101 24.8299 3.98935 24.7426 3.74645C24.6574 3.50142 24.5274 3.30646 24.3527 3.16158C24.178 3.01669 23.9606 2.94425 23.7007 2.94425C23.4343 2.94425 23.2128 3.01669 23.0359 3.16158C22.8612 3.30646 22.7302 3.50142 22.6428 3.74645C22.5576 3.98935 22.515 4.26101 22.515 4.56143C22.515 4.85973 22.5576 5.13033 22.6428 5.37322C22.7302 5.61612 22.8612 5.81001 23.0359 5.9549C23.2128 6.09766 23.4343 6.16903 23.7007 6.16903ZM27.0285 7V2.09091H28.1344V2.92507H28.1919C28.2942 2.64382 28.4636 2.42436 28.7001 2.26669C28.9366 2.10689 29.2189 2.02699 29.547 2.02699C29.8794 2.02699 30.1596 2.10795 30.3876 2.26989C30.6177 2.42969 30.7796 2.64808 30.8734 2.92507H30.9245C31.0332 2.65234 31.2164 2.43501 31.4742 2.27308C31.7342 2.10902 32.042 2.02699 32.3979 2.02699C32.8496 2.02699 33.2182 2.16974 33.5037 2.45526C33.7892 2.74077 33.932 3.15732 33.932 3.7049V7H32.7718V3.88388C32.7718 3.57919 32.6908 3.35653 32.5289 3.21591C32.367 3.07315 32.1688 3.00178 31.9344 3.00178C31.6553 3.00178 31.4369 3.08913 31.2793 3.26385C31.1237 3.43643 31.0459 3.66122 31.0459 3.93821V7H29.9114V3.83594C29.9114 3.58239 29.8347 3.37997 29.6812 3.22869C29.53 3.07741 29.3318 3.00178 29.0868 3.00178C28.9206 3.00178 28.7693 3.04439 28.6329 3.12962C28.4966 3.21271 28.3879 3.33097 28.307 3.48438C28.226 3.63565 28.1855 3.8125 28.1855 4.01491V7H27.0285ZM12.3029 13.2539C12.273 12.9748 12.1473 12.7575 11.9257 12.6019C11.7063 12.4464 11.4208 12.3686 11.0692 12.3686C10.822 12.3686 10.61 12.4059 10.4332 12.4805C10.2563 12.555 10.121 12.6562 10.0273 12.7841C9.93355 12.9119 9.88561 13.0579 9.88348 13.2219C9.88348 13.3583 9.91437 13.4766 9.97616 13.5767C10.0401 13.6768 10.1264 13.7621 10.235 13.8324C10.3437 13.9006 10.4641 13.9581 10.5962 14.005C10.7283 14.0518 10.8615 14.0913 10.9957 14.1232L11.6093 14.2766C11.8565 14.3342 12.0941 14.4119 12.322 14.5099C12.5522 14.608 12.7578 14.7315 12.9389 14.8807C13.1221 15.0298 13.267 15.2099 13.3735 15.4208C13.4801 15.6317 13.5333 15.8789 13.5333 16.1623C13.5333 16.5458 13.4353 16.8835 13.2393 17.1754C13.0433 17.4652 12.7599 17.6921 12.3892 17.8562C12.0206 18.0181 11.5742 18.0991 11.05 18.0991C10.5408 18.0991 10.0987 18.0202 9.72368 17.8626C9.35081 17.7049 9.0589 17.4748 8.84797 17.1722C8.63916 16.8697 8.52623 16.5011 8.50919 16.0664H9.67574C9.69278 16.2944 9.76309 16.484 9.88667 16.6353C10.0103 16.7866 10.1711 16.8995 10.3693 16.9741C10.5696 17.0487 10.7933 17.0859 11.0404 17.0859C11.2983 17.0859 11.5241 17.0476 11.718 16.9709C11.914 16.892 12.0674 16.7834 12.1782 16.6449C12.289 16.5043 12.3455 16.3402 12.3476 16.1527C12.3455 15.9822 12.2954 15.8416 12.1974 15.7308C12.0994 15.6179 11.962 15.5241 11.7851 15.4496C11.6104 15.3729 11.4059 15.3047 11.1715 15.245L10.4268 15.0533C9.88774 14.9148 9.4616 14.7049 9.14839 14.4237C8.83731 14.1403 8.68177 13.7642 8.68177 13.2955C8.68177 12.9098 8.78618 12.5721 8.99498 12.2823C9.20592 11.9925 9.4925 11.7678 9.85471 11.608C10.2169 11.446 10.6271 11.3651 11.0852 11.3651C11.5497 11.3651 11.9566 11.446 12.3061 11.608C12.6576 11.7678 12.9335 11.9904 13.1338 12.2759C13.3341 12.5593 13.4375 12.8853 13.4438 13.2539H12.3029ZM15.4661 11.4545L17.1696 16.6065H17.2367L18.937 11.4545H20.241L17.9335 18H16.4697L14.1653 11.4545H15.4661ZM25.1365 13.5447C25.0832 13.3722 25.0097 13.2177 24.916 13.0813C24.8244 12.9428 24.7136 12.8246 24.5836 12.7266C24.4557 12.6286 24.3087 12.555 24.1425 12.506C23.9763 12.4549 23.7952 12.4293 23.5992 12.4293C23.2476 12.4293 22.9344 12.5178 22.6596 12.6946C22.3847 12.8714 22.1685 13.1314 22.0108 13.4744C21.8552 13.8153 21.7775 14.2308 21.7775 14.7209C21.7775 15.2152 21.8552 15.6339 22.0108 15.9769C22.1663 16.32 22.3826 16.581 22.6596 16.7599C22.9366 16.9368 23.2583 17.0252 23.6248 17.0252C23.9572 17.0252 24.2448 16.9613 24.4877 16.8335C24.7327 16.7056 24.9213 16.5245 25.0534 16.2901C25.1855 16.0536 25.2516 15.7766 25.2516 15.4592L25.52 15.5007H23.743V14.5739H26.3989V15.3601C26.3989 15.9205 26.2796 16.4052 26.041 16.8143C25.8023 17.2234 25.4742 17.5387 25.0566 17.7603C24.639 17.9798 24.1596 18.0895 23.6184 18.0895C23.0154 18.0895 22.4859 17.9542 22.03 17.6836C21.5761 17.4109 21.2214 17.0241 20.9657 16.5234C20.7121 16.0206 20.5854 15.424 20.5854 14.7337C20.5854 14.2053 20.6599 13.7333 20.8091 13.3178C20.9604 12.9023 21.1713 12.5497 21.4419 12.2599C21.7125 11.968 22.03 11.7464 22.3943 11.5952C22.7587 11.4418 23.155 11.3651 23.5832 11.3651C23.9454 11.3651 24.2832 11.4183 24.5964 11.5249C24.9096 11.6293 25.1876 11.7784 25.4305 11.9723C25.6756 12.1662 25.8769 12.3963 26.0346 12.6626C26.1922 12.929 26.2956 13.223 26.3446 13.5447H25.1365Z",
						fill: "currentColor"
					})
				})
			},
			P = t => {
				let {
					patternType: n,
					setPatternType: r,
					customSvgCode: a,
					setCustomSvgCode: s,
					isPaidUser: o,
					customSvgMode: l,
					setCustomSvgMode: c,
					textInput: u,
					setTextInput: d,
					fontWeight: h,
					setFontWeight: f,
					fontStyle: p,
					setFontStyle: g,
					fontSize: m,
					setFontSize: v,
					selectedEmoji: y,
					setSelectedEmoji: b,
					selectedTextSymbol: w,
					setSelectedTextSymbol: x,
					fontFamily: k,
					setFontFamily: S,
					setShowPricingModal: C
				} = t;
				const [_, E] = (0, e.useState)("main"), [T, P] = (0, e.useState)(!1);
				(0, e.useEffect)((() => {
					"custom" === n && l ? E("custom") : R.some((e => e.name === n)) ? E("hidden") : N.some((e => e.name === n)) && E("main")
				}), [n, l]), (0, e.useEffect)((() => {
					"custom" === _ && P(!1)
				}), [_]);
				const j = (e, t) => {
						r(e), E(t), c(null)
					},
					D = e => {
						E("custom"), r("custom"), c(e), P(!1)
					};
				return (0, i.jsxs)("div", {
					className: "space-y-2",
					children: [(0, i.jsxs)("ul", {
						className: "flex text-xs font-medium text-center justify-center text-gray-500 dark:text-gray-400",
						children: [N.map((e => {
							let {
								name: t,
								icon: r
							} = e;
							return (0, i.jsx)("li", {
								className: "flex-1",
								children: (0, i.jsx)("button", {
									onClick: () => j(t, "main"),
									className: "flex justify-center w-full py-3 h-10 px-2 rounded-lg ".concat("main" === _ && n === t ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
									children: r
								})
							}, t)
						})), (0, i.jsx)("li", {
							className: "flex-1",
							children: (0, i.jsx)("button", {
								onClick: () => E("hidden" === _ ? "main" : "hidden"),
								className: "flex justify-center w-full py-3 px-2 rounded-lg ".concat("hidden" === _ ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
								children: A.more
							})
						}), (0, i.jsx)("li", {
							className: "flex-1",
							children: (0, i.jsx)("button", {
								onClick: () => D("text"),
								className: "flex justify-center w-full py-3 px-2 rounded-lg ".concat("custom" === _ && "text" === l ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
								children: A.text
							})
						}), (0, i.jsx)("li", {
							className: "flex-1",
							children: (0, i.jsx)("button", {
								onClick: () => D("textSymbols"),
								className: "flex justify-center w-full py-3 px-2 rounded-lg ".concat("custom" === _ && "textSymbols" === l ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
								children: A.textSymbols
							})
						}), (0, i.jsx)("li", {
							className: "flex-1",
							children: (0, i.jsx)("button", {
								onClick: () => D("emojis"),
								className: "flex justify-center w-full py-3 px-2 rounded-lg ".concat("custom" === _ && "emojis" === l ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
								children: A.emojis
							})
						}), (0, i.jsx)("li", {
							className: "flex-1",
							children: (0, i.jsx)("button", {
								onClick: () => D("custom"),
								className: "flex justify-center w-full py-3 px-2 rounded-lg ".concat("custom" === _ && "custom" === l ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
								children: A.customSvg
							})
						})]
					}), (() => {
						switch (_) {
							case "main":
							default:
								return null;
							case "hidden":
								return (0, i.jsx)("ul", {
									className: "grid grid-cols-10 gap-2 text-xs font-medium text-center text-gray-500 dark:text-gray-400",
									children: (e = R, t = "hidden", e.map((e => {
										let {
											name: r,
											icon: a
										} = e;
										return (0, i.jsx)("li", {
											className: "flex-1",
											children: (0, i.jsx)("button", {
												onClick: () => j(r, t),
												className: "flex items-center justify-center w-full h-10 rounded-lg ".concat(n === r ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
												"aria-current": n === r ? "page" : void 0,
												children: a
											})
										}, r)
									})))
								});
							case "custom":
								return (0, i.jsx)(I, {
									patternType: "custom",
									customSvgCode: a,
									setCustomSvgCode: s,
									isPaidUser: o,
									initialMode: l,
									isHidden: T,
									setIsHidden: P,
									textInput: u,
									setTextInput: d,
									fontWeight: h,
									setFontWeight: f,
									fontStyle: p,
									setFontStyle: g,
									fontSize: m,
									setFontSize: v,
									selectedEmoji: y,
									setSelectedEmoji: b,
									selectedTextSymbol: w,
									setSelectedTextSymbol: x,
									fontFamily: k,
									setFontFamily: S,
									setShowPricingModal: C
								})
						}
						var e, t
					})()]
				})
			},
			j = function(e) {
				const t = [];
				let n = 0;
				for (let r = 0; r < e.length; r++) {
					let i = e.charCodeAt(r);
					i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : 55296 === (64512 & i) && r + 1 < e.length && 56320 === (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
				}
				return t
			},
			D = {
				byteToCharMap_: null,
				charToByteMap_: null,
				byteToCharMapWebSafe_: null,
				charToByteMapWebSafe_: null,
				ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
				get ENCODED_VALS() {
					return this.ENCODED_VALS_BASE + "+/="
				},
				get ENCODED_VALS_WEBSAFE() {
					return this.ENCODED_VALS_BASE + "-_."
				},
				HAS_NATIVE_SUPPORT: "function" === typeof atob,
				encodeByteArray(e, t) {
					if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
					this.init_();
					const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
						r = [];
					for (let i = 0; i < e.length; i += 3) {
						const t = e[i],
							a = i + 1 < e.length,
							s = a ? e[i + 1] : 0,
							o = i + 2 < e.length,
							l = o ? e[i + 2] : 0,
							c = t >> 2,
							u = (3 & t) << 4 | s >> 4;
						let d = (15 & s) << 2 | l >> 6,
							h = 63 & l;
						o || (h = 64, a || (d = 64)), r.push(n[c], n[u], n[d], n[h])
					}
					return r.join("")
				},
				encodeString(e, t) {
					return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(j(e), t)
				},
				decodeString(e, t) {
					return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
						const t = [];
						let n = 0,
							r = 0;
						for (; n < e.length;) {
							const i = e[n++];
							if (i < 128) t[r++] = String.fromCharCode(i);
							else if (i > 191 && i < 224) {
								const a = e[n++];
								t[r++] = String.fromCharCode((31 & i) << 6 | 63 & a)
							} else if (i > 239 && i < 365) {
								const a = ((7 & i) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
								t[r++] = String.fromCharCode(55296 + (a >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & a))
							} else {
								const a = e[n++],
									s = e[n++];
								t[r++] = String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & s)
							}
						}
						return t.join("")
					}(this.decodeStringToByteArray(e, t))
				},
				decodeStringToByteArray(e, t) {
					this.init_();
					const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
						r = [];
					for (let i = 0; i < e.length;) {
						const t = n[e.charAt(i++)],
							a = i < e.length ? n[e.charAt(i)] : 0;
						++i;
						const s = i < e.length ? n[e.charAt(i)] : 64;
						++i;
						const o = i < e.length ? n[e.charAt(i)] : 64;
						if (++i, null == t || null == a || null == s || null == o) throw new O;
						const l = t << 2 | a >> 4;
						if (r.push(l), 64 !== s) {
							const e = a << 4 & 240 | s >> 2;
							if (r.push(e), 64 !== o) {
								const e = s << 6 & 192 | o;
								r.push(e)
							}
						}
					}
					return r
				},
				init_() {
					if (!this.byteToCharMap_) {
						this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
						for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
					}
				}
			};
		class O extends Error {
			constructor() {
				super(...arguments), this.name = "DecodeBase64StringError"
			}
		}
		const L = function(e) {
				return function(e) {
					const t = j(e);
					return D.encodeByteArray(t, !0)
				}(e).replace(/\./g, "")
			},
			M = function(e) {
				try {
					return D.decodeString(e, !0)
				} catch (t) {
					console.error("base64Decode failed: ", t)
				}
				return null
			};
		const F = () => function() {
				if ("undefined" !== typeof self) return self;
				if ("undefined" !== typeof window) return window;
				if ("undefined" !== typeof n.g) return n.g;
				throw new Error("Unable to locate global object.")
			}().__FIREBASE_DEFAULTS__,
			U = () => {
				try {
					return F() || (() => {
						if ("undefined" === typeof process) return;
						const e = {
							NODE_ENV: "production",
							PUBLIC_URL: "",
							WDS_SOCKET_HOST: void 0,
							WDS_SOCKET_PATH: void 0,
							WDS_SOCKET_PORT: void 0,
							FAST_REFRESH: !0,
							REACT_APP_FUNCTION_URL: "https://us-central1-svg-pattern-builder.cloudfunctions.net/createCheckoutSession",
							REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "763252124716",
							REACT_APP_STRIPE_PUBLISHABLE_KEY: "pk_live_51PbwQ1Dp5eVkEj1ma2mfuGlznwIsL8BDzvduUOCkdstKeXhkkGq6PlHD4WD5AoJqsp8kXXz3lT3dpKJVq7U3mdAn00DNOLwxG8",
							REACT_APP_FIREBASE_MEASUREMENT_ID: "G-FK88VDZ0CL",
							REACT_APP_FIREBASE_STORAGE_BUCKET: "svg-pattern-builder.appspot.com",
							REACT_APP_FIREBASE_AUTH_DOMAIN: "svg-pattern-builder.firebaseapp.com",
							REACT_APP_FIREBASE_PROJECT_ID: "svg-pattern-builder",
							REACT_APP_FIREBASE_APP_ID: "1:763252124716:web:dc5ea4a1ec0bca5b4db589",
							REACT_APP_FUNCTION_URL_LOCAL: "http://127.0.0.1:5001/svg-pattern-builder/us-central1/createCheckoutSession",
							REACT_APP_FIREBASE_API_KEY: "AIzaSyBE2S1MOKkEZGsB1Ji4DPBwZLferelrIr8"
						}.__FIREBASE_DEFAULTS__;
						return e ? JSON.parse(e) : void 0
					})() || (() => {
						if ("undefined" === typeof document) return;
						let e;
						try {
							e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
						} catch (n) {
							return
						}
						const t = e && M(e[1]);
						return t && JSON.parse(t)
					})()
				} catch (e) {
					return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))
				}
			},
			V = e => {
				var t, n;
				return null === (n = null === (t = U()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === n ? void 0 : n[e]
			},
			z = () => {
				var e;
				return null === (e = U()) || void 0 === e ? void 0 : e.config
			},
			B = e => {
				var t;
				return null === (t = U()) || void 0 === t ? void 0 : t["_".concat(e)]
			};
		class G {
			constructor() {
				this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((e, t) => {
					this.resolve = e, this.reject = t
				}))
			}
			wrapCallback(e) {
				return (t, n) => {
					t ? this.reject(t) : this.resolve(n), "function" === typeof e && (this.promise.catch((() => {})), 1 === e.length ? e(t) : e(t, n))
				}
			}
		}

		function q() {
			return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
		}

		function H() {
			return ! function() {
				var e;
				const t = null === (e = U()) || void 0 === e ? void 0 : e.forceEnvironment;
				if ("node" === t) return !0;
				if ("browser" === t) return !1;
				try {
					return "[object process]" === Object.prototype.toString.call(n.g.process)
				} catch (r) {
					return !1
				}
			}() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
		}

		function W() {
			try {
				return "object" === typeof indexedDB
			} catch (e) {
				return !1
			}
		}
		class K extends Error {
			constructor(e, t, n) {
				super(t), this.code = e, this.customData = n, this.name = "FirebaseError", Object.setPrototypeOf(this, K.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Q.prototype.create)
			}
		}
		class Q {
			constructor(e, t, n) {
				this.service = e, this.serviceName = t, this.errors = n
			}
			create(e) {
				const t = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
					n = "".concat(this.service, "/").concat(e),
					r = this.errors[e],
					i = r ? function(e, t) {
						return e.replace(X, ((e, n) => {
							const r = t[n];
							return null != r ? String(r) : "<".concat(n, "?>")
						}))
					}(r, t) : "Error",
					a = "".concat(this.serviceName, ": ").concat(i, " (").concat(n, ").");
				return new K(n, a, t)
			}
		}
		const X = /\{\$([^}]+)}/g;

		function Y(e, t) {
			if (e === t) return !0;
			const n = Object.keys(e),
				r = Object.keys(t);
			for (const i of n) {
				if (!r.includes(i)) return !1;
				const n = e[i],
					a = t[i];
				if ($(n) && $(a)) {
					if (!Y(n, a)) return !1
				} else if (n !== a) return !1
			}
			for (const i of r)
				if (!n.includes(i)) return !1;
			return !0
		}

		function $(e) {
			return null !== e && "object" === typeof e
		}

		function J(e) {
			const t = [];
			for (const [n, r] of Object.entries(e)) Array.isArray(r) ? r.forEach((e => {
				t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
			})) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
			return t.length ? "&" + t.join("&") : ""
		}

		function Z(e) {
			const t = {};
			return e.replace(/^\?/, "").split("&").forEach((e => {
				if (e) {
					const [n, r] = e.split("=");
					t[decodeURIComponent(n)] = decodeURIComponent(r)
				}
			})), t
		}

		function ee(e) {
			const t = e.indexOf("?");
			if (!t) return "";
			const n = e.indexOf("#", t);
			return e.substring(t, n > 0 ? n : void 0)
		}
		class te {
			constructor(e, t) {
				this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then((() => {
					e(this)
				})).catch((e => {
					this.error(e)
				}))
			}
			next(e) {
				this.forEachObserver((t => {
					t.next(e)
				}))
			}
			error(e) {
				this.forEachObserver((t => {
					t.error(e)
				})), this.close(e)
			}
			complete() {
				this.forEachObserver((e => {
					e.complete()
				})), this.close()
			}
			subscribe(e, t, n) {
				let r;
				if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
				r = function(e, t) {
					if ("object" !== typeof e || null === e) return !1;
					for (const n of t)
						if (n in e && "function" === typeof e[n]) return !0;
					return !1
				}(e, ["next", "error", "complete"]) ? e : {
					next: e,
					error: t,
					complete: n
				}, void 0 === r.next && (r.next = ne), void 0 === r.error && (r.error = ne), void 0 === r.complete && (r.complete = ne);
				const i = this.unsubscribeOne.bind(this, this.observers.length);
				return this.finalized && this.task.then((() => {
					try {
						this.finalError ? r.error(this.finalError) : r.complete()
					} catch (e) {}
				})), this.observers.push(r), i
			}
			unsubscribeOne(e) {
				void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
			}
			forEachObserver(e) {
				if (!this.finalized)
					for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e)
			}
			sendOne(e, t) {
				this.task.then((() => {
					if (void 0 !== this.observers && void 0 !== this.observers[e]) try {
						t(this.observers[e])
					} catch (n) {
						"undefined" !== typeof console && console.error && console.error(n)
					}
				}))
			}
			close(e) {
				this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then((() => {
					this.observers = void 0, this.onNoObservers = void 0
				})))
			}
		}

		function ne() {}

		function re(e) {
			return e && e._delegate ? e._delegate : e
		}
		class ie {
			constructor(e, t, n) {
				this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
			}
			setInstantiationMode(e) {
				return this.instantiationMode = e, this
			}
			setMultipleInstances(e) {
				return this.multipleInstances = e, this
			}
			setServiceProps(e) {
				return this.serviceProps = e, this
			}
			setInstanceCreatedCallback(e) {
				return this.onInstanceCreated = e, this
			}
		}
		const ae = "[DEFAULT]";
		class se {
			constructor(e, t) {
				this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
			}
			get(e) {
				const t = this.normalizeInstanceIdentifier(e);
				if (!this.instancesDeferred.has(t)) {
					const e = new G;
					if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
						const n = this.getOrInitializeService({
							instanceIdentifier: t
						});
						n && e.resolve(n)
					} catch (n) {}
				}
				return this.instancesDeferred.get(t).promise
			}
			getImmediate(e) {
				var t;
				const n = this.normalizeInstanceIdentifier(null === e || void 0 === e ? void 0 : e.identifier),
					r = null !== (t = null === e || void 0 === e ? void 0 : e.optional) && void 0 !== t && t;
				if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
					if (r) return null;
					throw Error("Service ".concat(this.name, " is not available"))
				}
				try {
					return this.getOrInitializeService({
						instanceIdentifier: n
					})
				} catch (i) {
					if (r) return null;
					throw i
				}
			}
			getComponent() {
				return this.component
			}
			setComponent(e) {
				if (e.name !== this.name) throw Error("Mismatching Component ".concat(e.name, " for Provider ").concat(this.name, "."));
				if (this.component) throw Error("Component for ".concat(this.name, " has already been provided"));
				if (this.component = e, this.shouldAutoInitialize()) {
					if (function(e) {
							return "EAGER" === e.instantiationMode
						}(e)) try {
						this.getOrInitializeService({
							instanceIdentifier: ae
						})
					} catch (t) {}
					for (const [e, n] of this.instancesDeferred.entries()) {
						const r = this.normalizeInstanceIdentifier(e);
						try {
							const e = this.getOrInitializeService({
								instanceIdentifier: r
							});
							n.resolve(e)
						} catch (t) {}
					}
				}
			}
			clearInstance() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae;
				this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
			}
			async delete() {
				const e = Array.from(this.instances.values());
				await Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))])
			}
			isComponentSet() {
				return null != this.component
			}
			isInitialized() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae;
				return this.instances.has(e)
			}
			getOptions() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae;
				return this.instancesOptions.get(e) || {}
			}
			initialize() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				const {
					options: t = {}
				} = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
				if (this.isInitialized(n)) throw Error("".concat(this.name, "(").concat(n, ") has already been initialized"));
				if (!this.isComponentSet()) throw Error("Component ".concat(this.name, " has not been registered yet"));
				const r = this.getOrInitializeService({
					instanceIdentifier: n,
					options: t
				});
				for (const [i, a] of this.instancesDeferred.entries()) {
					n === this.normalizeInstanceIdentifier(i) && a.resolve(r)
				}
				return r
			}
			onInit(e, t) {
				var n;
				const r = this.normalizeInstanceIdentifier(t),
					i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
				i.add(e), this.onInitCallbacks.set(r, i);
				const a = this.instances.get(r);
				return a && e(a, r), () => {
					i.delete(e)
				}
			}
			invokeOnInitCallbacks(e, t) {
				const n = this.onInitCallbacks.get(t);
				if (n)
					for (const i of n) try {
						i(e, t)
					} catch (r) {}
			}
			getOrInitializeService(e) {
				let {
					instanceIdentifier: t,
					options: n = {}
				} = e, r = this.instances.get(t);
				if (!r && this.component && (r = this.component.instanceFactory(this.container, {
						instanceIdentifier: (i = t, i === ae ? void 0 : i),
						options: n
					}), this.instances.set(t, r), this.instancesOptions.set(t, n), this.invokeOnInitCallbacks(r, t), this.component.onInstanceCreated)) try {
					this.component.onInstanceCreated(this.container, t, r)
				} catch (a) {}
				var i;
				return r || null
			}
			normalizeInstanceIdentifier() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae;
				return this.component ? this.component.multipleInstances ? e : ae : e
			}
			shouldAutoInitialize() {
				return !!this.component && "EXPLICIT" !== this.component.instantiationMode
			}
		}
		class oe {
			constructor(e) {
				this.name = e, this.providers = new Map
			}
			addComponent(e) {
				const t = this.getProvider(e.name);
				if (t.isComponentSet()) throw new Error("Component ".concat(e.name, " has already been registered with ").concat(this.name));
				t.setComponent(e)
			}
			addOrOverwriteComponent(e) {
				this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
			}
			getProvider(e) {
				if (this.providers.has(e)) return this.providers.get(e);
				const t = new se(e, this);
				return this.providers.set(e, t), t
			}
			getProviders() {
				return Array.from(this.providers.values())
			}
		}
		const le = [];
		var ce;
		! function(e) {
			e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
		}(ce || (ce = {}));
		const ue = {
				debug: ce.DEBUG,
				verbose: ce.VERBOSE,
				info: ce.INFO,
				warn: ce.WARN,
				error: ce.ERROR,
				silent: ce.SILENT
			},
			de = ce.INFO,
			he = {
				[ce.DEBUG]: "log",
				[ce.VERBOSE]: "log",
				[ce.INFO]: "info",
				[ce.WARN]: "warn",
				[ce.ERROR]: "error"
			},
			fe = function(e, t) {
				if (t < e.logLevel) return;
				const n = (new Date).toISOString(),
					r = he[t];
				if (!r) throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t, ")"));
				for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) a[s - 2] = arguments[s];
				console[r]("[".concat(n, "]  ").concat(e.name, ":"), ...a)
			};
		class pe {
			constructor(e) {
				this.name = e, this._logLevel = de, this._logHandler = fe, this._userLogHandler = null, le.push(this)
			}
			get logLevel() {
				return this._logLevel
			}
			set logLevel(e) {
				if (!(e in ce)) throw new TypeError('Invalid value "'.concat(e, '" assigned to `logLevel`'));
				this._logLevel = e
			}
			setLogLevel(e) {
				this._logLevel = "string" === typeof e ? ue[e] : e
			}
			get logHandler() {
				return this._logHandler
			}
			set logHandler(e) {
				if ("function" !== typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
				this._logHandler = e
			}
			get userLogHandler() {
				return this._userLogHandler
			}
			set userLogHandler(e) {
				this._userLogHandler = e
			}
			debug() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				this._userLogHandler && this._userLogHandler(this, ce.DEBUG, ...t), this._logHandler(this, ce.DEBUG, ...t)
			}
			log() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				this._userLogHandler && this._userLogHandler(this, ce.VERBOSE, ...t), this._logHandler(this, ce.VERBOSE, ...t)
			}
			info() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				this._userLogHandler && this._userLogHandler(this, ce.INFO, ...t), this._logHandler(this, ce.INFO, ...t)
			}
			warn() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				this._userLogHandler && this._userLogHandler(this, ce.WARN, ...t), this._logHandler(this, ce.WARN, ...t)
			}
			error() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				this._userLogHandler && this._userLogHandler(this, ce.ERROR, ...t), this._logHandler(this, ce.ERROR, ...t)
			}
		}
		const ge = (e, t) => t.some((t => e instanceof t));
		let me, ve;
		const ye = new WeakMap,
			be = new WeakMap,
			we = new WeakMap,
			xe = new WeakMap,
			ke = new WeakMap;
		let Se = {
			get(e, t, n) {
				if (e instanceof IDBTransaction) {
					if ("done" === t) return be.get(e);
					if ("objectStoreNames" === t) return e.objectStoreNames || we.get(e);
					if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
				}
				return Ee(e[t])
			},
			set: (e, t, n) => (e[t] = n, !0),
			has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
		};

		function Ce(e) {
			return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (ve || (ve = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function() {
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return e.apply(Te(this), n), Ee(ye.get(this))
			} : function() {
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return Ee(e.apply(Te(this), n))
			} : function(t) {
				for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
				const a = e.call(Te(this), t, ...r);
				return we.set(a, t.sort ? t.sort() : [t]), Ee(a)
			}
		}

		function _e(e) {
			return "function" === typeof e ? Ce(e) : (e instanceof IDBTransaction && function(e) {
				if (be.has(e)) return;
				const t = new Promise(((t, n) => {
					const r = () => {
							e.removeEventListener("complete", i), e.removeEventListener("error", a), e.removeEventListener("abort", a)
						},
						i = () => {
							t(), r()
						},
						a = () => {
							n(e.error || new DOMException("AbortError", "AbortError")), r()
						};
					e.addEventListener("complete", i), e.addEventListener("error", a), e.addEventListener("abort", a)
				}));
				be.set(e, t)
			}(e), ge(e, me || (me = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e, Se) : e)
		}

		function Ee(e) {
			if (e instanceof IDBRequest) return function(e) {
				const t = new Promise(((t, n) => {
					const r = () => {
							e.removeEventListener("success", i), e.removeEventListener("error", a)
						},
						i = () => {
							t(Ee(e.result)), r()
						},
						a = () => {
							n(e.error), r()
						};
					e.addEventListener("success", i), e.addEventListener("error", a)
				}));
				return t.then((t => {
					t instanceof IDBCursor && ye.set(t, e)
				})).catch((() => {})), ke.set(t, e), t
			}(e);
			if (xe.has(e)) return xe.get(e);
			const t = _e(e);
			return t !== e && (xe.set(e, t), ke.set(t, e)), t
		}
		const Te = e => ke.get(e);
		const Ie = ["get", "getKey", "getAll", "getAllKeys", "count"],
			Ne = ["put", "add", "delete", "clear"],
			Re = new Map;

		function Ae(e, t) {
			if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t) return;
			if (Re.get(t)) return Re.get(t);
			const n = t.replace(/FromIndex$/, ""),
				r = t !== n,
				i = Ne.includes(n);
			if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !i && !Ie.includes(n)) return;
			const a = async function(e) {
				const t = this.transaction(e, i ? "readwrite" : "readonly");
				let a = t.store;
				for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) o[l - 1] = arguments[l];
				return r && (a = a.index(o.shift())), (await Promise.all([a[n](...o), i && t.done]))[0]
			};
			return Re.set(t, a), a
		}
		Se = (e => ({
			...e,
			get: (t, n, r) => Ae(t, n) || e.get(t, n, r),
			has: (t, n) => !!Ae(t, n) || e.has(t, n)
		}))(Se);
		class Pe {
			constructor(e) {
				this.container = e
			}
			getPlatformInfoString() {
				return this.container.getProviders().map((e => {
					if (function(e) {
							const t = e.getComponent();
							return "VERSION" === (null === t || void 0 === t ? void 0 : t.type)
						}(e)) {
						const t = e.getImmediate();
						return "".concat(t.library, "/").concat(t.version)
					}
					return null
				})).filter((e => e)).join(" ")
			}
		}
		const je = "@firebase/app",
			De = "0.10.6",
			Oe = new pe("@firebase/app"),
			Le = "@firebase/app-compat",
			Me = "@firebase/analytics-compat",
			Fe = "@firebase/analytics",
			Ue = "@firebase/app-check-compat",
			Ve = "@firebase/app-check",
			ze = "@firebase/auth",
			Be = "@firebase/auth-compat",
			Ge = "@firebase/database",
			qe = "@firebase/database-compat",
			He = "@firebase/functions",
			We = "@firebase/functions-compat",
			Ke = "@firebase/installations",
			Qe = "@firebase/installations-compat",
			Xe = "@firebase/messaging",
			Ye = "@firebase/messaging-compat",
			$e = "@firebase/performance",
			Je = "@firebase/performance-compat",
			Ze = "@firebase/remote-config",
			et = "@firebase/remote-config-compat",
			tt = "@firebase/storage",
			nt = "@firebase/storage-compat",
			rt = "@firebase/firestore",
			it = "@firebase/vertexai-preview",
			at = "@firebase/firestore-compat",
			st = "firebase",
			ot = "[DEFAULT]",
			lt = {
				[je]: "fire-core",
				[Le]: "fire-core-compat",
				[Fe]: "fire-analytics",
				[Me]: "fire-analytics-compat",
				[Ve]: "fire-app-check",
				[Ue]: "fire-app-check-compat",
				[ze]: "fire-auth",
				[Be]: "fire-auth-compat",
				[Ge]: "fire-rtdb",
				[qe]: "fire-rtdb-compat",
				[He]: "fire-fn",
				[We]: "fire-fn-compat",
				[Ke]: "fire-iid",
				[Qe]: "fire-iid-compat",
				[Xe]: "fire-fcm",
				[Ye]: "fire-fcm-compat",
				[$e]: "fire-perf",
				[Je]: "fire-perf-compat",
				[Ze]: "fire-rc",
				[et]: "fire-rc-compat",
				[tt]: "fire-gcs",
				[nt]: "fire-gcs-compat",
				[rt]: "fire-fst",
				[at]: "fire-fst-compat",
				[it]: "fire-vertex",
				"fire-js": "fire-js",
				[st]: "fire-js-all"
			},
			ct = new Map,
			ut = new Map,
			dt = new Map;

		function ht(e, t) {
			try {
				e.container.addComponent(t)
			} catch (n) {
				Oe.debug("Component ".concat(t.name, " failed to register with FirebaseApp ").concat(e.name), n)
			}
		}

		function ft(e) {
			const t = e.name;
			if (dt.has(t)) return Oe.debug("There were multiple attempts to register component ".concat(t, ".")), !1;
			dt.set(t, e);
			for (const n of ct.values()) ht(n, e);
			for (const n of ut.values()) ht(n, e);
			return !0
		}

		function pt(e, t) {
			const n = e.container.getProvider("heartbeat").getImmediate({
				optional: !0
			});
			return n && n.triggerHeartbeat(), e.container.getProvider(t)
		}

		function gt(e) {
			return void 0 !== e.settings
		}
		const mt = new Q("app", "Firebase", {
			"no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
			"bad-app-name": "Illegal App name: '{$appName}'",
			"duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
			"app-deleted": "Firebase App named '{$appName}' already deleted",
			"server-app-deleted": "Firebase Server App has been deleted",
			"no-options": "Need to provide options, when not being deployed to hosting via source.",
			"invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
			"invalid-log-argument": "First argument to `onLog` must be null or a function.",
			"idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
			"idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
			"idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
			"idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
			"finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
			"invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
		});
		class vt {
			constructor(e, t, n) {
				this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new ie("app", (() => this), "PUBLIC"))
			}
			get automaticDataCollectionEnabled() {
				return this.checkDestroyed(), this._automaticDataCollectionEnabled
			}
			set automaticDataCollectionEnabled(e) {
				this.checkDestroyed(), this._automaticDataCollectionEnabled = e
			}
			get name() {
				return this.checkDestroyed(), this._name
			}
			get options() {
				return this.checkDestroyed(), this._options
			}
			get config() {
				return this.checkDestroyed(), this._config
			}
			get container() {
				return this._container
			}
			get isDeleted() {
				return this._isDeleted
			}
			set isDeleted(e) {
				this._isDeleted = e
			}
			checkDestroyed() {
				if (this.isDeleted) throw mt.create("app-deleted", {
					appName: this._name
				})
			}
		}
		const yt = "10.12.3";

		function bt(e) {
			let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = e;
			if ("object" !== typeof t) {
				t = {
					name: t
				}
			}
			const r = Object.assign({
					name: ot,
					automaticDataCollectionEnabled: !1
				}, t),
				i = r.name;
			if ("string" !== typeof i || !i) throw mt.create("bad-app-name", {
				appName: String(i)
			});
			if (n || (n = z()), !n) throw mt.create("no-options");
			const a = ct.get(i);
			if (a) {
				if (Y(n, a.options) && Y(r, a.config)) return a;
				throw mt.create("duplicate-app", {
					appName: i
				})
			}
			const s = new oe(i);
			for (const l of dt.values()) s.addComponent(l);
			const o = new vt(n, r, s);
			return ct.set(i, o), o
		}

		function wt() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot;
			const t = ct.get(e);
			if (!t && e === ot && z()) return bt();
			if (!t) throw mt.create("no-app", {
				appName: e
			});
			return t
		}

		function xt(e, t, n) {
			var r;
			let i = null !== (r = lt[e]) && void 0 !== r ? r : e;
			n && (i += "-".concat(n));
			const a = i.match(/\s|\//),
				s = t.match(/\s|\//);
			if (a || s) {
				const e = ['Unable to register library "'.concat(i, '" with version "').concat(t, '":')];
				return a && e.push('library name "'.concat(i, '" contains illegal characters (whitespace or "/")')), a && s && e.push("and"), s && e.push('version name "'.concat(t, '" contains illegal characters (whitespace or "/")')), void Oe.warn(e.join(" "))
			}
			ft(new ie("".concat(i, "-version"), (() => ({
				library: i,
				version: t
			})), "VERSION"))
		}
		const kt = "firebase-heartbeat-database",
			St = 1,
			Ct = "firebase-heartbeat-store";
		let _t = null;

		function Et() {
			return _t || (_t = function(e, t) {
				let {
					blocked: n,
					upgrade: r,
					blocking: i,
					terminated: a
				} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				const s = indexedDB.open(e, t),
					o = Ee(s);
				return r && s.addEventListener("upgradeneeded", (e => {
					r(Ee(s.result), e.oldVersion, e.newVersion, Ee(s.transaction), e)
				})), n && s.addEventListener("blocked", (e => n(e.oldVersion, e.newVersion, e))), o.then((e => {
					a && e.addEventListener("close", (() => a())), i && e.addEventListener("versionchange", (e => i(e.oldVersion, e.newVersion, e)))
				})).catch((() => {})), o
			}(kt, St, {
				upgrade: (e, t) => {
					if (0 === t) try {
						e.createObjectStore(Ct)
					} catch (n) {
						console.warn(n)
					}
				}
			}).catch((e => {
				throw mt.create("idb-open", {
					originalErrorMessage: e.message
				})
			}))), _t
		}
		async function Tt(e, t) {
			try {
				const n = (await Et()).transaction(Ct, "readwrite"),
					r = n.objectStore(Ct);
				await r.put(t, It(e)), await n.done
			} catch (n) {
				if (n instanceof K) Oe.warn(n.message);
				else {
					const e = mt.create("idb-set", {
						originalErrorMessage: null === n || void 0 === n ? void 0 : n.message
					});
					Oe.warn(e.message)
				}
			}
		}

		function It(e) {
			return "".concat(e.name, "!").concat(e.options.appId)
		}
		class Nt {
			constructor(e) {
				this.container = e, this._heartbeatsCache = null;
				const t = this.container.getProvider("app").getImmediate();
				this._storage = new At(t), this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e, e)))
			}
			async triggerHeartbeat() {
				var e, t;
				const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
					r = Rt();
				if ((null != (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || (this._heartbeatsCache = await this._heartbeatsCachePromise, null != (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats))) && this._heartbeatsCache.lastSentHeartbeatDate !== r && !this._heartbeatsCache.heartbeats.some((e => e.date === r))) return this._heartbeatsCache.heartbeats.push({
					date: r,
					agent: n
				}), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => {
					const t = new Date(e.date).valueOf();
					return Date.now() - t <= 2592e6
				})), this._storage.overwrite(this._heartbeatsCache)
			}
			async getHeartbeatsHeader() {
				var e;
				if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length) return "";
				const t = Rt(),
					{
						heartbeatsToSend: n,
						unsentEntries: r
					} = function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
						const n = [];
						let r = e.slice();
						for (const i of e) {
							const e = n.find((e => e.agent === i.agent));
							if (e) {
								if (e.dates.push(i.date), Pt(n) > t) {
									e.dates.pop();
									break
								}
							} else if (n.push({
									agent: i.agent,
									dates: [i.date]
								}), Pt(n) > t) {
								n.pop();
								break
							}
							r = r.slice(1)
						}
						return {
							heartbeatsToSend: n,
							unsentEntries: r
						}
					}(this._heartbeatsCache.heartbeats),
					i = L(JSON.stringify({
						version: 2,
						heartbeats: n
					}));
				return this._heartbeatsCache.lastSentHeartbeatDate = t, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i
			}
		}

		function Rt() {
			return (new Date).toISOString().substring(0, 10)
		}
		class At {
			constructor(e) {
				this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
			}
			async runIndexedDBEnvironmentCheck() {
				return !!W() && new Promise(((e, t) => {
					try {
						let n = !0;
						const r = "validate-browser-context-for-indexeddb-analytics-module",
							i = self.indexedDB.open(r);
						i.onsuccess = () => {
							i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
						}, i.onupgradeneeded = () => {
							n = !1
						}, i.onerror = () => {
							var e;
							t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
						}
					} catch (n) {
						t(n)
					}
				})).then((() => !0)).catch((() => !1))
			}
			async read() {
				if (await this._canUseIndexedDBPromise) {
					const e = await async function(e) {
						try {
							const t = (await Et()).transaction(Ct),
								n = await t.objectStore(Ct).get(It(e));
							return await t.done, n
						} catch (t) {
							if (t instanceof K) Oe.warn(t.message);
							else {
								const e = mt.create("idb-get", {
									originalErrorMessage: null === t || void 0 === t ? void 0 : t.message
								});
								Oe.warn(e.message)
							}
						}
					}(this.app);
					return (null === e || void 0 === e ? void 0 : e.heartbeats) ? e : {
						heartbeats: []
					}
				}
				return {
					heartbeats: []
				}
			}
			async overwrite(e) {
				var t;
				if (await this._canUseIndexedDBPromise) {
					const n = await this.read();
					return Tt(this.app, {
						lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
						heartbeats: e.heartbeats
					})
				}
			}
			async add(e) {
				var t;
				if (await this._canUseIndexedDBPromise) {
					const n = await this.read();
					return Tt(this.app, {
						lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
						heartbeats: [...n.heartbeats, ...e.heartbeats]
					})
				}
			}
		}

		function Pt(e) {
			return L(JSON.stringify({
				version: 2,
				heartbeats: e
			})).length
		}
		var jt;
		jt = "", ft(new ie("platform-logger", (e => new Pe(e)), "PRIVATE")), ft(new ie("heartbeat", (e => new Nt(e)), "PRIVATE")), xt(je, De, jt), xt(je, De, "esm2017"), xt("fire-js", "");
		var Dt, Ot, Lt = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {},
			Mt = {};
		(function() {
			var e;

			function t() {
				this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.B = Array(this.blockSize), this.o = this.h = 0, this.s()
			}

			function n(e, t, n) {
				n || (n = 0);
				var r = Array(16);
				if ("string" === typeof t)
					for (var i = 0; 16 > i; ++i) r[i] = t.charCodeAt(n++) | t.charCodeAt(n++) << 8 | t.charCodeAt(n++) << 16 | t.charCodeAt(n++) << 24;
				else
					for (i = 0; 16 > i; ++i) r[i] = t[n++] | t[n++] << 8 | t[n++] << 16 | t[n++] << 24;
				t = e.g[0], n = e.g[1], i = e.g[2];
				var a = e.g[3],
					s = t + (a ^ n & (i ^ a)) + r[0] + 3614090360 & 4294967295;
				s = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = n + (s << 7 & 4294967295 | s >>> 25)) + ((s = a + (i ^ t & (n ^ i)) + r[1] + 3905402710 & 4294967295) << 12 & 4294967295 | s >>> 20)) + ((s = i + (n ^ a & (t ^ n)) + r[2] + 606105819 & 4294967295) << 17 & 4294967295 | s >>> 15)) + ((s = n + (t ^ i & (a ^ t)) + r[3] + 3250441966 & 4294967295) << 22 & 4294967295 | s >>> 10)) + ((s = t + (a ^ n & (i ^ a)) + r[4] + 4118548399 & 4294967295) << 7 & 4294967295 | s >>> 25)) + ((s = a + (i ^ t & (n ^ i)) + r[5] + 1200080426 & 4294967295) << 12 & 4294967295 | s >>> 20)) + ((s = i + (n ^ a & (t ^ n)) + r[6] + 2821735955 & 4294967295) << 17 & 4294967295 | s >>> 15)) + ((s = n + (t ^ i & (a ^ t)) + r[7] + 4249261313 & 4294967295) << 22 & 4294967295 | s >>> 10)) + ((s = t + (a ^ n & (i ^ a)) + r[8] + 1770035416 & 4294967295) << 7 & 4294967295 | s >>> 25)) + ((s = a + (i ^ t & (n ^ i)) + r[9] + 2336552879 & 4294967295) << 12 & 4294967295 | s >>> 20)) + ((s = i + (n ^ a & (t ^ n)) + r[10] + 4294925233 & 4294967295) << 17 & 4294967295 | s >>> 15)) + ((s = n + (t ^ i & (a ^ t)) + r[11] + 2304563134 & 4294967295) << 22 & 4294967295 | s >>> 10)) + ((s = t + (a ^ n & (i ^ a)) + r[12] + 1804603682 & 4294967295) << 7 & 4294967295 | s >>> 25)) + ((s = a + (i ^ t & (n ^ i)) + r[13] + 4254626195 & 4294967295) << 12 & 4294967295 | s >>> 20)) + ((s = i + (n ^ a & (t ^ n)) + r[14] + 2792965006 & 4294967295) << 17 & 4294967295 | s >>> 15)) + ((s = n + (t ^ i & (a ^ t)) + r[15] + 1236535329 & 4294967295) << 22 & 4294967295 | s >>> 10)) + ((s = t + (i ^ a & (n ^ i)) + r[1] + 4129170786 & 4294967295) << 5 & 4294967295 | s >>> 27)) + ((s = a + (n ^ i & (t ^ n)) + r[6] + 3225465664 & 4294967295) << 9 & 4294967295 | s >>> 23)) + ((s = i + (t ^ n & (a ^ t)) + r[11] + 643717713 & 4294967295) << 14 & 4294967295 | s >>> 18)) + ((s = n + (a ^ t & (i ^ a)) + r[0] + 3921069994 & 4294967295) << 20 & 4294967295 | s >>> 12)) + ((s = t + (i ^ a & (n ^ i)) + r[5] + 3593408605 & 4294967295) << 5 & 4294967295 | s >>> 27)) + ((s = a + (n ^ i & (t ^ n)) + r[10] + 38016083 & 4294967295) << 9 & 4294967295 | s >>> 23)) + ((s = i + (t ^ n & (a ^ t)) + r[15] + 3634488961 & 4294967295) << 14 & 4294967295 | s >>> 18)) + ((s = n + (a ^ t & (i ^ a)) + r[4] + 3889429448 & 4294967295) << 20 & 4294967295 | s >>> 12)) + ((s = t + (i ^ a & (n ^ i)) + r[9] + 568446438 & 4294967295) << 5 & 4294967295 | s >>> 27)) + ((s = a + (n ^ i & (t ^ n)) + r[14] + 3275163606 & 4294967295) << 9 & 4294967295 | s >>> 23)) + ((s = i + (t ^ n & (a ^ t)) + r[3] + 4107603335 & 4294967295) << 14 & 4294967295 | s >>> 18)) + ((s = n + (a ^ t & (i ^ a)) + r[8] + 1163531501 & 4294967295) << 20 & 4294967295 | s >>> 12)) + ((s = t + (i ^ a & (n ^ i)) + r[13] + 2850285829 & 4294967295) << 5 & 4294967295 | s >>> 27)) + ((s = a + (n ^ i & (t ^ n)) + r[2] + 4243563512 & 4294967295) << 9 & 4294967295 | s >>> 23)) + ((s = i + (t ^ n & (a ^ t)) + r[7] + 1735328473 & 4294967295) << 14 & 4294967295 | s >>> 18)) + ((s = n + (a ^ t & (i ^ a)) + r[12] + 2368359562 & 4294967295) << 20 & 4294967295 | s >>> 12)) + ((s = t + (n ^ i ^ a) + r[5] + 4294588738 & 4294967295) << 4 & 4294967295 | s >>> 28)) + ((s = a + (t ^ n ^ i) + r[8] + 2272392833 & 4294967295) << 11 & 4294967295 | s >>> 21)) + ((s = i + (a ^ t ^ n) + r[11] + 1839030562 & 4294967295) << 16 & 4294967295 | s >>> 16)) + ((s = n + (i ^ a ^ t) + r[14] + 4259657740 & 4294967295) << 23 & 4294967295 | s >>> 9)) + ((s = t + (n ^ i ^ a) + r[1] + 2763975236 & 4294967295) << 4 & 4294967295 | s >>> 28)) + ((s = a + (t ^ n ^ i) + r[4] + 1272893353 & 4294967295) << 11 & 4294967295 | s >>> 21)) + ((s = i + (a ^ t ^ n) + r[7] + 4139469664 & 4294967295) << 16 & 4294967295 | s >>> 16)) + ((s = n + (i ^ a ^ t) + r[10] + 3200236656 & 4294967295) << 23 & 4294967295 | s >>> 9)) + ((s = t + (n ^ i ^ a) + r[13] + 681279174 & 4294967295) << 4 & 4294967295 | s >>> 28)) + ((s = a + (t ^ n ^ i) + r[0] + 3936430074 & 4294967295) << 11 & 4294967295 | s >>> 21)) + ((s = i + (a ^ t ^ n) + r[3] + 3572445317 & 4294967295) << 16 & 4294967295 | s >>> 16)) + ((s = n + (i ^ a ^ t) + r[6] + 76029189 & 4294967295) << 23 & 4294967295 | s >>> 9)) + ((s = t + (n ^ i ^ a) + r[9] + 3654602809 & 4294967295) << 4 & 4294967295 | s >>> 28)) + ((s = a + (t ^ n ^ i) + r[12] + 3873151461 & 4294967295) << 11 & 4294967295 | s >>> 21)) + ((s = i + (a ^ t ^ n) + r[15] + 530742520 & 4294967295) << 16 & 4294967295 | s >>> 16)) + ((s = n + (i ^ a ^ t) + r[2] + 3299628645 & 4294967295) << 23 & 4294967295 | s >>> 9)) + ((s = t + (i ^ (n | ~a)) + r[0] + 4096336452 & 4294967295) << 6 & 4294967295 | s >>> 26)) + ((s = a + (n ^ (t | ~i)) + r[7] + 1126891415 & 4294967295) << 10 & 4294967295 | s >>> 22)) + ((s = i + (t ^ (a | ~n)) + r[14] + 2878612391 & 4294967295) << 15 & 4294967295 | s >>> 17)) + ((s = n + (a ^ (i | ~t)) + r[5] + 4237533241 & 4294967295) << 21 & 4294967295 | s >>> 11)) + ((s = t + (i ^ (n | ~a)) + r[12] + 1700485571 & 4294967295) << 6 & 4294967295 | s >>> 26)) + ((s = a + (n ^ (t | ~i)) + r[3] + 2399980690 & 4294967295) << 10 & 4294967295 | s >>> 22)) + ((s = i + (t ^ (a | ~n)) + r[10] + 4293915773 & 4294967295) << 15 & 4294967295 | s >>> 17)) + ((s = n + (a ^ (i | ~t)) + r[1] + 2240044497 & 4294967295) << 21 & 4294967295 | s >>> 11)) + ((s = t + (i ^ (n | ~a)) + r[8] + 1873313359 & 4294967295) << 6 & 4294967295 | s >>> 26)) + ((s = a + (n ^ (t | ~i)) + r[15] + 4264355552 & 4294967295) << 10 & 4294967295 | s >>> 22)) + ((s = i + (t ^ (a | ~n)) + r[6] + 2734768916 & 4294967295) << 15 & 4294967295 | s >>> 17)) + ((s = n + (a ^ (i | ~t)) + r[13] + 1309151649 & 4294967295) << 21 & 4294967295 | s >>> 11)) + ((a = (t = n + ((s = t + (i ^ (n | ~a)) + r[4] + 4149444226 & 4294967295) << 6 & 4294967295 | s >>> 26)) + ((s = a + (n ^ (t | ~i)) + r[11] + 3174756917 & 4294967295) << 10 & 4294967295 | s >>> 22)) ^ ((i = a + ((s = i + (t ^ (a | ~n)) + r[2] + 718787259 & 4294967295) << 15 & 4294967295 | s >>> 17)) | ~t)) + r[9] + 3951481745 & 4294967295, e.g[0] = e.g[0] + t & 4294967295, e.g[1] = e.g[1] + (i + (s << 21 & 4294967295 | s >>> 11)) & 4294967295, e.g[2] = e.g[2] + i & 4294967295, e.g[3] = e.g[3] + a & 4294967295
			}

			function r(e, t) {
				this.h = t;
				for (var n = [], r = !0, i = e.length - 1; 0 <= i; i--) {
					var a = 0 | e[i];
					r && a == t || (n[i] = a, r = !1)
				}
				this.g = n
			}! function(e, t) {
				function n() {}
				n.prototype = t.prototype, e.D = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.C = function(e, n, r) {
					for (var i = Array(arguments.length - 2), a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
					return t.prototype[n].apply(e, i)
				}
			}(t, (function() {
				this.blockSize = -1
			})), t.prototype.s = function() {
				this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.o = this.h = 0
			}, t.prototype.u = function(e, t) {
				void 0 === t && (t = e.length);
				for (var r = t - this.blockSize, i = this.B, a = this.h, s = 0; s < t;) {
					if (0 == a)
						for (; s <= r;) n(this, e, s), s += this.blockSize;
					if ("string" === typeof e) {
						for (; s < t;)
							if (i[a++] = e.charCodeAt(s++), a == this.blockSize) {
								n(this, i), a = 0;
								break
							}
					} else
						for (; s < t;)
							if (i[a++] = e[s++], a == this.blockSize) {
								n(this, i), a = 0;
								break
							}
				}
				this.h = a, this.o += t
			}, t.prototype.v = function() {
				var e = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
				e[0] = 128;
				for (var t = 1; t < e.length - 8; ++t) e[t] = 0;
				var n = 8 * this.o;
				for (t = e.length - 8; t < e.length; ++t) e[t] = 255 & n, n /= 256;
				for (this.u(e), e = Array(16), t = n = 0; 4 > t; ++t)
					for (var r = 0; 32 > r; r += 8) e[n++] = this.g[t] >>> r & 255;
				return e
			};
			var i = {};

			function a(e) {
				return -128 <= e && 128 > e ? function(e, t) {
					var n = i;
					return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : n[e] = t(e)
				}(e, (function(e) {
					return new r([0 | e], 0 > e ? -1 : 0)
				})) : new r([0 | e], 0 > e ? -1 : 0)
			}

			function s(e) {
				if (isNaN(e) || !isFinite(e)) return o;
				if (0 > e) return h(s(-e));
				for (var t = [], n = 1, i = 0; e >= n; i++) t[i] = e / n | 0, n *= 4294967296;
				return new r(t, 0)
			}
			var o = a(0),
				l = a(1),
				c = a(16777216);

			function u(e) {
				if (0 != e.h) return !1;
				for (var t = 0; t < e.g.length; t++)
					if (0 != e.g[t]) return !1;
				return !0
			}

			function d(e) {
				return -1 == e.h
			}

			function h(e) {
				for (var t = e.g.length, n = [], i = 0; i < t; i++) n[i] = ~e.g[i];
				return new r(n, ~e.h).add(l)
			}

			function f(e, t) {
				return e.add(h(t))
			}

			function p(e, t) {
				for (;
					(65535 & e[t]) != e[t];) e[t + 1] += e[t] >>> 16, e[t] &= 65535, t++
			}

			function g(e, t) {
				this.g = e, this.h = t
			}

			function m(e, t) {
				if (u(t)) throw Error("division by zero");
				if (u(e)) return new g(o, o);
				if (d(e)) return t = m(h(e), t), new g(h(t.g), h(t.h));
				if (d(t)) return t = m(e, h(t)), new g(h(t.g), t.h);
				if (30 < e.g.length) {
					if (d(e) || d(t)) throw Error("slowDivide_ only works with positive integers.");
					for (var n = l, r = t; 0 >= r.l(e);) n = v(n), r = v(r);
					var i = y(n, 1),
						a = y(r, 1);
					for (r = y(r, 2), n = y(n, 2); !u(r);) {
						var c = a.add(r);
						0 >= c.l(e) && (i = i.add(n), a = c), r = y(r, 1), n = y(n, 1)
					}
					return t = f(e, i.j(t)), new g(i, t)
				}
				for (i = o; 0 <= e.l(t);) {
					for (n = Math.max(1, Math.floor(e.m() / t.m())), r = 48 >= (r = Math.ceil(Math.log(n) / Math.LN2)) ? 1 : Math.pow(2, r - 48), c = (a = s(n)).j(t); d(c) || 0 < c.l(e);) c = (a = s(n -= r)).j(t);
					u(a) && (a = l), i = i.add(a), e = f(e, c)
				}
				return new g(i, e)
			}

			function v(e) {
				for (var t = e.g.length + 1, n = [], i = 0; i < t; i++) n[i] = e.i(i) << 1 | e.i(i - 1) >>> 31;
				return new r(n, e.h)
			}

			function y(e, t) {
				var n = t >> 5;
				t %= 32;
				for (var i = e.g.length - n, a = [], s = 0; s < i; s++) a[s] = 0 < t ? e.i(s + n) >>> t | e.i(s + n + 1) << 32 - t : e.i(s + n);
				return new r(a, e.h)
			}(e = r.prototype).m = function() {
				if (d(this)) return -h(this).m();
				for (var e = 0, t = 1, n = 0; n < this.g.length; n++) {
					var r = this.i(n);
					e += (0 <= r ? r : 4294967296 + r) * t, t *= 4294967296
				}
				return e
			}, e.toString = function(e) {
				if (2 > (e = e || 10) || 36 < e) throw Error("radix out of range: " + e);
				if (u(this)) return "0";
				if (d(this)) return "-" + h(this).toString(e);
				for (var t = s(Math.pow(e, 6)), n = this, r = "";;) {
					var i = m(n, t).g,
						a = ((0 < (n = f(n, i.j(t))).g.length ? n.g[0] : n.h) >>> 0).toString(e);
					if (u(n = i)) return a + r;
					for (; 6 > a.length;) a = "0" + a;
					r = a + r
				}
			}, e.i = function(e) {
				return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h
			}, e.l = function(e) {
				return d(e = f(this, e)) ? -1 : u(e) ? 0 : 1
			}, e.abs = function() {
				return d(this) ? h(this) : this
			}, e.add = function(e) {
				for (var t = Math.max(this.g.length, e.g.length), n = [], i = 0, a = 0; a <= t; a++) {
					var s = i + (65535 & this.i(a)) + (65535 & e.i(a)),
						o = (s >>> 16) + (this.i(a) >>> 16) + (e.i(a) >>> 16);
					i = o >>> 16, s &= 65535, o &= 65535, n[a] = o << 16 | s
				}
				return new r(n, -2147483648 & n[n.length - 1] ? -1 : 0)
			}, e.j = function(e) {
				if (u(this) || u(e)) return o;
				if (d(this)) return d(e) ? h(this).j(h(e)) : h(h(this).j(e));
				if (d(e)) return h(this.j(h(e)));
				if (0 > this.l(c) && 0 > e.l(c)) return s(this.m() * e.m());
				for (var t = this.g.length + e.g.length, n = [], i = 0; i < 2 * t; i++) n[i] = 0;
				for (i = 0; i < this.g.length; i++)
					for (var a = 0; a < e.g.length; a++) {
						var l = this.i(i) >>> 16,
							f = 65535 & this.i(i),
							g = e.i(a) >>> 16,
							m = 65535 & e.i(a);
						n[2 * i + 2 * a] += f * m, p(n, 2 * i + 2 * a), n[2 * i + 2 * a + 1] += l * m, p(n, 2 * i + 2 * a + 1), n[2 * i + 2 * a + 1] += f * g, p(n, 2 * i + 2 * a + 1), n[2 * i + 2 * a + 2] += l * g, p(n, 2 * i + 2 * a + 2)
					}
				for (i = 0; i < t; i++) n[i] = n[2 * i + 1] << 16 | n[2 * i];
				for (i = t; i < 2 * t; i++) n[i] = 0;
				return new r(n, 0)
			}, e.A = function(e) {
				return m(this, e).h
			}, e.and = function(e) {
				for (var t = Math.max(this.g.length, e.g.length), n = [], i = 0; i < t; i++) n[i] = this.i(i) & e.i(i);
				return new r(n, this.h & e.h)
			}, e.or = function(e) {
				for (var t = Math.max(this.g.length, e.g.length), n = [], i = 0; i < t; i++) n[i] = this.i(i) | e.i(i);
				return new r(n, this.h | e.h)
			}, e.xor = function(e) {
				for (var t = Math.max(this.g.length, e.g.length), n = [], i = 0; i < t; i++) n[i] = this.i(i) ^ e.i(i);
				return new r(n, this.h ^ e.h)
			}, t.prototype.digest = t.prototype.v, t.prototype.reset = t.prototype.s, t.prototype.update = t.prototype.u, Ot = Mt.Md5 = t, r.prototype.add = r.prototype.add, r.prototype.multiply = r.prototype.j, r.prototype.modulo = r.prototype.A, r.prototype.compare = r.prototype.l, r.prototype.toNumber = r.prototype.m, r.prototype.toString = r.prototype.toString, r.prototype.getBits = r.prototype.i, r.fromNumber = s, r.fromString = function e(t, n) {
				if (0 == t.length) throw Error("number format error: empty string");
				if (2 > (n = n || 10) || 36 < n) throw Error("radix out of range: " + n);
				if ("-" == t.charAt(0)) return h(e(t.substring(1), n));
				if (0 <= t.indexOf("-")) throw Error('number format error: interior "-" character');
				for (var r = s(Math.pow(n, 8)), i = o, a = 0; a < t.length; a += 8) {
					var l = Math.min(8, t.length - a),
						c = parseInt(t.substring(a, a + l), n);
					8 > l ? (l = s(Math.pow(n, l)), i = i.j(l).add(s(c))) : i = (i = i.j(r)).add(s(c))
				}
				return i
			}, Dt = Mt.Integer = r
		}).apply("undefined" !== typeof Lt ? Lt : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
		var Ft, Ut, Vt, zt, Bt, Gt, qt, Ht, Wt, Kt = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {},
			Qt = {};
		(function() {
			var e, t = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
				return e == Array.prototype || e == Object.prototype || (e[t] = n.value), e
			};
			var n = function(e) {
				e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof Kt && Kt];
				for (var t = 0; t < e.length; ++t) {
					var n = e[t];
					if (n && n.Math == Math) return n
				}
				throw Error("Cannot find global object")
			}(this);
			! function(e, r) {
				if (r) e: {
					var i = n;e = e.split(".");
					for (var a = 0; a < e.length - 1; a++) {
						var s = e[a];
						if (!(s in i)) break e;
						i = i[s]
					}(r = r(a = i[e = e[e.length - 1]])) != a && null != r && t(i, e, {
						configurable: !0,
						writable: !0,
						value: r
					})
				}
			}("Array.prototype.values", (function(e) {
				return e || function() {
					return function(e, t) {
						e instanceof String && (e += "");
						var n = 0,
							r = !1,
							i = {
								next: function() {
									if (!r && n < e.length) {
										var i = n++;
										return {
											value: t(i, e[i]),
											done: !1
										}
									}
									return r = !0, {
										done: !0,
										value: void 0
									}
								}
							};
						return i[Symbol.iterator] = function() {
							return i
						}, i
					}(this, (function(e, t) {
						return t
					}))
				}
			}));
			var r = r || {},
				i = this || self;

			function a(e) {
				var t = typeof e;
				return "array" == (t = "object" != t ? t : e ? Array.isArray(e) ? "array" : t : "null") || "object" == t && "number" == typeof e.length
			}

			function s(e) {
				var t = typeof e;
				return "object" == t && null != e || "function" == t
			}

			function o(e, t, n) {
				return e.call.apply(e.bind, arguments)
			}

			function l(e, t, n) {
				if (!e) throw Error();
				if (2 < arguments.length) {
					var r = Array.prototype.slice.call(arguments, 2);
					return function() {
						var n = Array.prototype.slice.call(arguments);
						return Array.prototype.unshift.apply(n, r), e.apply(t, n)
					}
				}
				return function() {
					return e.apply(t, arguments)
				}
			}

			function c(e, t, n) {
				return (c = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? o : l).apply(null, arguments)
			}

			function u(e, t) {
				var n = Array.prototype.slice.call(arguments, 1);
				return function() {
					var t = n.slice();
					return t.push.apply(t, arguments), e.apply(this, t)
				}
			}

			function d(e, t) {
				function n() {}
				n.prototype = t.prototype, e.aa = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.Qb = function(e, n, r) {
					for (var i = Array(arguments.length - 2), a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
					return t.prototype[n].apply(e, i)
				}
			}

			function h(e) {
				const t = e.length;
				if (0 < t) {
					const n = Array(t);
					for (let r = 0; r < t; r++) n[r] = e[r];
					return n
				}
				return []
			}

			function f(e, t) {
				for (let n = 1; n < arguments.length; n++) {
					const t = arguments[n];
					if (a(t)) {
						const n = e.length || 0,
							r = t.length || 0;
						e.length = n + r;
						for (let i = 0; i < r; i++) e[n + i] = t[i]
					} else e.push(t)
				}
			}

			function p(e) {
				return /^[\s\xa0]*$/.test(e)
			}

			function g() {
				var e = i.navigator;
				return e && (e = e.userAgent) ? e : ""
			}

			function m(e) {
				return m[" "](e), e
			}
			m[" "] = function() {};
			var v = -1 != g().indexOf("Gecko") && !(-1 != g().toLowerCase().indexOf("webkit") && -1 == g().indexOf("Edge")) && !(-1 != g().indexOf("Trident") || -1 != g().indexOf("MSIE")) && -1 == g().indexOf("Edge");

			function y(e, t, n) {
				for (const r in e) t.call(n, e[r], r, e)
			}

			function b(e) {
				const t = {};
				for (const n in e) t[n] = e[n];
				return t
			}
			const w = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

			function x(e, t) {
				let n, r;
				for (let i = 1; i < arguments.length; i++) {
					for (n in r = arguments[i], r) e[n] = r[n];
					for (let t = 0; t < w.length; t++) n = w[t], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
			}

			function k(e) {
				var t = 1;
				e = e.split(":");
				const n = [];
				for (; 0 < t && e.length;) n.push(e.shift()), t--;
				return e.length && n.push(e.join(":")), n
			}

			function S(e) {
				i.setTimeout((() => {
					throw e
				}), 0)
			}

			function C() {
				var e = N;
				let t = null;
				return e.g && (t = e.g, e.g = e.g.next, e.g || (e.h = null), t.next = null), t
			}
			var _ = new class {
				constructor(e, t) {
					this.i = e, this.j = t, this.h = 0, this.g = null
				}
				get() {
					let e;
					return 0 < this.h ? (this.h--, e = this.g, this.g = e.next, e.next = null) : e = this.i(), e
				}
			}((() => new E), (e => e.reset()));
			class E {
				constructor() {
					this.next = this.g = this.h = null
				}
				set(e, t) {
					this.h = e, this.g = t, this.next = null
				}
				reset() {
					this.next = this.g = this.h = null
				}
			}
			let T, I = !1,
				N = new class {
					constructor() {
						this.h = this.g = null
					}
					add(e, t) {
						const n = _.get();
						n.set(e, t), this.h ? this.h.next = n : this.g = n, this.h = n
					}
				},
				R = () => {
					const e = i.Promise.resolve(void 0);
					T = () => {
						e.then(A)
					}
				};
			var A = () => {
				for (var e; e = C();) {
					try {
						e.h.call(e.g)
					} catch (n) {
						S(n)
					}
					var t = _;
					t.j(e), 100 > t.h && (t.h++, e.next = t.g, t.g = e)
				}
				I = !1
			};

			function P() {
				this.s = this.s, this.C = this.C
			}

			function j(e, t) {
				this.type = e, this.g = this.target = t, this.defaultPrevented = !1
			}
			P.prototype.s = !1, P.prototype.ma = function() {
				this.s || (this.s = !0, this.N())
			}, P.prototype.N = function() {
				if (this.C)
					for (; this.C.length;) this.C.shift()()
			}, j.prototype.h = function() {
				this.defaultPrevented = !0
			};
			var D = function() {
				if (!i.addEventListener || !Object.defineProperty) return !1;
				var e = !1,
					t = Object.defineProperty({}, "passive", {
						get: function() {
							e = !0
						}
					});
				try {
					const e = () => {};
					i.addEventListener("test", e, t), i.removeEventListener("test", e, t)
				} catch (n) {}
				return e
			}();

			function O(e, t) {
				if (j.call(this, e ? e.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, e) {
					var n = this.type = e.type,
						r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
					if (this.target = e.target || e.srcElement, this.g = t, t = e.relatedTarget) {
						if (v) {
							e: {
								try {
									m(t.nodeName);
									var i = !0;
									break e
								} catch (a) {}
								i = !1
							}
							i || (t = null)
						}
					} else "mouseover" == n ? t = e.fromElement : "mouseout" == n && (t = e.toElement);
					this.relatedTarget = t, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0), this.button = e.button, this.key = e.key || "", this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.pointerId = e.pointerId || 0, this.pointerType = "string" === typeof e.pointerType ? e.pointerType : L[e.pointerType] || "", this.state = e.state, this.i = e, e.defaultPrevented && O.aa.h.call(this)
				}
			}
			d(O, j);
			var L = {
				2: "touch",
				3: "pen",
				4: "mouse"
			};
			O.prototype.h = function() {
				O.aa.h.call(this);
				var e = this.i;
				e.preventDefault ? e.preventDefault() : e.returnValue = !1
			};
			var M = "closure_listenable_" + (1e6 * Math.random() | 0),
				F = 0;

			function U(e, t, n, r, i) {
				this.listener = e, this.proxy = null, this.src = t, this.type = n, this.capture = !!r, this.ha = i, this.key = ++F, this.da = this.fa = !1
			}

			function V(e) {
				e.da = !0, e.listener = null, e.proxy = null, e.src = null, e.ha = null
			}

			function z(e) {
				this.src = e, this.g = {}, this.h = 0
			}

			function B(e, t) {
				var n = t.type;
				if (n in e.g) {
					var r, i = e.g[n],
						a = Array.prototype.indexOf.call(i, t, void 0);
					(r = 0 <= a) && Array.prototype.splice.call(i, a, 1), r && (V(t), 0 == e.g[n].length && (delete e.g[n], e.h--))
				}
			}

			function G(e, t, n, r) {
				for (var i = 0; i < e.length; ++i) {
					var a = e[i];
					if (!a.da && a.listener == t && a.capture == !!n && a.ha == r) return i
				}
				return -1
			}
			z.prototype.add = function(e, t, n, r, i) {
				var a = e.toString();
				(e = this.g[a]) || (e = this.g[a] = [], this.h++);
				var s = G(e, t, r, i);
				return -1 < s ? (t = e[s], n || (t.fa = !1)) : ((t = new U(t, this.src, a, !!r, i)).fa = n, e.push(t)), t
			};
			var q = "closure_lm_" + (1e6 * Math.random() | 0),
				H = {};

			function W(e, t, n, r, i) {
				if (r && r.once) return Q(e, t, n, r, i);
				if (Array.isArray(t)) {
					for (var a = 0; a < t.length; a++) W(e, t[a], n, r, i);
					return null
				}
				return n = te(n), e && e[M] ? e.K(t, n, s(r) ? !!r.capture : !!r, i) : K(e, t, n, !1, r, i)
			}

			function K(e, t, n, r, i, a) {
				if (!t) throw Error("Invalid event type");
				var o = s(i) ? !!i.capture : !!i,
					l = Z(e);
				if (l || (e[q] = l = new z(e)), (n = l.add(t, n, r, o, a)).proxy) return n;
				if (r = function() {
						function e(n) {
							return t.call(e.src, e.listener, n)
						}
						const t = J;
						return e
					}(), n.proxy = r, r.src = e, r.listener = n, e.addEventListener) D || (i = o), void 0 === i && (i = !1), e.addEventListener(t.toString(), r, i);
				else if (e.attachEvent) e.attachEvent($(t.toString()), r);
				else {
					if (!e.addListener || !e.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
					e.addListener(r)
				}
				return n
			}

			function Q(e, t, n, r, i) {
				if (Array.isArray(t)) {
					for (var a = 0; a < t.length; a++) Q(e, t[a], n, r, i);
					return null
				}
				return n = te(n), e && e[M] ? e.L(t, n, s(r) ? !!r.capture : !!r, i) : K(e, t, n, !0, r, i)
			}

			function X(e, t, n, r, i) {
				if (Array.isArray(t))
					for (var a = 0; a < t.length; a++) X(e, t[a], n, r, i);
				else r = s(r) ? !!r.capture : !!r, n = te(n), e && e[M] ? (e = e.i, (t = String(t).toString()) in e.g && (-1 < (n = G(a = e.g[t], n, r, i)) && (V(a[n]), Array.prototype.splice.call(a, n, 1), 0 == a.length && (delete e.g[t], e.h--)))) : e && (e = Z(e)) && (t = e.g[t.toString()], e = -1, t && (e = G(t, n, r, i)), (n = -1 < e ? t[e] : null) && Y(n))
			}

			function Y(e) {
				if ("number" !== typeof e && e && !e.da) {
					var t = e.src;
					if (t && t[M]) B(t.i, e);
					else {
						var n = e.type,
							r = e.proxy;
						t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent ? t.detachEvent($(n), r) : t.addListener && t.removeListener && t.removeListener(r), (n = Z(t)) ? (B(n, e), 0 == n.h && (n.src = null, t[q] = null)) : V(e)
					}
				}
			}

			function $(e) {
				return e in H ? H[e] : H[e] = "on" + e
			}

			function J(e, t) {
				if (e.da) e = !0;
				else {
					t = new O(t, this);
					var n = e.listener,
						r = e.ha || e.src;
					e.fa && Y(e), e = n.call(r, t)
				}
				return e
			}

			function Z(e) {
				return (e = e[q]) instanceof z ? e : null
			}
			var ee = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

			function te(e) {
				return "function" === typeof e ? e : (e[ee] || (e[ee] = function(t) {
					return e.handleEvent(t)
				}), e[ee])
			}

			function ne() {
				P.call(this), this.i = new z(this), this.M = this, this.F = null
			}

			function re(e, t) {
				var n, r = e.F;
				if (r)
					for (n = []; r; r = r.F) n.push(r);
				if (e = e.M, r = t.type || t, "string" === typeof t) t = new j(t, e);
				else if (t instanceof j) t.target = t.target || e;
				else {
					var i = t;
					x(t = new j(r, e), i)
				}
				if (i = !0, n)
					for (var a = n.length - 1; 0 <= a; a--) {
						var s = t.g = n[a];
						i = ie(s, r, !0, t) && i
					}
				if (i = ie(s = t.g = e, r, !0, t) && i, i = ie(s, r, !1, t) && i, n)
					for (a = 0; a < n.length; a++) i = ie(s = t.g = n[a], r, !1, t) && i
			}

			function ie(e, t, n, r) {
				if (!(t = e.i.g[String(t)])) return !0;
				t = t.concat();
				for (var i = !0, a = 0; a < t.length; ++a) {
					var s = t[a];
					if (s && !s.da && s.capture == n) {
						var o = s.listener,
							l = s.ha || s.src;
						s.fa && B(e.i, s), i = !1 !== o.call(l, r) && i
					}
				}
				return i && !r.defaultPrevented
			}

			function ae(e, t, n) {
				if ("function" === typeof e) n && (e = c(e, n));
				else {
					if (!e || "function" != typeof e.handleEvent) throw Error("Invalid listener argument");
					e = c(e.handleEvent, e)
				}
				return 2147483647 < Number(t) ? -1 : i.setTimeout(e, t || 0)
			}

			function se(e) {
				e.g = ae((() => {
					e.g = null, e.i && (e.i = !1, se(e))
				}), e.l);
				const t = e.h;
				e.h = null, e.m.apply(null, t)
			}
			d(ne, P), ne.prototype[M] = !0, ne.prototype.removeEventListener = function(e, t, n, r) {
				X(this, e, t, n, r)
			}, ne.prototype.N = function() {
				if (ne.aa.N.call(this), this.i) {
					var e, t = this.i;
					for (e in t.g) {
						for (var n = t.g[e], r = 0; r < n.length; r++) V(n[r]);
						delete t.g[e], t.h--
					}
				}
				this.F = null
			}, ne.prototype.K = function(e, t, n, r) {
				return this.i.add(String(e), t, !1, n, r)
			}, ne.prototype.L = function(e, t, n, r) {
				return this.i.add(String(e), t, !0, n, r)
			};
			class oe extends P {
				constructor(e, t) {
					super(), this.m = e, this.l = t, this.h = null, this.i = !1, this.g = null
				}
				j(e) {
					this.h = arguments, this.g ? this.i = !0 : se(this)
				}
				N() {
					super.N(), this.g && (i.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null)
				}
			}

			function le(e) {
				P.call(this), this.h = e, this.g = {}
			}
			d(le, P);
			var ce = [];

			function ue(e) {
				y(e.g, (function(e, t) {
					this.g.hasOwnProperty(t) && Y(e)
				}), e), e.g = {}
			}
			le.prototype.N = function() {
				le.aa.N.call(this), ue(this)
			}, le.prototype.handleEvent = function() {
				throw Error("EventHandler.handleEvent not implemented")
			};
			var de = i.JSON.stringify,
				he = i.JSON.parse,
				fe = class {
					stringify(e) {
						return i.JSON.stringify(e, void 0)
					}
					parse(e) {
						return i.JSON.parse(e, void 0)
					}
				};

			function pe() {}

			function ge(e) {
				return e.h || (e.h = e.i())
			}

			function me() {}
			pe.prototype.h = null;
			var ve = {
				OPEN: "a",
				kb: "b",
				Ja: "c",
				wb: "d"
			};

			function ye() {
				j.call(this, "d")
			}

			function be() {
				j.call(this, "c")
			}
			d(ye, j), d(be, j);
			var we = {},
				xe = null;

			function ke() {
				return xe = xe || new ne
			}

			function Se(e) {
				j.call(this, we.La, e)
			}

			function Ce(e) {
				const t = ke();
				re(t, new Se(t))
			}

			function _e(e, t) {
				j.call(this, we.STAT_EVENT, e), this.stat = t
			}

			function Ee(e) {
				const t = ke();
				re(t, new _e(t, e))
			}

			function Te(e, t) {
				j.call(this, we.Ma, e), this.size = t
			}

			function Ie(e, t) {
				if ("function" !== typeof e) throw Error("Fn must not be null and must be a function");
				return i.setTimeout((function() {
					e()
				}), t)
			}

			function Ne() {
				this.g = !0
			}

			function Re(e, t, n, r) {
				e.info((function() {
					return "XMLHTTP TEXT (" + t + "): " + function(e, t) {
						if (!e.g) return t;
						if (!t) return null;
						try {
							var n = JSON.parse(t);
							if (n)
								for (e = 0; e < n.length; e++)
									if (Array.isArray(n[e])) {
										var r = n[e];
										if (!(2 > r.length)) {
											var i = r[1];
											if (Array.isArray(i) && !(1 > i.length)) {
												var a = i[0];
												if ("noop" != a && "stop" != a && "close" != a)
													for (var s = 1; s < i.length; s++) i[s] = ""
											}
										}
									} return de(n)
						} catch (o) {
							return t
						}
					}(e, n) + (r ? " " + r : "")
				}))
			}
			we.La = "serverreachability", d(Se, j), we.STAT_EVENT = "statevent", d(_e, j), we.Ma = "timingevent", d(Te, j), Ne.prototype.xa = function() {
				this.g = !1
			}, Ne.prototype.info = function() {};
			var Ae, Pe = {
					NO_ERROR: 0,
					gb: 1,
					tb: 2,
					sb: 3,
					nb: 4,
					rb: 5,
					ub: 6,
					Ia: 7,
					TIMEOUT: 8,
					xb: 9
				},
				je = {
					lb: "complete",
					Hb: "success",
					Ja: "error",
					Ia: "abort",
					zb: "ready",
					Ab: "readystatechange",
					TIMEOUT: "timeout",
					vb: "incrementaldata",
					yb: "progress",
					ob: "downloadprogress",
					Pb: "uploadprogress"
				};

			function De() {}

			function Oe(e, t, n, r) {
				this.j = e, this.i = t, this.l = n, this.R = r || 1, this.U = new le(this), this.I = 45e3, this.H = null, this.o = !1, this.m = this.A = this.v = this.L = this.F = this.S = this.B = null, this.D = [], this.g = null, this.C = 0, this.s = this.u = null, this.X = -1, this.J = !1, this.O = 0, this.M = null, this.W = this.K = this.T = this.P = !1, this.h = new Le
			}

			function Le() {
				this.i = null, this.g = "", this.h = !1
			}
			d(De, pe), De.prototype.g = function() {
				return new XMLHttpRequest
			}, De.prototype.i = function() {
				return {}
			}, Ae = new De;
			var Me = {},
				Fe = {};

			function Ue(e, t, n) {
				e.L = 1, e.v = dt(st(t)), e.m = n, e.P = !0, Ve(e, null)
			}

			function Ve(e, t) {
				e.F = Date.now(), Ge(e), e.A = st(e.v);
				var n = e.A,
					r = e.R;
				Array.isArray(r) || (r = [String(r)]), _t(n.i, "t", r), e.C = 0, n = e.j.J, e.h = new Le, e.g = _n(e.j, n ? t : null, !e.m), 0 < e.O && (e.M = new oe(c(e.Y, e, e.g), e.O)), t = e.U, n = e.g, r = e.ca;
				var i = "readystatechange";
				Array.isArray(i) || (i && (ce[0] = i.toString()), i = ce);
				for (var a = 0; a < i.length; a++) {
					var s = W(n, i[a], r || t.handleEvent, !1, t.h || t);
					if (!s) break;
					t.g[s.key] = s
				}
				t = e.H ? b(e.H) : {}, e.m ? (e.u || (e.u = "POST"), t["Content-Type"] = "application/x-www-form-urlencoded", e.g.ea(e.A, e.u, e.m, t)) : (e.u = "GET", e.g.ea(e.A, e.u, null, t)), Ce(),
					function(e, t, n, r, i, a) {
						e.info((function() {
							if (e.g)
								if (a)
									for (var s = "", o = a.split("&"), l = 0; l < o.length; l++) {
										var c = o[l].split("=");
										if (1 < c.length) {
											var u = c[0];
											c = c[1];
											var d = u.split("_");
											s = 2 <= d.length && "type" == d[1] ? s + (u + "=") + c + "&" : s + (u + "=redacted&")
										}
									} else s = null;
								else s = a;
							return "XMLHTTP REQ (" + r + ") [attempt " + i + "]: " + t + "\n" + n + "\n" + s
						}))
					}(e.i, e.u, e.A, e.l, e.R, e.m)
			}

			function ze(e) {
				return !!e.g && ("GET" == e.u && 2 != e.L && e.j.Ca)
			}

			function Be(e, t) {
				var n = e.C,
					r = t.indexOf("\n", n);
				return -1 == r ? Fe : (n = Number(t.substring(n, r)), isNaN(n) ? Me : (r += 1) + n > t.length ? Fe : (t = t.slice(r, r + n), e.C = r + n, t))
			}

			function Ge(e) {
				e.S = Date.now() + e.I, qe(e, e.I)
			}

			function qe(e, t) {
				if (null != e.B) throw Error("WatchDog timer not null");
				e.B = Ie(c(e.ba, e), t)
			}

			function He(e) {
				e.B && (i.clearTimeout(e.B), e.B = null)
			}

			function We(e) {
				0 == e.j.G || e.J || wn(e.j, e)
			}

			function Ke(e) {
				He(e);
				var t = e.M;
				t && "function" == typeof t.ma && t.ma(), e.M = null, ue(e.U), e.g && (t = e.g, e.g = null, t.abort(), t.ma())
			}

			function Qe(e, t) {
				try {
					var n = e.j;
					if (0 != n.G && (n.g == e || Ze(n.h, e)))
						if (!e.K && Ze(n.h, e) && 3 == n.G) {
							try {
								var r = n.Da.g.parse(t)
							} catch (u) {
								r = null
							}
							if (Array.isArray(r) && 3 == r.length) {
								var i = r;
								if (0 == i[0]) {
									e: if (!n.u) {
										if (n.g) {
											if (!(n.g.F + 3e3 < e.F)) break e;
											bn(n), cn(n)
										}
										mn(n), Ee(18)
									}
								}
								else n.za = i[1], 0 < n.za - n.T && 37500 > i[2] && n.F && 0 == n.v && !n.C && (n.C = Ie(c(n.Za, n), 6e3));
								if (1 >= Je(n.h) && n.ca) {
									try {
										n.ca()
									} catch (u) {}
									n.ca = void 0
								}
							} else kn(n, 11)
						} else if ((e.K || n.g == e) && bn(n), !p(t))
						for (i = n.Da.g.parse(t), t = 0; t < i.length; t++) {
							let c = i[t];
							if (n.T = c[0], c = c[1], 2 == n.G)
								if ("c" == c[0]) {
									n.K = c[1], n.ia = c[2];
									const t = c[3];
									null != t && (n.la = t, n.j.info("VER=" + n.la));
									const i = c[4];
									null != i && (n.Aa = i, n.j.info("SVER=" + n.Aa));
									const u = c[5];
									null != u && "number" === typeof u && 0 < u && (r = 1.5 * u, n.L = r, n.j.info("backChannelRequestTimeoutMs_=" + r)), r = n;
									const d = e.g;
									if (d) {
										const e = d.g ? d.g.getResponseHeader("X-Client-Wire-Protocol") : null;
										if (e) {
											var a = r.h;
											a.g || -1 == e.indexOf("spdy") && -1 == e.indexOf("quic") && -1 == e.indexOf("h2") || (a.j = a.l, a.g = new Set, a.h && (et(a, a.h), a.h = null))
										}
										if (r.D) {
											const e = d.g ? d.g.getResponseHeader("X-HTTP-Session-Id") : null;
											e && (r.ya = e, ut(r.I, r.D, e))
										}
									}
									n.G = 3, n.l && n.l.ua(), n.ba && (n.R = Date.now() - e.F, n.j.info("Handshake RTT: " + n.R + "ms"));
									var s = e;
									if ((r = n).qa = Cn(r, r.J ? r.ia : null, r.W), s.K) {
										tt(r.h, s);
										var o = s,
											l = r.L;
										l && (o.I = l), o.B && (He(o), Ge(o)), r.g = s
									} else gn(r);
									0 < n.i.length && dn(n)
								} else "stop" != c[0] && "close" != c[0] || kn(n, 7);
							else 3 == n.G && ("stop" == c[0] || "close" == c[0] ? "stop" == c[0] ? kn(n, 7) : ln(n) : "noop" != c[0] && n.l && n.l.ta(c), n.v = 0)
						}
					Ce()
				} catch (u) {}
			}
			Oe.prototype.ca = function(e) {
				e = e.target;
				const t = this.M;
				t && 3 == rn(e) ? t.j() : this.Y(e)
			}, Oe.prototype.Y = function(e) {
				try {
					if (e == this.g) e: {
						const h = rn(this.g);
						var t = this.g.Ba();this.g.Z();
						if (!(3 > h) && (3 != h || this.g && (this.h.h || this.g.oa() || an(this.g)))) {
							this.J || 4 != h || 7 == t || Ce(), He(this);
							var n = this.g.Z();
							this.X = n;
							t: if (ze(this)) {
								var r = an(this.g);
								e = "";
								var a = r.length,
									s = 4 == rn(this.g);
								if (!this.h.i) {
									if ("undefined" === typeof TextDecoder) {
										Ke(this), We(this);
										var o = "";
										break t
									}
									this.h.i = new i.TextDecoder
								}
								for (t = 0; t < a; t++) this.h.h = !0, e += this.h.i.decode(r[t], {
									stream: !(s && t == a - 1)
								});
								r.length = 0, this.h.g += e, this.C = 0, o = this.h.g
							} else o = this.g.oa();
							if (this.o = 200 == n, function(e, t, n, r, i, a, s) {
									e.info((function() {
										return "XMLHTTP RESP (" + r + ") [ attempt " + i + "]: " + t + "\n" + n + "\n" + a + " " + s
									}))
								}(this.i, this.u, this.A, this.l, this.R, h, n), this.o) {
								if (this.T && !this.K) {
									t: {
										if (this.g) {
											var l, c = this.g;
											if ((l = c.g ? c.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !p(l)) {
												var u = l;
												break t
											}
										}
										u = null
									}
									if (!(n = u)) {
										this.o = !1, this.s = 3, Ee(12), Ke(this), We(this);
										break e
									}
									Re(this.i, this.l, n, "Initial handshake response via X-HTTP-Initial-Response"),
									this.K = !0,
									Qe(this, n)
								}
								if (this.P) {
									let e;
									for (n = !0; !this.J && this.C < o.length;) {
										if (e = Be(this, o), e == Fe) {
											4 == h && (this.s = 4, Ee(14), n = !1), Re(this.i, this.l, null, "[Incomplete Response]");
											break
										}
										if (e == Me) {
											this.s = 4, Ee(15), Re(this.i, this.l, o, "[Invalid Chunk]"), n = !1;
											break
										}
										Re(this.i, this.l, e, null), Qe(this, e)
									}
									if (ze(this) && 0 != this.C && (this.h.g = this.h.g.slice(this.C), this.C = 0), 4 != h || 0 != o.length || this.h.h || (this.s = 1, Ee(16), n = !1), this.o = this.o && n, n) {
										if (0 < o.length && !this.W) {
											this.W = !0;
											var d = this.j;
											d.g == this && d.ba && !d.M && (d.j.info("Great, no buffering proxy detected. Bytes received: " + o.length), vn(d), d.M = !0, Ee(11))
										}
									} else Re(this.i, this.l, o, "[Invalid Chunked Response]"), Ke(this), We(this)
								} else Re(this.i, this.l, o, null), Qe(this, o);
								4 == h && Ke(this), this.o && !this.J && (4 == h ? wn(this.j, this) : (this.o = !1, Ge(this)))
							} else(function(e) {
								const t = {};
								e = (e.g && 2 <= rn(e) && e.g.getAllResponseHeaders() || "").split("\r\n");
								for (let r = 0; r < e.length; r++) {
									if (p(e[r])) continue;
									var n = k(e[r]);
									const i = n[0];
									if ("string" !== typeof(n = n[1])) continue;
									n = n.trim();
									const a = t[i] || [];
									t[i] = a, a.push(n)
								}! function(e, t) {
									for (const n in e) t.call(void 0, e[n], n, e)
								}(t, (function(e) {
									return e.join(", ")
								}))
							})(this.g), 400 == n && 0 < o.indexOf("Unknown SID") ? (this.s = 3, Ee(12)) : (this.s = 0, Ee(13)), Ke(this), We(this)
						}
					}
				} catch (h) {}
			}, Oe.prototype.cancel = function() {
				this.J = !0, Ke(this)
			}, Oe.prototype.ba = function() {
				this.B = null;
				const e = Date.now();
				0 <= e - this.S ? (function(e, t) {
					e.info((function() {
						return "TIMEOUT: " + t
					}))
				}(this.i, this.A), 2 != this.L && (Ce(), Ee(17)), Ke(this), this.s = 2, We(this)) : qe(this, this.S - e)
			};
			var Xe = class {
				constructor(e, t) {
					this.g = e, this.map = t
				}
			};

			function Ye(e) {
				this.l = e || 10, i.PerformanceNavigationTiming ? e = 0 < (e = i.performance.getEntriesByType("navigation")).length && ("hq" == e[0].nextHopProtocol || "h2" == e[0].nextHopProtocol) : e = !!(i.chrome && i.chrome.loadTimes && i.chrome.loadTimes() && i.chrome.loadTimes().wasFetchedViaSpdy), this.j = e ? this.l : 1, this.g = null, 1 < this.j && (this.g = new Set), this.h = null, this.i = []
			}

			function $e(e) {
				return !!e.h || !!e.g && e.g.size >= e.j
			}

			function Je(e) {
				return e.h ? 1 : e.g ? e.g.size : 0
			}

			function Ze(e, t) {
				return e.h ? e.h == t : !!e.g && e.g.has(t)
			}

			function et(e, t) {
				e.g ? e.g.add(t) : e.h = t
			}

			function tt(e, t) {
				e.h && e.h == t ? e.h = null : e.g && e.g.has(t) && e.g.delete(t)
			}

			function nt(e) {
				if (null != e.h) return e.i.concat(e.h.D);
				if (null != e.g && 0 !== e.g.size) {
					let t = e.i;
					for (const n of e.g.values()) t = t.concat(n.D);
					return t
				}
				return h(e.i)
			}

			function rt(e, t) {
				if (e.forEach && "function" == typeof e.forEach) e.forEach(t, void 0);
				else if (a(e) || "string" === typeof e) Array.prototype.forEach.call(e, t, void 0);
				else
					for (var n = function(e) {
							if (e.na && "function" == typeof e.na) return e.na();
							if (!e.V || "function" != typeof e.V) {
								if ("undefined" !== typeof Map && e instanceof Map) return Array.from(e.keys());
								if (!("undefined" !== typeof Set && e instanceof Set)) {
									if (a(e) || "string" === typeof e) {
										var t = [];
										e = e.length;
										for (var n = 0; n < e; n++) t.push(n);
										return t
									}
									t = [], n = 0;
									for (const r in e) t[n++] = r;
									return t
								}
							}
						}(e), r = function(e) {
							if (e.V && "function" == typeof e.V) return e.V();
							if ("undefined" !== typeof Map && e instanceof Map || "undefined" !== typeof Set && e instanceof Set) return Array.from(e.values());
							if ("string" === typeof e) return e.split("");
							if (a(e)) {
								for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
								return t
							}
							for (r in t = [], n = 0, e) t[n++] = e[r];
							return t
						}(e), i = r.length, s = 0; s < i; s++) t.call(void 0, r[s], n && n[s], e)
			}
			Ye.prototype.cancel = function() {
				if (this.i = nt(this), this.h) this.h.cancel(), this.h = null;
				else if (this.g && 0 !== this.g.size) {
					for (const e of this.g.values()) e.cancel();
					this.g.clear()
				}
			};
			var it = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

			function at(e) {
				if (this.g = this.o = this.j = "", this.s = null, this.m = this.l = "", this.h = !1, e instanceof at) {
					this.h = e.h, ot(this, e.j), this.o = e.o, this.g = e.g, lt(this, e.s), this.l = e.l;
					var t = e.i,
						n = new xt;
					n.i = t.i, t.g && (n.g = new Map(t.g), n.h = t.h), ct(this, n), this.m = e.m
				} else e && (t = String(e).match(it)) ? (this.h = !1, ot(this, t[1] || "", !0), this.o = ht(t[2] || ""), this.g = ht(t[3] || "", !0), lt(this, t[4]), this.l = ht(t[5] || "", !0), ct(this, t[6] || "", !0), this.m = ht(t[7] || "")) : (this.h = !1, this.i = new xt(null, this.h))
			}

			function st(e) {
				return new at(e)
			}

			function ot(e, t, n) {
				e.j = n ? ht(t, !0) : t, e.j && (e.j = e.j.replace(/:$/, ""))
			}

			function lt(e, t) {
				if (t) {
					if (t = Number(t), isNaN(t) || 0 > t) throw Error("Bad port number " + t);
					e.s = t
				} else e.s = null
			}

			function ct(e, t, n) {
				t instanceof xt ? (e.i = t, function(e, t) {
					t && !e.j && (kt(e), e.i = null, e.g.forEach((function(e, t) {
						var n = t.toLowerCase();
						t != n && (St(this, t), _t(this, n, e))
					}), e)), e.j = t
				}(e.i, e.h)) : (n || (t = ft(t, bt)), e.i = new xt(t, e.h))
			}

			function ut(e, t, n) {
				e.i.set(t, n)
			}

			function dt(e) {
				return ut(e, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), e
			}

			function ht(e, t) {
				return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : ""
			}

			function ft(e, t, n) {
				return "string" === typeof e ? (e = encodeURI(e).replace(t, pt), n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e) : null
			}

			function pt(e) {
				return "%" + ((e = e.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & e).toString(16)
			}
			at.prototype.toString = function() {
				var e = [],
					t = this.j;
				t && e.push(ft(t, mt, !0), ":");
				var n = this.g;
				return (n || "file" == t) && (e.push("//"), (t = this.o) && e.push(ft(t, mt, !0), "@"), e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.s) && e.push(":", String(n))), (n = this.l) && (this.g && "/" != n.charAt(0) && e.push("/"), e.push(ft(n, "/" == n.charAt(0) ? yt : vt, !0))), (n = this.i.toString()) && e.push("?", n), (n = this.m) && e.push("#", ft(n, wt)), e.join("")
			};
			var gt, mt = /[#\/\?@]/g,
				vt = /[#\?:]/g,
				yt = /[#\?]/g,
				bt = /[#\?@]/g,
				wt = /#/g;

			function xt(e, t) {
				this.h = this.g = null, this.i = e || null, this.j = !!t
			}

			function kt(e) {
				e.g || (e.g = new Map, e.h = 0, e.i && function(e, t) {
					if (e) {
						e = e.split("&");
						for (var n = 0; n < e.length; n++) {
							var r = e[n].indexOf("="),
								i = null;
							if (0 <= r) {
								var a = e[n].substring(0, r);
								i = e[n].substring(r + 1)
							} else a = e[n];
							t(a, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
						}
					}
				}(e.i, (function(t, n) {
					e.add(decodeURIComponent(t.replace(/\+/g, " ")), n)
				})))
			}

			function St(e, t) {
				kt(e), t = Et(e, t), e.g.has(t) && (e.i = null, e.h -= e.g.get(t).length, e.g.delete(t))
			}

			function Ct(e, t) {
				return kt(e), t = Et(e, t), e.g.has(t)
			}

			function _t(e, t, n) {
				St(e, t), 0 < n.length && (e.i = null, e.g.set(Et(e, t), h(n)), e.h += n.length)
			}

			function Et(e, t) {
				return t = String(t), e.j && (t = t.toLowerCase()), t
			}

			function Tt(e, t, n, r, i) {
				try {
					i && (i.onload = null, i.onerror = null, i.onabort = null, i.ontimeout = null), r(n)
				} catch (a) {}
			}

			function It() {
				this.g = new fe
			}

			function Nt(e, t, n) {
				const r = n || "";
				try {
					rt(e, (function(e, n) {
						let i = e;
						s(e) && (i = de(e)), t.push(r + n + "=" + encodeURIComponent(i))
					}))
				} catch (i) {
					throw t.push(r + "type=" + encodeURIComponent("_badmap")), i
				}
			}

			function Rt(e) {
				this.l = e.Ub || null, this.j = e.eb || !1
			}

			function At(e, t) {
				ne.call(this), this.D = e, this.o = t, this.m = void 0, this.status = this.readyState = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.u = new Headers, this.h = null, this.B = "GET", this.A = "", this.g = !1, this.v = this.j = this.l = null
			}

			function Pt(e) {
				e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))
			}

			function jt(e) {
				e.readyState = 4, e.l = null, e.j = null, e.v = null, Dt(e)
			}

			function Dt(e) {
				e.onreadystatechange && e.onreadystatechange.call(e)
			}

			function Ot(e) {
				let t = "";
				return y(e, (function(e, n) {
					t += n, t += ":", t += e, t += "\r\n"
				})), t
			}

			function Lt(e, t, n) {
				e: {
					for (r in n) {
						var r = !1;
						break e
					}
					r = !0
				}
				r || (n = Ot(n), "string" === typeof e ? null != n && encodeURIComponent(String(n)) : ut(e, t, n))
			}

			function Mt(e) {
				ne.call(this), this.headers = new Map, this.o = e || null, this.h = !1, this.v = this.g = null, this.D = "", this.m = 0, this.l = "", this.j = this.B = this.u = this.A = !1, this.I = null, this.H = "", this.J = !1
			}(e = xt.prototype).add = function(e, t) {
				kt(this), this.i = null, e = Et(this, e);
				var n = this.g.get(e);
				return n || this.g.set(e, n = []), n.push(t), this.h += 1, this
			}, e.forEach = function(e, t) {
				kt(this), this.g.forEach((function(n, r) {
					n.forEach((function(n) {
						e.call(t, n, r, this)
					}), this)
				}), this)
			}, e.na = function() {
				kt(this);
				const e = Array.from(this.g.values()),
					t = Array.from(this.g.keys()),
					n = [];
				for (let r = 0; r < t.length; r++) {
					const i = e[r];
					for (let e = 0; e < i.length; e++) n.push(t[r])
				}
				return n
			}, e.V = function(e) {
				kt(this);
				let t = [];
				if ("string" === typeof e) Ct(this, e) && (t = t.concat(this.g.get(Et(this, e))));
				else {
					e = Array.from(this.g.values());
					for (let n = 0; n < e.length; n++) t = t.concat(e[n])
				}
				return t
			}, e.set = function(e, t) {
				return kt(this), this.i = null, Ct(this, e = Et(this, e)) && (this.h -= this.g.get(e).length), this.g.set(e, [t]), this.h += 1, this
			}, e.get = function(e, t) {
				return e && 0 < (e = this.V(e)).length ? String(e[0]) : t
			}, e.toString = function() {
				if (this.i) return this.i;
				if (!this.g) return "";
				const e = [],
					t = Array.from(this.g.keys());
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					const a = encodeURIComponent(String(r)),
						s = this.V(r);
					for (r = 0; r < s.length; r++) {
						var i = a;
						"" !== s[r] && (i += "=" + encodeURIComponent(String(s[r]))), e.push(i)
					}
				}
				return this.i = e.join("&")
			}, d(Rt, pe), Rt.prototype.g = function() {
				return new At(this.l, this.j)
			}, Rt.prototype.i = (gt = {}, function() {
				return gt
			}), d(At, ne), (e = At.prototype).open = function(e, t) {
				if (0 != this.readyState) throw this.abort(), Error("Error reopening a connection");
				this.B = e, this.A = t, this.readyState = 1, Dt(this)
			}, e.send = function(e) {
				if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
				this.g = !0;
				const t = {
					headers: this.u,
					method: this.B,
					credentials: this.m,
					cache: void 0
				};
				e && (t.body = e), (this.D || i).fetch(new Request(this.A, t)).then(this.Sa.bind(this), this.ga.bind(this))
			}, e.abort = function() {
				this.response = this.responseText = "", this.u = new Headers, this.status = 0, this.j && this.j.cancel("Request was aborted.").catch((() => {})), 1 <= this.readyState && this.g && 4 != this.readyState && (this.g = !1, jt(this)), this.readyState = 0
			}, e.Sa = function(e) {
				if (this.g && (this.l = e, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = e.headers, this.readyState = 2, Dt(this)), this.g && (this.readyState = 3, Dt(this), this.g)))
					if ("arraybuffer" === this.responseType) e.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
					else if ("undefined" !== typeof i.ReadableStream && "body" in e) {
					if (this.j = e.body.getReader(), this.o) {
						if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
						this.response = []
					} else this.response = this.responseText = "", this.v = new TextDecoder;
					Pt(this)
				} else e.text().then(this.Ra.bind(this), this.ga.bind(this))
			}, e.Pa = function(e) {
				if (this.g) {
					if (this.o && e.value) this.response.push(e.value);
					else if (!this.o) {
						var t = e.value ? e.value : new Uint8Array(0);
						(t = this.v.decode(t, {
							stream: !e.done
						})) && (this.response = this.responseText += t)
					}
					e.done ? jt(this) : Dt(this), 3 == this.readyState && Pt(this)
				}
			}, e.Ra = function(e) {
				this.g && (this.response = this.responseText = e, jt(this))
			}, e.Qa = function(e) {
				this.g && (this.response = e, jt(this))
			}, e.ga = function() {
				this.g && jt(this)
			}, e.setRequestHeader = function(e, t) {
				this.u.append(e, t)
			}, e.getResponseHeader = function(e) {
				return this.h && this.h.get(e.toLowerCase()) || ""
			}, e.getAllResponseHeaders = function() {
				if (!this.h) return "";
				const e = [],
					t = this.h.entries();
				for (var n = t.next(); !n.done;) n = n.value, e.push(n[0] + ": " + n[1]), n = t.next();
				return e.join("\r\n")
			}, Object.defineProperty(At.prototype, "withCredentials", {
				get: function() {
					return "include" === this.m
				},
				set: function(e) {
					this.m = e ? "include" : "same-origin"
				}
			}), d(Mt, ne);
			var Xt = /^https?$/i,
				Yt = ["POST", "PUT"];

			function Jt(e, t) {
				e.h = !1, e.g && (e.j = !0, e.g.abort(), e.j = !1), e.l = t, e.m = 5, Zt(e), tn(e)
			}

			function Zt(e) {
				e.A || (e.A = !0, re(e, "complete"), re(e, "error"))
			}

			function en(e) {
				if (e.h && "undefined" != typeof r && (!e.v[1] || 4 != rn(e) || 2 != e.Z()))
					if (e.u && 4 == rn(e)) ae(e.Ea, 0, e);
					else if (re(e, "readystatechange"), 4 == rn(e)) {
					e.h = !1;
					try {
						const r = e.Z();
						e: switch (r) {
							case 200:
							case 201:
							case 202:
							case 204:
							case 206:
							case 304:
							case 1223:
								var t = !0;
								break e;
							default:
								t = !1
						}
						var n;
						if (!(n = t)) {
							var a;
							if (a = 0 === r) {
								var s = String(e.D).match(it)[1] || null;
								!s && i.self && i.self.location && (s = i.self.location.protocol.slice(0, -1)), a = !Xt.test(s ? s.toLowerCase() : "")
							}
							n = a
						}
						if (n) re(e, "complete"), re(e, "success");
						else {
							e.m = 6;
							try {
								var o = 2 < rn(e) ? e.g.statusText : ""
							} catch (l) {
								o = ""
							}
							e.l = o + " [" + e.Z() + "]", Zt(e)
						}
					} finally {
						tn(e)
					}
				}
			}

			function tn(e, t) {
				if (e.g) {
					nn(e);
					const r = e.g,
						i = e.v[0] ? () => {} : null;
					e.g = null, e.v = null, t || re(e, "ready");
					try {
						r.onreadystatechange = i
					} catch (n) {}
				}
			}

			function nn(e) {
				e.I && (i.clearTimeout(e.I), e.I = null)
			}

			function rn(e) {
				return e.g ? e.g.readyState : 0
			}

			function an(e) {
				try {
					if (!e.g) return null;
					if ("response" in e.g) return e.g.response;
					switch (e.H) {
						case "":
						case "text":
							return e.g.responseText;
						case "arraybuffer":
							if ("mozResponseArrayBuffer" in e.g) return e.g.mozResponseArrayBuffer
					}
					return null
				} catch ($t) {
					return null
				}
			}

			function sn(e, t, n) {
				return n && n.internalChannelParams && n.internalChannelParams[e] || t
			}

			function on(e) {
				this.Aa = 0, this.i = [], this.j = new Ne, this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null, this.Ya = this.U = 0, this.Va = sn("failFast", !1, e), this.F = this.C = this.u = this.s = this.l = null, this.X = !0, this.za = this.T = -1, this.Y = this.v = this.B = 0, this.Ta = sn("baseRetryDelayMs", 5e3, e), this.cb = sn("retryDelaySeedMs", 1e4, e), this.Wa = sn("forwardChannelMaxRetries", 2, e), this.wa = sn("forwardChannelRequestTimeoutMs", 2e4, e), this.pa = e && e.xmlHttpFactory || void 0, this.Xa = e && e.Tb || void 0, this.Ca = e && e.useFetchStreams || !1, this.L = void 0, this.J = e && e.supportsCrossDomainXhr || !1, this.K = "", this.h = new Ye(e && e.concurrentRequestLimit), this.Da = new It, this.P = e && e.fastHandshake || !1, this.O = e && e.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.Ua = e && e.Rb || !1, e && e.xa && this.j.xa(), e && e.forceLongPolling && (this.X = !1), this.ba = !this.P && this.X && e && e.detectBufferingProxy || !1, this.ja = void 0, e && e.longPollingTimeout && 0 < e.longPollingTimeout && (this.ja = e.longPollingTimeout), this.ca = void 0, this.R = 0, this.M = !1, this.ka = this.A = null
			}

			function ln(e) {
				if (un(e), 3 == e.G) {
					var t = e.U++,
						n = st(e.I);
					if (ut(n, "SID", e.K), ut(n, "RID", t), ut(n, "TYPE", "terminate"), fn(e, n), (t = new Oe(e, e.j, t)).L = 2, t.v = dt(st(n)), n = !1, i.navigator && i.navigator.sendBeacon) try {
						n = i.navigator.sendBeacon(t.v.toString(), "")
					} catch (r) {}!n && i.Image && ((new Image).src = t.v, n = !0), n || (t.g = _n(t.j, null), t.g.ea(t.v)), t.F = Date.now(), Ge(t)
				}
				Sn(e)
			}

			function cn(e) {
				e.g && (vn(e), e.g.cancel(), e.g = null)
			}

			function un(e) {
				cn(e), e.u && (i.clearTimeout(e.u), e.u = null), bn(e), e.h.cancel(), e.s && ("number" === typeof e.s && i.clearTimeout(e.s), e.s = null)
			}

			function dn(e) {
				if (!$e(e.h) && !e.s) {
					e.s = !0;
					var t = e.Ga;
					T || R(), I || (T(), I = !0), N.add(t, e), e.B = 0
				}
			}

			function hn(e, t) {
				var n;
				n = t ? t.l : e.U++;
				const r = st(e.I);
				ut(r, "SID", e.K), ut(r, "RID", n), ut(r, "AID", e.T), fn(e, r), e.m && e.o && Lt(r, e.m, e.o), n = new Oe(e, e.j, n, e.B + 1), null === e.m && (n.H = e.o), t && (e.i = t.D.concat(e.i)), t = pn(e, n, 1e3), n.I = Math.round(.5 * e.wa) + Math.round(.5 * e.wa * Math.random()), et(e.h, n), Ue(n, r, t)
			}

			function fn(e, t) {
				e.H && y(e.H, (function(e, n) {
					ut(t, n, e)
				})), e.l && rt({}, (function(e, n) {
					ut(t, n, e)
				}))
			}

			function pn(e, t, n) {
				n = Math.min(e.i.length, n);
				var r = e.l ? c(e.l.Na, e.l, e) : null;
				e: {
					var i = e.i;
					let t = -1;
					for (;;) {
						const e = ["count=" + n]; - 1 == t ? 0 < n ? (t = i[0].g, e.push("ofs=" + t)) : t = 0 : e.push("ofs=" + t);
						let s = !0;
						for (let o = 0; o < n; o++) {
							let n = i[o].g;
							const l = i[o].map;
							if (n -= t, 0 > n) t = Math.max(0, i[o].g - 100), s = !1;
							else try {
								Nt(l, e, "req" + n + "_")
							} catch (a) {
								r && r(l)
							}
						}
						if (s) {
							r = e.join("&");
							break e
						}
					}
				}
				return e = e.i.splice(0, n), t.D = e, r
			}

			function gn(e) {
				if (!e.g && !e.u) {
					e.Y = 1;
					var t = e.Fa;
					T || R(), I || (T(), I = !0), N.add(t, e), e.v = 0
				}
			}

			function mn(e) {
				return !(e.g || e.u || 3 <= e.v) && (e.Y++, e.u = Ie(c(e.Fa, e), xn(e, e.v)), e.v++, !0)
			}

			function vn(e) {
				null != e.A && (i.clearTimeout(e.A), e.A = null)
			}

			function yn(e) {
				e.g = new Oe(e, e.j, "rpc", e.Y), null === e.m && (e.g.H = e.o), e.g.O = 0;
				var t = st(e.qa);
				ut(t, "RID", "rpc"), ut(t, "SID", e.K), ut(t, "AID", e.T), ut(t, "CI", e.F ? "0" : "1"), !e.F && e.ja && ut(t, "TO", e.ja), ut(t, "TYPE", "xmlhttp"), fn(e, t), e.m && e.o && Lt(t, e.m, e.o), e.L && (e.g.I = e.L);
				var n = e.g;
				e = e.ia, n.L = 1, n.v = dt(st(t)), n.m = null, n.P = !0, Ve(n, e)
			}

			function bn(e) {
				null != e.C && (i.clearTimeout(e.C), e.C = null)
			}

			function wn(e, t) {
				var n = null;
				if (e.g == t) {
					bn(e), vn(e), e.g = null;
					var r = 2
				} else {
					if (!Ze(e.h, t)) return;
					n = t.D, tt(e.h, t), r = 1
				}
				if (0 != e.G)
					if (t.o)
						if (1 == r) {
							n = t.m ? t.m.length : 0, t = Date.now() - t.F;
							var i = e.B;
							re(r = ke(), new Te(r, n)), dn(e)
						} else gn(e);
				else if (3 == (i = t.s) || 0 == i && 0 < t.X || !(1 == r && function(e, t) {
						return !(Je(e.h) >= e.h.j - (e.s ? 1 : 0)) && (e.s ? (e.i = t.D.concat(e.i), !0) : !(1 == e.G || 2 == e.G || e.B >= (e.Va ? 0 : e.Wa)) && (e.s = Ie(c(e.Ga, e, t), xn(e, e.B)), e.B++, !0))
					}(e, t) || 2 == r && mn(e))) switch (n && 0 < n.length && (t = e.h, t.i = t.i.concat(n)), i) {
					case 1:
						kn(e, 5);
						break;
					case 4:
						kn(e, 10);
						break;
					case 3:
						kn(e, 6);
						break;
					default:
						kn(e, 2)
				}
			}

			function xn(e, t) {
				let n = e.Ta + Math.floor(Math.random() * e.cb);
				return e.isActive() || (n *= 2), n * t
			}

			function kn(e, t) {
				if (e.j.info("Error code " + t), 2 == t) {
					var n = c(e.fb, e),
						r = e.Xa;
					const t = !r;
					r = new at(r || "//www.google.com/images/cleardot.gif"), i.location && "http" == i.location.protocol || ot(r, "https"), dt(r), t ? function(e, t) {
						const n = new Ne;
						if (i.Image) {
							const r = new Image;
							r.onload = u(Tt, n, "TestLoadImage: loaded", !0, t, r), r.onerror = u(Tt, n, "TestLoadImage: error", !1, t, r), r.onabort = u(Tt, n, "TestLoadImage: abort", !1, t, r), r.ontimeout = u(Tt, n, "TestLoadImage: timeout", !1, t, r), i.setTimeout((function() {
								r.ontimeout && r.ontimeout()
							}), 1e4), r.src = e
						} else t(!1)
					}(r.toString(), n) : function(e, t) {
						new Ne;
						const n = new AbortController,
							r = setTimeout((() => {
								n.abort(), Tt(0, 0, !1, t)
							}), 1e4);
						fetch(e, {
							signal: n.signal
						}).then((e => {
							clearTimeout(r), e.ok ? Tt(0, 0, !0, t) : Tt(0, 0, !1, t)
						})).catch((() => {
							clearTimeout(r), Tt(0, 0, !1, t)
						}))
					}(r.toString(), n)
				} else Ee(2);
				e.G = 0, e.l && e.l.sa(t), Sn(e), un(e)
			}

			function Sn(e) {
				if (e.G = 0, e.ka = [], e.l) {
					const t = nt(e.h);
					0 == t.length && 0 == e.i.length || (f(e.ka, t), f(e.ka, e.i), e.h.i.length = 0, h(e.i), e.i.length = 0), e.l.ra()
				}
			}

			function Cn(e, t, n) {
				var r = n instanceof at ? st(n) : new at(n);
				if ("" != r.g) t && (r.g = t + "." + r.g), lt(r, r.s);
				else {
					var a = i.location;
					r = a.protocol, t = t ? t + "." + a.hostname : a.hostname, a = +a.port;
					var s = new at(null);
					r && ot(s, r), t && (s.g = t), a && lt(s, a), n && (s.l = n), r = s
				}
				return n = e.D, t = e.ya, n && t && ut(r, n, t), ut(r, "VER", e.la), fn(e, r), r
			}

			function _n(e, t, n) {
				if (t && !e.J) throw Error("Can't create secondary domain capable XhrIo object.");
				return (t = e.Ca && !e.pa ? new Mt(new Rt({
					eb: n
				})) : new Mt(e.pa)).Ha(e.J), t
			}

			function En() {}

			function Tn() {}

			function In(e, t) {
				ne.call(this), this.g = new on(t), this.l = e, this.h = t && t.messageUrlParams || null, e = t && t.messageHeaders || null, t && t.clientProtocolHeaderRequired && (e ? e["X-Client-Protocol"] = "webchannel" : e = {
					"X-Client-Protocol": "webchannel"
				}), this.g.o = e, e = t && t.initMessageHeaders || null, t && t.messageContentType && (e ? e["X-WebChannel-Content-Type"] = t.messageContentType : e = {
					"X-WebChannel-Content-Type": t.messageContentType
				}), t && t.va && (e ? e["X-WebChannel-Client-Profile"] = t.va : e = {
					"X-WebChannel-Client-Profile": t.va
				}), this.g.S = e, (e = t && t.Sb) && !p(e) && (this.g.m = e), this.v = t && t.supportsCrossDomainXhr || !1, this.u = t && t.sendRawJson || !1, (t = t && t.httpSessionIdParam) && !p(t) && (this.g.D = t, null !== (e = this.h) && t in e && (t in (e = this.h) && delete e[t])), this.j = new An(this)
			}

			function Nn(e) {
				ye.call(this), e.__headers__ && (this.headers = e.__headers__, this.statusCode = e.__status__, delete e.__headers__, delete e.__status__);
				var t = e.__sm__;
				if (t) {
					e: {
						for (const n in t) {
							e = n;
							break e
						}
						e = void 0
					}(this.i = e) && (e = this.i, t = null !== t && e in t ? t[e] : void 0),
					this.data = t
				}
				else this.data = e
			}

			function Rn() {
				be.call(this), this.status = 1
			}

			function An(e) {
				this.g = e
			}(e = Mt.prototype).Ha = function(e) {
				this.J = e
			}, e.ea = function(e, t, n, r) {
				if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + e);
				t = t ? t.toUpperCase() : "GET", this.D = e, this.l = "", this.m = 0, this.A = !1, this.h = !0, this.g = this.o ? this.o.g() : Ae.g(), this.v = this.o ? ge(this.o) : ge(Ae), this.g.onreadystatechange = c(this.Ea, this);
				try {
					this.B = !0, this.g.open(t, String(e), !0), this.B = !1
				} catch (s) {
					return void Jt(this, s)
				}
				if (e = n || "", n = new Map(this.headers), r)
					if (Object.getPrototypeOf(r) === Object.prototype)
						for (var a in r) n.set(a, r[a]);
					else {
						if ("function" !== typeof r.keys || "function" !== typeof r.get) throw Error("Unknown input type for opt_headers: " + String(r));
						for (const e of r.keys()) n.set(e, r.get(e))
					} r = Array.from(n.keys()).find((e => "content-type" == e.toLowerCase())), a = i.FormData && e instanceof i.FormData, !(0 <= Array.prototype.indexOf.call(Yt, t, void 0)) || r || a || n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
				for (const [i, o] of n) this.g.setRequestHeader(i, o);
				this.H && (this.g.responseType = this.H), "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
				try {
					nn(this), this.u = !0, this.g.send(e), this.u = !1
				} catch (s) {
					Jt(this, s)
				}
			}, e.abort = function(e) {
				this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.m = e || 7, re(this, "complete"), re(this, "abort"), tn(this))
			}, e.N = function() {
				this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), tn(this, !0)), Mt.aa.N.call(this)
			}, e.Ea = function() {
				this.s || (this.B || this.u || this.j ? en(this) : this.bb())
			}, e.bb = function() {
				en(this)
			}, e.isActive = function() {
				return !!this.g
			}, e.Z = function() {
				try {
					return 2 < rn(this) ? this.g.status : -1
				} catch (gt) {
					return -1
				}
			}, e.oa = function() {
				try {
					return this.g ? this.g.responseText : ""
				} catch (gt) {
					return ""
				}
			}, e.Oa = function(e) {
				if (this.g) {
					var t = this.g.responseText;
					return e && 0 == t.indexOf(e) && (t = t.substring(e.length)), he(t)
				}
			}, e.Ba = function() {
				return this.m
			}, e.Ka = function() {
				return "string" === typeof this.l ? this.l : String(this.l)
			}, (e = on.prototype).la = 8, e.G = 1, e.connect = function(e, t, n, r) {
				Ee(0), this.W = e, this.H = t || {}, n && void 0 !== r && (this.H.OSID = n, this.H.OAID = r), this.F = this.X, this.I = Cn(this, null, this.W), dn(this)
			}, e.Ga = function(e) {
				if (this.s)
					if (this.s = null, 1 == this.G) {
						if (!e) {
							this.U = Math.floor(1e5 * Math.random()), e = this.U++;
							const i = new Oe(this, this.j, e);
							let a = this.o;
							if (this.S && (a ? (a = b(a), x(a, this.S)) : a = this.S), null !== this.m || this.O || (i.H = a, a = null), this.P) e: {
								for (var t = 0, n = 0; n < this.i.length; n++) {
									var r = this.i[n];
									if (void 0 === (r = "__data__" in r.map && "string" === typeof(r = r.map.__data__) ? r.length : void 0)) break;
									if (4096 < (t += r)) {
										t = n;
										break e
									}
									if (4096 === t || n === this.i.length - 1) {
										t = n + 1;
										break e
									}
								}
								t = 1e3
							}
							else t = 1e3;
							t = pn(this, i, t), ut(n = st(this.I), "RID", e), ut(n, "CVER", 22), this.D && ut(n, "X-HTTP-Session-Id", this.D), fn(this, n), a && (this.O ? t = "headers=" + encodeURIComponent(String(Ot(a))) + "&" + t : this.m && Lt(n, this.m, a)), et(this.h, i), this.Ua && ut(n, "TYPE", "init"), this.P ? (ut(n, "$req", t), ut(n, "SID", "null"), i.T = !0, Ue(i, n, null)) : Ue(i, n, t), this.G = 2
						}
					} else 3 == this.G && (e ? hn(this, e) : 0 == this.i.length || $e(this.h) || hn(this))
			}, e.Fa = function() {
				if (this.u = null, yn(this), this.ba && !(this.M || null == this.g || 0 >= this.R)) {
					var e = 2 * this.R;
					this.j.info("BP detection timer enabled: " + e), this.A = Ie(c(this.ab, this), e)
				}
			}, e.ab = function() {
				this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.M = !0, Ee(10), cn(this), yn(this))
			}, e.Za = function() {
				null != this.C && (this.C = null, cn(this), mn(this), Ee(19))
			}, e.fb = function(e) {
				e ? (this.j.info("Successfully pinged google.com"), Ee(2)) : (this.j.info("Failed to ping google.com"), Ee(1))
			}, e.isActive = function() {
				return !!this.l && this.l.isActive(this)
			}, (e = En.prototype).ua = function() {}, e.ta = function() {}, e.sa = function() {}, e.ra = function() {}, e.isActive = function() {
				return !0
			}, e.Na = function() {}, Tn.prototype.g = function(e, t) {
				return new In(e, t)
			}, d(In, ne), In.prototype.m = function() {
				this.g.l = this.j, this.v && (this.g.J = !0), this.g.connect(this.l, this.h || void 0)
			}, In.prototype.close = function() {
				ln(this.g)
			}, In.prototype.o = function(e) {
				var t = this.g;
				if ("string" === typeof e) {
					var n = {};
					n.__data__ = e, e = n
				} else this.u && ((n = {}).__data__ = de(e), e = n);
				t.i.push(new Xe(t.Ya++, e)), 3 == t.G && dn(t)
			}, In.prototype.N = function() {
				this.g.l = null, delete this.j, ln(this.g), delete this.g, In.aa.N.call(this)
			}, d(Nn, ye), d(Rn, be), d(An, En), An.prototype.ua = function() {
				re(this.g, "a")
			}, An.prototype.ta = function(e) {
				re(this.g, new Nn(e))
			}, An.prototype.sa = function(e) {
				re(this.g, new Rn)
			}, An.prototype.ra = function() {
				re(this.g, "b")
			}, Tn.prototype.createWebChannel = Tn.prototype.g, In.prototype.send = In.prototype.o, In.prototype.open = In.prototype.m, In.prototype.close = In.prototype.close, Wt = Qt.createWebChannelTransport = function() {
				return new Tn
			}, Ht = Qt.getStatEventTarget = function() {
				return ke()
			}, qt = Qt.Event = we, Gt = Qt.Stat = {
				mb: 0,
				pb: 1,
				qb: 2,
				Jb: 3,
				Ob: 4,
				Lb: 5,
				Mb: 6,
				Kb: 7,
				Ib: 8,
				Nb: 9,
				PROXY: 10,
				NOPROXY: 11,
				Gb: 12,
				Cb: 13,
				Db: 14,
				Bb: 15,
				Eb: 16,
				Fb: 17,
				ib: 18,
				hb: 19,
				jb: 20
			}, Pe.NO_ERROR = 0, Pe.TIMEOUT = 8, Pe.HTTP_ERROR = 6, Bt = Qt.ErrorCode = Pe, je.COMPLETE = "complete", zt = Qt.EventType = je, me.EventType = ve, ve.OPEN = "a", ve.CLOSE = "b", ve.ERROR = "c", ve.MESSAGE = "d", ne.prototype.listen = ne.prototype.K, Vt = Qt.WebChannel = me, Ut = Qt.FetchXmlHttpFactory = Rt, Mt.prototype.listenOnce = Mt.prototype.L, Mt.prototype.getLastError = Mt.prototype.Ka, Mt.prototype.getLastErrorCode = Mt.prototype.Ba, Mt.prototype.getStatus = Mt.prototype.Z, Mt.prototype.getResponseJson = Mt.prototype.Oa, Mt.prototype.getResponseText = Mt.prototype.oa, Mt.prototype.send = Mt.prototype.ea, Mt.prototype.setWithCredentials = Mt.prototype.Ha, Ft = Qt.XhrIo = Mt
		}).apply("undefined" !== typeof Kt ? Kt : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
		const Xt = "@firebase/firestore";
		class Yt {
			constructor(e) {
				this.uid = e
			}
			isAuthenticated() {
				return null != this.uid
			}
			toKey() {
				return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
			}
			isEqual(e) {
				return e.uid === this.uid
			}
		}
		Yt.UNAUTHENTICATED = new Yt(null), Yt.GOOGLE_CREDENTIALS = new Yt("google-credentials-uid"), Yt.FIRST_PARTY = new Yt("first-party-uid"), Yt.MOCK_USER = new Yt("mock-user");
		let $t = "10.12.3";
		const Jt = new pe("@firebase/firestore");

		function Zt() {
			return Jt.logLevel
		}

		function en(e) {
			if (Jt.logLevel <= ce.DEBUG) {
				for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
				const i = n.map(rn);
				Jt.debug("Firestore (".concat($t, "): ").concat(e), ...i)
			}
		}

		function tn(e) {
			if (Jt.logLevel <= ce.ERROR) {
				for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
				const i = n.map(rn);
				Jt.error("Firestore (".concat($t, "): ").concat(e), ...i)
			}
		}

		function nn(e) {
			if (Jt.logLevel <= ce.WARN) {
				for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
				const i = n.map(rn);
				Jt.warn("Firestore (".concat($t, "): ").concat(e), ...i)
			}
		}

		function rn(e) {
			if ("string" == typeof e) return e;
			try {
				return function(e) {
					return JSON.stringify(e)
				}(e)
			} catch (t) {
				return e
			}
		}

		function an() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Unexpected state";
			const t = "FIRESTORE (".concat($t, ") INTERNAL ASSERTION FAILED: ") + e;
			throw tn(t), new Error(t)
		}

		function sn(e, t) {
			e || an()
		}

		function on(e, t) {
			return e
		}
		const ln = {
			OK: "ok",
			CANCELLED: "cancelled",
			UNKNOWN: "unknown",
			INVALID_ARGUMENT: "invalid-argument",
			DEADLINE_EXCEEDED: "deadline-exceeded",
			NOT_FOUND: "not-found",
			ALREADY_EXISTS: "already-exists",
			PERMISSION_DENIED: "permission-denied",
			UNAUTHENTICATED: "unauthenticated",
			RESOURCE_EXHAUSTED: "resource-exhausted",
			FAILED_PRECONDITION: "failed-precondition",
			ABORTED: "aborted",
			OUT_OF_RANGE: "out-of-range",
			UNIMPLEMENTED: "unimplemented",
			INTERNAL: "internal",
			UNAVAILABLE: "unavailable",
			DATA_LOSS: "data-loss"
		};
		class cn extends K {
			constructor(e, t) {
				super(e, t), this.code = e, this.message = t, this.toString = () => "".concat(this.name, ": [code=").concat(this.code, "]: ").concat(this.message)
			}
		}
		class un {
			constructor() {
				this.promise = new Promise(((e, t) => {
					this.resolve = e, this.reject = t
				}))
			}
		}
		class dn {
			constructor(e, t) {
				this.user = t, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", "Bearer ".concat(e))
			}
		}
		class hn {
			getToken() {
				return Promise.resolve(null)
			}
			invalidateToken() {}
			start(e, t) {
				e.enqueueRetryable((() => t(Yt.UNAUTHENTICATED)))
			}
			shutdown() {}
		}
		class fn {
			constructor(e) {
				this.token = e, this.changeListener = null
			}
			getToken() {
				return Promise.resolve(this.token)
			}
			invalidateToken() {}
			start(e, t) {
				this.changeListener = t, e.enqueueRetryable((() => t(this.token.user)))
			}
			shutdown() {
				this.changeListener = null
			}
		}
		class pn {
			constructor(e) {
				this.t = e, this.currentUser = Yt.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null
			}
			start(e, t) {
				let n = this.i;
				const r = e => this.i !== n ? (n = this.i, t(e)) : Promise.resolve();
				let i = new un;
				this.o = () => {
					this.i++, this.currentUser = this.u(), i.resolve(), i = new un, e.enqueueRetryable((() => r(this.currentUser)))
				};
				const a = () => {
						const t = i;
						e.enqueueRetryable((async () => {
							await t.promise, await r(this.currentUser)
						}))
					},
					s = e => {
						en("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e, this.auth.addAuthTokenListener(this.o), a()
					};
				this.t.onInit((e => s(e))), setTimeout((() => {
					if (!this.auth) {
						const e = this.t.getImmediate({
							optional: !0
						});
						e ? s(e) : (en("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new un)
					}
				}), 0), a()
			}
			getToken() {
				const e = this.i,
					t = this.forceRefresh;
				return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then((t => this.i !== e ? (en("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t ? (sn("string" == typeof t.accessToken), new dn(t.accessToken, this.currentUser)) : null)) : Promise.resolve(null)
			}
			invalidateToken() {
				this.forceRefresh = !0
			}
			shutdown() {
				this.auth && this.auth.removeAuthTokenListener(this.o)
			}
			u() {
				const e = this.auth && this.auth.getUid();
				return sn(null === e || "string" == typeof e), new Yt(e)
			}
		}
		class gn {
			constructor(e, t, n) {
				this.l = e, this.h = t, this.P = n, this.type = "FirstParty", this.user = Yt.FIRST_PARTY, this.I = new Map
			}
			T() {
				return this.P ? this.P() : null
			}
			get headers() {
				this.I.set("X-Goog-AuthUser", this.l);
				const e = this.T();
				return e && this.I.set("Authorization", e), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I
			}
		}
		class mn {
			constructor(e, t, n) {
				this.l = e, this.h = t, this.P = n
			}
			getToken() {
				return Promise.resolve(new gn(this.l, this.h, this.P))
			}
			start(e, t) {
				e.enqueueRetryable((() => t(Yt.FIRST_PARTY)))
			}
			shutdown() {}
			invalidateToken() {}
		}
		class vn {
			constructor(e) {
				this.value = e, this.type = "AppCheck", this.headers = new Map, e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
			}
		}
		class yn {
			constructor(e) {
				this.A = e, this.forceRefresh = !1, this.appCheck = null, this.R = null
			}
			start(e, t) {
				const n = e => {
					null != e.error && en("FirebaseAppCheckTokenProvider", "Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));
					const n = e.token !== this.R;
					return this.R = e.token, en("FirebaseAppCheckTokenProvider", "Received ".concat(n ? "new" : "existing", " token.")), n ? t(e.token) : Promise.resolve()
				};
				this.o = t => {
					e.enqueueRetryable((() => n(t)))
				};
				const r = e => {
					en("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e, this.appCheck.addTokenListener(this.o)
				};
				this.A.onInit((e => r(e))), setTimeout((() => {
					if (!this.appCheck) {
						const e = this.A.getImmediate({
							optional: !0
						});
						e ? r(e) : en("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
					}
				}), 0)
			}
			getToken() {
				const e = this.forceRefresh;
				return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then((e => e ? (sn("string" == typeof e.token), this.R = e.token, new vn(e.token)) : null)) : Promise.resolve(null)
			}
			invalidateToken() {
				this.forceRefresh = !0
			}
			shutdown() {
				this.appCheck && this.appCheck.removeTokenListener(this.o)
			}
		}

		function bn(e) {
			const t = "undefined" != typeof self && (self.crypto || self.msCrypto),
				n = new Uint8Array(e);
			if (t && "function" == typeof t.getRandomValues) t.getRandomValues(n);
			else
				for (let r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
			return n
		}
		class wn {
			static newId() {
				const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
					t = 62 * Math.floor(256 / 62);
				let n = "";
				for (; n.length < 20;) {
					const r = bn(40);
					for (let i = 0; i < r.length; ++i) n.length < 20 && r[i] < t && (n += e.charAt(r[i] % 62))
				}
				return n
			}
		}

		function xn(e, t) {
			return e < t ? -1 : e > t ? 1 : 0
		}

		function kn(e, t, n) {
			return e.length === t.length && e.every(((e, r) => n(e, t[r])))
		}
		class Sn {
			constructor(e, t) {
				if (this.seconds = e, this.nanoseconds = t, t < 0) throw new cn(ln.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
				if (t >= 1e9) throw new cn(ln.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
				if (e < -62135596800) throw new cn(ln.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
				if (e >= 253402300800) throw new cn(ln.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e)
			}
			static now() {
				return Sn.fromMillis(Date.now())
			}
			static fromDate(e) {
				return Sn.fromMillis(e.getTime())
			}
			static fromMillis(e) {
				const t = Math.floor(e / 1e3),
					n = Math.floor(1e6 * (e - 1e3 * t));
				return new Sn(t, n)
			}
			toDate() {
				return new Date(this.toMillis())
			}
			toMillis() {
				return 1e3 * this.seconds + this.nanoseconds / 1e6
			}
			_compareTo(e) {
				return this.seconds === e.seconds ? xn(this.nanoseconds, e.nanoseconds) : xn(this.seconds, e.seconds)
			}
			isEqual(e) {
				return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
			}
			toString() {
				return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
			}
			toJSON() {
				return {
					seconds: this.seconds,
					nanoseconds: this.nanoseconds
				}
			}
			valueOf() {
				const e = this.seconds - -62135596800;
				return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
			}
		}
		class Cn {
			constructor(e) {
				this.timestamp = e
			}
			static fromTimestamp(e) {
				return new Cn(e)
			}
			static min() {
				return new Cn(new Sn(0, 0))
			}
			static max() {
				return new Cn(new Sn(253402300799, 999999999))
			}
			compareTo(e) {
				return this.timestamp._compareTo(e.timestamp)
			}
			isEqual(e) {
				return this.timestamp.isEqual(e.timestamp)
			}
			toMicroseconds() {
				return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
			}
			toString() {
				return "SnapshotVersion(" + this.timestamp.toString() + ")"
			}
			toTimestamp() {
				return this.timestamp
			}
		}
		class _n {
			constructor(e, t, n) {
				void 0 === t ? t = 0 : t > e.length && an(), void 0 === n ? n = e.length - t : n > e.length - t && an(), this.segments = e, this.offset = t, this.len = n
			}
			get length() {
				return this.len
			}
			isEqual(e) {
				return 0 === _n.comparator(this, e)
			}
			child(e) {
				const t = this.segments.slice(this.offset, this.limit());
				return e instanceof _n ? e.forEach((e => {
					t.push(e)
				})) : t.push(e), this.construct(t)
			}
			limit() {
				return this.offset + this.length
			}
			popFirst(e) {
				return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e)
			}
			popLast() {
				return this.construct(this.segments, this.offset, this.length - 1)
			}
			firstSegment() {
				return this.segments[this.offset]
			}
			lastSegment() {
				return this.get(this.length - 1)
			}
			get(e) {
				return this.segments[this.offset + e]
			}
			isEmpty() {
				return 0 === this.length
			}
			isPrefixOf(e) {
				if (e.length < this.length) return !1;
				for (let t = 0; t < this.length; t++)
					if (this.get(t) !== e.get(t)) return !1;
				return !0
			}
			isImmediateParentOf(e) {
				if (this.length + 1 !== e.length) return !1;
				for (let t = 0; t < this.length; t++)
					if (this.get(t) !== e.get(t)) return !1;
				return !0
			}
			forEach(e) {
				for (let t = this.offset, n = this.limit(); t < n; t++) e(this.segments[t])
			}
			toArray() {
				return this.segments.slice(this.offset, this.limit())
			}
			static comparator(e, t) {
				const n = Math.min(e.length, t.length);
				for (let r = 0; r < n; r++) {
					const n = e.get(r),
						i = t.get(r);
					if (n < i) return -1;
					if (n > i) return 1
				}
				return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
			}
		}
		class En extends _n {
			construct(e, t, n) {
				return new En(e, t, n)
			}
			canonicalString() {
				return this.toArray().join("/")
			}
			toString() {
				return this.canonicalString()
			}
			toUriEncodedString() {
				return this.toArray().map(encodeURIComponent).join("/")
			}
			static fromString() {
				const e = [];
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				for (const i of n) {
					if (i.indexOf("//") >= 0) throw new cn(ln.INVALID_ARGUMENT, "Invalid segment (".concat(i, "). Paths must not contain // in them."));
					e.push(...i.split("/").filter((e => e.length > 0)))
				}
				return new En(e)
			}
			static emptyPath() {
				return new En([])
			}
		}
		const Tn = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
		class In extends _n {
			construct(e, t, n) {
				return new In(e, t, n)
			}
			static isValidIdentifier(e) {
				return Tn.test(e)
			}
			canonicalString() {
				return this.toArray().map((e => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), In.isValidIdentifier(e) || (e = "`" + e + "`"), e))).join(".")
			}
			toString() {
				return this.canonicalString()
			}
			isKeyField() {
				return 1 === this.length && "__name__" === this.get(0)
			}
			static keyField() {
				return new In(["__name__"])
			}
			static fromServerFormat(e) {
				const t = [];
				let n = "",
					r = 0;
				const i = () => {
					if (0 === n.length) throw new cn(ln.INVALID_ARGUMENT, "Invalid field path (".concat(e, "). Paths must not be empty, begin with '.', end with '.', or contain '..'"));
					t.push(n), n = ""
				};
				let a = !1;
				for (; r < e.length;) {
					const t = e[r];
					if ("\\" === t) {
						if (r + 1 === e.length) throw new cn(ln.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
						const t = e[r + 1];
						if ("\\" !== t && "." !== t && "`" !== t) throw new cn(ln.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
						n += t, r += 2
					} else "`" === t ? (a = !a, r++) : "." !== t || a ? (n += t, r++) : (i(), r++)
				}
				if (i(), a) throw new cn(ln.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
				return new In(t)
			}
			static emptyPath() {
				return new In([])
			}
		}
		class Nn {
			constructor(e) {
				this.path = e
			}
			static fromPath(e) {
				return new Nn(En.fromString(e))
			}
			static fromName(e) {
				return new Nn(En.fromString(e).popFirst(5))
			}
			static empty() {
				return new Nn(En.emptyPath())
			}
			get collectionGroup() {
				return this.path.popLast().lastSegment()
			}
			hasCollectionId(e) {
				return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
			}
			getCollectionGroup() {
				return this.path.get(this.path.length - 2)
			}
			getCollectionPath() {
				return this.path.popLast()
			}
			isEqual(e) {
				return null !== e && 0 === En.comparator(this.path, e.path)
			}
			toString() {
				return this.path.toString()
			}
			static comparator(e, t) {
				return En.comparator(e.path, t.path)
			}
			static isDocumentKey(e) {
				return e.length % 2 == 0
			}
			static fromSegments(e) {
				return new Nn(new En(e.slice()))
			}
		}
		class Rn {
			constructor(e, t, n, r) {
				this.indexId = e, this.collectionGroup = t, this.fields = n, this.indexState = r
			}
		}
		Rn.UNKNOWN_ID = -1;

		function An(e, t) {
			const n = e.toTimestamp().seconds,
				r = e.toTimestamp().nanoseconds + 1,
				i = Cn.fromTimestamp(1e9 === r ? new Sn(n + 1, 0) : new Sn(n, r));
			return new jn(i, Nn.empty(), t)
		}

		function Pn(e) {
			return new jn(e.readTime, e.key, -1)
		}
		class jn {
			constructor(e, t, n) {
				this.readTime = e, this.documentKey = t, this.largestBatchId = n
			}
			static min() {
				return new jn(Cn.min(), Nn.empty(), -1)
			}
			static max() {
				return new jn(Cn.max(), Nn.empty(), -1)
			}
		}

		function Dn(e, t) {
			let n = e.readTime.compareTo(t.readTime);
			return 0 !== n ? n : (n = Nn.comparator(e.documentKey, t.documentKey), 0 !== n ? n : xn(e.largestBatchId, t.largestBatchId))
		}
		const On = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
		class Ln {
			constructor() {
				this.onCommittedListeners = []
			}
			addOnCommittedListener(e) {
				this.onCommittedListeners.push(e)
			}
			raiseOnCommittedEvent() {
				this.onCommittedListeners.forEach((e => e()))
			}
		}
		async function Mn(e) {
			if (e.code !== ln.FAILED_PRECONDITION || e.message !== On) throw e;
			en("LocalStore", "Unexpectedly lost primary lease")
		}
		class Fn {
			constructor(e) {
				this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, e((e => {
					this.isDone = !0, this.result = e, this.nextCallback && this.nextCallback(e)
				}), (e => {
					this.isDone = !0, this.error = e, this.catchCallback && this.catchCallback(e)
				}))
			} catch (e) {
				return this.next(void 0, e)
			}
			next(e, t) {
				return this.callbackAttached && an(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new Fn(((n, r) => {
					this.nextCallback = t => {
						this.wrapSuccess(e, t).next(n, r)
					}, this.catchCallback = e => {
						this.wrapFailure(t, e).next(n, r)
					}
				}))
			}
			toPromise() {
				return new Promise(((e, t) => {
					this.next(e, t)
				}))
			}
			wrapUserFunction(e) {
				try {
					const t = e();
					return t instanceof Fn ? t : Fn.resolve(t)
				} catch (e) {
					return Fn.reject(e)
				}
			}
			wrapSuccess(e, t) {
				return e ? this.wrapUserFunction((() => e(t))) : Fn.resolve(t)
			}
			wrapFailure(e, t) {
				return e ? this.wrapUserFunction((() => e(t))) : Fn.reject(t)
			}
			static resolve(e) {
				return new Fn(((t, n) => {
					t(e)
				}))
			}
			static reject(e) {
				return new Fn(((t, n) => {
					n(e)
				}))
			}
			static waitFor(e) {
				return new Fn(((t, n) => {
					let r = 0,
						i = 0,
						a = !1;
					e.forEach((e => {
						++r, e.next((() => {
							++i, a && i === r && t()
						}), (e => n(e)))
					})), a = !0, i === r && t()
				}))
			}
			static or(e) {
				let t = Fn.resolve(!1);
				for (const n of e) t = t.next((e => e ? Fn.resolve(e) : n()));
				return t
			}
			static forEach(e, t) {
				const n = [];
				return e.forEach(((e, r) => {
					n.push(t.call(this, e, r))
				})), this.waitFor(n)
			}
			static mapArray(e, t) {
				return new Fn(((n, r) => {
					const i = e.length,
						a = new Array(i);
					let s = 0;
					for (let o = 0; o < i; o++) {
						const l = o;
						t(e[l]).next((e => {
							a[l] = e, ++s, s === i && n(a)
						}), (e => r(e)))
					}
				}))
			}
			static doWhile(e, t) {
				return new Fn(((n, r) => {
					const i = () => {
						!0 === e() ? t().next((() => {
							i()
						}), r) : n()
					};
					i()
				}))
			}
		}

		function Un(e) {
			const t = e.match(/Android ([\d.]+)/i),
				n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
			return Number(n)
		}

		function Vn(e) {
			return "IndexedDbTransactionError" === e.name
		}
		class zn {
			constructor(e, t) {
				this.previousValue = e, t && (t.sequenceNumberHandler = e => this.ie(e), this.se = e => t.writeSequenceNumber(e))
			}
			ie(e) {
				return this.previousValue = Math.max(e, this.previousValue), this.previousValue
			}
			next() {
				const e = ++this.previousValue;
				return this.se && this.se(e), e
			}
		}

		function Bn(e) {
			return null == e
		}

		function Gn(e) {
			return 0 === e && 1 / e == -1 / 0
		}

		function qn(e) {
			return "number" == typeof e && Number.isInteger(e) && !Gn(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER
		}
		zn.oe = -1;
		const Hn = ["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries"],
			Wn = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"],
			Kn = Wn;

		function Qn(e) {
			let t = 0;
			for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
			return t
		}

		function Xn(e, t) {
			for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
		}

		function Yn(e) {
			for (const t in e)
				if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
			return !0
		}
		class $n {
			constructor(e, t) {
				this.comparator = e, this.root = t || Zn.EMPTY
			}
			insert(e, t) {
				return new $n(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, Zn.BLACK, null, null))
			}
			remove(e) {
				return new $n(this.comparator, this.root.remove(e, this.comparator).copy(null, null, Zn.BLACK, null, null))
			}
			get(e) {
				let t = this.root;
				for (; !t.isEmpty();) {
					const n = this.comparator(e, t.key);
					if (0 === n) return t.value;
					n < 0 ? t = t.left : n > 0 && (t = t.right)
				}
				return null
			}
			indexOf(e) {
				let t = 0,
					n = this.root;
				for (; !n.isEmpty();) {
					const r = this.comparator(e, n.key);
					if (0 === r) return t + n.left.size;
					r < 0 ? n = n.left : (t += n.left.size + 1, n = n.right)
				}
				return -1
			}
			isEmpty() {
				return this.root.isEmpty()
			}
			get size() {
				return this.root.size
			}
			minKey() {
				return this.root.minKey()
			}
			maxKey() {
				return this.root.maxKey()
			}
			inorderTraversal(e) {
				return this.root.inorderTraversal(e)
			}
			forEach(e) {
				this.inorderTraversal(((t, n) => (e(t, n), !1)))
			}
			toString() {
				const e = [];
				return this.inorderTraversal(((t, n) => (e.push("".concat(t, ":").concat(n)), !1))), "{".concat(e.join(", "), "}")
			}
			reverseTraversal(e) {
				return this.root.reverseTraversal(e)
			}
			getIterator() {
				return new Jn(this.root, null, this.comparator, !1)
			}
			getIteratorFrom(e) {
				return new Jn(this.root, e, this.comparator, !1)
			}
			getReverseIterator() {
				return new Jn(this.root, null, this.comparator, !0)
			}
			getReverseIteratorFrom(e) {
				return new Jn(this.root, e, this.comparator, !0)
			}
		}
		class Jn {
			constructor(e, t, n, r) {
				this.isReverse = r, this.nodeStack = [];
				let i = 1;
				for (; !e.isEmpty();)
					if (i = t ? n(e.key, t) : 1, t && r && (i *= -1), i < 0) e = this.isReverse ? e.left : e.right;
					else {
						if (0 === i) {
							this.nodeStack.push(e);
							break
						}
						this.nodeStack.push(e), e = this.isReverse ? e.right : e.left
					}
			}
			getNext() {
				let e = this.nodeStack.pop();
				const t = {
					key: e.key,
					value: e.value
				};
				if (this.isReverse)
					for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
				else
					for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
				return t
			}
			hasNext() {
				return this.nodeStack.length > 0
			}
			peek() {
				if (0 === this.nodeStack.length) return null;
				const e = this.nodeStack[this.nodeStack.length - 1];
				return {
					key: e.key,
					value: e.value
				}
			}
		}
		class Zn {
			constructor(e, t, n, r, i) {
				this.key = e, this.value = t, this.color = null != n ? n : Zn.RED, this.left = null != r ? r : Zn.EMPTY, this.right = null != i ? i : Zn.EMPTY, this.size = this.left.size + 1 + this.right.size
			}
			copy(e, t, n, r, i) {
				return new Zn(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right)
			}
			isEmpty() {
				return !1
			}
			inorderTraversal(e) {
				return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
			}
			reverseTraversal(e) {
				return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
			}
			min() {
				return this.left.isEmpty() ? this : this.left.min()
			}
			minKey() {
				return this.min().key
			}
			maxKey() {
				return this.right.isEmpty() ? this.key : this.right.maxKey()
			}
			insert(e, t, n) {
				let r = this;
				const i = n(e, r.key);
				return r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp()
			}
			removeMin() {
				if (this.left.isEmpty()) return Zn.EMPTY;
				let e = this;
				return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp()
			}
			remove(e, t) {
				let n, r = this;
				if (t(e, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(e, t), null);
				else {
					if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === t(e, r.key)) {
						if (r.right.isEmpty()) return Zn.EMPTY;
						n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin())
					}
					r = r.copy(null, null, null, null, r.right.remove(e, t))
				}
				return r.fixUp()
			}
			isRed() {
				return this.color
			}
			fixUp() {
				let e = this;
				return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e
			}
			moveRedLeft() {
				let e = this.colorFlip();
				return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e
			}
			moveRedRight() {
				let e = this.colorFlip();
				return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e
			}
			rotateLeft() {
				const e = this.copy(null, null, Zn.RED, null, this.right.left);
				return this.right.copy(null, null, this.color, e, null)
			}
			rotateRight() {
				const e = this.copy(null, null, Zn.RED, this.left.right, null);
				return this.left.copy(null, null, this.color, null, e)
			}
			colorFlip() {
				const e = this.left.copy(null, null, !this.left.color, null, null),
					t = this.right.copy(null, null, !this.right.color, null, null);
				return this.copy(null, null, !this.color, e, t)
			}
			checkMaxDepth() {
				const e = this.check();
				return Math.pow(2, e) <= this.size + 1
			}
			check() {
				if (this.isRed() && this.left.isRed()) throw an();
				if (this.right.isRed()) throw an();
				const e = this.left.check();
				if (e !== this.right.check()) throw an();
				return e + (this.isRed() ? 0 : 1)
			}
		}
		Zn.EMPTY = null, Zn.RED = !0, Zn.BLACK = !1, Zn.EMPTY = new class {
			constructor() {
				this.size = 0
			}
			get key() {
				throw an()
			}
			get value() {
				throw an()
			}
			get color() {
				throw an()
			}
			get left() {
				throw an()
			}
			get right() {
				throw an()
			}
			copy(e, t, n, r, i) {
				return this
			}
			insert(e, t, n) {
				return new Zn(e, t)
			}
			remove(e, t) {
				return this
			}
			isEmpty() {
				return !0
			}
			inorderTraversal(e) {
				return !1
			}
			reverseTraversal(e) {
				return !1
			}
			minKey() {
				return null
			}
			maxKey() {
				return null
			}
			isRed() {
				return !1
			}
			checkMaxDepth() {
				return !0
			}
			check() {
				return 0
			}
		};
		class er {
			constructor(e) {
				this.comparator = e, this.data = new $n(this.comparator)
			}
			has(e) {
				return null !== this.data.get(e)
			}
			first() {
				return this.data.minKey()
			}
			last() {
				return this.data.maxKey()
			}
			get size() {
				return this.data.size
			}
			indexOf(e) {
				return this.data.indexOf(e)
			}
			forEach(e) {
				this.data.inorderTraversal(((t, n) => (e(t), !1)))
			}
			forEachInRange(e, t) {
				const n = this.data.getIteratorFrom(e[0]);
				for (; n.hasNext();) {
					const r = n.getNext();
					if (this.comparator(r.key, e[1]) >= 0) return;
					t(r.key)
				}
			}
			forEachWhile(e, t) {
				let n;
				for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext();)
					if (!e(n.getNext().key)) return
			}
			firstAfterOrEqual(e) {
				const t = this.data.getIteratorFrom(e);
				return t.hasNext() ? t.getNext().key : null
			}
			getIterator() {
				return new tr(this.data.getIterator())
			}
			getIteratorFrom(e) {
				return new tr(this.data.getIteratorFrom(e))
			}
			add(e) {
				return this.copy(this.data.remove(e).insert(e, !0))
			}
			delete(e) {
				return this.has(e) ? this.copy(this.data.remove(e)) : this
			}
			isEmpty() {
				return this.data.isEmpty()
			}
			unionWith(e) {
				let t = this;
				return t.size < e.size && (t = e, e = this), e.forEach((e => {
					t = t.add(e)
				})), t
			}
			isEqual(e) {
				if (!(e instanceof er)) return !1;
				if (this.size !== e.size) return !1;
				const t = this.data.getIterator(),
					n = e.data.getIterator();
				for (; t.hasNext();) {
					const e = t.getNext().key,
						r = n.getNext().key;
					if (0 !== this.comparator(e, r)) return !1
				}
				return !0
			}
			toArray() {
				const e = [];
				return this.forEach((t => {
					e.push(t)
				})), e
			}
			toString() {
				const e = [];
				return this.forEach((t => e.push(t))), "SortedSet(" + e.toString() + ")"
			}
			copy(e) {
				const t = new er(this.comparator);
				return t.data = e, t
			}
		}
		class tr {
			constructor(e) {
				this.iter = e
			}
			getNext() {
				return this.iter.getNext().key
			}
			hasNext() {
				return this.iter.hasNext()
			}
		}
		class nr {
			constructor(e) {
				this.fields = e, e.sort(In.comparator)
			}
			static empty() {
				return new nr([])
			}
			unionWith(e) {
				let t = new er(In.comparator);
				for (const n of this.fields) t = t.add(n);
				for (const n of e) t = t.add(n);
				return new nr(t.toArray())
			}
			covers(e) {
				for (const t of this.fields)
					if (t.isPrefixOf(e)) return !0;
				return !1
			}
			isEqual(e) {
				return kn(this.fields, e.fields, ((e, t) => e.isEqual(t)))
			}
		}
		class rr extends Error {
			constructor() {
				super(...arguments), this.name = "Base64DecodeError"
			}
		}
		class ir {
			constructor(e) {
				this.binaryString = e
			}
			static fromBase64String(e) {
				const t = function(e) {
					try {
						return atob(e)
					} catch (e) {
						throw "undefined" != typeof DOMException && e instanceof DOMException ? new rr("Invalid base64 string: " + e) : e
					}
				}(e);
				return new ir(t)
			}
			static fromUint8Array(e) {
				const t = function(e) {
					let t = "";
					for (let n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
					return t
				}(e);
				return new ir(t)
			} [Symbol.iterator]() {
				let e = 0;
				return {
					next: () => e < this.binaryString.length ? {
						value: this.binaryString.charCodeAt(e++),
						done: !1
					} : {
						value: void 0,
						done: !0
					}
				}
			}
			toBase64() {
				return e = this.binaryString, btoa(e);
				var e
			}
			toUint8Array() {
				return function(e) {
					const t = new Uint8Array(e.length);
					for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
					return t
				}(this.binaryString)
			}
			approximateByteSize() {
				return 2 * this.binaryString.length
			}
			compareTo(e) {
				return xn(this.binaryString, e.binaryString)
			}
			isEqual(e) {
				return this.binaryString === e.binaryString
			}
		}
		ir.EMPTY_BYTE_STRING = new ir("");
		const ar = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

		function sr(e) {
			if (sn(!!e), "string" == typeof e) {
				let t = 0;
				const n = ar.exec(e);
				if (sn(!!n), n[1]) {
					let e = n[1];
					e = (e + "000000000").substr(0, 9), t = Number(e)
				}
				const r = new Date(e);
				return {
					seconds: Math.floor(r.getTime() / 1e3),
					nanos: t
				}
			}
			return {
				seconds: or(e.seconds),
				nanos: or(e.nanos)
			}
		}

		function or(e) {
			return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0
		}

		function lr(e) {
			return "string" == typeof e ? ir.fromBase64String(e) : ir.fromUint8Array(e)
		}

		function cr(e) {
			var t, n;
			return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
		}

		function ur(e) {
			const t = e.mapValue.fields.__previous_value__;
			return cr(t) ? ur(t) : t
		}

		function dr(e) {
			const t = sr(e.mapValue.fields.__local_write_time__.timestampValue);
			return new Sn(t.seconds, t.nanos)
		}
		class hr {
			constructor(e, t, n, r, i, a, s, o, l) {
				this.databaseId = e, this.appId = t, this.persistenceKey = n, this.host = r, this.ssl = i, this.forceLongPolling = a, this.autoDetectLongPolling = s, this.longPollingOptions = o, this.useFetchStreams = l
			}
		}
		class fr {
			constructor(e, t) {
				this.projectId = e, this.database = t || "(default)"
			}
			static empty() {
				return new fr("", "")
			}
			get isDefaultDatabase() {
				return "(default)" === this.database
			}
			isEqual(e) {
				return e instanceof fr && e.projectId === this.projectId && e.database === this.database
			}
		}
		const pr = {
			mapValue: {
				fields: {
					__type__: {
						stringValue: "__max__"
					}
				}
			}
		};

		function gr(e) {
			return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? cr(e) ? 4 : Nr(e) ? 9007199254740991 : 10 : an()
		}

		function mr(e, t) {
			if (e === t) return !0;
			const n = gr(e);
			if (n !== gr(t)) return !1;
			switch (n) {
				case 0:
				case 9007199254740991:
					return !0;
				case 1:
					return e.booleanValue === t.booleanValue;
				case 4:
					return dr(e).isEqual(dr(t));
				case 3:
					return function(e, t) {
						if ("string" == typeof e.timestampValue && "string" == typeof t.timestampValue && e.timestampValue.length === t.timestampValue.length) return e.timestampValue === t.timestampValue;
						const n = sr(e.timestampValue),
							r = sr(t.timestampValue);
						return n.seconds === r.seconds && n.nanos === r.nanos
					}(e, t);
				case 5:
					return e.stringValue === t.stringValue;
				case 6:
					return function(e, t) {
						return lr(e.bytesValue).isEqual(lr(t.bytesValue))
					}(e, t);
				case 7:
					return e.referenceValue === t.referenceValue;
				case 8:
					return function(e, t) {
						return or(e.geoPointValue.latitude) === or(t.geoPointValue.latitude) && or(e.geoPointValue.longitude) === or(t.geoPointValue.longitude)
					}(e, t);
				case 2:
					return function(e, t) {
						if ("integerValue" in e && "integerValue" in t) return or(e.integerValue) === or(t.integerValue);
						if ("doubleValue" in e && "doubleValue" in t) {
							const n = or(e.doubleValue),
								r = or(t.doubleValue);
							return n === r ? Gn(n) === Gn(r) : isNaN(n) && isNaN(r)
						}
						return !1
					}(e, t);
				case 9:
					return kn(e.arrayValue.values || [], t.arrayValue.values || [], mr);
				case 10:
					return function(e, t) {
						const n = e.mapValue.fields || {},
							r = t.mapValue.fields || {};
						if (Qn(n) !== Qn(r)) return !1;
						for (const i in n)
							if (n.hasOwnProperty(i) && (void 0 === r[i] || !mr(n[i], r[i]))) return !1;
						return !0
					}(e, t);
				default:
					return an()
			}
		}

		function vr(e, t) {
			return void 0 !== (e.values || []).find((e => mr(e, t)))
		}

		function yr(e, t) {
			if (e === t) return 0;
			const n = gr(e),
				r = gr(t);
			if (n !== r) return xn(n, r);
			switch (n) {
				case 0:
				case 9007199254740991:
					return 0;
				case 1:
					return xn(e.booleanValue, t.booleanValue);
				case 2:
					return function(e, t) {
						const n = or(e.integerValue || e.doubleValue),
							r = or(t.integerValue || t.doubleValue);
						return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1
					}(e, t);
				case 3:
					return br(e.timestampValue, t.timestampValue);
				case 4:
					return br(dr(e), dr(t));
				case 5:
					return xn(e.stringValue, t.stringValue);
				case 6:
					return function(e, t) {
						const n = lr(e),
							r = lr(t);
						return n.compareTo(r)
					}(e.bytesValue, t.bytesValue);
				case 7:
					return function(e, t) {
						const n = e.split("/"),
							r = t.split("/");
						for (let i = 0; i < n.length && i < r.length; i++) {
							const e = xn(n[i], r[i]);
							if (0 !== e) return e
						}
						return xn(n.length, r.length)
					}(e.referenceValue, t.referenceValue);
				case 8:
					return function(e, t) {
						const n = xn(or(e.latitude), or(t.latitude));
						return 0 !== n ? n : xn(or(e.longitude), or(t.longitude))
					}(e.geoPointValue, t.geoPointValue);
				case 9:
					return function(e, t) {
						const n = e.values || [],
							r = t.values || [];
						for (let i = 0; i < n.length && i < r.length; ++i) {
							const e = yr(n[i], r[i]);
							if (e) return e
						}
						return xn(n.length, r.length)
					}(e.arrayValue, t.arrayValue);
				case 10:
					return function(e, t) {
						if (e === pr.mapValue && t === pr.mapValue) return 0;
						if (e === pr.mapValue) return 1;
						if (t === pr.mapValue) return -1;
						const n = e.fields || {},
							r = Object.keys(n),
							i = t.fields || {},
							a = Object.keys(i);
						r.sort(), a.sort();
						for (let s = 0; s < r.length && s < a.length; ++s) {
							const e = xn(r[s], a[s]);
							if (0 !== e) return e;
							const t = yr(n[r[s]], i[a[s]]);
							if (0 !== t) return t
						}
						return xn(r.length, a.length)
					}(e.mapValue, t.mapValue);
				default:
					throw an()
			}
		}

		function br(e, t) {
			if ("string" == typeof e && "string" == typeof t && e.length === t.length) return xn(e, t);
			const n = sr(e),
				r = sr(t),
				i = xn(n.seconds, r.seconds);
			return 0 !== i ? i : xn(n.nanos, r.nanos)
		}

		function wr(e) {
			return xr(e)
		}

		function xr(e) {
			return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(e) {
				const t = sr(e);
				return "time(".concat(t.seconds, ",").concat(t.nanos, ")")
			}(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? function(e) {
				return lr(e).toBase64()
			}(e.bytesValue) : "referenceValue" in e ? function(e) {
				return Nn.fromName(e).toString()
			}(e.referenceValue) : "geoPointValue" in e ? function(e) {
				return "geo(".concat(e.latitude, ",").concat(e.longitude, ")")
			}(e.geoPointValue) : "arrayValue" in e ? function(e) {
				let t = "[",
					n = !0;
				for (const r of e.values || []) n ? n = !1 : t += ",", t += xr(r);
				return t + "]"
			}(e.arrayValue) : "mapValue" in e ? function(e) {
				const t = Object.keys(e.fields || {}).sort();
				let n = "{",
					r = !0;
				for (const i of t) r ? r = !1 : n += ",", n += "".concat(i, ":").concat(xr(e.fields[i]));
				return n + "}"
			}(e.mapValue) : an()
		}

		function kr(e, t) {
			return {
				referenceValue: "projects/".concat(e.projectId, "/databases/").concat(e.database, "/documents/").concat(t.path.canonicalString())
			}
		}

		function Sr(e) {
			return !!e && "integerValue" in e
		}

		function Cr(e) {
			return !!e && "arrayValue" in e
		}

		function _r(e) {
			return !!e && "nullValue" in e
		}

		function Er(e) {
			return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue))
		}

		function Tr(e) {
			return !!e && "mapValue" in e
		}

		function Ir(e) {
			if (e.geoPointValue) return {
				geoPointValue: Object.assign({}, e.geoPointValue)
			};
			if (e.timestampValue && "object" == typeof e.timestampValue) return {
				timestampValue: Object.assign({}, e.timestampValue)
			};
			if (e.mapValue) {
				const t = {
					mapValue: {
						fields: {}
					}
				};
				return Xn(e.mapValue.fields, ((e, n) => t.mapValue.fields[e] = Ir(n))), t
			}
			if (e.arrayValue) {
				const t = {
					arrayValue: {
						values: []
					}
				};
				for (let n = 0; n < (e.arrayValue.values || []).length; ++n) t.arrayValue.values[n] = Ir(e.arrayValue.values[n]);
				return t
			}
			return Object.assign({}, e)
		}

		function Nr(e) {
			return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue
		}
		class Rr {
			constructor(e) {
				this.value = e
			}
			static empty() {
				return new Rr({
					mapValue: {}
				})
			}
			field(e) {
				if (e.isEmpty()) return this.value; {
					let t = this.value;
					for (let n = 0; n < e.length - 1; ++n)
						if (t = (t.mapValue.fields || {})[e.get(n)], !Tr(t)) return null;
					return t = (t.mapValue.fields || {})[e.lastSegment()], t || null
				}
			}
			set(e, t) {
				this.getFieldsMap(e.popLast())[e.lastSegment()] = Ir(t)
			}
			setAll(e) {
				let t = In.emptyPath(),
					n = {},
					r = [];
				e.forEach(((e, i) => {
					if (!t.isImmediateParentOf(i)) {
						const e = this.getFieldsMap(t);
						this.applyChanges(e, n, r), n = {}, r = [], t = i.popLast()
					}
					e ? n[i.lastSegment()] = Ir(e) : r.push(i.lastSegment())
				}));
				const i = this.getFieldsMap(t);
				this.applyChanges(i, n, r)
			}
			delete(e) {
				const t = this.field(e.popLast());
				Tr(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()]
			}
			isEqual(e) {
				return mr(this.value, e.value)
			}
			getFieldsMap(e) {
				let t = this.value;
				t.mapValue.fields || (t.mapValue = {
					fields: {}
				});
				for (let n = 0; n < e.length; ++n) {
					let r = t.mapValue.fields[e.get(n)];
					Tr(r) && r.mapValue.fields || (r = {
						mapValue: {
							fields: {}
						}
					}, t.mapValue.fields[e.get(n)] = r), t = r
				}
				return t.mapValue.fields
			}
			applyChanges(e, t, n) {
				Xn(t, ((t, n) => e[t] = n));
				for (const r of n) delete e[r]
			}
			clone() {
				return new Rr(Ir(this.value))
			}
		}

		function Ar(e) {
			const t = [];
			return Xn(e.fields, ((e, n) => {
				const r = new In([e]);
				if (Tr(n)) {
					const e = Ar(n.mapValue).fields;
					if (0 === e.length) t.push(r);
					else
						for (const n of e) t.push(r.child(n))
				} else t.push(r)
			})), new nr(t)
		}
		class Pr {
			constructor(e, t, n, r, i, a, s) {
				this.key = e, this.documentType = t, this.version = n, this.readTime = r, this.createTime = i, this.data = a, this.documentState = s
			}
			static newInvalidDocument(e) {
				return new Pr(e, 0, Cn.min(), Cn.min(), Cn.min(), Rr.empty(), 0)
			}
			static newFoundDocument(e, t, n, r) {
				return new Pr(e, 1, t, Cn.min(), n, r, 0)
			}
			static newNoDocument(e, t) {
				return new Pr(e, 2, t, Cn.min(), Cn.min(), Rr.empty(), 0)
			}
			static newUnknownDocument(e, t) {
				return new Pr(e, 3, t, Cn.min(), Cn.min(), Rr.empty(), 2)
			}
			convertToFoundDocument(e, t) {
				return !this.createTime.isEqual(Cn.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this
			}
			convertToNoDocument(e) {
				return this.version = e, this.documentType = 2, this.data = Rr.empty(), this.documentState = 0, this
			}
			convertToUnknownDocument(e) {
				return this.version = e, this.documentType = 3, this.data = Rr.empty(), this.documentState = 2, this
			}
			setHasCommittedMutations() {
				return this.documentState = 2, this
			}
			setHasLocalMutations() {
				return this.documentState = 1, this.version = Cn.min(), this
			}
			setReadTime(e) {
				return this.readTime = e, this
			}
			get hasLocalMutations() {
				return 1 === this.documentState
			}
			get hasCommittedMutations() {
				return 2 === this.documentState
			}
			get hasPendingWrites() {
				return this.hasLocalMutations || this.hasCommittedMutations
			}
			isValidDocument() {
				return 0 !== this.documentType
			}
			isFoundDocument() {
				return 1 === this.documentType
			}
			isNoDocument() {
				return 2 === this.documentType
			}
			isUnknownDocument() {
				return 3 === this.documentType
			}
			isEqual(e) {
				return e instanceof Pr && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data)
			}
			mutableCopy() {
				return new Pr(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState)
			}
			toString() {
				return "Document(".concat(this.key, ", ").concat(this.version, ", ").concat(JSON.stringify(this.data.value), ", {createTime: ").concat(this.createTime, "}), {documentType: ").concat(this.documentType, "}), {documentState: ").concat(this.documentState, "})")
			}
		}
		class jr {
			constructor(e, t) {
				this.position = e, this.inclusive = t
			}
		}

		function Dr(e, t, n) {
			let r = 0;
			for (let i = 0; i < e.position.length; i++) {
				const a = t[i],
					s = e.position[i];
				if (r = a.field.isKeyField() ? Nn.comparator(Nn.fromName(s.referenceValue), n.key) : yr(s, n.data.field(a.field)), "desc" === a.dir && (r *= -1), 0 !== r) break
			}
			return r
		}

		function Or(e, t) {
			if (null === e) return null === t;
			if (null === t) return !1;
			if (e.inclusive !== t.inclusive || e.position.length !== t.position.length) return !1;
			for (let n = 0; n < e.position.length; n++)
				if (!mr(e.position[n], t.position[n])) return !1;
			return !0
		}
		class Lr {
			constructor(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "asc";
				this.field = e, this.dir = t
			}
		}

		function Mr(e, t) {
			return e.dir === t.dir && e.field.isEqual(t.field)
		}
		class Fr {}
		class Ur extends Fr {
			constructor(e, t, n) {
				super(), this.field = e, this.op = t, this.value = n
			}
			static create(e, t, n) {
				return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, n) : new Kr(e, t, n) : "array-contains" === t ? new $r(e, n) : "in" === t ? new Jr(e, n) : "not-in" === t ? new Zr(e, n) : "array-contains-any" === t ? new ei(e, n) : new Ur(e, t, n)
			}
			static createKeyFieldInFilter(e, t, n) {
				return "in" === t ? new Qr(e, n) : new Xr(e, n)
			}
			matches(e) {
				const t = e.data.field(this.field);
				return "!=" === this.op ? null !== t && this.matchesComparison(yr(t, this.value)) : null !== t && gr(this.value) === gr(t) && this.matchesComparison(yr(t, this.value))
			}
			matchesComparison(e) {
				switch (this.op) {
					case "<":
						return e < 0;
					case "<=":
						return e <= 0;
					case "==":
						return 0 === e;
					case "!=":
						return 0 !== e;
					case ">":
						return e > 0;
					case ">=":
						return e >= 0;
					default:
						return an()
				}
			}
			isInequality() {
				return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
			}
			getFlattenedFilters() {
				return [this]
			}
			getFilters() {
				return [this]
			}
		}
		class Vr extends Fr {
			constructor(e, t) {
				super(), this.filters = e, this.op = t, this.ae = null
			}
			static create(e, t) {
				return new Vr(e, t)
			}
			matches(e) {
				return zr(this) ? void 0 === this.filters.find((t => !t.matches(e))) : void 0 !== this.filters.find((t => t.matches(e)))
			}
			getFlattenedFilters() {
				return null !== this.ae || (this.ae = this.filters.reduce(((e, t) => e.concat(t.getFlattenedFilters())), [])), this.ae
			}
			getFilters() {
				return Object.assign([], this.filters)
			}
		}

		function zr(e) {
			return "and" === e.op
		}

		function Br(e) {
			return Gr(e) && zr(e)
		}

		function Gr(e) {
			for (const t of e.filters)
				if (t instanceof Vr) return !1;
			return !0
		}

		function qr(e) {
			if (e instanceof Ur) return e.field.canonicalString() + e.op.toString() + wr(e.value);
			if (Br(e)) return e.filters.map((e => qr(e))).join(","); {
				const t = e.filters.map((e => qr(e))).join(",");
				return "".concat(e.op, "(").concat(t, ")")
			}
		}

		function Hr(e, t) {
			return e instanceof Ur ? function(e, t) {
				return t instanceof Ur && e.op === t.op && e.field.isEqual(t.field) && mr(e.value, t.value)
			}(e, t) : e instanceof Vr ? function(e, t) {
				return t instanceof Vr && e.op === t.op && e.filters.length === t.filters.length && e.filters.reduce(((e, n, r) => e && Hr(n, t.filters[r])), !0)
			}(e, t) : void an()
		}

		function Wr(e) {
			return e instanceof Ur ? function(e) {
				return "".concat(e.field.canonicalString(), " ").concat(e.op, " ").concat(wr(e.value))
			}(e) : e instanceof Vr ? function(e) {
				return e.op.toString() + " {" + e.getFilters().map(Wr).join(" ,") + "}"
			}(e) : "Filter"
		}
		class Kr extends Ur {
			constructor(e, t, n) {
				super(e, t, n), this.key = Nn.fromName(n.referenceValue)
			}
			matches(e) {
				const t = Nn.comparator(e.key, this.key);
				return this.matchesComparison(t)
			}
		}
		class Qr extends Ur {
			constructor(e, t) {
				super(e, "in", t), this.keys = Yr("in", t)
			}
			matches(e) {
				return this.keys.some((t => t.isEqual(e.key)))
			}
		}
		class Xr extends Ur {
			constructor(e, t) {
				super(e, "not-in", t), this.keys = Yr("not-in", t)
			}
			matches(e) {
				return !this.keys.some((t => t.isEqual(e.key)))
			}
		}

		function Yr(e, t) {
			var n;
			return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((e => Nn.fromName(e.referenceValue)))
		}
		class $r extends Ur {
			constructor(e, t) {
				super(e, "array-contains", t)
			}
			matches(e) {
				const t = e.data.field(this.field);
				return Cr(t) && vr(t.arrayValue, this.value)
			}
		}
		class Jr extends Ur {
			constructor(e, t) {
				super(e, "in", t)
			}
			matches(e) {
				const t = e.data.field(this.field);
				return null !== t && vr(this.value.arrayValue, t)
			}
		}
		class Zr extends Ur {
			constructor(e, t) {
				super(e, "not-in", t)
			}
			matches(e) {
				if (vr(this.value.arrayValue, {
						nullValue: "NULL_VALUE"
					})) return !1;
				const t = e.data.field(this.field);
				return null !== t && !vr(this.value.arrayValue, t)
			}
		}
		class ei extends Ur {
			constructor(e, t) {
				super(e, "array-contains-any", t)
			}
			matches(e) {
				const t = e.data.field(this.field);
				return !(!Cr(t) || !t.arrayValue.values) && t.arrayValue.values.some((e => vr(this.value.arrayValue, e)))
			}
		}
		class ti {
			constructor(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
					i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
					a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
					s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
				this.path = e, this.collectionGroup = t, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = a, this.endAt = s, this.ue = null
			}
		}

		function ni(e) {
			return new ti(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null)
		}

		function ri(e) {
			const t = on(e);
			if (null === t.ue) {
				let e = t.path.canonicalString();
				null !== t.collectionGroup && (e += "|cg:" + t.collectionGroup), e += "|f:", e += t.filters.map((e => qr(e))).join(","), e += "|ob:", e += t.orderBy.map((e => function(e) {
					return e.field.canonicalString() + e.dir
				}(e))).join(","), Bn(t.limit) || (e += "|l:", e += t.limit), t.startAt && (e += "|lb:", e += t.startAt.inclusive ? "b:" : "a:", e += t.startAt.position.map((e => wr(e))).join(",")), t.endAt && (e += "|ub:", e += t.endAt.inclusive ? "a:" : "b:", e += t.endAt.position.map((e => wr(e))).join(",")), t.ue = e
			}
			return t.ue
		}

		function ii(e, t) {
			if (e.limit !== t.limit) return !1;
			if (e.orderBy.length !== t.orderBy.length) return !1;
			for (let n = 0; n < e.orderBy.length; n++)
				if (!Mr(e.orderBy[n], t.orderBy[n])) return !1;
			if (e.filters.length !== t.filters.length) return !1;
			for (let n = 0; n < e.filters.length; n++)
				if (!Hr(e.filters[n], t.filters[n])) return !1;
			return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!Or(e.startAt, t.startAt) && Or(e.endAt, t.endAt)
		}

		function ai(e) {
			return Nn.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length
		}
		class si {
			constructor(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
					i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
					a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "F",
					s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
					o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
				this.path = e, this.collectionGroup = t, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = a, this.startAt = s, this.endAt = o, this.ce = null, this.le = null, this.he = null, this.startAt, this.endAt
			}
		}

		function oi(e, t, n, r, i, a, s, o) {
			return new si(e, t, n, r, i, a, s, o)
		}

		function li(e) {
			return new si(e)
		}

		function ci(e) {
			return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField())
		}

		function ui(e) {
			return null !== e.collectionGroup
		}

		function di(e) {
			const t = on(e);
			if (null === t.ce) {
				t.ce = [];
				const e = new Set;
				for (const i of t.explicitOrderBy) t.ce.push(i), e.add(i.field.canonicalString());
				const n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc",
					r = function(e) {
						let t = new er(In.comparator);
						return e.filters.forEach((e => {
							e.getFlattenedFilters().forEach((e => {
								e.isInequality() && (t = t.add(e.field))
							}))
						})), t
					}(t);
				r.forEach((r => {
					e.has(r.canonicalString()) || r.isKeyField() || t.ce.push(new Lr(r, n))
				})), e.has(In.keyField().canonicalString()) || t.ce.push(new Lr(In.keyField(), n))
			}
			return t.ce
		}

		function hi(e) {
			const t = on(e);
			return t.le || (t.le = fi(t, di(e))), t.le
		}

		function fi(e, t) {
			if ("F" === e.limitType) return ni(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt); {
				t = t.map((e => {
					const t = "desc" === e.dir ? "asc" : "desc";
					return new Lr(e.field, t)
				}));
				const n = e.endAt ? new jr(e.endAt.position, e.endAt.inclusive) : null,
					r = e.startAt ? new jr(e.startAt.position, e.startAt.inclusive) : null;
				return ni(e.path, e.collectionGroup, t, e.filters, e.limit, n, r)
			}
		}

		function pi(e, t) {
			const n = e.filters.concat([t]);
			return new si(e.path, e.collectionGroup, e.explicitOrderBy.slice(), n, e.limit, e.limitType, e.startAt, e.endAt)
		}

		function gi(e, t, n) {
			return new si(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt)
		}

		function mi(e, t) {
			return ii(hi(e), hi(t)) && e.limitType === t.limitType
		}

		function vi(e) {
			return "".concat(ri(hi(e)), "|lt:").concat(e.limitType)
		}

		function yi(e) {
			return "Query(target=".concat(function(e) {
				let t = e.path.canonicalString();
				return null !== e.collectionGroup && (t += " collectionGroup=" + e.collectionGroup), e.filters.length > 0 && (t += ", filters: [".concat(e.filters.map((e => Wr(e))).join(", "), "]")), Bn(e.limit) || (t += ", limit: " + e.limit), e.orderBy.length > 0 && (t += ", orderBy: [".concat(e.orderBy.map((e => function(e) {
					return "".concat(e.field.canonicalString(), " (").concat(e.dir, ")")
				}(e))).join(", "), "]")), e.startAt && (t += ", startAt: ", t += e.startAt.inclusive ? "b:" : "a:", t += e.startAt.position.map((e => wr(e))).join(",")), e.endAt && (t += ", endAt: ", t += e.endAt.inclusive ? "a:" : "b:", t += e.endAt.position.map((e => wr(e))).join(",")), "Target(".concat(t, ")")
			}(hi(e)), "; limitType=").concat(e.limitType, ")")
		}

		function bi(e, t) {
			return t.isFoundDocument() && function(e, t) {
				const n = t.key.path;
				return null !== e.collectionGroup ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n) : Nn.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n)
			}(e, t) && function(e, t) {
				for (const n of di(e))
					if (!n.field.isKeyField() && null === t.data.field(n.field)) return !1;
				return !0
			}(e, t) && function(e, t) {
				for (const n of e.filters)
					if (!n.matches(t)) return !1;
				return !0
			}(e, t) && function(e, t) {
				return !(e.startAt && ! function(e, t, n) {
					const r = Dr(e, t, n);
					return e.inclusive ? r <= 0 : r < 0
				}(e.startAt, di(e), t)) && !(e.endAt && ! function(e, t, n) {
					const r = Dr(e, t, n);
					return e.inclusive ? r >= 0 : r > 0
				}(e.endAt, di(e), t))
			}(e, t)
		}

		function wi(e) {
			return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2))
		}

		function xi(e) {
			return (t, n) => {
				let r = !1;
				for (const i of di(e)) {
					const e = ki(i, t, n);
					if (0 !== e) return e;
					r = r || i.field.isKeyField()
				}
				return 0
			}
		}

		function ki(e, t, n) {
			const r = e.field.isKeyField() ? Nn.comparator(t.key, n.key) : function(e, t, n) {
				const r = t.data.field(e),
					i = n.data.field(e);
				return null !== r && null !== i ? yr(r, i) : an()
			}(e.field, t, n);
			switch (e.dir) {
				case "asc":
					return r;
				case "desc":
					return -1 * r;
				default:
					return an()
			}
		}
		class Si {
			constructor(e, t) {
				this.mapKeyFn = e, this.equalsFn = t, this.inner = {}, this.innerSize = 0
			}
			get(e) {
				const t = this.mapKeyFn(e),
					n = this.inner[t];
				if (void 0 !== n)
					for (const [r, i] of n)
						if (this.equalsFn(r, e)) return i
			}
			has(e) {
				return void 0 !== this.get(e)
			}
			set(e, t) {
				const n = this.mapKeyFn(e),
					r = this.inner[n];
				if (void 0 === r) return this.inner[n] = [
					[e, t]
				], void this.innerSize++;
				for (let i = 0; i < r.length; i++)
					if (this.equalsFn(r[i][0], e)) return void(r[i] = [e, t]);
				r.push([e, t]), this.innerSize++
			}
			delete(e) {
				const t = this.mapKeyFn(e),
					n = this.inner[t];
				if (void 0 === n) return !1;
				for (let r = 0; r < n.length; r++)
					if (this.equalsFn(n[r][0], e)) return 1 === n.length ? delete this.inner[t] : n.splice(r, 1), this.innerSize--, !0;
				return !1
			}
			forEach(e) {
				Xn(this.inner, ((t, n) => {
					for (const [r, i] of n) e(r, i)
				}))
			}
			isEmpty() {
				return Yn(this.inner)
			}
			size() {
				return this.innerSize
			}
		}
		const Ci = new $n(Nn.comparator);

		function _i() {
			return Ci
		}
		const Ei = new $n(Nn.comparator);

		function Ti() {
			let e = Ei;
			for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
			for (const i of n) e = e.insert(i.key, i);
			return e
		}

		function Ii(e) {
			let t = Ei;
			return e.forEach(((e, n) => t = t.insert(e, n.overlayedDocument))), t
		}

		function Ni() {
			return Ai()
		}

		function Ri() {
			return Ai()
		}

		function Ai() {
			return new Si((e => e.toString()), ((e, t) => e.isEqual(t)))
		}
		const Pi = new $n(Nn.comparator),
			ji = new er(Nn.comparator);

		function Di() {
			let e = ji;
			for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
			for (const i of n) e = e.add(i);
			return e
		}
		const Oi = new er(xn);

		function Li() {
			return Oi
		}

		function Mi(e, t) {
			if (e.useProto3Json) {
				if (isNaN(t)) return {
					doubleValue: "NaN"
				};
				if (t === 1 / 0) return {
					doubleValue: "Infinity"
				};
				if (t === -1 / 0) return {
					doubleValue: "-Infinity"
				}
			}
			return {
				doubleValue: Gn(t) ? "-0" : t
			}
		}

		function Fi(e) {
			return {
				integerValue: "" + e
			}
		}

		function Ui(e, t) {
			return qn(t) ? Fi(t) : Mi(e, t)
		}
		class Vi {
			constructor() {
				this._ = void 0
			}
		}

		function zi(e, t, n) {
			return e instanceof qi ? function(e, t) {
				const n = {
					fields: {
						__type__: {
							stringValue: "server_timestamp"
						},
						__local_write_time__: {
							timestampValue: {
								seconds: e.seconds,
								nanos: e.nanoseconds
							}
						}
					}
				};
				return t && cr(t) && (t = ur(t)), t && (n.fields.__previous_value__ = t), {
					mapValue: n
				}
			}(n, t) : e instanceof Hi ? Wi(e, t) : e instanceof Ki ? Qi(e, t) : function(e, t) {
				const n = Gi(e, t),
					r = Yi(n) + Yi(e.Pe);
				return Sr(n) && Sr(e.Pe) ? Fi(r) : Mi(e.serializer, r)
			}(e, t)
		}

		function Bi(e, t, n) {
			return e instanceof Hi ? Wi(e, t) : e instanceof Ki ? Qi(e, t) : n
		}

		function Gi(e, t) {
			return e instanceof Xi ? function(e) {
				return Sr(e) || function(e) {
					return !!e && "doubleValue" in e
				}(e)
			}(t) ? t : {
				integerValue: 0
			} : null
		}
		class qi extends Vi {}
		class Hi extends Vi {
			constructor(e) {
				super(), this.elements = e
			}
		}

		function Wi(e, t) {
			const n = $i(t);
			for (const r of e.elements) n.some((e => mr(e, r))) || n.push(r);
			return {
				arrayValue: {
					values: n
				}
			}
		}
		class Ki extends Vi {
			constructor(e) {
				super(), this.elements = e
			}
		}

		function Qi(e, t) {
			let n = $i(t);
			for (const r of e.elements) n = n.filter((e => !mr(e, r)));
			return {
				arrayValue: {
					values: n
				}
			}
		}
		class Xi extends Vi {
			constructor(e, t) {
				super(), this.serializer = e, this.Pe = t
			}
		}

		function Yi(e) {
			return or(e.integerValue || e.doubleValue)
		}

		function $i(e) {
			return Cr(e) && e.arrayValue.values ? e.arrayValue.values.slice() : []
		}
		class Ji {
			constructor(e, t) {
				this.version = e, this.transformResults = t
			}
		}
		class Zi {
			constructor(e, t) {
				this.updateTime = e, this.exists = t
			}
			static none() {
				return new Zi
			}
			static exists(e) {
				return new Zi(void 0, e)
			}
			static updateTime(e) {
				return new Zi(e)
			}
			get isNone() {
				return void 0 === this.updateTime && void 0 === this.exists
			}
			isEqual(e) {
				return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
			}
		}

		function ea(e, t) {
			return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument()
		}
		class ta {}

		function na(e, t) {
			if (!e.hasLocalMutations || t && 0 === t.fields.length) return null;
			if (null === t) return e.isNoDocument() ? new ha(e.key, Zi.none()) : new oa(e.key, e.data, Zi.none()); {
				const n = e.data,
					r = Rr.empty();
				let i = new er(In.comparator);
				for (let e of t.fields)
					if (!i.has(e)) {
						let t = n.field(e);
						null === t && e.length > 1 && (e = e.popLast(), t = n.field(e)), null === t ? r.delete(e) : r.set(e, t), i = i.add(e)
					} return new la(e.key, r, new nr(i.toArray()), Zi.none())
			}
		}

		function ra(e, t, n) {
			e instanceof oa ? function(e, t, n) {
				const r = e.value.clone(),
					i = ua(e.fieldTransforms, t, n.transformResults);
				r.setAll(i), t.convertToFoundDocument(n.version, r).setHasCommittedMutations()
			}(e, t, n) : e instanceof la ? function(e, t, n) {
				if (!ea(e.precondition, t)) return void t.convertToUnknownDocument(n.version);
				const r = ua(e.fieldTransforms, t, n.transformResults),
					i = t.data;
				i.setAll(ca(e)), i.setAll(r), t.convertToFoundDocument(n.version, i).setHasCommittedMutations()
			}(e, t, n) : function(e, t, n) {
				t.convertToNoDocument(n.version).setHasCommittedMutations()
			}(0, t, n)
		}

		function ia(e, t, n, r) {
			return e instanceof oa ? function(e, t, n, r) {
				if (!ea(e.precondition, t)) return n;
				const i = e.value.clone(),
					a = da(e.fieldTransforms, r, t);
				return i.setAll(a), t.convertToFoundDocument(t.version, i).setHasLocalMutations(), null
			}(e, t, n, r) : e instanceof la ? function(e, t, n, r) {
				if (!ea(e.precondition, t)) return n;
				const i = da(e.fieldTransforms, r, t),
					a = t.data;
				return a.setAll(ca(e)), a.setAll(i), t.convertToFoundDocument(t.version, a).setHasLocalMutations(), null === n ? null : n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e => e.field)))
			}(e, t, n, r) : function(e, t, n) {
				return ea(e.precondition, t) ? (t.convertToNoDocument(t.version).setHasLocalMutations(), null) : n
			}(e, t, n)
		}

		function aa(e, t) {
			let n = null;
			for (const r of e.fieldTransforms) {
				const e = t.data.field(r.field),
					i = Gi(r.transform, e || null);
				null != i && (null === n && (n = Rr.empty()), n.set(r.field, i))
			}
			return n || null
		}

		function sa(e, t) {
			return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !! function(e, t) {
				return void 0 === e && void 0 === t || !(!e || !t) && kn(e, t, ((e, t) => function(e, t) {
					return e.field.isEqual(t.field) && function(e, t) {
						return e instanceof Hi && t instanceof Hi || e instanceof Ki && t instanceof Ki ? kn(e.elements, t.elements, mr) : e instanceof Xi && t instanceof Xi ? mr(e.Pe, t.Pe) : e instanceof qi && t instanceof qi
					}(e.transform, t.transform)
				}(e, t)))
			}(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask))
		}
		class oa extends ta {
			constructor(e, t, n) {
				let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
				super(), this.key = e, this.value = t, this.precondition = n, this.fieldTransforms = r, this.type = 0
			}
			getFieldMask() {
				return null
			}
		}
		class la extends ta {
			constructor(e, t, n, r) {
				let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
				super(), this.key = e, this.data = t, this.fieldMask = n, this.precondition = r, this.fieldTransforms = i, this.type = 1
			}
			getFieldMask() {
				return this.fieldMask
			}
		}

		function ca(e) {
			const t = new Map;
			return e.fieldMask.fields.forEach((n => {
				if (!n.isEmpty()) {
					const r = e.data.field(n);
					t.set(n, r)
				}
			})), t
		}

		function ua(e, t, n) {
			const r = new Map;
			sn(e.length === n.length);
			for (let i = 0; i < n.length; i++) {
				const a = e[i],
					s = a.transform,
					o = t.data.field(a.field);
				r.set(a.field, Bi(s, o, n[i]))
			}
			return r
		}

		function da(e, t, n) {
			const r = new Map;
			for (const i of e) {
				const e = i.transform,
					a = n.data.field(i.field);
				r.set(i.field, zi(e, a, t))
			}
			return r
		}
		class ha extends ta {
			constructor(e, t) {
				super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = []
			}
			getFieldMask() {
				return null
			}
		}
		class fa extends ta {
			constructor(e, t) {
				super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = []
			}
			getFieldMask() {
				return null
			}
		}
		class pa {
			constructor(e, t, n, r) {
				this.batchId = e, this.localWriteTime = t, this.baseMutations = n, this.mutations = r
			}
			applyToRemoteDocument(e, t) {
				const n = t.mutationResults;
				for (let r = 0; r < this.mutations.length; r++) {
					const t = this.mutations[r];
					t.key.isEqual(e.key) && ra(t, e, n[r])
				}
			}
			applyToLocalView(e, t) {
				for (const n of this.baseMutations) n.key.isEqual(e.key) && (t = ia(n, e, t, this.localWriteTime));
				for (const n of this.mutations) n.key.isEqual(e.key) && (t = ia(n, e, t, this.localWriteTime));
				return t
			}
			applyToLocalDocumentSet(e, t) {
				const n = Ri();
				return this.mutations.forEach((r => {
					const i = e.get(r.key),
						a = i.overlayedDocument;
					let s = this.applyToLocalView(a, i.mutatedFields);
					s = t.has(r.key) ? null : s;
					const o = na(a, s);
					null !== o && n.set(r.key, o), a.isValidDocument() || a.convertToNoDocument(Cn.min())
				})), n
			}
			keys() {
				return this.mutations.reduce(((e, t) => e.add(t.key)), Di())
			}
			isEqual(e) {
				return this.batchId === e.batchId && kn(this.mutations, e.mutations, ((e, t) => sa(e, t))) && kn(this.baseMutations, e.baseMutations, ((e, t) => sa(e, t)))
			}
		}
		class ga {
			constructor(e, t, n, r) {
				this.batch = e, this.commitVersion = t, this.mutationResults = n, this.docVersions = r
			}
			static from(e, t, n) {
				sn(e.mutations.length === n.length);
				let r = Pi;
				const i = e.mutations;
				for (let a = 0; a < i.length; a++) r = r.insert(i[a].key, n[a].version);
				return new ga(e, t, n, r)
			}
		}
		class ma {
			constructor(e, t) {
				this.largestBatchId = e, this.mutation = t
			}
			getKey() {
				return this.mutation.key
			}
			isEqual(e) {
				return null !== e && this.mutation === e.mutation
			}
			toString() {
				return "Overlay{\n      largestBatchId: ".concat(this.largestBatchId, ",\n      mutation: ").concat(this.mutation.toString(), "\n    }")
			}
		}
		class va {
			constructor(e, t) {
				this.count = e, this.unchangedNames = t
			}
		}
		var ya, ba;

		function wa(e) {
			switch (e) {
				default:
					return an();
				case ln.CANCELLED:
				case ln.UNKNOWN:
				case ln.DEADLINE_EXCEEDED:
				case ln.RESOURCE_EXHAUSTED:
				case ln.INTERNAL:
				case ln.UNAVAILABLE:
				case ln.UNAUTHENTICATED:
					return !1;
				case ln.INVALID_ARGUMENT:
				case ln.NOT_FOUND:
				case ln.ALREADY_EXISTS:
				case ln.PERMISSION_DENIED:
				case ln.FAILED_PRECONDITION:
				case ln.ABORTED:
				case ln.OUT_OF_RANGE:
				case ln.UNIMPLEMENTED:
				case ln.DATA_LOSS:
					return !0
			}
		}

		function xa(e) {
			if (void 0 === e) return tn("GRPC error has no .code"), ln.UNKNOWN;
			switch (e) {
				case ya.OK:
					return ln.OK;
				case ya.CANCELLED:
					return ln.CANCELLED;
				case ya.UNKNOWN:
					return ln.UNKNOWN;
				case ya.DEADLINE_EXCEEDED:
					return ln.DEADLINE_EXCEEDED;
				case ya.RESOURCE_EXHAUSTED:
					return ln.RESOURCE_EXHAUSTED;
				case ya.INTERNAL:
					return ln.INTERNAL;
				case ya.UNAVAILABLE:
					return ln.UNAVAILABLE;
				case ya.UNAUTHENTICATED:
					return ln.UNAUTHENTICATED;
				case ya.INVALID_ARGUMENT:
					return ln.INVALID_ARGUMENT;
				case ya.NOT_FOUND:
					return ln.NOT_FOUND;
				case ya.ALREADY_EXISTS:
					return ln.ALREADY_EXISTS;
				case ya.PERMISSION_DENIED:
					return ln.PERMISSION_DENIED;
				case ya.FAILED_PRECONDITION:
					return ln.FAILED_PRECONDITION;
				case ya.ABORTED:
					return ln.ABORTED;
				case ya.OUT_OF_RANGE:
					return ln.OUT_OF_RANGE;
				case ya.UNIMPLEMENTED:
					return ln.UNIMPLEMENTED;
				case ya.DATA_LOSS:
					return ln.DATA_LOSS;
				default:
					return an()
			}
		}(ba = ya || (ya = {}))[ba.OK = 0] = "OK", ba[ba.CANCELLED = 1] = "CANCELLED", ba[ba.UNKNOWN = 2] = "UNKNOWN", ba[ba.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ba[ba.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ba[ba.NOT_FOUND = 5] = "NOT_FOUND", ba[ba.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ba[ba.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ba[ba.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ba[ba.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ba[ba.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ba[ba.ABORTED = 10] = "ABORTED", ba[ba.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ba[ba.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ba[ba.INTERNAL = 13] = "INTERNAL", ba[ba.UNAVAILABLE = 14] = "UNAVAILABLE", ba[ba.DATA_LOSS = 15] = "DATA_LOSS";
		let ka = null;

		function Sa() {
			return new TextEncoder
		}
		const Ca = new Dt([4294967295, 4294967295], 0);

		function _a(e) {
			const t = Sa().encode(e),
				n = new Ot;
			return n.update(t), new Uint8Array(n.digest())
		}

		function Ea(e) {
			const t = new DataView(e.buffer),
				n = t.getUint32(0, !0),
				r = t.getUint32(4, !0),
				i = t.getUint32(8, !0),
				a = t.getUint32(12, !0);
			return [new Dt([n, r], 0), new Dt([i, a], 0)]
		}
		class Ta {
			constructor(e, t, n) {
				if (this.bitmap = e, this.padding = t, this.hashCount = n, t < 0 || t >= 8) throw new Ia("Invalid padding: ".concat(t));
				if (n < 0) throw new Ia("Invalid hash count: ".concat(n));
				if (e.length > 0 && 0 === this.hashCount) throw new Ia("Invalid hash count: ".concat(n));
				if (0 === e.length && 0 !== t) throw new Ia("Invalid padding when bitmap length is 0: ".concat(t));
				this.Ie = 8 * e.length - t, this.Te = Dt.fromNumber(this.Ie)
			}
			Ee(e, t, n) {
				let r = e.add(t.multiply(Dt.fromNumber(n)));
				return 1 === r.compare(Ca) && (r = new Dt([r.getBits(0), r.getBits(1)], 0)), r.modulo(this.Te).toNumber()
			}
			de(e) {
				return 0 != (this.bitmap[Math.floor(e / 8)] & 1 << e % 8)
			}
			mightContain(e) {
				if (0 === this.Ie) return !1;
				const t = _a(e),
					[n, r] = Ea(t);
				for (let i = 0; i < this.hashCount; i++) {
					const e = this.Ee(n, r, i);
					if (!this.de(e)) return !1
				}
				return !0
			}
			static create(e, t, n) {
				const r = e % 8 == 0 ? 0 : 8 - e % 8,
					i = new Uint8Array(Math.ceil(e / 8)),
					a = new Ta(i, r, t);
				return n.forEach((e => a.insert(e))), a
			}
			insert(e) {
				if (0 === this.Ie) return;
				const t = _a(e),
					[n, r] = Ea(t);
				for (let i = 0; i < this.hashCount; i++) {
					const e = this.Ee(n, r, i);
					this.Ae(e)
				}
			}
			Ae(e) {
				const t = Math.floor(e / 8),
					n = e % 8;
				this.bitmap[t] |= 1 << n
			}
		}
		class Ia extends Error {
			constructor() {
				super(...arguments), this.name = "BloomFilterError"
			}
		}
		class Na {
			constructor(e, t, n, r, i) {
				this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i
			}
			static createSynthesizedRemoteEventForCurrentChange(e, t, n) {
				const r = new Map;
				return r.set(e, Ra.createSynthesizedTargetChangeForCurrentChange(e, t, n)), new Na(Cn.min(), r, new $n(xn), _i(), Di())
			}
		}
		class Ra {
			constructor(e, t, n, r, i) {
				this.resumeToken = e, this.current = t, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i
			}
			static createSynthesizedTargetChangeForCurrentChange(e, t, n) {
				return new Ra(n, t, Di(), Di(), Di())
			}
		}
		class Aa {
			constructor(e, t, n, r) {
				this.Re = e, this.removedTargetIds = t, this.key = n, this.Ve = r
			}
		}
		class Pa {
			constructor(e, t) {
				this.targetId = e, this.me = t
			}
		}
		class ja {
			constructor(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ir.EMPTY_BYTE_STRING,
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
				this.state = e, this.targetIds = t, this.resumeToken = n, this.cause = r
			}
		}
		class Da {
			constructor() {
				this.fe = 0, this.ge = Ma(), this.pe = ir.EMPTY_BYTE_STRING, this.ye = !1, this.we = !0
			}
			get current() {
				return this.ye
			}
			get resumeToken() {
				return this.pe
			}
			get Se() {
				return 0 !== this.fe
			}
			get be() {
				return this.we
			}
			De(e) {
				e.approximateByteSize() > 0 && (this.we = !0, this.pe = e)
			}
			Ce() {
				let e = Di(),
					t = Di(),
					n = Di();
				return this.ge.forEach(((r, i) => {
					switch (i) {
						case 0:
							e = e.add(r);
							break;
						case 2:
							t = t.add(r);
							break;
						case 1:
							n = n.add(r);
							break;
						default:
							an()
					}
				})), new Ra(this.pe, this.ye, e, t, n)
			}
			ve() {
				this.we = !1, this.ge = Ma()
			}
			Fe(e, t) {
				this.we = !0, this.ge = this.ge.insert(e, t)
			}
			Me(e) {
				this.we = !0, this.ge = this.ge.remove(e)
			}
			xe() {
				this.fe += 1
			}
			Oe() {
				this.fe -= 1, sn(this.fe >= 0)
			}
			Ne() {
				this.we = !0, this.ye = !0
			}
		}
		class Oa {
			constructor(e) {
				this.Le = e, this.Be = new Map, this.ke = _i(), this.qe = La(), this.Qe = new $n(xn)
			}
			Ke(e) {
				for (const t of e.Re) e.Ve && e.Ve.isFoundDocument() ? this.$e(t, e.Ve) : this.Ue(t, e.key, e.Ve);
				for (const t of e.removedTargetIds) this.Ue(t, e.key, e.Ve)
			}
			We(e) {
				this.forEachTarget(e, (t => {
					const n = this.Ge(t);
					switch (e.state) {
						case 0:
							this.ze(t) && n.De(e.resumeToken);
							break;
						case 1:
							n.Oe(), n.Se || n.ve(), n.De(e.resumeToken);
							break;
						case 2:
							n.Oe(), n.Se || this.removeTarget(t);
							break;
						case 3:
							this.ze(t) && (n.Ne(), n.De(e.resumeToken));
							break;
						case 4:
							this.ze(t) && (this.je(t), n.De(e.resumeToken));
							break;
						default:
							an()
					}
				}))
			}
			forEachTarget(e, t) {
				e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.Be.forEach(((e, n) => {
					this.ze(n) && t(n)
				}))
			}
			He(e) {
				const t = e.targetId,
					n = e.me.count,
					r = this.Je(t);
				if (r) {
					const i = r.target;
					if (ai(i))
						if (0 === n) {
							const e = new Nn(i.path);
							this.Ue(t, e, Pr.newNoDocument(e, Cn.min()))
						} else sn(1 === n);
					else {
						const r = this.Ye(t);
						if (r !== n) {
							const n = this.Ze(e),
								i = n ? this.Xe(n, e, r) : 1;
							if (0 !== i) {
								this.je(t);
								const e = 2 === i ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
								this.Qe = this.Qe.insert(t, e)
							}
							null == ka || ka.et(function(e, t, n, r, i) {
								var a, s, o, l, c, u;
								const d = {
										localCacheCount: e,
										existenceFilterCount: t.count,
										databaseId: n.database,
										projectId: n.projectId
									},
									h = t.unchangedNames;
								return h && (d.bloomFilter = {
									applied: 0 === i,
									hashCount: null !== (a = null == h ? void 0 : h.hashCount) && void 0 !== a ? a : 0,
									bitmapLength: null !== (l = null === (o = null === (s = null == h ? void 0 : h.bits) || void 0 === s ? void 0 : s.bitmap) || void 0 === o ? void 0 : o.length) && void 0 !== l ? l : 0,
									padding: null !== (u = null === (c = null == h ? void 0 : h.bits) || void 0 === c ? void 0 : c.padding) && void 0 !== u ? u : 0,
									mightContain: e => {
										var t;
										return null !== (t = null == r ? void 0 : r.mightContain(e)) && void 0 !== t && t
									}
								}), d
							}(r, e.me, this.Le.tt(), n, i))
						}
					}
				}
			}
			Ze(e) {
				const t = e.me.unchangedNames;
				if (!t || !t.bits) return null;
				const {
					bits: {
						bitmap: n = "",
						padding: r = 0
					},
					hashCount: i = 0
				} = t;
				let a, s;
				try {
					a = lr(n).toUint8Array()
				} catch (e) {
					if (e instanceof rr) return nn("Decoding the base64 bloom filter in existence filter failed (" + e.message + "); ignoring the bloom filter and falling back to full re-query."), null;
					throw e
				}
				try {
					s = new Ta(a, r, i)
				} catch (e) {
					return nn(e instanceof Ia ? "BloomFilter error: " : "Applying bloom filter failed: ", e), null
				}
				return 0 === s.Ie ? null : s
			}
			Xe(e, t, n) {
				return t.me.count === n - this.nt(e, t.targetId) ? 0 : 2
			}
			nt(e, t) {
				const n = this.Le.getRemoteKeysForTarget(t);
				let r = 0;
				return n.forEach((n => {
					const i = this.Le.tt(),
						a = "projects/".concat(i.projectId, "/databases/").concat(i.database, "/documents/").concat(n.path.canonicalString());
					e.mightContain(a) || (this.Ue(t, n, null), r++)
				})), r
			}
			rt(e) {
				const t = new Map;
				this.Be.forEach(((n, r) => {
					const i = this.Je(r);
					if (i) {
						if (n.current && ai(i.target)) {
							const t = new Nn(i.target.path);
							null !== this.ke.get(t) || this.it(r, t) || this.Ue(r, t, Pr.newNoDocument(t, e))
						}
						n.be && (t.set(r, n.Ce()), n.ve())
					}
				}));
				let n = Di();
				this.qe.forEach(((e, t) => {
					let r = !0;
					t.forEachWhile((e => {
						const t = this.Je(e);
						return !t || "TargetPurposeLimboResolution" === t.purpose || (r = !1, !1)
					})), r && (n = n.add(e))
				})), this.ke.forEach(((t, n) => n.setReadTime(e)));
				const r = new Na(e, t, this.Qe, this.ke, n);
				return this.ke = _i(), this.qe = La(), this.Qe = new $n(xn), r
			}
			$e(e, t) {
				if (!this.ze(e)) return;
				const n = this.it(e, t.key) ? 2 : 0;
				this.Ge(e).Fe(t.key, n), this.ke = this.ke.insert(t.key, t), this.qe = this.qe.insert(t.key, this.st(t.key).add(e))
			}
			Ue(e, t, n) {
				if (!this.ze(e)) return;
				const r = this.Ge(e);
				this.it(e, t) ? r.Fe(t, 1) : r.Me(t), this.qe = this.qe.insert(t, this.st(t).delete(e)), n && (this.ke = this.ke.insert(t, n))
			}
			removeTarget(e) {
				this.Be.delete(e)
			}
			Ye(e) {
				const t = this.Ge(e).Ce();
				return this.Le.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size
			}
			xe(e) {
				this.Ge(e).xe()
			}
			Ge(e) {
				let t = this.Be.get(e);
				return t || (t = new Da, this.Be.set(e, t)), t
			}
			st(e) {
				let t = this.qe.get(e);
				return t || (t = new er(xn), this.qe = this.qe.insert(e, t)), t
			}
			ze(e) {
				const t = null !== this.Je(e);
				return t || en("WatchChangeAggregator", "Detected inactive target", e), t
			}
			Je(e) {
				const t = this.Be.get(e);
				return t && t.Se ? null : this.Le.ot(e)
			}
			je(e) {
				this.Be.set(e, new Da), this.Le.getRemoteKeysForTarget(e).forEach((t => {
					this.Ue(e, t, null)
				}))
			}
			it(e, t) {
				return this.Le.getRemoteKeysForTarget(e).has(t)
			}
		}

		function La() {
			return new $n(Nn.comparator)
		}

		function Ma() {
			return new $n(Nn.comparator)
		}
		const Fa = {
				asc: "ASCENDING",
				desc: "DESCENDING"
			},
			Ua = {
				"<": "LESS_THAN",
				"<=": "LESS_THAN_OR_EQUAL",
				">": "GREATER_THAN",
				">=": "GREATER_THAN_OR_EQUAL",
				"==": "EQUAL",
				"!=": "NOT_EQUAL",
				"array-contains": "ARRAY_CONTAINS",
				in: "IN",
				"not-in": "NOT_IN",
				"array-contains-any": "ARRAY_CONTAINS_ANY"
			},
			Va = {
				and: "AND",
				or: "OR"
			};
		class za {
			constructor(e, t) {
				this.databaseId = e, this.useProto3Json = t
			}
		}

		function Ba(e, t) {
			return e.useProto3Json || Bn(t) ? t : {
				value: t
			}
		}

		function Ga(e, t) {
			return e.useProto3Json ? "".concat(new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", ""), ".").concat(("000000000" + t.nanoseconds).slice(-9), "Z") : {
				seconds: "" + t.seconds,
				nanos: t.nanoseconds
			}
		}

		function qa(e, t) {
			return e.useProto3Json ? t.toBase64() : t.toUint8Array()
		}

		function Ha(e, t) {
			return Ga(e, t.toTimestamp())
		}

		function Wa(e) {
			return sn(!!e), Cn.fromTimestamp(function(e) {
				const t = sr(e);
				return new Sn(t.seconds, t.nanos)
			}(e))
		}

		function Ka(e, t) {
			return Qa(e, t).canonicalString()
		}

		function Qa(e, t) {
			const n = function(e) {
				return new En(["projects", e.projectId, "databases", e.database])
			}(e).child("documents");
			return void 0 === t ? n : n.child(t)
		}

		function Xa(e) {
			const t = En.fromString(e);
			return sn(gs(t)), t
		}

		function Ya(e, t) {
			return Ka(e.databaseId, t.path)
		}

		function $a(e, t) {
			const n = Xa(t);
			if (n.get(1) !== e.databaseId.projectId) throw new cn(ln.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
			if (n.get(3) !== e.databaseId.database) throw new cn(ln.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
			return new Nn(ts(n))
		}

		function Ja(e, t) {
			return Ka(e.databaseId, t)
		}

		function Za(e) {
			const t = Xa(e);
			return 4 === t.length ? En.emptyPath() : ts(t)
		}

		function es(e) {
			return new En(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString()
		}

		function ts(e) {
			return sn(e.length > 4 && "documents" === e.get(4)), e.popFirst(5)
		}

		function ns(e, t, n) {
			return {
				name: Ya(e, t),
				fields: n.value.mapValue.fields
			}
		}

		function rs(e, t) {
			let n;
			if (t instanceof oa) n = {
				update: ns(e, t.key, t.value)
			};
			else if (t instanceof ha) n = {
				delete: Ya(e, t.key)
			};
			else if (t instanceof la) n = {
				update: ns(e, t.key, t.data),
				updateMask: ps(t.fieldMask)
			};
			else {
				if (!(t instanceof fa)) return an();
				n = {
					verify: Ya(e, t.key)
				}
			}
			return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map((e => function(e, t) {
				const n = t.transform;
				if (n instanceof qi) return {
					fieldPath: t.field.canonicalString(),
					setToServerValue: "REQUEST_TIME"
				};
				if (n instanceof Hi) return {
					fieldPath: t.field.canonicalString(),
					appendMissingElements: {
						values: n.elements
					}
				};
				if (n instanceof Ki) return {
					fieldPath: t.field.canonicalString(),
					removeAllFromArray: {
						values: n.elements
					}
				};
				if (n instanceof Xi) return {
					fieldPath: t.field.canonicalString(),
					increment: n.Pe
				};
				throw an()
			}(0, e)))), t.precondition.isNone || (n.currentDocument = function(e, t) {
				return void 0 !== t.updateTime ? {
					updateTime: Ha(e, t.updateTime)
				} : void 0 !== t.exists ? {
					exists: t.exists
				} : an()
			}(e, t.precondition)), n
		}

		function is(e, t) {
			return {
				documents: [Ja(e, t.path)]
			}
		}

		function as(e, t) {
			const n = {
					structuredQuery: {}
				},
				r = t.path;
			let i;
			null !== t.collectionGroup ? (i = r, n.structuredQuery.from = [{
				collectionId: t.collectionGroup,
				allDescendants: !0
			}]) : (i = r.popLast(), n.structuredQuery.from = [{
				collectionId: r.lastSegment()
			}]), n.parent = Ja(e, i);
			const a = function(e) {
				if (0 !== e.length) return fs(Vr.create(e, "and"))
			}(t.filters);
			a && (n.structuredQuery.where = a);
			const s = function(e) {
				if (0 !== e.length) return e.map((e => function(e) {
					return {
						field: ds(e.field),
						direction: ls(e.dir)
					}
				}(e)))
			}(t.orderBy);
			s && (n.structuredQuery.orderBy = s);
			const o = Ba(e, t.limit);
			return null !== o && (n.structuredQuery.limit = o), t.startAt && (n.structuredQuery.startAt = function(e) {
				return {
					before: e.inclusive,
					values: e.position
				}
			}(t.startAt)), t.endAt && (n.structuredQuery.endAt = function(e) {
				return {
					before: !e.inclusive,
					values: e.position
				}
			}(t.endAt)), {
				_t: n,
				parent: i
			}
		}

		function ss(e) {
			let t = Za(e.parent);
			const n = e.structuredQuery,
				r = n.from ? n.from.length : 0;
			let i = null;
			if (r > 0) {
				sn(1 === r);
				const e = n.from[0];
				e.allDescendants ? i = e.collectionId : t = t.child(e.collectionId)
			}
			let a = [];
			n.where && (a = function(e) {
				const t = os(e);
				return t instanceof Vr && Br(t) ? t.getFilters() : [t]
			}(n.where));
			let s = [];
			n.orderBy && (s = function(e) {
				return e.map((e => function(e) {
					return new Lr(hs(e.field), function(e) {
						switch (e) {
							case "ASCENDING":
								return "asc";
							case "DESCENDING":
								return "desc";
							default:
								return
						}
					}(e.direction))
				}(e)))
			}(n.orderBy));
			let o = null;
			n.limit && (o = function(e) {
				let t;
				return t = "object" == typeof e ? e.value : e, Bn(t) ? null : t
			}(n.limit));
			let l = null;
			n.startAt && (l = function(e) {
				const t = !!e.before,
					n = e.values || [];
				return new jr(n, t)
			}(n.startAt));
			let c = null;
			return n.endAt && (c = function(e) {
				const t = !e.before,
					n = e.values || [];
				return new jr(n, t)
			}(n.endAt)), oi(t, i, s, a, o, "F", l, c)
		}

		function os(e) {
			return void 0 !== e.unaryFilter ? function(e) {
				switch (e.unaryFilter.op) {
					case "IS_NAN":
						const t = hs(e.unaryFilter.field);
						return Ur.create(t, "==", {
							doubleValue: NaN
						});
					case "IS_NULL":
						const n = hs(e.unaryFilter.field);
						return Ur.create(n, "==", {
							nullValue: "NULL_VALUE"
						});
					case "IS_NOT_NAN":
						const r = hs(e.unaryFilter.field);
						return Ur.create(r, "!=", {
							doubleValue: NaN
						});
					case "IS_NOT_NULL":
						const i = hs(e.unaryFilter.field);
						return Ur.create(i, "!=", {
							nullValue: "NULL_VALUE"
						});
					default:
						return an()
				}
			}(e) : void 0 !== e.fieldFilter ? function(e) {
				return Ur.create(hs(e.fieldFilter.field), function(e) {
					switch (e) {
						case "EQUAL":
							return "==";
						case "NOT_EQUAL":
							return "!=";
						case "GREATER_THAN":
							return ">";
						case "GREATER_THAN_OR_EQUAL":
							return ">=";
						case "LESS_THAN":
							return "<";
						case "LESS_THAN_OR_EQUAL":
							return "<=";
						case "ARRAY_CONTAINS":
							return "array-contains";
						case "IN":
							return "in";
						case "NOT_IN":
							return "not-in";
						case "ARRAY_CONTAINS_ANY":
							return "array-contains-any";
						default:
							return an()
					}
				}(e.fieldFilter.op), e.fieldFilter.value)
			}(e) : void 0 !== e.compositeFilter ? function(e) {
				return Vr.create(e.compositeFilter.filters.map((e => os(e))), function(e) {
					switch (e) {
						case "AND":
							return "and";
						case "OR":
							return "or";
						default:
							return an()
					}
				}(e.compositeFilter.op))
			}(e) : an()
		}

		function ls(e) {
			return Fa[e]
		}

		function cs(e) {
			return Ua[e]
		}

		function us(e) {
			return Va[e]
		}

		function ds(e) {
			return {
				fieldPath: e.canonicalString()
			}
		}

		function hs(e) {
			return In.fromServerFormat(e.fieldPath)
		}

		function fs(e) {
			return e instanceof Ur ? function(e) {
				if ("==" === e.op) {
					if (Er(e.value)) return {
						unaryFilter: {
							field: ds(e.field),
							op: "IS_NAN"
						}
					};
					if (_r(e.value)) return {
						unaryFilter: {
							field: ds(e.field),
							op: "IS_NULL"
						}
					}
				} else if ("!=" === e.op) {
					if (Er(e.value)) return {
						unaryFilter: {
							field: ds(e.field),
							op: "IS_NOT_NAN"
						}
					};
					if (_r(e.value)) return {
						unaryFilter: {
							field: ds(e.field),
							op: "IS_NOT_NULL"
						}
					}
				}
				return {
					fieldFilter: {
						field: ds(e.field),
						op: cs(e.op),
						value: e.value
					}
				}
			}(e) : e instanceof Vr ? function(e) {
				const t = e.getFilters().map((e => fs(e)));
				return 1 === t.length ? t[0] : {
					compositeFilter: {
						op: us(e.op),
						filters: t
					}
				}
			}(e) : an()
		}

		function ps(e) {
			const t = [];
			return e.fields.forEach((e => t.push(e.canonicalString()))), {
				fieldPaths: t
			}
		}

		function gs(e) {
			return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2)
		}
		class ms {
			constructor(e, t, n, r) {
				let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Cn.min(),
					a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Cn.min(),
					s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ir.EMPTY_BYTE_STRING,
					o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
				this.target = e, this.targetId = t, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = a, this.resumeToken = s, this.expectedCount = o
			}
			withSequenceNumber(e) {
				return new ms(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount)
			}
			withResumeToken(e, t) {
				return new ms(this.target, this.targetId, this.purpose, this.sequenceNumber, t, this.lastLimboFreeSnapshotVersion, e, null)
			}
			withExpectedCount(e) {
				return new ms(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e)
			}
			withLastLimboFreeSnapshotVersion(e) {
				return new ms(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken, this.expectedCount)
			}
		}
		class vs {
			constructor(e) {
				this.ct = e
			}
		}

		function ys(e) {
			const t = ss({
				parent: e.parent,
				structuredQuery: e.structuredQuery
			});
			return "LAST" === e.limitType ? gi(t, t.limit, "L") : t
		}
		class bs {
			constructor() {}
			Pt(e, t) {
				this.It(e, t), t.Tt()
			}
			It(e, t) {
				if ("nullValue" in e) this.Et(t, 5);
				else if ("booleanValue" in e) this.Et(t, 10), t.dt(e.booleanValue ? 1 : 0);
				else if ("integerValue" in e) this.Et(t, 15), t.dt(or(e.integerValue));
				else if ("doubleValue" in e) {
					const n = or(e.doubleValue);
					isNaN(n) ? this.Et(t, 13) : (this.Et(t, 15), Gn(n) ? t.dt(0) : t.dt(n))
				} else if ("timestampValue" in e) {
					let n = e.timestampValue;
					this.Et(t, 20), "string" == typeof n && (n = sr(n)), t.At("".concat(n.seconds || "")), t.dt(n.nanos || 0)
				} else if ("stringValue" in e) this.Rt(e.stringValue, t), this.Vt(t);
				else if ("bytesValue" in e) this.Et(t, 30), t.ft(lr(e.bytesValue)), this.Vt(t);
				else if ("referenceValue" in e) this.gt(e.referenceValue, t);
				else if ("geoPointValue" in e) {
					const n = e.geoPointValue;
					this.Et(t, 45), t.dt(n.latitude || 0), t.dt(n.longitude || 0)
				} else "mapValue" in e ? Nr(e) ? this.Et(t, Number.MAX_SAFE_INTEGER) : (this.yt(e.mapValue, t), this.Vt(t)) : "arrayValue" in e ? (this.wt(e.arrayValue, t), this.Vt(t)) : an()
			}
			Rt(e, t) {
				this.Et(t, 25), this.St(e, t)
			}
			St(e, t) {
				t.At(e)
			}
			yt(e, t) {
				const n = e.fields || {};
				this.Et(t, 55);
				for (const r of Object.keys(n)) this.Rt(r, t), this.It(n[r], t)
			}
			wt(e, t) {
				const n = e.values || [];
				this.Et(t, 50);
				for (const r of n) this.It(r, t)
			}
			gt(e, t) {
				this.Et(t, 37), Nn.fromName(e).path.forEach((e => {
					this.Et(t, 60), this.St(e, t)
				}))
			}
			Et(e, t) {
				e.dt(t)
			}
			Vt(e) {
				e.dt(2)
			}
		}
		bs.bt = new bs;
		class ws {
			constructor() {
				this._n = new xs
			}
			addToCollectionParentIndex(e, t) {
				return this._n.add(t), Fn.resolve()
			}
			getCollectionParents(e, t) {
				return Fn.resolve(this._n.getEntries(t))
			}
			addFieldIndex(e, t) {
				return Fn.resolve()
			}
			deleteFieldIndex(e, t) {
				return Fn.resolve()
			}
			deleteAllFieldIndexes(e) {
				return Fn.resolve()
			}
			createTargetIndexes(e, t) {
				return Fn.resolve()
			}
			getDocumentsMatchingTarget(e, t) {
				return Fn.resolve(null)
			}
			getIndexType(e, t) {
				return Fn.resolve(0)
			}
			getFieldIndexes(e, t) {
				return Fn.resolve([])
			}
			getNextCollectionGroupToUpdate(e) {
				return Fn.resolve(null)
			}
			getMinOffset(e, t) {
				return Fn.resolve(jn.min())
			}
			getMinOffsetFromCollectionGroup(e, t) {
				return Fn.resolve(jn.min())
			}
			updateCollectionGroup(e, t, n) {
				return Fn.resolve()
			}
			updateIndexEntries(e, t) {
				return Fn.resolve()
			}
		}
		class xs {
			constructor() {
				this.index = {}
			}
			add(e) {
				const t = e.lastSegment(),
					n = e.popLast(),
					r = this.index[t] || new er(En.comparator),
					i = !r.has(n);
				return this.index[t] = r.add(n), i
			}
			has(e) {
				const t = e.lastSegment(),
					n = e.popLast(),
					r = this.index[t];
				return r && r.has(n)
			}
			getEntries(e) {
				return (this.index[e] || new er(En.comparator)).toArray()
			}
		}
		new Uint8Array(0);
		class ks {
			constructor(e, t, n) {
				this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t, this.maximumSequenceNumbersToCollect = n
			}
			static withCacheSize(e) {
				return new ks(e, ks.DEFAULT_COLLECTION_PERCENTILE, ks.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
			}
		}
		ks.DEFAULT_COLLECTION_PERCENTILE = 10, ks.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, ks.DEFAULT = new ks(41943040, ks.DEFAULT_COLLECTION_PERCENTILE, ks.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), ks.DISABLED = new ks(-1, 0, 0);
		class Ss {
			constructor(e) {
				this.On = e
			}
			next() {
				return this.On += 2, this.On
			}
			static Nn() {
				return new Ss(0)
			}
			static Ln() {
				return new Ss(-1)
			}
		}
		class Cs {
			constructor() {
				this.changes = new Si((e => e.toString()), ((e, t) => e.isEqual(t))), this.changesApplied = !1
			}
			addEntry(e) {
				this.assertNotApplied(), this.changes.set(e.key, e)
			}
			removeEntry(e, t) {
				this.assertNotApplied(), this.changes.set(e, Pr.newInvalidDocument(e).setReadTime(t))
			}
			getEntry(e, t) {
				this.assertNotApplied();
				const n = this.changes.get(t);
				return void 0 !== n ? Fn.resolve(n) : this.getFromCache(e, t)
			}
			getEntries(e, t) {
				return this.getAllFromCache(e, t)
			}
			apply(e) {
				return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e)
			}
			assertNotApplied() {}
		}
		class _s {
			constructor(e, t) {
				this.overlayedDocument = e, this.mutatedFields = t
			}
		}
		class Es {
			constructor(e, t, n, r) {
				this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = n, this.indexManager = r
			}
			getDocument(e, t) {
				let n = null;
				return this.documentOverlayCache.getOverlay(e, t).next((r => (n = r, this.remoteDocumentCache.getEntry(e, t)))).next((e => (null !== n && ia(n.mutation, e, nr.empty(), Sn.now()), e)))
			}
			getDocuments(e, t) {
				return this.remoteDocumentCache.getEntries(e, t).next((t => this.getLocalViewOfDocuments(e, t, Di()).next((() => t))))
			}
			getLocalViewOfDocuments(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Di();
				const r = Ni();
				return this.populateOverlays(e, r, t).next((() => this.computeViews(e, t, r, n).next((e => {
					let t = Ti();
					return e.forEach(((e, n) => {
						t = t.insert(e, n.overlayedDocument)
					})), t
				}))))
			}
			getOverlayedDocuments(e, t) {
				const n = Ni();
				return this.populateOverlays(e, n, t).next((() => this.computeViews(e, t, n, Di())))
			}
			populateOverlays(e, t, n) {
				const r = [];
				return n.forEach((e => {
					t.has(e) || r.push(e)
				})), this.documentOverlayCache.getOverlays(e, r).next((e => {
					e.forEach(((e, n) => {
						t.set(e, n)
					}))
				}))
			}
			computeViews(e, t, n, r) {
				let i = _i();
				const a = Ai(),
					s = Ai();
				return t.forEach(((e, t) => {
					const s = n.get(t.key);
					r.has(t.key) && (void 0 === s || s.mutation instanceof la) ? i = i.insert(t.key, t) : void 0 !== s ? (a.set(t.key, s.mutation.getFieldMask()), ia(s.mutation, t, s.mutation.getFieldMask(), Sn.now())) : a.set(t.key, nr.empty())
				})), this.recalculateAndSaveOverlays(e, i).next((e => (e.forEach(((e, t) => a.set(e, t))), t.forEach(((e, t) => {
					var n;
					return s.set(e, new _s(t, null !== (n = a.get(e)) && void 0 !== n ? n : null))
				})), s)))
			}
			recalculateAndSaveOverlays(e, t) {
				const n = Ai();
				let r = new $n(((e, t) => e - t)),
					i = Di();
				return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next((e => {
					for (const i of e) i.keys().forEach((e => {
						const a = t.get(e);
						if (null === a) return;
						let s = n.get(e) || nr.empty();
						s = i.applyToLocalView(a, s), n.set(e, s);
						const o = (r.get(i.batchId) || Di()).add(e);
						r = r.insert(i.batchId, o)
					}))
				})).next((() => {
					const a = [],
						s = r.getReverseIterator();
					for (; s.hasNext();) {
						const r = s.getNext(),
							o = r.key,
							l = r.value,
							c = Ri();
						l.forEach((e => {
							if (!i.has(e)) {
								const r = na(t.get(e), n.get(e));
								null !== r && c.set(e, r), i = i.add(e)
							}
						})), a.push(this.documentOverlayCache.saveOverlays(e, o, c))
					}
					return Fn.waitFor(a)
				})).next((() => n))
			}
			recalculateAndSaveOverlaysForDocumentKeys(e, t) {
				return this.remoteDocumentCache.getEntries(e, t).next((t => this.recalculateAndSaveOverlays(e, t)))
			}
			getDocumentsMatchingQuery(e, t, n, r) {
				return function(e) {
					return Nn.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length
				}(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : ui(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r) : this.getDocumentsMatchingCollectionQuery(e, t, n, r)
			}
			getNextDocuments(e, t, n, r) {
				return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next((i => {
					const a = r - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - i.size) : Fn.resolve(Ni());
					let s = -1,
						o = i;
					return a.next((t => Fn.forEach(t, ((t, n) => (s < n.largestBatchId && (s = n.largestBatchId), i.get(t) ? Fn.resolve() : this.remoteDocumentCache.getEntry(e, t).next((e => {
						o = o.insert(t, e)
					}))))).next((() => this.populateOverlays(e, t, i))).next((() => this.computeViews(e, o, t, Di()))).next((e => ({
						batchId: s,
						changes: Ii(e)
					})))))
				}))
			}
			getDocumentsMatchingDocumentQuery(e, t) {
				return this.getDocument(e, new Nn(t)).next((e => {
					let t = Ti();
					return e.isFoundDocument() && (t = t.insert(e.key, e)), t
				}))
			}
			getDocumentsMatchingCollectionGroupQuery(e, t, n, r) {
				const i = t.collectionGroup;
				let a = Ti();
				return this.indexManager.getCollectionParents(e, i).next((s => Fn.forEach(s, (s => {
					const o = function(e, t) {
						return new si(t, null, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt)
					}(t, s.child(i));
					return this.getDocumentsMatchingCollectionQuery(e, o, n, r).next((e => {
						e.forEach(((e, t) => {
							a = a.insert(e, t)
						}))
					}))
				})).next((() => a))))
			}
			getDocumentsMatchingCollectionQuery(e, t, n, r) {
				let i;
				return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next((a => (i = a, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, i, r)))).next((e => {
					i.forEach(((t, n) => {
						const r = n.getKey();
						null === e.get(r) && (e = e.insert(r, Pr.newInvalidDocument(r)))
					}));
					let n = Ti();
					return e.forEach(((e, r) => {
						const a = i.get(e);
						void 0 !== a && ia(a.mutation, r, nr.empty(), Sn.now()), bi(t, r) && (n = n.insert(e, r))
					})), n
				}))
			}
		}
		class Ts {
			constructor(e) {
				this.serializer = e, this.cr = new Map, this.lr = new Map
			}
			getBundleMetadata(e, t) {
				return Fn.resolve(this.cr.get(t))
			}
			saveBundleMetadata(e, t) {
				return this.cr.set(t.id, function(e) {
					return {
						id: e.id,
						version: e.version,
						createTime: Wa(e.createTime)
					}
				}(t)), Fn.resolve()
			}
			getNamedQuery(e, t) {
				return Fn.resolve(this.lr.get(t))
			}
			saveNamedQuery(e, t) {
				return this.lr.set(t.name, function(e) {
					return {
						name: e.name,
						query: ys(e.bundledQuery),
						readTime: Wa(e.readTime)
					}
				}(t)), Fn.resolve()
			}
		}
		class Is {
			constructor() {
				this.overlays = new $n(Nn.comparator), this.hr = new Map
			}
			getOverlay(e, t) {
				return Fn.resolve(this.overlays.get(t))
			}
			getOverlays(e, t) {
				const n = Ni();
				return Fn.forEach(t, (t => this.getOverlay(e, t).next((e => {
					null !== e && n.set(t, e)
				})))).next((() => n))
			}
			saveOverlays(e, t, n) {
				return n.forEach(((n, r) => {
					this.ht(e, t, r)
				})), Fn.resolve()
			}
			removeOverlaysForBatchId(e, t, n) {
				const r = this.hr.get(n);
				return void 0 !== r && (r.forEach((e => this.overlays = this.overlays.remove(e))), this.hr.delete(n)), Fn.resolve()
			}
			getOverlaysForCollection(e, t, n) {
				const r = Ni(),
					i = t.length + 1,
					a = new Nn(t.child("")),
					s = this.overlays.getIteratorFrom(a);
				for (; s.hasNext();) {
					const e = s.getNext().value,
						a = e.getKey();
					if (!t.isPrefixOf(a.path)) break;
					a.path.length === i && e.largestBatchId > n && r.set(e.getKey(), e)
				}
				return Fn.resolve(r)
			}
			getOverlaysForCollectionGroup(e, t, n, r) {
				let i = new $n(((e, t) => e - t));
				const a = this.overlays.getIterator();
				for (; a.hasNext();) {
					const e = a.getNext().value;
					if (e.getKey().getCollectionGroup() === t && e.largestBatchId > n) {
						let t = i.get(e.largestBatchId);
						null === t && (t = Ni(), i = i.insert(e.largestBatchId, t)), t.set(e.getKey(), e)
					}
				}
				const s = Ni(),
					o = i.getIterator();
				for (; o.hasNext() && (o.getNext().value.forEach(((e, t) => s.set(e, t))), !(s.size() >= r)););
				return Fn.resolve(s)
			}
			ht(e, t, n) {
				const r = this.overlays.get(n.key);
				if (null !== r) {
					const e = this.hr.get(r.largestBatchId).delete(n.key);
					this.hr.set(r.largestBatchId, e)
				}
				this.overlays = this.overlays.insert(n.key, new ma(t, n));
				let i = this.hr.get(t);
				void 0 === i && (i = Di(), this.hr.set(t, i)), this.hr.set(t, i.add(n.key))
			}
		}
		class Ns {
			constructor() {
				this.Pr = new er(Rs.Ir), this.Tr = new er(Rs.Er)
			}
			isEmpty() {
				return this.Pr.isEmpty()
			}
			addReference(e, t) {
				const n = new Rs(e, t);
				this.Pr = this.Pr.add(n), this.Tr = this.Tr.add(n)
			}
			dr(e, t) {
				e.forEach((e => this.addReference(e, t)))
			}
			removeReference(e, t) {
				this.Ar(new Rs(e, t))
			}
			Rr(e, t) {
				e.forEach((e => this.removeReference(e, t)))
			}
			Vr(e) {
				const t = new Nn(new En([])),
					n = new Rs(t, e),
					r = new Rs(t, e + 1),
					i = [];
				return this.Tr.forEachInRange([n, r], (e => {
					this.Ar(e), i.push(e.key)
				})), i
			}
			mr() {
				this.Pr.forEach((e => this.Ar(e)))
			}
			Ar(e) {
				this.Pr = this.Pr.delete(e), this.Tr = this.Tr.delete(e)
			}
			gr(e) {
				const t = new Nn(new En([])),
					n = new Rs(t, e),
					r = new Rs(t, e + 1);
				let i = Di();
				return this.Tr.forEachInRange([n, r], (e => {
					i = i.add(e.key)
				})), i
			}
			containsKey(e) {
				const t = new Rs(e, 0),
					n = this.Pr.firstAfterOrEqual(t);
				return null !== n && e.isEqual(n.key)
			}
		}
		class Rs {
			constructor(e, t) {
				this.key = e, this.pr = t
			}
			static Ir(e, t) {
				return Nn.comparator(e.key, t.key) || xn(e.pr, t.pr)
			}
			static Er(e, t) {
				return xn(e.pr, t.pr) || Nn.comparator(e.key, t.key)
			}
		}
		class As {
			constructor(e, t) {
				this.indexManager = e, this.referenceDelegate = t, this.mutationQueue = [], this.yr = 1, this.wr = new er(Rs.Ir)
			}
			checkEmpty(e) {
				return Fn.resolve(0 === this.mutationQueue.length)
			}
			addMutationBatch(e, t, n, r) {
				const i = this.yr;
				this.yr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
				const a = new pa(i, t, n, r);
				this.mutationQueue.push(a);
				for (const s of r) this.wr = this.wr.add(new Rs(s.key, i)), this.indexManager.addToCollectionParentIndex(e, s.key.path.popLast());
				return Fn.resolve(a)
			}
			lookupMutationBatch(e, t) {
				return Fn.resolve(this.Sr(t))
			}
			getNextMutationBatchAfterBatchId(e, t) {
				const n = t + 1,
					r = this.br(n),
					i = r < 0 ? 0 : r;
				return Fn.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null)
			}
			getHighestUnacknowledgedBatchId() {
				return Fn.resolve(0 === this.mutationQueue.length ? -1 : this.yr - 1)
			}
			getAllMutationBatches(e) {
				return Fn.resolve(this.mutationQueue.slice())
			}
			getAllMutationBatchesAffectingDocumentKey(e, t) {
				const n = new Rs(t, 0),
					r = new Rs(t, Number.POSITIVE_INFINITY),
					i = [];
				return this.wr.forEachInRange([n, r], (e => {
					const t = this.Sr(e.pr);
					i.push(t)
				})), Fn.resolve(i)
			}
			getAllMutationBatchesAffectingDocumentKeys(e, t) {
				let n = new er(xn);
				return t.forEach((e => {
					const t = new Rs(e, 0),
						r = new Rs(e, Number.POSITIVE_INFINITY);
					this.wr.forEachInRange([t, r], (e => {
						n = n.add(e.pr)
					}))
				})), Fn.resolve(this.Dr(n))
			}
			getAllMutationBatchesAffectingQuery(e, t) {
				const n = t.path,
					r = n.length + 1;
				let i = n;
				Nn.isDocumentKey(i) || (i = i.child(""));
				const a = new Rs(new Nn(i), 0);
				let s = new er(xn);
				return this.wr.forEachWhile((e => {
					const t = e.key.path;
					return !!n.isPrefixOf(t) && (t.length === r && (s = s.add(e.pr)), !0)
				}), a), Fn.resolve(this.Dr(s))
			}
			Dr(e) {
				const t = [];
				return e.forEach((e => {
					const n = this.Sr(e);
					null !== n && t.push(n)
				})), t
			}
			removeMutationBatch(e, t) {
				sn(0 === this.Cr(t.batchId, "removed")), this.mutationQueue.shift();
				let n = this.wr;
				return Fn.forEach(t.mutations, (r => {
					const i = new Rs(r.key, t.batchId);
					return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r.key)
				})).next((() => {
					this.wr = n
				}))
			}
			Mn(e) {}
			containsKey(e, t) {
				const n = new Rs(t, 0),
					r = this.wr.firstAfterOrEqual(n);
				return Fn.resolve(t.isEqual(r && r.key))
			}
			performConsistencyCheck(e) {
				return this.mutationQueue.length, Fn.resolve()
			}
			Cr(e, t) {
				return this.br(e)
			}
			br(e) {
				return 0 === this.mutationQueue.length ? 0 : e - this.mutationQueue[0].batchId
			}
			Sr(e) {
				const t = this.br(e);
				return t < 0 || t >= this.mutationQueue.length ? null : this.mutationQueue[t]
			}
		}
		class Ps {
			constructor(e) {
				this.vr = e, this.docs = new $n(Nn.comparator), this.size = 0
			}
			setIndexManager(e) {
				this.indexManager = e
			}
			addEntry(e, t) {
				const n = t.key,
					r = this.docs.get(n),
					i = r ? r.size : 0,
					a = this.vr(t);
				return this.docs = this.docs.insert(n, {
					document: t.mutableCopy(),
					size: a
				}), this.size += a - i, this.indexManager.addToCollectionParentIndex(e, n.path.popLast())
			}
			removeEntry(e) {
				const t = this.docs.get(e);
				t && (this.docs = this.docs.remove(e), this.size -= t.size)
			}
			getEntry(e, t) {
				const n = this.docs.get(t);
				return Fn.resolve(n ? n.document.mutableCopy() : Pr.newInvalidDocument(t))
			}
			getEntries(e, t) {
				let n = _i();
				return t.forEach((e => {
					const t = this.docs.get(e);
					n = n.insert(e, t ? t.document.mutableCopy() : Pr.newInvalidDocument(e))
				})), Fn.resolve(n)
			}
			getDocumentsMatchingQuery(e, t, n, r) {
				let i = _i();
				const a = t.path,
					s = new Nn(a.child("")),
					o = this.docs.getIteratorFrom(s);
				for (; o.hasNext();) {
					const {
						key: e,
						value: {
							document: s
						}
					} = o.getNext();
					if (!a.isPrefixOf(e.path)) break;
					e.path.length > a.length + 1 || Dn(Pn(s), n) <= 0 || (r.has(s.key) || bi(t, s)) && (i = i.insert(s.key, s.mutableCopy()))
				}
				return Fn.resolve(i)
			}
			getAllFromCollectionGroup(e, t, n, r) {
				an()
			}
			Fr(e, t) {
				return Fn.forEach(this.docs, (e => t(e)))
			}
			newChangeBuffer(e) {
				return new js(this)
			}
			getSize(e) {
				return Fn.resolve(this.size)
			}
		}
		class js extends Cs {
			constructor(e) {
				super(), this.ar = e
			}
			applyChanges(e) {
				const t = [];
				return this.changes.forEach(((n, r) => {
					r.isValidDocument() ? t.push(this.ar.addEntry(e, r)) : this.ar.removeEntry(n)
				})), Fn.waitFor(t)
			}
			getFromCache(e, t) {
				return this.ar.getEntry(e, t)
			}
			getAllFromCache(e, t) {
				return this.ar.getEntries(e, t)
			}
		}
		class Ds {
			constructor(e) {
				this.persistence = e, this.Mr = new Si((e => ri(e)), ii), this.lastRemoteSnapshotVersion = Cn.min(), this.highestTargetId = 0, this.Or = 0, this.Nr = new Ns, this.targetCount = 0, this.Lr = Ss.Nn()
			}
			forEachTarget(e, t) {
				return this.Mr.forEach(((e, n) => t(n))), Fn.resolve()
			}
			getLastRemoteSnapshotVersion(e) {
				return Fn.resolve(this.lastRemoteSnapshotVersion)
			}
			getHighestSequenceNumber(e) {
				return Fn.resolve(this.Or)
			}
			allocateTargetId(e) {
				return this.highestTargetId = this.Lr.next(), Fn.resolve(this.highestTargetId)
			}
			setTargetsMetadata(e, t, n) {
				return n && (this.lastRemoteSnapshotVersion = n), t > this.Or && (this.Or = t), Fn.resolve()
			}
			qn(e) {
				this.Mr.set(e.target, e);
				const t = e.targetId;
				t > this.highestTargetId && (this.Lr = new Ss(t), this.highestTargetId = t), e.sequenceNumber > this.Or && (this.Or = e.sequenceNumber)
			}
			addTargetData(e, t) {
				return this.qn(t), this.targetCount += 1, Fn.resolve()
			}
			updateTargetData(e, t) {
				return this.qn(t), Fn.resolve()
			}
			removeTargetData(e, t) {
				return this.Mr.delete(t.target), this.Nr.Vr(t.targetId), this.targetCount -= 1, Fn.resolve()
			}
			removeTargets(e, t, n) {
				let r = 0;
				const i = [];
				return this.Mr.forEach(((a, s) => {
					s.sequenceNumber <= t && null === n.get(s.targetId) && (this.Mr.delete(a), i.push(this.removeMatchingKeysForTargetId(e, s.targetId)), r++)
				})), Fn.waitFor(i).next((() => r))
			}
			getTargetCount(e) {
				return Fn.resolve(this.targetCount)
			}
			getTargetData(e, t) {
				const n = this.Mr.get(t) || null;
				return Fn.resolve(n)
			}
			addMatchingKeys(e, t, n) {
				return this.Nr.dr(t, n), Fn.resolve()
			}
			removeMatchingKeys(e, t, n) {
				this.Nr.Rr(t, n);
				const r = this.persistence.referenceDelegate,
					i = [];
				return r && t.forEach((t => {
					i.push(r.markPotentiallyOrphaned(e, t))
				})), Fn.waitFor(i)
			}
			removeMatchingKeysForTargetId(e, t) {
				return this.Nr.Vr(t), Fn.resolve()
			}
			getMatchingKeysForTargetId(e, t) {
				const n = this.Nr.gr(t);
				return Fn.resolve(n)
			}
			containsKey(e, t) {
				return Fn.resolve(this.Nr.containsKey(t))
			}
		}
		class Os {
			constructor(e, t) {
				this.Br = {}, this.overlays = {}, this.kr = new zn(0), this.qr = !1, this.qr = !0, this.referenceDelegate = e(this), this.Qr = new Ds(this), this.indexManager = new ws, this.remoteDocumentCache = function(e) {
					return new Ps(e)
				}((e => this.referenceDelegate.Kr(e))), this.serializer = new vs(t), this.$r = new Ts(this.serializer)
			}
			start() {
				return Promise.resolve()
			}
			shutdown() {
				return this.qr = !1, Promise.resolve()
			}
			get started() {
				return this.qr
			}
			setDatabaseDeletedListener() {}
			setNetworkEnabled() {}
			getIndexManager(e) {
				return this.indexManager
			}
			getDocumentOverlayCache(e) {
				let t = this.overlays[e.toKey()];
				return t || (t = new Is, this.overlays[e.toKey()] = t), t
			}
			getMutationQueue(e, t) {
				let n = this.Br[e.toKey()];
				return n || (n = new As(t, this.referenceDelegate), this.Br[e.toKey()] = n), n
			}
			getTargetCache() {
				return this.Qr
			}
			getRemoteDocumentCache() {
				return this.remoteDocumentCache
			}
			getBundleCache() {
				return this.$r
			}
			runTransaction(e, t, n) {
				en("MemoryPersistence", "Starting transaction:", e);
				const r = new Ls(this.kr.next());
				return this.referenceDelegate.Ur(), n(r).next((e => this.referenceDelegate.Wr(r).next((() => e)))).toPromise().then((e => (r.raiseOnCommittedEvent(), e)))
			}
			Gr(e, t) {
				return Fn.or(Object.values(this.Br).map((n => () => n.containsKey(e, t))))
			}
		}
		class Ls extends Ln {
			constructor(e) {
				super(), this.currentSequenceNumber = e
			}
		}
		class Ms {
			constructor(e) {
				this.persistence = e, this.zr = new Ns, this.jr = null
			}
			static Hr(e) {
				return new Ms(e)
			}
			get Jr() {
				if (this.jr) return this.jr;
				throw an()
			}
			addReference(e, t, n) {
				return this.zr.addReference(n, t), this.Jr.delete(n.toString()), Fn.resolve()
			}
			removeReference(e, t, n) {
				return this.zr.removeReference(n, t), this.Jr.add(n.toString()), Fn.resolve()
			}
			markPotentiallyOrphaned(e, t) {
				return this.Jr.add(t.toString()), Fn.resolve()
			}
			removeTarget(e, t) {
				this.zr.Vr(t.targetId).forEach((e => this.Jr.add(e.toString())));
				const n = this.persistence.getTargetCache();
				return n.getMatchingKeysForTargetId(e, t.targetId).next((e => {
					e.forEach((e => this.Jr.add(e.toString())))
				})).next((() => n.removeTargetData(e, t)))
			}
			Ur() {
				this.jr = new Set
			}
			Wr(e) {
				const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
				return Fn.forEach(this.Jr, (n => {
					const r = Nn.fromPath(n);
					return this.Yr(e, r).next((e => {
						e || t.removeEntry(r, Cn.min())
					}))
				})).next((() => (this.jr = null, t.apply(e))))
			}
			updateLimboDocument(e, t) {
				return this.Yr(e, t).next((e => {
					e ? this.Jr.delete(t.toString()) : this.Jr.add(t.toString())
				}))
			}
			Kr(e) {
				return 0
			}
			Yr(e, t) {
				return Fn.or([() => Fn.resolve(this.zr.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.Gr(e, t)])
			}
		}
		class Fs {
			constructor(e, t, n, r) {
				this.targetId = e, this.fromCache = t, this.qi = n, this.Qi = r
			}
			static Ki(e, t) {
				let n = Di(),
					r = Di();
				for (const i of t.docChanges) switch (i.type) {
					case 0:
						n = n.add(i.doc.key);
						break;
					case 1:
						r = r.add(i.doc.key)
				}
				return new Fs(e, t.fromCache, n, r)
			}
		}
		class Us {
			constructor() {
				this._documentReadCount = 0
			}
			get documentReadCount() {
				return this._documentReadCount
			}
			incrementDocumentReadCount(e) {
				this._documentReadCount += e
			}
		}
		class Vs {
			constructor() {
				this.$i = !1, this.Ui = !1, this.Wi = 100, this.Gi = H() ? 8 : Un(q()) > 0 ? 6 : 4
			}
			initialize(e, t) {
				this.zi = e, this.indexManager = t, this.$i = !0
			}
			getDocumentsMatchingQuery(e, t, n, r) {
				const i = {
					result: null
				};
				return this.ji(e, t).next((e => {
					i.result = e
				})).next((() => {
					if (!i.result) return this.Hi(e, t, r, n).next((e => {
						i.result = e
					}))
				})).next((() => {
					if (i.result) return;
					const n = new Us;
					return this.Ji(e, t, n).next((r => {
						if (i.result = r, this.Ui) return this.Yi(e, t, n, r.size)
					}))
				})).next((() => i.result))
			}
			Yi(e, t, n, r) {
				return n.documentReadCount < this.Wi ? (Zt() <= ce.DEBUG && en("QueryEngine", "SDK will not create cache indexes for query:", yi(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.Wi, "documents"), Fn.resolve()) : (Zt() <= ce.DEBUG && en("QueryEngine", "Query:", yi(t), "scans", n.documentReadCount, "local documents and returns", r, "documents as results."), n.documentReadCount > this.Gi * r ? (Zt() <= ce.DEBUG && en("QueryEngine", "The SDK decides to create cache indexes for query:", yi(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, hi(t))) : Fn.resolve())
			}
			ji(e, t) {
				if (ci(t)) return Fn.resolve(null);
				let n = hi(t);
				return this.indexManager.getIndexType(e, n).next((r => 0 === r ? null : (null !== t.limit && 1 === r && (t = gi(t, null, "F"), n = hi(t)), this.indexManager.getDocumentsMatchingTarget(e, n).next((r => {
					const i = Di(...r);
					return this.zi.getDocuments(e, i).next((r => this.indexManager.getMinOffset(e, n).next((n => {
						const a = this.Zi(t, r);
						return this.Xi(t, a, i, n.readTime) ? this.ji(e, gi(t, null, "F")) : this.es(e, a, t, n)
					}))))
				})))))
			}
			Hi(e, t, n, r) {
				return ci(t) || r.isEqual(Cn.min()) ? Fn.resolve(null) : this.zi.getDocuments(e, n).next((i => {
					const a = this.Zi(t, i);
					return this.Xi(t, a, n, r) ? Fn.resolve(null) : (Zt() <= ce.DEBUG && en("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), yi(t)), this.es(e, a, t, An(r, -1)).next((e => e)))
				}))
			}
			Zi(e, t) {
				let n = new er(xi(e));
				return t.forEach(((t, r) => {
					bi(e, r) && (n = n.add(r))
				})), n
			}
			Xi(e, t, n, r) {
				if (null === e.limit) return !1;
				if (n.size !== t.size) return !0;
				const i = "F" === e.limitType ? t.last() : t.first();
				return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0)
			}
			Ji(e, t, n) {
				return Zt() <= ce.DEBUG && en("QueryEngine", "Using full collection scan to execute query:", yi(t)), this.zi.getDocumentsMatchingQuery(e, t, jn.min(), n)
			}
			es(e, t, n, r) {
				return this.zi.getDocumentsMatchingQuery(e, n, r).next((e => (t.forEach((t => {
					e = e.insert(t.key, t)
				})), e)))
			}
		}
		class zs {
			constructor(e, t, n, r) {
				this.persistence = e, this.ts = t, this.serializer = r, this.ns = new $n(xn), this.rs = new Si((e => ri(e)), ii), this.ss = new Map, this.os = e.getRemoteDocumentCache(), this.Qr = e.getTargetCache(), this.$r = e.getBundleCache(), this._s(n)
			}
			_s(e) {
				this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new Es(this.os, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.os.setIndexManager(this.indexManager), this.ts.initialize(this.localDocuments, this.indexManager)
			}
			collectGarbage(e) {
				return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t => e.collect(t, this.ns)))
			}
		}

		function Bs(e, t, n, r) {
			return new zs(e, t, n, r)
		}
		async function Gs(e, t) {
			const n = on(e);
			return await n.persistence.runTransaction("Handle user change", "readonly", (e => {
				let r;
				return n.mutationQueue.getAllMutationBatches(e).next((i => (r = i, n._s(t), n.mutationQueue.getAllMutationBatches(e)))).next((t => {
					const i = [],
						a = [];
					let s = Di();
					for (const e of r) {
						i.push(e.batchId);
						for (const t of e.mutations) s = s.add(t.key)
					}
					for (const e of t) {
						a.push(e.batchId);
						for (const t of e.mutations) s = s.add(t.key)
					}
					return n.localDocuments.getDocuments(e, s).next((e => ({
						us: e,
						removedBatchIds: i,
						addedBatchIds: a
					})))
				}))
			}))
		}

		function qs(e) {
			const t = on(e);
			return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (e => t.Qr.getLastRemoteSnapshotVersion(e)))
		}

		function Hs(e, t, n) {
			let r = Di(),
				i = Di();
			return n.forEach((e => r = r.add(e))), t.getEntries(e, r).next((e => {
				let r = _i();
				return n.forEach(((n, a) => {
					const s = e.get(n);
					a.isFoundDocument() !== s.isFoundDocument() && (i = i.add(n)), a.isNoDocument() && a.version.isEqual(Cn.min()) ? (t.removeEntry(n, a.readTime), r = r.insert(n, a)) : !s.isValidDocument() || a.version.compareTo(s.version) > 0 || 0 === a.version.compareTo(s.version) && s.hasPendingWrites ? (t.addEntry(a), r = r.insert(n, a)) : en("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", s.version, " Watch version:", a.version)
				})), {
					cs: r,
					ls: i
				}
			}))
		}

		function Ws(e, t) {
			const n = on(e);
			return n.persistence.runTransaction("Get next mutation batch", "readonly", (e => (void 0 === t && (t = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(e, t))))
		}

		function Ks(e, t) {
			const n = on(e);
			return n.persistence.runTransaction("Allocate target", "readwrite", (e => {
				let r;
				return n.Qr.getTargetData(e, t).next((i => i ? (r = i, Fn.resolve(r)) : n.Qr.allocateTargetId(e).next((i => (r = new ms(t, i, "TargetPurposeListen", e.currentSequenceNumber), n.Qr.addTargetData(e, r).next((() => r)))))))
			})).then((e => {
				const r = n.ns.get(e.targetId);
				return (null === r || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.ns = n.ns.insert(e.targetId, e), n.rs.set(t, e.targetId)), e
			}))
		}
		async function Qs(e, t, n) {
			const r = on(e),
				i = r.ns.get(t),
				a = n ? "readwrite" : "readwrite-primary";
			try {
				n || await r.persistence.runTransaction("Release target", a, (e => r.persistence.referenceDelegate.removeTarget(e, i)))
			} catch (e) {
				if (!Vn(e)) throw e;
				en("LocalStore", "Failed to update sequence numbers for target ".concat(t, ": ").concat(e))
			}
			r.ns = r.ns.remove(t), r.rs.delete(i.target)
		}

		function Xs(e, t, n) {
			const r = on(e);
			let i = Cn.min(),
				a = Di();
			return r.persistence.runTransaction("Execute query", "readwrite", (e => function(e, t, n) {
				const r = on(e),
					i = r.rs.get(n);
				return void 0 !== i ? Fn.resolve(r.ns.get(i)) : r.Qr.getTargetData(t, n)
			}(r, e, hi(t)).next((t => {
				if (t) return i = t.lastLimboFreeSnapshotVersion, r.Qr.getMatchingKeysForTargetId(e, t.targetId).next((e => {
					a = e
				}))
			})).next((() => r.ts.getDocumentsMatchingQuery(e, t, n ? i : Cn.min(), n ? a : Di()))).next((e => (Ys(r, wi(t), e), {
				documents: e,
				hs: a
			})))))
		}

		function Ys(e, t, n) {
			let r = e.ss.get(t) || Cn.min();
			n.forEach(((e, t) => {
				t.readTime.compareTo(r) > 0 && (r = t.readTime)
			})), e.ss.set(t, r)
		}
		class $s {
			constructor() {
				this.activeTargetIds = Li()
			}
			As(e) {
				this.activeTargetIds = this.activeTargetIds.add(e)
			}
			Rs(e) {
				this.activeTargetIds = this.activeTargetIds.delete(e)
			}
			ds() {
				const e = {
					activeTargetIds: this.activeTargetIds.toArray(),
					updateTimeMs: Date.now()
				};
				return JSON.stringify(e)
			}
		}
		class Js {
			constructor() {
				this.no = new $s, this.ro = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null
			}
			addPendingMutation(e) {}
			updateMutationState(e, t, n) {}
			addLocalQueryTarget(e) {
				return this.no.As(e), this.ro[e] || "not-current"
			}
			updateQueryState(e, t, n) {
				this.ro[e] = t
			}
			removeLocalQueryTarget(e) {
				this.no.Rs(e)
			}
			isLocalQueryTarget(e) {
				return this.no.activeTargetIds.has(e)
			}
			clearQueryState(e) {
				delete this.ro[e]
			}
			getAllActiveQueryTargets() {
				return this.no.activeTargetIds
			}
			isActiveQueryTarget(e) {
				return this.no.activeTargetIds.has(e)
			}
			start() {
				return this.no = new $s, Promise.resolve()
			}
			handleUserChange(e, t, n) {}
			setOnlineState(e) {}
			shutdown() {}
			writeSequenceNumber(e) {}
			notifyBundleLoaded(e) {}
		}
		class Zs {
			io(e) {}
			shutdown() {}
		}
		class eo {
			constructor() {
				this.so = () => this.oo(), this._o = () => this.ao(), this.uo = [], this.co()
			}
			io(e) {
				this.uo.push(e)
			}
			shutdown() {
				window.removeEventListener("online", this.so), window.removeEventListener("offline", this._o)
			}
			co() {
				window.addEventListener("online", this.so), window.addEventListener("offline", this._o)
			}
			oo() {
				en("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
				for (const e of this.uo) e(0)
			}
			ao() {
				en("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
				for (const e of this.uo) e(1)
			}
			static D() {
				return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
			}
		}
		let to = null;

		function no() {
			return null === to ? to = 268435456 + Math.round(2147483648 * Math.random()) : to++, "0x" + to.toString(16)
		}
		const ro = {
			BatchGetDocuments: "batchGet",
			Commit: "commit",
			RunQuery: "runQuery",
			RunAggregationQuery: "runAggregationQuery"
		};
		class io {
			constructor(e) {
				this.lo = e.lo, this.ho = e.ho
			}
			Po(e) {
				this.Io = e
			}
			To(e) {
				this.Eo = e
			}
			Ao(e) {
				this.Ro = e
			}
			onMessage(e) {
				this.Vo = e
			}
			close() {
				this.ho()
			}
			send(e) {
				this.lo(e)
			}
			mo() {
				this.Io()
			}
			fo() {
				this.Eo()
			}
			po(e) {
				this.Ro(e)
			}
			yo(e) {
				this.Vo(e)
			}
		}
		const ao = "WebChannelConnection";
		class so extends class {
			constructor(e) {
				this.databaseInfo = e, this.databaseId = e.databaseId;
				const t = e.ssl ? "https" : "http",
					n = encodeURIComponent(this.databaseId.projectId),
					r = encodeURIComponent(this.databaseId.database);
				this.wo = t + "://" + e.host, this.So = "projects/".concat(n, "/databases/").concat(r), this.bo = "(default)" === this.databaseId.database ? "project_id=".concat(n) : "project_id=".concat(n, "&database_id=").concat(r)
			}
			get Do() {
				return !1
			}
			Co(e, t, n, r, i) {
				const a = no(),
					s = this.vo(e, t.toUriEncodedString());
				en("RestConnection", "Sending RPC '".concat(e, "' ").concat(a, ":"), s, n);
				const o = {
					"google-cloud-resource-prefix": this.So,
					"x-goog-request-params": this.bo
				};
				return this.Fo(o, r, i), this.Mo(e, s, o, n).then((t => (en("RestConnection", "Received RPC '".concat(e, "' ").concat(a, ": "), t), t)), (t => {
					throw nn("RestConnection", "RPC '".concat(e, "' ").concat(a, " failed with error: "), t, "url: ", s, "request:", n), t
				}))
			}
			xo(e, t, n, r, i, a) {
				return this.Co(e, t, n, r, i)
			}
			Fo(e, t, n) {
				e["X-Goog-Api-Client"] = "gl-js/ fire/" + $t, e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach(((t, n) => e[n] = t)), n && n.headers.forEach(((t, n) => e[n] = t))
			}
			vo(e, t) {
				const n = ro[e];
				return "".concat(this.wo, "/v1/").concat(t, ":").concat(n)
			}
			terminate() {}
		} {
			constructor(e) {
				super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions
			}
			Mo(e, t, n, r) {
				const i = no();
				return new Promise(((a, s) => {
					const o = new Ft;
					o.setWithCredentials(!0), o.listenOnce(zt.COMPLETE, (() => {
						try {
							switch (o.getLastErrorCode()) {
								case Bt.NO_ERROR:
									const t = o.getResponseJson();
									en(ao, "XHR for RPC '".concat(e, "' ").concat(i, " received:"), JSON.stringify(t)), a(t);
									break;
								case Bt.TIMEOUT:
									en(ao, "RPC '".concat(e, "' ").concat(i, " timed out")), s(new cn(ln.DEADLINE_EXCEEDED, "Request time out"));
									break;
								case Bt.HTTP_ERROR:
									const n = o.getStatus();
									if (en(ao, "RPC '".concat(e, "' ").concat(i, " failed with status:"), n, "response text:", o.getResponseText()), n > 0) {
										let e = o.getResponseJson();
										Array.isArray(e) && (e = e[0]);
										const t = null == e ? void 0 : e.error;
										if (t && t.status && t.message) {
											const e = function(e) {
												const t = e.toLowerCase().replace(/_/g, "-");
												return Object.values(ln).indexOf(t) >= 0 ? t : ln.UNKNOWN
											}(t.status);
											s(new cn(e, t.message))
										} else s(new cn(ln.UNKNOWN, "Server responded with status " + o.getStatus()))
									} else s(new cn(ln.UNAVAILABLE, "Connection failed."));
									break;
								default:
									an()
							}
						} finally {
							en(ao, "RPC '".concat(e, "' ").concat(i, " completed."))
						}
					}));
					const l = JSON.stringify(r);
					en(ao, "RPC '".concat(e, "' ").concat(i, " sending request:"), r), o.send(t, "POST", l, n, 15)
				}))
			}
			Oo(e, t, n) {
				const r = no(),
					i = [this.wo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
					a = Wt(),
					s = Ht(),
					o = {
						httpSessionIdParam: "gsessionid",
						initMessageHeaders: {},
						messageUrlParams: {
							database: "projects/".concat(this.databaseId.projectId, "/databases/").concat(this.databaseId.database)
						},
						sendRawJson: !0,
						supportsCrossDomainXhr: !0,
						internalChannelParams: {
							forwardChannelRequestTimeoutMs: 6e5
						},
						forceLongPolling: this.forceLongPolling,
						detectBufferingProxy: this.autoDetectLongPolling
					},
					l = this.longPollingOptions.timeoutSeconds;
				void 0 !== l && (o.longPollingTimeout = Math.round(1e3 * l)), this.useFetchStreams && (o.xmlHttpFactory = new Ut({})), this.Fo(o.initMessageHeaders, t, n), o.encodeInitMessageHeaders = !0;
				const c = i.join("");
				en(ao, "Creating RPC '".concat(e, "' stream ").concat(r, ": ").concat(c), o);
				const u = a.createWebChannel(c, o);
				let d = !1,
					h = !1;
				const f = new io({
						lo: t => {
							h ? en(ao, "Not sending because RPC '".concat(e, "' stream ").concat(r, " is closed:"), t) : (d || (en(ao, "Opening RPC '".concat(e, "' stream ").concat(r, " transport.")), u.open(), d = !0), en(ao, "RPC '".concat(e, "' stream ").concat(r, " sending:"), t), u.send(t))
						},
						ho: () => u.close()
					}),
					p = (e, t, n) => {
						e.listen(t, (e => {
							try {
								n(e)
							} catch (e) {
								setTimeout((() => {
									throw e
								}), 0)
							}
						}))
					};
				return p(u, Vt.EventType.OPEN, (() => {
					h || (en(ao, "RPC '".concat(e, "' stream ").concat(r, " transport opened.")), f.mo())
				})), p(u, Vt.EventType.CLOSE, (() => {
					h || (h = !0, en(ao, "RPC '".concat(e, "' stream ").concat(r, " transport closed")), f.po())
				})), p(u, Vt.EventType.ERROR, (t => {
					h || (h = !0, nn(ao, "RPC '".concat(e, "' stream ").concat(r, " transport errored:"), t), f.po(new cn(ln.UNAVAILABLE, "The operation could not be completed")))
				})), p(u, Vt.EventType.MESSAGE, (t => {
					var n;
					if (!h) {
						const i = t.data[0];
						sn(!!i);
						const a = i,
							s = a.error || (null === (n = a[0]) || void 0 === n ? void 0 : n.error);
						if (s) {
							en(ao, "RPC '".concat(e, "' stream ").concat(r, " received error:"), s);
							const t = s.status;
							let n = function(e) {
									const t = ya[e];
									if (void 0 !== t) return xa(t)
								}(t),
								i = s.message;
							void 0 === n && (n = ln.INTERNAL, i = "Unknown error status: " + t + " with message " + s.message), h = !0, f.po(new cn(n, i)), u.close()
						} else en(ao, "RPC '".concat(e, "' stream ").concat(r, " received:"), i), f.yo(i)
					}
				})), p(s, qt.STAT_EVENT, (t => {
					t.stat === Gt.PROXY ? en(ao, "RPC '".concat(e, "' stream ").concat(r, " detected buffering proxy")) : t.stat === Gt.NOPROXY && en(ao, "RPC '".concat(e, "' stream ").concat(r, " detected no buffering proxy"))
				})), setTimeout((() => {
					f.fo()
				}), 0), f
			}
		}

		function oo() {
			return "undefined" != typeof document ? document : null
		}

		function lo(e) {
			return new za(e, !0)
		}
		class co {
			constructor(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1.5,
					i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 6e4;
				this.oi = e, this.timerId = t, this.No = n, this.Lo = r, this.Bo = i, this.ko = 0, this.qo = null, this.Qo = Date.now(), this.reset()
			}
			reset() {
				this.ko = 0
			}
			Ko() {
				this.ko = this.Bo
			}
			$o(e) {
				this.cancel();
				const t = Math.floor(this.ko + this.Uo()),
					n = Math.max(0, Date.now() - this.Qo),
					r = Math.max(0, t - n);
				r > 0 && en("ExponentialBackoff", "Backing off for ".concat(r, " ms (base delay: ").concat(this.ko, " ms, delay with jitter: ").concat(t, " ms, last attempt: ").concat(n, " ms ago)")), this.qo = this.oi.enqueueAfterDelay(this.timerId, r, (() => (this.Qo = Date.now(), e()))), this.ko *= this.Lo, this.ko < this.No && (this.ko = this.No), this.ko > this.Bo && (this.ko = this.Bo)
			}
			Wo() {
				null !== this.qo && (this.qo.skipDelay(), this.qo = null)
			}
			cancel() {
				null !== this.qo && (this.qo.cancel(), this.qo = null)
			}
			Uo() {
				return (Math.random() - .5) * this.ko
			}
		}
		class uo {
			constructor(e, t, n, r, i, a, s, o) {
				this.oi = e, this.Go = n, this.zo = r, this.connection = i, this.authCredentialsProvider = a, this.appCheckCredentialsProvider = s, this.listener = o, this.state = 0, this.jo = 0, this.Ho = null, this.Jo = null, this.stream = null, this.Yo = new co(e, t)
			}
			Zo() {
				return 1 === this.state || 5 === this.state || this.Xo()
			}
			Xo() {
				return 2 === this.state || 3 === this.state
			}
			start() {
				4 !== this.state ? this.auth() : this.e_()
			}
			async stop() {
				this.Zo() && await this.close(0)
			}
			t_() {
				this.state = 0, this.Yo.reset()
			}
			n_() {
				this.Xo() && null === this.Ho && (this.Ho = this.oi.enqueueAfterDelay(this.Go, 6e4, (() => this.r_())))
			}
			i_(e) {
				this.s_(), this.stream.send(e)
			}
			async r_() {
				if (this.Xo()) return this.close(0)
			}
			s_() {
				this.Ho && (this.Ho.cancel(), this.Ho = null)
			}
			o_() {
				this.Jo && (this.Jo.cancel(), this.Jo = null)
			}
			async close(e, t) {
				this.s_(), this.o_(), this.Yo.cancel(), this.jo++, 4 !== e ? this.Yo.reset() : t && t.code === ln.RESOURCE_EXHAUSTED ? (tn(t.toString()), tn("Using maximum backoff delay to prevent overloading the backend."), this.Yo.Ko()) : t && t.code === ln.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.__(), this.stream.close(), this.stream = null), this.state = e, await this.listener.Ao(t)
			}
			__() {}
			auth() {
				this.state = 1;
				const e = this.a_(this.jo),
					t = this.jo;
				Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then((e => {
					let [n, r] = e;
					this.jo === t && this.u_(n, r)
				}), (t => {
					e((() => {
						const e = new cn(ln.UNKNOWN, "Fetching auth token failed: " + t.message);
						return this.c_(e)
					}))
				}))
			}
			u_(e, t) {
				const n = this.a_(this.jo);
				this.stream = this.l_(e, t), this.stream.Po((() => {
					n((() => this.listener.Po()))
				})), this.stream.To((() => {
					n((() => (this.state = 2, this.Jo = this.oi.enqueueAfterDelay(this.zo, 1e4, (() => (this.Xo() && (this.state = 3), Promise.resolve()))), this.listener.To())))
				})), this.stream.Ao((e => {
					n((() => this.c_(e)))
				})), this.stream.onMessage((e => {
					n((() => this.onMessage(e)))
				}))
			}
			e_() {
				this.state = 5, this.Yo.$o((async () => {
					this.state = 0, this.start()
				}))
			}
			c_(e) {
				return en("PersistentStream", "close with error: ".concat(e)), this.stream = null, this.close(4, e)
			}
			a_(e) {
				return t => {
					this.oi.enqueueAndForget((() => this.jo === e ? t() : (en("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())))
				}
			}
		}
		class ho extends uo {
			constructor(e, t, n, r, i, a) {
				super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, n, r, a), this.serializer = i
			}
			l_(e, t) {
				return this.connection.Oo("Listen", e, t)
			}
			onMessage(e) {
				this.Yo.reset();
				const t = function(e, t) {
						let n;
						if ("targetChange" in t) {
							t.targetChange;
							const r = function(e) {
									return "NO_CHANGE" === e ? 0 : "ADD" === e ? 1 : "REMOVE" === e ? 2 : "CURRENT" === e ? 3 : "RESET" === e ? 4 : an()
								}(t.targetChange.targetChangeType || "NO_CHANGE"),
								i = t.targetChange.targetIds || [],
								a = function(e, t) {
									return e.useProto3Json ? (sn(void 0 === t || "string" == typeof t), ir.fromBase64String(t || "")) : (sn(void 0 === t || t instanceof Buffer || t instanceof Uint8Array), ir.fromUint8Array(t || new Uint8Array))
								}(e, t.targetChange.resumeToken),
								s = t.targetChange.cause,
								o = s && function(e) {
									const t = void 0 === e.code ? ln.UNKNOWN : xa(e.code);
									return new cn(t, e.message || "")
								}(s);
							n = new ja(r, i, a, o || null)
						} else if ("documentChange" in t) {
							t.documentChange;
							const r = t.documentChange;
							r.document, r.document.name, r.document.updateTime;
							const i = $a(e, r.document.name),
								a = Wa(r.document.updateTime),
								s = r.document.createTime ? Wa(r.document.createTime) : Cn.min(),
								o = new Rr({
									mapValue: {
										fields: r.document.fields
									}
								}),
								l = Pr.newFoundDocument(i, a, s, o),
								c = r.targetIds || [],
								u = r.removedTargetIds || [];
							n = new Aa(c, u, l.key, l)
						} else if ("documentDelete" in t) {
							t.documentDelete;
							const r = t.documentDelete;
							r.document;
							const i = $a(e, r.document),
								a = r.readTime ? Wa(r.readTime) : Cn.min(),
								s = Pr.newNoDocument(i, a),
								o = r.removedTargetIds || [];
							n = new Aa([], o, s.key, s)
						} else if ("documentRemove" in t) {
							t.documentRemove;
							const r = t.documentRemove;
							r.document;
							const i = $a(e, r.document),
								a = r.removedTargetIds || [];
							n = new Aa([], a, i, null)
						} else {
							if (!("filter" in t)) return an(); {
								t.filter;
								const e = t.filter;
								e.targetId;
								const {
									count: r = 0,
									unchangedNames: i
								} = e, a = new va(r, i), s = e.targetId;
								n = new Pa(s, a)
							}
						}
						return n
					}(this.serializer, e),
					n = function(e) {
						if (!("targetChange" in e)) return Cn.min();
						const t = e.targetChange;
						return t.targetIds && t.targetIds.length ? Cn.min() : t.readTime ? Wa(t.readTime) : Cn.min()
					}(e);
				return this.listener.h_(t, n)
			}
			P_(e) {
				const t = {};
				t.database = es(this.serializer), t.addTarget = function(e, t) {
					let n;
					const r = t.target;
					if (n = ai(r) ? {
							documents: is(e, r)
						} : {
							query: as(e, r)._t
						}, n.targetId = t.targetId, t.resumeToken.approximateByteSize() > 0) {
						n.resumeToken = qa(e, t.resumeToken);
						const r = Ba(e, t.expectedCount);
						null !== r && (n.expectedCount = r)
					} else if (t.snapshotVersion.compareTo(Cn.min()) > 0) {
						n.readTime = Ga(e, t.snapshotVersion.toTimestamp());
						const r = Ba(e, t.expectedCount);
						null !== r && (n.expectedCount = r)
					}
					return n
				}(this.serializer, e);
				const n = function(e, t) {
					const n = function(e) {
						switch (e) {
							case "TargetPurposeListen":
								return null;
							case "TargetPurposeExistenceFilterMismatch":
								return "existence-filter-mismatch";
							case "TargetPurposeExistenceFilterMismatchBloom":
								return "existence-filter-mismatch-bloom";
							case "TargetPurposeLimboResolution":
								return "limbo-document";
							default:
								return an()
						}
					}(t.purpose);
					return null == n ? null : {
						"goog-listen-tags": n
					}
				}(this.serializer, e);
				n && (t.labels = n), this.i_(t)
			}
			I_(e) {
				const t = {};
				t.database = es(this.serializer), t.removeTarget = e, this.i_(t)
			}
		}
		class fo extends uo {
			constructor(e, t, n, r, i, a) {
				super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r, a), this.serializer = i, this.T_ = !1
			}
			get E_() {
				return this.T_
			}
			start() {
				this.T_ = !1, this.lastStreamToken = void 0, super.start()
			}
			__() {
				this.T_ && this.d_([])
			}
			l_(e, t) {
				return this.connection.Oo("Write", e, t)
			}
			onMessage(e) {
				if (sn(!!e.streamToken), this.lastStreamToken = e.streamToken, this.T_) {
					this.Yo.reset();
					const t = function(e, t) {
							return e && e.length > 0 ? (sn(void 0 !== t), e.map((e => function(e, t) {
								let n = e.updateTime ? Wa(e.updateTime) : Wa(t);
								return n.isEqual(Cn.min()) && (n = Wa(t)), new Ji(n, e.transformResults || [])
							}(e, t)))) : []
						}(e.writeResults, e.commitTime),
						n = Wa(e.commitTime);
					return this.listener.A_(n, t)
				}
				return sn(!e.writeResults || 0 === e.writeResults.length), this.T_ = !0, this.listener.R_()
			}
			V_() {
				const e = {};
				e.database = es(this.serializer), this.i_(e)
			}
			d_(e) {
				const t = {
					streamToken: this.lastStreamToken,
					writes: e.map((e => rs(this.serializer, e)))
				};
				this.i_(t)
			}
		}
		class po extends class {} {
			constructor(e, t, n, r) {
				super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = n, this.serializer = r, this.m_ = !1
			}
			f_() {
				if (this.m_) throw new cn(ln.FAILED_PRECONDITION, "The client has already been terminated.")
			}
			Co(e, t, n, r) {
				return this.f_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((i => {
					let [a, s] = i;
					return this.connection.Co(e, Qa(t, n), r, a, s)
				})).catch((e => {
					throw "FirebaseError" === e.name ? (e.code === ln.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new cn(ln.UNKNOWN, e.toString())
				}))
			}
			xo(e, t, n, r, i) {
				return this.f_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((a => {
					let [s, o] = a;
					return this.connection.xo(e, Qa(t, n), r, s, o, i)
				})).catch((e => {
					throw "FirebaseError" === e.name ? (e.code === ln.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new cn(ln.UNKNOWN, e.toString())
				}))
			}
			terminate() {
				this.m_ = !0, this.connection.terminate()
			}
		}
		class go {
			constructor(e, t) {
				this.asyncQueue = e, this.onlineStateHandler = t, this.state = "Unknown", this.g_ = 0, this.p_ = null, this.y_ = !0
			}
			w_() {
				0 === this.g_ && (this.S_("Unknown"), this.p_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, (() => (this.p_ = null, this.b_("Backend didn't respond within 10 seconds."), this.S_("Offline"), Promise.resolve()))))
			}
			D_(e) {
				"Online" === this.state ? this.S_("Unknown") : (this.g_++, this.g_ >= 1 && (this.C_(), this.b_("Connection failed 1 times. Most recent error: ".concat(e.toString())), this.S_("Offline")))
			}
			set(e) {
				this.C_(), this.g_ = 0, "Online" === e && (this.y_ = !1), this.S_(e)
			}
			S_(e) {
				e !== this.state && (this.state = e, this.onlineStateHandler(e))
			}
			b_(e) {
				const t = "Could not reach Cloud Firestore backend. ".concat(e, "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");
				this.y_ ? (tn(t), this.y_ = !1) : en("OnlineStateTracker", t)
			}
			C_() {
				null !== this.p_ && (this.p_.cancel(), this.p_ = null)
			}
		}
		class mo {
			constructor(e, t, n, r, i) {
				this.localStore = e, this.datastore = t, this.asyncQueue = n, this.remoteSyncer = {}, this.v_ = [], this.F_ = new Map, this.M_ = new Set, this.x_ = [], this.O_ = i, this.O_.io((e => {
					n.enqueueAndForget((async () => {
						_o(this) && (en("RemoteStore", "Restarting streams for network reachability change."), await async function(e) {
							const t = on(e);
							t.M_.add(4), await yo(t), t.N_.set("Unknown"), t.M_.delete(4), await vo(t)
						}(this))
					}))
				})), this.N_ = new go(n, r)
			}
		}
		async function vo(e) {
			if (_o(e))
				for (const t of e.x_) await t(!0)
		}
		async function yo(e) {
			for (const t of e.x_) await t(!1)
		}

		function bo(e, t) {
			const n = on(e);
			n.F_.has(t.targetId) || (n.F_.set(t.targetId, t), Co(n) ? So(n) : qo(n).Xo() && xo(n, t))
		}

		function wo(e, t) {
			const n = on(e),
				r = qo(n);
			n.F_.delete(t), r.Xo() && ko(n, t), 0 === n.F_.size && (r.Xo() ? r.n_() : _o(n) && n.N_.set("Unknown"))
		}

		function xo(e, t) {
			if (e.L_.xe(t.targetId), t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(Cn.min()) > 0) {
				const n = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
				t = t.withExpectedCount(n)
			}
			qo(e).P_(t)
		}

		function ko(e, t) {
			e.L_.xe(t), qo(e).I_(t)
		}

		function So(e) {
			e.L_ = new Oa({
				getRemoteKeysForTarget: t => e.remoteSyncer.getRemoteKeysForTarget(t),
				ot: t => e.F_.get(t) || null,
				tt: () => e.datastore.serializer.databaseId
			}), qo(e).start(), e.N_.w_()
		}

		function Co(e) {
			return _o(e) && !qo(e).Zo() && e.F_.size > 0
		}

		function _o(e) {
			return 0 === on(e).M_.size
		}

		function Eo(e) {
			e.L_ = void 0
		}
		async function To(e) {
			e.N_.set("Online")
		}
		async function Io(e) {
			e.F_.forEach(((t, n) => {
				xo(e, t)
			}))
		}
		async function No(e, t) {
			Eo(e), Co(e) ? (e.N_.D_(t), So(e)) : e.N_.set("Unknown")
		}
		async function Ro(e, t, n) {
			if (e.N_.set("Online"), t instanceof ja && 2 === t.state && t.cause) try {
				await async function(e, t) {
					const n = t.cause;
					for (const r of t.targetIds) e.F_.has(r) && (await e.remoteSyncer.rejectListen(r, n), e.F_.delete(r), e.L_.removeTarget(r))
				}(e, t)
			} catch (n) {
				en("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), n), await Ao(e, n)
			} else if (t instanceof Aa ? e.L_.Ke(t) : t instanceof Pa ? e.L_.He(t) : e.L_.We(t), !n.isEqual(Cn.min())) try {
				const t = await qs(e.localStore);
				n.compareTo(t) >= 0 && await
				function(e, t) {
					const n = e.L_.rt(t);
					return n.targetChanges.forEach(((n, r) => {
						if (n.resumeToken.approximateByteSize() > 0) {
							const i = e.F_.get(r);
							i && e.F_.set(r, i.withResumeToken(n.resumeToken, t))
						}
					})), n.targetMismatches.forEach(((t, n) => {
						const r = e.F_.get(t);
						if (!r) return;
						e.F_.set(t, r.withResumeToken(ir.EMPTY_BYTE_STRING, r.snapshotVersion)), ko(e, t);
						const i = new ms(r.target, t, n, r.sequenceNumber);
						xo(e, i)
					})), e.remoteSyncer.applyRemoteEvent(n)
				}(e, n)
			} catch (t) {
				en("RemoteStore", "Failed to raise snapshot:", t), await Ao(e, t)
			}
		}
		async function Ao(e, t, n) {
			if (!Vn(t)) throw t;
			e.M_.add(1), await yo(e), e.N_.set("Offline"), n || (n = () => qs(e.localStore)), e.asyncQueue.enqueueRetryable((async () => {
				en("RemoteStore", "Retrying IndexedDB access"), await n(), e.M_.delete(1), await vo(e)
			}))
		}

		function Po(e, t) {
			return t().catch((n => Ao(e, n, t)))
		}
		async function jo(e) {
			const t = on(e),
				n = Ho(t);
			let r = t.v_.length > 0 ? t.v_[t.v_.length - 1].batchId : -1;
			for (; Do(t);) try {
				const e = await Ws(t.localStore, r);
				if (null === e) {
					0 === t.v_.length && n.n_();
					break
				}
				r = e.batchId, Oo(t, e)
			} catch (e) {
				await Ao(t, e)
			}
			Lo(t) && Mo(t)
		}

		function Do(e) {
			return _o(e) && e.v_.length < 10
		}

		function Oo(e, t) {
			e.v_.push(t);
			const n = Ho(e);
			n.Xo() && n.E_ && n.d_(t.mutations)
		}

		function Lo(e) {
			return _o(e) && !Ho(e).Zo() && e.v_.length > 0
		}

		function Mo(e) {
			Ho(e).start()
		}
		async function Fo(e) {
			Ho(e).V_()
		}
		async function Uo(e) {
			const t = Ho(e);
			for (const n of e.v_) t.d_(n.mutations)
		}
		async function Vo(e, t, n) {
			const r = e.v_.shift(),
				i = ga.from(r, t, n);
			await Po(e, (() => e.remoteSyncer.applySuccessfulWrite(i))), await jo(e)
		}
		async function zo(e, t) {
			t && Ho(e).E_ && await async function(e, t) {
				if (function(e) {
						return wa(e) && e !== ln.ABORTED
					}(t.code)) {
					const n = e.v_.shift();
					Ho(e).t_(), await Po(e, (() => e.remoteSyncer.rejectFailedWrite(n.batchId, t))), await jo(e)
				}
			}(e, t), Lo(e) && Mo(e)
		}
		async function Bo(e, t) {
			const n = on(e);
			n.asyncQueue.verifyOperationInProgress(), en("RemoteStore", "RemoteStore received new credentials");
			const r = _o(n);
			n.M_.add(3), await yo(n), r && n.N_.set("Unknown"), await n.remoteSyncer.handleCredentialChange(t), n.M_.delete(3), await vo(n)
		}
		async function Go(e, t) {
			const n = on(e);
			t ? (n.M_.delete(2), await vo(n)) : t || (n.M_.add(2), await yo(n), n.N_.set("Unknown"))
		}

		function qo(e) {
			return e.B_ || (e.B_ = function(e, t, n) {
				const r = on(e);
				return r.f_(), new ho(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n)
			}(e.datastore, e.asyncQueue, {
				Po: To.bind(null, e),
				To: Io.bind(null, e),
				Ao: No.bind(null, e),
				h_: Ro.bind(null, e)
			}), e.x_.push((async t => {
				t ? (e.B_.t_(), Co(e) ? So(e) : e.N_.set("Unknown")) : (await e.B_.stop(), Eo(e))
			}))), e.B_
		}

		function Ho(e) {
			return e.k_ || (e.k_ = function(e, t, n) {
				const r = on(e);
				return r.f_(), new fo(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n)
			}(e.datastore, e.asyncQueue, {
				Po: () => Promise.resolve(),
				To: Fo.bind(null, e),
				Ao: zo.bind(null, e),
				R_: Uo.bind(null, e),
				A_: Vo.bind(null, e)
			}), e.x_.push((async t => {
				t ? (e.k_.t_(), await jo(e)) : (await e.k_.stop(), e.v_.length > 0 && (en("RemoteStore", "Stopping write stream with ".concat(e.v_.length, " pending writes")), e.v_ = []))
			}))), e.k_
		}
		class Wo {
			constructor(e, t, n, r, i) {
				this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new un, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((e => {}))
			}
			get promise() {
				return this.deferred.promise
			}
			static createAndSchedule(e, t, n, r, i) {
				const a = Date.now() + n,
					s = new Wo(e, t, a, r, i);
				return s.start(n), s
			}
			start(e) {
				this.timerHandle = setTimeout((() => this.handleDelayElapsed()), e)
			}
			skipDelay() {
				return this.handleDelayElapsed()
			}
			cancel(e) {
				null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new cn(ln.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))))
			}
			handleDelayElapsed() {
				this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((e => this.deferred.resolve(e)))) : Promise.resolve()))
			}
			clearTimeout() {
				null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
			}
		}

		function Ko(e, t) {
			if (tn("AsyncQueue", "".concat(t, ": ").concat(e)), Vn(e)) return new cn(ln.UNAVAILABLE, "".concat(t, ": ").concat(e));
			throw e
		}
		class Qo {
			constructor(e) {
				this.comparator = e ? (t, n) => e(t, n) || Nn.comparator(t.key, n.key) : (e, t) => Nn.comparator(e.key, t.key), this.keyedMap = Ti(), this.sortedSet = new $n(this.comparator)
			}
			static emptySet(e) {
				return new Qo(e.comparator)
			}
			has(e) {
				return null != this.keyedMap.get(e)
			}
			get(e) {
				return this.keyedMap.get(e)
			}
			first() {
				return this.sortedSet.minKey()
			}
			last() {
				return this.sortedSet.maxKey()
			}
			isEmpty() {
				return this.sortedSet.isEmpty()
			}
			indexOf(e) {
				const t = this.keyedMap.get(e);
				return t ? this.sortedSet.indexOf(t) : -1
			}
			get size() {
				return this.sortedSet.size
			}
			forEach(e) {
				this.sortedSet.inorderTraversal(((t, n) => (e(t), !1)))
			}
			add(e) {
				const t = this.delete(e.key);
				return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null))
			}
			delete(e) {
				const t = this.get(e);
				return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this
			}
			isEqual(e) {
				if (!(e instanceof Qo)) return !1;
				if (this.size !== e.size) return !1;
				const t = this.sortedSet.getIterator(),
					n = e.sortedSet.getIterator();
				for (; t.hasNext();) {
					const e = t.getNext().key,
						r = n.getNext().key;
					if (!e.isEqual(r)) return !1
				}
				return !0
			}
			toString() {
				const e = [];
				return this.forEach((t => {
					e.push(t.toString())
				})), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
			}
			copy(e, t) {
				const n = new Qo;
				return n.comparator = this.comparator, n.keyedMap = e, n.sortedSet = t, n
			}
		}
		class Xo {
			constructor() {
				this.q_ = new $n(Nn.comparator)
			}
			track(e) {
				const t = e.doc.key,
					n = this.q_.get(t);
				n ? 0 !== e.type && 3 === n.type ? this.q_ = this.q_.insert(t, e) : 3 === e.type && 1 !== n.type ? this.q_ = this.q_.insert(t, {
					type: n.type,
					doc: e.doc
				}) : 2 === e.type && 2 === n.type ? this.q_ = this.q_.insert(t, {
					type: 2,
					doc: e.doc
				}) : 2 === e.type && 0 === n.type ? this.q_ = this.q_.insert(t, {
					type: 0,
					doc: e.doc
				}) : 1 === e.type && 0 === n.type ? this.q_ = this.q_.remove(t) : 1 === e.type && 2 === n.type ? this.q_ = this.q_.insert(t, {
					type: 1,
					doc: n.doc
				}) : 0 === e.type && 1 === n.type ? this.q_ = this.q_.insert(t, {
					type: 2,
					doc: e.doc
				}) : an() : this.q_ = this.q_.insert(t, e)
			}
			Q_() {
				const e = [];
				return this.q_.inorderTraversal(((t, n) => {
					e.push(n)
				})), e
			}
		}
		class Yo {
			constructor(e, t, n, r, i, a, s, o, l) {
				this.query = e, this.docs = t, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = a, this.syncStateChanged = s, this.excludesMetadataChanges = o, this.hasCachedResults = l
			}
			static fromInitialDocuments(e, t, n, r, i) {
				const a = [];
				return t.forEach((e => {
					a.push({
						type: 0,
						doc: e
					})
				})), new Yo(e, t, Qo.emptySet(t), a, n, r, !0, !1, i)
			}
			get hasPendingWrites() {
				return !this.mutatedKeys.isEmpty()
			}
			isEqual(e) {
				if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && mi(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return !1;
				const t = this.docChanges,
					n = e.docChanges;
				if (t.length !== n.length) return !1;
				for (let r = 0; r < t.length; r++)
					if (t[r].type !== n[r].type || !t[r].doc.isEqual(n[r].doc)) return !1;
				return !0
			}
		}
		class $o {
			constructor() {
				this.K_ = void 0, this.U_ = []
			}
			W_() {
				return this.U_.some((e => e.G_()))
			}
		}
		class Jo {
			constructor() {
				this.queries = new Si((e => vi(e)), mi), this.onlineState = "Unknown", this.z_ = new Set
			}
		}
		async function Zo(e, t) {
			const n = on(e);
			let r = 3;
			const i = t.query;
			let a = n.queries.get(i);
			a ? !a.W_() && t.G_() && (r = 2) : (a = new $o, r = t.G_() ? 0 : 1);
			try {
				switch (r) {
					case 0:
						a.K_ = await n.onListen(i, !0);
						break;
					case 1:
						a.K_ = await n.onListen(i, !1);
						break;
					case 2:
						await n.onFirstRemoteStoreListen(i)
				}
			} catch (e) {
				const n = Ko(e, "Initialization of query '".concat(yi(t.query), "' failed"));
				return void t.onError(n)
			}
			n.queries.set(i, a), a.U_.push(t), t.j_(n.onlineState), a.K_ && t.H_(a.K_) && rl(n)
		}
		async function el(e, t) {
			const n = on(e),
				r = t.query;
			let i = 3;
			const a = n.queries.get(r);
			if (a) {
				const e = a.U_.indexOf(t);
				e >= 0 && (a.U_.splice(e, 1), 0 === a.U_.length ? i = t.G_() ? 0 : 1 : !a.W_() && t.G_() && (i = 2))
			}
			switch (i) {
				case 0:
					return n.queries.delete(r), n.onUnlisten(r, !0);
				case 1:
					return n.queries.delete(r), n.onUnlisten(r, !1);
				case 2:
					return n.onLastRemoteStoreUnlisten(r);
				default:
					return
			}
		}

		function tl(e, t) {
			const n = on(e);
			let r = !1;
			for (const i of t) {
				const e = i.query,
					t = n.queries.get(e);
				if (t) {
					for (const e of t.U_) e.H_(i) && (r = !0);
					t.K_ = i
				}
			}
			r && rl(n)
		}

		function nl(e, t, n) {
			const r = on(e),
				i = r.queries.get(t);
			if (i)
				for (const a of i.U_) a.onError(n);
			r.queries.delete(t)
		}

		function rl(e) {
			e.z_.forEach((e => {
				e.next()
			}))
		}
		var il, al;
		(al = il || (il = {})).J_ = "default", al.Cache = "cache";
		class sl {
			constructor(e, t, n) {
				this.query = e, this.Y_ = t, this.Z_ = !1, this.X_ = null, this.onlineState = "Unknown", this.options = n || {}
			}
			H_(e) {
				if (!this.options.includeMetadataChanges) {
					const t = [];
					for (const n of e.docChanges) 3 !== n.type && t.push(n);
					e = new Yo(e.query, e.docs, e.oldDocs, t, e.mutatedKeys, e.fromCache, e.syncStateChanged, !0, e.hasCachedResults)
				}
				let t = !1;
				return this.Z_ ? this.ea(e) && (this.Y_.next(e), t = !0) : this.ta(e, this.onlineState) && (this.na(e), t = !0), this.X_ = e, t
			}
			onError(e) {
				this.Y_.error(e)
			}
			j_(e) {
				this.onlineState = e;
				let t = !1;
				return this.X_ && !this.Z_ && this.ta(this.X_, e) && (this.na(this.X_), t = !0), t
			}
			ta(e, t) {
				if (!e.fromCache) return !0;
				if (!this.G_()) return !0;
				const n = "Offline" !== t;
				return (!this.options.ra || !n) && (!e.docs.isEmpty() || e.hasCachedResults || "Offline" === t)
			}
			ea(e) {
				if (e.docChanges.length > 0) return !0;
				const t = this.X_ && this.X_.hasPendingWrites !== e.hasPendingWrites;
				return !(!e.syncStateChanged && !t) && !0 === this.options.includeMetadataChanges
			}
			na(e) {
				e = Yo.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.Z_ = !0, this.Y_.next(e)
			}
			G_() {
				return this.options.source !== il.Cache
			}
		}
		class ol {
			constructor(e) {
				this.key = e
			}
		}
		class ll {
			constructor(e) {
				this.key = e
			}
		}
		class cl {
			constructor(e, t) {
				this.query = e, this.la = t, this.ha = null, this.hasCachedResults = !1, this.current = !1, this.Pa = Di(), this.mutatedKeys = Di(), this.Ia = xi(e), this.Ta = new Qo(this.Ia)
			}
			get Ea() {
				return this.la
			}
			da(e, t) {
				const n = t ? t.Aa : new Xo,
					r = t ? t.Ta : this.Ta;
				let i = t ? t.mutatedKeys : this.mutatedKeys,
					a = r,
					s = !1;
				const o = "F" === this.query.limitType && r.size === this.query.limit ? r.last() : null,
					l = "L" === this.query.limitType && r.size === this.query.limit ? r.first() : null;
				if (e.inorderTraversal(((e, t) => {
						const c = r.get(e),
							u = bi(this.query, t) ? t : null,
							d = !!c && this.mutatedKeys.has(c.key),
							h = !!u && (u.hasLocalMutations || this.mutatedKeys.has(u.key) && u.hasCommittedMutations);
						let f = !1;
						c && u ? c.data.isEqual(u.data) ? d !== h && (n.track({
							type: 3,
							doc: u
						}), f = !0) : this.Ra(c, u) || (n.track({
							type: 2,
							doc: u
						}), f = !0, (o && this.Ia(u, o) > 0 || l && this.Ia(u, l) < 0) && (s = !0)) : !c && u ? (n.track({
							type: 0,
							doc: u
						}), f = !0) : c && !u && (n.track({
							type: 1,
							doc: c
						}), f = !0, (o || l) && (s = !0)), f && (u ? (a = a.add(u), i = h ? i.add(e) : i.delete(e)) : (a = a.delete(e), i = i.delete(e)))
					})), null !== this.query.limit)
					for (; a.size > this.query.limit;) {
						const e = "F" === this.query.limitType ? a.last() : a.first();
						a = a.delete(e.key), i = i.delete(e.key), n.track({
							type: 1,
							doc: e
						})
					}
				return {
					Ta: a,
					Aa: n,
					Xi: s,
					mutatedKeys: i
				}
			}
			Ra(e, t) {
				return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations
			}
			applyChanges(e, t, n, r) {
				const i = this.Ta;
				this.Ta = e.Ta, this.mutatedKeys = e.mutatedKeys;
				const a = e.Aa.Q_();
				a.sort(((e, t) => function(e, t) {
					const n = e => {
						switch (e) {
							case 0:
								return 1;
							case 2:
							case 3:
								return 2;
							case 1:
								return 0;
							default:
								return an()
						}
					};
					return n(e) - n(t)
				}(e.type, t.type) || this.Ia(e.doc, t.doc))), this.Va(n), r = null != r && r;
				const s = t && !r ? this.ma() : [],
					o = 0 === this.Pa.size && this.current && !r ? 1 : 0,
					l = o !== this.ha;
				return this.ha = o, 0 !== a.length || l ? {
					snapshot: new Yo(this.query, e.Ta, i, a, e.mutatedKeys, 0 === o, l, !1, !!n && n.resumeToken.approximateByteSize() > 0),
					fa: s
				} : {
					fa: s
				}
			}
			j_(e) {
				return this.current && "Offline" === e ? (this.current = !1, this.applyChanges({
					Ta: this.Ta,
					Aa: new Xo,
					mutatedKeys: this.mutatedKeys,
					Xi: !1
				}, !1)) : {
					fa: []
				}
			}
			ga(e) {
				return !this.la.has(e) && !!this.Ta.has(e) && !this.Ta.get(e).hasLocalMutations
			}
			Va(e) {
				e && (e.addedDocuments.forEach((e => this.la = this.la.add(e))), e.modifiedDocuments.forEach((e => {})), e.removedDocuments.forEach((e => this.la = this.la.delete(e))), this.current = e.current)
			}
			ma() {
				if (!this.current) return [];
				const e = this.Pa;
				this.Pa = Di(), this.Ta.forEach((e => {
					this.ga(e.key) && (this.Pa = this.Pa.add(e.key))
				}));
				const t = [];
				return e.forEach((e => {
					this.Pa.has(e) || t.push(new ll(e))
				})), this.Pa.forEach((n => {
					e.has(n) || t.push(new ol(n))
				})), t
			}
			pa(e) {
				this.la = e.hs, this.Pa = Di();
				const t = this.da(e.documents);
				return this.applyChanges(t, !0)
			}
			ya() {
				return Yo.fromInitialDocuments(this.query, this.Ta, this.mutatedKeys, 0 === this.ha, this.hasCachedResults)
			}
		}
		class ul {
			constructor(e, t, n) {
				this.query = e, this.targetId = t, this.view = n
			}
		}
		class dl {
			constructor(e) {
				this.key = e, this.wa = !1
			}
		}
		class hl {
			constructor(e, t, n, r, i, a) {
				this.localStore = e, this.remoteStore = t, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = a, this.Sa = {}, this.ba = new Si((e => vi(e)), mi), this.Da = new Map, this.Ca = new Set, this.va = new $n(Nn.comparator), this.Fa = new Map, this.Ma = new Ns, this.xa = {}, this.Oa = new Map, this.Na = Ss.Ln(), this.onlineState = "Unknown", this.La = void 0
			}
			get isPrimaryClient() {
				return !0 === this.La
			}
		}
		async function fl(e, t) {
			let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
			const r = Dl(e);
			let i;
			const a = r.ba.get(t);
			return a ? (r.sharedClientState.addLocalQueryTarget(a.targetId), i = a.view.ya()) : i = await gl(r, t, n, !0), i
		}
		async function pl(e, t) {
			const n = Dl(e);
			await gl(n, t, !0, !1)
		}
		async function gl(e, t, n, r) {
			const i = await Ks(e.localStore, hi(t)),
				a = i.targetId,
				s = n ? e.sharedClientState.addLocalQueryTarget(a) : "not-current";
			let o;
			return r && (o = await ml(e, t, a, "current" === s, i.resumeToken)), e.isPrimaryClient && n && bo(e.remoteStore, i), o
		}
		async function ml(e, t, n, r, i) {
			e.Ba = (t, n, r) => async function(e, t, n, r) {
				let i = t.view.da(n);
				i.Xi && (i = await Xs(e.localStore, t.query, !1).then((e => {
					let {
						documents: n
					} = e;
					return t.view.da(n, i)
				})));
				const a = r && r.targetChanges.get(t.targetId),
					s = r && null != r.targetMismatches.get(t.targetId),
					o = t.view.applyChanges(i, e.isPrimaryClient, a, s);
				return Il(e, t.targetId, o.fa), o.snapshot
			}(e, t, n, r);
			const a = await Xs(e.localStore, t, !0),
				s = new cl(t, a.hs),
				o = s.da(a.documents),
				l = Ra.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline" !== e.onlineState, i),
				c = s.applyChanges(o, e.isPrimaryClient, l);
			Il(e, n, c.fa);
			const u = new ul(t, n, s);
			return e.ba.set(t, u), e.Da.has(n) ? e.Da.get(n).push(t) : e.Da.set(n, [t]), c.snapshot
		}
		async function vl(e, t, n) {
			const r = on(e),
				i = r.ba.get(t),
				a = r.Da.get(i.targetId);
			if (a.length > 1) return r.Da.set(i.targetId, a.filter((e => !mi(e, t)))), void r.ba.delete(t);
			r.isPrimaryClient ? (r.sharedClientState.removeLocalQueryTarget(i.targetId), r.sharedClientState.isActiveQueryTarget(i.targetId) || await Qs(r.localStore, i.targetId, !1).then((() => {
				r.sharedClientState.clearQueryState(i.targetId), n && wo(r.remoteStore, i.targetId), El(r, i.targetId)
			})).catch(Mn)) : (El(r, i.targetId), await Qs(r.localStore, i.targetId, !0))
		}
		async function yl(e, t) {
			const n = on(e),
				r = n.ba.get(t),
				i = n.Da.get(r.targetId);
			n.isPrimaryClient && 1 === i.length && (n.sharedClientState.removeLocalQueryTarget(r.targetId), wo(n.remoteStore, r.targetId))
		}
		async function bl(e, t) {
			const n = on(e);
			try {
				const e = await
				function(e, t) {
					const n = on(e),
						r = t.snapshotVersion;
					let i = n.ns;
					return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (e => {
						const a = n.os.newChangeBuffer({
							trackRemovals: !0
						});
						i = n.ns;
						const s = [];
						t.targetChanges.forEach(((a, o) => {
							const l = i.get(o);
							if (!l) return;
							s.push(n.Qr.removeMatchingKeys(e, a.removedDocuments, o).next((() => n.Qr.addMatchingKeys(e, a.addedDocuments, o))));
							let c = l.withSequenceNumber(e.currentSequenceNumber);
							null !== t.targetMismatches.get(o) ? c = c.withResumeToken(ir.EMPTY_BYTE_STRING, Cn.min()).withLastLimboFreeSnapshotVersion(Cn.min()) : a.resumeToken.approximateByteSize() > 0 && (c = c.withResumeToken(a.resumeToken, r)), i = i.insert(o, c),
								function(e, t, n) {
									return 0 === e.resumeToken.approximateByteSize() || t.snapshotVersion.toMicroseconds() - e.snapshotVersion.toMicroseconds() >= 3e8 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0
								}(l, c, a) && s.push(n.Qr.updateTargetData(e, c))
						}));
						let o = _i(),
							l = Di();
						if (t.documentUpdates.forEach((r => {
								t.resolvedLimboDocuments.has(r) && s.push(n.persistence.referenceDelegate.updateLimboDocument(e, r))
							})), s.push(Hs(e, a, t.documentUpdates).next((e => {
								o = e.cs, l = e.ls
							}))), !r.isEqual(Cn.min())) {
							const t = n.Qr.getLastRemoteSnapshotVersion(e).next((t => n.Qr.setTargetsMetadata(e, e.currentSequenceNumber, r)));
							s.push(t)
						}
						return Fn.waitFor(s).next((() => a.apply(e))).next((() => n.localDocuments.getLocalViewOfDocuments(e, o, l))).next((() => o))
					})).then((e => (n.ns = i, e)))
				}(n.localStore, t);
				t.targetChanges.forEach(((e, t) => {
					const r = n.Fa.get(t);
					r && (sn(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1), e.addedDocuments.size > 0 ? r.wa = !0 : e.modifiedDocuments.size > 0 ? sn(r.wa) : e.removedDocuments.size > 0 && (sn(r.wa), r.wa = !1))
				})), await Al(n, e, t)
			} catch (e) {
				await Mn(e)
			}
		}

		function wl(e, t, n) {
			const r = on(e);
			if (r.isPrimaryClient && 0 === n || !r.isPrimaryClient && 1 === n) {
				const e = [];
				r.ba.forEach(((n, r) => {
						const i = r.view.j_(t);
						i.snapshot && e.push(i.snapshot)
					})),
					function(e, t) {
						const n = on(e);
						n.onlineState = t;
						let r = !1;
						n.queries.forEach(((e, n) => {
							for (const i of n.U_) i.j_(t) && (r = !0)
						})), r && rl(n)
					}(r.eventManager, t), e.length && r.Sa.h_(e), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t)
			}
		}
		async function xl(e, t, n) {
			const r = on(e);
			r.sharedClientState.updateQueryState(t, "rejected", n);
			const i = r.Fa.get(t),
				a = i && i.key;
			if (a) {
				let e = new $n(Nn.comparator);
				e = e.insert(a, Pr.newNoDocument(a, Cn.min()));
				const n = Di().add(a),
					i = new Na(Cn.min(), new Map, new $n(xn), e, n);
				await bl(r, i), r.va = r.va.remove(a), r.Fa.delete(t), Rl(r)
			} else await Qs(r.localStore, t, !1).then((() => El(r, t, n))).catch(Mn)
		}
		async function kl(e, t) {
			const n = on(e),
				r = t.batch.batchId;
			try {
				const e = await
				function(e, t) {
					const n = on(e);
					return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (e => {
						const r = t.batch.keys(),
							i = n.os.newChangeBuffer({
								trackRemovals: !0
							});
						return function(e, t, n, r) {
							const i = n.batch,
								a = i.keys();
							let s = Fn.resolve();
							return a.forEach((e => {
								s = s.next((() => r.getEntry(t, e))).next((t => {
									const a = n.docVersions.get(e);
									sn(null !== a), t.version.compareTo(a) < 0 && (i.applyToRemoteDocument(t, n), t.isValidDocument() && (t.setReadTime(n.commitVersion), r.addEntry(t)))
								}))
							})), s.next((() => e.mutationQueue.removeMutationBatch(t, i)))
						}(n, e, t, i).next((() => i.apply(e))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t.batch.batchId))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, function(e) {
							let t = Di();
							for (let n = 0; n < e.mutationResults.length; ++n) e.mutationResults[n].transformResults.length > 0 && (t = t.add(e.batch.mutations[n].key));
							return t
						}(t)))).next((() => n.localDocuments.getDocuments(e, r)))
					}))
				}(n.localStore, t);
				_l(n, r, null), Cl(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), await Al(n, e)
			} catch (e) {
				await Mn(e)
			}
		}
		async function Sl(e, t, n) {
			const r = on(e);
			try {
				const e = await
				function(e, t) {
					const n = on(e);
					return n.persistence.runTransaction("Reject batch", "readwrite-primary", (e => {
						let r;
						return n.mutationQueue.lookupMutationBatch(e, t).next((t => (sn(null !== t), r = t.keys(), n.mutationQueue.removeMutationBatch(e, t)))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, r))).next((() => n.localDocuments.getDocuments(e, r)))
					}))
				}(r.localStore, t);
				_l(r, t, n), Cl(r, t), r.sharedClientState.updateMutationState(t, "rejected", n), await Al(r, e)
			} catch (n) {
				await Mn(n)
			}
		}

		function Cl(e, t) {
			(e.Oa.get(t) || []).forEach((e => {
				e.resolve()
			})), e.Oa.delete(t)
		}

		function _l(e, t, n) {
			const r = on(e);
			let i = r.xa[r.currentUser.toKey()];
			if (i) {
				const e = i.get(t);
				e && (n ? e.reject(n) : e.resolve(), i = i.remove(t)), r.xa[r.currentUser.toKey()] = i
			}
		}

		function El(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
			e.sharedClientState.removeLocalQueryTarget(t);
			for (const r of e.Da.get(t)) e.ba.delete(r), n && e.Sa.ka(r, n);
			e.Da.delete(t), e.isPrimaryClient && e.Ma.Vr(t).forEach((t => {
				e.Ma.containsKey(t) || Tl(e, t)
			}))
		}

		function Tl(e, t) {
			e.Ca.delete(t.path.canonicalString());
			const n = e.va.get(t);
			null !== n && (wo(e.remoteStore, n), e.va = e.va.remove(t), e.Fa.delete(n), Rl(e))
		}

		function Il(e, t, n) {
			for (const r of n) r instanceof ol ? (e.Ma.addReference(r.key, t), Nl(e, r)) : r instanceof ll ? (en("SyncEngine", "Document no longer in limbo: " + r.key), e.Ma.removeReference(r.key, t), e.Ma.containsKey(r.key) || Tl(e, r.key)) : an()
		}

		function Nl(e, t) {
			const n = t.key,
				r = n.path.canonicalString();
			e.va.get(n) || e.Ca.has(r) || (en("SyncEngine", "New document in limbo: " + n), e.Ca.add(r), Rl(e))
		}

		function Rl(e) {
			for (; e.Ca.size > 0 && e.va.size < e.maxConcurrentLimboResolutions;) {
				const t = e.Ca.values().next().value;
				e.Ca.delete(t);
				const n = new Nn(En.fromString(t)),
					r = e.Na.next();
				e.Fa.set(r, new dl(n)), e.va = e.va.insert(n, r), bo(e.remoteStore, new ms(hi(li(n.path)), r, "TargetPurposeLimboResolution", zn.oe))
			}
		}
		async function Al(e, t, n) {
			const r = on(e),
				i = [],
				a = [],
				s = [];
			r.ba.isEmpty() || (r.ba.forEach(((e, o) => {
				s.push(r.Ba(o, t, n).then((e => {
					var t;
					if ((e || n) && r.isPrimaryClient) {
						const i = e ? !e.fromCache : null === (t = null == n ? void 0 : n.targetChanges.get(o.targetId)) || void 0 === t ? void 0 : t.current;
						r.sharedClientState.updateQueryState(o.targetId, i ? "current" : "not-current")
					}
					if (e) {
						i.push(e);
						const t = Fs.Ki(o.targetId, e);
						a.push(t)
					}
				})))
			})), await Promise.all(s), r.Sa.h_(i), await async function(e, t) {
				const n = on(e);
				try {
					await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (e => Fn.forEach(t, (t => Fn.forEach(t.qi, (r => n.persistence.referenceDelegate.addReference(e, t.targetId, r))).next((() => Fn.forEach(t.Qi, (r => n.persistence.referenceDelegate.removeReference(e, t.targetId, r)))))))))
				} catch (e) {
					if (!Vn(e)) throw e;
					en("LocalStore", "Failed to update sequence numbers: " + e)
				}
				for (const r of t) {
					const e = r.targetId;
					if (!r.fromCache) {
						const t = n.ns.get(e),
							r = t.snapshotVersion,
							i = t.withLastLimboFreeSnapshotVersion(r);
						n.ns = n.ns.insert(e, i)
					}
				}
			}(r.localStore, a))
		}
		async function Pl(e, t) {
			const n = on(e);
			if (!n.currentUser.isEqual(t)) {
				en("SyncEngine", "User change. New user:", t.toKey());
				const e = await Gs(n.localStore, t);
				n.currentUser = t,
					function(e, t) {
						e.Oa.forEach((e => {
							e.forEach((e => {
								e.reject(new cn(ln.CANCELLED, t))
							}))
						})), e.Oa.clear()
					}(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(t, e.removedBatchIds, e.addedBatchIds), await Al(n, e.us)
			}
		}

		function jl(e, t) {
			const n = on(e),
				r = n.Fa.get(t);
			if (r && r.wa) return Di().add(r.key); {
				let e = Di();
				const r = n.Da.get(t);
				if (!r) return e;
				for (const t of r) {
					const r = n.ba.get(t);
					e = e.unionWith(r.view.Ea)
				}
				return e
			}
		}

		function Dl(e) {
			const t = on(e);
			return t.remoteStore.remoteSyncer.applyRemoteEvent = bl.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = jl.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = xl.bind(null, t), t.Sa.h_ = tl.bind(null, t.eventManager), t.Sa.ka = nl.bind(null, t.eventManager), t
		}

		function Ol(e) {
			const t = on(e);
			return t.remoteStore.remoteSyncer.applySuccessfulWrite = kl.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = Sl.bind(null, t), t
		}
		class Ll {
			constructor() {
				this.synchronizeTabs = !1
			}
			async initialize(e) {
				this.serializer = lo(e.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(e), this.persistence = this.createPersistence(e), await this.persistence.start(), this.localStore = this.createLocalStore(e), this.gcScheduler = this.createGarbageCollectionScheduler(e, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(e, this.localStore)
			}
			createGarbageCollectionScheduler(e, t) {
				return null
			}
			createIndexBackfillerScheduler(e, t) {
				return null
			}
			createLocalStore(e) {
				return Bs(this.persistence, new Vs, e.initialUser, this.serializer)
			}
			createPersistence(e) {
				return new Os(Ms.Hr, this.serializer)
			}
			createSharedClientState(e) {
				return new Js
			}
			async terminate() {
				var e, t;
				null === (e = this.gcScheduler) || void 0 === e || e.stop(), null === (t = this.indexBackfillerScheduler) || void 0 === t || t.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown()
			}
		}
		class Ml {
			async initialize(e, t) {
				this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs), this.sharedClientState.onlineStateHandler = e => wl(this.syncEngine, e, 1), this.remoteStore.remoteSyncer.handleCredentialChange = Pl.bind(null, this.syncEngine), await Go(this.remoteStore, this.syncEngine.isPrimaryClient))
			}
			createEventManager(e) {
				return new Jo
			}
			createDatastore(e) {
				const t = lo(e.databaseInfo.databaseId),
					n = function(e) {
						return new so(e)
					}(e.databaseInfo);
				return function(e, t, n, r) {
					return new po(e, t, n, r)
				}(e.authCredentials, e.appCheckCredentials, n, t)
			}
			createRemoteStore(e) {
				return function(e, t, n, r, i) {
					return new mo(e, t, n, r, i)
				}(this.localStore, this.datastore, e.asyncQueue, (e => wl(this.syncEngine, e, 0)), eo.D() ? new eo : new Zs)
			}
			createSyncEngine(e, t) {
				return function(e, t, n, r, i, a, s) {
					const o = new hl(e, t, n, r, i, a);
					return s && (o.La = !0), o
				}(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t)
			}
			async terminate() {
				var e;
				await async function(e) {
					const t = on(e);
					en("RemoteStore", "RemoteStore shutting down."), t.M_.add(5), await yo(t), t.O_.shutdown(), t.N_.set("Unknown")
				}(this.remoteStore), null === (e = this.datastore) || void 0 === e || e.terminate()
			}
		}
		class Fl {
			constructor(e) {
				this.observer = e, this.muted = !1
			}
			next(e) {
				this.observer.next && this.Ka(this.observer.next, e)
			}
			error(e) {
				this.observer.error ? this.Ka(this.observer.error, e) : tn("Uncaught Error in snapshot listener:", e.toString())
			}
			$a() {
				this.muted = !0
			}
			Ka(e, t) {
				this.muted || setTimeout((() => {
					this.muted || e(t)
				}), 0)
			}
		}
		class Ul {
			constructor(e, t, n, r) {
				this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = n, this.databaseInfo = r, this.user = Yt.UNAUTHENTICATED, this.clientId = wn.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, (async e => {
					en("FirestoreClient", "Received user=", e.uid), await this.authCredentialListener(e), this.user = e
				})), this.appCheckCredentials.start(n, (e => (en("FirestoreClient", "Received new app check token=", e), this.appCheckCredentialListener(e, this.user))))
			}
			get configuration() {
				return {
					asyncQueue: this.asyncQueue,
					databaseInfo: this.databaseInfo,
					clientId: this.clientId,
					authCredentials: this.authCredentials,
					appCheckCredentials: this.appCheckCredentials,
					initialUser: this.user,
					maxConcurrentLimboResolutions: 100
				}
			}
			setCredentialChangeListener(e) {
				this.authCredentialListener = e
			}
			setAppCheckTokenChangeListener(e) {
				this.appCheckCredentialListener = e
			}
			verifyNotTerminated() {
				if (this.asyncQueue.isShuttingDown) throw new cn(ln.FAILED_PRECONDITION, "The client has already been terminated.")
			}
			terminate() {
				this.asyncQueue.enterRestrictedMode();
				const e = new un;
				return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async () => {
					try {
						this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve()
					} catch (t) {
						const n = Ko(t, "Failed to shutdown persistence");
						e.reject(n)
					}
				})), e.promise
			}
		}
		async function Vl(e, t) {
			e.asyncQueue.verifyOperationInProgress(), en("FirestoreClient", "Initializing OfflineComponentProvider");
			const n = e.configuration;
			await t.initialize(n);
			let r = n.initialUser;
			e.setCredentialChangeListener((async e => {
				r.isEqual(e) || (await Gs(t.localStore, e), r = e)
			})), t.persistence.setDatabaseDeletedListener((() => e.terminate())), e._offlineComponents = t
		}
		async function zl(e, t) {
			e.asyncQueue.verifyOperationInProgress();
			const n = await Gl(e);
			en("FirestoreClient", "Initializing OnlineComponentProvider"), await t.initialize(n, e.configuration), e.setCredentialChangeListener((e => Bo(t.remoteStore, e))), e.setAppCheckTokenChangeListener(((e, n) => Bo(t.remoteStore, n))), e._onlineComponents = t
		}

		function Bl(e) {
			return "FirebaseError" === e.name ? e.code === ln.FAILED_PRECONDITION || e.code === ln.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || 22 === e.code || 20 === e.code || 11 === e.code
		}
		async function Gl(e) {
			if (!e._offlineComponents)
				if (e._uninitializedComponentsProvider) {
					en("FirestoreClient", "Using user provided OfflineComponentProvider");
					try {
						await Vl(e, e._uninitializedComponentsProvider._offline)
					} catch (t) {
						const n = t;
						if (!Bl(n)) throw n;
						nn("Error using user provided cache. Falling back to memory cache: " + n), await Vl(e, new Ll)
					}
				} else en("FirestoreClient", "Using default OfflineComponentProvider"), await Vl(e, new Ll);
			return e._offlineComponents
		}
		async function ql(e) {
			return e._onlineComponents || (e._uninitializedComponentsProvider ? (en("FirestoreClient", "Using user provided OnlineComponentProvider"), await zl(e, e._uninitializedComponentsProvider._online)) : (en("FirestoreClient", "Using default OnlineComponentProvider"), await zl(e, new Ml))), e._onlineComponents
		}

		function Hl(e) {
			return ql(e).then((e => e.syncEngine))
		}
		async function Wl(e) {
			const t = await ql(e),
				n = t.eventManager;
			return n.onListen = fl.bind(null, t.syncEngine), n.onUnlisten = vl.bind(null, t.syncEngine), n.onFirstRemoteStoreListen = pl.bind(null, t.syncEngine), n.onLastRemoteStoreUnlisten = yl.bind(null, t.syncEngine), n
		}

		function Kl(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
			const r = new un;
			return e.asyncQueue.enqueueAndForget((async () => function(e, t, n, r, i) {
				const a = new Fl({
						next: a => {
							t.enqueueAndForget((() => el(e, s)));
							const o = a.docs.has(n);
							!o && a.fromCache ? i.reject(new cn(ln.UNAVAILABLE, "Failed to get document because the client is offline.")) : o && a.fromCache && r && "server" === r.source ? i.reject(new cn(ln.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(a)
						},
						error: e => i.reject(e)
					}),
					s = new sl(li(n.path), a, {
						includeMetadataChanges: !0,
						ra: !0
					});
				return Zo(e, s)
			}(await Wl(e), e.asyncQueue, t, n, r))), r.promise
		}

		function Ql(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
			const r = new un;
			return e.asyncQueue.enqueueAndForget((async () => function(e, t, n, r, i) {
				const a = new Fl({
						next: n => {
							t.enqueueAndForget((() => el(e, s))), n.fromCache && "server" === r.source ? i.reject(new cn(ln.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n)
						},
						error: e => i.reject(e)
					}),
					s = new sl(n, a, {
						includeMetadataChanges: !0,
						ra: !0
					});
				return Zo(e, s)
			}(await Wl(e), e.asyncQueue, t, n, r))), r.promise
		}

		function Xl(e) {
			const t = {};
			return void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds), t
		}
		const Yl = new Map;

		function $l(e, t, n) {
			if (!n) throw new cn(ln.INVALID_ARGUMENT, "Function ".concat(e, "() cannot be called with an empty ").concat(t, "."))
		}

		function Jl(e) {
			if (!Nn.isDocumentKey(e)) throw new cn(ln.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but ".concat(e, " has ").concat(e.length, "."))
		}

		function Zl(e) {
			if (Nn.isDocumentKey(e)) throw new cn(ln.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e, " has ").concat(e.length, "."))
		}

		function ec(e) {
			if (void 0 === e) return "undefined";
			if (null === e) return "null";
			if ("string" == typeof e) return e.length > 20 && (e = "".concat(e.substring(0, 20), "...")), JSON.stringify(e);
			if ("number" == typeof e || "boolean" == typeof e) return "" + e;
			if ("object" == typeof e) {
				if (e instanceof Array) return "an array"; {
					const t = function(e) {
						return e.constructor ? e.constructor.name : null
					}(e);
					return t ? "a custom ".concat(t, " object") : "an object"
				}
			}
			return "function" == typeof e ? "a function" : an()
		}

		function tc(e, t) {
			if ("_delegate" in e && (e = e._delegate), !(e instanceof t)) {
				if (t.name === e.constructor.name) throw new cn(ln.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"); {
					const n = ec(e);
					throw new cn(ln.INVALID_ARGUMENT, "Expected type '".concat(t.name, "', but it was: ").concat(n))
				}
			}
			return e
		}
		class nc {
			constructor(e) {
				var t, n;
				if (void 0 === e.host) {
					if (void 0 !== e.ssl) throw new cn(ln.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
					this.host = "firestore.googleapis.com", this.ssl = !0
				} else this.host = e.host, this.ssl = null === (t = e.ssl) || void 0 === t || t;
				if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, void 0 === e.cacheSizeBytes) this.cacheSizeBytes = 41943040;
				else {
					if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576) throw new cn(ln.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
					this.cacheSizeBytes = e.cacheSizeBytes
				}(function(e, t, n, r) {
					if (!0 === t && !0 === r) throw new cn(ln.INVALID_ARGUMENT, "".concat(e, " and ").concat(n, " cannot be used together."))
				})("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : void 0 === e.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = !0 : this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.experimentalLongPollingOptions = Xl(null !== (n = e.experimentalLongPollingOptions) && void 0 !== n ? n : {}),
					function(e) {
						if (void 0 !== e.timeoutSeconds) {
							if (isNaN(e.timeoutSeconds)) throw new cn(ln.INVALID_ARGUMENT, "invalid long polling timeout: ".concat(e.timeoutSeconds, " (must not be NaN)"));
							if (e.timeoutSeconds < 5) throw new cn(ln.INVALID_ARGUMENT, "invalid long polling timeout: ".concat(e.timeoutSeconds, " (minimum allowed value is 5)"));
							if (e.timeoutSeconds > 30) throw new cn(ln.INVALID_ARGUMENT, "invalid long polling timeout: ".concat(e.timeoutSeconds, " (maximum allowed value is 30)"))
						}
					}(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams
			}
			isEqual(e) {
				return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function(e, t) {
					return e.timeoutSeconds === t.timeoutSeconds
				}(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams
			}
		}
		class rc {
			constructor(e, t, n, r) {
				this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = n, this._app = r, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new nc({}), this._settingsFrozen = !1
			}
			get app() {
				if (!this._app) throw new cn(ln.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
				return this._app
			}
			get _initialized() {
				return this._settingsFrozen
			}
			get _terminated() {
				return void 0 !== this._terminateTask
			}
			_setSettings(e) {
				if (this._settingsFrozen) throw new cn(ln.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
				this._settings = new nc(e), void 0 !== e.credentials && (this._authCredentials = function(e) {
					if (!e) return new hn;
					switch (e.type) {
						case "firstParty":
							return new mn(e.sessionIndex || "0", e.iamToken || null, e.authTokenFactory || null);
						case "provider":
							return e.client;
						default:
							throw new cn(ln.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type")
					}
				}(e.credentials))
			}
			_getSettings() {
				return this._settings
			}
			_freezeSettings() {
				return this._settingsFrozen = !0, this._settings
			}
			_delete() {
				return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask
			}
			toJSON() {
				return {
					app: this._app,
					databaseId: this._databaseId,
					settings: this._settings
				}
			}
			_terminate() {
				return function(e) {
					const t = Yl.get(e);
					t && (en("ComponentProvider", "Removing Datastore"), Yl.delete(e), t.terminate())
				}(this), Promise.resolve()
			}
		}

		function ic(e, t, n) {
			let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
			var i;
			const a = (e = tc(e, rc))._getSettings(),
				s = "".concat(t, ":").concat(n);
			if ("firestore.googleapis.com" !== a.host && a.host !== s && nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), e._setSettings(Object.assign(Object.assign({}, a), {
					host: s,
					ssl: !1
				})), r.mockUserToken) {
				let t, n;
				if ("string" == typeof r.mockUserToken) t = r.mockUserToken, n = Yt.MOCK_USER;
				else {
					t = function(e, t) {
						if (e.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
						const n = t || "demo-project",
							r = e.iat || 0,
							i = e.sub || e.user_id;
						if (!i) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
						const a = Object.assign({
							iss: "https://securetoken.google.com/".concat(n),
							aud: n,
							iat: r,
							exp: r + 3600,
							auth_time: r,
							sub: i,
							user_id: i,
							firebase: {
								sign_in_provider: "custom",
								identities: {}
							}
						}, e);
						return [L(JSON.stringify({
							alg: "none",
							type: "JWT"
						})), L(JSON.stringify(a)), ""].join(".")
					}(r.mockUserToken, null === (i = e._app) || void 0 === i ? void 0 : i.options.projectId);
					const a = r.mockUserToken.sub || r.mockUserToken.user_id;
					if (!a) throw new cn(ln.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
					n = new Yt(a)
				}
				e._authCredentials = new fn(new dn(t, n))
			}
		}
		class ac {
			constructor(e, t, n) {
				this.converter = t, this._query = n, this.type = "query", this.firestore = e
			}
			withConverter(e) {
				return new ac(this.firestore, e, this._query)
			}
		}
		class sc {
			constructor(e, t, n) {
				this.converter = t, this._key = n, this.type = "document", this.firestore = e
			}
			get _path() {
				return this._key.path
			}
			get id() {
				return this._key.path.lastSegment()
			}
			get path() {
				return this._key.path.canonicalString()
			}
			get parent() {
				return new oc(this.firestore, this.converter, this._key.path.popLast())
			}
			withConverter(e) {
				return new sc(this.firestore, e, this._key)
			}
		}
		class oc extends ac {
			constructor(e, t, n) {
				super(e, t, li(n)), this._path = n, this.type = "collection"
			}
			get id() {
				return this._query.path.lastSegment()
			}
			get path() {
				return this._query.path.canonicalString()
			}
			get parent() {
				const e = this._path.popLast();
				return e.isEmpty() ? null : new sc(this.firestore, null, new Nn(e))
			}
			withConverter(e) {
				return new oc(this.firestore, e, this._path)
			}
		}

		function lc(e, t) {
			for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
			if (e = re(e), $l("collection", "path", t), e instanceof rc) {
				const n = En.fromString(t, ...r);
				return Zl(n), new oc(e, null, n)
			} {
				if (!(e instanceof sc || e instanceof oc)) throw new cn(ln.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
				const n = e._path.child(En.fromString(t, ...r));
				return Zl(n), new oc(e.firestore, null, n)
			}
		}

		function cc(e, t) {
			for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
			if (e = re(e), 1 === arguments.length && (t = wn.newId()), $l("doc", "path", t), e instanceof rc) {
				const n = En.fromString(t, ...r);
				return Jl(n), new sc(e, null, new Nn(n))
			} {
				if (!(e instanceof sc || e instanceof oc)) throw new cn(ln.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
				const n = e._path.child(En.fromString(t, ...r));
				return Jl(n), new sc(e.firestore, e instanceof oc ? e.converter : null, new Nn(n))
			}
		}
		class uc {
			constructor() {
				this.iu = Promise.resolve(), this.su = [], this.ou = !1, this._u = [], this.au = null, this.uu = !1, this.cu = !1, this.lu = [], this.Yo = new co(this, "async_queue_retry"), this.hu = () => {
					const e = oo();
					e && en("AsyncQueue", "Visibility state changed to " + e.visibilityState), this.Yo.Wo()
				};
				const e = oo();
				e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.hu)
			}
			get isShuttingDown() {
				return this.ou
			}
			enqueueAndForget(e) {
				this.enqueue(e)
			}
			enqueueAndForgetEvenWhileRestricted(e) {
				this.Pu(), this.Iu(e)
			}
			enterRestrictedMode(e) {
				if (!this.ou) {
					this.ou = !0, this.cu = e || !1;
					const t = oo();
					t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.hu)
				}
			}
			enqueue(e) {
				if (this.Pu(), this.ou) return new Promise((() => {}));
				const t = new un;
				return this.Iu((() => this.ou && this.cu ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise))).then((() => t.promise))
			}
			enqueueRetryable(e) {
				this.enqueueAndForget((() => (this.su.push(e), this.Tu())))
			}
			async Tu() {
				if (0 !== this.su.length) {
					try {
						await this.su[0](), this.su.shift(), this.Yo.reset()
					} catch (e) {
						if (!Vn(e)) throw e;
						en("AsyncQueue", "Operation failed with retryable error: " + e)
					}
					this.su.length > 0 && this.Yo.$o((() => this.Tu()))
				}
			}
			Iu(e) {
				const t = this.iu.then((() => (this.uu = !0, e().catch((e => {
					this.au = e, this.uu = !1;
					const t = function(e) {
						let t = e.message || "";
						return e.stack && (t = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack), t
					}(e);
					throw tn("INTERNAL UNHANDLED ERROR: ", t), e
				})).then((e => (this.uu = !1, e))))));
				return this.iu = t, t
			}
			enqueueAfterDelay(e, t, n) {
				this.Pu(), this.lu.indexOf(e) > -1 && (t = 0);
				const r = Wo.createAndSchedule(this, e, t, n, (e => this.Eu(e)));
				return this._u.push(r), r
			}
			Pu() {
				this.au && an()
			}
			verifyOperationInProgress() {}
			async du() {
				let e;
				do {
					e = this.iu, await e
				} while (e !== this.iu)
			}
			Au(e) {
				for (const t of this._u)
					if (t.timerId === e) return !0;
				return !1
			}
			Ru(e) {
				return this.du().then((() => {
					this._u.sort(((e, t) => e.targetTimeMs - t.targetTimeMs));
					for (const t of this._u)
						if (t.skipDelay(), "all" !== e && t.timerId === e) break;
					return this.du()
				}))
			}
			Vu(e) {
				this.lu.push(e)
			}
			Eu(e) {
				const t = this._u.indexOf(e);
				this._u.splice(t, 1)
			}
		}
		class dc extends rc {
			constructor(e, t, n, r) {
				super(e, t, n, r), this.type = "firestore", this._queue = new uc, this._persistenceKey = (null == r ? void 0 : r.name) || "[DEFAULT]"
			}
			_terminate() {
				return this._firestoreClient || fc(this), this._firestoreClient.terminate()
			}
		}

		function hc(e) {
			return e._firestoreClient || fc(e), e._firestoreClient.verifyNotTerminated(), e._firestoreClient
		}

		function fc(e) {
			var t, n, r;
			const i = e._freezeSettings(),
				a = function(e, t, n, r) {
					return new hr(e, t, n, r.host, r.ssl, r.experimentalForceLongPolling, r.experimentalAutoDetectLongPolling, Xl(r.experimentalLongPollingOptions), r.useFetchStreams)
				}(e._databaseId, (null === (t = e._app) || void 0 === t ? void 0 : t.options.appId) || "", e._persistenceKey, i);
			e._firestoreClient = new Ul(e._authCredentials, e._appCheckCredentials, e._queue, a), (null === (n = i.localCache) || void 0 === n ? void 0 : n._offlineComponentProvider) && (null === (r = i.localCache) || void 0 === r ? void 0 : r._onlineComponentProvider) && (e._firestoreClient._uninitializedComponentsProvider = {
				_offlineKind: i.localCache.kind,
				_offline: i.localCache._offlineComponentProvider,
				_online: i.localCache._onlineComponentProvider
			})
		}
		class pc {
			constructor(e) {
				this._byteString = e
			}
			static fromBase64String(e) {
				try {
					return new pc(ir.fromBase64String(e))
				} catch (e) {
					throw new cn(ln.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e)
				}
			}
			static fromUint8Array(e) {
				return new pc(ir.fromUint8Array(e))
			}
			toBase64() {
				return this._byteString.toBase64()
			}
			toUint8Array() {
				return this._byteString.toUint8Array()
			}
			toString() {
				return "Bytes(base64: " + this.toBase64() + ")"
			}
			isEqual(e) {
				return this._byteString.isEqual(e._byteString)
			}
		}
		class gc {
			constructor() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				for (let r = 0; r < t.length; ++r)
					if (0 === t[r].length) throw new cn(ln.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
				this._internalPath = new In(t)
			}
			isEqual(e) {
				return this._internalPath.isEqual(e._internalPath)
			}
		}
		class mc {
			constructor(e) {
				this._methodName = e
			}
		}
		class vc {
			constructor(e, t) {
				if (!isFinite(e) || e < -90 || e > 90) throw new cn(ln.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
				if (!isFinite(t) || t < -180 || t > 180) throw new cn(ln.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
				this._lat = e, this._long = t
			}
			get latitude() {
				return this._lat
			}
			get longitude() {
				return this._long
			}
			isEqual(e) {
				return this._lat === e._lat && this._long === e._long
			}
			toJSON() {
				return {
					latitude: this._lat,
					longitude: this._long
				}
			}
			_compareTo(e) {
				return xn(this._lat, e._lat) || xn(this._long, e._long)
			}
		}
		const yc = /^__.*__$/;
		class bc {
			constructor(e, t, n) {
				this.data = e, this.fieldMask = t, this.fieldTransforms = n
			}
			toMutation(e, t) {
				return null !== this.fieldMask ? new la(e, this.data, this.fieldMask, t, this.fieldTransforms) : new oa(e, this.data, t, this.fieldTransforms)
			}
		}

		function wc(e) {
			switch (e) {
				case 0:
				case 2:
				case 1:
					return !0;
				case 3:
				case 4:
					return !1;
				default:
					throw an()
			}
		}
		class xc {
			constructor(e, t, n, r, i, a) {
				this.settings = e, this.databaseId = t, this.serializer = n, this.ignoreUndefinedProperties = r, void 0 === i && this.mu(), this.fieldTransforms = i || [], this.fieldMask = a || []
			}
			get path() {
				return this.settings.path
			}
			get fu() {
				return this.settings.fu
			}
			gu(e) {
				return new xc(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask)
			}
			pu(e) {
				var t;
				const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
					r = this.gu({
						path: n,
						yu: !1
					});
				return r.wu(e), r
			}
			Su(e) {
				var t;
				const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
					r = this.gu({
						path: n,
						yu: !1
					});
				return r.mu(), r
			}
			bu(e) {
				return this.gu({
					path: void 0,
					yu: !0
				})
			}
			Du(e) {
				return jc(e, this.settings.methodName, this.settings.Cu || !1, this.path, this.settings.vu)
			}
			contains(e) {
				return void 0 !== this.fieldMask.find((t => e.isPrefixOf(t))) || void 0 !== this.fieldTransforms.find((t => e.isPrefixOf(t.field)))
			}
			mu() {
				if (this.path)
					for (let e = 0; e < this.path.length; e++) this.wu(this.path.get(e))
			}
			wu(e) {
				if (0 === e.length) throw this.Du("Document fields must not be empty");
				if (wc(this.fu) && yc.test(e)) throw this.Du('Document fields cannot begin and end with "__"')
			}
		}
		class kc {
			constructor(e, t, n) {
				this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = n || lo(e)
			}
			Fu(e, t, n) {
				let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				return new xc({
					fu: e,
					methodName: t,
					vu: n,
					path: In.emptyPath(),
					yu: !1,
					Cu: r
				}, this.databaseId, this.serializer, this.ignoreUndefinedProperties)
			}
		}

		function Sc(e) {
			const t = e._freezeSettings(),
				n = lo(e._databaseId);
			return new kc(e._databaseId, !!t.ignoreUndefinedProperties, n)
		}

		function Cc(e, t, n, r, i) {
			let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
			const s = e.Fu(a.merge || a.mergeFields ? 2 : 0, t, n, i);
			Nc("Data must be an object, but it was:", s, r);
			const o = Tc(r, s);
			let l, c;
			if (a.merge) l = new nr(s.fieldMask), c = s.fieldTransforms;
			else if (a.mergeFields) {
				const e = [];
				for (const r of a.mergeFields) {
					const i = Rc(t, r, n);
					if (!s.contains(i)) throw new cn(ln.INVALID_ARGUMENT, "Field '".concat(i, "' is specified in your field mask but missing from your input data."));
					Dc(e, i) || e.push(i)
				}
				l = new nr(e), c = s.fieldTransforms.filter((e => l.covers(e.field)))
			} else l = null, c = s.fieldTransforms;
			return new bc(new Rr(o), l, c)
		}

		function _c(e, t, n) {
			let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
			return Ec(n, e.Fu(r ? 4 : 3, t))
		}

		function Ec(e, t) {
			if (Ic(e = re(e))) return Nc("Unsupported field value:", t, e), Tc(e, t);
			if (e instanceof mc) return function(e, t) {
				if (!wc(t.fu)) throw t.Du("".concat(e._methodName, "() can only be used with update() and set()"));
				if (!t.path) throw t.Du("".concat(e._methodName, "() is not currently supported inside arrays"));
				const n = e._toFieldTransform(t);
				n && t.fieldTransforms.push(n)
			}(e, t), null;
			if (void 0 === e && t.ignoreUndefinedProperties) return null;
			if (t.path && t.fieldMask.push(t.path), e instanceof Array) {
				if (t.settings.yu && 4 !== t.fu) throw t.Du("Nested arrays are not supported");
				return function(e, t) {
					const n = [];
					let r = 0;
					for (const i of e) {
						let e = Ec(i, t.bu(r));
						null == e && (e = {
							nullValue: "NULL_VALUE"
						}), n.push(e), r++
					}
					return {
						arrayValue: {
							values: n
						}
					}
				}(e, t)
			}
			return function(e, t) {
				if (null === (e = re(e))) return {
					nullValue: "NULL_VALUE"
				};
				if ("number" == typeof e) return Ui(t.serializer, e);
				if ("boolean" == typeof e) return {
					booleanValue: e
				};
				if ("string" == typeof e) return {
					stringValue: e
				};
				if (e instanceof Date) {
					const n = Sn.fromDate(e);
					return {
						timestampValue: Ga(t.serializer, n)
					}
				}
				if (e instanceof Sn) {
					const n = new Sn(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
					return {
						timestampValue: Ga(t.serializer, n)
					}
				}
				if (e instanceof vc) return {
					geoPointValue: {
						latitude: e.latitude,
						longitude: e.longitude
					}
				};
				if (e instanceof pc) return {
					bytesValue: qa(t.serializer, e._byteString)
				};
				if (e instanceof sc) {
					const n = t.databaseId,
						r = e.firestore._databaseId;
					if (!r.isEqual(n)) throw t.Du("Document reference is for database ".concat(r.projectId, "/").concat(r.database, " but should be for database ").concat(n.projectId, "/").concat(n.database));
					return {
						referenceValue: Ka(e.firestore._databaseId || t.databaseId, e._key.path)
					}
				}
				throw t.Du("Unsupported field value: ".concat(ec(e)))
			}(e, t)
		}

		function Tc(e, t) {
			const n = {};
			return Yn(e) ? t.path && t.path.length > 0 && t.fieldMask.push(t.path) : Xn(e, ((e, r) => {
				const i = Ec(r, t.pu(e));
				null != i && (n[e] = i)
			})), {
				mapValue: {
					fields: n
				}
			}
		}

		function Ic(e) {
			return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof Sn || e instanceof vc || e instanceof pc || e instanceof sc || e instanceof mc)
		}

		function Nc(e, t, n) {
			if (!Ic(n) || ! function(e) {
					return "object" == typeof e && null !== e && (Object.getPrototypeOf(e) === Object.prototype || null === Object.getPrototypeOf(e))
				}(n)) {
				const r = ec(n);
				throw "an object" === r ? t.Du(e + " a custom object") : t.Du(e + " " + r)
			}
		}

		function Rc(e, t, n) {
			if ((t = re(t)) instanceof gc) return t._internalPath;
			if ("string" == typeof t) return Pc(e, t);
			throw jc("Field path arguments must be of type string or ", e, !1, void 0, n)
		}
		const Ac = new RegExp("[~\\*/\\[\\]]");

		function Pc(e, t, n) {
			if (t.search(Ac) >= 0) throw jc("Invalid field path (".concat(t, "). Paths must not contain '~', '*', '/', '[', or ']'"), e, !1, void 0, n);
			try {
				return new gc(...t.split("."))._internalPath
			} catch (r) {
				throw jc("Invalid field path (".concat(t, "). Paths must not be empty, begin with '.', end with '.', or contain '..'"), e, !1, void 0, n)
			}
		}

		function jc(e, t, n, r, i) {
			const a = r && !r.isEmpty(),
				s = void 0 !== i;
			let o = "Function ".concat(t, "() called with invalid data");
			n && (o += " (via `toFirestore()`)"), o += ". ";
			let l = "";
			return (a || s) && (l += " (found", a && (l += " in field ".concat(r)), s && (l += " in document ".concat(i)), l += ")"), new cn(ln.INVALID_ARGUMENT, o + e + l)
		}

		function Dc(e, t) {
			return e.some((e => e.isEqual(t)))
		}
		class Oc {
			constructor(e, t, n, r, i) {
				this._firestore = e, this._userDataWriter = t, this._key = n, this._document = r, this._converter = i
			}
			get id() {
				return this._key.path.lastSegment()
			}
			get ref() {
				return new sc(this._firestore, this._converter, this._key)
			}
			exists() {
				return null !== this._document
			}
			data() {
				if (this._document) {
					if (this._converter) {
						const e = new Lc(this._firestore, this._userDataWriter, this._key, this._document, null);
						return this._converter.fromFirestore(e)
					}
					return this._userDataWriter.convertValue(this._document.data.value)
				}
			}
			get(e) {
				if (this._document) {
					const t = this._document.data.field(Mc("DocumentSnapshot.get", e));
					if (null !== t) return this._userDataWriter.convertValue(t)
				}
			}
		}
		class Lc extends Oc {
			data() {
				return super.data()
			}
		}

		function Mc(e, t) {
			return "string" == typeof t ? Pc(e, t) : t instanceof gc ? t._internalPath : t._delegate._internalPath
		}

		function Fc(e) {
			if ("L" === e.limitType && 0 === e.explicitOrderBy.length) throw new cn(ln.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
		}
		class Uc {}
		class Vc extends Uc {}
		class zc extends Vc {
			constructor(e, t, n) {
				super(), this._field = e, this._op = t, this._value = n, this.type = "where"
			}
			static _create(e, t, n) {
				return new zc(e, t, n)
			}
			_apply(e) {
				const t = this._parse(e);
				return Hc(e._query, t), new ac(e.firestore, e.converter, pi(e._query, t))
			}
			_parse(e) {
				const t = Sc(e.firestore),
					n = function(e, t, n, r, i, a, s) {
						let o;
						if (i.isKeyField()) {
							if ("array-contains" === a || "array-contains-any" === a) throw new cn(ln.INVALID_ARGUMENT, "Invalid Query. You can't perform '".concat(a, "' queries on documentId()."));
							if ("in" === a || "not-in" === a) {
								qc(s, a);
								const t = [];
								for (const n of s) t.push(Gc(r, e, n));
								o = {
									arrayValue: {
										values: t
									}
								}
							} else o = Gc(r, e, s)
						} else "in" !== a && "not-in" !== a && "array-contains-any" !== a || qc(s, a), o = _c(n, t, s, "in" === a || "not-in" === a);
						return Ur.create(i, a, o)
					}(e._query, "where", t, e.firestore._databaseId, this._field, this._op, this._value);
				return n
			}
		}
		class Bc extends Uc {
			constructor(e, t) {
				super(), this.type = e, this._queryConstraints = t
			}
			static _create(e, t) {
				return new Bc(e, t)
			}
			_parse(e) {
				const t = this._queryConstraints.map((t => t._parse(e))).filter((e => e.getFilters().length > 0));
				return 1 === t.length ? t[0] : Vr.create(t, this._getOperator())
			}
			_apply(e) {
				const t = this._parse(e);
				return 0 === t.getFilters().length ? e : (function(e, t) {
					let n = e;
					const r = t.getFlattenedFilters();
					for (const i of r) Hc(n, i), n = pi(n, i)
				}(e._query, t), new ac(e.firestore, e.converter, pi(e._query, t)))
			}
			_getQueryConstraints() {
				return this._queryConstraints
			}
			_getOperator() {
				return "and" === this.type ? "and" : "or"
			}
		}

		function Gc(e, t, n) {
			if ("string" == typeof(n = re(n))) {
				if ("" === n) throw new cn(ln.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
				if (!ui(t) && -1 !== n.indexOf("/")) throw new cn(ln.INVALID_ARGUMENT, "Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '".concat(n, "' contains a '/' character."));
				const r = t.path.child(En.fromString(n));
				if (!Nn.isDocumentKey(r)) throw new cn(ln.INVALID_ARGUMENT, "Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '".concat(r, "' is not because it has an odd number of segments (").concat(r.length, ")."));
				return kr(e, new Nn(r))
			}
			if (n instanceof sc) return kr(e, n._key);
			throw new cn(ln.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ".concat(ec(n), "."))
		}

		function qc(e, t) {
			if (!Array.isArray(e) || 0 === e.length) throw new cn(ln.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '".concat(t.toString(), "' filters."))
		}

		function Hc(e, t) {
			const n = function(e, t) {
				for (const n of e)
					for (const e of n.getFlattenedFilters())
						if (t.indexOf(e.op) >= 0) return e.op;
				return null
			}(e.filters, function(e) {
				switch (e) {
					case "!=":
						return ["!=", "not-in"];
					case "array-contains-any":
					case "in":
						return ["not-in"];
					case "not-in":
						return ["array-contains-any", "in", "not-in", "!="];
					default:
						return []
				}
			}(t.op));
			if (null !== n) throw n === t.op ? new cn(ln.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '".concat(t.op.toString(), "' filter.")) : new cn(ln.INVALID_ARGUMENT, "Invalid query. You cannot use '".concat(t.op.toString(), "' filters with '").concat(n.toString(), "' filters."))
		}
		class Wc {
			convertValue(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
				switch (gr(e)) {
					case 0:
						return null;
					case 1:
						return e.booleanValue;
					case 2:
						return or(e.integerValue || e.doubleValue);
					case 3:
						return this.convertTimestamp(e.timestampValue);
					case 4:
						return this.convertServerTimestamp(e, t);
					case 5:
						return e.stringValue;
					case 6:
						return this.convertBytes(lr(e.bytesValue));
					case 7:
						return this.convertReference(e.referenceValue);
					case 8:
						return this.convertGeoPoint(e.geoPointValue);
					case 9:
						return this.convertArray(e.arrayValue, t);
					case 10:
						return this.convertObject(e.mapValue, t);
					default:
						throw an()
				}
			}
			convertObject(e, t) {
				return this.convertObjectMap(e.fields, t)
			}
			convertObjectMap(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
				const n = {};
				return Xn(e, ((e, r) => {
					n[e] = this.convertValue(r, t)
				})), n
			}
			convertGeoPoint(e) {
				return new vc(or(e.latitude), or(e.longitude))
			}
			convertArray(e, t) {
				return (e.values || []).map((e => this.convertValue(e, t)))
			}
			convertServerTimestamp(e, t) {
				switch (t) {
					case "previous":
						const n = ur(e);
						return null == n ? null : this.convertValue(n, t);
					case "estimate":
						return this.convertTimestamp(dr(e));
					default:
						return null
				}
			}
			convertTimestamp(e) {
				const t = sr(e);
				return new Sn(t.seconds, t.nanos)
			}
			convertDocumentKey(e, t) {
				const n = En.fromString(e);
				sn(gs(n));
				const r = new fr(n.get(1), n.get(3)),
					i = new Nn(n.popFirst(5));
				return r.isEqual(t) || tn("Document ".concat(i, " contains a document reference within a different database (").concat(r.projectId, "/").concat(r.database, ") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId, "/").concat(t.database, ") instead.")), i
			}
		}

		function Kc(e, t, n) {
			let r;
			return r = e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t, r
		}
		class Qc {
			constructor(e, t) {
				this.hasPendingWrites = e, this.fromCache = t
			}
			isEqual(e) {
				return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache
			}
		}
		class Xc extends Oc {
			constructor(e, t, n, r, i, a) {
				super(e, t, n, r, a), this._firestore = e, this._firestoreImpl = e, this.metadata = i
			}
			exists() {
				return super.exists()
			}
			data() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				if (this._document) {
					if (this._converter) {
						const t = new Yc(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
						return this._converter.fromFirestore(t, e)
					}
					return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps)
				}
			}
			get(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				if (this._document) {
					const n = this._document.data.field(Mc("DocumentSnapshot.get", e));
					if (null !== n) return this._userDataWriter.convertValue(n, t.serverTimestamps)
				}
			}
		}
		class Yc extends Xc {
			data() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return super.data(e)
			}
		}
		class $c {
			constructor(e, t, n, r) {
				this._firestore = e, this._userDataWriter = t, this._snapshot = r, this.metadata = new Qc(r.hasPendingWrites, r.fromCache), this.query = n
			}
			get docs() {
				const e = [];
				return this.forEach((t => e.push(t))), e
			}
			get size() {
				return this._snapshot.docs.size
			}
			get empty() {
				return 0 === this.size
			}
			forEach(e, t) {
				this._snapshot.docs.forEach((n => {
					e.call(t, new Yc(this._firestore, this._userDataWriter, n.key, n, new Qc(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter))
				}))
			}
			docChanges() {
				const e = !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).includeMetadataChanges;
				if (e && this._snapshot.excludesMetadataChanges) throw new cn(ln.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
				return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(e, t) {
					if (e._snapshot.oldDocs.isEmpty()) {
						let t = 0;
						return e._snapshot.docChanges.map((n => {
							const r = new Yc(e._firestore, e._userDataWriter, n.doc.key, n.doc, new Qc(e._snapshot.mutatedKeys.has(n.doc.key), e._snapshot.fromCache), e.query.converter);
							return n.doc, {
								type: "added",
								doc: r,
								oldIndex: -1,
								newIndex: t++
							}
						}))
					} {
						let n = e._snapshot.oldDocs;
						return e._snapshot.docChanges.filter((e => t || 3 !== e.type)).map((t => {
							const r = new Yc(e._firestore, e._userDataWriter, t.doc.key, t.doc, new Qc(e._snapshot.mutatedKeys.has(t.doc.key), e._snapshot.fromCache), e.query.converter);
							let i = -1,
								a = -1;
							return 0 !== t.type && (i = n.indexOf(t.doc.key), n = n.delete(t.doc.key)), 1 !== t.type && (n = n.add(t.doc), a = n.indexOf(t.doc.key)), {
								type: Jc(t.type),
								doc: r,
								oldIndex: i,
								newIndex: a
							}
						}))
					}
				}(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges
			}
		}

		function Jc(e) {
			switch (e) {
				case 0:
					return "added";
				case 2:
				case 3:
					return "modified";
				case 1:
					return "removed";
				default:
					return an()
			}
		}

		function Zc(e) {
			e = tc(e, sc);
			const t = tc(e.firestore, dc);
			return Kl(hc(t), e._key).then((n => su(t, e, n)))
		}
		class eu extends Wc {
			constructor(e) {
				super(), this.firestore = e
			}
			convertBytes(e) {
				return new pc(e)
			}
			convertReference(e) {
				const t = this.convertDocumentKey(e, this.firestore._databaseId);
				return new sc(this.firestore, null, t)
			}
		}

		function tu(e) {
			e = tc(e, ac);
			const t = tc(e.firestore, dc),
				n = hc(t),
				r = new eu(t);
			return Fc(e._query), Ql(n, e._query).then((n => new $c(t, r, e, n)))
		}

		function nu(e, t, n) {
			e = tc(e, sc);
			const r = tc(e.firestore, dc),
				i = Kc(e.converter, t, n);
			return au(r, [Cc(Sc(r), "setDoc", e._key, i, null !== e.converter, n).toMutation(e._key, Zi.none())])
		}

		function ru(e) {
			return au(tc(e.firestore, dc), [new ha(e._key, Zi.none())])
		}

		function iu(e, t) {
			const n = tc(e.firestore, dc),
				r = cc(e),
				i = Kc(e.converter, t);
			return au(n, [Cc(Sc(e.firestore), "addDoc", r._key, i, null !== e.converter, {}).toMutation(r._key, Zi.exists(!1))]).then((() => r))
		}

		function au(e, t) {
			return function(e, t) {
				const n = new un;
				return e.asyncQueue.enqueueAndForget((async () => async function(e, t, n) {
					const r = Ol(e);
					try {
						const e = await
						function(e, t) {
							const n = on(e),
								r = Sn.now(),
								i = t.reduce(((e, t) => e.add(t.key)), Di());
							let a, s;
							return n.persistence.runTransaction("Locally write mutations", "readwrite", (e => {
								let o = _i(),
									l = Di();
								return n.os.getEntries(e, i).next((e => {
									o = e, o.forEach(((e, t) => {
										t.isValidDocument() || (l = l.add(e))
									}))
								})).next((() => n.localDocuments.getOverlayedDocuments(e, o))).next((i => {
									a = i;
									const s = [];
									for (const e of t) {
										const t = aa(e, a.get(e.key).overlayedDocument);
										null != t && s.push(new la(e.key, t, Ar(t.value.mapValue), Zi.exists(!0)))
									}
									return n.mutationQueue.addMutationBatch(e, r, s, t)
								})).next((t => {
									s = t;
									const r = t.applyToLocalDocumentSet(a, l);
									return n.documentOverlayCache.saveOverlays(e, t.batchId, r)
								}))
							})).then((() => ({
								batchId: s.batchId,
								changes: Ii(a)
							})))
						}(r.localStore, t);
						r.sharedClientState.addPendingMutation(e.batchId),
							function(e, t, n) {
								let r = e.xa[e.currentUser.toKey()];
								r || (r = new $n(xn)), r = r.insert(t, n), e.xa[e.currentUser.toKey()] = r
							}(r, e.batchId, n), await Al(r, e.changes), await jo(r.remoteStore)
					} catch (e) {
						const t = Ko(e, "Failed to persist write");
						n.reject(t)
					}
				}(await Hl(e), t, n))), n.promise
			}(hc(e), t)
		}

		function su(e, t, n) {
			const r = n.docs.get(t._key),
				i = new eu(e);
			return new Xc(e, i, t._key, r, new Qc(n.hasPendingWrites, n.fromCache), t.converter)
		}
		new WeakMap;
		! function(e) {
			let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
			! function(e) {
				$t = e
			}(yt), ft(new ie("firestore", ((e, n) => {
				let {
					instanceIdentifier: r,
					options: i
				} = n;
				const a = e.getProvider("app").getImmediate(),
					s = new dc(new pn(e.getProvider("auth-internal")), new yn(e.getProvider("app-check-internal")), function(e, t) {
						if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"])) throw new cn(ln.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
						return new fr(e.options.projectId, t)
					}(a, r), a);
				return i = Object.assign({
					useFetchStreams: t
				}, i), s._setSettings(i), s
			}), "PUBLIC").setMultipleInstances(!0)), xt(Xt, "4.6.4", e), xt(Xt, "4.6.4", "esm2017")
		}();
		xt("firebase", "10.12.3", "app");

		function ou(e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
				var i = 0;
				for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
			}
			return n
		}
		Object.create;
		Object.create;
		"function" === typeof SuppressedError && SuppressedError;

		function lu() {
			return {
				"dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
			}
		}
		const cu = lu,
			uu = new Q("auth", "Firebase", {
				"dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
			}),
			du = new pe("@firebase/auth");

		function hu(e) {
			if (du.logLevel <= ce.ERROR) {
				for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
				du.error("Auth (".concat(yt, "): ").concat(e), ...n)
			}
		}

		function fu(e) {
			for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
			throw yu(e, ...n)
		}

		function pu(e) {
			for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
			return yu(e, ...n)
		}

		function gu(e, t, n) {
			const r = Object.assign(Object.assign({}, cu()), {
				[t]: n
			});
			return new Q("auth", "Firebase", r).create(t, {
				appName: e.name
			})
		}

		function mu(e) {
			return gu(e, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp")
		}

		function vu(e, t, n) {
			if (!(t instanceof n)) throw n.name !== t.constructor.name && fu(e, "argument-error"), gu(e, "argument-error", "Type of ".concat(t.constructor.name, " does not match expected instance.") + "Did you pass a reference from a different Auth SDK?")
		}

		function yu(e) {
			for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
			if ("string" !== typeof e) {
				const t = n[0],
					r = [...n.slice(1)];
				return r[0] && (r[0].appName = e.name), e._errorFactory.create(t, ...r)
			}
			return uu.create(e, ...n)
		}

		function bu(e, t) {
			if (!e) {
				for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
				throw yu(t, ...r)
			}
		}

		function wu(e) {
			const t = "INTERNAL ASSERTION FAILED: " + e;
			throw hu(t), new Error(t)
		}

		function xu(e, t) {
			e || wu(t)
		}

		function ku() {
			var e;
			return "undefined" !== typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
		}

		function Su() {
			return "http:" === Cu() || "https:" === Cu()
		}

		function Cu() {
			var e;
			return "undefined" !== typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null
		}

		function _u() {
			return !("undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Su() || function() {
				const e = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
				return "object" === typeof e && void 0 !== e.id
			}() || "connection" in navigator)) || navigator.onLine
		}
		class Eu {
			constructor(e, t) {
				this.shortDelay = e, this.longDelay = t, xu(t > e, "Short delay should be less than long delay!"), this.isMobile = "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q()) || "object" === typeof navigator && "ReactNative" === navigator.product
			}
			get() {
				return _u() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
			}
		}

		function Tu(e, t) {
			xu(e.emulator, "Emulator should always be set here");
			const {
				url: n
			} = e.emulator;
			return t ? "".concat(n).concat(t.startsWith("/") ? t.slice(1) : t) : n
		}
		class Iu {
			static initialize(e, t, n) {
				this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n)
			}
			static fetch() {
				return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : "undefined" !== typeof globalThis && globalThis.fetch ? globalThis.fetch : "undefined" !== typeof fetch ? fetch : void wu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
			}
			static headers() {
				return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : "undefined" !== typeof globalThis && globalThis.Headers ? globalThis.Headers : "undefined" !== typeof Headers ? Headers : void wu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
			}
			static response() {
				return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : "undefined" !== typeof globalThis && globalThis.Response ? globalThis.Response : "undefined" !== typeof Response ? Response : void wu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
			}
		}
		const Nu = {
				CREDENTIAL_MISMATCH: "custom-token-mismatch",
				MISSING_CUSTOM_TOKEN: "internal-error",
				INVALID_IDENTIFIER: "invalid-email",
				MISSING_CONTINUE_URI: "internal-error",
				INVALID_PASSWORD: "wrong-password",
				MISSING_PASSWORD: "missing-password",
				INVALID_LOGIN_CREDENTIALS: "invalid-credential",
				EMAIL_EXISTS: "email-already-in-use",
				PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
				INVALID_IDP_RESPONSE: "invalid-credential",
				INVALID_PENDING_TOKEN: "invalid-credential",
				FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
				MISSING_REQ_TYPE: "internal-error",
				EMAIL_NOT_FOUND: "user-not-found",
				RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
				EXPIRED_OOB_CODE: "expired-action-code",
				INVALID_OOB_CODE: "invalid-action-code",
				MISSING_OOB_CODE: "internal-error",
				CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
				INVALID_ID_TOKEN: "invalid-user-token",
				TOKEN_EXPIRED: "user-token-expired",
				USER_NOT_FOUND: "user-token-expired",
				TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
				PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
				INVALID_CODE: "invalid-verification-code",
				INVALID_SESSION_INFO: "invalid-verification-id",
				INVALID_TEMPORARY_PROOF: "invalid-credential",
				MISSING_SESSION_INFO: "missing-verification-id",
				SESSION_EXPIRED: "code-expired",
				MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
				UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
				INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
				ADMIN_ONLY_OPERATION: "admin-restricted-operation",
				INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
				MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
				MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
				MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
				SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
				SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
				BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
				RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
				MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
				INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
				INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
				MISSING_CLIENT_TYPE: "missing-client-type",
				MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
				INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
				INVALID_REQ_TYPE: "invalid-req-type"
			},
			Ru = new Eu(3e4, 6e4);

		function Au(e, t) {
			return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
				tenantId: e.tenantId
			}) : t
		}
		async function Pu(e, t, n, r) {
			return ju(e, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
				let i = {},
					a = {};
				r && ("GET" === t ? a = r : i = {
					body: JSON.stringify(r)
				});
				const s = J(Object.assign({
						key: e.config.apiKey
					}, a)).slice(1),
					o = await e._getAdditionalHeaders();
				return o["Content-Type"] = "application/json", e.languageCode && (o["X-Firebase-Locale"] = e.languageCode), Iu.fetch()(Ou(e, e.config.apiHost, n, s), Object.assign({
					method: t,
					headers: o,
					referrerPolicy: "no-referrer"
				}, i))
			}))
		}
		async function ju(e, t, n) {
			e._canInitEmulator = !1;
			const r = Object.assign(Object.assign({}, Nu), t);
			try {
				const t = new Mu(e),
					i = await Promise.race([n(), t.promise]);
				t.clearNetworkTimeout();
				const a = await i.json();
				if ("needConfirmation" in a) throw Fu(e, "account-exists-with-different-credential", a);
				if (i.ok && !("errorMessage" in a)) return a; {
					const t = i.ok ? a.errorMessage : a.error.message,
						[n, s] = t.split(" : ");
					if ("FEDERATED_USER_ID_ALREADY_LINKED" === n) throw Fu(e, "credential-already-in-use", a);
					if ("EMAIL_EXISTS" === n) throw Fu(e, "email-already-in-use", a);
					if ("USER_DISABLED" === n) throw Fu(e, "user-disabled", a);
					const o = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
					if (s) throw gu(e, o, s);
					fu(e, o)
				}
			} catch (i) {
				if (i instanceof K) throw i;
				fu(e, "network-request-failed", {
					message: String(i)
				})
			}
		}
		async function Du(e, t, n, r) {
			let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
			const a = await Pu(e, t, n, r, i);
			return "mfaPendingCredential" in a && fu(e, "multi-factor-auth-required", {
				_serverResponse: a
			}), a
		}

		function Ou(e, t, n, r) {
			const i = "".concat(t).concat(n, "?").concat(r);
			return e.config.emulator ? Tu(e.config, i) : "".concat(e.config.apiScheme, "://").concat(i)
		}

		function Lu(e) {
			switch (e) {
				case "ENFORCE":
					return "ENFORCE";
				case "AUDIT":
					return "AUDIT";
				case "OFF":
					return "OFF";
				default:
					return "ENFORCEMENT_STATE_UNSPECIFIED"
			}
		}
		class Mu {
			constructor(e) {
				this.auth = e, this.timer = null, this.promise = new Promise(((e, t) => {
					this.timer = setTimeout((() => t(pu(this.auth, "network-request-failed"))), Ru.get())
				}))
			}
			clearNetworkTimeout() {
				clearTimeout(this.timer)
			}
		}

		function Fu(e, t, n) {
			const r = {
				appName: e.name
			};
			n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
			const i = pu(e, t, r);
			return i.customData._tokenResponse = n, i
		}

		function Uu(e) {
			return void 0 !== e && void 0 !== e.enterprise
		}
		class Vu {
			constructor(e) {
				if (this.siteKey = "", this.recaptchaEnforcementState = [], void 0 === e.recaptchaKey) throw new Error("recaptchaKey undefined");
				this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState
			}
			getProviderEnforcementState(e) {
				if (!this.recaptchaEnforcementState || 0 === this.recaptchaEnforcementState.length) return null;
				for (const t of this.recaptchaEnforcementState)
					if (t.provider && t.provider === e) return Lu(t.enforcementState);
				return null
			}
			isProviderEnabled(e) {
				return "ENFORCE" === this.getProviderEnforcementState(e) || "AUDIT" === this.getProviderEnforcementState(e)
			}
		}
		async function zu(e, t) {
			return Pu(e, "GET", "/v2/recaptchaConfig", Au(e, t))
		}
		async function Bu(e, t) {
			return Pu(e, "POST", "/v1/accounts:lookup", t)
		}

		function Gu(e) {
			if (e) try {
				const t = new Date(Number(e));
				if (!isNaN(t.getTime())) return t.toUTCString()
			} catch (t) {}
		}

		function qu(e) {
			return 1e3 * Number(e)
		}

		function Hu(e) {
			const [t, n, r] = e.split(".");
			if (void 0 === t || void 0 === n || void 0 === r) return hu("JWT malformed, contained fewer than 3 sections"), null;
			try {
				const e = M(n);
				return e ? JSON.parse(e) : (hu("Failed to decode base64 JWT payload"), null)
			} catch (i) {
				return hu("Caught error parsing JWT payload as JSON", null === i || void 0 === i ? void 0 : i.toString()), null
			}
		}

		function Wu(e) {
			const t = Hu(e);
			return bu(t, "internal-error"), bu("undefined" !== typeof t.exp, "internal-error"), bu("undefined" !== typeof t.iat, "internal-error"), Number(t.exp) - Number(t.iat)
		}
		async function Ku(e, t) {
			if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return t;
			try {
				return await t
			} catch (n) {
				throw n instanceof K && function(e) {
					let {
						code: t
					} = e;
					return t === "auth/".concat("user-disabled") || t === "auth/".concat("user-token-expired")
				}(n) && e.auth.currentUser === e && await e.auth.signOut(), n
			}
		}
		class Qu {
			constructor(e) {
				this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
			}
			_start() {
				this.isRunning || (this.isRunning = !0, this.schedule())
			}
			_stop() {
				this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
			}
			getInterval(e) {
				var t;
				if (e) {
					const e = this.errorBackoff;
					return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), e
				} {
					this.errorBackoff = 3e4;
					const e = (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) - Date.now() - 3e5;
					return Math.max(0, e)
				}
			}
			schedule() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				if (!this.isRunning) return;
				const t = this.getInterval(e);
				this.timerId = setTimeout((async () => {
					await this.iteration()
				}), t)
			}
			async iteration() {
				try {
					await this.user.getIdToken(!0)
				} catch (e) {
					return void((null === e || void 0 === e ? void 0 : e.code) === "auth/".concat("network-request-failed") && this.schedule(!0))
				}
				this.schedule()
			}
		}
		class Xu {
			constructor(e, t) {
				this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
			}
			_initializeTime() {
				this.lastSignInTime = Gu(this.lastLoginAt), this.creationTime = Gu(this.createdAt)
			}
			_copy(e) {
				this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
			}
			toJSON() {
				return {
					createdAt: this.createdAt,
					lastLoginAt: this.lastLoginAt
				}
			}
		}
		async function Yu(e) {
			var t;
			const n = e.auth,
				r = await e.getIdToken(),
				i = await Ku(e, Bu(n, {
					idToken: r
				}));
			bu(null === i || void 0 === i ? void 0 : i.users.length, n, "internal-error");
			const a = i.users[0];
			e._notifyReloadListener(a);
			const s = (null === (t = a.providerUserInfo) || void 0 === t ? void 0 : t.length) ? $u(a.providerUserInfo) : [],
				o = (l = e.providerData, c = s, [...l.filter((e => !c.some((t => t.providerId === e.providerId)))), ...c]);
			var l, c;
			const u = e.isAnonymous,
				d = !(e.email && a.passwordHash) && !(null === o || void 0 === o ? void 0 : o.length),
				h = !!u && d,
				f = {
					uid: a.localId,
					displayName: a.displayName || null,
					photoURL: a.photoUrl || null,
					email: a.email || null,
					emailVerified: a.emailVerified || !1,
					phoneNumber: a.phoneNumber || null,
					tenantId: a.tenantId || null,
					providerData: o,
					metadata: new Xu(a.createdAt, a.lastLoginAt),
					isAnonymous: h
				};
			Object.assign(e, f)
		}

		function $u(e) {
			return e.map((e => {
				var {
					providerId: t
				} = e, n = ou(e, ["providerId"]);
				return {
					providerId: t,
					uid: n.rawId || "",
					displayName: n.displayName || null,
					email: n.email || null,
					phoneNumber: n.phoneNumber || null,
					photoURL: n.photoUrl || null
				}
			}))
		}
		class Ju {
			constructor() {
				this.refreshToken = null, this.accessToken = null, this.expirationTime = null
			}
			get isExpired() {
				return !this.expirationTime || Date.now() > this.expirationTime - 3e4
			}
			updateFromServerResponse(e) {
				bu(e.idToken, "internal-error"), bu("undefined" !== typeof e.idToken, "internal-error"), bu("undefined" !== typeof e.refreshToken, "internal-error");
				const t = "expiresIn" in e && "undefined" !== typeof e.expiresIn ? Number(e.expiresIn) : Wu(e.idToken);
				this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
			}
			updateFromIdToken(e) {
				bu(0 !== e.length, "internal-error");
				const t = Wu(e);
				this.updateTokensAndExpiration(e, null, t)
			}
			async getToken(e) {
				return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || !this.accessToken || this.isExpired ? (bu(this.refreshToken, e, "user-token-expired"), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null) : this.accessToken
			}
			clearRefreshToken() {
				this.refreshToken = null
			}
			async refresh(e, t) {
				const {
					accessToken: n,
					refreshToken: r,
					expiresIn: i
				} = await async function(e, t) {
					const n = await ju(e, {}, (async () => {
						const n = J({
								grant_type: "refresh_token",
								refresh_token: t
							}).slice(1),
							{
								tokenApiHost: r,
								apiKey: i
							} = e.config,
							a = Ou(e, r, "/v1/token", "key=".concat(i)),
							s = await e._getAdditionalHeaders();
						return s["Content-Type"] = "application/x-www-form-urlencoded", Iu.fetch()(a, {
							method: "POST",
							headers: s,
							body: n
						})
					}));
					return {
						accessToken: n.access_token,
						expiresIn: n.expires_in,
						refreshToken: n.refresh_token
					}
				}(e, t);
				this.updateTokensAndExpiration(n, r, Number(i))
			}
			updateTokensAndExpiration(e, t, n) {
				this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + 1e3 * n
			}
			static fromJSON(e, t) {
				const {
					refreshToken: n,
					accessToken: r,
					expirationTime: i
				} = t, a = new Ju;
				return n && (bu("string" === typeof n, "internal-error", {
					appName: e
				}), a.refreshToken = n), r && (bu("string" === typeof r, "internal-error", {
					appName: e
				}), a.accessToken = r), i && (bu("number" === typeof i, "internal-error", {
					appName: e
				}), a.expirationTime = i), a
			}
			toJSON() {
				return {
					refreshToken: this.refreshToken,
					accessToken: this.accessToken,
					expirationTime: this.expirationTime
				}
			}
			_assign(e) {
				this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
			}
			_clone() {
				return Object.assign(new Ju, this.toJSON())
			}
			_performRefresh() {
				return wu("not implemented")
			}
		}

		function Zu(e, t) {
			bu("string" === typeof e || "undefined" === typeof e, "internal-error", {
				appName: t
			})
		}
		class ed {
			constructor(e) {
				var {
					uid: t,
					auth: n,
					stsTokenManager: r
				} = e, i = ou(e, ["uid", "auth", "stsTokenManager"]);
				this.providerId = "firebase", this.proactiveRefresh = new Qu(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = n, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.emailVerified = i.emailVerified || !1, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.tenantId = i.tenantId || null, this.providerData = i.providerData ? [...i.providerData] : [], this.metadata = new Xu(i.createdAt || void 0, i.lastLoginAt || void 0)
			}
			async getIdToken(e) {
				const t = await Ku(this, this.stsTokenManager.getToken(this.auth, e));
				return bu(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t
			}
			getIdTokenResult(e) {
				return async function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = re(e),
						r = await n.getIdToken(t),
						i = Hu(r);
					bu(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
					const a = "object" === typeof i.firebase ? i.firebase : void 0,
						s = null === a || void 0 === a ? void 0 : a.sign_in_provider;
					return {
						claims: i,
						token: r,
						authTime: Gu(qu(i.auth_time)),
						issuedAtTime: Gu(qu(i.iat)),
						expirationTime: Gu(qu(i.exp)),
						signInProvider: s || null,
						signInSecondFactor: (null === a || void 0 === a ? void 0 : a.sign_in_second_factor) || null
					}
				}(this, e)
			}
			reload() {
				return async function(e) {
					const t = re(e);
					await Yu(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t)
				}(this)
			}
			_assign(e) {
				this !== e && (bu(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((e => Object.assign({}, e))), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
			}
			_clone(e) {
				const t = new ed(Object.assign(Object.assign({}, this), {
					auth: e,
					stsTokenManager: this.stsTokenManager._clone()
				}));
				return t.metadata._copy(this.metadata), t
			}
			_onReload(e) {
				bu(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
			}
			_notifyReloadListener(e) {
				this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
			}
			_startProactiveRefresh() {
				this.proactiveRefresh._start()
			}
			_stopProactiveRefresh() {
				this.proactiveRefresh._stop()
			}
			async _updateTokensIfNecessary(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = !1;
				e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await Yu(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this)
			}
			async delete() {
				if (gt(this.auth.app)) return Promise.reject(mu(this.auth));
				const e = await this.getIdToken();
				return await Ku(this, async function(e, t) {
					return Pu(e, "POST", "/v1/accounts:delete", t)
				}(this.auth, {
					idToken: e
				})), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
			}
			toJSON() {
				return Object.assign(Object.assign({
					uid: this.uid,
					email: this.email || void 0,
					emailVerified: this.emailVerified,
					displayName: this.displayName || void 0,
					isAnonymous: this.isAnonymous,
					photoURL: this.photoURL || void 0,
					phoneNumber: this.phoneNumber || void 0,
					tenantId: this.tenantId || void 0,
					providerData: this.providerData.map((e => Object.assign({}, e))),
					stsTokenManager: this.stsTokenManager.toJSON(),
					_redirectEventId: this._redirectEventId
				}, this.metadata.toJSON()), {
					apiKey: this.auth.config.apiKey,
					appName: this.auth.name
				})
			}
			get refreshToken() {
				return this.stsTokenManager.refreshToken || ""
			}
			static _fromJSON(e, t) {
				var n, r, i, a, s, o, l, c;
				const u = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
					d = null !== (r = t.email) && void 0 !== r ? r : void 0,
					h = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0,
					f = null !== (a = t.photoURL) && void 0 !== a ? a : void 0,
					p = null !== (s = t.tenantId) && void 0 !== s ? s : void 0,
					g = null !== (o = t._redirectEventId) && void 0 !== o ? o : void 0,
					m = null !== (l = t.createdAt) && void 0 !== l ? l : void 0,
					v = null !== (c = t.lastLoginAt) && void 0 !== c ? c : void 0,
					{
						uid: y,
						emailVerified: b,
						isAnonymous: w,
						providerData: x,
						stsTokenManager: k
					} = t;
				bu(y && k, e, "internal-error");
				const S = Ju.fromJSON(this.name, k);
				bu("string" === typeof y, e, "internal-error"), Zu(u, e.name), Zu(d, e.name), bu("boolean" === typeof b, e, "internal-error"), bu("boolean" === typeof w, e, "internal-error"), Zu(h, e.name), Zu(f, e.name), Zu(p, e.name), Zu(g, e.name), Zu(m, e.name), Zu(v, e.name);
				const C = new ed({
					uid: y,
					auth: e,
					email: d,
					emailVerified: b,
					displayName: u,
					isAnonymous: w,
					photoURL: f,
					phoneNumber: h,
					tenantId: p,
					stsTokenManager: S,
					createdAt: m,
					lastLoginAt: v
				});
				return x && Array.isArray(x) && (C.providerData = x.map((e => Object.assign({}, e)))), g && (C._redirectEventId = g), C
			}
			static async _fromIdTokenResponse(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const r = new Ju;
				r.updateFromServerResponse(t);
				const i = new ed({
					uid: t.localId,
					auth: e,
					stsTokenManager: r,
					isAnonymous: n
				});
				return await Yu(i), i
			}
			static async _fromGetAccountInfoResponse(e, t, n) {
				const r = t.users[0];
				bu(void 0 !== r.localId, "internal-error");
				const i = void 0 !== r.providerUserInfo ? $u(r.providerUserInfo) : [],
					a = !(r.email && r.passwordHash) && !(null === i || void 0 === i ? void 0 : i.length),
					s = new Ju;
				s.updateFromIdToken(n);
				const o = new ed({
						uid: r.localId,
						auth: e,
						stsTokenManager: s,
						isAnonymous: a
					}),
					l = {
						uid: r.localId,
						displayName: r.displayName || null,
						photoURL: r.photoUrl || null,
						email: r.email || null,
						emailVerified: r.emailVerified || !1,
						phoneNumber: r.phoneNumber || null,
						tenantId: r.tenantId || null,
						providerData: i,
						metadata: new Xu(r.createdAt, r.lastLoginAt),
						isAnonymous: !(r.email && r.passwordHash) && !(null === i || void 0 === i ? void 0 : i.length)
					};
				return Object.assign(o, l), o
			}
		}
		const td = new Map;

		function nd(e) {
			xu(e instanceof Function, "Expected a class definition");
			let t = td.get(e);
			return t ? (xu(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e, td.set(e, t), t)
		}
		class rd {
			constructor() {
				this.type = "NONE", this.storage = {}
			}
			async _isAvailable() {
				return !0
			}
			async _set(e, t) {
				this.storage[e] = t
			}
			async _get(e) {
				const t = this.storage[e];
				return void 0 === t ? null : t
			}
			async _remove(e) {
				delete this.storage[e]
			}
			_addListener(e, t) {}
			_removeListener(e, t) {}
		}
		rd.type = "NONE";
		const id = rd;

		function ad(e, t, n) {
			return "firebase".concat(":", e, ":").concat(t, ":").concat(n)
		}
		class sd {
			constructor(e, t, n) {
				this.persistence = e, this.auth = t, this.userKey = n;
				const {
					config: r,
					name: i
				} = this.auth;
				this.fullUserKey = ad(this.userKey, r.apiKey, i), this.fullPersistenceKey = ad("persistence", r.apiKey, i), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
			}
			setCurrentUser(e) {
				return this.persistence._set(this.fullUserKey, e.toJSON())
			}
			async getCurrentUser() {
				const e = await this.persistence._get(this.fullUserKey);
				return e ? ed._fromJSON(this.auth, e) : null
			}
			removeCurrentUser() {
				return this.persistence._remove(this.fullUserKey)
			}
			savePersistenceForRedirect() {
				return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
			}
			async setPersistence(e) {
				if (this.persistence === e) return;
				const t = await this.getCurrentUser();
				return await this.removeCurrentUser(), this.persistence = e, t ? this.setCurrentUser(t) : void 0
			}
			delete() {
				this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
			}
			static async create(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
				if (!t.length) return new sd(nd(id), e, n);
				const r = (await Promise.all(t.map((async e => {
					if (await e._isAvailable()) return e
				})))).filter((e => e));
				let i = r[0] || nd(id);
				const a = ad(n, e.config.apiKey, e.name);
				let s = null;
				for (const c of t) try {
					const t = await c._get(a);
					if (t) {
						const n = ed._fromJSON(e, t);
						c !== i && (s = n), i = c;
						break
					}
				} catch (l) {}
				const o = r.filter((e => e._shouldAllowMigration));
				return i._shouldAllowMigration && o.length ? (i = o[0], s && await i._set(a, s.toJSON()), await Promise.all(t.map((async e => {
					if (e !== i) try {
						await e._remove(a)
					} catch (l) {}
				}))), new sd(i, e, n)) : new sd(i, e, n)
			}
		}

		function od(e) {
			const t = e.toLowerCase();
			if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
			if (dd(t)) return "IEMobile";
			if (t.includes("msie") || t.includes("trident/")) return "IE";
			if (t.includes("edge/")) return "Edge";
			if (ld(t)) return "Firefox";
			if (t.includes("silk/")) return "Silk";
			if (fd(t)) return "Blackberry";
			if (pd(t)) return "Webos";
			if (cd(t)) return "Safari";
			if ((t.includes("chrome/") || ud(t)) && !t.includes("edge/")) return "Chrome";
			if (hd(t)) return "Android"; {
				const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
					n = e.match(t);
				if (2 === (null === n || void 0 === n ? void 0 : n.length)) return n[1]
			}
			return "Other"
		}

		function ld() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
			return /firefox\//i.test(e)
		}

		function cd() {
			const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q()).toLowerCase();
			return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android")
		}

		function ud() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
			return /crios\//i.test(e)
		}

		function dd() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
			return /iemobile/i.test(e)
		}

		function hd() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
			return /android/i.test(e)
		}

		function fd() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
			return /blackberry/i.test(e)
		}

		function pd() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
			return /webos/i.test(e)
		}

		function gd() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
			return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
		}

		function md() {
			return function() {
				const e = q();
				return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
			}() && 10 === document.documentMode
		}

		function vd() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
			return gd(e) || hd(e) || pd(e) || fd(e) || /windows phone/i.test(e) || dd(e)
		}

		function yd(e) {
			let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
			switch (e) {
				case "Browser":
					t = od(q());
					break;
				case "Worker":
					t = "".concat(od(q()), "-").concat(e);
					break;
				default:
					t = e
			}
			const r = n.length ? n.join(",") : "FirebaseCore-web";
			return "".concat(t, "/", "JsCore", "/").concat(yt, "/").concat(r)
		}
		class bd {
			constructor(e) {
				this.auth = e, this.queue = []
			}
			pushCallback(e, t) {
				const n = t => new Promise(((n, r) => {
					try {
						n(e(t))
					} catch (i) {
						r(i)
					}
				}));
				n.onAbort = t, this.queue.push(n);
				const r = this.queue.length - 1;
				return () => {
					this.queue[r] = () => Promise.resolve()
				}
			}
			async runMiddleware(e) {
				if (this.auth.currentUser === e) return;
				const t = [];
				try {
					for (const n of this.queue) await n(e), n.onAbort && t.push(n.onAbort)
				} catch (n) {
					t.reverse();
					for (const e of t) try {
						e()
					} catch (r) {}
					throw this.auth._errorFactory.create("login-blocked", {
						originalMessage: null === n || void 0 === n ? void 0 : n.message
					})
				}
			}
		}
		class wd {
			constructor(e) {
				var t, n, r, i;
				const a = e.customStrengthOptions;
				this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = null !== (t = a.minPasswordLength) && void 0 !== t ? t : 6, a.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = a.maxPasswordLength), void 0 !== a.containsLowercaseCharacter && (this.customStrengthOptions.containsLowercaseLetter = a.containsLowercaseCharacter), void 0 !== a.containsUppercaseCharacter && (this.customStrengthOptions.containsUppercaseLetter = a.containsUppercaseCharacter), void 0 !== a.containsNumericCharacter && (this.customStrengthOptions.containsNumericCharacter = a.containsNumericCharacter), void 0 !== a.containsNonAlphanumericCharacter && (this.customStrengthOptions.containsNonAlphanumericCharacter = a.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = null !== (r = null === (n = e.allowedNonAlphanumericCharacters) || void 0 === n ? void 0 : n.join("")) && void 0 !== r ? r : "", this.forceUpgradeOnSignin = null !== (i = e.forceUpgradeOnSignin) && void 0 !== i && i, this.schemaVersion = e.schemaVersion
			}
			validatePassword(e) {
				var t, n, r, i, a, s;
				const o = {
					isValid: !0,
					passwordPolicy: this
				};
				return this.validatePasswordLengthOptions(e, o), this.validatePasswordCharacterOptions(e, o), o.isValid && (o.isValid = null === (t = o.meetsMinPasswordLength) || void 0 === t || t), o.isValid && (o.isValid = null === (n = o.meetsMaxPasswordLength) || void 0 === n || n), o.isValid && (o.isValid = null === (r = o.containsLowercaseLetter) || void 0 === r || r), o.isValid && (o.isValid = null === (i = o.containsUppercaseLetter) || void 0 === i || i), o.isValid && (o.isValid = null === (a = o.containsNumericCharacter) || void 0 === a || a), o.isValid && (o.isValid = null === (s = o.containsNonAlphanumericCharacter) || void 0 === s || s), o
			}
			validatePasswordLengthOptions(e, t) {
				const n = this.customStrengthOptions.minPasswordLength,
					r = this.customStrengthOptions.maxPasswordLength;
				n && (t.meetsMinPasswordLength = e.length >= n), r && (t.meetsMaxPasswordLength = e.length <= r)
			}
			validatePasswordCharacterOptions(e, t) {
				let n;
				this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
				for (let r = 0; r < e.length; r++) n = e.charAt(r), this.updatePasswordCharacterOptionsStatuses(t, n >= "a" && n <= "z", n >= "A" && n <= "Z", n >= "0" && n <= "9", this.allowedNonAlphanumericCharacters.includes(n))
			}
			updatePasswordCharacterOptionsStatuses(e, t, n, r, i) {
				this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = r)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = i))
			}
		}
		class xd {
			constructor(e, t, n, r) {
				this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = n, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Sd(this), this.idTokenSubscription = new Sd(this), this.beforeStateQueue = new bd(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = uu, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
					appVerificationDisabledForTesting: !1
				}, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion
			}
			_initializeWithPersistence(e, t) {
				return t && (this._popupRedirectResolver = nd(t)), this._initializationPromise = this.queue((async () => {
					var n, r;
					if (!this._deleted && (this.persistenceManager = await sd.create(this, e), !this._deleted)) {
						if (null === (n = this._popupRedirectResolver) || void 0 === n ? void 0 : n._shouldInitProactively) try {
							await this._popupRedirectResolver._initialize(this)
						} catch (i) {}
						await this.initializeCurrentUser(t), this.lastNotifiedUid = (null === (r = this.currentUser) || void 0 === r ? void 0 : r.uid) || null, this._deleted || (this._isInitialized = !0)
					}
				})), this._initializationPromise
			}
			async _onStorageEvent() {
				if (this._deleted) return;
				const e = await this.assertedPersistence.getCurrentUser();
				return this.currentUser || e ? this.currentUser && e && this.currentUser.uid === e.uid ? (this._currentUser._assign(e), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(e, !0) : void 0
			}
			async initializeCurrentUserFromIdToken(e) {
				try {
					const t = await Bu(this, {
							idToken: e
						}),
						n = await ed._fromGetAccountInfoResponse(this, t, e);
					await this.directlySetCurrentUser(n)
				} catch (t) {
					console.warn("FirebaseServerApp could not login user with provided authIdToken: ", t), await this.directlySetCurrentUser(null)
				}
			}
			async initializeCurrentUser(e) {
				var t;
				if (gt(this.app)) {
					const e = this.app.settings.authIdToken;
					return e ? new Promise((t => {
						setTimeout((() => this.initializeCurrentUserFromIdToken(e).then(t, t)))
					})) : this.directlySetCurrentUser(null)
				}
				const n = await this.assertedPersistence.getCurrentUser();
				let r = n,
					i = !1;
				if (e && this.config.authDomain) {
					await this.getOrInitRedirectPersistenceManager();
					const n = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId,
						a = null === r || void 0 === r ? void 0 : r._redirectEventId,
						s = await this.tryRedirectSignIn(e);
					n && n !== a || !(null === s || void 0 === s ? void 0 : s.user) || (r = s.user, i = !0)
				}
				if (!r) return this.directlySetCurrentUser(null);
				if (!r._redirectEventId) {
					if (i) try {
						await this.beforeStateQueue.runMiddleware(r)
					} catch (a) {
						r = n, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(a)))
					}
					return r ? this.reloadAndSetCurrentUserOrClear(r) : this.directlySetCurrentUser(null)
				}
				return bu(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === r._redirectEventId ? this.directlySetCurrentUser(r) : this.reloadAndSetCurrentUserOrClear(r)
			}
			async tryRedirectSignIn(e) {
				let t = null;
				try {
					t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
				} catch (n) {
					await this._setRedirectUser(null)
				}
				return t
			}
			async reloadAndSetCurrentUserOrClear(e) {
				try {
					await Yu(e)
				} catch (t) {
					if ((null === t || void 0 === t ? void 0 : t.code) !== "auth/".concat("network-request-failed")) return this.directlySetCurrentUser(null)
				}
				return this.directlySetCurrentUser(e)
			}
			useDeviceLanguage() {
				this.languageCode = function() {
					if ("undefined" === typeof navigator) return null;
					const e = navigator;
					return e.languages && e.languages[0] || e.language || null
				}()
			}
			async _delete() {
				this._deleted = !0
			}
			async updateCurrentUser(e) {
				if (gt(this.app)) return Promise.reject(mu(this));
				const t = e ? re(e) : null;
				return t && bu(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this))
			}
			async _updateCurrentUser(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (!this._deleted) return e && bu(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue((async () => {
					await this.directlySetCurrentUser(e), this.notifyAuthListeners()
				}))
			}
			async signOut() {
				return gt(this.app) ? Promise.reject(mu(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0))
			}
			setPersistence(e) {
				return gt(this.app) ? Promise.reject(mu(this)) : this.queue((async () => {
					await this.assertedPersistence.setPersistence(nd(e))
				}))
			}
			_getRecaptchaConfig() {
				return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
			}
			async validatePassword(e) {
				this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
				const t = this._getPasswordPolicyInternal();
				return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e)
			}
			_getPasswordPolicyInternal() {
				return null === this.tenantId ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
			}
			async _updatePasswordPolicy() {
				const e = await async function(e) {
					return Pu(e, "GET", "/v2/passwordPolicy", Au(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}))
				}(this), t = new wd(e);
				null === this.tenantId ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t
			}
			_getPersistence() {
				return this.assertedPersistence.persistence.type
			}
			_updateErrorMap(e) {
				this._errorFactory = new Q("auth", "Firebase", e())
			}
			onAuthStateChanged(e, t, n) {
				return this.registerStateListener(this.authStateSubscription, e, t, n)
			}
			beforeAuthStateChanged(e, t) {
				return this.beforeStateQueue.pushCallback(e, t)
			}
			onIdTokenChanged(e, t, n) {
				return this.registerStateListener(this.idTokenSubscription, e, t, n)
			}
			authStateReady() {
				return new Promise(((e, t) => {
					if (this.currentUser) e();
					else {
						const n = this.onAuthStateChanged((() => {
							n(), e()
						}), t)
					}
				}))
			}
			async revokeAccessToken(e) {
				if (this.currentUser) {
					const t = {
						providerId: "apple.com",
						tokenType: "ACCESS_TOKEN",
						token: e,
						idToken: await this.currentUser.getIdToken()
					};
					null != this.tenantId && (t.tenantId = this.tenantId), await async function(e, t) {
						return Pu(e, "POST", "/v2/accounts:revokeToken", Au(e, t))
					}(this, t)
				}
			}
			toJSON() {
				var e;
				return {
					apiKey: this.config.apiKey,
					authDomain: this.config.authDomain,
					appName: this.name,
					currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
				}
			}
			async _setRedirectUser(e, t) {
				const n = await this.getOrInitRedirectPersistenceManager(t);
				return null === e ? n.removeCurrentUser() : n.setCurrentUser(e)
			}
			async getOrInitRedirectPersistenceManager(e) {
				if (!this.redirectPersistenceManager) {
					const t = e && nd(e) || this._popupRedirectResolver;
					bu(t, this, "argument-error"), this.redirectPersistenceManager = await sd.create(this, [nd(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
				}
				return this.redirectPersistenceManager
			}
			async _redirectUserForId(e) {
				var t, n;
				return this._isInitialized && await this.queue((async () => {})), (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e ? this._currentUser : (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === e ? this.redirectUser : null
			}
			async _persistUserIfCurrent(e) {
				if (e === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(e)))
			}
			_notifyListenersIfCurrent(e) {
				e === this.currentUser && this.notifyAuthListeners()
			}
			_key() {
				return "".concat(this.config.authDomain, ":").concat(this.config.apiKey, ":").concat(this.name)
			}
			_startProactiveRefresh() {
				this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
			}
			_stopProactiveRefresh() {
				this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
			}
			get _currentUser() {
				return this.currentUser
			}
			notifyAuthListeners() {
				var e, t;
				if (!this._isInitialized) return;
				this.idTokenSubscription.next(this.currentUser);
				const n = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
				this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser))
			}
			registerStateListener(e, t, n, r) {
				if (this._deleted) return () => {};
				const i = "function" === typeof t ? t : t.next.bind(t);
				let a = !1;
				const s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
				if (bu(s, this, "internal-error"), s.then((() => {
						a || i(this.currentUser)
					})), "function" === typeof t) {
					const i = e.addObserver(t, n, r);
					return () => {
						a = !0, i()
					}
				} {
					const n = e.addObserver(t);
					return () => {
						a = !0, n()
					}
				}
			}
			async directlySetCurrentUser(e) {
				this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
			}
			queue(e) {
				return this.operations = this.operations.then(e, e), this.operations
			}
			get assertedPersistence() {
				return bu(this.persistenceManager, this, "internal-error"), this.persistenceManager
			}
			_logFramework(e) {
				e && !this.frameworks.includes(e) && (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = yd(this.config.clientPlatform, this._getFrameworks()))
			}
			_getFrameworks() {
				return this.frameworks
			}
			async _getAdditionalHeaders() {
				var e;
				const t = {
					"X-Client-Version": this.clientVersion
				};
				this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
				const n = await (null === (e = this.heartbeatServiceProvider.getImmediate({
					optional: !0
				})) || void 0 === e ? void 0 : e.getHeartbeatsHeader());
				n && (t["X-Firebase-Client"] = n);
				const r = await this._getAppCheckToken();
				return r && (t["X-Firebase-AppCheck"] = r), t
			}
			async _getAppCheckToken() {
				var e;
				const t = await (null === (e = this.appCheckServiceProvider.getImmediate({
					optional: !0
				})) || void 0 === e ? void 0 : e.getToken());
				return (null === t || void 0 === t ? void 0 : t.error) && function(e) {
					if (du.logLevel <= ce.WARN) {
						for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
						du.warn("Auth (".concat(yt, "): ").concat(e), ...n)
					}
				}("Error while retrieving App Check token: ".concat(t.error)), null === t || void 0 === t ? void 0 : t.token
			}
		}

		function kd(e) {
			return re(e)
		}
		class Sd {
			constructor(e) {
				this.auth = e, this.observer = null, this.addObserver = function(e, t) {
					const n = new te(e, t);
					return n.subscribe.bind(n)
				}((e => this.observer = e))
			}
			get next() {
				return bu(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
			}
		}
		let Cd = {
			async loadJS() {
				throw new Error("Unable to load external scripts")
			},
			recaptchaV2Script: "",
			recaptchaEnterpriseScript: "",
			gapiScript: ""
		};

		function _d(e) {
			return Cd.loadJS(e)
		}

		function Ed(e) {
			return "__".concat(e).concat(Math.floor(1e6 * Math.random()))
		}
		class Td {
			constructor(e) {
				this.type = "recaptcha-enterprise", this.auth = kd(e)
			}
			async verify() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
					t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

				function n(t, n, r) {
					const i = window.grecaptcha;
					Uu(i) ? i.enterprise.ready((() => {
						i.enterprise.execute(t, {
							action: e
						}).then((e => {
							n(e)
						})).catch((() => {
							n("NO_RECAPTCHA")
						}))
					})) : r(Error("No reCAPTCHA enterprise script loaded."))
				}
				return new Promise(((e, r) => {
					(async function(e) {
						if (!t) {
							if (null == e.tenantId && null != e._agentRecaptchaConfig) return e._agentRecaptchaConfig.siteKey;
							if (null != e.tenantId && void 0 !== e._tenantRecaptchaConfigs[e.tenantId]) return e._tenantRecaptchaConfigs[e.tenantId].siteKey
						}
						return new Promise((async (t, n) => {
							zu(e, {
								clientType: "CLIENT_TYPE_WEB",
								version: "RECAPTCHA_ENTERPRISE"
							}).then((r => {
								if (void 0 !== r.recaptchaKey) {
									const n = new Vu(r);
									return null == e.tenantId ? e._agentRecaptchaConfig = n : e._tenantRecaptchaConfigs[e.tenantId] = n, t(n.siteKey)
								}
								n(new Error("recaptcha Enterprise site key undefined"))
							})).catch((e => {
								n(e)
							}))
						}))
					})(this.auth).then((i => {
						if (!t && Uu(window.grecaptcha)) n(i, e, r);
						else {
							if ("undefined" === typeof window) return void r(new Error("RecaptchaVerifier is only supported in browser"));
							let t = Cd.recaptchaEnterpriseScript;
							0 !== t.length && (t += i), _d(t).then((() => {
								n(i, e, r)
							})).catch((e => {
								r(e)
							}))
						}
					})).catch((e => {
						r(e)
					}))
				}))
			}
		}
		async function Id(e, t, n) {
			let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
			const i = new Td(e);
			let a;
			try {
				a = await i.verify(n)
			} catch (o) {
				a = await i.verify(n, !0)
			}
			const s = Object.assign({}, t);
			return r ? Object.assign(s, {
				captchaResp: a
			}) : Object.assign(s, {
				captchaResponse: a
			}), Object.assign(s, {
				clientType: "CLIENT_TYPE_WEB"
			}), Object.assign(s, {
				recaptchaVersion: "RECAPTCHA_ENTERPRISE"
			}), s
		}
		async function Nd(e, t, n, r) {
			var i;
			if (null === (i = e._getRecaptchaConfig()) || void 0 === i ? void 0 : i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
				const i = await Id(e, t, n, "getOobCode" === n);
				return r(e, i)
			}
			return r(e, t).catch((async i => {
				if (i.code === "auth/".concat("missing-recaptcha-token")) {
					console.log("".concat(n, " is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow."));
					const i = await Id(e, t, n, "getOobCode" === n);
					return r(e, i)
				}
				return Promise.reject(i)
			}))
		}

		function Rd(e, t, n) {
			const r = kd(e);
			bu(r._canInitEmulator, r, "emulator-config-failed"), bu(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
			const i = !!(null === n || void 0 === n ? void 0 : n.disableWarnings),
				a = Ad(t),
				{
					host: s,
					port: o
				} = function(e) {
					const t = Ad(e),
						n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
					if (!n) return {
						host: "",
						port: null
					};
					const r = n[2].split("@").pop() || "",
						i = /^(\[[^\]]+\])(:|$)/.exec(r);
					if (i) {
						const e = i[1];
						return {
							host: e,
							port: Pd(r.substr(e.length + 1))
						}
					} {
						const [e, t] = r.split(":");
						return {
							host: e,
							port: Pd(t)
						}
					}
				}(t),
				l = null === o ? "" : ":".concat(o);
			r.config.emulator = {
				url: "".concat(a, "//").concat(s).concat(l, "/")
			}, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
				host: s,
				port: o,
				protocol: a.replace(":", ""),
				options: Object.freeze({
					disableWarnings: i
				})
			}), i || function() {
				function e() {
					const e = document.createElement("p"),
						t = e.style;
					e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e)
				}
				"undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
				"undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", e) : e())
			}()
		}

		function Ad(e) {
			const t = e.indexOf(":");
			return t < 0 ? "" : e.substr(0, t + 1)
		}

		function Pd(e) {
			if (!e) return null;
			const t = Number(e);
			return isNaN(t) ? null : t
		}
		class jd {
			constructor(e, t) {
				this.providerId = e, this.signInMethod = t
			}
			toJSON() {
				return wu("not implemented")
			}
			_getIdTokenResponse(e) {
				return wu("not implemented")
			}
			_linkToIdToken(e, t) {
				return wu("not implemented")
			}
			_getReauthenticationResolver(e) {
				return wu("not implemented")
			}
		}
		async function Dd(e, t) {
			return Pu(e, "POST", "/v1/accounts:signUp", t)
		}
		async function Od(e, t) {
			return Du(e, "POST", "/v1/accounts:signInWithPassword", Au(e, t))
		}
		class Ld extends jd {
			constructor(e, t, n) {
				let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
				super("password", n), this._email = e, this._password = t, this._tenantId = r
			}
			static _fromEmailAndPassword(e, t) {
				return new Ld(e, t, "password")
			}
			static _fromEmailAndCode(e, t) {
				return new Ld(e, t, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
			}
			toJSON() {
				return {
					email: this._email,
					password: this._password,
					signInMethod: this.signInMethod,
					tenantId: this._tenantId
				}
			}
			static fromJSON(e) {
				const t = "string" === typeof e ? JSON.parse(e) : e;
				if ((null === t || void 0 === t ? void 0 : t.email) && (null === t || void 0 === t ? void 0 : t.password)) {
					if ("password" === t.signInMethod) return this._fromEmailAndPassword(t.email, t.password);
					if ("emailLink" === t.signInMethod) return this._fromEmailAndCode(t.email, t.password, t.tenantId)
				}
				return null
			}
			async _getIdTokenResponse(e) {
				switch (this.signInMethod) {
					case "password":
						return Nd(e, {
							returnSecureToken: !0,
							email: this._email,
							password: this._password,
							clientType: "CLIENT_TYPE_WEB"
						}, "signInWithPassword", Od);
					case "emailLink":
						return async function(e, t) {
							return Du(e, "POST", "/v1/accounts:signInWithEmailLink", Au(e, t))
						}(e, {
							email: this._email,
							oobCode: this._password
						});
					default:
						fu(e, "internal-error")
				}
			}
			async _linkToIdToken(e, t) {
				switch (this.signInMethod) {
					case "password":
						return Nd(e, {
							idToken: t,
							returnSecureToken: !0,
							email: this._email,
							password: this._password,
							clientType: "CLIENT_TYPE_WEB"
						}, "signUpPassword", Dd);
					case "emailLink":
						return async function(e, t) {
							return Du(e, "POST", "/v1/accounts:signInWithEmailLink", Au(e, t))
						}(e, {
							idToken: t,
							email: this._email,
							oobCode: this._password
						});
					default:
						fu(e, "internal-error")
				}
			}
			_getReauthenticationResolver(e) {
				return this._getIdTokenResponse(e)
			}
		}
		async function Md(e, t) {
			return Du(e, "POST", "/v1/accounts:signInWithIdp", Au(e, t))
		}
		class Fd extends jd {
			constructor() {
				super(...arguments), this.pendingToken = null
			}
			static _fromParams(e) {
				const t = new Fd(e.providerId, e.signInMethod);
				return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : fu("argument-error"), t
			}
			toJSON() {
				return {
					idToken: this.idToken,
					accessToken: this.accessToken,
					secret: this.secret,
					nonce: this.nonce,
					pendingToken: this.pendingToken,
					providerId: this.providerId,
					signInMethod: this.signInMethod
				}
			}
			static fromJSON(e) {
				const t = "string" === typeof e ? JSON.parse(e) : e,
					{
						providerId: n,
						signInMethod: r
					} = t,
					i = ou(t, ["providerId", "signInMethod"]);
				if (!n || !r) return null;
				const a = new Fd(n, r);
				return a.idToken = i.idToken || void 0, a.accessToken = i.accessToken || void 0, a.secret = i.secret, a.nonce = i.nonce, a.pendingToken = i.pendingToken || null, a
			}
			_getIdTokenResponse(e) {
				return Md(e, this.buildRequest())
			}
			_linkToIdToken(e, t) {
				const n = this.buildRequest();
				return n.idToken = t, Md(e, n)
			}
			_getReauthenticationResolver(e) {
				const t = this.buildRequest();
				return t.autoCreate = !1, Md(e, t)
			}
			buildRequest() {
				const e = {
					requestUri: "http://localhost",
					returnSecureToken: !0
				};
				if (this.pendingToken) e.pendingToken = this.pendingToken;
				else {
					const t = {};
					this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = J(t)
				}
				return e
			}
		}
		const Ud = {
			USER_NOT_FOUND: "user-not-found"
		};
		class Vd extends jd {
			constructor(e) {
				super("phone", "phone"), this.params = e
			}
			static _fromVerification(e, t) {
				return new Vd({
					verificationId: e,
					verificationCode: t
				})
			}
			static _fromTokenResponse(e, t) {
				return new Vd({
					phoneNumber: e,
					temporaryProof: t
				})
			}
			_getIdTokenResponse(e) {
				return async function(e, t) {
					return Du(e, "POST", "/v1/accounts:signInWithPhoneNumber", Au(e, t))
				}(e, this._makeVerificationRequest())
			}
			_linkToIdToken(e, t) {
				return async function(e, t) {
					const n = await Du(e, "POST", "/v1/accounts:signInWithPhoneNumber", Au(e, t));
					if (n.temporaryProof) throw Fu(e, "account-exists-with-different-credential", n);
					return n
				}(e, Object.assign({
					idToken: t
				}, this._makeVerificationRequest()))
			}
			_getReauthenticationResolver(e) {
				return async function(e, t) {
					return Du(e, "POST", "/v1/accounts:signInWithPhoneNumber", Au(e, Object.assign(Object.assign({}, t), {
						operation: "REAUTH"
					})), Ud)
				}(e, this._makeVerificationRequest())
			}
			_makeVerificationRequest() {
				const {
					temporaryProof: e,
					phoneNumber: t,
					verificationId: n,
					verificationCode: r
				} = this.params;
				return e && t ? {
					temporaryProof: e,
					phoneNumber: t
				} : {
					sessionInfo: n,
					code: r
				}
			}
			toJSON() {
				const e = {
					providerId: this.providerId
				};
				return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e
			}
			static fromJSON(e) {
				"string" === typeof e && (e = JSON.parse(e));
				const {
					verificationId: t,
					verificationCode: n,
					phoneNumber: r,
					temporaryProof: i
				} = e;
				return n || t || r || i ? new Vd({
					verificationId: t,
					verificationCode: n,
					phoneNumber: r,
					temporaryProof: i
				}) : null
			}
		}
		class zd {
			constructor(e) {
				var t, n, r, i, a, s;
				const o = Z(ee(e)),
					l = null !== (t = o.apiKey) && void 0 !== t ? t : null,
					c = null !== (n = o.oobCode) && void 0 !== n ? n : null,
					u = function(e) {
						switch (e) {
							case "recoverEmail":
								return "RECOVER_EMAIL";
							case "resetPassword":
								return "PASSWORD_RESET";
							case "signIn":
								return "EMAIL_SIGNIN";
							case "verifyEmail":
								return "VERIFY_EMAIL";
							case "verifyAndChangeEmail":
								return "VERIFY_AND_CHANGE_EMAIL";
							case "revertSecondFactorAddition":
								return "REVERT_SECOND_FACTOR_ADDITION";
							default:
								return null
						}
					}(null !== (r = o.mode) && void 0 !== r ? r : null);
				bu(l && c && u, "argument-error"), this.apiKey = l, this.operation = u, this.code = c, this.continueUrl = null !== (i = o.continueUrl) && void 0 !== i ? i : null, this.languageCode = null !== (a = o.languageCode) && void 0 !== a ? a : null, this.tenantId = null !== (s = o.tenantId) && void 0 !== s ? s : null
			}
			static parseLink(e) {
				const t = function(e) {
					const t = Z(ee(e)).link,
						n = t ? Z(ee(t)).deep_link_id : null,
						r = Z(ee(e)).deep_link_id;
					return (r ? Z(ee(r)).link : null) || r || n || t || e
				}(e);
				try {
					return new zd(t)
				} catch (n) {
					return null
				}
			}
		}
		class Bd {
			constructor() {
				this.providerId = Bd.PROVIDER_ID
			}
			static credential(e, t) {
				return Ld._fromEmailAndPassword(e, t)
			}
			static credentialWithLink(e, t) {
				const n = zd.parseLink(t);
				return bu(n, "argument-error"), Ld._fromEmailAndCode(e, n.code, n.tenantId)
			}
		}
		Bd.PROVIDER_ID = "password", Bd.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Bd.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
		class Gd {
			constructor(e) {
				this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
			}
			setDefaultLanguage(e) {
				this.defaultLanguageCode = e
			}
			setCustomParameters(e) {
				return this.customParameters = e, this
			}
			getCustomParameters() {
				return this.customParameters
			}
		}
		class qd extends Gd {
			constructor() {
				super(...arguments), this.scopes = []
			}
			addScope(e) {
				return this.scopes.includes(e) || this.scopes.push(e), this
			}
			getScopes() {
				return [...this.scopes]
			}
		}
		class Hd extends qd {
			constructor() {
				super("facebook.com")
			}
			static credential(e) {
				return Fd._fromParams({
					providerId: Hd.PROVIDER_ID,
					signInMethod: Hd.FACEBOOK_SIGN_IN_METHOD,
					accessToken: e
				})
			}
			static credentialFromResult(e) {
				return Hd.credentialFromTaggedObject(e)
			}
			static credentialFromError(e) {
				return Hd.credentialFromTaggedObject(e.customData || {})
			}
			static credentialFromTaggedObject(e) {
				let {
					_tokenResponse: t
				} = e;
				if (!t || !("oauthAccessToken" in t)) return null;
				if (!t.oauthAccessToken) return null;
				try {
					return Hd.credential(t.oauthAccessToken)
				} catch (n) {
					return null
				}
			}
		}
		Hd.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Hd.PROVIDER_ID = "facebook.com";
		class Wd extends qd {
			constructor() {
				super("google.com"), this.addScope("profile")
			}
			static credential(e, t) {
				return Fd._fromParams({
					providerId: Wd.PROVIDER_ID,
					signInMethod: Wd.GOOGLE_SIGN_IN_METHOD,
					idToken: e,
					accessToken: t
				})
			}
			static credentialFromResult(e) {
				return Wd.credentialFromTaggedObject(e)
			}
			static credentialFromError(e) {
				return Wd.credentialFromTaggedObject(e.customData || {})
			}
			static credentialFromTaggedObject(e) {
				let {
					_tokenResponse: t
				} = e;
				if (!t) return null;
				const {
					oauthIdToken: n,
					oauthAccessToken: r
				} = t;
				if (!n && !r) return null;
				try {
					return Wd.credential(n, r)
				} catch (i) {
					return null
				}
			}
		}
		Wd.GOOGLE_SIGN_IN_METHOD = "google.com", Wd.PROVIDER_ID = "google.com";
		class Kd extends qd {
			constructor() {
				super("github.com")
			}
			static credential(e) {
				return Fd._fromParams({
					providerId: Kd.PROVIDER_ID,
					signInMethod: Kd.GITHUB_SIGN_IN_METHOD,
					accessToken: e
				})
			}
			static credentialFromResult(e) {
				return Kd.credentialFromTaggedObject(e)
			}
			static credentialFromError(e) {
				return Kd.credentialFromTaggedObject(e.customData || {})
			}
			static credentialFromTaggedObject(e) {
				let {
					_tokenResponse: t
				} = e;
				if (!t || !("oauthAccessToken" in t)) return null;
				if (!t.oauthAccessToken) return null;
				try {
					return Kd.credential(t.oauthAccessToken)
				} catch (n) {
					return null
				}
			}
		}
		Kd.GITHUB_SIGN_IN_METHOD = "github.com", Kd.PROVIDER_ID = "github.com";
		class Qd extends qd {
			constructor() {
				super("twitter.com")
			}
			static credential(e, t) {
				return Fd._fromParams({
					providerId: Qd.PROVIDER_ID,
					signInMethod: Qd.TWITTER_SIGN_IN_METHOD,
					oauthToken: e,
					oauthTokenSecret: t
				})
			}
			static credentialFromResult(e) {
				return Qd.credentialFromTaggedObject(e)
			}
			static credentialFromError(e) {
				return Qd.credentialFromTaggedObject(e.customData || {})
			}
			static credentialFromTaggedObject(e) {
				let {
					_tokenResponse: t
				} = e;
				if (!t) return null;
				const {
					oauthAccessToken: n,
					oauthTokenSecret: r
				} = t;
				if (!n || !r) return null;
				try {
					return Qd.credential(n, r)
				} catch (i) {
					return null
				}
			}
		}
		Qd.TWITTER_SIGN_IN_METHOD = "twitter.com", Qd.PROVIDER_ID = "twitter.com";
		class Xd {
			constructor(e) {
				this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
			}
			static async _fromIdTokenResponse(e, t, n) {
				let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				const i = await ed._fromIdTokenResponse(e, n, r),
					a = Yd(n);
				return new Xd({
					user: i,
					providerId: a,
					_tokenResponse: n,
					operationType: t
				})
			}
			static async _forOperation(e, t, n) {
				await e._updateTokensIfNecessary(n, !0);
				const r = Yd(n);
				return new Xd({
					user: e,
					providerId: r,
					_tokenResponse: n,
					operationType: t
				})
			}
		}

		function Yd(e) {
			return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
		}
		class $d extends K {
			constructor(e, t, n, r) {
				var i;
				super(t.code, t.message), this.operationType = n, this.user = r, Object.setPrototypeOf(this, $d.prototype), this.customData = {
					appName: e.name,
					tenantId: null !== (i = e.tenantId) && void 0 !== i ? i : void 0,
					_serverResponse: t.customData._serverResponse,
					operationType: n
				}
			}
			static _fromErrorAndOperation(e, t, n, r) {
				return new $d(e, t, n, r)
			}
		}

		function Jd(e, t, n, r) {
			return ("reauthenticate" === t ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((n => {
				if (n.code === "auth/".concat("multi-factor-auth-required")) throw $d._fromErrorAndOperation(e, n, t, r);
				throw n
			}))
		}
		async function Zd(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			const r = await Ku(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
			return Xd._forOperation(e, "link", r)
		}
		async function eh(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			const {
				auth: r
			} = e;
			if (gt(r.app)) return Promise.reject(mu(r));
			const i = "reauthenticate";
			try {
				const a = await Ku(e, Jd(r, i, t, e), n);
				bu(a.idToken, r, "internal-error");
				const s = Hu(a.idToken);
				bu(s, r, "internal-error");
				const {
					sub: o
				} = s;
				return bu(e.uid === o, r, "user-mismatch"), Xd._forOperation(e, i, a)
			} catch (a) {
				throw (null === a || void 0 === a ? void 0 : a.code) === "auth/".concat("user-not-found") && fu(r, "user-mismatch"), a
			}
		}
		async function th(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			if (gt(e.app)) return Promise.reject(mu(e));
			const r = "signIn",
				i = await Jd(e, r, t),
				a = await Xd._fromIdTokenResponse(e, r, i);
			return n || await e._updateCurrentUser(a.user), a
		}
		new WeakMap;
		const nh = "__sak";
		class rh {
			constructor(e, t) {
				this.storageRetriever = e, this.type = t
			}
			_isAvailable() {
				try {
					return this.storage ? (this.storage.setItem(nh, "1"), this.storage.removeItem(nh), Promise.resolve(!0)) : Promise.resolve(!1)
				} catch (e) {
					return Promise.resolve(!1)
				}
			}
			_set(e, t) {
				return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
			}
			_get(e) {
				const t = this.storage.getItem(e);
				return Promise.resolve(t ? JSON.parse(t) : null)
			}
			_remove(e) {
				return this.storage.removeItem(e), Promise.resolve()
			}
			get storage() {
				return this.storageRetriever()
			}
		}
		class ih extends rh {
			constructor() {
				super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
					const e = q();
					return cd(e) || gd(e)
				}() && function() {
					try {
						return !(!window || window === window.top)
					} catch (e) {
						return !1
					}
				}(), this.fallbackToPolling = vd(), this._shouldAllowMigration = !0
			}
			forAllChangedKeys(e) {
				for (const t of Object.keys(this.listeners)) {
					const n = this.storage.getItem(t),
						r = this.localCache[t];
					n !== r && e(t, r, n)
				}
			}
			onStorageEvent(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (!e.key) return void this.forAllChangedKeys(((e, t, n) => {
					this.notifyListeners(e, n)
				}));
				const n = e.key;
				if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
					const r = this.storage.getItem(n);
					if (e.newValue !== r) null !== e.newValue ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n);
					else if (this.localCache[n] === e.newValue && !t) return
				}
				const r = () => {
						const e = this.storage.getItem(n);
						(t || this.localCache[n] !== e) && this.notifyListeners(n, e)
					},
					i = this.storage.getItem(n);
				md() && i !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, 10) : r()
			}
			notifyListeners(e, t) {
				this.localCache[e] = t;
				const n = this.listeners[e];
				if (n)
					for (const r of Array.from(n)) r(t ? JSON.parse(t) : t)
			}
			startPolling() {
				this.stopPolling(), this.pollTimer = setInterval((() => {
					this.forAllChangedKeys(((e, t, n) => {
						this.onStorageEvent(new StorageEvent("storage", {
							key: e,
							oldValue: t,
							newValue: n
						}), !0)
					}))
				}), 1e3)
			}
			stopPolling() {
				this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
			}
			attachListener() {
				window.addEventListener("storage", this.boundEventHandler)
			}
			detachListener() {
				window.removeEventListener("storage", this.boundEventHandler)
			}
			_addListener(e, t) {
				0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t)
			}
			_removeListener(e, t) {
				this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
			}
			async _set(e, t) {
				await super._set(e, t), this.localCache[e] = JSON.stringify(t)
			}
			async _get(e) {
				const t = await super._get(e);
				return this.localCache[e] = JSON.stringify(t), t
			}
			async _remove(e) {
				await super._remove(e), delete this.localCache[e]
			}
		}
		ih.type = "LOCAL";
		const ah = ih;
		class sh extends rh {
			constructor() {
				super((() => window.sessionStorage), "SESSION")
			}
			_addListener(e, t) {}
			_removeListener(e, t) {}
		}
		sh.type = "SESSION";
		const oh = sh;
		class lh {
			constructor(e) {
				this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
			}
			static _getInstance(e) {
				const t = this.receivers.find((t => t.isListeningto(e)));
				if (t) return t;
				const n = new lh(e);
				return this.receivers.push(n), n
			}
			isListeningto(e) {
				return this.eventTarget === e
			}
			async handleEvent(e) {
				const t = e,
					{
						eventId: n,
						eventType: r,
						data: i
					} = t.data,
					a = this.handlersMap[r];
				if (!(null === a || void 0 === a ? void 0 : a.size)) return;
				t.ports[0].postMessage({
					status: "ack",
					eventId: n,
					eventType: r
				});
				const s = Array.from(a).map((async e => e(t.origin, i))),
					o = await
				function(e) {
					return Promise.all(e.map((async e => {
						try {
							return {
								fulfilled: !0,
								value: await e
							}
						} catch (t) {
							return {
								fulfilled: !1,
								reason: t
							}
						}
					})))
				}(s);
				t.ports[0].postMessage({
					status: "done",
					eventId: n,
					eventType: r,
					response: o
				})
			}
			_subscribe(e, t) {
				0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
			}
			_unsubscribe(e, t) {
				this.handlersMap[e] && t && this.handlersMap[e].delete(t), t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
			}
		}

		function ch() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
				n = "";
			for (let r = 0; r < t; r++) n += Math.floor(10 * Math.random());
			return e + n
		}
		lh.receivers = [];
		class uh {
			constructor(e) {
				this.target = e, this.handlers = new Set
			}
			removeMessageHandler(e) {
				e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
			}
			async _send(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
				const r = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
				if (!r) throw new Error("connection_unavailable");
				let i, a;
				return new Promise(((s, o) => {
					const l = ch("", 20);
					r.port1.start();
					const c = setTimeout((() => {
						o(new Error("unsupported_event"))
					}), n);
					a = {
						messageChannel: r,
						onMessage(e) {
							const t = e;
							if (t.data.eventId === l) switch (t.data.status) {
								case "ack":
									clearTimeout(c), i = setTimeout((() => {
										o(new Error("timeout"))
									}), 3e3);
									break;
								case "done":
									clearTimeout(i), s(t.data.response);
									break;
								default:
									clearTimeout(c), clearTimeout(i), o(new Error("invalid_response"))
							}
						}
					}, this.handlers.add(a), r.port1.addEventListener("message", a.onMessage), this.target.postMessage({
						eventType: e,
						eventId: l,
						data: t
					}, [r.port2])
				})).finally((() => {
					a && this.removeMessageHandler(a)
				}))
			}
		}

		function dh() {
			return window
		}

		function hh() {
			return "undefined" !== typeof dh().WorkerGlobalScope && "function" === typeof dh().importScripts
		}
		const fh = "firebaseLocalStorageDb",
			ph = "firebaseLocalStorage",
			gh = "fbase_key";
		class mh {
			constructor(e) {
				this.request = e
			}
			toPromise() {
				return new Promise(((e, t) => {
					this.request.addEventListener("success", (() => {
						e(this.request.result)
					})), this.request.addEventListener("error", (() => {
						t(this.request.error)
					}))
				}))
			}
		}

		function vh(e, t) {
			return e.transaction([ph], t ? "readwrite" : "readonly").objectStore(ph)
		}

		function yh() {
			const e = indexedDB.open(fh, 1);
			return new Promise(((t, n) => {
				e.addEventListener("error", (() => {
					n(e.error)
				})), e.addEventListener("upgradeneeded", (() => {
					const t = e.result;
					try {
						t.createObjectStore(ph, {
							keyPath: gh
						})
					} catch (r) {
						n(r)
					}
				})), e.addEventListener("success", (async () => {
					const n = e.result;
					n.objectStoreNames.contains(ph) ? t(n) : (n.close(), await
						function() {
							const e = indexedDB.deleteDatabase(fh);
							return new mh(e).toPromise()
						}(), t(await yh()))
				}))
			}))
		}
		async function bh(e, t, n) {
			const r = vh(e, !0).put({
				[gh]: t,
				value: n
			});
			return new mh(r).toPromise()
		}

		function wh(e, t) {
			const n = vh(e, !0).delete(t);
			return new mh(n).toPromise()
		}
		class xh {
			constructor() {
				this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
			}
			async _openDb() {
				return this.db || (this.db = await yh()), this.db
			}
			async _withRetries(e) {
				let t = 0;
				for (;;) try {
					const t = await this._openDb();
					return await e(t)
				} catch (n) {
					if (t++ > 3) throw n;
					this.db && (this.db.close(), this.db = void 0)
				}
			}
			async initializeServiceWorkerMessaging() {
				return hh() ? this.initializeReceiver() : this.initializeSender()
			}
			async initializeReceiver() {
				this.receiver = lh._getInstance(hh() ? self : null), this.receiver._subscribe("keyChanged", (async (e, t) => ({
					keyProcessed: (await this._poll()).includes(t.key)
				}))), this.receiver._subscribe("ping", (async (e, t) => ["keyChanged"]))
			}
			async initializeSender() {
				var e, t;
				if (this.activeServiceWorker = await async function() {
						if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
						try {
							return (await navigator.serviceWorker.ready).active
						} catch (e) {
							return null
						}
					}(), !this.activeServiceWorker) return;
				this.sender = new uh(this.activeServiceWorker);
				const n = await this.sender._send("ping", {}, 800);
				n && (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = n[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
			}
			async notifyServiceWorker(e) {
				if (this.sender && this.activeServiceWorker && function() {
						var e;
						return (null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === e ? void 0 : e.controller) || null
					}() === this.activeServiceWorker) try {
					await this.sender._send("keyChanged", {
						key: e
					}, this.serviceWorkerReceiverAvailable ? 800 : 50)
				} catch (t) {}
			}
			async _isAvailable() {
				try {
					if (!indexedDB) return !1;
					const e = await yh();
					return await bh(e, nh, "1"), await wh(e, nh), !0
				} catch (e) {}
				return !1
			}
			async _withPendingWrite(e) {
				this.pendingWrites++;
				try {
					await e()
				} finally {
					this.pendingWrites--
				}
			}
			async _set(e, t) {
				return this._withPendingWrite((async () => (await this._withRetries((n => bh(n, e, t))), this.localCache[e] = t, this.notifyServiceWorker(e))))
			}
			async _get(e) {
				const t = await this._withRetries((t => async function(e, t) {
					const n = vh(e, !1).get(t),
						r = await new mh(n).toPromise();
					return void 0 === r ? null : r.value
				}(t, e)));
				return this.localCache[e] = t, t
			}
			async _remove(e) {
				return this._withPendingWrite((async () => (await this._withRetries((t => wh(t, e))), delete this.localCache[e], this.notifyServiceWorker(e))))
			}
			async _poll() {
				const e = await this._withRetries((e => {
					const t = vh(e, !1).getAll();
					return new mh(t).toPromise()
				}));
				if (!e) return [];
				if (0 !== this.pendingWrites) return [];
				const t = [],
					n = new Set;
				if (0 !== e.length)
					for (const {
							fbase_key: r,
							value: i
						} of e) n.add(r), JSON.stringify(this.localCache[r]) !== JSON.stringify(i) && (this.notifyListeners(r, i), t.push(r));
				for (const r of Object.keys(this.localCache)) this.localCache[r] && !n.has(r) && (this.notifyListeners(r, null), t.push(r));
				return t
			}
			notifyListeners(e, t) {
				this.localCache[e] = t;
				const n = this.listeners[e];
				if (n)
					for (const r of Array.from(n)) r(t)
			}
			startPolling() {
				this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
			}
			stopPolling() {
				this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
			}
			_addListener(e, t) {
				0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t)
			}
			_removeListener(e, t) {
				this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && this.stopPolling()
			}
		}
		xh.type = "LOCAL";
		const kh = xh;
		Ed("rcb"), new Eu(3e4, 6e4);
		const Sh = "recaptcha";
		async function Ch(e, t, n) {
			var r;
			const i = await n.verify();
			try {
				let a;
				if (bu("string" === typeof i, e, "argument-error"), bu(n.type === Sh, e, "argument-error"), a = "string" === typeof t ? {
						phoneNumber: t
					} : t, "session" in a) {
					const t = a.session;
					if ("phoneNumber" in a) {
						bu("enroll" === t.type, e, "internal-error");
						const n = await
						function(e, t) {
							return Pu(e, "POST", "/v2/accounts/mfaEnrollment:start", Au(e, t))
						}(e, {
							idToken: t.credential,
							phoneEnrollmentInfo: {
								phoneNumber: a.phoneNumber,
								recaptchaToken: i
							}
						});
						return n.phoneSessionInfo.sessionInfo
					} {
						bu("signin" === t.type, e, "internal-error");
						const n = (null === (r = a.multiFactorHint) || void 0 === r ? void 0 : r.uid) || a.multiFactorUid;
						bu(n, e, "missing-multi-factor-info");
						const s = await
						function(e, t) {
							return Pu(e, "POST", "/v2/accounts/mfaSignIn:start", Au(e, t))
						}(e, {
							mfaPendingCredential: t.credential,
							mfaEnrollmentId: n,
							phoneSignInInfo: {
								recaptchaToken: i
							}
						});
						return s.phoneResponseInfo.sessionInfo
					}
				} {
					const {
						sessionInfo: t
					} = await async function(e, t) {
						return Pu(e, "POST", "/v1/accounts:sendVerificationCode", Au(e, t))
					}(e, {
						phoneNumber: a.phoneNumber,
						recaptchaToken: i
					});
					return t
				}
			} finally {
				n._reset()
			}
		}
		class _h {
			constructor(e) {
				this.providerId = _h.PROVIDER_ID, this.auth = kd(e)
			}
			verifyPhoneNumber(e, t) {
				return Ch(this.auth, e, re(t))
			}
			static credential(e, t) {
				return Vd._fromVerification(e, t)
			}
			static credentialFromResult(e) {
				const t = e;
				return _h.credentialFromTaggedObject(t)
			}
			static credentialFromError(e) {
				return _h.credentialFromTaggedObject(e.customData || {})
			}
			static credentialFromTaggedObject(e) {
				let {
					_tokenResponse: t
				} = e;
				if (!t) return null;
				const {
					phoneNumber: n,
					temporaryProof: r
				} = t;
				return n && r ? Vd._fromTokenResponse(n, r) : null
			}
		}

		function Eh(e, t) {
			return t ? nd(t) : (bu(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver)
		}
		_h.PROVIDER_ID = "phone", _h.PHONE_SIGN_IN_METHOD = "phone";
		class Th extends jd {
			constructor(e) {
				super("custom", "custom"), this.params = e
			}
			_getIdTokenResponse(e) {
				return Md(e, this._buildIdpRequest())
			}
			_linkToIdToken(e, t) {
				return Md(e, this._buildIdpRequest(t))
			}
			_getReauthenticationResolver(e) {
				return Md(e, this._buildIdpRequest())
			}
			_buildIdpRequest(e) {
				const t = {
					requestUri: this.params.requestUri,
					sessionId: this.params.sessionId,
					postBody: this.params.postBody,
					tenantId: this.params.tenantId,
					pendingToken: this.params.pendingToken,
					returnSecureToken: !0,
					returnIdpCredential: !0
				};
				return e && (t.idToken = e), t
			}
		}

		function Ih(e) {
			return th(e.auth, new Th(e), e.bypassAuthState)
		}

		function Nh(e) {
			const {
				auth: t,
				user: n
			} = e;
			return bu(n, t, "internal-error"), eh(n, new Th(e), e.bypassAuthState)
		}
		async function Rh(e) {
			const {
				auth: t,
				user: n
			} = e;
			return bu(n, t, "internal-error"), Zd(n, new Th(e), e.bypassAuthState)
		}
		class Ah {
			constructor(e, t, n, r) {
				let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
				this.auth = e, this.resolver = n, this.user = r, this.bypassAuthState = i, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]
			}
			execute() {
				return new Promise((async (e, t) => {
					this.pendingPromise = {
						resolve: e,
						reject: t
					};
					try {
						this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
					} catch (n) {
						this.reject(n)
					}
				}))
			}
			async onAuthEvent(e) {
				const {
					urlResponse: t,
					sessionId: n,
					postBody: r,
					tenantId: i,
					error: a,
					type: s
				} = e;
				if (a) return void this.reject(a);
				const o = {
					auth: this.auth,
					requestUri: t,
					sessionId: n,
					tenantId: i || void 0,
					postBody: r || void 0,
					user: this.user,
					bypassAuthState: this.bypassAuthState
				};
				try {
					this.resolve(await this.getIdpTask(s)(o))
				} catch (l) {
					this.reject(l)
				}
			}
			onError(e) {
				this.reject(e)
			}
			getIdpTask(e) {
				switch (e) {
					case "signInViaPopup":
					case "signInViaRedirect":
						return Ih;
					case "linkViaPopup":
					case "linkViaRedirect":
						return Rh;
					case "reauthViaPopup":
					case "reauthViaRedirect":
						return Nh;
					default:
						fu(this.auth, "internal-error")
				}
			}
			resolve(e) {
				xu(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
			}
			reject(e) {
				xu(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
			}
			unregisterAndCleanUp() {
				this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
			}
		}
		const Ph = new Eu(2e3, 1e4);
		class jh extends Ah {
			constructor(e, t, n, r, i) {
				super(e, t, r, i), this.provider = n, this.authWindow = null, this.pollId = null, jh.currentPopupAction && jh.currentPopupAction.cancel(), jh.currentPopupAction = this
			}
			async executeNotNull() {
				const e = await this.execute();
				return bu(e, this.auth, "internal-error"), e
			}
			async onExecution() {
				xu(1 === this.filter.length, "Popup operations only handle one event");
				const e = ch();
				this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((e => {
					this.reject(e)
				})), this.resolver._isIframeWebStorageSupported(this.auth, (e => {
					e || this.reject(pu(this.auth, "web-storage-unsupported"))
				})), this.pollUserCancellation()
			}
			get eventId() {
				var e;
				return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
			}
			cancel() {
				this.reject(pu(this.auth, "cancelled-popup-request"))
			}
			cleanUp() {
				this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, jh.currentPopupAction = null
			}
			pollUserCancellation() {
				const e = () => {
					var t, n;
					(null === (n = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === n ? void 0 : n.closed) ? this.pollId = window.setTimeout((() => {
						this.pollId = null, this.reject(pu(this.auth, "popup-closed-by-user"))
					}), 8e3): this.pollId = window.setTimeout(e, Ph.get())
				};
				e()
			}
		}
		jh.currentPopupAction = null;
		const Dh = "pendingRedirect",
			Oh = new Map;
		class Lh extends Ah {
			constructor(e, t) {
				super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
			}
			async execute() {
				let e = Oh.get(this.auth._key());
				if (!e) {
					try {
						const t = await async function(e, t) {
							const n = Uh(t),
								r = Fh(e);
							if (!await r._isAvailable()) return !1;
							const i = "true" === await r._get(n);
							return await r._remove(n), i
						}(this.resolver, this.auth), n = t ? await super.execute() : null;
						e = () => Promise.resolve(n)
					} catch (t) {
						e = () => Promise.reject(t)
					}
					Oh.set(this.auth._key(), e)
				}
				return this.bypassAuthState || Oh.set(this.auth._key(), (() => Promise.resolve(null))), e()
			}
			async onAuthEvent(e) {
				if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
				if ("unknown" !== e.type) {
					if (e.eventId) {
						const t = await this.auth._redirectUserForId(e.eventId);
						if (t) return this.user = t, super.onAuthEvent(e);
						this.resolve(null)
					}
				} else this.resolve(null)
			}
			async onExecution() {}
			cleanUp() {}
		}

		function Mh(e, t) {
			Oh.set(e._key(), t)
		}

		function Fh(e) {
			return nd(e._redirectPersistence)
		}

		function Uh(e) {
			return ad(Dh, e.config.apiKey, e.name)
		}
		async function Vh(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			if (gt(e.app)) return Promise.reject(mu(e));
			const r = kd(e),
				i = Eh(r, t),
				a = new Lh(r, i, n),
				s = await a.execute();
			return s && !n && (delete s.user._redirectEventId, await r._persistUserIfCurrent(s.user), await r._setRedirectUser(null, t)), s
		}
		class zh {
			constructor(e) {
				this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
			}
			registerConsumer(e) {
				this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
			}
			unregisterConsumer(e) {
				this.consumers.delete(e)
			}
			onEvent(e) {
				if (this.hasEventBeenHandled(e)) return !1;
				let t = !1;
				return this.consumers.forEach((n => {
					this.isEventForConsumer(e, n) && (t = !0, this.sendToConsumer(e, n), this.saveEventToCache(e))
				})), this.hasHandledPotentialRedirect || ! function(e) {
					switch (e.type) {
						case "signInViaRedirect":
						case "linkViaRedirect":
						case "reauthViaRedirect":
							return !0;
						case "unknown":
							return Gh(e);
						default:
							return !1
					}
				}(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
			}
			sendToConsumer(e, t) {
				var n;
				if (e.error && !Gh(e)) {
					const r = (null === (n = e.error.code) || void 0 === n ? void 0 : n.split("auth/")[1]) || "internal-error";
					t.onError(pu(this.auth, r))
				} else t.onAuthEvent(e)
			}
			isEventForConsumer(e, t) {
				const n = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
				return t.filter.includes(e.type) && n
			}
			hasEventBeenHandled(e) {
				return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Bh(e))
			}
			saveEventToCache(e) {
				this.cachedEventUids.add(Bh(e)), this.lastProcessedEventTime = Date.now()
			}
		}

		function Bh(e) {
			return [e.type, e.eventId, e.sessionId, e.tenantId].filter((e => e)).join("-")
		}

		function Gh(e) {
			let {
				type: t,
				error: n
			} = e;
			return "unknown" === t && (null === n || void 0 === n ? void 0 : n.code) === "auth/".concat("no-auth-event")
		}
		const qh = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
			Hh = /^https?/;
		async function Wh(e) {
			if (e.config.emulator) return;
			const {
				authorizedDomains: t
			} = await async function(e) {
				return Pu(e, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
			}(e);
			for (const r of t) try {
				if (Kh(r)) return
			} catch (n) {}
			fu(e, "unauthorized-domain")
		}

		function Kh(e) {
			const t = ku(),
				{
					protocol: n,
					hostname: r
				} = new URL(t);
			if (e.startsWith("chrome-extension://")) {
				const i = new URL(e);
				return "" === i.hostname && "" === r ? "chrome-extension:" === n && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === n && i.hostname === r
			}
			if (!Hh.test(n)) return !1;
			if (qh.test(e)) return r === e;
			const i = e.replace(/\./g, "\\.");
			return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
		}
		const Qh = new Eu(3e4, 6e4);

		function Xh() {
			const e = dh().___jsl;
			if (null === e || void 0 === e ? void 0 : e.H)
				for (const t of Object.keys(e.H))
					if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP)
						for (let n = 0; n < e.CP.length; n++) e.CP[n] = null
		}

		function Yh(e) {
			return new Promise(((t, n) => {
				var r, i, a;

				function s() {
					Xh(), gapi.load("gapi.iframes", {
						callback: () => {
							t(gapi.iframes.getContext())
						},
						ontimeout: () => {
							Xh(), n(pu(e, "network-request-failed"))
						},
						timeout: Qh.get()
					})
				}
				if (null === (i = null === (r = dh().gapi) || void 0 === r ? void 0 : r.iframes) || void 0 === i ? void 0 : i.Iframe) t(gapi.iframes.getContext());
				else {
					if (!(null === (a = dh().gapi) || void 0 === a ? void 0 : a.load)) {
						const t = Ed("iframefcb");
						return dh()[t] = () => {
							gapi.load ? s() : n(pu(e, "network-request-failed"))
						}, _d("".concat(Cd.gapiScript, "?onload=").concat(t)).catch((e => n(e)))
					}
					s()
				}
			})).catch((e => {
				throw $h = null, e
			}))
		}
		let $h = null;
		const Jh = new Eu(5e3, 15e3),
			Zh = "__/auth/iframe",
			ef = "emulator/auth/iframe",
			tf = {
				style: {
					position: "absolute",
					top: "-100px",
					width: "1px",
					height: "1px"
				},
				"aria-hidden": "true",
				tabindex: "-1"
			},
			nf = new Map([
				["identitytoolkit.googleapis.com", "p"],
				["staging-identitytoolkit.sandbox.googleapis.com", "s"],
				["test-identitytoolkit.sandbox.googleapis.com", "t"]
			]);

		function rf(e) {
			const t = e.config;
			bu(t.authDomain, e, "auth-domain-config-required");
			const n = t.emulator ? Tu(t, ef) : "https://".concat(e.config.authDomain, "/").concat(Zh),
				r = {
					apiKey: t.apiKey,
					appName: e.name,
					v: yt
				},
				i = nf.get(e.config.apiHost);
			i && (r.eid = i);
			const a = e._getFrameworks();
			return a.length && (r.fw = a.join(",")), "".concat(n, "?").concat(J(r).slice(1))
		}
		async function af(e) {
			const t = await
			function(e) {
				return $h = $h || Yh(e), $h
			}(e), n = dh().gapi;
			return bu(n, e, "internal-error"), t.open({
				where: document.body,
				url: rf(e),
				messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
				attributes: tf,
				dontclear: !0
			}, (t => new Promise((async (n, r) => {
				await t.restyle({
					setHideOnLeave: !1
				});
				const i = pu(e, "network-request-failed"),
					a = dh().setTimeout((() => {
						r(i)
					}), Jh.get());

				function s() {
					dh().clearTimeout(a), n(t)
				}
				t.ping(s).then(s, (() => {
					r(i)
				}))
			}))))
		}
		const sf = {
			location: "yes",
			resizable: "yes",
			statusbar: "yes",
			toolbar: "no"
		};
		class of {
			constructor(e) {
				this.window = e, this.associatedEvent = null
			}
			close() {
				if (this.window) try {
					this.window.close()
				} catch (e) {}
			}
		}

		function lf(e, t, n) {
			let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
				i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
			const a = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
				s = Math.max((window.screen.availWidth - r) / 2, 0).toString();
			let o = "";
			const l = Object.assign(Object.assign({}, sf), {
					width: r.toString(),
					height: i.toString(),
					top: a,
					left: s
				}),
				c = q().toLowerCase();
			n && (o = ud(c) ? "_blank" : n), ld(c) && (t = t || "http://localhost", l.scrollbars = "yes");
			const u = Object.entries(l).reduce(((e, t) => {
				let [n, r] = t;
				return "".concat(e).concat(n, "=").concat(r, ",")
			}), "");
			if (function() {
					var e;
					return gd(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q()) && !!(null === (e = window.navigator) || void 0 === e ? void 0 : e.standalone)
				}(c) && "_self" !== o) return function(e, t) {
				const n = document.createElement("a");
				n.href = e, n.target = t;
				const r = document.createEvent("MouseEvent");
				r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r)
			}(t || "", o), new of (null);
			const d = window.open(t || "", o, u);
			bu(d, e, "popup-blocked");
			try {
				d.focus()
			} catch (h) {}
			return new of (d)
		}
		const cf = "__/auth/handler",
			uf = "emulator/auth/handler",
			df = encodeURIComponent("fac");
		async function hf(e, t, n, r, i, a) {
			bu(e.config.authDomain, e, "auth-domain-config-required"), bu(e.config.apiKey, e, "invalid-api-key");
			const s = {
				apiKey: e.config.apiKey,
				appName: e.name,
				authType: n,
				redirectUrl: r,
				v: yt,
				eventId: i
			};
			if (t instanceof Gd) {
				t.setDefaultLanguage(e.languageCode), s.providerId = t.providerId || "",
					function(e) {
						for (const t in e)
							if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
						return !0
					}(t.getCustomParameters()) || (s.customParameters = JSON.stringify(t.getCustomParameters()));
				for (const [e, t] of Object.entries(a || {})) s[e] = t
			}
			if (t instanceof qd) {
				const e = t.getScopes().filter((e => "" !== e));
				e.length > 0 && (s.scopes = e.join(","))
			}
			e.tenantId && (s.tid = e.tenantId);
			const o = s;
			for (const u of Object.keys(o)) void 0 === o[u] && delete o[u];
			const l = await e._getAppCheckToken(),
				c = l ? "#".concat(df, "=").concat(encodeURIComponent(l)) : "";
			return "".concat(function(e) {
				let {
					config: t
				} = e;
				if (!t.emulator) return "https://".concat(t.authDomain, "/").concat(cf);
				return Tu(t, uf)
			}(e), "?").concat(J(o).slice(1)).concat(c)
		}
		const ff = "webStorageSupport";
		const pf = class {
			constructor() {
				this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = oh, this._completeRedirectFn = Vh, this._overrideRedirectResult = Mh
			}
			async _openPopup(e, t, n, r) {
				var i;
				xu(null === (i = this.eventManagers[e._key()]) || void 0 === i ? void 0 : i.manager, "_initialize() not called before _openPopup()");
				return lf(e, await hf(e, t, n, ku(), r), ch())
			}
			async _openRedirect(e, t, n, r) {
				await this._originValidation(e);
				return function(e) {
					dh().location.href = e
				}(await hf(e, t, n, ku(), r)), new Promise((() => {}))
			}
			_initialize(e) {
				const t = e._key();
				if (this.eventManagers[t]) {
					const {
						manager: e,
						promise: n
					} = this.eventManagers[t];
					return e ? Promise.resolve(e) : (xu(n, "If manager is not set, promise should be"), n)
				}
				const n = this.initAndGetManager(e);
				return this.eventManagers[t] = {
					promise: n
				}, n.catch((() => {
					delete this.eventManagers[t]
				})), n
			}
			async initAndGetManager(e) {
				const t = await af(e),
					n = new zh(e);
				return t.register("authEvent", (t => {
					bu(null === t || void 0 === t ? void 0 : t.authEvent, e, "invalid-auth-event");
					return {
						status: n.onEvent(t.authEvent) ? "ACK" : "ERROR"
					}
				}), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = {
					manager: n
				}, this.iframes[e._key()] = t, n
			}
			_isIframeWebStorageSupported(e, t) {
				this.iframes[e._key()].send(ff, {
					type: ff
				}, (n => {
					var r;
					const i = null === (r = null === n || void 0 === n ? void 0 : n[0]) || void 0 === r ? void 0 : r[ff];
					void 0 !== i && t(!!i), fu(e, "internal-error")
				}), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
			}
			_originValidation(e) {
				const t = e._key();
				return this.originValidationPromises[t] || (this.originValidationPromises[t] = Wh(e)), this.originValidationPromises[t]
			}
			get _shouldInitProactively() {
				return vd() || cd() || gd()
			}
		};
		var gf = "@firebase/auth",
			mf = "1.7.5";
		class vf {
			constructor(e) {
				this.auth = e, this.internalListeners = new Map
			}
			getUid() {
				var e;
				return this.assertAuthConfigured(), (null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.uid) || null
			}
			async getToken(e) {
				if (this.assertAuthConfigured(), await this.auth._initializationPromise, !this.auth.currentUser) return null;
				return {
					accessToken: await this.auth.currentUser.getIdToken(e)
				}
			}
			addAuthTokenListener(e) {
				if (this.assertAuthConfigured(), this.internalListeners.has(e)) return;
				const t = this.auth.onIdTokenChanged((t => {
					e((null === t || void 0 === t ? void 0 : t.stsTokenManager.accessToken) || null)
				}));
				this.internalListeners.set(e, t), this.updateProactiveRefresh()
			}
			removeAuthTokenListener(e) {
				this.assertAuthConfigured();
				const t = this.internalListeners.get(e);
				t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh())
			}
			assertAuthConfigured() {
				bu(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
			}
			updateProactiveRefresh() {
				this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
			}
		}
		const yf = B("authIdTokenMaxAge") || 300;
		let bf = null;
		var wf;
		Cd = {
			loadJS: e => new Promise(((t, n) => {
				const r = document.createElement("script");
				r.setAttribute("src", e), r.onload = t, r.onerror = e => {
						const t = pu("internal-error");
						t.customData = e, n(t)
					}, r.type = "text/javascript", r.charset = "UTF-8",
					function() {
						var e, t;
						return null !== (t = null === (e = document.getElementsByTagName("head")) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : document
					}().appendChild(r)
			})),
			gapiScript: "https://apis.google.com/js/api.js",
			recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
			recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
		}, wf = "Browser", ft(new ie("auth", ((e, t) => {
			let {
				options: n
			} = t;
			const r = e.getProvider("app").getImmediate(),
				i = e.getProvider("heartbeat"),
				a = e.getProvider("app-check-internal"),
				{
					apiKey: s,
					authDomain: o
				} = r.options;
			bu(s && !s.includes(":"), "invalid-api-key", {
				appName: r.name
			});
			const l = {
					apiKey: s,
					authDomain: o,
					clientPlatform: wf,
					apiHost: "identitytoolkit.googleapis.com",
					tokenApiHost: "securetoken.googleapis.com",
					apiScheme: "https",
					sdkClientVersion: yd(wf)
				},
				c = new xd(r, i, a, l);
			return function(e, t) {
				const n = (null === t || void 0 === t ? void 0 : t.persistence) || [],
					r = (Array.isArray(n) ? n : [n]).map(nd);
				(null === t || void 0 === t ? void 0 : t.errorMap) && e._updateErrorMap(t.errorMap), e._initializeWithPersistence(r, null === t || void 0 === t ? void 0 : t.popupRedirectResolver)
			}(c, n), c
		}), "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e, t, n) => {
			e.getProvider("auth-internal").initialize()
		}))), ft(new ie("auth-internal", (e => (e => new vf(e))(kd(e.getProvider("auth").getImmediate()))), "PRIVATE").setInstantiationMode("EXPLICIT")), xt(gf, mf, function(e) {
			switch (e) {
				case "Node":
					return "node";
				case "ReactNative":
					return "rn";
				case "Worker":
					return "webworker";
				case "Cordova":
					return "cordova";
				case "WebExtension":
					return "web-extension";
				default:
					return
			}
		}(wf)), xt(gf, mf, "esm2017");
		const xf = bt({
				apiKey: "AIzaSyBE2S1MOKkEZGsB1Ji4DPBwZLferelrIr8",
				authDomain: "svg-pattern-builder.firebaseapp.com",
				projectId: "svg-pattern-builder",
				storageBucket: "svg-pattern-builder.appspot.com",
				messagingSenderId: "763252124716",
				appId: "1:763252124716:web:dc5ea4a1ec0bca5b4db589",
				measurementId: "G-FK88VDZ0CL"
			}),
			kf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt();
				const t = pt(e, "auth");
				if (t.isInitialized()) return t.getImmediate();
				const n = function(e, t) {
						const n = pt(e, "auth");
						if (n.isInitialized()) {
							const e = n.getImmediate();
							if (Y(n.getOptions(), null !== t && void 0 !== t ? t : {})) return e;
							fu(e, "already-initialized")
						}
						return n.initialize({
							options: t
						})
					}(e, {
						popupRedirectResolver: pf,
						persistence: [kh, ah, oh]
					}),
					r = B("authTokenSyncURL");
				if (r && "boolean" === typeof isSecureContext && isSecureContext) {
					const e = new URL(r, location.origin);
					if (location.origin === e.origin) {
						const t = (i = e.toString(), async e => {
							const t = e && await e.getIdTokenResult(),
								n = t && ((new Date).getTime() - Date.parse(t.issuedAtTime)) / 1e3;
							if (n && n > yf) return;
							const r = null === t || void 0 === t ? void 0 : t.token;
							bf !== r && (bf = r, await fetch(i, {
								method: r ? "POST" : "DELETE",
								headers: r ? {
									Authorization: "Bearer ".concat(r)
								} : {}
							}))
						});
						! function(e, t, n) {
							re(e).beforeAuthStateChanged(t, n)
						}(n, t, (() => t(n.currentUser))),
						function(e, t, n, r) {
							re(e).onIdTokenChanged(t, n, r)
						}(n, (e => t(e)))
					}
				}
				var i;
				const a = V("auth");
				return a && Rd(n, "http://".concat(a)), n
			}(xf),
			Sf = function(e, t) {
				const n = "string" == typeof e ? e : t || "(default)",
					r = pt("object" == typeof e ? e : wt(), "firestore").getImmediate({
						identifier: n
					});
				if (!r._initialized) {
					const e = (e => {
						const t = V(e);
						if (!t) return;
						const n = t.lastIndexOf(":");
						if (n <= 0 || n + 1 === t.length) throw new Error("Invalid host ".concat(t, " with no separate hostname and port!"));
						const r = parseInt(t.substring(n + 1), 10);
						return "[" === t[0] ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]
					})("firestore");
					e && ic(r, ...e)
				}
				return r
			}(xf),
			Cf = e => {
				//hack: remove login panel by ezshine
				return null;

				let {
					isOpen: t,
					onSignIn: n
				} = e;
				if (!t) return null;
				return (0, i.jsx)("div", {
					className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-mono",
					children: (0, i.jsxs)("div", {
						className: "bg-white dark:bg-neutral-800 rounded-lg p-6 max-w-md w-full mx-4",
						children: [(0, i.jsx)("h2", {
							className: "text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-100",
							children: "Sign In to Start Designing"
						}), (0, i.jsxs)("p", {
							className: "text-xs mb-6 text-neutral-700 dark:text-neutral-300",
							children: ["Signing in allows you to save & share your designs, download svg/png and export video/gif. It'll be a better experience for everyone. ", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "Would love your feedback and feature requests."]
						}), (0, i.jsxs)("button", {
							onClick: async () => {
								const e = new Wd;
								try {
									const t = await async function(e, t, n) {
										if (gt(e.app)) return Promise.reject(pu(e, "operation-not-supported-in-this-environment"));
										const r = kd(e);
										vu(e, t, Gd);
										const i = Eh(r, n);
										return new jh(r, "signInViaPopup", t, i).executeNotNull()
									}(kf, e), r = t.user;
									(await Zc(cc(Sf, "users", r.uid))).exists() || (await nu(cc(Sf, "users", r.uid), {
										email: r.email,
										displayName: r.displayName,
										createdAt: new Date
									}), await fetch("https://us-central1-svg-pattern-builder.cloudfunctions.net/sendWelcomeEmail", {
										method: "POST",
										headers: {
											"Content-Type": "application/json"
										},
										body: JSON.stringify({
											email: r.email,
											displayName: r.displayName
										})
									})), n(r)
								} catch (t) {
									console.error("Error signing in with Google", t)
								}
							},
							className: "w-full bg-neutral-800 dark:bg-neutral-950 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center justify-center transition duration-300 ease-in-out",
							children: [(0, i.jsxs)("svg", {
								className: "w-4 h-4 mr-2",
								viewBox: "0 0 24 24",
								children: [(0, i.jsx)("path", {
									fill: "currentColor",
									d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								}), (0, i.jsx)("path", {
									fill: "currentColor",
									d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								}), (0, i.jsx)("path", {
									fill: "currentColor",
									d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								}), (0, i.jsx)("path", {
									fill: "currentColor",
									d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								}), (0, i.jsx)("path", {
									fill: "none",
									d: "M1 1h22v22H1z"
								})]
							}), "Sign in with Google"]
						})]
					})
				})
			},
			_f = h("Link", [
				["path", {
					d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
					key: "1cjeqo"
				}],
				["path", {
					d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
					key: "19qd67"
				}]
			]),
			Ef = () => {
				const [t, n] = (0, e.useState)(!1);
				return (0, i.jsxs)("button", {
					onClick: async () => {
						try {
							await navigator.clipboard.writeText(window.location.href), n(!0), setTimeout((() => n(!1)), 2e3)
						} catch (e) {
							console.error("Failed to copy URL: ", e)
						}
					},
					className: "bg-neutral-800 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
					children: [(0, i.jsx)(_f, {
						className: "mr-2 h-4 w-4 hidden sm:block"
					}), t ? "Copied!" : "Share"]
				})
			},
			Tf = h("RefreshCw", [
				["path", {
					d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
					key: "v9h5vc"
				}],
				["path", {
					d: "M21 3v5h-5",
					key: "1q7to0"
				}],
				["path", {
					d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
					key: "3uifl3"
				}],
				["path", {
					d: "M8 16H3v5",
					key: "1cv678"
				}]
			]),
			If = () => (0, i.jsx)("button", {
				onClick: () => {
					window.history.replaceState({}, document.title, window.location.pathname), window.location.reload()
				},
				className: "bg-neutral-800 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
				children: (0, i.jsx)(Tf, {
					className: "h-4 w-4"
				})
			}),
			Nf = () => (0, i.jsxs)("footer", {
				className: "text-left",
				children: [(0, i.jsx)("hr", {
					className: "h-px my-4 border-0 bg-neutral-200 lg:bg-neutral-300 dark:bg-neutral-900 lg:dark:bg-neutral-800"
				}), (0, i.jsx)("h1", {
					className: "text-xs mb-2 font-semibold",
					children: "SVG Pattern Builder"
				}), (0, i.jsx)("h2", {
					className: "text-[11px] text-neutral-500 my-4 opacity-60",
					children: "SVG Pattern Builder allows you to create, customize, and download unique animated SVG patterns for your web and design projects. Great for Figma, Framer, Webflow and video projects."
				}), (0, i.jsxs)("h3", {
					className: "text-xs text-neutral-500 my-4",
					children: ["Made with", " ", (0, i.jsx)("a", {
						className: "hover:text-neutral-700 dark:hover:text-neutral-300",
						href: "https://x.com/MengTo/status/1808395014881566761",
						children: (0, i.jsx)("b", {
							children: "Claude AI"
						})
					}), " ", "by", " ", (0, i.jsx)("a", {
						className: "hover:text-neutral-700 dark:hover:text-neutral-300",
						href: "https://designcode.io",
						children: (0, i.jsx)("b", {
							children: "DesignCode"
						})
					})]
				}), (0, i.jsx)("hr", {
					className: "h-px my-4 border-0 bg-neutral-200 lg:bg-neutral-300 dark:bg-neutral-900 lg:dark:bg-neutral-800"
				}), (0, i.jsxs)("nav", {
					className: "grid gap-2 pb-16",
					children: [(0, i.jsxs)("ul", {
						className: "flex flex-wrap gap-8 justify-left text-xs text-neutral-500 dark:text-neutral-400",
						children: [(0, i.jsx)("li", {
							children: (0, i.jsx)("a", {
								href: "https://designcode.io",
								target: "_blank",
								className: "hover:text-neutral-700 dark:hover:text-neutral-300",
								children: "Courses"
							})
						}), (0, i.jsx)("li", {
							children: (0, i.jsx)("a", {
								href: "https://designcodeui.com",
								target: "_blank",
								className: "hover:text-neutral-700 dark:hover:text-neutral-300",
								children: "UI Kit"
							})
						}), (0, i.jsx)("li", {
							children: (0, i.jsx)("a", {
								href: "https://angle.sh",
								target: "_blank",
								className: "hover:text-neutral-700 dark:hover:text-neutral-300",
								children: "Mockups"
							})
						}), (0, i.jsx)("li", {
							children: (0, i.jsx)("a", {
								href: "https://shape.so",
								target: "_blank",
								className: "hover:text-neutral-700 dark:hover:text-neutral-300",
								children: "Icons"
							})
						})]
					}), (0, i.jsxs)("ul", {
						className: "flex flex-wrap gap-8 justify-left text-[11px] text-neutral-500 dark:text-neutral-400",
						children: [(0, i.jsx)("li", {
							children: (0, i.jsx)("a", {
								href: "https://designcode.io/terms",
								target: "_blank",
								className: "hover:text-neutral-700 dark:hover:text-neutral-300 opacity-50",
								children: "Terms"
							})
						}), (0, i.jsx)("li", {
							children: (0, i.jsx)("a", {
								href: "https://designcode.io/privacy",
								target: "_blank",
								className: "hover:text-neutral-700 dark:hover:text-neutral-300 opacity-50",
								children: "Privacy"
							})
						})]
					})]
				})]
			}),
			Rf = h("Copy", [
				["rect", {
					width: "14",
					height: "14",
					x: "8",
					y: "8",
					rx: "2",
					ry: "2",
					key: "17jyea"
				}],
				["path", {
					d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
					key: "zix9uf"
				}]
			]),
			Af = h("Download", [
				["path", {
					d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
					key: "ih7n3h"
				}],
				["polyline", {
					points: "7 10 12 15 17 10",
					key: "2ggqvy"
				}],
				["line", {
					x1: "12",
					x2: "12",
					y1: "15",
					y2: "3",
					key: "1vk2je"
				}]
			]),
			Pf = e => {
				let {
					message: t,
					onClose: n
				} = e;
				return (0, i.jsxs)("div", {
					id: "toast-danger",
					className: "flex items-start w-full max-w-xs p-2 mb-4 text-neutral-500 bg-white rounded-lg shadow dark:text-neutral-400 dark:bg-neutral-800 fixed top-0 right-4",
					role: "alert",
					children: [(0, i.jsxs)("div", {
						className: "inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200",
						children: [(0, i.jsx)("svg", {
							className: "w-4 h-4",
							"aria-hidden": "true",
							xmlns: "http://www.w3.org/2000/svg",
							fill: "currentColor",
							viewBox: "0 0 20 20",
							children: (0, i.jsx)("path", {
								d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
							})
						}), (0, i.jsx)("span", {
							className: "sr-only",
							children: "Error icon"
						})]
					}), (0, i.jsx)("div", {
						className: "ms-3 text-xs font-normal",
						children: t
					}), (0, i.jsxs)("button", {
						type: "button",
						className: "ms-auto -mx-1.5 -my-1.5 bg-white text-neutral-400 hover:text-neutral-900 rounded-lg focus:ring-2 focus:ring-neutral-300 p-1.5 hover:bg-neutral-100 inline-flex items-center justify-center h-8 w-8 dark:text-neutral-500 dark:hover:text-white dark:bg-neutral-800 dark:hover:bg-neutral-700",
						"data-dismiss-target": "#toast-danger",
						"aria-label": "Close",
						onClick: n,
						children: [(0, i.jsx)("span", {
							className: "sr-only",
							children: "Close"
						}), (0, i.jsx)("svg", {
							className: "w-3 h-3",
							"aria-hidden": "true",
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 14 14",
							children: (0, i.jsx)("path", {
								stroke: "currentColor",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: "2",
								d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
							})
						})]
					})]
				})
			},
			jf = t => {
				let {
					svgRef: n,
					backgroundColor: a,
					width: s,
					height: o,
					isPaidUser: l,
					setShowPricingModal: c,
					aspectRatio: u,
					generatePattern: d,
					animationDuration: h,
					backgroundType: f,
					gradientColor1: p,
					gradientColor2: g,
					gradientAngle: m,
					radialGradientRadius: v,
					shapeColorType: y,
					shapeColor: b,
					shapeGradientColor1: w,
					shapeGradientColor2: x,
					shapeGradientAngle: k,
					shapeRadialGradientRadius: S
				} = t;
				const [C, _] = (0, e.useState)(!1), [T, I] = (0, e.useState)(0), [N, R] = (0, e.useState)(!1), [A, P] = (0, e.useState)(""), j = (0, e.useRef)(null), D = (0, e.useRef)(null), [O, L] = (0, e.useState)("720p"), [M, F] = (0, e.useState)(5), U = {
					"720p": {
						width: 1280,
						height: 720
					},
					"1080p": {
						width: 1920,
						height: 1080
					},
					"4K": {
						width: 3840,
						height: 2160
					},
					"5K": {
						width: 5120,
						height: 2880
					},
					"6K": {
						width: 6016,
						height: 3384
					},
					"8K": {
						width: 7680,
						height: 4320
					}
				}, V = 30 * M;
				(0, e.useEffect)((() => {
					D.current = document.createElement("canvas");
					const {
						width: e,
						height: t
					} = z(U[O].width, U[O].height);
					D.current.width = e, D.current.height = t
				}), [O, u]);
				const z = (e, t) => {
						const [n, r] = u.split(":").map(Number), i = n / r;
						return e / t > i ? {
							width: Math.round(t * i),
							height: t
						} : {
							width: e,
							height: Math.round(e / i)
						}
					},
					B = (0, e.useCallback)((() => {
						let e = "",
							t = "";
						switch (f) {
							case "linear":
								e = '\n          <linearGradient id="backgroundGradient" gradientTransform="rotate('.concat(m, ')">\n            <stop offset="0%" stop-color="').concat(p, '" />\n            <stop offset="100%" stop-color="').concat(g, '" />\n          </linearGradient>\n        ');
								break;
							case "radial":
								e = '\n          <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="'.concat(v, '%">\n            <stop offset="0%" stop-color="').concat(p, '" />\n            <stop offset="100%" stop-color="').concat(g, '" />\n          </radialGradient>\n        ')
						}
						switch (y) {
							case "linear":
								t = '\n          <linearGradient id="shapeGradient" gradientTransform="rotate('.concat(k, ')">\n            <stop offset="0%" stop-color="').concat(w, '" />\n            <stop offset="100%" stop-color="').concat(x, '" />\n          </linearGradient>\n        ');
								break;
							case "radial":
								t = '\n          <radialGradient id="shapeGradient" cx="50%" cy="50%" r="'.concat(S, '%">\n            <stop offset="0%" stop-color="').concat(w, '" />\n            <stop offset="100%" stop-color="').concat(x, '" />\n          </radialGradient>\n        ')
						}
						return e + t
					}), [f, m, p, g, y, k, w, x, v, S]),
					G = (0, e.useCallback)((() => "solid" === f ? a : "url(#backgroundGradient)"), [f, a]),
					q = (0, e.useCallback)(((t, n) => {
						const a = d(n),
							l = r.renderToString((0, i.jsx)("g", {
								children: a.map(((t, n) => e.cloneElement(t, {
									key: n
								})))
							})),
							c = '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(s, '" height="').concat(o, '" viewBox="0 0 ').concat(s, " ").concat(o, '">\n          <defs>').concat(B(), '</defs>\n          <rect width="100%" height="100%" fill="').concat(G(), '" />\n          ').concat(l, "\n        </svg>\n      "),
							{
								width: u,
								height: h
							} = z(U[O].width, U[O].height),
							f = Math.min(u / s, h / o),
							p = s * f,
							g = o * f,
							m = (u - p) / 2,
							v = (h - g) / 2,
							y = new Image;
						y.onload = () => {
							t.clearRect(0, 0, u, h), t.drawImage(y, m, v, p, g)
						}, y.src = "data:image/svg+xml;base64,".concat(btoa(unescape(encodeURIComponent(c))))
					}), [s, o, O, d, B, G, z]),
					H = (0, e.useCallback)((() => {
						if (!D.current) return P("Canvas element not found"), void R(!0);
						const e = D.current.getContext("2d");
						if (!e) return P("Unable to get canvas context"), void R(!0);
						const t = D.current.captureStream(30),
							n = (() => {
								const e = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm", "video/mp4"];
								for (const t of e)
									if (MediaRecorder.isTypeSupported(t)) return t;
								return null
							})();
						if (!n) return P("No supported video MIME type found"), void R(!0);
						try {
							j.current = new MediaRecorder(t, {
								mimeType: n
							})
						} catch (s) {
							return P("Failed to create MediaRecorder"), void R(!0)
						}
						const r = [];
						j.current.ondataavailable = e => {
							e.data.size > 0 && r.push(e.data)
						}, j.current.onstop = () => {
							const e = new Blob(r, {
									type: n
								}),
								t = URL.createObjectURL(e),
								i = document.createElement("a");
							document.body.appendChild(i), i.style.display = "none", i.href = t, i.download = "pattern-animation-".concat(O, "-").concat(u.replace(":", "x"), "-").concat(M, "s.").concat(n.includes("webm") ? "webm" : "mp4"), i.click(), URL.revokeObjectURL(t), _(!1), I(100)
						}, j.current.start(), _(!0), I(0);
						let i = 0;
						const a = () => {
							if (i >= V) return void(j.current && "recording" === j.current.state && j.current.stop());
							q(e, i / V % 1), i++, I(i / V * 100), requestAnimationFrame(a)
						};
						a()
					}), [q, O, u, V, M]),
					W = (0, e.useCallback)((() => {
						"720p" === O || l ? (P(""), R(!1), H()) : c(!0)
					}), [O, l, c, H]),
					K = "720p" !== O && !l;
				return (0, i.jsxs)("div", {
					className: "space-y-4",
					children: [(0, i.jsxs)("div", {
						children: [(0, i.jsxs)("label", {
							htmlFor: "duration",
							className: "block text-xs font-medium mb-2",
							children: ["Video Duration: ", M, " seconds"]
						}), (0, i.jsx)("input", {
							type: "range",
							id: "duration",
							min: "1",
							max: "30",
							value: M,
							onChange: e => F(Number(e.target.value)),
							className: "w-full h-2 bg-neutral-200 lg:bg-neutral-300 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
						})]
					}), (0, i.jsxs)("div", {
						children: [(0, i.jsx)("label", {
							className: "block text-xs font-medium mb-2",
							children: "Resolution:"
						}), (0, i.jsx)("ul", {
							className: "flex flex-wrap text-xs font-medium text-center text-gray-500 dark:text-gray-400",
							children: Object.keys(U).map((e => (0, i.jsx)("li", {
								className: "flex-1",
								children: (0, i.jsx)("a", {
									href: "#",
									onClick: t => {
										t.preventDefault(), L(e)
									},
									className: "flex items-center justify-center w-full h-10 px-4 rounded-lg ".concat(O === e ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
									"aria-current": O === e ? "page" : void 0,
									children: e
								})
							}, e)))
						})]
					}), (0, i.jsx)("button", {
						className: "bg-neutral-800 ml-auto hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
						onClick: W,
						disabled: C,
						children: C ? (0, i.jsxs)(i.Fragment, {
							children: ["Exporting Video... ", Math.round(T), "%"]
						}) : (0, i.jsxs)(i.Fragment, {
							children: [K ? (0, i.jsx)(E, {
								className: "mr-2 h-4 w-4"
							}) : (0, i.jsx)(Af, {
								className: "mr-2 h-4 w-4"
							}), "Export Video"]
						})
					}), N && A && (0, i.jsx)(Pf, {
						message: A,
						onClose: () => R(!1)
					})]
				})
			},
			Df = t => {
				let {
					svgRef: n,
					backgroundColor: r,
					width: a,
					height: s,
					isPaidUser: o,
					aspectRatio: l,
					setShowPricingModal: c
				} = t;
				const [u, d] = (0, e.useState)("720p"), [h, f] = (0, e.useState)(!1), [p, g] = (0, e.useState)(!1), [m, v] = (0, e.useState)(null), [y, b] = (0, e.useState)("idle"), [w, x] = (0, e.useState)("idle"), k = {
					"720p": {
						width: 1280,
						height: 720
					},
					"1080p": {
						width: 1920,
						height: 1080
					},
					"4K": {
						width: 3840,
						height: 2160
					},
					"5K": {
						width: 5120,
						height: 2880
					},
					"6K": {
						width: 6016,
						height: 3384
					},
					"8K": {
						width: 7680,
						height: 4320
					}
				}, S = (0, e.useCallback)((async () => new Promise((e => {
					if (!n.current) return v("SVG element not found"), g(!0), void e(null);
					const t = document.createElement("canvas"),
						i = t.getContext("2d");
					if (!i) return v("Unable to get canvas context"), g(!0), void e(null);
					const {
						width: o,
						height: c
					} = k[u], {
						width: d,
						height: f
					} = ((e, t) => {
						const [n, r] = l.split(":").map(Number), i = n / r;
						return e / t > i ? {
							width: Math.round(t * i),
							height: t
						} : {
							width: e,
							height: Math.round(e / i)
						}
					})(o, c);
					t.width = d, t.height = f;
					const p = (new XMLSerializer).serializeToString(n.current),
						m = new Image;
					m.onload = () => {
						h || (i.fillStyle = r, i.fillRect(0, 0, d, f));
						const n = Math.min(d / a, f / s),
							o = a * n,
							l = s * n,
							c = (d - o) / 2,
							u = (f - l) / 2;
						i.drawImage(m, c, u, o, l), t.toBlob((t => {
							e(t)
						}), "image/png")
					}, m.src = "data:image/svg+xml;base64,".concat(btoa(unescape(encodeURIComponent(p))))
				}))), [n, r, a, s, u, h, l]), C = (0, e.useCallback)((async () => {
					if ("720p" !== u && !o) return void c(!0);
					const e = await S();
					if (e) try {
						await navigator.clipboard.write([new ClipboardItem({
							"image/png": e
						})]), b("copied"), setTimeout((() => b("idle")), 2e3)
					} catch (t) {
						console.error("Error copying PNG:", t), v("Failed to copy PNG to clipboard"), g(!0)
					}
				}), [u, o, S, c]), _ = (0, e.useCallback)((async () => {
					if ("720p" !== u && !o) return void c(!0);
					const e = await S();
					if (!e) return;
					const t = URL.createObjectURL(e),
						n = document.createElement("a");
					n.href = t, n.download = "pattern-".concat(u, "-").concat(l.replace(":", "x")).concat(h ? "-transparent" : "", ".png"), document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(t), x("downloaded"), setTimeout((() => x("idle")), 2e3)
				}), [u, o, S, h, l, c]), T = "720p" !== u && !o;
				return (0, i.jsxs)("div", {
					className: "space-y-4",
					children: [(0, i.jsxs)("div", {
						children: [(0, i.jsx)("label", {
							className: "block text-xs font-medium mb-2",
							children: "Resolution:"
						}), (0, i.jsx)("ul", {
							className: "flex flex-wrap text-xs font-medium text-center text-gray-500 dark:text-gray-400",
							children: Object.keys(k).map((e => (0, i.jsx)("li", {
								className: "flex-1",
								children: (0, i.jsx)("a", {
									href: "#",
									onClick: t => {
										t.preventDefault(), d(e)
									},
									className: "flex items-center justify-center w-full h-10 px-4 rounded-lg ".concat(u === e ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
									"aria-current": u === e ? "page" : void 0,
									children: e
								})
							}, e)))
						})]
					}), (0, i.jsxs)("div", {
						className: "flex items-center",
						children: [(0, i.jsx)("input", {
							type: "checkbox",
							id: "transparentBackground",
							checked: h,
							onChange: e => f(e.target.checked),
							className: "mr-2"
						}), (0, i.jsx)("label", {
							htmlFor: "transparentBackground",
							className: "text-xs font-medium",
							children: "Transparent Background"
						})]
					}), (0, i.jsxs)("div", {
						className: "flex space-x-2 justify-between",
						children: [(0, i.jsx)("button", {
							className: "bg-neutral-800 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
							onClick: C,
							children: "idle" === y ? (0, i.jsxs)(i.Fragment, {
								children: [T ? (0, i.jsx)(E, {
									className: "mr-2 h-4 w-4"
								}) : (0, i.jsx)(Rf, {
									className: "mr-2 h-4 w-4"
								}), "Copy PNG"]
							}) : "Copied!"
						}), (0, i.jsx)("button", {
							className: "bg-neutral-800 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
							onClick: _,
							children: "idle" === w ? (0, i.jsxs)(i.Fragment, {
								children: [T ? (0, i.jsx)(E, {
									className: "mr-2 h-4 w-4"
								}) : (0, i.jsx)(Af, {
									className: "mr-2 h-4 w-4"
								}), "Download PNG"]
							}) : "Downloaded!"
						})]
					}), p && m && (0, i.jsx)(Pf, {
						message: m,
						onClose: () => g(!1)
					})]
				})
			};
		var Of = n(194),
			Lf = n.n(Of);
		const Mf = {
				"Space Grotesk": "https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXskPMBBSSJLm2E.woff2",
				Inter: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2",
				Manrope: "https://fonts.gstatic.com/s/manrope/v13/xn7gYHE41ni1AdIRggexSvfedN4.woff2",
				"Plus Jakarta Sans": "https://fonts.gstatic.com/s/plusjakartasans/v7/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_KU7NSg.woff2",
				Roboto: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
				Futura: "https://fonts.cdnfonts.com/s/12033/FuturaCyrillicMedium.woff",
				"Open Sans": "https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2",
				Lato: "https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXiWtFCc.woff2",
				"Comic Sans MS": "https://fonts.cdnfonts.com/s/29573/COMIC.woff"
			},
			Ff = t => {
				let {
					svgRef: n,
					backgroundColor: a,
					width: s,
					height: o,
					isPaidUser: l,
					generatePattern: c,
					animationDuration: u,
					aspectRatio: d,
					fontFamily: h,
					backgroundType: f,
					gradientColor1: p,
					gradientColor2: g,
					gradientAngle: m,
					radialGradientRadius: v,
					shapeColorType: y,
					shapeColor: b,
					shapeGradientColor1: w,
					shapeGradientColor2: x,
					shapeGradientAngle: k,
					shapeRadialGradientRadius: S,
					setShowPricingModal: C
				} = t;
				const [_, T] = (0, e.useState)(!1), [I, N] = (0, e.useState)(0), [R, A] = (0, e.useState)(!1), [P, j] = (0, e.useState)(null), D = (0, e.useRef)(null), [O, L] = (0, e.useState)(5), [M, F] = (0, e.useState)("360p"), [U, V] = (0, e.useState)(!1), [z, B] = (0, e.useState)(!1), G = {
					"360p": {
						width: 640,
						height: 360
					},
					"480p": {
						width: 854,
						height: 480
					},
					"720p": {
						width: 1280,
						height: 720
					},
					"1080p": {
						width: 1920,
						height: 1080
					}
				};
				(0, e.useEffect)((() => {
					(async () => {
						const e = new FontFace(h, "url(".concat(Mf[h], ")"));
						try {
							await e.load(), document.fonts.add(e), B(!0)
						} catch (t) {
							console.error("Error loading font:", t), B(!0)
						}
					})()
				}), [h]);
				const q = (e, t) => {
						const [n, r] = d.split(":").map(Number), i = n / r;
						return e / t > i ? {
							width: Math.round(t * i),
							height: t
						} : {
							width: e,
							height: Math.round(e / i)
						}
					},
					H = (0, e.useCallback)((() => {
						let e = "<defs>";
						return "linear" === f ? e += '\n        <linearGradient id="backgroundGradient" gradientTransform="rotate('.concat(m, ', 0.5, 0.5)">\n          <stop offset="0%" stop-color="').concat(p, '" />\n          <stop offset="100%" stop-color="').concat(g, '" />\n        </linearGradient>\n      ') : "radial" === f && (e += '\n        <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="'.concat(v, '%">\n          <stop offset="0%" stop-color="').concat(p, '" />\n          <stop offset="100%" stop-color="').concat(g, '" />\n        </radialGradient>\n      ')), "linear" === y ? e += '\n        <linearGradient id="shapeGradient" gradientTransform="rotate('.concat(k, ', 0.5, 0.5)">\n          <stop offset="0%" stop-color="').concat(w, '" />\n          <stop offset="100%" stop-color="').concat(x, '" />\n        </linearGradient>\n      ') : "radial" === y && (e += '\n        <radialGradient id="shapeGradient" cx="50%" cy="50%" r="'.concat(S, '%">\n          <stop offset="0%" stop-color="').concat(w, '" />\n          <stop offset="100%" stop-color="').concat(x, '" />\n        </radialGradient>\n      ')), e += "</defs>", e
					}), [f, p, g, m, v, y, w, x, k, S]),
					W = (0, e.useCallback)((() => "solid" === f ? a : "url(#backgroundGradient)"), [f, a]),
					K = (0, e.useCallback)(((t, n) => {
						const {
							width: l,
							height: u
						} = q(G[M].width, G[M].height), d = Math.min(l / s, u / o), h = s * d, f = o * d, p = (l - h) / 2, g = (u - f) / 2;
						t.clearRect(0, 0, l, u);
						const m = c(n),
							v = r.renderToString((0, i.jsx)("g", {
								children: m.map(((t, n) => e.cloneElement(t, {
									key: n
								})))
							})),
							y = '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(s, '" height="').concat(o, '" viewBox="0 0 ').concat(s, " ").concat(o, '">\n          ').concat(H(), '\n          <rect width="').concat(s, '" height="').concat(o, '" fill="').concat(W(), '" />\n          ').concat(v, "\n        </svg>\n      ");
						return new Promise(((e, n) => {
							const r = new Image;
							r.onload = () => {
								U || (t.fillStyle = a, t.fillRect(0, 0, l, u)), t.drawImage(r, p, g, h, f), e()
							}, r.onerror = e => {
								console.error("Error loading image:", e), n(e)
							}, r.src = "data:image/svg+xml;base64,".concat(btoa(unescape(encodeURIComponent(y))))
						}))
					}), [s, o, M, a, U, c, H, W]),
					Q = (0, e.useCallback)((async () => {
						if (console.log("Starting GIF generation"), !D.current) return console.error("Canvas element not found"), j("Canvas element not found"), void A(!0);
						const e = D.current.getContext("2d", {
							alpha: !0
						});
						if (!e) return console.error("Unable to get canvas context"), j("Unable to get canvas context"), void A(!0);
						T(!0), N(0);
						const {
							width: t,
							height: n
						} = G[M], {
							width: r,
							height: i
						} = q(t, n);
						D.current.width = r, D.current.height = i;
						const a = 30 * O;
						console.log("Generating GIF with ".concat(a, " frames"));
						const s = new(Lf())({
							workers: 2,
							quality: 10,
							width: r,
							height: i,
							workerScript: "gif.worker.js",
							transparent: U ? "rgba(0,0,0,0)" : void 0
						});
						s.on("progress", (e => {
							console.log("GIF encoding progress: ".concat(100 * e, "%")), N(50 + 50 * e)
						}));
						for (let l = 0; l < a; l++) {
							const t = l / a;
							try {
								await K(e, t), s.addFrame(e, {
									copy: !0,
									delay: 1e3 / 30
								}), N(l / a * 50), console.log("Added frame ".concat(l + 1, "/").concat(a))
							} catch (o) {
								return console.error("Error adding frame ".concat(l, ":"), o), j("Error generating frame ".concat(l)), A(!0), void T(!1)
							}
						}
						console.log("All frames added, rendering GIF"), s.render(), s.on("finished", (e => {
							console.log("GIF generation finished");
							const t = URL.createObjectURL(e),
								n = document.createElement("a");
							n.href = t, n.download = "pattern-animation-".concat(M, "-").concat(d.replace(":", "x")).concat(U ? "-transparent" : "", ".gif"), n.click(), URL.revokeObjectURL(t), T(!1), N(100)
						}))
					}), [K, O, M, 30, U, d]),
					X = (0, e.useCallback)((() => {
						if ("360p" === M || l) {
							if (!z) return console.log("Font not loaded yet"), j("Please wait for the font to load"), void A(!0);
							console.log("Starting GIF export process"), j(null), A(!1), Q()
						} else C(!0)
					}), [Q, l, z, M, C]),
					Y = "360p" !== M && !l;
				return (0, i.jsxs)("div", {
					className: "space-y-4",
					children: [(0, i.jsxs)("div", {
						children: [(0, i.jsxs)("label", {
							htmlFor: "gifDuration",
							className: "block text-xs font-medium mb-2",
							children: ["GIF Duration: ", O, " seconds"]
						}), (0, i.jsx)("input", {
							type: "range",
							id: "gifDuration",
							min: "1",
							max: "30",
							value: O,
							onChange: e => L(Number(e.target.value)),
							className: "w-full h-2 bg-neutral-200 lg:bg-neutral-300 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
						})]
					}), (0, i.jsxs)("div", {
						children: [(0, i.jsx)("label", {
							className: "block text-xs font-medium mb-2",
							children: "Resolution:"
						}), (0, i.jsx)("ul", {
							className: "flex flex-wrap text-xs font-medium text-center text-gray-500 dark:text-gray-400",
							children: Object.keys(G).map((e => (0, i.jsx)("li", {
								className: "flex-1",
								children: (0, i.jsx)("a", {
									href: "#",
									onClick: t => {
										t.preventDefault(), F(e)
									},
									className: "flex items-center justify-center w-full h-10 px-4 rounded-lg ".concat(M === e ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
									"aria-current": M === e ? "page" : void 0,
									children: e
								})
							}, e)))
						})]
					}), (0, i.jsxs)("div", {
						className: "flex items-center",
						children: [(0, i.jsx)("input", {
							type: "checkbox",
							id: "transparentBackground",
							checked: U,
							onChange: e => V(e.target.checked),
							className: "mr-2"
						}), (0, i.jsx)("label", {
							htmlFor: "transparentBackground",
							className: "text-xs font-medium",
							children: "Transparent Background"
						})]
					}), (0, i.jsx)("button", {
						className: "bg-neutral-800 ml-auto hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center ".concat(_ ? "opacity-50 cursor-not-allowed" : ""),
						onClick: X,
						disabled: _ || !z,
						children: _ ? (0, i.jsxs)(i.Fragment, {
							children: ["Exporting GIF... ", Math.round(I), "%"]
						}) : (0, i.jsxs)(i.Fragment, {
							children: [Y ? (0, i.jsx)(E, {
								className: "mr-2 h-4 w-4"
							}) : (0, i.jsx)(Af, {
								className: "mr-2 h-4 w-4"
							}), "Export GIF"]
						})
					}), R && P && (0, i.jsx)(Pf, {
						message: P,
						onClose: () => A(!1)
					}), (0, i.jsx)("canvas", {
						ref: D,
						style: {
							display: "none"
						}
					})]
				})
			},
			Uf = t => {
				let {
					generateSVGContent: n,
					svgRef: r,
					aspectRatio: a,
					isPaidUser: s,
					generatePattern: o,
					animationProgress: l,
					setShowPricingModal: c,
					...u
				} = t;
				const [d, h] = (0, e.useState)("svg"), [f, p] = (0, e.useState)("idle"), [g, m] = (0, e.useState)("idle"), v = {
					svg: "SVG",
					video: "Video",
					png: "PNG",
					gif: "GIF"
				}, y = (0, e.useCallback)((() => {
					const e = n(l);
					navigator.clipboard.writeText(e).then((() => {
						p("copied"), setTimeout((() => p("idle")), 2e3)
					}))
				}), [n, l]), b = (0, e.useCallback)((() => {
					if (!s) return void c(!0);
					let e, t, r;
					e = n(l), t = "".concat(u.patternType, "-pattern-").concat(a.replace(":", "x"), ".svg"), r = "image/svg+xml";
					const i = new Blob([e], {
							type: "image/svg+xml"
						}),
						o = URL.createObjectURL(i),
						d = document.createElement("a");
					d.href = o, d.download = t, document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(o), m("downloaded"), setTimeout((() => m("idle")), 2e3)
				}), [n, u.patternType, a, s, l, c]);
				return (0, i.jsxs)("div", {
					className: "mt-4",
					children: [(0, i.jsx)("div", {
						className: "block text-xs font-medium mb-2",
						children: "Export:"
					}), (0, i.jsx)("ul", {
						className: "flex flex-wrap text-xs font-medium text-center text-gray-500 dark:text-gray-400",
						children: Object.keys(v).map((e => (0, i.jsx)("li", {
							className: "flex-1",
							children: (0, i.jsx)("a", {
								href: "#",
								onClick: t => {
									t.preventDefault(), h(e)
								},
								className: "flex items-center justify-center w-full h-10 px-4 rounded-lg ".concat(d === e ? "text-white bg-neutral-800 hover:bg-neutral-700" : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-white"),
								"aria-current": d === e ? "page" : void 0,
								children: v[e]
							})
						}, e)))
					}), (0, i.jsxs)("div", {
						className: "mt-4",
						children: ["svg" === d && (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsx)("p", {
								className: "text-xs mb-2",
								children: "SVG Code:"
							}), (0, i.jsx)("pre", {
								className: "bg-white dark:bg-neutral-800 p-2 rounded-lg text-xs max-h-[10rem] text-left overflow-x-auto text-neutral-600 dark:text-neutral-400",
								children: n()
							}), (0, i.jsxs)("div", {
								className: "mt-4 flex space-x-2 w-full justify-between",
								children: [(0, i.jsx)("button", {
									className: "bg-neutral-800 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
									onClick: y,
									children: "idle" === f ? (0, i.jsxs)(i.Fragment, {
										children: [(0, i.jsx)(Rf, {
											className: "mr-2 h-4 w-4"
										}), "Copy SVG"]
									}) : "Copied!"
								}), (0, i.jsx)("button", {
									className: "bg-neutral-800 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
									onClick: b,
									children: "idle" === g ? (0, i.jsxs)(i.Fragment, {
										children: [s ? (0, i.jsx)(Af, {
											className: "mr-2 h-4 w-4"
										}) : (0, i.jsx)(E, {
											className: "mr-2 h-4 w-4"
										}), "Download SVG"]
									}) : "Downloaded!"
								})]
							})]
						}), "video" === d && (0, i.jsx)(jf, {
							svgRef: r,
							backgroundColor: u.backgroundColor,
							width: u.width,
							height: u.height,
							isPaidUser: s,
							setShowPricingModal: c,
							aspectRatio: a,
							generatePattern: o,
							animationDuration: u.animationDuration,
							backgroundType: u.backgroundType,
							gradientColor1: u.gradientColor1,
							gradientColor2: u.gradientColor2,
							gradientAngle: u.gradientAngle,
							radialGradientRadius: u.radialGradientRadius,
							shapeColorType: u.shapeColorType,
							shapeColor: u.shapeColor,
							shapeGradientColor1: u.shapeGradientColor1,
							shapeGradientColor2: u.shapeGradientColor2,
							shapeGradientAngle: u.shapeGradientAngle,
							shapeRadialGradientRadius: u.shapeRadialGradientRadius
						}), "png" === d && (0, i.jsx)(Df, {
							svgRef: r,
							backgroundColor: u.backgroundColor,
							width: u.width,
							height: u.height,
							isPaidUser: s,
							aspectRatio: a,
							setShowPricingModal: c
						}), "gif" === d && (0, i.jsx)(Ff, {
							svgRef: r,
							backgroundColor: u.backgroundColor,
							width: u.width,
							height: u.height,
							isPaidUser: s,
							generatePattern: o,
							animationDuration: u.animationDuration,
							aspectRatio: a,
							fontFamily: u.fontFamily,
							backgroundType: u.backgroundType,
							gradientColor1: u.gradientColor1,
							gradientColor2: u.gradientColor2,
							gradientAngle: u.gradientAngle,
							radialGradientRadius: u.radialGradientRadius,
							shapeColorType: u.shapeColorType,
							shapeColor: u.shapeColor,
							shapeGradientColor1: u.shapeGradientColor1,
							shapeGradientColor2: u.shapeGradientColor2,
							shapeGradientAngle: u.shapeGradientAngle,
							shapeRadialGradientRadius: u.shapeRadialGradientRadius,
							setShowPricingModal: c
						})]
					})]
				})
			},
			Vf = h("X", [
				["path", {
					d: "M18 6 6 18",
					key: "1bl5f8"
				}],
				["path", {
					d: "m6 6 12 12",
					key: "d8bk6v"
				}]
			]),
			zf = h("Plus", [
				["path", {
					d: "M5 12h14",
					key: "1ays0h"
				}],
				["path", {
					d: "M12 5v14",
					key: "s699le"
				}]
			]),
			Bf = (0, e.forwardRef)(((t, n) => {
				//hack: remove saved designs by ezshine
				return null;
				let {
					user: r,
					currentUrl: a,
					onDesignSelect: s,
					backgroundColor: o,
					shapeColor: l,
					patternType: c,
					backgroundType: u,
					gradientColor1: d,
					gradientColor2: h,
					gradientAngle: f,
					shapeColorType: p,
					shapeGradientColor1: g,
					shapeGradientColor2: m,
					shapeGradientAngle: v
				} = t;
				const [b, w] = (0, e.useState)([]), [x, k] = (0, e.useState)(!1), [S, C] = (0, e.useState)(null), _ = async () => {
					if (!r) return;
					const e = function(e, t) {
							let n = [];
							for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) i[a - 2] = arguments[a];
							t instanceof Uc && n.push(t), n = n.concat(i),
								function(e) {
									const t = e.filter((e => e instanceof Bc)).length,
										n = e.filter((e => e instanceof zc)).length;
									if (t > 1 || t > 0 && n > 0) throw new cn(ln.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")
								}(n);
							for (const s of n) e = s._apply(e);
							return e
						}(lc(Sf, "savedDesigns"), function(e, t, n) {
							const r = t,
								i = Mc("where", e);
							return zc._create(i, r, n)
						}("userId", "==", r.uid)),
						t = await tu(e),
						n = [];
					t.forEach((e => {
						const t = e.data();
						n.push({
							...t,
							id: e.id,
							url: E(t.url),
							isDeleting: !1
						})
					})), w(n)
				};
				(0, e.useImperativeHandle)(n, (() => ({
					loadSavedDesigns: _
				}))), (0, e.useEffect)((() => {
					r && _()
				}), [r]);
				const E = e => {
						const t = new URL(e);
						return t.pathname + t.search + t.hash
					},
					T = e => {
						const t = N(e);
						return "custom" === e.patternType ? (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsx)("text", {
								x: "50",
								y: "38",
								fontSize: "20px",
								textAnchor: "middle",
								dominantBaseline: "middle",
								fill: t,
								children: "Custom"
							}), (0, i.jsx)("text", {
								x: "50",
								y: "68",
								fontSize: "20px",
								textAnchor: "middle",
								dominantBaseline: "middle",
								fill: t,
								children: "SVG"
							})]
						}) : y[e.patternType] ? y[e.patternType].render({
							posX: 50,
							posY: 50,
							size: 50,
							shapeProps: {
								fill: t
							}
						}) : null
					},
					I = e => "solid" === e.backgroundType ? {
						backgroundColor: e.backgroundColor
					} : "linear" === e.backgroundType ? {
						background: "linear-gradient(".concat(e.gradientAngle, "deg, ").concat(e.gradientColor1, ", ").concat(e.gradientColor2, ")")
					} : "radial" === e.backgroundType ? {
						background: "radial-gradient(circle, ".concat(e.gradientColor1, ", ").concat(e.gradientColor2, ")")
					} : {
						backgroundColor: e.backgroundColor
					},
					N = e => "solid" === e.shapeColorType ? e.shapeColor : "linear" === e.shapeColorType ? "url(#shapeGradient-".concat(e.id, ")") : "radial" === e.shapeColorType ? "url(#shapeRadialGradient-".concat(e.id, ")") : e.shapeColor;
				return (0, i.jsxs)("div", {
					className: "my-4",
					children: [(0, i.jsx)("h2", {
						className: "text-xs font-medium mb-2",
						children: "Saved Designs:"
					}), r ? (0, i.jsxs)("div", {
						className: "flex gap-2 flex-wrap",
						children: [b.map((e => (0, i.jsxs)("div", {
							className: "relative",
							children: [(0, i.jsx)("button", {
								onClick: t => {
									t.preventDefault(), s(e.url), C(e.id)
								},
								onFocus: () => C(e.id),
								onBlur: () => C(null),
								className: "w-8 h-8 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 ".concat(S === e.id ? "ring-2 ring-blue-500" : "", " ").concat(e.isDeleting ? "opacity-50" : ""),
								style: I(e),
								disabled: e.isDeleting,
								children: (0, i.jsxs)("svg", {
									viewBox: "0 0 100 100",
									className: "w-full h-full",
									children: [(0, i.jsxs)("defs", {
										children: ["linear" === e.shapeColorType && (0, i.jsxs)("linearGradient", {
											id: "shapeGradient-".concat(e.id),
											x1: "0%",
											y1: "0%",
											x2: "100%",
											y2: "0%",
											gradientTransform: "rotate(".concat(e.shapeGradientAngle, ")"),
											children: [(0, i.jsx)("stop", {
												offset: "0%",
												stopColor: e.shapeGradientColor1
											}), (0, i.jsx)("stop", {
												offset: "100%",
												stopColor: e.shapeGradientColor2
											})]
										}), "radial" === e.shapeColorType && (0, i.jsxs)("radialGradient", {
											id: "shapeRadialGradient-".concat(e.id),
											children: [(0, i.jsx)("stop", {
												offset: "0%",
												stopColor: e.shapeGradientColor1
											}), (0, i.jsx)("stop", {
												offset: "100%",
												stopColor: e.shapeGradientColor2
											})]
										})]
									}), T(e)]
								})
							}), S === e.id && (0, i.jsx)("button", {
								onClick: t => {
									t.preventDefault(), t.stopPropagation(), (async e => {
										if (r) {
											w((t => t.map((t => t.id === e ? {
												...t,
												isDeleting: !0
											} : t))));
											try {
												await ru(cc(Sf, "savedDesigns", e)), w((t => t.filter((t => t.id !== e))))
											} catch (t) {
												console.error("Error deleting design:", t), w((t => t.map((t => t.id === e ? {
													...t,
													isDeleting: !1
												} : t))))
											}
										}
									})(e.id)
								},
								onMouseDown: e => e.preventDefault(),
								className: "absolute bottom-7 left-5 p-1 bg-neutral-700 text-white rounded-full hover:bg-neutral-500 focus:outline-none",
								disabled: e.isDeleting,
								children: (0, i.jsx)(Vf, {
									className: "h-3 w-3"
								})
							})]
						}, e.id))), (0, i.jsx)("button", {
							onClick: async () => {
								if (r) {
									k(!0);
									try {
										const e = {
												userId: r.uid,
												url: a,
												backgroundColor: o,
												shapeColor: l,
												patternType: c,
												backgroundType: u,
												gradientColor1: d,
												gradientColor2: h,
												gradientAngle: f,
												shapeColorType: p,
												shapeGradientColor1: g,
												shapeGradientColor2: m,
												shapeGradientAngle: v
											},
											t = await iu(lc(Sf, "savedDesigns"), e),
											n = {
												...e,
												id: t.id,
												url: E(a),
												isDeleting: !1
											};
										w((e => [...e, n]))
									} catch (e) {
										console.error("Error saving design:", e)
									} finally {
										k(!1)
									}
								}
							},
							disabled: x,
							className: "w-8 h-8 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center ".concat(x ? "opacity-50 cursor-not-allowed" : ""),
							children: (0, i.jsx)(zf, {
								className: "h-5 w-5 text-neutral-800 dark:text-neutral-200"
							})
						})]
					}) : (0, i.jsx)("p", {
						className: "text-xs text-neutral-500",
						children: "Please sign in to save and view your designs."
					})]
				})
			})),
			Gf = Bf,
			qf = h("Ellipsis", [
				["circle", {
					cx: "12",
					cy: "12",
					r: "1",
					key: "41hilf"
				}],
				["circle", {
					cx: "19",
					cy: "12",
					r: "1",
					key: "1wjl8i"
				}],
				["circle", {
					cx: "5",
					cy: "12",
					r: "1",
					key: "1pcz8c"
				}]
			]),
			Hf = t => {
				let {
					user: n,
					currentUrl: r,
					onDesignSelect: a,
					backgroundColor: s,
					shapeColor: o,
					patternType: l,
					backgroundType: c,
					gradientColor1: u,
					gradientColor2: d,
					gradientAngle: h,
					shapeColorType: f,
					shapeGradientColor1: p,
					shapeGradientColor2: g,
					shapeGradientAngle: m,
					isPaidUser: v,
					setShowPricingModal: b
				} = t;
				const [w, x] = (0, e.useState)([]), [k, S] = (0, e.useState)(!0), [C, _] = (0, e.useState)(!1), [T, I] = (0, e.useState)(!1), [N, R] = (0, e.useState)(null), A = "btFTNMYcazaYdp41lWonlvQ5Y6D3" === (null === n || void 0 === n ? void 0 : n.uid);
				(0, e.useEffect)((() => {
					P()
				}), []);
				const P = async () => {
					S(!0);
					try {
						const e = lc(Sf, "presetDesigns"),
							t = await tu(e),
							n = [];
						t.forEach((e => {
							const t = e.data();
							n.push({
								...t,
								id: e.id,
								url: j(t.url)
							})
						})), x(n)
					} catch (e) {
						console.error("Error loading preset designs:", e)
					} finally {
						S(!1)
					}
				}, j = e => {
					const t = new URL(e);
					return t.pathname + t.search + t.hash
				}, D = e => {
					const t = O(e);
					return "custom" === e.patternType ? (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)("text", {
							x: "50",
							y: "38",
							fontSize: "20px",
							textAnchor: "middle",
							dominantBaseline: "middle",
							fill: t,
							children: "Custom"
						}), (0, i.jsx)("text", {
							x: "50",
							y: "68",
							fontSize: "20px",
							textAnchor: "middle",
							dominantBaseline: "middle",
							fill: t,
							children: "SVG"
						})]
					}) : y[e.patternType] ? y[e.patternType].render({
						posX: 50,
						posY: 50,
						size: 50,
						shapeProps: {
							fill: t
						}
					}) : null
				}, O = e => "solid" === e.shapeColorType ? e.shapeColor : "linear" === e.shapeColorType ? "url(#shapeGradient-".concat(e.id, ")") : "radial" === e.shapeColorType ? "url(#shapeRadialGradient-".concat(e.id, ")") : e.shapeColor;
				//hack: remove preset designs by ezshine
				return null;
				if (!k) return (0, i.jsx)("div", {
					className: "text-xs",
					children: "Loading preset designs..."
				});
				const L = T ? w : w.slice(0, 8);
				return (0, i.jsxs)("div", {
					className: "my-4",
					children: [(0, i.jsx)("h2", {
						className: "text-xs font-medium mb-2",
						children: "Preset Designs:"
					}), (0, i.jsxs)("div", {
						className: "flex gap-2 flex-wrap",
						children: [L.map(((e, t) => {
							return (0, i.jsxs)("div", {
								className: "relative",
								children: [(0, i.jsx)("button", {
									onClick: n => {
										n.preventDefault(), v || t < 18 ? (a(e.url), R(e.id)) : b(!0)
									},
									onFocus: () => R(e.id),
									onBlur: () => R(null),
									className: "w-8 h-8 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 ".concat(N === e.id ? "ring-2 ring-blue-500" : ""),
									style: (n = e, "solid" === n.backgroundType ? {
										backgroundColor: n.backgroundColor
									} : "linear" === n.backgroundType ? {
										background: "linear-gradient(".concat(n.gradientAngle, "deg, ").concat(n.gradientColor1, ", ").concat(n.gradientColor2, ")")
									} : "radial" === n.backgroundType ? {
										background: "radial-gradient(circle, ".concat(n.gradientColor1, ", ").concat(n.gradientColor2, ")")
									} : {
										backgroundColor: n.backgroundColor
									}),
									children: (0, i.jsxs)("svg", {
										viewBox: "0 0 100 100",
										className: "w-full h-full",
										children: [(0, i.jsxs)("defs", {
											children: ["linear" === e.shapeColorType && (0, i.jsxs)("linearGradient", {
												id: "shapeGradient-".concat(e.id),
												x1: "0%",
												y1: "0%",
												x2: "100%",
												y2: "0%",
												gradientTransform: "rotate(".concat(e.shapeGradientAngle, ")"),
												children: [(0, i.jsx)("stop", {
													offset: "0%",
													stopColor: e.shapeGradientColor1
												}), (0, i.jsx)("stop", {
													offset: "100%",
													stopColor: e.shapeGradientColor2
												})]
											}), "radial" === e.shapeColorType && (0, i.jsxs)("radialGradient", {
												id: "shapeRadialGradient-".concat(e.id),
												children: [(0, i.jsx)("stop", {
													offset: "0%",
													stopColor: e.shapeGradientColor1
												}), (0, i.jsx)("stop", {
													offset: "100%",
													stopColor: e.shapeGradientColor2
												})]
											})]
										}), D(e)]
									})
								}), A && N === e.id && (0, i.jsx)("button", {
									onClick: t => {
										t.preventDefault(), t.stopPropagation(), (async e => {
											if (A) try {
												await ru(cc(Sf, "presetDesigns", e)), await P()
											} catch (t) {
												console.error("Error deleting preset design:", t)
											}
										})(e.id)
									},
									onMouseDown: e => e.preventDefault(),
									className: "absolute bottom-7 left-5 p-1 bg-neutral-700 text-white rounded-full hover:bg-neutral-500 focus:outline-none",
									children: (0, i.jsx)(Vf, {
										className: "h-3 w-3"
									})
								}), !v && t >= 18 && (0, i.jsx)("button", {
									onClick: () => b(!0),
									className: "absolute inset-0 h-8 flex items-center justify-center bg-black bg-opacity-50 rounded-lg",
									children: (0, i.jsx)(E, {
										className: "h-4 w-4 text-white"
									})
								})]
							}, e.id);
							var n
						})), A && T && (0, i.jsx)("button", {
							onClick: async () => {
								if (A) {
									_(!0);
									try {
										const e = {
											url: r,
											backgroundColor: s,
											shapeColor: o,
											patternType: l,
											backgroundType: c,
											gradientColor1: u,
											gradientColor2: d,
											gradientAngle: h,
											shapeColorType: f,
											shapeGradientColor1: p,
											shapeGradientColor2: g,
											shapeGradientAngle: m
										};
										await iu(lc(Sf, "presetDesigns"), e), await P()
									} catch (e) {
										console.error("Error adding preset design:", e)
									} finally {
										_(!1)
									}
								}
							},
							disabled: C,
							className: "w-8 h-8 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center ".concat(C ? "opacity-50 cursor-not-allowed" : ""),
							children: (0, i.jsx)(zf, {
								className: "h-5 w-5 text-neutral-800 dark:text-neutral-200"
							})
						}), w.length > 8 && (0, i.jsx)("button", {
							onClick: () => I(!T),
							className: "w-8 h-8 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center",
							children: (0, i.jsx)(qf, {
								className: "h-5 w-5 text-neutral-800 dark:text-neutral-200"
							})
						})]
					})]
				})
			},
			Wf = h("MessageSquareText", [
				["path", {
					d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
					key: "1lielz"
				}],
				["path", {
					d: "M13 8H7",
					key: "14i4kc"
				}],
				["path", {
					d: "M17 12H7",
					key: "16if0g"
				}]
			]),
			Kf = h("LogOut", [
				["path", {
					d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
					key: "1uf3rs"
				}],
				["polyline", {
					points: "16 17 21 12 16 7",
					key: "1gabdz"
				}],
				["line", {
					x1: "21",
					x2: "9",
					y1: "12",
					y2: "12",
					key: "1uyos4"
				}]
			]),
			Qf = t => {
				let {
					user: n,
					isPaidUser: r,
					onOpenFeedbackModal: a,
					setShowPricingModal: s
				} = t;
				const [o, l] = (0, e.useState)(!1), [c, u] = (0, e.useState)(!1), d = (0, e.useRef)(null);
				(0, e.useEffect)((() => {
					const e = e => {
						d.current && !d.current.contains(e.target) && l(!1)
					};
					return document.addEventListener("mousedown", e), () => {
						document.removeEventListener("mousedown", e)
					}
				}), []);
				return n ? (0, i.jsxs)("div", {
					className: "relative",
					ref: d,
					children: [(0, i.jsx)("button", {
						onClick: () => l(!o),
						className: "flex p-1 text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 text-xs rounded-lg",
						children: (0, i.jsx)("img", {
							src: n.photoURL || "https://ui-avatars.com/api/?name=".concat(n.displayName || "User", "&background=random"),
							alt: n.displayName || "User",
							className: "w-8 h-8 rounded-full"
						})
					}), o && (0, i.jsxs)("div", {
						className: "absolute text-xs right-0 py-2 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-lg z-10",
						children: [!r && (0, i.jsxs)("button", {
							onClick: () => s(!0),
							className: "w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-neutral-100 dark:hover:bg-neutral-700",
							children: [(0, i.jsx)(E, {
								className: "inline-block w-4 h-4 mr-2"
							}), "Upgrade to Pro"]
						}), (0, i.jsxs)("button", {
							onClick: () => {
								l(!1), a()
							},
							className: "w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-neutral-100 dark:hover:bg-neutral-700",
							children: [(0, i.jsx)(Wf, {
								className: "inline-block w-4 h-4 mr-2"
							}), "Feedback"]
						}), (0, i.jsxs)("button", {
							onClick: async () => {
								try {
									await kf.signOut(), l(!1)
								} catch (e) {
									console.error("Error signing out:", e)
								}
							},
							className: "w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-neutral-100 dark:hover:bg-neutral-700",
							children: [(0, i.jsx)(Kf, {
								className: "inline-block w-4 h-4 mr-2"
							}), "Logout"]
						})]
					})]
				}) : null
			},
			Xf = h("Check", [
				["path", {
					d: "M20 6 9 17l-5-5",
					key: "1gmf2c"
				}]
			]),
			Yf = h("LoaderPinwheel", [
				["path", {
					d: "M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5",
					key: "1cg5zf"
				}],
				["path", {
					d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",
					key: "1gnrpi"
				}],
				["path", {
					d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",
					key: "u9yy5q"
				}],
				["circle", {
					cx: "12",
					cy: "12",
					r: "10",
					key: "1mglay"
				}]
			]),
			$f = h("CircleAlert", [
				["circle", {
					cx: "12",
					cy: "12",
					r: "10",
					key: "1mglay"
				}],
				["line", {
					x1: "12",
					x2: "12",
					y1: "8",
					y2: "12",
					key: "1pkeuh"
				}],
				["line", {
					x1: "12",
					x2: "12.01",
					y1: "16",
					y2: "16",
					key: "4dfq90"
				}]
			]);
		var Jf, Zf = "https://js.stripe.com/v3",
			ep = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
			tp = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
			np = function(e) {
				var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
					n = document.createElement("script");
				n.src = "".concat(Zf).concat(t);
				var r = document.head || document.body;
				if (!r) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
				return r.appendChild(n), n
			},
			rp = null,
			ip = null,
			ap = null,
			sp = function(e) {
				return null !== rp ? rp : (rp = new Promise((function(t, n) {
					if ("undefined" !== typeof window && "undefined" !== typeof document)
						if (window.Stripe && e && console.warn(tp), window.Stripe) t(window.Stripe);
						else try {
							var r = function() {
								for (var e = document.querySelectorAll('script[src^="'.concat(Zf, '"]')), t = 0; t < e.length; t++) {
									var n = e[t];
									if (ep.test(n.src)) return n
								}
								return null
							}();
							if (r && e) console.warn(tp);
							else if (r) {
								if (r && null !== ap && null !== ip) {
									var i;
									r.removeEventListener("load", ap), r.removeEventListener("error", ip), null === (i = r.parentNode) || void 0 === i || i.removeChild(r), r = np(e)
								}
							} else r = np(e);
							ap = function(e, t) {
								return function() {
									window.Stripe ? e(window.Stripe) : t(new Error("Stripe.js not available"))
								}
							}(t, n), ip = function(e) {
								return function() {
									e(new Error("Failed to load Stripe.js"))
								}
							}(n), r.addEventListener("load", ap), r.addEventListener("error", ip)
						} catch (a) {
							return void n(a)
						} else t(null)
				}))).catch((function(e) {
					return rp = null, Promise.reject(e)
				}))
			},
			op = !1,
			lp = function() {
				return Jf || (Jf = sp(null).catch((function(e) {
					return Jf = null, Promise.reject(e)
				})))
			};
		Promise.resolve().then((function() {
			return lp()
		})).catch((function(e) {
			op || console.warn(e)
		}));
		const cp = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				op = !0;
				var r = Date.now();
				return lp().then((function(e) {
					return function(e, t, n) {
						if (null === e) return null;
						var r = e.apply(void 0, t);
						return function(e, t) {
							e && e._registerWrapper && e._registerWrapper({
								name: "stripe-js",
								version: "4.0.0",
								startTime: t
							})
						}(r, n), r
					}(e, t, r)
				}))
			}("pk_live_51PbwQ1Dp5eVkEj1ma2mfuGlznwIsL8BDzvduUOCkdstKeXhkkGq6PlHD4WD5AoJqsp8kXXz3lT3dpKJVq7U3mdAn00DNOLwxG8"),
			up = "https://us-central1-svg-pattern-builder.cloudfunctions.net/createCheckoutSession",
			dp = t => {
				let {
					isOpen: n,
					onClose: r,
					user: a
				} = t;
				const [s, o] = (0, e.useState)(!1);
				//hack:remove auth logic by ezshine
				return null;

				if (!n) return null;
				return (0, i.jsx)("div", {
					className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-mono",
					children: (0, i.jsxs)("div", {
						className: "bg-white dark:bg-neutral-800 rounded-lg p-6 py-4 max-w-2xl w-full mx-4",
						children: [(0, i.jsxs)("div", {
							className: "flex justify-between items-center mb-4",
							children: [(0, i.jsx)("h2", {
								className: "text-lg font-bold text-neutral-900 dark:text-neutral-100",
								children: "Upgrade"
							}), (0, i.jsx)("button", {
								onClick: r,
								className: "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
								children: (0, i.jsx)(Vf, {
									size: 24
								})
							})]
						}), (0, i.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-6",
							children: [(0, i.jsxs)("div", {
								className: "border border-neutral-200 dark:border-neutral-700 rounded-lg p-6",
								children: [(0, i.jsx)("h3", {
									className: "text-lg font-semibold mb-2",
									children: "Free"
								}), (0, i.jsx)("p", {
									className: "text-2xl font-bold mb-4 hidden sm:block",
									children: "$0"
								}), (0, i.jsxs)("ul", {
									className: "space-y-2 mb-6 grid grid-cols-2 sm:grid-cols-1 items-end",
									children: [
										["Up to 5 saved designs", "Limited Presets", "720p PNG", "720p Video", "360p GIF Export"].map(((e, t) => (0, i.jsxs)("li", {
											className: "flex items-center text-xs sm:text-sm",
											children: [(0, i.jsx)(Xf, {
												className: "h-5 w-5 text-green-500 mr-2"
											}), (0, i.jsx)("span", {
												children: e
											})]
										}, t))), (0, i.jsxs)("li", {
											className: "flex items-center text-xs sm:text-sm",
											children: [(0, i.jsx)(Vf, {
												className: "h-5 w-5 text-red-500 mr-2"
											}), (0, i.jsx)("span", {
												children: "Download Files"
											})]
										}), (0, i.jsxs)("li", {
											className: "flex items-center text-xs sm:text-sm",
											children: [(0, i.jsx)(Vf, {
												className: "h-5 w-5 text-red-500 mr-2"
											}), (0, i.jsx)("span", {
												children: "Custom SVG Input"
											})]
										}), (0, i.jsxs)("li", {
											className: "flex items-center text-xs sm:text-sm",
											children: [(0, i.jsx)(Vf, {
												className: "h-5 w-5 text-red-500 mr-2"
											}), (0, i.jsx)("span", {
												children: "Generate Shape with AI"
											})]
										})
									]
								}), (0, i.jsx)("button", {
									className: "w-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white text-sm py-2 rounded-lg transition duration-300",
									disabled: !0,
									children: "Current Plan"
								})]
							}), (0, i.jsxs)("div", {
								className: "border border-blue-500 rounded-lg p-6 relative overflow-hidden",
								children: [(0, i.jsx)("div", {
									className: "absolute top-0 right-0 bg-blue-500 text-white text-xs py-1 px-3 rounded-bl-lg",
									children: "LAUNCH DISCOUNT"
								}), (0, i.jsx)("h3", {
									className: "text-lg font-semibold mb-2",
									children: "Pro"
								}), (0, i.jsxs)("p", {
									className: "text-2xl font-bold mb-4",
									children: ["$30 ", (0, i.jsx)("span", {
										className: "text-xs text-neutral-500 font-normal strike",
										children: "One-time. Regular: $60"
									})]
								}), (0, i.jsx)("ul", {
									className: "space-y-2 mb-6 grid grid-cols-2 sm:grid-cols-1 items-end",
									children: ["Save Unlimited Designs", "All Presets", "4K+ PNG export", "4K+ Video Export", "Up to 4K GIF Export", "Download Files", "Custom SVG Input", "Generate with AI (soon)"].map(((e, t) => (0, i.jsxs)("li", {
										className: "flex items-center text-xs sm:text-sm",
										children: [(0, i.jsx)(Xf, {
											className: "h-5 w-5 text-green-500 mr-2"
										}), e]
									}, t)))
								}), (0, i.jsx)("button", {
									onClick: async () => {
										if (a) {
											o(!0);
											try {
												const e = await cp;
												if (!e) throw new Error("Stripe failed to load");
												console.log("Fetching from:", up);
												const t = await fetch(up, {
													method: "POST",
													headers: {
														"Content-Type": "application/json"
													},
													body: JSON.stringify({
														userId: a.uid
													})
												});
												if (!t.ok) {
													const e = await t.text();
													throw console.error("Response not OK:", t.status, e), new Error("HTTP error! status: ".concat(t.status, ", message: ").concat(e))
												}
												const n = await t.json();
												if (console.log("Response data:", n), !n.sessionId) throw new Error("No sessionId received from server");
												const {
													error: r
												} = await e.redirectToCheckout({
													sessionId: n.sessionId
												});
												if (r) throw console.error("Stripe redirectToCheckout error:", r), r
											} catch (e) {
												console.error("Error in checkout process:", e);
												let t = "An unknown error occurred";
												e instanceof Error ? t = e.message : "string" === typeof e && (t = e), alert("An error occurred: ".concat(t))
											} finally {
												o(!1), r()
											}
										} else alert("Please sign in to upgrade.")
									},
									disabled: s,
									className: "w-full bg-blue-500 text-sm text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center",
									children: s ? (0, i.jsxs)(i.Fragment, {
										children: [(0, i.jsx)(Yf, {
											className: "animate-spin h-5 w-5 mr-2"
										}), "Processing..."]
									}) : "Upgrade to Pro"
								})]
							})]
						}), (0, i.jsxs)("div", {
							className: "mt-6 flex items-center justify-center text-xs text-neutral-500",
							children: [(0, i.jsx)($f, {
								className: "h-4 w-4 mr-2"
							}), "30-day money-back guarantee. No subscription."]
						})]
					})
				})
			},
			hp = e => {
				let {
					isOpen: t,
					onClose: n
				} = e;
				return t ? (0, i.jsx)("div", {
					className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-mono",
					children: (0, i.jsxs)("div", {
						className: "bg-white dark:bg-neutral-800 rounded-lg p-6 max-w-md w-full mx-4",
						children: [(0, i.jsxs)("div", {
							className: "flex justify-between items-center mb-4",
							children: [(0, i.jsx)("h2", {
								className: "text-lg font-bold text-neutral-900 dark:text-neutral-100",
								children: "Congrats, welcome to Pro!"
							}), (0, i.jsx)("button", {
								onClick: n,
								className: "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
								children: (0, i.jsx)(Vf, {
									size: 24
								})
							})]
						}), (0, i.jsx)("hr", {
							className: "h-px my-4 border-0 bg-neutral-200 lg:bg-neutral-300 dark:bg-neutral-700"
						}), (0, i.jsx)("p", {
							className: "text-sm mb-4 text-neutral-700 dark:text-neutral-300",
							children: "You now have access to:"
						}), (0, i.jsxs)("ul", {
							className: "list-disc list-inside text-sm mb-4 text-neutral-700 dark:text-neutral-300",
							children: [(0, i.jsx)("li", {
								children: "Save Unlimited Designs"
							}), (0, i.jsx)("li", {
								children: "All Presets"
							}), (0, i.jsx)("li", {
								children: "4K+ PNG export"
							}), (0, i.jsx)("li", {
								children: "4K+ Video Export"
							}), (0, i.jsx)("li", {
								children: "Up to 4K GIF Export"
							}), (0, i.jsx)("li", {
								children: "Download Files"
							}), (0, i.jsx)("li", {
								children: "Custom SVG Input"
							})]
						}), (0, i.jsx)("p", {
							className: "text-sm text-neutral-700 dark:text-neutral-300",
							children: "Your support means a lot. Thank you!"
						})]
					})
				}) : null
			},
			fp = t => {
				let {
					isOpen: n,
					onClose: r,
					user: a
				} = t;
				const [s, o] = (0, e.useState)(""), [l, c] = (0, e.useState)(!1), [u, d] = (0, e.useState)(null);
				if (!n) return null;
				return (0, i.jsx)("div", {
					className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-mono",
					children: (0, i.jsxs)("div", {
						className: "bg-white dark:bg-neutral-800 rounded-lg p-6 max-w-md w-full mx-4",
						children: [(0, i.jsxs)("div", {
							className: "flex justify-between items-center mb-4",
							children: [(0, i.jsx)("h2", {
								className: "text-lg font-bold text-neutral-900 dark:text-neutral-100",
								children: "Send Feedback"
							}), (0, i.jsx)("button", {
								onClick: r,
								className: "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
								children: (0, i.jsx)(Vf, {
									size: 24
								})
							})]
						}), (0, i.jsxs)("form", {
							onSubmit: async e => {
								if (e.preventDefault(), s.length < 30) d("Please provide at least 30 characters of feedback.");
								else {
									c(!0), d(null);
									try {
										if (!(await fetch("https://us-central1-svg-pattern-builder.cloudfunctions.net/submitFeedback", {
												method: "POST",
												headers: {
													"Content-Type": "application/json"
												},
												body: JSON.stringify({
													userId: (null === a || void 0 === a ? void 0 : a.uid) || "anonymous",
													userEmail: (null === a || void 0 === a ? void 0 : a.email) || "anonymous",
													feedback: s
												})
											})).ok) throw new Error("Failed to submit feedback");
										alert("Thank you for your feedback!"), r()
									} catch (u) {
										console.error("Error sending feedback:", u), d("Failed to send feedback. Please try again.")
									} finally {
										c(!1)
									}
								}
							},
							children: [(0, i.jsx)("textarea", {
								value: s,
								onChange: e => o(e.target.value),
								placeholder: "Your feedback here (minimum 30 characters)",
								className: "w-full h-32 p-2 border border-neutral-300 dark:border-neutral-600 rounded-lg mb-4 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm",
								required: !0
							}), u && (0, i.jsx)("p", {
								className: "text-red-500 text-sm mb-4",
								children: u
							}), (0, i.jsx)("button", {
								type: "submit",
								disabled: l || s.length < 30,
								className: "w-full bg-neutral-800 dark:bg-neutral-950 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center justify-center transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",
								children: l ? "Sending..." : "Send Feedback"
							})]
						})]
					})
				})
			},
			pp = t => {
				let {
					isOpen: n,
					onClose: r
				} = t;
				const [a, s] = (0, e.useState)(null), [o, l] = (0, e.useState)(!1), [c, u] = (0, e.useState)("idle");
				(0, e.useEffect)((() => {
					const e = new URLSearchParams(window.location.search).get("email");
					e && s(decodeURIComponent(e))
				}), []);
				return n ? (0, i.jsx)("div", {
					className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-mono",
					children: (0, i.jsxs)("div", {
						className: "bg-white dark:bg-neutral-800 rounded-lg p-6 max-w-md w-full mx-4",
						children: [(0, i.jsxs)("div", {
							className: "flex justify-between items-center mb-4",
							children: [(0, i.jsx)("h2", {
								className: "text-lg font-bold text-neutral-900 dark:text-neutral-100",
								children: "Unsubscribe"
							}), (0, i.jsx)("button", {
								onClick: r,
								className: "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
								children: (0, i.jsx)(Vf, {
									size: 24
								})
							})]
						}), "success" === c ? (0, i.jsx)("p", {
							className: "text-sm text-green-600 dark:text-green-400",
							children: "You've successfully unsubscribed to all future emails."
						}) : (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsxs)("p", {
								className: "text-sm mb-4 text-neutral-700 dark:text-neutral-300",
								children: ["Are you sure you want to unsubscribe ", a, " from all future emails?"]
							}), (0, i.jsx)("button", {
								onClick: async () => {
									if (a) {
										l(!0), u("idle");
										try {
											await iu(lc(Sf, "unsubscribe"), {
												email: a,
												timestamp: new Date
											}), u("success")
										} catch (e) {
											console.error("Error unsubscribing:", e), u("error")
										} finally {
											l(!1)
										}
									}
								},
								disabled: o,
								className: "w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4 rounded-lg transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",
								children: o ? "Unsubscribing..." : "Unsubscribe"
							}), "error" === c && (0, i.jsx)("p", {
								className: "text-sm mt-2 text-red-600 dark:text-red-400",
								children: "An error occurred while unsubscribing. Please try again."
							})]
						})]
					})
				}) : null
			},
			gp = h("Save", [
				["path", {
					d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
					key: "1c8476"
				}],
				["path", {
					d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
					key: "1ydtos"
				}],
				["path", {
					d: "M7 3v4a1 1 0 0 0 1 1h7",
					key: "t51u73"
				}]
			]),
			mp = ((e, t) => {
				let n = null;
				return function() {
					for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
					n && clearTimeout(n), n = setTimeout((() => e(...i)), t)
				}
			})((e => {
				window.history.replaceState({}, "", e)
			}), 1e3),
			vp = (e, t, n) => e ? t + Math.random() * (n - t) : 1,
			yp = (e, t) => {
				if (null === e) return t;
				const n = Number(e);
				return isNaN(n) ? t : n
			},
			bp = (e, t) => null === e ? t : "true" === e.toLowerCase(),
			wp = (e, t, n, r) => {
				if ("solid" === e) return t;
				return "url(#".concat("linear" === e ? "shapeLinearGradient" : "shapeRadialGradient", ")")
			},
			xp = async e => {
				try {
					const t = await Zc(cc(Sf, "users", e));
					return t.exists() ? t.data().isPaid || !1 : (await nu(cc(Sf, "users", e), {
						isPaid: !1
					}), !1)
				} catch (t) {
					return console.error("Error checking paid status:", t), !1
				}
			}, kp = () => {
				const [t, n] = (0, e.useState)(15), [o, c] = (0, e.useState)(1), [u, d] = (0, e.useState)(20), [h, f] = (0, e.useState)("#ffffff"), [p, g] = (0, e.useState)("#000000"), [m, b] = (0, e.useState)("lines"), [w, x] = (0, e.useState)(0), [k, S] = (0, e.useState)("angular"), [C, _] = (0, e.useState)("16:9"), [E, T] = (0, e.useState)(!1), [I, N] = (0, e.useState)(.3), [R, A] = (0, e.useState)(1), [j, D] = (0, e.useState)(!1), [O, L] = (0, e.useState)(5), [M, F] = (0, e.useState)(!1), [U, V] = (0, e.useState)(5), [z, B] = (0, e.useState)(!1), [G, q] = (0, e.useState)(10), [H, W] = (0, e.useState)(0), [K, Q] = (0, e.useState)(""), [X, Y] = (0, e.useState)(!1), [$, J] = (0, e.useState)(5), [Z, ee] = (0, e.useState)(0), [te, ne] = (0, e.useState)(!1), [re, ie] = (0, e.useState)(5), [ae, se] = (0, e.useState)(0), [oe, le] = (0, e.useState)(.9), [ce, ue] = (0, e.useState)(1.2), [de, he] = (0, e.useState)("solid"), [fe, pe] = (0, e.useState)("#000000"), [ge, me] = (0, e.useState)("#333333"), [ve, ye] = (0, e.useState)(0), [be, we] = (0, e.useState)(0), xe = (0, e.useRef)(null), ke = (0, e.useRef)(null), [Se, Ce] = (0, e.useState)(0), [_e, Ee] = (0, e.useState)(0), [Te, Ie] = (0, e.useState)(0), [Ne, Re] = (0, e.useState)(null), [Ae, Pe] = (0, e.useState)(!1), [je, De] = (0, e.useState)(!1), [Oe, Le] = (0, e.useState)("solid"), [Me, Fe] = (0, e.useState)("#ffffff"), [Ue, Ve] = (0, e.useState)("#000000"), [ze, Be] = (0, e.useState)(0), [Ge, qe] = (0, e.useState)(!1), [He, We] = (0, e.useState)(5), [Ke, Qe] = (0, e.useState)(10), [Xe, Ye] = (0, e.useState)(10), [$e, Je] = (0, e.useState)(0), [Ze, et] = (0, e.useState)(!1), [tt, nt] = (0, e.useState)(1), [rt, it] = (0, e.useState)(1), [at, st] = (0, e.useState)(!1), ot = (0, e.useRef)(null), [lt, ct] = (0, e.useState)(null), [ut, dt] = (0, e.useState)("Hello"), [ht, ft] = (0, e.useState)("normal"), [pt, gt] = (0, e.useState)("normal"), [mt, vt] = (0, e.useState)(24), [yt, bt] = (0, e.useState)("\ud83d\ude0a"), [wt, xt] = (0, e.useState)("\u2605"), [kt, St] = (0, e.useState)(!1), [Ct, _t] = (0, e.useState)(!1), [Et, Tt] = (0, e.useState)(3), [It, Nt] = (0, e.useState)(0), [Rt, At] = (0, e.useState)(0), [Pt, jt] = (0, e.useState)(!1), [Dt, Ot] = (0, e.useState)(5), [Lt, Mt] = (0, e.useState)(0), [Ft, Ut] = (0, e.useState)(10), [Vt, zt] = (0, e.useState)(0), [Bt, Gt] = (0, e.useState)(50), [qt, Ht] = (0, e.useState)(50), Wt = (0, e.useMemo)((() => (e => {
					const t = 896;
					let n, r;
					switch (e) {
						case "16:9":
						default:
							n = t, r = 504;
							break;
						case "1:1":
							n = r = t;
							break;
						case "9:16":
							n = 504, r = t;
							break;
						case "4:3":
							n = t, r = 672;
							break;
						case "3:4":
							n = 672, r = t
					}
					return {
						width: Math.round(n),
						height: Math.round(r)
					}
				})(C)), [C]), Kt = (0, e.useRef)(!0), [Qt, Xt] = (0, e.useState)("Space Grotesk"), [Yt, $t] = (0, e.useState)(!1), [Jt, Zt] = (0, e.useState)(!1), [en, tn] = (0, e.useState)(!1);
				(0, e.useEffect)((() => {
					const e = () => {
						if (xe.current) {
							const e = xe.current.offsetHeight;
							we(e)
						}
					};
					e(), window.addEventListener("resize", e);
					const t = new MutationObserver(e);
					return xe.current && t.observe(xe.current, {
						attributes: !0,
						childList: !0,
						subtree: !0
					}), () => {
						window.removeEventListener("resize", e), t.disconnect()
					}
				}), [C]), (0, e.useEffect)((() => {
					let e, t = null;
					const n = r => {
						null === t && (t = r);
						W((r - t) % (1e3 * G) / (1e3 * G)), e = requestAnimationFrame(n)
					};
					return z || X || te || Ge || Pt ? e = requestAnimationFrame(n) : W(0), () => {
						e && cancelAnimationFrame(e)
					}
				}), [G, z, X, te, Ge, Pt]);
				const nn = (0, e.useCallback)(((e, n) => {
						const r = e - _e,
							i = n - Te,
							a = Wt.width / 2,
							s = Wt.height / 2,
							l = Se * Math.PI / 180;
						switch (k) {
							case "radial": {
								const e = Math.sqrt(Math.pow(Wt.width / 2, 2) + Math.pow(Wt.height / 2, 2)) * ((90 + Se) / 100),
									n = r - a,
									l = i - s,
									c = Math.sqrt(n * n + l * l);
								return c <= e ? t - c / e * (t - o) : o
							}
							case "linear": {
								const e = ((r - a) * Math.cos(l) - (i - s) * Math.sin(l) + a - a) / (Wt.width / 2) + .5;
								return o + (t - o) * Math.max(0, Math.min(1, e))
							}
							case "angular": {
								const e = r - a,
									n = i - s;
								let l = Math.atan2(n, e) + Math.PI;
								l = (l + Se * Math.PI / 180) % (2 * Math.PI);
								const c = l / (2 * Math.PI);
								return o + (t - o) * c
							}
							case "wave": {
								const e = .5 * Math.sin(.1 * (r + Wt.width * Se / 360)) + .5,
									n = .5 * Math.cos(.1 * (i + Wt.height * Se / 360)) + .5;
								return o + (e + n) / 2 * (t - o)
							}
							case "diamond": {
								const e = (r - a) * Math.cos(l) - (i - s) * Math.sin(l) + a,
									n = (r - a) * Math.sin(l) + (i - s) * Math.cos(l) + s,
									c = Math.abs(e - a) / (Wt.width / 2),
									u = Math.abs(n - s) / (Wt.height / 2),
									d = Math.max(c, u);
								return o + (t - o) * (1 - d)
							}
							case "circular": {
								const e = r - a,
									n = i - s,
									l = Math.sqrt(e * e + n * n),
									c = Math.min(Wt.width, Wt.height) / 2,
									u = Math.min(l / c, 1);
								let d = Math.atan2(n, e);
								d < 0 && (d += 2 * Math.PI);
								const h = d / (2 * Math.PI),
									f = 1 / Se,
									p = (Math.floor(h / f), o + (t - o) * u);
								return p + (o + (t - o) * (1 - u) - p) * (h % f / f)
							}
							default:
								return (t + o) / 2
						}
					}), [k, o, t, Wt, Se, _e, Te]),
					rn = (0, e.useCallback)(((e, t, n, r, i) => y[e] ? y[e].render({
						posX: t,
						posY: n,
						size: r,
						shapeProps: i
					}) : null), []),
					an = (0, e.useCallback)((function() {
						let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						const n = [];
						let r = w;
						const a = (0, i.jsx)("filter", {
							id: "blur-filter",
							children: (0, i.jsx)("feGaussianBlur", {
								in: "SourceGraphic",
								stdDeviation: "5"
							})
						}, "blur-filter");
						n.push(a);
						const s = (e, t, n, r, a, s) => {
								const o = n / 50 * s;
								return (0, i.jsx)("g", {
									transform: "translate(".concat(e, ", ").concat(t, ") rotate(").concat(a, ") scale(").concat(o, ")"),
									children: (0, i.jsx)("g", {
										dangerouslySetInnerHTML: {
											__html: K
										},
										...r,
										transform: "translate(-25, -25)"
									})
								}, "custom-".concat(e, "-").concat(t))
							},
							o = (e, t, n, r, a, s) => {
								let o = ut;
								return "emojis" === lt ? o = yt : "textSymbols" === lt && (o = wt), (0, i.jsx)("text", {
									x: "0",
									y: "0",
									fontSize: n * s * mt / 24,
									textAnchor: "middle",
									dominantBaseline: "central",
									fontWeight: ht,
									fontStyle: pt,
									fontFamily: "".concat(Qt, ", sans-serif"),
									...r,
									transform: "translate(".concat(e, ", ").concat(t, ") rotate(").concat(a, ")"),
									children: o
								}, "text-".concat(e, "-").concat(t))
							};
						for (let i = 0; i <= Wt.height; i += u)
							for (let a = 0; a <= Wt.width; a += u) {
								let l = a,
									c = i;
								j && (l += 2 * (Math.random() - .5) * O, c += 2 * (Math.random() - .5) * O);
								const u = nn(l, c);
								let d = vp(E, I, R),
									f = 1,
									p = 0,
									g = 0;
								if (z) {
									const e = (l + c) / (Wt.width + Wt.height) * 360;
									r = (w + 360 * t + e) % 360
								} else M && (r = (r + U) % 360);
								if (X) {
									const e = (l + c) / (Wt.width + Wt.height) * Math.PI * 2;
									d = (Math.sin(t * Math.PI * 2 + e) + 1) / 2, d = I + d * (R - I)
								}
								if (te) {
									const e = (l + c) / (Wt.width + Wt.height) * Math.PI * 2;
									f = (Math.sin(t * Math.PI * 2 + e) + 1) / 2, f = oe + f * (ce - oe)
								}
								if (Ge) {
									const e = (l + c) / (Wt.width + Wt.height) * Math.PI * 2,
										n = (Math.sin(t * Math.PI * 2 + e) + 1) / 2,
										r = (Math.cos(t * Math.PI * 2 + e) + 1) / 2;
									p = Ke * n, g = Xe * r
								}
								let v = 0;
								if (Pt) {
									const e = (l + c) / (Wt.width + Wt.height) * Math.PI * 2;
									v = Lt + (Ft - Lt) * ((Math.sin(t * Math.PI * 2 + e) + 1) / 2)
								}
								const y = u * f,
									b = {
										fill: "solid" === Oe ? h : "url(#shapeGradient)",
										opacity: d,
										filter: Pt ? "url(#blur-filter)" : void 0,
										style: {
											filter: Pt ? "blur(".concat(v, "px)") : void 0
										}
									};
								if (Ct)
									for (let t = 0; t < Et; t++) {
										const u = 2 * t * Math.PI / Et,
											d = 360 * t / Et + r,
											h = It * Math.cos(u) + p,
											v = Rt * Math.sin(u) + g;
										let w = null;
										if ("custom" === m && "custom" === lt) w = s(l + h, c + v, y, b, d, f);
										else if ("text" === lt || "textSymbols" === lt || "emojis" === lt) w = o(l + h, c + v, y, b, d, f);
										else {
											const e = {
												...b,
												transform: "translate(".concat(h, ", ").concat(v, ") rotate(").concat(d, ", ").concat(l, ", ").concat(c, ") scale(").concat(f, ")")
											};
											w = rn(m, l, c, y, e)
										}
										w && n.push(e.cloneElement(w, {
											key: "".concat(a, "-").concat(i, "-").concat(t)
										}))
									} else {
										let t = null;
										if ("custom" === m && "custom" === lt) t = s(l + p, c + g, y, b, r, f);
										else if ("text" === lt || "textSymbols" === lt || "emojis" === lt) t = o(l + p, c + g, y, b, r, f);
										else {
											const e = {
												...b,
												transform: "translate(".concat(p, ", ").concat(g, ") rotate(").concat(r, ", ").concat(l, ", ").concat(c, ") scale(").concat(f, ")")
											};
											t = rn(m, l, c, y, e)
										}
										t && n.push(e.cloneElement(t, {
											key: "".concat(a, "-").concat(i)
										}))
									}
							}
						return n
					}), [w, Wt.height, Wt.width, u, j, O, nn, vp, E, I, R, z, M, U, X, te, oe, ce, Ge, Ke, Xe, wp, Oe, h, Me, Ue, Ct, Et, It, Rt, m, K, Pt, Lt, Ft, rn, ut, ht, pt, mt, yt, wt, lt, Qt, bt, xt]),
					sn = (0, e.useMemo)((() => an(H)), [an, H]),
					on = (0, e.useCallback)((() => {
						let e = "",
							t = "";
						switch (de) {
							case "linear":
								e = '\n          <linearGradient id="backgroundGradient" gradientTransform="rotate('.concat(ve, ')">\n            <stop offset="0%" stop-color="').concat(fe, '" />\n            <stop offset="100%" stop-color="').concat(ge, '" />\n          </linearGradient>\n        ');
								break;
							case "radial":
								e = '\n          <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="'.concat(Bt, '%">\n            <stop offset="0%" stop-color="').concat(fe, '" />\n            <stop offset="100%" stop-color="').concat(ge, '" />\n          </radialGradient>\n        ')
						}
						switch (Oe) {
							case "linear":
								t = '\n          <linearGradient id="shapeGradient" gradientTransform="rotate('.concat(ze, ')">\n            <stop offset="0%" stop-color="').concat(Me, '" />\n            <stop offset="100%" stop-color="').concat(Ue, '" />\n          </linearGradient>\n        ');
								break;
							case "radial":
								t = '\n          <radialGradient id="shapeGradient" cx="50%" cy="50%" r="'.concat(qt, '%">\n            <stop offset="0%" stop-color="').concat(Me, '" />\n            <stop offset="100%" stop-color="').concat(Ue, '" />\n          </radialGradient>\n        ')
						}
						return e + t
					}), [de, ve, fe, ge, Oe, ze, Me, Ue, Bt, qt]),
					ln = (0, e.useCallback)((() => "solid" === de ? p : "angular" === de ? "url(#angularGradient)" : "radial" === de ? "url(#gradientBox)" : "url(#backgroundGradient)"), [de, p]),
					cn = (0, e.useCallback)((function() {
						const e = an(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0);
						let t;
						"solid" === de ? t = p : "linear" !== de && "radial" !== de || (t = "url(#backgroundGradient)");
						return '\n      <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(Wt.width, '" height="').concat(Wt.height, "\">\n        <defs>\n          <style>\n            @import url('https://fonts.googleapis.com/css2?family=").concat(Qt.replace(" ", "+"), "&display=swap');\n            text { font-family: '").concat(Qt, "', sans-serif; }\n          </style>\n          ").concat(on(), '\n        </defs>\n        <rect width="100%" height="100%" fill="').concat(t, '" />\n        <g>\n          ').concat(e.map((e => r.renderToString(e))).join(""), "\n        </g>\n      </svg>\n    ").replace(/^\s+/gm, "").trim()
					}), [an, de, p, Wt, on, Qt]);
				(0, e.useEffect)((() => {
					const e = kf.onAuthStateChanged((e => {
						Re(e), e || De(!0)
					}));
					return () => e()
				}), []);
				const un = (0, e.useCallback)((() => {
					const e = new URLSearchParams(window.location.search);
					if (n(yp(e.get("maxSize"), 15)), c(yp(e.get("minSize"), 1)), d(yp(e.get("spacing"), 20)), f(e.get("shapeColor") || "#ffffff"), g(e.get("backgroundColor") || "#000000"), b(e.get("patternType") || "lines"), bt(e.get("selectedEmoji") || "\ud83d\ude0a"), xt(e.get("selectedTextSymbol") || "\u2605"), ct(e.get("customSvgMode") || null), x(yp(e.get("rotation"), 0)), S(e.get("gradientType") || "angular"), _(e.get("aspectRatio") || "16:9"), T(bp(e.get("randomizeOpacity"), !1)), N(yp(e.get("minOpacity"), .3)), A(yp(e.get("maxOpacity"), 1)), D(bp(e.get("randomizePosition"), !1)), L(yp(e.get("positionRandomness"), 5)), F(bp(e.get("offsetRotation"), !1)), V(yp(e.get("rotationIncrement"), 5)), B(bp(e.get("animateRotation"), !1)), q(yp(e.get("animationDuration"), 10)), Q(e.get("customSvgCode") || ""), Y(bp(e.get("animateOpacity"), !1)), J(yp(e.get("opacityAnimationDuration"), 5)), ne(bp(e.get("animateScale"), !1)), ie(yp(e.get("scaleAnimationDuration"), 5)), le(yp(e.get("minScale"), .9)), ue(yp(e.get("maxScale"), 1.2)), he(e.get("backgroundType") || "solid"), pe(e.get("gradientColor1") || "#000000"), me(e.get("gradientColor2") || "#333333"), ye(yp(e.get("gradientAngle"), 0)), Ce(yp(e.get("gradientPosition"), 0)), Ee(yp(e.get("translationX"), 0)), Ie(yp(e.get("translationY"), 0)), Le(e.get("shapeColorType") || "solid"), Fe(e.get("shapeGradientColor1") || "#ffffff"), Ve(e.get("shapeGradientColor2") || "#000000"), Be(yp(e.get("shapeGradientAngle"), 0)), qe(bp(e.get("animateTranslation"), !1)), We(yp(e.get("translationAnimationDuration"), 5)), Qe(yp(e.get("translationDistanceX"), 10)), Ye(yp(e.get("translationDistanceY"), 10)), et(bp(e.get("incrementTranslation"), !1)), nt(yp(e.get("translationIncrementX"), 1)), it(yp(e.get("translationIncrementY"), 1)), dt(e.get("textInput") || "Hello"), ft(e.get("fontWeight") || "normal"), gt(e.get("fontStyle") || "normal"), vt(yp(e.get("fontSize"), 24)), _t(bp(e.get("rotateCopies"), !1)), Tt(yp(e.get("numberOfCopies"), 3)), Nt(yp(e.get("rotateOffsetX"), 0)), At(yp(e.get("rotateOffsetY"), 0)), jt(bp(e.get("animateBlur"), !1)), Ot(yp(e.get("blurAnimationDuration"), 5)), Mt(yp(e.get("minBlur"), 0)), Ut(yp(e.get("maxBlur"), 10)), Gt(yp(e.get("radialGradientRadius"), 50)), Ht(yp(e.get("shapeRadialGradientRadius"), 50)), "true" === e.get("unsubscribe") && e.get("email") && Zt(!0), "true" === e.get("success")) {
						tn(!0), e.delete("success");
						const t = "".concat(window.location.pathname).concat(e.toString() ? "?".concat(e.toString()) : "");
						window.history.replaceState({}, "", t)
					}
					console.log("State updated from URL params")
				}), [n, c, d, f, g, b, bt, xt, ct, x, S, _, T, N, A, D, L, F, V, B, q, Q, Y, J, ne, ie, le, ue, he, pe, me, ye, Ce, Ee, Ie, Le, Fe, Ve, Be, qe, We, Qe, Ye, et, nt, it, dt, ft, gt, vt, jt, Ot, Mt, Ut, Gt, Ht]);
				(0, e.useEffect)((() => {
					un();
					const e = () => {
						un()
					};
					window.addEventListener("popstate", e), window.addEventListener("hashchange", e);
					const t = setInterval((() => {
						var t;
						const n = window.location.href;
						n !== (null === (t = window.history.state) || void 0 === t ? void 0 : t.lastUrl) && (window.history.replaceState({
							...window.history.state,
							lastUrl: n
						}, ""), e())
					}), 100);
					return () => {
						window.removeEventListener("popstate", e), window.removeEventListener("hashchange", e), clearInterval(t)
					}
				}), [un]), (0, e.useEffect)((() => {
					if (Kt.current) return void(Kt.current = !1);
					const e = new URLSearchParams;
					e.set("maxSize", t.toString()), e.set("minSize", o.toString()), e.set("spacing", u.toString()), e.set("shapeColor", h), e.set("backgroundColor", p), e.set("patternType", m), lt ? e.set("customSvgMode", lt) : e.delete("customSvgMode"), e.set("rotation", w.toString()), e.set("gradientType", k), e.set("aspectRatio", C), e.set("randomizeOpacity", E.toString()), e.set("minOpacity", I.toString()), e.set("maxOpacity", R.toString()), e.set("randomizePosition", j.toString()), e.set("positionRandomness", O.toString()), e.set("offsetRotation", M.toString()), e.set("rotationIncrement", U.toString()), e.set("animateRotation", z.toString()), e.set("animationDuration", G.toString()), e.set("customSvgCode", K), e.set("animateOpacity", X.toString()), e.set("opacityAnimationDuration", $.toString()), e.set("animateScale", te.toString()), e.set("scaleAnimationDuration", re.toString()), e.set("minScale", oe.toString()), e.set("maxScale", ce.toString()), e.set("backgroundType", de), e.set("gradientColor1", fe), e.set("gradientColor2", ge), e.set("gradientAngle", ve.toString()), e.set("gradientPosition", Se.toString()), e.set("translationX", _e.toString()), e.set("translationY", Te.toString()), e.set("shapeColorType", Oe), e.set("shapeGradientColor1", Me), e.set("shapeGradientColor2", Ue), e.set("shapeGradientAngle", ze.toString()), e.set("animateTranslation", Ge.toString()), e.set("translationAnimationDuration", He.toString()), e.set("translationDistanceX", Ke.toString()), e.set("translationDistanceY", Xe.toString()), e.set("incrementTranslation", Ze.toString()), e.set("translationIncrementX", tt.toString()), e.set("translationIncrementY", rt.toString()), e.set("textInput", ut), e.set("fontWeight", ht), e.set("fontStyle", pt), e.set("fontSize", mt.toString()), e.set("rotateCopies", Ct.toString()), e.set("numberOfCopies", Et.toString()), e.set("rotateOffsetX", It.toString()), e.set("rotateOffsetY", Rt.toString()), e.set("animateBlur", Pt.toString()), e.set("blurAnimationDuration", Dt.toString()), e.set("minBlur", Lt.toString()), e.set("maxBlur", Ft.toString()), e.set("radialGradientRadius", Bt.toString()), e.set("shapeRadialGradientRadius", qt.toString()), e.set("selectedEmoji", yt), e.set("selectedTextSymbol", wt);
					const n = "".concat(window.location.pathname, "?").concat(e.toString());
					mp(n)
				}), [t, o, u, h, p, m, lt, w, k, C, E, I, R, j, O, M, U, z, G, K, X, $, te, re, oe, ce, de, fe, ge, ve, Se, _e, Te, Oe, Me, Ue, ze, Ge, He, Ke, Xe, Ze, tt, rt, ut, ht, pt, mt, Pt, Dt, Lt, Ft, Bt, qt, yt, wt]);
				(0, e.useEffect)((() => {
					const e = kf.onAuthStateChanged((e => {
						Re(e), e ? xp(e.uid).then(Pe) : (De(!0), Pe(!1))
					}));
					return () => e()
				}), []);
				const dn = e => {
						window.history.pushState({}, "", e), un()
					},
					hn = async () => {
						if (Ne) {
							st(!0);
							try {
								await iu(lc(Sf, "savedDesigns"), {
									userId: Ne.uid,
									url: window.location.href,
									backgroundColor: p,
									shapeColor: h,
									patternType: m,
									backgroundType: de,
									gradientColor1: fe,
									gradientColor2: ge,
									gradientAngle: ve,
									shapeColorType: Oe,
									shapeGradientColor1: Me,
									shapeGradientColor2: Ue,
									shapeGradientAngle: ze
								}), ot.current && await ot.current.loadSavedDesigns()
							} catch (e) {
								console.error("Error saving design:", e)
							} finally {
								st(!1)
							}
						}
					};
				return (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(Cf, {
						isOpen: je,
						onSignIn: e => {
							Re(e), De(!1), e && xp(e.uid)
						}
					}), (0, i.jsx)(fp, {
						isOpen: kt,
						onClose: () => St(!1),
						user: Ne
					}), (0, i.jsxs)("div", {
						className: "text-left min-h-screen text-neutral-900 dark:text-neutral-100 font-mono lg:pr-96",
						children: [(0, i.jsxs)("div", {
							className: "px-4 max-w-4xl mx-auto",
							style: {
								paddingTop: "".concat(be + 28, "px")
							},
							children: [(0, i.jsx)("div", {
								className: "fixed left-0 top-0 w-full h-32 bg-neutral-100 dark:bg-neutral-950 lg:mr-96 z-9",
								style: {
									height: "".concat(be + 16, "px")
								}
							}), (0, i.jsx)("div", {
								className: "fixed top-4 left-0 right-0 flex justify-center lg:mr-96 z-10",
								ref: xe,
								children: (0, i.jsx)("div", {
									className: "w-full max-w-[896px] px-4",
									children: (0, i.jsx)("div", {
										className: "w-full max-h-[500px] overflow-hidden bg-black",
										style: {
											aspectRatio: C.replace(":", "/")
										},
										children: (0, i.jsxs)("svg", {
											ref: ke,
											viewBox: "0 0 ".concat(Wt.width, " ").concat(Wt.height),
											className: "w-full h-full border border-neutral-800",
											preserveAspectRatio: "xMidYMid meet",
											children: [(0, i.jsx)("defs", {
												dangerouslySetInnerHTML: {
													__html: on()
												}
											}), "radial" === de ? (0, i.jsxs)("g", {
												children: [(0, i.jsx)("rect", {
													width: "100%",
													height: "100%",
													fill: p
												}), (0, i.jsx)("circle", {
													cx: "50%",
													cy: "50%",
													r: "50%",
													fill: "url(#backgroundGradient)"
												})]
											}) : (0, i.jsx)("rect", {
												width: "100%",
												height: "100%",
												fill: ln()
											}), sn]
										})
									})
								})
							}), (0, i.jsxs)("div", {
								className: "gap-4 mb-4",
								children: [(0, i.jsx)(P, {
									patternType: m,
									setPatternType: e => {
										b(e), "custom" === e && 20 === u && 15 === t && (d(112), n(70)), "custom" !== e && ct(null)
									},
									customSvgCode: K,
									setCustomSvgCode: Q,
									isPaidUser: Ae,
									customSvgMode: lt,
									setCustomSvgMode: ct,
									textInput: ut,
									setTextInput: dt,
									fontWeight: ht,
									setFontWeight: ft,
									fontStyle: pt,
									setFontStyle: gt,
									fontSize: mt,
									setFontSize: vt,
									selectedEmoji: yt,
									setSelectedEmoji: bt,
									selectedTextSymbol: wt,
									setSelectedTextSymbol: xt,
									fontFamily: Qt,
									setFontFamily: Xt,
									setShowPricingModal: $t
								}), (0, i.jsx)("hr", {
									className: "h-px my-4 bg-neutral-200 border-0 dark:bg-neutral-900"
								}), (0, i.jsx)(l, {
									gradientType: k,
									setGradientType: S,
									aspectRatio: C,
									setAspectRatio: _,
									minSize: o,
									setMinSize: c,
									maxSize: t,
									setMaxSize: n,
									spacing: u,
									setSpacing: d,
									rotation: w,
									setRotation: x,
									gradientPosition: Se,
									setGradientPosition: Ce,
									translationX: _e,
									setTranslationX: Ee,
									translationY: Te,
									setTranslationY: Ie
								}), (0, i.jsx)("hr", {
									className: "h-px my-4 bg-neutral-200 border-0 dark:bg-neutral-900"
								}), (0, i.jsxs)("div", {
									className: "grid grid-cols-2 gap-4 my-4",
									children: [(0, i.jsx)(s, {
										randomizePosition: j,
										setRandomizePosition: D,
										positionRandomness: O,
										setPositionRandomness: L,
										offsetRotation: M,
										setOffsetRotation: F,
										rotationIncrement: U,
										setRotationIncrement: V,
										randomizeOpacity: E,
										setRandomizeOpacity: T,
										minOpacity: I,
										setMinOpacity: N,
										maxOpacity: R,
										setMaxOpacity: A,
										incrementTranslation: Ze,
										setIncrementTranslation: et,
										translationIncrementX: tt,
										setTranslationIncrementX: nt,
										translationIncrementY: rt,
										setTranslationIncrementY: it,
										rotateCopies: Ct,
										setRotateCopies: _t,
										numberOfCopies: Et,
										setNumberOfCopies: Tt,
										rotateOffsetX: It,
										setRotateOffsetX: Nt,
										rotateOffsetY: Rt,
										setRotateOffsetY: At
									}), (0, i.jsx)(a, {
										animateRotation: z,
										setAnimateRotation: B,
										animationDuration: G,
										setAnimationDuration: q,
										animateOpacity: X,
										setAnimateOpacity: Y,
										opacityAnimationDuration: $,
										setOpacityAnimationDuration: J,
										animateScale: te,
										setAnimateScale: ne,
										scaleAnimationDuration: re,
										setScaleAnimationDuration: ie,
										minScale: oe,
										setMinScale: le,
										maxScale: ce,
										setMaxScale: ue,
										animateTranslation: Ge,
										setAnimateTranslation: qe,
										translationAnimationDuration: He,
										setTranslationAnimationDuration: We,
										translationDistanceX: Ke,
										setTranslationDistanceX: Qe,
										translationDistanceY: Xe,
										setTranslationDistanceY: Ye,
										animateBlur: Pt,
										setAnimateBlur: jt,
										blurAnimationDuration: Dt,
										setBlurAnimationDuration: Ot,
										minBlur: Lt,
										setMinBlur: Mt,
										maxBlur: Ft,
										setMaxBlur: Ut
									})]
								})]
							}), (0, i.jsx)("hr", {
								className: "h-px my-4 bg-neutral-200 border-0 dark:bg-neutral-900"
							})]
						}), (0, i.jsxs)("div", {
							className: "px-4 max-w-4xl mx-auto lg:max-w-96 lg:h-screen lg:fixed lg:right-0 lg:top-0 lg:bg-neutral-200 lg:dark:bg-neutral-900 lg:overflow-y-auto",
							children: [(0, i.jsxs)("div", {
								className: "my-4 hidden lg:flex justify-between w-full",
								children: [(0, i.jsxs)("div", {
									className: "flex gap-2",
									children: [(0, i.jsx)(If, {}), Ne && (0, i.jsxs)("button", {
										onClick: hn,
										disabled: at,
										className: "bg-neutral-800 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
										children: [(0, i.jsx)(gp, {
											className: "h-4 w-4"
										}), at ? "..." : ""]
									})]
								}), (0, i.jsxs)("div", {
									className: "flex gap-2",
									children: [(0, i.jsx)(Ef, {}), (0, i.jsx)(Qf, {
										user: Ne,
										isPaidUser: Ae,
										onOpenFeedbackModal: () => St(!0),
										setShowPricingModal: $t
									})]
								})]
							}), (0, i.jsx)("hr", {
								className: "h-px my-4 border-0 bg-neutral-200 lg:bg-neutral-300 dark:bg-neutral-900 lg:dark:bg-neutral-800 hidden lg:block"
							}), (0, i.jsx)(v, {
								backgroundType: de,
								setBackgroundType: he,
								backgroundColor: p,
								setBackgroundColor: g,
								gradientColor1: fe,
								setGradientColor1: pe,
								gradientColor2: ge,
								setGradientColor2: me,
								gradientAngle: ve,
								setGradientAngle: ye,
								shapeColor: h,
								setShapeColor: f,
								shapeColorType: Oe,
								setShapeColorType: Le,
								shapeGradientColor1: Me,
								setShapeGradientColor1: Fe,
								shapeGradientColor2: Ue,
								setShapeGradientColor2: Ve,
								shapeGradientAngle: ze,
								setShapeGradientAngle: Be,
								radialGradientRadius: Bt,
								setRadialGradientRadius: Gt,
								shapeRadialGradientRadius: qt,
								setShapeRadialGradientRadius: Ht
							}), (0, i.jsx)("hr", {
								className: "h-px my-4 border-0 bg-neutral-200 lg:bg-neutral-300 dark:bg-neutral-900 lg:dark:bg-neutral-800"
							}), (0, i.jsx)(Gf, {
								ref: ot,
								user: Ne,
								currentUrl: window.location.href,
								onDesignSelect: dn,
								backgroundColor: p,
								shapeColor: h,
								patternType: m,
								backgroundType: de,
								gradientColor1: fe,
								gradientColor2: ge,
								gradientAngle: ve,
								shapeColorType: Oe,
								shapeGradientColor1: Me,
								shapeGradientColor2: Ue,
								shapeGradientAngle: ze
							}),//hack: remove hr by ezshine
							// (0, i.jsx)("hr", {
							// 	className: "h-px my-4 border-0 bg-neutral-200 lg:bg-neutral-300 dark:bg-neutral-900 lg:dark:bg-neutral-800"
							// }), 
							(0, i.jsx)(Hf, {
								user: Ne,
								currentUrl: window.location.href,
								onDesignSelect: dn,
								backgroundColor: p,
								shapeColor: h,
								patternType: m,
								backgroundType: de,
								gradientColor1: fe,
								gradientColor2: ge,
								gradientAngle: ve,
								shapeColorType: Oe,
								shapeGradientColor1: Me,
								shapeGradientColor2: Ue,
								shapeGradientAngle: ze,
								isPaidUser: Ae,
								setShowPricingModal: $t
							}), 
							//hack: remove hr by ezshine
							// (0, i.jsx)("hr", {
							// 	className: "h-px my-4 border-0 bg-neutral-200 lg:bg-neutral-300 dark:bg-neutral-900 lg:dark:bg-neutral-800"
							// }),
							 (0, i.jsxs)("div", {
								className: "my-4  lg:hidden flex justify-between w-full",
								children: [(0, i.jsxs)("div", {
									className: "flex gap-2",
									children: [(0, i.jsx)(If, {}), Ne && (0, i.jsxs)("button", {
										onClick: hn,
										disabled: at,
										className: "bg-neutral-800 hover:bg-neutral-700 text-white text-xs px-4 py-3 rounded-lg flex items-center",
										children: [(0, i.jsx)(gp, {
											className: "mr-2 h-4 w-4"
										}), at ? "Saving..." : "Save"]
									})]
								}), (0, i.jsxs)("div", {
									className: "flex gap-2",
									children: [(0, i.jsx)(Ef, {}), (0, i.jsx)(Qf, {
										user: Ne,
										isPaidUser: Ae,
										onOpenFeedbackModal: () => St(!0),
										setShowPricingModal: $t
									})]
								})]
							}), (0, i.jsx)("hr", {
								className: "h-px my-4 border-0 bg-neutral-200 lg:bg-neutral-300 dark:bg-neutral-900 lg:dark:bg-neutral-800 lg:hidden"
							}), (0, i.jsx)(Uf, {
								generateSVGContent: cn,
								animateRotation: z,
								animationDuration: G,
								animateOpacity: X,
								opacityAnimationDuration: $,
								animateScale: te,
								scaleAnimationDuration: re,
								minScale: oe,
								maxScale: ce,
								minOpacity: I,
								maxOpacity: R,
								patternType: m,
								aspectRatio: C,
								svgRef: ke,
								backgroundColor: p,
								width: Wt.width,
								height: Wt.height,
								gradientType: k,
								gradientPosition: Se,
								spacing: u,
								rotation: w,
								randomizePosition: j,
								positionRandomness: O,
								offsetRotation: M,
								rotationIncrement: U,
								translationX: _e,
								translationY: Te,
								customSvgCode: K,
								shapeColor: h,
								minSize: o,
								maxSize: t,
								randomizeOpacity: E,
								isPaidUser: Ae,
								generatePattern: an,
								backgroundType: de,
								gradientColor1: fe,
								gradientColor2: ge,
								gradientAngle: ve,
								shapeColorType: Oe,
								shapeGradientColor1: Me,
								shapeGradientColor2: Ue,
								shapeGradientAngle: ze,
								radialGradientRadius: Bt,
								shapeRadialGradientRadius: qt,
								fontFamily: Qt,
								textInput: ut,
								fontWeight: ht,
								fontStyle: pt,
								fontSize: mt,
								customSvgMode: lt,
								animateTranslation: Ge,
								translationAnimationDuration: He,
								translationDistanceX: Ke,
								translationDistanceY: Xe,
								incrementTranslation: Ze,
								translationIncrementX: tt,
								translationIncrementY: rt,
								rotateCopies: Ct,
								numberOfCopies: Et,
								rotateOffsetX: It,
								rotateOffsetY: Rt,
								animateBlur: Pt,
								blurAnimationDuration: Dt,
								minBlur: Lt,
								maxBlur: Ft,
								animationProgress: H,
								setShowPricingModal: $t
							}), (0, i.jsx)(Nf, {})]
						}), (0, i.jsx)(dp, {
							isOpen: Yt,
							onClose: () => $t(!1),
							user: Ne
						}), (0, i.jsx)(hp, {
							isOpen: en,
							onClose: () => tn(!1)
						}), (0, i.jsx)(pp, {
							isOpen: Jt,
							onClose: () => Zt(!1)
						})]
					})]
				})
			};
		const Sp = function() {
				return (0, i.jsx)("div", {
					className: "App bg-neutral-100 dark:bg-neutral-950",
					children: (0, i.jsx)(kp, {})
				})
			},
			Cp = e => {
				e && e instanceof Function && n.e(453).then(n.bind(n, 453)).then((t => {
					let {
						getCLS: n,
						getFID: r,
						getFCP: i,
						getLCP: a,
						getTTFB: s
					} = t;
					n(e), r(e), i(e), a(e), s(e)
				}))
			};
		t.createRoot(document.getElementById("root")).render((0, i.jsx)(e.StrictMode, {
			children: (0, i.jsx)(Sp, {})
		})), Cp()
	})()
})();
//# sourceMappingURL=main.2af36c97.js.map