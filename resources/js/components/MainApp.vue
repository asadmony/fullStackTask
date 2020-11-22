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
        // $(document).ready(function(){

		//     $.get("https://rest.entitysport.com/v2/matches?status=2&token=437214169d9be2a73e91d22f76f68b52&fbclid=IwAR1PG8cV7BBLhAlMvFaBy-PVeJSEG5P2j_jQscmklo0QnSjmbGoq-ft0c5Y", function(data, status){
		//       console.log(data);
		//     });

		// });
                axios.get('https://rest.entitysport.com/v2/matches?status=2&token=437214169d9be2a73e91d22f76f68b52')
                .then(response =>{
                    console.log(response)
                    // this.matches = response.data;
                });
                // this.matches = [
                //     {
                //         "match_id": 46388,
                //         "title": "Catalunya vs Badalona Shaheen CC",
                //         "short_title": "CCC vs BSH",
                //         "subtitle": "Match 6",
                //         "format": 17,
                //         "format_str": "T10",
                //         "status": 2,
                //         "status_str": "Completed",
                //         "status_note": "Badalona Shaheen CC won by 7 wickets",
                //         "verified": "false",
                //         "pre_squad": "true",
                //         "odds_available": "false",
                //         "game_state": 0,
                //         "game_state_str": "Default",
                //         "domestic": "1",
                //         "competition": {
                //             "cid": 117038,
                //             "title": "ECS Barcelona T10 Bash",
                //             "abbr": "EBB10",
                //             "type": "tournament",
                //             "category": "domestic",
                //             "match_format": "t10",
                //             "status": "live",
                //             "season": "2020",
                //             "datestart": "2020-11-21",
                //             "dateend": "2020-11-23",
                //             "country": "es",
                //             "total_matches": "12",
                //             "total_rounds": "1",
                //             "total_teams": "4"
                //         },
                //         "teama": {
                //             "team_id": 113423,
                //             "name": "Catalunya",
                //             "short_name": "CCC",
                //             "logo_url": "https://cricket.entitysport.com/assets/uploads/2019/07/Catalunya.png",
                //             "scores_full": "118/3 (10 ov)",
                //             "scores": "118/3",
                //             "overs": "10"
                //         },
                //         "teamb": {
                //             "team_id": 116798,
                //             "name": "Badalona Shaheen CC",
                //             "short_name": "BSH",
                //             "logo_url": "https://cricket.entitysport.com/assets/uploads/2020/10/2113-120x120.png",
                //             "scores_full": "119/3 (8.4 ov)",
                //             "scores": "119/3",
                //             "overs": "8.4"
                //         },
                //         "date_start": "2020-11-22 09:30:00",
                //         "date_end": "2020-11-22 11:30:00",
                //         "timestamp_start": 1606037400,
                //         "timestamp_end": 1606044600,
                //         "venue": {
                //             "venue_id": "475",
                //             "name": "Montjuïc Olympic Ground, Barcelona",
                //             "location": "Barcelona",
                //             "timezone": "-12"
                //         },
                //         "umpires": "",
                //         "referee": "",
                //         "equation": "",
                //         "live": "",
                //         "result": "BSH won by 7 wickets",
                //         "result_type": 2,
                //         "win_margin": "7 wickets",
                //         "winning_team_id": 116798,
                //         "commentary": 1,
                //         "wagon": 0,
                //         "latest_inning_number": 2,
                //         "toss": {
                //             "text": "Badalona Shaheen CC won the toss & elected to field",
                //             "winner": 116798,
                //             "decision": 2
                //         }
                //     },
                //     {
                //         "match_id": 46387,
                //         "title": "Pak I Care vs Catalunya Tigers CC",
                //         "short_title": "PAK vs CTT",
                //         "subtitle": "Match 5",
                //         "format": 17,
                //         "format_str": "T10",
                //         "status": 2,
                //         "status_str": "Completed",
                //         "status_note": "Catalunya Tigers CC won by 5 runs.",
                //         "verified": "true",
                //         "pre_squad": "true",
                //         "odds_available": "false",
                //         "game_state": 0,
                //         "game_state_str": "Default",
                //         "domestic": "1",
                //         "competition": {
                //             "cid": 117038,
                //             "title": "ECS Barcelona T10 Bash",
                //             "abbr": "EBB10",
                //             "type": "tournament",
                //             "category": "domestic",
                //             "match_format": "t10",
                //             "status": "live",
                //             "season": "2020",
                //             "datestart": "2020-11-21",
                //             "dateend": "2020-11-23",
                //             "country": "es",
                //             "total_matches": "12",
                //             "total_rounds": "1",
                //             "total_teams": "4"
                //         },
                //         "teama": {
                //             "team_id": 116974,
                //             "name": "Pak I Care",
                //             "short_name": "PAK",
                //             "logo_url": "https://cricket.entitysport.com/assets/uploads/2020/11/tttttt-120x120.png",
                //             "scores_full": "123/7 (10 ov)",
                //             "scores": "123/7",
                //             "overs": "10"
                //         },
                //         "teamb": {
                //             "team_id": 116802,
                //             "name": "Catalunya Tigers CC",
                //             "short_name": "CTT",
                //             "logo_url": "https://cricket.entitysport.com/assets/uploads/2020/10/2114-120x120.png",
                //             "scores_full": "128/5 (10 ov)",
                //             "scores": "128/5",
                //             "overs": "10"
                //         },
                //         "date_start": "2020-11-22 07:30:00",
                //         "date_end": "2020-11-22 09:30:00",
                //         "timestamp_start": 1606030200,
                //         "timestamp_end": 1606037400,
                //         "venue": {
                //             "venue_id": "475",
                //             "name": "Montjuïc Olympic Ground, Barcelona",
                //             "location": "Barcelona",
                //             "timezone": "-12"
                //         },
                //         "umpires": "",
                //         "referee": "",
                //         "equation": "",
                //         "live": "",
                //         "result": "CTT won by 5 runs.",
                //         "result_type": 2,
                //         "win_margin": "5 runs.",
                //         "winning_team_id": 116802,
                //         "commentary": 1,
                //         "wagon": 0,
                //         "latest_inning_number": 2,
                //         "toss": {
                //             "text": "Catalunya Tigers CC won the toss & elected to bat",
                //             "winner": 116802,
                //             "decision": 1
                //         }
                //     },
                // ];

        },
        methods: {
            setSelected(tab) {
                this.selected = tab
            }
        },
    }
</script>
