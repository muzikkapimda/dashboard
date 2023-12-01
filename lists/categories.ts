import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { image, relationship, text, timestamp } from "@keystone-6/core/fields";
import { document } from '@keystone-6/fields-document';
const Categories = list({
    access: allowAll,
    ui: {
        listView: {
            initialColumns: ['title', 'parentCats', 'subCats'],
        },
        label: 'Katagoriler',
    },
    fields: {
        title: text({ validation: { isRequired: true }, label: 'Başlık' }),
        description: text({ validation: { isRequired: true }, label: 'Açıklama' }),
        seoTitle: text({ validation: { isRequired: true }, label: 'SEO Başlık' }),
        seoDescription: text({ validation: { isRequired: true }, label: 'SEO Açıklama' }),
        image: image({ storage: 'supabase', label: 'Resim' }),
        selectTitle: text({ validation: { isRequired: false }, label: 'Seçim Başlık' }),
        selectDescription: text({ validation: { isRequired: false }, label: 'Seçim Açıklama' }),
        content: document({
            formatting: true,
            layouts: [
                [1, 1],
                [1, 1, 1],
                [2, 1],
                [1, 2],
                [1, 2, 1],
            ],
            links: true,
            dividers: true,
            label: 'İçerik',
        }),
        parentCats: relationship({ ref: 'Category.subCats', many: false, label: 'Ana Kategoriler' }),
        subCats: relationship({
            ref: 'Category.parentCats',
            ui: {
                displayMode: 'cards',
                cardFields: ['title'],
                inlineEdit: { fields: ['title'] },
                linkToItem: true,
                inlineConnect: true,
            },
            many: false,
            label: 'Alt Kategory',
        }),
        options: relationship({ ref: 'CategoryOption.categori', many: true, label: 'Seçenekler' }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
            label: 'Oluşturulma Tarihi',
        }),
    },
})

export default Categories;