## Status
[![Build Status](https://travis-ci.org/ramon54321/pezula.svg?branch=master)](https://travis-ci.org/ramon54321/pezula)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-red.svg)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## Pipeline
**Local** - Push > **GitHub** - Hook > **Travis** > Docker Build - Docker Push - Run Shell on Server

## Travis Encryption Process
### Process
```
 - ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa
 - travis encrypt-file deploy_rsa --add
 - ssh-copy-id -i deploy_rsa.pub <ssh-user>@<deploy-host>
 - rm -f deploy_rsa deploy_rsa.pub
 - git add deploy_rsa.enc .travis.yml
```
### Resulting .travis.yml
```
addons:
  ssh_known_hosts: <deploy-host>
before_deploy:
- openssl aes-256-cbc -K $encrypted_<...>_key -iv $encrypted_<...>_iv -in deploy_rsa.enc -out /tmp/deploy_rsa -d
- eval "$(ssh-agent -s)"
- chmod 600 /tmp/deploy_rsa
- ssh-add /tmp/deploy_rsa
```
