# dc

A Jekyll site is a collection of static files, so it can be served straight from the filesystem by a web server like Apache.

## Installation instructions

Create a Python virtual environment to run/install Fabric:

    virtualenv --python=python2.7 sandbox
    source ./sandbox/bin/activate

Install fabric into this environment:

    pip install fabric

Deploy using the fab command:

    fab deploy

Check the website.

## Upgrade instructions

Activate Python virtual environment:

    source ./sandbox/bin/activate

Deploy using the fab command:

    fab deploy

Check the website.
