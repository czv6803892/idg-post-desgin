import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      // tslint:disable no-any
      [elem: string]: any;
    }
  }
  interface Window {
    // tslint:disable no-any
    [propsName: string]: any;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // tslint:disable no-any
    [propName: string]: any;
    ref?: string;
  }
}
