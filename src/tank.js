export default class Tank {
  direction = 0;
  x = 64;
  y = 64;
  animationFrame = 0;
  frames = [
    [0 * 46, 0 * 46, 46, 46],
    [1 * 46, 0 * 46, 46, 46],
    [6 * 46, 0 * 46, 46, 46],
    [7 * 46, 0 * 46, 46, 46],
    [4 * 46, 0 * 46, 46, 46],
    [5 * 46, 0 * 46, 46, 46],
    [2 * 46, 0 * 46, 46, 46],
    [3 * 46, 0 * 46, 46, 46],
  ];

  get sprite() {
    return this.frames[this.direction * 2 + this.animationFrame];
  }

  update(activeKeys) {
    if (activeKeys.has('ArrowUp')) {
      this._move(0, 'y', -1);
    } else if (activeKeys.has('ArrowRight')) {
      this._move(1, 'x', 1);
    } else if (activeKeys.has('ArrowDown')) {
      this._move(2, 'y', 1);
    } else if (activeKeys.has('ArrowLeft')) {
      this._move(3, 'x', -1);
    }
  }

  _move(direction, axis, value) {
    this.direction = direction;
    this[axis] += value;
    this.animationFrame ^= 1;
  }
}
