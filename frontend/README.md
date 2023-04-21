# Nuxt 3 Adbros sandbox

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
npm ci
```

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

## Pre-commit hooks

To use nvm with pre-commit hooks, edit/create file ```.huskyrc``` in your home folder and add this:

```bash
# ~/.huskyrc
# This loads nvm.sh and sets the correct PATH before running hook
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# If you have an .nvmrc file, we use the relevant node version
if [[ -f ".nvmrc" ]]; then
  nvm use --silent
fi
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
