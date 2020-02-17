<template lang="pug">
  section.container
    LayoutBanner

    .box.right(id="pre-exam-download")
      LayoutTagTitle 歷屆考題下載

      .download-blocks
        .download-block(v-for="(cycleYear, index) in cycleYears" :key="cycleYear")
          .download-title
            .year-tab {{ retrieveAnnual(index) }}
            table
              tr
                td.text-left 歷屆題本
                td.text-left 精彩解析

          .download-content
            table
              tr(v-for="subject in subjects" :key="subject")
                td
                  a(target="_blank"
                    :href="`${gsatFilesGCSDownload}/題本/${retrieveAnnual(index)}${subject}題本.pdf`") {{ subject }} 題本
                td
                  a(target="_blank"
                    :href="`${gsatFilesGCSDownload}/解析/${retrieveAnnual(index)}${subject}解析.pdf`") {{ subject }} 解析

      h1.my-pos Q：如何計算學測級分清楚知道自己的落點？
      img.banner(:src="require('@/static/img/gsat-rank-guide.png')")
      a.standard(target="_blank" :href="`${gsatFilesGCSDownload}/105年學測總級分與各科成績標準.pdf`") 105年學測總級分與各科成績標準 下載
</template>

<script>
  import LayoutBanner from '@/components/layout/LayoutBanner.vue'
  import LayoutTagTitle from '@/components/layout/LayoutTagTitle.vue'
  import dayjs from 'dayjs'
  import 'dayjs/locale/zh-tw'

  export default {
    name: 'Download',
    components: {
      LayoutBanner,
      LayoutTagTitle
    },

    data () {
      return {
        cycleYears: 9,
        subjects: ['國文', '英文', '數學', '自然', '社會'],
        gsatFilesGCSDownload: 'https://storage.googleapis.com/ehanlin-web-resource/tutor-platform/infos/gsat/file/學測解析'
      }
    },

    computed: {
      currentRocYear () {
        return dayjs().year() - 1911
      }
    },

    methods: {
      retrieveAnnual (cycleYearIndex) {
        const vueModel = this
        return vueModel.currentRocYear - cycleYearIndex
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../static/less/util.less';

  #pre-exam-download {
    h1.my-pos {
      margin: 15px;
      color: black;
    }

    a.standard {
      display: inline-block;
      margin: 15px;
    }

    .download-blocks {
      padding-left: 24px;
      padding-right: 24px;
      text-align: center;

      .download-block {
        margin: 20px 0;
        font-size: 1.4em;
        color: black;

        & + & {
          margin-top: 30px;
        }

        .download-title {
          height: 49px;
          text-align: center;
          position: relative;

          .year-tab {
            padding: 5px 30px;
            border: 4px solid #3b91f0;
            border-radius: 50%;
            border-bottom: none;
            font-size: 25px;
            font-weight: bolder;
            box-shadow: 1px 1px 10px grey;
            text-shadow: 2px 2px lightgrey;
            position: absolute;
          }
        }

        .download-content {
          border: 4px solid #3b91f0;
          border-radius: 5px;
        }

        table {
          margin: 0 auto;
          width: 300px;
          height: 100%;

          td:first-child {
            width: 180px;
          }
        }
      }
    }
  }


</style>