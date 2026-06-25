import Helper from '@ember/component/helper';
import type Owner from '@ember/owner';
import type { ContentValue } from '@glint/template';
interface ConfigSignature {
    Args: {
        Positional: [path: string];
    };
    Return: ContentValue;
}
export default class ConfigHelper extends Helper<ConfigSignature> {
    config: unknown;
    constructor(owner: Owner);
    compute([path]: [string]): ContentValue;
}
export {};
//# sourceMappingURL=config.d.ts.map