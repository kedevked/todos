import {test} from '@playwright/test'
test("should log user in", async ({ page }) => {

    // const requestContext = await page.request.newContext();
    console.log('clientId', process.env.CLIENT_ID)
    const response = await page.request.post(
      "https://www.googleapis.com/oauth2/v4/token",
      {
        data: {
          grant_type: "refresh_token",
          client_id:
            process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          refresh_token:
            process.env.REFRESH_TOKEN,
        },
      }
    );
    const content = await response.json();
    const { access_token, id_token } = content;
  
    const rawResponse2 = await page.request.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
  
    const data = (await rawResponse2.json()) as any;
  
    const userItem = {
      token: id_token,
      user: {
        googleId: data.sub,
        email: data.email,
        givenName: data.given_name,
        familyName: data.family_name,
        imageUrl: data.picture,
      },
    };
    console.log("userItem", userItem); // userItem is well displayed in the console
  
    await page.goto('http://localhost4200');
  
    await expect(page).toContain("Hello"); // test fails, the user is still not logged in
  });
  