from fabric.api import run, cd, env

env['hosts'] = ['dancecloud.ro']
env['user'] = 'php'
env['use_ssh_config'] = True


def deploy():
    with cd('/var/www/html/dance.cloud/prod/docroot/dc/'):
        run('git pull origin master')
        run('JEKYLL_ENV=production jekyll build')
