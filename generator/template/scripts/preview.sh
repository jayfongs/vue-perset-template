set -e
echo '输入预览版本：'
read VERSION

read -p "预览 $VERSION - 确定吗? (y/n)" -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "预览 $VERSION ..."

    npm version $VERSION --no-git-tag-version
    git checkout -b release/v$VERSION
    git add .
    git commit -m "[preview] $VERSION"
    git push origin release/v$VERSION
    git branch --set-upstream-to=origin/release/v$VERSION release/v$VERSION
fi
