#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
#cd "${BASEDIR}"/../

PROTOC_GEN_TS_PATH="./../node_modules/.bin/protoc-gen-ts"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="./../node_modules/.bin/grpc_tools_node_protoc_plugin"
GRPC_TOOLS_NODE_PROTOC="./../node_modules/.bin/grpc_tools_node_protoc"

#../../infra/protobuf/*
#./src/proto/*
for f in ./../*; do

#echo "$(basename "$f")";
  # skip the non proto files
  if [ "$(basename "$f")" == "scripts-node" ]; then
      continue
  fi

  if [ "$(basename "$f")" == "node_modules" ]; then
      continue
  fi

  if [ "$(basename "$f")" == "testes.http" ]; then
      continue
  fi

  if [ "$(basename "$f")" == ".gitignore" ]; then
      continue
  fi

  if [ "$(basename "$f")" == "package-lock.json" ]; then
      continue
  fi

  if [ "$(basename "$f")" == "package.json" ]; then
      continue
  fi

  # loop over all the available proto files and compile them into respective dir
  # JavaScript code generating
  ${GRPC_TOOLS_NODE_PROTOC} \
      --js_out=import_style=commonjs,binary:"${f}" \
      --grpc_out="${f}" \
      --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
      -I "${f}" \
      "${f}"/*.proto

  ${GRPC_TOOLS_NODE_PROTOC} \
      --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
      --ts_out="${f}" \
      -I "${f}" \
      "${f}"/*.proto
done