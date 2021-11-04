function Thing(sketch, color) {
  this.color = color
  this.x = sketch.random(-sketch.width / 5, sketch.width / 5)
  this.y = -200
  this.z = sketch.random(0, -100)
  this.v = sketch.random(2,5)
  this.r = sketch.createVector(sketch.round(sketch.random()), sketch.round(sketch.random()), sketch.round(sketch.random()))
  this.t = 0
  const _r = sketch.floor(sketch.random(0, 3))
  switch (_r) {
    case 0: this.shapeFn = function () { sketch.torus(15, 5) }; break;
    case 1: this.shapeFn = function () { sketch.sphere(15) }; break;
    case 2: this.shapeFn = function () { sketch.box(15, 15, 15) }; break;
  }
}

Thing.prototype.draw = function(sketch) {
  sketch.push()
  sketch.fill(this.color)
  sketch.translate(this.x, this.y + this.t * this.v, this.z)
  sketch.rotate(this.t * this.v * 0.01, this.r)
  this.t++
  this.shapeFn()
  sketch.pop()
}