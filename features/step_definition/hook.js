// step_definitions/hooks.js
import { BeforeAll, AfterAll, Before, After,setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright'; // Use 'playwright' instead of '@playwright/test'
setDefaultTimeout(30000); 
let browser;

BeforeAll(async function () {
  // Launch the Chromium browser engine
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  // Create an isolated context and page for this specific scenario
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  // Close the page cleanly after the scenario finishes
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
});

AfterAll(async function () {
  // Turn off the browser entirely when all scenarios are done
  if (browser) await browser.close();
});
