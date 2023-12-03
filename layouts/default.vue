<template>
    <NuxtPage/>
</template>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');


* {
  color: #eee;
  font-family: 'Ubuntu', sans-serif;
  box-sizing: border-box;
}
body {
  background: #0a192f;
}
.container {
  width: 90%;
  max-width: 900px;
  margin: 80px auto;
  border-radius: 5px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: #112240;
}
.error {
  color: #ff3f80;
  font-size: 14px;
}
button {
  text-decoration: none;
  background: #64ffda;
  color: #0a192f;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  padding: 10px 20px;
}
</style>