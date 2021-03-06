import Vue from 'vue'

// Filters
Vue.filter('to-uppercase', value => value.charAt(0).toUpperCase() + value.substr(1) )

Vue.filter('slice', value => {
  let
    len = value.length,
    max = 200
  return len > max ? `${value.substr(0, max-2)}..` : len <= max ? value : null
})

Vue.filter('timeAgo', value => {
  return value
})
