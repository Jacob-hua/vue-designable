<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <nav>
          <router-link to="/formDesigner/preview">Preview</router-link>
          <br />
          <router-link to="/formDesigner">Designable</router-link>
        </nav>
      </el-aside>
      <el-main>
        <el-container>
          <el-main>
            <div id="react-app"
            ></div>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const debounce = (fn, delay) => {
  let timer = null

  return function () {
    const context = this

    const args = arguments

    clearTimeout(timer)

    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

const _ResizeObserver = window.ResizeObserver

window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor (callback) {
    callback = debounce(callback, 16)

    super(callback)
  }
}
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="scss" scoped>

#react-app {
 width: 100%;
}

.el-aside {
    width: 10vw;
  }

  .el-main {
    .el-container {
      height: 93vh;
    }
  }
</style>
