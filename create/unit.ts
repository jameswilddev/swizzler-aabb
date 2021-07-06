import { float, vec2, vec3, vec4 } from "swizzler";
import { create } from "..";
import {
  assert1dAabb,
  assert2dAabb,
  assert3dAabb,
  assert4dAabb,
} from "../unit";

describe(`create`, () => {
  it(`no contents`, () => {
    expect(() => create()).toThrowError(
      `Cannot create an empty axis-aligned bounding box.`
    );
  });

  describe(`1d`, () => {
    assert1dAabb(`one point`, () => create(float(0.8)), 0.8, 0.8);

    assert1dAabb(
      `one axis-aligned bounding box`,
      () => create([float(0.2), float(0.8)]),
      0.2,
      0.8
    );

    assert1dAabb(
      `one point and one axis-aligned bounding box`,
      () => create(float(0.1), [float(0.2), float(0.8)]),
      0.1,
      0.8
    );

    assert1dAabb(
      `one axis-aligned bounding box and one point`,
      () => create([float(0.2), float(0.8)], float(0.1)),
      0.1,
      0.8
    );

    assert1dAabb(`two points`, () => create(float(0.8), float(0.1)), 0.1, 0.8);

    assert1dAabb(
      `two axis-aligned bounding boxes`,
      () => create([float(0.2), float(0.8)], [float(0.1), float(0.5)]),
      0.1,
      0.8
    );

    assert1dAabb(
      `three points`,
      () => create(float(0.8), float(0.6), float(0.1)),
      0.1,
      0.8
    );
  });

  describe(`2d`, () => {
    assert2dAabb(
      `one point`,
      () => create(vec2(float(0.8), float(0.2))),
      [0.8, 0.2],
      [0.8, 0.2]
    );

    assert2dAabb(
      `one axis-aligned bounding box`,
      () =>
        create([vec2(float(0.2), float(0.4)), vec2(float(0.5), float(0.9))]),
      [0.2, 0.4],
      [0.5, 0.9]
    );

    assert2dAabb(
      `one point and one axis-aligned bounding box`,
      () =>
        create(vec2(float(0.7), float(0.3)), [
          vec2(float(0.2), float(0.4)),
          vec2(float(0.5), float(0.9)),
        ]),
      [0.2, 0.3],
      [0.7, 0.9]
    );

    assert2dAabb(
      `one axis-aligned bounding box and one point`,
      () =>
        create(
          [vec2(float(0.2), float(0.4)), vec2(float(0.5), float(0.9))],
          vec2(float(0.7), float(0.3))
        ),
      [0.2, 0.3],
      [0.7, 0.9]
    );

    assert2dAabb(
      `two points`,
      () => create(vec2(float(0.8), float(0.1)), vec2(float(0.6), float(0.3))),
      [0.6, 0.1],
      [0.8, 0.3]
    );

    assert2dAabb(
      `two axis-aligned bounding boxes`,
      () =>
        create(
          [vec2(float(0.2), float(0.4)), vec2(float(0.5), float(0.9))],
          [vec2(float(0.1), float(0.5)), vec2(float(0.7), float(0.6))]
        ),
      [0.1, 0.4],
      [0.7, 0.9]
    );

    assert2dAabb(
      `three points`,
      () =>
        create(
          vec2(float(0.8), float(0.1)),
          vec2(float(0.6), float(0.2)),
          vec2(float(0.7), float(0.3))
        ),
      [0.6, 0.1],
      [0.8, 0.3]
    );
  });

  describe(`3d`, () => {
    assert3dAabb(
      `one point`,
      () => create(vec3(float(0.8), float(0.9), float(0.2))),
      [0.8, 0.9, 0.2],
      [0.8, 0.9, 0.2]
    );

    assert3dAabb(
      `one axis-aligned bounding box`,
      () =>
        create([
          vec3(float(0.2), float(0.2), float(0.4)),
          vec3(float(0.5), float(0.7), float(0.9)),
        ]),
      [0.2, 0.2, 0.4],
      [0.5, 0.7, 0.9]
    );

    assert3dAabb(
      `one point and one axis-aligned bounding box`,
      () =>
        create(vec3(float(0.7), float(0.5), float(0.3)), [
          vec3(float(0.2), float(0.1), float(0.4)),
          vec3(float(0.5), float(0.6), float(0.9)),
        ]),
      [0.2, 0.1, 0.3],
      [0.7, 0.6, 0.9]
    );

    assert3dAabb(
      `one axis-aligned bounding box and one point`,
      () =>
        create(
          [
            vec3(float(0.2), float(0.1), float(0.4)),
            vec3(float(0.5), float(0.6), float(0.9)),
          ],
          vec3(float(0.7), float(0.5), float(0.3))
        ),
      [0.2, 0.1, 0.3],
      [0.7, 0.6, 0.9]
    );

    assert3dAabb(
      `two points`,
      () =>
        create(
          vec3(float(0.8), float(0.4), float(0.1)),
          vec3(float(0.6), float(0.7), float(0.3))
        ),
      [0.6, 0.4, 0.1],
      [0.8, 0.7, 0.3]
    );

    assert3dAabb(
      `two axis-aligned bounding boxes`,
      () =>
        create(
          [
            vec3(float(0.2), float(0.2), float(0.4)),
            vec3(float(0.5), float(0.3), float(0.9)),
          ],
          [
            vec3(float(0.1), float(0.4), float(0.5)),
            vec3(float(0.7), float(0.7), float(0.6)),
          ]
        ),
      [0.1, 0.2, 0.4],
      [0.7, 0.7, 0.9]
    );

    assert3dAabb(
      `three points`,
      () =>
        create(
          vec3(float(0.8), float(0.4), float(0.1)),
          vec3(float(0.7), float(0.7), float(0.2)),
          vec3(float(0.6), float(0.5), float(0.3))
        ),
      [0.6, 0.4, 0.1],
      [0.8, 0.7, 0.3]
    );
  });

  describe(`4d`, () => {
    assert4dAabb(
      `one point`,
      () => create(vec4(float(0.8), float(0.9), float(0.2), float(0.3))),
      [0.8, 0.9, 0.2, 0.3],
      [0.8, 0.9, 0.2, 0.3]
    );

    assert4dAabb(
      `one axis-aligned bounding box`,
      () =>
        create([
          vec4(float(0.2), float(0.2), float(0.4), float(0.6)),
          vec4(float(0.5), float(0.7), float(0.9), float(0.8)),
        ]),
      [0.2, 0.2, 0.4, 0.6],
      [0.5, 0.7, 0.9, 0.8]
    );

    assert4dAabb(
      `one point and one axis-aligned bounding box`,
      () =>
        create(vec4(float(0.7), float(0.5), float(0.3), float(0.7)), [
          vec4(float(0.2), float(0.1), float(0.4), float(0.6)),
          vec4(float(0.5), float(0.6), float(0.9), float(0.8)),
        ]),
      [0.2, 0.1, 0.3, 0.6],
      [0.7, 0.6, 0.9, 0.8]
    );

    assert4dAabb(
      `one axis-aligned bounding box and one point`,
      () =>
        create(
          [
            vec4(float(0.2), float(0.1), float(0.4), float(0.6)),
            vec4(float(0.5), float(0.6), float(0.9), float(0.8)),
          ],
          vec4(float(0.7), float(0.5), float(0.3), float(0.7))
        ),
      [0.2, 0.1, 0.3, 0.6],
      [0.7, 0.6, 0.9, 0.8]
    );

    assert4dAabb(
      `two points`,
      () =>
        create(
          vec4(float(0.8), float(0.4), float(0.1), float(0.5)),
          vec4(float(0.6), float(0.7), float(0.3), float(0.9))
        ),
      [0.6, 0.4, 0.1, 0.5],
      [0.8, 0.7, 0.3, 0.9]
    );

    assert4dAabb(
      `two axis-aligned bounding boxes`,
      () =>
        create(
          [
            vec4(float(0.2), float(0.2), float(0.4), float(0.5)),
            vec4(float(0.5), float(0.3), float(0.9), float(0.7)),
          ],
          [
            vec4(float(0.1), float(0.4), float(0.5), float(0.3)),
            vec4(float(0.7), float(0.7), float(0.6), float(0.8)),
          ]
        ),
      [0.1, 0.2, 0.4, 0.3],
      [0.7, 0.7, 0.9, 0.8]
    );

    assert4dAabb(
      `three points`,
      () =>
        create(
          vec4(float(0.8), float(0.4), float(0.1), float(0.9)),
          vec4(float(0.7), float(0.7), float(0.2), float(0.2)),
          vec4(float(0.6), float(0.5), float(0.3), float(0.5))
        ),
      [0.6, 0.4, 0.1, 0.2],
      [0.8, 0.7, 0.3, 0.9]
    );
  });
});
