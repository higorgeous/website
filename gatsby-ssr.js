/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';

import { ReduxProvider } from './src/state';

export const onRenderBody = ({ setHeadComponents }) => {
  const files = [
    'FormulaCondensedBold.woff2',
    'FormulaCondensedLight.woff2',
    'FormulaCondensedRegular.woff2',
    'MarkPro.woff2',
  ];
  const preload = [
    'FormulaCondensedBold',
    'FormulaCondensedLight',
    'FormulaCondensedRegular',
    'MarkPro',
  ];

  setHeadComponents([
    files.map((file) =>
      preload.map((font, key) => {
        const fileBeginning = file.split('-').slice(0, -1).join('-');
        if (fileBeginning === font) {
          return (
            <link
              key={key}
              rel="preload"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
              href={`/static/${file}`}
            />
          );
        }
      }),
    ),
  ]);

  // Segment's minified snippet (version 4.13.2)
  const snippet = `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.2";
    }}();
  `;

  setHeadComponents([
    <script
      key="plugin-segment"
      dangerouslySetInnerHTML={{ __html: snippet }}
    />,
  ]);
};

export const wrapRootElement = ReduxProvider;
