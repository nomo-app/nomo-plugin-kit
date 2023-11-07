# WebOn Packaging

For WebOns to be packaged into a tar.gz-archive, there are a few requirements needed.
For example, WebOns should always be client-site-rendered and include a few mandatory files in their tar.gz-archive.

See https://github.com/nomo-app/nomo-webon-kit/blob/main/demo-webon/package.json for an example of a build_tar script (`npm run build_tar`).

## Client Site Rendering

A WebOn should be a "static build" that is rendered on the client.
WebOns should not include any pages that are rendered on a server.
The reason for this is that WebOns are hosted on a localhost-server within the Nomo App (in production-mode).
Only in dev-mode, WebOns may be hosted on remote-servers.

It may depend on your framework how to achieve client site rendering; here are a few examples.

### Next.js

With Next.js-React, static builds may be done by configuring `output: 'export'` and running `next build && next export`.

See the following example of a `next.config.js` that can generate static builds: https://github.com/nomo-app/nomo-webon-kit/blob/main/demo-webon/next.config.js

### Svelte

TODO: Explain how to build static with Svelte

TODO: Perhaps add link to a Svelte open source WebOn?

# Required files

The following files are required to be in a tar.gz-archive, otherwise the Nomo App could refuse to install the WebOn.

## Manifest

Every tar.gz-archive must include a `nomo_manifest.json`.
See https://github.com/nomo-app/nomo-webon-kit/blob/main/demo-webon/public/nomo_manifest.json for an example manifest.
See https://github.com/nomo-app/nomo-webon-kit/blob/main/api-docs/interfaces/NomoManifest.md for documentation about the manifest-properties.

## Icon

TODO

## index.html

TODO