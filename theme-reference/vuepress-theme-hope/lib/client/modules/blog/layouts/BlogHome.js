import { h } from "vue";
import BlogHomePage from "@theme-hope/modules/blog/components/BlogHomePage";
import BlogWrapper from "@theme-hope/modules/blog/components/BlogWrapper";
const BlogHome = () => h(BlogWrapper, () => h(BlogHomePage));
BlogHome.displayName = "BlogHome";
export default BlogHome;
//# sourceMappingURL=BlogHome.js.map