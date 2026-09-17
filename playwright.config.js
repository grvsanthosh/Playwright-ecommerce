import {defineConfig,devices} from "@playwright/test"

export default defineConfig({
  testDir: './tests',
  timeout: 40*1000,
  expect: {
    timeout: 5*1000
  },
  workers: 1,
  // retries: 1,
  projects:(
    [        
      {name: 'chrome',
        use: {
          browserName: 'chromium',
          trace: 'retain-on-failure',
          screenshot: 'only-on-failure',
          headless: false

        }
      }
        // {
        //   name: 'firefox',
        //   use: {
        //   browserName:'firefox',
        //   trace:'retain-on-failure',
        //   screenshot:'only-on-failure',
        //   headless: true
        // }
        // }
      ]
  )
})