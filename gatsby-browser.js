import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 * @param {undefined} _emptyArg
 * @param {Record<string, unknown>} pluginOptions
 *
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onInitialClientRender
 */
export const onInitialClientRender = async (_emptyArg, pluginOptions = {}) => {
  if (process.env.NODE_ENV === 'development') {
    const axe = await import('@axe-core/react');
    const { debounce = 1000, axeConfig, axeContext } = pluginOptions;

    axe.default(React, ReactDOM, debounce, axeConfig, axeContext);
  }
};