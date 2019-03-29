import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of Identity Provider
  issuer: 'https://localhost:5000',

  // URL of the SPA to redirect the user to after login
  redirectUri: 'https://localhost:5003/index.html',

  // SPA's Client Id
  clientId: 'spa',

  // Scope
  scope: 'openid profile api1'
}
