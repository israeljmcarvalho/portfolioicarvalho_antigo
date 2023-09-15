library(plumber)

r<-plumb("C:\\Users\\icarvalho\\Documents\\VBA\\Git\\ClusterInNode\\backend\\R Scripts\\plumber.R")$run(port=9999)

#The above will show:
#Running plumber API at http://127.0.0.1:9999
#Running swagger Docs at http://127.0.0.1:9999/__docs__/