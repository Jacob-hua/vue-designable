<template>
  <div class="home">
    <iframe
              ref="desFrame"
              id="designable-frame"
              name="designableIFrame"
              :src="designerSrc"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
  </div>
</template>

<script>

import jsonSchema from './schema.json'

export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      designerSrc: 'http://localhost:3001',
      srcFlag: true,
      schemaTree: jsonSchema
    }
  },
  mounted () {
    // this.sendMessage()
    window.addEventListener('message', this.listenPostMessage, false)
  },
  methods: {
    sendMessage () {
      const IFrame = document.getElementById('designable-frame')
      IFrame.onload = () => {
        if (this.srcFlag) {
          IFrame.contentWindow.postMessage(this.schemaTree, 'http://localhost:3001')
        }
      }
    },
    listenPostMessage (e) {
      if (e.origin === 'http://localhost:3000') {
        console.log(e.data, 'desigJson')
        this.schemaTree = e.data
        this.sendMessage()
        // this.$router.push({ name: '/home' })
        // this.linkToDesignable(1)
      }
    },
    linkToDesignable (target) {
      if (target === 2) {
        this.designerSrc = 'http://localhost:3000'
        this.srcFlag = false
      } else {
        this.designerSrc = 'http://localhost:3001'
        this.srcFlag = true
      }
    },
    resizeFrame (target) {
      const myIframe = this.$refs.desFrame
      const preIframe = this.$refs.preFrame
      if (target === 2) {
        myIframe.height = '100%'
        preIframe.height = 0
      } else {
        preIframe.height = '100%'
        myIframe.height = 0
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('message', this.listenPostMessage)
  }
}
</script>

<style lang="scss" scoped>
.home {

  .el-aside {
    width: 10vw;
  }

  .el-main {
    .el-container {
      height: 93vh;
    }
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
      cursor: pointer;

      &:active {
        color: #42b983;
      }

      & :visited {
        color: #42b983;
      }
    }
  }
}

</style>
