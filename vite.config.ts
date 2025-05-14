import { reactRouter } from '@react-router/dev/vite';
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from '@sentry/react-router';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const sentryConfig: SentryReactRouterBuildOptions = {
  org: 'george-ofogba',
  project: 'travel-agency',
  // An auth token is required for uploading source maps.
  authToken:
    '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',
  // ...
};

// export default defineConfig({
//   plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
//   ssr: {
//     noExternal: [/@syncfusion/],
//   },
// });

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    ssr: {
      noExternal: [/@syncfusion/],
    },
  };
});
