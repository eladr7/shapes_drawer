## Overview

This repository is a ReactJS app for drawing 1D/2D shapes, with a back and frontend.
Here are the steps install and run it:

### Install modules

Perform the current directory, ./backend and ./frontend:

```bash
npm i
```

### Build the docker image

```bash
cd backend
docker build -t shapes-drawer .
```

### Run the app

From the root directory:

```bash
npm run start:withdocker
```

### Stop the app:

In the current directory:
`ctrl + c` to stop the frontend code

From ./backend:

```bash
docker-compose down
```
