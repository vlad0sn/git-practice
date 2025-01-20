#!/usr/bin/env bash
set -e

# Récupérer le nom et la version depuis package.json
name="test-td4"  

version="1.0.0"

# Construire l'image Docker
docker build -t "$name:$version" .

# Exécuter le conteneur Docker
docker run -p 8082:8080 "$name:$version"
