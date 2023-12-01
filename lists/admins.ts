import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { password, relationship, text, timestamp } from "@keystone-6/core/fields";

const Admins = list({
    access: allowAll,
    ui: {

        label: 'Yöneticiler',
    },
    fields: {
        name: text({ validation: { isRequired: true }, label: 'Ad Soyad' }),
        email: text({
            validation: { isRequired: true },
            isIndexed: 'unique',
            label: 'E-posta',
        }),
        password: password({ validation: { isRequired: true }, label: 'Şifre' }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
            label: 'Oluşturulma Tarihi',
        }),
    },
})

export default Admins;