/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/Styles` | `/Styles`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/AuthScreen` | `/AuthScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/Styles` | `/Styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/Styles` | `/Styles`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/AuthScreen` | `/AuthScreen`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/Styles` | `/Styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/Styles${`?${string}` | `#${string}` | ''}` | `/Styles${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/AuthScreen${`?${string}` | `#${string}` | ''}` | `/AuthScreen${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/Styles${`?${string}` | `#${string}` | ''}` | `/Styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/Styles` | `/Styles`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/AuthScreen` | `/AuthScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/Styles` | `/Styles`; params?: Router.UnknownInputParams; };
    }
  }
}
