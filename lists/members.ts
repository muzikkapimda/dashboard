import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { image, relationship, text, timestamp } from "@keystone-6/core/fields";

const Members = list({
    access: allowAll,
    fields: {
        fullName: text({ validation: { isRequired: true } }),
        payments: relationship({ ref: 'Payment.member', many: true, label: 'Ödemeler' }),
    },
    ui: {
        hideCreate: true,
        hideDelete: true,
        label: 'Üyeler',
    }
})

export default Members;