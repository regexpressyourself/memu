(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    117: function (e, t, a) {},
    166: function (e, t, a) {},
    169: function (e, t) {
      t.GENRELIST = [
        "rock",
        "electronic",
        "alternative",
        "indie",
        "pop",
        "metal",
        "alternative rock",
        "jazz",
        "classic rock",
        "ambient",
        "experimental",
        "folk",
        "punk",
        "indie rock",
        "hard rock",
        "hip-hop",
        "instrumental",
        "singer-songwriter",
        "black metal",
        "dance",
        "progressive rock",
        "death metal",
        "heavy metal",
        "hardcore",
        "soul",
        "chillout",
        "electronica",
        "classical",
        "industrial",
        "soundtrack",
        "rap",
        "blues",
        "punk rock",
        "thrash metal",
        "acoustic",
        "metalcore",
        "psychedelic",
        "post-rock",
        "progressive metal",
        "funk",
        "hip hop",
        "new wave",
        "trance",
        "house",
        "reggae",
        "trip-hop",
        "post-punk",
        "techno",
        "electro",
        "indie pop",
        "rnb",
        "country",
        "power metal",
        "downtempo",
        "emo",
        "post-hardcore",
        "doom metal",
        "oldies",
        "psychedelic rock",
        "gothic metal",
        "synthpop",
        "russian",
        "gothic",
        "grunge",
        "britpop",
        "swedish",
        "noise",
        "screamo",
        "lounge",
        "grindcore",
        "nu metal",
        "j-pop",
        "polish",
        "pop rock",
        "chill",
        "blues rock",
        "avant-garde",
        "new age",
        "ska",
        "drum and bass",
        "progressive",
        "shoegaze",
        "darkwave",
        "pop punk",
        "dubstep",
        "canadian",
        "ebm",
        "world",
        "folk metal",
        "easy listening",
        "deathcore",
        "j-rock",
        "industrial metal",
        "alternative metal",
        "gothic rock",
        "hardcore punk",
        "disco",
        "latin",
        "lo-fi",
        "dub",
        "atmospheric",
        "stoner rock",
        "folk rock",
        "drone",
        "christian",
        "celtic",
        "sludge",
        "garage rock",
        "contemporary classical",
        "electropop",
        "smooth jazz",
        "dream pop",
        "psytrance",
        "fusion",
        "art rock",
        "underground hip-hop",
        "soft rock",
        "acid jazz",
        "swing",
        "australian",
        "neofolk",
        "irish",
        "baroque",
        "k-pop",
        "speed metal",
        "korean",
        "neoclassical",
        "alt-country",
        "rockabilly",
        "rock n roll",
        "glam rock",
        "progressive trance",
        "synth pop",
        "video game music",
        "space rock",
        "americana",
        "rock and roll",
        "melodic hardcore",
        "noise rock",
        "atmospheric black metal",
        "breakbeat",
        "dark electro",
        "emocore",
        "goth",
        "krautrock",
        "composer",
        "nu jazz",
        "world music",
        "post rock",
        "post-metal",
        "southern rock",
        "rhythm and blues",
        "smooth",
        "russian rock",
        "mathcore",
        "club",
        "medieval",
        "breakcore",
        "melodic metal",
        "mpb",
        "glitch",
        "industrial rock",
        "trip hop",
        "rapcore",
        "deep house",
        "r&b",
        "indie folk",
        "bossa nova",
        "opera",
        "dancehall",
        "gangsta rap",
        "progressive house",
        "experimental rock",
        "pagan metal",
        "groove metal",
        "progressive death metal",
        "dnb",
        "dreamy",
        "crust",
        "eurodance",
        "melodic black metal",
        "vocal trance",
        "drum n bass",
        "symphonic black metal",
        "electroclash",
        "hiphop",
        "vocal jazz",
        "jrock",
        "math rock",
        "good",
        "jazz fusion",
        "african",
        "nu-metal",
        "avantgarde",
        "psychobilly",
        "crossover",
        "hair metal",
        "melodic",
        "post-grunge",
        "goregrind",
      ];
    },
    171: function (e, t, a) {
      e.exports = a.p + "static/media/sm.2a3978c5.png";
    },
    203: function (e, t, a) {
      e.exports = a(431);
    },
    208: function (e, t, a) {},
    210: function (e, t, a) {},
    227: function (e, t, a) {},
    240: function (e, t, a) {},
    241: function (e, t, a) {},
    243: function (e, t, a) {},
    244: function (e, t, a) {},
    245: function (e, t, a) {},
    246: function (e, t, a) {},
    251: function (e, t, a) {},
    429: function (e, t, a) {},
    430: function (e, t, a) {},
    431: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a.n(n),
        l = a(21),
        c = a.n(l),
        o = (a(208), a(209), a(210), a(7)),
        s = a(99),
        i = a.n(s),
        m = a(39);
      function u(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(a, !0).forEach(function (t) {
                Object(m.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : u(a).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t),
                  );
                });
        }
        return e;
      }
      var p = r.a.createContext(),
        g = {
          prevTimeStart: localStorage.getItem("wt-prevTimeStart") || null,
          timeStart: localStorage.getItem("wt-timeStart") || new Date(),
          timeEnd: localStorage.getItem("wt-timeEnd") || new Date(),
          unixTimeStart: null,
          unixTimeEnd: null,
          username: localStorage.getItem("wt-username") || "",
          genre: localStorage.getItem("wt-genre") || "",
          triggerStateUpdate: !1,
          appState: "home",
          configState: 1,
        },
        E = function (e) {
          return "string" === typeof e ? new Date(e) : e;
        },
        b = function (e, t) {
          if (!e.timeStart || !e.timeEnd) return e;
          switch (
            ((e.timeEnd = E(e.timeEnd)),
            (e.timeStart = E(e.timeStart)),
            (e.prevTimeStart = E(e.prevTimeStart)),
            (e.unixTimeStart = Math.round(e.timeStart.getTime() / 1e3)),
            (e.unixTimeEnd = Math.round(e.timeEnd.getTime() / 1e3)),
            (e.unixPrevTimeStart = e.prevTimeStart
              ? Math.round(e.prevTimeStart.getTime() / 1e3)
              : null),
            t.type)
          ) {
            case "USERNAME":
              return (
                localStorage.setItem("wt-username", t.username),
                d({}, e, { username: t.username })
              );
            case "PREV_TIME_START":
              var a = null;
              return (
                null !== t.prevTimeStart &&
                  (a = Math.round(E(t.prevTimeStart.getTime()) / 1e3)),
                localStorage.setItem("wt-prevTimeStart", t.prevTimeStart),
                d({}, e, {
                  prevTimeStart: t.prevTimeStart,
                  unixPrevTimeStart: a,
                })
              );
            case "TIME_START":
              var n = Math.round(E(t.timeStart).getTime() / 1e3);
              return (
                localStorage.setItem("wt-timeStart", t.timeStart),
                d({}, e, { timeStart: t.timeStart, unixTimeStart: n })
              );
            case "TIME_END":
              var r = (function (e) {
                  var t = new Date(e.getTime());
                  return (
                    t.setDate(t.getDate()),
                    t.setHours(23),
                    t.setMinutes(59),
                    t.setSeconds(59),
                    t
                  );
                })(E(t.timeEnd)),
                l = Math.round(r.getTime() / 1e3);
              return (
                localStorage.setItem("wt-timeEnd", t.timeEnd),
                d({}, e, { timeEnd: r, unixTimeEnd: l })
              );
            case "ABBREVIATED":
              return d({}, e, { abbreviated: t.abbreviated });
            case "GENRE":
              return (
                localStorage.setItem("wt-genre", t.genre),
                d({}, e, { genre: t.genre })
              );
            case "GENRE2":
              var c = t.genre2;
              return (
                (null !== c && "null" !== c) || (c = null),
                localStorage.setItem("wt-genre2", c),
                d({}, e, { genre2: c })
              );
            case "APP_STATE":
              return d({}, e, { appState: t.appState });
            case "TRIGGER_STATE_UPDATE":
              return d({}, e, { triggerStateUpdate: t.triggerStateUpdate });
            default:
              return g;
          }
        };
      function f(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(a, !0).forEach(function (t) {
                Object(m.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : f(a).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t),
                  );
                });
        }
        return e;
      }
      var y = r.a.createContext(),
        v = function (e, t) {
          switch (t.type) {
            case "SONG_HISTORY":
              return h({}, e, { songHistory: t.songHistory });
            case "PREV_SONG_HISTORY":
              return h({}, e, { prevSongHistory: t.prevSongHistory });
            default:
              return { songHistory: null, prevSongHistory: null };
          }
        },
        S = a(28),
        k = a(432),
        _ = a(433),
        N = a(434),
        w = a(435),
        O =
          (a(227),
          Object(S.e)(function (e) {
            var t = e.history,
              a = [
                {
                  componentState: "hour",
                  title: "Songs By Hour",
                  subtitle: "Learn what hours of the day have the most songs",
                  image: r.a.createElement(k.a, null),
                },
                {
                  componentState: "dow",
                  title: "Songs By Day of Week",
                  subtitle: "See listening history for each day of the week.",
                  image: r.a.createElement(_.a, null),
                },
                {
                  componentState: "date",
                  title: "Songs By Date",
                  subtitle: "See a daily breakdown of listening history",
                  image: r.a.createElement(N.a, null),
                },
                {
                  componentState: "history",
                  title: "Full History",
                  subtitle: "Every song in your selected date range",
                  image: r.a.createElement(w.a, null),
                },
              ].map(function (e) {
                return r.a.createElement(
                  "div",
                  {
                    key: e.title,
                    className: "dashboard__module",
                    onClick: function (a) {
                      t.push("dashboard/".concat(e.componentState));
                    },
                  },
                  r.a.createElement(
                    "div",
                    { className: "dashboard__module__heading" },
                    r.a.createElement(
                      "div",
                      { className: "dashboard__module__image" },
                      e.image,
                    ),
                    r.a.createElement(
                      "p",
                      { className: "dashboard__module__title" },
                      e.title,
                    ),
                  ),
                  r.a.createElement("hr", null),
                  r.a.createElement(
                    "p",
                    { className: "dashboard__module__subtitle" },
                    e.subtitle,
                  ),
                );
              });
            return r.a.createElement("section", { className: "dashboard" }, a);
          })),
        T = a(437),
        j = a(438),
        D = a(436),
        x = Object(S.e)(function (e) {
          var t = e.history;
          return r.a.createElement(
            "button",
            {
              className: "nav__back-btn",
              onClick: function (e) {
                t.goBack();
              },
            },
            r.a.createElement(D.a, null),
          );
        }),
        A = a(10),
        I = function (e) {
          var t = e.message,
            a = e.history,
            l = Object(n.useContext)(p).configDispatch,
            c = r.a.createElement(
              "div",
              { className: "introduce-message" },
              r.a.createElement(
                "p",
                { className: "help-title" },
                "Let's Get Started!",
              ),
              r.a.createElement(
                "p",
                { className: "help-link" },
                "Click the button to start:",
              ),
              r.a.createElement(
                "p",
                { className: "help-subtext" },
                r.a.createElement(
                  A.b,
                  { to: "/" },
                  r.a.createElement(
                    "span",
                    { id: "about-link", className: "clickable" },
                    "\u2014\xa0More info\xa0\u2014",
                  ),
                ),
              ),
            ),
            o = r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "p",
                { className: "help-title" },
                "Look up Last.fm data",
              ),
              r.a.createElement(
                "p",
                { className: "help-link help-link--use-mine" },
                r.a.createElement(
                  "span",
                  {
                    className: "clickable use-mine",
                    onClick: function (e) {
                      document
                        .querySelector(".nav__heading--username")
                        .classList.add("atn--font-color"),
                        document
                          .querySelector(".username-input")
                          .classList.add("atn--border-color"),
                        l({ type: "USERNAME", username: "zookeeprr" }),
                        "dashboard" !== window.location.href &&
                          a.push("/dashboard");
                    },
                  },
                  "Or see mine!",
                ),
              ),
              r.a.createElement(
                "p",
                { className: "help-subtext" },
                r.a.createElement(
                  A.b,
                  { to: "/" },
                  r.a.createElement(
                    "span",
                    { id: "about-link", className: "clickable" },
                    "\u2014\xa0More info\xa0\u2014",
                  ),
                ),
              ),
            );
          switch (t) {
            case "tutorial":
              return o;
            case "default":
              return c;
            default:
              return null;
          }
        },
        R = function (e, t) {
          var a;
          if ("username" === t) a = document.querySelector(".nav__username");
          else {
            if ("dates" !== t) return;
            a = document.querySelector(".nav__date-pickers");
          }
          if (e)
            return (
              a.classList.add("atn"),
              a.classList.add("atn--anim"),
              void setTimeout(function () {
                a.classList.remove("atn--anim");
              }, 1500)
            );
          a.classList.remove("atn"), a.classList.remove("atn--anim");
        },
        P = function (e) {
          var t = document.querySelector(".nav");
          e
            ? (t.classList.remove("nav--collapsed"),
              t.classList.add("nav--uncollapsed"))
            : t.classList.contains("nav--uncollapsed") &&
              (t.classList.remove("nav--uncollapsed"),
              t.classList.add("nav--collapsed"));
        },
        M = function (e) {
          var t = e.username,
            a = e.timeStart,
            n = e.timeEnd,
            r = !0;
          return (
            t ? R(!1, "username") : (R(!0, "username"), (r = !1)),
            !a || !n || new Date(a) > new Date(n)
              ? (R(!0, "dates"), (r = !1))
              : R(!1, "dates"),
            r
          );
        },
        L = function () {
          var e = Object(n.useContext)(p),
            t = e.config,
            a = e.configDispatch,
            l = Object(n.useState)(t.username),
            c = Object(o.a)(l, 2),
            s = c[0],
            i = c[1];
          return (
            Object(n.useEffect)(
              function () {
                "zookeeprr" === t.username
                  ? (function () {
                      R(!0, "username");
                      for (
                        var e = function (e) {
                            setTimeout(function () {
                              i("zookeeprr".substring(0, e));
                            }, 50 * e);
                          },
                          t = 1;
                        t <= "zookeeprr".length;
                        t++
                      )
                        e(t);
                    })()
                  : (R(!1, "username"), i(t.username));
              },
              [t.username],
            ),
            r.a.createElement(
              "div",
              { className: "nav__username input-wrapper" },
              r.a.createElement(
                "label",
                {
                  className: "nav__heading nav__heading--username",
                  htmlFor: "username",
                },
                "Username\xa0",
                r.a.createElement(
                  "a",
                  {
                    href: "https://www.last.fm/join",
                    rel: "noopener noreferrer",
                    target: "_blank",
                  },
                  r.a.createElement(
                    "span",
                    { className: "clickable header-help-link" },
                    "(Need a username?)",
                  ),
                ),
              ),
              r.a.createElement("input", {
                name: "username",
                className: "username-input",
                placeholder: "Last.fm username",
                type: "text",
                value: s,
                onChange: function (e) {
                  a({ type: "USERNAME", username: e.target.value });
                },
              }),
            )
          );
        },
        C = a(102),
        G = a.n(C),
        H = function (e, t) {
          return !!e && ("any genre" !== e || !(!t || "any genre" === t));
        },
        F = function (e, t) {
          return !(!e || !t || "any genre" === t);
        };
      a(240);
      function z(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(a, !0).forEach(function (t) {
                Object(m.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : z(a).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t),
                  );
                });
        }
        return e;
      }
      var Y = function (e) {
          var t = new Date(e),
            a = "" + (t.getMonth() + 1),
            n = "" + t.getDate(),
            r = t.getFullYear();
          return (
            a.length < 2 && (a = "0" + a),
            n.length < 2 && (n = "0" + n),
            [r, a, n].join("-")
          );
        },
        K = function () {
          var e = Object(n.useContext)(p),
            t = e.config,
            a = e.configDispatch,
            l = Object(n.useState)(null),
            c = Object(o.a)(l, 2),
            s = c[0],
            i = c[1],
            m = Object(n.useRef)(null);
          return (
            Object(n.useEffect)(
              function () {
                F(t.genre, t.genre2)
                  ? (i(!1),
                    a({ type: "PREV_TIME_START", prevTimeStart: null }),
                    m && m.current && (m.current.checked = !1))
                  : i(!0);
              },
              [t.genre, t.timeEnd, t.genre2, a],
            ),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "div",
                { className: "nav__date-pickers nav__date-pickers--dates" },
                r.a.createElement(
                  "div",
                  { className: "input-wrapper input-wrapper--start-date" },
                  r.a.createElement(
                    "label",
                    { className: "nav__heading" },
                    "Start date:",
                  ),
                  r.a.createElement(G.a, {
                    style: { width: "100%" },
                    dayPickerProps: {
                      selectedDays: t.timeStart,
                      disabledDays: function (e) {
                        return (
                          e > t.timeEnd ||
                          e < new Date().setDate(new Date().getDate() - 62)
                        );
                      },
                    },
                    value: Y(t.timeStart),
                    placeholder: "YYYY-M-D",
                    onDayChange: function (e) {
                      M(U({}, t, { timeStart: e })) &&
                        a({ type: "TIME_START", timeStart: new Date(e) });
                    },
                  }),
                ),
                r.a.createElement(
                  "div",
                  { className: "input-wrapper input-wrapper--end-date" },
                  r.a.createElement(
                    "label",
                    { className: "nav__heading" },
                    "End date:",
                  ),
                  r.a.createElement(G.a, {
                    style: { width: "100%" },
                    dayPickerProps: {
                      selectedDays: t.timeEnd,
                      disabledDays: function (e) {
                        return e > new Date() || e < t.timeStart;
                      },
                    },
                    value: Y(t.timeEnd),
                    placeholder: "YYYY-M-D",
                    onDayChange: function (e) {
                      M(U({}, t, { timeEnd: e })) &&
                        a({ type: "TIME_END", timeEnd: new Date(e) });
                    },
                  }),
                ),
                s
                  ? r.a.createElement(
                      "div",
                      {
                        className:
                          "input-wrapper input-wrapper--checkbox input-wrapper--prev-date ",
                      },
                      r.a.createElement(
                        "label",
                        {
                          className: "prev-date-label",
                          htmlFor: "prev-time-checkbox",
                        },
                        r.a.createElement("input", {
                          ref: m,
                          checked:
                            null != t.prevTimeStart && !isNaN(t.prevTimeStart),
                          onChange: function (e) {
                            if (e.target.checked) {
                              var n = (function (e, t) {
                                var a = Math.abs(t - e),
                                  n = Math.floor(a / (864e5 + 1)) + 2;
                                0 === a && (n = 1);
                                var r = new Date(e);
                                return r.setDate(r.getDate() - n), r;
                              })(new Date(t.timeStart), new Date(t.timeEnd));
                              a({ type: "PREV_TIME_START", prevTimeStart: n }),
                                a({
                                  type: "TRIGGER_STATE_UPDATE",
                                  triggerStateUpdate: !0,
                                });
                            } else
                              a({
                                type: "PREV_TIME_START",
                                prevTimeStart: null,
                              }),
                                a({
                                  type: "TRIGGER_STATE_UPDATE",
                                  triggerStateUpdate: !0,
                                });
                          },
                          id: "prev-time-checkbox",
                          name: "prev-time-checkbox",
                          className: "toggle-status",
                          type: "checkbox",
                        }),
                        r.a.createElement("span", {
                          className: "toggle-switch",
                        }),
                        "\xa0Compare to previous period?",
                      ),
                    )
                  : null,
              ),
            )
          );
        },
        W = a(105),
        V = a(169),
        B =
          (a(241),
          function () {
            var e = Object(n.useContext)(p),
              t = e.config,
              a = e.configDispatch,
              l = Object(n.useState)(!1),
              c = Object(o.a)(l, 2),
              s = c[0],
              i = c[1],
              m = Object(n.useState)("none"),
              u = Object(o.a)(m, 2),
              d = u[0],
              g = u[1],
              E = Object(n.useState)("none"),
              b = Object(o.a)(E, 2),
              f = b[0],
              h = b[1],
              y = Object(n.useState)(!1),
              v = Object(o.a)(y, 2),
              S = v[0],
              k = v[1],
              _ = Object(n.useState)("none"),
              N = Object(o.a)(_, 2),
              w = N[0],
              O = N[1],
              T = Object(n.useState)("none"),
              j = Object(o.a)(T, 2),
              D = j[0],
              x = j[1],
              A = Object(n.useState)(!1),
              I = Object(o.a)(A, 2),
              R = I[0],
              P = I[1],
              M = V.GENRELIST.map(function (e) {
                return { value: e, label: e };
              });
            return (
              M.unshift({ value: "any genre", label: "any genre" }),
              Object(n.useEffect)(
                function () {
                  P(t.abbreviated);
                },
                [t.abbreviated],
              ),
              Object(n.useEffect)(
                function () {
                  H(t.genre, t.genre2) ? i(!0) : i(!1),
                    F(t.genre, t.genre2) ? k(!0) : k(!1);
                },
                [t.genre, t.genre2],
              ),
              Object(n.useEffect)(
                function () {
                  s || S || (g("none"), O("none"), h("block"), x("none")),
                    s && (g("block"), O("none"), h("none"), x("block")),
                    s && S && (g("block"), O("block"), h("none"), x("none"));
                },
                [s, S],
              ),
              r.a.createElement(
                "div",
                { className: R ? "muted" : null },
                r.a.createElement(
                  "div",
                  { className: "nav__date-pickers" },
                  r.a.createElement(
                    "div",
                    { className: "input-wrapper input-wrapper--start-date" },
                    r.a.createElement(
                      "span",
                      {
                        className: "btn genre-toggle genre-toggle--1",
                        style: { display: f },
                        onClick: function (e) {
                          i(!0);
                        },
                      },
                      "Filter Genre?",
                    ),
                    r.a.createElement(
                      "label",
                      { style: { display: d }, className: "nav__heading" },
                      "Genre:",
                    ),
                    r.a.createElement(
                      "div",
                      { style: { display: d } },
                      r.a.createElement(W.a, {
                        value: { value: t.genre, label: t.genre },
                        className: "genre-select",
                        onChange: function (e) {
                          a({ type: "GENRE", genre: e.value });
                        },
                        options: M,
                      }),
                    ),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "input-wrapper input-wrapper--end-date" },
                    r.a.createElement(
                      "span",
                      {
                        className: "genre-toggle genre-toggle--2",
                        style: { display: D },
                        onClick: function (e) {
                          k(!0);
                        },
                      },
                      "Compare Genre?",
                    ),
                    r.a.createElement(
                      "label",
                      { style: { display: w }, className: "nav__heading" },
                      "2",
                      r.a.createElement("sup", null, "nd"),
                      " Genre:",
                    ),
                    r.a.createElement(
                      "div",
                      { style: { display: w } },
                      r.a.createElement(W.a, {
                        value: { value: t.genre2, label: t.genre2 },
                        onChange: function (e) {
                          "any genre" === e.value
                            ? (k(!1),
                              a({ type: "GENRE2", genre2: "any genre" }))
                            : a({ type: "GENRE2", genre2: e.value });
                        },
                        className: "genre-select",
                        options: M,
                      }),
                    ),
                  ),
                ),
              )
            );
          }),
        q =
          (a(243),
          a(244),
          Object(S.e)(function (e) {
            var t = e.history,
              a = e.showMessages,
              l = e.showBack,
              c = e.defaultStart,
              s = e.defaultEnd,
              i = Object(n.useContext)(p),
              m = i.config,
              u = i.configDispatch,
              d = Object(n.useState)(null),
              g = Object(o.a)(d, 2),
              E = g[0],
              b = g[1],
              f = Object(n.useState)(null),
              h = Object(o.a)(f, 2),
              y = h[0],
              v = h[1],
              S = Object(n.useState)(r.a.createElement(T.a, null)),
              k = Object(o.a)(S, 2),
              _ = k[0],
              N = k[1],
              w = Object(n.useState)(!localStorage.getItem("wt-username")),
              O = Object(o.a)(w, 2),
              D = O[0],
              A = O[1],
              R = Object(n.useRef)(null),
              C = Object(n.useRef)(null),
              G = Object(n.useRef)(null),
              H = function (e) {
                !e.target ||
                  e.target.closest("nav") ||
                  e.target.closest("button") ||
                  e.target.classList.contains("css-1n7v3ny-option") ||
                  b(!1);
              };
            Object(n.useEffect)(function () {
              return (
                document.addEventListener("click", H),
                function () {
                  document.removeEventListener("click", H);
                }
              );
            }, []),
              Object(n.useEffect)(
                function () {
                  window.location.href.includes("dashboard") && !M(m) && b(!0);
                  var e = function (e) {
                    13 === e.keyCode && G.current.click();
                  };
                  C
                    ? C.current.addEventListener("keydown", e)
                    : C.current.removeEventListener("keydown", e);
                },
                [C, m],
              );
            return (
              Object(n.useEffect)(
                function () {
                  E
                    ? (N(r.a.createElement(j.a, null)),
                      P(!0),
                      v(a ? "tutorial" : null))
                    : (N(r.a.createElement(T.a, null)),
                      P(!1),
                      v(a ? "default" : null));
                },
                [E, a],
              ),
              r.a.createElement(
                "header",
                { className: "main-header" },
                r.a.createElement(
                  "div",
                  { className: "main-header__inner" },
                  r.a.createElement(
                    "div",
                    { className: "main-header__bottom" },
                    r.a.createElement(I, {
                      defaultStart: c,
                      defaultEnd: s,
                      message: y,
                      history: t,
                    }),
                    l
                      ? r.a.createElement(x, null)
                      : r.a.createElement("span", null),
                    r.a.createElement(
                      "button",
                      {
                        tabIndex: "0",
                        ref: R,
                        className: "nav__toggle-btn ".concat(
                          D ? "animated" : "",
                        ),
                        onClick: function (e) {
                          b(!E), A(!1);
                        },
                      },
                      _,
                    ),
                  ),
                  r.a.createElement(
                    "nav",
                    { ref: C, className: "nav" },
                    r.a.createElement(L, null),
                    r.a.createElement(K, null),
                    r.a.createElement(B, null),
                    r.a.createElement(
                      "button",
                      {
                        tabIndex: "0",
                        ref: G,
                        className: "submit-btn",
                        onClick: function (e) {
                          !(function () {
                            if (M(m))
                              return (
                                b(!1),
                                window.location.href.includes("dashboard")
                                  ? u({
                                      type: "APP_STATE",
                                      appState: m.appState,
                                    })
                                  : t.push("/dashboard"),
                                u({
                                  type: "TRIGGER_STATE_UPDATE",
                                  triggerStateUpdate: !0,
                                }),
                                !0
                              );
                            b(!0);
                          })();
                        },
                      },
                      "What Am I Listening to?",
                    ),
                  ),
                ),
              )
            );
          })),
        J = a(439),
        Q = (a(245), a(171)),
        X = a.n(Q),
        Z = function () {
          var e = r.a.createElement(
            "span",
            { className: "logo-font" },
            "WAILto",
          );
          return r.a.createElement(
            "footer",
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                A.b,
                { className: "footer-img", to: "/" },
                r.a.createElement(
                  "p",
                  { className: "css-logo" },
                  r.a.createElement(
                    "span",
                    { className: "css-logo__wail" },
                    "WAIL",
                  ),
                  r.a.createElement(
                    "span",
                    { className: "css-logo__to" },
                    "to",
                  ),
                ),
              ),
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "p",
                { className: "footer-p" },
                r.a.createElement(
                  "a",
                  {
                    href: "https://github.com/regexpressyourself/wailto",
                    className: "footer-gh-link",
                    rel: "noopener noreferrer",
                    target: "_blank",
                  },
                  r.a.createElement(J.a, null),
                  e,
                  " \xa0is 100% open source",
                ),
              ),
            ),
            r.a.createElement(
              "div",
              { className: "smessina-info" },
              r.a.createElement(
                "p",
                { className: "footer-p" },
                r.a.createElement(
                  "a",
                  {
                    href: "https://smessina.com",
                    rel: "noopener noreferrer",
                    target: "_blank",
                  },
                  "Sam Messina",
                  r.a.createElement("br", null),
                  "\xa9 ",
                  new Date().getFullYear(),
                ),
              ),
              r.a.createElement(
                "p",
                null,
                r.a.createElement(
                  "a",
                  {
                    className: "footer-img",
                    href: "https://smessina.com",
                    rel: "noopener noreferrer",
                    target: "_blank",
                  },
                  r.a.createElement("img", {
                    className: "sm-fav",
                    src: X.a,
                    alt: "smessina.com",
                  }),
                ),
              ),
            ),
          );
        },
        $ =
          (a(246),
          function () {
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "h1",
                { className: "loading" },
                "Loading",
                r.a.createElement("span", null, "."),
                r.a.createElement("span", null, "."),
                r.a.createElement("span", null, "."),
              ),
            );
          }),
        ee = function (e) {
          var t = "am";
          return e >= 12 && ((e -= 12), (t = "pm")), 0 === e && (e = 12), e + t;
        },
        te = function (e) {
          var t = new Date(1e3 * e),
            a = t.getFullYear(),
            n = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ][t.getMonth()],
            r = t.getDate(),
            l = t.getDay(),
            c = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ][t.getDay()],
            o = t.getHours(),
            s = "0" + t.getMinutes();
          s = s.substr(-2);
          var i = "0" + t.getSeconds();
          i = i.substr(-2);
          var m = "am";
          o >= 12 && (m = "pm");
          var u = (o % 12) + m,
            d = (o % 12) + ":" + s + m;
          return {
            date: "".concat(n, " ").concat(r, ", ").concat(a),
            time: d,
            month: n,
            day: r,
            dow: l,
            dowName: c,
            hourName: u,
            year: a,
            hour: o,
            minutes: s,
            seconds: i,
            dateAsString: ""
              .concat(c, " ")
              .concat(n, " ")
              .concat(r, ", ")
              .concat(a),
          };
        },
        ae = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = new Date(e);
          if (t) {
            var n = new Date();
            n.setTime(a.getTime() - 864e5), (a = n);
          }
          var r = a.getFullYear(),
            l = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ][a.getMonth()],
            c = a.getDate(),
            o = a.getDay(),
            s = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ][a.getDay()],
            i = a.getHours(),
            m = "0" + a.getMinutes();
          m = m.substr(-2);
          var u = "0" + a.getSeconds();
          u = u.substr(-2);
          var d = "am";
          i >= 12 && (d = "pm");
          var p = (i % 12) + d,
            g = (i % 12) + ":" + m + d;
          return {
            jsDate: new Date(a),
            date: "".concat(l, " ").concat(c, ", ").concat(r),
            time: g,
            month: l,
            day: c,
            dow: o,
            dowName: s,
            hourName: p,
            year: r,
            hour: i,
            minutes: m,
            seconds: u,
            dateAsString: "".concat(l, " ").concat(c),
          };
        },
        ne = function (e, t) {
          for (var a = []; e <= t; ) {
            var n = e.getFullYear(),
              r = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ][e.getMonth()],
              l = e.getDate(),
              c = "".concat(r, " ").concat(l, ", ").concat(n);
            a.push(c), e.setDate(e.getDate() + 1);
          }
          return a;
        },
        re = function (e, t, a) {
          var n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return (function (e, t) {
            var a = {},
              n = !0,
              r = !1,
              l = void 0;
            try {
              for (
                var c, o = e[Symbol.iterator]();
                !(n = (c = o.next()).done);
                n = !0
              ) {
                var s = c.value,
                  i = s.date,
                  m = te(i)[t];
                a[m] ? a[m].push(s) : (a[m] = [s]);
              }
            } catch (u) {
              (r = !0), (l = u);
            } finally {
              try {
                n || null == o.return || o.return();
              } finally {
                if (r) throw l;
              }
            }
            return a;
          })(
            (a = a.filter(function (e) {
              return (function (e, t) {
                return "any genre" === t
                  ? e
                  : t && ![e.genre1, e.genre2, e.genre3, e.genre4].includes(t)
                    ? null
                    : e;
              })(e, n);
            })),
            e,
          );
        },
        le = function () {
          var e = Object(n.useContext)(p).config,
            t = Object(n.useState)(null),
            a = Object(o.a)(t, 2),
            l = a[0],
            c = a[1],
            s = Object(n.useState)(!1),
            i = Object(o.a)(s, 2),
            m = i[0],
            u = i[1],
            d = Object(n.useState)(!1),
            g = Object(o.a)(d, 2),
            E = g[0],
            b = g[1],
            f = Object(n.useState)(!1),
            h = Object(o.a)(f, 2),
            y = h[0],
            v = h[1];
          return (
            Object(n.useEffect)(
              function () {
                var t = H(e.genre, e.genre2),
                  a = F(e.genre, e.genre2);
                c(
                  t && a
                    ? r.a.createElement(
                        "p",
                        { className: "user-info__more-info" },
                        r.a.createElement(
                          "span",
                          { className: "genre" },
                          e.genre,
                        ),
                        "\xa0 & \xa0",
                        r.a.createElement(
                          "span",
                          { className: "genre2" },
                          e.genre2,
                        ),
                      )
                    : t
                      ? r.a.createElement(
                          "p",
                          { className: "user-info__more-info" },
                          e.genre,
                        )
                      : null,
                );
              },
              [e.genre, e.genre2],
            ),
            Object(n.useEffect)(
              function () {
                v(e.abbreviated);
              },
              [e.abbreviated],
            ),
            Object(n.useEffect)(
              function () {
                null == e.prevTimeStart || isNaN(e.prevTimeStart)
                  ? u(!1)
                  : (u(!0), b(ae(e.prevTimeStart).date));
              },
              [e.prevTimeStart, e.timeStart],
            ),
            e.appState
              ? r.a.createElement(
                  "section",
                  { className: "user-info" },
                  r.a.createElement(
                    "p",
                    { className: "user-info__username" },
                    e.username,
                  ),
                  r.a.createElement(
                    "div",
                    { className: y ? "muted" : null },
                    r.a.createElement(
                      "p",
                      { className: "user-info__more-info user-info__dates" },
                      r.a.createElement("span", null, ae(e.timeStart).date),
                      "\xa0 \u2014 \xa0",
                      r.a.createElement("span", null, ae(e.timeEnd).date),
                    ),
                    m
                      ? r.a.createElement(
                          "p",
                          {
                            className: "user-info__more-info user-info__dates",
                          },
                          r.a.createElement("span", null, E),
                          "\xa0 \u2014 \xa0",
                          r.a.createElement(
                            "span",
                            null,
                            ae(e.timeStart, !0).date,
                          ),
                        )
                      : null,
                  ),
                  r.a.createElement(
                    "div",
                    { className: y ? "muted" : null },
                    l,
                  ),
                )
              : null
          );
        },
        ce = a(66),
        oe = a.n(ce),
        se =
          (a(251),
          function (e) {
            for (
              var t = e.genres,
                a = e.image,
                n = e.name,
                l = e.artist,
                c = e.album,
                o = e.date,
                s = [],
                i = 0;
              i < t.length;
              i++
            )
              t[i] && (i !== t.length - 1 ? s.push(t[i] + ", ") : s.push(t[i]));
            var m = null;
            return (
              t.length &&
                (m = r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement("hr", null),
                  r.a.createElement("p", { className: "song-item__genres" }, s),
                )),
              r.a.createElement(
                "div",
                { className: "song-item" },
                r.a.createElement(
                  "div",
                  { className: "song-item__info" },
                  r.a.createElement(
                    oe.a,
                    null,
                    r.a.createElement("img", {
                      className: "song-item__img",
                      alt: "album cover",
                      src: a,
                    }),
                  ),
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "p",
                      { className: "song-item__info__title" },
                      n,
                    ),
                    r.a.createElement(
                      "p",
                      { className: "song-item__info__content" },
                      r.a.createElement(
                        "span",
                        { className: "song-item__info__content__artist" },
                        l,
                      ),
                      r.a.createElement("br", null),
                      "\u2014 ",
                      c,
                    ),
                  ),
                ),
                r.a.createElement(
                  "div",
                  { className: "song-item__right" },
                  r.a.createElement(
                    "p",
                    { className: "song-item__date" },
                    o.dowName,
                    "\xa0",
                    o.date,
                    "\xa0",
                    o.time,
                  ),
                  m,
                ),
              )
            );
          }),
        ie =
          (a(117),
          function () {
            var e = Object(n.useContext)(y).songHistory,
              t = Object(n.useContext)(p).config,
              a = Object(n.useState)(null),
              l = Object(o.a)(a, 2),
              c = l[0],
              s = l[1];
            return (
              Object(n.useEffect)(
                function () {
                  s(
                    e.songHistory
                      .map(function (e) {
                        var a = te(e.date),
                          n = [e.genre1, e.genre2, e.genre3, e.genre4];
                        if (
                          t.genre &&
                          "any genre" !== t.genre &&
                          !n.includes(t.genre)
                        ) {
                          if (!t.genre2 || "any genre" === t.genre2)
                            return null;
                          if (!n.includes(t.genre2)) return null;
                        }
                        return r.a.createElement(
                          oe.a,
                          { key: e.id + e.date, height: 100 },
                          r.a.createElement(se, {
                            image: e.image,
                            album: e.album,
                            artist: e.artist,
                            name: e.name,
                            genres: n,
                            date: a,
                          }),
                        );
                      })
                      .reverse(),
                  );
                },
                [t.genre, t.genre2, t.timeStart, t.timeEnd, e.songHistory],
              ),
              r.a.createElement(
                "div",
                { className: "chart-container chart-container--full-history" },
                r.a.createElement(
                  "h1",
                  { className: "chart-heading" },
                  "All ",
                  t.username,
                  "'s Songs",
                ),
                c,
              )
            );
          }),
        me = a(9),
        ue = function (e) {
          var t = e.dataKey,
            a = e.dataKeyValues,
            l = e.secondaryDataKeyValues,
            c = Object(n.useContext)(y).songHistory,
            s = Object(n.useContext)(p).config,
            i = Object(n.useState)(),
            m = Object(o.a)(i, 2),
            u = m[0],
            d = m[1],
            g = Object(n.useState)(null),
            E = Object(o.a)(g, 2),
            b = E[0],
            f = E[1],
            h = Object(n.useState)(null),
            v = Object(o.a)(h, 2),
            S = v[0],
            k = v[1];
          return (
            Object(n.useEffect)(
              function () {
                var e,
                  n,
                  o =
                    ((e = s.genre), (n = s.genre2), H(e, n) ? e : "song count"),
                  i = (function (e, t) {
                    return F(e, t) ? t : null;
                  })(s.genre, s.genre2);
                f(o), k(i);
                var m = re(t, a, c.songHistory, s.genre),
                  u = {};
                if (i) u = re(t, a, c.songHistory, s.genre2);
                else if (s.prevTimeStart && c.prevSongHistory) {
                  var p = ae(s.prevTimeStart).dateAsString,
                    g = ae(s.timeStart).dateAsString,
                    E = ae(s.timeStart, !0).dateAsString,
                    h = ae(s.timeEnd).dateAsString;
                  f("".concat(g, " - ").concat(h)),
                    k("".concat(p, " - ").concat(E)),
                    (o = "song count"),
                    (i = "song count"),
                    (u = re(t, a, c.prevSongHistory, s.genre));
                }
                for (var y = [], v = [], _ = 0; _ < a.length; _++) {
                  var N = {},
                    w = {},
                    O = a[_];
                  (N.name = O), (N[o] = m[O] ? m[O].length : 0);
                  var T = O;
                  l && null != i && (T = l[_]),
                    (w.name = T),
                    (w[i] = u[T] ? u[T].length : 0),
                    y.push(N),
                    w && w.name && i && v.push(w);
                }
                d(
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement("h2", null, S ? b : null),
                    r.a.createElement(
                      me.h,
                      null,
                      r.a.createElement(
                        me.b,
                        { data: y },
                        r.a.createElement(me.k, { dataKey: "name" }),
                        r.a.createElement(me.l, null),
                        r.a.createElement(me.j, null),
                        o
                          ? r.a.createElement(me.a, {
                              type: "monotone",
                              dataKey: o,
                              stroke: "#fd8b7b",
                              fill: "#e2598b",
                            })
                          : null,
                        i && 0 === v.length
                          ? r.a.createElement(me.a, {
                              type: "monotone",
                              dataKey: i,
                              stroke: "#7f4782",
                              fill: "#aa5c9f",
                            })
                          : null,
                      ),
                    ),
                    v.length > 0
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement("h2", null, S),
                          r.a.createElement(
                            me.h,
                            null,
                            r.a.createElement(
                              me.b,
                              { data: v },
                              r.a.createElement(me.k, { dataKey: "name" }),
                              r.a.createElement(me.l, null),
                              r.a.createElement(me.j, null),
                              i
                                ? r.a.createElement(me.a, {
                                    type: "monotone",
                                    dataKey: i,
                                    stroke: "#7f4782",
                                    fill: "#aa5c9f",
                                  })
                                : null,
                            ),
                          ),
                        )
                      : null,
                  ),
                );
              },
              [
                b,
                S,
                l,
                s.genre,
                s.genre2,
                t,
                a,
                c.songHistory,
                c.prevSongHistory,
                s.timeStart,
                s.timeEnd,
                s.prevTimeStart,
              ],
            ),
            r.a.createElement(r.a.Fragment, null, u)
          );
        },
        de = function () {
          var e = Object(n.useContext)(p).config,
            t = ne(new Date(e.timeStart), new Date(e.timeEnd)),
            a = null;
          return (
            e.prevTimeStart &&
              (a = ne(new Date(e.prevTimeStart), new Date(e.timeStart))),
            r.a.createElement(
              "div",
              { className: "chart-container" },
              r.a.createElement(
                "h1",
                { className: "chart-heading" },
                "Songs",
                r.a.createElement("br", null),
                " ",
                r.a.createElement(
                  "span",
                  { className: "per" },
                  "\u2014by\u2014",
                ),
                " ",
                r.a.createElement("br", null),
                "Date",
              ),
              r.a.createElement(ue, {
                dataKey: "date",
                dataKeyValues: t,
                secondaryDataKeyValues: a,
              }),
            )
          );
        },
        pe = function () {
          return r.a.createElement(
            "div",
            { className: "chart-container" },
            r.a.createElement(
              "h1",
              { className: "chart-heading" },
              "Songs",
              r.a.createElement("br", null),
              " ",
              r.a.createElement("span", { className: "per" }, "\u2014by\u2014"),
              " ",
              r.a.createElement("br", null),
              "Day of Week",
            ),
            r.a.createElement(ue, {
              dataKey: "dowName",
              dataKeyValues: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
            }),
          );
        },
        ge = function () {
          for (var e = [], t = 0; t < 24; t++) e.push(ee(t));
          return r.a.createElement(
            "div",
            { className: "chart-container" },
            r.a.createElement(
              "h1",
              { className: "chart-heading" },
              "Songs",
              r.a.createElement("br", null),
              " ",
              r.a.createElement("span", { className: "per" }, "\u2014by\u2014"),
              " ",
              r.a.createElement("br", null),
              "Hour of Day",
            ),
            r.a.createElement(ue, { dataKey: "hourName", dataKeyValues: e }),
          );
        },
        Ee = function (e) {
          var t = Math.PI / 180,
            a = e.cx,
            n = e.cy,
            l = e.midAngle,
            c = e.innerRadius,
            o = e.outerRadius,
            s = e.startAngle,
            i = e.endAngle,
            m = e.fill,
            u = e.payload,
            d = e.percent,
            p = e.value,
            g = Math.sin(-t * l),
            E = Math.cos(-t * l),
            b = a + (o + 10) * E,
            f = n + (o + 10) * g,
            h = a + (o + 30) * E,
            y = n + (o + 30) * g,
            v = h + 22 * (E >= 0 ? 1 : -1),
            S = y,
            k = E >= 0 ? "start" : "end";
          return r.a.createElement(
            "g",
            null,
            r.a.createElement(
              "text",
              { x: a, y: n, dy: 8, textAnchor: "middle", fill: m },
              u.name,
            ),
            r.a.createElement(me.i, {
              cx: a,
              cy: n,
              innerRadius: c,
              outerRadius: o,
              startAngle: s,
              endAngle: i,
              fill: m,
            }),
            r.a.createElement(me.i, {
              cx: a,
              cy: n,
              startAngle: s,
              endAngle: i,
              innerRadius: o + 6,
              outerRadius: o + 10,
              fill: m,
            }),
            r.a.createElement("path", {
              d: "M"
                .concat(b, ",")
                .concat(f, "L")
                .concat(h, ",")
                .concat(y, "L")
                .concat(v, ",")
                .concat(S),
              stroke: m,
              fill: "none",
            }),
            r.a.createElement("circle", {
              cx: v,
              cy: S,
              r: 2,
              fill: m,
              stroke: "none",
            }),
            r.a.createElement(
              "text",
              {
                x: v + 12 * (E >= 0 ? 1 : -1),
                y: S,
                textAnchor: k,
                fill: "#333",
              },
              "song count: ".concat(p),
            ),
            r.a.createElement(
              "text",
              {
                x: v + 12 * (E >= 0 ? 1 : -1),
                y: S,
                dy: 18,
                textAnchor: k,
                fill: "#999",
              },
              "% of total: ".concat((100 * d).toFixed(2), "%"),
            ),
          );
        },
        be = function (e) {
          var t = e.data,
            a = Object(n.useState)(0),
            l = Object(o.a)(a, 2),
            c = l[0],
            s = l[1],
            i = ["#fdd043", "#fd8b7b", "#aa5c9f", "#e2598b"];
          return t
            ? r.a.createElement(
                me.h,
                null,
                r.a.createElement(
                  me.g,
                  null,
                  r.a.createElement(
                    me.f,
                    {
                      activeIndex: c,
                      activeShape: Ee,
                      data: t,
                      innerRadius: 80,
                      outerRadius: 120,
                      fill: "#8884d8",
                      dataKey: "value",
                      onMouseEnter: function (e, t) {
                        s(t);
                      },
                    },
                    t.map(function (e, t) {
                      return r.a.createElement(me.c, {
                        key: "cell-".concat(t),
                        fill: i[t % i.length],
                      });
                    }),
                  ),
                ),
              )
            : null;
        },
        fe = function () {
          var e = Object(n.useContext)(y).songHistory,
            t = Object(n.useState)(null),
            a = Object(o.a)(t, 2),
            l = a[0],
            c = a[1];
          return (
            Object(n.useEffect)(
              function () {
                var t = {};
                e.songHistory.forEach(function (e) {
                  e.genre1 && (t[e.genre1] = t[e.genre1] ? t[e.genre1] + 1 : 1);
                });
                var a = [];
                for (var n in t) a.push({ name: n, value: t[n] });
                (a = a.sort(function (e, t) {
                  return t.value - e.value;
                })),
                  c(a);
              },
              [e.songHistory],
            ),
            r.a.createElement(
              "div",
              { className: "chart-container" },
              r.a.createElement(
                "h1",
                { className: "chart-heading" },
                "Genre Distribution",
              ),
              r.a.createElement(be, { data: l }),
            )
          );
        },
        he =
          (a(166),
          a(429),
          function (e) {
            var t = e.errorMessage;
            return r.a.createElement(
              "div",
              { className: "error-page-wrapper" },
              r.a.createElement(
                "section",
                { className: "home__header home__header--error" },
                r.a.createElement(
                  "p",
                  { className: "css-logo css-logo--error" },
                  r.a.createElement(
                    "span",
                    { className: "css-logo__wail" },
                    "Oops!",
                  ),
                ),
                r.a.createElement("h1", null, "Somethine went wrong!"),
                r.a.createElement(
                  "p",
                  { className: "server-message" },
                  "Our servers are saying it's something to do with:",
                ),
                r.a.createElement(
                  "p",
                  { className: "server-message server-message--code" },
                  r.a.createElement("code", null, t),
                ),
                r.a.createElement(
                  "div",
                  { className: "header__btn-container" },
                  r.a.createElement(
                    A.b,
                    { className: "btn-link btn-link--1", to: "/app" },
                    r.a.createElement(
                      "button",
                      { className: "btn" },
                      "Go Back To Safety",
                    ),
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className: "btn-link btn-link--2",
                      onClick: function (e) {
                        window.location.href = "https://smessina.com";
                      },
                    },
                    r.a.createElement(
                      "button",
                      { className: "btn" },
                      "Speak To The Dev",
                    ),
                  ),
                ),
                r.a.createElement(
                  me.h,
                  null,
                  r.a.createElement(
                    me.e,
                    {
                      data: [
                        { "": 90 },
                        { "": 50 },
                        { "": 66 },
                        { "": 79 },
                        { "": 50 },
                        { "": 40 },
                        { "": 0 },
                      ],
                    },
                    "}>",
                    r.a.createElement(me.d, {
                      type: "monotone",
                      dot: { stroke: "#aa5c9f", strokeWidth: 4, r: 10 },
                      dataKey: "",
                      stroke: "#aa5c9f",
                      strokeWidth: 10,
                    }),
                  ),
                ),
              ),
            );
          }),
        ye =
          (a(430),
          function (e) {
            var t = e.appState,
              a = e.history;
            window.scrollTo(0, 0);
            var l = new Date(),
              c = new Date(),
              s = new Date();
            s.setDate(l.getDate() - 1), c.setDate(l.getDate() - 8);
            var m =
                "null" === localStorage.getItem("wt-genre2")
                  ? null
                  : localStorage.getItem("wt-genre2"),
              u = {
                prevTimeStart: localStorage.getItem("wt-prevTimeStart") || null,
                timeStart: localStorage.getItem("wt-timeStart") || c,
                timeEnd: localStorage.getItem("wt-timeEnd") || s,
                username: localStorage.getItem("wt-username") || "",
                genre: localStorage.getItem("wt-genre") || "",
                genre2: m || "",
              },
              d = Object(n.useReducer)(b, u),
              g = Object(o.a)(d, 2),
              E = g[0],
              f = g[1],
              h = Object(n.useReducer)(v, {}),
              S = Object(o.a)(h, 2),
              k = S[0],
              _ = S[1];
            window.location.href.includes("zookeeprr") &&
              (f({ type: "PREV_TIME_START", prevTimeStart: u.prevTimeStart }),
              f({ type: "TIME_START", timeStart: u.timeStart }),
              f({ type: "TIME_END", timeEnd: u.timeEnd }),
              f({ type: "GENRE", genre: u.genre }),
              f({ type: "USERNAME", username: "zookeeprr" }),
              f({ type: "APP_STATE", appState: "dashboard" }),
              f({ type: "TRIGGER_STATE_UPDATE", triggerStateUpdate: !0 }),
              a.replace("/dashboard"));
            var N = Object(n.useState)(null),
              w = Object(o.a)(N, 2),
              T = w[0],
              j = w[1],
              D = Object(n.useState)(null),
              x = Object(o.a)(D, 2),
              A = x[0],
              I = x[1],
              R =
                E.appState ||
                "tutorial" === !E.appState ||
                "updating" === !E.appState,
              P = R ? r.a.createElement(Z, null) : null;
            return (
              Object(n.useEffect)(
                function () {
                  if (
                    (t &&
                      t !== E.appState &&
                      (f({ type: "APP_STATE", appState: t }),
                      f({
                        type: "TRIGGER_STATE_UPDATE",
                        triggerStateUpdate: !0,
                      })),
                    E.triggerStateUpdate && E.username)
                  ) {
                    j(r.a.createElement($, null)),
                      I(r.a.createElement(le, null));
                    var e = [];
                    e.push(
                      i.a.get("/history", {
                        params: {
                          username: E.username,
                          from: E.unixTimeStart,
                          to: E.unixTimeEnd,
                        },
                      }),
                    ),
                      E.unixPrevTimeStart &&
                        e.push(
                          i.a.get("/history", {
                            params: {
                              username: E.username,
                              from: E.unixPrevTimeStart,
                              to: E.unixTimeStart - 86400,
                            },
                          }),
                        ),
                      Promise.all(e)
                        .then(function (e) {
                          var t = Object(o.a)(e, 2),
                            a = t[0],
                            n = t[1];
                          switch (
                            (_({ type: "SONG_HISTORY", songHistory: a.data }),
                            n &&
                              _({
                                type: "PREV_SONG_HISTORY",
                                prevSongHistory: n.data,
                              }),
                            f({ type: "ABBREVIATED", appState: !1 }),
                            E.appState)
                          ) {
                            case "updating":
                              j(r.a.createElement($, null));
                              break;
                            case "dashboard":
                              j(r.a.createElement(O, null));
                              break;
                            case "dow":
                              j(r.a.createElement(pe, null));
                              break;
                            case "date":
                              j(r.a.createElement(de, null));
                              break;
                            case "hour":
                              j(r.a.createElement(ge, null));
                              break;
                            case "history":
                              j(r.a.createElement(ie, null));
                              break;
                            case "genre-pie":
                              f({ type: "ABBREVIATED", abbreviated: !0 }),
                                j(r.a.createElement(fe, null));
                              break;
                            case "tutorial":
                            default:
                              j(null);
                          }
                          f({
                            type: "TRIGGER_STATE_UPDATE",
                            triggerStateUpdate: !1,
                          });
                        })
                        .catch(function (e) {
                          try {
                            (document.querySelector("footer").style.display =
                              "none"),
                              (document.querySelector(
                                ".main-header",
                              ).style.display = "none"),
                              (document.querySelector(
                                ".user-info",
                              ).style.display = "none");
                          } catch (e) {}
                          console.log(e),
                            e.response && 502 !== e.response.status
                              ? j(
                                  r.a.createElement(he, {
                                    errorMessage:
                                      "Actually we have no idea. Our bad. Maybe the server's down?",
                                  }),
                                )
                              : j(
                                  r.a.createElement(he, {
                                    errorMessage: e.response
                                      ? e.response.data
                                      : null,
                                  }),
                                );
                        });
                  }
                },
                [
                  t,
                  E.triggerStateUpdate,
                  E.appState,
                  E.username,
                  E.unixTimeEnd,
                  E.unixPrevTimeStart,
                  E.unixTimeStart,
                ],
              ),
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "main",
                  { className: "app ".concat(R ? "" : "app--unpopulated") },
                  r.a.createElement(
                    p.Provider,
                    { value: { config: E, configDispatch: f } },
                    r.a.createElement(
                      y.Provider,
                      { value: { songHistory: k, songHistoryDispatch: _ } },
                      A,
                      T,
                      r.a.createElement(q, {
                        defaultStart: u.timeStart,
                        defaultEnd: u.timeEnd,
                        showMessages: !E.appState || "home" === E.appState,
                        showBack:
                          "dow" === E.appState ||
                          "date" === E.appState ||
                          "hour" === E.appState ||
                          "history" === E.appState,
                      }),
                    ),
                  ),
                ),
                P,
              )
            );
          }),
        ve = function () {
          var e = r.a.createElement(
            "span",
            { className: "logo-font" },
            "WAILto",
          );
          return (
            Object(n.useEffect)(function () {
              setTimeout(function () {
                if (null === localStorage.getItem("wt-username"))
                  try {
                    document
                      .querySelector(".btn-link--demo")
                      .classList.add("entry");
                  } catch (e) {
                    console.error("can't add demo animation");
                  }
              }, 1e4);
            }, []),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "section",
                { className: "home__header" },
                r.a.createElement(
                  "p",
                  { className: "css-logo" },
                  r.a.createElement(
                    "span",
                    { className: "css-logo__wail" },
                    "WAIL",
                  ),
                  r.a.createElement(
                    "span",
                    { className: "css-logo__to" },
                    "to",
                  ),
                ),
                r.a.createElement("h1", null, "What Am I Listening To?"),
                r.a.createElement(
                  "div",
                  { className: "header__btn-container" },
                  r.a.createElement(
                    A.b,
                    { className: "btn-link btn-link--1", to: "/app" },
                    r.a.createElement(
                      "button",
                      { className: "btn" },
                      "Get Started",
                    ),
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className: "btn-link btn-link--2",
                      onClick: function (e) {
                        document
                          .querySelector("#get-started")
                          .scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      },
                    },
                    r.a.createElement(
                      "button",
                      { className: "btn" },
                      "Learn More",
                    ),
                  ),
                ),
                r.a.createElement(
                  me.h,
                  null,
                  r.a.createElement(
                    me.e,
                    {
                      data: [
                        { "": 0 },
                        { "": 50 },
                        { "": 35 },
                        { "": 66 },
                        { "": 90 },
                        { "": 60 },
                        { "": 84 },
                      ],
                    },
                    "}>",
                    r.a.createElement(me.d, {
                      type: "monotone",
                      dot: { stroke: "#aa5c9f", strokeWidth: 4, r: 10 },
                      dataKey: "",
                      stroke: "#aa5c9f",
                      strokeWidth: 10,
                    }),
                  ),
                ),
              ),
              r.a.createElement(
                "main",
                { className: "home" },
                r.a.createElement(
                  "div",
                  { className: "header__btn-container" },
                  r.a.createElement(
                    "div",
                    { className: "btn-link btn-link--demo" },
                    r.a.createElement(
                      "span",
                      {
                        id: "exit-btn",
                        onClick: function (e) {
                          document
                            .querySelector(".btn-link--demo")
                            .classList.remove("entry"),
                            localStorage.setItem("wt-username", "");
                        },
                        className: "exit-btn",
                      },
                      r.a.createElement(j.a, null),
                    ),
                    r.a.createElement(
                      A.b,
                      { to: "/zookeeprr" },
                      r.a.createElement(
                        "button",
                        { className: "btn btn--demo-cta" },
                        "TRY ",
                        e,
                        r.a.createElement("br", null),
                        r.a.createElement(
                          "span",
                          { className: "sub-button" },
                          "(spoiler: it's my account)",
                        ),
                      ),
                    ),
                  ),
                ),
                r.a.createElement(
                  "section",
                  { className: "home__body" },
                  r.a.createElement(
                    "h2",
                    null,
                    "What Is ",
                    r.a.createElement("span", { className: "logo-font" }, e),
                    "?",
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    r.a.createElement(
                      "span",
                      { className: "body__p-header" },
                      e,
                    ),
                    " (or",
                    " ",
                    r.a.createElement(
                      "strong",
                      null,
                      r.a.createElement("em", null, "What Am I Listening To"),
                    ),
                    ") is a way to analyze your music listening history.",
                    r.a.createElement("br", null),
                    r.a.createElement("br", null),
                    "Learn about your music listening trends, daily breakdowns, and history.",
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement(
                    "div",
                    { className: "header__btn-container" },
                    r.a.createElement(
                      A.b,
                      { className: "btn-link btn-link--1", to: "/app" },
                      r.a.createElement(
                        "button",
                        { className: "btn" },
                        "Check It Out",
                      ),
                    ),
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement(
                    "h2",
                    { id: "get-started" },
                    "Get Started.",
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    r.a.createElement(
                      "span",
                      { className: "body__p-header" },
                      r.a.createElement(
                        "span",
                        { className: "logo-font" },
                        "1. SIGN UP",
                      ),
                      " with Last.fm.",
                    ),
                    " ",
                    r.a.createElement("br", null),
                    r.a.createElement(
                      "a",
                      {
                        href: "https://www.last.fm/join",
                        rel: "noopener noreferrer",
                        target: "_blank",
                      },
                      "(You can do that here)",
                    ),
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "Now, I totally understand if you don't need another service in your life. Feel free to check out ",
                    r.a.createElement(
                      A.b,
                      { to: "/zookeeprr" },
                      "my account's dashboard",
                    ),
                    " if you just want to check out ",
                    e,
                  ),
                  r.a.createElement(
                    "p",
                    { className: "home__body__123" },
                    r.a.createElement(
                      "span",
                      { className: "body__p-header" },
                      r.a.createElement(
                        "span",
                        { className: "logo-font" },
                        "2. CONNECT",
                      ),
                      " your music player to Last.fm.",
                      " ",
                    ),
                    r.a.createElement("br", null),
                    "(They support a ton of players.",
                    " ",
                    r.a.createElement(
                      "a",
                      {
                        href: "https://www.last.fm/about/trackmymusic",
                        rel: "noopener noreferrer",
                        target: "_blank",
                      },
                      "Find yours here.",
                    ),
                    ") This will enable",
                    " ",
                    r.a.createElement(
                      "strong",
                      null,
                      r.a.createElement("em", null, "scrobbling"),
                    ),
                    " ",
                    "with Last.fm.",
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "Scrobbling allows ",
                    e,
                    " to access your history for analysis. According to Last.fm:",
                  ),
                  r.a.createElement(
                    "blockquote",
                    null,
                    "Scrobbling is when Last.fm tracks the music you listen to and automatically adds it to your music profile.",
                  ),
                  r.a.createElement(
                    "p",
                    { className: "home__body__123" },
                    r.a.createElement(
                      "span",
                      { className: "body__p-header" },
                      r.a.createElement(
                        "span",
                        { className: "logo-font" },
                        "3. Listen",
                      ),
                      " to some music!",
                    ),
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    e,
                    " needs at least a day of history to really get interesting. In the meantime, feel free to check out ",
                    r.a.createElement(
                      A.b,
                      { to: "/zookeeprr" },
                      "my account's dashboard",
                    ),
                    ".",
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement("br", null),
                  r.a.createElement(
                    "h2",
                    null,
                    "What Have You Been Listening To?",
                  ),
                  r.a.createElement(
                    "p",
                    { className: "home__body__123" },
                    r.a.createElement(
                      "span",
                      { className: "body__p-header" },
                      r.a.createElement(
                        "span",
                        { className: "logo-font" },
                        "Ready",
                      ),
                      " to see what your music listening looks like?",
                    ),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "header__btn-container" },
                    r.a.createElement(
                      A.b,
                      { className: "btn-link btn-link--1", to: "/app" },
                      r.a.createElement(
                        "button",
                        { className: "btn" },
                        "Find Out Now",
                      ),
                    ),
                  ),
                ),
              ),
              r.a.createElement(Z, null),
            )
          );
        },
        Se = function () {
          return r.a.createElement(
            A.a,
            null,
            r.a.createElement(S.a, { exact: !0, path: "/", component: ve }),
            r.a.createElement(S.a, {
              exact: !0,
              path: "/error",
              component: Error,
            }),
            r.a.createElement(S.a, {
              exact: !0,
              path: "/(app|zookeeprr)",
              render: function (e) {
                return r.a.createElement(ye, e);
              },
            }),
            r.a.createElement(S.a, {
              exact: !0,
              path: "/dashboard",
              render: function (e) {
                return r.a.createElement(
                  ye,
                  Object.assign({}, e, { appState: "dashboard" }),
                );
              },
            }),
            r.a.createElement(S.a, {
              exact: !0,
              path: "/dashboard/dow",
              render: function (e) {
                return r.a.createElement(
                  ye,
                  Object.assign({}, e, { appState: "dow" }),
                );
              },
            }),
            r.a.createElement(S.a, {
              exact: !0,
              path: "/dashboard/date",
              render: function (e) {
                return r.a.createElement(
                  ye,
                  Object.assign({}, e, { appState: "date" }),
                );
              },
            }),
            r.a.createElement(S.a, {
              exact: !0,
              path: "/dashboard/hour",
              render: function (e) {
                return r.a.createElement(
                  ye,
                  Object.assign({}, e, { appState: "hour" }),
                );
              },
            }),
            r.a.createElement(S.a, {
              exact: !0,
              path: "/dashboard/week",
              render: function (e) {
                return r.a.createElement(
                  ye,
                  Object.assign({}, e, { appState: "week" }),
                );
              },
            }),
            r.a.createElement(S.a, {
              exact: !0,
              path: "/dashboard/history",
              render: function (e) {
                return r.a.createElement(
                  ye,
                  Object.assign({}, e, { appState: "history" }),
                );
              },
            }),
            r.a.createElement(S.a, {
              exact: !0,
              path: "/dashboard/genre-pie",
              render: function (e) {
                return r.a.createElement(
                  ye,
                  Object.assign({}, e, { appState: "genre-pie" }),
                );
              },
            }),
          );
        };
      c.a.render(r.a.createElement(Se, null), document.getElementById("root"));
    },
  },
  [[203, 1, 2]],
]);
//# sourceMappingURL=main.6a707b3e.chunk.js.map
