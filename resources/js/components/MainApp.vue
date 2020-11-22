<template>
<div class="">
    <div class="container border">
        <tabs-menu :tabs="['Live & Upcoming', 'Result']" :selected="selected" @selected="setSelected">

            <tab :isSelected="selected === 'Live & Upcoming'">
                <div class="row">
                <table>
                    <tr class="tab-content" v-for="match in matches" :key="match.match_id">
                        <td width="20%">
                            <h3>{{ match.format_str }}</h3>
                            <p>{{ match.venue.name }}</p>
                            <p>{{ match.date_start }}</p>
                        </td>
                        <td width="22%">
                            <h3>{{ match.teama.name }}</h3>
                            <p>{{ match.teama.scores_full }}</p>
                        </td>
                        <td  width="8%">
                            <img class="team-logo" :src="match.teama.logo_url">
                        </td>
                        <td width="2%">
                            <h2 class="vs">VS</h2>
                        </td>
                        <td width="8%">
                            <img class="team-logo" :src="match.teamb.logo_url">
                        </td>
                        <td width="22%">
                            <h3>{{ match.teamb.name }}</h3>
                            <p>{{ match.teamb.scores_full }}</p>
                        </td>
                        <td width="18%">
                            <h5>{{ match.date_start }}</h5>
                        </td>
                    </tr>
                </table>
                </div>
            </tab>
            <tab :isSelected="selected === 'Result'">
                <div class="row">
                <table>
                    <tr class="tab-content" v-for="match in matches" :key="match.match_id">
                        <td width="20%">
                            <h3>{{ match.teama.name }}</h3>
                            <p>{{ match.teama.scores_full }}</p>
                        </td>
                        <td width="15%">
                            <img class="result-team-logo" :src="match.teamb.logo_url">
                        </td>
                        <td width="25%">
                            <h3>{{ match.format_str }}</h3>
                            <p>{{ match.venue.name }}</p>
                            <p>{{ match.date_start }}</p>
                        </td>
                        <td width="15%">
                            <img class="result-team-logo" :src="match.teamb.logo_url">
                        </td>
                        <td width="20%">
                            <h3>{{ match.teamb.name }}</h3>
                            <p>{{ match.teamb.scores_full }}</p>
                        </td>
                        <td width="5%">
                            arrow
                        </td>
                    </tr>
                </table>
                </div>
            </tab>

        </tabs-menu>

    </div>
</div>
</template>
<style>
.tab-content{
    height: 100px;
}
.tab-content > td {
    text-align: center;
}
.team-logo{
    max-width: 60px;
    max-height: 60px;
}
.vs{
    color: #F26B23;
    font-weight: 700;
}
.result-team-logo{
    max-width: 80px;
    max-height: 80px;
}
</style>
<script>

var token = '437214169d9be2a73e91d22f76f68b52';
    export default {
        data() {
            return {
                selected: 'Live & Upcoming',
                matches: [],
                results: [],
            }
        },
        mounted() {

                axios.get('https://rest.entitysport.com/v2/matches/?status=2&token=437214169d9be2a73e91d22f76f68b52')
                .then(response =>{
                    console.log(response.data.response.items)
                    this.matches = response.data.response.items;
                });
        },
        methods: {
            setSelected(tab) {
                this.selected = tab
            }
        },
    }
</script>
