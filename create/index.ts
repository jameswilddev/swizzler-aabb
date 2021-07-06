import {
  AnyNonMatFloatPrimitive,
  Expression,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  max,
  min,
} from "swizzler";
import { AABB } from "../aabb";

/**
 * Creates a new axis-aligned bounding box to contain a given set of points and/or other axis-aligned bounding boxes.
 * @param contents The points and/or axis-aligned bounding boxes to create a new axis-aligned bounding box to contain.
 * @returns A new axis-aligned bounding box which contains the given points and/or axis aligned bounding boxes.
 * @throws When there are no given points and/or axis aligned bounding boxes.
 */
export function create(
  ...contents: ReadonlyArray<Expression<FloatPrimitive> | AABB<FloatPrimitive>>
): AABB<FloatPrimitive>;

export function create(
  ...contents: ReadonlyArray<Expression<Vec2Primitive> | AABB<Vec2Primitive>>
): AABB<Vec2Primitive>;

export function create(
  ...contents: ReadonlyArray<Expression<Vec3Primitive> | AABB<Vec3Primitive>>
): AABB<Vec3Primitive>;

export function create(
  ...contents: ReadonlyArray<Expression<Vec4Primitive> | AABB<Vec4Primitive>>
): AABB<Vec4Primitive>;

export function create(
  ...contents: ReadonlyArray<
    Expression<AnyNonMatFloatPrimitive> | AABB<AnyNonMatFloatPrimitive>
  >
): AABB<AnyNonMatFloatPrimitive> {
  if (contents.length === 0) {
    throw new Error(`Cannot create an empty axis-aligned bounding box.`);
  } else {
    // This will not really be FloatPrimitive in most cases, but it isn't possible to express to TypeScript's type system that all of the arguments will be the same (see https://github.com/Microsoft/TypeScript/issues/27808).
    let lower: Expression<FloatPrimitive>;
    let upper: Expression<FloatPrimitive>;

    const first = contents[0];

    if (Array.isArray(first)) {
      lower = first[0];
      upper = first[1];
    } else {
      lower = first as Expression<FloatPrimitive>;
      upper = first as Expression<FloatPrimitive>;
    }

    for (const item of contents.slice(1)) {
      if (Array.isArray(item)) {
        lower = min(lower, item[0]);
        upper = max(upper, item[1]);
      } else {
        lower = min(lower, item as Expression<FloatPrimitive>);
        upper = max(upper, item as Expression<FloatPrimitive>);
      }
    }

    return [lower, upper];
  }
}
