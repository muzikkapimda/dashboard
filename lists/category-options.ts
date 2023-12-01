import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, text, timestamp } from "@keystone-6/core/fields";

const CategoryOptions = list({
    access: allowAll,
    ui: {
        label: 'Kategori Seçenekleri',
        listView: {
            initialColumns: ['title', 'description', 'parentOption', 'subOptions'],
        },
    },
    fields: {
        title: text({ validation: { isRequired: true }, label: 'Başlık' }),
        description: text({ validation: { isRequired: true }, label: 'Açıklama' }),
        parentOption: relationship({ ref: 'CategoryOption.subOptions', many: false, label: 'Ana Seçenek' }),
        subOptions: relationship({
            ref: 'CategoryOption.parentOption',
            ui: {

            },
            many: true,
            label: 'Alt Seçenekler',
        }),
        categori: relationship({
            ref: 'Category.options',
            ui: {
                displayMode: 'cards',
                cardFields: ['title'],
                inlineEdit: { fields: ['title'] },
                linkToItem: true,
                inlineConnect: true,
            },
            many: false,
            label: 'Kategori',
        }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
            label: 'Oluşturulma Tarihi',
        }),
    },
})

export default CategoryOptions;