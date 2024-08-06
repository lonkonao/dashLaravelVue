<template>
    <div class="container">
        <h1>Welcome to Laravel with Vue.js</h1>
        <p>This is a simple Vue component integrated into a Laravel application.</p>
        <button @click="showAlert">Click me</button>
    </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        showAlert() {
            alert('Hello from Vue!');
        }
    }
}
</script>

<style scoped>
.container {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 2.5em;
    color: #42b983;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #358a6a;
}
</style>
