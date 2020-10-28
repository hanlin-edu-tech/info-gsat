<template lang="pug">
  section.container
    LayoutBanner

    .box.right(id='gsat-important-timeline')
      LayoutTagTitle 重要時程

      div(style='position: relative;')
        a.btn.green.gsat-exam-info(@click='popupExamDate') 學測時間、科目
        img.banner(:src="require('@/static/img/schedule110.png')")

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
        const timelineImage = require('@/static/img/time110.png')
        Swal.fire({
          title: '',
          width: 600,
          padding: '15em',
          background: `url(${timelineImage}) no-repeat 0 0 / contain`,
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
      padding: 4px 20px;
      right: 45px;
      bottom: 112px;
    }
  }

</style>