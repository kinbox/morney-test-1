<template>
  <Layout>
    <div class="tags">
      <router-link class="tag"
                   :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
      <!--      @click.native='createTag'-->
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {Button},
  computed: {
    tags() {
      return this.$store.state.tagList;
    }
  }
})
export default class labels extends Vue {
  beforeCreated() {
    this.$store.commit('fetchTags');
  }

  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) {return window.alert('标签不能为空');}
    this.$store.commit('createTag', name);
  }
}

</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 20px;
      height: 20px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  background: #666666;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>