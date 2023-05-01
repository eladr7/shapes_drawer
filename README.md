## Overview

This repository is a ReactJS app with a back and frontend.
Here are the steps to run it:

### Install modules

perform the current folder, ./backend and ./frontend:

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
