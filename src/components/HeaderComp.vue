<script setup></script>

<template>
    <header>
        <div class="container">
            <div>
                <h1>FormComp Projeto2</h1>
            </div>
            <nav>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header{
    background-color: #333;
    color: white;
    padding: 1.5rem;
}

nav{
    width: 50%;
    align-items: center;
    justify-content: center;
}

.container{
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul{
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-around;
    align-items: center;
}

li{
    list-style: none;
    font-size: 13pt;
    border-bottom: 2px solid white;
    opacity: 0.5;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    width: 20%;
    text-align: center;
}

li:hover{
    list-style: none;
    font-size: 13pt;
    border-bottom: 2px solid white;
    opacity: 1;

}
</style>

