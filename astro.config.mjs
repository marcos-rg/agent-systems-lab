// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'MetaAgents',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/marcos-rg/agent-systems-lab/tree/main' },
              { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcos-reyes-about-me/' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  adapter: netlify(),
});