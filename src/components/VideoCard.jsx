import {Link} from "react-router-dom"
import {Typography, Card, CardContent, CardMedia} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl} from "../utils/constants";
import formatDateDiff from "../utils/formatDateDiff";

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
    return (
        <Card sx={{width: {md: '320px', xs: '358px'}, boxShadow: 'none', borderRadius: 0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url}
                           alt={snippet?.title}
                           sx={{width: {sm:'358px',xs:"100%",md:"320px" }, height: 202}}
                />
            </Link>
            <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography className="channel-hv" variant="subtitle1" fontWeight="bold" color="grey">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{fontSize: 12, color: 'grey', ml: '5px'}}/>
                    </Typography>
                </Link>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="grey" sx={{marginTop: {md: "10px"}}}>
                        {formatDateDiff(snippet?.publishTime)}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}
export default VideoCard;