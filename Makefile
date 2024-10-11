.PHONY: help install watch production build prettier prettier-watch

.DEFAULT_GOAL := production

## Make pnpm updates
pnpm-update:
	@corepack use pnpm@latest
	@pnpm up --latest --interactive
	@pnpm upgrade;

## Prettier files
prettier:
	@pnpm prettier --write --no-error-on-unmatched-pattern '**/*.{yaml,ts,tsx,mjs,js,md}'

## Watch for changes in files and run prettier
prettier-watch:
	@pnpm onchange '**/*.{yaml,ts,tsx,mjs,js,md}' -- pnpm prettier --write --ignore-unknown {{changed}}

## Install dependencies and build editor
production: install prettier build

clean:
	@rm -rf Resources/Public

## Install dependencies
install:
	@pnpm install

## Watch for changes and re-build on change
watch:
	make clean
	@pnpm watch

## Build editor
build:
	make clean
	@pnpm build

# Define colors
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
RESET  := $(shell tput -Txterm sgr0)

# define indention for descriptions
TARGET_MAX_CHAR_NUM=15

## Show help
help:
	@echo ''
	@echo '${GREEN}CLI command list:${RESET}'
	@echo ''
	@echo 'Usage:'
	@echo '  ${YELLOW}make${RESET} ${GREEN}<target>${RESET}'
	@echo ''
	@echo 'Targets:'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${YELLOW}%-$(TARGET_MAX_CHAR_NUM)s${RESET} ${GREEN}%s${RESET}\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	@echo ''
