<template lang="pug">
  section.container
    LayoutBanner

    .box.right(id='gsat-important-timeline')
      LayoutTagTitle 重要時程

      div(style='position: relative;')
        a.btn.green.gsat-exam-info(@click='popupExamDate') 學測時間、科目
        img.banner(src='../../static/img/gsat-timeline.png')

</template>

<script>
  import LayoutBanner from '@/components/layout/LayoutBanner.vue'
  import LayoutTagTitle from '@/components/layout/LayoutTagTitle.vue'
  import Swal from 'sweetalert2/dist/sweetalert2.min.js'
  import 'sweetalert2/dist/sweetalert2.min.css'

  export default {
    name: 'Timeline',
    components: {
      LayoutBanner,
      LayoutTagTitle
    },

    methods: {
      popupExamDate () {
        Swal.fire({
          title: '',
          width: 600,
          padding: '10em',
          background: 'url(https://s3-ap-northeast-1.amazonaws.com/ehanlin-web-resource/platform/1.0.0/resource/imgs/info/my_test_edu/p2/108學測-重要時程_跳圖.png) no-repeat 0 0 / contain',
          showConfirmButton: false
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../static/less/util.less';

  #gsat-important-timeline {
    .gsat-exam-info {
      position: absolute;
      padding: 8px 20px;
      right: 70px;
      bottom: 125px;
    }
  }

</style>