[nomo-webon-kit](README.md) / Exports

# nomo-webon-kit

## Table of contents

### Interfaces

- [NomoManifest](interfaces/NomoManifest.md)

### Variables

- [nomo](modules.md#nomo)
- [nomoConsole](modules.md#nomoconsole)
- [nomoLocalStorage](modules.md#nomolocalstorage)

### Functions

- [hasMinimumNomoVersion](modules.md#hasminimumnomoversion)
- [nomoAddCustomToken](modules.md#nomoaddcustomtoken)
- [nomoAuthHttp](modules.md#nomoauthhttp)
- [nomoEnableMobileConsoleDebugging](modules.md#nomoenablemobileconsoledebugging)
- [nomoGetAssetIcon](modules.md#nomogetasseticon)
- [nomoGetBalance](modules.md#nomogetbalance)
- [nomoGetDeviceHashes](modules.md#nomogetdevicehashes)
- [nomoGetDeviceName](modules.md#nomogetdevicename)
- [nomoGetEvmAddress](modules.md#nomogetevmaddress)
- [nomoGetInstalledWebOns](modules.md#nomogetinstalledwebons)
- [nomoGetLanguage](modules.md#nomogetlanguage)
- [nomoGetManifest](modules.md#nomogetmanifest)
- [nomoGetMessengerAddress](modules.md#nomogetmessengeraddress)
- [nomoGetPlatformInfo](modules.md#nomogetplatforminfo)
- [nomoGetTheme](modules.md#nomogettheme)
- [nomoGetVisibleAssets](modules.md#nomogetvisibleassets)
- [nomoGetWalletAddresses](modules.md#nomogetwalletaddresses)
- [nomoInjectIntoWebOn](modules.md#nomoinjectintowebon)
- [nomoInjectQRCode](modules.md#nomoinjectqrcode)
- [nomoInstallWebOn](modules.md#nomoinstallwebon)
- [nomoLaunchSmartchainFaucet](modules.md#nomolaunchsmartchainfaucet)
- [nomoLaunchUrl](modules.md#nomolaunchurl)
- [nomoMnemonicBackupExisted](modules.md#nomomnemonicbackupexisted)
- [nomoOpenFAQPage](modules.md#nomoopenfaqpage)
- [nomoPickFromGallery](modules.md#nomopickfromgallery)
- [nomoQrScan](modules.md#nomoqrscan)
- [nomoRegisterOnWebOnVisible](modules.md#nomoregisteronwebonvisible)
- [nomoSelectAssetFromDialog](modules.md#nomoselectassetfromdialog)
- [nomoSendAssets](modules.md#nomosendassets)
- [nomoSignEvmMessage](modules.md#nomosignevmmessage)
- [nomoSignEvmTransaction](modules.md#nomosignevmtransaction)
- [nomoTakePicture](modules.md#nomotakepicture)
- [stringifyWithBigInts](modules.md#stringifywithbigints)

## Variables

### nomo

• `Const` **nomo**: `Object`

The nomo-object exposes WebOn-functions in an easy-to-use way.
The nomo-object can be used with only one import and supports the auto-completion of IDEs.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addCustomToken` | (`args`: { `contractAddress`: `string` ; `network`: `string`  }) => `Promise`<`void`\> |
| `authHttp` | (`args`: `string` \| { `body?`: `string` ; `headers?`: { `[key: string]`: `string`;  } ; `method?`: ``"GET"`` \| ``"POST"`` ; `url`: `string`  }) => `Promise`<{ `response`: `string` ; `statusCode`: `number`  }\> |
| `enableMobileConsoleDebugging` | () => `void` |
| `getAssetIcon` | (`args`: { `assetSymbol`: `string`  }) => `Promise`<{ `isPending`: `boolean` ; `large`: `string` ; `name`: `string` ; `small`: `string` ; `symbol`: `string` ; `thumb`: `string`  }\> |
| `getBalance` | (`args`: { `assetSymbol`: `string`  }) => `Promise`<{ `balance`: `string` ; `contractAddress?`: `string` \| ``null`` ; `decimals`: `number` ; `name`: `string` ; `network?`: `string` \| ``null`` ; `receiveAddress`: `string` \| ``null`` ; `symbol`: `string`  }\> |
| `getDeviceHashes` | () => `Promise`<{ `deviceHashes`: `string`  }\> |
| `getDeviceName` | () => `Promise`<{ `deviceName`: `string`  }\> |
| `getEvmAddress` | () => `Promise`<`string`\> |
| `getInstalledWebOns` | () => `Promise`<{ `manifests`: [`NomoManifest`](interfaces/NomoManifest.md)[]  }\> |
| `getLanguage` | () => `Promise`<{ `language`: `string`  }\> |
| `getManifest` | () => `Promise`<[`NomoManifest`](interfaces/NomoManifest.md)\> |
| `getMessengerAddress` | () => `Promise`<{ `inviteLink`: `string` ; `messengerAddress`: `string`  }\> |
| `getPlatformInfo` | () => `Promise`<{ `appName`: `string` ; `buildNumber`: `string` ; `clientName`: `string` ; `operatingSystem`: `string` ; `version`: `string`  }\> |
| `getTheme` | () => `Promise`<{ `colors`: { `background`: `string` ; `disabledColor`: `string` ; `error`: `string` ; `foreground1`: `string` ; `foreground2`: `string` ; `foreground3`: `string` ; `onPrimary`: `string` ; `onSecondary`: `string` ; `primary`: `string` ; `primaryContainer`: `string` ; `secondary`: `string` ; `secondaryContainer`: `string` ; `settingsColumnColor`: `string` ; `settingsTileColor`: `string` ; `snackBarColor`: `string` ; `surface`: `string`  } ; `displayName`: `string` ; `name`: `string`  }\> |
| `getVisibleAssets` | () => `Promise`<{ `visibleAssets`: { `contractAddress?`: `string` ; `decimals`: `number` ; `name`: `string` ; `symbol`: `string`  }[]  }\> |
| `getWalletAddresses` | () => `Promise`<{ `walletAddresses`: `Record`<`string`, `string`\>  }\> |
| `hasMinimumNomoVersion` | (`args`: { `minVersion`: `string`  }) => `Promise`<{ `minVersionFulfilled`: `boolean` ; `nomoVersion`: `string`  }\> |
| `injectIntoWebOn` | (`args`: { `payload`: `string` ; `webon_id`: `string`  }) => `Promise`<`void`\> |
| `injectQRCode` | (`args`: { `navigateBack`: `boolean` ; `qrCode`: `string`  }) => `Promise`<`void`\> |
| `installWebOn` | (`args`: { `deeplink`: `string` ; `navigateBack`: `boolean` ; `skipPermissionDialog`: `boolean`  }) => `Promise`<`void`\> |
| `launchSmartchainFaucet` | () => `Promise`<`void`\> |
| `launchUrl` | (`args`: { `launchMode`: ``"platformDefault"`` \| ``"inAppWebView"`` \| ``"externalApplication"`` \| ``"externalNonBrowserApplication"`` ; `url`: `string`  }) => `Promise`<`any`\> |
| `localStorage` | { `getItem`: (`key`: `string`, `options?`: { `webon_id`: `string`  }) => `Promise`<``null`` \| `String`\> ; `removeItem`: (`key`: `string`) => `Promise`<`void`\> ; `setItem`: (`key`: `string`, `value`: `string`) => `Promise`<`void`\>  } |
| `localStorage.getItem` | (`key`: `string`, `options?`: { `webon_id`: `string`  }) => `Promise`<``null`` \| `String`\> |
| `localStorage.removeItem` | (`key`: `string`) => `Promise`<`void`\> |
| `localStorage.setItem` | (`key`: `string`, `value`: `string`) => `Promise`<`void`\> |
| `mnemonicBackupExisted` | () => `Promise`<{ `mnemonicBackupExisted`: `boolean`  }\> |
| `nativeLog` | (`severity`: ``"LOG"`` \| ``"INFO"`` \| ``"WARN"`` \| ``"ERROR"``, `args`: `any`[]) => `void` |
| `openFAQPage` | (`args`: { `faqContent`: `Record`<`string`, `Record`<`string`, `string`\>\> ; `initiallyExpanded`: `boolean` ; `supportButtonTitle?`: `string` ; `supportButtonUrl?`: `string`  }) => `Promise`<`void`\> |
| `pickFromGallery` | (`args?`: { `imageQuality?`: `number` ; `maxHeight?`: `number` ; `maxWidth?`: `number`  }) => `Promise`<{ `imageBase64`: `string` ; `path`: `string`  }\> |
| `qrScan` | () => `Promise`<{ `qrCode`: `string`  }\> |
| `registerOnWebOnVisible` | (`callback`: (`args`: { `fullscreenMode`: `boolean`  }) => `void`) => `Promise`<`void`\> |
| `selectAssetFromDialog` | () => `Promise`<{ `selectedAsset`: { `balance`: `string` ; `contractAddress?`: `string` ; `decimals`: `number` ; `name`: `string` ; `network?`: `string` \| ``null`` ; `receiveAddress`: `string` \| ``null`` ; `symbol`: `string`  }  }\> |
| `sendAssets` | (`args`: { `amount`: `string` ; `assetSymbol`: `string` ; `targetAddress`: `string`  }) => `Promise`<`any`\> |
| `signEvmMessage` | (`args`: { `message`: `string`  }) => `Promise`<{ `sigHex`: `string`  }\> |
| `signEvmTransaction` | (`args`: { `messageHex`: `string`  }) => `Promise`<{ `sigHex`: `string`  }\> |
| `takePicture` | (`args?`: { `imageQuality?`: `number` ; `maxHeight?`: `number` ; `maxWidth?`: `number`  }) => `Promise`<{ `imageBase64`: `string` ; `path`: `string`  }\> |

#### Defined in

[nomo_api.ts:41](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L41)

___

### nomoConsole

• `Const` **nomoConsole**: `Object`

A set of logging-functions to enable debugging with the Nomo dev mode.
You should not need to call this directly, since it will be called automatically when calling
console.log/console.error/console.warn/console.info.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | (...`args`: `any`[]) => `void` |
| `info` | (...`args`: `any`[]) => `void` |
| `log` | (...`args`: `any`[]) => `void` |
| `warn` | (...`args`: `any`[]) => `void` |

#### Defined in

[nomo_api.ts:88](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L88)

___

### nomoLocalStorage

• `Const` **nomoLocalStorage**: `Object`

nomoLocalStorage provides a mechanism for sharing data between WebOns.
If a webon_id is passed to nomoLocalStorage.getItem, then it tries to read data from another WebOn with the given webon_id.
nomoLocalStorage can also be used as an alternative to the regular localStorage.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getItem` | (`key`: `string`, `options?`: { `webon_id`: `string`  }) => `Promise`<``null`` \| `String`\> |
| `removeItem` | (`key`: `string`) => `Promise`<`void`\> |
| `setItem` | (`key`: `string`, `value`: `string`) => `Promise`<`void`\> |

#### Defined in

[nomo_api.ts:10](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L10)

## Functions

### hasMinimumNomoVersion

▸ **hasMinimumNomoVersion**(`args`): `Promise`<{ `minVersionFulfilled`: `boolean` ; `nomoVersion`: `string`  }\>

This function checks at runtime if the Nomo App has a minimum version.
It is also possible to require a minimum Nomo App version in the manifest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.minVersion` | `string` |

#### Returns

`Promise`<{ `minVersionFulfilled`: `boolean` ; `nomoVersion`: `string`  }\>

#### Defined in

[nomo_api.ts:229](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L229)

___

### nomoAddCustomToken

▸ **nomoAddCustomToken**(`args`): `Promise`<`void`\>

Adds a custom token to the list of visible assets in the Nomo Wallet.
Before that, it opens a dialog for the user to confirm.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.contractAddress` | `string` |
| `args.network` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[nomo_api.ts:493](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L493)

___

### nomoAuthHttp

▸ **nomoAuthHttp**(`args`): `Promise`<{ `response`: `string` ; `statusCode`: `number`  }\>

A special http-function that implements the NOMO-Auth-Protocol.
NOMO-Auth allows a seamless authentication for supported backends.
Moreover, even if you do not use NOMO-Auth, you can still use this function for bypassing CORS/Same-Origin-Policy.
At a lower level, NOMO-Auth works by injecting the following http-headers into the request:
Authorization: "Bearer JWT"
nomo-sig: "Signature of JWT"
nomo-auth-addr: "an address derived by the NOMO-wallet"
nomo-auth-version: "version of NOMO-Auth"

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string` \| { `body?`: `string` ; `headers?`: { `[key: string]`: `string`;  } ; `method?`: ``"GET"`` \| ``"POST"`` ; `url`: `string`  } |

#### Returns

`Promise`<{ `response`: `string` ; `statusCode`: `number`  }\>

#### Defined in

[nomo_api.ts:424](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L424)

___

### nomoEnableMobileConsoleDebugging

▸ **nomoEnableMobileConsoleDebugging**(): `void`

After calling this function, console logs are visible in the
mobile dev mode of the Nomo App.

#### Returns

`void`

#### Defined in

[nomo_api.ts:113](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L113)

___

### nomoGetAssetIcon

▸ **nomoGetAssetIcon**(`args`): `Promise`<{ `isPending`: `boolean` ; `large`: `string` ; `name`: `string` ; `small`: `string` ; `symbol`: `string` ; `thumb`: `string`  }\>

Returns a set of URLs that contain icons of the asset.
May throw an error if no icons can be found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetSymbol` | `string` |

#### Returns

`Promise`<{ `isPending`: `boolean` ; `large`: `string` ; `name`: `string` ; `small`: `string` ; `symbol`: `string` ; `thumb`: `string`  }\>

#### Defined in

[nomo_api.ts:612](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L612)

___

### nomoGetBalance

▸ **nomoGetBalance**(`args`): `Promise`<{ `balance`: `string` ; `contractAddress?`: `string` \| ``null`` ; `decimals`: `number` ; `name`: `string` ; `network?`: `string` \| ``null`` ; `receiveAddress`: `string` \| ``null`` ; `symbol`: `string`  }\>

Returns not only the balance of an asset, but also additional information like the network, a contract-address and a receive-address.
Typically, the decimals are needed to convert a raw balance into a user-readable balance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetSymbol` | `string` |

#### Returns

`Promise`<{ `balance`: `string` ; `contractAddress?`: `string` \| ``null`` ; `decimals`: `number` ; `name`: `string` ; `network?`: `string` \| ``null`` ; `receiveAddress`: `string` \| ``null`` ; `symbol`: `string`  }\>

#### Defined in

[nomo_api.ts:596](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L596)

___

### nomoGetDeviceHashes

▸ **nomoGetDeviceHashes**(): `Promise`<{ `deviceHashes`: `string`  }\>

Returns a comma-separated list of device hashes.
Can be used for fingerprinting devices.

#### Returns

`Promise`<{ `deviceHashes`: `string`  }\>

#### Defined in

[nomo_api.ts:388](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L388)

___

### nomoGetDeviceName

▸ **nomoGetDeviceName**(): `Promise`<{ `deviceName`: `string`  }\>

Returns a human-readable name of the device.

#### Returns

`Promise`<{ `deviceName`: `string`  }\>

#### Defined in

[nomo_api.ts:403](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L403)

___

### nomoGetEvmAddress

▸ **nomoGetEvmAddress**(): `Promise`<`string`\>

A convenience function to get the Smartchain address of the Nomo Wallet.
Internally, it calls "nomoGetWalletAddresses" and caches the result.

#### Returns

`Promise`<`string`\>

#### Defined in

[nomo_api.ts:532](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L532)

___

### nomoGetInstalledWebOns

▸ **nomoGetInstalledWebOns**(): `Promise`<{ `manifests`: [`NomoManifest`](interfaces/NomoManifest.md)[]  }\>

Gets all manifests of the installed WebOns, including information like name/id/version.

#### Returns

`Promise`<{ `manifests`: [`NomoManifest`](interfaces/NomoManifest.md)[]  }\>

#### Defined in

[nomo_api.ts:674](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L674)

___

### nomoGetLanguage

▸ **nomoGetLanguage**(): `Promise`<{ `language`: `string`  }\>

Returns the currently selected language of the Nomo App.

#### Returns

`Promise`<{ `language`: `string`  }\>

#### Defined in

[nomo_api.ts:482](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L482)

___

### nomoGetManifest

▸ **nomoGetManifest**(): `Promise`<[`NomoManifest`](interfaces/NomoManifest.md)\>

Returns the nomo_manifest.json that was used during the installation of the WebOn.
For example, this can be used by a WebOn for checking its own version.

#### Returns

`Promise`<[`NomoManifest`](interfaces/NomoManifest.md)\>

#### Defined in

[nomo_api.ts:574](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L574)

___

### nomoGetMessengerAddress

▸ **nomoGetMessengerAddress**(): `Promise`<{ `inviteLink`: `string` ; `messengerAddress`: `string`  }\>

Can be used for chatting with other NOMO-users, but also for push-notifications or chat-bots.

#### Returns

`Promise`<{ `inviteLink`: `string` ; `messengerAddress`: `string`  }\>

#### Defined in

[nomo_api.ts:245](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L245)

___

### nomoGetPlatformInfo

▸ **nomoGetPlatformInfo**(): `Promise`<{ `appName`: `string` ; `buildNumber`: `string` ; `clientName`: `string` ; `operatingSystem`: `string` ; `version`: `string`  }\>

Returns both the NOMO-version and the operating system where the WebOn runs.
Can be used for implementing platform-specific functionality.
See https://nomo.app/ for an overview of supported platforms.

#### Returns

`Promise`<{ `appName`: `string` ; `buildNumber`: `string` ; `clientName`: `string` ; `operatingSystem`: `string` ; `version`: `string`  }\>

#### Defined in

[nomo_api.ts:203](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L203)

___

### nomoGetTheme

▸ **nomoGetTheme**(): `Promise`<{ `colors`: { `background`: `string` ; `disabledColor`: `string` ; `error`: `string` ; `foreground1`: `string` ; `foreground2`: `string` ; `foreground3`: `string` ; `onPrimary`: `string` ; `onSecondary`: `string` ; `primary`: `string` ; `primaryContainer`: `string` ; `secondary`: `string` ; `secondaryContainer`: `string` ; `settingsColumnColor`: `string` ; `settingsTileColor`: `string` ; `snackBarColor`: `string` ; `surface`: `string`  } ; `displayName`: `string` ; `name`: `string`  }\>

"nomoGetTheme" is a low-level function that should not be called directly. Instead, the functions in "nomo_theming" should be used.

#### Returns

`Promise`<{ `colors`: { `background`: `string` ; `disabledColor`: `string` ; `error`: `string` ; `foreground1`: `string` ; `foreground2`: `string` ; `foreground3`: `string` ; `onPrimary`: `string` ; `onSecondary`: `string` ; `primary`: `string` ; `primaryContainer`: `string` ; `secondary`: `string` ; `secondaryContainer`: `string` ; `settingsColumnColor`: `string` ; `settingsTileColor`: `string` ; `snackBarColor`: `string` ; `surface`: `string`  } ; `displayName`: `string` ; `name`: `string`  }\>

#### Defined in

[nomo_api.ts:359](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L359)

___

### nomoGetVisibleAssets

▸ **nomoGetVisibleAssets**(): `Promise`<{ `visibleAssets`: { `contractAddress?`: `string` ; `decimals`: `number` ; `name`: `string` ; `symbol`: `string`  }[]  }\>

Returns a list of assets that are currently visible in the Nomo Wallet.

#### Returns

`Promise`<{ `visibleAssets`: { `contractAddress?`: `string` ; `decimals`: `number` ; `name`: `string` ; `symbol`: `string`  }[]  }\>

#### Defined in

[nomo_api.ts:503](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L503)

___

### nomoGetWalletAddresses

▸ **nomoGetWalletAddresses**(): `Promise`<{ `walletAddresses`: `Record`<`string`, `string`\>  }\>

Returns blockchain-addresses of the NOMO-user.

#### Returns

`Promise`<{ `walletAddresses`: `Record`<`string`, `string`\>  }\>

#### Defined in

[nomo_api.ts:262](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L262)

___

### nomoInjectIntoWebOn

▸ **nomoInjectIntoWebOn**(`args`): `Promise`<`void`\>

Opens another WebOn on top of the current WebOn.
If the WebOn is not yet running, the WebOn will be launched.
If the WebOn is not yet installed, an error is thrown.
A payload can be passed to the WebOn.
Afterwards, the user may navigate back to the current WebOn by pressing the back button.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.payload` | `string` |
| `args.webon_id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[nomo_api.ts:295](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L295)

___

### nomoInjectQRCode

▸ **nomoInjectQRCode**(`args`): `Promise`<`void`\>

Injecting QRCodes is useful for multiple purposes.
For example, new chats can be opened by injecting a chat-invitation-link.
Also the NOMO-ID protocol works by injecting QRCodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.navigateBack` | `boolean` |
| `args.qrCode` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[nomo_api.ts:281](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L281)

___

### nomoInstallWebOn

▸ **nomoInstallWebOn**(`args`): `Promise`<`void`\>

Installs a WebOn with or without user interaction.
See the README for an explanation about deeplinks.
Returns a stackTrace if the installation fails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.deeplink` | `string` |
| `args.navigateBack` | `boolean` |
| `args.skipPermissionDialog` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[nomo_api.ts:685](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L685)

___

### nomoLaunchSmartchainFaucet

▸ **nomoLaunchSmartchainFaucet**(): `Promise`<`void`\>

Launches a free faucet that can be used for paying transaction fees.

#### Returns

`Promise`<`void`\>

#### Defined in

[nomo_api.ts:696](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L696)

___

### nomoLaunchUrl

▸ **nomoLaunchUrl**(`args`): `Promise`<`any`\>

Passes a URL to the underlying platform for handling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.launchMode` | ``"platformDefault"`` \| ``"inAppWebView"`` \| ``"externalApplication"`` \| ``"externalNonBrowserApplication"`` |
| `args.url` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[nomo_api.ts:581](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L581)

___

### nomoMnemonicBackupExisted

▸ **nomoMnemonicBackupExisted**(): `Promise`<{ `mnemonicBackupExisted`: `boolean`  }\>

If true, then the user has made a backup of their 12 words (at some point in the past).
If false, then there exists no backup and the 12 words will get lost with a high probability.

#### Returns

`Promise`<{ `mnemonicBackupExisted`: `boolean`  }\>

#### Defined in

[nomo_api.ts:456](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L456)

___

### nomoOpenFAQPage

▸ **nomoOpenFAQPage**(`args`): `Promise`<`void`\>

Opens a standardized FAQ page in Nomo design.
"faqContent" should be a nested object of questions and answers (with depth=2).
Optionally, a button for contacting support is shown below of the FAQs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.faqContent` | `Record`<`string`, `Record`<`string`, `string`\>\> |
| `args.initiallyExpanded` | `boolean` |
| `args.supportButtonTitle?` | `string` |
| `args.supportButtonUrl?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[nomo_api.ts:628](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L628)

___

### nomoPickFromGallery

▸ **nomoPickFromGallery**(`args?`): `Promise`<{ `imageBase64`: `string` ; `path`: `string`  }\>

Opens an image-picker and returns an image in base64-encoding.
The promise rejects if the user chooses to cancel.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Object` |
| `args.imageQuality?` | `number` |
| `args.maxHeight?` | `number` |
| `args.maxWidth?` | `number` |

#### Returns

`Promise`<{ `imageBase64`: `string` ; `path`: `string`  }\>

#### Defined in

[nomo_api.ts:335](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L335)

___

### nomoQrScan

▸ **nomoQrScan**(): `Promise`<{ `qrCode`: `string`  }\>

Opens the camera to scan a qrCode.
Returns a raw qrCode or a list of comma-separated qrCodes.

#### Returns

`Promise`<{ `qrCode`: `string`  }\>

#### Defined in

[nomo_api.ts:128](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L128)

___

### nomoRegisterOnWebOnVisible

▸ **nomoRegisterOnWebOnVisible**(`callback`): `Promise`<`void`\>

Registers a callback that will be called every time when the WebOn gets visible within the Nomo App.
For example, this can be used to refresh data when re-opening a WebOn after a long pause.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`args`: { `fullscreenMode`: `boolean`  }) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[nomo_api.ts:469](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L469)

___

### nomoSelectAssetFromDialog

▸ **nomoSelectAssetFromDialog**(): `Promise`<{ `selectedAsset`: { `balance`: `string` ; `contractAddress?`: `string` ; `decimals`: `number` ; `name`: `string` ; `network?`: `string` \| ``null`` ; `receiveAddress`: `string` \| ``null`` ; `symbol`: `string`  }  }\>

Opens a dialog for the user to select an asset.
If the dialog does not look "correct", WebOns are free to call "nomoGetVisibleAssets" and implement their own dialog.

#### Returns

`Promise`<{ `selectedAsset`: { `balance`: `string` ; `contractAddress?`: `string` ; `decimals`: `number` ; `name`: `string` ; `network?`: `string` \| ``null`` ; `receiveAddress`: `string` \| ``null`` ; `symbol`: `string`  }  }\>

#### Defined in

[nomo_api.ts:544](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L544)

___

### nomoSendAssets

▸ **nomoSendAssets**(`args`): `Promise`<`any`\>

Opens a confirmation-dialog to send assets away from the NOMO-wallet.
Assets are only sent if the user confirms the dialog.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.amount` | `string` |
| `args.assetSymbol` | `string` |
| `args.targetAddress` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[nomo_api.ts:444](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L444)

___

### nomoSignEvmMessage

▸ **nomoSignEvmMessage**(`args`): `Promise`<{ `sigHex`: `string`  }\>

Creates an Ethereum-styled message signature.
The resulting signature is not usable for submitting transactions,
but it can be used as a proof that the user controls a wallet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.message` | `string` |

#### Returns

`Promise`<{ `sigHex`: `string`  }\>

#### Defined in

[nomo_api.ts:178](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L178)

___

### nomoSignEvmTransaction

▸ **nomoSignEvmTransaction**(`args`): `Promise`<{ `sigHex`: `string`  }\>

Creates a signature for an EVM-based transaction.
See EthersjsNomoSigner for an example on how to use this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.messageHex` | `string` |

#### Returns

`Promise`<{ `sigHex`: `string`  }\>

#### Defined in

[nomo_api.ts:166](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L166)

___

### nomoTakePicture

▸ **nomoTakePicture**(`args?`): `Promise`<{ `imageBase64`: `string` ; `path`: `string`  }\>

Opens the camera and returns a picture in base64-encoding.
The promise rejects if the user chooses to cancel.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Object` |
| `args.imageQuality?` | `number` |
| `args.maxHeight?` | `number` |
| `args.maxWidth?` | `number` |

#### Returns

`Promise`<{ `imageBase64`: `string` ; `path`: `string`  }\>

#### Defined in

[nomo_api.ts:310](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L310)

___

### stringifyWithBigInts

▸ **stringifyWithBigInts**(`obj`): `string`

An alternative to JSON.stringify

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

[nomo_api.ts:135](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L135)
