set -e
echo '输入发行版本：'
read VERSION

read -p "发行 $VERSION - 确定吗? (y/n)" -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "发行 $VERSION ..."

    git checkout master
    git merge release/v$VERSION
    git tag v$VERSION
    git push origin v$VERSION
    git push
fi
