import { defineComponent as l, computed as s, openBlock as i, createElementBlock as r, createElementVNode as c } from "vue";
const u = ["width", "height"], d = ["fill"], a = /* @__PURE__ */ l({
  __name: "Add",
  props: {
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, n = s(() => e.color || "currentColor");
    return (t, h) => (i(), r("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      c("path", {
        d: "M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z",
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
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      c("path", {
        d: "M7.06156 6.00012L11.7806 1.28108C12.0738 0.988138 12.0738 0.512831 11.7806 0.219892C11.4874 -0.0732973 11.0126 -0.0732973 10.7194 0.219892L6.00038 4.93894L1.28108 0.219892C0.987888 -0.0732973 0.513081 -0.0732973 0.219892 0.219892C-0.0732973 0.512831 -0.0732973 0.988138 0.219892 1.28108L4.93919 6.00012L0.219892 10.7192C-0.0732973 11.0121 -0.0732973 11.4874 0.219892 11.7804C0.366487 11.9267 0.558611 12 0.750485 12C0.942359 12 1.13448 11.9267 1.28108 11.7801L6.00038 7.06106L10.7194 11.7801C10.866 11.9267 11.0581 12 11.25 12C11.4419 12 11.634 11.9267 11.7806 11.7801C12.0738 11.4872 12.0738 11.0119 11.7806 10.7189L7.06156 6.00012Z",
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
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, n = s(() => e.color || "currentColor");
    return (t, h) => (i(), r("svg", {
      width: t.size,
      height: t.size,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      c("path", {
        d: "M0 9.50035V12H2.49965L9.87196 4.62769L7.37231 2.12804L0 9.50035ZM11.805 2.69463C12.065 2.43466 12.065 2.01472 11.805 1.75476L10.2452 0.194973C9.98528 -0.064991 9.56534 -0.064991 9.30537 0.194973L8.08554 1.4148L10.5852 3.91446L11.805 2.69463Z",
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
    size: { default: 12 },
    color: {}
  },
  setup(o) {
    const e = o, n = s(() => e.color || "currentColor");
    return (t, h) => (i(), r("svg", {
      width: t.size * 0.67,
      height: t.size,
      viewBox: "0 0 8 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      c("path", {
        d: "M8 1.41L3.42 6L8 10.59L6.59 12L0.590001 6L6.59 -1.23266e-07L8 1.41Z",
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
