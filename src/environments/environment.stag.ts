import { sharedEnvironment } from './shared'

export const environment = {
  ...sharedEnvironment,
  production: true,
  mongodbUri:
    '',
  graphqlUri: '',
  /* cspell:disable-next-line */
  googleClientId: '',
  /* cspell:disable-next-line */
  firebaseBucketName: '',
}
