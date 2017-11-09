from fabric.api import run, cd, env

env['hosts'] = ['dancecloud.ro']
env['user'] = 'php'


def deploy():
    with cd('/var/www/html/dance.cloud/prod/docroot/dc/'):
        run('git pull')
        run('jekyll build _config_production.yml')
