import {Stack, Box} from '@mui/material'
import {ChannelCard, VideoCard} from "./index";

const Videos = ({videos,direction="row"}) => {


    if (!videos?.length) return "Loading...";
    return (
        <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
            {
               videos ? videos.map((item, id) => {
                    return (<Box key={id}>
                        {item.id.videoId && <VideoCard video={item}/>}
                        {item.id.channelId && <ChannelCard channelDetail={item}/>}
                    </Box>)
                }):<div style={{color:"red"}}>Related Videos Not Found</div>
            }
        </Stack>
    )
}
export default Videos;