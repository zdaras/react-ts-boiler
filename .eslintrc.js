module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		project: './tsconfig.json',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks'],
	extends: [
		'airbnb',
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react'
		// 'plugin:prettier/recommended'
	],
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			webpack: {
				config: './config/webpack.dev.ts'
			}
		}
	},
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				overrides: {
					constructors: 'off'
				}
			}
		],
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/interface-name-prefix': 'error',
		'@typescript-eslint/member-delimiter-style': [
			'off',
			'error',
			{
				multiline: {
					delimiter: 'none',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/member-ordering': 'off',
		// '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		// '@typescript-eslint/no-param-reassign': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-this-alias': 'error',
		// '@typescript-eslint/no-triple-slash-reference': 'error',
		// '@typescript-eslint/no-use-before-declare': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-interface': 'off',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true
			}
		],
		'@typescript-eslint/semi': ['off', null],
		'@typescript-eslint/space-within-parens': ['off', 'never'],
		'@typescript-eslint/type-annotation-spacing': 'off',
		'@typescript-eslint/unified-signatures': 'error',
		'arrow-body-style': 'error',
		'arrow-parens': ['off', 'as-needed'],
		camelcase: 'error',
		complexity: 'off',
		'constructor-super': 'error',
		curly: ['error', 'multi-line'],
		'dot-notation': 'off',
		'eol-last': 'off',
		eqeqeq: ['error', 'smart'],
		'guard-for-in': 'error',
		'id-blacklist': [
			'error',
			'any',
			'Number',
			'number',
			'String',
			'string',
			'Boolean',
			'boolean',
			'Undefined',
			'undefined'
		],
		'id-match': 'error',
		'import/order': 'off',
		'linebreak-style': 'off',
		'max-classes-per-file': ['error', 3],
		'max-len': 'off',
		'new-parens': 'off',
		'newline-per-chained-call': 'off',
		'no-bitwise': 'off',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': [
			'error',
			{
				allow: [
					'debug',
					'info',
					'dirxml',
					'warn',
					'error',
					'dir',
					'timeLog',
					'assert',
					'clear',
					'count',
					'countReset',
					'group',
					'groupCollapsed',
					'groupEnd',
					'table',
					'Console',
					'profile',
					'profileEnd',
					'timeStamp',
					'context'
				]
			}
		],
		'no-debugger': 'error',
		'no-duplicate-imports': 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-extra-semi': 'off',
		'no-fallthrough': 'off',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': 'off',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2
			}
		],
		'no-new-wrappers': 'error',
		'no-shadow': [
			'error',
			{
				hoist: 'all'
			}
		],
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'off',
		'no-undef-init': 'error',
		'no-underscore-dangle': 'off',
		'no-unsafe-finally': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': 'error',
		// 'prefer-arrow/prefer-arrow-functions': 'error',
		'prefer-const': 'error',
		'prefer-template': 'error',
		'quote-props': 'off',
		radix: 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'use-isnan': 'error',
		'valid-typeof': 'off',
		'react-hooks/rules-of-hooks': 'error',
		// 'react-hooks/exhaustive-deps': 'warn',
		'import/prefer-default-export': 0,
		'react/jsx-filename-extension': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'no-param-reassign': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'react/prop-types': 0,
		'import/no-named-as-default': 0,
		'global-require': 0,
		'import/no-cycle': 0,
		'import/no-extraneous-dependencies': 0,
		'arrow-body-style': 0,
		'@typescript-eslint/camelcase': 0,
		'vars-on-top': 0,
		'no-var': 0
	}
};
