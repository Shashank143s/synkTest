const validate = require('express-validation');
const joi = require('joi');
// const constants = require('config').get('constants');
// const customJoi = require('../custom-joi');
// const { headers, options } = require('./schemas');

const schema = {
//   options,
//   headers,
  query: joi.object({
    // rootAssetTypes: customJoi.csv().sharedAssetTypes(),
    // childAssetTypes: customJoi.csv().sharedAssetTypes(),
    depth: joi.number().default(0).min(0)
      .max(14),
  }),
};

module.exports = {
  schema: validate(schema),
};