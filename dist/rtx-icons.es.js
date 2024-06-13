import { defineComponent as l, computed as s, openBlock as i, createElementBlock as r, createElementVNode as c } from "vue";
const u = ["width", "height"], d = ["fill"], a = /* @__PURE__ */ l({
  __name: "Add",
  props: {
    size: { default: 10 },
    color: {}
  },
  setup(o) {
    const e = o, n = s(() => e.color || "currentColor");
    return (t, h) => (i(), r("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 10 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      c("path", {
        d: "M10 5.71429H5.71429V10H4.28571V5.71429H0V4.28571H4.28571V0H5.71429V4.28571H10V5.71429Z",
        fill: n.value
      }, null, 8, d)
    ], 8, u));
  }
}), _ = {
  install(o) {
    o.component("rtx-add", a);
  }
}, p = ["width", "height"], f = ["fill"], w = /* @__PURE__ */ l({
  __name: "Close",
  props: {
    size: { default: 10 },
    color: {}
  },
  setup(o) {
    const e = o, n = s(() => e.color || "currentColor");
    return (t, h) => (i(), r("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 10 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      c("path", {
        d: "M5.88463 5.0001L9.81717 1.06756C10.0615 0.823448 10.0615 0.427359 9.81717 0.183243C9.57285 -0.0610811 9.17718 -0.0610811 8.93285 0.183243L5.00031 4.11578L1.06756 0.183243C0.82324 -0.0610811 0.427568 -0.0610811 0.183243 0.183243C-0.0610811 0.427359 -0.0610811 0.823448 0.183243 1.06756L4.11599 5.0001L0.183243 8.93264C-0.0610811 9.17676 -0.0610811 9.57285 0.183243 9.81697C0.305406 9.93892 0.465509 10 0.625404 10C0.785299 10 0.945402 9.93892 1.06756 9.81676L5.00031 5.88422L8.93285 9.81676C9.05501 9.93892 9.21512 10 9.37501 10C9.53491 10 9.69501 9.93892 9.81717 9.81676C10.0615 9.57264 10.0615 9.17655 9.81717 8.93244L5.88463 5.0001Z",
        fill: n.value
      }, null, 8, f)
    ], 8, p));
  }
}), g = {
  install(o) {
    o.component("rtx-close", w);
  }
}, C = ["width", "height"], L = ["fill"], m = /* @__PURE__ */ l({
  __name: "Edit",
  props: {
    size: { default: 10 },
    color: {}
  },
  setup(o) {
    const e = o, n = s(() => e.color || "currentColor");
    return (t, h) => (i(), r("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 10 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      c("path", {
        d: "M0 7.91696V10H2.08304L8.22663 3.85641L6.14359 1.77336L0 7.91696ZM9.83752 2.24552C10.0542 2.02888 10.0542 1.67893 9.83752 1.4623L8.5377 0.162477C8.32107 -0.0541591 7.97111 -0.0541591 7.75448 0.162477L6.73795 1.179L8.821 3.26205L9.83752 2.24552Z",
        fill: n.value
      }, null, 8, L)
    ], 8, C));
  }
}), v = {
  install(o) {
    o.component("rtx-edit", m);
  }
}, z = ["width", "height"], x = ["fill"], $ = /* @__PURE__ */ l({
  __name: "Left",
  props: {
    size: { default: 10 },
    color: {}
  },
  setup(o) {
    const e = o, n = s(() => e.color || "currentColor");
    return (t, h) => (i(), r("svg", {
      width: t.size * 0.7,
      height: t.size,
      viewBox: "0 0 7 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      c("path", {
        d: "M7 1.175L3.18333 5L7 8.825L5.825 10L0.825001 5L5.825 -1.02722e-07L7 1.175Z",
        fill: n.value
      }, null, 8, x)
    ], 8, z));
  }
}), V = {
  install(o) {
    o.component("rtx-left", $);
  }
}, B = {
  install: (o) => {
    o.use(_), o.use(g), o.use(v), o.use(V);
  }
};
export {
  B as default
};
