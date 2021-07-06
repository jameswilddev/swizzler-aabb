import {
  AnyPrimitive,
  compileJavascript,
  Expression,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "swizzler";
import ".";
import { AABB } from "./aabb";

export function evaluate(
  expression: Expression<AnyPrimitive>
): number | boolean | ReadonlyArray<number | boolean> {
  return new Function(compileJavascript(`return `, expression))();
}

export function assert1dAabb(
  description: string,
  aabbFactory: () => AABB<FloatPrimitive>,
  expectedLower: number,
  expectedUpper: number
): void {
  describe(description, () => {
    let actual: AABB<FloatPrimitive>;

    beforeAll(() => {
      actual = aabbFactory();
    });

    it(`produces the expected lower bound`, () => {
      expect(evaluate(actual[0])).toEqual(expectedLower);
    });

    it(`produces the expected upper bound`, () => {
      expect(evaluate(actual[1])).toEqual(expectedUpper);
    });
  });
}

export function assert2dAabb(
  description: string,
  aabbFactory: () => AABB<Vec2Primitive>,
  expectedLower: readonly [number, number],
  expectedUpper: readonly [number, number]
): void {
  describe(description, () => {
    let actual: AABB<Vec2Primitive>;

    beforeAll(() => {
      actual = aabbFactory();
    });

    it(`produces the expected lower bound`, () => {
      expect(evaluate(actual[0])).toEqual(expectedLower);
    });

    it(`produces the expected upper bound`, () => {
      expect(evaluate(actual[1])).toEqual(expectedUpper);
    });
  });
}

export function assert3dAabb(
  description: string,
  aabbFactory: () => AABB<Vec3Primitive>,
  expectedLower: readonly [number, number, number],
  expectedUpper: readonly [number, number, number]
): void {
  describe(description, () => {
    let actual: AABB<Vec3Primitive>;

    beforeAll(() => {
      actual = aabbFactory();
    });

    it(`produces the expected lower bound`, () => {
      expect(evaluate(actual[0])).toEqual(expectedLower);
    });

    it(`produces the expected upper bound`, () => {
      expect(evaluate(actual[1])).toEqual(expectedUpper);
    });
  });
}

export function assert4dAabb(
  description: string,
  aabbFactory: () => AABB<Vec4Primitive>,
  expectedLower: readonly [number, number, number, number],
  expectedUpper: readonly [number, number, number, number]
): void {
  describe(description, () => {
    let actual: AABB<Vec4Primitive>;

    beforeAll(() => {
      actual = aabbFactory();
    });

    it(`produces the expected lower bound`, () => {
      expect(evaluate(actual[0])).toEqual(expectedLower);
    });

    it(`produces the expected upper bound`, () => {
      expect(evaluate(actual[1])).toEqual(expectedUpper);
    });
  });
}
