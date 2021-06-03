<template>
  <div class="container">
    <!-- navbar -->
    <navi-bar></navi-bar>
    <!-- header -->
    <page-header
      :title="name"
      :detailText="description"
      :imageUrl="coverImgUrl"
    >
    </page-header>
    <!-- content -->
    <div class="content">
      <van-sticky> </van-sticky>
      <list-item
        v-for="(item, idx) in tableData"
        :key="idx"
        :title="item.name"
        :author="item.author"
        :index="idx"
      ></list-item>
    </div>
  </div>
</template>

<script>
import NaviBar from "./components/navibar";
import PageHeader from "./components/header";
import ListItem from "./components/list-item";
import { reco_albumDetail } from "@/network/api/recommand";

export default {
  components: {
    NaviBar,
    PageHeader,
    ListItem,
  },
  data() {
    return {
      tableData: [],
      coverImgUrl: "",
      name: "",
      description: "",
    };
  },
  created() {
    this.getData();
  },
  mounted() {},
  methods: {
    getData() {
      {
        let req = { id: this.$route.query.id };
        reco_albumDetail(req)
          .then((res) => {
            this.$nextTick(() => {
                let {list: tableData,coverImgUrl,  name, description} = res
                this.tableData = tableData;
                this.coverImgUrl = coverImgUrl
                this.name = name
                this.description = description
            });
          })
          .catch((err) => {});
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  .content {
    margin-top: 0.8rem;
  }
}
</style>