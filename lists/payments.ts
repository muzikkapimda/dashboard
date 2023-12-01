import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { decimal, password, relationship, select, text, timestamp } from "@keystone-6/core/fields";
import { Decimal } from "@keystone-6/core/types";

const Payments = list({
    access: allowAll,
    ui: {
        label: 'Ödemeler',
        hideDelete: true,
    },
    fields: {
        amount: decimal({ label: 'Miktar' }),
        method: select({
            type: 'enum',
            options: [
                { label: 'Paytr (Kredi kartı)', value: 'paytr' },
            ],
            defaultValue: 'paytr',
            validation: { isRequired: true, },

            ui: { displayMode: 'select' },
        }),
        member: relationship({ ref: 'Member.payments', many: false, label: 'Üye' }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
            label: 'Oluşturulma Tarihi',
        }),
    },
})

export default Payments;