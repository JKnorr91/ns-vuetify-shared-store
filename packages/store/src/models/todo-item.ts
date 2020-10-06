import { Model } from '@vuex-orm/core'

export default class TodoItem extends Model {
    static entity = 'todoItems'

    static fields() {
        return {
            id: this.uid(),
            label: this.string(null).nullable(),
            checked: this.boolean(false),
        }
    }

    id!: string;
    label!: string;
    checked!: boolean;
}
