# 1. FROM instruction - this is the “base image” to start from
# this will be downloaded and cached locally
# it’s important to use an image name docker will be able to recognize
FROM node:16-bullseye

#. 2. COPY - where to find source files and where to put them in the image
# first path is the path outside the image (the files that we should copy in). We’re telling docker to use everything from this current directory.
# second path is inside the image (where the files should be stored. Detached from your own file system.)
# it’s a good idea to make the second path some subfolder to make it clear where we are working.
COPY . /App

# 3. WORKDIR - changes the directory - like 'cd' in unix
WORKDIR /App

# 4. RUN - runs a command (also builds the image)
# tell docker to install npm packages
RUN npm install && npm run build

# 5. EXPOSE - specifying the ports to open up/expose so we and others can access them
# note that the `expose` instruction does not actually publish the port.
# We publish in another step: When running the container, use the -p flag on docker run
EXPOSE 4000

# 6. CMD - runs any command after the image is built, once we run the container
# typically used to run our “start” command
CMD ["node", "server.js"]

# Commands to run:
    # Build the image: docker build . -t hats-a-million
    # Run in a container: docker run -p 3000:3000 hats-a-million