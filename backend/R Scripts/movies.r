# Installing the packages
#install.packages("httr", repos = "http://cran.us.r-project.org")
#install.packages("jsonlite", repos = "http://cran.us.r-project.org")

# Loading packages
library(httr)
library(jsonlite)

# Initializing API Call
call <- "http://www.omdbapi.com/?i=tt3896198&apikey=948d3551&plot=full&r=json"

# Getting details in API
get_movie_details <- GET(url = call)

# Getting status of HTTP Call
status_code(get_movie_details)

# Content in the API
str(content(get_movie_details))

# Converting content to text
get_movie_text <- content(get_movie_details,
						"text", encoding = "UTF-8")

# Parsing data in JSON
get_movie_json <- fromJSON(get_movie_text,
						flatten = TRUE)

# Converting into dataframe
get_movie_dataframe <- as.data.frame(get_movie_json)

write.table(get_movie_dataframe, "data.txt", sep = "\t", row.names = FALSE)
write.csv(get_movie_dataframe, "data.csv", row.names = FALSE)