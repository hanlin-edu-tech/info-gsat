<template lang="pug">
  .container
    LayoutBanner

    .box.right(id="admission-ways")
      LayoutTagTitle 入學管道簡介

      .hs-intro
        h1 一、高中學測介紹
        p
          | 高中升學主要以(1月底)學科能力測驗或(7月)指定科目考試兩種方式來申請入學。其管道分為以下多元招生管道: (1)大學繁星推薦入學、(2)大學個人申請入學、(3)大學考試入學及(4)科技校院日間部四年制申請入學等招生管道。
        p
          span.light-blue-text 學科能力測驗（簡稱「學測」）
          | 包括國文、英文、數學、社會、自然五考科，旨在測驗考生是否具有接受大學教育的基本學科能力，是大學校系初步篩選學生的門檻。學測各科測驗範圍以高一及高二之必修課程綱要為準，考生五科都必須應考，成績均採級分制。
        p
          | 指定科目考試，為提供給無需學測能力測驗檢定大學申請或已參加學測能力測驗後，放棄錄取想重考之考生的考試選擇。指考最後會根據學生的分數高低，依照志願進行校系分發
        img.banner(src="../../static/img/sinior-high-school.png")
        h2
          i.fa.fa-star
          |  繁星推薦
        p
          | 指的是高中應屆畢業生符合其選擇的大學校系之條件申請，採計高中在學成績（校排）與學測級分作為申請一般大學依據，以推薦方式申請入學，除醫學系外皆不需要第二階段面試，可減輕面試及準備審查資料的壓力。
        h2
          i.fa.fa-star
          |  個人申請
        p 則由考生自己選擇符合志趣的大學校系，並依該校規定繳交審查資料或參與面試 / 術科筆試，最多以申請6個校系為限。
        h2
          i.fa.fa-star
          |  科技校院申請
        p 為考生個別報名申請科技校院日間部四年制，並依該校規定繳交審查資料或參與該校複試測驗，最多以申請5個系（組）為限。

        h1 二、高中升學管道流程
        img.banner(src="../../static/img/sinior-high-school2.png")

        h1 三、招生單位資訊
        .table-block
          table.collapse
            thead
              tr
                th 招生項目
                th 單位
                th 網址
            tbody
              tr
                td 學測能力測驗 &指定科目考試
                td
                  p
                    | 大學入學考試中心
                  p
                    | (02)2366-1416
                  p
                    | (02)2364-3677（自動語音傳真）
                td.text-left
                  a(target="_blank" href="http://www.ceec.edu.tw/") http://www.ceec.edu.tw/
              tr
                td 繁星推薦入學 &個人申請入學
                td
                  p 大學甄選入學委員會
                  p (05)272-1799（電話）
                  p (05)272-3771（傳真）
                td.text-left
                  a(target="_blank" href="https://www.caac.ccu.edu.tw") https://www.caac.ccu.edu.tw
              tr
                td 術科考試試務 (如音樂、美術)
                td
                  p 大學術科考試委員會聯合會
                  p (02)7734-1091（電話）
                  p (02)2392-2598（傳真）
                td.text-left
                  a(target="_blank" href="http://www.cape.edu.tw/") http://www.cape.edu.tw/
              tr
                td 考試入學
                td
                  p 大學考試入學分發委員會
                  p (06)236-2755（電話）
                  p (06)236-9689（傳真）
                td.text-left
                  a(target="_blank" href="http://www.uac.edu.tw/") http://www.uac.edu.tw/
        p
          | * 更多入學管道內容詳細介紹，請至大學多元化入學升學網
          a(href="http://nsdua.moe.edu.tw/" target="_blank") http://nsdua.moe.edu.tw/
          | 查詢

        h1 四、應考注意事項
        .table-block
          table.double-water-blue
            thead
              tr
                th(width="100") 考試科目
                th 測  驗  範  圍
            tbody
              tr
                td 國文*
                td.text-left 高一必修科目國文 、高二必修科目國文、高三上學期必修國文
              tr
                td 英文
                td.text-left 高一必修科目英文 、高二必修科目英文、高三上學期必修英文
              tr
                td 數學
                td.text-left 高一必修科目數學、高二必修科目數學 A 版
              tr
                td 社會*
                td.text-left
                  p
                    | 高一必修科目歷史、必修科目地理、必修科目公民與社會
                  p
                    | 高二必修科目歷史、必修科目地理、必修科目公民與社會
              tr
                td 自然*
                td.text-left
                  p
                    | 必修科目基礎物理一、必修科目基礎化學（一）、
                  p
                    | 必修科目基礎生物(1)、必修科目基礎地球科學、
                  p
                    | 必修科目基礎物理二A、必修科目基礎化學（二）

        table.remarks
          tbody
            tr
              td 註1：
              td
                | 國文考科與社會考科歷史部分依 101 課綱命題，英文、數學、社會考科地理、公民 與社會部分，以及自然考科皆依 99 課綱命題。
            tr
              td 註2：
              td
                | 社會考科中的歷史、地理、公民與社會三科試題所占比例相當。
            tr
              td 註3：
              td
                | 自然考科之測驗範圍皆屬於高一、高二必修課程；試題分為兩部分，第壹部分全部 計分，第貳部分則是答對一定比例即得滿分。
            tr
              td 註4：
              td 國文考科含國文(選擇題)與國寫，分數各占50%，分節考試。
            tr
              td 註5：
              td 以電腦可讀的題型為主，例如選擇題(單選題、多選題)、選填題；英文考科另有非選擇題；國寫的題型全為非選擇題。

</template>

<script>
  import LayoutBanner from '@/components/layout/LayoutBanner.vue'
  import LayoutTagTitle from '@/components/layout/LayoutTagTitle.vue'

  export default {
    name: 'Intro',
    components: {
      LayoutBanner,
      LayoutTagTitle
    }
  }
</script>

<style lang="less" scoped>
  @import '../../static/less/util.less';

  #admission-ways {
    .hs-intro {
      padding: 10px 2%;
      color: black;

      .remarks {
        padding: 10px 30px;
        font-size: 15px;

        td {
          vertical-align: top;

          &:first-child {
            white-space: nowrap;
          }
        }
      }

      .text-left {
        text-align: left;
      }

      .text-center {
        text-align: center;
      }

      .table-block {
        text-align: center;

        table {
          margin: 0 auto;
          width: 100%;

          td, th {
            font-size: 1.3em;
            color: gray;
            padding: 5px;
            border: 1px solid gray;
          }

          p {
            margin: 0;
            padding: 0;
            font-size: 1em;
            color: gray;
          }

          &.collapse {
            border-collapse: collapse;

            th {
              background: blue;
              color: white;
            }
          }

          &.double-water-blue {
            border-color: #18F5FF;
          }
        }
      }

      .light-blue-text {
        color: #3498db;
        font-weight: bold;
      }

      .fa-star {
        color: #FFAF0C;
      }

      h2, h1 {
        margin-top: 20px;
      }

      p {
        padding: 10px;
        line-height: 1.5em;
        font-size: 15px;
      }
    }
  }
</style>