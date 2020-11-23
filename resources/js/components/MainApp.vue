<template>
<div class="">
    <div class="container border">
        <tabs-menu :tabs="['Live & Upcoming', 'Result']" :selected="selected" @selected="setSelected">

            <tab :isSelected="selected === 'Live & Upcoming'">
                <div class="row">
                <table>
                    <tr class="tab-content" v-for="match in matches" :key="match.match_id">
                        <td width="20%">
                            <h5> <span class="status"> {{ getStatus(match.date_start,match.end_start) }} </span>  {{ match.subtitle }}</h5>
                            <p :class="getStatus(match.date_start,match.end_start)">{{ match.venue.name }}
                            <br>
                            {{new Date(match.date_start).getHours()}}:{{new Date(match.date_start).getMinutes()}}</p>
                        </td>
                        <td width="22%">
                            <h4 class="team">{{ match.teama.name }}</h4>
                        </td>
                        <td  width="8%">
                            <img class="rounded team-logo" :src="match.teama.logo_url">
                        </td>
                        <td width="2%">
                            <h2 class="vs">VS</h2>
                        </td>
                        <td width="8%">
                            <img class="rounded team-logo" :src="match.teamb.logo_url">
                        </td>
                        <td width="22%">
                            <h4 class="team">{{ match.teamb.name }}</h4>
                        </td>
                        <td width="18%">
                            <p class="up-date">{{ match.date_start | date }}</p>
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
                            <img class="rounded result-team-logo" :src="result.teama.logo_url">
                        </td>
                        <td width="25%">
                            <h3>{{ result.subtitle }}</h3>
                            <p>{{ result.venue.name }}</p>
                            <p>{{ result.date_start }}</p>
                        </td>
                        <td width="15%">
                            <img class="rounded result-team-logo" :src="result.teamb.logo_url">
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
<style scoped>
.tab-content{
    height: 100px;
}
.tab-content > td {
    text-align: center;
    position: relative;
    padding: 10px 0 10px 0;
}
.status{
    font-size: 12pt;
background-color: #006442;
font-weight: 700;
color: #fff;
padding: 10px;
border-radius: 10px;
position: relative;
z-index: 1;
margin: 0 10px 0 10px;
}
.status::before{
    content: "";
position: absolute;
left: -10px;
top: -4px;
width: 50px;
height: 50px;
background: #006442;
border-radius: 50%;
z-index: -1;
}
.live{
    margin-left: 30%;
    margin-top: 10px;
    color: #F26B23;
}
.upcoming{
    margin-left: 30%;
    margin-top: 10px;
    color: #006442;
}
.team{
    font-weight: 700;
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
.up-date{
    font-weight: 700;
    font-size: 15px;
    color: #006442;
}
.live-date{
    font-weight: 700;
    font-size: 15px;
    color: #F26B23
}
.hr {
    border-bottom: 2px solid #006442;
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
            },
            getStatus(start,end){
                var startDate = new Date(start)
                var endDate = new Date(end)
                var now = new Date()
                if(startDate.getFullYear() == now.getFullYear() && startDate.getMonth() == now.getMonth() && startDate.getDate() == now.getDate() && startDate.getHours() <= now.getHours() && endDate.getHours() >= now.getHours() && startDate.getMinutes() <= now.getMinutes() && endDate.getMinutes() >= now.getMinutes()){
                    return 'Live';
                }else{
                    return 'Upcoming';
                }
            }
        },
    }
</script>
