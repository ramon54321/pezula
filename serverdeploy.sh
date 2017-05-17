cd pezula
git pull
docker-compose down
docker-compose -f docker-compose-production.yml up -d --remove-orphans
