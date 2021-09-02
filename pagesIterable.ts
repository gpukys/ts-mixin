import { Item } from "./item";

type Constructor<A = object> = new (...input: any[]) => A
 
export function IterableMixin<TBase extends Constructor<Item>>(Base: TBase) {
  return class extends Base {
    [Symbol.iterator]() {
        let index = -1;
        return {
          next: () => {
            index++;
            const res = this.pageToString?.(index) ?? null;
            return { 
              value: res,
              done: !res
            }
          }}
      }
  };
}