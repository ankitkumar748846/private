(function(g) {
    var window = this;
    'use strict';
    var a8 = function(a) {
            g.xp(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.nb()).toString(36));
            return a
        },
        b8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Ega(a.B, b, c)
        },
        Wxb = function(a) {
            if (a instanceof g.mt) return a;
            if ("function" == typeof a.yk) return a.yk(!1);
            if (g.bb(a)) {
                var b = 0,
                    c = new g.mt;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.K2;
                        if (b in a) return g.nt(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Xxb = function(a, b, c) {
            if (g.bb(a)) g.ac(a, b, c);
            else
                for (a = Wxb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Yxb = function(a, b) {
            var c = [];
            Xxb(b, function(d) {
                try {
                    var e = g.Hv.prototype.B.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.sla(e) && c.push(d)
            }, a);
            return c
        },
        Zxb = function(a, b) {
            Yxb(a, b).forEach(function(c) {
                g.Hv.prototype.remove.call(this, c)
            }, a)
        },
        $xb = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        ayb = function(a, b) {
            g.Gb(a, b) || a.push(b)
        },
        byb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        cyb = function(a, b) {
            return g.kd(a, b)
        },
        dyb = function(a) {
            try {
                return g.Sa.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        c8 = function(a) {
            if (g.Sa.JSON) try {
                return g.Sa.JSON.parse(a)
            } catch (b) {}
            return dyb(a)
        },
        eyb = function(a) {
            if (a.Xl && "function" == typeof a.Xl) return a.Xl();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
            if ("string" === typeof a) return a.split("");
            if (g.bb(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.gd(a)
        },
        fyb = function(a) {
            if (a.kp && "function" == typeof a.kp) return a.kp();
            if (!a.Xl || "function" != typeof a.Xl) {
                if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (g.bb(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.hd(a)
                }
            }
        },
        gyb = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (g.bb(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = fyb(a), d = eyb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        hyb = function(a, b, c, d) {
            var e = new g.Go(null);
            a && g.Ho(e, a);
            b && g.Io(e, b);
            c && g.Jo(e, c);
            d && (e.C = d);
            return e
        },
        iyb = function() {
            this.j = d8();
            this.j.zk("/client_streamz/youtube/living_room/mdx/channel/opened", {
                We: 3,
                Ve: "channel_type"
            })
        },
        jyb = function(a, b) {
            a.j.Ll("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        kyb = function() {
            this.j = d8();
            this.j.zk("/client_streamz/youtube/living_room/mdx/channel/closed", {
                We: 3,
                Ve: "channel_type"
            })
        },
        lyb = function(a, b) {
            a.j.Ll("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        myb = function() {
            this.j = d8();
            this.j.zk("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                We: 3,
                Ve: "channel_type"
            })
        },
        nyb = function(a, b) {
            a.j.Ll("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        oyb = function() {
            this.j = d8();
            this.j.zk("/client_streamz/youtube/living_room/mdx/channel/error", {
                We: 3,
                Ve: "channel_type"
            })
        },
        pyb = function(a, b) {
            a.j.Ll("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        qyb = function() {
            this.j = d8();
            this.j.zk("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        ryb = function() {
            this.j = d8();
            this.j.zk("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        vyb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.ov;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", syb(this, a.capabilities || ""), tyb(this, a.compatibleSenderThemes || ""), uyb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        syb = function(a, b) {
            a.capabilities.clear();
            g.rt(b.split(","), g.kb(cyb, wyb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        tyb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.rt(b.split(","), g.kb(cyb, xyb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        uyb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        e8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        f8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        yyb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        zyb = function(a) {
            return new e8(a)
        },
        Ayb = function(a) {
            return Array.isArray(a) ? g.Fr(a, zyb) : []
        },
        g8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        Byb = function(a) {
            return Array.isArray(a) ? "[" + g.Fr(a, g8).join(",") + "]" : "null"
        },
        Cyb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        Dyb = function(a) {
            return g.Fr(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Eyb = function(a, b) {
            return g.Db(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        h8 = function(a, b) {
            return g.Db(a, function(c) {
                return f8(c, b)
            })
        },
        Fyb = function() {
            var a = (0, g.nD)();
            a && Zxb(a, a.j.yk(!0))
        },
        i8 = function() {
            var a = g.pD("yt-remote-connected-devices") || [];
            g.Wb(a);
            return a
        },
        Gyb = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Fr(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        Hyb = function(a) {
            g.oD("yt-remote-connected-devices", a, 86400)
        },
        j8 = function() {
            if (Iyb) return Iyb;
            var a = g.pD("yt-remote-device-id");
            a || (a = Cyb(), g.oD("yt-remote-device-id", a, 31536E3));
            for (var b = i8(), c = 1, d = a; g.Gb(b, d);) c++, d = a + "#" + c;
            return Iyb = d
        },
        Jyb = function() {
            var a = i8(),
                b = j8();
            g.rD() && g.$b(a, b);
            a = Gyb(a);
            if (0 == a.length) try {
                g.Foa("remote_sid")
            } catch (c) {} else try {
                g.GC("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        Kyb = function() {
            return g.pD("yt-remote-session-browser-channel")
        },
        Lyb = function() {
            return g.pD("yt-remote-local-screens") || []
        },
        Myb = function() {
            g.oD("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Nyb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Fr(Lyb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Fr(a, function(d) {
                    return d.loungeToken
                });
            g.Gr(c, function(d) {
                return !g.Gb(b, d)
            }) && Myb();
            g.oD("yt-remote-local-screens", a, 31536E3)
        },
        k8 = function(a) {
            a || (g.qD("yt-remote-session-screen-id"), g.qD("yt-remote-session-video-id"));
            Jyb();
            a = i8();
            g.Ib(a, j8());
            Hyb(a)
        },
        Oyb = function() {
            if (!l8) {
                var a = g.Rv();
                a && (l8 = new g.Ev(a))
            }
        },
        Pyb = function() {
            Oyb();
            return l8 ? !!l8.get("yt-remote-use-staging-server") : !1
        },
        m8 = function(a, b) {
            g.bF[a] = !0;
            var c = g.$E();
            c && c.publish.apply(c, arguments);
            g.bF[a] = !1
        },
        Qyb = function() {},
        d8 = function() {
            if (!n8) {
                n8 = new g.ig(new Qyb);
                var a = g.cC("client_streamz_web_flush_count", -1); - 1 !== a && (n8.D = a)
            }
            return n8
        },
        Ryb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Syb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        Tyb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        o8 = function(a) {
            a.length ? Uyb(a.shift(), function() {
                o8(a)
            }) : Vyb()
        },
        Wyb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        Uyb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.jo(d, g.Fw(a));
            (document.head || document.documentElement).appendChild(d)
        },
        Xyb = function() {
            var a = Ryb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        Vyb = function() {
            var a = Tyb();
            a && a(!1, "No cast extension found")
        },
        Zyb = function() {
            if (Yyb) {
                var a = 2,
                    b = Tyb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                Uyb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Vyb, c)
            }
        },
        $yb = function() {
            Zyb();
            var a = Xyb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        bzb = function() {
            Zyb();
            var a = Xyb();
            a.push.apply(a, g.pa(azb.map(Wyb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        p8 = function(a, b, c) {
            g.I.call(this);
            this.K = null != c ? (0, g.jb)(a, c) : a;
            this.Xi = b;
            this.G = (0, g.jb)(this.X1, this);
            this.j = !1;
            this.B = 0;
            this.C = this.hd = null;
            this.D = []
        },
        q8 = function(a, b, c) {
            g.I.call(this);
            this.D = null != c ? a.bind(c) : a;
            this.Xi = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.hd = null
        },
        czb = function(a) {
            a.hd = g.gg(function() {
                a.hd = null;
                a.j && !a.B && (a.j = !1, czb(a))
            }, a.Xi);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        r8 = function() {},
        dzb = function() {
            g.Ab.call(this, "p")
        },
        ezb = function() {
            g.Ab.call(this, "o")
        },
        gzb = function() {
            return fzb = fzb || new g.Kd
        },
        hzb = function(a) {
            g.Ab.call(this, "serverreachability", a)
        },
        s8 = function(a) {
            var b = gzb();
            b.dispatchEvent(new hzb(b, a))
        },
        izb = function(a) {
            g.Ab.call(this, "statevent", a)
        },
        t8 = function(a) {
            var b = gzb();
            b.dispatchEvent(new izb(b, a))
        },
        jzb = function(a, b, c, d) {
            g.Ab.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        u8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Sa.setTimeout(function() {
                a()
            }, b)
        },
        v8 = function() {},
        w8 = function(a, b, c, d) {
            this.G = a;
            this.D = b;
            this.Jc = c;
            this.ac = d || 1;
            this.bb = new g.Cp(this);
            this.ub = 45E3;
            a = g.MS ? 125 : void 0;
            this.ib = new g.fg(a);
            this.Na = null;
            this.C = !1;
            this.W = this.Za = this.Z = this.Ta = this.Ba = this.Ib = this.ma = null;
            this.ra = [];
            this.j = null;
            this.K = 0;
            this.N = this.Ea = null;
            this.zb = -1;
            this.La = !1;
            this.qb = 0;
            this.Xa = null;
            this.Zb = this.Ua = this.Rb = this.Fa = !1;
            this.B = new kzb
        },
        kzb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        mzb = function(a, b, c) {
            a.Ta = 1;
            a.Z = a8(b.clone());
            a.W = c;
            a.Fa = !0;
            lzb(a, null)
        },
        lzb = function(a, b) {
            a.Ba = Date.now();
            x8(a);
            a.Za = a.Z.clone();
            b8(a.Za, "t", a.ac);
            a.K = 0;
            var c = a.G.Ta;
            a.B = new kzb;
            a.j = nzb(a.G, c ? b : null, !a.W);
            0 < a.qb && (a.Xa = new q8((0, g.jb)(a.GS, a, a.j), a.qb));
            a.bb.Qa(a.j, "readystatechange", a.b2);
            b = a.Na ? g.qd(a.Na) : {};
            a.W ? (a.Ea || (a.Ea = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Za, a.Ea, a.W, b)) : (a.Ea = "GET", a.j.send(a.Za, a.Ea, null, b));
            s8(1)
        },
        ozb = function(a) {
            return a.j ? "GET" == a.Ea && 2 != a.Ta && a.G.Af : !1
        },
        tzb = function(a, b, c) {
            for (var d = !0, e; !a.La && a.K < c.length;)
                if (e = pzb(a, c), e == qzb) {
                    4 == b &&
                        (a.N = 4, t8(14), d = !1);
                    break
                } else if (e == rzb) {
                a.N = 4;
                t8(15);
                d = !1;
                break
            } else szb(a, e);
            ozb(a) && 0 != a.K && (a.B.j = a.B.j.slice(a.K), a.K = 0);
            4 != b || 0 != c.length || a.B.B || (a.N = 1, t8(16), d = !1);
            a.C = a.C && d;
            d ? 0 < c.length && !a.Zb && (a.Zb = !0, a.G.IP(a)) : (y8(a), z8(a))
        },
        pzb = function(a, b) {
            var c = a.K,
                d = b.indexOf("\n", c);
            if (-1 == d) return qzb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return rzb;
            d += 1;
            if (d + c > b.length) return qzb;
            b = b.slice(d, d + c);
            a.K = d + c;
            return b
        },
        x8 = function(a) {
            a.Ib = Date.now() + a.ub;
            uzb(a, a.ub)
        },
        uzb = function(a, b) {
            if (null != a.ma) throw Error("WatchDog timer not null");
            a.ma = u8((0, g.jb)(a.Y1, a), b)
        },
        A8 = function(a) {
            a.ma && (g.Sa.clearTimeout(a.ma), a.ma = null)
        },
        z8 = function(a) {
            a.G.Mg() || a.La || vzb(a.G, a)
        },
        y8 = function(a) {
            A8(a);
            g.vb(a.Xa);
            a.Xa = null;
            a.ib.stop();
            a.bb.Jf();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        szb = function(a, b) {
            try {
                var c = a.G;
                if (0 != c.Dh && (c.j == a || wzb(c.B, a)))
                    if (!a.Ua && wzb(c.B, a) && 3 == c.Dh) {
                        try {
                            var d = c.Bf.j.parse(b)
                        } catch (x) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) B8(c), C8(c);
                                        else break a;
                                    xzb(c);
                                    t8(18)
                                }
                            }
                            else c.ge = e[1], 0 < c.ge - c.Xa && 37500 > e[2] && c.Ua && 0 == c.ra && !c.ma && (c.ma = u8((0, g.jb)(c.d2, c), 6E3));
                            if (1 >= yzb(c.B) && c.jd) {
                                try {
                                    c.jd()
                                } catch (x) {}
                                c.jd = void 0
                            }
                        } else D8(c, 11)
                    } else if ((a.Ua || c.j == a) && B8(c), !g.gc(b))
                    for (e = c.Bf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Xa = f[0];
                        f = f[1];
                        if (2 == c.Dh)
                            if ("c" == f[0]) {
                                c.D = f[1];
                                c.Zb = f[2];
                                var h = f[3];
                                null != h && (c.HS = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.bb = 1.5 * l);
                                d = c;
                                var m = a.ZN();
                                if (m) {
                                    var n = g.fn(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.jc(n, "spdy") || g.jc(n, "quic") || g.jc(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (zzb(p, p.B), p.B = null))
                                    }
                                    if (d.Fa) {
                                        var q = g.fn(m, "X-HTTP-Session-Id");
                                        q && (d.Ke = q, g.xp(d.Na, d.Fa, q))
                                    }
                                }
                                c.Dh = 3;
                                c.G && c.G.NS();
                                c.Mc && (c.Od = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.wd = Azb(d, d.Ta ? d.Zb : null, d.ac);
                                if (r.Ua) {
                                    Bzb(d.B,
                                        r);
                                    var t = r,
                                        v = d.bb;
                                    v && t.setTimeout(v);
                                    t.ma && (A8(t), x8(t));
                                    d.j = r
                                } else Czb(d);
                                0 < c.C.length && E8(c)
                            } else "stop" != f[0] && "close" != f[0] || D8(c, 7);
                        else 3 == c.Dh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? D8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.MS(f), c.ra = 0)
                    }
                s8(4)
            } catch (x) {}
        },
        Dzb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Ezb = function(a) {
            this.G = a || 10;
            g.Sa.PerformanceNavigationTiming ? (a = g.Sa.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Sa.chrome && g.Sa.chrome.loadTimes && g.Sa.chrome.loadTimes() && g.Sa.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            1 < this.D && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        Fzb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        yzb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        wzb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        zzb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        Bzb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        Gzb = function(a) {
            if (null != a.B) return a.C.concat(a.B.ra);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.C;
                a = g.u(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
                return b
            }
            return g.Lb(a.C)
        },
        Hzb = function(a, b) {
            var c = new v8;
            if (g.Sa.Image) {
                var d = new Image;
                d.onload = g.kb(F8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.kb(F8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.kb(F8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.kb(F8, c, d, "TestLoadImage: timeout", !1, b);
                g.Sa.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        F8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        Izb = function() {
            this.j = new r8
        },
        Jzb = function(a, b, c) {
            var d = c || "";
            try {
                gyb(a, function(e, f) {
                    var h = e;
                    g.cb(e) && (h = g.Vm(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        G8 = function(a, b, c) {
            return c && c.y7 ? c.y7[a] || b : b
        },
        Kzb = function(a) {
            this.C = [];
            this.Zb = this.wd = this.Na = this.ac = this.j = this.Ke = this.Fa = this.La = this.N = this.Ib = this.W = null;
            this.Of = this.Za = 0;
            this.Mf = G8("failFast", !1, a);
            this.Ua = this.ma = this.Z = this.K = this.G = null;
            this.Jc = !0;
            this.ge = this.Xa = -1;
            this.Rb = this.ra = this.Ba = 0;
            this.jh = G8("baseRetryDelayMs", 5E3, a);
            this.Pf = G8("retryDelaySeedMs", 1E4, a);
            this.Nf = G8("forwardChannelMaxRetries", 2, a);
            this.Je = G8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.ze = a && a.onb || void 0;
            this.Af = a && a.lnb || !1;
            this.bb = void 0;
            this.Ta = a && a.Vba || !1;
            this.D = "";
            this.B =
                new Ezb(a && a.pkb);
            this.Bf = new Izb;
            this.ub = a && a.Gkb || !1;
            this.qb = a && a.vkb || !1;
            this.ub && this.qb && (this.qb = !1);
            this.Qf = a && a.hkb || !1;
            a && a.Ikb && (this.Jc = !1);
            this.Mc = !this.ub && this.Jc && a && a.tkb || !1;
            this.kd = void 0;
            a && a.TX && 0 < a.TX && (this.kd = a.TX);
            this.jd = void 0;
            this.Od = 0;
            this.ib = !1;
            this.zb = this.Ea = null
        },
        C8 = function(a) {
            a.j && (Lzb(a), a.j.cancel(), a.j = null)
        },
        Mzb = function(a) {
            C8(a);
            a.Z && (g.Sa.clearTimeout(a.Z), a.Z = null);
            B8(a);
            a.B.cancel();
            a.K && ("number" === typeof a.K && g.Sa.clearTimeout(a.K), a.K = null)
        },
        E8 = function(a) {
            Fzb(a.B) || a.K || (a.K = !0, g.Rf(a.JS, a), a.Ba = 0)
        },
        Ozb = function(a, b) {
            if (yzb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.ra.concat(a.C), !0;
            if (1 == a.Dh || 2 == a.Dh || a.Ba >= (a.Mf ? 0 : a.Nf)) return !1;
            a.K = u8((0, g.jb)(a.JS, a, b), Nzb(a, a.Ba));
            a.Ba++;
            return !0
        },
        Qzb = function(a, b) {
            var c;
            b ? c = b.Jc : c = a.Za++;
            var d = a.Na.clone();
            g.xp(d, "SID", a.D);
            g.xp(d, "RID", c);
            g.xp(d, "AID", a.Xa);
            H8(a, d);
            a.N && a.W && g.Bp(d, a.N, a.W);
            c = new w8(a, a.D, c, a.Ba + 1);
            null === a.N && (c.Na = a.W);
            b && (a.C = b.ra.concat(a.C));
            b = Pzb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Je) + Math.round(.5 * a.Je * Math.random()));
            zzb(a.B, c);
            mzb(c, d, b)
        },
        H8 = function(a, b) {
            a.La && g.bd(a.La, function(c, d) {
                g.xp(b, d, c)
            });
            a.G && gyb({}, function(c, d) {
                g.xp(b, d, c)
            })
        },
        Pzb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.jb)(a.G.e2, a.G, a) : null;
            a: for (var e = a.C, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        Jzb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.C.splice(0, c);
            b.ra = a;
            return d
        },
        Czb = function(a) {
            a.j || a.Z || (a.Rb = 1, g.Rf(a.IS, a), a.ra = 0)
        },
        xzb = function(a) {
            if (a.j || a.Z || 3 <= a.ra) return !1;
            a.Rb++;
            a.Z = u8((0, g.jb)(a.IS, a), Nzb(a, a.ra));
            a.ra++;
            return !0
        },
        Lzb = function(a) {
            null != a.Ea && (g.Sa.clearTimeout(a.Ea), a.Ea = null)
        },
        Rzb = function(a) {
            a.j = new w8(a, a.D, "rpc", a.Rb);
            null === a.N && (a.j.Na = a.W);
            a.j.qb = 0;
            var b = a.wd.clone();
            g.xp(b, "RID", "rpc");
            g.xp(b, "SID", a.D);
            g.xp(b, "AID", a.Xa);
            g.xp(b, "CI", a.Ua ? "0" : "1");
            !a.Ua && a.kd && g.xp(b, "TO", a.kd);
            g.xp(b, "TYPE", "xmlhttp");
            H8(a, b);
            a.N && a.W && g.Bp(b, a.N, a.W);
            a.bb && a.j.setTimeout(a.bb);
            var c = a.j;
            a = a.Zb;
            c.Ta = 1;
            c.Z = a8(b.clone());
            c.W = null;
            c.Fa = !0;
            lzb(c, a)
        },
        B8 = function(a) {
            null != a.ma && (g.Sa.clearTimeout(a.ma), a.ma = null)
        },
        vzb = function(a, b) {
            var c = null;
            if (a.j == b) {
                B8(a);
                Lzb(a);
                a.j = null;
                var d = 2
            } else if (wzb(a.B, b)) c = b.ra, Bzb(a.B, b), d = 1;
            else return;
            if (0 != a.Dh)
                if (b.C)
                    if (1 == d) {
                        c = b.W ? b.W.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = gzb();
                        d.dispatchEvent(new jzb(d, c, b, e));
                        E8(a)
                    } else Czb(a);
            else {
                var f = b.zb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && Ozb(a, b) || 2 == d && xzb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        D8(a, 5);
                        break;
                    case 4:
                        D8(a, 10);
                        break;
                    case 3:
                        D8(a, 6);
                        break;
                    default:
                        D8(a, 2)
                }
            }
        },
        Nzb = function(a, b) {
            var c = a.jh + Math.floor(Math.random() *
                a.Pf);
            a.isActive() || (c *= 2);
            return c * b
        },
        D8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.G && (c = null);
                var d = (0, g.jb)(a.bca, a);
                c || (c = new g.Go("//www.google.com/images/cleardot.gif"), g.Sa.location && "http" == g.Sa.location.protocol || g.Ho(c, "https"), a8(c));
                Hzb(c.toString(), d)
            } else t8(2);
            a.Dh = 0;
            a.G && a.G.LS(b);
            Szb(a);
            Mzb(a)
        },
        Szb = function(a) {
            a.Dh = 0;
            a.zb = [];
            if (a.G) {
                var b = Gzb(a.B);
                if (0 != b.length || 0 != a.C.length) g.Mb(a.zb, b), g.Mb(a.zb, a.C), a.B.C.length = 0, g.Lb(a.C), a.C.length = 0;
                a.G.KS()
            }
        },
        Tzb = function(a) {
            if (0 == a.Dh) return a.zb;
            var b = [];
            g.Mb(b, Gzb(a.B));
            g.Mb(b, a.C);
            return b
        },
        Azb = function(a, b, c) {
            var d = g.yp(c);
            "" != d.j ? (b && g.Io(d, b + "." + d.j), g.Jo(d, d.D)) : (d = g.Sa.location, d = hyb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Fa;
            c = a.Ke;
            b && c && g.xp(d, b, c);
            g.xp(d, "VER", a.HS);
            H8(a, d);
            return d
        },
        nzb = function(a, b, c) {
            if (b && !a.Ta) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.Af && !a.ze ? new g.Zm(new g.Co({
                w_: c
            })) : new g.Zm(a.ze);
            b.K = a.Ta;
            return b
        },
        Uzb = function() {},
        Vzb = function() {
            if (g.gf && !g.Uc(10)) throw Error("Environmental error: no available transport.");
        },
        J8 = function(a, b) {
            g.Kd.call(this);
            this.j = new Kzb(b);
            this.G = a;
            this.B = b && b.m8 || null;
            a = b && b.l8 || null;
            b && b.nkb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.W = a;
            a = b && b.Ilb || null;
            b && b.cY && (a ? a["X-WebChannel-Content-Type"] = b.cY : a = {
                "X-WebChannel-Content-Type": b.cY
            });
            b && b.hV && (a ? a["X-WebChannel-Client-Profile"] = b.hV : a = {
                "X-WebChannel-Client-Profile": b.hV
            });
            this.j.Ib = a;
            (a = b && b.Hlb) && !g.gc(a) && (this.j.N = a);
            this.K = b && b.Vba || !1;
            this.D = b && b.Mmb || !1;
            (b = b && b.t7) && !g.gc(b) && (this.j.Fa = b, g.jd(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new I8(this)
        },
        Wzb = function(a) {
            dzb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.fd(b)) ? g.od(b, this.j) : b : this.data = a
        },
        Xzb = function(a) {
            ezb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        I8 = function(a) {
            this.j = a
        },
        Yzb = function(a, b) {
            this.B = a;
            this.j = b
        },
        Zzb = function(a) {
            return Tzb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? dyb(b) : b) : c = b;
                return c
            })
        },
        K8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Sa.setTimeout(function() {
                a()
            }, b)
        },
        M8 = function(a) {
            L8.dispatchEvent(new $zb(L8, a))
        },
        $zb = function(a) {
            g.Ab.call(this, "statevent", a)
        },
        N8 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.Cp(this);
            this.G = new g.fg;
            this.G.setInterval(250)
        },
        bAb = function(a, b, c) {
            a.wx = 1;
            a.Jr = a8(b.clone());
            a.wu = c;
            a.Fa = !0;
            aAb(a, null)
        },
        cAb = function(a, b, c, d, e) {
            a.wx = 1;
            a.Jr = a8(b.clone());
            a.wu = null;
            a.Fa = c;
            e && (a.a_ = !1);
            aAb(a, d)
        },
        aAb = function(a, b) {
            a.vx = Date.now();
            O8(a);
            a.Lr = a.Jr.clone();
            b8(a.Lr, "t", a.K);
            a.eG = 0;
            a.gj = a.j.nL(a.j.LB() ? b : null);
            0 < a.lL && (a.cG = new q8((0, g.jb)(a.OS, a, a.gj), a.lL));
            a.C.Qa(a.gj, "readystatechange", a.j2);
            b = a.vu ? g.qd(a.vu) : {};
            a.wu ? (a.dG = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.gj.send(a.Lr, a.dG, a.wu, b)) : (a.dG = "GET", a.a_ && !g.Xc && (b.Connection = "close"), a.gj.send(a.Lr, a.dG, null, b));
            a.j.Kn(1)
        },
        fAb = function(a, b) {
            var c = a.eG,
                d = b.indexOf("\n", c);
            if (-1 == d) return dAb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return eAb;
            d += 1;
            if (d + c > b.length) return dAb;
            b = b.slice(d, d + c);
            a.eG = d + c;
            return b
        },
        hAb = function(a, b) {
            a.vx = Date.now();
            O8(a);
            var c = b ? window.location.hostname : "";
            a.Lr = a.Jr.clone();
            g.xp(a.Lr, "DOMAIN", c);
            g.xp(a.Lr, "t", a.K);
            try {
                a.jo = new ActiveXObject("htmlfile")
            } catch (m) {
                P8(a);
                a.Kr = 7;
                M8(22);
                Q8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in R8) f = R8[f];
                        else if (f in gAb) f = R8[f] = gAb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                R8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            c = g.ue(d + "</body></html>");
            a.jo.open();
            a.jo.write(g.te(c));
            a.jo.close();
            a.jo.parentWindow.m = (0, g.jb)(a.baa, a);
            a.jo.parentWindow.d = (0, g.jb)(a.ZY, a, !0);
            a.jo.parentWindow.rpcClose = (0, g.jb)(a.ZY, a, !1);
            c = a.jo.createElement("DIV");
            a.jo.parentWindow.document.body.appendChild(c);
            d = g.ke(a.Lr.toString()) || g.ne;
            d = g.Me(g.de(d));
            d = g.ue('<iframe src="' + d + '"></iframe>');
            g.Lba(c, d);
            a.j.Kn(1)
        },
        O8 = function(a) {
            a.mL = Date.now() + a.B;
            iAb(a, a.B)
        },
        iAb = function(a, b) {
            if (null != a.xx) throw Error("WatchDog timer not null");
            a.xx = K8((0, g.jb)(a.f2, a), b)
        },
        jAb = function(a) {
            a.xx && (g.Sa.clearTimeout(a.xx), a.xx = null)
        },
        Q8 = function(a) {
            a.j.Mg() || a.uu || a.j.fG(a)
        },
        P8 = function(a) {
            jAb(a);
            g.vb(a.cG);
            a.cG = null;
            a.G.stop();
            a.C.Jf();
            if (a.gj) {
                var b = a.gj;
                a.gj = null;
                b.abort();
                b.dispose()
            }
            a.jo && (a.jo = null)
        },
        kAb = function(a, b) {
            try {
                a.j.PS(a, b), a.j.Kn(4)
            } catch (c) {}
        },
        mAb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                lAb(a, b, function(h) {
                    h ? c(!0) : g.Sa.setTimeout(function() {
                        mAb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        lAb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    S8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            g.Sa.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        S8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        nAb = function(a) {
            this.j = a;
            this.B = new r8
        },
        oAb = function(a) {
            var b = T8(a.j, a.rC, "/mail/images/cleardot.gif");
            a8(b);
            mAb(b.toString(), 5E3, (0, g.jb)(a.X4, a), 3, 2E3);
            a.Kn(1)
        },
        pAb = function(a) {
            var b = a.j.K;
            if (null != b) M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
            else if (a.Ij = new N8(a), a.Ij.vu = a.oL, b = a.j, b = T8(b, b.LB() ? a.KB : null, a.pL), M8(5), !g.gf || g.Uc(10)) b8(b, "TYPE", "xmlhttp"), cAb(a.Ij, b, !1, a.KB, !1);
            else {
                b8(b, "TYPE", "html");
                var c = a.Ij;
                a = !!a.KB;
                c.wx = 3;
                c.Jr = a8(b.clone());
                hAb(c, a)
            }
        },
        qAb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new r8;
            this.W = a || null;
            this.K = null != b ? b : null;
            this.Z = c || !1
        },
        rAb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        sAb = function(a, b, c, d) {
            g.Ab.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        tAb = function(a) {
            g.Ab.call(this, "serverreachability", a)
        },
        vAb = function(a) {
            a.l2(1, 0);
            a.gG = T8(a, null, a.qL);
            uAb(a)
        },
        wAb = function(a) {
            a.Zr && (a.Zr.abort(), a.Zr = null);
            a.Ig && (a.Ig.cancel(), a.Ig = null);
            a.cq && (g.Sa.clearTimeout(a.cq), a.cq = null);
            V8(a);
            a.Sj && (a.Sj.cancel(), a.Sj = null);
            a.Mr && (g.Sa.clearTimeout(a.Mr), a.Mr = null)
        },
        xAb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new rAb(a.m2++, b));
            2 != a.j && 3 != a.j || uAb(a)
        },
        yAb = function(a) {
            var b = 0;
            a.Ig && b++;
            a.Sj && b++;
            return b
        },
        uAb = function(a) {
            a.Sj || a.Mr || (a.Mr = K8((0, g.jb)(a.US, a), 0), a.zx = 0)
        },
        BAb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.NB = Math.floor(1E5 * Math.random());
                    b = a.NB++;
                    var c = new N8(a, "", b);
                    c.vu = a.Bo;
                    var d = zAb(a),
                        e = a.gG.clone();
                    g.xp(e, "RID", b);
                    g.xp(e, "CVER", "1");
                    W8(a, e);
                    bAb(c, e, d);
                    a.Sj = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? AAb(a, b) : 0 == a.B.length || a.Sj || AAb(a))
        },
        AAb = function(a, b) {
            if (b)
                if (6 < a.xu) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.NB - 1;
                    b = zAb(a)
                } else c = b.N, b = b.wu;
            else c = a.NB++, b = zAb(a);
            var d = a.gG.clone();
            g.xp(d, "SID", a.D);
            g.xp(d, "RID", c);
            g.xp(d, "AID", a.Ax);
            W8(a, d);
            c = new N8(a, a.D, c, a.zx + 1);
            c.vu = a.Bo;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Sj = c;
            bAb(c, d, b)
        },
        W8 = function(a, b) {
            a.Ni && (a = a.Ni.YS()) && g.bd(a, function(c, d) {
                g.xp(b, d, c)
            })
        },
        zAb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (6 < a.xu && 0 < b) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    YD: void 0
                }, f++) {
                e.YD = a.B[f].j;
                var h = a.B[f].map;
                e.YD = 6 >= a.xu ? f : e.YD - d;
                try {
                    g.bd(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.YD + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.YD + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        CAb = function(a) {
            a.Ig || a.cq || (a.N = 1, a.cq = K8((0, g.jb)(a.SS, a), 0), a.yx = 0)
        },
        EAb = function(a) {
            if (a.Ig || a.cq || 3 <= a.yx) return !1;
            a.N++;
            a.cq = K8((0, g.jb)(a.SS, a), DAb(a, a.yx));
            a.yx++;
            return !0
        },
        U8 = function(a, b, c) {
            a.KK = null == a.K ? c : !a.K;
            a.Co = b.bq;
            a.Z || vAb(a)
        },
        V8 = function(a) {
            null != a.yu && (g.Sa.clearTimeout(a.yu), a.yu = null)
        },
        DAb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        X8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Ni && (c = null);
                var d = (0, g.jb)(a.aca, a);
                c || (c = new g.Go("//www.google.com/images/cleardot.gif"), a8(c));
                lAb(c.toString(), 1E4, d)
            } else M8(2);
            FAb(a, b)
        },
        FAb = function(a, b) {
            a.j = 0;
            a.Ni && a.Ni.VS(b);
            GAb(a);
            wAb(a)
        },
        GAb = function(a) {
            a.j = 0;
            a.Co = -1;
            if (a.Ni)
                if (0 == a.C.length && 0 == a.B.length) a.Ni.rL();
                else {
                    var b = g.Lb(a.C),
                        c = g.Lb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Ni.rL(b, c)
                }
        },
        T8 = function(a, b, c) {
            var d = g.yp(c);
            if ("" != d.j) b && g.Io(d, b + "." + d.j), g.Jo(d, d.D);
            else {
                var e = window.location;
                d = hyb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.MB && g.bd(a.MB, function(f, h) {
                g.xp(d, h, f)
            });
            g.xp(d, "VER", a.xu);
            W8(a, d);
            return d
        },
        HAb = function() {},
        IAb = function() {
            this.j = [];
            this.B = []
        },
        JAb = function(a) {
            g.Ab.call(this, "channelMessage");
            this.message = a
        },
        KAb = function(a) {
            g.Ab.call(this, "channelError");
            this.error = a
        },
        LAb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Y8 = function(a, b) {
            g.I.call(this);
            this.j = new g.Tu(this.T$, 0, this);
            g.M(this, this.j);
            this.Xi = 5E3;
            this.B = 0;
            if ("function" === typeof a) b && (a = (0, g.jb)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.jb)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        MAb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Ba = a;
            this.N = b;
            this.C = new g.Dv;
            this.B = new Y8(this.nba, this);
            this.j = null;
            this.ma = !1;
            this.K = null;
            this.W = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Ta = c;
            this.ra = d;
            this.Ua = e;
            this.Na = new iyb;
            this.Ea = new kyb;
            this.La = new myb;
            this.Fa = new oyb;
            this.Xa = new qyb;
            this.Za = new ryb
        },
        NAb = function(a) {
            if (a.j) {
                var b = a.ra(),
                    c = a.j.Bo || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Bo = c
            }
        },
        Z8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Ol(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Pl(a) || "";
            a = g.pc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.nc(a, "10.0") && (this.B = !1))
        },
        $8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.Vl(c + b, {})
        },
        OAb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.kb(a.D, d, !0),
                onError: g.kb(a.C, e),
                onTimeout: g.kb(a.G, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.xC(b, a)
        },
        PAb = function(a, b) {
            g.Kd.call(this);
            var c = this;
            this.Dd = a();
            this.Dd.subscribe("handlerOpened", this.s2, this);
            this.Dd.subscribe("handlerClosed", this.o2, this);
            this.Dd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Dd.subscribe("handlerMessage", this.q2, this);
            this.j = b
        },
        QAb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new Vzb : e;
            var f = void 0 === f ? new g.Dv : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.G = f;
            this.Z = null;
            this.W = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Y8(function() {
                d.C.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : yzb((new Yzb(h, h.j)).j.B)) && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.ma = !1;
            this.logger = null;
            this.ra = [];
            this.Bg = void 0;
            this.Na = new iyb;
            this.Ea = new kyb;
            this.La = new myb;
            this.Fa = new oyb
        },
        RAb = function(a) {
            g.Ad(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.u(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.ra = [];
                a.oa("webChannelOpened");
                jyb(a.Na, "WEB_CHANNEL")
            });
            g.Ad(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.oa("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : Zzb(new Yzb(b, b.j));
                c && (a.ra = [].concat(g.pa(c)));
                lyb(a.Ea, "WEB_CHANNEL")
            });
            g.Ad(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.oa("webChannelMessage", new LAb(c[0], c[1]));
                a.Bg = b.statusCode;
                nyb(a.La, "WEB_CHANNEL")
            });
            g.Ad(a.channel, "o", function() {
                401 === a.Bg || a.C.start();
                a.oa("webChannelError");
                pyb(a.Fa, "WEB_CHANNEL")
            })
        },
        SAb = function(a) {
            var b = a.Ba();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        TAb = function(a) {
            g.Kd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.w2, this);
            this.j.subscribe("webChannelClosed", this.t2, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.v2, this)
        },
        UAb = function(a, b, c, d, e) {
            function f() {
                return new MAb($8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.bC("enable_mdx_web_channel_desktop") ? new TAb(function() {
                return new QAb($8(a, "/wc"), b, c)
            }) : new PAb(f, e)
        },
        YAb = function() {
            var a = VAb;
            WAb();
            a9.push(a);
            XAb()
        },
        b9 = function(a, b) {
            WAb();
            var c = ZAb(a, String(b));
            0 == a9.length ? $Ab(c) : (XAb(), g.ac(a9, function(d) {
                d(c)
            }))
        },
        c9 = function(a) {
            b9("CP", a)
        },
        WAb = function() {
            a9 || (a9 = g.Va("yt.mdx.remote.debug.handlers_") || [], g.Ua("yt.mdx.remote.debug.handlers_", a9))
        },
        $Ab = function(a) {
            var b = (d9 + 1) % 50;
            d9 = b;
            e9[b] = a;
            f9 || (f9 = 49 == b)
        },
        XAb = function() {
            var a = a9;
            if (e9[0]) {
                var b = f9 ? d9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e9[b];
                    g.ac(a, function(d) {
                        d(c)
                    })
                } while (b != d9);
                e9 = Array(50);
                d9 = -1;
                f9 = !1
            }
        },
        ZAb = function(a, b) {
            var c = (Date.now() - aBb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g9 = function(a) {
            g.zG.call(this);
            this.K = a;
            this.screens = []
        },
        bBb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        cBb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.rt(a.screens, function(f) {
                return !!Eyb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = bBb(a, b[d]) || c;
            return c
        },
        dBb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.rt(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        eBb = function(a, b, c, d, e) {
            g.zG.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.hd = NaN
        },
        i9 = function(a) {
            g9.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            h9(this);
            this.info("Initializing with " + Byb(this.screens))
        },
        fBb = function(a) {
            if (a.screens.length) {
                var b = g.Fr(a.screens, function(d) {
                        return d.id
                    }),
                    c = $8(a.B, "/pairing/get_lounge_token_batch");
                OAb(a.B, c, {
                    screen_ids: b.join(",")
                }, (0, g.jb)(a.R6, a), (0, g.jb)(a.Q6, a))
            }
        },
        h9 = function(a) {
            if (g.bC("deprecate_pair_servlet_enabled")) return cBb(a, []);
            var b = Ayb(Lyb());
            b = g.rt(b, function(c) {
                return !c.uuid
            });
            return cBb(a, b)
        },
        j9 = function(a, b) {
            Nyb(g.Fr(a.screens, yyb));
            b && Myb()
        },
        hBb = function(a, b) {
            g.zG.call(this);
            this.K = b;
            b = (b = g.pD("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Gb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            gBb("Initialized with " + g.Vm(this.j))
        },
        iBb = function(a, b, c) {
            var d = $8(a.G, "/pairing/get_screen_availability");
            OAb(a.G, d, {
                lounge_token: b.token
            }, (0, g.jb)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.jb)(function() {
                c(!1)
            }, a))
        },
        kBb = function(a, b) {
            a: if (byb(b) != byb(a.j)) var c = !1;
                else {
                    c = g.hd(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (gBb("Updated online screens: " + g.Vm(a.j)), a.j = b, a.oa("screenChange"));jBb(a)
        },
        k9 = function(a) {
            isNaN(a.C) || g.uC(a.C);
            a.C = g.sC((0, g.jb)(a.NQ, a), 0 < a.D && a.D < g.nb() ? 2E4 : 1E4)
        },
        gBb = function(a) {
            b9("OnlineScreenService", a)
        },
        lBb = function(a) {
            var b = {};
            g.ac(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.ag("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        jBb = function(a) {
            a = g.hd(g.cd(a.j, function(b) {
                return b
            }));
            g.Wb(a);
            a.length ? g.oD("yt-remote-online-screen-ids", a.join(","), 60) : g.qD("yt-remote-online-screen-ids")
        },
        l9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g9.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            mBb(this)
        },
        oBb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Lk(),
                l = c ? h8(h, c) : null;
            c && (a.N || l) || (l = h8(h, b));
            if (l) {
                l.uuid = b;
                var m = m9(a, l);
                iBb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? nBb(a, c, (0, g.jb)(function(n) {
                var p = m9(this, new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                iBb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        pBb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        qBb = function(a, b, c) {
            iBb(a.j, b, c)
        },
        nBb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.xC($8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        rBb = function(a) {
            a.screens = a.B.Lk();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + Byb(a.screens))
        },
        mBb = function(a) {
            sBb(a);
            a.B = new i9(a.D);
            a.B.subscribe("screenChange", (0, g.jb)(a.b7, a));
            rBb(a);
            a.N || (a.C = Ayb(g.pD("yt-remote-automatic-screen-cache") || []));
            sBb(a);
            a.info("Initializing automatic screens: " + Byb(a.C));
            a.j = new hBb(a.D, (0, g.jb)(a.Lk, a, !0));
            a.j.subscribe("screenChange", (0, g.jb)(function() {
                this.oa("onlineScreenChange")
            }, a))
        },
        m9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = h8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || tBb(a));
            sBb(a);
            a.G[b.uuid] = b.id;
            g.oD("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        tBb = function(a) {
            a = g.rt(a.C, function(b) {
                return "shortLived" != b.idType
            });
            g.oD("yt-remote-automatic-screen-cache", g.Fr(a, yyb))
        },
        sBb = function(a) {
            a.G = g.pD("yt-remote-device-id-map") || {}
        },
        n9 = function(a, b, c) {
            g.zG.call(this);
            this.Fa = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        o9 = function(a, b) {
            a.j = b;
            a.oa("sessionScreen", a.j)
        },
        uBb = function(a, b) {
            a.j && (a.j.token = b, m9(a.D, a.j));
            a.oa("sessionScreen", a.j)
        },
        p9 = function(a, b) {
            b9(a.Fa, b)
        },
        q9 = function(a, b, c) {
            n9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.ra = (0, g.jb)(this.D2, this);
            this.Ea = (0, g.jb)(this.maa, this);
            this.ma = g.sC(function() {
                vBb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ba = !1;
            this.W = "unknown"
        },
        xBb = function(a, b) {
            g.uC(a.N);
            a.N = 0;
            0 == b ? wBb(a) : a.N = g.sC(function() {
                wBb(a)
            }, b)
        },
        wBb = function(a) {
            yBb(a, "getLoungeToken");
            g.uC(a.G);
            a.G = g.sC(function() {
                zBb(a, null)
            }, 3E4)
        },
        yBb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Vm());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.jb)(function() {
                p9(this, "Failed to send message: " + b + ".")
            }, a)) : p9(a, "Sending yt message without session: " + g.Vm(c))
        },
        ABb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.rW(b, function(c) {
                o9(a, c)
            }, function() {
                return a.zj()
            }, 5)) : a.zj(Error("Waiting for session status timed out."))
        },
        CBb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            BBb(a, d, function(e) {
                e ? (a.Ba = !0, m9(a.D, d), o9(a, d), a.W = "unknown", xBb(a, c)) : (g.eC(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.zj())
            }, 5)
        },
        vBb = function(a, b) {
            g.uC(a.ma);
            a.ma = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? CBb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.eC(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), ABb(a, b.screenId))) : (g.eC(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), ABb(a, b.screenId)) :
                ABb(a, b.screenId) : a.zj(Error("Waiting for session status timed out."))
        },
        zBb = function(a, b) {
            g.uC(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.W = c, xBb(a, 3E4)) : (uBb(a, b.loungeToken), a.Ba = !1, a.W = "unknown", xBb(a, b.loungeTokenRefreshIntervalMs))
        },
        BBb = function(a, b, c, d) {
            g.uC(a.K);
            a.K = 0;
            qBb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.sC(function() {
                    BBb(a, b, c, d - 1)
                }, 300)
            })
        },
        DBb = function(a) {
            g.uC(a.Z);
            a.Z = 0;
            g.uC(a.K);
            a.K = 0;
            g.uC(a.ma);
            a.ma = 0;
            g.uC(a.G);
            a.G = 0;
            g.uC(a.N);
            a.N = 0
        },
        r9 = function(a, b, c, d) {
            n9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Ea = "";
            this.Ta = c;
            this.Na = null;
            this.ma = function() {};
            this.W = NaN;
            this.La = (0, g.jb)(this.E2, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.ra = !1;
            this.Ba = "unknown"
        },
        s9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo))
        },
        EBb = function(a) {
            a.G = a.D.aT(a.Ea, a.B.label, a.B.friendlyName, s9(a), function(b, c) {
                a.G = function() {};
                a.ra = !0;
                o9(a, b);
                "shortLived" == b.idType && 0 < c && t9(a, c)
            }, function(b) {
                a.G = function() {};
                a.zj(b)
            })
        },
        FBb = function(a) {
            var b = {};
            b.pairingCode = a.Ea;
            b.theme = a.Ta;
            Pyb() && (b.env_useStageMdx = 1);
            return g.Ul(b)
        },
        GBb = function(a) {
            return new Promise(function(b) {
                a.Ea = Cyb();
                if (a.Na) {
                    var c = new chrome.cast.DialLaunchResponse(!0, FBb(a));
                    b(c);
                    EBb(a)
                } else a.ma = function() {
                    g.uC(a.W);
                    a.ma = function() {};
                    a.W = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, FBb(a));
                    b(d);
                    EBb(a)
                }, a.W = g.sC(function() {
                    a.ma()
                }, 100)
            })
        },
        IBb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            return (new Promise(function(e) {
                HBb(a, d, function(f) {
                    f ? (a.ra = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.eC(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : GBb(a)
            })
        },
        JBb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                oBb(a.D, c, b, d, function(f) {
                    f && f.token && o9(a, f);
                    e(f)
                }, function(f) {
                    p9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : GBb(a)
            })
        },
        HBb = function(a, b, c, d) {
            g.uC(a.K);
            a.K = 0;
            qBb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.sC(function() {
                    HBb(a, b, c, d - 1)
                }, 300)
            })
        },
        t9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            s9(a) && (g.uC(a.N), a.N = 0, 0 == b ? KBb(a) : a.N = g.sC(function() {
                KBb(a)
            }, b))
        },
        KBb = function(a) {
            s9(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, t9(a, 3E4)) : (a.ra = !1, a.Ba = "unknown", uBb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                t9(a, 3E4)
            })
        },
        LBb = function(a) {
            g.uC(a.K);
            a.K = 0;
            g.uC(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.uC(a.W)
        },
        u9 = function(a, b) {
            n9.call(this, a, b, "ManualSession");
            this.C = g.sC((0, g.jb)(this.Hz, this, null), 150)
        },
        v9 = function(a, b) {
            g.zG.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.W = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.jb)(this.f$, this)
        },
        MBb = function(a, b) {
            return b ? g.Db(a.C, function(c) {
                return f8(b, c.label)
            }, a) : null
        },
        w9 = function(a) {
            b9("Controller", a)
        },
        VAb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        x9 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        y9 = function(a, b, c) {
            b != a.j && (g.vb(a.j), (a.j = b) ? (c ? a.oa("yt-remote-cast2-receiver-resumed",
                b.B) : a.oa("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.jb)(a.XY, a, b)), b.subscribe("sessionFailed", function() {
                return NBb(a, b)
            }), b.j ? a.oa("yt-remote-cast2-session-change", b.j) : c && a.j.Hz(null)) : a.oa("yt-remote-cast2-session-change", null))
        },
        NBb = function(a, b) {
            a.j == b && a.oa("yt-remote-cast2-session-failed")
        },
        OBb = function(a) {
            var b = a.B.ZS(),
                c = a.j && a.j.B;
            a = g.Fr(b, function(d) {
                c && f8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = MBb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        VBb = function(a, b, c, d) {
            d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : PBb() ? QBb(b, d) && (RBb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? SBb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? SBb(a, c) : (A9("Failed to load cast API: " + f), TBb(!1), RBb(!1), g.qD("yt-remote-cast-available"), g.qD("yt-remote-cast-receiver"),
                    UBb(), c(!1))
            }, d.loadCastApiSetupScript ? g.Dsa("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Ryb() && $yb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? Vyb() : 89 <= Ryb() ? bzb() : (Zyb(), o8(azb.map(Wyb))))) : z9("Cannot initialize because not running Chrome")
        },
        UBb = function() {
            z9("dispose");
            var a = B9();
            a && a.dispose();
            g.Ua("yt.mdx.remote.cloudview.instance_", null);
            WBb(!1);
            g.eF(XBb);
            XBb.length = 0
        },
        C9 = function() {
            return !!g.pD("yt-remote-cast-installed")
        },
        YBb = function() {
            var a = g.pD("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        ZBb = function() {
            z9("clearCurrentReceiver");
            g.qD("yt-remote-cast-receiver")
        },
        $Bb = function() {
            return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null)
        },
        aCb = function() {
            C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), XBb.push(g.dF("yt-remote-cast2-api-ready", aCb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!")
        },
        E9 = function(a, b) {
            D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.")
        },
        PBb = function() {
            var a = 0 <= g.pc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.kL || a
        },
        bCb = function(a, b) {
            B9().init(a, b)
        },
        QBb = function(a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.oD("yt-remote-cast-available", d);
                m8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.oD("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.oD("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                z9("onSessionChange: " + g8(d));
                d || g.qD("yt-remote-cast-receiver");
                m8("yt-remote-cast2-session-change", d)
            }), g.Ua("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c);
            return c
        },
        B9 = function() {
            return g.Va("yt.mdx.remote.cloudview.instance_")
        },
        SBb = function(a, b) {
            TBb(!0);
            RBb(!1);
            bCb(a, function(c) {
                c ? (WBb(!0), g.fF("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), TBb(!1), g.qD("yt-remote-cast-available"), g.qD("yt-remote-cast-receiver"), UBb());
                b(c)
            })
        },
        z9 = function(a) {
            b9("cloudview", a)
        },
        A9 = function(a) {
            b9("cloudview", a)
        },
        TBb = function(a) {
            z9("setCastInstalled_ " + a);
            g.oD("yt-remote-cast-installed", a)
        },
        D9 = function() {
            return !!g.Va("yt.mdx.remote.cloudview.apiReady_")
        },
        WBb = function(a) {
            z9("setApiReady_ " + a);
            g.Ua("yt.mdx.remote.cloudview.apiReady_", a)
        },
        RBb = function(a) {
            g.Ua("yt.mdx.remote.cloudview.initializing_", a)
        },
        F9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Ok = this.tp = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        cCb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.tp = !1;
            a.Ok = !1;
            a.N = 0;
            a.K = g.nb();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        G9 = function(a) {
            return a.isPlaying() ? (g.nb() - a.K) / 1E3 : 0
        },
        H9 = function(a, b) {
            a.N = b;
            a.K = g.nb()
        },
        I9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.nb() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        J9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && cCb(a)
        },
        dCb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.rd(a.trackData);
            b.hasPrevious = a.tp;
            b.hasNext = a.Ok;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        L9 = function(a, b) {
            g.zG.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new IAb;
            this.B = this.j = null;
            this.W = (0, g.jb)(this.V8, this);
            this.N = (0, g.jb)(this.iE, this);
            this.Z = (0, g.jb)(this.U8, this);
            this.ma = (0, g.jb)(this.Y8, this);
            var d = 0;
            a ? (d = a.getProxyState(), 3 != d && (a.subscribe("proxyStateChange", this.kR, this), eCb(this))) : d = 3;
            0 != d && (b ? this.kR(d) : g.sC(function() {
                c.kR(d)
            }, 0));
            (a = $Bb()) && K9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ma)
        },
        M9 = function(a) {
            return new F9(a.D.getPlayerContextData())
        },
        eCb = function(a) {
            g.ac("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.kb(this.d$, b), this))
            }, a)
        },
        fCb = function(a) {
            g.ac(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        N9 = function(a) {
            return 1 == a.getState()
        },
        O9 = function(a, b) {
            var c = a.G;
            50 > c.j.length + c.B.length && a.G.B.push(b)
        },
        gCb = function(a, b, c) {
            var d = M9(a);
            H9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            P9(a, d)
        },
        Q9 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        P9 = function(a, b) {
            fCb(a);
            a.D.setPlayerContextData(dCb(b));
            eCb(a)
        },
        K9 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.W), a.B.removeMediaListener(a.N), a.iE(null));
            a.B = b;
            a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.W), a.B.addMediaListener(a.N), a.B.media.length && a.iE(a.B.media[0]))
        },
        hCb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = M9(a);
                b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                H9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else c9("No cast media video. Ignoring state update.")
        },
        R9 = function(a, b, c) {
            return (0, g.jb)(function(d) {
                this.ag("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.ag("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        },
        U9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.zG.call(this);
            var e = this;
            this.K = NaN;
            this.Ea = !1;
            this.W = this.Z = this.ra = this.Ba = NaN;
            this.ma = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Na = a;
            this.La = d;
            this.ma.push(g.fD(window, "beforeunload", function() {
                e.Py(2)
            }));
            this.C = [];
            this.j = new F9;
            this.Ta = b.id;
            this.Fa = b.idType;
            this.B = UAb(this.Na, c, this.eT, "shortLived" == this.Fa, this.Ta);
            this.B.Qa("channelOpened", function() {
                iCb(e)
            });
            this.B.Qa("channelClosed", function() {
                S9("Channel closed");
                isNaN(e.K) ? k8(!0) : k8();
                e.dispose()
            });
            this.B.Qa("channelError", function(f) {
                k8();
                isNaN(e.kD()) ? (1 == f && "shortLived" == e.Fa && e.oa("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ea = !0, S9("Channel error: " + f + " with reconnection in " + e.kD() + " ms"), T9(e, 2))
            });
            this.B.Qa("channelMessage", function(f) {
                jCb(e, f)
            });
            this.B.wr(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.rD() && g.oD("yt-remote-session-video-id", f)
            })
        },
        kCb = function(a) {
            return g.Db(a.C, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        S9 = function(a) {
            b9("conn", a)
        },
        T9 = function(a, b) {
            a.oa("proxyStateChange", b)
        },
        lCb = function(a) {
            a.K = g.sC(function() {
                S9("Connecting timeout");
                a.Py(1)
            }, 2E4)
        },
        mCb = function(a) {
            g.uC(a.K);
            a.K = NaN
        },
        nCb = function(a) {
            g.uC(a.Ba);
            a.Ba = NaN
        },
        pCb = function(a) {
            oCb(a);
            a.ra = g.sC(function() {
                V9(a, "getNowPlaying")
            }, 2E4)
        },
        oCb = function(a) {
            g.uC(a.ra);
            a.ra = NaN
        },
        iCb = function(a) {
            S9("Channel opened");
            a.Ea && (a.Ea = !1, nCb(a), a.Ba = g.sC(function() {
                S9("Timing out waiting for a screen.");
                a.Py(1)
            }, 15E3))
        },
        rCb = function(a, b) {
            var c = null;
            if (b) {
                var d = kCb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ua("yt.mdx.remote.remoteClient_", c);
            b && (mCb(a), nCb(a));
            c = a.B.wz() && isNaN(a.K);
            b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.mW() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), qCb(a)) : a.Py(1)
        },
        sCb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.md(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.oa("remotePlayerChange"))
        },
        tCb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            J9(a.j, d, e);
            a.oa("remoteQueueChange", c)
        },
        vCb = function(a, b) {
            b.params = b.params || {};
            tCb(a, b, "NOW_PLAYING_MAY_CHANGE");
            uCb(a, b);
            a.oa("autoplayDismissed")
        },
        uCb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.ll(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? pCb(a) : oCb(a);
            a.oa("remotePlayerChange")
        },
        wCb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                H9(a.j, isNaN(b) ? 0 : b);
                a.oa("remotePlayerChange")
            }
        },
        xCb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.oa("remotePlayerChange")
        },
        yCb = function(a, b) {
            a.N = b.params.videoId;
            a.oa("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        zCb = function(a, b) {
            a.N = b.params.videoId || null;
            a.oa("autoplayUpNext", a.N)
        },
        ACb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.oa("autoplayModeChange", a.G);
            "DISABLED" == a.G && a.oa("autoplayDismissed")
        },
        BCb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.tp = "true" == b.params.hasPrevious;
            a.j.Ok = c;
            a.oa("previousNextChange")
        },
        jCb = function(a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.Vm(b.params)) : S9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = c8(b.params.devices);
                    a.C = g.Fr(b, function(d) {
                        return new vyb(d)
                    });
                    b = !!g.Db(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    rCb(a, b);
                    b = a.pX("mlm");
                    a.oa("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Jb(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    rCb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new vyb(c8(b.params.device));
                    g.Db(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || ayb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new vyb(c8(b.params.device));
                    g.Jb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    tCb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    vCb(a, b);
                    break;
                case "onStateChange":
                    uCb(a, b);
                    break;
                case "onAdStateChange":
                    wCb(a, b);
                    break;
                case "onVolumeChanged":
                    xCb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    sCb(a, b);
                    break;
                case "nowAutoplaying":
                    yCb(a, b);
                    break;
                case "autoplayDismissed":
                    a.oa("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    zCb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    ACb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    BCb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.oa("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.oa("loopModeChange", b.params.loopMode);
                    break;
                default:
                    S9("Unrecognized action: " + b.action)
            }
        },
        qCb = function(a) {
            g.uC(a.W);
            a.W = g.sC(function() {
                a.Py(1)
            }, 864E5)
        },
        V9 = function(a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.Vm(c)) : S9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        CCb = function(a) {
            g9.call(this, "ScreenServiceProxy");
            this.Yg = a;
            this.j = [];
            this.j.push(this.Yg.$_s("screenChange", (0, g.jb)(this.I2, this)));
            this.j.push(this.Yg.$_s("onlineScreenChange", (0, g.jb)(this.L9, this)))
        },
        HCb = function(a, b) {
            Oyb();
            if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.$B("MDX_CONFIG") || b;
                Fyb();
                Jyb();
                W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), Pyb() && (W9.j = "/api/loungedev"));
                X9 || (X9 = g.Va("yt.mdx.remote.deferredProxies_") || [], g.Ua("yt.mdx.remote.deferredProxies_", X9));
                DCb();
                var c = Y9();
                if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ua("yt.mdx.remote.screenService_", d);
                    c = Y9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ua("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    VBb(a, d, function(f) {
                        f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            m8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Va("yt.mdx.remote.initialized_") && (g.Ua("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.Vm(b)),
                    a$.push(g.dF("yt-remote-cast2-api-ready", function() {
                        m8("yt-remote-api-ready")
                    })), a$.push(g.dF("yt-remote-cast2-availability-change", function() {
                        m8("yt-remote-receiver-availability-change")
                    })), a$.push(g.dF("yt-remote-cast2-receiver-selected", function() {
                        b$(null);
                        m8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.dF("yt-remote-cast2-receiver-resumed", function() {
                        m8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), a$.push(g.dF("yt-remote-cast2-session-change", ECb)), a$.push(g.dF("yt-remote-connection-change", function(f) {
                        f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), ZBb())
                    })), a$.push(g.dF("yt-remote-cast2-session-failed", function() {
                        m8("yt-remote-connection-failed")
                    })), a = FCb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.bC("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.Vm(a)), a ? (g.oD("yt-remote-session-app", a.app), g.oD("yt-remote-session-name", a.name)) : (g.qD("yt-remote-session-app"), g.qD("yt-remote-session-name")), g.Ua("yt.mdx.remote.channelParams_", a), c.start(), Z9() || GCb())
            }
        },
        ICb = function() {
            var a = Y9().Yg.$_gos();
            var b = d$();
            b && e$() && (Eyb(a, b) || a.push(b));
            return Dyb(a)
        },
        KCb = function() {
            var a = JCb();
            !a && C9() && YBb() && (a = {
                key: "cast-selector-receiver",
                name: YBb()
            });
            return a
        },
        JCb = function() {
            var a = ICb(),
                b = d$();
            b || (b = c$());
            return g.Db(a, function(c) {
                return b && f8(b, c.key) ? !0 : !1
            })
        },
        d$ = function() {
            var a = Z9();
            if (!a) return null;
            var b = Y9().Lk();
            return h8(b, a)
        },
        ECb = function(a) {
            $9("remote.onCastSessionChange_: " + g8(a));
            if (a) {
                var b = d$();
                if (b && b.id == a.id) {
                    if (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.wr(a)
                } else b && g$(), h$(a, 1)
            } else e$() && g$()
        },
        g$ = function() {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$();
            a && (a.disconnect(1), LCb(null))
        },
        MCb = function() {
            var a = e$();
            return !!a && 3 != a.getProxyState()
        },
        $9 = function(a) {
            b9("remote", a)
        },
        Y9 = function() {
            if (!NCb) {
                var a = g.Va("yt.mdx.remote.screenService_");
                NCb = a ? new CCb(a) : null
            }
            return NCb
        },
        Z9 = function() {
            return g.Va("yt.mdx.remote.currentScreenId_")
        },
        OCb = function(a) {
            g.Ua("yt.mdx.remote.currentScreenId_", a)
        },
        PCb = function() {
            return g.Va("yt.mdx.remote.connectData_")
        },
        b$ = function(a) {
            g.Ua("yt.mdx.remote.connectData_", a)
        },
        e$ = function() {
            return g.Va("yt.mdx.remote.connection_")
        },
        LCb = function(a) {
            var b = e$();
            b$(null);
            a || OCb("");
            g.Ua("yt.mdx.remote.connection_", a);
            X9 && (g.ac(X9, function(c) {
                c(a)
            }), X9.length = 0);
            b && !a ? m8("yt-remote-connection-change", !1) : !b && a && m8("yt-remote-connection-change", !0)
        },
        c$ = function() {
            var a = g.rD();
            if (!a) return null;
            var b = Y9();
            if (!b) return null;
            b = b.Lk();
            return h8(b, a)
        },
        h$ = function(a, b) {
            Z9();
            d$() && d$();
            if (i$) f$ = a;
            else {
                OCb(a.id);
                var c = g.Va("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new U9(W9, a, FCb(), c);
                a.connect(b, PCb());
                a.subscribe("beforeDisconnect", function(d) {
                    m8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    e$() && (e$(), LCb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = d$();
                    d && "shortLived" == d.idType && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."))
                });
                LCb(a)
            }
        },
        GCb = function() {
            var a = c$();
            a ? ($9("Resume connection to: " + g8(a)), h$(a, 0)) : (k8(), ZBb(), $9("Skipping connecting because no session screen found."))
        },
        DCb = function() {
            var a = FCb();
            if (g.md(a)) {
                a = j8();
                var b = g.pD("yt-remote-session-name") || "",
                    c = g.pD("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.$B("SESSION_INDEX", "0"));
                (b = g.$B("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ua("yt.mdx.remote.channelParams_", a)
            }
        },
        FCb = function() {
            return g.Va("yt.mdx.remote.channelParams_") || {}
        },
        SCb = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Fc = c;
            this.events = new g.nL(this);
            this.W = this.events.T(this.J, "onVolumeChange", function(e) {
                QCb(d, e)
            });
            this.D = !1;
            this.G = new g.$L(64);
            this.j = new g.Tu(this.s_, 500, this);
            this.B = new g.Tu(this.t_, 1E3, this);
            this.N = new p8(this.zca, 0, this);
            this.C = {};
            this.Z = new g.Tu(this.h0, 1E3, this);
            this.K = new q8(this.seekTo, 1E3, this);
            g.M(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.w9);
            this.events.T(b, "captionschanged", this.S8);
            this.events.T(b, "captionssettingschanged", this.A_);
            this.events.T(b, "videoplayerreset", this.rJ);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Fc.yV()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                RCb(d.module) || j$(d) || k$(d, 0)
            });
            a = this.Fc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.UY, this);
            a.subscribe("remotePlayerChange", this.oE, this);
            a.subscribe("remoteQueueChange", this.rJ, this);
            a.subscribe("previousNextChange", this.RY, this);
            a.subscribe("nowAutoplaying", this.LY, this);
            a.subscribe("autoplayDismissed", this.rY, this);
            g.M(this, this.j);
            g.M(this, this.B);
            g.M(this, this.N);
            g.M(this, this.Z);
            g.M(this, this.K);
            this.A_();
            this.rJ();
            this.oE()
        },
        QCb = function(a, b) {
            if (j$(a)) {
                a.Fc.unsubscribe("remotePlayerChange", a.oE, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = M9(a.Fc);
                if (c !== d.volume || b !== d.muted) a.Fc.setVolume(c, b), a.Z.start();
                a.Fc.subscribe("remotePlayerChange", a.oE, a)
            }
        },
        TCb = function(a) {
            a.Lc(0);
            a.j.stop();
            a.Cc(new g.$L(64))
        },
        UCb = function(a, b) {
            if (j$(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.sd(c, b));
                a.Fc.dT(a.J.getVideoData(1).videoId, c);
                a.C = M9(a.Fc).trackData
            }
        },
        k$ = function(a, b) {
            var c = a.J.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Fc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ba, $xb(c));
            a.Cc(new g.$L(1))
        },
        VCb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    dX: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        j$ = function(a) {
            return M9(a.Fc).videoId === a.J.getVideoData(1).videoId
        },
        l$ = function() {
            g.V.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                Y: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        ya: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        ya: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ya: "Cancel"
                        }, {
                            I: "button",
                            Ma: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ya: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.iH(this, 250);
            this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
            g.M(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        m$ = function(a) {
            g.V.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.Dva()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        ya: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.iH(this, 250);
            g.M(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Dc(a.Ub())
        },
        n$ = function(a, b) {
            g.UX.call(this, "Play on", 1, a, b);
            this.J = a;
            this.It = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        WCb = function(a) {
            g.$V.call(this, a);
            this.Bp = {
                key: Cyb(),
                name: "This computer"
            };
            this.Ml = null;
            this.subscriptions = [];
            this.uQ = this.Fc = null;
            this.It = [this.Bp];
            this.ls = this.Bp;
            this.Fe = new g.$L(64);
            this.AX = 0;
            this.Oh = -1;
            this.GE = !1;
            this.EE = this.FA = null;
            if (!g.AS(this.player.U()) && !g.GH(this.player.U())) {
                a = this.player;
                var b = g.AU(a);
                b && (b = b.zq()) && (b = new n$(a, b), g.M(this, b));
                b = new m$(a);
                g.M(this, b);
                g.NU(a, b.element, 4);
                this.FA = new l$;
                g.M(this, this.FA);
                g.NU(a, this.FA.element, 4);
                this.GE = !!c$()
            }
        },
        o$ = function(a) {
            a.EE && (a.player.removeEventListener("presentingplayerstatechange",
                a.EE), a.EE = null)
        },
        XCb = function(a, b, c) {
            a.Fe = c;
            a.player.oa("presentingplayerstatechange", new g.oH(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.ls.key)
                if (b.key === a.Bp.key) g$();
                else if (RCb(a) && YCb(a), a.ls = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.GH(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.getLength(); l++) h[l] = g.XV(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ba,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = $xb(d)) && (a.locationInfo = d);
                    d = a
                }
                $9("Connecting to: " + g.Vm(b));
                "cast-selector-receiver" == b.key ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && MCb() && Z9() == b.key ? m8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().Lk(), (b = h8(d, b.key)) && h$(b, 1))
            }
        },
        RCb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.GE || !a.FA ? !1 : g.JS(b) || g.LS(b)
        },
        YCb = function(a) {
            a.player.Ub().isPlaying() ? a.player.pauseVideo() : (a.EE = function(b) {
                !a.GE && g.rH(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.EE));
            a.FA && a.FA.pd();
            e$() || (i$ = !0)
        };
    g.Ky.prototype.Fs = g.ea(0, function() {
        return g.Uj(this, 6)
    });
    var gAb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        R8 = {
            "'": "\\'"
        },
        wyb = {
            Vna: "atp",
            L4a: "ska",
            o1a: "que",
            CTa: "mus",
            K4a: "sus",
            AEa: "dsp",
            U2a: "seq",
            eSa: "mic",
            wva: "dpa",
            ppa: "cds",
            sTa: "mlm",
            jva: "dsdtr",
            cUa: "ntb",
            tgb: "vsp",
            lwa: "scn",
            D1a: "rpe",
            gva: "dcn",
            hva: "dcp",
            RYa: "pas",
            iva: "drq"
        },
        xyb = {
            i4: "u",
            CLASSIC: "cl",
            Q3: "k",
            m1: "i",
            R0: "cr",
            W3: "m",
            f1: "g",
            oU: "up"
        },
        l8, Iyb = "";
    Qyb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.bC("enable_client_streamz_web")) {
            a = g.u(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Oea(c.value), c = {
                serializedIncrementBatch: g.qg(c.j())
            }, g.ID("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var n8, Yyb = Syb("loadCastFramework") || Syb("loadCastApplicationFramework"),
        azb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.ob(p8, g.I);
    g.k = p8.prototype;
    g.k.W1 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.hd ? this.C = g.nb() + this.Xi : this.hd = g.gg(this.G, this.Xi)
    };
    g.k.stop = function() {
        this.hd && (g.Sa.clearTimeout(this.hd), this.hd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        p8.Lf.xa.call(this)
    };
    g.k.X1 = function() {
        this.hd && (g.Sa.clearTimeout(this.hd), this.hd = null);
        this.C ? (this.hd = g.gg(this.G, this.C - g.nb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.w(q8, g.I);
    g.k = q8.prototype;
    g.k.kL = function(a) {
        this.C = arguments;
        this.hd || this.B ? this.j = !0 : czb(this)
    };
    g.k.stop = function() {
        this.hd && (g.Sa.clearTimeout(this.hd), this.hd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.hd || (this.j = !1, czb(this))
    };
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.stop()
    };
    r8.prototype.stringify = function(a) {
        return g.Sa.JSON.stringify(a, void 0)
    };
    r8.prototype.parse = function(a) {
        return g.Sa.JSON.parse(a, void 0)
    };
    g.ob(dzb, g.Ab);
    g.ob(ezb, g.Ab);
    var fzb = null;
    g.ob(hzb, g.Ab);
    g.ob(izb, g.Ab);
    g.ob(jzb, g.Ab);
    v8.prototype.debug = function() {};
    v8.prototype.info = function() {};
    v8.prototype.warning = function() {};
    var rzb = {},
        qzb = {};
    g.k = w8.prototype;
    g.k.setTimeout = function(a) {
        this.ub = a
    };
    g.k.b2 = function(a) {
        a = a.target;
        var b = this.Xa;
        b && 3 == g.bn(a) ? b.kL() : this.GS(a)
    };
    g.k.GS = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.bn(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.MS || this.j && (this.B.B || g.dn(this.j) || g.en(this.j)))) {
                    this.La || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
                    A8(this);
                    var e = this.j.getStatus();
                    this.zb = e;
                    b: if (ozb(this)) {
                        var f = g.en(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.bn(this.j);
                        if (!this.B.C) {
                            if ("undefined" === typeof TextDecoder) {
                                y8(this);
                                z8(this);
                                var m = "";
                                break b
                            }
                            this.B.C = new g.Sa.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.length = 0;
                        this.B.j += a;
                        this.K = 0;
                        m = this.B.j
                    } else m = g.dn(this.j);
                    if (this.C = 200 == e) {
                        if (this.Rb && !this.Ua) {
                            b: {
                                if (this.j) {
                                    var n = g.fn(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.gc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Ua = !0,
                            szb(this, e);
                            else {
                                this.C = !1;
                                this.N = 3;
                                t8(12);
                                y8(this);
                                z8(this);
                                break a
                            }
                        }
                        this.Fa ? (tzb(this, b, m), g.MS && this.C && 3 == b && (this.bb.Qa(this.ib, "tick", this.Z1), this.ib.start())) : szb(this, m);
                        4 == b && y8(this);
                        this.C && !this.La && (4 == b ? vzb(this.G, this) : (this.C = !1, x8(this)))
                    } else g.Dfa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.N = 3, t8(12)) : (this.N = 0, t8(13)), y8(this), z8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.Z1 = function() {
        if (this.j) {
            var a = g.bn(this.j),
                b = g.dn(this.j);
            this.K < b.length && (A8(this), tzb(this, a, b), this.C && 4 != a && x8(this))
        }
    };
    g.k.cancel = function() {
        this.La = !0;
        y8(this)
    };
    g.k.Y1 = function() {
        this.ma = null;
        var a = Date.now();
        0 <= a - this.Ib ? (2 != this.Ta && (s8(3), t8(17)), y8(this), this.N = 2, z8(this)) : uzb(this, this.Ib - a)
    };
    g.k.getLastError = function() {
        return this.N
    };
    g.k.ZN = function() {
        return this.j
    };
    Ezb.prototype.cancel = function() {
        this.C = Gzb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = Kzb.prototype;
    g.k.HS = 8;
    g.k.Dh = 1;
    g.k.connect = function(a, b, c, d) {
        t8(0);
        this.ac = a;
        this.La = b || {};
        c && void 0 !== d && (this.La.OSID = c, this.La.OAID = d);
        this.Ua = this.Jc;
        this.Na = Azb(this, null, this.ac);
        E8(this)
    };
    g.k.disconnect = function() {
        Mzb(this);
        if (3 == this.Dh) {
            var a = this.Za++,
                b = this.Na.clone();
            g.xp(b, "SID", this.D);
            g.xp(b, "RID", a);
            g.xp(b, "TYPE", "terminate");
            H8(this, b);
            a = new w8(this, this.D, a);
            a.Ta = 2;
            a.Z = a8(b.clone());
            b = !1;
            if (g.Sa.navigator && g.Sa.navigator.sendBeacon) try {
                b = g.Sa.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Sa.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = nzb(a.G, null), a.j.send(a.Z));
            a.Ba = Date.now();
            x8(a)
        }
        Szb(this)
    };
    g.k.Mg = function() {
        return 0 == this.Dh
    };
    g.k.getState = function() {
        return this.Dh
    };
    g.k.JS = function(a) {
        if (this.K)
            if (this.K = null, 1 == this.Dh) {
                if (!a) {
                    this.Za = Math.floor(1E5 * Math.random());
                    a = this.Za++;
                    var b = new w8(this, "", a),
                        c = this.W;
                    this.Ib && (c ? (c = g.qd(c), g.sd(c, this.Ib)) : c = this.Ib);
                    null !== this.N || this.qb || (b.Na = c, c = null);
                    var d;
                    if (this.ub) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Pzb(this, b, d);
                    e = this.Na.clone();
                    g.xp(e, "RID", a);
                    g.xp(e, "CVER", 22);
                    this.Fa && g.xp(e, "X-HTTP-Session-Id", this.Fa);
                    H8(this, e);
                    c && (this.qb ? d = "headers=" + g.Ke(g.Fga(c)) + "&" + d : this.N && g.Bp(e, this.N, c));
                    zzb(this.B, b);
                    this.Qf && g.xp(e, "TYPE", "init");
                    this.ub ? (g.xp(e, "$req", d), g.xp(e, "SID", "null"), b.Rb = !0, mzb(b, e, null)) : mzb(b, e, d);
                    this.Dh = 2
                }
            } else 3 == this.Dh && (a ? Qzb(this, a) : 0 == this.C.length || Fzb(this.B) || Qzb(this))
    };
    g.k.IS = function() {
        this.Z = null;
        Rzb(this);
        if (this.Mc && !(this.ib || null == this.j || 0 >= this.Od)) {
            var a = 2 * this.Od;
            this.Ea = u8((0, g.jb)(this.Q8, this), a)
        }
    };
    g.k.Q8 = function() {
        this.Ea && (this.Ea = null, this.Ua = !1, this.ib = !0, t8(10), C8(this), Rzb(this))
    };
    g.k.IP = function(a) {
        this.j == a && this.Mc && !this.ib && (Lzb(this), this.ib = !0, t8(11))
    };
    g.k.d2 = function() {
        null != this.ma && (this.ma = null, C8(this), xzb(this), t8(19))
    };
    g.k.bca = function(a) {
        a ? t8(2) : t8(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = Uzb.prototype;
    g.k.NS = function() {};
    g.k.MS = function() {};
    g.k.LS = function() {};
    g.k.KS = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.e2 = function() {};
    g.ob(J8, g.Kd);
    J8.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Ta = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    J8.prototype.close = function() {
        this.j.disconnect()
    };
    J8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Vm(a), a = c);
        b.C.push(new Dzb(b.Of++, a));
        3 == b.Dh && E8(b)
    };
    J8.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        J8.Lf.xa.call(this)
    };
    g.ob(Wzb, dzb);
    g.ob(Xzb, ezb);
    g.ob(I8, Uzb);
    I8.prototype.NS = function() {
        this.j.dispatchEvent("m")
    };
    I8.prototype.MS = function(a) {
        this.j.dispatchEvent(new Wzb(a))
    };
    I8.prototype.LS = function(a) {
        this.j.dispatchEvent(new Xzb(a))
    };
    I8.prototype.KS = function() {
        this.j.dispatchEvent("n")
    };
    var L8 = new g.Kd;
    g.w($zb, g.Ab);
    g.k = N8.prototype;
    g.k.vu = null;
    g.k.aq = !1;
    g.k.xx = null;
    g.k.mL = null;
    g.k.vx = null;
    g.k.wx = null;
    g.k.Jr = null;
    g.k.Lr = null;
    g.k.wu = null;
    g.k.gj = null;
    g.k.eG = 0;
    g.k.jo = null;
    g.k.dG = null;
    g.k.Kr = null;
    g.k.JB = -1;
    g.k.a_ = !0;
    g.k.uu = !1;
    g.k.lL = 0;
    g.k.cG = null;
    var eAb = {},
        dAb = {};
    g.k = N8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.j2 = function(a) {
        a = a.target;
        var b = this.cG;
        b && 3 == g.bn(a) ? b.kL() : this.OS(a)
    };
    g.k.OS = function(a) {
        try {
            if (a == this.gj) a: {
                var b = g.bn(this.gj),
                    c = this.gj.B,
                    d = this.gj.getStatus();
                if (g.gf && !g.Uc(10) || g.Xc && !g.Tc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.dn(this.gj)) break a;this.uu || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Kn(3) : this.j.Kn(2));jAb(this);
                var e = this.gj.getStatus();this.JB = e;
                var f = g.dn(this.gj);
                if (this.aq = 200 == e) {
                    4 == b && P8(this);
                    if (this.Fa) {
                        for (a = !0; !this.uu && this.eG < f.length;) {
                            var h = fAb(this, f);
                            if (h == dAb) {
                                4 == b && (this.Kr = 4, M8(15), a = !1);
                                break
                            } else if (h == eAb) {
                                this.Kr = 4;
                                M8(16);
                                a = !1;
                                break
                            } else kAb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Kr = 1, M8(17), a = !1);
                        this.aq = this.aq && a;
                        a || (P8(this), Q8(this))
                    } else kAb(this, f);
                    this.aq && !this.uu && (4 == b ? this.j.fG(this) : (this.aq = !1, O8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Kr = 3, M8(13)) : (this.Kr = 0, M8(14)),
                P8(this),
                Q8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.baa = function(a) {
        K8((0, g.jb)(this.aaa, this, a), 0)
    };
    g.k.aaa = function(a) {
        this.uu || (jAb(this), kAb(this, a), O8(this))
    };
    g.k.ZY = function(a) {
        K8((0, g.jb)(this.Z$, this, a), 0)
    };
    g.k.Z$ = function(a) {
        this.uu || (P8(this), this.aq = a, this.j.fG(this), this.j.Kn(4))
    };
    g.k.cancel = function() {
        this.uu = !0;
        P8(this)
    };
    g.k.f2 = function() {
        this.xx = null;
        var a = Date.now();
        0 <= a - this.mL ? (2 != this.wx && this.j.Kn(3), P8(this), this.Kr = 2, M8(18), Q8(this)) : iAb(this, this.mL - a)
    };
    g.k.getLastError = function() {
        return this.Kr
    };
    g.k = nAb.prototype;
    g.k.oL = null;
    g.k.Ij = null;
    g.k.OJ = !1;
    g.k.u_ = null;
    g.k.vH = null;
    g.k.UO = null;
    g.k.pL = null;
    g.k.Jl = null;
    g.k.bq = -1;
    g.k.KB = null;
    g.k.rC = null;
    g.k.connect = function(a) {
        this.pL = a;
        a = T8(this.j, null, this.pL);
        M8(3);
        this.u_ = Date.now();
        var b = this.j.W;
        null != b ? (this.KB = b[0], (this.rC = b[1]) ? (this.Jl = 1, oAb(this)) : (this.Jl = 2, pAb(this))) : (b8(a, "MODE", "init"), this.Ij = new N8(this), this.Ij.vu = this.oL, cAb(this.Ij, a, !1, null, !0), this.Jl = 0)
    };
    g.k.X4 = function(a) {
        if (a) this.Jl = 2, pAb(this);
        else {
            M8(4);
            var b = this.j;
            b.Co = b.Zr.bq;
            X8(b, 9)
        }
        a && this.Kn(2)
    };
    g.k.nL = function(a) {
        return this.j.nL(a)
    };
    g.k.abort = function() {
        this.Ij && (this.Ij.cancel(), this.Ij = null);
        this.bq = -1
    };
    g.k.Mg = function() {
        return !1
    };
    g.k.PS = function(a, b) {
        this.bq = a.JB;
        if (0 == this.Jl)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Co = this.bq;
                    X8(a, 2);
                    return
                }
                this.KB = c[0];
                this.rC = c[1]
            } else a = this.j, a.Co = this.bq, X8(a, 2);
        else if (2 == this.Jl)
            if (this.OJ) M8(7), this.UO = Date.now();
            else if ("11111" == b) {
            if (M8(6), this.OJ = !0, this.vH = Date.now(), a = this.vH - this.u_, !g.gf || g.Uc(10) || 500 > a) this.bq = 200, this.Ij.cancel(), M8(12), U8(this.j, this, !0)
        } else M8(8), this.vH = this.UO = Date.now(), this.OJ = !1
    };
    g.k.fG = function() {
        this.bq = this.Ij.JB;
        if (this.Ij.aq) 0 == this.Jl ? this.rC ? (this.Jl = 1, oAb(this)) : (this.Jl = 2, pAb(this)) : 2 == this.Jl && ((!g.gf || g.Uc(10) ? !this.OJ : 200 > this.UO - this.vH) ? (M8(11), U8(this.j, this, !1)) : (M8(12), U8(this.j, this, !0)));
        else {
            0 == this.Jl ? M8(9) : 2 == this.Jl && M8(10);
            var a = this.j;
            this.Ij.getLastError();
            a.Co = this.bq;
            X8(a, 2)
        }
    };
    g.k.LB = function() {
        return this.j.LB()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Kn = function(a) {
        this.j.Kn(a)
    };
    g.k = qAb.prototype;
    g.k.Bo = null;
    g.k.MB = null;
    g.k.Sj = null;
    g.k.Ig = null;
    g.k.qL = null;
    g.k.gG = null;
    g.k.QS = null;
    g.k.hG = null;
    g.k.NB = 0;
    g.k.m2 = 0;
    g.k.Ni = null;
    g.k.Mr = null;
    g.k.cq = null;
    g.k.yu = null;
    g.k.Zr = null;
    g.k.KK = null;
    g.k.Ax = -1;
    g.k.RS = -1;
    g.k.Co = -1;
    g.k.zx = 0;
    g.k.yx = 0;
    g.k.xu = 8;
    g.ob(sAb, g.Ab);
    g.ob(tAb, g.Ab);
    g.k = qAb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        M8(0);
        this.qL = b;
        this.MB = c || {};
        d && void 0 !== e && (this.MB.OSID = d, this.MB.OAID = e);
        this.Z ? (K8((0, g.jb)(this.iV, this, a), 100), vAb(this)) : this.iV(a)
    };
    g.k.disconnect = function() {
        wAb(this);
        if (3 == this.j) {
            var a = this.NB++,
                b = this.gG.clone();
            g.xp(b, "SID", this.D);
            g.xp(b, "RID", a);
            g.xp(b, "TYPE", "terminate");
            W8(this, b);
            a = new N8(this, this.D, a);
            a.wx = 2;
            a.Jr = a8(b.clone());
            (new Image).src = a.Jr.toString();
            a.vx = Date.now();
            O8(a)
        }
        GAb(this)
    };
    g.k.iV = function(a) {
        this.Zr = new nAb(this);
        this.Zr.oL = this.Bo;
        this.Zr.B = this.G;
        this.Zr.connect(a)
    };
    g.k.Mg = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.US = function(a) {
        this.Mr = null;
        BAb(this, a)
    };
    g.k.SS = function() {
        this.cq = null;
        this.Ig = new N8(this, this.D, "rpc", this.N);
        this.Ig.vu = this.Bo;
        this.Ig.lL = 0;
        var a = this.QS.clone();
        g.xp(a, "RID", "rpc");
        g.xp(a, "SID", this.D);
        g.xp(a, "CI", this.KK ? "0" : "1");
        g.xp(a, "AID", this.Ax);
        W8(this, a);
        if (!g.gf || g.Uc(10)) g.xp(a, "TYPE", "xmlhttp"), cAb(this.Ig, a, !0, this.hG, !1);
        else {
            g.xp(a, "TYPE", "html");
            var b = this.Ig,
                c = !!this.hG;
            b.wx = 3;
            b.Jr = a8(a.clone());
            hAb(b, c)
        }
    };
    g.k.PS = function(a, b) {
        if (0 != this.j && (this.Ig == a || this.Sj == a))
            if (this.Co = a.JB, this.Sj == a && 3 == this.j)
                if (7 < this.xu) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.cq) {
                                if (this.Ig)
                                    if (this.Ig.vx + 3E3 < this.Sj.vx) V8(this), this.Ig.cancel(), this.Ig = null;
                                    else break a;
                                EAb(this);
                                M8(19)
                            }
                        }
                    else this.RS = a[1], 0 < this.RS - this.Ax && 37500 > a[2] && this.KK && 0 == this.yx && !this.yu && (this.yu = K8((0, g.jb)(this.n2, this), 6E3));
                    else X8(this, 11)
                } else null != b && X8(this, 11);
        else if (this.Ig ==
            a && V8(this), !g.gc(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Ax = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.hG = c[2], c = c[3], null != c ? this.xu = c : this.xu = 6, this.j = 3, this.Ni && this.Ni.XS(), this.QS = T8(this, this.LB() ? this.hG : null, this.qL), CAb(this)) : "stop" == c[0] && X8(this, 7) : 3 == this.j && ("stop" == c[0] ? X8(this, 7) : "noop" != c[0] && this.Ni && this.Ni.WS(c), this.yx = 0)
    };
    g.k.n2 = function() {
        null != this.yu && (this.yu = null, this.Ig.cancel(), this.Ig = null, EAb(this), M8(20))
    };
    g.k.fG = function(a) {
        if (this.Ig == a) {
            V8(this);
            this.Ig = null;
            var b = 2
        } else if (this.Sj == a) this.Sj = null, b = 1;
        else return;
        this.Co = a.JB;
        if (0 != this.j)
            if (a.aq)
                if (1 == b) {
                    b = a.wu ? a.wu.length : 0;
                    a = Date.now() - a.vx;
                    var c = L8;
                    c.dispatchEvent(new sAb(c, b, a, this.zx));
                    uAb(this);
                    this.C.length = 0
                } else CAb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Co)) {
                if (d = 1 == b) this.Sj || this.Mr || 1 == this.j || 2 <= this.zx ? d = !1 : (this.Mr = K8((0, g.jb)(this.US, this, a), DAb(this, this.zx)), this.zx++, d = !0);
                d = !(d || 2 == b && EAb(this))
            }
            if (d) switch (c) {
                case 1:
                    X8(this,
                        5);
                    break;
                case 4:
                    X8(this, 10);
                    break;
                case 3:
                    X8(this, 6);
                    break;
                case 7:
                    X8(this, 12);
                    break;
                default:
                    X8(this, 2)
            }
        }
    };
    g.k.l2 = function(a) {
        if (!g.Gb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.aca = function(a) {
        a ? M8(2) : (M8(1), FAb(this, 8))
    };
    g.k.nL = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Zm;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Ni && this.Ni.isActive(this)
    };
    g.k.Kn = function(a) {
        var b = L8;
        b.dispatchEvent(new tAb(b, a))
    };
    g.k.LB = function() {
        return !(!g.gf || g.Uc(10))
    };
    g.k = HAb.prototype;
    g.k.XS = function() {};
    g.k.WS = function() {};
    g.k.VS = function() {};
    g.k.rL = function() {};
    g.k.YS = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = IAb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.B.length
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Gb(this.j, a) || g.Gb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.xfb)(b, a);
        0 <= c ? (g.Hb(b, c), b = !0) : b = !1;
        return b || g.Ib(this.B, a)
    };
    g.k.Xl = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.w(JAb, g.Ab);
    g.w(KAb, g.Ab);
    g.ob(Y8, g.I);
    g.k = Y8.prototype;
    g.k.T$ = function() {
        this.Xi = Math.min(3E5, 2 * this.Xi);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.Xi + 15E3 * Math.random();
        g.Uu(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Xi = 5E3
    };
    g.ob(MAb, HAb);
    g.k = MAb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Ch = function(a) {
        return this.C.Ch(a)
    };
    g.k.oa = function(a, b) {
        return this.C.oa.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.vb(this.C), this.disconnect(), g.vb(this.B), this.B = null, this.ra = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.W = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new qAb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ta),
                e = this.j;
            e && (e.Ni = null);
            d.Ni = this;
            this.j = d;
            NAb(this);
            if (this.j) {
                d = g.$B("ID_TOKEN");
                var f = this.j.Bo || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Bo = f
            }
            e ? (3 != e.getState() && 0 == yAb(e) || e.getState(), this.j.connect(a, b, this.N, e.D, e.Ax)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        NAb(this);
        this.j && (3 == this.j.getState() && BAb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.sd(a, b);
        this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.wz() && (NAb(this), xAb(this.j, a))
    };
    g.k.XS = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) xAb(this.j, a[b])
        }
        this.oa("handlerOpened");
        jyb(this.Na, "BROWSER_CHANNEL")
    };
    g.k.VS = function(a) {
        var b = 2 == a && 401 == this.j.Co;
        4 == a || b || this.B.start();
        this.oa("handlerError", a, b);
        pyb(this.Fa, "BROWSER_CHANNEL")
    };
    g.k.rL = function(a, b) {
        if (!this.B.isActive()) this.oa("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        lyb(this.Ea, "BROWSER_CHANNEL");
        a && this.Xa.j.sL("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Za.j.sL("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.YS = function() {
        var a = {
            v: 2
        };
        this.W && (a.gsessionid = this.W);
        0 != this.G && (a.ui = "" + this.G);
        0 != this.Z && (a.ui = "" + this.Z);
        this.K && g.sd(a, this.K);
        return a
    };
    g.k.WS = function(a) {
        "S" == a[0] ? this.W = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.oa("handlerMessage", new LAb(a[0], a[1]));
        nyb(this.La, "BROWSER_CHANNEL")
    };
    g.k.wz = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.wr = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Ua && this.j) {
            var b = this.j.Bo || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Bo = b
        }
    };
    g.k.Fs = function() {
        return this.N.id
    };
    g.k.Ks = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.Gw = function() {
        var a = this.B;
        g.Vu(a.j);
        a.start()
    };
    g.k.nba = function() {
        this.B.isActive();
        0 == yAb(this.j) && this.connect(this.K, this.G)
    };
    Z8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.w(PAb, g.Kd);
    g.k = PAb.prototype;
    g.k.connect = function(a, b, c) {
        this.Dd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Dd.disconnect(a)
    };
    g.k.Gw = function() {
        this.Dd.Gw()
    };
    g.k.Fs = function() {
        return this.Dd.Fs()
    };
    g.k.Ks = function() {
        return this.Dd.Ks()
    };
    g.k.wz = function() {
        return this.Dd.wz()
    };
    g.k.s2 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Dd,
            b = this.j;
        g.oD("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.KK,
            sessionId: a.j.D,
            arrayId: a.j.Ax
        });
        g.oD("yt-remote-session-screen-id", b);
        a = i8();
        b = j8();
        g.Gb(a, b) || a.push(b);
        Hyb(a);
        Jyb()
    };
    g.k.o2 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.q2 = function(a) {
        this.dispatchEvent(new JAb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new KAb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Dd.sendMessage(a, b)
    };
    g.k.wr = function(a) {
        this.Dd.wr(a)
    };
    g.k.dispose = function() {
        this.Dd.dispose()
    };
    g.k = QAb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.K && (this.C.stop(), this.Z = a, this.N = b, SAb(this), (a = g.$B("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.h8 && (this.B.mdxVersion = "" + this.j.h8), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.o5 && (this.B.cst = this.j.o5),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.N ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new J8(this.pathPrefix, {
            t7: "gsessionid",
            l8: this.D,
            m8: this.B
        }), this.channel.open(), this.K = 2, RAb(this))
    };
    g.k.disconnect = function(a) {
        this.W = void 0 === a ? 0 : a;
        this.C.stop();
        SAb(this);
        this.channel && (0 !== this.W ? this.B.ui = "" + this.W : delete this.B.ui, this.channel.close());
        this.W = 0
    };
    g.k.Ks = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.Gw = function() {
        var a = this.C;
        g.Vu(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (SAb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.wr = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.Fs = function() {
        return this.j ? this.j.id : ""
    };
    g.k.oa = function(a) {
        return this.G.oa.apply(this.G, [a].concat(g.pa(g.Ia.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Ch = function(a) {
        return this.G.Ch(a)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.vb(this.G), this.disconnect(), g.vb(this.C), this.Ba = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.w(TAb, g.Kd);
    g.k = TAb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Gw = function() {
        this.j.Gw()
    };
    g.k.Fs = function() {
        return this.j.Fs()
    };
    g.k.Ks = function() {
        return this.j.Ks()
    };
    g.k.wz = function() {
        return 3 === this.j.K
    };
    g.k.w2 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.t2 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.v2 = function(a) {
        this.dispatchEvent(new JAb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new KAb(401 === this.j.Bg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.wr = function(a) {
        this.j.wr(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var aBb = Date.now(),
        a9 = null,
        e9 = Array(50),
        d9 = -1,
        f9 = !1;
    g.ob(g9, g.zG);
    g9.prototype.Lk = function() {
        return this.screens
    };
    g9.prototype.contains = function(a) {
        return !!Eyb(this.screens, a)
    };
    g9.prototype.get = function(a) {
        return a ? h8(this.screens, a) : null
    };
    g9.prototype.info = function(a) {
        b9(this.K, a)
    };
    g.w(eBb, g.zG);
    g.k = eBb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.hd) && this.tZ()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.hd) || (g.uC(this.hd), this.hd = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.zG.prototype.xa.call(this)
    };
    g.k.tZ = function() {
        this.hd = NaN;
        this.j = g.xC($8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.jb)(this.A2, this),
            onError: (0, g.jb)(this.z2, this),
            onTimeout: (0, g.jb)(this.B2, this)
        })
    };
    g.k.A2 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.oa("pairingComplete", new e8(a), b)
    };
    g.k.z2 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.B >= ZCb.length ? this.oa("pairingFailed", Error("DIAL polling timed out")) : (a = ZCb[this.B], this.hd = g.sC((0, g.jb)(this.tZ, this), a), this.B++) : this.oa("pairingFailed", Error("Server error " + a.status))
    };
    g.k.B2 = function() {
        this.j = null;
        this.oa("pairingFailed", Error("Server not responding"))
    };
    var ZCb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.ob(i9, g9);
    g.k = i9.prototype;
    g.k.start = function() {
        h9(this) && this.oa("screenChange");
        !g.pD("yt-remote-lounge-token-expiration") && fBb(this);
        g.uC(this.j);
        this.j = g.sC((0, g.jb)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        h9(this);
        bBb(this, a);
        j9(this, !1);
        this.oa("screenChange");
        b(a);
        a.token || fBb(this)
    };
    g.k.remove = function(a, b) {
        var c = h9(this);
        dBb(this, a) && (j9(this, !1), c = !0);
        b(a);
        c && this.oa("screenChange")
    };
    g.k.JK = function(a, b, c, d) {
        var e = h9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.oa("screenChange")
    };
    g.k.xa = function() {
        g.uC(this.j);
        i9.Lf.xa.call(this)
    };
    g.k.R6 = function(a) {
        h9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        j9(this, !b);
        b && b9(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.Q6 = function(a) {
        b9(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.w(hBb, g.zG);
    g.k = hBb.prototype;
    g.k.start = function() {
        var a = parseInt(g.pD("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.nb() - 144E5 < a ? 0 : a) ? k9(this): (this.D = g.nb() + 3E5, g.oD("yt-remote-fast-check-period", this.D), this.NQ())
    };
    g.k.isEmpty = function() {
        return g.md(this.j)
    };
    g.k.update = function() {
        gBb("Updating availability on schedule.");
        var a = this.K(),
            b = g.cd(this.j, function(c, d) {
                return c && !!h8(a, d)
            }, this);
        kBb(this, b)
    };
    g.k.xa = function() {
        g.uC(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.zG.prototype.xa.call(this)
    };
    g.k.NQ = function() {
        g.uC(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = lBb(this);
        if (byb(a)) {
            var b = $8(this.G, "/pairing/get_screen_availability");
            this.B = OAb(this.G, b, {
                lounge_token: g.hd(a).join(",")
            }, (0, g.jb)(this.z$, this, a), (0, g.jb)(this.y$, this))
        } else kBb(this, {}), k9(this)
    };
    g.k.z$ = function(a, b) {
        this.B = null;
        var c = g.hd(lBb(this));
        if (g.Zb(c, g.hd(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            kBb(this, c);
            k9(this)
        } else this.ag("Changing Screen set during request."), this.NQ()
    };
    g.k.y$ = function(a) {
        this.ag("Screen availability failed: " + a);
        this.B = null;
        k9(this)
    };
    g.k.ag = function(a) {
        b9("OnlineScreenService", a)
    };
    g.ob(l9, g9);
    g.k = l9.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.oa("screenChange"), this.j.isEmpty() || this.oa("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.JK = function(a, b, c, d) {
        this.B.contains(a) ? this.B.JK(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a)))
    };
    g.k.Lk = function(a) {
        return a ? this.screens : g.Kb(this.screens, g.rt(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.ZS = function() {
        return g.rt(this.Lk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.aT = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new eBb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.vb(l);
            e(m9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.vb(l);
            f(m)
        });
        l.start();
        return (0, g.jb)(l.stop, l)
    };
    g.k.C2 = function(a, b, c, d) {
        g.xC($8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.jb)(function(e, f) {
                e = new e8(f.screen || {});
                if (!e.name || pBb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); pBb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(m9(this, e))
            }, this),
            onError: (0, g.jb)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.jb)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.vb(this.B);
        g.vb(this.j);
        l9.Lf.xa.call(this)
    };
    g.k.b7 = function() {
        rBb(this);
        this.oa("screenChange");
        this.j.update()
    };
    l9.prototype.dispose = l9.prototype.dispose;
    g.ob(n9, g.zG);
    g.k = n9.prototype;
    g.k.zj = function(a) {
        this.isDisposed() || (a && (p9(this, "" + a), this.oa("sessionFailed")), this.j = null, this.oa("sessionScreen", null))
    };
    g.k.info = function(a) {
        b9(this.Fa, a)
    };
    g.k.bT = function() {
        return null
    };
    g.k.fR = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.jb)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.jb)(function() {
            p9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.fR("");
        n9.Lf.xa.call(this)
    };
    g.w(q9, n9);
    g.k = q9.prototype;
    g.k.dR = function(a) {
        if (this.C) {
            if (this.C == a) return;
            p9(this, "Overriding cast session with new session object");
            DBb(this);
            this.Ba = !1;
            this.W = "unknown";
            this.C.removeUpdateListener(this.ra);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea)
        }
        this.C = a;
        this.C.addUpdateListener(this.ra);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea);
        yBb(this, "getMdxSessionStatus")
    };
    g.k.Hz = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Vm(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.jb)(function() {
            this.zj()
        }, this), (0, g.jb)(function() {
            this.zj(Error("Failed to stop receiver app."))
        }, this)) : this.zj(Error("Stopping cast device without session."))
    };
    g.k.fR = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        DBb(this);
        this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea));
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.maa = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = c8(b), g.cb(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Vm(b)), a) {
                    case "mdxSessionStatus":
                        vBb(this, b);
                        break;
                    case "loungeToken":
                        zBb(this, b);
                        break;
                    default:
                        p9(this, "Unknown youtube message: " + a)
                } else p9(this, "Unable to parse message.");
                else p9(this, "No data in message.")
    };
    g.k.rW = function(a, b, c, d) {
        g.uC(this.Z);
        this.Z = 0;
        oBb(this.D, this.B.label, a, this.B.friendlyName, (0, g.jb)(function(e) {
            e ? b(e) : 0 <= d ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.sC((0, g.jb)(this.rW, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.bT = function() {
        return this.C
    };
    g.k.D2 = function(a) {
        this.isDisposed() || a || (p9(this, "Cast session died."), this.zj())
    };
    g.w(r9, n9);
    g.k = r9.prototype;
    g.k.dR = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.La)
    };
    g.k.Hz = function(a) {
        this.Na = a;
        this.ma()
    };
    g.k.stop = function() {
        LBb(this);
        this.C ? this.C.stop((0, g.jb)(this.zj, this, null), (0, g.jb)(this.zj, this, "Failed to stop DIAL device.")) : this.zj()
    };
    g.k.xa = function() {
        LBb(this);
        this.C && this.C.removeUpdateListener(this.La);
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.E2 = function(a) {
        this.isDisposed() || a || (p9(this, "DIAL session died."), this.G(), this.G = function() {}, this.zj())
    };
    g.w(u9, n9);
    u9.prototype.stop = function() {
        this.zj()
    };
    u9.prototype.dR = function() {};
    u9.prototype.Hz = function() {
        g.uC(this.C);
        this.C = NaN;
        var a = h8(this.D.Lk(), this.B.label);
        a ? o9(this, a) : this.zj(Error("No such screen"))
    };
    u9.prototype.xa = function() {
        g.uC(this.C);
        this.C = NaN;
        n9.prototype.xa.call(this)
    };
    g.w(v9, g.zG);
    g.k = v9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        this.W || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.jb)(this.i$, this);
        c = new chrome.cast.ApiConfig(c, (0, g.jb)(this.VY, this), e, d, a);
        c.customDialLaunchCallback = (0, g.jb)(this.f9, this);
        chrome.cast.initialize(c, (0, g.jb)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G), YAb(), this.B.subscribe("onlineScreenChange", (0, g.jb)(this.cT, this)), this.C = OBb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.jb)(function(f) {
                this.ag("Failed to set initial custom receivers: " + g.Vm(f))
            }, this)), this.oa("yt-remote-cast2-availability-change", x9(this)), b(!0))
        }, this), (0, g.jb)(function(f) {
            this.ag("Failed to initialize API: " + g.Vm(f));
            b(!1)
        }, this))
    };
    g.k.xba = function(a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = h8(this.B.Lk(), a);
                if (!a) {
                    w9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == a.idType) {
                    w9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = MBb(this, a);
                c || (w9("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.jb)(function(d) {
                    this.ag("Failed to set initial custom receivers: " + g.Vm(d))
                }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                y9(this, new u9(this.B, c), !0)
            }
            this.j.fR(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.Aba = function(a) {
        this.isDisposed() ? this.ag("Setting connection data on disposed cast v2") : this.j ? this.j.Hz(a) : this.ag("Setting connection data without a session")
    };
    g.k.G2 = function() {
        this.isDisposed() ? this.ag("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.jb)(this.VY, this), (0, g.jb)(this.C$, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.jb)(this.cT, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = VAb,
            b = g.Va("yt.mdx.remote.debug.handlers_");
        g.Ib(b || [], a);
        g.vb(this.j);
        g.zG.prototype.xa.call(this)
    };
    g.k.ag = function(a) {
        b9("Controller", a)
    };
    g.k.XY = function(a, b) {
        this.j == a && (b || y9(this, null), this.oa("yt-remote-cast2-session-change", b))
    };
    g.k.f$ = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            w9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.oa("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            y9(this,
                                new u9(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            y9(this, new r9(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            y9(this, new q9(this.B, a, this.config_));
                            break;
                        default:
                            this.ag("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.ag("Stopping receiver w/o session: " + a.friendlyName)
            } else this.ag("onReceiverAction_ called without receiver.")
    };
    g.k.f9 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.ag("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.ag("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.oa("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.ag('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            y9(this, new r9(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = IBb(b, {
                name: b.B.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.Z.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.eC(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = JBb(b, c)) : a = JBb(b, c)) : a = GBb(b);
        return a
    };
    g.k.VY = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.K) {
            w9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0);
                    else {
                        this.ag("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = h8(this.B.Lk(),
                        d.label);
                e && f8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.vb(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.jb)(this.XY, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return NBb(b, b.j)
                }), this.j.Hz(null));
                this.j.dR(a)
            }
        }
    };
    g.k.F2 = function() {
        return this.j ? this.j.bT() : null
    };
    g.k.C$ = function(a) {
        this.isDisposed() || (this.ag("Failed to estabilish a session: " + g.Vm(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.oa("yt-remote-cast2-session-failed"))
    };
    g.k.i$ = function(a) {
        w9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = x9(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            x9(this) != b && this.oa("yt-remote-cast2-availability-change", x9(this))
        }
    };
    g.k.cT = function() {
        this.isDisposed() || (this.C = OBb(this), w9("Updating custom receivers: " + g.Vm(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.jb)(function() {
            this.ag("Failed to set custom receivers.")
        }, this)), this.oa("yt-remote-cast2-availability-change", x9(this)))
    };
    v9.prototype.setLaunchParams = v9.prototype.Aba;
    v9.prototype.setConnectedScreenStatus = v9.prototype.xba;
    v9.prototype.stopSession = v9.prototype.G2;
    v9.prototype.getCastSession = v9.prototype.F2;
    v9.prototype.requestSession = v9.prototype.requestSession;
    v9.prototype.init = v9.prototype.init;
    v9.prototype.dispose = v9.prototype.dispose;
    var XBb = [];
    g.k = F9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        cCb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.tp = a.hasPrevious, this.Ok = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return 1 == this.playerState
    };
    g.k.ll = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + G9(this) : this.G
    };
    g.k.clone = function() {
        return new F9(dCb(this))
    };
    g.w(L9, g.zG);
    g.k = L9.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Ks = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.Gw = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        N9(this) ? (this.j ? this.j.play(null, g.Qd, R9(this, "play")) : Q9(this, "play"), gCb(this, 1, I9(M9(this))), this.oa("remotePlayerChange")) : O9(this, this.play)
    };
    g.k.pause = function() {
        N9(this) ? (this.j ? this.j.pause(null, g.Qd, R9(this, "pause")) : Q9(this, "pause"), gCb(this, 2, I9(M9(this))), this.oa("remotePlayerChange")) : O9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (N9(this)) {
            if (this.j) {
                var b = M9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Qd, R9(this, "seekTo", {
                    newTime: a
                }))
            } else Q9(this, "seekTo", {
                newTime: a
            });
            gCb(this, 3, a);
            this.oa("remotePlayerChange")
        } else O9(this, g.kb(this.seekTo, a))
    };
    g.k.stop = function() {
        if (N9(this)) {
            this.j ? this.j.stop(null, g.Qd, R9(this, "stopVideo")) : Q9(this, "stopVideo");
            var a = M9(this);
            a.index = -1;
            a.videoId = "";
            cCb(a);
            P9(this, a);
            this.oa("remotePlayerChange")
        } else O9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.jb)(function() {
                        c9("set receiver volume: " + d)
                    }, this), (0, g.jb)(function() {
                        this.ag("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.jb)(function() {
                    c9("set receiver muted: " + b)
                }, this), (0, g.jb)(function() {
                    this.ag("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                Q9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else O9(this, g.kb(this.setVolume, a, b))
    };
    g.k.dT = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Vm(b.style), g.sd(a, c.trackData));
            Q9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else O9(this, g.kb(this.dT, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.kb(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = M9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        J9(l, a, c || 0);
        void 0 !== b && (H9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Vm(h));
        Q9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.IJ = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "previous")
        } else O9(this, g.kb(this.IJ, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "next")
        } else O9(this, g.kb(this.nextVideo, a, b))
    };
    g.k.NG = function() {
        if (N9(this)) {
            Q9(this, "clearPlaylist");
            var a = M9(this);
            a.reset();
            P9(this, a);
            this.oa("remotePlayerChange")
        } else O9(this, this.NG)
    };
    g.k.yV = function() {
        N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.yV)
    };
    g.k.dispose = function() {
        if (3 != this.C) {
            var a = this.C;
            this.C = 3;
            this.oa("proxyStateChange", a, this.C)
        }
        g.zG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        fCb(this);
        this.D = null;
        this.G.clear();
        K9(this, null);
        g.zG.prototype.xa.call(this)
    };
    g.k.kR = function(a) {
        if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
            var b = this.C;
            this.C = a;
            this.oa("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.G.isEmpty();) b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.d$ = function(a, b) {
        this.oa(a, b)
    };
    g.k.V8 = function(a) {
        if (!a) this.iE(null), K9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = M9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.iE = function(a) {
        c9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), hCb(this), this.oa("remotePlayerChange")
    };
    g.k.U8 = function(a) {
        a ? (hCb(this), this.oa("remotePlayerChange")) : this.iE(null)
    };
    g.k.JR = function() {
        Q9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.Y8 = function() {
        var a = $Bb();
        a && K9(this, a)
    };
    g.k.ag = function(a) {
        b9("CP", a)
    };
    g.w(U9, g.zG);
    g.k = U9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.La && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            H9(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.La ? "setInitialState" : "setPlaylist";
            S9("Connecting with " + c + " and params: " + g.Vm(m));
            this.B.connect({
                method: c,
                params: g.Vm(m)
            }, a, Kyb())
        } else S9("Connecting without params"), this.B.connect({}, a, Kyb());
        lCb(this)
    };
    g.k.wr = function(a) {
        this.B.wr(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ua("yt.mdx.remote.remoteClient_", null), this.oa("beforeDispose"), T9(this, 3));
        g.zG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        mCb(this);
        oCb(this);
        nCb(this);
        g.uC(this.Z);
        this.Z = NaN;
        g.uC(this.W);
        this.W = NaN;
        this.D = null;
        g.gD(this.ma);
        this.ma.length = 0;
        this.B.dispose();
        g.zG.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.pX = function(a) {
        if (!this.C || 0 === this.C.length) return !1;
        for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.y6 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.kD()) ? this.B.wz() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.Py = function(a) {
        S9("Disconnecting with " + a);
        g.Ua("yt.mdx.remote.remoteClient_", null);
        mCb(this);
        this.oa("beforeDisconnect", a);
        1 == a && k8();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.u6 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), J9(a, this.D, a.index));
        return dCb(a)
    };
    g.k.Cba = function(a) {
        var b = this,
            c = new F9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.uC(this.Z), this.Z = g.sC(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && V9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.Vm(this.j.trackData) == g.Vm(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.ac(d, function(e) {
            this.oa(e)
        }, this)
    };
    g.k.mW = function() {
        var a = this.B.Fs(),
            b = g.Db(this.C, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.kD = function() {
        return this.B.Ks()
    };
    g.k.e6 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.f6 = function() {
        return this.N || ""
    };
    g.k.H2 = function() {
        !isNaN(this.kD()) && this.B.Gw()
    };
    g.k.vba = function(a, b) {
        V9(this, a, b);
        qCb(this)
    };
    g.k.eT = function() {
        var a = g.HC("SID", "") || "",
            b = g.HC("SAPISID", "") || "",
            c = g.HC("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.qg(g.kg(a), 2);
        b = g.qg(g.kg(b), 2);
        c = g.qg(g.kg(c), 2);
        return g.qg(g.kg(a + "," + b + "," + c), 2)
    };
    U9.prototype.subscribe = U9.prototype.subscribe;
    U9.prototype.unsubscribeByKey = U9.prototype.Ch;
    U9.prototype.getProxyState = U9.prototype.y6;
    U9.prototype.disconnect = U9.prototype.Py;
    U9.prototype.getPlayerContextData = U9.prototype.u6;
    U9.prototype.setPlayerContextData = U9.prototype.Cba;
    U9.prototype.getOtherConnectedRemoteId = U9.prototype.mW;
    U9.prototype.getReconnectTimeout = U9.prototype.kD;
    U9.prototype.getAutoplayMode = U9.prototype.e6;
    U9.prototype.getAutoplayVideoId = U9.prototype.f6;
    U9.prototype.reconnect = U9.prototype.H2;
    U9.prototype.sendMessage = U9.prototype.vba;
    U9.prototype.getXsrfToken = U9.prototype.eT;
    U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.pX;
    g.w(CCb, g9);
    g.k = CCb.prototype;
    g.k.Lk = function(a) {
        return this.Yg.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Yg.$_c(a)
    };
    g.k.get = function(a) {
        return this.Yg.$_g(a)
    };
    g.k.start = function() {
        this.Yg.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Yg.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Yg.$_r(a, b, c)
    };
    g.k.JK = function(a, b, c, d) {
        this.Yg.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Yg.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Yg = null;
        g9.prototype.xa.call(this)
    };
    g.k.I2 = function() {
        this.oa("screenChange")
    };
    g.k.L9 = function() {
        this.oa("onlineScreenChange")
    };
    l9.prototype.$_st = l9.prototype.start;
    l9.prototype.$_gspc = l9.prototype.C2;
    l9.prototype.$_gsppc = l9.prototype.aT;
    l9.prototype.$_c = l9.prototype.contains;
    l9.prototype.$_g = l9.prototype.get;
    l9.prototype.$_a = l9.prototype.add;
    l9.prototype.$_un = l9.prototype.JK;
    l9.prototype.$_r = l9.prototype.remove;
    l9.prototype.$_gs = l9.prototype.Lk;
    l9.prototype.$_gos = l9.prototype.ZS;
    l9.prototype.$_s = l9.prototype.subscribe;
    l9.prototype.$_ubk = l9.prototype.Ch;
    var f$ = null,
        i$ = !1,
        W9 = null,
        X9 = null,
        NCb = null,
        a$ = [];
    g.w(SCb, g.I);
    g.k = SCb.prototype;
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Fc;
        a.unsubscribe("proxyStateChange", this.UY, this);
        a.unsubscribe("remotePlayerChange", this.oE, this);
        a.unsubscribe("remoteQueueChange", this.rJ, this);
        a.unsubscribe("previousNextChange", this.RY, this);
        a.unsubscribe("nowAutoplaying", this.LY, this);
        a.unsubscribe("autoplayDismissed", this.rY, this);
        this.Fc = this.module = null
    };
    g.k.Nk = function(a) {
        var b = g.Ia.apply(1, arguments);
        if (2 != this.Fc.C)
            if (j$(this)) {
                if (1081 != M9(this.Fc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        M9(this.Fc).isPlaying() ? this.Fc.pause() : this.Fc.play();
                        break;
                    case "control_play":
                        this.Fc.play();
                        break;
                    case "control_pause":
                        this.Fc.pause();
                        break;
                    case "control_seek":
                        this.K.kL(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        UCb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    k$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    k$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    UCb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.S8 = function(a) {
        this.N.W1(a)
    };
    g.k.zca = function(a) {
        this.Nk("control_subtitles_set_track", g.md(a) ? null : a)
    };
    g.k.A_ = function() {
        var a = this.J.getOption("captions", "track");
        g.md(a) || UCb(this, a)
    };
    g.k.Lc = function(a) {
        this.module.Lc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.w9 = function() {
        g.md(this.C) || VCb(this, this.C);
        this.D = !1
    };
    g.k.UY = function(a, b) {
        this.B.stop();
        2 === b && this.t_()
    };
    g.k.oE = function() {
        if (j$(this)) {
            this.j.stop();
            var a = M9(this.Fc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Oh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Oh = 0;
                    break;
                default:
                    this.module.Oh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Cc(new g.$L(8));
                    this.s_();
                    break;
                case 1085:
                case 3:
                    this.Cc(new g.$L(9));
                    break;
                case 1083:
                case 0:
                    this.Cc(new g.$L(2));
                    this.K.stop();
                    this.Lc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Cc(new g.$L(4));
                    break;
                case 2:
                    this.Cc(new g.$L(4));
                    this.Lc(I9(a));
                    break;
                case -1:
                    this.Cc(new g.$L(64));
                    break;
                case -1E3:
                    this.Cc(new g.$L(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        qH: 2
                    }))
            }
            a = M9(this.Fc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, VCb(this, a));
            a = M9(this.Fc); - 1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.h0()
        } else TCb(this)
    };
    g.k.RY = function() {
        this.J.oa("mdxpreviousnextchange")
    };
    g.k.rJ = function() {
        j$(this) || TCb(this)
    };
    g.k.LY = function(a) {
        isNaN(a) || this.J.oa("mdxnowautoplaying", a)
    };
    g.k.rY = function() {
        this.J.oa("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        j$(this) && this.Fc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === M9(this.Fc).playerState ? k$(this, a) : b && this.Fc.seekTo(a)
    };
    g.k.h0 = function() {
        var a = this;
        if (j$(this)) {
            var b = M9(this.Fc);
            this.events.Pc(this.W);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.W = this.events.T(this.J, "onVolumeChange", function(c) {
                QCb(a, c)
            })
        }
    };
    g.k.s_ = function() {
        this.j.stop();
        if (!this.Fc.isDisposed()) {
            var a = M9(this.Fc);
            a.isPlaying() && this.Cc(new g.$L(8));
            this.Lc(I9(a));
            this.j.start()
        }
    };
    g.k.t_ = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Fc.Ks();
        2 == this.Fc.C && !isNaN(a) && this.B.start()
    };
    g.k.Cc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.cCa(b, a)) {
            var c = g.pH(a, 2);
            c !== g.pH(this.G, 2) && this.J.aB(c);
            this.G = a;
            XCb(this.module, b, a)
        }
    };
    g.w(l$, g.V);
    l$.prototype.pd = function() {
        this.j.show()
    };
    l$.prototype.Pb = function() {
        this.j.hide()
    };
    l$.prototype.B = function() {
        m8("mdx-privacy-popup-cancel");
        this.Pb()
    };
    l$.prototype.C = function() {
        m8("mdx-privacy-popup-confirm");
        this.Pb()
    };
    g.w(m$, g.V);
    m$.prototype.onStateChange = function(a) {
        this.Dc(a.state)
    };
    m$.prototype.Dc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.pH(a, 128) ? g.HK("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.HK("Playing on $RECEIVER_NAME", b) : g.HK("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.w(n$, g.UX);
    n$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.It = g.bc(a, this.j, this), g.VX(this, g.Fr(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Jj(a), this.enable(!0)) : this.enable(!1)
    };
    n$.prototype.j = function(a) {
        return a.key
    };
    n$.prototype.xk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.It[a].name
    };
    n$.prototype.ih = function(a) {
        g.UX.prototype.ih.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.It[a]);
        this.Lb.Pb()
    };
    g.w(WCb, g.$V);
    g.k = WCb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.zS(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        HCb(b, a);
        this.subscriptions.push(g.dF("yt-remote-before-disconnect", this.P8, this));
        this.subscriptions.push(g.dF("yt-remote-connection-change", this.j$, this));
        this.subscriptions.push(g.dF("yt-remote-receiver-availability-change", this.TY,
            this));
        this.subscriptions.push(g.dF("yt-remote-auto-connect", this.h$, this));
        this.subscriptions.push(g.dF("yt-remote-receiver-resumed", this.g$, this));
        this.subscriptions.push(g.dF("mdx-privacy-popup-confirm", this.Iaa, this));
        this.subscriptions.push(g.dF("mdx-privacy-popup-cancel", this.Haa, this));
        this.TY()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.$V.prototype.load.call(this);
        this.Ml = new SCb(this, this.player, this.Fc);
        var a = (a = PCb()) ? a.currentTime : 0;
        var b = MCb() ? new L9(e$(), void 0) : null;
        0 == a && b && (a = I9(M9(b)));
        0 !== a && this.Lc(a);
        XCb(this, this.Fe, this.Fe);
        this.player.Np(6)
    };
    g.k.unload = function() {
        this.player.oa("mdxautoplaycanceled");
        this.ls = this.Bp;
        g.wb(this.Ml, this.Fc);
        this.Fc = this.Ml = null;
        g.$V.prototype.unload.call(this);
        this.player.Np(5);
        o$(this)
    };
    g.k.xa = function() {
        g.eF(this.subscriptions);
        g.$V.prototype.xa.call(this)
    };
    g.k.kE = function(a) {
        var b = g.Ia.apply(1, arguments);
        this.loaded && this.Ml.Nk.apply(this.Ml, [a].concat(g.pa(b)))
    };
    g.k.getAdState = function() {
        return this.Oh
    };
    g.k.tp = function() {
        return this.Fc ? M9(this.Fc).tp : !1
    };
    g.k.Ok = function() {
        return this.Fc ? M9(this.Fc).Ok : !1
    };
    g.k.Lc = function(a, b) {
        this.AX = a || 0;
        this.player.oa("progresssync", a, b);
        this.player.wc("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.AX
    };
    g.k.getProgressState = function() {
        var a = M9(this.Fc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Nh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + G9(a) : a.C,
            isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
            loaded: a.Z,
            seekableEnd: a.B ? a.j + G9(a) : a.j,
            seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Fc && this.Fc.nextVideo()
    };
    g.k.IJ = function() {
        this.Fc && this.Fc.IJ()
    };
    g.k.P8 = function(a) {
        1 === a && (this.uQ = this.Fc ? M9(this.Fc) : null)
    };
    g.k.j$ = function() {
        var a = MCb() ? new L9(e$(), void 0) : null;
        if (a) {
            var b = this.ls;
            this.loaded && this.unload();
            this.Fc = a;
            this.uQ = null;
            b.key !== this.Bp.key && (this.ls = b, this.load())
        } else g.vb(this.Fc), this.Fc = null, this.loaded && (this.unload(), (a = this.uQ) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
        this.player.oa("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.TY = function() {
        var a = [this.Bp],
            b = a.concat,
            c = ICb();
        C9() && g.pD("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.It = b.call(a, c);
        a = KCb() || this.Bp;
        p$(this, a);
        this.player.wc("onMdxReceiversChange")
    };
    g.k.h$ = function() {
        var a = KCb();
        p$(this, a)
    };
    g.k.g$ = function() {
        this.ls = KCb()
    };
    g.k.Iaa = function() {
        this.GE = !0;
        o$(this);
        i$ = !1;
        f$ && h$(f$, 1);
        f$ = null
    };
    g.k.Haa = function() {
        this.GE = !1;
        o$(this);
        p$(this, this.Bp);
        this.ls = this.Bp;
        i$ = !1;
        f$ = null;
        this.player.playVideo()
    };
    g.k.Eh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.It;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? aCb() : p$(this, b)), this.loaded ? this.ls : this.Bp;
            case "quickCast":
                return 2 === this.It.length && "cast-selector-receiver" === this.It[1].key ? (b && aCb(), !0) : !1
        }
    };
    g.k.JR = function() {
        this.Fc.JR()
    };
    g.k.ql = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return void 0 !== (null == (a = g.$B("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.$B("SESSION_INDEX") && !g.$B("LOGGED_IN"))
    };
    g.ZV("remote", WCb);
})(_yt_player);