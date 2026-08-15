#!/bin/bash

HOST=y0shek@jmkellerman.com

while true; do
    read -p "run npm run build? " yn
    case $yn in
        [Yy]* ) npm run build; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

echo "Pushing to www.jmkellerman.com..."
rsync -r build $HOST:~/
echo "Making changes live..."
ssh $HOST ./move-build.sh
echo "Done"
