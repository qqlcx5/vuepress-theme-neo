import type { RepoType } from "vuepress-shared/client";
export declare const editLinkPatterns: Record<Exclude<RepoType, null>, string>;
interface EditLinkOptions {
    docsRepo: string;
    docsBranch: string;
    docsDir: string;
    filePathRelative: string | null;
    editLinkPattern?: string;
}
export declare const resolveEditLink: ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern, }: EditLinkOptions) => string | null;
export {};
//# sourceMappingURL=resolveEditLink.d.ts.map