<template>
  <div class="s-canvas">
    <canvas id="s-canvas" :width="100" :height="200"></canvas>
  </div>
</template>
<script>
export default {
  name: 'SIdentify',
  methods: {
    // 生成一个随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 生成一个随机的颜色
    randomColor(min, max) {
      var r = this.randomNum(min, max)
      var g = this.randomNum(min, max)
      var b = this.randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    drawPic() {
      var canvas = document.getElementById('s-canvas')
      var ctx = canvas.getContext('2d')
      ctx.textBaseline = 'bottom'
      this.drawDot(ctx)
    },
    drawDot(ctx) {
      // 绘制干扰点
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(
          this.randomNum(0, 100),
          this.randomNum(0, 200),
          1,
          0,
          2 * Math.PI
        )
        ctx.fill()
      }
    }
  },
  mounted() {
    this.drawPic()
  }
}
</script>