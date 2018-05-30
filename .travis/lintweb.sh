test $TRAVIS_EVENT_TYPE = push && test $TRAVIS_BRANCH = master \
          && echo -e "\e[95mMaster push, checking for script and web errors." \
          && yarn lint \
					&& yarn format

exit 0
