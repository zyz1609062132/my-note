time=`date "+%Y-%m-%d_%H-%M-%S"`
who=`hostname'
git add --all
git commit -m "${who} push @ ${time}"
git push origin master
echo "Finished Push"