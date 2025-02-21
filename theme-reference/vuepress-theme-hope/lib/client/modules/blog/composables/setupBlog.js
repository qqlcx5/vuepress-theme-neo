import { setupTimeline } from "./setupTimeline.js";
import { setupArticles } from "./useArticles.js";
import { setupCategoryMap } from "./useCategoryMap.js";
import { setupStars } from "./useStars.js";
import { setupTagMap } from "./useTagMap.js";
export const setupBlog = () => {
    setupArticles();
    setupCategoryMap();
    setupStars();
    setupTagMap();
    setupTimeline();
};
//# sourceMappingURL=setupBlog.js.map