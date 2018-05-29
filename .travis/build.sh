test $TRAVIS_EVENT_TYPE = cron \
          && echo -e "\e[95mCRON triggered build, thus building website." \
          && rm -rf docs \
          && yarn build \
          && touch docs/.nojekyll \
          && chmod +x .travis/write_cname.sh \
          && cd docs/ && ./../.travis/write_cname.sh \
          && cd ../

exit 0
