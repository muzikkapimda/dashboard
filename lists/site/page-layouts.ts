import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { Boolean } from "@keystone-6/core/dist/declarations/src/types/schema/graphql-ts-schema";
import { checkbox, password, relationship, text, timestamp } from "@keystone-6/core/fields";

const PageLayouts = list({
    access: allowAll,
    fields: {
        name: text({ validation: { isRequired: true }, label: 'Şablon Adı' }),
        isAvailable: checkbox({
            defaultValue: true,
            db: { map: 'is_active' },
            label: 'Aktif',
        }),
        components: relationship({ ref: 'PageCompontent.layout', many: true, label: 'Şablon Bileşenleri' }),
    },
    ui: {
        listView: {
            initialColumns: ['name', 'isAvailable'],
        },
        hideDelete: true,
        hideCreate: true,
        label: 'Site Şablonları',

    }
})

export default PageLayouts;