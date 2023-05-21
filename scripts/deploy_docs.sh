#!/bin/bash

export TMP_DEST=$(echo "$1")
export DEST=$(echo "$2")
export LATEST_VERSION=$(echo "$3")
export FUNCTIONAL_USER=$(echo "$4")
export PREVIOUS_VERSION=$(cat ${DEST}/last_deployed || echo $LATEST_VERSION)
export CUT_PREVIOUS_VERSION=$(echo ${PREVIOUS_VERSION} | cut -d. -f1-2)
export CUT_LATEST_VERSION=$(echo ${LATEST_VERSION} | cut -d. -f1-2)
export PREVIOUS_VERSIONS_DIR=previous_versions

version_greater_equal() {
    printf '%s\n%s\n' "$2" "$1" | sort --check=quiet --version-sort
}

save_versions_list() {
    ls ${DEST}/${PREVIOUS_VERSIONS_DIR} --hide versions-list.json | awk ' BEGIN {ORS = ""; print "[";}' | sed "s^\^\\\\\"^g;s^\/\@\/\@^\",\"^g;s^\/\@^\"^g" > ${DEST}/${PREVIOUS_VERSIONS_DIR}/versions-list.json || echo "No previous versions"
}

move_versions() {
    
}