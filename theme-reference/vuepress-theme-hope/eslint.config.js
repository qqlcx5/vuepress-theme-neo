import { globals, hope } from "eslint-config-mister-hope";
import { vue } from "eslint-config-mister-hope/vue";

export default hope(
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.eslint.json",
        extraFileExtensions: [".vue"],
      },
    },

    ignores: [
      "docs-shared/lib/**",
      "packages/*/assets/**",
      "packages/*/lib/**",
      "**/ventors/lzstring.ts",
    ],

    tsImport: {
      settings: {
        "import-x/internal-regex": "^@(?:internal|temp|theme-hope)/",
        "import-x/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: "tsconfig.json",
          },
        },
      },
      rules: {
        "import-x/no-absolute-path": "error",
        "import-x/no-restricted-paths": [
          "error",
          {
            zones: [
              {
                target: "packages/*/src/client/**",
                from: "packages/*/src/node/**",
              },
              {
                target: "packages/*/src/node/**",
                from: "packages/*/src/client/**",
              },
            ],
          },
        ],
      },
    },
  },

  ...vue({
    "@typescript-eslint/prefer-nullish-coalescing": [
      "warn",
      {
        ignoreConditionalTests: true,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allowSingleOrDouble",
        trailingUnderscore: "allow",
      },
      {
        selector: ["variable"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allowSingleOrDouble",
        trailingUnderscore: "allowSingleOrDouble",
      },
      {
        selector: ["parameter"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      // allow path like `/zh/demo.html`, alias starting with `@` and css property like `line-width`
      {
        selector: ["property"],
        format: null,
        custom: {
          regex: "(^/|^@|^[a-z]+(?:-[a-z]+)*?$)",
          match: true,
        },
        filter: "(^/|^@|^[a-z]+(?:-[a-z]+)*?$)",
      },
      {
        selector: ["property"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "import",
        format: ["PascalCase", "camelCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "import-x/no-unresolved": [
      "error",
      {
        ignore: [
          "^@temp\\/",
          "^@theme-hope\\/",
          "^vuepress/client",
          "^vuepress-theme-hope\\/blog\\/",
          "^vuepress-theme-hope\\/client\\/",
          "^vuepress-theme-hope\\/presets\\/",
        ],
      },
    ],
  }),

  {
    files: ["packages/*/src/node/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        "@vuepress/helper/client",
        "vuepress/client",
      ],
    },
  },

  {
    files: ["packages/*/src/client/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        "@vuepress/helper",
        "@vuepress/helper/node",
        "vuepress/core",
        "vuepress/markdown",
        "vuepress/utils",
      ],
      // FIXME: Should be error
      "import-x/dynamic-import-chunkname": "off",
      "vue/require-default-prop": "off",
    },
  },

  {
    files: ["packages/*/src/presets/**/*.ts"],
    rules: {
      "vue/require-default-prop": "off",
    },
  },

  {
    files: ["packages/create/src/**/*.ts"],
    rules: {
      "no-console": "off",
    },
  },

  {
    files: ["packages/create/template/**/*.ts"],
    rules: {
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },

  {
    files: ["scripts/**.ts", "**/gulpfile.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
);
