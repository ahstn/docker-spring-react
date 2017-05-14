ORG="phazyy"
IMAGE="spring-rest-postgres"
VERSION="0.1.0"

build:
	docker build -t ${ORG}/${IMAGE}:${VERSION} .

push:
	docker push ${ORG}/${IMAGE}:${VERSION}

run:
	docker run -p 5432:5432 ${ORG}/${IMAGE}:${VERSION}

debug:
	docker run -it ${ORG}/${IMAGE}:${VERSION} bash
