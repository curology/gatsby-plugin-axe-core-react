import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 * @param {undefined} _emptyArg
 * @param {Record<string, unknown>} pluginOptions
 *
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onInitialClientRender
 */
export const onInitialClientRender = (_emptyArg, pluginOptions) => {
  if (process.env.NODE_ENV === 'development') {
    const axe = require('@axe-core/react');
    const { axeConfig, axeContext, debounce } = pluginOptions;

    axe.default(React, ReactDOM, debounce, axeConfig, axeContext);
  }
};