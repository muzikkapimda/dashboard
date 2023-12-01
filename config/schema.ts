import type { Lists } from '.keystone/types';
import Admins from '../lists/admins';
import Members from '../lists/members';
import Categories from '../lists/categories';
import CategoryOptions from '../lists/category-options';
import PageLayouts from '../lists/site/page-layouts';
import PageCompontents from '../lists/site/layout-compontents';
import Payments from '../lists/payments';

export const lists: Lists = {
  Admin: Admins as any,
  Member: Members as any,
  Category: Categories as any,
  CategoryOption: CategoryOptions as any,
  PageLayout: PageLayouts as any,
  PageCompontent: PageCompontents as any,
  Payment: Payments as any,
};
