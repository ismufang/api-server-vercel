<template>
    <div>
        <h1>{{name}}</h1>
        <ul>
            <li v-for="(key,value) in apiList" :key="key">
                <a :href="key">{{value}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import apiList from './api/index.js'
export default {
    name: 'App',
    data () {
        return {
            name: 'api-server',
            apiList
        }
    }
}
</script>

<style lang="scss" scoped></style>