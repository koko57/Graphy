"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_lib_1 = require("prisma-client-lib");
const typeDefs = require("./prisma-schema").typeDefs;

const models = [
  {
    name: "Cafe",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/graphy/graph/graph-dev`
});
exports.prisma = new exports.Prisma();
