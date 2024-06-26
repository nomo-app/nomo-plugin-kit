export interface NomoManifest {
    /**
     * If min_nomo_version is set, then outdated versions of the Nomo App will refuse to install the WebOn.
     */
    min_nomo_version?: string | null;
    /**
     * nomo_manifest_version should be 1.1.0.
     */
    nomo_manifest_version: string;
    /**
     * A list of permissions for security-critical features.
     */
    permissions: string[];
    /**
     * webon_id should be the reverse-domain of a domain that is owned by the WebOn-author.
     * See https://en.wikipedia.org/wiki/Reverse_domain_name_notation for more details about the reverse domain name notation.
     */
    webon_id: string;
    /**
     * webon_name is the user-visible name of the WebOn.
     */
    webon_name: string;
    /**
     * webon_url is the URL that the Nomo App uses for installing the WebOn.
     * Typically, webon_url gets extracted out of a deeplink that is supplied to the Nomo App.
     */
    webon_url: string;
    /**
     * url_args allows to run multiple instances of the same WebOn in parallel.
     * url_args is intended to be a string that starts with "?" or "#".
     * This is primarily useful for WebOns that are cached locally and launched programatically (e.g. launched via "nomoLaunchWebOn" from another WebOn).
     * Since Nomo App 0.3.6.
     */
    url_args?: string;
    /**
     * webon_version should comply with the semantic versioning standard.
     * See https://semver.org/ for details.
     */
    webon_version: string;
    /**
     * If true, the Nomo App will show a refresh-button in the navigation bar.
     * Since Nomo App 0.3.5.
     */
    show_refresh_button?: boolean;
    /**
     * If set, the Nomo App will try to obtain a tar.gz-cache.
     * cache_url should be a relative path.
     */
    cache_url?: string;
    /**
     * If set, the Nomo App will reject a cache if the signature cannot be verified.
     * cache_sig should be an Ethereum-styled message signature of a tar.gz-cache.
     */
    cache_sig?: string;
    /**
     * A list of additional content for the WebOn; one of the following:
     * - A JavaScript-URL to be injected into the WebOn.
     * - A social media link or a link to a website.
     */
    dependencies?: string[];
}
/**
 * Returns the nomo_manifest.json that was used during the installation of the WebOn.
 * For example, this can be used by a WebOn for checking its own version.
 */
export declare function nomoGetManifest(): Promise<NomoManifest>;
/**
 * Changes the manifest of the currently running WebOn.
 * Potential use cases:
 * - Changing the URL or URL-parameters of the WebOn.
 * - Changing the name of the WebOn.
 * - Sharing data with other WebOns (via "nomoGetInstalledWebOns").
 * Sidenotes:
 * - This function does not affect the currently running page. Please use regular JavaScript for navigation.
 * - This function does not allow to change the permissions of the WebOn.
 */
export declare function nomoUpdateManifest(args: {
    manifest: Partial<NomoManifest>;
}): Promise<void>;
/**
 * Changes the URL-parameters in the manifest of the currently running WebOn.
 * This function does not affect the currently running page.
 * Please use regular JavaScript for navigation.
 */
export declare function nomoSetWebOnParameters(args: {
    params: {
        [key: string]: string;
    };
}): Promise<void>;
/**
 * Returns the URL-parameters of the WebOn-manifest.
 */
export declare function nomoGetWebOnParameters(): Promise<URLSearchParams>;
/**
 * Installs and/or launches a WebOn with or without user interaction.
 * If the WebOn is already installed, then the behavior depends on whether "backgroundInstall" is set to true.
 * If "backgroundInstall" is not set, then the already installed WebOn will be launched.
 * If "backgroundInstall" is set, then the already installed manifest will be replaced (including URL-args).
 * See the README for an explanation about deeplinks.
 *
 * Needs nomo.permission.INSTALL_WEBON.
 */
export declare function nomoInstallWebOn(args: {
    deeplink: string;
    skipPermissionDialog?: boolean;
    navigateBack?: boolean;
    backgroundInstall?: boolean;
}): Promise<void>;
/**
 * Installs a URL as a WebOn and grants the permissions that are specified in the manifest.
 *
 * Needs nomo.permission.INSTALL_WEBON.
 * Since Nomo App 0.3.5.
 */
export declare function nomoInstallUrlAsWebOn(args: {
    manifest: NomoManifest;
    skipPermissionDialog: boolean;
    navigateBack: boolean;
}): Promise<void>;
/**
 * The reverse operation of nomoInstallWebOn.
 * Throws an error if the WebOn cannot be found.
 *
 * Needs nomo.permission.INSTALL_WEBON.
 */
export declare function nomoUninstallWebOn(args: {
    webon_url: string;
}): Promise<void>;
/**
 * Tries to add a WebOn and then uninstalls another WebOn if it was successfully added.
 *
 * Needs nomo.permission.INSTALL_WEBON.
 */
export declare function nomoReplaceWebOn(args: {
    old_webon_url: string;
    new_deeplink: string;
    navigateBack: boolean;
}): Promise<void>;
/**
 * Gets all manifests of the installed WebOns, including information like name/id/version.
 *
 * Needs nomo.permission.GET_INSTALLED_WEBONS.
 */
export declare function nomoGetInstalledWebOns(): Promise<{
    manifests: NomoManifest[];
}>;
/**
 * Replaces the currently running WebOn with another WebOn on a different deeplink.
 *
 * Needs nomo.permission.INSTALL_WEBON.
 */
export declare function nomoMigrateAndSelfDestroy(args: {
    new_deeplink: string;
}): Promise<void>;
/**
 * Opens another WebOn on top of the current WebOn.
 * If the WebOn is not yet running, the WebOn will be launched.
 * If the WebOn is not yet installed, an error is thrown.
 * A payload can be passed to the WebOn.
 * Afterwards, the user may navigate back to the current WebOn by pressing the back button.
 */
export declare function nomoLaunchWebOn(args: {
    payload: string;
    manifest: NomoManifest;
}): Promise<void>;
/**
 * Passes a URL to the underlying platform for handling.
 * Typically, it will launch a system-browser or an in-app-webview.
 */
export declare function nomoLaunchUrl(args: {
    url: string;
    launchMode: "platformDefault" | "inAppWebView" | "externalApplication" | "externalNonBrowserApplication";
}): Promise<any>;
/**
 * Launches a URL as a WebOn without installing it.
 * Grants the permissions that are specified in the manifest.
 * If possible, please prefer "nomoLaunchUrl" or "nomoLaunchWebOn" over this function.
 *
 * Needs nomo.permission.INSTALL_WEBON.
 * Since Nomo App 0.3.5.
 */
export declare function nomoLaunchUrlAsWebOn(args: {
    manifest: NomoManifest;
}): Promise<any>;
/**
 * nomoLocalStorage provides a mechanism for sharing data between WebOns.
 * If a webon_id is passed to nomoLocalStorage.getItem, then it tries to read data from another WebOn with the given webon_id.
 * nomoLocalStorage can also be used as an alternative to the regular localStorage.
 */
export declare const nomoLocalStorage: {
    getItem: (key: string, options?: {
        webon_id: string;
    }) => Promise<String | null>;
    setItem: (key: string, value: string) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
};
