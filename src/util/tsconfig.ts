export const template: string = `{
	"compilerOptions": {
		"allowUnreachableCode": false,
		"allowUnusedLabels": false,
		"exactOptionalPropertyTypes": true,
		"noFallthroughCasesInSwitch": true,
		"noImplicitOverride": true,
		"noImplicitReturns": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"strict": true,
		"useUnknownInCatchVariables": true,
		"noUncheckedIndexedAccess": true,
		"module": "ESNext",
		"moduleResolution": "Bundler",
		"resolveJsonModule": true,
		"declaration": true,
		"declarationMap": true,
		"importHelpers": true,
		"inlineSources": true,
		"newLine": "lf",
		"noEmitHelpers": true,
		"outDir": "dist",
		"preserveConstEnums": true,
		"removeComments": false,
		"sourceMap": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true,
		"lib": [
			"ESNext",
			"DOM",
			"DOM.Iterable"
		],
		"target": "ES2021",
		"useDefineForClassFields": true,
		"isolatedModules": true,
		"jsx": "preserve",
		"baseUrl": ".",
		"noEmit": true,
		"allowJs": false,
		"incremental": true,
		"skipLibCheck": true,
		"plugins": [
			{
				"name": "next"
			}
		],
		"paths": {
			"~/*": [
				"./src/*"
			]
		}
	},
	"include": [
		"**/*.ts",
		"**/*.tsx",
		"src/**/*.ts",
		"src/**/*.tsx",
		"next-env.d.ts",
		".next/types/**/*.ts"
	],
	"exclude": ["node_modules"]
}`;
