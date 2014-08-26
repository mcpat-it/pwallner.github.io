(function (a, e) {
    function h(b) {
        if (!Ra[b]) {
            var l = t.body,
                a = f("<" + b + ">").appendTo(l),
                s = a.css("display")
                a.remove()
                if (s === "none" || s === "") {
                    ca || (ca = t.createElement("iframe"), ca.frameBorder = ca.width = ca.height = 0)
                    l.appendChild(ca)
                    if (!ta || !ca.createElement) ta = (ca.contentWindow || ca.contentDocument).document, ta.write((t.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), ta.close()
                    a = ta.createElement(b)
                    ta.body.appendChild(a)
                    s = f.css(a, "display")
                    l.removeChild(ca)
                }
            Ra[b] = s
        }
        return Ra[b]
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
                        setTimeout(b, 1)
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
                v = /(msie)([\w.]+)/,
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
                G = {}
            l.fn = l.prototype = {
                constructor: l,
                init: function (b, a, f) {
                    var m, s
                    if (!b) return this
                    if (b.nodeType) return this.context = this[0] = b, this.length = 1, this
                    if (b === "body" && !a && t.body) return this.context = t, this[0] = t.body, this.selector = b, this.length = 1, this
                    if (typeof b == "string") {
                        b.charAt(0) !== "<" || b.charAt(b.length - 1) !== ">" || b.length < 3 ? m = g.exec(b) : m = [null, b, null]
                        if (m && (m[1] || !a)) {
                            if (m[1]) return s = (a = a instanceof l ? a[0] : a) ? a.ownerDocument || a : t, (f = r.exec(b)) ? l.isPlainObject(a) ? (b = [t.createElement(f[1])], l.fn.attr.call(b, a, !0)) : b = [s.createElement(f[1])] : (f = l.buildFragment([m[1]], [s]), b = (f.cacheable ? l.clone(f.fragment) : f.fragment).childNodes), l.merge(this, b)
                            if ((a = t.getElementById(m[2])) && a.parentNode) {
                                if (a.id !== m[2]) return f.find(b)
                                this.length = 1
                                this[0] = a
                            }
                            this.context = t
                            this.selector = b
                            return this
                        }
                        return !a || a.jquery ? (a || f).find(b) : this.constructor(a).find(b)
                    }
                    if (l.isFunction(b)) return f.ready(b)
                    b.selector !== e && (this.selector = b.selector, this.context = b.context)
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
                    var m = this.constructor()
                    l.isArray(b) ? Va.apply(m, b) : l.merge(m, b)
                    m.prevObject = this
                    m.context = this.context
                    a === "find" ? m.selector = this.selector + (this.selector ? " " : "") + f : a && (m.selector = this.selector + "." + a + "(" + f + ")")
                    return m
                },
                each: function (b, a) {
                    return l.each(this, b, a)
                },
                ready: function (b) {
                    l.bindReady()
                    Na.done(b)
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
            }
            l.fn.init.prototype = l.fn
            l.extend = l.fn.extend = function () {
                var b, a, f, m, s, n, g = arguments[0] || {},
                    y = 1,
                    Ma = arguments.length,
                    E = !1
                    typeof g == "boolean" && (E = g, g = arguments[1] || {}, y = 2)
                    typeof g != "object" && !l.isFunction(g) && (g = {})
                    for (Ma === y && (g = this, --y); y < Ma; y++) if ((b = arguments[y]) != null) for (a in b) f = g[a],
                    m = b[a],
                    g !== m && (E && m && (l.isPlainObject(m) || (s = l.isArray(m))) ? (s ? (s = !1, n = f && l.isArray(f) ? f : []) : n = f && l.isPlainObject(f) ? f : {}, g[a] = l.extend(E, n, m)) : m !== e && (g[a] = m))
                    return g
            }
            l.extend({
                noConflict: function (b) {
                    a.$ === l && (a.$ = s)
                    b && a.jQuery === l && (a.jQuery = f)
                    return l
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (b) {
                    b ? l.readyWait++ : l.ready(!0)
                },
                ready: function (b) {
                    if (b === !0 && !--l.readyWait || b !== !0 && !l.isReady) {
                        if (!t.body) return setTimeout(l.ready, 1)
                        l.isReady = !0
                        b !== !0 && --l.readyWait > 0 || (Na.resolveWith(t, [l]), l.fn.trigger && l(t).trigger("ready").unbind("ready"))
                    }
                },
                bindReady: function () {
                    if (!Na) {
                        Na = l._Deferred()
                        if (t.readyState === "complete") return setTimeout(l.ready, 1)
                        if (t.addEventListener) t.addEventListener("DOMContentLoaded", wa, !1), a.addEventListener("load", l.ready, !1)
                        else if (t.attachEvent) {
                            t.attachEvent("onreadystatechange", wa)
                            a.attachEvent("onload", l.ready)
                            var f = !1
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
                    if (!b || l.type(b) !== "object" || b.nodeType || l.isWindow(b)) return !1
                    if (b.constructor && !Ua.call(b, "constructor") && !Ua.call(b.constructor.prototype, "isPrototypeOf")) return !1
                    for (var a in b)
                    return a === e || Ua.call(b, a)
                },
                isEmptyObject: function (b) {
                    for (var l in b) return !1
                    return !0
                },
                error: function (b) {
                    throw b
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null
                    b = l.trim(b)
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b)
                    if (p.test(b.replace(o, "@").replace(q, "]").replace(F, ""))) return (new Function("return " + b))()
                    l.error("Invalid JSON: " + b)
                },
                parseXML: function (b, f, m) {
                    a.DOMParser ? (m = new DOMParser, f = m.parseFromString(b, "text/xml")) : (f = new ActiveXObject("Microsoft.XMLDOM"), f.async = "false", f.loadXML(b))
                    m = f.documentElement(!m || !m.nodeName || m.nodeName === "parsererror") && l.error("Invalid XML: " + b)
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
                        g = n === e || l.isFunction(b)
                        if (f) if (g) for (m in b) {
                            if (a.apply(b[m], f) === !1) break
                        } else for (; s < n;) {
                            if (a.apply(b[s++], f) === !1) break
                        } else if (g) for (m in b) {
                            if (a.call(b[m], m, b[m]) === !1) break
                        } else for (; s < n;) if (a.call(b[s], s, b[s++]) === !1) break
                    return b
                },
                trim: A ?
                function (b) {
                    return b == null ? "" : A.call(b)
                } : function (b) {
                    return b == null ? "" : (b + "").replace(h, "").replace(j, "")
                },
                makeArray: function (b, a) {
                    var f = a || []
                    if (b != null) {
                        var m = l.type(b)
                        b.length == null || m === "string" || m === "function" || m === "regexp" || l.isWindow(b) ? Va.call(f, b) : l.merge(f, b)
                    }
                    return f
                },
                inArray: function (b, l) {
                    if (P) return P.call(l, b)
                    for (var a = 0, f = l.length; a < f; a++) if (l[a] === b) return a
                    return -1
                },
                merge: function (b, l) {
                    var a = b.length,
                        f = 0
                    if (typeof l.length == "number") for (var m = l.length; f < m; f++) b[a++] = l[f]
                    else for (; l[f] !== e;) b[a++] = l[f++]
                    b.length = a
                    return b
                },
                grep: function (b, l, a) {
                    for (var f = [], m, a = !! a, e = 0, s = b.length; e < s; e++) m = !! l(b[e], e), a !== m && f.push(b[e])
                    return f
                },
                map: function (b, a, f) {
                    var m, s, n = [],
                        g = 0,
                        y = b.length
                    if (b instanceof l || y !== e && typeof y == "number" && (y > 0 && b[0] && b[y - 1] || y === 0 || l.isArray(b))) for (; g < y; g++) m = a(b[g], g, f), m != null && (n[n.length] = m)
                    else for (s in b) m = a(b[s], s, f), m != null && (n[n.length] = m)
                    return n.concat.apply([], n)
                },
                guid: 1,
                proxy: function (b, a) {
                    if (typeof a == "string") var f = b[a],
                        a = b,
                        b = f
                    if (!l.isFunction(b)) return e
                    var m = Q.call(arguments, 2),
                        f = function () {
                            return b.apply(a, m.concat(Q.call(arguments)))
                        }
                    f.guid = b.guid = b.guid || f.guid || l.guid++
                    return f
                },
                access: function (b, a, f, m, s, n) {
                    var g = b.length
                    if (typeof a == "object") {
                        for (var y in a) l.access(b, y, a[y], m, s, f)
                        return b
                    }
                    if (f !== e) {
                        m = !n && m && l.isFunction(f)
                        for (y = 0; y < g; y++) s(b[y], a, m ? f.call(b[y], y, s(b[y], a)) : f, n)
                        return b
                    }
                    return g ? s(b[0], a) : e
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (b) {
                    b = b.toLowerCase()
                    b = u.exec(b) || R.exec(b) || v.exec(b) || b.indexOf("compatible") < 0 && w.exec(b) || []
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function b(l, a) {
                        return new b.fn.init(l, a)
                    }
                    l.extend(!0, b, this)
                    b.superclass = this
                    b.fn = b.prototype = this()
                    b.fn.constructor = b
                    b.sub = this.sub
                    b.fn.init = function (f, m) {
                        m && m instanceof l && !(m instanceof b) && (m = b(m))
                        return l.fn.init.call(this, f, m, a)
                    }
                    b.fn.init.prototype = b.fn
                    var a = b(t)
                    return b
                },
                browser: {}
            })
            l.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b, l) {
                G["[object " + l + "]"] = l.toLowerCase()
            })
            Ga = l.uaMatch(Ga)
            Ga.browser && (l.browser[Ga.browser] = !0, l.browser.version = Ga.version)
            l.browser.webkit && (l.browser.safari = !0)
            E.test(" ") && (h = /^[\s\xA0]+/, j = /[\s\xA0]+$/)
            n = l(t)
            t.addEventListener ? wa = function () {
                t.removeEventListener("DOMContentLoaded", wa, !1)
                l.ready()
            } : t.attachEvent && (wa = function () {
                t.readyState === "complete" && (t.detachEvent("onreadystatechange", wa), l.ready())
            })
            return l
        }(),
        na = "done fail isResolved isRejected promise then always pipe".split(" "),
        xa = [].slice
        f.support = function () {
            var b = t.createElement("div"),
                l = t.documentElement,
                a, e, n, g, h, j, k
                b.setAttribute("className", "t")
                b.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"
            a = b.getElementsByTagName("*")
            e = b.getElementsByTagName("a")[0]
            if (!a || !a.length || !e) return {}
            n = t.createElement("select")
            g = n.appendChild(t.createElement("option"))
            a = b.getElementsByTagName("input")[0]
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
            }
            a.checked = !0
            j.noCloneChecked = a.cloneNode(!0).checked
            n.disabled = !0
            j.optDisabled = !g.disabled
            try {
                delete b.test
            } catch (r) {
                j.deleteExpando = !1
            }!b.addEventListener && b.attachEvent && b.fireEvent && (b.attachEvent("onclick", function () {
                j.noCloneEvent = !1
            }), b.cloneNode(!0).fireEvent("onclick"))
            a = t.createElement("input")
            a.value = "t"
            a.setAttribute("type", "radio")
            j.radioValue = a.value === "t"
            a.setAttribute("checked", "checked")
            b.appendChild(a)
            e = t.createDocumentFragment()
            e.appendChild(b.firstChild)
            j.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked
            b.innerHTML = ""
            b.style.width = b.style.paddingLeft = "1px"
            n = t.getElementsByTagName("body")[0]
            e = t.createElement(n ? "div" : "body")
            g = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0
            }
            n && f.extend(g, {
                position: "absolute",
                left: -1E3,
                top: -1E3
            })
            for (k in g) e.style[k] = g[k]
            e.appendChild(b)
            l = n || l
            l.insertBefore(e, l.firstChild)
            j.appendChecked = a.checked
            j.boxModel = b.offsetWidth === 2 "zoom" in b.style && (b.style.display = "inline", b.style.zoom = 1, j.inlineBlockNeedsLayout = b.offsetWidth === 2, b.style.display = "", b.innerHTML = "<div style='width:4px;'></div>", j.shrinkWrapBlocks = b.offsetWidth !== 2)
            b.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"
            n = b.getElementsByTagName("td")
            a = n[0].offsetHeight === 0
            n[0].style.display = ""
            n[1].style.display = "none"
            j.reliableHiddenOffsets = a && n[0].offsetHeight === 0
            b.innerHTML = ""
            t.defaultView && t.defaultView.getComputedStyle && (h = t.createElement("div"), h.style.width = "0", h.style.marginRight = "0", b.appendChild(h), j.reliableMarginRight = (parseInt((t.defaultView.getComputedStyle(h, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0)
            e.innerHTML = ""
            l.removeChild(e)
            if (b.attachEvent) for (k in {
                submit: 1,
                change: 1,
                focusin: 1
            }) h = "on" + k, (a = h in b) || (b.setAttribute(h, "return;"), a = typeof b[h] == "function"), j[k + "Bubbles"] = a
            e = e = n = g = n = h = b = a = null
            return j
        }()
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
                b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando]
                return !!b && !ja(b)
            },
            data: function (b, a, m, s) {
                if (f.acceptData(b)) {
                    var n = f.expando,
                        g = typeof a == "string",
                        h = b.nodeType,
                        j = h ? f.cache : b,
                        k = h ? b[f.expando] : b[f.expando] && f.expando
                    if (k && (!s || !k || j[k][n]) || !(g && m === e)) {
                        k || (h ? b[f.expando] = k = ++f.uuid : k = f.expando)
                        j[k] || (j[k] = {}, h || (j[k].toJSON = f.noop))
                        if (typeof a == "object" || typeof a == "function") s ? j[k][n] = f.extend(j[k][n], a) : j[k] = f.extend(j[k], a)
                        b = j[k]
                        s && (b[n] || (b[n] = {}), b = b[n])
                        m !== e && (b[f.camelCase(a)] = m)
                        if (a === "events" && !b[a]) return b[n] && b[n].events
                        return g ? b[f.camelCase(a)] || b[a] : b
                    }
                }
            },
            removeData: function (b, l, e) {
                if (f.acceptData(b)) {
                    var s = f.expando,
                        n = b.nodeType,
                        g = n ? f.cache : b,
                        h = n ? b[f.expando] : f.expando
                    if (g[h]) {
                        if (l) {
                            var j = e ? g[h][s] : g[h]
                            if (j && (delete j[l], !ja(j))) return
                        }
                        if (e && (delete g[h][s], !ja(g[h]))) return
                        l = g[h][s]
                        f.support.deleteExpando || g != a ? delete g[h] : g[h] = null
                        l ? (g[h] = {}, n || (g[h].toJSON = f.noop), g[h][s] = l) : n && (f.support.deleteExpando ? delete b[f.expando] : b.removeAttribute ? b.removeAttribute(f.expando) : b[f.expando] = null)
                    }
                }
            },
            _data: function (b, a, e) {
                return f.data(b, a, e, !0)
            },
            acceptData: function (b) {
                if (b.nodeName) {
                    var a = f.noData[b.nodeName.toLowerCase()]
                    if (a) return a !== !0 && b.getAttribute("classid") === a
                }
                return !0
            }
        })
        f.event = {
            add: function (b, a, m, g) {
                if (b.nodeType !== 3 && b.nodeType !== 8) {
                    if (m === !1) m = T
                    else if (!m) return
                    var n, h
                    m.handler && (n = m, m = n.handler)
                    m.guid || (m.guid = f.guid++)
                    if (h = f._data(b)) {
                        var j = h.events,
                            k = h.handle
                            j || (h.events = j = {})
                            k || (h.handle = k = function (b) {
                                return typeof f != "undefined" && (!b || f.event.triggered !== b.type) ? f.event.handle.apply(k.elem, arguments) : e
                            })
                            k.elem = b
                        for (var a = a.split(" "), r, p = 0, o; r = a[p++];) {
                            h = n ? f.extend({}, n) : {
                                handler: m,
                                data: g
                            }
                            r.indexOf(".") > -1 ? (o = r.split("."), r = o.shift(), h.namespace = o.slice(0).sort().join(".")) : (o = [], h.namespace = "")
                            h.type = r
                            h.guid || (h.guid = m.guid)
                            var t = j[r],
                                q = f.event.special[r] || {}
                            if (!t && (t = j[r] = [], !q.setup || q.setup.call(b, g, o, k) === !1)) b.addEventListener ? b.addEventListener(r, k, !1) : b.attachEvent && b.attachEvent("on" + r, k)
                            q.add && (q.add.call(b, h), h.handler.guid || (h.handler.guid = m.guid))
                            t.push(h)
                            f.event.global[r] = !0
                        }
                        b = null
                    }
                }
            },
            global: {},
            remove: function (b, a, m, g) {
                if (b.nodeType !== 3 && b.nodeType !== 8) {
                    m === !1 && (m = T)
                    var n, h, j = 0,
                        k, r, p, o, t, q, F = f.hasData(b) && f._data(b),
                        u = F && F.events
                    if (F && u) if (a && a.type && (m = a.handler, a = a.type), !a || typeof a == "string" && a.charAt(0) === ".") for (n in a = a || "", u) f.event.remove(b, n + a)
                    else {
                        for (a = a.split(" "); n = a[j++];) if (o = n, k = n.indexOf(".") < 0, r = [], k || (r = n.split("."), n = r.shift(), p = RegExp("(^|\\.)" + f.map(r.slice(0).sort(), ba).join("\\.(?:.*\\.)?") + "(\\.|$)")), t = u[n]) if (m) {
                            o = f.event.special[n] || {}
                            for (h = g || 0; h < t.length; h++) if (q = t[h], m.guid === q.guid) {
                                if (k || p.test(q.namespace)) g == null && t.splice(h--, 1), o.remove && o.remove.call(b, q)
                                if (g != null) break
                            }
                            if (t.length === 0 || g != null && t.length === 1)(!o.teardown || o.teardown.call(b, r) === !1) && f.removeEvent(b, n, F.handle), delete u[n]
                        } else for (h = 0; h < t.length; h++) if (q = t[h], k || p.test(q.namespace)) f.event.remove(b, o, q.handler, h), t.splice(h--, 1)
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
                    j
                    n.indexOf("!") >= 0 && (n = n.slice(0, -1), j = !0)
                    n.indexOf(".") >= 0 && (h = n.split("."), n = h.shift(), h.sort())
                    if (m && !f.event.customEvent[n] || f.event.global[n]) {
                        b = typeof b == "object" ? b[f.expando] ? b : new f.Event(n, b) : new f.Event(n)
                        b.type = n
                        b.exclusive = j
                        b.namespace = h.join(".")
                        b.namespace_re = RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)")
                        if (g || !m) b.preventDefault(), b.stopPropagation()
                        if (m) {
                            if (!(m.nodeType === 3 || m.nodeType === 8)) {
                                b.result = e
                                b.target = m
                                l = l != null ? f.makeArray(l) : []
                                l.unshift(b)
                                h = m
                                g = n.indexOf(":") < 0 ? "on" + n : ""
                                do j = f._data(h, "handle"), b.currentTarget = h, j && j.apply(h, l), g && f.acceptData(h) && h[g] && h[g].apply(h, l) === !1 && (b.result = !1, b.preventDefault()), h = h.parentNode || h.ownerDocument || h === b.target.ownerDocument && a
                                while (h && !b.isPropagationStopped())
                                if (!b.isDefaultPrevented()) {
                                    var k, h = f.event.special[n] || {}
                                    if ((!h._default || h._default.call(m.ownerDocument, b) === !1) && (n !== "click" || !f.nodeName(m, "a")) && f.acceptData(m)) {
                                        try {
                                            g && m[n] && (k = m[g], k && (m[g] = null), f.event.triggered = n, m[n]())
                                        } catch (r) {}
                                        k && (m[g] = k)
                                        f.event.triggered = e
                                    }
                                }
                                return b.result
                            }
                        } else f.each(f.cache, function () {
                            var a = this[f.expando]
                            a && a.events && a.events[n] && f.event.trigger(b, l, a.handle.elem)
                        })
                    }
            },
            handle: function (b) {
                var b = f.event.fix(b || a.event),
                    l = ((f._data(this, "events") || {})[b.type] || []).slice(0),
                    m = !b.exclusive && !b.namespace,
                    g = Array.prototype.slice.call(arguments, 0)
                    g[0] = b
                    b.currentTarget = this
                for (var n = 0, h = l.length; n < h; n++) {
                    var j = l[n]
                    if (m || b.namespace_re.test(j.namespace)) if (b.handler = j.handler, b.data = j.data, b.handleObj = j, j = j.handler.apply(this, g), j !== e && (b.result = j, j === !1 && (b.preventDefault(), b.stopPropagation())), b.isImmediatePropagationStopped()) break
                }
                return b.result
            },
            props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix: function (b) {
                if (b[f.expando]) return b
                for (var a = b, b = f.Event(a), m = this.props.length, g; m;) g = this.props[--m], b[g] = a[g]
                b.target || (b.target = b.srcElement || t)
                b.target.nodeType === 3 && (b.target = b.target.parentNode)!b.relatedTarget && b.fromElement && (b.relatedTarget = b.fromElement === b.target ? b.toElement : b.fromElement)
                if (b.pageX == null && b.clientX != null) m = b.target.ownerDocument || t, a = m.documentElement, m = m.body, b.pageX = b.clientX + (a && a.scrollLeft || m && m.scrollLeft || 0) - (a && a.clientLeft || m && m.clientLeft || 0), b.pageY = b.clientY + (a && a.scrollTop || m && m.scrollTop || 0) - (a && a.clientTop || m && m.clientTop || 0)
                b.which == null && (b.charCode != null || b.keyCode != null) && (b.which = b.charCode != null ? b.charCode : b.keyCode)!b.metaKey && b.ctrlKey && (b.metaKey = b.ctrlKey)!b.which && b.button !== e && (b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0)
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
        }
        (function () {
            function b(b, a, f, e, l, g) {
                for (var l = 0, m = e.length; l < m; l++) {
                    var h = e[l]
                    if (h) {
                        for (var n = !1, h = h[b]; h;) {
                            if (h.sizcache === f) {
                                n = e[h.sizset]
                                break
                            }
                            if (h.nodeType === 1) if (g || (h.sizcache = f, h.sizset = l), typeof a != "string") {
                                if (h === a) {
                                    n = !0
                                    break
                                }
                            } else if (o.filter(a, [h]).length > 0) {
                                n = h
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
                    var n = l[g]
                    if (n) {
                        for (var s = !1, n = n[b]; n;) {
                            if (n.sizcache === e) {
                                s = l[n.sizset]
                                break
                            }
                            n.nodeType === 1 && !m && (n.sizcache = e, n.sizset = g)
                            if (n.nodeName.toLowerCase() === f) {
                                s = n
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
                p = /\W/ [0, 0].sort(function () {
                    k = !1
                    return 0
                })
                var o = function (b, a, f, e) {
                    var f = f || [],
                        l = a = a || t
                    if (a.nodeType !== 1 && a.nodeType !== 9) return []
                    if (!b || typeof b != "string") return f
                    var h, s, j, k, y, r, E = !0,
                        p = o.isXML(a),
                        u = [],
                        R = b
                        do if (g.exec(""), h = g.exec(R)) if (R = h[3], u.push(h[1]), h[2]) {
                            k = h[3]
                            break
                        }
                    while (h)
                    if (u.length > 1 && F.exec(b)) if (u.length === 2 && q.relative[u[0]]) s = P(u[0] + u[1], a)
                    else for (s = q.relative[u[0]] ? [a] : o(u.shift(), a); u.length;) b = u.shift(), q.relative[b] && (b += u.shift()), s = P(b, s)
                    else if (!e && u.length > 1 && a.nodeType === 9 && !p && q.match.ID.test(u[0]) && !q.match.ID.test(u[u.length - 1]) && (y = o.find(u.shift(), a, p), a = y.expr ? o.filter(y.expr, y.set)[0] : y.set[0]), a) {
                        y = e ? {
                            expr: u.pop(),
                            set: v(e)
                        } : o.find(u.pop(), u.length === 1 && (u[0] === "~" || u[0] === "+") && a.parentNode ? a.parentNode : a, p)
                        s = y.expr ? o.filter(y.expr, y.set) : y.set
                        for (u.length > 0 ? j = v(s) : E = !1; u.length;) h = r = u.pop(), q.relative[r] ? h = u.pop() : r = "", h == null && (h = a), q.relative[r](j, h, p)
                    } else j = []
                    j || (j = s)
                    j || o.error(r || b)
                    if (n.call(j) === "[object Array]") if (E) if (a && a.nodeType === 1) for (b = 0; j[b] != null; b++) j[b] && (j[b] === !0 || j[b].nodeType === 1 && o.contains(a, j[b])) && f.push(s[b])
                    else for (b = 0; j[b] != null; b++) j[b] && j[b].nodeType === 1 && f.push(s[b])
                    else f.push.apply(f, j)
                    else v(j, f)
                    k && (o(k, l, f, e), o.uniqueSort(f))
                    return f
                }
            o.uniqueSort = function (b) {
                if (w && (j = k, b.sort(w), j)) for (var a = 1; a < b.length; a++) b[a] === b[a - 1] && b.splice(a--, 1)
                return b
            }
            o.matches = function (b, a) {
                return o(b, null, null, a)
            }
            o.matchesSelector = function (b, a) {
                return o(a, null, null, [b]).length > 0
            }
            o.find = function (b, a, f) {
                var e
                if (!b) return []
                for (var l = 0, g = q.order.length; l < g; l++) {
                    var m, h = q.order[l]
                    if (m = q.leftMatch[h].exec(b)) {
                        var n = m[1]
                        m.splice(1, 1)
                        if (n.substr(n.length - 1) !== "\\" && (m[1] = (m[1] || "").replace(r, ""), e = q.find[h](m, a, f), e != null)) {
                            b = b.replace(q.match[h], "")
                            break
                        }
                    }
                }
                e || (e = typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : [])
                return {
                    set: e,
                    expr: b
                }
            }
            o.filter = function (b, a, f, l) {
                for (var g, m, h = b, n = [], s = a, j = a && a[0] && o.isXML(a[0]); b && a.length;) {
                    for (var k in q.filter) if ((g = q.leftMatch[k].exec(b)) != null && g[2]) {
                        var y, r, E = q.filter[k]
                        r = g[1]
                        m = !1
                        g.splice(1, 1)
                        if (r.substr(r.length - 1) !== "\\") {
                            s === n && (n = [])
                            if (q.preFilter[k]) if (g = q.preFilter[k](g, s, f, n, l, j)) {
                                if (g === !0) continue
                            } else m = y = !0
                            if (g) for (var p = 0(r = s[p]) != null; p++) if (r) {
                                y = E(r, g, p, s)
                                var t = l ^ !! y
                                f && y != null ? t ? m = !0 : s[p] = !1 : t && (n.push(r), m = !0)
                            }
                            if (y !== e) {
                                f || (s = n)
                                b = b.replace(q.match[k], "")
                                if (!m) return []
                                break
                            }
                        }
                    }
                    if (b === h) if (m == null) o.error(b)
                    else break
                    h = b
                }
                return s
            }
            o.error = function (b) {
                throw "Syntax error, unrecognized expression: " + b
            }
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
                            f = f && !e
                            e && (a = a.toLowerCase())
                            for (var e = 0, l = b.length, g; e < l; e++) if (g = b[e]) {
                                for (
                                (g = g.previousSibling) && g.nodeType !== 1;)
                                b[e] = f || g && g.nodeName.toLowerCase() === a ? g || !1 : g === a
                            }
                        f && o.filter(a, b, !0)
                    },
                    ">": function (b, a) {
                        var f, e = typeof a == "string",
                            l = 0,
                            g = b.length
                        if (e && !p.test(a)) for (a = a.toLowerCase(); l < g; l++) {
                            if (f = b[l]) f = f.parentNode, b[l] = f.nodeName.toLowerCase() === a ? f : !1
                        } else {
                            for (; l < g; l++)(f = b[l]) && (b[l] = e ? f.parentNode : f.parentNode === a)
                            e && o.filter(a, b, !0)
                        }
                    },
                    "": function (f, e, g) {
                        var m, n = h++,
                            j = b
                            typeof e == "string" && !p.test(e) && (e = e.toLowerCase(), m = e, j = a)
                            j("parentNode", e, n, f, m, g)
                    },
                    "~": function (f, e, g) {
                        var m, n = h++,
                            j = b
                            typeof e == "string" && !p.test(e) && (e = e.toLowerCase(), m = e, j = a)
                            j("previousSibling", e, n, f, m, g)
                    }
                },
                find: {
                    ID: function (b, a, f) {
                        if (typeof a.getElementById != "undefined" && !f) return (b = a.getElementById(b[1])) && b.parentNode ? [b] : []
                    },
                    NAME: function (b, a) {
                        if (typeof a.getElementsByName != "undefined") {
                            for (var f = [], e = a.getElementsByName(b[1]), l = 0, g = e.length; l < g; l++) e[l].getAttribute("name") === b[1] && f.push(e[l])
                            return f.length === 0 ? null : f
                        }
                    },
                    TAG: function (b, a) {
                        if (typeof a.getElementsByTagName != "undefined") return a.getElementsByTagName(b[1])
                    }
                },
                preFilter: {
                    CLASS: function (b, a, f, e, l, g) {
                        b = " " + b[1].replace(r, "") + " "
                        if (g) return b
                        for (var g = 0, m(m = a[g]) != null; g++) m && (l ^ (m.className && (" " + m.className + " ").replace(/[\t\n\r]/g, " ").indexOf(b) >= 0) ? f || e.push(m) : f && (a[g] = !1))
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
                            b[2] || o.error(b[0])
                            b[2] = b[2].replace(/^\+|\s*/g, "")
                            var a = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(b[2] === "even" && "2n" || b[2] === "odd" && "2n+1" || !/\D/.test(b[2]) && "0n+" + b[2] || b[2])
                            b[2] = a[1] + (a[2] || 1) - 0
                            b[3] = a[3] - 0
                        } else b[2] && o.error(b[0])
                        b[0] = h++
                        return b
                    },
                    ATTR: function (b, a, f, e, l, g) {
                        a = b[1] = b[1].replace(r, "")!g && q.attrMap[a] && (b[1] = q.attrMap[a])
                        b[4] = (b[4] || b[5] || "").replace(r, "")
                        b[2] === "~=" && (b[4] = " " + b[4] + " ")
                        return b
                    },
                    PSEUDO: function (b, a, f, e, l) {
                        if (b[1] === "not") if ((g.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = o(b[3], null, null, a)
                        else return b = o.filter(b[3], a, f, 1 ^ l), f || e.push.apply(e, b), !1
                        else if (q.match.POS.test(b[0]) || q.match.CHILD.test(b[0])) return !0
                        return b
                    },
                    POS: function (b) {
                        b.unshift(!0)
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
                            f = b.type
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
                        var a = b.nodeName.toLowerCase()
                        return (a === "input" || a === "button") && "submit" === b.type
                    },
                    image: function (b) {
                        return b.nodeName.toLowerCase() === "input" && "image" === b.type
                    },
                    reset: function (b) {
                        var a = b.nodeName.toLowerCase()
                        return (a === "input" || a === "button") && "reset" === b.type
                    },
                    button: function (b) {
                        var a = b.nodeName.toLowerCase()
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
                            g = q.filters[l]
                        if (g) return g(b, f, a, e)
                        if (l === "contains") return (b.textContent || b.innerText || o.getText([b]) || "").indexOf(a[3]) >= 0
                        if (l === "not") {
                            a = a[3]
                            f = 0
                            for (e = a.length; f < e; f++) if (a[f] === b) return !1
                            return !0
                        }
                        o.error(l)
                    },
                    CHILD: function (b, a) {
                        var f = a[1],
                            e = b
                        switch (f) {
                        case "only":
                        case "first":
                            for (; e = e.previousSibling;) if (e.nodeType === 1) return !1
                            if (f === "first") return !0
                            e = b
                        case "last":
                            for (; e = e.nextSibling;) if (e.nodeType === 1) return !1
                            return !0
                        case "nth":
                            var f = a[2],
                                l = a[3]
                            if (f === 1 && l === 0) return !0
                            var g = a[0],
                                m = b.parentNode
                            if (m && (m.sizcache !== g || !b.nodeIndex)) {
                                for (var h = 0, e = m.firstChild; e; e = e.nextSibling) e.nodeType === 1 && (e.nodeIndex = ++h)
                                m.sizcache = g
                            }
                            e = b.nodeIndex - l
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
                            g = a[4]
                        return f == null ? l === "!=" : l === "=" ? e === g : l === "*=" ? e.indexOf(g) >= 0 : l === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? l === "!=" ? e !== g : l === "^=" ? e.indexOf(g) === 0 : l === "$=" ? e.substr(e.length - g.length) === g : l === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && f !== !1
                    },
                    POS: function (b, a, f, e) {
                        var l = q.setFilters[a[2]]
                        if (l) return l(b, f, a, e)
                    }
                }
            },
                F = q.match.POS,
                u = function (b, a) {
                    return "\\" + (a - 0 + 1)
                },
                R
            for (R in q.match) q.match[R] = RegExp(q.match[R].source + /(?![^\[]*\])(?![^\(]*\))/.source), q.leftMatch[R] = RegExp(/(^(?:.|\r|\n)*?)/.source + q.match[R].source.replace(/\\(\d+)/g, u))
            var v = function (b, a) {
                    b = Array.prototype.slice.call(b, 0)
                    if (a) return a.push.apply(a, b), a
                    return b
                }
            try {
                Array.prototype.slice.call(t.documentElement.childNodes, 0)
            } catch (Q) {
                v = function (b, a) {
                    var f = 0,
                        e = a || []
                    if (n.call(b) === "[object Array]") Array.prototype.push.apply(e, b)
                    else if (typeof b.length == "number") for (var l = b.length; f < l; f++) e.push(b[f])
                    else for (; b[f]; f++) e.push(b[f])
                    return e
                }
            }
            var w, A
            t.documentElement.compareDocumentPosition ? w = function (b, a) {
                    if (b === a) return j = !0, 0
                    if (!b.compareDocumentPosition || !a.compareDocumentPosition) return b.compareDocumentPosition ? -1 : 1
                    return b.compareDocumentPosition(a) & 4 ? -1 : 1
                } : (w = function (b, a) {
                    if (b === a) return j = !0, 0
                    if (b.sourceIndex && a.sourceIndex) return b.sourceIndex - a.sourceIndex
                    var f, e, l = [],
                        g = []
                        f = b.parentNode
                        e = a.parentNode
                    var m = f
                    if (f === e) return A(b, a)
                    if (!f) return -1
                    if (!e) return 1
                    for (; m;) l.unshift(m), m = m.parentNode
                    for (m = e; m;) g.unshift(m), m = m.parentNode
                    f = l.length
                    e = g.length
                    for (m = 0; m < f && m < e; m++) if (l[m] !== g[m]) return A(l[m], g[m])
                    return m === f ? A(b, g[m], -1) : A(l[m], a, 1)
                }, A = function (b, a, f) {
                    if (b === a) return f
                    for (b = b.nextSibling; b;) {
                        if (b === a) return -1
                        b = b.nextSibling
                    }
                    return 1
                })
                o.getText = function (b) {
                    for (var a = "", f, e = 0; b[e]; e++) f = b[e], f.nodeType === 3 || f.nodeType === 4 ? a += f.nodeValue : f.nodeType !== 8 && (a += o.getText(f.childNodes))
                    return a
                }
                (function () {
                    var b = t.createElement("div"),
                        a = "script" + (new Date).getTime(),
                        f = t.documentElement
                        b.innerHTML = "<a name='" + a + "'/>"
                    f.insertBefore(b, f.firstChild)
                    t.getElementById(a) && (q.find.ID = function (b, a, f) {
                        if (typeof a.getElementById != "undefined" && !f) return (a = a.getElementById(b[1])) ? a.id === b[1] || typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id").nodeValue === b[1] ? [a] : e : []
                    }, q.filter.ID = function (b, a) {
                        var f = typeof b.getAttributeNode != "undefined" && b.getAttributeNode("id")
                        return b.nodeType === 1 && f && f.nodeValue === a
                    })
                    f.removeChild(b)
                    f = b = null
                })()
                (function () {
                    var b = t.createElement("div")
                    b.appendChild(t.createComment(""))
                    b.getElementsByTagName("*").length > 0 && (q.find.TAG = function (b, a) {
                        var f = a.getElementsByTagName(b[1])
                        if (b[1] === "*") {
                            for (var e = [], l = 0; f[l]; l++) f[l].nodeType === 1 && e.push(f[l])
                            f = e
                        }
                        return f
                    })
                    b.innerHTML = "<a href='#'></a>"
                    b.firstChild && typeof b.firstChild.getAttribute != "undefined" && b.firstChild.getAttribute("href") !== "#" && (q.attrHandle.href = function (b) {
                        return b.getAttribute("href", 2)
                    })
                    b = null
                })()
                t.querySelectorAll && (function () {
                    var b = t.documentElement,
                        a = b.matchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.msMatchesSelector
                    if (a) {
                        var f = !a.call(t.createElement("div"), "div"),
                            e = !1
                        try {
                            a.call(t.documentElement, "[test!='']:sizzle")
                        } catch (l) {
                            e = !0
                        }
                        o.matchesSelector = function (b, l) {
                            l = l.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")
                            if (!o.isXML(b)) try {
                                if (e || !q.match.PSEUDO.test(l) && !/!=/.test(l)) {
                                    var g = a.call(b, l)
                                    if (g || !f || b.document && b.document.nodeType !== 11) return g
                                }
                            } catch (m) {}
                            return o(l, null, null, [b]).length > 0
                        }
                    }
                })()
                (function () {
                    var b = t.createElement("div")
                    b.innerHTML = "<div class='test e'></div><div class='test'></div>"
                    if (b.getElementsByClassName && b.getElementsByClassName("e").length !== 0 && (b.lastChild.className = "e", b.getElementsByClassName("e").length !== 1)) q.order.splice(1, 0, "CLASS"), q.find.CLASS = function (b, a, f) {
                        if (typeof a.getElementsByClassName != "undefined" && !f) return a.getElementsByClassName(b[1])
                    }, b = null
                })()
                t.documentElement.contains ? o.contains = function (b, a) {
                    return b !== a && (b.contains ? b.contains(a) : !0)
                } : t.documentElement.compareDocumentPosition ? o.contains = function (b, a) {
                    return !!(b.compareDocumentPosition(a) & 16)
                } : o.contains = function () {
                    return !1
                }
            o.isXML = function (b) {
                return (b = (b ? b.ownerDocument || b : 0).documentElement) ? b.nodeName !== "HTML" : !1
            }
            var P = function (b, a) {
                    for (var f, e = [], l = "", g = a.nodeType ? [a] : a; f = q.match.PSEUDO.exec(b);) l += f[0], b = b.replace(q.match.PSEUDO, "")
                    b = q.relative[b] ? b + "*" : b
                    f = 0
                    for (var m = g.length; f < m; f++) o(b, g[f], e)
                    return o.filter(l, e)
                }
            f.find = o
            f.expr = o.selectors
            f.expr[":"] = f.expr.filters
            f.unique = o.uniqueSort
            f.text = o.getText
            f.isXMLDoc = o.isXML
            f.contains = o.contains
        })()
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
        }
    f.fn.extend({
        find: function (b) {
            var a = this,
                e, g
            if (typeof b != "string") return f(b).filter(function () {
                e = 0
                for (g = a.length; e < g; e++) if (f.contains(a[e], this)) return !0
            })
            var h = this.pushStack("", "find", b),
                j, k, r
                e = 0
            for (g = this.length; e < g; e++) if (j = h.length, f.find(b, this[e], h), e > 0) for (k = j; k < h.length; k++) for (r = 0; r < j; r++) if (h[r] === h[k]) {
                h.splice(k--, 1)
                break
            }
            return h
        },
        has: function (b) {
            var a = f(b)
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
                g, h, j = this[0]
            if (f.isArray(b)) {
                var k, r = {},
                    o = 1
                if (j && b.length) {
                    g = 0
                    for (h = b.length; g < h; g++) k = b[g], r[k] || (r[k] = P.test(k) ? f(k, a || this.context) : k)
                    for (; j && j.ownerDocument && j !== a;) {
                        for (k in r) g = r[k], (g.jquery ? g.index(j) > -1 : f(j).is(g)) && e.push({
                            selector: k,
                            elem: j,
                            level: o
                        })
                        j = j.parentNode
                        o++
                    }
                }
                return e
            }
            k = P.test(b) || typeof b != "string" ? f(b, a || this.context) : 0
            g = 0
            for (h = this.length; g < h; g++) for (j = this[g]; j;) {
                if (k ? k.index(j) > -1 : f.find.matchesSelector(j, b)) {
                    e.push(j)
                    break
                }
                j = j.parentNode
                if (!j || !j.ownerDocument || j === a || j.nodeType === 11) break
            }
            e = e.length > 1 ? f.unique(e) : e
            return this.pushStack(e, "closest", b)
        },
        index: function (b) {
            if (!b || typeof b == "string") return f.inArray(this[0], b ? f(b) : this.parent().children())
            return f.inArray(b.jquery ? b[0] : b, this)
        },
        add: function (b, a) {
            var e = typeof b == "string" ? f(b, a) : f.makeArray(b && b.nodeType ? [b] : b),
                g = f.merge(this.get(), e)
                return this.pushStack(!e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 || !g[0] || !g[0].parentNode || g[0].parentNode.nodeType === 11 ? g : f.unique(g))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    })
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
                j = R.call(arguments)
                Oa.test(b) || (g = e)
                g && typeof g == "string" && (h = f.filter(g, h))
                h = this.length > 1 && !N[b] ? f.unique(h) : h(this.length > 1 || z.test(g)) && D.test(b) && (h = h.reverse())
                return this.pushStack(h, b, j.join(","))
        }
    })
    f.extend({
        filter: function (b, a, e) {
            e && (b = ":not(" + b + ")")
            return a.length === 1 ? f.find.matchesSelector(a[0], b) ? [a[0]] : [] : f.find.matches(b, a)
        },
        dir: function (b, a, g) {
            for (var h = [], b = b[a]; b && b.nodeType !== 9 && (g === e || b.nodeType !== 1 || !f(b).is(g));) b.nodeType === 1 && h.push(b), b = b[a]
            return h
        },
        nth: function (b, a, f) {
            for (var a = a || 1, e = 0; b; b = b[f]) if (b.nodeType === 1 && ++e === a) break
            return b
        },
        sibling: function (b, a) {
            for (var f = []; b; b = b.nextSibling) b.nodeType === 1 && b !== a && f.push(b)
            return f
        }
    })
    f.fn.extend({
        text: function (b) {
            if (f.isFunction(b)) return this.each(function (a) {
                var e = f(this)
                e.text(b.call(this, a, e.text()))
            })
            if (typeof b != "object" && b !== e) return this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(b))
            return f.text(this)
        },
        wrapAll: function (b) {
            if (f.isFunction(b)) return this.each(function (a) {
                f(this).wrapAll(b.call(this, a))
            })
            if (this[0]) {
                var a = f(b, this[0].ownerDocument).eq(0).clone(!0)
                this[0].parentNode && a.insertBefore(this[0])
                a.map(function () {
                    for (var b = this; b.firstChild && b.firstChild.nodeType === 1;) b = b.firstChild
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function (b) {
            if (f.isFunction(b)) return this.each(function (a) {
                f(this).wrapInner(b.call(this, a))
            })
            return this.each(function () {
                var a = f(this),
                    e = a.contents()
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
            })
            if (arguments.length) {
                var b = f(arguments[0])
                b.push.apply(b, this.toArray())
                return this.pushStack(b, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            })
            if (arguments.length) {
                var b = this.pushStack(this, "after", arguments)
                b.push.apply(b, f(arguments[0]).toArray())
                return b
            }
        },
        remove: function (b, a) {
            for (var e = 0, g(g = this[e]) != null; e++) if (!b || f.filter(b, [g]).length)!a && g.nodeType === 1 && (f.cleanData(g.getElementsByTagName("*")), f.cleanData([g])), g.parentNode && g.parentNode.removeChild(g) return this
        },
        empty: function () {
            for (var b = 0, a(a = this[b]) != null; b++) for (a.nodeType === 1 && f.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild)
            return this
        },
        clone: function (b, a) {
            b = b == null ? !1 : b
            a = a == null ? b : a
            return this.map(function () {
                return f.clone(this, b, a)
            })
        },
        html: function (b) {
            if (b === e) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(za, "") : null
            if (typeof b == "string" && !$a.test(b) && (f.support.leadingWhitespace || !qa.test(b)) && !V[(Aa.exec(b) || ["", ""])[1].toLowerCase()]) {
                b = b.replace(Pa, "<$1></$2>")
                try {
                    for (var a = 0, g = this.length; a < g; a++) this[a].nodeType === 1 && (f.cleanData(this[a].getElementsByTagName("*")), this[a].innerHTML = b)
                } catch (h) {
                    this.empty().append(b)
                }
            } else f.isFunction(b) ? this.each(function (a) {
                var e = f(this)
                e.html(b.call(this, a, e.html()))
            }) : this.empty().append(b)
            return this
        },
        replaceWith: function (b) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(b)) return this.each(function (a) {
                    var e = f(this),
                        g = e.html()
                        e.replaceWith(b.call(this, a, g))
                })
                typeof b != "string" && (b = f(b).detach())
                return this.each(function () {
                    var a = this.nextSibling,
                        e = this.parentNode
                        f(this).remove()
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
                o = []
            if (!f.support.checkClone && arguments.length === 3 && typeof k == "string" && ab.test(k)) return this.each(function () {
                f(this).domManip(b, a, g, !0)
            })
            if (f.isFunction(k)) return this.each(function (h) {
                var n = f(this)
                b[0] = k.call(this, h, a ? n.html() : e)
                n.domManip(b, a, g)
            })
            if (this[0]) {
                j = k && k.parentNode
                f.support.parentNode && j && j.nodeType === 11 && j.childNodes.length === this.length ? h = {
                    fragment: j
                } : h = f.buildFragment(b, this, o)
                j = h.fragment
                j.childNodes.length === 1 ? n = j = j.firstChild : n = j.firstChild
                if (n) {
                    a = a && f.nodeName(n, "tr")
                    n = 0
                    for (var p = this.length, q = p - 1; n < p; n++) g.call(a ? f.nodeName(this[n], "table") ? this[n].getElementsByTagName("tbody")[0] || this[n].appendChild(this[n].ownerDocument.createElement("tbody")) : this[n] : this[n], h.cacheable || p > 1 && n < q ? f.clone(j, !0, !0) : j)
                }
                o.length && f.each(o, r)
            }
            return this
        }
    })
    f.buildFragment = function (b, a, e) {
        var g, h, j, k
        a && a[0] && (k = a[0].ownerDocument || a[0])
        k.createDocumentFragment || (k = t)
        b.length === 1 && typeof b[0] == "string" && b[0].length < 512 && k === t && b[0].charAt(0) === "<" && !$a.test(b[0]) && (f.support.checkClone || !ab.test(b[0])) && (h = !0, j = f.fragments[b[0]], j && j !== 1 && (g = j))
        g || (g = k.createDocumentFragment(), f.clean(b, k, g, e))
        h && (f.fragments[b[0]] = j ? g : 1)
        return {
            fragment: g,
            cacheable: h
        }
    }
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
                h = this.length === 1 && this[0].parentNode
            if (h && h.nodeType === 11 && h.childNodes.length === 1 && e.length === 1) return e[a](this[0]), this
            for (var h = 0, j = e.length; h < j; h++) {
                var k = (h > 0 ? this.clone(!0) : this).get()
                f(e[h])[a](k)
                g = g.concat(k)
            }
            return this.pushStack(g, b, e.selector)
        }
    })
    f.extend({
        clone: function (b, a, e) {
            var g = b.cloneNode(!0),
                h, j, k
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !f.isXMLDoc(b)) {
                I(b, g)
                h = u(b)
                j = u(g)
                for (k = 0; h[k]; ++k) I(h[k], j[k])
            }
            if (a && (W(b, g), e)) {
                h = u(b)
                j = u(g)
                for (k = 0; h[k]; ++k) W(h[k], j[k])
            }
            return g
        },
        clean: function (b, a, e, g) {
            a = a || t
            typeof a.createElement == "undefined" && (a = a.ownerDocument || a[0] && a[0].ownerDocument || t)
            for (var h = [], j, k = 0, r(r = b[k]) != null; k++) if (typeof r == "number" && (r += ""), r) {
                if (typeof r == "string") if (rb.test(r)) {
                    r = r.replace(Pa, "<$1></$2>")
                    j = (Aa.exec(r) || ["", ""])[1].toLowerCase()
                    var o = V[j] || V._default,
                        p = o[0],
                        q = a.createElement("div")
                        for (q.innerHTML = o[1] + r + o[2]; p--;) q = q.lastChild
                    if (!f.support.tbody) {
                        p = qb.test(r)
                        o = j === "table" && !p ? q.firstChild && q.firstChild.childNodes : o[1] === "<table>" && !p ? q.childNodes : []
                        for (j = o.length - 1; j >= 0; --j) f.nodeName(o[j], "tbody") && !o[j].childNodes.length && o[j].parentNode.removeChild(o[j])
                    }!f.support.leadingWhitespace && qa.test(r) && q.insertBefore(a.createTextNode(qa.exec(r)[0]), q.firstChild)
                    r = q.childNodes
                } else r = a.createTextNode(r)
                var u
                if (!f.support.appendChecked) if (r[0] && typeof (u = r.length) == "number") for (j = 0; j < u; j++) Q(r[j])
                else Q(r)
                r.nodeType ? h.push(r) : h = f.merge(h, r)
            }
            if (e) {
                b = function (b) {
                    return !b.type || tb.test(b.type)
                }
                for (k = 0; h[k]; k++) g && f.nodeName(h[k], "script") && (!h[k].type || h[k].type.toLowerCase() === "text/javascript") ? g.push(h[k].parentNode ? h[k].parentNode.removeChild(h[k]) : h[k]) : (h[k].nodeType === 1 && (a = f.grep(h[k].getElementsByTagName("script"), b), h.splice.apply(h, [k + 1, 0].concat(a))), e.appendChild(h[k]))
            }
            return h
        },
        cleanData: function (b) {
            for (var a, e, g = f.cache, h = f.expando, j = f.event.special, k = f.support.deleteExpando, r = 0, o(o = b[r]) != null; r++) if (!o.nodeName || !f.noData[o.nodeName.toLowerCase()]) if (e = o[f.expando]) {
                if ((a = g[e] && g[e][h]) && a.events) {
                    for (var p in a.events) j[p] ? f.event.remove(o, p) : f.removeEvent(o, p, a.handle)
                    a.handle && (a.handle.elem = null)
                }
                k ? delete o[f.expando] : o.removeAttribute && o.removeAttribute(f.expando)
                delete g[e]
            }
        }
    })
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
        ua, db, eb
        f.fn.css = function (b, a) {
            if (arguments.length === 2 && a === e) return this
            return f.access(this, b, a, !0, function (b, a, g) {
                return g !== e ? f.style(b, a, g) : f.css(b, a)
            })
        }
    f.extend({
        cssHooks: {
            opacity: {
                get: function (b, a) {
                    if (a) {
                        var f = ua(b, "opacity", "opacity")
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
                    a = f.cssProps[j] || j
                if (g === e) {
                    if (r && "get" in r && (n = r.get(b, !1, h)) !== e) return n
                    return k[a]
                }
                h = typeof g
                if (!(h === "number" && isNaN(g) || g == null)) if (h === "string" && xb.test(g) && (g = +g.replace(yb, "") + parseFloat(f.css(b, a)), h = "number"), h === "number" && !f.cssNumber[j] && (g += "px"), !r || !("set" in r) || (g = r.set(b, g)) !== e) try {
                    k[a] = g
                } catch (o) {}
            }
        },
        css: function (b, a, g) {
            var h, j, a = f.camelCase(a)
            j = f.cssHooks[a]
            a = f.cssProps[a] || a
            a === "cssFloat" && (a = "float")
            if (j && "get" in j && (h = j.get(b, !0, g)) !== e) return h
            if (ua) return ua(b, a)
        },
        swap: function (b, a, f) {
            var e = {},
                g
            for (g in a) e[g] = b.style[g], b.style[g] = a[g]
            f.call(b)
            for (g in a) b.style[g] = e[g]
        }
    })
    t.defaultView && t.defaultView.getComputedStyle && (db = function (b, a) {
        var g, h, a = a.replace(vb, "-$1").toLowerCase()
        if (!(h = b.ownerDocument.defaultView)) return e
        if (h = h.getComputedStyle(b, null)) g = h.getPropertyValue(a), g === "" && !f.contains(b.ownerDocument.documentElement, b) && (g = f.style(b, a))
        return g
    })
    ua = db || eb
    var Ra = {},
        ca, ta, Lb = /^(?:toggle|show|hide)$/,
        Mb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        Ca, Ya = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        Ka, Xa = a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame
        f.fn.extend({
            show: function (b, a, e) {
                var g
                if (b || b === 0) return this.animate(k("show", 3), b, a, e)
                a = 0
                for (e = this.length; a < e; a++) b = this[a], b.style && (g = b.style.display, !f._data(b, "olddisplay") && g === "none" && (g = b.style.display = ""), g === "" && f.css(b, "display") === "none" && f._data(b, "olddisplay", h(b.nodeName)))
                for (a = 0; a < e; a++) if (b = this[a], b.style && (g = b.style.display, g === "" || g === "none")) b.style.display = f._data(b, "olddisplay") || ""
                return this
            },
            hide: function (b, a, e) {
                if (b || b === 0) return this.animate(k("hide", 3), b, a, e)
                b = 0
                for (a = this.length; b < a; b++) this[b].style && (e = f.css(this[b], "display"), e !== "none" && !f._data(this[b], "olddisplay") && f._data(this[b], "olddisplay", e))
                for (b = 0; b < a; b++) this[b].style && (this[b].style.display = "none")
                return this
            },
            _toggle: f.fn.toggle,
            toggle: function (b, a, e) {
                var g = typeof b == "boolean"
                f.isFunction(b) && f.isFunction(a) ? this._toggle.apply(this, arguments) : b == null || g ? this.each(function () {
                    var a = g ? b : f(this).is(":hidden")
                    f(this)[a ? "show" : "hide"]()
                }) : this.animate(k("toggle", 3), b, a, e)
                return this
            },
            fadeTo: function (b, a, f, e) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                    opacity: a
                }, b, f, e)
            },
            animate: function (b, a, e, g) {
                var j = f.speed(a, e, g)
                if (f.isEmptyObject(b)) return this.each(j.complete, [!1])
                b = f.extend({}, b)
                return this[j.queue === !1 ? "each" : "queue"](function () {
                    var n
                    j.queue === !1 && f._mark(this)
                    var a = f.extend({}, j),
                        e = this.nodeType === 1,
                        g = e && f(this).is(":hidden"),
                        l, m, k, r, o, s, p, q
                        a.animatedProperties = {}
                    for (k in b) {
                        l = f.camelCase(k)
                        k !== l && (b[l] = b[k], delete b[k])
                        m = b[l]
                        f.isArray(m) ? (a.animatedProperties[l] = m[1], n = b[l] = m[0], m = n) : a.animatedProperties[l] = a.specialEasing && a.specialEasing[l] || a.easing || "swing"
                        if (m === "hide" && g || m === "show" && !g) return a.complete.call(this)
                        e && (l === "height" || l === "width") && (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (f.support.inlineBlockNeedsLayout ? (r = h(this.nodeName), r === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                    }
                    a.overflow != null && (this.style.overflow = "hidden")
                    for (k in b) e = new f.fx(this, a, k), m = b[k], Lb.test(m) ? e[m === "toggle" ? g ? "show" : "hide" : m]() : (o = Mb.exec(m), s = e.cur(), o ? (p = parseFloat(o[2]), q = o[3] || (f.cssNumber[k] ? "" : "px"), q !== "px" && (f.style(this, k, (p || 1) + q), s *= (p || 1) / e.cur(), f.style(this, k, s + q)), o[1] && (p = (o[1] === "-=" ? -1 : 1) * p + s), e.custom(s, p, q)) : e.custom(s, m, ""))
                    return !0
                })
            },
            stop: function (b, a) {
                b && this.queue([])
                this.each(function () {
                    var b = f.timers,
                        e = b.length
                    for (a || f._unmark(!0, this); e--;) b[e].elem === this && (a && b[e](!0), b.splice(e, 1))
                })
                a || this.dequeue()
                return this
            }
        })
        f.each(["Height", "Width"], function (b, a) {
            var g = a.toLowerCase()
            f.fn["inner" + a] = function () {
                    var b = this[0]
                    return b && b.style ? parseFloat(f.css(b, g, "padding")) : null
                }
            f.fn["outer" + a] = function (b) {
                var a = this[0]
                return a && a.style ? parseFloat(f.css(a, g, b ? "margin" : "border")) : null
            }
            f.fn[g] = function (b) {
                var h = this[0]
                if (!h) return b == null ? null : this
                if (f.isFunction(b)) return this.each(function (a) {
                    var e = f(this)
                    e[g](b.call(this, a, e[g]()))
                })
                if (f.isWindow(h)) {
                    var j = h.document.documentElement["client" + a]
                    return h.document.compatMode === "CSS1Compat" && j || h.document.body["client" + a] || j
                }
                if (h.nodeType === 9) return Math.max(h.documentElement["client" + a], h.body["scroll" + a], h.documentElement["scroll" + a], h.body["offset" + a], h.documentElement["offset" + a])
                if (b === e) return h = f.css(h, g), j = parseFloat(h), f.isNaN(j) ? h : j
                return this.css(g, typeof b == "string" ? b : b + "px")
            }
        })
        a.jQuery = a.$ = f
})(window)

function simpleInit() {
    map_div = dId("mapDiv")
    bgSize()
    map = new google.maps.Map(map_div)
    google.maps.event.addListenerOnce(map, "idle", function () {
        $(map_div).css("overflow") != "visible" && ($(map_div).css("overflow", "visible"), $(map_div).children().css("overflow", "visible").css("z-index", 0).children().css("overflow", "visible").css("z-index", 0), $("#topBar").css("z-index", 99), $("#topBG").css("z-index", 99).css("height", $("#topBar").outerHeight()))
    })
    window.onorientationchange = function () {
        bgSize()
    }
    window.onresize = function () {
        bgSize()
    }
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
        O = $("#searchForm")
        $(map_div).outerWidth() < 700 && a.css("width", 150)
        $(map_div).outerWidth() < 600 ? (e.css("font-size", "13px").css("font-weight", "bold"), g.css("font-size", "10px"), k.css("font-size", "11px"), q.css("width", $(map_div).outerWidth() + "px"), q.outerHeight() && q.css("height", u.outerWidth() >= 728 ? 28 : 64), w.hide(), S.css("overflow", "hidden"), g.height() || g.hide(), W.hide()) : (w.show(), W.show())
        k.outerHeight() || g.css("text-align", "center")
        e.show()
        v.show()
        r.show()
        $(map_div).css("height", $(window).height() - (o.outerHeight() + p.outerHeight() + (G.outerHeight() ? u.outerWidth() >= 728 ? 28 : u.outerWidth() <= 234 ? 0 : 64 : 0) + h.outerHeight()))
        $(window).height() < 359 && (h.hide(), p.hide(), G.hide(), $(map_div).css("height", $(window).height() - o.outerHeight()))
        h.css("top", o.outerHeight())
        I.css("top", o.outerHeight())
        u.css("height", $(map_div).outerHeight() + o.outerHeight() + p.outerHeight() + h.outerHeight() + G.outerHeight())
        Q.css("top", u.outerHeight() + o.outerHeight())
        A.css("height", $(map_div).height())
}

function dId(a) {
    return document.getElementById(a)
}