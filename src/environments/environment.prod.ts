import { sharedEnvironment } from './shared';

export const environment = {
  ...sharedEnvironment,
  production: true,
  mongodbUri: '',
  graphqlUri: '',
};
