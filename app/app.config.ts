export default defineAppConfig({
  title: 'Oire.ca',
  email: 'oire@smartoire.com',
  github: 'https://github.com/Smartoire',
  twitter: 'https://x.com/smartoire',
  blog: 'https://cloudoire.com',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
