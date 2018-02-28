module.exports = {
    "extends": "airbnb-base",
    "settings": {
      "import/resolver": {
        "babel-plugin-root-import": {}
      }
    },
    "rules": {
      "import/no-absolute-path": "off",
      "import/no-extraneous-dependencies": ["error", {"devDependencies": ["src/test/**/**.*js"]}]
    }
};
