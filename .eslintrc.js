module.exports = {
  root: true,
  extends: [
    'prettier',
    'airbnb',
  ],
  parser: 'babel-eslint',
  plugins: ['use-decorator', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      legacyDecorators: true,
      experimentalDecorators: true,
    },
  },
  rules: {
    'no-use-before-define': ['off'],
    'arrow-parens': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn', // <--- THIS IS THE NEW RULE
    // '@typescript-eslint/no-use-before-define': ['off'],
    // '@typescript-eslint/lines-between-class-members': ['off'],
    camelcase: ['off'],
    'no-param-reassign': ['error', { props: false }],
    'react/style-prop-object': ['off'],
    'global-require': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/no-array-index-key': ['off'],
    'react-native/no-inline-styles': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['off'],
    'import/prefer-default-export': ['off'],
    'no-plusplus': ['off'],
    'no-undef': ['off'],
    'guard-for-in': ['off'],
    'lines-between-class-members': ['off'],
    'react/require-default-props': ['warn'],
    'react/default-props-match-prop-types': ['warn'],
    'no-extra-boolean-cast': ['off'],
    'no-return-assign': ['off'],
    'func-names': ['off'],
    'use-decorator/use-decorator': [0, {
      params: [
        {
          name: 'assertParameter',
          public: true,
        },
      ],
      methods: [
        {
          name: 'assert',
          public: true,
        },
        {
          name: 'errorcatch',
          async: true,
          private: true,
        },
      ],
      class: [
        {
          superClass: ['Vue', 'Mixins'],
          name: 'Component',
        },
      ],
    }],
  },
};
