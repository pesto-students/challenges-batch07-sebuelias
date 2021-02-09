# Git Excercise insights

Commit ID can be found by using git log, as it didn't show commit ID on git commit.

git cat-file
-t shows the type.
-p shows the contents of the file neatly. Including parent and tree ID, author, committer and commit message.

git ls-files shows all the files in the staging area, which contains unchanged but tracked files as well.

git reset can help us revert uncommited changes, helps reset staging area to last commit.
--hard reset not only staging area, but also working directory to last commit.

git stash
stash save is deprecated, so we use git stash push -m "message" now, with message acting as name.
cannot pop stash when we have modified files.
when popping stash after changes to it, we need to resolve conflicts carefully.

git tag
can add tag to a specific commit by following then command with commit ID
-a for annotated tag message needs to be added with -m option, or text editor will open asking for it.

openssl on windows need to be installed

git revert creates a new commit at the end, which undoes what the reverted commit did.
