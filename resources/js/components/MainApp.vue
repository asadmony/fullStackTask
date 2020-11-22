<template>
<div class="">
    <div class="container border">
        <tabs-menu :tabs="['Live & Upcoming', 'Result']" :selected="selected" @selected="setSelected">

            <tab :isSelected="selected === 'Live & Upcoming'">
                <div class="row">
                <table>
                    <tr class="tab-content" v-for="match in matches" :key="match.match_id">
                        <td width="20%">
                            <h3> {{ match.competition.status }} {{ match.subtitle }}</h3>
                            <p>{{ match.venue.name }}
                            <br>
                            {{new Date(match.date_start).getHours()}}:{{new Date(match.date_start).getMinutes()}}</p>
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
                            <h5>{{ match.date_start | date }}</h5>
                        </td>
                    </tr>
                </table>
                </div>
            </tab>
            <tab :isSelected="selected === 'Result'">
                <div class="row">
                <table>
                    <tr class="tab-content" v-for="result in results" :key="result.match_id">
                        <td width="20%">
                            <h3>{{ result.teama.name }}</h3>
                            <p>{{ result.teama.scores_full }}</p>
                        </td>
                        <td width="15%">
                            <img class="result-team-logo" :src="result.teama.logo_url">
                        </td>
                        <td width="25%">
                            <h3>{{ result.subtitle }}</h3>
                            <p>{{ result.venue.name }}</p>
                            <p>{{ result.date_start }}</p>
                        </td>
                        <td width="15%">
                            <img class="result-team-logo" :src="result.teamb.logo_url">
                        </td>
                        <td width="20%">
                            <h3>{{ result.teamb.name }}</h3>
                            <p>{{ result.teamb.scores_full }}</p>
                        </td>
                        <td width="5%">
                            <i class="fa fa-arrow-circle-right"></i>
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

    export default {
        data() {
            return {
                selected: 'Live & Upcoming',
                matches: [],
                results: [],
            }
        },
        mounted() {

                axios.get('https://rest.entitysport.com/v2/matches/?status=1&token=437214169d9be2a73e91d22f76f68b52')
                .then(response =>{
                    this.matches = response.data.response.items;
                });
                axios.get('https://rest.entitysport.com/v2/matches/?status=2&token=437214169d9be2a73e91d22f76f68b52')
                .then(response =>{
                    this.results = response.data.response.items;
                });
        },
        methods: {
            setSelected(tab) {
                this.selected = tab
            }
        },
    }
</script>
