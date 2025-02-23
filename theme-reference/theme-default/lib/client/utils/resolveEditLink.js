import { resolveRepoType } from '@theme/resolveRepoType';
import { isLinkHttp, removeEndingSlash, removeLeadingSlash, } from 'vuepress/shared';
export const EDIT_LINK_PATTERNS = {
    GitHub: ':repo/edit/:branch/:path',
    GitLab: ':repo/-/edit/:branch/:path',
    Gitee: ':repo/edit/:branch/:path',
    Bitbucket: ':repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default',
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern, }) => {
    if (editLinkPattern) {
        return editLinkPattern;
    }
    const repoType = resolveRepoType(docsRepo);
    if (repoType !== null) {
        return EDIT_LINK_PATTERNS[repoType];
    }
    return null;
};
export const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern, }) => {
    if (!filePathRelative)
        return null;
    const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
    if (!pattern)
        return null;
    return pattern
        .replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`)
        .replace(/:branch/, docsBranch)
        .replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
