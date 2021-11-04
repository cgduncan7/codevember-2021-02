/**
 * sketch
 */
 var s = function(sketch) {
  // #region settings
  const framerate = 60
  const w = window.innerWidth
  const h = window.innerHeight
  // #endregion

  let things = []
  let palette = new Palette()

  // #region p5
  sketch.setup = function() {
    const p5canvas = sketch.createCanvas(w, h, sketch.WEBGL)
    canvas = p5canvas.canvas
    sketch.frameRate(framerate)

    const a = sketch.createVector(0.5,0.2,0.5)
    const b = sketch.createVector(0.5,0.2,0.5)
    const c = sketch.createVector(0.5,0.8,0.2)
    const d = sketch.createVector(0.66, 0.66, 0.66)
    palette = new Palette(sketch,a,b,c,d)

    sketch.background(sketch.color(0,0,0,255))

    sketch.camera(0, 0, 200, 0, 0, 0)
  }

  sketch.draw = function() {
    sketch.background(0,0,0)

    sketch.fill(255, 255, 255)
    sketch.noStroke()
  
    if (sketch.frameCount % 2 === 0 && things.length < 100) {
      things.push(new Thing(sketch, palette.getColor(sketch.random())))
    }

    for (let i = things.length - 1; i >= 0; i--) {
      if (things[i].t >= 200) {
        things.splice(i, 1)
      } else {
        things[i].draw(sketch)
      }
    }

    console.log(things.length)
  }
  // #endregion
}

var sketch = new p5(s, document.getElementById('sketch'))
