FROM registry.access.redhat.com/ubi8/httpd-24
COPY . /var/www/html
RUN rm /etc/httpd/conf.d/ssl.conf
EXPOSE 8080
CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
