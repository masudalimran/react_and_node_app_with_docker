> # Steps to make this project work
- clone this repo
  ```shell
  git clone https://github.com/masudalimran/react_and_node_app_with_docker.git
  ```
- install docker (check how to install in your OS)
- run docker compose file
    ```shell
    docker-compose up -d
    ```
- to close the containers
```shell
docker-compose down
```
- to check react server console
```shell
docker logs demo3-frontend-container
```
- to check node server console
```shell
docker logs demo3-api-container
```
- to attach any server to console
```shell
docker attach demo3-api-container 
```
Or
```shell
docker attach demo3-frontend-container 
```