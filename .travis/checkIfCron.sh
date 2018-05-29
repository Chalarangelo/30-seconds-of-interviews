test $TRAVIS_BRANCH != master && (test $TRAVIS_EVENT_TYPE = push || test $TRAVIS_EVENT_TYPE = pull_request) && echo -e "\e[95mNot a CRON triggered build, thus only checking for errors." 

exit 0
