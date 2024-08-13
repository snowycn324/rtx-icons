import { defineComponent as n, computed as i, openBlock as r, createElementBlock as c, createElementVNode as s } from "vue";
const u = ["width", "height"], a = ["fill"], C = /* @__PURE__ */ n({
  __name: "Add",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z",
        fill: l.value
      }, null, 8, a)
    ], 8, u));
  }
}), _ = {
  install(o) {
    o.component("rtx-add", C);
  }
}, d = ["width", "height"], f = ["fill"], w = /* @__PURE__ */ n({
  __name: "Close",
  props: {
    size: { default: 10 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M7.06156 6.00012L11.7806 1.28108C12.0738 0.988138 12.0738 0.512831 11.7806 0.219892C11.4874 -0.0732973 11.0126 -0.0732973 10.7194 0.219892L6.00038 4.93894L1.28108 0.219892C0.987888 -0.0732973 0.513081 -0.0732973 0.219892 0.219892C-0.0732973 0.512831 -0.0732973 0.988138 0.219892 1.28108L4.93919 6.00012L0.219892 10.7192C-0.0732973 11.0121 -0.0732973 11.4874 0.219892 11.7804C0.366487 11.9267 0.558611 12 0.750485 12C0.942359 12 1.13448 11.9267 1.28108 11.7801L6.00038 7.06106L10.7194 11.7801C10.866 11.9267 11.0581 12 11.25 12C11.4419 12 11.634 11.9267 11.7806 11.7801C12.0738 11.4872 12.0738 11.0119 11.7806 10.7189L7.06156 6.00012Z",
        fill: l.value
      }, null, 8, f)
    ], 8, d));
  }
}), p = {
  install(o) {
    o.component("rtx-close", w);
  }
}, g = ["width", "height"], v = ["fill"], m = /* @__PURE__ */ n({
  __name: "Edit",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M0 9.50035V12H2.49965L9.87196 4.62769L7.37231 2.12804L0 9.50035ZM11.805 2.69463C12.065 2.43466 12.065 2.01472 11.805 1.75476L10.2452 0.194973C9.98528 -0.064991 9.56534 -0.064991 9.30537 0.194973L8.08554 1.4148L10.5852 3.91446L11.805 2.69463Z",
        fill: l.value
      }, null, 8, v)
    ], 8, g));
  }
}), L = {
  install(o) {
    o.component("rtx-edit", m);
  }
}, H = ["width", "height", "fill"], z = ["fill"], $ = /* @__PURE__ */ n({
  __name: "Left",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size * 0.67,
      height: t.size,
      viewBox: "0 0 8 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M8 1.41L3.42 6L8 10.59L6.59 12L0.590001 6L6.59 -1.23266e-07L8 1.41Z",
        fill: l.value
      }, null, 8, z)
    ], 8, H));
  }
}), V = {
  install(o) {
    o.component("rtx-left", $);
  }
}, x = ["width", "height", "fill"], M = ["fill"], Z = /* @__PURE__ */ n({
  __name: "Hamburger",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size * 1.16,
      height: t.size,
      viewBox: "0 0 14 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M13.5 0H0.136364C0.0613636 0 0 0.0613636 0 0.136364V1.22727C0 1.30227 0.0613636 1.36364 0.136364 1.36364H13.5C13.575 1.36364 13.6364 1.30227 13.6364 1.22727V0.136364C13.6364 0.0613636 13.575 0 13.5 0ZM13.5 10.6364H0.136364C0.0613636 10.6364 0 10.6977 0 10.7727V11.8636C0 11.9386 0.0613636 12 0.136364 12H13.5C13.575 12 13.6364 11.9386 13.6364 11.8636V10.7727C13.6364 10.6977 13.575 10.6364 13.5 10.6364ZM13.5 5.31818H0.136364C0.0613636 5.31818 0 5.37955 0 5.45455V6.54545C0 6.62045 0.0613636 6.68182 0.136364 6.68182H13.5C13.575 6.68182 13.6364 6.62045 13.6364 6.54545V5.45455C13.6364 5.37955 13.575 5.31818 13.5 5.31818Z",
        fill: l.value
      }, null, 8, M)
    ], 8, x));
  }
}), B = {
  install(o) {
    o.component("rtx-hamburger", Z);
  }
}, P = ["width", "height", "fill"], D = ["fill"], b = /* @__PURE__ */ n({
  __name: "Back",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 12 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M12 5.25H2.8725L7.065 1.0575L6 0L0 6L6 12L7.0575 10.9425L2.8725 6.75H12V5.25Z",
        fill: l.value
      }, null, 8, D)
    ], 8, P));
  }
}), k = {
  install(o) {
    o.component("rtx-back", b);
  }
}, R = ["width", "height", "fill"], E = ["fill"], U = /* @__PURE__ */ n({
  __name: "Search",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 12 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M8.57633 7.54717H8.03431L7.8422 7.36192C8.51458 6.57976 8.91938 5.56432 8.91938 4.45969C8.91938 1.99657 6.92281 0 4.45969 0C1.99657 0 0 1.99657 0 4.45969C0 6.92281 1.99657 8.91938 4.45969 8.91938C5.56432 8.91938 6.57976 8.51458 7.36192 7.8422L7.54717 8.03431V8.57633L10.9777 12L12 10.9777L8.57633 7.54717ZM4.45969 7.54717C2.75129 7.54717 1.37221 6.1681 1.37221 4.45969C1.37221 2.75129 2.75129 1.37221 4.45969 1.37221C6.1681 1.37221 7.54717 2.75129 7.54717 4.45969C7.54717 6.1681 6.1681 7.54717 4.45969 7.54717Z",
        fill: l.value
      }, null, 8, E)
    ], 8, R));
  }
}), y = {
  install(o) {
    o.component("rtx-search", U);
  }
}, A = ["width", "height", "fill"], S = ["fill"], T = /* @__PURE__ */ n({
  __name: "Demap",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size * 0.92,
      viewBox: "0 0 12 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M7.434 5.26736L8.4 6.23336V5.26736H7.434ZM9 2.86736H6.6V4.00736H9C10.026 4.00736 10.86 4.84136 10.86 5.86736C10.86 6.62936 10.398 7.28936 9.738 7.57136L10.578 8.41136C11.43 7.88336 12 6.94136 12 5.86736C12 4.21136 10.656 2.86736 9 2.86736ZM0 1.22936L1.866 3.09536C0.774 3.53936 0 4.61336 0 5.86736C0 7.52336 1.344 8.86736 3 8.86736H5.4V7.72736H3C1.974 7.72736 1.14 6.89336 1.14 5.86736C1.14 4.91336 1.866 4.12736 2.796 4.02536L4.038 5.26736H3.6V6.46736H5.238L6.6 7.82936V8.86736H7.638L10.044 11.2734L10.89 10.4274L0.846 0.383362L0 1.22936Z",
        fill: l.value
      }, null, 8, S)
    ], 8, A));
  }
}), I = {
  install(o) {
    o.component("rtx-demap", T);
  }
}, N = ["width", "height", "fill"], j = ["fill"], q = /* @__PURE__ */ n({
  __name: "Remap",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size / 2,
      viewBox: "0 0 12 6",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M9 0H6.6V1.2H9C9.99 1.2 10.8 2.01 10.8 3C10.8 3.99 9.99 4.8 9 4.8H6.6V6H9C10.656 6 12 4.656 12 3C12 1.344 10.656 0 9 0ZM5.4 4.8H3C2.01 4.8 1.2 3.99 1.2 3C1.2 2.01 2.01 1.2 3 1.2H5.4V0H3C1.344 0 0 1.344 0 3C0 4.656 1.344 6 3 6H5.4V4.8ZM3.6 2.4H8.4V3.6H3.6V2.4Z",
        fill: l.value
      }, null, 8, j)
    ], 8, N));
  }
}), F = {
  install(o) {
    o.component("rtx-remap", q);
  }
}, G = ["width", "height", "fill"], J = ["fill"], K = ["fill"], O = /* @__PURE__ */ n({
  __name: "Chain",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 12 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M7.19872 0.82378L4.75965 3.26283C4.75494 3.26751 4.75201 3.27321 4.74733 3.27794C5.34819 3.19043 5.96546 3.25043 6.53767 3.47355L8.19306 1.81816C8.74147 1.26975 9.63338 1.26975 10.1818 1.81816C10.7302 2.36653 10.7302 3.25849 10.1818 3.80686C10.0883 3.90042 7.60173 6.38697 7.74275 6.2459C7.19 6.7987 6.28316 6.77505 5.75401 6.2459C5.47996 5.97185 5.03375 5.97185 4.75965 6.2459L4.33276 6.67279C4.45117 6.87398 4.58692 7.06757 4.75965 7.24031C5.80122 8.28187 7.59404 8.36507 8.72202 7.25263C8.72673 7.24795 8.7324 7.24499 8.73713 7.24031L11.1762 4.80126C12.2745 3.70289 12.2745 1.92215 11.1762 0.82378C10.0778 -0.274593 8.2971 -0.274593 7.19872 0.82378Z",
        fill: l.value
      }, null, 8, J),
      s("path", {
        d: "M5.4676 8.52111L3.80686 10.1818C3.2585 10.7303 2.36653 10.7303 1.81817 10.1818C1.26975 9.63343 1.26975 8.74152 1.81817 8.1931L4.26253 5.74874C4.81528 5.19599 5.72213 5.21959 6.25127 5.74874C6.52533 6.02284 6.97155 6.02284 7.24563 5.74874L7.67252 5.32185C7.55412 5.12066 7.41837 4.92707 7.24563 4.75438C6.20606 3.71477 4.41455 3.62631 3.28327 4.74203C3.27856 4.74672 3.27289 4.74967 3.26815 4.75438L0.823763 7.19877C-0.274564 8.2971 -0.274611 10.0779 0.823763 11.1763C1.92214 12.2746 3.70292 12.2746 4.80124 11.1763L7.24561 8.73184C7.25032 8.72715 7.25325 8.7215 7.25794 8.71672C6.65707 8.80424 6.03982 8.74424 5.4676 8.52111Z",
        fill: l.value
      }, null, 8, K)
    ], 8, G));
  }
}), Q = {
  install(o) {
    o.component("rtx-chain", O);
  }
}, W = ["width", "height", "fill"], X = ["fill"], Y = /* @__PURE__ */ n({
  __name: "Right",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 8 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z",
        fill: l.value
      }, null, 8, X)
    ], 8, W));
  }
}), o1 = {
  install(o) {
    o.component("rtx-right", Y);
  }
}, t1 = ["width", "height", "fill"], l1 = ["fill"], e1 = /* @__PURE__ */ n({
  __name: "Delete",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 12 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M10.8235 2.16H8.94118V0.96C8.94118 0.4305 8.51912 0 8 0H3.29412C2.775 0 2.35294 0.4305 2.35294 0.96V2.16H0.470588C0.210294 2.16 0 2.3745 0 2.64V3.12C0 3.186 0.0529412 3.24 0.117647 3.24H1.00588L1.36912 11.085C1.39265 11.5965 1.80735 12 2.30882 12H8.98529C9.48823 12 9.90147 11.598 9.925 11.085L10.2882 3.24H11.1765C11.2412 3.24 11.2941 3.186 11.2941 3.12V2.64C11.2941 2.3745 11.0838 2.16 10.8235 2.16ZM7.88235 2.16H3.41176V1.08H7.88235V2.16Z",
        fill: l.value
      }, null, 8, l1)
    ], 8, t1));
  }
}), s1 = {
  install(o) {
    o.component("rtx-delete", e1);
  }
}, n1 = ["width", "height", "fill"], i1 = ["fill"], r1 = /* @__PURE__ */ n({
  __name: "Copy",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size * 0.92,
      height: t.size,
      viewBox: "0 0 11 13",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M3.6 10.2667C3.27 10.2667 2.9875 10.1492 2.7525 9.91425C2.5175 9.67925 2.4 9.39675 2.4 9.06675V1.86675C2.4 1.53675 2.5175 1.25425 2.7525 1.01925C2.9875 0.784248 3.27 0.666748 3.6 0.666748H9C9.33 0.666748 9.6125 0.784248 9.8475 1.01925C10.0825 1.25425 10.2 1.53675 10.2 1.86675V9.06675C10.2 9.39675 10.0825 9.67925 9.8475 9.91425C9.6125 10.1492 9.33 10.2667 9 10.2667H3.6ZM3.6 9.06675H9V1.86675H3.6V9.06675ZM1.2 12.6667C0.87 12.6667 0.5875 12.5492 0.3525 12.3142C0.1175 12.0792 0 11.7967 0 11.4667V3.06675H1.2V11.4667H7.8V12.6667H1.2Z",
        fill: l.value
      }, null, 8, i1)
    ], 8, n1));
  }
}), c1 = {
  install(o) {
    o.component("rtx-copy", r1);
  }
}, h1 = ["width", "height", "fill"], u1 = ["fill"], a1 = /* @__PURE__ */ n({
  __name: "Down",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size * 0.67,
      viewBox: "0 0 12 8",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M10.59 0.59L6 5.17L1.41 0.589999L5.24537e-07 2L6 8L12 2L10.59 0.59Z",
        fill: l.value
      }, null, 8, u1)
    ], 8, h1));
  }
}), C1 = {
  install(o) {
    o.component("rtx-down", a1);
  }
}, _1 = ["width", "height", "fill"], d1 = ["fill"], f1 = /* @__PURE__ */ n({
  __name: "Up",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size * 0.67,
      viewBox: "0 0 12 8",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z",
        fill: l.value
      }, null, 8, d1)
    ], 8, _1));
  }
}), w1 = {
  install(o) {
    o.component("rtx-up", f1);
  }
}, p1 = ["width", "height", "fill"], g1 = ["fill"], v1 = /* @__PURE__ */ n({
  __name: "Trigger",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size * 0.58,
      height: t.size,
      viewBox: "0 0 7 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M2.66414 12H1.99747L2.66414 7.33333H0.330805C-0.0558618 7.33333 -0.0491952 7.12 0.0774715 6.89333C0.204138 6.66667 0.110805 6.84 0.124138 6.81333C0.984138 5.29333 2.27747 3.02667 3.99747 0H4.66414L3.99747 4.66667H6.3308C6.65747 4.66667 6.70414 4.88667 6.64414 5.00667L6.59747 5.10667C3.9708 9.7 2.66414 12 2.66414 12Z",
        fill: l.value
      }, null, 8, g1)
    ], 8, p1));
  }
}), m1 = {
  install(o) {
    o.component("rtx-trigger", v1);
  }
}, L1 = ["width", "height", "fill"], H1 = ["fill"], z1 = /* @__PURE__ */ n({
  __name: "Download",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size * 0.83,
      height: t.size,
      viewBox: "0 0 10 12",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M9.88235 4.23529H7.05882V0H2.82353V4.23529H0L4.94118 9.17647L9.88235 4.23529ZM0 10.5882V12H9.88235V10.5882H0Z",
        fill: l.value
      }, null, 8, H1)
    ], 8, L1));
  }
}), $1 = {
  install(o) {
    o.component("rtx-download", z1);
  }
}, V1 = ["width", "height", "fill"], x1 = ["fill"], M1 = /* @__PURE__ */ n({
  __name: "Updater",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, l = i(() => e.color || "currentColor");
    return (t, h) => (r(), c("svg", {
      width: t.size,
      height: t.size * 1.33,
      viewBox: "0 0 15 13",
      fill: l.value,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      s("path", {
        d: "M2.11362 3.27194L0.213548 2.06686L1.14021 6.20707L5.28041 5.28041L3.38034 4.07533C4.70994 1.97892 7.49423 1.35574 9.59065 2.68534C10.2303 3.09105 10.7379 3.63502 11.0829 4.25344L12.594 3.91521C12.1283 2.9271 11.3884 2.04929 10.394 1.41863C7.59459 -0.356856 3.88911 0.472502 2.11362 3.27194ZM10.9806 8.89565C9.65103 10.9921 6.86674 11.6152 4.77032 10.2856C4.13063 9.87993 3.62303 9.33596 3.27811 8.71755L1.76693 9.05578C2.23264 10.0439 2.97257 10.9217 3.96694 11.5524C6.76638 13.3278 10.4719 12.4985 12.2473 9.69904L14.1474 10.9041L13.2208 6.76391L9.08056 7.69057L10.9806 8.89565Z",
        fill: l.value
      }, null, 8, x1)
    ], 8, V1));
  }
}), Z1 = {
  install(o) {
    o.component("rtx-updater", M1);
  }
}, P1 = {
  install: (o) => {
    o.use(_), o.use(p), o.use(L), o.use(V), o.use(B), o.use(k), o.use(y), o.use(I), o.use(F), o.use(Q), o.use(o1), o.use(s1), o.use(c1), o.use(C1), o.use(w1), o.use(m1), o.use($1), o.use(Z1);
  }
};
export {
  P1 as default
};
