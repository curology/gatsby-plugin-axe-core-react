import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 * @param {undefined} _emptyArg
 * @param {Record<string, unknown>} _pluginOptions
 *
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onInitialClientRender
 */
export const onInitialClientRender = async (_emptyArg, _pluginOptions) => {
  if (process.env.NODE_ENV === 'development') {
    const { default: reactAxe } = await import('@axe-core/react');
    const { axeConfig, axeContext, DEBOUNCE_TIMEOUT } = await import(
      './config'
    );

    reactAxe(React, ReactDOM, DEBOUNCE_TIMEOUT, axeConfig, axeContext);
  }
};