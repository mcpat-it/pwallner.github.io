(function (a, e) {
    function g(b) {
        return f.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : !1
    }
    function h(b) {
        if (!Ra[b]) {
            var l = t.body,
                a = f("<" + b + ">").appendTo(l),
                s = a.css("display");
            a.remove();
            if (s === "none" || s === "") {
                ca || (ca = t.createElement("iframe"), ca.frameBorder = ca.width = ca.height = 0);
                l.appendChild(ca);
                if (!ta || !ca.createElement) ta = (ca.contentWindow || ca.contentDocument).document, ta.write((t.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), ta.close();
                a = ta.createElement(b);
                ta.body.appendChild(a);
                s = f.css(a, "display");
                l.removeChild(ca)
            }
            Ra[b] = s
        }
        return Ra[b]
    }
    function k(b, l) {
        var a = {};
        f.each(Ya.concat.apply([], Ya.slice(0, l)), function () {
            a[this] = b
        });
        return a
    }
    function p() {
        Ka = e
    }
    function q() {
        setTimeout(p, 0);
        return Ka = f.now()
    }
    function w() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function v(b, l, a, s) {
        if (f.isArray(l)) f.each(l, function (l, e) {
            a || lb.test(b) ? s(b, e) : v(b + "[" + (typeof e == "object" || f.isArray(e) ? l : "") + "]", e, a, s)
        });
        else if (!a && l != null && typeof l == "object") for (var e in l) v(b + "[" + e + "]", l[e], a, s);
        else s(b, l)
    }
    function o(b, l, a, f, n, y) {
        n = n || l.dataTypes[0];
        y = y || {};
        y[n] = !0;
        for (var n = b[n], g = 0, h = n ? n.length : 0, Ta = b === Sa, j; g < h && (Ta || !j); g++) j = n[g](l, a, f), typeof j == "string" && (!Ta || y[j] ? j = e : (l.dataTypes.unshift(j), j = o(b, l, a, f, j, y)));
        (Ta || !j) && !y["*"] && (j = o(b, l, a, f, "*", y));
        return j
    }
    function G(b) {
        return function (l, a) {
            var m;
            typeof l != "string" && (a = l, l = "*");
            if (f.isFunction(a)) for (var s = l.toLowerCase().split(Za), e = 0, g = s.length, E, h; e < g; e++) E = s[e], (h = /^\+/.test(E)) && (E = E.substr(1) || "*"), m = b[E] = b[E] || [], E = m, E[h ? "unshift" : "push"](a)
        }
    }
    function F(b, l, a) {
        var e = l === "width" ? b.offsetWidth : b.offsetHeight,
            n = l === "width" ? mb : nb;
        if (e > 0) return a !== "border" && f.each(n, function () {
            a || (e -= parseFloat(f.css(b, "padding" + this)) || 0);
            a === "margin" ? e += parseFloat(f.css(b, a + this)) || 0 : e -= parseFloat(f.css(b, "border" + this + "Width")) || 0
        }), e + "px";
        e = ua(b, l, l);
        if (e < 0 || e == null) e = b.style[l] || 0;
        e = parseFloat(e) || 0;
        a && f.each(n, function () {
            e += parseFloat(f.css(b, "padding" + this)) || 0;
            a !== "padding" && (e += parseFloat(f.css(b, "border" + this + "Width")) || 0);
            a === "margin" && (e += parseFloat(f.css(b, a + this)) || 0)
        });
        return e + "px"
    }
    function r(b, l) {
        l.src ? f.ajax({
            url: l.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((l.text || l.textContent || l.innerHTML || "").replace(ob, "/*$0*/"));
        l.parentNode && l.parentNode.removeChild(l)
    }
    function Q(b) {
        f.nodeName(b, "input") ? A(b) : "getElementsByTagName" in b && f.grep(b.getElementsByTagName("input"), A)
    }
    function A(b) {
        if (b.type === "checkbox" || b.type === "radio") b.defaultChecked = b.checked
    }
    function u(b) {
        return "getElementsByTagName" in b ? b.getElementsByTagName("*") : "querySelectorAll" in b ? b.querySelectorAll("*") : []
    }
    function I(b, l) {
        var a;
        if (l.nodeType === 1) {
            l.clearAttributes && l.clearAttributes();
            l.mergeAttributes && l.mergeAttributes(b);
            a = l.nodeName.toLowerCase();
            if (a === "object") l.outerHTML = b.outerHTML;
            else if (a !== "input" || b.type !== "checkbox" && b.type !== "radio") if (a === "option") l.selected = b.defaultSelected;
            else {
                if (a === "input" || a === "textarea") l.defaultValue = b.defaultValue
            } else b.checked && (l.defaultChecked = l.checked = b.checked), l.value !== b.value && (l.value = b.value);
            l.removeAttribute(f.expando)
        }
    }

    function W(b, l) {
        if (l.nodeType === 1 && f.hasData(b)) {
            var a = f.expando,
                e = f.data(b),
                n = f.data(l, e);
            if (e = e[a]) {
                var g = e.events,
                    n = n[a] = f.extend({}, e);
                if (g) {
                    delete n.handle;
                    n.events = {};
                    for (var E in g) {
                        a = 0;
                        for (e = g[E].length; a < e; a++) f.event.add(l, E + (g[E][a].namespace ? "." : "") + g[E][a].namespace, g[E][a], g[E][a].data)
                    }
                }
            }
        }
    }
    function S(b, l, a) {
        l = l || 0;
        if (f.isFunction(l)) return f.grep(b, function (b, f) {
            return !!l.call(b, f, b) === a
        });
        if (l.nodeType) return f.grep(b, function (b) {
            return b === l === a
        });
        if (typeof l == "string") {
            var e = f.grep(b, function (b) {
                return b.nodeType === 1
            });
            if (Da.test(l)) return f.filter(l, e, !a);
            l = f.filter(l, e)
        }
        return f.grep(b, function (b) {
            return f.inArray(b, l) >= 0 === a
        })
    }
    function O(b, l) {
        return (b && b !== "*" ? b + "." : "") + l.replace(da, "`").replace(ea, "&")
    }
    function va(b) {
        var l, a, e, n, g, E, h, j, k, r, p, t = [];
        n = [];
        g = f._data(this, "events");
        if (!(b.liveFired === this || !g || !g.live || b.target.disabled || b.button && b.type === "click")) {
            b.namespace && (p = RegExp("(^|\\.)" + b.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
            b.liveFired = this;
            var o = g.live.slice(0);
            for (h = 0; h < o.length; h++) g = o[h], g.origType.replace(ma, "") === b.type ? n.push(g.selector) : o.splice(h--, 1);
            n = f(b.target).closest(n, b.currentTarget);
            j = 0;
            for (k = n.length; j < k; j++) {
                r = n[j];
                for (h = 0; h < o.length; h++) if (g = o[h], r.selector === g.selector && (!p || p.test(g.namespace)) && !r.elem.disabled) {
                    E = r.elem;
                    e = null;
                    if (g.preType === "mouseenter" || g.preType === "mouseleave") b.type = g.preType, (e = f(b.relatedTarget).closest(g.selector)[0]) && f.contains(E, e) && (e = E);
                    (!e || e !== E) && t.push({
                        elem: E,
                        handleObj: g,
                        level: r.level
                    })
                }
            }
            j = 0;
            for (k = t.length; j < k; j++) {
                n = t[j];
                if (a && n.level > a) break;
                b.currentTarget = n.elem;
                b.data = n.handleObj.data;
                b.handleObj = n.handleObj;
                p = n.handleObj.origHandler.apply(n.elem, arguments);
                if (p === !1 || b.isPropagationStopped()) if (a = n.level, p === !1 && (l = !1), b.isImmediatePropagationStopped()) break
            }
            return l
        }
    }
    function Ea(b, l, a) {
        var s = f.extend({}, a[0]);
        s.type = b;
        s.originalEvent = {};
        s.liveFired = e;
        f.event.handle.call(l, s);
        s.isDefaultPrevented() && a[0].preventDefault()
    }
    function ga() {
        return !0
    }
    function T() {
        return !1
    }
    function ia(b, l, a) {
        var s = l + "defer",
            n = l + "queue",
            g = l + "mark",
            E = f.data(b, s, e, !0);
        E && (a === "queue" || !f.data(b, n, e, !0)) && (a === "mark" || !f.data(b, g, e, !0)) && setTimeout(function () {
            !f.data(b, n, e, !0) && !f.data(b, g, e, !0) && (f.removeData(b, s, !0), E.resolve())
        }, 0)
    }
    function ja(b) {
        for (var l in b) if (l !== "toJSON") return !1;
        return !0
    }
    function Y(b, l, a) {
        if (a === e && b.nodeType === 1) if (a = "data-" + l.replace(H, "$1-$2").toLowerCase(), a = b.getAttribute(a), typeof a == "string") {
            try {
                a = a === "true" ? !0 : a === "false" ? !1 : a === "null" ? null : f.isNaN(a) ? Fa.test(a) ? f.parseJSON(a) : a : parseFloat(a)
            } catch (s) {}
            f.data(b, l, a)
        } else a = e;
        return a
    }
    var t = a.document,
        ha = a.navigator,
        Z = a.location,
        f = function () {
            function b() {
                if (!l.isReady) {
                    try {
                        t.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(b, 1);
                        return
                    }
                    l.ready()
                }
            }
            var l = function (b, a) {
                    return new l.fn.init(b, a, n)
                },
                f = a.jQuery,
                s = a.$,
                n, g = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                E = /\S/,
                h = /^\s+/,
                j = /\s+$/,
                k = /\d/,
                r = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                p = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                F = /(?:^|:|,)(?:\s*\[)+/g,
                u = /(webkit)[ \/]([\w.]+)/,
                R = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                v = /(msie) ([\w.]+)/,
                w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                Ma = /-([a-z])/ig,
                B = function (b, l) {
                    return l.toUpperCase()
                },
                Ga = ha.userAgent,
                Na, wa, pb = Object.prototype.toString,
                Ua = Object.prototype.hasOwnProperty,
                Va = Array.prototype.push,
                Q = Array.prototype.slice,
                A = String.prototype.trim,
                P = Array.prototype.indexOf,
                G = {};
            l.fn = l.prototype = {
                constructor: l,
                init: function (b, a, f) {
                    var m, s;
                    if (!b) return this;
                    if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
                    if (b === "body" && !a && t.body) return this.context = t, this[0] = t.body, this.selector = b, this.length = 1, this;
                    if (typeof b == "string") {
                        b.charAt(0) !== "<" || b.charAt(b.length - 1) !== ">" || b.length < 3 ? m = g.exec(b) : m = [null, b, null];
                        if (m && (m[1] || !a)) {
                            if (m[1]) return s = (a = a instanceof l ? a[0] : a) ? a.ownerDocument || a : t, (f = r.exec(b)) ? l.isPlainObject(a) ? (b = [t.createElement(f[1])], l.fn.attr.call(b, a, !0)) : b = [s.createElement(f[1])] : (f = l.buildFragment([m[1]], [s]), b = (f.cacheable ? l.clone(f.fragment) : f.fragment).childNodes), l.merge(this, b);
                            if ((a = t.getElementById(m[2])) && a.parentNode) {
                                if (a.id !== m[2]) return f.find(b);
                                this.length = 1;
                                this[0] = a
                            }
                            this.context = t;
                            this.selector = b;
                            return this
                        }
                        return !a || a.jquery ? (a || f).find(b) : this.constructor(a).find(b)
                    }
                    if (l.isFunction(b)) return f.ready(b);
                    b.selector !== e && (this.selector = b.selector, this.context = b.context);
                    return l.makeArray(b, this)
                },
                selector: "",
                jquery: "1.6.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return Q.call(this, 0)
                },
                get: function (b) {
                    return b == null ? this.toArray() : b < 0 ? this[this.length + b] : this[b]
                },
                pushStack: function (b, a, f) {
                    var m = this.constructor();
                    l.isArray(b) ? Va.apply(m, b) : l.merge(m, b);
                    m.prevObject = this;
                    m.context = this.context;
                    a === "find" ? m.selector = this.selector + (this.selector ? " " : "") + f : a && (m.selector = this.selector + "." + a + "(" + f + ")");
                    return m
                },
                each: function (b, a) {
                    return l.each(this, b, a)
                },
                ready: function (b) {
                    l.bindReady();
                    Na.done(b);
                    return this
                },
                eq: function (b) {
                    return b === -1 ? this.slice(b) : this.slice(b, +b + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(Q.apply(this, arguments), "slice", Q.call(arguments).join(","))
                },
                map: function (b) {
                    return this.pushStack(l.map(this, function (l, a) {
                        return b.call(l, a, l)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: Va,
                sort: [].sort,
                splice: [].splice
            };
            l.fn.init.prototype = l.fn;
            l.extend = l.fn.extend = function () {
                var b, a, f, m, s, n, g = arguments[0] || {},
                    y = 1,
                    Ma = arguments.length,
                    E = !1;
                typeof g == "boolean" && (E = g, g = arguments[1] || {}, y = 2);
                typeof g != "object" && !l.isFunction(g) && (g = {});
                for (Ma === y && (g = this, --y); y < Ma; y++) if ((b = arguments[y]) != null) for (a in b) f = g[a], m = b[a], g !== m && (E && m && (l.isPlainObject(m) || (s = l.isArray(m))) ? (s ? (s = !1, n = f && l.isArray(f) ? f : []) : n = f && l.isPlainObject(f) ? f : {}, g[a] = l.extend(E, n, m)) : m !== e && (g[a] = m));
                return g
            };
            l.extend({
                noConflict: function (b) {
                    a.$ === l && (a.$ = s);
                    b && a.jQuery === l && (a.jQuery = f);
                    return l
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (b) {
                    b ? l.readyWait++ : l.ready(!0)
                },
                ready: function (b) {
                    if (b === !0 && !--l.readyWait || b !== !0 && !l.isReady) {
                        if (!t.body) return setTimeout(l.ready, 1);
                        l.isReady = !0;
                        b !== !0 && --l.readyWait > 0 || (Na.resolveWith(t, [l]), l.fn.trigger && l(t).trigger("ready").unbind("ready"))
                    }
                },
                bindReady: function () {
                    if (!Na) {
                        Na = l._Deferred();
                        if (t.readyState === "complete") return setTimeout(l.ready, 1);
                        if (t.addEventListener) t.addEventListener("DOMContentLoaded", wa, !1), a.addEventListener("load", l.ready, !1);
                        else if (t.attachEvent) {
                            t.attachEvent("onreadystatechange", wa);
                            a.attachEvent("onload", l.ready);
                            var f = !1;
                            try {
                                f = a.frameElement == null
                            } catch (m) {}
                            t.documentElement.doScroll && f && b()
                        }
                    }
                },
                isFunction: function (b) {
                    return l.type(b) === "function"
                },
                isArray: Array.isArray ||
                function (b) {
                    return l.type(b) === "array"
                },
                isWindow: function (b) {
                    return b && typeof b == "object" && "setInterval" in b
                },
                isNaN: function (b) {
                    return b == null || !k.test(b) || isNaN(b)
                },
                type: function (b) {
                    return b == null ? String(b) : G[pb.call(b)] || "object"
                },
                isPlainObject: function (b) {
                    if (!b || l.type(b) !== "object" || b.nodeType || l.isWindow(b)) return !1;
                    if (b.constructor && !Ua.call(b, "constructor") && !Ua.call(b.constructor.prototype, "isPrototypeOf")) return !1;
                    for (var a in b);
                    return a === e || Ua.call(b, a)
                },
                isEmptyObject: function (b) {
                    for (var l in b) return !1;
                    return !0
                },
                error: function (b) {
                    throw b;
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = l.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (p.test(b.replace(o, "@").replace(q, "]").replace(F, ""))) return (new Function("return " + b))();
                    l.error("Invalid JSON: " + b)
                },
                parseXML: function (b, f, m) {
                    a.DOMParser ? (m = new DOMParser, f = m.parseFromString(b, "text/xml")) : (f = new ActiveXObject("Microsoft.XMLDOM"), f.async = "false", f.loadXML(b));
                    m = f.documentElement;
                    (!m || !m.nodeName || m.nodeName === "parsererror") && l.error("Invalid XML: " + b);
                    return f
                },
                noop: function () {},
                globalEval: function (b) {
                    b && E.test(b) && (a.execScript ||
                    function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (b) {
                    return b.replace(Ma, B)
                },
                nodeName: function (b, l) {
                    return b.nodeName && b.nodeName.toUpperCase() === l.toUpperCase()
                },
                each: function (b, a, f) {
                    var m, s = 0,
                        n = b.length,
                        g = n === e || l.isFunction(b);
                    if (f) if (g) for (m in b) {
                        if (a.apply(b[m], f) === !1) break
                    } else for (; s < n;) {
                        if (a.apply(b[s++], f) === !1) break
                    } else if (g) for (m in b) {
                        if (a.call(b[m], m, b[m]) === !1) break
                    } else for (; s < n;) if (a.call(b[s], s, b[s++]) === !1) break;
                    return b
                },
                trim: A ?
                function (b) {
                    return b == null ? "" : A.call(b)
                } : function (b) {
                    return b == null ? "" : (b + "").replace(h, "").replace(j, "")
                },
                makeArray: function (b, a) {
                    var f = a || [];
                    if (b != null) {
                        var m = l.type(b);
                        b.length == null || m === "string" || m === "function" || m === "regexp" || l.isWindow(b) ? Va.call(f, b) : l.merge(f, b)
                    }
                    return f
                },
                inArray: function (b, l) {
                    if (P) return P.call(l, b);
                    for (var a = 0, f = l.length; a < f; a++) if (l[a] === b) return a;
                    return -1
                },
                merge: function (b, l) {
                    var a = b.length,
                        f = 0;
                    if (typeof l.length == "number") for (var m = l.length; f < m; f++) b[a++] = l[f];
                    else for (; l[f] !== e;) b[a++] = l[f++];
                    b.length = a;
                    return b
                },
                grep: function (b, l, a) {
                    for (var f = [], m, a = !! a, e = 0, s = b.length; e < s; e++) m = !! l(b[e], e), a !== m && f.push(b[e]);
                    return f
                },
                map: function (b, a, f) {
                    var m, s, n = [],
                        g = 0,
                        y = b.length;
                    if (b instanceof l || y !== e && typeof y == "number" && (y > 0 && b[0] && b[y - 1] || y === 0 || l.isArray(b))) for (; g < y; g++) m = a(b[g], g, f), m != null && (n[n.length] = m);
                    else for (s in b) m = a(b[s], s, f), m != null && (n[n.length] = m);
                    return n.concat.apply([], n)
                },
                guid: 1,
                proxy: function (b, a) {
                    if (typeof a == "string") var f = b[a],
                        a = b,
                        b = f;
                    if (!l.isFunction(b)) return e;
                    var m = Q.call(arguments, 2),
                        f = function () {
                            return b.apply(a, m.concat(Q.call(arguments)))
                        };
                    f.guid = b.guid = b.guid || f.guid || l.guid++;
                    return f
                },
                access: function (b, a, f, m, s, n) {
                    var g = b.length;
                    if (typeof a == "object") {
                        for (var y in a) l.access(b, y, a[y], m, s, f);
                        return b
                    }
                    if (f !== e) {
                        m = !n && m && l.isFunction(f);
                        for (y = 0; y < g; y++) s(b[y], a, m ? f.call(b[y], y, s(b[y], a)) : f, n);
                        return b
                    }
                    return g ? s(b[0], a) : e
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (b) {
                    b = b.toLowerCase();
                    b = u.exec(b) || R.exec(b) || v.exec(b) || b.indexOf("compatible") < 0 && w.exec(b) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function b(l, a) {
                        return new b.fn.init(l, a)
                    }
                    l.extend(!0, b, this);
                    b.superclass = this;
                    b.fn = b.prototype = this();
                    b.fn.constructor = b;
                    b.sub = this.sub;
                    b.fn.init = function (f, m) {
                        m && m instanceof l && !(m instanceof b) && (m = b(m));
                        return l.fn.init.call(this, f, m, a)
                    };
                    b.fn.init.prototype = b.fn;
                    var a = b(t);
                    return b
                },
                browser: {}
            });
            l.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b, l) {
                G["[object " + l + "]"] = l.toLowerCase()
            });
            Ga = l.uaMatch(Ga);
            Ga.browser && (l.browser[Ga.browser] = !0, l.browser.version = Ga.version);
            l.browser.webkit && (l.browser.safari = !0);
            E.test(" ") && (h = /^[\s\xA0]+/, j = /[\s\xA0]+$/);
            n = l(t);
            t.addEventListener ? wa = function () {
                t.removeEventListener("DOMContentLoaded", wa, !1);
                l.ready()
            } : t.attachEvent && (wa = function () {
                t.readyState === "complete" && (t.detachEvent("onreadystatechange", wa), l.ready())
            });
            return l
        }(),
        na = "done fail isResolved isRejected promise then always pipe".split(" "),
        xa = [].slice;
    f.extend({
        _Deferred: function () {
            var b = [],
                l, a, e, n = {
                    done: function () {
                        if (!e) {
                            var a = arguments,
                                m, g, h, j, k;
                            l && (k = l, l = 0);
                            m = 0;
                            for (g = a.length; m < g; m++) h = a[m], j = f.type(h), j === "array" ? n.done.apply(n, h) : j === "function" && b.push(h);
                            k && n.resolveWith(k[0], k[1])
                        }
                        return this
                    },
                    resolveWith: function (f, n) {
                        if (!e && !l && !a) {
                            n = n || [];
                            a = 1;
                            try {
                                for (; b[0];) b.shift().apply(f, n)
                            } finally {
                                l = [f, n], a = 0
                            }
                        }
                        return this
                    },
                    resolve: function () {
                        n.resolveWith(this, arguments);
                        return this
                    },
                    isResolved: function () {
                        return !!a || !! l
                    },
                    cancel: function () {
                        e = 1;
                        b = [];
                        return this
                    }
                };
            return n
        },
        Deferred: function (b) {
            var l = f._Deferred(),
                a = f._Deferred(),
                e;
            f.extend(l, {
                then: function (b, a) {
                    l.done(b).fail(a);
                    return this
                },
                always: function () {
                    return l.done.apply(l, arguments).fail.apply(this, arguments)
                },
                fail: a.done,
                rejectWith: a.resolveWith,
                reject: a.resolve,
                isRejected: a.isResolved,
                pipe: function (b, a) {
                    return f.Deferred(function (m) {
                        f.each({
                            done: [b, "resolve"],
                            fail: [a, "reject"]
                        }, function (b, a) {
                            var e = a[0],
                                s = a[1],
                                n;
                            f.isFunction(e) ? l[b](function () {
                                (n = e.apply(this, arguments)) && f.isFunction(n.promise) ? n.promise().then(m.resolve, m.reject) : m[s](n)
                            }) : l[b](m[s])
                        })
                    }).promise()
                },
                promise: function (b) {
                    if (b == null) {
                        if (e) return e;
                        e = b = {}
                    }
                    for (var a = na.length; a--;) b[na[a]] = l[na[a]];
                    return b
                }
            });
            l.done(a.cancel).fail(l.cancel);
            delete l.cancel;
            b && b.call(l, l);
            return l
        },
        when: function (b) {
            function l(b) {
                return function (l) {
                    a[b] = arguments.length > 1 ? xa.call(arguments, 0) : l;
                    --g || h.resolveWith(h, xa.call(a, 0))
                }
            }
            var a = arguments,
                e = 0,
                n = a.length,
                g = n,
                h = n <= 1 && b && f.isFunction(b.promise) ? b : f.Deferred();
            if (n > 1) {
                for (; e < n; e++) a[e] && f.isFunction(a[e].promise) ? a[e].promise().then(l(e), h.reject) : --g;
                g || h.resolveWith(h, a)
            } else h !== b && h.resolveWith(h, n ? [b] : []);
            return h.promise()
        }
    });
    f.support = function () {
        var b = t.createElement("div"),
            l = t.documentElement,
            a, e, n, g, h, j, k;
        b.setAttribute("className", "t");
        b.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        a = b.getElementsByTagName("*");
        e = b.getElementsByTagName("a")[0];
        if (!a || !a.length || !e) return {};
        n = t.createElement("select");
        g = n.appendChild(t.createElement("option"));
        a = b.getElementsByTagName("input")[0];
        j = {
            leadingWhitespace: b.firstChild.nodeType === 3,
            tbody: !b.getElementsByTagName("tbody").length,
            htmlSerialize: !! b.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            checkOn: a.value === "on",
            optSelected: g.selected,
            getSetAttribute: b.className !== "t",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        a.checked = !0;
        j.noCloneChecked = a.cloneNode(!0).checked;
        n.disabled = !0;
        j.optDisabled = !g.disabled;
        try {
            delete b.test
        } catch (r) {
            j.deleteExpando = !1
        }!b.addEventListener && b.attachEvent && b.fireEvent && (b.attachEvent("onclick", function () {
            j.noCloneEvent = !1
        }), b.cloneNode(!0).fireEvent("onclick"));
        a = t.createElement("input");
        a.value = "t";
        a.setAttribute("type", "radio");
        j.radioValue = a.value === "t";
        a.setAttribute("checked", "checked");
        b.appendChild(a);
        e = t.createDocumentFragment();
        e.appendChild(b.firstChild);
        j.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.innerHTML = "";
        b.style.width = b.style.paddingLeft = "1px";
        n = t.getElementsByTagName("body")[0];
        e = t.createElement(n ? "div" : "body");
        g = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0
        };
        n && f.extend(g, {
            position: "absolute",
            left: -1E3,
            top: -1E3
        });
        for (k in g) e.style[k] = g[k];
        e.appendChild(b);
        l = n || l;
        l.insertBefore(e, l.firstChild);
        j.appendChecked = a.checked;
        j.boxModel = b.offsetWidth === 2;
        "zoom" in b.style && (b.style.display = "inline", b.style.zoom = 1, j.inlineBlockNeedsLayout = b.offsetWidth === 2, b.style.display = "", b.innerHTML = "<div style='width:4px;'></div>", j.shrinkWrapBlocks = b.offsetWidth !== 2);
        b.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        n = b.getElementsByTagName("td");
        a = n[0].offsetHeight === 0;
        n[0].style.display = "";
        n[1].style.display = "none";
        j.reliableHiddenOffsets = a && n[0].offsetHeight === 0;
        b.innerHTML = "";
        t.defaultView && t.defaultView.getComputedStyle && (h = t.createElement("div"), h.style.width = "0", h.style.marginRight = "0", b.appendChild(h), j.reliableMarginRight = (parseInt((t.defaultView.getComputedStyle(h, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        e.innerHTML = "";
        l.removeChild(e);
        if (b.attachEvent) for (k in {
            submit: 1,
            change: 1,
            focusin: 1
        }) h = "on" + k, (a = h in b) || (b.setAttribute(h, "return;"), a = typeof b[h] == "function"), j[k + "Bubbles"] = a;
        e = e = n = g = n = h = b = a = null;
        return j
    }();
    f.boxModel = f.support.boxModel;
    var Fa = /^(?:\{.*\}|\[.*\])$/,
        H = /([a-z])([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (b) {
            b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando];
            return !!b && !ja(b)
        },
        data: function (b, a, m, s) {
            if (f.acceptData(b)) {
                var n = f.expando,
                    g = typeof a == "string",
                    h = b.nodeType,
                    j = h ? f.cache : b,
                    k = h ? b[f.expando] : b[f.expando] && f.expando;
                if (k && (!s || !k || j[k][n]) || !(g && m === e)) {
                    k || (h ? b[f.expando] = k = ++f.uuid : k = f.expando);
                    j[k] || (j[k] = {}, h || (j[k].toJSON = f.noop));
                    if (typeof a == "object" || typeof a == "function") s ? j[k][n] = f.extend(j[k][n], a) : j[k] = f.extend(j[k], a);
                    b = j[k];
                    s && (b[n] || (b[n] = {}), b = b[n]);
                    m !== e && (b[f.camelCase(a)] = m);
                    if (a === "events" && !b[a]) return b[n] && b[n].events;
                    return g ? b[f.camelCase(a)] || b[a] : b
                }
            }
        },
        removeData: function (b, l, e) {
            if (f.acceptData(b)) {
                var s = f.expando,
                    n = b.nodeType,
                    g = n ? f.cache : b,
                    h = n ? b[f.expando] : f.expando;
                if (g[h]) {
                    if (l) {
                        var j = e ? g[h][s] : g[h];
                        if (j && (delete j[l], !ja(j))) return
                    }
                    if (e && (delete g[h][s], !ja(g[h]))) return;
                    l = g[h][s];
                    f.support.deleteExpando || g != a ? delete g[h] : g[h] = null;
                    l ? (g[h] = {}, n || (g[h].toJSON = f.noop), g[h][s] = l) : n && (f.support.deleteExpando ? delete b[f.expando] : b.removeAttribute ? b.removeAttribute(f.expando) : b[f.expando] = null)
                }
            }
        },
        _data: function (b, a, e) {
            return f.data(b, a, e, !0)
        },
        acceptData: function (b) {
            if (b.nodeName) {
                var a = f.noData[b.nodeName.toLowerCase()];
                if (a) return a !== !0 && b.getAttribute("classid") === a
            }
            return !0
        }
    });
    f.fn.extend({
        data: function (b, a) {
            var m = null;
            if (typeof b == "undefined") {
                if (this.length && (m = f.data(this[0]), this[0].nodeType === 1)) for (var s = this[0].attributes, g, y = 0, h = s.length; y < h; y++) g = s[y].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), Y(this[0], g, m[g]));
                return m
            }
            if (typeof b == "object") return this.each(function () {
                f.data(this, b)
            });
            var j = b.split(".");
            j[1] = j[1] ? "." + j[1] : "";
            if (a === e) return m = this.triggerHandler("getData" + j[1] + "!", [j[0]]), m === e && this.length && (m = f.data(this[0], b), m = Y(this[0], b, m)), m === e && j[1] ? this.data(j[0]) : m;
            return this.each(function () {
                var e = f(this),
                    m = [j[0], a];
                e.triggerHandler("setData" + j[1] + "!", m);
                f.data(this, b, a);
                e.triggerHandler("changeData" + j[1] + "!", m)
            })
        },
        removeData: function (b) {
            return this.each(function () {
                f.removeData(this, b)
            })
        }
    });
    f.extend({
        _mark: function (b, a) {
            b && (a = (a || "fx") + "mark", f.data(b, a, (f.data(b, a, e, !0) || 0) + 1, !0))
        },
        _unmark: function (b, a, m) {
            b !== !0 && (m = a, a = b, b = !1);
            if (a) {
                var m = m || "fx",
                    s = m + "mark";
                (b = b ? 0 : (f.data(a, s, e, !0) || 1) - 1) ? f.data(a, s, b, !0) : (f.removeData(a, s, !0), ia(a, m, "mark"))
            }
        },
        queue: function (b, a, m) {
            if (b) {
                var a = (a || "fx") + "queue",
                    s = f.data(b, a, e, !0);
                m && (!s || f.isArray(m) ? s = f.data(b, a, f.makeArray(m), !0) : s.push(m));
                return s || []
            }
        },
        dequeue: function (b, a) {
            var a = a || "fx",
                e = f.queue(b, a),
                s = e.shift();
            s === "inprogress" && (s = e.shift());
            s && (a === "fx" && e.unshift("inprogress"), s.call(b, function () {
                f.dequeue(b, a)
            }));
            e.length || (f.removeData(b, a + "queue", !0), ia(b, a, "queue"))
        }
    });
    f.fn.extend({
        queue: function (b, a) {
            typeof b != "string" && (a = b, b = "fx");
            if (a === e) return f.queue(this[0], b);
            return this.each(function () {
                var e = f.queue(this, b, a);
                b === "fx" && e[0] !== "inprogress" && f.dequeue(this, b)
            })
        },
        dequeue: function (b) {
            return this.each(function () {
                f.dequeue(this, b)
            })
        },
        delay: function (b, a) {
            b = f.fx ? f.fx.speeds[b] || b : b;
            a = a || "fx";
            return this.queue(a, function () {
                var e = this;
                setTimeout(function () {
                    f.dequeue(e, a)
                }, b)
            })
        },
        clearQueue: function (b) {
            return this.queue(b || "fx", [])
        },
        promise: function (b) {
            function a() {
                --y || m.resolveWith(s, [s])
            }
            typeof b != "string" && (b = e);
            var b = b || "fx",
                m = f.Deferred(),
                s = this,
                g = s.length,
                y = 1,
                h = b + "defer",
                j = b + "queue";
            b += "mark";
            for (var k; g--;) if (k = f.data(s[g], h, e, !0) || (f.data(s[g], j, e, !0) || f.data(s[g], b, e, !0)) && f.data(s[g], h, f._Deferred(), !0)) y++, k.done(a);
            a();
            return m.promise()
        }
    });
    var J = /[\n\t\r]/g,
        L = /\s+/,
        oa = /\r/g,
        Ha = /^(?:button|input)$/i,
        Ia = /^(?:button|input|object|select|textarea)$/i,
        Ja = /^a(?:rea)?$/i,
        ka = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        pa = /\:|^on/,
        U, ya;
    f.fn.extend({
        attr: function (b, a) {
            return f.access(this, b, a, !0, f.attr)
        },
        removeAttr: function (b) {
            return this.each(function () {
                f.removeAttr(this, b)
            })
        },
        prop: function (b, a) {
            return f.access(this, b, a, !0, f.prop)
        },
        removeProp: function (b) {
            b = f.propFix[b] || b;
            return this.each(function () {
                try {
                    this[b] = e, delete this[b]
                } catch (a) {}
            })
        },
        addClass: function (b) {
            var a, e, s, g, y, h, j;
            if (f.isFunction(b)) return this.each(function (a) {
                f(this).addClass(b.call(this, a, this.className))
            });
            if (b && typeof b == "string") {
                a = b.split(L);
                e = 0;
                for (s = this.length; e < s; e++) if (g = this[e], g.nodeType === 1) if (!g.className && a.length === 1) g.className = b;
                else {
                    y = " " + g.className + " ";
                    h = 0;
                    for (j = a.length; h < j; h++)~y.indexOf(" " + a[h] + " ") || (y += a[h] + " ");
                    g.className = f.trim(y)
                }
            }
            return this
        },
        removeClass: function (b) {
            var a, m, s, g, y, h, j;
            if (f.isFunction(b)) return this.each(function (a) {
                f(this).removeClass(b.call(this, a, this.className))
            });
            if (b && typeof b == "string" || b === e) {
                a = (b || "").split(L);
                m = 0;
                for (s = this.length; m < s; m++) if (g = this[m], g.nodeType === 1 && g.className) if (b) {
                    y = (" " + g.className + " ").replace(J, " ");
                    h = 0;
                    for (j = a.length; h < j; h++) y = y.replace(" " + a[h] + " ", " ");
                    g.className = f.trim(y)
                } else g.className = ""
            }
            return this
        },
        toggleClass: function (b, a) {
            var e = typeof b,
                s = typeof a == "boolean";
            if (f.isFunction(b)) return this.each(function (e) {
                f(this).toggleClass(b.call(this, e, this.className, a), a)
            });
            return this.each(function () {
                if (e === "string") for (var g, h = 0, j = f(this), k = a, r = b.split(L); g = r[h++];) k = s ? k : !j.hasClass(g), j[k ? "addClass" : "removeClass"](g);
                else if (e === "undefined" || e === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || b === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (b) {
            for (var b = " " + b + " ", a = 0, f = this.length; a < f; a++) if ((" " + this[a].className + " ").replace(J, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (b) {
            var a, m, g = this[0];
            if (!arguments.length) {
                if (g) {
                    if ((a = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type]) && "get" in a && (m = a.get(g, "value")) !== e) return m;
                    m = g.value;
                    return typeof m == "string" ? m.replace(oa, "") : m == null ? "" : m
                }
                return e
            }
            var n = f.isFunction(b);
            return this.each(function (m) {
                var g = f(this),
                    s;
                if (this.nodeType === 1 && (n ? s = b.call(this, m, g.val()) : s = b, s == null ? s = "" : typeof s == "number" ? s += "" : f.isArray(s) && (s = f.map(s, function (b) {
                    return b == null ? "" : b + ""
                })), a = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type], !a || !("set" in a) || a.set(this, s, "value") === e)) this.value = s
            })
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function (b) {
                    var a = b.attributes.value;
                    return !a || a.specified ? b.value : b.text
                }
            },
            select: {
                get: function (b) {
                    var a, e = b.selectedIndex,
                        g = [],
                        n = b.options,
                        b = b.type === "select-one";
                    if (e < 0) return null;
                    for (var h = b ? e : 0, j = b ? e + 1 : n.length; h < j; h++) if (a = n[h], a.selected && (f.support.optDisabled ? !a.disabled : a.getAttribute("disabled") === null) && (!a.parentNode.disabled || !f.nodeName(a.parentNode, "optgroup"))) {
                        a = f(a).val();
                        if (b) return a;
                        g.push(a)
                    }
                    if (b && !g.length && n.length) return f(n[e]).val();
                    return g
                },
                set: function (b, a) {
                    var e = f.makeArray(a);
                    f(b).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), e) >= 0
                    });
                    e.length || (b.selectedIndex = -1);
                    return e
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function (b, a, m, g) {
            var n = b.nodeType;
            if (!b || n === 3 || n === 8 || n === 2) return e;
            if (g && a in f.attrFn) return f(b)[a](m);
            if (!("getAttribute" in b)) return f.prop(b, a, m);
            var h, j;
            (g = n !== 1 || !f.isXMLDoc(b)) && (a = f.attrFix[a] || a, j = f.attrHooks[a], j || (ka.test(a) ? j = ya : U && a !== "className" && (f.nodeName(b, "form") || pa.test(a)) && (j = U)));
            if (m !== e) {
                if (m === null) return f.removeAttr(b, a), e;
                if (j && "set" in j && g && (h = j.set(b, m, a)) !== e) return h;
                b.setAttribute(a, "" + m);
                return m
            }
            if (j && "get" in j && g && (h = j.get(b, a)) !== null) return h;
            h = b.getAttribute(a);
            return h === null ? e : h
        },
        removeAttr: function (b, a) {
            var e;
            b.nodeType === 1 && (a = f.attrFix[a] || a, f.support.getSetAttribute ? b.removeAttribute(a) : (f.attr(b, a, ""), b.removeAttributeNode(b.getAttributeNode(a))), ka.test(a) && (e = f.propFix[a] || a) in b && (b[e] = !1))
        },
        attrHooks: {
            type: {
                set: function (b, a) {
                    if (Ha.test(b.nodeName) && b.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && a === "radio" && f.nodeName(b, "input")) {
                        var e = b.value;
                        b.setAttribute("type", a);
                        e && (b.value = e);
                        return a
                    }
                }
            },
            tabIndex: {
                get: function (b) {
                    var a = b.getAttributeNode("tabIndex");
                    return a && a.specified ? parseInt(a.value, 10) : Ia.test(b.nodeName) || Ja.test(b.nodeName) && b.href ? 0 : e
                }
            },
            value: {
                get: function (b, a) {
                    if (U && f.nodeName(b, "button")) return U.get(b, a);
                    return a in b ? b.value : null
                },
                set: function (b, a, e) {
                    if (U && f.nodeName(b, "button")) return U.set(b, a, e);
                    b.value = a
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (b, a, m) {
            var g = b.nodeType;
            if (!b || g === 3 || g === 8 || g === 2) return e;
            var n, h;
            (g !== 1 || !f.isXMLDoc(b)) && (a = f.propFix[a] || a, h = f.propHooks[a]);
            return m !== e ? h && "set" in h && (n = h.set(b, m, a)) !== e ? n : b[a] = m : h && "get" in h && (n = h.get(b, a)) !== e ? n : b[a]
        },
        propHooks: {}
    });
    ya = {
        get: function (b, a) {
            return f.prop(b, a) ? a.toLowerCase() : e
        },
        set: function (b, a, e) {
            var g;
            a === !1 ? f.removeAttr(b, e) : (g = f.propFix[e] || e, g in b && (b[g] = !0), b.setAttribute(e, e.toLowerCase()));
            return e
        }
    };
    f.support.getSetAttribute || (f.attrFix = f.propFix, U = f.attrHooks.name = f.attrHooks.title = f.valHooks.button = {
        get: function (b, a) {
            var f;
            return (f = b.getAttributeNode(a)) && f.nodeValue !== "" ? f.nodeValue : e
        },
        set: function (b, a, f) {
            if (b = b.getAttributeNode(f)) return b.nodeValue = a
        }
    }, f.each(["width", "height"], function (b, a) {
        f.attrHooks[a] = f.extend(f.attrHooks[a], {
            set: function (b, f) {
                if (f === "") return b.setAttribute(a, "auto"), f
            }
        })
    }));
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (b, a) {
        f.attrHooks[a] = f.extend(f.attrHooks[a], {
            get: function (b) {
                b = b.getAttribute(a, 2);
                return b === null ? e : b
            }
        })
    });
    f.support.style || (f.attrHooks.style = {
        get: function (b) {
            return b.style.cssText.toLowerCase() || e
        },
        set: function (b, a) {
            return b.style.cssText = "" + a
        }
    });
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function () {}
    }));
    f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (b) {
                return b.getAttribute("value") === null ? "on" : b.value
            }
        }
    });
    f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (b, a) {
                if (f.isArray(a)) return b.checked = f.inArray(f(b).val(), a) >= 0
            }
        })
    });
    var ma = /\.(.*)$/,
        j = /^(?:textarea|input|select)$/i,
        da = /\./g,
        ea = / /g,
        aa = /[^\w\s.|`]/g,
        ba = function (b) {
            return b.replace(aa, "\\$&")
        };
    f.event = {
        add: function (b, a, m, g) {
            if (b.nodeType !== 3 && b.nodeType !== 8) {
                if (m === !1) m = T;
                else if (!m) return;
                var n, h;
                m.handler && (n = m, m = n.handler);
                m.guid || (m.guid = f.guid++);
                if (h = f._data(b)) {
                    var j = h.events,
                        k = h.handle;
                    j || (h.events = j = {});
                    k || (h.handle = k = function (b) {
                        return typeof f != "undefined" && (!b || f.event.triggered !== b.type) ? f.event.handle.apply(k.elem, arguments) : e
                    });
                    k.elem = b;
                    for (var a = a.split(" "), r, p = 0, o; r = a[p++];) {
                        h = n ? f.extend({}, n) : {
                            handler: m,
                            data: g
                        };
                        r.indexOf(".") > -1 ? (o = r.split("."), r = o.shift(), h.namespace = o.slice(0).sort().join(".")) : (o = [], h.namespace = "");
                        h.type = r;
                        h.guid || (h.guid = m.guid);
                        var t = j[r],
                            q = f.event.special[r] || {};
                        if (!t && (t = j[r] = [], !q.setup || q.setup.call(b, g, o, k) === !1)) b.addEventListener ? b.addEventListener(r, k, !1) : b.attachEvent && b.attachEvent("on" + r, k);
                        q.add && (q.add.call(b, h), h.handler.guid || (h.handler.guid = m.guid));
                        t.push(h);
                        f.event.global[r] = !0
                    }
                    b = null
                }
            }
        },
        global: {},
        remove: function (b, a, m, g) {
            if (b.nodeType !== 3 && b.nodeType !== 8) {
                m === !1 && (m = T);
                var n, h, j = 0,
                    k, r, p, o, t, q, F = f.hasData(b) && f._data(b),
                    u = F && F.events;
                if (F && u) if (a && a.type && (m = a.handler, a = a.type), !a || typeof a == "string" && a.charAt(0) === ".") for (n in a = a || "", u) f.event.remove(b, n + a);
                else {
                    for (a = a.split(" "); n = a[j++];) if (o = n, k = n.indexOf(".") < 0, r = [], k || (r = n.split("."), n = r.shift(), p = RegExp("(^|\\.)" + f.map(r.slice(0).sort(), ba).join("\\.(?:.*\\.)?") + "(\\.|$)")), t = u[n]) if (m) {
                        o = f.event.special[n] || {};
                        for (h = g || 0; h < t.length; h++) if (q = t[h], m.guid === q.guid) {
                            if (k || p.test(q.namespace)) g == null && t.splice(h--, 1), o.remove && o.remove.call(b, q);
                            if (g != null) break
                        }
                        if (t.length === 0 || g != null && t.length === 1)(!o.teardown || o.teardown.call(b, r) === !1) && f.removeEvent(b, n, F.handle), delete u[n]
                    } else for (h = 0; h < t.length; h++) if (q = t[h], k || p.test(q.namespace)) f.event.remove(b, o, q.handler, h), t.splice(h--, 1);
                    if (f.isEmptyObject(u))(a = F.handle) && (a.elem = null), delete F.events, delete F.handle, f.isEmptyObject(F) && f.removeData(b, e, !0)
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (b, l, m, g) {
            var n = b.type || b,
                h = [],
                j;
            n.indexOf("!") >= 0 && (n = n.slice(0, -1), j = !0);
            n.indexOf(".") >= 0 && (h = n.split("."), n = h.shift(), h.sort());
            if (m && !f.event.customEvent[n] || f.event.global[n]) {
                b = typeof b == "object" ? b[f.expando] ? b : new f.Event(n, b) : new f.Event(n);
                b.type = n;
                b.exclusive = j;
                b.namespace = h.join(".");
                b.namespace_re = RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (g || !m) b.preventDefault(), b.stopPropagation();
                if (m) {
                    if (!(m.nodeType === 3 || m.nodeType === 8)) {
                        b.result = e;
                        b.target = m;
                        l = l != null ? f.makeArray(l) : [];
                        l.unshift(b);
                        h = m;
                        g = n.indexOf(":") < 0 ? "on" + n : "";
                        do j = f._data(h, "handle"), b.currentTarget = h, j && j.apply(h, l), g && f.acceptData(h) && h[g] && h[g].apply(h, l) === !1 && (b.result = !1, b.preventDefault()), h = h.parentNode || h.ownerDocument || h === b.target.ownerDocument && a;
                        while (h && !b.isPropagationStopped());
                        if (!b.isDefaultPrevented()) {
                            var k, h = f.event.special[n] || {};
                            if ((!h._default || h._default.call(m.ownerDocument, b) === !1) && (n !== "click" || !f.nodeName(m, "a")) && f.acceptData(m)) {
                                try {
                                    g && m[n] && (k = m[g], k && (m[g] = null), f.event.triggered = n, m[n]())
                                } catch (r) {}
                                k && (m[g] = k);
                                f.event.triggered = e
                            }
                        }
                        return b.result
                    }
                } else f.each(f.cache, function () {
                    var a = this[f.expando];
                    a && a.events && a.events[n] && f.event.trigger(b, l, a.handle.elem)
                })
            }
        },
        handle: function (b) {
            var b = f.event.fix(b || a.event),
                l = ((f._data(this, "events") || {})[b.type] || []).slice(0),
                m = !b.exclusive && !b.namespace,
                g = Array.prototype.slice.call(arguments, 0);
            g[0] = b;
            b.currentTarget = this;
            for (var n = 0, h = l.length; n < h; n++) {
                var j = l[n];
                if (m || b.namespace_re.test(j.namespace)) if (b.handler = j.handler, b.data = j.data, b.handleObj = j, j = j.handler.apply(this, g), j !== e && (b.result = j, j === !1 && (b.preventDefault(), b.stopPropagation())), b.isImmediatePropagationStopped()) break
            }
            return b.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (b) {
            if (b[f.expando]) return b;
            for (var a = b, b = f.Event(a), m = this.props.length, g; m;) g = this.props[--m], b[g] = a[g];
            b.target || (b.target = b.srcElement || t);
            b.target.nodeType === 3 && (b.target = b.target.parentNode);
            !b.relatedTarget && b.fromElement && (b.relatedTarget = b.fromElement === b.target ? b.toElement : b.fromElement);
            if (b.pageX == null && b.clientX != null) m = b.target.ownerDocument || t, a = m.documentElement, m = m.body, b.pageX = b.clientX + (a && a.scrollLeft || m && m.scrollLeft || 0) - (a && a.clientLeft || m && m.clientLeft || 0), b.pageY = b.clientY + (a && a.scrollTop || m && m.scrollTop || 0) - (a && a.clientTop || m && m.clientTop || 0);
            b.which == null && (b.charCode != null || b.keyCode != null) && (b.which = b.charCode != null ? b.charCode : b.keyCode);
            !b.metaKey && b.ctrlKey && (b.metaKey = b.ctrlKey);
            !b.which && b.button !== e && (b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0);
            return b
        },
        guid: 1E8,
        proxy: f.proxy,
        special: {
            ready: {
                setup: f.bindReady,
                teardown: f.noop
            },
            live: {
                add: function (b) {
                    f.event.add(this, O(b.origType, b.selector), f.extend({}, b, {
                        handler: va,
                        guid: b.handler.guid
                    }))
                },
                remove: function (b) {
                    f.event.remove(this, O(b.origType, b.selector), b)
                }
            },
            beforeunload: {
                setup: function (b, a, e) {
                    f.isWindow(this) && (this.onbeforeunload = e)
                },
                teardown: function (b, a) {
                    this.onbeforeunload === a && (this.onbeforeunload = null)
                }
            }
        }
    };
    f.removeEvent = t.removeEventListener ?
    function (b, a, f) {
        b.removeEventListener && b.removeEventListener(a, f, !1)
    } : function (b, a, f) {
        b.detachEvent && b.detachEvent("on" + a, f)
    };
    f.Event = function (b, a) {
        if (!this.preventDefault) return new f.Event(b, a);
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || b.returnValue === !1 || b.getPreventDefault && b.getPreventDefault() ? ga : T) : this.type = b;
        a && f.extend(this, a);
        this.timeStamp = f.now();
        this[f.expando] = !0
    };
    f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = ga;
            var b = this.originalEvent;
            !b || (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = ga;
            var b = this.originalEvent;
            !b || (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = ga;
            this.stopPropagation()
        },
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T
    };
    var M = function (b) {
            var a = b.relatedTarget,
                e = !1,
                g = b.type;
            b.type = b.data;
            a !== this && (a && (e = f.contains(this, a)), e || (f.event.handle.apply(this, arguments), b.type = g))
        },
        K = function (b) {
            b.type = b.data;
            f.event.handle.apply(this, arguments)
        };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (b, a) {
        f.event.special[b] = {
            setup: function (e) {
                f.event.add(this, a, e && e.selector ? K : M, b)
            },
            teardown: function (b) {
                f.event.remove(this, a, b && b.selector ? K : M)
            }
        }
    });
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            else f.event.add(this, "click.specialSubmit", function (b) {
                var a = b.target,
                    e = a.type;
                (e === "submit" || e === "image") && f(a).closest("form").length && Ea("submit", this, arguments)
            }), f.event.add(this, "keypress.specialSubmit", function (b) {
                var a = b.target,
                    e = a.type;
                (e === "text" || e === "password") && f(a).closest("form").length && b.keyCode === 13 && Ea("submit", this, arguments)
            })
        },
        teardown: function () {
            f.event.remove(this, ".specialSubmit")
        }
    });
    if (!f.support.changeBubbles) {
        var C, X = function (b) {
                var a = b.type,
                    e = b.value;
                a === "radio" || a === "checkbox" ? e = b.checked : a === "select-multiple" ? e = b.selectedIndex > -1 ? f.map(b.options, function (b) {
                    return b.selected
                }).join("-") : "" : f.nodeName(b, "select") && (e = b.selectedIndex);
                return e
            },
            fa = function (b, a) {
                var g = b.target,
                    s, n;
                if (j.test(g.nodeName) && !g.readOnly && (s = f._data(g, "_change_data"), n = X(g), (b.type !== "focusout" || g.type !== "radio") && f._data(g, "_change_data", n), !(s === e || n === s))) if (s != null || n) b.type = "change", b.liveFired = e, f.event.trigger(b, a, g)
            };
        f.event.special.change = {
            filters: {
                focusout: fa,
                beforedeactivate: fa,
                click: function (b) {
                    var a = b.target,
                        e = f.nodeName(a, "input") ? a.type : "";
                    (e === "radio" || e === "checkbox" || f.nodeName(a, "select")) && fa.call(this, b)
                },
                keydown: function (b) {
                    var a = b.target,
                        e = f.nodeName(a, "input") ? a.type : "";
                    (b.keyCode === 13 && !f.nodeName(a, "textarea") || b.keyCode === 32 && (e === "checkbox" || e === "radio") || e === "select-multiple") && fa.call(this, b)
                },
                beforeactivate: function (b) {
                    b = b.target;
                    f._data(b, "_change_data", X(b))
                }
            },
            setup: function () {
                if (this.type === "file") return !1;
                for (var b in C) f.event.add(this, b + ".specialChange", C[b]);
                return j.test(this.nodeName)
            },
            teardown: function () {
                f.event.remove(this, ".specialChange");
                return j.test(this.nodeName)
            }
        };
        C = f.event.special.change.filters;
        C.focus = C.beforeactivate
    }
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (b, a) {
        function e(b) {
            var g = f.event.fix(b);
            g.type = a;
            g.originalEvent = {};
            f.event.trigger(g, null, g.target);
            g.isDefaultPrevented() && b.preventDefault()
        }
        var g = 0;
        f.event.special[a] = {
            setup: function () {
                g++ === 0 && t.addEventListener(b, e, !0)
            },
            teardown: function () {
                --g === 0 && t.removeEventListener(b, e, !0)
            }
        }
    });
    f.each(["bind", "one"], function (b, a) {
        f.fn[a] = function (b, g, n) {
            var h;
            if (typeof b == "object") {
                for (var j in b) this[a](j, g, b[j], n);
                return this
            }
            if (arguments.length === 2 || g === !1) n = g, g = e;
            a === "one" ? (h = function (b) {
                f(this).unbind(b, h);
                return n.apply(this, arguments)
            }, h.guid = n.guid || f.guid++) : h = n;
            if (b === "unload" && a !== "one") this.one(b, g, n);
            else {
                j = 0;
                for (var k = this.length; j < k; j++) f.event.add(this[j], b, h, g)
            }
            return this
        }
    });
    f.fn.extend({
        unbind: function (b, a) {
            if (typeof b == "object" && !b.preventDefault) for (var e in b) this.unbind(e, b[e]);
            else {
                e = 0;
                for (var g = this.length; e < g; e++) f.event.remove(this[e], b, a)
            }
            return this
        },
        delegate: function (b, a, f, e) {
            return this.live(a, f, e, b)
        },
        undelegate: function (b, a, f) {
            return arguments.length === 0 ? this.unbind("live") : this.die(a, null, f, b)
        },
        trigger: function (b, a) {
            return this.each(function () {
                f.event.trigger(b, a, this)
            })
        },
        triggerHandler: function (b, a) {
            if (this[0]) return f.event.trigger(b, a, this[0], !0)
        },
        toggle: function (b) {
            var a = arguments,
                e = b.guid || f.guid++,
                g = 0,
                n = function (e) {
                    var m = (f.data(this, "lastToggle" + b.guid) || 0) % g;
                    f.data(this, "lastToggle" + b.guid, m + 1);
                    e.preventDefault();
                    return a[m].apply(this, arguments) || !1
                };
            for (n.guid = e; g < a.length;) a[g++].guid = e;
            return this.click(n)
        },
        hover: function (b, a) {
            return this.mouseenter(b).mouseleave(a || b)
        }
    });
    var la = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    f.each(["live", "die"], function (b, a) {
        f.fn[a] = function (b, g, n, h) {
            var j = 0,
                k, r, p = h || this.selector,
                o = h ? this : f(this.context);
            if (typeof b == "object" && !b.preventDefault) {
                for (k in b) o[a](k, g, b[k], p);
                return this
            }
            if (a === "die" && !b && h && h.charAt(0) === ".") return o.unbind(h), this;
            if (g === !1 || f.isFunction(g)) n = g || T, g = e;
            for (b = (b || "").split(" ");
            (h = b[j++]) != null;) if (k = ma.exec(h), r = "", k && (r = k[0], h = h.replace(ma, "")), h === "hover") b.push("mouseenter" + r, "mouseleave" + r);
            else if (k = h, la[h] ? (b.push(la[h] + r), h += r) : h = (la[h] || h) + r, a === "live") {
                r = 0;
                for (var t = o.length; r < t; r++) f.event.add(o[r], "live." + O(h, p), {
                    data: g,
                    selector: p,
                    handler: n,
                    origType: h,
                    origHandler: n,
                    preType: k
                })
            } else o.unbind("live." + O(h, p), n);
            return this
        }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (b, a) {
        f.fn[a] = function (b, f) {
            f == null && (f = b, b = null);
            return arguments.length > 0 ? this.bind(a, b, f) : this.trigger(a)
        };
        f.attrFn && (f.attrFn[a] = !0)
    });
    (function () {
        function b(b, a, f, e, l, g) {
            for (var l = 0, m = e.length; l < m; l++) {
                var h = e[l];
                if (h) {
                    for (var n = !1, h = h[b]; h;) {
                        if (h.sizcache === f) {
                            n = e[h.sizset];
                            break
                        }
                        if (h.nodeType === 1) if (g || (h.sizcache = f, h.sizset = l), typeof a != "string") {
                            if (h === a) {
                                n = !0;
                                break
                            }
                        } else if (o.filter(a, [h]).length > 0) {
                            n = h;
                            break
                        }
                        h = h[b]
                    }
                    e[l] = n
                }
            }
        }
        function a(b, f, e, l, g, m) {
            for (var g = 0, h = l.length; g < h; g++) {
                var n = l[g];
                if (n) {
                    for (var s = !1, n = n[b]; n;) {
                        if (n.sizcache === e) {
                            s = l[n.sizset];
                            break
                        }
                        n.nodeType === 1 && !m && (n.sizcache = e, n.sizset = g);
                        if (n.nodeName.toLowerCase() === f) {
                            s = n;
                            break
                        }
                        n = n[b]
                    }
                    l[g] = s
                }
            }
        }
        var g = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            h = 0,
            n = Object.prototype.toString,
            j = !1,
            k = !0,
            r = /\\/g,
            p = /\W/;
        [0, 0].sort(function () {
            k = !1;
            return 0
        });
        var o = function (b, a, f, e) {
                var f = f || [],
                    l = a = a || t;
                if (a.nodeType !== 1 && a.nodeType !== 9) return [];
                if (!b || typeof b != "string") return f;
                var h, s, j, k, y, r, E = !0,
                    p = o.isXML(a),
                    u = [],
                    R = b;
                do if (g.exec(""), h = g.exec(R)) if (R = h[3], u.push(h[1]), h[2]) {
                    k = h[3];
                    break
                }
                while (h);
                if (u.length > 1 && F.exec(b)) if (u.length === 2 && q.relative[u[0]]) s = P(u[0] + u[1], a);
                else for (s = q.relative[u[0]] ? [a] : o(u.shift(), a); u.length;) b = u.shift(), q.relative[b] && (b += u.shift()), s = P(b, s);
                else if (!e && u.length > 1 && a.nodeType === 9 && !p && q.match.ID.test(u[0]) && !q.match.ID.test(u[u.length - 1]) && (y = o.find(u.shift(), a, p), a = y.expr ? o.filter(y.expr, y.set)[0] : y.set[0]), a) {
                    y = e ? {
                        expr: u.pop(),
                        set: v(e)
                    } : o.find(u.pop(), u.length === 1 && (u[0] === "~" || u[0] === "+") && a.parentNode ? a.parentNode : a, p);
                    s = y.expr ? o.filter(y.expr, y.set) : y.set;
                    for (u.length > 0 ? j = v(s) : E = !1; u.length;) h = r = u.pop(), q.relative[r] ? h = u.pop() : r = "", h == null && (h = a), q.relative[r](j, h, p)
                } else j = [];
                j || (j = s);
                j || o.error(r || b);
                if (n.call(j) === "[object Array]") if (E) if (a && a.nodeType === 1) for (b = 0; j[b] != null; b++) j[b] && (j[b] === !0 || j[b].nodeType === 1 && o.contains(a, j[b])) && f.push(s[b]);
                else for (b = 0; j[b] != null; b++) j[b] && j[b].nodeType === 1 && f.push(s[b]);
                else f.push.apply(f, j);
                else v(j, f);
                k && (o(k, l, f, e), o.uniqueSort(f));
                return f
            };
        o.uniqueSort = function (b) {
            if (w && (j = k, b.sort(w), j)) for (var a = 1; a < b.length; a++) b[a] === b[a - 1] && b.splice(a--, 1);
            return b
        };
        o.matches = function (b, a) {
            return o(b, null, null, a)
        };
        o.matchesSelector = function (b, a) {
            return o(a, null, null, [b]).length > 0
        };
        o.find = function (b, a, f) {
            var e;
            if (!b) return [];
            for (var l = 0, g = q.order.length; l < g; l++) {
                var m, h = q.order[l];
                if (m = q.leftMatch[h].exec(b)) {
                    var n = m[1];
                    m.splice(1, 1);
                    if (n.substr(n.length - 1) !== "\\" && (m[1] = (m[1] || "").replace(r, ""), e = q.find[h](m, a, f), e != null)) {
                        b = b.replace(q.match[h], "");
                        break
                    }
                }
            }
            e || (e = typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : []);
            return {
                set: e,
                expr: b
            }
        };
        o.filter = function (b, a, f, l) {
            for (var g, m, h = b, n = [], s = a, j = a && a[0] && o.isXML(a[0]); b && a.length;) {
                for (var k in q.filter) if ((g = q.leftMatch[k].exec(b)) != null && g[2]) {
                    var y, r, E = q.filter[k];
                    r = g[1];
                    m = !1;
                    g.splice(1, 1);
                    if (r.substr(r.length - 1) !== "\\") {
                        s === n && (n = []);
                        if (q.preFilter[k]) if (g = q.preFilter[k](g, s, f, n, l, j)) {
                            if (g === !0) continue
                        } else m = y = !0;
                        if (g) for (var p = 0;
                        (r = s[p]) != null; p++) if (r) {
                            y = E(r, g, p, s);
                            var t = l ^ !! y;
                            f && y != null ? t ? m = !0 : s[p] = !1 : t && (n.push(r), m = !0)
                        }
                        if (y !== e) {
                            f || (s = n);
                            b = b.replace(q.match[k], "");
                            if (!m) return [];
                            break
                        }
                    }
                }
                if (b === h) if (m == null) o.error(b);
                else break;
                h = b
            }
            return s
        };
        o.error = function (b) {
            throw "Syntax error, unrecognized expression: " + b;
        };
        var q = o.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (b) {
                    return b.getAttribute("href")
                },
                type: function (b) {
                    return b.getAttribute("type")
                }
            },
            relative: {
                "+": function (b, a) {
                    var f = typeof a == "string",
                        e = f && !p.test(a),
                        f = f && !e;
                    e && (a = a.toLowerCase());
                    for (var e = 0, l = b.length, g; e < l; e++) if (g = b[e]) {
                        for (;
                        (g = g.previousSibling) && g.nodeType !== 1;);
                        b[e] = f || g && g.nodeName.toLowerCase() === a ? g || !1 : g === a
                    }
                    f && o.filter(a, b, !0)
                },
                ">": function (b, a) {
                    var f, e = typeof a == "string",
                        l = 0,
                        g = b.length;
                    if (e && !p.test(a)) for (a = a.toLowerCase(); l < g; l++) {
                        if (f = b[l]) f = f.parentNode, b[l] = f.nodeName.toLowerCase() === a ? f : !1
                    } else {
                        for (; l < g; l++)(f = b[l]) && (b[l] = e ? f.parentNode : f.parentNode === a);
                        e && o.filter(a, b, !0)
                    }
                },
                "": function (f, e, g) {
                    var m, n = h++,
                        j = b;
                    typeof e == "string" && !p.test(e) && (e = e.toLowerCase(), m = e, j = a);
                    j("parentNode", e, n, f, m, g)
                },
                "~": function (f, e, g) {
                    var m, n = h++,
                        j = b;
                    typeof e == "string" && !p.test(e) && (e = e.toLowerCase(), m = e, j = a);
                    j("previousSibling", e, n, f, m, g)
                }
            },
            find: {
                ID: function (b, a, f) {
                    if (typeof a.getElementById != "undefined" && !f) return (b = a.getElementById(b[1])) && b.parentNode ? [b] : []
                },
                NAME: function (b, a) {
                    if (typeof a.getElementsByName != "undefined") {
                        for (var f = [], e = a.getElementsByName(b[1]), l = 0, g = e.length; l < g; l++) e[l].getAttribute("name") === b[1] && f.push(e[l]);
                        return f.length === 0 ? null : f
                    }
                },
                TAG: function (b, a) {
                    if (typeof a.getElementsByTagName != "undefined") return a.getElementsByTagName(b[1])
                }
            },
            preFilter: {
                CLASS: function (b, a, f, e, l, g) {
                    b = " " + b[1].replace(r, "") + " ";
                    if (g) return b;
                    for (var g = 0, m;
                    (m = a[g]) != null; g++) m && (l ^ (m.className && (" " + m.className + " ").replace(/[\t\n\r]/g, " ").indexOf(b) >= 0) ? f || e.push(m) : f && (a[g] = !1));
                    return !1
                },
                ID: function (b) {
                    return b[1].replace(r, "")
                },
                TAG: function (b) {
                    return b[1].replace(r, "").toLowerCase()
                },
                CHILD: function (b) {
                    if (b[1] === "nth") {
                        b[2] || o.error(b[0]);
                        b[2] = b[2].replace(/^\+|\s*/g, "");
                        var a = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(b[2] === "even" && "2n" || b[2] === "odd" && "2n+1" || !/\D/.test(b[2]) && "0n+" + b[2] || b[2]);
                        b[2] = a[1] + (a[2] || 1) - 0;
                        b[3] = a[3] - 0
                    } else b[2] && o.error(b[0]);
                    b[0] = h++;
                    return b
                },
                ATTR: function (b, a, f, e, l, g) {
                    a = b[1] = b[1].replace(r, "");
                    !g && q.attrMap[a] && (b[1] = q.attrMap[a]);
                    b[4] = (b[4] || b[5] || "").replace(r, "");
                    b[2] === "~=" && (b[4] = " " + b[4] + " ");
                    return b
                },
                PSEUDO: function (b, a, f, e, l) {
                    if (b[1] === "not") if ((g.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = o(b[3], null, null, a);
                    else return b = o.filter(b[3], a, f, 1 ^ l), f || e.push.apply(e, b), !1;
                    else if (q.match.POS.test(b[0]) || q.match.CHILD.test(b[0])) return !0;
                    return b
                },
                POS: function (b) {
                    b.unshift(!0);
                    return b
                }
            },
            filters: {
                enabled: function (b) {
                    return b.disabled === !1 && b.type !== "hidden"
                },
                disabled: function (b) {
                    return b.disabled === !0
                },
                checked: function (b) {
                    return b.checked === !0
                },
                selected: function (b) {
                    return b.selected === !0
                },
                parent: function (b) {
                    return !!b.firstChild
                },
                empty: function (b) {
                    return !b.firstChild
                },
                has: function (b, a, f) {
                    return !!o(f[3], b).length
                },
                header: function (b) {
                    return /h\d/i.test(b.nodeName)
                },
                text: function (b) {
                    var a = b.getAttribute("type"),
                        f = b.type;
                    return b.nodeName.toLowerCase() === "input" && "text" === f && (a === f || a === null)
                },
                radio: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "radio" === b.type
                },
                checkbox: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "checkbox" === b.type
                },
                file: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "file" === b.type
                },
                password: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "password" === b.type
                },
                submit: function (b) {
                    var a = b.nodeName.toLowerCase();
                    return (a === "input" || a === "button") && "submit" === b.type
                },
                image: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "image" === b.type
                },
                reset: function (b) {
                    var a = b.nodeName.toLowerCase();
                    return (a === "input" || a === "button") && "reset" === b.type
                },
                button: function (b) {
                    var a = b.nodeName.toLowerCase();
                    return a === "input" && "button" === b.type || a === "button"
                },
                input: function (b) {
                    return /input|select|textarea|button/i.test(b.nodeName)
                },
                focus: function (b) {
                    return b === b.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (b, a) {
                    return a === 0
                },
                last: function (b, a, f, e) {
                    return a === e.length - 1
                },
                even: function (b, a) {
                    return a % 2 === 0
                },
                odd: function (b, a) {
                    return a % 2 === 1
                },
                lt: function (b, a, f) {
                    return a < f[3] - 0
                },
                gt: function (b, a, f) {
                    return a > f[3] - 0
                },
                nth: function (b, a, f) {
                    return f[3] - 0 === a
                },
                eq: function (b, a, f) {
                    return f[3] - 0 === a
                }
            },
            filter: {
                PSEUDO: function (b, a, f, e) {
                    var l = a[1],
                        g = q.filters[l];
                    if (g) return g(b, f, a, e);
                    if (l === "contains") return (b.textContent || b.innerText || o.getText([b]) || "").indexOf(a[3]) >= 0;
                    if (l === "not") {
                        a = a[3];
                        f = 0;
                        for (e = a.length; f < e; f++) if (a[f] === b) return !1;
                        return !0
                    }
                    o.error(l)
                },
                CHILD: function (b, a) {
                    var f = a[1],
                        e = b;
                    switch (f) {
                    case "only":
                    case "first":
                        for (; e = e.previousSibling;) if (e.nodeType === 1) return !1;
                        if (f === "first") return !0;
                        e = b;
                    case "last":
                        for (; e = e.nextSibling;) if (e.nodeType === 1) return !1;
                        return !0;
                    case "nth":
                        var f = a[2],
                            l = a[3];
                        if (f === 1 && l === 0) return !0;
                        var g = a[0],
                            m = b.parentNode;
                        if (m && (m.sizcache !== g || !b.nodeIndex)) {
                            for (var h = 0, e = m.firstChild; e; e = e.nextSibling) e.nodeType === 1 && (e.nodeIndex = ++h);
                            m.sizcache = g
                        }
                        e = b.nodeIndex - l;
                        return f === 0 ? e === 0 : e % f === 0 && e / f >= 0
                    }
                },
                ID: function (b, a) {
                    return b.nodeType === 1 && b.getAttribute("id") === a
                },
                TAG: function (b, a) {
                    return a === "*" && b.nodeType === 1 || b.nodeName.toLowerCase() === a
                },
                CLASS: function (b, a) {
                    return (" " + (b.className || b.getAttribute("class")) + " ").indexOf(a) > -1
                },
                ATTR: function (b, a) {
                    var f = a[1],
                        f = q.attrHandle[f] ? q.attrHandle[f](b) : b[f] != null ? b[f] : b.getAttribute(f),
                        e = f + "",
                        l = a[2],
                        g = a[4];
                    return f == null ? l === "!=" : l === "=" ? e === g : l === "*=" ? e.indexOf(g) >= 0 : l === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? l === "!=" ? e !== g : l === "^=" ? e.indexOf(g) === 0 : l === "$=" ? e.substr(e.length - g.length) === g : l === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && f !== !1
                },
                POS: function (b, a, f, e) {
                    var l = q.setFilters[a[2]];
                    if (l) return l(b, f, a, e)
                }
            }
        },
            F = q.match.POS,
            u = function (b, a) {
                return "\\" + (a - 0 + 1)
            },
            R;
        for (R in q.match) q.match[R] = RegExp(q.match[R].source + /(?![^\[]*\])(?![^\(]*\))/.source), q.leftMatch[R] = RegExp(/(^(?:.|\r|\n)*?)/.source + q.match[R].source.replace(/\\(\d+)/g, u));
        var v = function (b, a) {
                b = Array.prototype.slice.call(b, 0);
                if (a) return a.push.apply(a, b), a;
                return b
            };
        try {
            Array.prototype.slice.call(t.documentElement.childNodes, 0)
        } catch (Q) {
            v = function (b, a) {
                var f = 0,
                    e = a || [];
                if (n.call(b) === "[object Array]") Array.prototype.push.apply(e, b);
                else if (typeof b.length == "number") for (var l = b.length; f < l; f++) e.push(b[f]);
                else for (; b[f]; f++) e.push(b[f]);
                return e
            }
        }
        var w, A;
        t.documentElement.compareDocumentPosition ? w = function (b, a) {
            if (b === a) return j = !0, 0;
            if (!b.compareDocumentPosition || !a.compareDocumentPosition) return b.compareDocumentPosition ? -1 : 1;
            return b.compareDocumentPosition(a) & 4 ? -1 : 1
        } : (w = function (b, a) {
            if (b === a) return j = !0, 0;
            if (b.sourceIndex && a.sourceIndex) return b.sourceIndex - a.sourceIndex;
            var f, e, l = [],
                g = [];
            f = b.parentNode;
            e = a.parentNode;
            var m = f;
            if (f === e) return A(b, a);
            if (!f) return -1;
            if (!e) return 1;
            for (; m;) l.unshift(m), m = m.parentNode;
            for (m = e; m;) g.unshift(m), m = m.parentNode;
            f = l.length;
            e = g.length;
            for (m = 0; m < f && m < e; m++) if (l[m] !== g[m]) return A(l[m], g[m]);
            return m === f ? A(b, g[m], -1) : A(l[m], a, 1)
        }, A = function (b, a, f) {
            if (b === a) return f;
            for (b = b.nextSibling; b;) {
                if (b === a) return -1;
                b = b.nextSibling
            }
            return 1
        });
        o.getText = function (b) {
            for (var a = "", f, e = 0; b[e]; e++) f = b[e], f.nodeType === 3 || f.nodeType === 4 ? a += f.nodeValue : f.nodeType !== 8 && (a += o.getText(f.childNodes));
            return a
        };
        (function () {
            var b = t.createElement("div"),
                a = "script" + (new Date).getTime(),
                f = t.documentElement;
            b.innerHTML = "<a name='" + a + "'/>";
            f.insertBefore(b, f.firstChild);
            t.getElementById(a) && (q.find.ID = function (b, a, f) {
                if (typeof a.getElementById != "undefined" && !f) return (a = a.getElementById(b[1])) ? a.id === b[1] || typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id").nodeValue === b[1] ? [a] : e : []
            }, q.filter.ID = function (b, a) {
                var f = typeof b.getAttributeNode != "undefined" && b.getAttributeNode("id");
                return b.nodeType === 1 && f && f.nodeValue === a
            });
            f.removeChild(b);
            f = b = null
        })();
        (function () {
            var b = t.createElement("div");
            b.appendChild(t.createComment(""));
            b.getElementsByTagName("*").length > 0 && (q.find.TAG = function (b, a) {
                var f = a.getElementsByTagName(b[1]);
                if (b[1] === "*") {
                    for (var e = [], l = 0; f[l]; l++) f[l].nodeType === 1 && e.push(f[l]);
                    f = e
                }
                return f
            });
            b.innerHTML = "<a href='#'></a>";
            b.firstChild && typeof b.firstChild.getAttribute != "undefined" && b.firstChild.getAttribute("href") !== "#" && (q.attrHandle.href = function (b) {
                return b.getAttribute("href", 2)
            });
            b = null
        })();
        t.querySelectorAll &&
        function () {
            var b = o,
                a = t.createElement("div");
            a.innerHTML = "<p class='TEST'></p>";
            if (!a.querySelectorAll || a.querySelectorAll(".TEST").length !== 0) {
                o = function (a, f, e, l) {
                    f = f || t;
                    if (!l && !o.isXML(f)) {
                        var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                        if (g && (f.nodeType === 1 || f.nodeType === 9)) {
                            if (g[1]) return v(f.getElementsByTagName(a), e);
                            if (g[2] && q.find.CLASS && f.getElementsByClassName) return v(f.getElementsByClassName(g[2]), e)
                        }
                        if (f.nodeType === 9) {
                            if (a === "body" && f.body) return v([f.body], e);
                            if (g && g[3]) {
                                var m = f.getElementById(g[3]);
                                if (!m || !m.parentNode) return v([], e);
                                if (m.id === g[3]) return v([m], e)
                            }
                            try {
                                return v(f.querySelectorAll(a), e)
                            } catch (h) {}
                        } else if (f.nodeType === 1 && f.nodeName.toLowerCase() !== "object") {
                            var g = f,
                                n = (m = f.getAttribute("id")) || "__sizzle__",
                                s = f.parentNode,
                                j = /^\s*[+~]/.test(a);
                            m ? n = n.replace(/'/g, "\\$&") : f.setAttribute("id", n);
                            j && s && (f = f.parentNode);
                            try {
                                if (!j || s) return v(f.querySelectorAll("[id='" + n + "'] " + a), e)
                            } catch (k) {} finally {
                                m || g.removeAttribute("id")
                            }
                        }
                    }
                    return b(a, f, e, l)
                };
                for (var f in b) o[f] = b[f];
                a = null
            }
        }();
        (function () {
            var b = t.documentElement,
                a = b.matchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.msMatchesSelector;
            if (a) {
                var f = !a.call(t.createElement("div"), "div"),
                    e = !1;
                try {
                    a.call(t.documentElement, "[test!='']:sizzle")
                } catch (l) {
                    e = !0
                }
                o.matchesSelector = function (b, l) {
                    l = l.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!o.isXML(b)) try {
                        if (e || !q.match.PSEUDO.test(l) && !/!=/.test(l)) {
                            var g = a.call(b, l);
                            if (g || !f || b.document && b.document.nodeType !== 11) return g
                        }
                    } catch (m) {}
                    return o(l, null, null, [b]).length > 0
                }
            }
        })();
        (function () {
            var b = t.createElement("div");
            b.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (b.getElementsByClassName && b.getElementsByClassName("e").length !== 0 && (b.lastChild.className = "e", b.getElementsByClassName("e").length !== 1)) q.order.splice(1, 0, "CLASS"), q.find.CLASS = function (b, a, f) {
                if (typeof a.getElementsByClassName != "undefined" && !f) return a.getElementsByClassName(b[1])
            }, b = null
        })();
        t.documentElement.contains ? o.contains = function (b, a) {
            return b !== a && (b.contains ? b.contains(a) : !0)
        } : t.documentElement.compareDocumentPosition ? o.contains = function (b, a) {
            return !!(b.compareDocumentPosition(a) & 16)
        } : o.contains = function () {
            return !1
        };
        o.isXML = function (b) {
            return (b = (b ? b.ownerDocument || b : 0).documentElement) ? b.nodeName !== "HTML" : !1
        };
        var P = function (b, a) {
                for (var f, e = [], l = "", g = a.nodeType ? [a] : a; f = q.match.PSEUDO.exec(b);) l += f[0], b = b.replace(q.match.PSEUDO, "");
                b = q.relative[b] ? b + "*" : b;
                f = 0;
                for (var m = g.length; f < m; f++) o(b, g[f], e);
                return o.filter(l, e)
            };
        f.find = o;
        f.expr = o.selectors;
        f.expr[":"] = f.expr.filters;
        f.unique = o.uniqueSort;
        f.text = o.getText;
        f.isXMLDoc = o.isXML;
        f.contains = o.contains
    })();
    var Oa = /Until$/,
        D = /^(?:parents|prevUntil|prevAll)/,
        z = /,/,
        Da = /^.[^:#\[\.,]*$/,
        R = Array.prototype.slice,
        P = f.expr.match.POS,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (b) {
            var a = this,
                e, g;
            if (typeof b != "string") return f(b).filter(function () {
                e = 0;
                for (g = a.length; e < g; e++) if (f.contains(a[e], this)) return !0
            });
            var h = this.pushStack("", "find", b),
                j, k, r;
            e = 0;
            for (g = this.length; e < g; e++) if (j = h.length, f.find(b, this[e], h), e > 0) for (k = j; k < h.length; k++) for (r = 0; r < j; r++) if (h[r] === h[k]) {
                h.splice(k--, 1);
                break
            }
            return h
        },
        has: function (b) {
            var a = f(b);
            return this.filter(function () {
                for (var b = 0, e = a.length; b < e; b++) if (f.contains(this, a[b])) return !0
            })
        },
        not: function (b) {
            return this.pushStack(S(this, b, !1), "not", b)
        },
        filter: function (b) {
            return this.pushStack(S(this, b, !0), "filter", b)
        },
        is: function (b) {
            return !!b && (typeof b == "string" ? f.filter(b, this).length > 0 : this.filter(b).length > 0)
        },
        closest: function (b, a) {
            var e = [],
                g, h, j = this[0];
            if (f.isArray(b)) {
                var k, r = {},
                    o = 1;
                if (j && b.length) {
                    g = 0;
                    for (h = b.length; g < h; g++) k = b[g], r[k] || (r[k] = P.test(k) ? f(k, a || this.context) : k);
                    for (; j && j.ownerDocument && j !== a;) {
                        for (k in r) g = r[k], (g.jquery ? g.index(j) > -1 : f(j).is(g)) && e.push({
                            selector: k,
                            elem: j,
                            level: o
                        });
                        j = j.parentNode;
                        o++
                    }
                }
                return e
            }
            k = P.test(b) || typeof b != "string" ? f(b, a || this.context) : 0;
            g = 0;
            for (h = this.length; g < h; g++) for (j = this[g]; j;) {
                if (k ? k.index(j) > -1 : f.find.matchesSelector(j, b)) {
                    e.push(j);
                    break
                }
                j = j.parentNode;
                if (!j || !j.ownerDocument || j === a || j.nodeType === 11) break
            }
            e = e.length > 1 ? f.unique(e) : e;
            return this.pushStack(e, "closest", b)
        },
        index: function (b) {
            if (!b || typeof b == "string") return f.inArray(this[0], b ? f(b) : this.parent().children());
            return f.inArray(b.jquery ? b[0] : b, this)
        },
        add: function (b, a) {
            var e = typeof b == "string" ? f(b, a) : f.makeArray(b && b.nodeType ? [b] : b),
                g = f.merge(this.get(), e);
            return this.pushStack(!e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 || !g[0] || !g[0].parentNode || g[0].parentNode.nodeType === 11 ? g : f.unique(g))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    f.each({
        parent: function (b) {
            return (b = b.parentNode) && b.nodeType !== 11 ? b : null
        },
        parents: function (b) {
            return f.dir(b, "parentNode")
        },
        parentsUntil: function (b, a, e) {
            return f.dir(b, "parentNode", e)
        },
        next: function (b) {
            return f.nth(b, 2, "nextSibling")
        },
        prev: function (b) {
            return f.nth(b, 2, "previousSibling")
        },
        nextAll: function (b) {
            return f.dir(b, "nextSibling")
        },
        prevAll: function (b) {
            return f.dir(b, "previousSibling")
        },
        nextUntil: function (b, a, e) {
            return f.dir(b, "nextSibling", e)
        },
        prevUntil: function (b, a, e) {
            return f.dir(b, "previousSibling", e)
        },
        siblings: function (b) {
            return f.sibling(b.parentNode.firstChild, b)
        },
        children: function (b) {
            return f.sibling(b.firstChild)
        },
        contents: function (b) {
            return f.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : f.makeArray(b.childNodes)
        }
    }, function (b, a) {
        f.fn[b] = function (e, g) {
            var h = f.map(this, a, e),
                j = R.call(arguments);
            Oa.test(b) || (g = e);
            g && typeof g == "string" && (h = f.filter(g, h));
            h = this.length > 1 && !N[b] ? f.unique(h) : h;
            (this.length > 1 || z.test(g)) && D.test(b) && (h = h.reverse());
            return this.pushStack(h, b, j.join(","))
        }
    });
    f.extend({
        filter: function (b, a, e) {
            e && (b = ":not(" + b + ")");
            return a.length === 1 ? f.find.matchesSelector(a[0], b) ? [a[0]] : [] : f.find.matches(b, a)
        },
        dir: function (b, a, g) {
            for (var h = [], b = b[a]; b && b.nodeType !== 9 && (g === e || b.nodeType !== 1 || !f(b).is(g));) b.nodeType === 1 && h.push(b), b = b[a];
            return h
        },
        nth: function (b, a, f) {
            for (var a = a || 1, e = 0; b; b = b[f]) if (b.nodeType === 1 && ++e === a) break;
            return b
        },
        sibling: function (b, a) {
            for (var f = []; b; b = b.nextSibling) b.nodeType === 1 && b !== a && f.push(b);
            return f
        }
    });
    var za = / jQuery\d+="(?:\d+|null)"/g,
        qa = /^\s+/,
        Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Aa = /<([\w:]+)/,
        qb = /<tbody/i,
        rb = /<|&#?\w+;/,
        $a = /<(?:script|object|embed|option|style)/i,
        ab = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tb = /\/(java|ecma)script/i,
        ob = /^\s*<!(?:\[CDATA\[|\-\-)/,
        V = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    f.support.htmlSerialize || (V._default = [1, "div<div>", "</div>"]);
    f.fn.extend({
        text: function (b) {
            if (f.isFunction(b)) return this.each(function (a) {
                var e = f(this);
                e.text(b.call(this, a, e.text()))
            });
            if (typeof b != "object" && b !== e) return this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(b));
            return f.text(this)
        },
        wrapAll: function (b) {
            if (f.isFunction(b)) return this.each(function (a) {
                f(this).wrapAll(b.call(this, a))
            });
            if (this[0]) {
                var a = f(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && a.insertBefore(this[0]);
                a.map(function () {
                    for (var b = this; b.firstChild && b.firstChild.nodeType === 1;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function (b) {
            if (f.isFunction(b)) return this.each(function (a) {
                f(this).wrapInner(b.call(this, a))
            });
            return this.each(function () {
                var a = f(this),
                    e = a.contents();
                e.length ? e.wrapAll(b) : a.append(b)
            })
        },
        wrap: function (b) {
            return this.each(function () {
                f(this).wrapAll(b)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (b) {
                this.nodeType === 1 && this.appendChild(b)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (b) {
                this.nodeType === 1 && this.insertBefore(b, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = f(arguments[0]);
                b.push.apply(b, this.toArray());
                return this.pushStack(b, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = this.pushStack(this, "after", arguments);
                b.push.apply(b, f(arguments[0]).toArray());
                return b
            }
        },
        remove: function (b, a) {
            for (var e = 0, g;
            (g = this[e]) != null; e++) if (!b || f.filter(b, [g]).length)!a && g.nodeType === 1 && (f.cleanData(g.getElementsByTagName("*")), f.cleanData([g])), g.parentNode && g.parentNode.removeChild(g);
            return this
        },
        empty: function () {
            for (var b = 0, a;
            (a = this[b]) != null; b++) for (a.nodeType === 1 && f.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function (b, a) {
            b = b == null ? !1 : b;
            a = a == null ? b : a;
            return this.map(function () {
                return f.clone(this, b, a)
            })
        },
        html: function (b) {
            if (b === e) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(za, "") : null;
            if (typeof b == "string" && !$a.test(b) && (f.support.leadingWhitespace || !qa.test(b)) && !V[(Aa.exec(b) || ["", ""])[1].toLowerCase()]) {
                b = b.replace(Pa, "<$1></$2>");
                try {
                    for (var a = 0, g = this.length; a < g; a++) this[a].nodeType === 1 && (f.cleanData(this[a].getElementsByTagName("*")), this[a].innerHTML = b)
                } catch (h) {
                    this.empty().append(b)
                }
            } else f.isFunction(b) ? this.each(function (a) {
                var e = f(this);
                e.html(b.call(this, a, e.html()))
            }) : this.empty().append(b);
            return this
        },
        replaceWith: function (b) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(b)) return this.each(function (a) {
                    var e = f(this),
                        g = e.html();
                    e.replaceWith(b.call(this, a, g))
                });
                typeof b != "string" && (b = f(b).detach());
                return this.each(function () {
                    var a = this.nextSibling,
                        e = this.parentNode;
                    f(this).remove();
                    a ? f(a).before(b) : f(e).append(b)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(b) ? b() : b), "replaceWith", b) : this
        },
        detach: function (b) {
            return this.remove(b, !0)
        },
        domManip: function (b, a, g) {
            var h, n, j, k = b[0],
                o = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof k == "string" && ab.test(k)) return this.each(function () {
                f(this).domManip(b, a, g, !0)
            });
            if (f.isFunction(k)) return this.each(function (h) {
                var n = f(this);
                b[0] = k.call(this, h, a ? n.html() : e);
                n.domManip(b, a, g)
            });
            if (this[0]) {
                j = k && k.parentNode;
                f.support.parentNode && j && j.nodeType === 11 && j.childNodes.length === this.length ? h = {
                    fragment: j
                } : h = f.buildFragment(b, this, o);
                j = h.fragment;
                j.childNodes.length === 1 ? n = j = j.firstChild : n = j.firstChild;
                if (n) {
                    a = a && f.nodeName(n, "tr");
                    n = 0;
                    for (var p = this.length, q = p - 1; n < p; n++) g.call(a ? f.nodeName(this[n], "table") ? this[n].getElementsByTagName("tbody")[0] || this[n].appendChild(this[n].ownerDocument.createElement("tbody")) : this[n] : this[n], h.cacheable || p > 1 && n < q ? f.clone(j, !0, !0) : j)
                }
                o.length && f.each(o, r)
            }
            return this
        }
    });
    f.buildFragment = function (b, a, e) {
        var g, h, j, k;
        a && a[0] && (k = a[0].ownerDocument || a[0]);
        k.createDocumentFragment || (k = t);
        b.length === 1 && typeof b[0] == "string" && b[0].length < 512 && k === t && b[0].charAt(0) === "<" && !$a.test(b[0]) && (f.support.checkClone || !ab.test(b[0])) && (h = !0, j = f.fragments[b[0]], j && j !== 1 && (g = j));
        g || (g = k.createDocumentFragment(), f.clean(b, k, g, e));
        h && (f.fragments[b[0]] = j ? g : 1);
        return {
            fragment: g,
            cacheable: h
        }
    };
    f.fragments = {};
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, a) {
        f.fn[b] = function (e) {
            var g = [],
                e = f(e),
                h = this.length === 1 && this[0].parentNode;
            if (h && h.nodeType === 11 && h.childNodes.length === 1 && e.length === 1) return e[a](this[0]), this;
            for (var h = 0, j = e.length; h < j; h++) {
                var k = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[a](k);
                g = g.concat(k)
            }
            return this.pushStack(g, b, e.selector)
        }
    });
    f.extend({
        clone: function (b, a, e) {
            var g = b.cloneNode(!0),
                h, j, k;
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !f.isXMLDoc(b)) {
                I(b, g);
                h = u(b);
                j = u(g);
                for (k = 0; h[k]; ++k) I(h[k], j[k])
            }
            if (a && (W(b, g), e)) {
                h = u(b);
                j = u(g);
                for (k = 0; h[k]; ++k) W(h[k], j[k])
            }
            return g
        },
        clean: function (b, a, e, g) {
            a = a || t;
            typeof a.createElement == "undefined" && (a = a.ownerDocument || a[0] && a[0].ownerDocument || t);
            for (var h = [], j, k = 0, r;
            (r = b[k]) != null; k++) if (typeof r == "number" && (r += ""), r) {
                if (typeof r == "string") if (rb.test(r)) {
                    r = r.replace(Pa, "<$1></$2>");
                    j = (Aa.exec(r) || ["", ""])[1].toLowerCase();
                    var o = V[j] || V._default,
                        p = o[0],
                        q = a.createElement("div");
                    for (q.innerHTML = o[1] + r + o[2]; p--;) q = q.lastChild;
                    if (!f.support.tbody) {
                        p = qb.test(r);
                        o = j === "table" && !p ? q.firstChild && q.firstChild.childNodes : o[1] === "<table>" && !p ? q.childNodes : [];
                        for (j = o.length - 1; j >= 0; --j) f.nodeName(o[j], "tbody") && !o[j].childNodes.length && o[j].parentNode.removeChild(o[j])
                    }!f.support.leadingWhitespace && qa.test(r) && q.insertBefore(a.createTextNode(qa.exec(r)[0]), q.firstChild);
                    r = q.childNodes
                } else r = a.createTextNode(r);
                var u;
                if (!f.support.appendChecked) if (r[0] && typeof (u = r.length) == "number") for (j = 0; j < u; j++) Q(r[j]);
                else Q(r);
                r.nodeType ? h.push(r) : h = f.merge(h, r)
            }
            if (e) {
                b = function (b) {
                    return !b.type || tb.test(b.type)
                };
                for (k = 0; h[k]; k++) g && f.nodeName(h[k], "script") && (!h[k].type || h[k].type.toLowerCase() === "text/javascript") ? g.push(h[k].parentNode ? h[k].parentNode.removeChild(h[k]) : h[k]) : (h[k].nodeType === 1 && (a = f.grep(h[k].getElementsByTagName("script"), b), h.splice.apply(h, [k + 1, 0].concat(a))), e.appendChild(h[k]))
            }
            return h
        },
        cleanData: function (b) {
            for (var a, e, g = f.cache, h = f.expando, j = f.event.special, k = f.support.deleteExpando, r = 0, o;
            (o = b[r]) != null; r++) if (!o.nodeName || !f.noData[o.nodeName.toLowerCase()]) if (e = o[f.expando]) {
                if ((a = g[e] && g[e][h]) && a.events) {
                    for (var p in a.events) j[p] ? f.event.remove(o, p) : f.removeEvent(o, p, a.handle);
                    a.handle && (a.handle.elem = null)
                }
                k ? delete o[f.expando] : o.removeAttribute && o.removeAttribute(f.expando);
                delete g[e]
            }
        }
    });
    var bb = /alpha\([^)]*\)/i,
        ub = /opacity=([^)]*)/,
        vb = /([A-Z]|^ms)/g,
        cb = /^-?\d+(?:px)?$/i,
        wb = /^-?\d/,
        xb = /^[+\-]=/,
        yb = /[^+\-\.\de]+/g,
        zb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        mb = ["Left", "Right"],
        nb = ["Top", "Bottom"],
        ua, db, eb;
    f.fn.css = function (b, a) {
        if (arguments.length === 2 && a === e) return this;
        return f.access(this, b, a, !0, function (b, a, g) {
            return g !== e ? f.style(b, a, g) : f.css(b, a)
        })
    };
    f.extend({
        cssHooks: {
            opacity: {
                get: function (b, a) {
                    if (a) {
                        var f = ua(b, "opacity", "opacity");
                        return f === "" ? "1" : f
                    }
                    return b.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (b, a, g, h) {
            if (b && b.nodeType !== 3 && b.nodeType !== 8 && b.style) {
                var n, j = f.camelCase(a),
                    k = b.style,
                    r = f.cssHooks[j],
                    a = f.cssProps[j] || j;
                if (g === e) {
                    if (r && "get" in r && (n = r.get(b, !1, h)) !== e) return n;
                    return k[a]
                }
                h = typeof g;
                if (!(h === "number" && isNaN(g) || g == null)) if (h === "string" && xb.test(g) && (g = +g.replace(yb, "") + parseFloat(f.css(b, a)), h = "number"), h === "number" && !f.cssNumber[j] && (g += "px"), !r || !("set" in r) || (g = r.set(b, g)) !== e) try {
                    k[a] = g
                } catch (o) {}
            }
        },
        css: function (b, a, g) {
            var h, j, a = f.camelCase(a);
            j = f.cssHooks[a];
            a = f.cssProps[a] || a;
            a === "cssFloat" && (a = "float");
            if (j && "get" in j && (h = j.get(b, !0, g)) !== e) return h;
            if (ua) return ua(b, a)
        },
        swap: function (b, a, f) {
            var e = {},
                g;
            for (g in a) e[g] = b.style[g], b.style[g] = a[g];
            f.call(b);
            for (g in a) b.style[g] = e[g]
        }
    });
    f.curCSS = f.css;
    f.each(["height", "width"], function (b, a) {
        f.cssHooks[a] = {
            get: function (b, e, g) {
                var h;
                if (e) {
                    if (b.offsetWidth !== 0) return F(b, a, g);
                    f.swap(b, zb, function () {
                        h = F(b, a, g)
                    });
                    return h
                }
            },
            set: function (b, a) {
                if (!cb.test(a)) return a;
                a = parseFloat(a);
                if (a >= 0) return a + "px"
            }
        }
    });
    f.support.opacity || (f.cssHooks.opacity = {
        get: function (b, a) {
            return ub.test((a && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : a ? "1" : ""
        },
        set: function (b, a) {
            var e = b.style,
                g = b.currentStyle;
            e.zoom = 1;
            var h = f.isNaN(a) ? "" : "alpha(opacity=" + a * 100 + ")",
                g = g && g.filter || e.filter || "";
            e.filter = bb.test(g) ? g.replace(bb, h) : g + " " + h
        }
    });
    f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (b, a) {
                var e;
                f.swap(b, {
                    display: "inline-block"
                }, function () {
                    a ? e = ua(b, "margin-right", "marginRight") : e = b.style.marginRight
                });
                return e
            }
        })
    });
    t.defaultView && t.defaultView.getComputedStyle && (db = function (b, a) {
        var g, h, a = a.replace(vb, "-$1").toLowerCase();
        if (!(h = b.ownerDocument.defaultView)) return e;
        if (h = h.getComputedStyle(b, null)) g = h.getPropertyValue(a), g === "" && !f.contains(b.ownerDocument.documentElement, b) && (g = f.style(b, a));
        return g
    });
    t.documentElement.currentStyle && (eb = function (b, a) {
        var f, e = b.currentStyle && b.currentStyle[a],
            g = b.runtimeStyle && b.runtimeStyle[a],
            h = b.style;
        !cb.test(e) && wb.test(e) && (f = h.left, g && (b.runtimeStyle.left = b.currentStyle.left), h.left = a === "fontSize" ? "1em" : e || 0, e = h.pixelLeft + "px", h.left = f, g && (b.runtimeStyle.left = g));
        return e === "" ? "auto" : e
    });
    ua = db || eb;
    f.expr && f.expr.filters && (f.expr.filters.hidden = function (b) {
        var a = b.offsetHeight;
        return b.offsetWidth === 0 && a === 0 || !f.support.reliableHiddenOffsets && (b.style.display || f.css(b, "display")) === "none"
    }, f.expr.filters.visible = function (b) {
        return !f.expr.filters.hidden(b)
    });
    var Ab = /%20/g,
        lb = /\[\]$/,
        fb = /\r?\n/g,
        Bb = /#.*$/,
        Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Db = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Eb = /^(?:GET|HEAD)$/,
        Fb = /^\/\//,
        gb = /\?/,
        Gb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Hb = /^(?:select|textarea)/i,
        Za = /\s+/,
        Ib = /([?&])_=[^&]*/,
        hb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        ib = f.fn.load,
        Sa = {},
        jb = {},
        ra, sa;
    try {
        ra = Z.href
    } catch (Ob) {
        ra = t.createElement("a"), ra.href = "", ra = ra.href
    }
    sa = hb.exec(ra.toLowerCase()) || [];
    f.fn.extend({
        load: function (b, a, g) {
            if (typeof b != "string" && ib) return ib.apply(this, arguments);
            if (!this.length) return this;
            var h = b.indexOf(" ");
            if (h >= 0) var j = b.slice(h, b.length),
                b = b.slice(0, h);
            h = "GET";
            a && (f.isFunction(a) ? (g = a, a = e) : typeof a == "object" && (a = f.param(a, f.ajaxSettings.traditional), h = "POST"));
            var k = this;
            f.ajax({
                url: b,
                type: h,
                dataType: "html",
                data: a,
                complete: function (b, a, e) {
                    e = b.responseText;
                    b.isResolved() && (b.done(function (b) {
                        e = b
                    }), k.html(j ? f("<div>").append(e.replace(Gb, "")).find(j) : e));
                    g && k.each(g, [e, a, b])
                }
            });
            return this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Hb.test(this.nodeName) || Db.test(this.type))
            }).map(function (b, a) {
                var e = f(this).val();
                return e == null ? null : f.isArray(e) ? f.map(e, function (b) {
                    return {
                        name: a.name,
                        value: b.replace(fb, "\r\n")
                    }
                }) : {
                    name: a.name,
                    value: e.replace(fb, "\r\n")
                }
            }).get()
        }
    });
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, a) {
        f.fn[a] = function (b) {
            return this.bind(a, b)
        }
    });
    f.each(["get", "post"], function (b, a) {
        f[a] = function (b, g, h, j) {
            f.isFunction(g) && (j = j || h, h = g, g = e);
            return f.ajax({
                type: a,
                url: b,
                data: g,
                success: h,
                dataType: j
            })
        }
    });
    f.extend({
        getScript: function (b, a) {
            return f.get(b, e, a, "script")
        },
        getJSON: function (b, a, e) {
            return f.get(b, a, e, "json")
        },
        ajaxSetup: function (b, a) {
            a ? f.extend(!0, b, f.ajaxSettings, a) : (a = b, b = f.extend(!0, f.ajaxSettings, a));
            for (var e in {
                context: 1,
                url: 1
            }) e in a ? b[e] = a[e] : e in f.ajaxSettings && (b[e] = f.ajaxSettings[e]);
            return b
        },
        ajaxSettings: {
            url: ra,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(sa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            }
        },
        ajaxPrefilter: G(Sa),
        ajaxTransport: G(jb),
        ajax: function (b, a) {
            function g(b, a, l, m) {
                if (P !== 2) {
                    P = 2;
                    Q && clearTimeout(Q);
                    w = e;
                    R = m || "";
                    B.readyState = b ? 4 : 0;
                    var o, u, F;
                    if (l) {
                        var m = h,
                            v = B,
                            A = m.contents,
                            I = m.dataTypes,
                            D = m.responseFields,
                            z, N, C, qa;
                        for (N in D) N in l && (v[D[N]] = l[N]);
                        for (; I[0] === "*";) I.shift(), z === e && (z = m.mimeType || v.getResponseHeader("content-type"));
                        if (z) for (N in A) if (A[N] && A[N].test(z)) {
                            I.unshift(N);
                            break
                        }
                        if (I[0] in l) C = I[0];
                        else {
                            for (N in l) {
                                if (!I[0] || m.converters[N + " " + I[0]]) {
                                    C = N;
                                    break
                                }
                                qa || (qa = N)
                            }
                            C = C || qa
                        }
                        C ? (C !== I[0] && I.unshift(C), l = l[C]) : l = void 0
                    } else l = e;
                    if (b >= 200 && b < 300 || b === 304) {
                        if (h.ifModified) {
                            if (z = B.getResponseHeader("Last-Modified")) f.lastModified[t] = z;
                            if (z = B.getResponseHeader("Etag")) f.etag[t] = z
                        }
                        if (b === 304) a = "notmodified", o = !0;
                        else try {
                            z = h;
                            z.dataFilter && (l = z.dataFilter(l, z.dataType));
                            var W = z.dataTypes;
                            N = {};
                            var S, La, L = W.length,
                                za, H = W[0],
                                J, Aa, K, O, M;
                            for (S = 1; S < L; S++) {
                                if (S === 1) for (La in z.converters) typeof La == "string" && (N[La.toLowerCase()] = z.converters[La]);
                                J = H;
                                H = W[S];
                                if (H === "*") H = J;
                                else if (J !== "*" && J !== H) {
                                    Aa = J + " " + H;
                                    K = N[Aa] || N["* " + H];
                                    if (!K) for (O in M = e, N) if (za = O.split(" "), za[0] === J || za[0] === "*") if (M = N[za[1] + " " + H]) {
                                        O = N[O];
                                        O === !0 ? K = M : M === !0 && (K = O);
                                        break
                                    }!K && !M && f.error("No conversion from " + Aa.replace(" ", " to "));
                                    K !== !0 && (l = K ? K(l) : M(O(l)))
                                }
                            }
                            u = l;
                            a = "success";
                            o = !0
                        } catch (Pa) {
                            a = "parsererror", F = Pa
                        }
                    } else if (F = a, !a || b) a = "error", b < 0 && (b = 0);
                    B.status = b;
                    B.statusText = a;
                    o ? r.resolveWith(j, [u, a, B]) : r.rejectWith(j, [B, a, F]);
                    B.statusCode(q);
                    q = e;
                    G && k.trigger("ajax" + (o ? "Success" : "Error"), [B, h, o ? u : F]);
                    p.resolveWith(j, [B, a]);
                    G && (k.trigger("ajaxComplete", [B, h]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof b == "object" && (a = b, b = e);
            var a = a || {},
                h = f.ajaxSetup({}, a),
                j = h.context || h,
                k = j !== h && (j.nodeType || j instanceof
                f) ? f(j) : f.event,
                r = f.Deferred(),
                p = f._Deferred(),
                q = h.statusCode || {},
                t, u = {},
                F = {},
                R, v, w, Q, A, P = 0,
                G, I, B = {
                    readyState: 0,
                    setRequestHeader: function (b, a) {
                        if (!P) {
                            var f = b.toLowerCase(),
                                b = F[f] = F[f] || b;
                            u[b] = a
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return P === 2 ? R : null
                    },
                    getResponseHeader: function (b) {
                        var a;
                        if (P === 2) {
                            if (!v) for (v = {}; a = Cb.exec(R);) v[a[1].toLowerCase()] = a[2];
                            a = v[b.toLowerCase()]
                        }
                        return a === e ? null : a
                    },
                    overrideMimeType: function (b) {
                        P || (h.mimeType = b);
                        return this
                    },
                    abort: function (b) {
                        b = b || "abort";
                        w && w.abort(b);
                        g(0, b);
                        return this
                    }
                };
            r.promise(B);
            B.success = B.done;
            B.error = B.fail;
            B.complete = p.done;
            B.statusCode = function (b) {
                if (b) {
                    var a;
                    if (P < 2) for (a in b) q[a] = [q[a], b[a]];
                    else a = b[B.status], B.then(a, a)
                }
                return this
            };
            h.url = ((b || h.url) + "").replace(Bb, "").replace(Fb, sa[1] + "//");
            h.dataTypes = f.trim(h.dataType || "*").toLowerCase().split(Za);
            h.crossDomain == null && (A = hb.exec(h.url.toLowerCase()), h.crossDomain = !(!A || A[1] == sa[1] && A[2] == sa[2] && (A[3] || (A[1] === "http:" ? 80 : 443)) == (sa[3] || (sa[1] === "http:" ? 80 : 443))));
            h.data && h.processData && typeof h.data != "string" && (h.data = f.param(h.data, h.traditional));
            o(Sa, h, a, B);
            if (P === 2) return !1;
            G = h.global;
            h.type = h.type.toUpperCase();
            h.hasContent = !Eb.test(h.type);
            G && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!h.hasContent && (h.data && (h.url += (gb.test(h.url) ? "&" : "?") + h.data), t = h.url, h.cache === !1)) {
                A = f.now();
                var D = h.url.replace(Ib, "$1_=" + A);
                h.url = D + (D === h.url ? (gb.test(h.url) ? "&" : "?") + "_=" + A : "")
            }(h.data && h.hasContent && h.contentType !== !1 || a.contentType) && B.setRequestHeader("Content-Type", h.contentType);
            h.ifModified && (t = t || h.url, f.lastModified[t] && B.setRequestHeader("If-Modified-Since", f.lastModified[t]), f.etag[t] && B.setRequestHeader("If-None-Match", f.etag[t]));
            B.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : h.accepts["*"]);
            for (I in h.headers) B.setRequestHeader(I, h.headers[I]);
            if (h.beforeSend && (h.beforeSend.call(j, B, h) === !1 || P === 2)) return B.abort(), !1;
            for (I in {
                success: 1,
                error: 1,
                complete: 1
            }) B[I](h[I]);
            if (w = o(jb, h, a, B)) {
                B.readyState = 1;
                G && k.trigger("ajaxSend", [B, h]);
                h.async && h.timeout > 0 && (Q = setTimeout(function () {
                    B.abort("timeout")
                }, h.timeout));
                try {
                    P = 1, w.send(u, g)
                } catch (z) {
                    status < 2 ? g(-1, z) : f.error(z)
                }
            } else g(-1, "No Transport");
            return B
        },
        param: function (b, a) {
            var g = [],
                h = function (b, a) {
                    a = f.isFunction(a) ? a() : a;
                    g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
                };
            a === e && (a = f.ajaxSettings.traditional);
            if (f.isArray(b) || b.jquery && !f.isPlainObject(b)) f.each(b, function () {
                h(this.name, this.value)
            });
            else for (var j in b) v(j, b[j], a, h);
            return g.join("&").replace(Ab, "+")
        }
    });
    f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Jb = f.now(),
        Qa = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + Jb++
        }
    });
    f.ajaxPrefilter("json jsonp", function (b, e, g) {
        e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (Qa.test(b.url) || e && Qa.test(b.data))) {
            var h, j = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                k = a[j],
                r = b.url,
                o = b.data,
                p = "$1" + j + "$2";
            b.jsonp !== !1 && (r = r.replace(Qa, p), b.url === r && (e && (o = o.replace(Qa, p)), b.data === o && (r += (/\?/.test(r) ? "&" : "?") + b.jsonp + "=" + j)));
            b.url = r;
            b.data = o;
            a[j] = function (b) {
                h = [b]
            };
            g.always(function () {
                a[j] = k;
                h && f.isFunction(k) && a[j](h[0])
            });
            b.converters["script json"] = function () {
                h || f.error(j + " was not called");
                return h[0]
            };
            b.dataTypes[0] = "json";
            return "script"
        }
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (b) {
                f.globalEval(b);
                return b
            }
        }
    });
    f.ajaxPrefilter("script", function (b) {
        b.cache === e && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    f.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var a, f = t.head || t.getElementsByTagName("head")[0] || t.documentElement;
            return {
                send: function (g, h) {
                    a = t.createElement("script");
                    a.async = "async";
                    b.scriptCharset && (a.charset = b.scriptCharset);
                    a.src = b.url;
                    a.onload = a.onreadystatechange = function (b, g) {
                        if (g || !a.readyState || /loaded|complete/.test(a.readyState)) a.onload = a.onreadystatechange = null, f && a.parentNode && f.removeChild(a), a = e, g || h(200, "success")
                    };
                    f.insertBefore(a, f.firstChild)
                },
                abort: function () {
                    a && a.onload(0, 1)
                }
            }
        }
    });
    var Wa = a.ActiveXObject ?
    function () {
        for (var b in Ba) Ba[b](0, 1)
    } : !1, Kb = 0, Ba;
    f.ajaxSettings.xhr = a.ActiveXObject ?
    function () {
        var b;
        if (!(b = !this.isLocal && w())) a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (f) {}
            b = void 0
        }
        return b
    } : w;
    (function (b) {
        f.extend(f.support, {
            ajax: !! b,
            cors: !! b && "withCredentials" in b
        })
    })(f.ajaxSettings.xhr());
    f.support.ajax && f.ajaxTransport(function (b) {
        if (!b.crossDomain || f.support.cors) {
            var g;
            return {
                send: function (h, j) {
                    var n = b.xhr(),
                        k, r;
                    b.username ? n.open(b.type, b.url, b.async, b.username, b.password) : n.open(b.type, b.url, b.async);
                    if (b.xhrFields) for (r in b.xhrFields) n[r] = b.xhrFields[r];
                    b.mimeType && n.overrideMimeType && n.overrideMimeType(b.mimeType);
                    !b.crossDomain && !h["X-Requested-With"] && (h["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (r in h) n.setRequestHeader(r, h[r])
                    } catch (o) {}
                    n.send(b.hasContent && b.data || null);
                    g = function (a, h) {
                        var m, r, o, p, q;
                        try {
                            if (g && (h || n.readyState === 4)) if (g = e, k && (n.onreadystatechange = f.noop, Wa && delete Ba[k]), h) n.readyState !== 4 && n.abort();
                            else {
                                m = n.status;
                                o = n.getAllResponseHeaders();
                                p = {};
                                (q = n.responseXML) && q.documentElement && (p.xml = q);
                                p.text = n.responseText;
                                try {
                                    r = n.statusText
                                } catch (t) {
                                    r = ""
                                }!m && b.isLocal && !b.crossDomain ? m = p.text ? 200 : 404 : m === 1223 && (m = 204)
                            }
                        } catch (u) {
                            h || j(-1, u)
                        }
                        p && j(m, r, p, o)
                    };
                    !b.async || n.readyState === 4 ? g() : (k = ++Kb, Wa && (Ba || (Ba = {}, f(a).unload(Wa)), Ba[k] = g), n.onreadystatechange = g)
                },
                abort: function () {
                    g && g(0, 1)
                }
            }
        }
    });
    var Ra = {},
        ca, ta, Lb = /^(?:toggle|show|hide)$/,
        Mb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        Ca, Ya = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        Ka, Xa = a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
    f.fn.extend({
        show: function (b, a, e) {
            var g;
            if (b || b === 0) return this.animate(k("show", 3), b, a, e);
            a = 0;
            for (e = this.length; a < e; a++) b = this[a], b.style && (g = b.style.display, !f._data(b, "olddisplay") && g === "none" && (g = b.style.display = ""), g === "" && f.css(b, "display") === "none" && f._data(b, "olddisplay", h(b.nodeName)));
            for (a = 0; a < e; a++) if (b = this[a], b.style && (g = b.style.display, g === "" || g === "none")) b.style.display = f._data(b, "olddisplay") || "";
            return this
        },
        hide: function (b, a, e) {
            if (b || b === 0) return this.animate(k("hide", 3), b, a, e);
            b = 0;
            for (a = this.length; b < a; b++) this[b].style && (e = f.css(this[b], "display"), e !== "none" && !f._data(this[b], "olddisplay") && f._data(this[b], "olddisplay", e));
            for (b = 0; b < a; b++) this[b].style && (this[b].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (b, a, e) {
            var g = typeof b == "boolean";
            f.isFunction(b) && f.isFunction(a) ? this._toggle.apply(this, arguments) : b == null || g ? this.each(function () {
                var a = g ? b : f(this).is(":hidden");
                f(this)[a ? "show" : "hide"]()
            }) : this.animate(k("toggle", 3), b, a, e);
            return this
        },
        fadeTo: function (b, a, f, e) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: a
            }, b, f, e)
        },
        animate: function (b, a, e, g) {
            var j = f.speed(a, e, g);
            if (f.isEmptyObject(b)) return this.each(j.complete, [!1]);
            b = f.extend({}, b);
            return this[j.queue === !1 ? "each" : "queue"](function () {
                var n;
                j.queue === !1 && f._mark(this);
                var a = f.extend({}, j),
                    e = this.nodeType === 1,
                    g = e && f(this).is(":hidden"),
                    l, m, k, r, o, s, p, q;
                a.animatedProperties = {};
                for (k in b) {
                    l = f.camelCase(k);
                    k !== l && (b[l] = b[k], delete b[k]);
                    m = b[l];
                    f.isArray(m) ? (a.animatedProperties[l] = m[1], n = b[l] = m[0], m = n) : a.animatedProperties[l] = a.specialEasing && a.specialEasing[l] || a.easing || "swing";
                    if (m === "hide" && g || m === "show" && !g) return a.complete.call(this);
                    e && (l === "height" || l === "width") && (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (f.support.inlineBlockNeedsLayout ? (r = h(this.nodeName), r === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                a.overflow != null && (this.style.overflow = "hidden");
                for (k in b) e = new f.fx(this, a, k), m = b[k], Lb.test(m) ? e[m === "toggle" ? g ? "show" : "hide" : m]() : (o = Mb.exec(m), s = e.cur(), o ? (p = parseFloat(o[2]), q = o[3] || (f.cssNumber[k] ? "" : "px"), q !== "px" && (f.style(this, k, (p || 1) + q), s *= (p || 1) / e.cur(), f.style(this, k, s + q)), o[1] && (p = (o[1] === "-=" ? -1 : 1) * p + s), e.custom(s, p, q)) : e.custom(s, m, ""));
                return !0
            })
        },
        stop: function (b, a) {
            b && this.queue([]);
            this.each(function () {
                var b = f.timers,
                    e = b.length;
                for (a || f._unmark(!0, this); e--;) b[e].elem === this && (a && b[e](!0), b.splice(e, 1))
            });
            a || this.dequeue();
            return this
        }
    });
    f.each({
        slideDown: k("show", 1),
        slideUp: k("hide", 1),
        slideToggle: k("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (b, a) {
        f.fn[b] = function (b, f, e) {
            return this.animate(a, b, f, e)
        }
    });
    f.extend({
        speed: function (b, a, e) {
            var g = b && typeof b == "object" ? f.extend({}, b) : {
                complete: e || !e && a || f.isFunction(b) && b,
                duration: b,
                easing: e && a || a && !f.isFunction(a) && a
            };
            g.duration = f.fx.off ? 0 : typeof g.duration == "number" ? g.duration : g.duration in f.fx.speeds ? f.fx.speeds[g.duration] : f.fx.speeds._default;
            g.old = g.complete;
            g.complete = function (b) {
                f.isFunction(g.old) && g.old.call(this);
                g.queue !== !1 ? f.dequeue(this) : b !== !1 && f._unmark(this)
            };
            return g
        },
        easing: {
            linear: function (b, a, f, e) {
                return f + e * b
            },
            swing: function (b, a, f, e) {
                return (-Math.cos(b * Math.PI) / 2 + 0.5) * e + f
            }
        },
        timers: [],
        fx: function (b, a, f) {
            this.options = a;
            this.elem = b;
            this.prop = f;
            a.orig = a.orig || {}
        }
    });
    f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var b, a = f.css(this.elem, this.prop);
            return isNaN(b = parseFloat(a)) ? !a || a === "auto" ? 0 : a : b
        },
        custom: function (b, a, e) {
            function g(b) {
                return h.step(b)
            }
            var h = this,
                j = f.fx,
                k;
            this.startTime = Ka || q();
            this.start = b;
            this.end = a;
            this.unit = e || this.unit || (f.cssNumber[this.prop] ? "" : "px");
            this.now = this.start;
            this.pos = this.state = 0;
            g.elem = this.elem;
            g() && f.timers.push(g) && !Ca && (Xa ? (Ca = !0, k = function () {
                Ca && (Xa(k), j.tick())
            }, Xa(k)) : Ca = setInterval(j.tick, j.interval))
        },
        show: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop);
            this.options.show = !0;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function (b) {
            var a = Ka || q(),
                e = !0,
                g = this.elem,
                h = this.options,
                j, k;
            if (b || a >= h.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                h.animatedProperties[this.prop] = !0;
                for (j in h.animatedProperties) h.animatedProperties[j] !== !0 && (e = !1);
                if (e) {
                    h.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (b, a) {
                        g.style["overflow" + a] = h.overflow[b]
                    });
                    h.hide && f(g).hide();
                    if (h.hide || h.show) for (var r in h.animatedProperties) f.style(g, r, h.orig[r]);
                    h.complete.call(g)
                }
                return !1
            }
            h.duration == Infinity ? this.now = a : (k = a - this.startTime, this.state = k / h.duration, this.pos = f.easing[h.animatedProperties[this.prop]](this.state, k, 0, 1, h.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return !0
        }
    };
    f.extend(f.fx, {
        tick: function () {
            for (var b = f.timers, a = 0; a < b.length; ++a) b[a]() || b.splice(a--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(Ca);
            Ca = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (b) {
                f.style(b.elem, "opacity", b.now)
            },
            _default: function (b) {
                b.elem.style && b.elem.style[b.prop] != null ? b.elem.style[b.prop] = (b.prop === "width" || b.prop === "height" ? Math.max(0, b.now) : b.now) + b.unit : b.elem[b.prop] = b.now
            }
        }
    });
    f.expr && f.expr.filters && (f.expr.filters.animated = function (b) {
        return f.grep(f.timers, function (a) {
            return b === a.elem
        }).length
    });
    var Nb = /^t(?:able|d|h)$/i,
        kb = /^(?:body|html)$/i;
    "getBoundingClientRect" in t.documentElement ? f.fn.offset = function (b) {
        var a = this[0],
            e;
        if (b) return this.each(function (a) {
            f.offset.setOffset(this, b, a)
        });
        if (!a || !a.ownerDocument) return null;
        if (a === a.ownerDocument.body) return f.offset.bodyOffset(a);
        try {
            e = a.getBoundingClientRect()
        } catch (h) {}
        var j = a.ownerDocument,
            k = j.documentElement;
        if (!e || !f.contains(k, a)) return e ? {
            top: e.top,
            left: e.left
        } : {
            top: 0,
            left: 0
        };
        a = j.body;
        j = g(j);
        return {
            top: e.top + (j.pageYOffset || f.support.boxModel && k.scrollTop || a.scrollTop) - (k.clientTop || a.clientTop || 0),
            left: e.left + (j.pageXOffset || f.support.boxModel && k.scrollLeft || a.scrollLeft) - (k.clientLeft || a.clientLeft || 0)
        }
    } : f.fn.offset = function (b) {
        var a = this[0];
        if (b) return this.each(function (a) {
            f.offset.setOffset(this, b, a)
        });
        if (!a || !a.ownerDocument) return null;
        if (a === a.ownerDocument.body) return f.offset.bodyOffset(a);
        f.offset.initialize();
        var e, g = a.offsetParent,
            h = a.ownerDocument,
            j = h.documentElement,
            k = h.body;
        e = (h = h.defaultView) ? h.getComputedStyle(a, null) : a.currentStyle;
        for (var r = a.offsetTop, o = a.offsetLeft;
        (a = a.parentNode) && a !== k && a !== j;) {
            if (f.offset.supportsFixedPosition && e.position === "fixed") break;
            e = h ? h.getComputedStyle(a, null) : a.currentStyle;
            r -= a.scrollTop;
            o -= a.scrollLeft;
            a === g && (r += a.offsetTop, o += a.offsetLeft, f.offset.doesNotAddBorder && (!f.offset.doesAddBorderForTableAndCells || !Nb.test(a.nodeName)) && (r += parseFloat(e.borderTopWidth) || 0, o += parseFloat(e.borderLeftWidth) || 0), g = a.offsetParent);
            f.offset.subtractsBorderForOverflowNotVisible && e.overflow !== "visible" && (r += parseFloat(e.borderTopWidth) || 0, o += parseFloat(e.borderLeftWidth) || 0)
        }
        if (e.position === "relative" || e.position === "static") r += k.offsetTop, o += k.offsetLeft;
        f.offset.supportsFixedPosition && e.position === "fixed" && (r += Math.max(j.scrollTop, k.scrollTop), o += Math.max(j.scrollLeft, k.scrollLeft));
        return {
            top: r,
            left: o
        }
    };
    f.offset = {
        initialize: function () {
            var b = t.body,
                a = t.createElement("div"),
                e, g, h, j = parseFloat(f.css(b, "marginTop")) || 0;
            f.extend(a.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            a.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            b.insertBefore(a, b.firstChild);
            e = a.firstChild;
            g = e.firstChild;
            h = e.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = g.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = h.offsetTop === 5;
            g.style.position = "fixed";
            g.style.top = "20px";
            this.supportsFixedPosition = g.offsetTop === 20 || g.offsetTop === 15;
            g.style.position = g.style.top = "";
            e.style.overflow = "hidden";
            e.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = g.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = b.offsetTop !== j;
            b.removeChild(a);
            f.offset.initialize = f.noop
        },
        bodyOffset: function (b) {
            var a = b.offsetTop,
                e = b.offsetLeft;
            f.offset.initialize();
            f.offset.doesNotIncludeMarginInBodyOffset && (a += parseFloat(f.css(b, "marginTop")) || 0, e += parseFloat(f.css(b, "marginLeft")) || 0);
            return {
                top: a,
                left: e
            }
        },
        setOffset: function (b, a, e) {
            var g = f.css(b, "position");
            g === "static" && (b.style.position = "relative");
            var h = f(b),
                j = h.offset(),
                k = f.css(b, "top"),
                r = f.css(b, "left"),
                o = {},
                p = {},
                q, t;
            (g === "absolute" || g === "fixed") && f.inArray("auto", [k, r]) > -1 ? (p = h.position(), q = p.top, t = p.left) : (q = parseFloat(k) || 0, t = parseFloat(r) || 0);
            f.isFunction(a) && (a = a.call(b, e, j));
            a.top != null && (o.top = a.top - j.top + q);
            a.left != null && (o.left = a.left - j.left + t);
            "using" in a ? a.using.call(b, o) : h.css(o)
        }
    };
    f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var b = this[0],
                a = this.offsetParent(),
                e = this.offset(),
                g = kb.test(a[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : a.offset();
            e.top -= parseFloat(f.css(b, "marginTop")) || 0;
            e.left -= parseFloat(f.css(b, "marginLeft")) || 0;
            g.top += parseFloat(f.css(a[0], "borderTopWidth")) || 0;
            g.left += parseFloat(f.css(a[0], "borderLeftWidth")) || 0;
            return {
                top: e.top - g.top,
                left: e.left - g.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var b = this.offsetParent || t.body; b && !kb.test(b.nodeName) && f.css(b, "position") === "static";) b = b.offsetParent;
                return b
            })
        }
    });
    f.each(["Left", "Top"], function (b, a) {
        var h = "scroll" + a;
        f.fn[h] = function (a) {
            var j, l;
            if (a === e) {
                j = this[0];
                if (!j) return null;
                return (l = g(j)) ? "pageXOffset" in l ? l[b ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && l.document.documentElement[h] || l.document.body[h] : j[h]
            }
            return this.each(function () {
                (l = g(this)) ? l.scrollTo(b ? f(l).scrollLeft() : a, b ? a : f(l).scrollTop()) : this[h] = a
            })
        }
    });
    f.each(["Height", "Width"], function (b, a) {
        var g = a.toLowerCase();
        f.fn["inner" + a] = function () {
            var b = this[0];
            return b && b.style ? parseFloat(f.css(b, g, "padding")) : null
        };
        f.fn["outer" + a] = function (b) {
            var a = this[0];
            return a && a.style ? parseFloat(f.css(a, g, b ? "margin" : "border")) : null
        };
        f.fn[g] = function (b) {
            var h = this[0];
            if (!h) return b == null ? null : this;
            if (f.isFunction(b)) return this.each(function (a) {
                var e = f(this);
                e[g](b.call(this, a, e[g]()))
            });
            if (f.isWindow(h)) {
                var j = h.document.documentElement["client" + a];
                return h.document.compatMode === "CSS1Compat" && j || h.document.body["client" + a] || j
            }
            if (h.nodeType === 9) return Math.max(h.documentElement["client" + a], h.body["scroll" + a], h.documentElement["scroll" + a], h.body["offset" + a], h.documentElement["offset" + a]);
            if (b === e) return h = f.css(h, g), j = parseFloat(h), f.isNaN(j) ? h : j;
            return this.css(g, typeof b == "string" ? b : b + "px")
        }
    });
    a.jQuery = a.$ = f
})(window);
$.getScript = function (a, e) {
    $.ajax({
        type: "GET",
        url: a,
        success: e,
        dataType: "script",
        cache: !0
    })
};
(function (a, e, g) {
    function h(f, g, h) {
        f = e.createElement(f);
        return g && (f.id = u + g), h && (f.style.cssText = h), a(f)
    }
    function k(a) {
        var e = H.length,
            a = (K + a) % e;
        return a < 0 ? e + a : a
    }
    function p(a, e) {
        return Math.round((/%/.test(a) ? (e === "x" ? J.width() : J.height()) / 100 : 1) * parseInt(a, 10))
    }
    function q(a) {
        return j.photo || /\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)
    }
    function w() {
        var e;
        j = a.extend({}, a.data(M, A));
        for (e in j) a.isFunction(j[e]) && e.slice(0, 2) !== "on" && (j[e] = j[e].call(M));
        j.rel = j.rel || M.rel || "nofollow";
        j.href = j.href || a(M).attr("href");
        j.title = j.title || M.title;
        typeof j.href == "string" && (j.href = a.trim(j.href))
    }
    function v(e, f) {
        a.event.trigger(e);
        f && f.call(M)
    }
    function o() {
        var a, e = u + "Slideshow_",
            f = "click." + u,
            g, h;
        j.slideshow && H[1] ? (g = function () {
            ka.text(j.slideshowStop).unbind(f).bind(O, function () {
                if (j.loop || H[K + 1]) a = setTimeout(D.next, j.slideshowSpeed)
            }).bind(S, function () {
                clearTimeout(a)
            }).one(f + " " + va, h);
            t.removeClass(e + "off").addClass(e + "on");
            a = setTimeout(D.next, j.slideshowSpeed)
        }, h = function () {
            clearTimeout(a);
            ka.text(j.slideshowStart).unbind([O, S, va, f].join(" ")).one(f, function () {
                D.next();
                g()
            });
            t.removeClass(e + "on").addClass(e + "off")
        }, j.slideshowAuto ? g() : h()) : t.removeClass(e + "off " + e + "on")
    }
    function G(e) {
        la || (M = e, w(), H = a(M), K = 0, j.rel !== "nofollow" && (H = a("." + I).filter(function () {
            return (a.data(this, A).rel || this.rel) === j.rel
        }), K = H.index(M), K === -1 && (H = H.add(M), K = H.length - 1)), X || (X = fa = !0, t.show(), j.returnFocus && a(M).blur().one(Ea, function () {
            a(this).focus()
        }), Y.css({
            opacity: +j.opacity,
            cursor: j.overlayClose ? "pointer" : "auto"
        }).show(), j.w = p(j.initialWidth, "x"), j.h = p(j.initialHeight, "y"), D.position(), ia && J.bind("resize." + ja + " scroll." + ja, function () {
            Y.css({
                width: J.width(),
                height: J.height(),
                top: J.scrollTop(),
                left: J.scrollLeft()
            })
        }).trigger("resize." + ja), v(W, j.onOpen), ma.add(Ia).hide(), ya.html(j.close).show()), D.load(!0))
    }
    function F() {
        !t && e.body && (Da = !1, J = a(g), t = h(z).attr({
            id: A,
            "class": T ? u + (ia ? "IE6" : "IE") : ""
        }).hide(), Y = h(z, "Overlay", ia ? "position:absolute" : "").hide(), ha = h(z, "Wrapper"), Z = h(z, "Content").append(L = h(z, "LoadedContent", "width:0; height:0; overflow:hidden"), Ha = h(z, "LoadingOverlay").add(h(z, "LoadingGraphic")), Ia = h(z, "Title"), Ja = h(z, "Current"), pa = h(z, "Next"), U = h(z, "Previous"), ka = h(z, "Slideshow").bind(W, o), ya = h(z, "Close")), ha.append(h(z).append(h(z, "TopLeft"), f = h(z, "TopCenter"), h(z, "TopRight")), h(z, !1, "clear:left").append(na = h(z, "MiddleLeft"), Z, xa = h(z, "MiddleRight")), h(z, !1, "clear:left").append(h(z, "BottomLeft"), Fa = h(z, "BottomCenter"), h(z, "BottomRight"))).find("div div").css({
            "float": "left"
        }), oa = h(z, !1, "position:absolute; width:9999px; visibility:hidden; display:none"), ma = pa.add(U).add(Ja).add(ka), a(e.body).append(Y, t.append(ha, oa)))
    }
    function r() {
        return t ? (Da || (Da = !0, da = f.height() + Fa.height() + Z.outerHeight(!0) - Z.height(), ea = na.width() + xa.width() + Z.outerWidth(!0) - Z.width(), aa = L.outerHeight(!0), ba = L.outerWidth(!0), t.css({
            "padding-bottom": da,
            "padding-right": ea
        }), pa.click(function () {
            D.next()
        }), U.click(function () {
            D.prev()
        }), ya.click(function () {
            D.close()
        }), Y.click(function () {
            j.overlayClose && D.close()
        }), a(e).bind("keydown." + u, function (a) {
            var e = a.keyCode;
            X && j.escKey && e === 27 && (a.preventDefault(), D.close());
            X && j.arrowKey && H[1] && (e === 37 ? (a.preventDefault(), U.click()) : e === 39 && (a.preventDefault(), pa.click()))
        }), a("." + I, e).live("click", function (a) {
            a.which > 1 || a.shiftKey || a.altKey || a.metaKey || (a.preventDefault(), G(this))
        })), !0) : !1
    }
    var Q = {
        transition: "elastic",
        speed: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        inline: !1,
        html: !1,
        iframe: !1,
        fastIframe: !0,
        photo: !1,
        href: !1,
        title: !1,
        rel: !1,
        opacity: 0.9,
        preloading: !0,
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        open: !1,
        returnFocus: !0,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: void 0
    },
        A = "colorbox",
        u = "cbox",
        I = u + "Element",
        W = u + "_open",
        S = u + "_load",
        O = u + "_complete",
        va = u + "_cleanup",
        Ea = u + "_closed",
        ga = u + "_purge",
        T = !a.support.opacity && !a.support.style,
        ia = T && !g.XMLHttpRequest,
        ja = u + "_IE6",
        Y, t, ha, Z, f, na, xa, Fa, H, J, L, oa, Ha, Ia, Ja, ka, pa, U, ya, ma, j, da, ea, aa, ba, M, K, C, X, fa, la, Oa, D, z = "div",
        Da;
    if (!a.colorbox) a(F), D = a.fn[A] = a[A] = function (e, f) {
        var g = this,
            e = e || {};
        F();
        if (r()) {
            if (!g[0]) {
                if (g.selector) return g;
                g = a("<a/>");
                e.open = !0
            }
            f && (e.onComplete = f);
            g.each(function () {
                a.data(this, A, a.extend({}, a.data(this, A) || Q, e))
            }).addClass(I);
            (a.isFunction(e.open) && e.open.call(g) || e.open) && G(g[0])
        }
        return g
    }, D.position = function (a, e) {
        function g(a) {
            f[0].style.width = Fa[0].style.width = Z[0].style.width = a.style.width;
            Z[0].style.height = na[0].style.height = xa[0].style.height = a.style.height
        }
        var h = 0,
            k = 0,
            r = t.offset(),
            o = J.scrollTop(),
            q = J.scrollLeft();
        J.unbind("resize." + u);
        t.css({
            top: -9E4,
            left: -9E4
        });
        j.fixed && !ia ? (r.top -= o, r.left -= q, t.css({
            position: "fixed"
        })) : (h = o, k = q, t.css({
            position: "absolute"
        }));
        j.right !== !1 ? k += Math.max(J.width() - j.w - ba - ea - p(j.right, "x"), 0) : j.left !== !1 ? k += p(j.left, "x") : k += Math.round(Math.max(J.width() - j.w - ba - ea, 0) / 2);
        j.bottom !== !1 ? h += Math.max(J.height() - j.h - aa - da - p(j.bottom, "y"), 0) : j.top !== !1 ? h += p(j.top, "y") : h += Math.round(Math.max(J.height() - j.h - aa - da, 0) / 2);
        t.css({
            top: r.top,
            left: r.left
        });
        a = t.width() === j.w + ba && t.height() === j.h + aa ? 0 : a || 0;
        ha[0].style.width = ha[0].style.height = "9999px";
        t.dequeue().animate({
            width: j.w + ba,
            height: j.h + aa,
            top: h,
            left: k
        }, {
            duration: a,
            complete: function () {
                g(this);
                fa = !1;
                ha[0].style.width = j.w + ba + ea + "px";
                ha[0].style.height = j.h + aa + da + "px";
                j.reposition && setTimeout(function () {
                    J.bind("resize." + u, D.position)
                }, 1);
                e && e()
            },
            step: function () {
                g(this)
            }
        })
    }, D.resize = function (a) {
        X && (a = a || {}, a.width && (j.w = p(a.width, "x") - ba - ea), a.innerWidth && (j.w = p(a.innerWidth, "x")), L.css({
            width: j.w
        }), a.height && (j.h = p(a.height, "y") - aa - da), a.innerHeight && (j.h = p(a.innerHeight, "y")), !a.innerHeight && !a.height && (L.css({
            height: "auto"
        }), j.h = L.height()), L.css({
            height: j.h
        }), D.position(j.transition === "none" ? 0 : j.speed))
    }, D.prep = function (e) {
        if (X) {
            var f, g = j.transition === "none" ? 0 : j.speed;
            L.remove();
            L = h(z, "LoadedContent").append(e);
            L.hide().appendTo(oa.show()).css({
                width: (j.w = j.w || L.width(), j.w = j.mw && j.mw < j.w ? j.mw : j.w, j.w),
                overflow: j.scrolling ? "auto" : "hidden"
            }).css({
                height: (j.h = j.h || L.height(), j.h = j.mh && j.mh < j.h ? j.mh : j.h, j.h)
            }).prependTo(Z);
            oa.hide();
            a(C).css({
                "float": "none"
            });
            ia && a("select").not(t.find("select")).filter(function () {
                return this.style.visibility !== "hidden"
            }).css({
                visibility: "hidden"
            }).one(va, function () {
                this.style.visibility = "inherit"
            });
            f = function () {
                function e() {
                    T && t[0].style.removeAttribute("filter")
                }
                var f, r;
                f = H.length;
                var o, p, F, w;
                if (X) {
                    p = function () {
                        clearTimeout(Oa);
                        Ha.hide();
                        v(O, j.onComplete)
                    };
                    T && C && L.fadeIn(100);
                    Ia.html(j.title).add(L).show();
                    if (f > 1) {
                        if (typeof j.current == "string" && Ja.html(j.current.replace("{current}", K + 1).replace("{total}", f)).show(), pa[j.loop || K < f - 1 ? "show" : "hide"]().html(j.next), U[j.loop || K ? "show" : "hide"]().html(j.previous), j.slideshow && ka.show(), j.preloading) for (f = [k(-1), k(1)]; r = H[f.pop()];) F = a.data(r, A).href || r.href, a.isFunction(F) && (F = F.call(r)), q(F) && (w = new Image, w.src = F)
                    } else ma.hide();
                    j.iframe ? (o = h("iframe")[0], "frameBorder" in o && (o.frameBorder = 0), "allowTransparency" in o && (o.allowTransparency = "true"), o.name = u + +new Date, j.fastIframe ? p() : a(o).one("load", p), o.src = j.href, j.scrolling || (o.scrolling = "no"), a(o).addClass(u + "Iframe").appendTo(L).one(ga, function () {
                        o.src = "//about:blank"
                    })) : p();
                    j.transition === "fade" ? t.fadeTo(g, 1, e) : e()
                }
            };
            j.transition === "fade" ? t.fadeTo(g, 0, function () {
                D.position(0, f)
            }) : D.position(g, f)
        }
    }, D.load = function (e) {
        var f, g, k = D.prep;
        fa = !0;
        C = !1;
        M = H[K];
        e || w();
        v(ga);
        v(S, j.onLoad);
        j.h = j.height ? p(j.height, "y") - aa - da : j.innerHeight && p(j.innerHeight, "y");
        j.w = j.width ? p(j.width, "x") - ba - ea : j.innerWidth && p(j.innerWidth, "x");
        j.mw = j.w;
        j.mh = j.h;
        j.maxWidth && (j.mw = p(j.maxWidth, "x") - ba - ea, j.mw = j.w && j.w < j.mw ? j.w : j.mw);
        j.maxHeight && (j.mh = p(j.maxHeight, "y") - aa - da, j.mh = j.h && j.h < j.mh ? j.h : j.mh);
        f = j.href;
        Oa = setTimeout(function () {
            Ha.show()
        }, 100);
        j.inline ? (h(z).hide().insertBefore(a(f)[0]).one(ga, function () {
            a(this).replaceWith(L.children())
        }), k(a(f))) : j.iframe ? k(" ") : j.html ? k(j.html) : q(f) ? (a(C = new Image).addClass(u + "Photo").error(function () {
            j.title = !1;
            k(h(z, "Error").text("This image could not be loaded"))
        }).load(function () {
            var a;
            C.onload = null;
            j.scalePhotos && (g = function () {
                C.height -= C.height * a;
                C.width -= C.width * a
            }, j.mw && C.width > j.mw && (a = (C.width - j.mw) / C.width, g()), j.mh && C.height > j.mh && (a = (C.height - j.mh) / C.height, g()));
            j.h && (C.style.marginTop = Math.max(j.h - C.height, 0) / 2 + "px");
            H[1] && (j.loop || H[K + 1]) && (C.style.cursor = "pointer", C.onclick = function () {
                D.next()
            });
            T && (C.style.msInterpolationMode = "bicubic");
            setTimeout(function () {
                k(C)
            }, 1)
        }), setTimeout(function () {
            C.src = f
        }, 1)) : f && oa.load(f, j.data, function (e, f, g) {
            k(f === "error" ? h(z, "Error").text("Request unsuccessful: " + g.statusText) : a(this).contents())
        })
    }, D.next = function () {
        !fa && H[1] && (j.loop || H[K + 1]) && (K = k(1), D.load())
    }, D.prev = function () {
        !fa && H[1] && (j.loop || K) && (K = k(-1), D.load())
    }, D.close = function () {
        X && !la && (la = !0, X = !1, v(va, j.onCleanup), J.unbind("." + u + " ." + ja), Y.fadeTo(200, 0), t.stop().fadeTo(300, 0, function () {
            t.add(Y).css({
                opacity: 1,
                cursor: "auto"
            }).hide();
            v(ga);
            L.remove();
            setTimeout(function () {
                la = !1;
                v(Ea, j.onClosed)
            }, 1)
        }))
    }, D.remove = function () {
        a([]).add(t).add(Y).remove();
        t = null;
        a("." + I).removeData(A).removeClass(I).die()
    }, D.element = function () {
        return a(M)
    }, D.settings = Q
})(jQuery, document, this);
var per = {},
    source, curRow, succCount, curTimeout, working, map, validate_span, geocode_button, geocoder_span, f_lat, f_lon, f_address, markers, gA, small, lastInfoWindow, bounds, doMapCount, pFcount, android, iphone, map_div, gbounds, clarker, mPg, cmPg, resizeTimer, gpsMarker, omni, lastFilter, lat_name = "bg_lat",
    long_name = "bg_long",
    dist_name = "bg_distance",
    accuracy_name = "bg_accuracy",
    postal_name = "bg_postal",
    colorArray = ["red", "blue", "green", "yellow", "purple", "paleblue", "orange"],
    hexArray = ["fd7569", "6996fd", "95ea7b", "fdeb5a", "c699fd", "bae1fd", "fb8b07"],
    thematicColor = ["red", "orange", "yellow", "green", "paleblue", "blue", "purple"],
    geocodeDelay, validatedSource = 0,
    openRow = -1,
    openLocator = 0,
    base = "https:" == document.location.protocol ? "https://d27ixrd8sdmf11.cloudfront.net" : "http://static.batchgeo.com",
    distance_str = "Distance",
    group_match = "group",
    icon_home = base + "/images/icons/",
    rgn = "",
    isThematicNumeric = !1,
    gC = {},
    mrks = [],
    maxPonts = 2500,
    tooManyPoints = "Warning: Mapping datasets larger than " + maxPonts + " records is not supported in our free product, please use BatchGeo Pro. Do you want to continue with the first " + maxPonts + " records?",
    mapsURL = "maps.google.com",
    cookieDate = new Date;
cookieDate.setTime(cookieDate.getTime() + 31536E6);
Clarker.prototype.MARKER_CLUSTER_IMAGE_PATH_ = base + "/images/me";
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/, "")
};

function init() {}

function cacheView(a) {
    if (!checkLocal()) return !1;
    var e = window.location.href + "_cacheView";
    if (!a) {
        if (!map.getBounds()) return;
        a = {
            zoom: map.getZoom(),
            lat: map.getCenter().lat(),
            lng: map.getCenter().lng(),
            type: map.getMapTypeId(),
            search: dId("addressBox") ? dId("addressBox").value : "",
            filter: lastFilter,
            openRow: lastInfoWindow ? lastInfoWindow.m.r : -1
        }
    }
    localStorage.setItem(e, JSON.stringify(a))
}

function getCachedView() {
    if (!checkLocal()) return !1;
    var a = JSON.parse(localStorage.getItem(window.location.href + "_cacheView"));
    return a ? a : !1
}
function checkLocal() {
    if (typeof window.ie7 == "undefined") {
        if (!localStorage) return null;
        return !0
    }
}

function simpleInit() {
    map_div = dId("mapDiv");
    sizeCount = 0;
    try {
        locale = per.locale == void 0 ? locale == void 0 ? "us" : locale : per.locale
    } catch (a) {
        locale = "us"
    }
    bgSize();
    map = new google.maps.Map(map_div);
    if (!per.dist_cb_status) per.dist_sel = 0, per.dist_cb_status = !1;
    if (!per.field_cb_status) per.field_cb_status = !1;
    per.field_cb_status = !0;
    //addImages();
    doMapCount = 0;
    google.maps.event.addListenerOnce(map, "idle", function () {
        $(map_div).css("overflow") != "visible" && ($(map_div).css("overflow", "visible"), $(map_div).children().css("overflow", "visible").css("z-index", 0).children().css("overflow", "visible").css("z-index", 0), $("#topBar").css("z-index", 99), $("#topBG").css("z-index", 99).css("height", $("#topBar").outerHeight()))
    });
    window.onorientationchange = function () {
        bgSize()
    };
    window.onbeforeunload = function () {
        //cacheView()
    };
    !android + iphone && (resizeTimer = null, $(window).bind("resize", function () {
        resizeTimer && clearTimeout(resizeTimer);
        resizeTimer = setTimeout("bgSize();", 100)
    }), pFcount = 0, window.setTimeout("printFix()", 3E3));
    //buildOmniBox();
    load(); //mcpat
    window.location.hash && window.location.hash.replace("#", "") && (openRow = parseFloat(window.location.hash.replace("#", "")));
    per ? doMap() : alert("Data load error, try reloading the page or rebuilding map.")
}
function smoothOpenMarker(a) {
    map.setCenter(markers[a].marker.getPosition());
    google.maps.event.addListenerOnce(map, "idle", function () {
        openPointWin(markers[a].marker)
    })
}

function findNearest(a) {
    if (openLocator) return !1;
    if (a == "") geocoderResult(null);
    else if (omni && omni[a]) {
        drawMarkers(omni[a]);
        bounds = new google.maps.LatLngBounds;
        var e = 0,
            g;
        for (g in omni[a]) e++, markers[g] && parseFloat(markers[g].Lat) && bounds.extend(new google.maps.LatLng(markers[g].Lat, markers[g].Lon));
        e == 1 && map.getCenter() ? (bounds.extend(map.getCenter()), map.fitBounds(bounds), smoothOpenMarker(g)) : map.fitBounds(bounds)
    } else openLocator = 1, (new google.maps.Geocoder).geocode({
        address: a,
        bounds: bounds
    }, geocoderResult), f_address = a, $("#mapDirections").hide()
}
function renderPanel(a) {
    directions.setDirections(a)
}

function geocoderResult(a, e) {
    openLocator = 0;
    if (!e || e != google.maps.GeocoderStatus.OK) {
        lastFilter = null;
        for (var g = new google.maps.LatLngBounds, h = 0; h < per.mapRS.length; h++) parseFloat(per.mapRS[h].lt) && g.extend(new google.maps.LatLng(per.mapRS[h].lt, per.mapRS[h].ln));
        var k = g.getCenter().lat(),
            p = g.getCenter().lng(),
            q = google.maps.GeocoderLocationType.APPROXIMATE,
            w = -1
    } else for (var p = a[0].geometry.location.lng(), k = a[0].geometry.location.lat(), g = a[0].geometry.bounds, q = a[0].geometry.location_type, v = 1.0E20, w = -1, h = 0; h < per.mapRS.length; h++) dist = distance(parseFloat(per.mapRS[h].lt), parseFloat(per.mapRS[h].ln), k, p).toFixed(2), parseFloat(dist) < parseFloat(v) && markers[h] && (w = h, v = dist);
    g || (g = new google.maps.LatLngBounds, g.extend(new google.maps.LatLng(k, p)));
    w < 0 ? (map.fitBounds(g), drawMarkers()) : (g.extend(new google.maps.LatLng(per.mapRS[w].lt, per.mapRS[w].ln)), markers && markers[w] && (map.fitBounds(g), g = lastFilter, lastFilter = "", drawMarkers(g), openPointWin(markers[w].marker)), q == google.maps.GeocoderLocationType.ROOFTOP || q == google.maps.GeocoderLocationType.RANGE_INTERPOLATED ? mapDir(k, p, per.mapRS[w].lt, per.mapRS[w].ln) : directions.setMap && directions.setMap(null))
}
function ptz(a) {
    if (lastInfoWindow && lastInfoWindow.m || a) a = a || lastInfoWindow.m, map.setCenter(a.getPosition()), map.getZoom() < 12 ? map.setZoom(12) : map.setZoom(map.getZoom() + 1)
}

function mapDir(a, e, g, h) {
    openLocator = 1;
    directionsService.route({
        origin: a + ", " + e,
        destination: g + ", " + h,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    }, function (a, e) {
        e == google.maps.DirectionsStatus.OK && (directions.setMap(map), $(map_div).outerWidth() >= 600 && ($("#mapDirections").css("height", $("#mapDiv").height()).html("").show(), $(map_div).css("width", $(window).width() - $("#mapDirections").width()).css("float", "left").wrap('<div class="clip" />')), directions.setDirections(a), openLocator = 0)
    })
}

function trackGPS(a) {
    if (!gpsMarker) {
        var e = new google.maps.MarkerImage(base + "/images/gps.png", new google.maps.Size(16, 16), new google.maps.Point(0, 0), new google.maps.Point(8, 8));
        gpsMarker = new google.maps.Marker({
            position: new google.maps.LatLng(a.coords.latitude, a.coords.longitude),
            icon: e,
            draggable: !1
        });
        gpsMarker.setMap(map);
        navigator.geolocation.watchPosition(function (a) {
            trackGPS(a)
        })
    }
    gpsMarker.setPosition(new google.maps.LatLng(a.coords.latitude, a.coords.longitude))
}

function printFix() {
    pFcount >= markers.length || $("#mapDiv div").each(function (a, e) {
        var g = $(e),
            h = g.css("background-image"),
            k = g.css("filter"),
            p = g.css("background-color"),
            q = g.css("width");
        k == "alpha(opacity=1)" && h == "none" && p != "white" && q != "256px" && g.css("filter", "")
    })
}

function bgSize() {
    var a = $("#addressBox"),
        e = $("h1"),
        g = $("#legDiv"),
        h = $("#legWrap"),
        k = $("#description"),
        p = $("#descriptionWrap"),
        q = $("#topAd"),
        w = $("#dataBG"),
        v = $("#topButtons"),
        o = $("#topBar"),
        G = $("#adWrap"),
        F = $("#titleDiv"),
        r = $("#featureLinks"),
        Q = $("#page"),
        A = $("#mapDirections"),
        u = $("#mapWrap"),
        I = $("#mapBorder"),
        W = $("#buttonsDivMap"),
        S = $("html"),
        O = $("#searchForm");
    $(map_div).outerWidth() < 700 && a.css("width", 150);
    $(map_div).outerWidth() < 600 ? (e.css("font-size", "13px").css("font-weight", "bold"), g.css("font-size", "10px"), k.css("font-size", "11px"), q.css("width", $(map_div).outerWidth() + "px"), q.outerHeight() && q.css("height", u.outerWidth() >= 728 ? 28 : 64), w.hide(), S.css("overflow", "hidden"), g.height() || g.hide(), W.hide()) : (w.show(), W.show());
    k.outerHeight() || g.css("text-align", "center");
    iphone || android ? O.hide() : $(map_div).outerWidth() <= 500 && O.outerWidth() ? (a.css("width", $(map_div).outerWidth() - 113), $(map_div).outerWidth() > 300 && locale == "us" && a.attr("title", "Search " + e.text()), e.html("")) : F.css("width", $(map_div).outerWidth() - (v.outerWidth() + 30));
    e.show();
    v.show();
    r.show();
    $(map_div).css("height", $(window).height() - (o.outerHeight() + p.outerHeight() + (G.outerHeight() ? u.outerWidth() >= 728 ? 28 : u.outerWidth() <= 234 ? 0 : 64 : 0) + h.outerHeight()));
    $(window).height() < 359 && (h.hide(), p.hide(), G.hide(), $(map_div).css("height", $(window).height() - o.outerHeight()));
    h.css("top", o.outerHeight());
    I.css("top", o.outerHeight());
    u.css("height", $(map_div).outerHeight() + o.outerHeight() + p.outerHeight() + h.outerHeight() + G.outerHeight());
    Q.css("top", u.outerHeight() + o.outerHeight());
    A.css("height", $(map_div).height())
}

function buildOmniBox(a) {
    sb = $("#addressBox");
    d = per.dataRS;
    $("h1").bind("click", function () {
        findNearest("");
        dId("addressBox").value = "";
        $("#addressBox").blur()
    });
    if (d) {
        if (!omni) {
            omni = {};
            for (var e = 0; e < d.length; e++) for (var g = 0; g < d[e].length; g++) {
                var h = d[e][g];
                per.columnNames[g] = per.columnNames[g] || "";
                h == "" || h.length > 100 || (h += " (" + per.columnNames[g] + ")", omni[h] || (omni[h] = {}), omni[h][e] = !0)
            }
        }
        if (a) {
            auto = [];
            for (e in omni) auto[auto.length] = e;
            $(sb).autocomplete({
                source: auto,
                minLength: auto.length > 2E3 ? 2 : 1,
                open: function () {
                    $("ul.ui-autocomplete").css("width", $("#topButtons").outerWidth())
                },
                select: function (a, e) {
                    findNearest(e.item.value)
                }
            })
        } else $(sb).one("focus", function () {
            jQuery.getScript("/autocomplete/js/autocomplete.js", function () {
                buildOmniBox(!0)
            })
        }), $(sb).bind("click", function () {
            $(sb).select()
        })
    }
}
function loadExample() {
    if (getCookie("examples") != 0) {
        if (source.value.length) return tableize(source);
        $.get("./example_tab.txt", function (a) {
            source.value = a;
            tableize(source)
        })
    }
}

function unValidateSource() {
    validate_span.style.display = "none";
    per.mapRS = null;
    per.dataRS = null;
    dId("fields").style.display = "none";
    dId("geocoding").style.display = "none";
    validatedSource = 0
}
function stripQuotes(a) {
    a.length >= 3 && (Left(a, 1) == '"' && (a = Right(a, a.length - 1)), Right(a, 1) == '"' && (a = Left(a, a.length - 1)));
    return a
}

function validateSource() {
    for (var a = source.value.trim(), e, g = /([\n\t]"[^"]+)[\n\r]+/gi; a.match(g);) a = a.replace(g, "$1 ");
    var h = a.split(String.fromCharCode(10));
    if (h.length <= 0) return alert("Check your source data, make sure its populated correctly. Look at the example if you are having trouble."), 0;
    for (var g = per.columnNames, k = 0; k < h.length; k++) if (a = h[k].trim(), a.substr(0, 1) != "#") {
        per.columnNames = a.split(String.fromCharCode(9));
        e = k + 1;
        break
    }
    for (k = 0; k < per.columnNames.length; k++) per.columnNames[k] = stripQuotes(per.columnNames[k]);
    g = g || per.columnNames;
    for (per.dataRS = []; e < h.length; e++) {
        var p = h[e].split(String.fromCharCode(9));
        if (p.length >= 1 && h[e].length) {
            k = per.dataRS.length;
            per.dataRS[k] = [];
            for (var q = 0; q < p.length; q++) a = stripQuotes(strip(p[q].trim())), a = a == "NULL" ? "" : a, per.dataRS[k][q] = a
        }
    }
    if (per.dataRS.length > maxPonts) {
        if (!confirm(tooManyPoints)) return per.columnNames = "", 0;
        per.dataRS.length = maxPonts
    }
    if (per.dataRS.length > 300 && dId("clustering_cb")) dId("clustering_cb").checked = !0, per.clustering_cb_status = !0;
    var w = [],
        v = function (a) {
            for (var e = {}, g = 0; g < a.length; g++) e[a[g]] = "";
            return e
        },
        a = function (a, e, g, h) {
            for (var k = per.columnNames, o = -1, h = h >= 0 ? h : -1, e = v(e), p = a.options.length; p > 1; p--) a.options.length--;
            for (p in e) e[p.toLowerCase()] = "";
            for (p = 0; p < k.length; p++) a.options[1 + p] = new Option(k[p].trim(), k[p].trim()), p == h ? o = h : o < 0 && a.options[1 + p].value.toLowerCase().trim() in e && (o = p);
            o < 0 && (o = function () {
                for (var e = 0; e < g.length; e++) for (var h = 0; h < k.length; h++) if (!(h in v(w)) && a.options[1 + h].value.toLowerCase().trim().indexOf(g[e]) != -1) return h;
                return -1
            }());
            if (o != -1) w[w.length] = o, a.options[1 + o].selected = !0;
            return o
        };
    if (dId("lat_sel")) per.lat_col = a(dId("lat_sel"), ["lat", "lt"], ["latitude"], per.lat_col), per.long_col = a(dId("long_sel"), ["ln", "lng", "lon", "long"], ["longitude"], per.long_col), per.postal_col = a(dId("postal_sel"), [], [postal_name], per.postal_col), per.accuracy_col = a(dId("accuracy_sel"), [], [accuracy_name], per.accuracy_col);
    per.address_col = a(dId("address_sel"), [g[per.address_col], "ip", "adress"], [address_match.toLowerCase(), "address", "house", "street", "location", "adresse", "addr"]);
    per.city_col = a(dId("city_sel"), [g[per.city_col]], [city_match.toLowerCase(), "town", "address", "adresse", "addr", "county", "street"]);
    per.state_col = a(dId("state_sel"), [g[per.state_col], "st"], [state_match.toLowerCase(), "province", "address", "postcode", "city"]);
    per.zip_col = a(dId("zip_sel"), [g[per.zip_col], "zip"], [zip_match.toLowerCase(), "zipcode", "postcode", "zip code", "post code", "postalcode", "region", "plz", "country", "county", "postal"]);
    per.desc_col = a(dId("desc_sel"), [g[per.desc_col]], []);
    per.group_col = a(dId("group_sel"), [g[per.group_col], "group", "category", "count"], [group_match.toLowerCase(), "value", "total", "price", "cost", "percentage", "date", "type", "status", "rate", "rating", "?", "sale", "rank", "amount", "size", "sqft"]);
    per.title_col = a(dId("title_sel"), [g[per.title_col]], ["title", "name", "company", "label"]);
    per.descURL_col = a(dId("descURL_sel"), [g[per.descURL_col], "web", "www"], ["url", "website"]);
    per.descIMG_col = a(dId("descIMG_sel"), [g[per.descIMG_col], "img"], ["image"]);
    per.email_col = a(dId("email_sel"), [g[per.email_col]], ["email", "e-mail"]);
    per.desc_col = rS(dId("desc_sel"));
    if (per.columnNames.length == 1 && per.address_col < 0 && per.city_col < 0 && per.state_col < 0 && per.zip_col < 0 && (per.lat_col < 0 || per.long_col < 0)) per.address_col = a(dId("address_sel"), per.columnNames[0], [], 0);
    validate_span.innerHTML = "Done: " + per.columnNames.length + " columns, " + per.dataRS.length + " rows - scroll down to Validate &amp; Set Options";
    validate_span.style.display = "block";
    per.mapRS = per.mapRS || [];
    per.dataRS.length && updatePreview(0);
    $("#fields").show("normal");
    $("#geocoding").show("normal");
    try {
        _gaq.push(["_trackEvent", "Geocode", "Validate", "Rows", per.dataRS.length]), _gaq.push(["_trackEvent", "Geocode", "Validate", "Columns", per.columnNames.length])
    } catch (o) {}
    validatedSource = 1;
    return per.dataRS.length
}
function updatePreview(a) {
    dId("preview") || $("#locFields").after('<div id="preview"></div>');
    prepRow(a);
    a = per.mapRS[a];
    $("#preview").html('<div id="markerBoxPreview">' + createMarkerText(a.t, a.d, a.u, a.i, a.l, a.e, 0, 0, "") + "</div>")
}

function doGeocode() {
    if (typeof google.maps == "undefined") google.load("maps", "3.8", {
        other_params: "sensor=false",
        callback: doGeocode
    });
    else {
        curRow = 0;
        geocodeDelay = 1;
        gbounds = new google.maps.LatLngBounds;
        if (per.columnNames) if (per.address_col < 0 && per.city_col < 0 && per.state_col < 0 && per.zip_col < 0 && (per.lat_col < 0 || per.long_col < 0)) return alert("No columns that can be geocoded are selected, check Step #2."), 0;
        else {
            if (working) return confirm("Are you sure you want to stop the current geocoding processs?") ? (per.mapRS.length--, stopGeocode()) : 0
        } else {
            if (!source) return alert("You need to validate the source first, check Step #1."), 0;
            if (!validateSource()) return 0
        }
        geocoder_span.style.display = "block";
        dId("geocoding").style.display = "block";
        if (dId("geocoder_ad")) dId("geocoder_ad").style.display = "block";
        typeof window.ie7 == "undefined" && dId("geocoding").scrollIntoView(!0);
        source.value.split("\n");
        per.mapRS = per.mapRS || [];
        working = 1;
        succCount = curRow = 0;
        geocode_button.old_value = geocode_button.value;
        geocode_button.value = "Stop Geocoder";
        $(geocode_button).removeClass("green");
        $(geocode_button).addClass("red");
        dId("country_sel") ? (ctry = dId("country_sel"), rgn = ctry.options[ctry.selectedIndex].value) : rgn = "";
        for (gC[rgn] = gC[rgn] || {}; startRow(curRow);) curRow++
    }
}

function stopGeocode() {
    working = 0;
    geocode_button.value = geocode_button.old_value;
    $(geocode_button).removeClass("red");
    $(geocode_button).addClass("green");
    if (dId("geocodeshow_button")) dId("geocodeshow_button").style.display = "inline";
    if (dId("results")) dId("results").style.display = "block";
    doMap();
    geocoder_span.innerHTML = "Geocoded " + mrks.length + " records.";
    dId("geocoder_status") && dId("geocoder_status").scrollIntoView(!0);
    for (var a = "", e = per.mapRS.length - mrks.length, g = 0; g < per.mapRS.length; g++) per.mapRS[g].lt || (a += "Row " + (g + 2) + ": " + per.mapRS[g].addr + "<br />");
    !dId("fail_message") && dId("mapheader") && (dId("mapheader").innerHTML += '<div id="fail_message"></div>');
    a.length ? ($(geocoder_span).after('<div class="hide"><div id="inline_message"><p>The following locations we were not able to map:</p><p>' + a + '</p><p>These should resemble physical locations (addresses, postal codes, cities, etc..) You may want to fix these in your source data or make sure you have proper columns selected in Step #2, and if you are not already, try using our <a href="/excel_example.xls">spreadsheet template</a>.</p></div></div>'), dId("fail_message").innerHTML = '<a rel="notfound" href="">Note: ' + e + " locations were not found</a>.", $("a[rel='notfound']").colorbox({
        width: "600px",
        inline: !0,
        href: "#inline_message"
    })) : dId("fail_message").innerHTML = "";
    try {
        _gaq.push(["_trackEvent", "Geocode", "Complete", "Rows", succCount]), _gaq.push(["_trackEvent", "Geocode", "Complete", "Rows Failed", e]), _gaq.push(["_trackEvent", "Geocode", "Complete", "Percentage", e / per.dataRS.length * 100]), per.mapRS[0].a == "1 Crossgates Mall Road" && _gaq.push(["_trackEvent", "Geocode", "Example"])
    } catch (h) {}
}

function prepRow(a) {
    per.mapRS[a] = per.mapRS[a] || {};
    var e = per.mapRS[a],
        a = per.dataRS[a];
    e.accuracy = per.accuracy_col >= 0 ? a[per.accuracy_col] : "";
    e.postal = per.postal_col >= 0 ? a[per.postal_col] : "";
    e.a = per.address_col >= 0 ? ifstr(a[per.address_col]) : "";
    e.c = per.city_col >= 0 ? ifstr(a[per.city_col]) : "";
    e.s = per.state_col >= 0 ? ifstr(a[per.state_col]) : "";
    e.z = per.zip_col >= 0 ? ifstr(a[per.zip_col]) : "";
    e.t = per.title_col >= 0 ? ifstr(a[per.title_col]) : "";
    e.u = per.descURL_col >= 0 ? ifstr(a[per.descURL_col]) : "";
    e.i = per.descIMG_col >= 0 ? ifstr(a[per.descIMG_col]) : "";
    e.g = per.group_col >= 0 ? ifstr(a[per.group_col]) : "";
    e.e = per.email_col >= 0 ? ifstr(a[per.email_col]) : "";
    e.lt = per.lat_col >= 0 ? ifstr(a[per.lat_col]) : "";
    e.ln = per.long_col >= 0 ? ifstr(a[per.long_col]) : "";
    e.d = "";
    if (per.desc_col == -1) for (var g = "\t" + dist_name + "\t" + postal_name + "\t" + lat_name + "\t" + long_name + "\t" + accuracy_name + "\t" + per.columnNames[per.title_col] + "\t" + per.columnNames[per.descIMG_col] + "\t" + per.columnNames[per.descURL_col] + "\t" + per.columnNames[per.address_col] + "\t" + per.columnNames[per.address_col] + "\t" + per.columnNames[per.city_col] + "\t" + per.columnNames[per.state_col] + "\t" + per.columnNames[per.zip_col] + "\t" + per.columnNames[per.email_col] + "\t" + per.columnNames[per.lat_col] + "\t" + per.columnNames[per.long_col] + "\t", h = 0; h < per.columnNames.length; h++) g.indexOf("\t" + per.columnNames[h] + "\t") == -1 && a[h] && a[h].trim().length && (e.d += "<div>" + (per.field_cb_status ? '<span class="l">' + per.columnNames[h] + ":</span>&nbsp;" : "") + a[h] + "</div>");
    else if (a[per.desc_col]) e.d = ifstr(a[per.desc_col]);
    e.addr = e.a;
    e.addr = (e.a + e.c).length > 0 ? e.addr + " " : e.addr;
    e.addr = e.c && e.c.length > 0 ? e.addr + e.c : e.addr;
    e.addr = e.s && e.s.length > 0 ? e.addr.trim() + " " + e.s : e.addr;
    e.addr = e.z && e.z.length > 0 ? e.addr.trim() + " " + e.z : e.addr;
    e.addr = e.addr.replace("&", " AND ").replace("NULL", "").replace(/\\|&|#|\/|/g, "").trim();
    e.z = e.z || "";
    e.l = e.a && e.a.length ? e.a + "<br />" : e.a;
    e.l = e.c && e.c.length ? e.l + e.c : e.l;
    e.l = e.s && e.s.length && e.c.length ? e.l + ", " + e.s : e.l + e.s.trim();
    e.l = (e.s && e.s.length || e.c.length) && e.z && e.z.length ? e.l + " " + e.z : e.l + " " + e.z
}

function startRow(a) {
    if (!working) return !1;
    if (a >= per.dataRS.length) return stopGeocode(), !1;
    per.mapRS[a] = {};
    var e = per.mapRS[a];
    prepRow(a);
    geocoder_span.innerHTML = "Processing: " + e.addr + " (" + (a + 1) + "/" + per.dataRS.length + ")";
    if (!e.lt && e.addr.trim() != "" && gC[rgn][e.addr]) e.lt = gC[rgn][e.addr].lt, e.ln = gC[rgn][e.addr].ln, e.accuracy = gC[rgn][e.addr].accuracy, e.l = e.l || gC[rgn][e.addr].l;
    if (!goodLatLon(e.lt, e.ln) && e.addr.split(".").length == 4 && parseInt(e.addr.split(".")[0]) > 10 && e.addr.length <= 15) return curTimeout = setTimeout(function (a) {
        endGeocode(null, null, a)
    }, 5E3), $.ajax({
        url: "http://freegeoip.net/json/" + e.addr + "",
        dataType: "jsonp",
        success: function (e, g) {
            endGeocode(e, g, a)
        }
    }), !1;
    else if (!goodLatLon(e.lt, e.ln) && e.addr.trim() != "") {
        var g = new google.maps.Geocoder;
        curTimeout = setTimeout(function (a) {
            endGeocode(null, null, a)
        }, 5E3);
        gbounds.isEmpty() ? g.geocode({
            address: e.addr,
            region: rgn
        }, function (e, g) {
            endGeocode(e, g, a)
        }) : g.geocode({
            address: e.addr,
            region: rgn,
            bounds: gbounds
        }, function (e, g) {
            endGeocode(e, g, a)
        });
        return !1
    } else return !0
}

function endGeocode(a, e, g) {
    try {
        clearTimeout(curTimeout), curTimeout = null
    } catch (h) {}
    if ((g = per.mapRS[g]) && goodLatLon(g.lt, g.ln)) {
        if (g.lt = g.lt, g.ln = g.ln, !g.accuracy) g.accuracy = google.maps.GeocoderLocationType.ROOFTOP
    } else if (e == "success" && a && a.ip && a.latitude) g.lt = a.latitude, g.ln = a.longitude, g.postal = a.zipcode, g.l = (ifstr(a.city) + " " + ifstr(a.region_name) + " " + ifstr(a.zipcode) + " " + ifstr(a.country_name)).trim(), g.accuracy = google.maps.GeocoderLocationType.APPROXIMATE;
    else if (e == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) geocodeDelay += 50;
    else if (e != google.maps.GeocoderStatus.OK) g.lt = 0, g.ln = 0, g.accuracy = "unknown";
    else if (e == google.maps.GeocoderStatus.OK) {
        geocodeDelay > 50 && (geocodeDelay += -1);
        g.ln = a[0].geometry.location.lng();
        g.lt = a[0].geometry.location.lat();
        g.postal = "";
        for (i = 0; i < a[0].address_components.length; i++) if (a[0].address_components[i].types == "postal_code") g.postal = a[0].address_components[i].long_name;
        try {
            if (locale != "us" && a) g.l = a[0].formatted_address
        } catch (k) {}
        g.accuracy = a[0].geometry.location_type;
        g.accuracy != google.maps.GeocoderLocationType.APPROXIMATE && succCount++
    }
    goodLatLon(g.lt, g.ln) && (gC[rgn][g.addr] = {
        lt: g.lt,
        ln: g.ln,
        accuracy: g.accuracy,
        l: g.l
    });
    gbounds.extend(new google.maps.LatLng(g.lt, g.ln));
    e != google.maps.GeocoderStatus.OVER_QUERY_LIMIT && curRow++;
    return setTimeout(function () {
        for (; startRow(curRow);) curRow++
    }, geocodeDelay)
}

function addImages() {
    small = [];
    for (i = 0; i < colorArray.length; i++) small[i] = new google.maps.MarkerImage(icon_home + colorArray[i] + "_small_marker.png", new google.maps.Size(12, 20), new google.maps.Point(0, 0), new google.maps.Point(5, 20));
    small_shadow = new google.maps.MarkerImage(icon_home + "shadow_small_marker.png", new google.maps.Size(22, 20), new google.maps.Point(0, 0), new google.maps.Point(5, 20));
    shadow = new google.maps.MarkerImage(document.location.protocol + "//maps.gstatic.com/intl/en_us/mapfiles/shadow50.png", new google.maps.Size(37, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34))
}
function ifstr(a) {
    return a ? a.trim ? a.trim() : a : ""
}
function val(a) {
    a = ifstr(a) == "" ? 0 : a;
    return parseFloat(a.toString().replace(/\$|\,|\s+/g, ""))
}
function isNumber(a) {
    if (a.match && a.match(/-|\/|\\|:/g)) return !1;
    a = val(a);
    return !isNaN(parseFloat(a)) && isFinite(a)
}
function isDate(a) {
    return !isNaN(Date.parse(a))
}

function buildGroups() {
    gA = [];
    for (var a = {}, e = [], g = 0, h = 0, k = 0, p = 0; p < per.mapRS.length; p++) {
        var q = per.mapRS[p];
        q.g = q.distance && q.lt && per.mapRS.length > 25 && per.group_col < 0 ? isNaN(q.distance) ? 0.01 : q.distance : ifstr(q.g).length == 0 ? " " : q.g;
        isNumber(q.g) ? (g++, q.g.length == 5 && k++) : isDate(q.g) && h++;
        for (var w = !1, v = 0; v < e.length; v++) e[v].name == q.g && ((e[v].name + "").toLowerCase().indexOf("other") == -1 && (e[v].count++, e[v].all[e[v].all.length] = p), w = !0);
        w || (e[e.length] = {
            name: q.g,
            count: 1,
            all: [p]
        })
    }
    if (e.length == 1) {
        for (p = 0; p < per.mapRS.length; p++) per.mapRS[p].clr = colorArray[0];
        gA[0] = per.mapRS[0].g
    } else {
        if (e.length > 13 && per.mapRS.length > 25 && (g / per.mapRS.length > 0.9 || h / per.mapRS.length > 0.9)) return buildThematic = function (a, e, g) {
            e ? a.sort(function (a, e) {
                return Date.parse(a.name) - Date.parse(e.name)
            }) : a.sort(function (a, e) {
                return val(e.name) - val(a.name)
            });
            per.group_col < 0 && a.sort(function (a, e) {
                return val(a.name) - val(e.name)
            });
            for (var h = parseInt(a.length / ((e ? 4 : thematicColor.length) - 1)), k = 0, p = 0; p < a.length && k < thematicColor.length; p += h) {
                var q = a.length - 1 < p + h || k >= thematicColor.length - 1 ? a.length - 1 : p + h - 1;
                g ? (gA[k] = {
                    clr: colorArray[k]
                }, gA[k].name = a[p].name + ((a[q].name + "").trim() != "" ? "-" + a[q].name : "")) : e ? (gA[k] = {
                    clr: colorArray[k]
                }, gA[k].name = a[p].name + (a[p].name == a[q].name ? "" : " - " + a[q].name)) : (gA[k] = {
                    clr: thematicColor[k]
                }, gA[k].name = dlr(a[p].name) + tinyNum(val(a[p].name)) + pct(a[p].name) + (val(a[p].name) == val(a[q].name) ? "" : " - " + dlr(a[q].name) + tinyNum(val(a[q].name)) + pct(a[q].name)));
                for (var v = p; v <= q; v++) for (var w = 0; w < a[v].all.length; w++) per.mapRS[a[v].all[w]].clr = gA[k].clr;
                k++
            }
            isThematicNumeric = !e && !g
        }, buildThematic(e, g < h, k / per.mapRS.length > 0.9);
        e.sort(function (a, e) {
            return e.count - a.count
        });
        for (p = 0; p < e.length; p++) a[e[p].name] = p;
        for (p = 0; p < per.mapRS.length; p++) {
            g = 0;
            if (a[per.mapRS[p].g] < colorArray.length - 1) {
                for (; g < gA.length; g++) if (gA[g] && gA[g].name == per.mapRS[p].g) break;
                if (!(g < colorArray.length - 1)) for (g = 0; g < gA.length; g++) if (!gA[g]) break
            } else g = colorArray.length - 1;
            per.mapRS[p].clr = colorArray[g];
            gA[g] = {
                name: per.mapRS[p].g,
                clr: colorArray[g]
            }
        }
        gA.length == colorArray.length && e.length > gA.length && (gA[gA.length - 1] = per.locale != "jp" ? {
            name: "Others",
            clr: colorArray[gA.length - 1]
        } : {
            name: "\u4ed6",
            clr: colorArray[gA.length - 1]
        })
    }
}
function tinyNum(a) {
    if (!isFinite(a) || isNaN(a)) return 0;
    return a < 9999 ? a : a < 99999 ? addCommas(a) : a < 1E6 ? parseInt(a / 1E3) + "K" : a < 1E9 ? parseFloat((a / 1E6).toFixed(1)) + "M" : parseFloat((a / 1E9).toFixed(1)) + "B"
}
function pct(a) {
    return a.toString().indexOf("%") != -1 ? "%" : ""
}
function dlr(a) {
    return a.toString().indexOf("$") != -1 ? "$" : ""
}

function getMarker(a, e, g) {
    var h = g > 26 ? small[0] : icon_home + "red_Marker.png";
    per.mapRS[a].clr = per.mapRS[a].clr || "red";
    h = icon_home + per.mapRS[a].clr + (g > 26 ? "_small_marker" : "_Marker" + Chr(65 + e)) + ".png";
    h.url = h.url || h;
    return h
}
function goodLatLon(a, e) {
    a = parseFloat(val(a));
    e = parseFloat(val(e));
    if (Math.abs(a) < 0.001 || Math.abs(e) < 0.001) return !1;
    return a <= 90 && a >= -90 && e <= 180 && e >= -180
}

function doMap() {
    map_div = dId("mapDiv");
    $(".mapBorder").show();
    doMapCount++;
    $("#mapDiv").show();
    var a = 15;
    gC[rgn] = gC[rgn] || {};
    for (var e = 0; e < per.mapRS.length; e++) {
        var g = per.mapRS[e];
        g.lt = parseFloat(g.lt);
        g.ln = parseFloat(g.ln);
        if (goodLatLon(g.lt, g.ln)) g.accuracy != google.maps.GeocoderLocationType.APPROXIMATE && (a = 18), g.addr = g.addr || "", gC[rgn][g.addr.trim()] = {
            lt: g.lt,
            ln: g.ln,
            accuracy: g.accuracy,
            l: g.l
        };
        if (per.dist_cb_status && per.mapRS[0].lt && !g.distance) if (e != 0) {
            g.distance = distance(parseFloat(per.mapRS[0].lt), parseFloat(per.mapRS[0].ln), g.lt, g.ln).toFixed(2);
            var h = per.dist_sel ? "&nbsp;km" : "&nbsp;mi";
            g.d = g.d + '<div><span class="l">' + distance_str + ":</span>&nbsp;" + addCommas(g.distance) + h + "</div>"
        } else g.distance = "0.01";
        else f_address = null
    }
    e = new google.maps.StyledMapType([{
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            visibility: "simplified"
        }, {
            saturation: -50
        }]
    }, {
        featureType: "all",
        elementType: "all",
        stylers: [{
            saturation: -20
        }]
    }], {
        name: "Map"
    });
    map = new google.maps.Map(map_div, {
        mapTypeControlOptions: {
            mapTypeIds: ["simpleMap", google.maps.MapTypeId.TERRAIN, google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID],
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scaleControl: !0,
        maxZoom: a,
        minZoom: 0
    });
    map.mapTypes.set("simpleMap", e);
    map.setMapTypeId("simpleMap");
    addImages();
    buildGroups();
    dId("mapheader") && $("#mapheader").show();
    google.maps.event.trigger(map, "resize");
    bounds = new google.maps.LatLngBounds;
    if (!map) return alert("Hmmm, appears the map is not loaded. Try refreshing your browser."), 0;
    if (per.dist_cb_status) f_lat = per.mapRS[0].lt, f_lon = per.mapRS[0].ln, f_address = per.mapRS[0].l;
    markers = [];
    per.view_sel = per.view_sel ? per.view_sel : 0;
    if (a = getCachedView()) if (per.map_type = a.type, a.search != "" && a.search != "Search") dId("addressBox").value = a.search;
    if (per.map_type && per.map_type != "roadmap") map.setMapTypeId(per.map_type);
    else switch (per.view_sel) {
    case 0:
        map.setMapTypeId("simpleMap");
        break;
    case 1:
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        break;
    case 2:
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
        break;
    case 3:
        map.setMapTypeId(google.maps.MapTypeId.TERRAIN)
    }
    openLocator ? drawMarkers() : a ? (a.zoom && (map.setCenter(new google.maps.LatLng(a.lat, a.lng)), map.setZoom(a.zoom)), a.filter ? drawMarkers(a.filter || "") : a.search && a.search != "Search" ? findNearest(a.search) : drawMarkers(""), mrks.length == 0 && drawMarkers(), openRow <= 0 && a.openRow > 0 ? openPointWin(markers[a.openRow].marker) : openRow >= 0 ? openPointWin(markers[openRow].marker) : markers.length == 1 && openPointWin(markers[0].marker)) : (drawMarkers(), openRow >= 0 ? (bounds.extend(markers[openRow].marker.position), openPointWin(markers[openRow].marker), map.fitBounds(bounds)) : (zoomToMarkers(), markers.length == 1 && openPointWin(markers[0].marker)));
    per.max_lat = bounds.getNorthEast().lat();
    per.max_lon = bounds.getNorthEast().lng();
    per.min_lat = bounds.getSouthWest().lat();
    per.min_lon = bounds.getSouthWest().lng();
    buildLegend(dId("legDiv"));
    doMapCount == 1 && $("#mapDiv").css("height", $("#mapDiv").height() - $("#legDiv").height());
    if (dId("buttonsDiv")) dId("buttonsDiv").style.display = "block";
    $("#bottomAd").show()
}

function drawMarkers(a) {
    a == lastFilter && a && a.trim && (a = "");
    lastFilter = a;
    !a && lastInfoWindow && (lastInfoWindow.close(), lastInfoWindow = null);
    if (mrks && mrks.length) {
        for (var e = 0; e < mrks.length; e++) mrks[e].setMap(null);
        clarker && clarker.clearMarkers()
    }
    mrks = [];
    for (var g = 0, h, e = 0; e < per.mapRS.length; e++) {
        var k = per.mapRS[e];
        if (Math.abs(k.lt) > 0) k.lt = parseFloat(k.lt) + Math.random() * 5.0E-6, k.ln = parseFloat(k.ln) + Math.random() * 5.0E-6;
        goodLatLon(k.lt, k.ln) && (!a || !a.trim && a[e] || a.indexOf && a.indexOf("/" + k.clr) != -1) ? (mrks[mrks.length] = {
            r: e
        }, markers[e] = {}, isThematicNumeric && (g += val(k.g))) : (markers[e] = null, $("#tab" + e).css("display", "none"))
    }
    a && isThematicNumeric && mrks.length && (mrks.sort(function (a, e) {
        return val(per.mapRS[e.r].g) - val(per.mapRS[a.r].g)
    }), h = g / mrks.length);
    for (g = 0; g < mrks.length; g++) {
        var e = mrks[g].r,
            k = per.mapRS[e],
            p = new google.maps.Marker({
                position: new google.maps.LatLng(k.lt, k.ln),
                icon: getMarker(e, g, mrks.length),
                shadow: mrks.length <= 26 ? shadow : small_shadow,
                title: k.t,
                draggable: dId("sourceData") ? !0 : !1,
                zIndex: mrks.length - g + 5
            });
        if (a && isThematicNumeric) {
            var q = ((mrks.length - g) / mrks.length + 1.8) * 0.6 * val(k.g) / h * 0.4 + 0.8,
                q = q || 1,
                w = new google.maps.MarkerImage(p.icon, new google.maps.Size(12 * q, 20 * q), new google.maps.Point(0, 0), new google.maps.Point(5, 20), new google.maps.Size(12 * q, 20 * q)),
                q = new google.maps.MarkerImage(p.shadow.url, new google.maps.Size(22 * q, 20 * q), new google.maps.Point(0, 0), new google.maps.Point(5, 20), new google.maps.Size(22 * q, 20 * q));
            p.setIcon(w);
            p.setShadow(q)
        }
        google.maps.event.addListener(p, "dragend", function () {
            var a = per.mapRS[this.r];
            a.lt = this.getPosition().lat();
            a.ln = this.getPosition().lng();
            gC[rgn][a.addr].lt = a.lt;
            gC[rgn][a.addr].ln = a.ln
        });
        if (window.pro && k.accuracy && k.accuracy == "ROOFTOP" && !k.i) k.i = "https://maps.googleapis.com/maps/api/streetview?size=200x200&location=" + k.addr + "&sensor=false";
        mrks[g] = p = createMapMarker(p, k.t, k.d, k.u, k.i, k.l, k.e, k.lt, k.ln);
        markers[e] = {
            marker: p,
            Lat: k.lt,
            Lon: k.ln,
            t: k.t,
            u: k.u
        };
        markers[e].marker.addr = k.addr;
        markers[e].marker.r = e;
        $("#tab" + e + "L").html(mrks.length < 26 ? Chr(65 + g) : "");
        $("#tab" + e).css("display", "block")
    }
    if (per.clustering_cb_status == void 0 && mrks.length > 300) per.clustering_cb_status = !0;
    if ((!isThematicNumeric || !a) && per.clustering_cb_status && (a == void 0 || mrks.length > 26)) clarker = new Clarker(map, mrks, {
        gridSize: 65,
        maxZoom: 14
    });
    else for (g = 0; g < mrks.length; g++) mrks[g].setMap(map)
}

function zoomToMarkers() {
    bounds = new google.maps.LatLngBounds;
    for (var a = 0, e, g = 0; g < mrks.length; g++) bounds.extend(mrks[g].position), a++, e = g;
    a != 0 && (map.getCenter() && (bounds.getCenter(), bounds.extend(map.getCenter())), map.fitBounds(bounds), a == 1 && smoothOpenMarker(mrks[e].r))
}

function buildLegend(a) {
    a.innerHTML = "";
    if (gA.length > 1) {
        a.style.display = "block";
        a.innerHTML = per.columnNames[per.group_col] != "Group" ? '<span id="legendDesc">' + (per.columnNames[per.group_col] || distance_str) + "</span>" : "";
        for (var e = 0; e < gA.length; e++) leg_span = document.createElement("span"), img_src = icon_home + gA[e].clr + "_small_marker.png", leg_span.color = "/" + gA[e].clr + "_", leg_span.innerHTML = gA[e].name.replace(/ /g, "&nbsp;"), $(leg_span).css("background-image", "url(" + img_src + ")"), $(leg_span).bind("click", function (a) {
            drawMarkers(a.currentTarget.color);
            zoomToMarkers();
            return !1
        }), a.appendChild(leg_span), spacer = document.createElement("b"), spacer.innerText ? spacer.innerText = " " : spacer.textContent = " ", a.appendChild(spacer);
        $(a).css("cursor", "pointer");
        $(a).bind("click", function () {
            map && drawMarkers();
            zoomToMarkers();
            return !1
        })
    }
}

function createMarkerText(a, e, g, h, k, p, q, w, v) {
    e = e.replace(/([^\"|'])((https?|ftp):\/\/[^\<]+)/gim, '$1<a href="$2" target="_parent">$2</a>');
    k.trim().length == 0 && q && (k = q + ", " + w);
    k = ifstr(k);
    a = ifstr(a);
    q = iphone ? "Current Location" : f_address != k ? f_address : null;
    p && e.indexOf("Email:") == -1 && (e += '<div><span class="l">Email:</span>&nbsp;<a href="mailto:' + p + '">' + p + "</a></div>");
    p = q ? "http://" + mapsURL + "/?daddr=" + v + "&saddr=" + encodeURI(q.replace("<br />", " ").replace("<br>", " ").replace("<div>", "").replace("</div>", "")) : "http://" + mapsURL + "/?daddr=" + v;
    (!g || !g.trim().length && k.trim().length) && per.locale != "jp" && per.locale != "kr" && per.locale != "cn" ? (g = p, v = 1) : v = 0;
    k.replace("<br />", " ").trim() == a.trim() && (k = "");
    k = k.trim() ? '<table class="adrWrap"><td class="address"><a href="' + p + '" target="_parent" class="directions-link" title="Open in Google Maps" rel="nofollow">' + k + '</a></td><td class="zoom"><img id="zoom" src="' + base + '/images/zoom.png" width="15" height="15" alt="Zoom" onclick="ptz()" /></td></table>' : '<img id="zoom" src="' + base + '/images/zoom.png" width="15" height="15" alt="Zoom" align="right" onclick="ptz()" />';
    e = e && e.length > 0 ? k + e : k;
    g && Left(g.trim(), 3) != "htt" && Left(g.trim(), 4) != "file" && (g = "http://" + g.trim());
    h && Left(h.trim(), 3) != "htt" && (h = "http://" + h.trim());
    h.indexOf("steetview") >= 0 ? e = e + '<img class="descIMG" width="200" height="200" src="' + h + '" valign="top" align="center" border=0 vspace=5 hspace=1 onclick="ptz()">' : h && h.length > 0 && (e = e + '<img class="descIMG" src="' + h + '" valign="top" align="center" border=0 vspace=5 hspace=1>');
    g && g.length > 0 ? a ? e = '<h5><a href="' + g + '" target="_parent" class="marker ' + (v ? "goog" : "") + '" rel="nofollow">' + a + "</a></h5>" + e : v || (e += '<div><a href="' + g + '" target="_parent" class="marker ' + (v ? "goog" : "") + '" rel="nofollow">' + g + "</a></div>") : a && (e = "<h5>" + a + "</h5>" + e);
    e.trim() && (e = '<div class="markerLabel">' + e + "</div>");
    return e
}

function createMapMarker(a, e, g, h, k, p, q, w, v) {
    p.trim().length == 0 && w && (p = w + ", " + v);
    var o = function (a) {
            return encodeURI(a.replace("<br />", " ").replace("<br>", " ").replace("<div>", "").replace("</div>", ""))
        };
    a.urladdress = o(p);
    if (per.locale == "jp" || per.locale == "kr") a.urladdress = w + ", " + v;
    a.desc = createMarkerText(e, g, h, k, p, q, w, v, a.urladdress);
    if (a.desc.trim().length > 5) {
        var G = new google.maps.InfoWindow({
            content: a.desc
        });
        google.maps.event.addListener(G, "closeclick", function () {
            lastInfoWindow = null
        });
        google.maps.event.addListener(a, "click", function () {
            lastInfoWindow && lastInfoWindow.close();
            (p.trim().length == 0 || p == w + ", " + v) && w && (new google.maps.Geocoder).geocode({
                location: new google.maps.LatLng(w, v)
            }, function (o, r) {
                r == google.maps.GeocoderStatus.OK && o[0] && o[0].formatted_address && G.setContent(createMarkerText(e, g, h, k, w + ", " + v + ",<br />" + o[0].formatted_address, q, w, v, a.urladdress))
            });
            lastInfoWindow = G;
            lastInfoWindow.m = a;
            infoWinPag(a.r);
            G.open(map, a)
        })
    }
    google.maps.event.addListener(a, "dblclick", function () {
        window.open("http://" + mapsURL + "/?daddr=" + a.urladdress + "&saddr=" + o(f_address != p ? f_address || "" : ""))
    });
    return a
}
function infoWinPag(a) {
    var e = per.mapRS[a];
    mPg = [];
    mPg[0] = markers[a];
    for (var g = cmPg = 0; g < markers.length; g++) {
        var h = markers[g];
        h && a != g && dist2(e.lt, e.ln, h.Lat, h.Lon) < 1.0E-4 && (mPg[mPg.length] = h)
    }
    mPg.length > 1 && drawInfoWinPag()
}

function drawInfoWinPag() {
    google.maps.event.addListenerOnce(lastInfoWindow, "domready", function () {
        $(".markerLabel").parent().parent().after('<div id="pg"><span id="pgP">' + (cmPg > 0 ? "&lt; " : "&nbsp; ") + '</span><span id="pgC">' + (cmPg + 1) + "</span> - " + mPg.length + '<span id="pgN"> ' + (cmPg + 1 < mPg.length ? " &gt;" : " &nbsp;") + "</span></div>");
        $("#pgN").unbind("click").bind("click", function (a) {
            a.cancelBubble = !0;
            a.stopPropagation && a.stopPropagation();
            if (cmPg < mPg.length - 1) lastInfoWindow.close(), cmPg++, a = new google.maps.InfoWindow({
                content: mPg[cmPg].marker.desc
            }), a.open(map, mPg[cmPg].marker), lastInfoWindow = a, lastInfoWindow.m = mPg[cmPg].marker, drawInfoWinPag()
        });
        $("#pgP").unbind("click").bind("click", function (a) {
            a.cancelBubble = !0;
            a.stopPropagation && a.stopPropagation();
            if (cmPg > 0) lastInfoWindow.close(), cmPg--, a = new google.maps.InfoWindow({
                content: mPg[cmPg].marker.desc
            }), a.open(map, mPg[cmPg].marker), lastInfoWindow = a, lastInfoWindow.m = mPg[cmPg].marker, drawInfoWinPag()
        })
    })
}

function openPointWin(a) {
    google.maps.event.addListenerOnce(map, "idle", function () {
        google.maps.event.trigger(a, "click")
    })
}
function openPanWin(a) {
    window.scrollTo(0, 0);
    if (markers[a] && markers[a].Lat) return openPointWin(markers[a].marker)
}
function showGeocodeData() {
    try {
        _gaq.push(["_trackEvent", "Geocode", "Show Data", "Rows", per.dataRS.length])
    } catch (a) {}
}
function validateEmail(a) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(a)
}

function jsonSubmit() {
    if (!per.mapRS) return doGeocode(), jsonSubmit();
    if (per.mapRS.length > maxPonts) return alert("The map only supports showing up to " + maxPonts + " points, currently " + per.mapRS.length + " are in your source data. Please reduce the number of points in your source data, or contact us about our premium service Maptive."), !1;
    if (!validateEmail(dId("map_email").value)) return alert("Please enter a valid Email address."), !1;
    if (dId("agree_terms") && !$("#agree_terms").prop("checked")) return alert("You must agree to the BatchGeo Terms of Use to continue."), !1;
    lastEmail = dId("map_email").value;
    emailTest = function () {
        $.ajax({
            url: "/api/emailCheck/?email=" + dId("map_email").value,
            type: "GET",
            async: !1,
            cache: !1,
            timeout: 5E3,
            error: function () {
                return !0
            },
            success: function (a) {
                if (!parseInt(a)) dId("map_email").value = ""
            }
        })
    };
    emailTest();
    if (dId("map_email").value == "") return alert("It appears we have had trouble emailing " + lastEmail + " in the past, please try a different email address."), !1;
    per.map_title = dId("map_title").value;
    per.map_description = dId("map_description").value;
    per.map_type = map.getMapTypeId();
    per.view_sel = function () {
        switch (map.getMapTypeId()) {
        case google.maps.MapTypeId.ROADMAP:
            return 0;
        case google.maps.MapTypeId.SATELLITE:
            return 1;
        case google.maps.MapTypeId.HYBRID:
            return 2;
        case google.maps.MapTypeId.TERRAIN:
            return 3
        }
    }();
    per.locale = $("#country_sel").val() || locale;
    per.address_match = address_match;
    per.zip_match = zip_match;
    per.city_match = city_match;
    per.state_match = state_match;
    dId("jsonData").value = JSON.stringify(per);
    try {
        _gaq.push(["_trackEvent", "Map", "Save", "email", map_email])
    } catch (a) {}
    checkLocal() && localStorage.setItem("lastEmail", dId("map_email").value);
    return !0
}
function distance(a, e, g, h) {
    dist = (per.dist_sel ? 6378.137 : 3963.19059) * Math.acos(Math.cos(radians(90 - a)) * Math.cos(radians(90 - g)) + Math.sin(radians(90 - a)) * Math.sin(radians(90 - g)) * Math.cos(radians(e - h)));
    return Math.abs(dist)
}
function dist2(a, e, g, h) {
    return Math.abs(Math.sqrt(Math.pow(a - g, 2) + Math.pow(e - h, 2)))
}
function wait(a) {
    var e = new Date,
        g = null;
    do g = new Date;
    while (g - e < a)
}

function radians(a) {
    return a * 0.0174532925
}
function dId(a) {
    return document.getElementById(a)
}
function getQueryVariable(a) {
    for (var e = window.location.search.substring(1).split("&"), g = 0; g < e.length; g++) {
        var h = e[g].split("=");
        if (h[0] == a) return URLDecode(h[1])
    }
    return ""
}
function rS(a) {
    for (var e = 0; e < a.options.length; e++) if (a.options[e].selected) return e - 1;
    return -1
}

function URLDecode(a) {
    for (var e = "", g = 0; g < a.length;) {
        var h = a.charAt(g);
        h == "+" ? (e += " ", g++) : h == "%" ? g < a.length - 2 && "0123456789ABCDEFabcdef".indexOf(a.charAt(g + 1)) != -1 && "0123456789ABCDEFabcdef".indexOf(a.charAt(g + 2)) != -1 ? (e += unescape(a.substr(g, 3)), g += 3) : (e += "%[ERROR]", g++) : (e += h, g++)
    }
    return e
}
function setCookie(a, e, g, h, k, p) {
    a = a + "=" + escape(e) + (g ? "; expires=" + g.toGMTString() : "") + (h ? "; path=" + h : "") + (k ? "; domain=" + k : "") + (p ? "; secure" : "");
    document.cookie = a
}

function getCookie(a) {
    var e = document.cookie;
    a += "=";
    var g = e.indexOf("; " + a);
    if (g == -1) {
        if (g = e.indexOf(a), g != 0) return null
    } else g += 2;
    var h = document.cookie.indexOf(";", g);
    if (h == -1) h = e.length;
    return unescape(e.substring(g + a.length, h))
}
function deleteCookie(a, e, g) {
    if (getCookie(a)) document.cookie = a + "=" + (e ? "; path=" + e : "") + (g ? "; domain=" + g : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
}
function fixDate(a) {
    var e = (new Date(0)).getTime();
    e > 0 && a.setTime(a.getTime() - e)
}

function strip(a) {
    return a.replace(/<script\b[^>]*>(.*?)<\/script>/i, "")
}
window.JSON || (window.JSON = {
    copyright: "(c)2005 JSON.org",
    license: "http://www.crockford.com/JSON/license.html",
    stringify: function (a) {
        function e(a) {
            h[h.length] = a
        }
        function g(a) {
            var p, q, w;
            switch (typeof a) {
            case "object":
                if (a) if (a instanceof Array) {
                    e("[");
                    w = h.length;
                    for (q = 0; q < a.length; q += 1) p = a[q], typeof p != "undefined" && typeof p != "function" && (w < h.length && e(","), g(p));
                    e("]");
                    break
                } else if (typeof a.valueOf == "function") {
                    e("{");
                    w = h.length;
                    for (q in a) if (p = a[q], typeof p != "undefined" && typeof p != "function" && (!p || typeof p != "object" || typeof p.valueOf == "function")) w < h.length && e(","), g(q), e(":"), g(p);
                    return e("}")
                }
                e("null");
                break;
            case "number":
                e(isFinite(a) ? +a : "null");
                break;
            case "string":
                w = a.length;
                e('"');
                for (q = 0; q < w; q += 1) if (p = a.charAt(q), p >= " ")(p == "\\" || p == '"') && e("\\"), e(p);
                else switch (p) {
                case "\u0008":
                    e("\\b");
                    break;
                case "\u000c":
                    e("\\f");
                    break;
                case "\n":
                    e("\\n");
                    break;
                case "\r":
                    e("\\r");
                    break;
                case "\t":
                    e("\\t");
                    break;
                default:
                    p = p.charCodeAt(), e("\\u00" + Math.floor(p / 16).toString(16) + (p % 16).toString(16))
                }
                e('"');
                break;
            case "boolean":
                e(String(a));
                break;
            default:
                e("null")
            }
        }
        var h = [];
        g(a);
        return h.join("")
    },
    parse: function (a) {
        try {
            return !/[^,:{}[]0-9.-+Eaeflnr-u \n\r\t]/.test(a.replace(/"(\\.|[^"\\])*"/g, "")) && eval("(" + a + ")")
        } catch (e) {
            return !1
        }
    }
});

function htmlEscape(a) {
    a = a.replace(/\&/g, "&amp;");
    a = a.replace(/\</g, "&lt;");
    a = a.replace(/\>/g, "&gt;");
    return a = a.replace(/\"/g, "&quot;")
}

function addCommas(a) {
    a += "";
    x = a.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    for (a = /(\d+)(\d{3})/; a.test(x1);) x1 = x1.replace(a, "$1,$2");
    return x1 + x2
}
function Chr(a) {
    return String.fromCharCode(a)
}
function Asc(a) {
    return a.charCodeAt(0)
}
function Left(a, e) {
    return e <= 0 ? "" : e > String(a).length ? a : String(a).substring(0, e)
}
function Right(a, e) {
    if (e <= 0) return "";
    else if (e > String(a).length) return a;
    else {
        var g = String(a).length;
        return String(a).substring(g, g - e)
    }
}

function tableize(a) {
    if (typeof window.ie7 != "undefined") $("#deleteMe").remove(), $("#sourceData").show();
    else {
        for (var e = a.value.trim(), g = /([\n\t]"[^"]+)[\n\r]+/gi; e.match(g);) e = e.replace(g, "$1 ");
        var h = e.split(String.fromCharCode(10));
        if (!(h.length < 2)) {
            for (i = 0; i < h.length; i++) h[i] = h[i].split(String.fromCharCode(9));
            e = document.createElement("div");
            e.setAttribute("class", "tableize");
            g = document.createElement("table");
            g.setAttribute("class", "tableize");
            if (a.tbl) myparent = a.parentNode, myparent.removeChild(a.tbl);
            a.tbl = e;
            g.setAttribute("cellspacing", 0);
            for (var k = 0; h[k][0].substring(0, 1) == "#";) k++;
            headerRow = document.createElement("tr");
            for (c = 0; c < h[k].length; c++) cell = document.createElement("th"), cell.innerHTML = h[k][c], headerRow.appendChild(cell);
            g.appendChild(headerRow);
            stopAt = h.length > 50 ? 50 : h.length;
            for (i = k + 1; i < stopAt; i++) {
                row = document.createElement("tr");
                for (c = 0; c < h[i].length; c++) cell = document.createElement("td"), cell.innerHTML = h[i][c].length ? h[i][c] : " ", row.appendChild(cell);
                g.appendChild(row)
            }
            if (h.length > 50) row = document.createElement("tr"), cell = document.createElement("td"), cell.setAttribute("colspan", h[i].length), cell.innerHTML = "(first 50 rows previewed, all " + parseInt(h.length - 1) + " will be mapped.)", row.appendChild(cell), g.appendChild(row);
            e.appendChild(g);
            e.el = a;
            h = document.createElement("em");
            h.setAttribute("class", "tableize");
            h.innerHTML = a.title ? a.title : "click to copy/paste";
            h.tbl = g;
            $(h).css("display", "none");
            e.appendChild(h);
            var k = $(a).height(),
                p = $(a).width();
            $(e).css("height", k).css("width", p);
            $(a).css("display", "none");
            $("#deleteMe").remove();
            a.parentNode.insertBefore(e, a);
            jQuery.browser.msie && (g.style.removeAttribute("filter"), h.style.removeAttribute("filter"));
            $(e).hoverIntent(function () {
                $("table.tableize").fadeTo("normal", 0.33);
                $("em.tableize").fadeIn("normal")
            }, function () {
                $("table.tableize").fadeTo("normal", 1);
                $("em.tableize").fadeOut("normal")
            });
            $(h).bind("click focus", function (a) {
                $(a.currentTarget.tbl).trigger("click")
            });
            $(g).bind("click focus", function (e) {
                myparent = e.currentTarget.parentNode.parentNode;
                a = e.currentTarget.parentNode.el;
                a.tbl = null;
                $(a).css("display", "inline");
                myparent.removeChild(e.currentTarget.parentNode);
                $(a).css("color", "#000");
                a.select()
            });
            a.charCount = a.value.length;
            $(a).unbind("keyup mouseup");
            $(a).bind("keyup mouseup", function (a) {
                Math.abs(a.target.charCount - a.target.value.length) > 10 && (tableize(a.target), unValidateSource());
                a.target.charCount = a.target.value.length
            });
            $(a).unbind("blur");
            $(a).bind("blur", function (a) {
                tableize(a.target)
            })
        }
    }
}
$(document).ready(function () {
    jQuery.browser.msie && jQuery.browser.version < 8 && (ie7 = 1);
    if (dId("sourceData")) {
        typeof window.ie7 != "undefined" && $("#sourceData").css("color", "#000");
        source = dId("sourceData");
        geocoder_span = dId("geocoder_status");
        geocode_button = dId("geocode_button");
        validate_span = dId("validate_status");
        per.dist_sel = dId("dist_sel").selectedIndex;
        per.dist_cb_status = dId("dist_cb") ? dId("dist_cb").checked : !1;
        per.field_cb_status = dId("field_cb") ? dId("field_cb").checked : !0;
        (!per || !per.mapRS) && loadExample();
        $("#validate_button").bind("click", function (a) {
            a.preventDefault();
            validateSource()
        });
        $("#mapnow_button").bind("click", function (a) {
            a.preventDefault();
            $("#fields").show("normal", function () {
                $("#geocoding").show("normal", function () {
                    validatedSource ? doGeocode() : validateSource() && doGeocode()
                })
            })
        });
        $("#sourceData").bind("click", function () {
            this.select()
        });
        $("#sourceData").bind("change", function () {
            unValidateSource()
        });
        $("#advanced_button").bind("click", function (a) {
            a.preventDefault();
            dId("advancedOptions").style.display = "block";
            dId("advanced_button").style.display = "none"
        });
        $("#geocode_button").bind("click", function (a) {
            a.preventDefault();
            doGeocode()
        });
        $("#geocodeshow_button").bind("click", function (a) {
            a.preventDefault();
            showGeocodeData()
        });
        $(".inline").colorbox({
            width: "650px",
            inline: !0,
            href: "#inline_save"
        });
        if (checkLocal() && dId("map_email").value.length == 0 && localStorage.getItem("lastEmail")) dId("map_email").value = localStorage.getItem("lastEmail");
        $("#country_sel").bind("change", function () {});
        $("#address_sel").bind("change", function () {
            per.address_col = rS(this);
            updatePreview(0)
        });
        $("#city_sel").bind("change", function () {
            per.city_col = rS(this);
            updatePreview(0)
        });
        $("#state_sel").bind("change", function () {
            per.state_col = rS(this);
            updatePreview(0)
        });
        $("#zip_sel").bind("change", function () {
            per.zip_col = rS(this);
            updatePreview(0)
        });
        dId("lat_sel") && ($("#lat_sel").bind("change", function () {
            per.lat_col = rS(this)
        }), $("#long_sel").bind("change", function () {
            per.long_col = rS(this)
        }));
        $("#title_sel").bind("change", function () {
            per.title_col = rS(this);
            updatePreview(0)
        });
        $("#desc_sel").bind("change", function () {
            per.desc_col = rS(this);
            updatePreview(0)
        });
        $("#group_sel").bind("change", function () {
            per.group_col = rS(this);
            updatePreview(0)
        });
        $("#descURL_sel").bind("change", function () {
            per.descURL_col = rS(this);
            updatePreview(0)
        });
        $("#descIMG_sel").bind("change", function () {
            per.descIMG_col = rS(this);
            updatePreview(0)
        });
        $("#email_sel").bind("change", function () {
            per.email_col = rS(this);
            updatePreview(0)
        });
        rgn = locale || "";
        $.getJSON("/api/ipgeocode/", function (a) {
            if (countrySel = dId("country_sel")) for (var e = 0; e < countrySel.options.length; e++) if (a.country_code.toLowerCase() == countrySel.options[e].value) countrySel.selectedIndex = e
        })
    } else simpleInit()
});
if (!("console" in window)) {
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
    window.console = {};
    for (var i = 0, len = names.length; i < len; ++i) window.console[names[i]] = function () {}
}

function Clarker(a, e, g) {
    this.extend(Clarker, google.maps.OverlayView);
    this.map_ = a;
    this.markers_ = [];
    this.clusters_ = [];
    this.sizes = [34, 40, 52, 64, 72];
    this.styles_ = [];
    this.ready_ = !1;
    g = g || {};
    this.gridSize_ = g.gridSize || 60;
    this.minClusterSize_ = g.minimumClusterSize || 4;
    this.maxZoom_ = g.maxZoom || null;
    this.styles_ = g.styles || [];
    this.imagePath_ = g.imagePath || this.MARKER_CLUSTER_IMAGE_PATH_;
    this.imageExtension_ = g.imageExtension || this.MARKER_CLUSTER_IMAGE_EXTENSION_;
    this.zoomOnClick_ = !0;
    if (g.zoomOnClick != void 0) this.zoomOnClick_ = g.zoomOnClick;
    this.averageCenter_ = !0;
    if (g.averageCenter != void 0) this.averageCenter_ = g.averageCenter;
    this.setupStyles_();
    this.setMap(a);
    this.prevZoom_ = this.map_.getZoom();
    var h = this;
    google.maps.event.addListener(this.map_, "zoom_changed", function () {
        try {
            var a = h.map_.mapTypes[h.map_.getMapTypeId()].maxZoom
        } catch (e) {
            return
        }
        var g = h.map_.getZoom();
        if (!(g < 0 || g > a) && h.prevZoom_ != g) h.prevZoom_ = h.map_.getZoom(), h.resetViewport()
    });
    google.maps.event.addListener(this.map_, "idle", function () {
        h.redraw()
    });
    e && e.length && this.addMarkers(e, !1)
}
Clarker.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = "png";
Clarker.prototype.extend = function (a, e) {
    return function (a) {
        for (var e in a.prototype) this.prototype[e] = a.prototype[e];
        return this
    }.apply(a, [e])
};
Clarker.prototype.onAdd = function () {
    this.setReady_(!0)
};
Clarker.prototype.draw = function () {};
Clarker.prototype.setupStyles_ = function () {
    for (var a = 0, e; e = this.sizes[a]; a++) this.styles_.push({
        url: Clarker.prototype.MARKER_CLUSTER_IMAGE_PATH_ + (a + 1) + "." + this.imageExtension_,
        height: e,
        width: e
    })
};
Clarker.prototype.fitMapToMarkers = function () {
    for (var a = this.getMarkers(), e = new google.maps.LatLngBounds, g = 0, h; h = a[g]; g++) e.extend(h.getPosition());
    this.map_.fitBounds(e)
};
Clarker.prototype.setStyles = function (a) {
    this.styles_ = a
};
Clarker.prototype.getStyles = function () {
    return this.styles_
};
Clarker.prototype.isZoomOnClick = function () {
    return this.zoomOnClick_
};
Clarker.prototype.isAverageCenter = function () {
    return this.averageCenter_
};
Clarker.prototype.getMarkers = function () {
    return this.markers_
};
Clarker.prototype.getTotalMarkers = function () {
    return this.markers_.length
};
Clarker.prototype.setMaxZoom = function (a) {
    this.maxZoom_ = a
};
Clarker.prototype.getMaxZoom = function () {
    return this.maxZoom_ || this.map_.mapTypes[this.map_.getMapTypeId()].maxZoom
};
Clarker.prototype.calculator_ = function (a, e) {
    for (var g = 0, h = a.length, k = h; k !== 0;) k = parseInt(k / 10, 10), g++;
    g = Math.min(g, e);
    return {
        text: h,
        index: g
    }
};
Clarker.prototype.setCalculator = function (a) {
    this.calculator_ = a
};
Clarker.prototype.getCalculator = function () {
    return this.calculator_
};
Clarker.prototype.addMarkers = function (a, e) {
    for (var g = 0, h; h = a[g]; g++) this.pushMarkerTo_(h);
    e || this.redraw()
};
Clarker.prototype.pushMarkerTo_ = function (a) {
    a.isAdded = !1;
    if (a.draggable) {
        var e = this;
        google.maps.event.addListener(a, "dragend", function () {
            a.isAdded = !1;
            e.repaint()
        })
    }
    this.markers_.push(a)
};
Clarker.prototype.addMarker = function (a, e) {
    this.pushMarkerTo_(a);
    e || this.redraw()
};
Clarker.prototype.removeMarker_ = function (a) {
    var e = -1;
    if (this.markers_.indexOf) e = this.markers_.indexOf(a);
    else for (var g = 0, h; h = this.markers_[g]; g++) if (h == a) {
        e = g;
        break
    }
    if (e == -1) return !1;
    this.markers_.splice(e, 1);
    return !0
};
Clarker.prototype.removeMarker = function (a, e) {
    var g = this.removeMarker_(a);
    return !e && g ? (this.resetViewport(), this.redraw(), !0) : !1
};
Clarker.prototype.removeMarkers = function (a, e) {
    for (var g = !1, h = 0, k; k = a[h]; h++) k = this.removeMarker_(k), g = g || k;
    if (!e && g) return this.resetViewport(), this.redraw(), !0
};
Clarker.prototype.setReady_ = function (a) {
    if (!this.ready_) this.ready_ = a, this.createClusters_()
};
Clarker.prototype.getTotalClusters = function () {
    return this.clusters_.length
};
Clarker.prototype.getMap = function () {
    return this.map_
};
Clarker.prototype.setMap = function (a) {
    this.map_ = a
};
Clarker.prototype.getGridSize = function () {
    return this.gridSize_
};
Clarker.prototype.setGridSize = function (a) {
    this.gridSize_ = a
};
Clarker.prototype.getMinClusterSize = function () {
    return this.minClusterSize_
};
Clarker.prototype.setMinClusterSize = function (a) {
    this.minClusterSize_ = a
};
Clarker.prototype.getExtendedBounds = function (a) {
    var e = this.getProjection(),
        g = new google.maps.LatLng(a.getNorthEast().lat(), a.getNorthEast().lng()),
        h = new google.maps.LatLng(a.getSouthWest().lat(), a.getSouthWest().lng()),
        g = e.fromLatLngToDivPixel(g);
    g.x += this.gridSize_;
    g.y -= this.gridSize_;
    h = e.fromLatLngToDivPixel(h);
    h.x -= this.gridSize_;
    h.y += this.gridSize_;
    g = e.fromDivPixelToLatLng(g);
    e = e.fromDivPixelToLatLng(h);
    a.extend(g);
    a.extend(e);
    return a
};
Clarker.prototype.isMarkerInBounds_ = function (a, e) {
    return e.contains(a.getPosition())
};
Clarker.prototype.clearMarkers = function () {
    this.resetViewport(!0);
    this.markers_ = []
};
Clarker.prototype.resetViewport = function (a) {
    for (var e = 0, g; g = this.clusters_[e]; e++) g.remove();
    for (e = 0; g = this.markers_[e]; e++) g.isAdded = !1, a && g.setMap(null);
    this.clusters_ = []
};
Clarker.prototype.repaint = function () {
    var a = this.clusters_.slice();
    this.clusters_.length = 0;
    this.resetViewport();
    this.redraw();
    window.setTimeout(function () {
        for (var e = 0, g; g = a[e]; e++) g.remove()
    }, 0)
};
Clarker.prototype.redraw = function () {
    this.createClusters_()
};
Clarker.prototype.distanceBetweenPoints_ = function (a, e) {
    if (!a || !e) return 0;
    var g = (e.lat() - a.lat()) * Math.PI / 180,
        h = (e.lng() - a.lng()) * Math.PI / 180,
        g = Math.sin(g / 2) * Math.sin(g / 2) + Math.cos(a.lat() * Math.PI / 180) * Math.cos(e.lat() * Math.PI / 180) * Math.sin(h / 2) * Math.sin(h / 2);
    return 6371 * 2 * Math.atan2(Math.sqrt(g), Math.sqrt(1 - g))
};
Clarker.prototype.addToClosestCluster_ = function (a) {
    var e = 4E4,
        g = null;
    a.getPosition();
    for (var h = 0, k; k = this.clusters_[h]; h++) {
        var p = k.getCenter();
        p && (p = this.distanceBetweenPoints_(p, a.getPosition()), p < e && (e = p, g = k))
    }
    g && g.isMarkerInClusterBounds(a) ? g.addMarker(a) : (k = new Cluster(this), k.addMarker(a), this.clusters_.push(k))
};
Clarker.prototype.createClusters_ = function () {
    if (this.ready_) for (var a = this.getExtendedBounds(this.map_.getZoom() <= 3 ? new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625)) : new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(), this.map_.getBounds().getNorthEast())), e = 0, g; g = this.markers_[e]; e++)!g.isAdded && this.isMarkerInBounds_(g, a) && this.addToClosestCluster_(g)
};

function Cluster(a) {
    this.markerClusterer_ = a;
    this.map_ = a.getMap();
    this.gridSize_ = a.getGridSize();
    this.minClusterSize_ = a.getMinClusterSize();
    this.averageCenter_ = a.isAverageCenter();
    this.center_ = null;
    this.markers_ = [];
    this.bounds_ = null;
    this.clusterIcon_ = new ClusterIcon(this, a.getStyles(), a.getGridSize())
}
Cluster.prototype.isMarkerAlreadyAdded = function (a) {
    if (this.markers_.indexOf) return this.markers_.indexOf(a) != -1;
    else for (var e = 0, g; g = this.markers_[e]; e++) if (g == a) return !0;
    return !1
};
Cluster.prototype.addMarker = function (a) {
    if (this.isMarkerAlreadyAdded(a)) return !1;
    if (this.center_) {
        if (this.averageCenter_) {
            var e = this.markers_.length + 1,
                g = (this.center_.lat() * (e - 1) + a.getPosition().lat()) / e,
                e = (this.center_.lng() * (e - 1) + a.getPosition().lng()) / e;
            this.center_ = new google.maps.LatLng(g, e);
            this.calculateBounds_()
        }
    } else this.center_ = a.getPosition(), this.calculateBounds_();
    a.isAdded = !0;
    this.markers_.push(a);
    g = this.markers_.length;
    g < this.minClusterSize_ && a.getMap() != this.map_ && a.setMap(this.map_);
    if (g == this.minClusterSize_) for (e = 0; e < g; e++) this.markers_[e].setMap(null);
    g >= this.minClusterSize_ && a.setMap(null);
    this.updateIcon();
    return !0
};
Cluster.prototype.getMarkerClusterer = function () {
    return this.markerClusterer_
};
Cluster.prototype.getBounds = function () {
    for (var a = new google.maps.LatLngBounds(this.center_, this.center_), e = this.getMarkers(), g = 0, h; h = e[g]; g++) a.extend(h.getPosition());
    return a
};
Cluster.prototype.remove = function () {
    this.clusterIcon_.remove();
    this.markers_.length = 0;
    delete this.markers_
};
Cluster.prototype.getSize = function () {
    return this.markers_.length
};
Cluster.prototype.getMarkers = function () {
    return this.markers_
};
Cluster.prototype.getCenter = function () {
    return this.center_
};
Cluster.prototype.calculateBounds_ = function () {
    this.bounds_ = this.markerClusterer_.getExtendedBounds(new google.maps.LatLngBounds(this.center_, this.center_))
};
Cluster.prototype.isMarkerInClusterBounds = function (a) {
    return this.bounds_.contains(a.getPosition())
};
Cluster.prototype.getMap = function () {
    return this.map_
};
Cluster.prototype.updateIcon = function () {
    var a = this.map_.getZoom(),
        e = this.markerClusterer_.getMaxZoom();
    if (a > e) for (a = 0; e = this.markers_[a]; a++) e.setMap(this.map_);
    else this.markers_.length < this.minClusterSize_ ? this.clusterIcon_.hide() : (a = this.markerClusterer_.getStyles().length, a = this.markerClusterer_.getCalculator()(this.markers_, a), this.clusterIcon_.setCenter(this.center_), this.clusterIcon_.setSums(a), this.clusterIcon_.show())
};

function ClusterIcon(a, e, g) {
    a.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);
    this.styles_ = e;
    this.padding_ = g || 0;
    this.cluster_ = a;
    this.center_ = null;
    this.map_ = a.getMap();
    this.sums_ = this.div_ = null;
    this.visible_ = !1;
    this.setMap(this.map_)
}
ClusterIcon.prototype.triggerClusterClick = function () {
    var a = this.cluster_.getMarkerClusterer();
    google.maps.event.trigger(a, "clusterclick", this.cluster_);
    a.isZoomOnClick() && this.map_.fitBounds(this.cluster_.getBounds())
};
ClusterIcon.prototype.onAdd = function () {
    this.div_ = document.createElement("DIV");
    if (this.visible_) this.div_.style.cssText = this.createCss(this.getPosFromLatLng_(this.center_)), this.div_.innerHTML = this.sums_.text;
    this.getPanes().overlayMouseTarget.appendChild(this.div_);
    this.updateBling();
    var a = this;
    google.maps.event.addDomListener(this.div_, "click", function () {
        a.triggerClusterClick()
    })
};
ClusterIcon.prototype.getPosFromLatLng_ = function (a) {
    a = this.getProjection().fromLatLngToDivPixel(a);
    a.x -= parseInt(this.width_ / 2, 10);
    a.y -= parseInt(this.height_ / 2, 10);
    return a
};
ClusterIcon.prototype.draw = function () {
    if (this.visible_) {
        var a = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = a.y + "px";
        this.div_.style.left = a.x + "px"
    }
};
ClusterIcon.prototype.hide = function () {
    if (this.div_) this.div_.style.display = "none";
    this.visible_ = !1
};
ClusterIcon.prototype.show = function () {
    if (this.div_) this.div_.style.cssText = this.createCss(this.getPosFromLatLng_(this.center_)), this.div_.style.display = "", this.updateBling();
    this.visible_ = !0
};
ClusterIcon.prototype.remove = function () {
    this.setMap(null)
};
ClusterIcon.prototype.onRemove = function () {
    if (this.div_ && this.div_.parentNode && (this.hide(), this.div_.parentNode.removeChild(this.div_), this.div_ = null, this.shadow_)) this.shadow_.parentNode.removeChild(this.shadow_), this.shadow_ = null
};
ClusterIcon.prototype.setSums = function (a) {
    this.sums_ = a;
    this.text_ = a.text;
    this.index_ = a.index;
    if (this.div_) this.div_.innerHTML = a.text;
    this.useStyle()
};
ClusterIcon.prototype.useStyle = function () {
    var a = Math.max(0, this.sums_.index - 1),
        a = Math.min(this.styles_.length - 1, a),
        a = this.styles_[a];
    this.url_ = a.url;
    this.height_ = a.height;
    this.width_ = a.width;
    this.textColor_ = a.textColor;
    this.anchor_ = a.anchor;
    this.textSize_ = a.textSize;
    this.backgroundPosition_ = a.backgroundPosition
};
ClusterIcon.prototype.setCenter = function (a) {
    this.center_ = a
};
ClusterIcon.prototype.createCss = function (a) {
    var e = [];
    gA.length <= 1 && (document.all ? e.push('filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="' + this.url_ + '");') : (e.push("background-image:url(" + this.url_ + ");"), e.push("background-position:" + (this.backgroundPosition_ ? this.backgroundPosition_ : "0 0") + ";")));
    typeof this.anchor_ === "object" ? (typeof this.anchor_[0] === "number" && this.anchor_[0] > 0 && this.anchor_[0] < this.height_ ? e.push("height:" + (this.height_ - this.anchor_[0]) + "px; padding-top:" + this.anchor_[0] + "px;") : e.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px;"), typeof this.anchor_[1] === "number" && this.anchor_[1] > 0 && this.anchor_[1] < this.width_ ? e.push("width:" + (this.width_ - this.anchor_[1]) + "px; padding-left:" + this.anchor_[1] + "px;") : e.push("width:" + this.width_ + "px; text-align:center;")) : e.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px; width:" + this.width_ + "px; text-align:center;");
    e.push("cursor:pointer; top:" + a.y + "px; left:" + a.x + "px; color:" + (this.textColor_ ? this.textColor_ : "000") + "; position:absolute; font-size:" + (this.textSize_ ? this.textSize_ : 12) + "px; font-family:Arial,sans-serif; font-weight:bold; z-index:110; text-shadow:rgba(255,255,255,.8) 1px 1px 0px");
    return e.join("")
};
window.Clarker = Clarker;
Clarker.prototype.addMarker = Clarker.prototype.addMarker;
Clarker.prototype.addMarkers = Clarker.prototype.addMarkers;
Clarker.prototype.clearMarkers = Clarker.prototype.clearMarkers;
Clarker.prototype.fitMapToMarkers = Clarker.prototype.fitMapToMarkers;
Clarker.prototype.getCalculator = Clarker.prototype.getCalculator;
Clarker.prototype.getGridSize = Clarker.prototype.getGridSize;
Clarker.prototype.getExtendedBounds = Clarker.prototype.getExtendedBounds;
Clarker.prototype.getMap = Clarker.prototype.getMap;
Clarker.prototype.getMarkers = Clarker.prototype.getMarkers;
Clarker.prototype.getMaxZoom = Clarker.prototype.getMaxZoom;
Clarker.prototype.getStyles = Clarker.prototype.getStyles;
Clarker.prototype.getTotalClusters = Clarker.prototype.getTotalClusters;
Clarker.prototype.getTotalMarkers = Clarker.prototype.getTotalMarkers;
Clarker.prototype.redraw = Clarker.prototype.redraw;
Clarker.prototype.removeMarker = Clarker.prototype.removeMarker;
Clarker.prototype.removeMarkers = Clarker.prototype.removeMarkers;
Clarker.prototype.resetViewport = Clarker.prototype.resetViewport;
Clarker.prototype.repaint = Clarker.prototype.repaint;
Clarker.prototype.setCalculator = Clarker.prototype.setCalculator;
Clarker.prototype.setGridSize = Clarker.prototype.setGridSize;
Clarker.prototype.onAdd = Clarker.prototype.onAdd;
Clarker.prototype.draw = Clarker.prototype.draw;
Cluster.prototype.getCenter = Cluster.prototype.getCenter;
Cluster.prototype.getSize = Cluster.prototype.getSize;
Cluster.prototype.getMarkers = Cluster.prototype.getMarkers;
ClusterIcon.prototype.onAdd = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype.draw = ClusterIcon.prototype.draw;
ClusterIcon.prototype.onRemove = ClusterIcon.prototype.onRemove;
ClusterIcon.prototype.updateBling = function () {
    if (this.width_ && gA.length > 1) {
        for (var a = this.cluster_, e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], g = 0; g < a.markers_.length; g++) for (var h = 0; h < colorArray.length; h++) if (per.mapRS[a.markers_[g].r].clr == colorArray[h]) {
            e[h]++;
            break
        }
        for (var g = parseInt(a.clusterIcon_.width_ * 1.6), k = ("https:" == document.location.protocol ? "https://chart.googleapis.com" : "http://chart.apis.google.com") + "/chart?chf=a,s,000000|bg,s,67676700&chs=" + g + "x" + g + "&cht=p&chco=", h = 0; h < colorArray.length; h++) k += hexArray[h] + (h + 1 < colorArray.length ? "|" : "");
        k += "&chd=t:";
        for (h = 0; h < colorArray.length; h++) k += parseInt(e[h] / a.markers_.length * 100) + (h + 1 < colorArray.length ? "," : "");
        $(this.div_).css("background-image", "url(" + k + ")").css("width", g).css("height", g).css("line-height", g + "px").css("margin-top", -((g - a.clusterIcon_.height_) / 2) + "px").css("margin-left", -((g - a.clusterIcon_.width_) / 2) + "px")
    }
    if (this.index_) a = this.getPosFromLatLng_(this.center_), this.shadow_ && this.shadow_.parentNode.removeChild(this.shadow_), this.shadow_ = document.createElement("DIV"), $(this.shadow_).css("background-image", "url(" + Clarker.prototype.MARKER_CLUSTER_IMAGE_PATH_ + this.index_ + "_shadow.png)").css("z-index", -1).css("position", "absolute").css("height", this.height_).css("width", this.width_ + this.width_ * 0.4).css("top", a.y).css("left", a.x), this.div_.parentNode.appendChild(this.shadow_)
};
(function (a) {
    a.fn.hoverIntent = function (e, g) {
        var h = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        },
            h = a.extend(h, g ? {
                over: e,
                out: g
            } : e),
            k, p, q, w, v = function (a) {
                k = a.pageX;
                p = a.pageY
            },
            o = function (e, g) {
                g.hoverIntent_t = clearTimeout(g.hoverIntent_t);
                if (Math.abs(q - k) + Math.abs(w - p) < h.sensitivity) return a(g).unbind("mousemove", v), g.hoverIntent_s = 1, h.over.apply(g, [e]);
                else q = k, w = p, g.hoverIntent_t = setTimeout(function () {
                    o(e, g)
                }, h.interval)
            },
            G = function (e) {
                for (var g = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget; g && g != this;) try {
                    g = g.parentNode
                } catch (k) {
                    g = this
                }
                if (g == this) return !1;
                var p = jQuery.extend({}, e),
                    u = this;
                if (u.hoverIntent_t) u.hoverIntent_t = clearTimeout(u.hoverIntent_t);
                if (e.type == "mouseover") {
                    if (q = p.pageX, w = p.pageY, a(u).bind("mousemove", v), u.hoverIntent_s != 1) u.hoverIntent_t = setTimeout(function () {
                        o(p, u)
                    }, h.interval)
                } else if (a(u).unbind("mousemove", v), u.hoverIntent_s == 1) u.hoverIntent_t = setTimeout(function () {
                    u.hoverIntent_t = clearTimeout(u.hoverIntent_t);
                    u.hoverIntent_s = 0;
                    h.out.apply(u, [p])
                }, h.timeout)
            };
        return this.mouseover(G).mouseout(G)
    }
})(jQuery);
(function (a) {
    a.fn.hint = function (e) {
        e || (e = "blur");
        return this.each(function () {
            function g() {
                h.val() === k && h.hasClass(e) && h.val("").removeClass(e)
            }
            var h = a(this),
                k = h.attr("title"),
                p = a(this.form),
                q = a(window);
            k && (h.blur(function () {
                this.value === "" && h.val(k).addClass(e)
            }).focus(g).blur(), p.submit(g), q.unload(g))
        })
    }
})(jQuery);
(function (a) {
    typeof define === "function" && define.amd ? define(["jquery"], a) : a(jQuery)
})(function (a) {
    a.fn.tweet = function (e) {
        function g(a, e) {
            if (typeof a === "string") {
                var g = a,
                    h;
                for (h in e) var k = e[h],
                    g = g.replace(RegExp("{" + h + "}", "g"), k === null ? "" : k);
                return g
            } else return a(e)
        }
        function h(e, g) {
            return function () {
                var h = [];
                this.each(function () {
                    h.push(this.replace(e, g))
                });
                return a(h)
            }
        }
        function k(a, e) {
            return a.replace(G, function (a) {
                for (var g = /^[a-z]+:/i.test(a) ? a : "http://" + a, h = 0; h < e.length; ++h) {
                    var k = e[h];
                    if (k.url == g && k.expanded_url) {
                        g = k.expanded_url;
                        a = k.display_url;
                        break
                    }
                }
                return '<a href="' + g.replace(/</g, "&lt;").replace(/>/g, "^&gt;") + '">' + a.replace(/</g, "&lt;").replace(/>/g, "^&gt;") + "</a>"
            })
        }
        function p(a) {
            var e = parseInt(((arguments.length > 1 ? arguments[1] : new Date).getTime() - a) / 1E3, 10),
                g = "";
            return g = e < 1 ? "just now" : e < 60 ? e + " seconds ago" : e < 120 ? "about a minute ago" : e < 2700 ? "about " + parseInt(e / 60, 10).toString() + " minutes ago" : e < 7200 ? "about an hour ago" : e < 86400 ? "about " + parseInt(e / 3600, 10).toString() + " hours ago" : e < 172800 ? "about a day ago" : "about " + parseInt(e / 86400, 10).toString() + " days ago"
        }
        function q() {
            var a = "https:" == document.location.protocol ? "https:" : "http:",
                e = o.fetch === null ? o.count : o.fetch;
            if (o.list) return a + "//" + o.twitter_api_url + "/1/" + o.username[0] + "/lists/" + o.list + "/statuses.json?page=" + o.page + "&per_page=" + e + "&include_entities=1&callback=?";
            else if (o.favorites) return a + "//" + o.twitter_api_url + "/favorites/" + o.username[0] + ".json?page=" + o.page + "&count=" + e + "&include_entities=1&callback=?";
            else if (o.query === null && o.username.length == 1) return a + "//" + o.twitter_api_url + "/1/statuses/user_timeline.json?screen_name=" + o.username[0] + "&count=" + e + (o.retweets ? "&include_rts=1" : "") + "&page=" + o.page + "&include_entities=1&callback=?";
            else {
                var g = o.query || "from:" + o.username.join(" OR from:");
                return a + "//" + o.twitter_search_url + "/search.json?&q=" + encodeURIComponent(g) + "&rpp=" + e + "&page=" + o.page + "&include_entities=1&callback=?"
            }
        }
        function w(a, e) {
            return e ? "user" in a ? a.user.profile_image_url_https : w(a, !1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : a.profile_image_url || a.user.profile_image_url
        }
        function v(e) {
            var h = {};
            h.item = e;
            h.source = e.source;
            h.screen_name = e.from_user || e.user.screen_name;
            h.avatar_size = o.avatar_size;
            h.avatar_url = w(e, document.location.protocol === "https:");
            h.retweet = typeof e.retweeted_status != "undefined";
            h.tweet_time = Date.parse(e.created_at.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"));
            h.join_text = o.join_text == "auto" ? e.text.match(/^(@([A-Za-z0-9-_]+)) .*/i) ? o.auto_join_text_reply : e.text.match(G) ? o.auto_join_text_url : e.text.match(/^((\w+ed)|just) .*/im) ? o.auto_join_text_ed : e.text.match(/^(\w*ing) .*/i) ? o.auto_join_text_ing : o.auto_join_text_default : o.join_text;
            h.tweet_id = e.id_str;
            h.twitter_base = "http://" + o.twitter_url + "/";
            h.user_url = h.twitter_base + h.screen_name;
            h.tweet_url = h.user_url + "/status/" + h.tweet_id;
            h.reply_url = h.twitter_base + "intent/tweet?in_reply_to=" + h.tweet_id;
            h.retweet_url = h.twitter_base + "intent/retweet?tweet_id=" + h.tweet_id;
            h.favorite_url = h.twitter_base + "intent/favorite?tweet_id=" + h.tweet_id;
            h.retweeted_screen_name = h.retweet && e.retweeted_status.user.screen_name;
            h.tweet_relative_time = p(h.tweet_time);
            h.entities = e.entities ? (e.entities.urls || []).concat(e.entities.media || []) : [];
            h.tweet_raw_text = h.retweet ? "RT @" + h.retweeted_screen_name + " " + e.retweeted_status.text : e.text;
            h.tweet_text = a([k(h.tweet_raw_text, h.entities)]).linkUser().linkHash()[0];
            h.tweet_text_fancy = a([h.tweet_text]).makeHeart()[0];
            h.user = g('<a class="tweet_user" href="{user_url}">{screen_name}</a>', h);
            h.join = o.join_text ? g(' <span class="tweet_join">{join_text}</span> ', h) : " ";
            h.avatar = h.avatar_size ? g('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', h) : "";
            h.time = g('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', h);
            h.text = g('<span class="tweet_text">{tweet_text_fancy}</span>', h);
            h.reply_action = g('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', h);
            h.retweet_action = g('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', h);
            h.favorite_action = g('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', h);
            return h
        }
        var o = a.extend({
            username: null,
            list: null,
            favorites: !1,
            query: null,
            avatar_size: null,
            count: 3,
            fetch: null,
            page: 1,
            retweets: !0,
            intro_text: null,
            outro_text: null,
            join_text: null,
            auto_join_text_default: "i said,",
            auto_join_text_ed: "i",
            auto_join_text_ing: "i am",
            auto_join_text_reply: "i replied to",
            auto_join_text_url: "i was looking at",
            loading_text: null,
            refresh_interval: null,
            twitter_url: "twitter.com",
            twitter_api_url: "api.twitter.com",
            twitter_search_url: "search.twitter.com",
            template: "{avatar}{time}{join}{text}",
            comparator: function (a, e) {
                return e.tweet_time - a.tweet_time
            },
            filter: function () {
                return !0
            }
        }, e),
            G = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi;
        a.extend({
            tweet: {
                t: g
            }
        });
        a.fn.extend({
            linkUser: h(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + o.twitter_url + '/$2">$2</a>'),
            linkHash: h(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="http://' + o.twitter_search_url + "/search?q=&tag=$1&lang=all" + (o.username && o.username.length == 1 && !o.list ? "&from=" + o.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
            makeHeart: h(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
        });
        return this.each(function (e, h) {
            var k = a('<ul class="tweet_list">'),
                p = '<p class="tweet_intro">' + o.intro_text + "</p>",
                u = '<p class="tweet_outro">' + o.outro_text + "</p>",
                w = a('<p class="loading">' + o.loading_text + "</p>");
            if (o.username && typeof o.username == "string") o.username = [o.username];
            a(h).unbind("tweet:load").bind("tweet:load", function () {
                o.loading_text && a(h).empty().append(w);
                a.getJSON(q(), function (e) {
                    a(h).empty().append(k);
                    o.intro_text && k.before(p);
                    k.empty();
                    e = a.map(e.results || e, v);
                    e = a.grep(e, o.filter).sort(o.comparator).slice(0, o.count);
                    k.append(a.map(e, function (a) {
                        return "<li>" + g(o.template, a) + "</li>"
                    }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");
                    o.outro_text && k.after(u);
                    a(h).trigger("loaded").trigger(e.length === 0 ? "empty" : "full");
                    o.refresh_interval && window.setTimeout(function () {
                        a(h).trigger("tweet:load")
                    }, 1E3 * o.refresh_interval)
                })
            }).trigger("tweet:load")
        })
    }
});