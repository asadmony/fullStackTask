<template>
<div class="">
    <div class="container border">
        <tabs-menu :tabs="['Live & Upcoming', 'Result']" :selected="selected" @selected="setSelected">
            <tab :isSelected="selected === 'Live & Upcoming'">
                <div class="row">
                    <table>
                        <tr class="tab-content" v-for="match in matches" :key="match.match_id" :class="{tbBorder: matches.length > 1 && match.match_id != matches[matches.length-1].match_id}">
                            <td width="23%">
                                <h5 class="matchname text-left"> <span class="status" :class="{liveStatus: match.status == 3}"> {{ getStatus(match.status) }} </span>  {{ match.subtitle }}</h5>
                                <p class="venue" :class="getStatus(match.status)">
                                {{ match.venue.name }}, {{ match.venue.location }}
                                <br>
                                {{new Date(match.date_start).getUTCHours()}}:{{new Date(match.date_start).getUTCMinutes()}} Local Time</p>
                            </td>
                            <td width="22%">
                                <h4 class="team">{{ match.teama.name }}</h4>
                                <p v-if="match.teama.scores_full">{{ match.teama.scores_full }}</p>
                            </td>
                            <td  width="9%">
                                <img class="rounded team-logo" :src="match.teama.logo_url">
                            </td>
                            <td width="3%">
                                <h2 class="vs" :class="getStatus(match.status)">VS</h2>
                            </td>
                            <td width="9%">
                                <img class="rounded team-logo" :src="match.teamb.logo_url">
                            </td>
                            <td width="22%">
                                <h4 class="team">{{ match.teamb.name }}</h4>
                                <p v-if="match.teamb.scores_full">{{ match.teamb.scores_full }}</p>
                            </td>
                            <td width="12%">
                                <p class="date" :class="getStatus(match.status)">
                                    {{ match.date_start | date }}
                                </p>
                            </td>
                            <span style="height: 3px; background-color: black"></span>
                        </tr>
                    </table>
                </div>
            </tab>
            <tab :isSelected="selected === 'Result'">
                <div class="row">
                    <table>
                        <tr class="tab-content" v-for="result in results" :key="result.match_id" :class="{tbBorder: results.length > 1 && result.match_id != results[results.length-1].match_id}">
                            <td width="20%">
                                <h4 class="team">{{ result.teama.name }}</h4>
                                <p>{{ result.teama.scores_full }}</p>
                            </td>
                            <td width="15%">
                                <img class="rounded result-team-logo" :src="result.teama.logo_url">
                            </td>
                            <td width="25%">
                                <h5 class="matchname">{{ result.subtitle }}</h5>
                                <p>{{ new Date(result.date_start) | date}} - {{ new Date(result.date_end) | date}}<br>
                                {{ result.status_note }}</p>
                            </td>
                            <td width="15%">
                                <img class="rounded result-team-logo" :src="result.teamb.logo_url">
                            </td>
                            <td width="20%">
                                <h4 class="team">{{ result.teamb.name }}</h4>
                                <p>{{ result.teamb.scores_full }}</p>
                            </td>
                            <td width="5%" class="arrow" >
                                <i class="fa fa-long-arrow-right"></i>
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
    padding: 10px 0 15px 0;
    height: 130px;
}
.tbBorder{
    border-bottom: 1px solid #e0e0e0;
}
.tab-content > td {
    text-align: center;
    padding: 10px 0 10px 0;
}
.matchname{
    margin-left: 12px;
    font-weight: 700;
    font-size: 12px;
}
.status{
    font-size: 10pt;
    background-color: #006442;
    font-weight: 700;
    color: #fff;
    padding: 6px 10px 8px 10px ;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    margin: 0 10px 0 10px;
}
.status::before{
    content: "";
    position: absolute;
    left: -10px;
    top: -5px;
    width: 40px;
    height: 40px;
    background: #006442;
    border-radius: 50%;
    z-index: -1;
}
.liveStatus{
    margin-top: 10px;
    background-color: #F26B23 !important;
}
.liveStatus::before{
    background-color: #F26B23  !important;
    top: -5px !important;
}
.venue{
    font-size: 13px;
    padding: 5px 40px 0 40px;
}
.team{
    font-weight: 700;
    padding: 0 10px 0 10px;
}
.team-logo{
    max-width: 60px;
    max-height: 60px;
}
.vs{
    font-weight: 700;
}
.result-team-logo{
    max-width: 80px;
    max-height: 80px;
}
.date{
    font-weight: 700;
    font-size: 15px;
}
.live-date{
    font-weight: 700;
    font-size: 15px;
    color: #F26B23
}
.Live{
    color: #F26B23;
}
.Upcoming{
    color: #006442;
}
.arrow{
    color: #1892ed;
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
                lives : [],
            }
        },
        created() {
            // this.interval = setInterval(() => {
                axios.get('https://rest.entitysport.com/v2/matches/?status=1&token=437214169d9be2a73e91d22f76f68b52')
                .then(response =>{
                    this.matches = response.data.response.items;
                });
                axios.get('https://rest.entitysport.com/v2/matches/?status=3&token=437214169d9be2a73e91d22f76f68b52')
                .then(response =>{
                    response.data.response.items.forEach(element => {
                        this.matches.unshift(element);
                    });
                });

            // }, 30000 );
                axios.get('https://rest.entitysport.com/v2/matches/?status=2&token=437214169d9be2a73e91d22f76f68b52')
                .then(response =>{
                    this.results = response.data.response.items;
                });
        },
        mounted() {
            this.interval = setInterval(() => {
                axios.get('https://rest.entitysport.com/v2/matches/?status=3&token=437214169d9be2a73e91d22f76f68b52')
                .then(response =>{
                    var i = 0
                    response.data.response.items.forEach(element => {
                        this.matches[i].teama.scores_full =element.teama.scores_full
                        this.matches[i].teamb.scores_full =element.teamb.scores_full
                        i++;
                    });

                });
            }, 6000 );
        },
        methods: {
            setSelected(tab) {
                this.selected = tab
            },
            getStatus(value){
                if(value == 3){
                    return 'Live';
                }else{
                    return 'Upcoming';
                }
            }
        },
    }
</script>
