// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core';
import { lists } from './config/schema';
import { withAuth, session } from './auth';
import db from './config/db';
import storage from './config/storage';

export default withAuth(
  config({
    server: { port: 3800 },
    db: db as any,
    lists,
    session,
    storage: storage as any,
  })
);
