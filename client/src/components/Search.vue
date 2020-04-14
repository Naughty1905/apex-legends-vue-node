<template>
    <section class="search">
        <h1>Track Players Stats</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                <select name="platform" id="platform" v-model="platform">
                    <option value="psn">PlayStation</option>
                    <option value="xbl">Xbox</option>
                    <option value="Origin">Origin</option>
                </select>
            </div>
            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input id="gamertag" name="text" type="text" v-model="gamertag"
                placeholder="PSN ID, Origin ID, Xbox Live gamertag, etc">
            </div>
            <div class="form-group">
                <input type="submit" value="Submit" class="btn">
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return{
                platform: "psn",
                gamertag: ""
            }
        },
        beforeCreate() {
          document.body.className = "body-bg-image"
        },
        methods: {
            onSubmit(){
                if(!this.gamertag){
                    this.$toasted.show("Пожалуйста введите логин", {
                        duration: 1500,
                        icon: {
                            name:'exclamation-circle'
                        }
                    })
                } else {
                    this.$router.push(`/profile/${this.platform}/${this.gamertag}`)
                }
            }
        },
    }
</script>

<style scoped>

</style>
