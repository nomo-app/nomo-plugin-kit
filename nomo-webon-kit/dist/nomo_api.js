import * as web3 from "./nomo_web3";
import * as multi from "./nomo_multi_webons";
import * as media from "./nomo_media";
import * as platform from "./nomo_platform";
import * as theming from "./nomo_theming";
import * as auth from "./nomo_auth";
/**
 * The nomo-object exposes WebOn-functions in an easy-to-use way.
 * The nomo-object can be used with only one import and supports the auto-completion of IDEs.
 */
export const nomo = {
    signEvmTransaction: web3.nomoSignEvmTransaction,
    signEvmMessage: web3.nomoSignEvmMessage,
    sendAssets: web3.nomoSendAssets,
    selectAssetFromDialog: web3.nomoSelectAssetFromDialog,
    getEvmAddress: web3.nomoGetEvmAddress,
    getWalletAddresses: web3.nomoGetWalletAddresses,
    getVisibleAssets: web3.nomoGetVisibleAssets,
    getBalance: web3.nomoGetBalance,
    getAssetIcon: web3.nomoGetAssetIcon,
    getAssetPrice: web3.nomoGetAssetPrice,
    mnemonicBackupExisted: web3.nomoMnemonicBackupExisted,
    launchSmartchainFaucet: web3.nomoLaunchSmartchainFaucet,
    addCustomToken: web3.nomoAddCustomToken,
    localStorage: multi.nomoLocalStorage,
    launchUrl: multi.nomoLaunchUrl,
    launchWebOn: multi.nomoLaunchWebOn,
    launchUrlAsWebOn: multi.nomoLaunchUrlAsWebOn,
    installWebOn: multi.nomoInstallWebOn,
    installUrlAsWebOn: multi.nomoInstallUrlAsWebOn,
    uninstallWebOn: multi.nomoUninstallWebOn,
    getInstalledWebOns: multi.nomoGetInstalledWebOns,
    replaceWebOn: multi.nomoReplaceWebOn,
    migrateAndSelfDestroy: multi.nomoMigrateAndSelfDestroy,
    getManifest: multi.nomoGetManifest,
    openFAQPage: media.nomoOpenFAQPage,
    getMessengerAddress: media.nomoGetMessengerAddress,
    takePicture: media.nomoTakePicture,
    pickFromGallery: media.nomoPickFromGallery,
    qrScan: media.nomoQrScan,
    injectQRCode: media.nomoInjectQRCode,
    hasMinimumNomoVersion: platform.hasMinimumNomoVersion,
    checkForWebOnUpdate: platform.nomoCheckForWebOnUpdate,
    getPlatformInfo: platform.nomoGetPlatformInfo,
    getExecutionMode: platform.nomoGetExecutionMode,
    getLanguage: platform.nomoGetLanguage,
    getDeviceHashes: platform.nomoGetDeviceHashes,
    getDeviceName: platform.nomoGetDeviceName,
    registerOnWebOnVisible: platform.nomoRegisterOnWebOnVisible,
    enableMobileConsoleDebugging: platform.nomoEnableMobileConsoleDebugging,
    injectNomoCSSVariables: theming.injectNomoCSSVariables,
    switchNomoTheme: theming.switchNomoTheme,
    getCurrentNomoTheme: theming.getCurrentNomoTheme,
    authHttp: auth.nomoAuthHttp,
};
