ORG="phazyy"
IMAGE="dsr_frontend"
VERSION="0.1.0"

build:
	docker build -t ${ORG}/${IMAGE}:${VERSION} .

push:
	docker push ${ORG}/${IMAGE}:${VERSION}

run:
	docker run -p 3000:3000 ${ORG}/${IMAGE}:${VERSION}

debug:
	docker run -it ${ORG}/${IMAGE}:${VERSION} bash
