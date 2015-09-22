#!/bin/bash
for f in `ls images`;do grep $f ../*.md >/dev/null || echo $f;done
