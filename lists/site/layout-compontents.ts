import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { Boolean } from "@keystone-6/core/dist/declarations/src/types/schema/graphql-ts-schema";
import { checkbox, password, relationship, text, timestamp } from "@keystone-6/core/fields";

const PageCompontents = list({
    access: allowAll,
    fields: {
        name: text({ validation: { isRequired: true }, label: 'Bileşen Adı' }),
        isAvailable: checkbox({
            defaultValue: true,
            db: { map: 'is_active' },
            label: 'Aktif',

        }),
        layout: relationship({
            ref: 'PageLayout.components',
            ui: {
                displayMode: 'cards',
                cardFields: ['name'],
                inlineEdit: { fields: ['name'] },
                linkToItem: true,
                inlineConnect: true,
            },
            many: false,
            label: 'Şablon',
        }),
    },
    ui: {
        listView: {
            initialColumns: ['name', 'isAvailable'],
        },
        hideDelete: true,
        label: 'Sayfa Bileşenleri',
    }
})

export default PageCompontents;