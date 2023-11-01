export const defaults = {
  pageUrl: process.env.ENVIRONMENT_URL || 'https://wiremock.org',
  templateLibraryUrl: process.env.ENVIRONMENT_TEMPLATE_LIBRARY_URL || 'https://library.wiremock.org',
  playwright: {
    viewportSize: { width: 1920, height: 1080 },
  },
}
