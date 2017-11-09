# dc

A Jekyll site is a collection of static files, so it can be served straight from the filesystem by a web server like Apache.

## How to deploy

Create a Python virtual environment to run/install Fabric:

    virtualenv sandbox
    source ./sandbox/bin/activate

Install fabric into this environment:

    pip install fabric

Deploy using the fab command:

    fab deploy

Check the website.
