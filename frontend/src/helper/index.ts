import dayjs from "dayjs";

export const scheduleOrScore = (info) => {

    switch(info.status) {
        case 'FINISHED':
            return `${info.score.fullTime.home} - ${info.score.fullTime.away}`;
        case 'IN_PLAY':
            return `${info.score.halfTime.home} - ${info.score.halfTime.away}`
        case 'SCHEDULED':
        case 'TIMED':
            return dayjs(info.utcDate).format('H-mm');
        case 'PAUSED':
            return 'break'

    }
}
