import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";

const formatTimeStamp = (timestamp) => {
    const date = fromUnixTime(timestamp);
    const timeAgo = formatDistanceToNowStrict(date, { addSuffix: true });
    return timeAgo;
}
export default formatTimeStamp;
