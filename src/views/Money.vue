<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags/>
    {{ count }}
    <button @click="add">+1</button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import oldStore from '@/store/index2';
import store from '@/store/index';


@Component({
  components: {Tags, FormItem, Types, NumberPad},
  computed: {
    count() {
      return store.state.count;
    }
  }
})
export default class Money extends Vue {
  // eslint-disable-next-line no-undef
  recordList = oldStore.recordList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 10
  };

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    oldStore.createRecord(this.record);
  }

  add(){
    store.commit('increment',1)
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>

