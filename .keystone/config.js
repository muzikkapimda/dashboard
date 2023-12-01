"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core8 = require("@keystone-6/core");

// lists/admins.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var Admins = (0, import_core.list)({
  access: import_access.allowAll,
  ui: {
    label: "Y\xF6neticiler"
  },
  fields: {
    name: (0, import_fields.text)({ validation: { isRequired: true }, label: "Ad Soyad" }),
    email: (0, import_fields.text)({
      validation: { isRequired: true },
      isIndexed: "unique",
      label: "E-posta"
    }),
    password: (0, import_fields.password)({ validation: { isRequired: true }, label: "\u015Eifre" }),
    createdAt: (0, import_fields.timestamp)({
      defaultValue: { kind: "now" },
      label: "Olu\u015Fturulma Tarihi"
    })
  }
});
var admins_default = Admins;

// lists/members.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var Members = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    fullName: (0, import_fields2.text)({ validation: { isRequired: true } }),
    payments: (0, import_fields2.relationship)({ ref: "Payment.member", many: true, label: "\xD6demeler" })
  },
  ui: {
    hideCreate: true,
    hideDelete: true,
    label: "\xDCyeler"
  }
});
var members_default = Members;

// lists/categories.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
var Categories = (0, import_core3.list)({
  access: import_access3.allowAll,
  ui: {
    listView: {
      initialColumns: ["title", "parentCats", "subCats"]
    },
    label: "Katagoriler"
  },
  fields: {
    title: (0, import_fields3.text)({ validation: { isRequired: true }, label: "Ba\u015Fl\u0131k" }),
    description: (0, import_fields3.text)({ validation: { isRequired: true }, label: "A\xE7\u0131klama" }),
    seoTitle: (0, import_fields3.text)({ validation: { isRequired: true }, label: "SEO Ba\u015Fl\u0131k" }),
    seoDescription: (0, import_fields3.text)({ validation: { isRequired: true }, label: "SEO A\xE7\u0131klama" }),
    image: (0, import_fields3.image)({ storage: "supabase", label: "Resim" }),
    selectTitle: (0, import_fields3.text)({ validation: { isRequired: false }, label: "Se\xE7im Ba\u015Fl\u0131k" }),
    selectDescription: (0, import_fields3.text)({ validation: { isRequired: false }, label: "Se\xE7im A\xE7\u0131klama" }),
    content: (0, import_fields_document.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true,
      label: "\u0130\xE7erik"
    }),
    parentCats: (0, import_fields3.relationship)({ ref: "Category.subCats", many: false, label: "Ana Kategoriler" }),
    subCats: (0, import_fields3.relationship)({
      ref: "Category.parentCats",
      ui: {
        displayMode: "cards",
        cardFields: ["title"],
        inlineEdit: { fields: ["title"] },
        linkToItem: true,
        inlineConnect: true
      },
      many: false,
      label: "Alt Kategory"
    }),
    options: (0, import_fields3.relationship)({ ref: "CategoryOption.categori", many: true, label: "Se\xE7enekler" }),
    createdAt: (0, import_fields3.timestamp)({
      defaultValue: { kind: "now" },
      label: "Olu\u015Fturulma Tarihi"
    })
  }
});
var categories_default = Categories;

// lists/category-options.ts
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var import_fields4 = require("@keystone-6/core/fields");
var CategoryOptions = (0, import_core4.list)({
  access: import_access4.allowAll,
  ui: {
    label: "Kategori Se\xE7enekleri",
    listView: {
      initialColumns: ["title", "description", "parentOption", "subOptions"]
    }
  },
  fields: {
    title: (0, import_fields4.text)({ validation: { isRequired: true }, label: "Ba\u015Fl\u0131k" }),
    description: (0, import_fields4.text)({ validation: { isRequired: true }, label: "A\xE7\u0131klama" }),
    parentOption: (0, import_fields4.relationship)({ ref: "CategoryOption.subOptions", many: false, label: "Ana Se\xE7enek" }),
    subOptions: (0, import_fields4.relationship)({
      ref: "CategoryOption.parentOption",
      ui: {},
      many: true,
      label: "Alt Se\xE7enekler"
    }),
    categori: (0, import_fields4.relationship)({
      ref: "Category.options",
      ui: {
        displayMode: "cards",
        cardFields: ["title"],
        inlineEdit: { fields: ["title"] },
        linkToItem: true,
        inlineConnect: true
      },
      many: false,
      label: "Kategori"
    }),
    createdAt: (0, import_fields4.timestamp)({
      defaultValue: { kind: "now" },
      label: "Olu\u015Fturulma Tarihi"
    })
  }
});
var category_options_default = CategoryOptions;

// lists/site/page-layouts.ts
var import_core5 = require("@keystone-6/core");
var import_access5 = require("@keystone-6/core/access");
var import_fields5 = require("@keystone-6/core/fields");
var PageLayouts = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    name: (0, import_fields5.text)({ validation: { isRequired: true }, label: "\u015Eablon Ad\u0131" }),
    isAvailable: (0, import_fields5.checkbox)({
      defaultValue: true,
      db: { map: "is_active" },
      label: "Aktif"
    }),
    components: (0, import_fields5.relationship)({ ref: "PageCompontent.layout", many: true, label: "\u015Eablon Bile\u015Fenleri" })
  },
  ui: {
    listView: {
      initialColumns: ["name", "isAvailable"]
    },
    hideDelete: true,
    hideCreate: true,
    label: "Site \u015Eablonlar\u0131"
  }
});
var page_layouts_default = PageLayouts;

// lists/site/layout-compontents.ts
var import_core6 = require("@keystone-6/core");
var import_access6 = require("@keystone-6/core/access");
var import_fields6 = require("@keystone-6/core/fields");
var PageCompontents = (0, import_core6.list)({
  access: import_access6.allowAll,
  fields: {
    name: (0, import_fields6.text)({ validation: { isRequired: true }, label: "Bile\u015Fen Ad\u0131" }),
    isAvailable: (0, import_fields6.checkbox)({
      defaultValue: true,
      db: { map: "is_active" },
      label: "Aktif"
    }),
    layout: (0, import_fields6.relationship)({
      ref: "PageLayout.components",
      ui: {
        displayMode: "cards",
        cardFields: ["name"],
        inlineEdit: { fields: ["name"] },
        linkToItem: true,
        inlineConnect: true
      },
      many: false,
      label: "\u015Eablon"
    })
  },
  ui: {
    listView: {
      initialColumns: ["name", "isAvailable"]
    },
    hideDelete: true,
    label: "Sayfa Bile\u015Fenleri"
  }
});
var layout_compontents_default = PageCompontents;

// lists/payments.ts
var import_core7 = require("@keystone-6/core");
var import_access7 = require("@keystone-6/core/access");
var import_fields7 = require("@keystone-6/core/fields");
var Payments = (0, import_core7.list)({
  access: import_access7.allowAll,
  ui: {
    label: "\xD6demeler",
    hideDelete: true
  },
  fields: {
    amount: (0, import_fields7.decimal)({ label: "Miktar" }),
    method: (0, import_fields7.select)({
      type: "enum",
      options: [
        { label: "Paytr (Kredi kart\u0131)", value: "paytr" }
      ],
      defaultValue: "paytr",
      validation: { isRequired: true },
      ui: { displayMode: "select" }
    }),
    member: (0, import_fields7.relationship)({ ref: "Member.payments", many: false, label: "\xDCye" }),
    createdAt: (0, import_fields7.timestamp)({
      defaultValue: { kind: "now" },
      label: "Olu\u015Fturulma Tarihi"
    })
  }
});
var payments_default = Payments;

// config/schema.ts
var lists = {
  Admin: admins_default,
  Member: members_default,
  Category: categories_default,
  CategoryOption: category_options_default,
  PageLayout: page_layouts_default,
  PageCompontent: layout_compontents_default,
  Payment: payments_default
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "Admin",
  identityField: "email",
  sessionData: "name createdAt",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// config/db.ts
var db_default = {
  provider: "postgresql",
  url: "postgresql://postgres:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9@db.ocnuoqtkfhlvftxseido.supabase.co:5432/postgres",
  // Optional advanced configuration
  enableLogging: true,
  idField: { kind: "uuid" },
  shadowDatabaseUrl: "postgres://postgres:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9@db.ocnuoqtkfhlvftxseido.supabase.co:5432/shadowdb"
};

// config/storage.ts
var storage_default = {
  supabase: {
    kind: "local",
    type: "image",
    generateUrl: (path) => `http://localhost:3000/images${path}`,
    serverRoute: {
      path: "/images"
    },
    storagePath: "public/images"
  }
};

// keystone.ts
var keystone_default = withAuth(
  (0, import_core8.config)({
    server: { port: 3800 },
    db: db_default,
    lists,
    session,
    storage: storage_default
  })
);
//# sourceMappingURL=config.js.map
