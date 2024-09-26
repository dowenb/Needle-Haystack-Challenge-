import { test, expect } from '@playwright/test';

test('Find the needle', async ({ page }) => {
  await page.goto('http://localhost:8888');

  // Locate the needle option
  const needleOption = await page.getByRole('option', { name: 'needle' })

  // Locate the parent select box, the contains the needle option
  const needleSelect = await needleOption.locator('xpath=..');

  // Select the needle option
  await needleSelect.selectOption('needle');

  // Expect the success message
  await expect(page.getByText('Status: Success')).toBeVisible();
});
