#!/bin/bash

green() {
  echo -e "\033[32m $1 \033[0m" 
}

red() {
  echo -e "\033[31m $1 \033[0m" 
}

yellow() {
  echo -e "\033[33m $1 \033[0m"
}

yellow "Are you sure you has installed git and can push --force remote(yes/no)"
read sure

if [[ "$sure" != "yes" ]]
then
  red "Must install git and has access push --force"
  exit
fi

yellow "Please input package name(like @idg/mavon-editor):"
read pkgName

# [[ "@idg/account" =~ ^@idg\/([a-z])([a-z]+)$  ]] && echo true
if [[ "$pkgName" =~ ^@idg\/([a-z])([a-z0-9-]+)$ ]]
then 
  green "package name $pkgName is ok"
else
  red "package name $pkgName is invalid, should like ^@idg\/([a-z])([a-z0-9-]+)$"
  exit
fi

yellow 'Please input init version, default is 0.0.1:'
read version

if [[ -z "$version" ]]
then 
  version="0.0.1"
fi

# [[ "0.0.1" =~ ^([0-9]+).([0-9]+).([0-9]+)$ ]] && echo true
if [[ "$version" =~ ^([0-9]+).([0-9]+).([0-9]+)$ ]]
then
  green "version $version is ok"
else 
  red "$version is invalid, should like ^([0-9]+).([0-9]+).([0-9]+)$"
  exit
fi

# sed -i "" "s/@idg\/seed/@idg\/test/g" package.json
replacePkgName=`echo $pkgName | sed 's#\/#\\\/#g'`
sed -i "" "s/@idg\/seed/$replacePkgName/g" package.json
sed -i "" "s/@idg\/seed/$replacePkgName/g" README.md

# sed -i "" "s/\"version\"\: \"0.1.0\"/\"version\"\: \"0.0.1\"/g" package.json
sed -i "" "s/\"version\"\: \"0.1.0\"/\"version\"\: \"$version\"/g" package.json
green "Replace package name and version success"

GlobalVariable="Idg"
string=${pkgName/@idg\//}
array=(${string//-/ })
for var in ${array[@]}
do
  new=`echo "$var" | awk '{for(i=1;i<=NF;i++) {printf "%s%s ", toupper(substr($i,1,1)),substr($i,2)};printf ORS}'`
  GlobalVariable="$GlobalVariable$new"
done

Variable=`echo $GlobalVariable | sed "s/ //g"`
green "Generate GlobalVariable $Variable"
sed -i "" "s/IdgSeed/$Variable/g" package.json

rm CHANGELOG.md
git checkout --orphan latest_branch
git add -A
git commit -am "refactor: init"
git branch -D master
git branch -m master
git push -f origin master
rm init.sh
