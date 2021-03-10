#!/bin/bash

HOST=kellerman.joshua.m@joshuamk.com

echo "Pushing to joshuamk.com..."
rsync -r build $HOST:~/
echo "Making changes live..."
ssh $HOST ./move-build.sh
echo "Done"
