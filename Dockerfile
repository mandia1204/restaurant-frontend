# Use phusion/passenger-full as base image.
# https://github.com/phusion/passenger-docker
FROM phusion/passenger-customizable:0.9.19

# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

#   Build system and git.
RUN /pd_build/utilities.sh && \

#   Node.js and Meteor support.
    /pd_build/nodejs.sh && \

    npm install -g gulp jspm

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 9000
WORKDIR /var/www/
CMD /bin/bash
