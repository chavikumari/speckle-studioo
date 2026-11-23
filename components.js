const siteRoot = new URL(".", document.currentScript.src);
const starShape = {
  path: "M0 0C.327 .55 1.142 .51 1.41-.071 3.957-5.576 6.344-11.156 8.567-16.8 8.894-17.63 7.911-18.361 7.201-17.819 6.789-17.504 6.396-17.227 6.077-17.037-.094-13.365-4.862-9.893-11.032-6.221-11.791-5.769-11.367-4.597-10.497-4.749-8.667-5.067-6.855-5.585-5.042-6.002 .203-7.207 5.253-6.137 10.709-5.503 11.467-5.415 11.782-6.439 11.105-6.792 7.806-8.511 4.674-10.289 1.443-11.94-.697-13.033-2.502-13.77-4.92-15.176-5.818-15.699-7.478-16.442-8.651-17.26-9.32-17.727-10.192-16.999-9.831-16.268-8.539-13.648-6.556-11.044-5.117-8.62Z",
  viewBox: "-12 -1 25 21",
  transform: "scale(1 -1)",
};
function Star() {
  return preact.h(
    "svg",
    { class: "star ", viewBox: starShape.viewBox, "aria-hidden": true },
    preact.h("path", {
      d: starShape.path,
      transform: starShape.transform,
      fill: "currentColor",
    }),
  );
}
function Eyebrow({ children }) {
  return preact.h(
    "div",
    { class: "eyebrow" },
    preact.h("span", { class: "tiny-speck" }),
    children,
  );
}
function element(type, props, key) {
  return preact.h(type, { ...props, key }, props.children);
}
const jsxRuntime = { jsx: element, jsxs: element };
const studio = {
  email: "specklestudio7@gmail.com",
  formEndpoint: "https://formsubmit.co/ajax/specklestudio7@gmail.com",
  url: new URL(".", siteRoot).href.replace(/\/$/, ""),
  timelineOptions: [],
};
const Doodle = (() => {
  const t = jsxRuntime,
    r = preactHooks,
    a = { S: Eyebrow, O: Star },
    o = { f: starShape };
  let n = [
      { name: "Deep red", value: "#690000" },
      { name: "Electric pink", value: "#FF5896" },
      { name: "Butter yellow", value: "#FFDD50" },
      { name: "Ink black", value: "#0C0C0C" },
    ],
    s = "speckle-doodle-v1";
  return function () {
    let e = (0, r.useRef)(null),
      [l, i] = (0, r.useState)(!1),
      [d, c] = (0, r.useState)("pen"),
      [u, h] = (0, r.useState)(n[0].value),
      [p, m] = (0, r.useState)(4),
      [g, b] = (0, r.useState)([]),
      [x, y] = (0, r.useState)(null),
      f = (0, r.useRef)(null),
      k = (0, r.useRef)(null),
      [j, v] = (0, r.useState)(!1),
      [w, S] = (0, r.useState)(null),
      [A, N] = (0, r.useState)(""),
      [C, D] = (0, r.useState)([500, 280]),
      [L, E] = (0, r.useState)(!1);
    function M(e) {
      let t = e.currentTarget.getBoundingClientRect();
      return [
        Math.max(0, Math.min(1e3, ((e.clientX - t.left) / t.width) * 1e3)),
        Math.max(0, Math.min(560, ((e.clientY - t.top) / t.height) * 560)),
      ];
    }
    function U(e) {
      g.length >= 200
        ? N(
            "That’s a wonderfully busy page. Save it, then clear some room for more.",
          )
        : (b((t) => [...t, e]), S(null), N(""));
    }
    function T(e) {
      if (e && k.current !== e.pointerId) return;
      let t = f.current;
      ((f.current = null), (k.current = null), y(null), t && U(t));
    }
    ((0, r.useEffect)(() => {
      try {
        let e = localStorage.getItem(s);
        if (e && e.length < 7e5) {
          let t = JSON.parse(e);
          if (Array.isArray(t)) {
            let e = t
              .slice(0, 200)
              .filter(
                (e) =>
                  e &&
                  ("pen" === e.kind || "star" === e.kind) &&
                  n.some((t) => t.value === e.color) &&
                  [4, 9].includes(e.size) &&
                  Array.isArray(e.points) &&
                  e.points.length > 0 &&
                  e.points.length <= 1500 &&
                  e.points.every(
                    (e) =>
                      Array.isArray(e) &&
                      2 === e.length &&
                      e.every(
                        (e) => "number" == typeof e && Number.isFinite(e),
                      ) &&
                      e[0] >= 0 &&
                      e[0] <= 1e3 &&
                      e[1] >= 0 &&
                      e[1] <= 560,
                  ),
              );
            b(e);
          }
        }
      } catch {}
      v(!0);
    }, []),
      (0, r.useEffect)(() => {
        if (j)
          try {
            localStorage.setItem(s, JSON.stringify(g));
          } catch {
            N(
              "Your browser couldn’t keep this sketch. Use Save doodle to keep a copy.",
            );
          }
      }, [g, j]));
    let F = x ? [...g, x] : g;
    return (0, t.jsxs)("section", {
      className: "doodle-section section",
      id: "leave-a-mark",
      "aria-labelledby": "doodle-title",
      children: [
        (0, t.jsxs)("div", {
          className: "doodle-heading",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(a.S, { children: "A little room to play" }),
                (0, t.jsxs)("h2", {
                  id: "doodle-title",
                  children: [
                    "Leave a little ",
                    (0, t.jsx)("em", {
                      className: "script",
                      children: "mark.",
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("p", {
              children: [
                "A line, a star, a happy accident.",
                (0, t.jsx)("br", {}),
                "Let’s see where your curiosity goes.",
              ],
            }),
          ],
        }),
        (0, t.jsxs)("div", {
          className: "doodle-studio",
          children: [
            (0, t.jsxs)("div", {
              className: "doodle-toolbar",
              "aria-label": "Drawing tools",
              children: [
                (0, t.jsxs)("div", {
                  className: "doodle-tool-group",
                  role: "group",
                  "aria-label": "Choose a drawing tool",
                  children: [
                    (0, t.jsxs)("button", {
                      type: "button",
                      "aria-pressed": "pen" === d,
                      onClick: () => c("pen"),
                      children: ["↝ ", (0, t.jsx)("span", { children: "Pen" })],
                    }),
                    (0, t.jsxs)("button", {
                      type: "button",
                      "aria-pressed": "star" === d,
                      onClick: () => c("star"),
                      children: [
                        (0, t.jsx)(a.O, {}),
                        (0, t.jsx)("span", { children: "Star" }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "doodle-colors",
                  role: "group",
                  "aria-label": "Ink colour",
                  children: n.map((e) =>
                    (0, t.jsxs)(
                      "button",
                      {
                        type: "button",
                        "aria-label": `${e.name} ink`,
                        "aria-pressed": u === e.value,
                        onClick: () => h(e.value),
                        style: { "--ink-color": e.value },
                        children: [
                          (0, t.jsx)("span", {}),
                          u === e.value &&
                            (0, t.jsx)("b", {
                              "aria-hidden": "true",
                              children: "✓",
                            }),
                        ],
                      },
                      e.value,
                    ),
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: "doodle-weight",
                  role: "group",
                  "aria-label": "Line weight",
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      "aria-label": "Fine line",
                      "aria-pressed": 4 === p,
                      onClick: () => m(4),
                      children: (0, t.jsx)("span", { className: "fine-dot" }),
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      "aria-label": "Bold line",
                      "aria-pressed": 9 === p,
                      onClick: () => m(9),
                      children: (0, t.jsx)("span", { className: "bold-dot" }),
                    }),
                  ],
                }),
                (0, t.jsx)("button", {
                  type: "button",
                  className: "doodle-toggle",
                  "aria-pressed": l,
                  onClick: () => {
                    (T(), i(!l), E(!1));
                  },
                  children: l ? "Done doodling ✓" : "Start doodling ↗",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: `doodle-paper-wrap ${l ? "is-drawing" : ""}`,
              children: [
                (0, t.jsxs)("svg", {
                  ref: e,
                  className: "doodle-paper",
                  viewBox: "0 0 1000 560",
                  role: "img",
                  "aria-label": `Your doodle, ${g.length} marks. ${l ? "Draw with a pointer, or use arrow keys and Enter to place stars. Escape finishes drawing." : "Choose Start doodling to draw."}`,
                  "aria-describedby": "doodle-help",
                  tabIndex: l ? 0 : -1,
                  onPointerDown: function (e) {
                    if (
                      !l ||
                      !e.isPrimary ||
                      0 !== e.button ||
                      null !== k.current
                    )
                      return;
                    if (g.length >= 200)
                      return void N(
                        "Save this page, then clear some room for more.",
                      );
                    (e.preventDefault(), E(!1));
                    let t = M(e);
                    "star" === d
                      ? U({ kind: "star", color: u, size: p, points: [t] })
                      : ((k.current = e.pointerId),
                        e.currentTarget.setPointerCapture(e.pointerId),
                        (f.current = {
                          kind: "pen",
                          color: u,
                          size: p,
                          points: [t],
                        }),
                        y(f.current));
                  },
                  onPointerMove: function (e) {
                    if (k.current !== e.pointerId || !f.current) return;
                    let t = M(e),
                      r = f.current.points.at(-1);
                    1.5 > Math.hypot(t[0] - r[0], t[1] - r[1]) ||
                      f.current.points.length >= 1500 ||
                      ((f.current = {
                        ...f.current,
                        points: [...f.current.points, t],
                      }),
                      y(f.current));
                  },
                  onPointerUp: T,
                  onPointerCancel: T,
                  onLostPointerCapture: T,
                  onKeyDown: function (e) {
                    if (!l) return;
                    let t = {
                      ArrowLeft: [-20, 0],
                      ArrowRight: [20, 0],
                      ArrowUp: [0, -20],
                      ArrowDown: [0, 20],
                    };
                    if (t[e.key]) {
                      (e.preventDefault(), E(!0));
                      let r = t[e.key];
                      D(([e, t]) => [
                        Math.max(20, Math.min(980, e + r[0])),
                        Math.max(20, Math.min(540, t + r[1])),
                      ]);
                    } else
                      "Enter" === e.key || " " === e.key
                        ? (e.preventDefault(),
                          E(!0),
                          U({ kind: "star", color: u, size: p, points: [C] }),
                          N("A little star, just there."))
                        : "Escape" === e.key && (T(), i(!1), E(!1));
                  },
                  onBlur: () => E(!1),
                  children: [
                    (0, t.jsx)("rect", {
                      width: "1000",
                      height: "560",
                      fill: "#FFFDEE",
                    }),
                    F.map((e, r) =>
                      "star" === e.kind
                        ? (0, t.jsx)(
                            "svg",
                            {
                              "data-mark": "star",
                              x: e.points[0][0] - (4 === e.size ? 22 : 38),
                              y: e.points[0][1] - (4 === e.size ? 19 : 32),
                              width: 4 === e.size ? 44 : 76,
                              height: 4 === e.size ? 38 : 64,
                              viewBox: o.f.viewBox,
                              children: (0, t.jsx)("path", {
                                d: o.f.path,
                                transform: o.f.transform,
                                fill: e.color,
                              }),
                            },
                            r,
                          )
                        : 1 === e.points.length
                          ? (0, t.jsx)(
                              "circle",
                              {
                                "data-mark": "pen",
                                cx: e.points[0][0],
                                cy: e.points[0][1],
                                r: e.size / 2,
                                fill: e.color,
                              },
                              r,
                            )
                          : (0, t.jsx)(
                              "path",
                              {
                                "data-mark": "pen",
                                d: e.points
                                  .map(
                                    ([e, t], r) =>
                                      `${r ? "L" : "M"}${e.toFixed(1)},${t.toFixed(1)}`,
                                  )
                                  .join(" "),
                                fill: "none",
                                stroke: e.color,
                                strokeWidth: e.size,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              },
                              r,
                            ),
                    ),
                    l &&
                      L &&
                      (0, t.jsx)("circle", {
                        "data-helper": !0,
                        cx: C[0],
                        cy: C[1],
                        r: "28",
                        fill: "none",
                        stroke: "#690000",
                        strokeWidth: "1.5",
                        strokeDasharray: "4 5",
                      }),
                  ],
                }),
                !g.length &&
                  !x &&
                  (0, t.jsxs)("div", {
                    className: "doodle-empty",
                    "aria-hidden": "true",
                    children: [
                      (0, t.jsx)(a.O, {}),
                      (0, t.jsxs)("span", {
                        className: "script",
                        children: [
                          "A blank page.",
                          (0, t.jsx)("br", {}),
                          "All yours.",
                        ],
                      }),
                      (0, t.jsx)("span", {
                        children: l
                          ? "Make the first mark."
                          : "No right way. Just your way.",
                      }),
                    ],
                  }),
                (0, t.jsx)("span", {
                  className: "doodle-paper-label",
                  "aria-hidden": "true",
                  children: "SPECKLE STUDIOS × YOU",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "doodle-bottom",
              children: [
                (0, t.jsx)("p", {
                  id: "doodle-help",
                  children: l
                    ? "Draw or tap to stamp. Tap Done doodling to scroll through the page."
                    : "Tap Start doodling to begin. Your sketch stays on this device.",
                }),
                (0, t.jsxs)("div", {
                  className: "doodle-actions",
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        g.length
                          ? (b((e) => e.slice(0, -1)), N("Last mark undone."))
                          : w && (b(w), S(null), N("Your sketch is back."));
                      },
                      disabled: !g.length && !w,
                      children: "↶ Undo",
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        (S(g),
                          b([]),
                          N("A fresh page. Undo will bring your sketch back."));
                      },
                      disabled: !g.length,
                      children: "Clear",
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        if (!e.current) return;
                        let t = e.current.cloneNode(!0);
                        (t.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                          t.setAttribute("width", "1600"),
                          t.setAttribute("height", "896"),
                          t.removeAttribute("class"),
                          t.removeAttribute("tabindex"),
                          t
                            .querySelectorAll("[data-helper]")
                            .forEach((e) => e.remove()));
                        let r = URL.createObjectURL(
                            new Blob(
                              [new XMLSerializer().serializeToString(t)],
                              { type: "image/svg+xml;charset=utf-8" },
                            ),
                          ),
                          a = document.createElement("a");
                        ((a.href = r),
                          (a.download = "a-little-mark-by-you.svg"),
                          a.click(),
                          setTimeout(() => URL.revokeObjectURL(r), 1e3),
                          N("Your doodle is ready to save as an SVG."));
                      },
                      disabled: !g.length,
                      children: "Save doodle ↓",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, t.jsx)("p", {
          className: "doodle-status",
          role: "status",
          children: A,
        }),
        (0, t.jsx)("span", {
          className: "sr-only",
          children:
            "Keyboard drawing: start doodling, focus the drawing area, use arrow keys to move and Enter or Space to stamp a star. All tools and colours work with the keyboard.",
        }),
      ],
    });
  };
})();
const Gallery = (() => {
  const t = jsxRuntime,
    i = preactHooks,
    a = {
      default: {
        "alamari/4": { width: 1920, height: 2400 },
        "alamari/2": { width: 1920, height: 2400 },
        "alamari/5": { width: 1920, height: 2400 },
        "alamari/3": { width: 1920, height: 2400 },
        "alamari/6": { width: 1920, height: 2400 },
        "alamari/7": { width: 1920, height: 2400 },
        "alamari/1": { width: 1920, height: 2400 },
        "main-character-coffee/9": { width: 1920, height: 2400 },
        "main-character-coffee/4": { width: 1920, height: 2400 },
        "main-character-coffee/10": { width: 1920, height: 2400 },
        "main-character-coffee/2": { width: 1920, height: 2400 },
        "main-character-coffee/8": { width: 1920, height: 2400 },
        "main-character-coffee/5": { width: 1920, height: 2400 },
        "main-character-coffee/11": { width: 1920, height: 2400 },
        "main-character-coffee/3": { width: 1920, height: 2400 },
        "main-character-coffee/14": { width: 1920, height: 2400 },
        "main-character-coffee/6": { width: 1920, height: 2400 },
        "main-character-coffee/12": { width: 1920, height: 2400 },
        "main-character-coffee/15": { width: 1920, height: 2400 },
        "main-character-coffee/7": { width: 1920, height: 2400 },
        "main-character-coffee/13": { width: 1920, height: 2400 },
        "main-character-coffee/1": { width: 1920, height: 2400 },
        "the-real-chai-company/9": { width: 864, height: 1184 },
        "the-real-chai-company/4": { width: 1920, height: 2400 },
        "the-real-chai-company/2": { width: 1920, height: 2400 },
        "the-real-chai-company/8": { width: 1920, height: 3413 },
        "the-real-chai-company/5": { width: 1153, height: 1424 },
        "the-real-chai-company/3": { width: 1920, height: 1281 },
        "the-real-chai-company/6": { width: 1920, height: 2400 },
        "the-real-chai-company/7": { width: 1920, height: 1440 },
        "the-real-chai-company/1": { width: 1920, height: 1280 },
        "butter-baby/4": { width: 1672, height: 941 },
        "butter-baby/2": { width: 1672, height: 941 },
        "butter-baby/8": { width: 1086, height: 1448 },
        "butter-baby/5": { width: 1672, height: 941 },
        "butter-baby/3": { width: 1536, height: 1024 },
        "butter-baby/6": { width: 1920, height: 1440 },
        "butter-baby/7": { width: 1161, height: 1354 },
        "butter-baby/1": { width: 1672, height: 941 },
        "candie/9": { width: 1696, height: 2528 },
        "candie/10": { width: 1920, height: 1920 },
        "candie/2": { width: 1920, height: 1107 },
        "candie/8": { width: 1920, height: 1080 },
        "candie/5": { width: 1920, height: 1107 },
        "candie/11": { width: 1920, height: 1107 },
        "candie/3": { width: 1696, height: 2528 },
        "candie/6": { width: 862, height: 1077 },
        "candie/7": { width: 1920, height: 1072 },
        "candie/1": { width: 1920, height: 1920 },
        "candie/4": { width: 1080, height: 1350 },
      },
    };
  function h(e, t, i = 1920) {
    return `${siteRoot}projects/${e}/${t}-${i}.webp`;
  }
  function c(e, t) {
    return a.default[`${e}/${t}`] ?? { width: 1920, height: 1080 };
  }
  function r({
    slug: e,
    id: i,
    alt: a,
    className: l,
    eager: n = !1,
    sizes: d = "100vw",
  }) {
    let o = c(e, i),
      s = [480, 960, 1920].filter(
        (e, t, i) =>
          0 === t || Math.min(e, o.width) !== Math.min(i[t - 1], o.width),
      );
    return (0, t.jsx)("img", {
      className: l,
      src: h(e, i),
      srcSet: s.map((t) => `${h(e, i, t)} ${Math.min(t, o.width)}w`).join(", "),
      sizes: d,
      width: o.width,
      height: o.height,
      alt: a,
      loading: n ? "eager" : "lazy",
      decoding: "async",
      fetchPriority: n ? "high" : "auto",
    });
  }
  return function ({ slug: e, title: a, media: l }) {
    let [n, d] = (0, i.useState)(0),
      [o, s] = (0, i.useState)(!1),
      g = (0, i.useRef)(null),
      m = (0, i.useRef)(null),
      u = (0, i.useRef)(null),
      w = l[n],
      f = c(e, w.id),
      y = (e) => d((t) => (t + e + l.length) % l.length);
    (0, i.useEffect)(() => {
      if (!o) return;
      let e = document.body.style.overflow;
      return (
        (document.body.style.overflow = "hidden"),
        () => {
          document.body.style.overflow = e;
        }
      );
    }, [o]);
    let b = (i) =>
        "video" === w.type
          ? (0, t.jsx)(
              "video",
              {
                controls: !0,
                playsInline: !0,
                preload: "metadata",
                "aria-label": w.alt,
                src: `${siteRoot}projects/${e}/${w.id}.mp4`,
              },
              `${i}-${w.id}`,
            )
          : (0, t.jsx)(
              r,
              {
                slug: e,
                id: w.id,
                alt: w.alt,
                eager: !0,
                sizes: i ? "100vw" : "90vw",
              },
              `${i}-${w.id}`,
            ),
      p = (0, t.jsxs)("div", {
        className: "gallery-controls",
        children: [
          (0, t.jsx)("button", {
            onClick: () => y(-1),
            "aria-label": "Previous slide",
            children: "Previous",
          }),
          (0, t.jsxs)("span", {
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [
              n + 1,
              " / ",
              l.length,
              (0, t.jsxs)("span", {
                className: "sr-only",
                children: [" — ", w.caption],
              }),
            ],
          }),
          (0, t.jsx)("button", {
            onClick: () => y(1),
            "aria-label": "Next slide",
            children: "Next",
          }),
        ],
      });
    function x() {
      (g.current?.close(), s(!1), m.current?.focus());
    }
    return (0, t.jsxs)("section", {
      className: "project-gallery",
      "aria-label": `${a} image and video gallery`,
      onKeyDown: (e) => {
        "VIDEO" !== e.target.tagName &&
          ("ArrowRight" === e.key && (e.preventDefault(), y(1)),
          "ArrowLeft" === e.key && (e.preventDefault(), y(-1)));
      },
      children: [
        (0, t.jsxs)("div", {
          className: "gallery-top",
          children: [
            (0, t.jsx)("h2", { children: "A closer look." }),
            (0, t.jsxs)("span", {
              children: [
                l.filter((e) => "image" === e.type).length,
                " images",
                l.some((e) => "video" === e.type) ? " & a little motion" : "",
              ],
            }),
          ],
        }),
        (0, t.jsxs)("div", {
          className: "gallery-stage",
          style: { "--image-ratio": f.width / f.height },
          onTouchStart: (e) => {
            u.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          },
          onTouchEnd: (e) => {
            if (!u.current || "video" === w.type) return;
            let t = e.changedTouches[0].clientX - u.current.x,
              i = e.changedTouches[0].clientY - u.current.y;
            (Math.abs(t) > 55 && Math.abs(t) > Math.abs(i) && y(t < 0 ? 1 : -1),
              (u.current = null));
          },
          children: [
            !o && b(!1),
            (0, t.jsx)("button", {
              className: "gallery-expand",
              ref: m,
              onClick: () => {
                (s(!0), g.current?.showModal());
              },
              children: "View full size",
            }),
          ],
        }),
        (0, t.jsxs)("div", {
          className: "gallery-bottom",
          children: [(0, t.jsx)("p", { children: w.caption }), p],
        }),
        (0, t.jsx)("div", {
          className: "gallery-thumbnails",
          "aria-label": "Choose a slide",
          children: l.map((i, a) =>
            (0, t.jsx)(
              "button",
              {
                className: n === a ? "active" : "",
                "aria-label": `Show ${"video" === i.type ? "video" : `image ${a + 1}`}: ${i.caption}`,
                "aria-pressed": n === a,
                onClick: () => d(a),
                children:
                  "video" === i.type
                    ? (0, t.jsx)("span", {
                        className: "video-thumb",
                        children: "Play film",
                      })
                    : (0, t.jsx)("img", {
                        src: h(e, i.id, 480),
                        alt: "",
                        loading: "lazy",
                      }),
              },
              i.id,
            ),
          ),
        }),
        (0, t.jsxs)("dialog", {
          className: "gallery-dialog",
          ref: g,
          onCancel: () => {
            s(!1);
          },
          onClose: () => {
            s(!1);
          },
          onClick: (e) => {
            e.target === e.currentTarget && x();
          },
          children: [
            (0, t.jsxs)("div", {
              className: "gallery-modal-top",
              children: [
                (0, t.jsxs)("span", { children: [a, " / ", w.caption] }),
                (0, t.jsx)("button", {
                  autoFocus: !0,
                  onClick: x,
                  children: "Close ×",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "gallery-modal-media",
              children: o && b(!0),
            }),
            p,
          ],
        }),
      ],
    });
  };
})();
const Enquiry = (() => {
  const t = jsxRuntime,
    i = preactHooks,
    a = { B: studio };
  let n = [
      {
        id: "brand-identity",
        title: "Brand Identity",
        short: "Brand Identity",
        description:
          "We create identities built around a story, with thoughtful details that make each brand feel like itself.",
        deliverables: [
          "Brand research and creative direction",
          "Visual identity concepts",
          "Logo systems",
          "Colour palettes",
          "Typography systems",
          "Brand elements",
          "Illustrations and patterns",
          "Brand guidelines",
          "Brand applications",
        ],
      },
      {
        id: "packaging",
        title: "Packaging Design",
        short: "Packaging Design",
        description:
          "We design packaging that brings a brand’s personality into the things people hold, open, and remember.",
        deliverables: [
          "Packaging concepts",
          "Label and box designs",
          "Product packaging systems",
          "Packaging graphics",
          "Dielines and print-ready artwork",
          "Packaging mockups",
        ],
      },
      {
        id: "editorial",
        title: "Print & Editorial Design",
        short: "Print & Editorial",
        description:
          "From a printed page to the smallest piece of collateral, we pay attention to how ideas work in the physical world.",
        deliverables: [
          "Editorial layouts",
          "Brochures",
          "Menus",
          "Printed brand collateral",
          "Posters",
          "Stationery",
          "Promotional materials",
        ],
      },
      {
        id: "creative-direction",
        title: "Creative Direction & Visual Explorations",
        short: "Creative Direction",
        description:
          "We explore the unexpected connections that give ideas their character.",
        deliverables: [
          "Visual concepts",
          "Campaign art direction",
          "Illustration direction",
          "Brand application concepts",
          "Visual storytelling",
        ],
        provisional: !0,
      },
    ],
    s = {
      USD: ["250–500", "500–1,000", "1,000–2,000", "2,000–4,000"],
      INR: [
        "25,000–50,000",
        "50,000–1,00,000",
        "1,00,000–2,00,000",
        "2,00,000–4,00,000",
      ],
      EUR: ["250–500", "500–1,000", "1,000–2,000", "2,000–4,000"],
    };
  return function () {
    let [e, r] = (0, i.useState)("USD"),
      [l, o] = (0, i.useState)("Not sure yet"),
      d = (0, i.useRef)(null),
      c = (0, i.useRef)(!1),
      [u, m] = (0, i.useState)(""),
      [h, p] = (0, i.useState)(!1),
      [g, b] = (0, i.useState)(""),
      [y, x] = (0, i.useState)("");
    async function j(t) {
      if ((t.preventDefault(), c.current)) return;
      let i = new FormData(t.currentTarget);
      if ((b(""), m(""), x(""), i.get("website")))
        return void b("Please leave the website field empty.");
      let n = i.getAll("services").map(String);
      if (!n.length) {
        (b("Choose at least one service so we know where to begin."),
          document.getElementById("service-0")?.focus());
        return;
      }
      if (!String(i.get("name")).trim() || !String(i.get("idea")).trim())
        return void b("Please add your name and a little about your idea.");
      let s = {
          name: String(i.get("name")).trim(),
          email: String(i.get("email")).trim(),
          brand: String(i.get("brand")),
          services: n,
          idea: String(i.get("idea")).trim(),
          budget:
            "Not sure yet" === l
              ? "Not sure yet"
              : `${e} ${"Custom budget" === l ? String(i.get("customBudget") || "Let’s discuss") : l}`,
          currency: e,
          timeline: String(i.get("timeline")),
          source: String(i.get("source")),
        },
        u = `Hello Speckle Studios,

${s.idea}

Name: ${s.name}
Email: ${s.email}
Brand: ${s.brand || "Not specified"}
Looking for: ${n.join(", ")}
Budget: ${s.budget || "Let’s discuss"}
Timeline: ${s.timeline || "Let’s discuss"}
Found you through: ${s.source || "Not specified"}`;
      ((c.current = !0), p(!0));
      try {
        if (a.B.formEndpoint) {
          let e = await fetch(a.B.formEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                ...s,
                services: n.join(", "),
                _honey: String(i.get("website") || ""),
                _subject: "New project enquiry — Speckle Studios",
                _template: "table",
                _replyto: s.email,
                _url: `${a.B.url}/contact/`,
              }),
              signal: AbortSignal.timeout(15e3),
            }),
            t = await e.json();
          if (!e.ok || ![!0, "true"].includes(t.success))
            throw Error(
              "Your enquiry could not be sent. Your details are still here. Please try again or email us using the link below.",
            );
          (m(
            "Thank you! Your enquiry has been submitted. We’re looking forward to hearing more about your idea.",
          ),
            d.current?.reset(),
            o("Not sure yet"),
            r("USD"));
        } else
          (x(u),
            m(
              a.B.email
                ? "Your email draft is ready below. Open it in your email app to review and send. Nothing has been sent yet."
                : "Your email draft is ready. Add the studio’s confirmed email address before sending. Nothing has been sent.",
            ));
      } catch (e) {
        (b(
          e instanceof Error
            ? e.message
            : "Something went wrong. Please try again.",
        ),
          x(u));
      } finally {
        (p(!1),
          setTimeout(() => {
            c.current = !1;
          }, 1200));
      }
    }
    return (0, t.jsxs)("form", {
      ref: d,
      onSubmit: j,
      className: "inquiry-form",
      children: [
        (0, t.jsx)("p", {
          className: "form-note",
          children: a.B.formEndpoint
            ? "Fields marked * help us get back to you."
            : "Email draft mode — this form prepares a message in your email app. " +
              (a.B.email
                ? "You’ll review it before sending."
                : "The studio recipient still needs to be added."),
        }),
        (0, t.jsxs)("div", {
          className: "field-pair",
          children: [
            (0, t.jsxs)("label", {
              children: [
                "Your name *",
                (0, t.jsx)("input", {
                  name: "name",
                  required: !0,
                  autoComplete: "name",
                  maxLength: 120,
                  placeholder: "The name we should know",
                }),
              ],
            }),
            (0, t.jsxs)("label", {
              children: [
                "Email address *",
                (0, t.jsx)("input", {
                  name: "email",
                  type: "email",
                  required: !0,
                  autoComplete: "email",
                  maxLength: 254,
                  placeholder: "Somewhere to write back",
                }),
              ],
            }),
          ],
        }),
        (0, t.jsxs)("label", {
          children: [
            "Your brand / business name",
            (0, t.jsx)("input", {
              name: "brand",
              autoComplete: "organization",
              maxLength: 160,
              placeholder: "Or a working title. We like those too.",
            }),
          ],
        }),
        (0, t.jsxs)("fieldset", {
          className: "inquiry-choices",
          "aria-describedby": "service-help",
          children: [
            (0, t.jsx)("legend", { children: "What can we help with? *" }),
            (0, t.jsx)("p", {
              id: "service-help",
              className: "small",
              children: "Choose all that apply.",
            }),
            (0, t.jsx)("div", {
              className: "round-options",
              children: [...n.map((e) => e.short), "Something Else"].map(
                (e, i) =>
                  (0, t.jsxs)(
                    "label",
                    {
                      children: [
                        (0, t.jsx)("input", {
                          type: "checkbox",
                          id: `service-${i}`,
                          name: "services",
                          value: e,
                        }),
                        (0, t.jsxs)("span", {
                          className: "round-choice",
                          children: [
                            (0, t.jsx)("span", { children: e }),
                            (0, t.jsx)("span", {
                              className: "choice-check",
                              "aria-hidden": "true",
                              children: "✓",
                            }),
                          ],
                        }),
                      ],
                    },
                    e,
                  ),
              ),
            }),
          ],
        }),
        (0, t.jsxs)("label", {
          children: [
            "Tell us about your idea *",
            (0, t.jsx)("textarea", {
              name: "idea",
              required: !0,
              minLength: 10,
              maxLength: 5e3,
              rows: 4,
              placeholder: "What are you making, imagining, or figuring out?",
            }),
          ],
        }),
        (0, t.jsxs)("fieldset", {
          className: "inquiry-choices budget-section",
          children: [
            (0, t.jsx)("legend", { children: "What’s your budget?" }),
            (0, t.jsx)("p", {
              className: "small",
              children:
                "Optional. Pick a currency and a range, or tell us your own.",
            }),
            (0, t.jsx)("div", {
              className: "currency-options",
              role: "group",
              "aria-label": "Budget currency",
              children: [
                ["USD", "$ USD"],
                ["INR", "₹ INR"],
                ["EUR", "€ EUR"],
              ].map(([i, a]) =>
                (0, t.jsxs)(
                  "label",
                  {
                    children: [
                      (0, t.jsx)("input", {
                        type: "radio",
                        name: "currency",
                        value: i,
                        checked: e === i,
                        onChange: () => {
                          (r(i), o("Not sure yet"));
                        },
                      }),
                      (0, t.jsx)("span", { children: a }),
                    ],
                  },
                  i,
                ),
              ),
            }),
            (0, t.jsx)("div", {
              className: "round-options budget-options",
              children: [...s[e], "Not sure yet", "Custom budget"].map((e) =>
                (0, t.jsxs)(
                  "label",
                  {
                    children: [
                      (0, t.jsx)("input", {
                        type: "radio",
                        name: "budget",
                        value: e,
                        checked: l === e,
                        onChange: () => o(e),
                      }),
                      (0, t.jsxs)("span", {
                        className: "round-choice",
                        children: [
                          (0, t.jsx)("span", { children: e }),
                          (0, t.jsx)("span", {
                            className: "choice-check",
                            "aria-hidden": "true",
                            children: "✓",
                          }),
                        ],
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
            "Custom budget" === l &&
              (0, t.jsxs)("label", {
                className: "custom-budget",
                children: [
                  "Your budget (",
                  e,
                  ")",
                  (0, t.jsx)("input", {
                    name: "customBudget",
                    type: "number",
                    min: "1",
                    step: "any",
                    required: !0,
                    placeholder: "Enter an amount",
                  }),
                ],
              }),
          ],
        }),
        (0, t.jsx)("div", {
          className: "field-pair",
          children: (0, t.jsxs)("label", {
            children: [
              "Ideal project timeline",
              a.B.timelineOptions.length
                ? (0, t.jsxs)("select", {
                    name: "timeline",
                    children: [
                      (0, t.jsx)("option", {
                        value: "",
                        children: "Let’s discuss",
                      }),
                      a.B.timelineOptions.map((e) =>
                        (0, t.jsx)("option", { children: e }, e),
                      ),
                    ],
                  })
                : (0, t.jsx)("input", {
                    name: "timeline",
                    maxLength: 120,
                    placeholder: "A date, a season, no rush…",
                  }),
            ],
          }),
        }),
        (0, t.jsxs)("label", {
          children: [
            "Where did you find us?",
            (0, t.jsx)("input", {
              name: "source",
              maxLength: 160,
              placeholder: "A friend? A happy internet detour?",
            }),
          ],
        }),
        (0, t.jsx)("div", {
          className: "honeypot",
          "aria-hidden": "true",
          children: (0, t.jsxs)("label", {
            children: [
              "Website",
              (0, t.jsx)("input", {
                name: "website",
                tabIndex: -1,
                autoComplete: "off",
              }),
            ],
          }),
        }),
        g &&
          (0, t.jsx)("p", {
            className: "form-error",
            role: "alert",
            children: g,
          }),
        u &&
          (0, t.jsx)("p", {
            className: "form-status",
            role: "status",
            children: u,
          }),
        (0, t.jsxs)("button", {
          className: "button send-button",
          type: "submit",
          disabled: h,
          children: [
            h
              ? "Sending…"
              : a.B.formEndpoint
                ? "Send enquiry"
                : "Prepare your little idea",
            (0, t.jsx)("span", { "aria-hidden": "true", children: "↗" }),
          ],
        }),
        y &&
          (0, t.jsxs)("div", {
            className: "draft-fallback",
            children: [
              (0, t.jsx)("a", {
                className: "text-link",
                href: `mailto:${a.B.email}?subject=${encodeURIComponent("A little idea for Speckle Studios")}&body=${encodeURIComponent(y)}`,
                children: "Open email draft ↗",
              }),
              (0, t.jsx)("p", {
                className: "small",
                children: "No email app? Save your draft to open later.",
              }),
              (0, t.jsx)("button", {
                type: "button",
                className: "text-link",
                onClick: function () {
                  let e = `To: ${a.B.email}
Subject: A little idea for Speckle Studios
Content-Type: text/plain; charset=UTF-8

${y}`,
                    t = URL.createObjectURL(
                      new Blob([e], { type: "message/rfc822" }),
                    ),
                    i = document.createElement("a");
                  ((i.href = t),
                    (i.download = "a-little-idea.eml"),
                    i.click(),
                    setTimeout(() => URL.revokeObjectURL(t), 1e3));
                },
                children: "Download email draft ↓",
              }),
              (0, t.jsxs)("details", {
                children: [
                  (0, t.jsx)("summary", {
                    children: "Read the prepared message",
                  }),
                  (0, t.jsx)("pre", { children: y }),
                ],
              }),
            ],
          }),
        (0, t.jsx)("p", {
          className: "small privacy-note",
          children: a.B.formEndpoint
            ? "Your enquiry is securely submitted through FormSubmit to specklestudio7@gmail.com so we can respond."
            : "Your details stay in this browser until you open or download the email draft.",
        }),
      ],
    });
  };
})();
