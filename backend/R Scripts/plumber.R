library(plumber)

#* @get /random_numbers
#* @param maxn

function(maxn) {

  #Converte maxn para numérico  
  maxn<-as.numeric(maxn)

  #Gera um número aleatório
  runif(1,min=0,max=maxn)
}

#* @post /operation
#* @param numbers vector of numbers
#* @param metric
function(numbers, metric) {

    print(numbers)
    numbers<-as.numeric(numbers)
    print(numbers)

    if(metric == 'mean')
        mean(numbers)
    else if(metric == 'sd')
        sd(numbers)
    else if(metric == 'min')
        min(numbers)
    else if(metric == 'max')
        max(numbers)
    else
        "Wrong metric! use mean, sd, min or max"
}