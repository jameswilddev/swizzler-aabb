import { Expression, AnyNonMatFloatPrimitive } from "swizzler";

/**
 * A pair of expressions representing the lower and upper bounds of an axis-aligned bounding box.
 * @template T The floating point type used to represent a point in space, e.g. Vec2Primitive = 2D, Vec3Primitive = 3D.
 */
export type AABB<T extends AnyNonMatFloatPrimitive> = readonly [
  Expression<T>,
  Expression<T>
];
