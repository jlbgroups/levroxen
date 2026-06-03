import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
//import sitemap from 'vite-plugin-sitemap'

//export default defineConfig({
//plugins: [
//react(),
//sitemap({
// hostname: 'https://www.levroxen.com',
//generateRobotsTxt: false,
//routes: [
// '/',
// '/login',
// '/register',
// '/privacy-policy',
//'/terms-and-conditions',
//]
//})
//],
//})