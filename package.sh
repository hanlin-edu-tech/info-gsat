#!/bin/bash

npm run build
gulp minifyImage
gulp uploadGcsTest