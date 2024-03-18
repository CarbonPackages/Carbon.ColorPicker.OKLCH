.PHONY: help install watch dev production build prettier prettier-watch

.DEFAULT_GOAL := production

## Prettier files
prettier:
	@pnpm prettier --write --no-error-on-unmatched-pattern '**/*.{yaml,ts,tsx,mjs,js,md}'

## Watch for changes in files and run prettier
prettier-watch:
	@pnpm onchange '**/*.{yaml,ts,tsx,mjs,js,md}' -- pnpm prettier --write --ignore-unknown {{changed}}

## Install dependencies and build production version
production: install prettier build

## Install dependencies
install:
	@pnpm install

## Watch for changes and build development version on change
watch:
	@pnpm watch

## Build development version
dev:
	@pnpm dev

## Build production version
build:
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
