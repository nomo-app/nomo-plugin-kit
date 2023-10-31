[nomo-webon-kit](../README.md) / [Exports](../modules.md) / NomoManifest

# Interface: NomoManifest

## Table of contents

### Properties

- [min\_nomo\_version](NomoManifest.md#min_nomo_version)
- [nomo\_manifest\_version](NomoManifest.md#nomo_manifest_version)
- [permissions](NomoManifest.md#permissions)
- [webon\_id](NomoManifest.md#webon_id)
- [webon\_name](NomoManifest.md#webon_name)
- [webon\_url](NomoManifest.md#webon_url)
- [webon\_version](NomoManifest.md#webon_version)

## Properties

### min\_nomo\_version

• `Optional` **min\_nomo\_version**: ``null`` \| `string`

If min_nomo_version is set, then outdated versions of the Nomo App will refuse to install the WebOn.

#### Defined in

[nomo_api.ts:641](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L641)

___

### nomo\_manifest\_version

• **nomo\_manifest\_version**: `string`

nomo_manifest_version should be 1.1.0.

#### Defined in

[nomo_api.ts:645](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L645)

___

### permissions

• **permissions**: `string`[]

A list of permissions for security-critical features.

#### Defined in

[nomo_api.ts:649](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L649)

___

### webon\_id

• **webon\_id**: `string`

webon_id should be the reverse-domain of a domain that is owned by the WebOn-author.
See https://en.wikipedia.org/wiki/Reverse_domain_name_notation for more details about the reverse domain name notation.

#### Defined in

[nomo_api.ts:654](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L654)

___

### webon\_name

• **webon\_name**: `string`

webon_name is the user-visible name of the WebOn.

#### Defined in

[nomo_api.ts:658](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L658)

___

### webon\_url

• **webon\_url**: `string`

webon_url is the URL that the Nomo App uses for installing the WebOn.
Typically, webon_url gets extracted out of a deeplink that is supplied to the Nomo App.

#### Defined in

[nomo_api.ts:663](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L663)

___

### webon\_version

• **webon\_version**: `string`

webon_version should comply with the semantic versioning standard.
See https://semver.org/ for details.

#### Defined in

[nomo_api.ts:668](https://github.com/nomo-app/nomo-webon-kit/blob/5e38ea3/nomo-webon-kit/src/nomo_api.ts#L668)
