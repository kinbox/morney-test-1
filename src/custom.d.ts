type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number
  createAt?: string

}

type Tag = {
  id: string;
  name: string;
}

type RootState = {
  recordList: RecordItem[],
  createRecordError:Error | null,
  createTagError:Error | null,
  tagList: Tag[],
  currentTag?: Tag
}

type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'//联合类型，success表示成功，duplicated表示name重复
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {
  store:{
    tagList: Tag[];
    createTag: (name: string) => void;
    findTag: (id: string) => Tag | undefined;
    removeTag: (id: string) => boolean;
    updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    recordList: RecordItem[];
    createRecord:(record:RecordItem)=>void
  }
}

//d.ts 自定义全局类型