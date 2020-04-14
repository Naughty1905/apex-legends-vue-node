<template>
    <div>
        profile
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Profile",
        data() {
            return {
                loading: false,
                error: null,
                profileData: null
            }
        },
        beforeCreate() {
            document.body.className = "body-bg-no-image"
        },
        async created() {
            this.loading = true;
            try {
                const res = await axios.get(`/api/v2/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`);
                this.profileData = res.data.data;
                this.loading = false;
            } catch (err) {
                this.loading = false;
                this.error = err.response.data.message
            }
        }
    }
</script>

<style scoped>

</style>
