const { GraphQLDefinitionsFactory } = require('@nestjs/graphql');
const { join } = require('path');

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['src/*.gql'],
  path: join('D:/project-bfx/front-end-task/graphql.ts'),
  outputAs: 'class',
  watch: false,
  skipResolverArgs: true,
});
