import vuetify from "vite-plugin-vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['vuetify/styles'],
  modules: [
    // 'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-vitest',
    // Configuración para el tree-shaking
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify({
          styles: {
            configFile: 'assets/settings.scss'
          }
        })
      ))
    },
  ],
  // Configuración de Google font
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 700, 900,],
      preload: true,
      useStylesheet: true
    }
  },
  // typescript: {
  //   shim: false,
  // },
  build: {
    transpile: ['vuetify']
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },
  imports: {
    dirs: [
      './stores',
    ]
  }
})
