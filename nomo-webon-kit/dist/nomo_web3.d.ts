export type NomoEvmNetwork = "zeniq-smart-chain" | "ethereum" | "binance-smart-chain";
export type NomoNetwork = NomoEvmNetwork | "bitcoin" | "zeniq" | "litecoin" | "bitcoincash";
export interface NomoAssetSelector {
    symbol: string;
    name?: string;
    network?: NomoNetwork;
    /**
     * contractAddress is the strongest asset-selector with the highest security.
     * If contractAddress is specified, then name and symbol will be ignored.
     */
    contractAddress?: string;
}
export interface NomoAsset extends NomoAssetSelector {
    decimals: number;
    receiveAddress?: string | null;
    balance?: string;
}
/**
 * Creates a signature for an EVM-based transaction.
 * See EthersjsNomoSigner for an example on how to use this function.
 *
 * Needs nomo.permission.SIGN_EVM_TRANSACTION.
 */
export declare function nomoSignEvmTransaction(args: {
    messageHex: string;
}): Promise<{
    sigHex: string;
}>;
/**
 * Creates an Ethereum-styled message signature.
 * The resulting signature is not usable for submitting transactions,
 * but it can be used as a proof that the user controls a wallet.
 *
 * Needs nomo.permission.SIGN_EVM_MESSAGE.
 */
export declare function nomoSignEvmMessage(args: {
    message: string;
}): Promise<{
    sigHex: string;
}>;
/**
 * Opens a confirmation-dialog to send assets away from the Nomo App.
 * Assets are only sent if the user confirms the dialog.
 * "amount" should be a string that can be parsed by "BigInt.parse":  https://api.flutter.dev/flutter/dart-core/BigInt/parse.html
 *
 * Needs nomo.permission.SEND_ASSETS.
 */
export declare function nomoSendAssets(args: {
    asset: NomoAssetSelector;
    targetAddress: string;
    amount: string;
}): Promise<any>;
/**
 * Opens a dialog for the user to select an asset.
 * If the dialog does not look "correct", WebOns are free to call "nomoGetVisibleAssets" and implement their own dialog.
 */
export declare function nomoSelectAssetFromDialog(): Promise<{
    selectedAsset: NomoAsset & {
        balance: string;
    };
}>;
/**
 * Returns a list of assets that are currently visible in the Nomo Wallet.
 */
export declare function nomoGetVisibleAssets(): Promise<{
    visibleAssets: Array<NomoAsset>;
}>;
/**
 * A convenience function to get the Smartchain address of the Nomo Wallet.
 * Internally, it calls "nomoGetWalletAddresses" and caches the result.
 */
export declare function nomoGetEvmAddress(): Promise<string>;
/**
 * Returns blockchain-addresses of the NOMO-user.
 */
export declare function nomoGetWalletAddresses(): Promise<{
    walletAddresses: Record<string, string>;
}>;
/**
 * Returns a set of URLs that contain icons of the asset.
 * May throw an error if no icons can be found.
 */
export declare function nomoGetAssetIcon(args: NomoAssetSelector): Promise<{
    large: string;
    small: string;
    thumb: string;
    isPending: boolean;
    symbol: string;
    name: string;
}>;
/**
 * Returns an asset price.
 * Might be slow if a price is not yet in the Nomo App's cache.
 */
export declare function nomoGetAssetPrice(args: NomoAssetSelector): Promise<{
    price: number;
    currencyDisplayName: string;
    currencySymbol: string;
}>;
/**
 * Returns not only the balance of an asset, but also additional information like the network, a contract-address and a receive-address.
 * Typically, the decimals are needed to convert a raw balance into a user-readable balance.
 */
export declare function nomoGetBalance(args: NomoAssetSelector): Promise<NomoAsset & {
    balance: string;
}>;
/**
 * Adds a custom token to the list of visible assets in the Nomo Wallet.
 * Before that, it opens a dialog for the user to confirm.
 *
 * Needs nomo.permission.ADD_CUSTOM_TOKEN.
 */
export declare function nomoAddCustomToken(args: NomoAssetSelector & {
    contractAddress: string;
    network: NomoEvmNetwork;
}): Promise<void>;
/**
 * Launches a free faucet that can be used for paying transaction fees.
 */
export declare function nomoLaunchSmartchainFaucet(): Promise<void>;
/**
 * If true, then the user has made a backup of their 12 words (at some point in the past).
 * If false, then there exists no backup and the 12 words will get lost with a high probability.
 */
export declare function nomoMnemonicBackupExisted(): Promise<{
    mnemonicBackupExisted: boolean;
}>;
