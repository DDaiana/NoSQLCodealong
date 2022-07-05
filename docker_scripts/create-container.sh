docker run -d \
    --name shelter-db \
    --mount type=bind,source="$(pwd)",dst="/code" \
    mongo